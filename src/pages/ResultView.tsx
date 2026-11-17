import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Play,
  RefreshCw,
  Target,
} from 'lucide-react';
import { QuestionRenderer } from '../components/QuestionRenderer';
import { JUKNIS_SUBCOMPETENCIES } from '../data/juknisReference';
import { evaluateQuestion } from '../engine/scoring';
import type { ExamResultSummary } from '../types/exam';

interface ResultViewProps {
  result: ExamResultSummary;
  onBackHome: () => void;
  onStartNewOfficial: () => void;
  onDrillMissed: (missedIds: string[]) => void;
}

type ReviewFilter = 'all' | 'wrong' | 'flagged' | 'correct';

function formatElapsed(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m} mnt ${s} dtk`;
}

function getToneClass(pct: number): string {
  if (pct >= 75) return 'is-success';
  if (pct >= 55) return 'is-accent';
  return 'is-danger';
}

export function ResultView({
  result,
  onBackHome,
  onStartNewOfficial,
  onDrillMissed,
}: ResultViewProps) {
  const [filter, setFilter] = useState<ReviewFilter>(
    result.missedIds.length > 0 ? 'wrong' : 'all'
  );

  const subDescMap = useMemo(
    () => new Map(JUKNIS_SUBCOMPETENCIES.map((s) => [s.code, s])),
    []
  );
  const flaggedSet = useMemo(() => new Set(result.flaggedIds), [result.flaggedIds]);

  const evaluatedSlots = useMemo(() => {
    return result.slots.map((slot, index) => {
      const ans = result.answers[slot.question.id];
      const ev = evaluateQuestion(slot.question, ans);
      return {
        slot,
        index,
        ans,
        ev,
        isFlagged: flaggedSet.has(slot.question.id),
      };
    });
  }, [result, flaggedSet]);

  const visibleReviews = evaluatedSlots.filter((item) => {
    if (filter === 'wrong') return !item.ev.strictCorrect;
    if (filter === 'correct') return item.ev.strictCorrect;
    if (filter === 'flagged') return item.isFlagged;
    return true;
  });

  const pckPct = result.pckTotal > 0 ? Math.round((result.pckCorrect / result.pckTotal) * 100) : 0;
  const puPct = result.puTotal > 0 ? Math.round((result.puCorrect / result.puTotal) * 100) : 0;

  return (
    <main className="main-container">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '1.15rem',
        }}
      >
        <div>
          <span className="badge badge-primary" style={{ marginBottom: '0.4rem' }}>
            Laporan Diagnostik UTBK UKPPPG 2026
          </span>
          <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800 }}>{result.title}</h1>
        </div>

        <div style={{ display: 'flex', gap: '0.55rem', flexWrap: 'wrap' }}>
          <button type="button" className="btn btn-secondary" onClick={onBackHome}>
            <ArrowLeft size={16} />
            Beranda
          </button>
          {result.missedIds.length > 0 && (
            <button
              type="button"
              className="btn btn-accent is-active"
              onClick={() => onDrillMissed(result.missedIds)}
            >
              <Target size={16} />
              Latih Ulang {result.missedIds.length} Soal Salah
            </button>
          )}
          <button type="button" className="btn btn-primary" onClick={onStartNewOfficial}>
            <RefreshCw size={16} />
            Simulasi Acak Baru (80 Soal)
          </button>
        </div>
      </div>

      {/* Ringkasan KPI Skor */}
      <section className="result-summary-grid" aria-label="Ringkasan hasil ujian">
        <div className="stat-card">
          <span className="stat-label">Skor Ketat BPPP (0–100)</span>
          <span
            className="stat-value"
            style={{
              color:
                result.strictScore >= 75
                  ? 'var(--color-success)'
                  : result.strictScore >= 55
                    ? 'var(--color-accent)'
                    : 'var(--color-danger)',
            }}
          >
            {result.strictScore}
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
            {result.strictCorrectCount} dari {result.totalQuestions} soal tepat penuh
          </span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Indeks Diagnostik Parsial</span>
          <span className="stat-value">{result.weightedScore}%</span>
          <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
            Menghitung poin per pernyataan PGK yang benar
          </span>
        </div>

        <div className="stat-card">
          <span className="stat-label">PCK Teknik Mesin</span>
          <span className="stat-value">
            {result.pckTotal > 0 ? `${result.pckCorrect}/${result.pckTotal}` : '—'}
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
            {result.pckTotal > 0 ? `${pckPct}% akurat` : 'Tidak ada soal PCK pada sesi ini'}
          </span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Pedagogi Umum &amp; Waktu</span>
          <span className="stat-value">
            {result.puTotal > 0 ? `${result.puCorrect}/${result.puTotal}` : '—'}
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
            Durasi pengerjaan: {formatElapsed(result.elapsedSeconds)}
          </span>
        </div>
      </section>

      {/* Breakdown Rumpun + Bentuk Soal & Pemetaan Juknis */}
      <div className="result-breakdown-grid">
        <section className="panel">
          <h2 className="section-heading">Performa per Rumpun &amp; Bentuk Soal</h2>
          <p className="section-sub">
            Ukur ketahanan pada soal PGK Kategori dan PGK MCMA yang menuntut ketelitian penuh.
          </p>

          {result.pckTotal > 0 && (
            <div className="bar-row">
              <div className="bar-row-head">
                <span>PCK Teknik Mesin SMK</span>
                <span className="mono">
                  {result.pckCorrect}/{result.pckTotal} ({pckPct}%)
                </span>
              </div>
              <div className="progress-track">
                <div className={`progress-fill ${getToneClass(pckPct)}`} style={{ width: `${pckPct}%` }} />
              </div>
            </div>
          )}

          {result.puTotal > 0 && (
            <div className="bar-row">
              <div className="bar-row-head">
                <span>Pedagogi Umum (PU)</span>
                <span className="mono">
                  {result.puCorrect}/{result.puTotal} ({puPct}%)
                </span>
              </div>
              <div className="progress-track">
                <div className={`progress-fill ${getToneClass(puPct)}`} style={{ width: `${puPct}%` }} />
              </div>
            </div>
          )}

          {(
            [
              ['PG', 'Pilihan Ganda Sederhana (PG)'],
              ['PGK_KATEGORI', 'PGK Kategori (Tabel Pernyataan)'],
              ['PGK_MCMA', 'PGK MCMA (Multi Jawaban)'],
            ] as const
          ).map(([key, label]) => {
            const entry = result.byType[key];
            if (entry.total === 0) return null;
            const pct = Math.round((entry.correct / entry.total) * 100);
            return (
              <div className="bar-row" key={key}>
                <div className="bar-row-head">
                  <span>{label}</span>
                  <span className="mono">
                    {entry.correct}/{entry.total} ({pct}%)
                  </span>
                </div>
                <div className="progress-track">
                  <div className={`progress-fill ${getToneClass(pct)}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}

          <h3 style={{ margin: '1.15rem 0 0.45rem', fontSize: '0.96rem', fontWeight: 800 }}>
            Rincian Topik Materi
          </h3>
          {result.byTopic.map((tp) => {
            const pct = Math.round((tp.correct / tp.total) * 100);
            return (
              <div className="bar-row" key={tp.topic}>
                <div className="bar-row-head">
                  <span>
                    {tp.topic}{' '}
                    <span style={{ color: 'var(--ink-muted)', fontSize: '0.76rem' }}>
                      ({tp.bank})
                    </span>
                  </span>
                  <span className="mono">
                    {tp.correct}/{tp.total} ({pct}%)
                  </span>
                </div>
                <div className="progress-track">
                  <div className={`progress-fill ${getToneClass(pct)}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </section>

        <section className="panel">
          <h2 className="section-heading">Pemetaan Subkompetensi Lampiran 4 Juknis</h2>
          <p className="section-sub">
            Fokuskan sesi drill berikutnya pada subkompetensi dengan persentase di bawah 70%.
          </p>

          {result.bySubcompetency.map((sub) => {
            const pct = Math.round((sub.correct / sub.total) * 100);
            const meta = subDescMap.get(sub.code);
            return (
              <div className="bar-row" key={sub.code}>
                <div className="bar-row-head">
                  <span>
                    <span className="mono" style={{ fontWeight: 800, marginRight: '0.35rem' }}>
                      {sub.code}
                    </span>
                    {meta ? meta.shortTitle : sub.kompetensi}
                  </span>
                  <span className="mono">
                    {sub.correct}/{sub.total} ({pct}%)
                  </span>
                </div>
                <div className="progress-track">
                  <div className={`progress-fill ${getToneClass(pct)}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </section>
      </div>

      {/* Daftar Review & Pembahasan */}
      <section className="panel" aria-labelledby="review-section-title">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '1rem',
          }}
        >
          <div>
            <h2 id="review-section-title" className="section-heading">
              Telaah Soal &amp; Pembahasan Lengkap
            </h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              Menampilkan {visibleReviews.length} dari {evaluatedSlots.length} soal.
            </p>
          </div>

          <div className="segmented-pills" role="tablist" aria-label="Filter telaah pembahasan">
            {(
              [
                ['wrong', `Salah / Kosong (${result.missedIds.length})`],
                ['all', `Semua (${evaluatedSlots.length})`],
                ['flagged', `Ragu-Ragu (${result.flaggedIds.length})`],
                ['correct', `Benar (${result.strictCorrectCount})`],
              ] as [ReviewFilter, string][]
            ).map(([k, label]) => (
              <button
                key={k}
                type="button"
                role="tab"
                aria-selected={filter === k}
                className={`pill-btn ${filter === k ? 'is-active' : ''}`}
                onClick={() => setFilter(k)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {visibleReviews.length === 0 ? (
          <div
            style={{
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-subtle)',
              textAlign: 'center',
              color: 'var(--ink-secondary)',
            }}
          >
            <CheckCircle2 size={24} style={{ marginBottom: '0.4rem', color: 'var(--color-success)' }} />
            <div style={{ fontWeight: 700 }}>Tidak ada soal pada kategori filter ini.</div>
            <div style={{ fontSize: '0.84rem', marginTop: '0.25rem' }}>
              Pilih tab &ldquo;Semua&rdquo; untuk membaca seluruh pembahasan, atau mulai simulasi acak baru.
            </div>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginTop: '0.85rem' }}
              onClick={onStartNewOfficial}
            >
              <Play size={15} />
              Mulai Simulasi Acak Baru
            </button>
          </div>
        ) : (
          visibleReviews.map((item) => (
            <article key={item.slot.question.id} className="review-item">
              <QuestionRenderer
                question={item.slot.question}
                index={item.index}
                total={evaluatedSlots.length}
                answer={item.ans}
                isFlagged={item.isFlagged}
                showFeedback={true}
                onChangeAnswer={() => {}}
              />
            </article>
          ))
        )}
      </section>
    </main>
  );
}
