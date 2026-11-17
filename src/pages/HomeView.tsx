import { useMemo, useState } from 'react';
import { RibbonMarquee, TapeStrip } from '../components/TactilePrimitives';
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

const QUICK_DRILLS: { num: string; label: string; config: DrillConfig }[] = [
  {
    num: '01',
    label: 'Pemrograman CNC & Simulator',
    config: {
      bank: 'PCK',
      topic: 'Pemrograman CNC & Simulator',
      type: 'ALL',
      count: 11,
      instantFeedback: true,
    },
  },
  {
    num: '02',
    label: 'Metrologi Presisi & Pengukuran',
    config: {
      bank: 'PCK',
      topic: 'Metrologi Presisi & Pengukuran',
      type: 'ALL',
      count: 11,
      instantFeedback: true,
    },
  },
  {
    num: '03',
    label: 'K3LH & Teaching Factory',
    config: {
      bank: 'PCK',
      topic: 'K3LH & Teaching Factory',
      type: 'ALL',
      count: 11,
      instantFeedback: true,
    },
  },
  {
    num: '04',
    label: 'Khusus PGK Kategori (Benar/Salah)',
    config: {
      bank: 'ALL',
      topic: 'ALL',
      type: 'PGK_KATEGORI',
      count: 20,
      instantFeedback: true,
      customTitle: 'Drill PGK Kategori (Tabel Pernyataan)',
    },
  },
  {
    num: '05',
    label: 'Khusus PGK MCMA (Multi Jawaban)',
    config: {
      bank: 'ALL',
      topic: 'ALL',
      type: 'PGK_MCMA',
      count: 20,
      instantFeedback: true,
      customTitle: 'Drill PGK MCMA (Multi Jawaban)',
    },
  },
];

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
    <main className="main-wrap">
      {/* Seksi 1: Papan Kerja Utama (Warm Paper Desk + Tactile Ticket & Sticky Checklist) */}
      <section className="desk-hero-band" aria-labelledby="hero-title">
        <div className="container">
          {activeSession && (
            <div className="resume-strip" role="region" aria-label="Sesi tryout tersimpan">
              <div>
                <h2>Sesi Aktif Belum Dikumpulkan: {activeSession.title}</h2>
                <p>
                  Progres tersimpan otomatis ({activeAnswered}/{activeSession.slots.length} soal
                  terisi · {activeSession.flaggedIds.length} ditandai ragu-ragu).
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button type="button" className="btn btn-ink" onClick={onResumeActive}>
                  Lanjutkan Sesi
                </button>
                <button type="button" className="btn" onClick={onDiscardActive}>
                  Buang Sesi
                </button>
              </div>
            </div>
          )}

          <div className="hero-layout">
            <div className="hero-card grain-surface">
              <TapeStrip kind="masking" label="Juknis 2026" />

              <div className="hero-subline">Bidang Studi Teknik Mesin SMK · Simulasi CBT</div>
              <h1 id="hero-title" className="hero-headline">
                Tryout UTBK UKPPPG Calon Guru 2026
              </h1>
              <p className="hero-lead">
                Setiap mulai simulasi baru, sistem mengacak soal dari bank {bankSummary.total} butir
                dengan prioritas soal yang belum dikerjakan atau masih salah, sekaligus mengacak
                posisi opsi serta baris pernyataan tabel.
              </p>

              <div className="work-ticket" aria-label="Spesifikasi ujian resmi">
                <div className="ticket-cell">
                  <span className="ticket-num">50</span>
                  <span className="ticket-lbl">PCK Mesin</span>
                </div>
                <div className="ticket-cell">
                  <span className="ticket-num">30</span>
                  <span className="ticket-lbl">Pedagogi</span>
                </div>
                <div className="ticket-cell">
                  <span className="ticket-num">150&apos;</span>
                  <span className="ticket-lbl">Durasi</span>
                </div>
                <div className="ticket-cell">
                  <span className="ticket-num">{bankSummary.total}</span>
                  <span className="ticket-lbl">Bank Soal</span>
                </div>
              </div>

              <label className="check-row">
                <input
                  type="checkbox"
                  checked={mixOrder}
                  onChange={(e) => setMixOrder(e.target.checked)}
                />
                <span>Acak campur urutan nomor PCK &amp; Pedagogi Umum (nomor 1 s.d. 80)</span>
              </label>

              <div className="cta-row">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => onStartOfficial(mixOrder)}
                >
                  Mulai Simulasi Resmi (80 Soal)
                </button>
                <button type="button" className="btn btn-lg" onClick={onOpenGuide}>
                  Kisi-Kisi &amp; Tata Tertib
                </button>
              </div>
            </div>

            <div className="desk-right-stack">
              <div className="sticky-note grain-surface">
                <TapeStrip kind="clear" label="TUK UST" peelable />
                <h2 className="sticky-heading">Checklist Ruang Ujian</h2>
                <ul className="sticky-list">
                  <li>Hadir di lokasi TUK maks. 60 menit sebelum mulai</li>
                  <li>Bukan jeans/kaus, wajib bersepatu tertutup</li>
                  <li>PG ({bankSummary.byType.PG}), PGK Kategori ({bankSummary.byType.PGK_KATEGORI}), MCMA ({bankSummary.byType.PGK_MCMA})</li>
                  <li>Timer tersimpan otomatis jika halaman di-refresh</li>
                </ul>
                <p className="sticky-note-tip">Klik selotip transparan di atas untuk mengelupas.</p>
              </div>

              <div className="paper-card grain-surface" aria-labelledby="mastery-title">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.65rem',
                  }}
                >
                  <h2
                    id="mastery-title"
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                    }}
                  >
                    Rekam Penguasaan Bank
                  </h2>
                  {seenCount > 0 && !confirmReset && (
                    <button
                      type="button"
                      className="btn btn-sm btn-ghost"
                      onClick={() => setConfirmReset(true)}
                    >
                      Reset Progres
                    </button>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div>
                    <div className="bar-row-head">
                      <span>Soal Pernah Ditemui</span>
                      <span className="mono">
                        {seenCount} / {bankSummary.total}
                      </span>
                    </div>
                    <div className="progress-track">
                      <div
                        className="progress-fill is-warn"
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
                        className="progress-fill"
                        style={{
                          width: `${Math.round((masteredCount / bankSummary.total) * 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {confirmReset && (
                  <div
                    style={{
                      marginTop: '0.85rem',
                      padding: '0.7rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--accent-danger-soft)',
                      border: '1.5px solid var(--border-ink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span style={{ fontSize: '0.84rem', fontWeight: 600 }}>
                      Hapus seluruh riwayat lokal?
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
                        Ya, Hapus
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm"
                        onClick={() => setConfirmReset(false)}
                      >
                        Batal
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <RibbonMarquee />

      {/* Seksi 2: Meja Latihan & Riwayat di atas Mat Bengkel Gelap */}
      <section className="workbench-band" aria-labelledby="drill-section-title">
        <div className="container">
          <div className="workbench-band-head">
            <h2 id="drill-section-title">Meja Drill Topik &amp; Riwayat Tryout</h2>
            <p>
              Asah topik khusus Teknik Mesin, Pedagogi Umum (PMA/PPDP/SEL), atau latih ketelitian
              pada soal tabel PGK Kategori dan PGK MCMA.
            </p>
          </div>

          <div className="workbench-grid">
            <div className="paper-card grain-surface">
              <TapeStrip kind="print" label="Mode Drill" />

              <div className="field-stack">
                <div className="field-group">
                  <label>Rumpun Soal</label>
                  <div className="segmented-row">
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
                        className={`seg-btn ${drillBank === val ? 'is-active' : ''}`}
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
                    <option value="PGK_KATEGORI">PGK Kategori (Tabel Pernyataan)</option>
                    <option value="PGK_MCMA">PGK MCMA (Multi Jawaban)</option>
                  </select>
                </div>

                <div className="field-group">
                  <label>Jumlah Soal</label>
                  <div className="segmented-row">
                    {[10, 20, 30, 50].map((num) => (
                      <button
                        key={num}
                        type="button"
                        className={`seg-btn ${drillCount === num ? 'is-active' : ''}`}
                        onClick={() => setDrillCount(num)}
                      >
                        {num} Soal
                      </button>
                    ))}
                  </div>
                </div>

                <label className="check-row" style={{ marginBottom: '0.25rem' }}>
                  <input
                    type="checkbox"
                    checked={instantFeedback}
                    onChange={(e) => setInstantFeedback(e.target.checked)}
                  />
                  <span>Mode Belajar (Periksa jawaban + pembahasan langsung per soal)</span>
                </label>

                <button
                  type="button"
                  className="btn btn-ink btn-lg"
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
                  Mulai Drill Acak Sekarang
                </button>
              </div>

              <div className="quick-topic-rows" aria-label="Pintasan drill cepat">
                {QUICK_DRILLS.map((qd) => (
                  <div key={qd.num} className="quick-topic-row">
                    <div className="quick-topic-meta">
                      <span className="quick-topic-num">{qd.num}</span>
                      <span className="quick-topic-name">{qd.label}</span>
                    </div>
                    <button
                      type="button"
                      className="btn btn-sm"
                      onClick={() => onStartDrill(qd.config)}
                    >
                      Latih
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="paper-card is-peach grain-surface" aria-labelledby="history-title">
              <TapeStrip kind="masking" label="Arsip Skor" />

              <h3
                id="history-title"
                style={{
                  margin: '0 0 0.3rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                }}
              >
                Riwayat Hasil Tryout
              </h3>
              <p style={{ margin: '0 0 1rem', fontSize: '0.86rem', color: 'var(--ink-secondary)' }}>
                Pilih sesi selesai untuk meninjau ulang pembahasan dan subkompetensi.
              </p>

              {history.length === 0 ? (
                <div
                  style={{
                    padding: '1.15rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '2px dashed var(--border-ink)',
                    fontSize: '0.88rem',
                    color: 'var(--ink-secondary)',
                  }}
                >
                  Belum ada riwayat pengerjaan selesai. Mulai Simulasi Resmi 80 Soal atau pilih
                  paket Drill untuk mencatat skor pertama Anda.
                </div>
              ) : (
                <div className="history-list">
                  {history.slice(0, 6).map((item) => {
                    const canInspect = item.slots && item.slots.length > 0;
                    const tone =
                      item.strictScore >= 75
                        ? 'is-good'
                        : item.strictScore >= 55
                          ? 'is-mid'
                          : 'is-low';
                    return (
                      <div key={item.id} className="history-row">
                        <div>
                          <span className="history-title">{item.title}</span>
                          <span className="history-date">
                            {new Date(item.completedAt).toLocaleString('id-ID', {
                              dateStyle: 'medium',
                              timeStyle: 'short',
                            })}{' '}
                            · {item.strictCorrectCount}/{item.totalQuestions} benar
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <span className={`score-tag ${tone}`}>Skor {item.strictScore}</span>
                          {canInspect && (
                            <button
                              type="button"
                              className="btn btn-sm"
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
