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
    shortTitle: 'Pengalaman Belajar Bermakna & Reflektif',
    description:
      'Merancang dan memfasilitasi pengalaman belajar Murid yang mendorong pemahaman konseptual, penerapan kontekstual, dan refleksi bermakna.',
  },
  {
    code: 'P.2',
    kompetensi: 'Pedagogik',
    shortTitle: 'Pembelajaran Responsif & Berdiferensiasi',
    description:
      'Melaksanakan pembelajaran yang responsif terhadap keragaman latar belakang, kebutuhan, dan potensi Murid melalui berbagai model pembelajaran.',
  },
  {
    code: 'P.3',
    kompetensi: 'Pedagogik',
    shortTitle: 'Berkesadaran, Bermakna & Menggembirakan',
    description:
      'Menciptakan proses pembelajaran yang berkesadaran (mindful), bermakna (meaningful), dan menggembirakan (joyful).',
  },
  {
    code: 'P.4',
    kompetensi: 'Pedagogik',
    shortTitle: 'Integrasi TIK Kritis & Kreatif',
    description:
      'Mengintegrasikan teknologi informasi dan komunikasi secara kritis dan kreatif untuk memperluas akses, pemahaman, dan literasi digital Murid.',
  },
  {
    code: 'P.5',
    kompetensi: 'Pedagogik',
    shortTitle: 'Sumber Belajar, Lingkungan & Kearifan Lokal',
    description:
      'Menerapkan strategi pembelajaran sesuai karakteristik Murid dengan memanfaatkan sumber belajar dan konteks lingkungan/dunia kerja.',
  },
  {
    code: 'P.6',
    kompetensi: 'Pedagogik',
    shortTitle: 'Asesmen Berkesinambungan & Umpan Balik',
    description:
      'Melaksanakan asesmen untuk mengetahui kebutuhan belajar, memberi umpan balik konstruktif, dan mengukur hasil belajar secara reflektif.',
  },
  {
    code: 'K.1',
    kompetensi: 'Kepribadian',
    shortTitle: 'Etika, Moral & Keteladanan Pendidik',
    description:
      'Menampilkan perilaku etis dan keteladanan yang mencerminkan kematangan spiritual, moral, dan emosional dalam keberagaman.',
  },
  {
    code: 'K.2',
    kompetensi: 'Kepribadian',
    shortTitle: 'Refleksi Diri & Pola Pikir Bertumbuh',
    description:
      'Melakukan refleksi diri secara berkesinambungan, mengembangkan growth mindset, dan belajar sepanjang hayat.',
  },
  {
    code: 'K.3',
    kompetensi: 'Kepribadian',
    shortTitle: 'Konsistensi Mengembangkan Budaya Belajar',
    description:
      'Mengambil keputusan dan bertindak secara konsisten dalam mengembangkan potensi dan budaya belajar Murid.',
  },
  {
    code: 'S.1',
    kompetensi: 'Sosial',
    shortTitle: 'Komunikasi Inklusif, Empatik & Efektif',
    description:
      'Berkomunikasi secara inklusif, empatik, dan efektif secara lisan, tulisan, dan/atau isyarat dengan memperhatikan kebutuhan Murid.',
  },
  {
    code: 'S.2',
    kompetensi: 'Sosial',
    shortTitle: 'Kolaborasi Sekolah, Orang Tua & Industri/Masyarakat',
    description:
      'Berkolaborasi dengan Murid, sesama Pendidik, Tenaga Kependidikan, orang tua/wali, dan DUDIKA/masyarakat.',
  },
  {
    code: 'S.3',
    kompetensi: 'Sosial',
    shortTitle: 'Komunitas Belajar & Pengembangan Profesi',
    description:
      'Berpartisipasi aktif dalam organisasi profesi dan komunitas pembelajaran untuk pengembangan keprofesian berkelanjutan.',
  },
  {
    code: 'PF.1',
    kompetensi: 'Profesional',
    shortTitle: 'Tujuan Pendidikan Satuan Pendidikan (SMK)',
    description:
      'Menguasai tujuan pendidikan terutama pada Satuan Pendidikan yang diampu (kesiapan kerja, wirausaha, dan lanjut studi SMK).',
  },
  {
    code: 'PF.2',
    kompetensi: 'Profesional',
    shortTitle: 'Penguasaan Disiplin Ilmu Teknik Mesin',
    description:
      'Menguasai disiplin ilmu Teknik Mesin secara mendalam dan kontekstual (Gambar/CAD, Pemesinan, CNC, Metrologi, Material, Pengelasan, K3LH).',
  },
  {
    code: 'PF.3',
    kompetensi: 'Profesional',
    shortTitle: 'Karakteristik Materi & Kebutuhan Murid',
    description:
      'Memahami potensi dan kebutuhan belajar Murid berdasarkan karakteristik konsep keteknikmesinan dan konteks lokal.',
  },
  {
    code: 'PF.4',
    kompetensi: 'Profesional',
    shortTitle: 'Kurikulum Adaptif & Perkembangan Industri',
    description:
      'Memahami, menerapkan, dan mengembangkan kurikulum SMK/TeFa secara adaptif sesuai perkembangan teknologi manufaktur.',
  },
  {
    code: 'PF.5',
    kompetensi: 'Profesional',
    shortTitle: 'Inovasi Praktik Pendidikan Keteknikan',
    description:
      'Mengembangkan praktik profesional pendidikan keteknikan secara konseptual, empiris, kreatif, dan inovatif.',
  },
];

export const JUKNIS_EXAM_SPECS = {
  totalQuestions: 80,
  pckCount: 50,
  puCount: 30,
  durationMinutes: 150,
  platform: 'ExamBPPP (TUK LPTK)',
  questionFormats: [
    {
      type: 'PG' as const,
      label: 'Pilihan Ganda Sederhana (PG)',
      rule: 'Memilih 1 jawaban paling tepat dari 4–5 opsi (A–D atau A–E).',
    },
    {
      type: 'PGK_KATEGORI' as const,
      label: 'Pilihan Ganda Kompleks Kategori',
      rule: 'Menentukan kategori (misalnya Benar/Salah atau Sesuai/Tidak Sesuai) untuk setiap pernyataan pada tabel.',
    },
    {
      type: 'PGK_MCMA' as const,
      label: 'Pilihan Ganda Kompleks MCMA',
      rule: 'Memilih lebih dari satu jawaban benar (Multiple Choice Multiple Answer) sesuai skenario kasus.',
    },
  ],
  checklist: [
    {
      title: 'Kehadiran & Sesi',
      detail: 'Hadir di lokasi TUK paling lambat 60 menit sebelum sesi dimulai (Sesi 2 dimulai pukul 13.00 WIB untuk persiapan/login + token).',
    },
    {
      title: 'Pakaian Rapi & Sopan',
      detail: 'Bukan berbahan jeans/denim dan bukan kaus (T-shirt); wajib memakai sepatu tertutup (bukan sandal).',
    },
    {
      title: 'Dokumen Wajib',
      detail: 'Kartu Ujian UKPPPG cetak, KTP/SIM/Paspor asli, serta alat tulis jika disediakan lembar buram oleh pengawas TUK.',
    },
    {
      title: 'Strategi Manajemen Waktu',
      detail: 'Total 150 menit untuk 80 soal (rata-rata 1 menit 52 detik per soal). Selesaikan PG cepat dalam ~75 detik/soal, simpan waktu ekstra untuk membaca tabel PGK Kategori & kasus PCK.',
    },
  ],
};
