import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Check,
  ChevronDown,
  Clock,
  FileText,
  Layers,
  Play,
  ShieldCheck,
  SlidersHorizontal,
} from 'lucide-react';
import { ArenaLogoMark, HeroExamPreviewWidget } from '../components/ArenaVisuals';
import { KISI_GROUPS } from '../data/kisiKisiDetailed';
import { PAKET_CATALOG, getTotalAvailableUniqueQuestions, type PaketDef } from '../data/paketCatalog';
import { ALL_QUESTIONS } from '../data/questionBank';
import { questionMatchesProdi } from '../data/prodiRegistry';
import { evaluateQuestion } from '../engine/scoring';
import type { ThemeMode } from '../engine/storage';
import type {
  Competency,
  ExamResultSummary,
  ExamSession,
  MasteryRecord,
  ProdiId,
} from '../types/exam';

interface HomeViewProps {
  activeProdi: ProdiId;
  activeSession: ExamSession | null;
  history: ExamResultSummary[];
  mastery: Record<string, MasteryRecord>;
  theme: ThemeMode;
  onToggleTheme: () => void;
  onSelectProdiTab: (prodi: ProdiId) => void;
  onOpenDetail: (paket: PaketDef) => void;
  onOpenStudio: (prodi?: ProdiId | 'ALL_ARCHIVE', subCode?: string) => void;
  onOpenGuide: () => void;
  onResumeActive: () => void;
  onDiscardActive: () => void;
  onViewHistoryResult: (result: ExamResultSummary) => void;
  onResetProgress: () => void;
}

const FILTER_TABS: { id: 'ALL' | 'RECOMMENDED' | ProdiId; label: string }[] = [
  { id: 'ALL', label: 'Semua Paket' },
  { id: 'RECOMMENDED', label: 'Rekomendasi PPG' },
  { id: 'teknik-mesin', label: 'Teknik Mesin SMK' },
  { id: 'dkv', label: 'DKV SMK' },
  { id: 'tata-boga', label: 'Tata Boga SMK' },
  { id: 'akuntansi', label: 'Akuntansi SMK' },
  { id: 'smk-vokasi', label: 'SMK Vokasi' },
  { id: 'pgsd', label: 'PGSD' },
  { id: 'matematika', label: 'Matematika' },
  { id: 'bahasa-indonesia', label: 'Bahasa Indonesia' },
  { id: 'bahasa-inggris', label: 'Bahasa Inggris' },
  { id: 'ipa', label: 'IPA / IPAS' },
  { id: 'ips', label: 'IPS Terpadu' },
  { id: 'pjok', label: 'PJOK' },
  { id: 'ppkn', label: 'PPKn' },
  { id: 'pai', label: 'PAI' },
  { id: 'umum', label: 'Pedagogi Umum' },
];

const FAQ_ITEMS = [
  {
    q: 'Apakah soal antar Program Studi (Prodi) terpisah dan tidak tercampur?',
    a: 'Ya. Seluruh bank soal telah diaudit kesesuaiannya dengan Juknis UKPPPG 2026 dan diklasifikasi ketat per 15 Prodi. Memilih DKV, Tata Boga, Teknik Mesin, PGSD, IPA, IPS, atau Prodi lain hanya menampilkan PCK Prodi tersebut dan Pedagogi Umum selaras agar latihan bebas ambiguitas.',
  },
  {
    q: 'Apakah semua paket gratis tanpa kode akses atau biaya langganan?',
    a: `Ya, seluruh ${PAKET_CATALOG.length} paket simulasi maupun Studio Latihan Custom terbuka penuh secara gratis tanpa login, tanpa kode akses, dan tanpa batasan percobaan.`,
  },
  {
    q: 'Apakah setiap mulai tes untuk semua Prodi soalnya diacak agar tidak sama terus?',
    a: 'Ya. Seluruh 14 Prodi bidang studi (masing-masing punya 63 sampai 163 soal PCK murni plus 380-484 Pedagogi Umum selaras) sekarang menjalankan Simulasi Acak penuh 80 soal (50 PCK + 30 PU · 150 menit). Sistem memprioritaskan soal yang belum pernah dikerjakan atau masih keliru, mengunci cakupan 17 subkompetensi Juknis 2026, sekaligus mengacak urutan opsi dan baris tabel Benar-Salah.',
  },
  {
    q: 'Bagaimana sistem penghitungan skor & poin pada hasil ujian?',
    a: 'Setiap Pilihan Ganda dan Pilihan Ganda Kompleks (MCMA) bernilai maksimal 5 poin bila benar penuh, sedangkan PGK Kategori / Benar–Salah memberikan 1 poin untuk setiap baris pernyataan yang tepat. Nilai akhir skala 100 dihitung dari rasio poin terhadap poin maksimal, disertai rincian capaian P.1–PF.5.',
  },
  {
    q: 'Bagaimana jika halaman tertutup sebelum saya menekan Selesai?',
    a: 'Seluruh jawaban, penanda Ragu-ragu, dan sisa waktu tersimpan otomatis di peramban (localStorage). Buka kembali halaman ini untuk melanjutkan dari soal terakhir.',
  },
];

export function HomeView({
  activeProdi,
  activeSession,
  history,
  mastery,
  theme,
  onToggleTheme,
  onSelectProdiTab,
  onOpenDetail,
  onOpenStudio,
  onOpenGuide,
  onResumeActive,
  onDiscardActive,
  onViewHistoryResult,
  onResetProgress,
}: HomeViewProps) {
  const [prodiFilter, setProdiFilter] = useState<'ALL' | 'RECOMMENDED' | ProdiId>('ALL');
  const [activeKisiTab, setActiveKisiTab] = useState<Competency>('Pedagogik');
  const [confirmReset, setConfirmReset] = useState(false);

  const visibleBidangStudi = useMemo(
    () =>
      PAKET_CATALOG.filter(
        (p) =>
          p.group === 'bidang-studi' &&
          (prodiFilter === 'RECOMMENDED'
            ? Boolean(p.recommendedLabel)
            : prodiFilter === 'ALL' || p.prodiId === prodiFilter)
      ),
    [prodiFilter]
  );

  const visibleUmum = useMemo(
    () =>
      PAKET_CATALOG.filter(
        (p) =>
          p.group === 'pedagogi-umum' &&
          (prodiFilter === 'RECOMMENDED'
            ? Boolean(p.recommendedLabel)
            : prodiFilter === 'ALL' || prodiFilter === 'umum')
      ),
    [prodiFilter]
  );

  const currentKisiGroup = useMemo(
    () => KISI_GROUPS.find((g) => g.id === activeKisiTab) ?? KISI_GROUPS[0],
    [activeKisiTab]
  );

  const activeAnswered = activeSession
    ? activeSession.slots.filter((s) =>
        evaluateQuestion(s.question, activeSession.answers[s.question.id]).isComplete
      ).length
    : 0;

  const totalUnique = getTotalAvailableUniqueQuestions();
  const seenCount = Object.values(mastery).filter((m) => m.seenCount > 0).length;

  const renderPaketCard = (paket: PaketDef) => {
    const doneAttempt = history.find((h) => h.paketId === paket.id);
    const isRecommended = Boolean(paket.recommendedLabel);
    return (
      <article
        key={paket.id}
        className={`kartu kartu-hover paket-card ${isRecommended ? 'is-recommended' : ''}`}
      >
        {isRecommended && (
          <div className="paket-rec-ribbon">
            <span className="paket-rec-title">
              <Award size={14} aria-hidden="true" />
              {paket.recommendedLabel}
            </span>
            <span className="paket-rec-pill">Kisi-Kisi 2026</span>
          </div>
        )}

        <div className="paket-card-body">
          <div className="paket-card-badges">
            <span className="chip chip-emerald">✓ Terbuka · Bebas akses</span>
            <span className={`chip ${paket.badgeTone === 'arsip' ? 'chip-fox' : 'chip-navy'}`}>
              {paket.badge}
            </span>
          </div>

          <div>
            <h3 className="paket-card-title">{paket.title}</h3>
            <p className="paket-card-desc" style={{ marginTop: '0.4rem' }}>
              {paket.subtitle}
            </p>
          </div>

          {isRecommended && paket.recommendedFit && (
            <div className="paket-fit-callout">
              <ShieldCheck size={15} style={{ flexShrink: 0, marginTop: 1 }} aria-hidden="true" />
              <span>{paket.recommendedFit}</span>
            </div>
          )}

          <div className="paket-meta-strip">
            <div className="paket-meta-cell">
              <span className="paket-meta-val tabular">{paket.questionCount}</span>
              <span className="paket-meta-key">soal</span>
            </div>
            <div className="paket-meta-cell">
              <span className="paket-meta-val tabular">{paket.durationMinutes}</span>
              <span className="paket-meta-key">menit</span>
            </div>
            <div className="paket-meta-cell">
              <span className="paket-meta-val">
                <FileText size={15} style={{ display: 'inline' }} aria-hidden="true" />
              </span>
              <span className="paket-meta-key">pembahasan</span>
            </div>
          </div>

          <div>
            <div className="paket-highlights-lbl">Materi antara lain</div>
            <ul className="paket-highlights">
              {paket.highlights.map((item) => (
                <li key={item}>
                  <Check size={15} style={{ color: 'var(--fox-600)', flexShrink: 0, marginTop: 2 }} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {doneAttempt && (
            <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--emerald-700)' }}>
              Skor terakhir: {doneAttempt.scaleScore}/100 ({doneAttempt.strictCorrectCount}/{doneAttempt.totalQuestions} benar)
            </div>
          )}

          <div className="paket-card-foot">
            <button
              type="button"
              className={`btn ${isRecommended ? 'btn-accent' : 'btn-primary'}`}
              onClick={() => onOpenDetail(paket)}
            >
              <ArrowRight size={16} aria-hidden="true" />
              Lihat detail &amp; mulai
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar (Clean SIAPPPG Topbar) */}
      <header className="site-nav">
        <div className="site-nav-inner">
          <button
            type="button"
            className="brand-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArenaLogoMark />
            <div>
              <span className="brand-title">
                SIAPPPG<span>2026</span>
              </span>
              <span className="brand-sub">TRY OUT UKPPPG</span>
            </div>
          </button>

          <nav className="nav-links-row" aria-label="Navigasi bagian halaman">
            <a href="#paket" className="nav-link-btn">Paket</a>
            <button
              type="button"
              className="nav-link-btn"
              onClick={() => onOpenStudio(activeProdi, 'ALL')}
            >
              Studio Latihan
            </button>
            <a href="#cara-kerja" className="nav-link-btn">Cara kerja</a>
            <a href="#kisi-kisi" className="nav-link-btn">Kisi-kisi</a>
            <a href="#faq" className="nav-link-btn">Tanya jawab</a>
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="btn btn-sm btn-ghost"
              aria-label={theme === 'light' ? 'Aktifkan mode gelap' : 'Aktifkan mode terang'}
              onClick={onToggleTheme}
            >
              {theme === 'light' ? 'Gelap' : 'Terang'}
            </button>
            <a href="#paket" className="btn btn-sm btn-primary">
              Lihat paket
            </a>
          </div>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="container-arena">
            <div className="hero-grid">
              <div className="view-enter">
                <div className="eyebrow">UNTUK PESERTA PPG · TERBUKA &amp; GRATIS</div>
                <h1 className="hero-h1">Simulasi Try Out UTBK UKPPPG 2026</h1>
                <p className="hero-lead">
                  Kerjakan 80 soal per paket dalam 150 menit, lihat capaian tiap kompetensi, lalu
                  pelajari pembahasannya. Setiap Prodi diklasifikasi ketat agar soal tidak tercampur
                  dan bebas ambiguitas.
                </p>

                <div className="hero-cta-row">
                  <a href="#paket" className="btn btn-primary btn-lg">
                    Lihat paket try out
                    <ArrowRight size={18} aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    className="btn btn-ghost btn-lg"
                    onClick={() => onOpenStudio(activeProdi, 'ALL')}
                  >
                    <SlidersHorizontal size={17} aria-hidden="true" />
                    Studio Drill Custom
                  </button>
                </div>

                <div className="hero-trust-row">
                  <span className="hero-trust-item">
                    <Check size={16} style={{ color: 'var(--emerald-600)' }} aria-hidden="true" />
                    Terbuka gratis tanpa kode akses
                  </span>
                  <span className="hero-trust-item">
                    <Check size={16} style={{ color: 'var(--emerald-600)' }} aria-hidden="true" />
                    Tersimpan otomatis di perangkat
                  </span>
                  <span className="hero-trust-item">
                    <Check size={16} style={{ color: 'var(--emerald-600)' }} aria-hidden="true" />
                    Terpisah ketat per Prodi
                  </span>
                </div>
              </div>

              <div className="view-enter">
                <HeroExamPreviewWidget activeProdi={activeProdi} />
              </div>
            </div>

            {/* 4-Column Stat Strip */}
            <div className="stats-strip tabular">
              <div className="stat-cell">
                <span className="stat-big">{PAKET_CATALOG.length}</span>
                <span className="stat-lbl">paket try out tersedia</span>
              </div>
              <div className="stat-cell">
                <span className="stat-big">{totalUnique}</span>
                <span className="stat-lbl">soal terkurasi per prodi</span>
              </div>
              <div className="stat-cell">
                <span className="stat-big">150</span>
                <span className="stat-lbl">menit simulasi resmi</span>
              </div>
              <div className="stat-cell">
                <span className="stat-big">17</span>
                <span className="stat-lbl">subkompetensi kisi-kisi</span>
              </div>
            </div>
          </div>
        </section>

        {/* Active Unfinished Session Notice */}
        {activeSession && (
          <div className="container-arena" style={{ marginTop: '1.5rem' }}>
            <div
              className="kartu"
              style={{
                padding: '1rem 1.25rem',
                borderLeft: '4px solid var(--fox-500)',
                backgroundColor: 'var(--sun-50)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
              role="region"
              aria-label="Sesi tryout aktif"
            >
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--ink-900)' }}>
                  Sesi belum selesai: {activeSession.title}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--ink-700)' }}>
                  {activeAnswered}/{activeSession.slots.length} soal terjawab ·{' '}
                  {activeSession.flaggedIds.length} ditandai Ragu-ragu.
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button type="button" className="btn btn-sm btn-accent" onClick={onResumeActive}>
                  <Play size={14} aria-hidden="true" />
                  Lanjutkan Sesi
                </button>
                <button type="button" className="btn btn-sm btn-ghost" onClick={onDiscardActive}>
                  Buang Sesi
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PAKET TRY OUT CATALOG */}
        <section id="paket" className="section-band">
          <div className="container-arena">
            <div className="group-heading-row">
              <div>
                <div className="eyebrow">PAKET TRY OUT</div>
                <h2 className="judul-bagian">Pilih paket sesuai bidang studimu</h2>
                <p className="group-sub" style={{ maxWidth: '62ch' }}>
                  Setiap paket bidang studi hanya berisi PCK prodi tersebut dan Pedagogi Umum
                  netral. Progres serta pembahasan tersimpan di perangkatmu.
                </p>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-ghost"
                onClick={onOpenGuide}
              >
                <BookOpen size={15} aria-hidden="true" />
                Panduan Juknis 2026
              </button>
            </div>

            {/* Filter per Prodi */}
            <div className="prodi-filter-tabs" role="tablist" aria-label="Saring paket menurut program studi">
              {FILTER_TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={prodiFilter === t.id}
                  className={`prodi-tab-pill ${prodiFilter === t.id ? 'is-active' : ''}`}
                  onClick={() => {
                    setProdiFilter(t.id);
                    if (t.id !== 'ALL' && t.id !== 'RECOMMENDED') onSelectProdiTab(t.id);
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {visibleBidangStudi.length > 0 && (
              <div style={{ marginBottom: '2.5rem' }}>
                <div className="group-heading-row">
                  <div>
                    <h3 className="group-title">Paket Bidang Studi (Terisolasi ketat per Prodi)</h3>
                    <p className="group-sub">
                      Soal PCK bidang studi dipadukan Pedagogi Umum murni yang selaras tanpa
                      pencampuran jurusan lain.
                    </p>
                  </div>
                </div>
                <div className="paket-grid">{visibleBidangStudi.map(renderPaketCard)}</div>
              </div>
            )}

            {visibleUmum.length > 0 && (
              <div>
                <div className="group-heading-row">
                  <div>
                    <h3 className="group-title">Paket Umum &amp; Pedagogi Murni</h3>
                    <p className="group-sub">
                      Simulasi Pedagogi Umum netral bebas konten bidang studi spesifik, serta
                      arsip lengkap Paket Umum 1–3 referensi SIAPPPG.
                    </p>
                  </div>
                </div>
                <div className="paket-grid">{visibleUmum.map(renderPaketCard)}</div>
              </div>
            )}
          </div>
        </section>

        {/* CARA KERJA */}
        <section id="cara-kerja" className="section-band section-band-white">
          <div className="container-arena">
            <div className="eyebrow">CARA KERJA</div>
            <h2 className="judul-bagian">Empat langkah, dari mulai sampai paham</h2>

            <div className="steps-grid">
              {[
                {
                  num: '01',
                  icon: Layers,
                  title: 'Pilih Prodi & paket',
                  desc: 'Pilih salah satu dari 15 Prodi terisolasi (SMK Vokasi, PGSD, Mapel Umum/Agama, atau Pedagogi Umum) tanpa kode akses.',
                },
                {
                  num: '02',
                  icon: Clock,
                  title: 'Kerjakan seperti ujian',
                  desc: 'Timer berjalan otomatis, lengkap dengan penanda Ragu-ragu dan navigasi nomor soal 1–80.',
                },
                {
                  num: '03',
                  icon: BarChart3,
                  title: 'Lihat skor & prioritas',
                  desc: 'Nilai skala 100, capaian 4 kompetensi, rincian 17 subkompetensi, serta 3 prioritas belajar terendah.',
                },
                {
                  num: '04',
                  icon: BookOpen,
                  title: 'Pelajari pembahasan',
                  desc: 'Baca alasan tepat maupun kurang tepat pada setiap opsi pilihan dan pernyataan Benar–Salah.',
                },
              ].map((st) => {
                const IconComp = st.icon;
                return (
                  <div key={st.num} className="kartu step-card">
                    <div className="step-top">
                      <span className="step-icon-box">
                        <IconComp size={20} aria-hidden="true" />
                      </span>
                      <span className="step-num tabular">{st.num}</span>
                    </div>
                    <h3 className="step-title">{st.title}</h3>
                    <p className="step-desc">{st.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="notes-strip">
              <div className="note-box is-fox">
                <span>Tiga bentuk soal BPPP: Pilihan Ganda, PGK MCMA, dan PGK Kategori (Benar–Salah).</span>
              </div>
              <div className="note-box is-emerald">
                <span>Jawaban tersimpan otomatis di peramban; aman walau tab sempat tertutup.</span>
              </div>
              <div className="note-box is-sun">
                <span>Tandai Ragu-ragu dan lompat langsung lewat panel navigasi soal kapan saja.</span>
              </div>
            </div>
          </div>
        </section>

        {/* KISI-KISI INTERACTIVE 4-TAB MATRIX */}
        <section id="kisi-kisi" className="section-band">
          <div className="container-arena">
            <div className="eyebrow">KISI-KISI</div>
            <h2 className="judul-bagian">Kisi-kisi resmi UKPPPG 2026</h2>
            <p className="group-sub" style={{ maxWidth: '64ch' }}>
              Empat kompetensi beserta rincian 17 subkompetensi sesuai Lampiran 4 Juknis 2026. Klik
              tombol <strong>Latih</strong> untuk membuka Studio Drill tepat pada subkompetensi
              tersebut.
            </p>

            <div className="kisi-tabs-row" role="tablist" aria-label="Pilih rumpun kompetensi kisi-kisi">
              {KISI_GROUPS.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  role="tab"
                  aria-selected={activeKisiTab === g.id}
                  className={`prodi-tab-pill ${activeKisiTab === g.id ? 'is-active' : ''}`}
                  onClick={() => setActiveKisiTab(g.id)}
                >
                  {g.tabLabel}
                </button>
              ))}
            </div>

            <div className="kartu kisi-table-card">
              <div className="kisi-table-head">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800 }}>
                      {currentKisiGroup.heading}
                    </h3>
                    <span className="chip chip-navy">
                      {currentKisiGroup.items.length} subkompetensi
                    </span>
                  </div>
                  <p style={{ margin: '0.35rem 0 0', fontSize: '0.9rem', color: 'var(--ink-600)' }}>
                    {currentKisiGroup.summary}
                  </p>
                </div>
              </div>

              <div className="kisi-table-wrap">
                <table className="kisi-table">
                  <thead>
                    <tr>
                      <th style={{ width: 92 }}>Kode</th>
                      <th>Subkompetensi Resmi</th>
                      <th>Cakupan Materi &amp; Teori Kunci</th>
                      <th style={{ width: 120, textAlign: 'right' }}>Latihan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentKisiGroup.items.map((row) => {
                      const avail = ALL_QUESTIONS.filter(
                        (q) =>
                          q.subkompetensi === row.code &&
                          questionMatchesProdi(q, activeProdi)
                      ).length;
                      return (
                        <tr key={row.code}>
                          <td>
                            <span className="kisi-code-pill">{row.code}</span>
                          </td>
                          <td style={{ fontWeight: 500, lineHeight: 1.55 }}>{row.desc}</td>
                          <td>
                            <div className="kisi-tag-list">
                              {row.tags.map((tg) => (
                                <span key={tg} className="kisi-tag">
                                  {tg}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td style={{ textAlign: 'right' }}>
                            <button
                              type="button"
                              className="btn btn-sm btn-ghost"
                              onClick={() => onOpenStudio(activeProdi, row.code)}
                            >
                              Latih ({avail})
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="kisi-focus-foot">
                <strong>Fokus analisis soal:</strong> {currentKisiGroup.focusTip}
              </div>
            </div>
          </div>
        </section>

        {/* RIWAYAT TRY OUT SELESAI */}
        {history.length > 0 && (
          <section className="section-band section-band-white" style={{ paddingBlock: '2.5rem' }}>
            <div className="container-arena">
              <div className="group-heading-row" style={{ marginBottom: '1rem' }}>
                <div>
                  <div className="eyebrow">REKAM JEJAK PERANGKAT</div>
                  <h2 style={{ margin: '0.25rem 0 0', fontSize: '1.35rem', fontWeight: 800 }}>
                    Riwayat Try Out Selesai ({seenCount} soal dikuasai/ditemui)
                  </h2>
                </div>
                {!confirmReset ? (
                  <button
                    type="button"
                    className="btn btn-sm btn-ghost"
                    onClick={() => setConfirmReset(true)}
                  >
                    Reset Progres Lokal
                  </button>
                ) : (
                  <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.84rem', fontWeight: 700 }}>Hapus semua riwayat?</span>
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
                    <button type="button" className="btn btn-sm btn-ghost" onClick={() => setConfirmReset(false)}>
                      Batal
                    </button>
                  </div>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '0.85rem' }}>
                {history.slice(0, 6).map((item) => (
                  <div key={item.id} className="kartu" style={{ padding: '1rem 1.15rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.92rem' }}>{item.title}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--ink-500)' }}>
                        Skor <strong>{item.scaleScore}</strong>/100 · {item.strictCorrectCount}/{item.totalQuestions} benar
                      </div>
                    </div>
                    {item.slots.length > 0 && (
                      <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        onClick={() => onViewHistoryResult(item)}
                      >
                        Hasil
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ ACCORDION */}
        <section id="faq" className="section-band">
          <div className="container-arena">
            <div className="eyebrow">TANYA JAWAB</div>
            <h2 className="judul-bagian">Hal yang sering ditanyakan</h2>

            <div className="faq-list">
              {FAQ_ITEMS.map((item) => (
                <details key={item.q} className="kartu faq-item group">
                  <summary>
                    <span>{item.q}</span>
                    <ChevronDown size={18} style={{ color: 'var(--ink-500)', flexShrink: 0 }} aria-hidden="true" />
                  </summary>
                  <div className="faq-body">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Clean Footer */}
      <footer
        style={{
          backgroundColor: 'var(--surface)',
          borderTop: '1px solid var(--ink-200)',
          paddingBlock: '1.75rem',
        }}
      >
        <div
          className="container-arena"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <ArenaLogoMark size={28} />
            <div>
              <strong style={{ fontSize: '0.9rem' }}>SIAPPPG 2026 · Multi-Prodi Try Out UTBK</strong>
              <div style={{ fontSize: '0.78rem', color: 'var(--ink-500)' }}>
                Terisolasi ketat per Bidang Studi sesuai kisi-kisi Juknis UKPPPG 2026.
              </div>
            </div>
          </div>

          <button type="button" className="btn btn-sm btn-ghost" onClick={onOpenGuide}>
            Lihat Panduan Juknis 2026
          </button>
        </div>
      </footer>
    </div>
  );
}
