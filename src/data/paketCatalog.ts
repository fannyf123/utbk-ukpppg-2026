import {
  ALL_QUESTIONS,
  getProdiPckBank,
  getProdiPuBank,
  getProdiQuestions,
} from './questionBank';
import { getProdiConfig } from './prodiRegistry';
import { JUKNIS_SUBCOMPETENCIES } from './juknisReference';
import type { ExamQuestion, MasteryRecord, ProdiId } from '../types/exam';
import {
  buildShuffledSlot,
  createInitialAnswer,
  prioritizeQuestions,
  shuffleArray,
  type Rng,
} from '../engine/randomizer';
import type { ExamSession, UserAnswer } from '../types/exam';

export type PaketGroup = 'bidang-studi' | 'pedagogi-umum';

export interface PaketDef {
  id: string;
  group: PaketGroup;
  prodiId: ProdiId;
  badge: string;
  badgeTone: 'prodi' | 'umum' | 'arsip';
  recommendedLabel?: string;
  title: string;
  subtitle: string;
  questionCount: number;
  durationMinutes: number;
  highlights: string[];
  kind: 'prodi-random' | 'fixed-ids' | 'prodi-slice' | 'pu-random' | 'pu-focus';
  pckSliceOffset?: number;
  puSliceOffset?: number;
  pckQuota?: number;
  puQuota?: number;
  fixedPrefix?: string;
  focusPattern?: RegExp;
}

export const PAKET_CATALOG: readonly PaketDef[] = [
  // === GROUP 1: BIDANG STUDI TERISOLASI KETAT PER PRODI ===
  {
    id: 'teknik-mesin-resmi',
    group: 'bidang-studi',
    prodiId: 'teknik-mesin',
    badge: 'Teknik Mesin SMK',
    badgeTone: 'prodi',
    recommendedLabel: 'Rekomendasi #1 · Prodi Anda',
    title: 'Teknik Mesin SMK · Simulasi Resmi Acak',
    subtitle:
      'Simulasi 80 soal terkalibrasi Juknis: 50 PCK Teknik Mesin murni (dari pool 106 butir) + 30 Pedagogi Umum selaras (394 butir), memprioritaskan soal belum dikerjakan.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Gambar Teknik, Proyeksi ISO & CAD Inventor',
      'Pemesinan Bubut, Frais, Gerinda & CNC G-Code',
      'Metrologi Mikrometer, Material Fe-Fe3C & Las SMAW',
      'Pedagogi Umum murni, SEL, Growth Mindset & K3LH TeFa',
    ],
    kind: 'prodi-random',
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'teknik-mesin-paket-a',
    group: 'bidang-studi',
    prodiId: 'teknik-mesin',
    badge: 'Teknik Mesin SMK',
    badgeTone: 'prodi',
    title: 'Teknik Mesin SMK · Paket Spesial A',
    subtitle:
      'Set khusus 50 soal PCK Teknik Mesin Bagian I (CAD, Bubut, Frais, CNC) dipadukan 30 Pedagogi Umum netral. Zero duplikasi dengan Paket B.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      '50 PCK Bagian 1: Proyeksi, Pemesinan, CNC Dasar',
      '30 Pedagogi Umum netral bebas mapel non-Mesin',
      'PG Tunggal, PGK Kategori (tabel), dan PGK MCMA',
      'Cocok dikerjakan berpasangan sebelum Paket Spesial B',
    ],
    kind: 'prodi-slice',
    pckSliceOffset: 0,
    puSliceOffset: 0,
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'teknik-mesin-paket-b',
    group: 'bidang-studi',
    prodiId: 'teknik-mesin',
    badge: 'Teknik Mesin SMK',
    badgeTone: 'prodi',
    title: 'Teknik Mesin SMK · Paket Spesial B',
    subtitle:
      'Set lanjutan 50 soal PCK Teknik Mesin Bagian II (Metrologi, Heat Treatment, Las, Elemen Mesin, K3LH) + 30 Pedagogi Umum terpisah dari Paket A.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      '50 PCK Bagian 2: Metrologi Presisi, Material & Pengelasan',
      'Elemen Mesin, Pneumatik-Hidrolik & Teaching Factory',
      '30 Pedagogi Umum blok kedua bebas pengulangan Paket A',
      'Analisis lengkap per subkompetensi P.1 hingga PF.5',
    ],
    kind: 'prodi-slice',
    pckSliceOffset: 50,
    puSliceOffset: 30,
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'dkv-resmi',
    group: 'bidang-studi',
    prodiId: 'dkv',
    badge: 'DKV SMK',
    badgeTone: 'prodi',
    title: 'DKV · Simulasi Resmi Acak 80 Soal',
    subtitle:
      'Simulasi penuh 80 soal terisolasi untuk Desain Komunikasi Visual: 50 PCK DKV (dari pool 79 PCK murni) + 30 Pedagogi Umum selaras tanpa soal Teknik Mesin/jurusan lain.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Tata Letak Grid, Tipografi, Warna RGB/CMYK/ICC & Pracetak',
      'Fotografi Eksposur, Studio Lighting, Audio Visual & Motion',
      'Branding GSM, Dieline Packaging, UI/UX & Etika AI/HKI',
      'K3LH Studio Ergonomis, Asesmen Portofolio & SJT TeFa DKV',
    ],
    kind: 'prodi-random',
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'pgsd-lengkap',
    group: 'bidang-studi',
    prodiId: 'pgsd',
    badge: 'PGSD',
    badgeTone: 'prodi',
    title: 'PGSD · Paket 3 Guru Kelas SD Lengkap',
    subtitle:
      'Paket bidang studi PGSD: 30 soal Pedagogi Umum konteks SD dan 50 soal PCK lintas mata pelajaran SD beserta pembahasan per opsi.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pedagogi Umum SD: UbD, diferensiasi, TaRL, UDL, asesmen',
      'Bahasa Indonesia & Matematika SD: literasi awal, pecahan',
      'IPAS, Pendidikan Pancasila, PJOK & Seni SD',
      'Kelas rendah, inklusi, perangkat ajar & PTK SD',
    ],
    kind: 'fixed-ids',
    fixedPrefix: 'arena-paket-3-pgsd-',
  },
  {
    id: 'pgsd-acak',
    group: 'bidang-studi',
    prodiId: 'pgsd',
    badge: 'PGSD',
    badgeTone: 'prodi',
    title: 'PGSD · Simulasi Acak Multi-Bank',
    subtitle:
      'Acak 50 butir dari 88 soal PCK PGSD & perkembangan anak usia SD dipadukan 30 Pedagogi Umum bebas soal SMK/SMA.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pool 88 PCK PGSD + 484 Pedagogi Umum selaras SD',
      'Prioritas pintar soal belum dikerjakan / pernah keliru',
      'Mencakup Piaget konkret, Erikson SD, literasi & numerasi',
      'Pembahasan alasan tiap pilihan & pernyataan BS',
    ],
    kind: 'prodi-random',
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'matematika-resmi',
    group: 'bidang-studi',
    prodiId: 'matematika',
    badge: 'Matematika',
    badgeTone: 'prodi',
    title: 'Matematika · Simulasi Acak 80 Soal',
    subtitle:
      '50 PCK Matematika teracak dari pool 66 butir + 30 Pedagogi Umum selaras (bersih dari soal Biologi/IPA/Bahasa Inggris).',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pool 66 PCK Matematika + 397 Pedagogi Umum selaras',
      'Miskonsepsi fungsi, aljabar, pecahan, peluang & lingkaran',
      'Teori belajar Van Hiele, Polya, Newman, Skemp & RME',
      'Acak soal baru setiap mulai ujian tanpa pengulangan kaku',
    ],
    kind: 'prodi-random',
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'bahasa-indonesia-resmi',
    group: 'bidang-studi',
    prodiId: 'bahasa-indonesia',
    badge: 'Bahasa Indonesia',
    badgeTone: 'prodi',
    title: 'Bahasa Indonesia · Simulasi Acak 80 Soal',
    subtitle:
      '50 PCK Bahasa Indonesia teracak dari pool 69 butir + 30 Pedagogi Umum selaras (bersih dari mapel sains/kejuruan).',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pool 69 PCK Bahasa Indonesia + 434 Pedagogi Umum selaras',
      'Pembelajaran berbasis genre: eksposisi, argumentasi, prosedur',
      'Menyimak, membaca, berbicara, pidato & asesmen autentik',
      'Acak soal baru setiap mulai tes dengan prioritas belum dikerjakan',
    ],
    kind: 'prodi-random',
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'ipa-resmi',
    group: 'bidang-studi',
    prodiId: 'ipa',
    badge: 'IPA / IPAS',
    badgeTone: 'prodi',
    title: 'IPA & IPAS Terpadu · Simulasi Resmi Acak',
    subtitle:
      '50 PCK IPA & IPAS (acak dari pool 83 PCK IPA: Fisika, Biologi, & Kimia PF.2/PF.3) dipadukan 30 Pedagogi Umum netral bebas mapel non-sains.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pool 83 PCK IPA + 403 Pedagogi Umum selaras sains',
      'Ekosistem, genetika, stoikiometri, kalor, fluida & inkuiri lab',
      'Model POE (Predict-Observe-Explain) & mitigasi miskonsepsi',
      'Acak 80 soal resmi Juknis setiap kali tes dimulai',
    ],
    kind: 'prodi-random',
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'smk-vokasi',
    group: 'bidang-studi',
    prodiId: 'smk-vokasi',
    badge: 'SMK Vokasi',
    badgeTone: 'prodi',
    title: 'SMK Vokasi (Pemasaran · TKJ/RPL · TKR · Listrik)',
    subtitle:
      'Simulasi penuh 80 soal / 150 menit: acak 50 dari pool 73 PCK kejuruan SMK (Pemasaran, TKJ/RPL, TKR Otomotif, TITL, APHP) + 30 Pedagogi Umum Vokasi.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pool 73 PCK SMK Vokasi terisolasi + 393 Pedagogi Umum Vokasi',
      'Terpisah bersih dari Prodi Teknik Mesin, DKV, Tata Boga, & Akuntansi',
      'SJT Teaching Factory, K3 bengkel TKR/TITL, & strategi Pemasaran/TKJ',
      'Full 80 soal · 150 menit acak dinamis sesuai Juknis UKPPPG 2026',
    ],
    kind: 'prodi-random',
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'tata-boga-resmi',
    group: 'bidang-studi',
    prodiId: 'tata-boga',
    badge: 'Tata Boga SMK',
    badgeTone: 'prodi',
    title: 'Tata Boga · Simulasi Resmi Acak 80 Soal',
    subtitle:
      'Simulasi penuh 80 soal / 150 menit: acak 50 dari pool 67 PCK Tata Boga & Kuliner (sanitasi HACCP, patiseri/kontinental, cost control, TeFa) + 30 Pedagogi Umum.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pool 67 PCK Tata Boga murni + 384 Pedagogi Umum selaras SMK',
      'Murni bidang kuliner/Tata Boga tanpa campur soal Mesin/DKV',
      'Mengukur Teaching Factory, K3 dapur, & asesmen praktik boga',
      'Full 80 soal · 150 menit acak dinamis setiap kali mulai tes',
    ],
    kind: 'prodi-random',
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'akuntansi-resmi',
    group: 'bidang-studi',
    prodiId: 'akuntansi',
    badge: 'Akuntansi SMK',
    badgeTone: 'prodi',
    title: 'Akuntansi & Keuangan · Simulasi Acak 80 Soal',
    subtitle:
      'Simulasi penuh 80 soal / 150 menit: acak 50 dari pool 63 PCK Akuntansi & Keuangan Lembaga (siklus akuntansi, perpajakan TER/fiskal, MYOB/spreadsheet) + 30 Pedagogi Umum.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pool 63 PCK Akuntansi murni + 384 Pedagogi Umum selaras SMK',
      'Fokus pencatatan transaksi, rekonsiliasi, HPP, pajak & diagnostik',
      'Bebas soal bengkel teknik, DKV, maupun mapel SMP/SMA',
      'Full 80 soal · 150 menit acak dinamis setiap kali mulai tes',
    ],
    kind: 'prodi-random',
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'bahasa-inggris-resmi',
    group: 'bidang-studi',
    prodiId: 'bahasa-inggris',
    badge: 'Bahasa Inggris',
    badgeTone: 'prodi',
    title: 'Bahasa Inggris · Simulasi Resmi Acak 80 Soal',
    subtitle:
      'Simulasi penuh 80 soal / 150 menit: acak 50 dari pool 83 PCK Bahasa Inggris (genre-based approach, communicative grammar, SJT kelas EFL, authentic assessment) + 30 Pedagogi Umum.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pool 83 PCK Bahasa Inggris + 380 Pedagogi Umum netral',
      'Scaffolding teks multimodal, CLT, & diagnostik literasi',
      'Terpisah bersih dari Bahasa Indonesia maupun mapel kejuruan',
      'Full 80 soal · 150 menit acak dinamis setiap kali mulai tes',
    ],
    kind: 'prodi-random',
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'ips-resmi',
    group: 'bidang-studi',
    prodiId: 'ips',
    badge: 'IPS Terpadu',
    badgeTone: 'prodi',
    title: 'IPS Terpadu · Simulasi Resmi Acak 80 Soal',
    subtitle:
      'Simulasi penuh 80 soal / 150 menit: acak 50 dari pool 111 PCK IPS (sosiologi, ekonomi, geografi, sejarah kontekstual, & studi kasus sosial berbasis inkuiri) + 30 Pedagogi Umum.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pool 111 PCK IPS teraudit + 380 Pedagogi Umum netral',
      'Analisis spasial, interaksi sosial, & literasi ekonomi terpadu',
      'Murni rumpun IPS bebas soal IPA maupun teknik bengkel',
      'Full 80 soal · 150 menit acak dinamis setiap kali mulai tes',
    ],
    kind: 'prodi-random',
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'pjok-resmi',
    group: 'bidang-studi',
    prodiId: 'pjok',
    badge: 'PJOK',
    badgeTone: 'prodi',
    title: 'PJOK · Simulasi Resmi Acak 80 Soal',
    subtitle:
      'Simulasi penuh 80 soal / 150 menit: acak 50 dari pool 63 PCK PJOK (biomekanika gerak, TGFU/permainan, kebugaran FITT, P3K RICE, & inklusi) + 30 Pedagogi Umum.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pool 63 PCK PJOK teraudit + 380 Pedagogi Umum netral',
      'Mengukur keselamatan gerak, TGFU, K3 olahraga & asesmen psikomotor',
      'Bebas soal lintas prodi non-olahraga',
      'Full 80 soal · 150 menit acak dinamis setiap kali mulai tes',
    ],
    kind: 'prodi-random',
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'ppkn-resmi',
    group: 'bidang-studi',
    prodiId: 'ppkn',
    badge: 'PPKn / Pancasila',
    badgeTone: 'prodi',
    title: 'PPKn / Pendidikan Pancasila · Simulasi 80 Soal',
    subtitle:
      'Simulasi penuh 80 soal / 150 menit: acak 50 dari pool 67 PCK PPKn & Pendidikan Pancasila (konstitusi, HAM, kebinekaan, UbD, & resolusi konflik kelas) + 30 Pedagogi Umum.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pool 67 PCK PPKn murni + 380 Pedagogi Umum netral',
      'Studi kasus nilai Pancasila, ketatanegaraan, HAM, & karakter P5',
      'Bebas soal hafalan pasal kering ala CPNS/PPPK',
      'Full 80 soal · 150 menit acak dinamis setiap kali mulai tes',
    ],
    kind: 'prodi-random',
    pckQuota: 50,
    puQuota: 30,
  },
  {
    id: 'pai-resmi',
    group: 'bidang-studi',
    prodiId: 'pai',
    badge: 'PAI',
    badgeTone: 'prodi',
    title: 'PAI · Simulasi Resmi Acak 80 Soal',
    subtitle:
      'Simulasi penuh 80 soal / 150 menit: acak 50 dari pool 163 PCK PAI (fikih ibadah kontekstual, akidah akhlak, moderasi beragama, Qurdis, SKI & PAI inklusif) + 30 Pedagogi Umum.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pool 163 PCK PAI teraudit + 380 Pedagogi Umum netral',
      'Pembelajaran PAI kontekstual berbasis HOTS & moderasi beragama',
      'Bebas soal hafalan teknis non-pedagogis',
      'Full 80 soal · 150 menit acak dinamis setiap kali mulai tes',
    ],
    kind: 'prodi-random',
    pckQuota: 50,
    puQuota: 30,
  },

  // === GROUP 2: PEDAGOGI UMUM & ARSIP UMUM ===
  {
    id: 'ppg-catatan-fokus',
    group: 'pedagogi-umum',
    prodiId: 'umum',
    badge: 'Fokus Materi PPG',
    badgeTone: 'umum',
    recommendedLabel: 'Rekomendasi #2 · Catatan & MK PPG',
    title: 'Fokus Catatan UKPPPG & Materi PPG · 80 Soal',
    subtitle:
      'Kurasi acak 80 soal yang difokuskan pada Asesmen Formatif, Tokoh (Ausubel, Piaget, Bruner, Gagne, Vygotsky), 4 Aliran Belajar, Berpikir Konkret-Deduktif-Induktif-Abstrak, Diferensiasi, Gaya Belajar (VARK, Audiovisual, Write), serta MK PPG (UbD, PM, CASEL, EMC2, Growth Mindset).',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Lengkap 5 Tokoh (Ausubel, Piaget, Bruner, Gagne, Vygotsky ZPD/Scaffolding)',
      'Asesmen Formatif, 4 Aliran Teori Belajar & Berpikir Induktif-Deduktif',
      'Diferensiasi Konten-Proses-Produk & Gaya Belajar Audiovisual-Write-VARK',
      'SEL CASEL, EMC2, Growth Mindset, UDL & 4 Kompetensi Guru',
    ],
    kind: 'pu-focus',
    puQuota: 80,
    focusPattern:
      /formatif|ausubel|piaget|bruner|gagne|vygotsky|zpd|scaffolding|konstruktivis|kognitivis|behavioris|humanis|deduktif|induktif|abstrak|konkret|diferensiasi|visual|auditor|kinestetik|audiovisual|vark|\bubd\b|pembelajaran mendalam|deep learning|casel|emc|growth mindset|udl|tarl|kompetensi/i,
  },
  {
    id: 'pu-murni-30',
    group: 'pedagogi-umum',
    prodiId: 'umum',
    badge: 'Umum Murni',
    badgeTone: 'umum',
    title: 'Pedagogi Umum Murni · Latihan Cepat 30 Soal',
    subtitle:
      '30 soal Pedagogi Umum netral (porsi standar PU dalam UTBK) yang ditarik secara acak dari 394 butir murni bebas nama jurusan atau mata pelajaran spesifik.',
    questionCount: 30,
    durationMinutes: 56,
    highlights: [
      '100% bebas istilah teknik jurusan tertentu sehingga tidak ambigu',
      'Teori belajar, UbD, Pembelajaran Mendalam, UDL & TaRL',
      'SEL CASEL, EMC², Growth Mindset & Etika Profesi Guru',
      'Ideal untuk pemanasan harian 56 menit sesuai standar Juknis',
    ],
    kind: 'pu-random',
    puQuota: 30,
  },
  {
    id: 'pu-murni-80',
    group: 'pedagogi-umum',
    prodiId: 'umum',
    badge: 'Umum Murni',
    badgeTone: 'umum',
    recommendedLabel: 'Rekomendasi #5 · MK PPG Umum Netral',
    title: 'Pedagogi Umum Murni · Simulasi Penuh 80 Soal',
    subtitle:
      'Simulasi maraton 80 soal dalam 150 menit yang seluruhnya berisi Pedagogi Umum murni, Kepribadian, Sosial & Filosofi Pendidikan.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Latihan ketahanan konsentrasi penuh 80 butir / 150 menit',
      'Zero soal jurusan lain: aman untuk calon guru semua prodi',
      'Lengkap PG Tunggal, PGK Kategori, dan PGK MCMA',
      'Pemetaan detail capaian P.1–P.6, K.1–K.3, S.1–S.3 & PF',
    ],
    kind: 'pu-random',
    puQuota: 80,
  },
  {
    id: 'paket-1-umum',
    group: 'pedagogi-umum',
    prodiId: 'umum',
    badge: 'Lintas Konteks · Paket 1',
    badgeTone: 'arsip',
    recommendedLabel: 'Rekomendasi #3 · Tokoh & Teori Belajar',
    title: 'Try Out Umum SIAPPPG · Paket 1',
    subtitle:
      'Paket pembuka SIAPPPG untuk mengenal bentuk soal dan ritme ujian (memakai ilustrasi kelas lintas mapel sebagai studi kasus pedagogik).',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Teori belajar: Skinner, Bandura, Vygotsky, Piaget, Bruner',
      'Asesmen formatif, rubrik, taksonomi Bloom dan SOLO',
      'Pembelajaran Mendalam, diferensiasi, UDL, dan TaRL',
      'Etika profesi, inklusi, dan pemikiran Ki Hadjar Dewantara',
    ],
    kind: 'fixed-ids',
    fixedPrefix: 'arena-paket-1-',
  },
  {
    id: 'paket-2-umum',
    group: 'pedagogi-umum',
    prodiId: 'umum',
    badge: 'Lintas Konteks · Paket 2',
    badgeTone: 'arsip',
    title: 'Try Out Umum SIAPPPG · Paket 2',
    subtitle:
      'Paket lanjutan SIAPPPG dengan teori dan kasus berbeda dari Paket 1 (studi kasus lintas mapel sebagai latihan refleksi pedagogik).',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pengondisian klasik, Thorndike, Erikson, Maslow, atribusi Weiner',
      'Manajemen kelas, pembelajaran langsung, dan model kooperatif',
      'Kualitas instrumen tes, umpan balik, dan numerasi',
      'Literasi digital dan AI, coaching, supervisi, perlindungan murid',
    ],
    kind: 'fixed-ids',
    fixedPrefix: 'arena-paket-2-',
  },
  {
    id: 'paket-3-umum',
    group: 'pedagogi-umum',
    prodiId: 'umum',
    badge: 'Lintas Konteks · Paket 3',
    badgeTone: 'arsip',
    recommendedLabel: 'Rekomendasi #4 · Formatif, 4 Aliran & PGK',
    title: 'Try Out Umum SIAPPPG · Paket 3',
    subtitle:
      'Paket bergaya simulasi dengan lebih banyak soal benar–salah berlapis dan pilihan ganda kompleks serta pembahasan lengkap tiap opsi.',
    questionCount: 80,
    durationMinutes: 150,
    highlights: [
      'Pembelajaran Mendalam, UDL, TaRL, dan diferensiasi kasus kelas',
      'SEL, growth mindset, EMC², dan etika profesi guru',
      'Taksonomi SOLO, Bloom, Marzano, dan asesmen autentik',
      'Teori belajar: Dewey, Kolb, Schank, Habermas, Bruner, Ausubel',
    ],
    kind: 'fixed-ids',
    fixedPrefix: 'arena-paket-3-',
  },
];

export function getPaketById(id: string): PaketDef | undefined {
  return PAKET_CATALOG.find((p) => p.id === id);
}

function fillBalancedRemaining(
  prioritized: ExamQuestion[],
  picked: ExamQuestion[],
  pickedIds: Set<string>,
  targetTotal: number
): ExamQuestion[] {
  if (picked.length >= targetTotal) return picked.slice(0, targetTotal);
  const out = [...picked];
  const minKat = Math.round(targetTotal * 0.2);
  const minMcma = Math.round(targetTotal * 0.2);

  let katCount = out.filter((q) => q.type === 'PGK_KATEGORI').length;
  let mcmaCount = out.filter((q) => q.type === 'PGK_MCMA').length;

  for (const q of prioritized) {
    if (out.length >= targetTotal) break;
    if (pickedIds.has(q.id)) continue;
    if (q.type === 'PGK_KATEGORI' && katCount < minKat) {
      out.push(q);
      pickedIds.add(q.id);
      katCount++;
    } else if (q.type === 'PGK_MCMA' && mcmaCount < minMcma) {
      out.push(q);
      pickedIds.add(q.id);
      mcmaCount++;
    }
  }

  for (const q of prioritized) {
    if (out.length >= targetTotal) break;
    if (pickedIds.has(q.id)) continue;
    out.push(q);
    pickedIds.add(q.id);
  }
  return out;
}

function selectStratifiedRandom(
  pckBank: readonly ExamQuestion[],
  puBank: readonly ExamQuestion[],
  pckQuota: number,
  puQuota: number,
  mastery: Record<string, MasteryRecord>,
  rng: Rng
): ExamQuestion[] {
  const pckPrio = prioritizeQuestions(pckBank, mastery, rng);
  const puPrio = prioritizeQuestions(puBank, mastery, rng);
  const pckPicked: ExamQuestion[] = [];
  const puPicked: ExamQuestion[] = [];
  const pickedIds = new Set<string>();

  // Pass 1: Ensure every Juknis Lampiran 4 subcompetency (P.1-PF.5) present in pool is covered
  for (const meta of JUKNIS_SUBCOMPETENCIES) {
    const code = meta.code;
    const preferPckFirst = code.startsWith('PF.');
    const order = preferPckFirst
      ? [
          { pool: pckPrio, target: pckPicked, cap: pckQuota },
          { pool: puPrio, target: puPicked, cap: puQuota },
        ]
      : [
          { pool: puPrio, target: puPicked, cap: puQuota },
          { pool: pckPrio, target: pckPicked, cap: pckQuota },
        ];

    for (const bucket of order) {
      if (bucket.target.length >= bucket.cap) continue;
      const match = bucket.pool.find((q) => q.subkompetensi === code && !pickedIds.has(q.id));
      if (match) {
        bucket.target.push(match);
        pickedIds.add(match.id);
        break;
      }
    }
  }

  const finalPck = shuffleArray(fillBalancedRemaining(pckPrio, pckPicked, pickedIds, pckQuota), rng);
  const finalPu = shuffleArray(fillBalancedRemaining(puPrio, puPicked, pickedIds, puQuota), rng);
  return [...finalPck, ...finalPu];
}

/**
 * Mengembalikan daftar soal statis atau representatif untuk preview komposisi paket di halaman detail.
 */
export function resolvePaketQuestions(
  paket: PaketDef,
  mastery: Record<string, MasteryRecord> = {},
  rng: Rng = Math.random
): ExamQuestion[] {
  if (paket.kind === 'fixed-ids' && paket.fixedPrefix) {
    const prefix = paket.fixedPrefix;
    return ALL_QUESTIONS.filter((q) => {
      if (!q.id.startsWith(prefix)) return false;
      const tail = q.id.slice(prefix.length);
      return /^\d+$/.test(tail);
    }).sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
  }

  if (paket.kind === 'pu-focus') {
    const puBank = getProdiPuBank('umum');
    const rx =
      paket.focusPattern ??
      /formatif|ausubel|piaget|bruner|gagne|vygotsky|zpd|scaffolding/i;
    const catatanFirst = prioritizeQuestions(
      puBank.filter((q) => q.id.startsWith('cat-ppg-')),
      mastery,
      rng
    );
    const matchingRest = prioritizeQuestions(
      puBank.filter(
        (q) =>
          !q.id.startsWith('cat-ppg-') &&
          rx.test(`${q.topic} ${q.prompt} ${q.explanation}`)
      ),
      mastery,
      rng
    );
    const need = Math.min(paket.puQuota ?? 80, puBank.length);
    const picked = [...catatanFirst];
    const pickedIds = new Set(picked.map((q) => q.id));
    const balanced = fillBalancedRemaining(matchingRest, picked, pickedIds, need);
    if (balanced.length >= need) {
      return shuffleArray(balanced.slice(0, need), rng);
    }
    const restPool = prioritizeQuestions(puBank, mastery, rng);
    return shuffleArray(
      fillBalancedRemaining(restPool, balanced, pickedIds, need),
      rng
    );
  }

  if (paket.kind === 'pu-random') {
    const puBank = getProdiPuBank('umum');
    const need = Math.min(paket.puQuota ?? 30, puBank.length);
    return selectStratifiedRandom([], puBank, 0, need, mastery, rng);
  }

  const pckBank = getProdiPckBank(paket.prodiId);
  const puBank = getProdiPuBank(paket.prodiId);
  const pckQuota = Math.min(paket.pckQuota ?? 50, pckBank.length);
  const puQuota = Math.min(paket.puQuota ?? 30, puBank.length);

  if (paket.kind === 'prodi-slice') {
    const pOff = paket.pckSliceOffset ?? 0;
    const uOff = paket.puSliceOffset ?? 0;
    const pckSlice = pckBank.slice(pOff, pOff + pckQuota);
    if (pckSlice.length < pckQuota) {
      const ids = new Set(pckSlice.map((q) => q.id));
      pckSlice.push(...pckBank.filter((q) => !ids.has(q.id)).slice(0, pckQuota - pckSlice.length));
    }
    const puSlice = puBank.slice(uOff, uOff + puQuota);
    if (puSlice.length < puQuota) {
      const ids = new Set(puSlice.map((q) => q.id));
      puSlice.push(...puBank.filter((q) => !ids.has(q.id)).slice(0, puQuota - puSlice.length));
    }
    return [...pckSlice, ...puSlice];
  }

  // prodi-random: stratified 17 subcompetencies + balanced PG/Kategori/MCMA + unseen priority
  return selectStratifiedRandom(pckBank, puBank, pckQuota, puQuota, mastery, rng);
}

export function createSessionFromPaket(
  paket: PaketDef,
  mastery: Record<string, MasteryRecord>,
  options?: {
    participantName?: string;
    mixBanksOrder?: boolean;
    now?: number;
    rng?: Rng;
  }
): ExamSession {
  const rng = options?.rng ?? Math.random;
  const now = options?.now ?? Date.now();
  const prodiCfg = getProdiConfig(paket.prodiId);

  const selectedRaw = resolvePaketQuestions(paket, mastery, rng);
  const ordered = options?.mixBanksOrder
    ? shuffleArray(selectedRaw, rng)
    : selectedRaw;

  const shuffleOptions = paket.kind !== 'fixed-ids' || Boolean(options?.mixBanksOrder);
  const slots = ordered.map((q) => buildShuffledSlot(q, rng, shuffleOptions));
  const answers: Record<string, UserAnswer> = {};
  for (const slot of slots) {
    answers[slot.question.id] = createInitialAnswer(slot.question);
  }

  const durationSeconds = paket.durationMinutes * 60;
  return {
    id: `paket-${paket.id}-${now}-${Math.floor(rng() * 10000)}`,
    mode: 'official',
    paketId: paket.id,
    prodiId: paket.prodiId,
    prodiLabel: prodiCfg.shortLabel,
    participantName: options?.participantName?.trim() || undefined,
    title: paket.title,
    instantFeedback: false,
    createdAt: now,
    durationSeconds,
    endsAt: now + durationSeconds * 1000,
    currentIndex: 0,
    flaggedIds: [],
    revealedIds: [],
    slots,
    answers,
  };
}

export function getPaketStaticComposition(paket: PaketDef): {
  pck: number;
  pu: number;
  byCompetency: Record<string, number>;
  byType: Record<'PG' | 'PGK_KATEGORI' | 'PGK_MCMA', number>;
  maxPoints: number;
} {
  // Deterministic preview using stable ordering
  const previewQs = resolvePaketQuestions(paket, {}, () => 0.49);
  const byCompetency: Record<string, number> = {
    Pedagogik: 0,
    Kepribadian: 0,
    Sosial: 0,
    Profesional: 0,
  };
  const byType = { PG: 0, PGK_KATEGORI: 0, PGK_MCMA: 0 };
  let pck = 0;
  let pu = 0;
  let maxPoints = 0;
  for (const q of previewQs) {
    if (q.bank === 'PCK') pck++;
    else pu++;
    byCompetency[q.kompetensi] = (byCompetency[q.kompetensi] ?? 0) + 1;
    byType[q.type]++;
    maxPoints += q.type === 'PGK_KATEGORI' ? q.statements.length : 5;
  }
  return { pck, pu, byCompetency, byType, maxPoints };
}

export function getTotalAvailableUniqueQuestions(): number {
  return ALL_QUESTIONS.length;
}

export function getAllProdiSummary() {
  return {
    totalQuestions: ALL_QUESTIONS.length,
    totalPackets: PAKET_CATALOG.length,
    mesinTotal: getProdiQuestions('teknik-mesin').length,
  };
}
