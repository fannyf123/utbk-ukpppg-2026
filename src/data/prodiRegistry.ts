import type { ExamQuestion, ProdiId } from '../types/exam';

export interface ProdiConfig {
  id: ProdiId;
  label: string;
  shortLabel: string;
  jenjang: string;
  pckBadge: string;
  description: string;
}

export const PRODI_CONFIGS: readonly ProdiConfig[] = [
  {
    id: 'teknik-mesin',
    label: 'Teknik Mesin (SMK)',
    shortLabel: 'Teknik Mesin',
    jenjang: 'SMK · Teknologi Rekayasa',
    pckBadge: 'PCK TEKNIK MESIN SMK',
    description:
      'Kompetensi keahlian Teknik Pemesinan/Mesin SMK (Gambar/CAD, Bubut/Frais/Gerinda, CNC, Metrologi, Material, Pengelasan, Elemen Mesin, K3LH) dipadukan Pedagogi Umum murni.',
  },
  {
    id: 'dkv',
    label: 'DKV · Desain Komunikasi Visual (SMK)',
    shortLabel: 'DKV',
    jenjang: 'SMK · Seni & Ekonomi Kreatif',
    pckBadge: 'PCK DKV SMK',
    description:
      'Kompetensi keahlian Desain Komunikasi Visual SMK (Tata Letak, Tipografi, Warna RGB/CMYK, Pracetak Vektor-Bitmap, Fotografi/AV, Branding, Packaging, UI/UX, HKI & TeFa DKV) dipadukan Pedagogi Umum selaras.',
  },
  {
    id: 'tata-boga',
    label: 'Tata Boga & Kuliner (SMK)',
    shortLabel: 'Tata Boga',
    jenjang: 'SMK · Pariwisata & Kuliner',
    pckBadge: 'PCK TATA BOGA SMK',
    description:
      'Higiene sanitasi & kontaminasi silang, teknik pengolahan dasar/pastry, manajemen suhu & keamanan pangan, food costing, gizi seimbang, serta asesmen praktik dapur.',
  },
  {
    id: 'akuntansi',
    label: 'Akuntansi & Keuangan Lembaga (SMK)',
    shortLabel: 'Akuntansi',
    jenjang: 'SMK · Bisnis & Manajemen',
    pckBadge: 'PCK AKUNTANSI SMK',
    description:
      'Siklus akuntansi perusahaan jasa/dagang, jurnal penyesuaian, rekonsiliasi bank, kas kecil imprest, persediaan & HPP, pengendalian internal, serta pedagogi asesmen kasus keuangan.',
  },
  {
    id: 'smk-vokasi',
    label: 'SMK Vokasi Lainnya (Pemasaran · TKJ/RPL · TKR · Listrik)',
    shortLabel: 'SMK Vokasi',
    jenjang: 'SMK · Lintas Keahlian',
    pckBadge: 'SJT KEJURUAN VOKASI',
    description:
      'Kasus terkurasi kejuruan Pemasaran, TKJ/RPL, Teknik Kendaraan Ringan (TKR), TITL Listrik, Animasi & APHP (terpisah bersih dari Mesin, DKV, Boga & Akuntansi).',
  },
  {
    id: 'pgsd',
    label: 'PGSD (Guru Kelas SD)',
    shortLabel: 'PGSD',
    jenjang: 'SD · Guru Kelas',
    pckBadge: 'PCK PGSD LINTAS MAPEL SD',
    description:
      'Guru Kelas SD (Bahasa Indonesia SD, Matematika SD, IPAS SD, Pendidikan Pancasila SD, PJOK SD, Seni, serta Lintas Pembelajaran SD) beserta Pedagogi Umum fase dasar.',
  },
  {
    id: 'matematika',
    label: 'Matematika (SMP / SMA / SMK)',
    shortLabel: 'Matematika',
    jenjang: 'SMP / SMA / SMK',
    pckBadge: 'PCK MATEMATIKA',
    description:
      'Miskonsepsi & pedagogi konten Matematika (Aljabar, Fungsi, Lingkaran, Geometri Van Hiele, Statistika, Peluang, Polya, Newman, RME) beserta Pedagogi Umum selaras.',
  },
  {
    id: 'bahasa-indonesia',
    label: 'Bahasa Indonesia (SMP / SMA / SMK)',
    shortLabel: 'B. Indonesia',
    jenjang: 'SMP / SMA / SMK',
    pckBadge: 'PCK BAHASA INDONESIA',
    description:
      'Pembelajaran berbasis genre (Eksposisi, Argumentasi, Prosedur), menyimak/membaca/berbicara, sastra (Puisi, Cerpen, Drama), serta kebahasaan & EYD beserta Pedagogi Umum selaras.',
  },
  {
    id: 'bahasa-inggris',
    label: 'Bahasa Inggris (SMP / SMA / SMK)',
    shortLabel: 'B. Inggris',
    jenjang: 'SMP / SMA / SMK',
    pckBadge: 'PCK BAHASA INGGRIS',
    description:
      'Communicative Language Teaching (CLT), Task-Based Learning, teks naratif/recount/eksposisi argumentatif, literasi reading-speaking inklusif, serta asesmen autentik bahasa Inggris.',
  },
  {
    id: 'ipa',
    label: 'IPA & IPAS (SMP / Terpadu)',
    shortLabel: 'IPA / IPAS',
    jenjang: 'SMP / Terpadu',
    pckBadge: 'PCK IPA TERPADU',
    description:
      'Penyelidikan ilmiah & konsep fisika/biologi/kimia (fotosintesis Ingenhousz, Hukum Newton, Hooke, reaksi kimia, kalor, ekosistem, eksperimen lab) beserta Pedagogi Umum selaras.',
  },
  {
    id: 'ips',
    label: 'IPS (Sejarah · Ekonomi · Geografi · Sosiologi)',
    shortLabel: 'IPS',
    jenjang: 'SMP / SMA',
    pckBadge: 'PCK IPS TERPADU',
    description:
      'Berpikir diakronis-sinkronis & kritik sumber sejarah, vulkanisme & spasial geografi, simulasi keseimbangan pasar ekonomi, alih fungsi lahan & isu sosial masyarakat.',
  },
  {
    id: 'pjok',
    label: 'PJOK · Pendidikan Jasmani & Olahraga',
    shortLabel: 'PJOK',
    jenjang: 'SD / SMP / SMA / SMK',
    pckBadge: 'PCK PJOK',
    description:
      'Perencanaan gerak motorik & karakter, modifikasi alat permainan bola, model sirkuit/TGfU, pencegahan & penanganan cedera ringan, serta pembelajaran PJOK inklusif.',
  },
  {
    id: 'ppkn',
    label: 'PPKn · Pendidikan Pancasila',
    shortLabel: 'PPKn',
    jenjang: 'SMP / SMA / SMK',
    pckBadge: 'PCK PENDIDIKAN PANCASILA',
    description:
      'Implementasi nilai Pancasila, dialog Bhinneka Tunggal Ika, demokrasi musyawarah kelas, literasi fakta hukum & HAM di ruang digital, serta pembentukan karakter warga negara.',
  },
  {
    id: 'pai',
    label: 'PAI · Pendidikan Agama Islam',
    shortLabel: 'PAI',
    jenjang: 'SD / SMP / SMA / SMK',
    pckBadge: 'PCK PAI',
    description:
      'Internalisasi nilai akhlak reflektif, moderasi beragama dalam keberagaman, tabayyun literasi digital, P5-P2RA, serta asesmen autentik sikap dan pemahaman kontekstual.',
  },
  {
    id: 'umum',
    label: 'Pedagogi Umum Murni (Lintas Prodi)',
    shortLabel: 'Pedagogi Umum',
    jenjang: 'Semua Prodi · Umum Murni',
    pckBadge: 'PEDAGOGI UMUM MURNI',
    description:
      'Bank soal Pedagogi Umum, Growth Mindset, SEL, Etika Profesi & Pembelajaran Mendalam yang netral bebas konten jurusan tertentu.',
  },
];

const VALID_IDS = new Set<string>(PRODI_CONFIGS.map((p) => p.id));

export function isValidProdiId(value: unknown): value is ProdiId {
  return typeof value === 'string' && VALID_IDS.has(value);
}

export function getProdiConfig(prodiId: ProdiId): ProdiConfig {
  return PRODI_CONFIGS.find((p) => p.id === prodiId) ?? PRODI_CONFIGS[0];
}

export function questionMatchesProdi(
  q: Pick<ExamQuestion, 'prodiScope'>,
  prodiId: ProdiId | 'ALL_ARCHIVE'
): boolean {
  if (prodiId === 'ALL_ARCHIVE') return true;
  const scope = q.prodiScope;
  if (!scope) return false;
  if (prodiId === 'umum') return scope === 'UMUM';
  if (scope === 'UMUM') return true;
  return Array.isArray(scope) && scope.includes(prodiId);
}
