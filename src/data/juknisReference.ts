import type { Competency } from '../types/exam';

export interface SubcompetencyMeta {
  code: string;
  kompetensi: Competency;
  shortTitle: string;
  description: string;
}

export const JUKNIS_SUBCOMPETENCIES: SubcompetencyMeta[] = [
  {
    code: 'P.1',
    kompetensi: 'Pedagogik',
    shortTitle: 'Pengalaman Belajar Konseptual, Kontekstual & Reflektif',
    description:
      'Merancang dan memfasilitasi pengalaman belajar Murid yang mendorong pemahaman konseptual, penerapan kontekstual, dan refleksi bermakna terhadap proses pembelajaran.',
  },
  {
    code: 'P.2',
    kompetensi: 'Pedagogik',
    shortTitle: 'Pembelajaran Responsif terhadap Keragaman Murid',
    description:
      'Melaksanakan pembelajaran yang responsif terhadap keragaman latar belakang, kebutuhan, dan potensi Murid melalui berbagai model pembelajaran.',
  },
  {
    code: 'P.3',
    kompetensi: 'Pedagogik',
    shortTitle: 'Proses Belajar Berkesadaran, Bermakna & Menggembirakan',
    description:
      'Menciptakan proses pembelajaran yang berkesadaran, bermakna, dan menggembirakan.',
  },
  {
    code: 'P.4',
    kompetensi: 'Pedagogik',
    shortTitle: 'Integrasi TIK Kritis & Kreatif + Literasi Digital',
    description:
      'Mengintegrasikan teknologi informasi dan komunikasi secara kritis dan kreatif dalam pembelajaran untuk memperluas akses, memperdalam pemahaman, dan mendukung literasi digital Murid.',
  },
  {
    code: 'P.5',
    kompetensi: 'Pedagogik',
    shortTitle: 'Strategi Sesuai Karakteristik, Lingkungan & Kearifan Lokal',
    description:
      'Menerapkan strategi pembelajaran atau pembimbingan yang sesuai karakteristik Murid dengan memanfaatkan sumber belajar dan mempertimbangkan potensi lingkungan dan kearifan lokal.',
  },
  {
    code: 'P.6',
    kompetensi: 'Pedagogik',
    shortTitle: 'Asesmen Berkesinambungan, Umpan Balik & Reflektif',
    description:
      'Melaksanakan asesmen untuk mengetahui kebutuhan belajar, memberikan umpan balik, dan mengukur hasil belajar Murid secara berkesinambungan dan reflektif.',
  },
  {
    code: 'K.1',
    kompetensi: 'Kepribadian',
    shortTitle: 'Perilaku Etis, Keteladanan & Kematangan Moral',
    description:
      'Menampilkan perilaku etis dan keteladanan yang mencerminkan kematangan spiritual, moral, dan emosional berdasarkan Ketuhanan Yang Maha Esa dan nilai-nilai keberagaman.',
  },
  {
    code: 'K.2',
    kompetensi: 'Kepribadian',
    shortTitle: 'Refleksi Diri, Pola Pikir Bertumbuh & Belajar Sepanjang Hayat',
    description:
      'Melakukan refleksi diri secara berkesinambungan, mengembangkan pola pikir bertumbuh, serta belajar sepanjang hayat untuk peningkatan kualitas diri.',
  },
  {
    code: 'K.3',
    kompetensi: 'Kepribadian',
    shortTitle: 'Konsistensi Mengembangkan Potensi & Budaya Belajar',
    description:
      'Mengambil keputusan dan bertindak secara konsisten dalam mengembangkan potensi dan budaya belajar Murid.',
  },
  {
    code: 'S.1',
    kompetensi: 'Sosial',
    shortTitle: 'Komunikasi Inklusif (Lisan, Tulisan & Isyarat)',
    description:
      'Berkomunikasi secara inklusif, empatik, dan efektif secara lisan, tulisan, dan/atau isyarat dengan memperhatikan keragaman dan kebutuhan Murid.',
  },
  {
    code: 'S.2',
    kompetensi: 'Sosial',
    shortTitle: 'Kolaborasi Murid, Pendidik, Tendik, Ortu & Masyarakat',
    description:
      'Berkolaborasi dengan Murid, sesama Pendidik, Tenaga Kependidikan selain Pendidik, orang tua/wali Murid, dan masyarakat untuk meningkatkan kualitas pembelajaran.',
  },
  {
    code: 'S.3',
    kompetensi: 'Sosial',
    shortTitle: 'Organisasi Profesi & Komunitas Pembelajaran PKB',
    description:
      'Berpartisipasi aktif dalam organisasi profesi dan komunitas pembelajaran untuk pengembangan keprofesian berkelanjutan.',
  },
  {
    code: 'PF.1',
    kompetensi: 'Profesional',
    shortTitle: 'Tujuan Pendidikan pada Satuan Pendidikan',
    description:
      'Menguasai tujuan pendidikan terutama pada Satuan Pendidikan yang diampu.',
  },
  {
    code: 'PF.2',
    kompetensi: 'Profesional',
    shortTitle: 'Penguasaan Disiplin Ilmu Bidang Studi (PCK)',
    description:
      'Menguasai disiplin ilmu sesuai dengan materi/muatan pembelajaran atau pembimbingan.',
  },
  {
    code: 'PF.3',
    kompetensi: 'Profesional',
    shortTitle: 'Potensi & Kebutuhan Murid berdasar Materi & Konteks Lokal',
    description:
      'Memahami potensi dan kebutuhan belajar Murid berdasarkan karakteristik materi pembelajaran atau pembimbingan dan konteks lokal.',
  },
  {
    code: 'PF.4',
    kompetensi: 'Profesional',
    shortTitle: 'Pemahaman & Pengembangan Kurikulum Adaptif Kontekstual',
    description:
      'Memahami, menerapkan, dan mengembangkan kurikulum secara adaptif dan kontekstual sesuai perkembangan zaman.',
  },
  {
    code: 'PF.5',
    kompetensi: 'Profesional',
    shortTitle: 'Pengembangan Praktik Profesional Inovatif & Empiris',
    description:
      'Mengembangkan praktik profesional pendidikan secara konseptual, empiris, kreatif, dan inovatif.',
  },
];

export const JUKNIS_EXAM_SPECS = {
  legalBasis: 'Permendikbudristek Nomor 19 Tahun 2024 dan Permendikdasmen Nomor 21 Tahun 2025',
  totalQuestions: 80,
  pckCount: 50,
  puCount: 30,
  durationMinutes: 150,
  platform: 'ExamBPPP (TUK LPTK)',
  subjectiveSpec:
    'Laporan Studi Kasus reflektif praktik pembelajaran/PPL maksimal 500 kata (Times New Roman 12, PDF, format nama file: Studi Kasus_Nama mahasiswa_NIM).',
  sessionsSchedule:
    'Sesi 1: 08.30-11.30 (persiapan/login/token 08.00-08.30); Sesi 2: 13.30-16.00 (persiapan/login/token 13.00-13.30) waktu setempat.',
  questionFormats: [
    {
      type: 'PG' as const,
      label: 'Pilihan Ganda (PG)',
      rule: 'Soal dengan satu jawaban paling tepat dari beberapa pilihan jawaban.',
    },
    {
      type: 'PGK_KATEGORI' as const,
      label: 'Pilihan Ganda Kompleks (PGK) Kategori',
      rule: 'Memberikan respons pada setiap pernyataan berdasarkan kategori yang ditentukan (misalnya Benar-Salah, Sesuai-Tidak Sesuai, Setuju-Tidak Setuju).',
    },
    {
      type: 'PGK_MCMA' as const,
      label: 'Pilihan Ganda Kompleks (PGK MCMA)',
      rule: 'Memilih lebih dari satu jawaban yang benar atau tepat (Multiple Correct Multiple Answer) dari beberapa pilihan yang tersedia.',
    },
  ],
  checklist: [
    {
      title: 'Kehadiran & Jadwal Sesi',
      detail:
        'Hadir paling lambat 60 menit sebelum jadwal UTBK (Sesi 1 pukul 08.30-11.30, persiapan 08.00-08.30; Sesi 2 pukul 13.30-16.00, persiapan 13.00-13.30 waktu setempat).',
    },
    {
      title: 'Pakaian Rapi & Sopan',
      detail:
        'Bukan berbahan jeans dan/atau kaus, tidak memakai pakaian ketat, serta wajib mengenakan sepatu tertutup.',
    },
    {
      title: 'Dokumen Wajib & Larangan Elektronik',
      detail:
        'Membawa KTP/SIM dan kartu ujian; dilarang membawa ponsel, smartwatch, atau kamera ke ruang ujian (alat tulis & kertas buram disiapkan panitia TUK).',
    },
    {
      title: 'Strategi Manajemen Waktu',
      detail:
        'Total 150 menit (peserta reguler maupun tunanetra) untuk 80 butir (50 PCK + 30 PU). Rata-rata ~1 menit 52 detik per soal; sisihkan waktu ekstra untuk menelaah tabel PGK Kategori dan PGK MCMA.',
    },
  ],
};
