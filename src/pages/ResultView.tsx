import { useMemo, useState } from 'react';
import { ResultDialChart } from '../components/PrecisionVisuals';
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
  if (pct >= 75) return '';
  if (pct >= 55) return 'is-warn';
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
    <main className="result-wrap view-enter">
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '0.85rem',
          flexWrap: 'wrap',
          marginBottom: '1.25rem',
        }}
      >
        <div>
          <div className="stage-kicker">LAPORAN DIAGNOSTIK UTBK UKPPPG 2026</div>
          <h1
            style={{
              margin: '0.25rem 0 0',
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)',
              fontWeight: 700,
            }}
          >
            {result.title}
          </h1>
        </div>

        <div style={{ display: 'flex', gap: '0.55rem', flexWrap: 'wrap' }}>
          <button type="button" className="btn" onClick={onBackHome}>
            Beranda
          </button>
          {result.missedIds.length > 0 && (
            <button
              type="button"
              className="btn btn-signal"
              onClick={() => onDrillMissed(result.missedIds)}
            >
              Latih Ulang {result.missedIds.length} Soal Salah
            </button>
          )}
          <button type="button" className="btn btn-primary" onClick={onStartNewOfficial}>
            Simulasi Acak Baru (80 Soal)
          </button>
        </div>
      </div>

      <section className="result-hero-strip" aria-label="Ringkasan hasil ujian">
        <ResultDialChart
          score={result.strictScore}
          label="SKOR KETAT BPPP"
          sublabel={`${result.strictCorrectCount} dari ${result.totalQuestions} tepat penuh (parsial ${result.weightedScore}%)`}
        />

        <div className="kpi-cell">
          <span className="kpi-cell-lbl">PCK TEKNIK MESIN</span>
          <span className="kpi-cell-num">
            {result.pckTotal > 0 ? `${result.pckCorrect}/${result.pckTotal}` : '-'}
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--ink-secondary)' }}>
            {result.pckTotal > 0 ? `${pckPct}% akurat` : 'Tidak diujikan pada sesi ini'}
          </span>
        </div>

        <div className="kpi-cell">
          <span className="kpi-cell-lbl">PEDAGOGI UMUM (PU)</span>
          <span className="kpi-cell-num">
            {result.puTotal > 0 ? `${result.puCorrect}/${result.puTotal}` : '-'}
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--ink-secondary)' }}>
            {result.puTotal > 0 ? `${puPct}% akurat` : 'Tidak diujikan pada sesi ini'}
          </span>
        </div>

        <div className="kpi-cell">
          <span className="kpi-cell-lbl">DURASI PENGERJAAN</span>
          <span className="kpi-cell-num" style={{ fontSize: '1.25rem' }}>
            {formatElapsed(result.elapsedSeconds)}
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--ink-secondary)' }}>
            Ragu-ragu tercatat: {result.flaggedIds.length} soal
          </span>
        </div>
      </section>

      <div className="result-breakdown-grid">
        <section className="flat-panel">
          <h2
            style={{
              margin: '0 0 0.25rem',
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem',
              fontWeight: 700,
            }}
          >
            Performa per Rumpun &amp; Bentuk Soal
          </h2>
          <p style={{ margin: '0 0 0.9rem', fontSize: '0.84rem', color: 'var(--ink-muted)' }}>
            Ukur ketahanan pada PGK Kategori dan PGK MCMA yang mensyaratkan ketelitian penuh.
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

          <h3
            style={{
              margin: '1.15rem 0 0.45rem',
              fontFamily: 'var(--font-display)',
              fontSize: '0.94rem',
              fontWeight: 700,
            }}
          >
            Rincian Topik Materi
          </h3>
          {result.byTopic.map((tp) => {
            const pct = Math.round((tp.correct / tp.total) * 100);
            return (
              <div className="bar-row" key={tp.topic}>
                <div className="bar-row-head">
                  <span>
                    {tp.topic}{' '}
                    <span className="mono" style={{ color: 'var(--ink-muted)', fontSize: '0.73rem' }}>
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

        <section className="flat-panel">
          <h2
            style={{
              margin: '0 0 0.25rem',
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem',
              fontWeight: 700,
            }}
          >
            Pemetaan Subkompetensi Lampiran 4 Juknis
          </h2>
          <p style={{ margin: '0 0 0.9rem', fontSize: '0.84rem', color: 'var(--ink-muted)' }}>
            Prioritaskan latihan lanjutan pada subkompetensi di bawah 70%.
          </p>

          {result.bySubcompetency.map((sub) => {
            const pct = Math.round((sub.correct / sub.total) * 100);
            const meta = subDescMap.get(sub.code);
            return (
              <div className="bar-row" key={sub.code}>
                <div className="bar-row-head">
                  <span>
                    <span className="mono" style={{ fontWeight: 700, marginRight: '0.35rem' }}>
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

      <section className="flat-panel" aria-labelledby="review-section-title">
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
            <h2
              id="review-section-title"
              style={{
                margin: '0 0 0.2rem',
                fontFamily: 'var(--font-display)',
                fontSize: '1.08rem',
                fontWeight: 700,
              }}
            >
              Telaah Soal &amp; Pembahasan Lengkap
            </h2>
            <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--ink-muted)' }}>
              Menampilkan {visibleReviews.length} dari {evaluatedSlots.length} soal.
            </p>
          </div>

          <div className="seg-pills" role="tablist" aria-label="Filter telaah pembahasan">
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
                className={`seg-btn ${filter === k ? 'is-active' : ''}`}
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
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--bg-canvas)',
              border: '1px dashed var(--border-line)',
              textAlign: 'center',
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: '0.3rem' }}>
              Tidak ada soal pada kategori filter ini.
            </div>
            <div style={{ fontSize: '0.84rem', color: 'var(--ink-muted)', marginBottom: '0.9rem' }}>
              Pilih tab &ldquo;Semua&rdquo; untuk membaca seluruh pembahasan, atau mulai simulasi acak baru.
            </div>
            <button type="button" className="btn btn-primary" onClick={onStartNewOfficial}>
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
