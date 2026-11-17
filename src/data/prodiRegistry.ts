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
    id: 'ipa',
    label: 'IPA & IPAS (SMP / Terpadu)',
    shortLabel: 'IPA / IPAS',
    jenjang: 'SMP / Terpadu',
    pckBadge: 'PCK IPA TERPADU',
    description:
      'Penyelidikan ilmiah & asesmen IPA/IPAS (perubahan wujud, kalor & suhu, gerak parabola, hukum Newton, gelombang, ekosistem, pernapasan/pencernaan) beserta Pedagogi Umum selaras.',
  },
  {
    id: 'smk-vokasi',
    label: 'SMK Vokasi Lainnya (TKJ/RPL · TKR · Listrik · Boga · Akuntansi)',
    shortLabel: 'SMK Vokasi',
    jenjang: 'SMK · Lintas Keahlian',
    pckBadge: 'SJT KEJURUAN VOKASI',
    description:
      'Himpunan kasus kejuruan TKJ, RPL, Teknik Kendaraan Ringan (TKR), TITL Listrik, Tata Boga, Akuntansi, Animasi & APHP (terpisah dari Teknik Mesin & DKV) beserta Pedagogi Umum vokasional.',
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
