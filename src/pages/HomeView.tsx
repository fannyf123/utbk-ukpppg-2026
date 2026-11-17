import { useMemo, useState } from 'react';
import {
  CompetencyMatrixPanel,
  VernierScaleTelemetry,
} from '../components/PrecisionVisuals';
import { JUKNIS_EXAM_SPECS, JUKNIS_SUBCOMPETENCIES } from '../data/juknisReference';
import { ALL_QUESTIONS, getBankSummary, getBankTopics } from '../data/questionBank';
import { filterDrillQuestions } from '../engine/randomizer';
import { evaluateQuestion } from '../engine/scoring';
import type {
  DrillConfig,
  ExamResultSummary,
  ExamSession,
  MasteryRecord,
  QuestionBank,
  QuestionType,
} from '../types/exam';

export type WorkspaceTab = 'overview' | 'studio' | 'archive';

interface HomeViewProps {
  activeTab: WorkspaceTab;
  activeSession: ExamSession | null;
  history: ExamResultSummary[];
  mastery: Record<string, MasteryRecord>;
  onChangeTab: (tab: WorkspaceTab) => void;
  onStartOfficial: (mixBanksOrder: boolean) => void;
  onStartDrill: (config: DrillConfig) => void;
  onResumeActive: () => void;
  onDiscardActive: () => void;
  onViewHistoryResult: (result: ExamResultSummary) => void;
  onResetProgress: () => void;
}

const FEATURED_SHORTCUTS: { label: string; config: DrillConfig }[] = [
  {
    label: 'Pemrograman CNC & Simulator',
    config: {
      bank: 'PCK',
      topic: 'Pemrograman CNC & Simulator',
      type: 'ALL',
      count: 15,
      instantFeedback: true,
    },
  },
  {
    label: 'Metrologi Presisi & Pengukuran',
    config: {
      bank: 'PCK',
      topic: 'Metrologi Presisi & Pengukuran',
      type: 'ALL',
      count: 15,
      instantFeedback: true,
    },
  },
  {
    label: 'Pemesinan Bubut, Frais & Gerinda',
    config: {
      bank: 'PCK',
      topic: 'Pemesinan Bubut, Frais & Gerinda',
      type: 'ALL',
      count: 20,
      instantFeedback: true,
    },
  },
  {
    label: 'Gambar Teknik, Proyeksi & CAD',
    config: {
      bank: 'PCK',
      topic: 'Gambar Teknik, Proyeksi & CAD',
      type: 'ALL',
      count: 15,
      instantFeedback: true,
    },
  },
  {
    label: 'K3LH & Teaching Factory',
    config: {
      bank: 'PCK',
      topic: 'K3LH & Teaching Factory',
      type: 'ALL',
      count: 15,
      instantFeedback: true,
    },
  },
  {
    label: 'Khusus PGK Kategori (Tabel Benar/Salah)',
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
  activeTab,
  activeSession,
  history,
  mastery,
  onChangeTab,
  onStartOfficial,
  onStartDrill,
  onResumeActive,
  onDiscardActive,
  onViewHistoryResult,
  onResetProgress,
}: HomeViewProps) {
  const bankSummary = useMemo(() => getBankSummary(), []);
  const [mixOrder, setMixOrder] = useState(false);

  const [drillBank, setDrillBank] = useState<'ALL' | QuestionBank>('ALL');
  const [drillTopic, setDrillTopic] = useState<string>('ALL');
  const [drillSub, setDrillSub] = useState<string>('ALL');
  const [drillType, setDrillType] = useState<'ALL' | QuestionType>('ALL');
  const [drillCount, setDrillCount] = useState<number>(20);
  const [instantFeedback, setInstantFeedback] = useState<boolean>(true);
  const [confirmReset, setConfirmReset] = useState(false);

  const availableTopics = useMemo(() => getBankTopics(drillBank), [drillBank]);

  const matchingPool = useMemo(
    () =>
      filterDrillQuestions(ALL_QUESTIONS, {
        bank: drillBank,
        topic: drillTopic,
        subkompetensi: drillSub,
        type: drillType,
      }),
    [drillBank, drillTopic, drillSub, drillType]
  );

  const seenCount = useMemo(
    () => Object.values(mastery).filter((m) => m.seenCount > 0).length,
    [mastery]
  );

  const activeAnswered = activeSession
    ? activeSession.slots.filter((s) =>
        evaluateQuestion(s.question, activeSession.answers[s.question.id]).isComplete
      ).length
    : 0;

  return (
    <div key={activeTab} className="workspace-main view-enter">
      {activeSession && (
        <div className="resume-strip" role="region" aria-label="Sesi tryout tersimpan">
          <div>
            <h2>Sesi Aktif Belum Dikumpulkan: {activeSession.title}</h2>
            <p>
              Progres tersimpan otomatis ({activeAnswered}/{activeSession.slots.length} soal
              terisi, {activeSession.flaggedIds.length} ditandai ragu-ragu).
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-signal" onClick={onResumeActive}>
              Lanjutkan Sesi
            </button>
            <button type="button" className="btn" onClick={onDiscardActive}>
              Buang Sesi
            </button>
          </div>
        </div>
      )}

      {activeTab === 'overview' && (
        <section className="overview-grid" aria-labelledby="hero-title">
          <div className="stage-left">
            <div>
              <div className="stage-kicker">
                BIDANG STUDI TEKNIK MESIN SMK · JUKNIS UKPPPG 2026
              </div>
              <h1 id="hero-title" className="stage-title">
                Simulasi UTBK UKPPPG Calon Guru 2026
              </h1>
              <p className="stage-lead">
                Menarik 50 butir PCK Teknik Mesin dan 30 butir Pedagogi Umum secara acak dengan
                algoritma prioritas soal belum dikerjakan atau masih keliru. Posisi opsi PG/MCMA
                serta baris pernyataan PGK Kategori ikut teracak di setiap sesi baru.
              </p>
            </div>

            <VernierScaleTelemetry
              mixOrder={mixOrder}
              totalBank={bankSummary.total}
              pckBank={bankSummary.pck}
              puBank={bankSummary.pu}
            />

            <div className="launch-controls">
              <label className="check-row">
                <input
                  type="checkbox"
                  checked={mixOrder}
                  onChange={(e) => setMixOrder(e.target.checked)}
                />
                <span>Acak campur urutan nomor PCK &amp; Pedagogi Umum (1 s.d. 80)</span>
              </label>

              <div className="action-strip">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => onStartOfficial(mixOrder)}
                >
                  Mulai Simulasi Resmi (80 Soal)
                </button>
                <button
                  type="button"
                  className="btn btn-lg"
                  onClick={() => onChangeTab('studio')}
                >
                  Buka Studio Drill
                </button>
              </div>
            </div>
          </div>

          <aside className="stage-right">
            <div>
              <div className="pane-heading">
                <h2>Peta Subkompetensi Juknis</h2>
                <span>Klik kode untuk drill</span>
              </div>
              <CompetencyMatrixPanel
                allQuestions={ALL_QUESTIONS}
                mastery={mastery}
                onSelectSubcompetency={(code) =>
                  onStartDrill({
                    bank: 'ALL',
                    topic: 'ALL',
                    subkompetensi: code,
                    type: 'ALL',
                    count: 15,
                    instantFeedback: true,
                    customTitle: `Drill Subkompetensi ${code}`,
                  })
                }
              />
            </div>

            <div>
              <div className="pane-heading">
                <h2>Pintasan Topik Cepat</h2>
                <span>{bankSummary.total} butir tersedia</span>
              </div>
              <div className="index-list">
                {FEATURED_SHORTCUTS.map((item) => {
                  const poolLen = filterDrillQuestions(ALL_QUESTIONS, item.config).length;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      className="index-row-btn"
                      onClick={() => onStartDrill(item.config)}
                    >
                      <span className="index-row-title">{item.label}</span>
                      <span className="index-row-meta">{poolLen} soal</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </section>
      )}

      {activeTab === 'studio' && (
        <section aria-labelledby="studio-heading">
          <div style={{ marginBottom: '1.35rem' }}>
            <div className="stage-kicker">MODE LATIHAN TERFOKUS</div>
            <h1 id="studio-heading" className="stage-title" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
              Studio Filter Topik, Subkompetensi &amp; Bentuk Soal
            </h1>
          </div>

          <div className="studio-grid">
            <div className="flat-panel filter-block">
              <div className="field-group">
                <label>Rumpun Soal</label>
                <div className="seg-pills">
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
                <label htmlFor="sub-select">Subkompetensi Lampiran 4 Juknis</label>
                <select
                  id="sub-select"
                  className="select-input"
                  value={drillSub}
                  onChange={(e) => setDrillSub(e.target.value)}
                >
                  <option value="ALL">Semua Subkompetensi (P.1 s.d. PF.5)</option>
                  {JUKNIS_SUBCOMPETENCIES.map((s) => (
                    <option key={s.code} value={s.code}>
                      {s.code} · {s.shortTitle}
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
                <div className="seg-pills">
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

              <label className="check-row">
                <input
                  type="checkbox"
                  checked={instantFeedback}
                  onChange={(e) => setInstantFeedback(e.target.checked)}
                />
                <span>Mode Belajar (Periksa jawaban dan pembahasan langsung per soal)</span>
              </label>
            </div>

            <div className="blueprint-preview">
              <div>
                <div className="stage-kicker">SOAL COCOK DI BANK</div>
                <div className="preview-big-num">{matchingPool.length} Butir</div>
                <p style={{ margin: '0.35rem 0 0', fontSize: '0.86rem', color: 'var(--ink-secondary)' }}>
                  {matchingPool.length === 0
                    ? 'Tidak ada soal pada kombinasi filter ini. Ubah salah satu filter di kiri.'
                    : `Sistem akan menarik acak ${Math.min(drillCount, matchingPool.length)} soal dengan durasi ${Math.max(10, Math.min(drillCount, matchingPool.length) * 2)} menit.`}
                </p>
              </div>

              <div className="index-list">
                <div className="history-row">
                  <span style={{ fontSize: '0.84rem', color: 'var(--ink-secondary)' }}>Rumpun</span>
                  <span className="mono" style={{ fontSize: '0.82rem', fontWeight: 600 }}>
                    {drillBank === 'ALL' ? 'PCK + PU' : drillBank}
                  </span>
                </div>
                <div className="history-row">
                  <span style={{ fontSize: '0.84rem', color: 'var(--ink-secondary)' }}>Bentuk</span>
                  <span className="mono" style={{ fontSize: '0.82rem', fontWeight: 600 }}>
                    {drillType}
                  </span>
                </div>
                <div className="history-row">
                  <span style={{ fontSize: '0.84rem', color: 'var(--ink-secondary)' }}>Evaluasi</span>
                  <span className="mono" style={{ fontSize: '0.82rem', fontWeight: 600 }}>
                    {instantFeedback ? 'Cek Langsung' : 'Di Akhir Sesi'}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-lg"
                disabled={matchingPool.length === 0}
                onClick={() =>
                  onStartDrill({
                    bank: drillBank,
                    topic: drillTopic,
                    subkompetensi: drillSub,
                    type: drillType,
                    count: drillCount,
                    instantFeedback,
                  })
                }
              >
                Mulai Drill Acak Sekarang
              </button>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'archive' && (
        <section aria-labelledby="archive-heading">
          <div style={{ marginBottom: '1.35rem' }}>
            <div className="stage-kicker">REFERENSI RESMI &amp; REKAM JEJAK</div>
            <h1 id="archive-heading" className="stage-title" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
              Kisi-Kisi Juknis 2026 &amp; Arsip Hasil Tryout
            </h1>
          </div>

          <div className="archive-grid">
            <div className="flat-panel">
              <div className="pane-heading">
                <h2>Riwayat Sesi Selesai</h2>
                <span>{seenCount}/{bankSummary.total} soal ditemui</span>
              </div>

              {history.length === 0 ? (
                <div
                  style={{
                    padding: '1.15rem',
                    border: '1px dashed var(--border-line)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.88rem',
                    color: 'var(--ink-muted)',
                  }}
                >
                  Belum ada riwayat simulasi selesai. Mulai Simulasi Resmi 80 Soal atau sesi Drill
                  untuk menyimpan skor dan menelaah pembahasan.
                </div>
              ) : (
                <div className="history-list">
                  {history.slice(0, 8).map((item) => {
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
                          <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{item.title}</div>
                          <div className="mono" style={{ fontSize: '0.73rem', color: 'var(--ink-muted)' }}>
                            {new Date(item.completedAt).toLocaleString('id-ID', {
                              dateStyle: 'medium',
                              timeStyle: 'short',
                            })}{' '}
                            · {item.strictCorrectCount}/{item.totalQuestions} benar
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <span className={`score-pill ${tone}`}>{item.strictScore}</span>
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

              {seenCount > 0 && !confirmReset && (
                <div style={{ marginTop: '1rem' }}>
                  <button
                    type="button"
                    className="btn btn-sm btn-subtle"
                    onClick={() => setConfirmReset(true)}
                  >
                    Reset Progres &amp; Riwayat Lokal
                  </button>
                </div>
              )}

              {confirmReset && (
                <div
                  style={{
                    marginTop: '0.9rem',
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--status-danger-soft)',
                    border: '1px solid var(--status-danger)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <span style={{ fontSize: '0.84rem', fontWeight: 600 }}>
                    Hapus seluruh riwayat dan data penguasaan soal?
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

            <div className="flat-panel">
              <div className="pane-heading">
                <h2>Tata Tertib &amp; Spesifikasi TUK LPTK</h2>
                <span>{JUKNIS_EXAM_SPECS.platform}</span>
              </div>
              <div className="index-list">
                {JUKNIS_EXAM_SPECS.checklist.map((item) => (
                  <div key={item.title} style={{ padding: '0.65rem 0', borderBottom: '1px solid var(--border-line)', fontSize: '0.86rem' }}>
                    <div style={{ fontWeight: 700, marginBottom: '0.15rem' }}>{item.title}</div>
                    <div style={{ color: 'var(--ink-secondary)' }}>{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
