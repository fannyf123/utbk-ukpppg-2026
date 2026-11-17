import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckSquare,
  Clock,
  Layers,
  Play,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
  Trash2,
} from 'lucide-react';
import { getBankSummary, getBankTopics } from '../data/questionBank';
import { evaluateQuestion } from '../engine/scoring';
import type {
  DrillConfig,
  ExamResultSummary,
  ExamSession,
  MasteryRecord,
  QuestionBank,
  QuestionType,
} from '../types/exam';

interface HomeViewProps {
  activeSession: ExamSession | null;
  history: ExamResultSummary[];
  mastery: Record<string, MasteryRecord>;
  onStartOfficial: (mixBanksOrder: boolean) => void;
  onStartDrill: (config: DrillConfig) => void;
  onResumeActive: () => void;
  onDiscardActive: () => void;
  onViewHistoryResult: (result: ExamResultSummary) => void;
  onResetProgress: () => void;
  onOpenGuide: () => void;
}

export function HomeView({
  activeSession,
  history,
  mastery,
  onStartOfficial,
  onStartDrill,
  onResumeActive,
  onDiscardActive,
  onViewHistoryResult,
  onResetProgress,
  onOpenGuide,
}: HomeViewProps) {
  const bankSummary = useMemo(() => getBankSummary(), []);
  const [mixOrder, setMixOrder] = useState(false);

  const [drillBank, setDrillBank] = useState<'ALL' | QuestionBank>('ALL');
  const [drillTopic, setDrillTopic] = useState<string>('ALL');
  const [drillType, setDrillType] = useState<'ALL' | QuestionType>('ALL');
  const [drillCount, setDrillCount] = useState<number>(20);
  const [instantFeedback, setInstantFeedback] = useState<boolean>(true);
  const [confirmReset, setConfirmReset] = useState(false);

  const availableTopics = useMemo(() => getBankTopics(drillBank), [drillBank]);

  const seenCount = useMemo(
    () => Object.values(mastery).filter((m) => m.seenCount > 0).length,
    [mastery]
  );
  const masteredCount = useMemo(
    () => Object.values(mastery).filter((m) => m.lastCorrect).length,
    [mastery]
  );

  const activeAnswered = activeSession
    ? activeSession.slots.filter((s) =>
        evaluateQuestion(s.question, activeSession.answers[s.question.id]).isComplete
      ).length
    : 0;

  return (
    <main className="main-container">
      {activeSession && (
        <section className="resume-banner" aria-label="Sesi tryout tersimpan">
          <div>
            <h2>Sesi Aktif Belum Dikumpulkan: {activeSession.title}</h2>
            <p>
              Progres tersimpan otomatis ({activeAnswered}/{activeSession.slots.length} soal terisi ·{' '}
              {activeSession.flaggedIds.length} ditandai ragu-ragu).
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-primary" onClick={onResumeActive}>
              <Play size={16} />
              Lanjutkan Sesi
            </button>
            <button type="button" className="btn btn-secondary" onClick={onDiscardActive}>
              Buang Sesi
            </button>
          </div>
        </section>
      )}

      <div className="home-grid">
        {/* Panel Simulasi Resmi UTBK */}
        <section className="panel hero-panel" aria-labelledby="hero-title">
          <div className="hero-kicker">
            <ShieldCheck size={16} />
            <span>Simulasi Resmi Sesuai Juknis UKPPPG 2026</span>
          </div>

          <h1 id="hero-title" className="hero-title">
            Tryout UTBK UKPPPG Calon Guru — Teknik Mesin SMK
          </h1>

          <p className="hero-desc">
            Komposisi soal disusun acak setiap kali Anda memulai simulasi baru dengan algoritma{' '}
            <em>prioritas tanpa pengulangan</em>: soal yang belum pernah dikerjakan dan soal yang
            masih keliru dipanggil lebih dulu, disertai pengacakan posisi opsi dan pernyataan tabel.
          </p>

          <div className="spec-strip">
            <div className="spec-item">
              <span className="spec-val">50</span>
              <span className="spec-label">PCK Teknik Mesin</span>
            </div>
            <div className="spec-item">
              <span className="spec-val">30</span>
              <span className="spec-label">Pedagogi Umum</span>
            </div>
            <div className="spec-item">
              <span className="spec-val">150&apos;</span>
              <span className="spec-label">Timer Hitung Mundur</span>
            </div>
            <div className="spec-item">
              <span className="spec-val">{bankSummary.total}</span>
              <span className="spec-label">Total Bank Soal</span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.45rem',
              fontSize: '0.86rem',
              color: 'var(--ink-secondary)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <CheckSquare size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              <span>
                Mencakup seluruh 3 bentuk soal Juknis: <strong>PG ({bankSummary.byType.PG})</strong>,{' '}
                <strong>PGK Kategori ({bankSummary.byType.PGK_KATEGORI})</strong>, dan{' '}
                <strong>PGK MCMA ({bankSummary.byType.PGK_MCMA})</strong>.
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Clock size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              <span>
                Auto-save lokal di browser—aman jika ter-refresh tanpa memutus sisa waktu mundur.
              </span>
            </div>
          </div>

          <label className="check-row">
            <input
              type="checkbox"
              checked={mixOrder}
              onChange={(e) => setMixOrder(e.target.checked)}
            />
            <span>Acak campur urutan nomor PCK &amp; Pedagogi Umum dalam 1–80</span>
          </label>

          <div className="hero-cta-row">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => onStartOfficial(mixOrder)}
            >
              <Play size={18} />
              Mulai Simulasi Resmi (80 Soal)
            </button>
            <button type="button" className="btn btn-secondary btn-lg" onClick={onOpenGuide}>
              <BookOpen size={17} />
              Kisi-Kisi &amp; Tata Tertib
            </button>
          </div>
        </section>

        {/* Panel Mode Drill Terfokus */}
        <section className="panel" aria-labelledby="drill-title">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.3rem' }}>
            <SlidersHorizontal size={18} style={{ color: 'var(--color-primary)' }} />
            <h2 id="drill-title" className="section-heading" style={{ margin: 0 }}>
              Mode Drill Topik &amp; Bentuk Soal
            </h2>
          </div>
          <p className="section-sub">
            Latih kelemahan spesifik seperti PGK Kategori/MCMA, Metrologi, CNC, PMA Vokasi, atau SEL.
          </p>

          <div className="form-stack">
            <div className="field-group">
              <label>Rumpun Soal</label>
              <div className="segmented-pills">
                {(
                  [
                    ['ALL', `Semua (${bankSummary.total})`],
                    ['PCK', `PCK Mesin (${bankSummary.pck})`],
                    ['PU', `Pedagogi (${bankSummary.pu})`],
                  ] as const
                ).map(([val, label]) => (
                  <button
                    key={val}
                    type="button"
                    className={`pill-btn ${drillBank === val ? 'is-active' : ''}`}
                    onClick={() => {
                      setDrillBank(val);
                      setDrillTopic('ALL');
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="field-group">
              <label htmlFor="topic-select">Topik Bahasan</label>
              <select
                id="topic-select"
                className="select-input"
                value={drillTopic}
                onChange={(e) => setDrillTopic(e.target.value)}
              >
                <option value="ALL">Semua Topik dalam Rumpun Terpilih</option>
                {availableTopics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="field-group">
              <label htmlFor="type-select">Bentuk Soal</label>
              <select
                id="type-select"
                className="select-input"
                value={drillType}
                onChange={(e) => setDrillType(e.target.value as 'ALL' | QuestionType)}
              >
                <option value="ALL">Campuran (PG, PGK Kategori, PGK MCMA)</option>
                <option value="PG">PG Sederhana Saja</option>
                <option value="PGK_KATEGORI">PGK Kategori (Tabel Benar/Salah · Sesuai/Tidak)</option>
                <option value="PGK_MCMA">PGK MCMA (Pilih Lebih Dari Satu)</option>
              </select>
            </div>

            <div className="field-group">
              <label>Jumlah Soal</label>
              <div className="segmented-pills">
                {[10, 20, 30, 50].map((num) => (
                  <button
                    key={num}
                    type="button"
                    className={`pill-btn ${drillCount === num ? 'is-active' : ''}`}
                    onClick={() => setDrillCount(num)}
                  >
                    {num} Soal
                  </button>
                ))}
              </div>
            </div>

            <label className="check-row">
              <input
                type="checkbox"
                checked={instantFeedback}
                onChange={(e) => setInstantFeedback(e.target.checked)}
              />
              <span>Mode Belajar (tampilkan tombol Cek Jawaban + Pembahasan per soal)</span>
            </label>

            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={() =>
                onStartDrill({
                  bank: drillBank,
                  topic: drillTopic,
                  type: drillType,
                  count: drillCount,
                  instantFeedback,
                })
              }
            >
              <Layers size={17} />
              Mulai Drill Acak Sekarang
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </div>

      {/* Seksi Statistik Bank & Riwayat Percobaan */}
      <div className="home-secondary">
        <section className="panel" aria-labelledby="mastery-title">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
            <h2 id="mastery-title" className="section-heading">
              Cakupan Bank Soal &amp; Penguasaan
            </h2>
            {seenCount > 0 && !confirmReset && (
              <button
                type="button"
                className="btn btn-sm btn-ghost"
                onClick={() => setConfirmReset(true)}
              >
                <RotateCcw size={14} />
                Reset Progres
              </button>
            )}
          </div>
          <p className="section-sub">
            Total bank memuat {bankSummary.pck} soal PCK Teknik Mesin dan {bankSummary.pu} soal Pedagogi Umum (sumber LPTK UST &amp; kisi-kisi Juknis 2026).
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div>
              <div className="bar-row-head">
                <span>Soal Pernah Ditemui</span>
                <span className="mono">
                  {seenCount} / {bankSummary.total}
                </span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${Math.round((seenCount / bankSummary.total) * 100)}%` }}
                />
              </div>
            </div>

            <div>
              <div className="bar-row-head">
                <span>Terjawab Tepat Terakhir Kali</span>
                <span className="mono">
                  {masteredCount} / {bankSummary.total}
                </span>
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill is-success"
                  style={{ width: `${Math.round((masteredCount / bankSummary.total) * 100)}%` }}
                />
              </div>
            </div>
          </div>

          {confirmReset && (
            <div
              style={{
                marginTop: '0.9rem',
                padding: '0.75rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--color-danger-soft)',
                border: '1px solid var(--color-danger-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontSize: '0.84rem' }}>
                Hapus seluruh riwayat skor &amp; status penguasaan lokal?
              </span>
              <div style={{ display: 'flex', gap: '0.45rem' }}>
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => {
                    onResetProgress();
                    setConfirmReset(false);
                  }}
                >
                  <Trash2 size={14} />
                  Ya, Hapus
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-secondary"
                  onClick={() => setConfirmReset(false)}
                >
                  Batal
                </button>
              </div>
            </div>
          )}
        </section>

        <section className="panel" aria-labelledby="history-title">
          <h2 id="history-title" className="section-heading">
            Riwayat Hasil Tryout Terakhir
          </h2>
          <p className="section-sub">
            Klik sesi yang memiliki detail tersimpan untuk meninjau kembali pembahasan &amp; subkompetensi.
          </p>

          {history.length === 0 ? (
            <div
              style={{
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-subtle)',
                fontSize: '0.88rem',
                color: 'var(--ink-muted)',
              }}
            >
              Belum ada riwayat pengerjaan selesai. Mulai Simulasi Resmi 80 Soal atau Mode Drill untuk melihat analitik pertama Anda.
            </div>
          ) : (
            <div className="history-list">
              {history.slice(0, 5).map((item) => {
                const canInspect = item.slots && item.slots.length > 0;
                return (
                  <div key={item.id} className="history-row">
                    <div className="history-meta">
                      <span className="history-title">{item.title}</span>
                      <span className="history-date">
                        {new Date(item.completedAt).toLocaleString('id-ID', {
                          dateStyle: 'medium',
                          timeStyle: 'short',
                        })}{' '}
                        · {item.strictCorrectCount}/{item.totalQuestions} benar
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span
                        className={`badge mono ${
                          item.strictScore >= 75
                            ? 'badge-success'
                            : item.strictScore >= 55
                              ? 'badge-accent'
                              : 'badge-danger'
                        }`}
                      >
                        Skor {item.strictScore}
                      </span>
                      {canInspect && (
                        <button
                          type="button"
                          className="btn btn-sm btn-secondary"
                          onClick={() => onViewHistoryResult(item)}
                        >
                          Telaah
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
