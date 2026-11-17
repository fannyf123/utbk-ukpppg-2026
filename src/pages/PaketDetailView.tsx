import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Check,
  Clock,
  FileText,
  Layers,
  Play,
} from 'lucide-react';
import { ArenaLogoMark } from '../components/ArenaVisuals';
import { getPaketStaticComposition, type PaketDef } from '../data/paketCatalog';
import type { ThemeMode } from '../engine/storage';

interface PaketDetailViewProps {
  paket: PaketDef;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onBack: () => void;
  onStartPaket: (paket: PaketDef, participantName: string, mixOrder: boolean) => void;
}

export function PaketDetailView({
  paket,
  theme,
  onToggleTheme,
  onBack,
  onStartPaket,
}: PaketDetailViewProps) {
  const [participantName, setParticipantName] = useState('');
  const [mixOrder, setMixOrder] = useState(false);

  const comp = useMemo(() => getPaketStaticComposition(paket), [paket]);
  const formatCount = [comp.byType.PG, comp.byType.PGK_MCMA, comp.byType.PGK_KATEGORI].filter(
    (c) => c > 0
  ).length;

  const compRows = [
    { name: 'Pedagogik', count: comp.byCompetency.Pedagogik ?? 0 },
    { name: 'Kepribadian', count: comp.byCompetency.Kepribadian ?? 0 },
    { name: 'Sosial', count: comp.byCompetency.Sosial ?? 0 },
    { name: 'Profesional', count: comp.byCompetency.Profesional ?? 0 },
  ];

  const rules = [
    `Waktu ${paket.durationMinutes} menit berjalan sejak tombol Mulai ditekan.`,
    'Jawaban tersimpan otomatis di perangkat ini. Jika halaman tertutup, buka kembali untuk melanjutkan.',
    'Gunakan tombol Ragu-ragu untuk menandai soal yang ingin ditinjau lagi sebelum selesai.',
    'Saat waktu habis, jawaban dikumpulkan otomatis.',
    `Penskoran: pilihan ganda dan pilihan ganda kompleks 5 poin, benar-salah / kategori 1 poin per pernyataan tepat. Poin maksimal paket ini ${comp.maxPoints}.`,
    'Nilai, analisis per subkompetensi, dan pembahasan lengkap tampil segera setelah selesai.',
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header className="site-nav">
        <div className="site-nav-inner">
          <button type="button" className="brand-btn" onClick={onBack}>
            <ArenaLogoMark />
            <div>
              <span className="brand-title">
                SIAPPPG<span>2026</span>
              </span>
              <span className="brand-sub">TRY OUT UKPPPG</span>
            </div>
          </button>

          <div className="nav-actions">
            <button
              type="button"
              className="btn btn-sm btn-ghost"
              onClick={onToggleTheme}
            >
              {theme === 'light' ? 'Gelap' : 'Terang'}
            </button>
            <button type="button" className="btn btn-sm btn-ghost" onClick={onBack}>
              <ArrowLeft size={15} aria-hidden="true" />
              Semua paket
            </button>
          </div>
        </div>
      </header>

      <main className="container-arena view-enter" style={{ flex: 1 }}>
        <div className="detail-layout">
          <div>
            <nav
              aria-label="Breadcrumb"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.85rem',
                color: 'var(--ink-500)',
                marginBottom: '0.85rem',
              }}
            >
              <button
                type="button"
                onClick={onBack}
                style={{
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  color: 'var(--ink-600)',
                  fontWeight: 600,
                }}
              >
                Paket try out
              </button>
              <span aria-hidden="true">›</span>
              <span style={{ fontWeight: 700, color: 'var(--ink-900)' }}>{paket.title}</span>
            </nav>

            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
              <span className="chip chip-emerald">✓ Terbuka · Bebas akses</span>
              <span className="chip chip-navy">{paket.badge}</span>
            </div>

            <h1
              style={{
                margin: '0 0 0.65rem',
                fontSize: 'clamp(1.65rem, 3vw, 2.25rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: 'var(--ink-900)',
              }}
            >
              {paket.title}
            </h1>
            <p style={{ margin: 0, fontSize: '1rem', color: 'var(--ink-600)', maxWidth: '62ch' }}>
              {paket.subtitle}
            </p>

            <div className="detail-stat-grid">
              <div className="kartu detail-stat-card">
                <FileText size={16} style={{ color: 'var(--fox-600)', marginBottom: 4 }} aria-hidden="true" />
                <div style={{ fontSize: '0.75rem', color: 'var(--ink-500)' }}>Jumlah soal</div>
                <strong style={{ fontSize: '1rem', fontWeight: 800 }}>{paket.questionCount} soal</strong>
              </div>
              <div className="kartu detail-stat-card">
                <Clock size={16} style={{ color: 'var(--fox-600)', marginBottom: 4 }} aria-hidden="true" />
                <div style={{ fontSize: '0.75rem', color: 'var(--ink-500)' }}>Waktu</div>
                <strong style={{ fontSize: '1rem', fontWeight: 800 }}>{paket.durationMinutes} menit</strong>
              </div>
              <div className="kartu detail-stat-card">
                <Layers size={16} style={{ color: 'var(--fox-600)', marginBottom: 4 }} aria-hidden="true" />
                <div style={{ fontSize: '0.75rem', color: 'var(--ink-500)' }}>Bentuk soal</div>
                <strong style={{ fontSize: '1rem', fontWeight: 800 }}>{formatCount} bentuk</strong>
              </div>
              <div className="kartu detail-stat-card">
                <BookOpen size={16} style={{ color: 'var(--fox-600)', marginBottom: 4 }} aria-hidden="true" />
                <div style={{ fontSize: '0.75rem', color: 'var(--ink-500)' }}>Pembahasan</div>
                <strong style={{ fontSize: '1rem', fontWeight: 800 }}>Tiap opsi</strong>
              </div>
            </div>

            {/* Komposisi Soal */}
            <section className="kartu" style={{ padding: '1.35rem', marginTop: '1.25rem' }}>
              <h2 style={{ margin: '0 0 1rem', fontSize: '1.125rem', fontWeight: 800 }}>
                Komposisi soal
              </h2>
              <div className="detail-comp-grid">
                <div>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: 'var(--ink-500)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    MENURUT KOMPETENSI
                  </div>
                  {compRows.map((r) => {
                    const pct =
                      paket.questionCount > 0 ? Math.round((r.count / paket.questionCount) * 100) : 0;
                    return (
                      <div key={r.name} className="comp-bar-row">
                        <div className="comp-bar-head">
                          <span>{r.name}</span>
                          <span className="tabular">{r.count} soal</span>
                        </div>
                        <div className="progress-track">
                          <div className="progress-fill" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      color: 'var(--ink-500)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    MENURUT BENTUK SOAL
                  </div>
                  <div className="kartu" style={{ overflow: 'hidden', boxShadow: 'none' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0.68rem 0.9rem',
                        borderBottom: '1px solid var(--ink-100)',
                        fontSize: '0.9rem',
                      }}
                    >
                      <span>Pilihan Ganda</span>
                      <strong className="tabular">{comp.byType.PG} soal</strong>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0.68rem 0.9rem',
                        borderBottom: '1px solid var(--ink-100)',
                        fontSize: '0.9rem',
                      }}
                    >
                      <span>Pilihan Ganda Kompleks</span>
                      <strong className="tabular">{comp.byType.PGK_MCMA} soal</strong>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0.68rem 0.9rem',
                        fontSize: '0.9rem',
                      }}
                    >
                      <span>Benar – Salah / Kategori</span>
                      <strong className="tabular">{comp.byType.PGK_KATEGORI} soal</strong>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Materi yang diuji */}
            <section className="kartu" style={{ padding: '1.35rem', marginTop: '1rem' }}>
              <h2 style={{ margin: '0 0 0.95rem', fontSize: '1.125rem', fontWeight: 800 }}>
                Materi yang diuji antara lain
              </h2>
              <div className="detail-comp-grid" style={{ gap: '0.75rem 1.25rem' }}>
                {paket.highlights.map((h) => (
                  <div key={h} style={{ display: 'flex', gap: '0.55rem', alignItems: 'flex-start', fontSize: '0.92rem', color: 'var(--ink-700)' }}>
                    <Check size={16} style={{ color: 'var(--fox-600)', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tata tertib */}
            <section className="kartu" style={{ padding: '1.35rem', marginTop: '1rem' }}>
              <h2 style={{ margin: '0 0 1rem', fontSize: '1.125rem', fontWeight: 800 }}>
                Tata tertib pengerjaan
              </h2>
              <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {rules.map((r, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--ink-700)' }}>
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: '999px',
                        backgroundColor: 'var(--ink-100)',
                        color: 'var(--ink-800)',
                        display: 'grid',
                        placeItems: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <aside className="kartu sticky-launch-card" aria-label="Panel mulai try out">
            <h2 style={{ margin: '0 0 0.85rem', fontSize: '1.08rem', fontWeight: 800 }}>
              Siap mengerjakan?
            </h2>

            <div style={{ marginBottom: '0.9rem' }}>
              <label
                htmlFor="participant-name-input"
                style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.35rem', color: 'var(--ink-700)' }}
              >
                Nama peserta (opsional)
              </label>
              <input
                id="participant-name-input"
                type="text"
                className="text-input"
                placeholder="Nama yang tampil di hasil"
                value={participantName}
                onChange={(e) => setParticipantName(e.target.value)}
              />
            </div>

            {comp.pck > 0 && comp.pu > 0 && (
              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.84rem',
                  color: 'var(--ink-600)',
                  marginBottom: '1rem',
                }}
              >
                <input
                  type="checkbox"
                  checked={mixOrder}
                  onChange={(e) => setMixOrder(e.target.checked)}
                  style={{ width: 16, height: 16, marginTop: 2 }}
                />
                <span>Acak campur urutan nomor soal PCK &amp; Pedagogi Umum</span>
              </label>
            )}

            <button
              type="button"
              className="btn btn-accent btn-lg"
              style={{ width: '100%' }}
              onClick={() => onStartPaket(paket, participantName, mixOrder)}
            >
              <Play size={16} aria-hidden="true" />
              Mulai try out
            </button>

            <p
              style={{
                margin: '0.75rem 0 0',
                fontSize: '0.8rem',
                color: 'var(--ink-500)',
                display: 'flex',
                gap: '0.45rem',
                alignItems: 'flex-start',
              }}
            >
              <Clock size={14} style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
              <span>Waktu {paket.durationMinutes} menit langsung berjalan setelah tombol ditekan.</span>
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}
