import fs from 'node:fs';
import path from 'node:path';

const DRY_RUN = process.argv.includes('--dry-run');
const ROOT = 'D:/videcoding/utbk-ukpppg-2026';

// ============================================================================
// 1. Parse all 480 items from D:\videcoding\_arena\e2.html
// ============================================================================
const s = fs.readFileSync('D:/videcoding/_arena/e2.html', 'utf8');
const BS = 92;
function extractArray(name) {
  const re = new RegExp('[,;\\s(]' + name + '=\\[');
  const m = re.exec(s);
  if (!m) throw new Error('no array ' + name);
  const i = s.indexOf('[', m.index + m[0].length - 1);
  let depth = 0, q = null, esc = false;
  for (let j = i; j < s.length; j++) {
    const c = s[j];
    if (esc) { esc = false; continue; }
    if (c.charCodeAt(0) === BS) { esc = true; continue; }
    if (q) { if (c === q) q = null; continue; }
    if (c === '"' || c === "'" || c === '`') { q = c; continue; }
    if (c === '[' || c === '{' || c === '(') depth++;
    else if (c === ']' || c === '}' || c === ')') { depth--; if (depth === 0) return s.slice(i, j + 1); }
  }
  throw new Error('unbalanced ' + name);
}
const startFn = s.indexOf('function Oy(');
const qyStart = s.indexOf('qy=[', startFn);
let idx0 = s.indexOf('[', qyStart);
let depth = 0, q = null, esc = false, qyEnd = -1;
for (let j = idx0; j < s.length; j++) {
  const c = s[j];
  if (esc) { esc = false; continue; }
  if (c.charCodeAt(0) === BS) { esc = true; continue; }
  if (q) { if (c === q) q = null; continue; }
  if (c === '"' || c === "'" || c === '`') { q = c; continue; }
  if (c === '[' || c === '{' || c === '(') depth++;
  else if (c === ']' || c === '}' || c === ')') { depth--; if (depth === 0) { qyEnd = j + 1; break; } }
}
const arrays = ['zy','Ry','Gy','Ly','gy','py','by','oy','hy','cy','fy','jy','vy','xy','Ay','Dy','Py','Ty','Cy','Op','Ey','Ky'];
let decls = '';
for (const a of arrays) { try { decls += 'const ' + a + '=' + extractArray(a) + ';\n'; } catch {} }
const fb = new Proxy({}, { has: (t, k) => typeof k === 'string' && !(k in globalThis), get: (t, k) => (typeof k === 'string' ? '' : undefined) });
const pakets = new Function('__fb', 'with(__fb){' + decls + '\n' + s.slice(startFn, qyEnd).replace(/^qy=\[/, 'const qy=[') + ';\nreturn qy;}')(fb);

const cleanTxt = (v) => {
  if (v == null) return '';
  if (typeof v === 'string') {
    return v
      .replace(/<[^>]+>/g, '')
      .replace(/\u2014/g, ' - ')
      .replace(/\u2013/g, '–')
      .replace(/\r/g, '')
      .trim();
  }
  if (Array.isArray(v)) return v.map(cleanTxt).filter(Boolean).join('\n\n');
  if (typeof v === 'object') return Object.values(v).map(cleanTxt).filter(Boolean).join('\n\n');
  return String(v).trim();
};

const shortQuote = (txt) => {
  const single = txt.replace(/\s+/g, ' ').trim();
  if (single.length <= 58) return single;
  return single.slice(0, 55).trimEnd() + '...';
};

const subToKompetensi = (kode) => {
  if (kode.startsWith('P.')) return 'Pedagogik';
  if (kode.startsWith('K.')) return 'Kepribadian';
  if (kode.startsWith('S.')) return 'Sosial';
  return 'Profesional';
};

const inferGeneralTopic = (kode, text) => {
  const lower = text.toLowerCase();
  if (kode === 'S.1' || kode === 'K.3' || /\bsel\b|casel|emosi|bullying|empati|mediasi|school well-being/.test(lower)) {
    return 'Sosial-Emosional (SEL)';
  }
  if (kode === 'K.2' || /growth mindset|pola pikir bertumbuh|power of yet|refleksi|neuroplastisitas/.test(lower)) {
    return 'Growth Mindset & Refleksi';
  }
  if (kode === 'K.1' || kode === 'PF.1' || /ki hadjar|sistem among|etik|privasi|integritas|pancasila/.test(lower)) {
    return 'Filosofi, Nilai & Etika Profesi';
  }
  if (kode === 'PF.3' || /piaget|vygotsky|erikson|tahap perkembangan|zpd|adhd|disleksia|autistik|ppi|inklusi/.test(lower)) {
    return 'PPDP & Perkembangan Murid';
  }
  if (kode === 'S.2' || kode === 'S.3' || kode === 'PF.5' || /kombel|mgmp|kkg|ptk|orang tua|mitra|supervisi/.test(lower)) {
    return 'Kemitraan, Kombel & PTK';
  }
  return 'PMA, Asesmen & Pedagogi';
};

const inferMathTopic = (text) => {
  const l = text.toLowerCase();
  if (/fungsi|aljabar|persamaan|pertidaksamaan|barisan|deret|logaritma|matriks|linier|kuadrat|polinomial|pecahan/.test(l)) {
    return 'PCK Mat · Aljabar, Bilangan & Fungsi';
  }
  if (/segitiga|lingkaran|kubus|balok|prisma|limas|bangun|pythagoras|geometri|van hiele|luas|volume|kongruen|kesebangunan|transformasi/.test(l)) {
    return 'PCK Mat · Geometri & Pengukuran';
  }
  if (/trigonometri|sin|cos|tan|turunan|integral|limit|kalkulus|gradien/.test(l)) {
    return 'PCK Mat · Trigonometri & Kalkulus';
  }
  if (/statistika|peluang|kombinatorik|median|modus|rata-rata|data|probabilitas|diagram|kuesioner/.test(l)) {
    return 'PCK Mat · Statistika & Peluang';
  }
  return 'PCK Mat · RME, Polya & Miskonsepsi';
};

const inferIndoTopic = (text) => {
  const l = text.toLowerCase();
  if (/puisi|cerpen|drama|prosa|pantun|majas|sastra|novel|hikayat|pementasan/.test(l)) {
    return 'PCK B.Ind · Apresiasi & Sastra';
  }
  if (/pidato|debat|menyimak|podcast|berbicara|presentasi|lisan|membaca|literasi/.test(l)) {
    return 'PCK B.Ind · Menyimak, Membaca & Lisan';
  }
  if (/eyd|puebi|ejaan|imbuhan|kalimat efektif|morfologi|sintaksis|kosakata|diksi|kohesi|fakta dan opini/.test(l)) {
    return 'PCK B.Ind · Kebahasaan & Kalimat';
  }
  return 'PCK B.Ind · Teks Berbasis Genre & Menulis';
};

const inferPgsdTopic = (paket, no, text) => {
  if (paket.bagian) {
    const b = paket.bagian.find((sec) => no >= sec.dari && no <= sec.sampai);
    if (b && b.nama !== 'Pedagogi Umum') return `PCK PGSD · ${b.nama}`;
  }
  const l = text.toLowerCase();
  if (/pecahan|perkalian|pembagian|bilangan|keliling|luas|matematika/.test(l)) return 'PCK PGSD · Matematika SD';
  if (/ipa|ipas|daur air|tumbuhan|energi|gaya|magnet|ekosistem|fotosintesis|listrik/.test(l)) return 'PCK PGSD · IPAS SD';
  if (/membaca|menulis|cerita|huruf|fonik|kosakata|paragraf|bahasa indonesia|literasi/.test(l)) return 'PCK PGSD · Bahasa Indonesia SD';
  return 'PCK PGSD · Lintas Pembelajaran SD';
};

// Explicit manual overrides / rules for exact Prodi sync
const ARENA_PRODI_MAP = {
  // Paket 1
  'arena-paket-1-02': { prodis: ['bahasa-indonesia'] }, // membaca puisi
  'arena-paket-1-03': { prodis: ['matematika', 'pgsd'] }, // penjumlahan pecahan scaffolding Vygotsky
  'arena-paket-1-04': { prodis: ['pgsd', 'ipa'] }, // Piaget gelas air 8 thn -> concrete SD
  'arena-paket-1-05': { prodis: ['pgsd'] }, // Piaget Rafi 5 thn -> PAUD/SD awal
  'arena-paket-1-06': { prodis: ['pgsd', 'matematika'], bank: 'PCK' }, // pecahan 1/4 melipat kertas -> PCK PGSD/Mat
  'arena-paket-1-07': { prodis: ['ipa'], bank: 'PCK' }, // fotosintesis Ausubel -> IPA
  'arena-paket-1-08': { prodis: ['bahasa-indonesia'] }, // paragraf deskripsi -> B.Ind
  'arena-paket-1-09': { prodis: ['ipa', 'pgsd'] }, // mamalia konsep hewan
  'arena-paket-1-10': { prodis: ['matematika'] }, // ulangan matematika growth mindset
  'arena-paket-1-13': { prodis: ['ips'], bank: 'PCK', topic: 'PCK IPS · Ekonomi & Nilai' }, // ekonomi inflasi six facets
  'arena-paket-1-15': { prodis: ['ipa'], bank: 'PCK' }, // sistem peredaran darah + PCK media
  'arena-paket-1-16': { prodis: ['pgsd'] }, // guru kelas 5 literasi
  'arena-paket-1-17': { prodis: ['ipa'], bank: 'PCK' }, // gerak parabola UDL
  'arena-paket-1-18': { prodis: ['ipa', 'pgsd'] }, // daur air 3 bahan bacaan
  'arena-paket-1-20': { prodis: ['ipa'], bank: 'PCK' }, // kecambah gelap terang
  'arena-paket-1-21': { prodis: ['ipa'], bank: 'PCK' }, // kalor vs suhu exit ticket
  'arena-paket-1-24': { prodis: ['matematika'] }, // soal cerita perbandingan
  'arena-paket-1-25': { prodis: ['ipa', 'pgsd'] }, // penebangan hutan erosi SOLO
  'arena-paket-1-28': { prodis: ['matematika', 'pgsd'] }, // asesmen sumatif bab pecahan
  'arena-paket-1-29': { prodis: ['ipa'] }, // laporan praktikum IPA
  'arena-paket-1-32': { prodis: ['ipa', 'pgsd'] }, // kompos 4 minggu
  'arena-paket-1-34': { prodis: ['ipa'], bank: 'PCK' }, // percobaan pemantulan cahaya
  'arena-paket-1-36': { prodis: ['ipa', 'smk-vokasi'] }, // mengukur pH tanah petani
  'arena-paket-1-42': { prodis: ['ipa', 'pgsd'] }, // ekosistem mangrove pesisir
  'arena-paket-1-46': { prodis: ['umum'] }, // perkuliahan peserta PPG -> general
  'arena-paket-1-47': { prodis: ['bahasa-indonesia', 'pgsd'] }, // pembelajaran kalimat tanya refleksi
  'arena-paket-1-48': { prodis: ['bahasa-indonesia', 'umum'] }, // PTK keterampilan menulis
  'arena-paket-1-57': { prodis: ['ipa'], bank: 'PCK' }, // Guru IPA gerak parabola
  'arena-paket-1-61': { prodis: ['pgsd', 'matematika'], bank: 'PCK' }, // Guru kelas 2 15-7 (Bruner CRA)
  'arena-paket-1-62': { prodis: ['ipa'], bank: 'PCK' }, // tekanan zat cair
  'arena-paket-1-63': { prodis: ['matematika', 'pgsd'], bank: 'PCK' }, // Polya memeriksa kewajaran soal cerita
  'arena-paket-1-64': { prodis: ['bahasa-indonesia'], bank: 'PCK' }, // siklus genre teks eksposisi
  'arena-paket-1-65': { prodis: ['ipa'], bank: 'PCK' }, // Pak Rahmat tujuan pembelajaran IPA
  // Paket 2
  'arena-paket-2-05': { prodis: ['pgsd'] }, // Erikson murid SD
  'arena-paket-2-06': { prodis: ['pgsd'] }, // Murid kelas 1 private speech
  'arena-paket-2-07': { prodis: ['ipa'] }, // remaja menguji variabel pertumbuhan tanaman
  'arena-paket-2-08': { prodis: ['pgsd'] }, // anak usia 5 tahun Piaget animisme
  'arena-paket-2-24': { prodis: ['bahasa-indonesia', 'umum'] }, // portofolio karya tulis
  'arena-paket-2-26': { prodis: ['bahasa-indonesia', 'umum'] }, // argumen didukung bukti
  'arena-paket-2-28': { prodis: ['matematika', 'umum'] }, // numerasi membaca grafik tagihan listrik
  'arena-paket-2-30': { prodis: ['lintas-mapel'] }, // sanggar seni lokal / seni budaya
  'arena-paket-2-33': { prodis: ['matematika', 'pgsd'] }, // diskalkulia
  'arena-paket-2-43': { prodis: ['ipa'], bank: 'PCK' }, // percobaan suhu air gula larut
  'arena-paket-2-46': { prodis: ['matematika', 'pgsd'], bank: 'PCK' }, // pecahan membagi resep kue 12 orang
  'arena-paket-2-61': { prodis: ['ipa'], bank: 'PCK' }, // POE kayu tenggelam
  'arena-paket-2-62': { prodis: ['ipa'], bank: 'PCK' }, // miskonsepsi benda berat jatuh lebih cepat
  'arena-paket-2-64': { prodis: ['pgsd', 'bahasa-indonesia'], bank: 'PCK' }, // literasi awal membaca nyaring
  'arena-paket-2-65': { prodis: ['matematika'], bank: 'PCK' }, // Skemp luas memakai rumus
  'arena-paket-2-66': { prodis: ['bahasa-inggris'], bank: 'PCK', topic: 'PCK Bahasa Inggris · CLT, Speaking & Teks' }, // Guru Bahasa Inggris bermain peran
  'arena-paket-2-67': { prodis: ['pjok'], bank: 'PCK', topic: 'PCK PJOK · Inklusi & Permainan Bola' }, // PJOK keterbatasan motorik
  'arena-paket-2-68': { prodis: ['smk-vokasi'], bank: 'PCK', topic: 'Vokasi · Informatika & Berpikir Komputasional' }, // Informatika jadwal piket
  'arena-paket-2-69': { prodis: ['ppkn'], bank: 'PCK', topic: 'PCK PPKn · Etika, Moral & Kewarganegaraan' }, // dilema menyontek pendidikan moral/PPKn
  'arena-paket-2-74': { prodis: ['ipa'], bank: 'PCK' }, // mengukur pH lakmus
  'arena-paket-2-75': { prodis: ['ipa', 'pgsd'], bank: 'PCK' }, // siklus air SOLO
  'arena-paket-2-77': { prodis: ['dkv', 'tata-boga', 'akuntansi', 'smk-vokasi', 'umum'] }, // pelaku UMKM mitra kewirausahaan (Cocok utk semua/vokasi)
  // Paket 3
  'arena-paket-3-01': { prodis: ['pgsd'] }, // Dimas kelas V
  'arena-paket-3-02': { prodis: ['lintas-mapel'] }, // Prakarya SMP
  'arena-paket-3-03': { prodis: ['ipa', 'lintas-mapel'] }, // kelas VIII persoalan lingkungan
  'arena-paket-3-04': { prodis: ['pgsd'] }, // KKG (SD)
  'arena-paket-3-08': { prodis: ['bahasa-indonesia'], bank: 'PCK' }, // Guru Bahasa Indonesia surat resmi
  'arena-paket-3-10': { prodis: ['lintas-mapel'] }, // kelas VII berkelahi
  'arena-paket-3-12': { prodis: ['ipa', 'umum'] }, // topik hemat energi autentik
  'arena-paket-3-13': { prodis: ['ips'], bank: 'PCK', topic: 'PCK IPS · Sosiologi, Relokasi & Asesmen' }, // Bu Indri IPS relokasi PKL
  'arena-paket-3-14': { prodis: ['ips'], bank: 'PCK', topic: 'PCK IPS · Geografi & Peta Digital' }, // pelajaran peta digital
  'arena-paket-3-15': { prodis: ['ipa', 'teknik-mesin', 'umum'] }, // merakit jembatan stik es krim
  'arena-paket-3-16': { prodis: ['pgsd', 'ipa', 'teknik-mesin'] }, // observasi tuas & roda gigi bengkel sepeda
  'arena-paket-3-17': { prodis: ['ips'], bank: 'PCK', topic: 'PCK IPS · Geografi & Tutupan Lahan' }, // Guru Geografi tutupan lahan
  'arena-paket-3-18': { prodis: ['pgsd', 'matematika'] }, // Guru kelas IV berhitung beragam
  'arena-paket-3-19': { prodis: ['ipa', 'pgsd'], bank: 'PCK' }, // Bu Santika IPA siklus hidup hewan
  'arena-paket-3-22': { prodis: ['pgsd', 'ipa'] }, // kelas IV bagian tumbuhan
  'arena-paket-3-23': { prodis: ['ips'], bank: 'PCK', topic: 'PCK IPS · Pembelajaran Mendalam & TIK' }, // Guru IPS Pembelajaran Mendalam
  'arena-paket-3-25': { prodis: ['matematika', 'pgsd'] }, // Bu Sekar mengajar pecahan
  'arena-paket-3-27': { prodis: ['ipa'], bank: 'PCK' }, // gaya dan gerak miskonsepsi
  'arena-paket-3-30': { prodis: ['bahasa-indonesia', 'pgsd'] }, // menulis paragraf umpan balik
  'arena-paket-3-37': { prodis: ['matematika', 'pgsd'] }, // numerasi growth mindset
  'arena-paket-3-42': { prodis: ['ipa'], bank: 'PCK' }, // asesmen tentang gaya SOLO
  'arena-paket-3-43': { prodis: ['ipa'], bank: 'PCK' }, // sumber energi terbarukan
  'arena-paket-3-44': { prodis: ['ips'], bank: 'PCK', topic: 'PCK IPS · Kependudukan & Data Statistik' }, // pertumbuhan penduduk (IPS/Geografi)
  'arena-paket-3-45': { prodis: ['bahasa-indonesia'], bank: 'PCK' }, // Guru Bahasa Indonesia pidato persuasif
  'arena-paket-3-51': { prodis: ['pgsd', 'ipa'] }, // kelas VI rangkaian listrik sederhana
  'arena-paket-3-52': { prodis: ['matematika'] }, // bunga tunggal soal rutin
  'arena-paket-3-54': { prodis: ['lintas-mapel'] }, // Prakarya anyaman bambu CRT
  'arena-paket-3-57': { prodis: ['pgsd'] }, // kelas IV ADHD
  'arena-paket-3-58': { prodis: ['bahasa-inggris'], bank: 'PCK', topic: 'PCK Bahasa Inggris · Growth Mindset & Grammar' }, // Guru Bahasa Inggris simple past tense
  'arena-paket-3-60': { prodis: ['pgsd'] }, // PPI kelas V
  'arena-paket-3-61': { prodis: ['ips'], bank: 'PCK', topic: 'PCK IPS · Ekonomi Konsumsi & Keuangan' }, // Ekonomi paylater
  'arena-paket-3-62': { prodis: ['lintas-mapel'] }, // SMP School Well-Being
  'arena-paket-3-63': { prodis: ['ipa'], bank: 'PCK' }, // projek penjernih air gaya belajar Kolb
  'arena-paket-3-65': { prodis: ['ips', 'matematika'], bank: 'PCK', topic: 'PCK IPS · Skala Peta & Numerasi' }, // skala peta 1:100.000
  'arena-paket-3-66': { prodis: ['pgsd', 'ipa'], bank: 'PCK' }, // Bu Meli IPAS kelas V pegunungan kopi
  'arena-paket-3-67': { prodis: ['ipa'], bank: 'PCK' }, // Bu Rina sistem pencernaan
  'arena-paket-3-68': { prodis: ['matematika'], bank: 'PCK' }, // Guru Matematika luas jajargenjang
  'arena-paket-3-69': { prodis: ['pjok'], bank: 'PCK', topic: 'PCK PJOK · Growth Mindset & Atletik' }, // lompat jauh olahraga
  'arena-paket-3-70': { prodis: ['pjok'], bank: 'PCK', topic: 'PCK PJOK · TGfU & Permainan Bola' }, // sepak bola kelas VIII TGfU
  'arena-paket-3-71': { prodis: ['bahasa-indonesia'], bank: 'PCK' }, // kalimat fakta vs opini
  'arena-paket-3-72': { prodis: ['matematika'], bank: 'PCK' }, // Guru Matematika PTK soal cerita
  'arena-paket-3-74': { prodis: ['ips'], bank: 'PCK', topic: 'PCK IPS · Ekonomi & Inflasi Kontekstual' }, // Guru IPS inflasi
  'arena-paket-3-75': { prodis: ['ipa', 'pgsd'], bank: 'PCK' }, // rantai makanan SOLO
  'arena-paket-3-76': { prodis: ['ipa', 'pgsd'], bank: 'PCK' }, // Guru IPAS kesiapsiagaan bencana
  'arena-paket-3-77': { prodis: ['ipa'], bank: 'PCK' }, // percobaan cahaya kecambah
  'arena-paket-3-78': { prodis: ['ips'], bank: 'PCK', topic: 'PCK IPS · Geografi & Masalah Perkotaan' }, // Geografi permukiman kumuh
  'arena-paket-3-80': { prodis: ['pgsd', 'bahasa-indonesia'], bank: 'PCK' }, // Guru kelas II menulis kalimat
  // Paket 4 no<=30
  'arena-paket-4-matematika-01': { prodis: ['ipa'] }, // IPAS SMP energi
  'arena-paket-4-matematika-02': { prodis: ['matematika'] }, // Bu Lestari Matematika VII
  'arena-paket-4-matematika-03': { prodis: ['ips'], bank: 'PCK', topic: 'PCK IPS · Ekonomi SMA & Kontekstual' }, // IPS Ekonomi SMA
  'arena-paket-4-matematika-04': { prodis: ['pgsd', 'matematika'] }, // Bu Mira kelas V pecahan
  'arena-paket-4-matematika-05': { prodis: ['pgsd', 'ipa'] }, // siklus air kelas VI
  'arena-paket-4-matematika-06': { prodis: ['bahasa-indonesia'] }, // Bu Wati Bahasa Indonesia VIII
  'arena-paket-4-matematika-07': { prodis: ['matematika'] }, // Pak Anton Matematika SMP
  'arena-paket-4-matematika-08': { prodis: ['smk-vokasi'] }, // SMK Pertanian projek kebun
  'arena-paket-4-matematika-09': { prodis: ['lintas-mapel'] }, // Prakarya IX
  'arena-paket-4-matematika-10': { prodis: ['lintas-mapel'] }, // SMP desa pesisir
  'arena-paket-4-matematika-11': { prodis: ['ipa'], bank: 'PCK' }, // Fisika Hukum Newton SMA
  'arena-paket-4-matematika-12': { prodis: ['bahasa-indonesia'] }, // paragraf argumentasi kelas IX
  'arena-paket-4-matematika-15': { prodis: ['pgsd', 'ipa'] }, // IPAS kelas IV
  'arena-paket-4-matematika-16': { prodis: ['lintas-mapel'] }, // Di kelas VII SMP
  'arena-paket-4-matematika-17': { prodis: ['bahasa-inggris'], bank: 'PCK', topic: 'PCK Bahasa Inggris · MGMP & Asesmen' }, // MGMP Bahasa Inggris
  'arena-paket-4-matematika-19': { prodis: ['bahasa-indonesia'] }, // Bu Nuri Bahasa Indonesia
  'arena-paket-4-matematika-21': { prodis: ['ips'], bank: 'PCK', topic: 'PCK IPS · Sosiologi & Konteks Masyarakat' }, // Sosiologi SMA
  'arena-paket-4-matematika-22': { prodis: ['pgsd', 'ipa'] }, // Bu Maya IPAS V sawah
  'arena-paket-4-matematika-23': { prodis: ['lintas-mapel'] }, // Seni Budaya SMP
  'arena-paket-4-matematika-24': { prodis: ['ipa'], bank: 'PCK' }, // Fisika gelombang simulasi
  'arena-paket-4-matematika-25': { prodis: ['ipa'], bank: 'PCK' }, // Biologi kelas X
  'arena-paket-4-matematika-26': { prodis: ['bahasa-indonesia'] }, // Bahasa Indonesia SMP
  'arena-paket-4-matematika-27': { prodis: ['ipa'], bank: 'PCK' }, // Bu Ratih IPA VIII
  'arena-paket-4-matematika-28': { prodis: ['ips'], bank: 'PCK', topic: 'PCK IPS · Sejarah & Refleksi Guru' }, // Sejarah XI
  'arena-paket-4-matematika-29': { prodis: ['lintas-mapel'] }, // wali kelas VIII
  'arena-paket-4-matematika-30': { prodis: ['pgsd'] }, // Bu Wulan kelas IV SD
  // Paket 5 no<=30
  'arena-paket-5-bahasa-indonesia-02': { prodis: ['lintas-mapel'] }, // kelas VIII
  'arena-paket-5-bahasa-indonesia-03': { prodis: ['ipa'], bank: 'PCK' }, // Discovery Learning sifat bayangan cermin VIII
  'arena-paket-5-bahasa-indonesia-04': { prodis: ['ipa'] }, // energi terbarukan X
  'arena-paket-5-bahasa-indonesia-05': { prodis: ['bahasa-indonesia'] }, // Bima menulis paragraf VII
  'arena-paket-5-bahasa-indonesia-06': { prodis: ['lintas-mapel'] }, // kelas IX
  'arena-paket-5-bahasa-indonesia-07': { prodis: ['lintas-mapel'] }, // kelas VII
  'arena-paket-5-bahasa-indonesia-08': { prodis: ['lintas-mapel'] }, // kelas VIII
  'arena-paket-5-bahasa-indonesia-09': { prodis: ['bahasa-indonesia', 'lintas-mapel'] }, // kebiasaan membaca VIII
  'arena-paket-5-bahasa-indonesia-11': { prodis: ['ipa'], bank: 'PCK' }, // IPA kelas VII paus bukan ikan
  'arena-paket-5-bahasa-indonesia-13': { prodis: ['ipa'], bank: 'PCK' }, // simulasi pencemaran sungai IX
  'arena-paket-5-bahasa-indonesia-14': { prodis: ['matematika', 'pgsd'] }, // pecahan Pak Anwar
  'arena-paket-5-bahasa-indonesia-16': { prodis: ['lintas-mapel'] }, // kelas IX
  'arena-paket-5-bahasa-indonesia-17': { prodis: ['ipa'], bank: 'PCK' }, // Pak Heru ekosistem UbD
  'arena-paket-5-bahasa-indonesia-18': { prodis: ['lintas-mapel'] }, // Seni Rupa batik
  'arena-paket-5-bahasa-indonesia-19': { prodis: ['lintas-mapel'] }, // kelas VIII
  'arena-paket-5-bahasa-indonesia-20': { prodis: ['lintas-mapel'] }, // kelas VII
  'arena-paket-5-bahasa-indonesia-23': { prodis: ['bahasa-indonesia', 'ipa'] }, // teks laporan percobaan VIII
  'arena-paket-5-bahasa-indonesia-25': { prodis: ['pjok'], bank: 'PCK', topic: 'PCK PJOK · Kebugaran & Siklus Kolb' }, // PJOK kebugaran Kolb
  'arena-paket-5-bahasa-indonesia-27': { prodis: ['bahasa-indonesia', 'pgsd'] }, // literasi numerasi VII
  'arena-paket-5-bahasa-indonesia-28': { prodis: ['lintas-mapel'] }, // wali kelas VII
};

// Build converted 480 _arena questions
const arenaConverted = [];
for (const p of pakets) {
  for (const x of p.soal) {
    const id = `arena-${p.id}-${String(x.no).padStart(2, '0')}`;
    const stemParts = [cleanTxt(x.teks), cleanTxt(x.tanya)].filter(Boolean);
    const prompt = stemParts.join('\n\n');
    const fullText = `${prompt} ${(x.opsi || []).join(' ')}`;
    const ov = ARENA_PRODI_MAP[id];

    // Determine bank & prodiScope & topic
    let bank = 'PU';
    let prodiScope = 'UMUM';
    let topic = inferGeneralTopic(x.kode, fullText);

    if (p.id === 'paket-3-pgsd') {
      if (x.no >= 31) {
        bank = 'PCK';
        prodiScope = ['pgsd'];
        topic = inferPgsdTopic(p, x.no, fullText);
      } else {
        prodiScope = ['pgsd'];
        topic = inferGeneralTopic(x.kode, fullText);
      }
    } else if (p.id === 'paket-4-matematika') {
      if (x.no >= 31) {
        bank = 'PCK';
        prodiScope = ['matematika'];
        topic = inferMathTopic(fullText);
      } else if (ov) {
        bank = ov.bank || 'PU';
        prodiScope = ov.prodis;
        if (bank === 'PCK' && prodiScope.includes('ipa')) topic = 'PCK IPA · Fisika, Biologi & Sains';
      } else {
        // Items like #13,#14 in p4 might mention VIII/XI in vignette
        if (/\b(kelas\s+(vii+|ix|x\b|xi+)|smp|sma|smk|sd\b)\b/i.test(prompt)) {
          prodiScope = ['lintas-mapel'];
        }
      }
    } else if (p.id === 'paket-5-bahasa-indonesia') {
      if (x.no >= 31) {
        bank = 'PCK';
        prodiScope = ['bahasa-indonesia'];
        topic = inferIndoTopic(fullText);
      } else if (ov) {
        bank = ov.bank || 'PU';
        prodiScope = ov.prodis;
        if (bank === 'PCK' && prodiScope.includes('ipa')) topic = 'PCK IPA · Fisika, Biologi & Sains';
      } else {
        if (/\b(kelas\s+(vii+|ix|x\b|xi+)|smp|sma|smk|sd\b)\b/i.test(prompt)) {
          prodiScope = ['lintas-mapel'];
        }
      }
    } else {
      // paket-1, paket-2, paket-3
      if (ov) {
        bank = ov.bank || 'PU';
        prodiScope = ov.prodis;
        if (ov.topic) topic = ov.topic;
        else if (bank === 'PCK') {
          if (prodiScope.includes('ipa') && prodiScope.includes('pgsd')) topic = 'PCK IPAS · Ekosistem, Siklus Air & Sains';
          else if (prodiScope.includes('ipa')) topic = 'PCK IPA · Fisika, Biologi & Sains';
          else if (prodiScope.includes('matematika')) topic = inferMathTopic(fullText);
          else if (prodiScope.includes('bahasa-indonesia')) topic = inferIndoTopic(fullText);
          else if (prodiScope.includes('pgsd')) topic = inferPgsdTopic(p, x.no, fullText);
        }
      } else {
        // Safety check for stray level or PF.2
        if (x.kode === 'PF.2' || /\b(kelas\s+\d+|kelas\s+(i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii)\b|sd\b|smp\b|sma\b|smk\b)\b/i.test(prompt)) {
          prodiScope = ['lintas-mapel'];
        }
      }
    }

    const base = {
      id,
      bank,
      topic,
      prodiScope,
      source: `Tryout UKPPPG SIAPPPG (${p.nama} #${x.no})`,
      kompetensi: subToKompetensi(x.kode),
      subkompetensi: x.kode,
      prompt,
    };

    // Format answer + explanation cleanly
    if (x.tipe === 'pg') {
      const options = x.opsi.map((o) => cleanTxt(o));
      const ansIdx = 'ABCDE'.indexOf(String(x.kunci).trim().toUpperCase());
      if (ansIdx < 0 || ansIdx >= options.length) throw new Error(`Bad PG kunci at ${id}: ${x.kunci}`);
      const parts = [];
      if (x.konsep) parts.push(cleanTxt(x.konsep));
      if (x.ulasan) parts.push(cleanTxt(x.ulasan));
      if (Array.isArray(x.bahas)) {
        for (let oi = 0; oi < options.length; oi++) {
          const bRow = x.bahas[oi];
          const reason = cleanTxt(Array.isArray(bRow) ? bRow[2] : bRow);
          if (reason) {
            const flag = oi === ansIdx ? 'Tepat' : 'Kurang Tepat';
            parts.push(`• [${flag}] "${shortQuote(options[oi])}": ${reason}`);
          }
        }
      }
      arenaConverted.push({
        ...base,
        type: 'PG',
        options,
        answer: ansIdx,
        explanation: parts.join('\n') || 'Pilih opsi yang paling selaras dengan prinsip pedagogik/profesional pada soal.',
      });
    } else if (x.tipe === 'multi') {
      const options = x.opsi.map((o) => cleanTxt(o));
      const answer = [...String(x.kunci).trim().toUpperCase()]
        .map((ch) => 'ABCDE'.indexOf(ch))
        .filter((idx) => idx >= 0 && idx < options.length)
        .sort((a, b) => a - b);
      if (answer.length < 1) throw new Error(`Bad MULTI kunci at ${id}: ${x.kunci}`);
      const ansSet = new Set(answer);
      const parts = [];
      if (x.konsep) parts.push(cleanTxt(x.konsep));
      if (x.ulasan) parts.push(cleanTxt(x.ulasan));
      if (Array.isArray(x.bahas)) {
        for (let oi = 0; oi < options.length; oi++) {
          const bRow = x.bahas[oi];
          const reason = cleanTxt(Array.isArray(bRow) ? bRow[2] : bRow);
          if (reason) {
            const flag = ansSet.has(oi) ? 'Benar Dipilih' : 'Bukan Kunci';
            parts.push(`• [${flag}] "${shortQuote(options[oi])}": ${reason}`);
          }
        }
      }
      arenaConverted.push({
        ...base,
        type: 'PGK_MCMA',
        options,
        answer,
        explanation: parts.join('\n') || 'Centang seluruh pernyataan yang akurat sesuai prinsip pembelajaran/evaluasi.',
      });
    } else if (x.tipe === 'bs') {
      const kStr = String(x.kunci).trim().toUpperCase();
      if (kStr.length !== x.opsi.length) throw new Error(`Bad BS kunci len at ${id}: ${kStr}`);
      let categories = ['Benar', 'Salah'];
      const lbs = cleanTxt(x.labelBS || '');
      const tLow = prompt.toLowerCase();
      if (lbs.includes('/')) {
        const sp = lbs.split('/').map((z) => z.trim());
        if (sp.length === 2 && sp[0] && sp[1]) categories = [sp[0], sp[1]];
      } else if (/sesuai\s+atau\s+tidak\s+sesuai/i.test(tLow)) {
        categories = ['Sesuai', 'Tidak Sesuai'];
      } else if (/tepat\s+atau\s+(tidak|kurang)\s+tepat/i.test(tLow)) {
        categories = ['Tepat', 'Kurang Tepat'];
      } else if (/setuju\s+atau\s+tidak\s+setuju/i.test(tLow)) {
        categories = ['Setuju', 'Tidak Setuju'];
      }

      const statements = x.opsi.map((stText, rIdx) => {
        const ch = kStr[rIdx];
        const answer = ch === 'B' || ch === 'S' ? (ch === 'B' ? 0 : 1) : 0;
        const bRow = Array.isArray(x.bahas) ? x.bahas[rIdx] : null;
        const reason = cleanTxt(Array.isArray(bRow) ? bRow[2] : bRow) || undefined;
        return { text: cleanTxt(stText), answer, reason };
      });

      const explParts = [];
      if (x.konsep) explParts.push(cleanTxt(x.konsep));
      if (x.ulasan) explParts.push(cleanTxt(x.ulasan));
      if (explParts.length === 0) {
        explParts.push('Evaluasi ketepatan masing-masing pernyataan secara terpisah berdasarkan prinsip yang diujikan.');
      }

      arenaConverted.push({
        ...base,
        type: 'PGK_KATEGORI',
        categories,
        statements,
        explanation: explParts.join('\n'),
      });
    }
  }
}

// ============================================================================
// 2. Tag ustExtracted.json (129 soal) accurately
// ============================================================================
const ustRaw = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/ustExtracted.json'), 'utf8'));
const UST_SUB_TOPIC_MAP = {
  'ust-setuju-01': { prodiScope: ['teknik-mesin', 'smk-vokasi'], bank: 'PU', topic: 'PMA & Asesmen (Vokasi Mesin/TKR)' },
  'ust-setuju-02': { prodiScope: ['tata-boga'], bank: 'PCK', topic: 'PCK Tata Boga · Kuliner Dasar SMK' },
  'ust-setuju-03': { prodiScope: ['teknik-mesin', 'smk-vokasi'], bank: 'PU', topic: 'PMA & Asesmen (Vokasi Mesin)' },
  'ust-setuju-04': { prodiScope: ['akuntansi'], bank: 'PCK', topic: 'PCK Akuntansi · Laporan Keuangan SMK' },
  'ust-setuju-05': { prodiScope: ['smk-vokasi'], bank: 'PCK', topic: 'SJT Vokasi · TKJ / Jaringan' },
  'ust-setuju-06': { prodiScope: ['dkv'], bank: 'PCK', topic: 'PCK DKV · Teaching Factory & Kemitraan' },
  'ust-setuju-07': { prodiScope: ['smk-vokasi'], bank: 'PCK', topic: 'SJT Vokasi · Teknik Kendaraan Ringan' },
  'ust-setuju-08': { prodiScope: ['tata-boga'], bank: 'PCK', topic: 'PCK Tata Boga · Produksi Pastry SMK' },
  'ust-setuju-09': { prodiScope: ['smk-vokasi'], bank: 'PCK', topic: 'SJT Vokasi · RPL / Pemrograman' },
  'ust-setuju-10': { prodiScope: ['smk-vokasi'], bank: 'PCK', topic: 'SJT Vokasi · TITL / Listrik' },
  'ust-setuju-11': { prodiScope: ['smk-vokasi'], bank: 'PCK', topic: 'SJT Vokasi · Agribisnis (APHP)' },
  'ust-setuju-12': { prodiScope: ['smk-vokasi'], bank: 'PCK', topic: 'SJT Vokasi · TKR Motor Injeksi' },
  'ust-setuju-13': { prodiScope: ['smk-vokasi'], bank: 'PCK', topic: 'SJT Vokasi · Animasi SMK' },
  'ust-setuju-14': { prodiScope: ['teknik-mesin', 'smk-vokasi'], bank: 'PU', topic: 'PMA & Asesmen (Vokasi Mesin)' },
  'ust-setuju-15': { prodiScope: ['smk-vokasi'], bank: 'PCK', topic: 'SJT Vokasi · TKJ / Jaringan' },
  'ust-biya-01': { prodiScope: ['lintas-mapel', 'teknik-mesin', 'dkv', 'tata-boga', 'akuntansi', 'smk-vokasi', 'matematika', 'bahasa-indonesia', 'bahasa-inggris', 'ips', 'pjok', 'ppkn', 'pai'] }, // kelas XI
  'ust-gm-01': { prodiScope: ['pgsd'] }, // kelas V
  'ust-gm-03': { prodiScope: ['pgsd', 'ipa'] }, // IPAS kelas VI
  'ust-gm-04': { prodiScope: ['pgsd', 'matematika'] }, // pecahan kelas V
  'ust-gm-05': { prodiScope: ['lintas-mapel'] }, // dosen & mahasiswa pembacaan puisi -> tidak masuk sekolah UMUM
  'ust-gm-08': { prodiScope: ['lintas-mapel'] }, // poster seni rupa
  'ust-gm-09': { prodiScope: ['pgsd'] }, // kelas IV
  'ust-gm-10': { prodiScope: ['lintas-mapel'] }, // gambar perspektif seni rupa
  'ust-hermar-ppdp-01': { prodiScope: ['pgsd', 'ipa'] }, // IPAS kelas IV
  'ust-hermar-ppdp-02': { prodiScope: ['pgsd', 'matematika'] }, // Matematika kelas III
  'ust-hermar-ppdp-04': { prodiScope: ['pgsd'] }, // kelas V
  'ust-yuli-sel-16': { prodiScope: ['ppkn'], bank: 'PCK', topic: 'PCK PPKn · Kebinekaan & Pancasila' }, // Pendidikan Pancasila
  'ust-yuli-sel-20': { prodiScope: ['lintas-mapel', 'ipa', 'matematika', 'bahasa-indonesia'] }, // kelas VII
  'ust-desy-pma-08': { prodiScope: ['umum'] }, // poster anti-perundungan literasi media
  'ust-desy-pma-12': { prodiScope: ['umum'] }, // proyek debat gawai di sekolah
};

const ustConverted = ustRaw.map((item) => {
  const cleanPrompt = item.prompt.replace(/\u2014/g, ' - ');
  const cleanExpl = item.explanation.replace(/\u2014/g, ' - ');
  if (item.id.startsWith('ust-ipa-')) {
    return { ...item, prompt: cleanPrompt, explanation: cleanExpl, bank: 'PCK', prodiScope: ['ipa'], topic: 'PCK IPA · Konsep & Asesmen SMP' };
  }
  if (item.id.startsWith('ust-dwi-ppdp-')) {
    return { ...item, prompt: cleanPrompt, explanation: cleanExpl, bank: 'PCK', prodiScope: ['dkv'], topic: 'PCK DKV · PPDP & Manajemen Studio' };
  }
  if (item.id.startsWith('ust-sel-sma-')) {
    return { ...item, prompt: cleanPrompt, explanation: cleanExpl, bank: 'PU', prodiScope: ['bahasa-indonesia'], topic: 'SEL & Etika (Bahasa Indonesia)' };
  }
  if (item.id.startsWith('ust-desy-pma-')) {
    const ov = UST_SUB_TOPIC_MAP[item.id];
    if (ov) return { ...item, prompt: cleanPrompt, explanation: cleanExpl, ...ov };
    return { ...item, prompt: cleanPrompt, explanation: cleanExpl, bank: 'PU', prodiScope: ['bahasa-indonesia'], topic: 'PMA & Asesmen (Bahasa Indonesia)' };
  }
  const ov = UST_SUB_TOPIC_MAP[item.id];
  if (ov) {
    return { ...item, prompt: cleanPrompt, explanation: cleanExpl, ...ov };
  }
  return { ...item, prompt: cleanPrompt, explanation: cleanExpl, prodiScope: 'UMUM' };
});

// ============================================================================
// 3. Report Stats Across All 7 Prodis!
// ============================================================================
const PRODI_LIST = [
  'teknik-mesin',
  'dkv',
  'tata-boga',
  'akuntansi',
  'smk-vokasi',
  'pgsd',
  'matematika',
  'bahasa-indonesia',
  'bahasa-inggris',
  'ipa',
  'ips',
  'pjok',
  'ppkn',
  'pai',
  'umum',
];

const PU_KAT_SCOPE = {
  'pu-kat-01': ['teknik-mesin', 'dkv', 'tata-boga', 'akuntansi', 'smk-vokasi'],
  'pu-kat-02': ['teknik-mesin', 'dkv', 'tata-boga', 'akuntansi', 'smk-vokasi', 'matematika', 'bahasa-indonesia', 'bahasa-inggris', 'ipa', 'ips', 'pjok', 'ppkn', 'pai'],
  'pu-kat-06': ['teknik-mesin', 'smk-vokasi'],
  'pu-kat-09': ['teknik-mesin', 'smk-vokasi'],
  'pu-kat-10': ['teknik-mesin', 'dkv', 'tata-boga', 'akuntansi', 'smk-vokasi'],
  'pu-kat-12': ['teknik-mesin', 'dkv', 'tata-boga', 'akuntansi', 'smk-vokasi'],
  'pu-kat-13': ['teknik-mesin', 'smk-vokasi'],
  'pu-kat-14': ['teknik-mesin'],
  'pu-kat-17': ['teknik-mesin', 'smk-vokasi'],
  'pu-kat-18': ['teknik-mesin'],
};
const puKatIds = Array.from({ length: 18 }, (_, k) => `pu-kat-${String(k + 1).padStart(2, '0')}`);

let fungsionalArr = [];
try {
  fungsionalArr = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/fungsionalExtracted.json'), 'utf8'));
} catch {}

function matchesProdi(prodiScope, target) {
  if (target === 'umum') return prodiScope === 'UMUM';
  if (prodiScope === 'UMUM') return true;
  return Array.isArray(prodiScope) && prodiScope.includes(target);
}

const combinedVirtual = [
  ...arenaConverted,
  ...ustConverted,
  ...fungsionalArr,
  ...Array.from({ length: 102 }, (_, i) => ({ id: `pck-mesin-${i}`, bank: 'PCK', prodiScope: ['teknik-mesin'] })),
  ...Array.from({ length: 55 }, (_, i) => ({ id: `pck-dkv-${i}`, bank: 'PCK', prodiScope: ['dkv'] })),
  ...puKatIds.map((id) => ({ id, bank: 'PU', prodiScope: PU_KAT_SCOPE[id] || 'UMUM' })),
];

console.log(`Total unique questions processed: ${combinedVirtual.length} (arena=${arenaConverted.length}, ust=${ustConverted.length}, mesin=102, dkv=55, puKat=18, web=${fungsionalArr.length})`);
console.log('\n=== PER-PRODI ELIGIBLE QUESTION POOLS ===');
for (const pr of PRODI_LIST) {
  const pool = combinedVirtual.filter((q) => matchesProdi(q.prodiScope, pr));
  const pck = pool.filter((q) => q.bank === 'PCK').length;
  const pu = pool.filter((q) => q.bank === 'PU').length;
  console.log(`  ${pr.padEnd(20)} -> Total=${String(pool.length).padStart(3)} | PCK=${String(pck).padStart(3)} | PU=${String(pu).padStart(3)}`);
}
const lintas = combinedVirtual.filter((q) => Array.isArray(q.prodiScope) && q.prodiScope.includes('lintas-mapel'));
console.log(`  ${'lintas-mapel-only'.padEnd(20)} -> Total=${lintas.length}`);

// Check STRICT_UMUM pool for any accidental leaked mapel/jenjang words!
const strictUmum = combinedVirtual.filter((q) => q.prodiScope === 'UMUM' && q.prompt);
const leakRe = /\b(tkj|rpl|dkv|tkr|tbsm|titl|boga|kuliner|akuntansi|aphp|bubut|frais|cnc|mgmp teknik mesin|membersihkan mesin|pgsd|kelas\s+[1-6]\b|kelas\s+(i|ii|iii|iv|v|vi|vii|viii|ix|x|xi|xii)\b|sd\b|smp\b|sma\b|smk\b|vokasi|matematika|persamaan|trigonometri|bahasa indonesia|cerpen|puisi|ipa\b|ipas\b|fisika|biologi|kimia|bahasa inggris|pjok|olahraga|sejarah|geografi|ekonomi tentang|sosiologi|pendidikan pancasila)\b/i;
const leaks = strictUmum.filter((q) => leakRe.test(q.prompt));
console.log(`\nStrict UMUM pool size=${strictUmum.length}, remaining keyword leaks=${leaks.length}`);
for (const l of leaks) {
  console.log(`  LEAK ${l.id}: ${l.prompt.slice(0, 100)}`);
}

if (!DRY_RUN) {
  fs.writeFileSync(path.join(ROOT, 'src/data/arenaExtracted.json'), JSON.stringify(arenaConverted, null, 2));
  fs.writeFileSync(path.join(ROOT, 'src/data/ustExtracted.json'), JSON.stringify(ustConverted, null, 2));
  console.log('\nWrote src/data/arenaExtracted.json & updated src/data/ustExtracted.json!');
}
