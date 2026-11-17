import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Check,
  Clock,
  HelpCircle,
  Minus,
  RotateCcw,
  Target,
  X,
} from 'lucide-react';
import { ArenaLogoMark, ResultNavyRing } from '../components/ArenaVisuals';
import { QuestionRenderer } from '../components/QuestionRenderer';
import { JUKNIS_SUBCOMPETENCIES } from '../data/juknisReference';
import { KISI_GROUPS } from '../data/kisiKisiDetailed';
import { evaluateQuestion } from '../engine/scoring';
import type { ExamResultSummary } from '../types/exam';

interface ResultViewProps {
  result: ExamResultSummary;
  onBackHome: () => void;
  onRetrySame: () => void;
  onDrillMissed: (missedIds: string[]) => void;
}

type ReviewFilter = 'all' | 'wrong' | 'flagged' | 'correct';

function formatMinutesOnly(sec: number): string {
  const m = Math.max(1, Math.round(sec / 60));
  return `${m} menit`;
}

export function ResultView({
  result,
  onBackHome,
  onRetrySame,
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

  // Top 3 lowest subkompetensi priorities
  const prioritySubcomps = useMemo(() => {
    return [...result.bySubcompetency]
      .sort((a, b) => {
        const ra = a.rawMax > 0 ? a.rawEarned / a.rawMax : 1;
        const rb = b.rawMax > 0 ? b.rawEarned / b.rawMax : 1;
        return ra - rb;
      })
      .slice(0, 3);
  }, [result.bySubcompetency]);

  const pckPct = result.pckTotal > 0 ? Math.round((result.pckCorrect / result.pckTotal) * 100) : 0;
  const puPct = result.puTotal > 0 ? Math.round((result.puCorrect / result.puTotal) * 100) : 0;

  const headline =
    result.scaleScore >= 80
      ? 'Performa sangat baik!'
      : result.scaleScore >= 60
        ? 'Sudah di jalur yang tepat.'
        : 'Ini titik awal yang jelas.';

  const subtitle =
    result.scaleScore >= 80
      ? 'Pertahankan konsistensi di ketiga bentuk soal dan pelajari butir yang masih keliru.'
      : 'Sekarang kamu tahu bagian mana yang perlu dikejar. Pelajari pembahasannya, lalu ulangi try out untuk melihat kemajuanmu.';

  const jumpToReview = () => {
    const el = document.getElementById('pembahasan-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header className="site-nav">
        <div className="site-nav-inner">
          <button type="button" className="brand-btn" onClick={onBackHome}>
            <ArenaLogoMark />
            <div>
              <span className="brand-title">
                SIAPPPG<span>2026</span>
              </span>
              <span className="brand-sub">TRY OUT UKPPPG</span>
            </div>
          </button>

          <button type="button" className="btn btn-sm btn-ghost" onClick={onBackHome}>
            <ArrowLeft size={15} aria-hidden="true" />
            Semua paket
          </button>
        </div>
      </header>

      <main className="container-arena view-enter" style={{ paddingBlock: '1.75rem 3.5rem' }}>
        {/* Dark Navy Hero Card */}
        <section className="result-navy-hero" aria-label="Ringkasan nilai try out">
          <div className="result-navy-top">
            <ResultNavyRing score={result.scaleScore} />

            <div style={{ flex: 1, minWidth: 240 }}>
              <div
                style={{
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#ffa53c',
                  textTransform: 'uppercase',
                  marginBottom: '0.3rem',
                }}
              >
                HASIL TRY OUT · {result.title}
                {result.participantName ? ` · ${result.participantName}` : ''}
              </div>
              <h1 style={{ margin: '0 0 0.45rem', fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 800 }}>
                {headline}
              </h1>
              <p style={{ margin: '0 0 1rem', fontSize: '0.94rem', color: 'rgba(255,255,255,0.82)', maxWidth: '58ch' }}>
                {subtitle}
              </p>

              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <button type="button" className="btn btn-accent" onClick={jumpToReview}>
                  <BookOpen size={16} aria-hidden="true" />
                  Lihat pembahasan
                </button>
                <button type="button" className="btn btn-onnavy" onClick={onRetrySame}>
                  <RotateCcw size={15} aria-hidden="true" />
                  Ulangi try out
                </button>
                {result.missedIds.length > 0 && (
                  <button
                    type="button"
                    className="btn btn-onnavy"
                    onClick={() => onDrillMissed(result.missedIds)}
                  >
                    Latih {result.missedIds.length} soal belum tepat
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="result-navy-meta">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Target size={16} style={{ color: '#ffa53c' }} aria-hidden="true" />
              <span style={{ opacity: 0.75 }}>Poin</span>
              <strong className="tabular" style={{ marginLeft: 'auto' }}>
                {result.pointsEarned} dari {result.maxPoints}
              </strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} style={{ color: '#ffa53c' }} aria-hidden="true" />
              <span style={{ opacity: 0.75 }}>Durasi</span>
              <strong className="tabular" style={{ marginLeft: 'auto' }}>
                {formatMinutesOnly(result.elapsedSeconds)}
              </strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={16} style={{ color: '#ffa53c' }} aria-hidden="true" />
              <span style={{ opacity: 0.75 }}>Selesai</span>
              <strong className="tabular" style={{ marginLeft: 'auto' }}>
                {new Date(result.completedAt).toLocaleString('id-ID', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </strong>
            </div>
          </div>
        </section>

        {/* 4 Summary Count Cards */}
        <div className="result-4-cards">
          <div className="kartu result-stat-mini">
            <span className="stat-circle" style={{ borderColor: 'var(--emerald-600)', color: 'var(--emerald-600)' }}>
              <Check size={17} aria-hidden="true" />
            </span>
            <div>
              <strong className="tabular" style={{ fontSize: '1.3rem', display: 'block', lineHeight: 1.1 }}>
                {result.strictCorrectCount}
              </strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--ink-500)' }}>Benar (soal)</span>
            </div>
          </div>
          <div className="kartu result-stat-mini">
            <span className="stat-circle" style={{ borderColor: 'var(--fox-500)', color: 'var(--fox-600)' }}>
              <Minus size={17} aria-hidden="true" />
            </span>
            <div>
              <strong className="tabular" style={{ fontSize: '1.3rem', display: 'block', lineHeight: 1.1 }}>
                {result.partialCorrectCount}
              </strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--ink-500)' }}>Sebagian benar (soal)</span>
            </div>
          </div>
          <div className="kartu result-stat-mini">
            <span className="stat-circle" style={{ borderColor: 'var(--rose-500)', color: 'var(--rose-500)' }}>
              <X size={17} aria-hidden="true" />
            </span>
            <div>
              <strong className="tabular" style={{ fontSize: '1.3rem', display: 'block', lineHeight: 1.1 }}>
                {result.wrongCount}
              </strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--ink-500)' }}>Belum tepat (soal)</span>
            </div>
          </div>
          <div className="kartu result-stat-mini">
            <span className="stat-circle" style={{ borderColor: 'var(--ink-300)', color: 'var(--ink-400)' }}>
              <HelpCircle size={17} aria-hidden="true" />
            </span>
            <div>
              <strong className="tabular" style={{ fontSize: '1.3rem', display: 'block', lineHeight: 1.1 }}>
                {result.unansweredCount}
              </strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--ink-500)' }}>Tidak dijawab (soal)</span>
            </div>
          </div>
        </div>

        {/* Scoring Explanation Strip + Prodi Rumpun Summary */}
        <div className="kartu" style={{ padding: '1rem 1.25rem', marginBottom: '1.5rem' }}>
          <div style={{ fontWeight: 800, fontSize: '0.9rem', marginBottom: '0.45rem' }}>
            Cara hitung poin &amp; proporsi Prodi
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.75rem',
              fontSize: '0.84rem',
              color: 'var(--ink-700)',
            }}
          >
            <div>
              <strong>Pilihan ganda:</strong> 5 poin bila benar.
            </div>
            <div>
              <strong>Pilihan ganda kompleks:</strong> 5 poin bila seluruh pilihan tepat.
            </div>
            <div>
              <strong>Benar–salah / Kategori:</strong> 1 poin untuk tiap pernyataan tepat.
            </div>
          </div>
          {(result.pckTotal > 0 || result.puTotal > 0) && (
            <div style={{ marginTop: '0.65rem', paddingTop: '0.65rem', borderTop: '1px solid var(--ink-100)', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.84rem' }}>
              {result.pckTotal > 0 && (
                <span>
                  <strong>{result.prodiLabel ? `PCK ${result.prodiLabel}` : 'Kompetensi Prodi (PCK)'}:</strong>{' '}
                  {result.pckCorrect}/{result.pckTotal} ({pckPct}%)
                </span>
              )}
              {result.puTotal > 0 && (
                <span>
                  <strong>Pedagogi Umum (PU):</strong> {result.puCorrect}/{result.puTotal} ({puPct}%)
                </span>
              )}
            </div>
          )}
        </div>

        {/* Poin per 10 Soal */}
        <section style={{ marginBottom: '1.75rem' }}>
          <h2 style={{ margin: '0 0 0.75rem', fontSize: '1.25rem', fontWeight: 800 }}>
            Poin per 10 soal
          </h2>
          <div className="result-blocks-grid">
            {result.tenBlocks.map((blk) => {
              const pct = blk.max > 0 ? Math.round((blk.earned / blk.max) * 100) : 0;
              return (
                <div key={blk.label} className="kartu" style={{ padding: '0.9rem 1rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--ink-500)', marginBottom: 4 }}>
                    {blk.label}
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.45rem' }} className="tabular">
                    {blk.earned}{' '}
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink-500)' }}>
                      / {blk.max}
                    </span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Capaian per Kompetensi (2x2 Grid exact like SIAPPPG) */}
        <section style={{ marginBottom: '1.75rem' }}>
          <h2 style={{ margin: '0 0 0.75rem', fontSize: '1.25rem', fontWeight: 800 }}>
            Capaian per kompetensi
          </h2>
          <div className="result-comp-grid">
            {KISI_GROUPS.map((grp) => {
              const items = result.bySubcompetency.filter((s) => s.kompetensi === grp.id);
              const totalEarned = items.reduce((a, b) => a + b.rawEarned, 0);
              const totalMax = items.reduce((a, b) => a + b.rawMax, 0);
              const pct = totalMax > 0 ? Math.round((totalEarned / totalMax) * 100) : 0;

              return (
                <div key={grp.id} className="kartu" style={{ padding: '1.15rem 1.25rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      marginBottom: '0.9rem',
                    }}
                  >
                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800 }}>{grp.id}</h3>
                    <span className="tabular" style={{ fontSize: '0.86rem', color: 'var(--ink-600)' }}>
                      <strong>{pct}%</strong> · {totalEarned}/{totalMax} poin
                    </span>
                  </div>

                  {items.length === 0 ? (
                    <div style={{ fontSize: '0.84rem', color: 'var(--ink-500)' }}>
                      Tidak ada butir kompetensi ini pada sesi ini.
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {items.map((sc) => {
                        const rowPct = sc.rawMax > 0 ? Math.round((sc.rawEarned / sc.rawMax) * 100) : 0;
                        return (
                          <div
                            key={sc.code}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '3rem minmax(0, 1fr) 3.6rem',
                              alignItems: 'center',
                              gap: '0.65rem',
                            }}
                          >
                            <span
                              style={{
                                fontSize: '0.74rem',
                                fontWeight: 800,
                                textAlign: 'center',
                                padding: '0.2rem 0.35rem',
                                borderRadius: '0.35rem',
                                border: '1px solid var(--ink-200)',
                                backgroundColor: 'var(--surface-alt)',
                              }}
                            >
                              {sc.code}
                            </span>
                            <div className="progress-track">
                              <div
                                className={`progress-fill ${rowPct >= 75 ? 'is-good' : rowPct >= 50 ? 'is-warn' : 'is-danger'}`}
                                style={{ width: `${rowPct}%` }}
                              />
                            </div>
                            <span className="tabular" style={{ fontSize: '0.8rem', textAlign: 'right', color: 'var(--ink-600)' }}>
                              {sc.rawEarned}/{sc.rawMax}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Prioritas Belajar Berikutnya */}
        {prioritySubcomps.length > 0 && (
          <section className="kartu" style={{ padding: '1.25rem 1.35rem', marginBottom: '2rem' }}>
            <h2 style={{ margin: '0 0 0.2rem', fontSize: '1.125rem', fontWeight: 800 }}>
              Prioritas belajar berikutnya
            </h2>
            <p style={{ margin: '0 0 1rem', fontSize: '0.875rem', color: 'var(--ink-500)' }}>
              Tiga subkompetensi dengan persentase poin terendah pada try out ini.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1rem' }}>
              {prioritySubcomps.map((item) => {
                const meta = subDescMap.get(item.code);
                return (
                  <div key={item.code} className="kartu priority-row" style={{ boxShadow: 'none', backgroundColor: 'var(--surface-alt)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span className="kisi-code-pill">{item.code}</span>
                      <span style={{ fontSize: '0.88rem', color: 'var(--ink-800)' }}>
                        {meta?.description ?? item.code}
                      </span>
                    </div>
                    <span
                      className="chip tabular"
                      style={{
                        backgroundColor: 'var(--rose-50)',
                        color: 'var(--rose-700)',
                        border: '1px solid var(--rose-200)',
                      }}
                    >
                      {item.rawEarned}/{item.rawMax} poin
                    </span>
                  </div>
                );
              })}
            </div>

            <button type="button" className="btn btn-primary" onClick={jumpToReview}>
              <BookOpen size={16} aria-hidden="true" />
              Pelajari pembahasan
            </button>
          </section>
        )}

        {/* Review Soal & Pembahasan Lengkap */}
        <section id="pembahasan-section">
          <div className="group-heading-row" style={{ marginBottom: '1rem' }}>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 800 }}>
                Pembahasan Soal ({visibleReviews.length})
              </h2>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.88rem', color: 'var(--ink-500)' }}>
                Saring menurut status jawaban untuk mempelajari kunci &amp; penalaran setiap opsi.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {(
                [
                  ['all', `Semua (${evaluatedSlots.length})`],
                  ['wrong', `Belum Tepat (${result.missedIds.length})`],
                  ['flagged', `Ragu-ragu (${result.flaggedIds.length})`],
                  ['correct', `Benar (${result.strictCorrectCount})`],
                ] as [ReviewFilter, string][]
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  className={`prodi-tab-pill ${filter === key ? 'is-active' : ''}`}
                  onClick={() => setFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {visibleReviews.map((item) => (
              <div key={item.slot.question.id} className="kartu" style={{ padding: '1.35rem' }}>
                <QuestionRenderer
                  question={item.slot.question}
                  index={item.index}
                  total={evaluatedSlots.length}
                  answer={item.ans}
                  isFlagged={item.isFlagged}
                  showFeedback={true}
                  onChangeAnswer={() => {}}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
