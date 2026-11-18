export type GlossaryCategoryId = 'ALL' | 'tokoh' | 'model' | 'asesmen' | 'kepribadian';

export interface GlossaryItem {
  id: string;
  category: Exclude<GlossaryCategoryId, 'ALL'>;
  term: string;
  tag: string;
  summary: string;
  examCue: string;
}

export const GLOSSARY_CATEGORIES: { id: GlossaryCategoryId; label: string }[] = [
  { id: 'ALL', label: 'Semua Istilah' },
  { id: 'tokoh', label: 'Tokoh & Teori Belajar' },
  { id: 'model', label: 'Model, Pendekatan & Perangkat' },
  { id: 'asesmen', label: 'Asesmen & Tindak Lanjut' },
  { id: 'kepribadian', label: 'Kepribadian, SEL & Pola Kasus' },
];

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  // === 1. TOKOH & TEORI BELAJAR ===
  {
    id: 'gl-behaviorisme',
    category: 'tokoh',
    term: 'Behaviorisme (Pavlov, Thorndike, Skinner)',
    tag: '4 Aliran Belajar',
    summary:
      'Belajar dipandang sebagai perubahan perilaku yang dapat diamati akibat hubungan stimulus-respons, latihan berulang (drill), serta penguatan (reinforcement) atau konsekuensi (punishment).',
    examCue:
      'Pilih saat kasus menonjolkan pemberian pujian/poin, pembiasaan rutin, atau latihan berulang untuk membentuk perilaku teramati.',
  },
  {
    id: 'gl-kognitivisme',
    category: 'tokoh',
    term: 'Kognitivisme (Piaget, Ausubel, Bruner, Gagne)',
    tag: '4 Aliran Belajar',
    summary:
      'Belajar bukan sekadar perubahan perilaku luar, melainkan proses mental internal: perhatian, persepsi, pengolahan, pengorganisasian informasi (peta konsep, rangkuman), dan pemecahan masalah.',
    examCue:
      'Pilih saat guru mengaitkan materi baru dengan pengetahuan lama, memakai peta konsep, atau memecah langkah berpikir.',
  },
  {
    id: 'gl-konstruktivisme',
    category: 'tokoh',
    term: 'Konstruktivisme (Kognitif, Sosial & Radikal)',
    tag: '4 Aliran Belajar',
    summary:
      'Siswa aktif membangun pengetahuannya sendiri berdasarkan pengalaman nyata dan pengetahuan awal yang sudah dimiliki, sedangkan guru berperan sebagai fasilitator.',
    examCue:
      'Pilih saat siswa diajak bereksperimen, berdiskusi, menyelidiki kasus nyata, dan menyimpulkan konsep sendiri.',
  },
  {
    id: 'gl-humanisme',
    category: 'tokoh',
    term: 'Humanisme (Abraham Maslow & Carl Rogers)',
    tag: '4 Aliran Belajar',
    summary:
      'Memanusiakan manusia; proses belajar berhasil jika siswa memahami lingkungan dan dirinya sendiri, merasa aman secara emosional, dihargai martabatnya, dan diberi ruang pilihan.',
    examCue:
      'Pilih saat guru memprioritaskan rasa aman, empati, kebutuhan emosional, minat, dan aktualisasi diri siswa.',
  },
  {
    id: 'gl-bandura',
    category: 'tokoh',
    term: 'Teori Sosial-Kognitif (Albert Bandura)',
    tag: 'Tokoh Kunci',
    summary:
      'Individu belajar lewat pengamatan dan peniruan model (observational learning / modeling) melalui 4 tahap: Attention, Retention, Reproduction, dan Motivation, serta menumbuhkan self-efficacy.',
    examCue:
      'Pilih saat siswa meniru sikap sopan/prosedur kerja setelah melihat keteladanan langsung dari guru atau teman.',
  },
  {
    id: 'gl-ausubel',
    category: 'tokoh',
    term: 'David Ausubel (Meaningful Learning & Advance Organizer)',
    tag: 'Tokoh Kunci',
    summary:
      'Keberhasilan belajar bermakna bergantung pada pengaitan informasi baru dengan konsep/pengetahuan lama yang sudah ada dalam struktur kognitif siswa, dibantu kerangka pengait awal (Advance Organizer).',
    examCue:
      'Pilih saat guru membuka pelajaran dengan jembatan konsep lama menuju materi baru, bukan hafalan terpisah.',
  },
  {
    id: 'gl-piaget',
    category: 'tokoh',
    term: 'Jean Piaget (Tahap Perkembangan Kognitif)',
    tag: 'Tokoh Kunci',
    summary:
      'Pembelajaran disesuaikan tahap perkembangan berpikir siswa (Sensorimotor 0-2 th, Praoperasional 2-7 th, Operasional Konkret 7-11 th, Operasional Formal 11+ th) dan memberi ruang penemuan mandiri.',
    examCue:
      'Untuk anak SD/tahap awal konsep baru, gunakan benda konkret/alat peraga sebelum masuk ke simbol abstrak.',
  },
  {
    id: 'gl-bruner',
    category: 'tokoh',
    term: 'Jerome Bruner (Discovery Learning & Kurikulum Spiral)',
    tag: 'Tokoh Kunci',
    summary:
      'Belajar terbaik terjadi saat siswa menemukan konsep sendiri (enaktif -> ikonik -> simbolik). Dalam Kurikulum Spiral, materi inti diajarkan berulang kali dengan tingkat kedalaman makin tinggi.',
    examCue:
      'Pilih saat pertanyaan menyoroti penemuan mandiri bertahap atau pengulangan materi dengan kompleksitas meningkat.',
  },
  {
    id: 'gl-gagne',
    category: 'tokoh',
    term: 'Robert Gagne (Hierarki Belajar)',
    tag: 'Tokoh Kunci',
    summary:
      'Menjembatani behaviorisme dan kognitivisme lewat syarat belajar bertingkat: siswa tidak bisa memecahkan masalah kompleks apabila belum menguasai konsep dasar, aturan, dan membedakan objek.',
    examCue:
      'Pilih saat siswa gagal di soal aplikasi karena prasyarat konsep dasarnya belum dikuasai, lalu guru menguatkan prasyarat itu dulu.',
  },
  {
    id: 'gl-vygotsky',
    category: 'tokoh',
    term: 'Lev Vygotsky (ZPD & Scaffolding)',
    tag: 'Tokoh Kunci',
    summary:
      'Zone of Proximal Development (ZPD) adalah jarak antara kemampuan mandiri siswa dan kemampuan yang dapat dicapai dengan bantuan. Scaffolding adalah bantuan bertahap yang dikurangi seiring kemandirian.',
    examCue:
      'Pilih saat guru memberi petunjuk bertahap/tutor sebaya lalu melepas bantuan perlahan ketika siswa mulai mampu.',
  },
  {
    id: 'gl-berpikir',
    category: 'tokoh',
    term: 'Proses Berpikir (Konkret, Deduktif, Induktif, Abstrak)',
    tag: 'Catatan Inti PPG',
    summary:
      'Bernalar Konkret = mengaitkan objek/peristiwa riil; Deduktif = aturan umum ke contoh khusus; Induktif = mengamati contoh khusus lalu menarik kesimpulan umum; Abstrak = konsep tak kasatmata.',
    examCue:
      'Cermati alur guru: memberi rumus/aturan dulu lalu latihan = Deduktif; memberi kasus/data dulu lalu siswa merumuskan pola = Induktif.',
  },

  // === 2. MODEL, PENDEKATAN & PERANGKAT AJAR ===
  {
    id: 'gl-bedanya-psmm',
    category: 'model',
    term: 'Bedanya Pendekatan vs Strategi vs Model vs Metode',
    tag: 'Konsep Dasar',
    summary:
      'Pendekatan = sudut pandang umum (TaRL, CRT, CTL, Saintifik); Strategi = rencana langkah/media/waktu; Model = kerangka sintaks utuh (PBL, PjBL, Inquiry); Metode = cara teknis di kelas (diskusi, demonstrasi, eksperimen).',
    examCue:
      'Jangan tertukar di soal pilihan ganda: sintaks langkah sistematis = Model; sudut pandang terhadap murid/budaya = Pendekatan.',
  },
  {
    id: 'gl-ubd',
    category: 'model',
    term: 'UbD (Understanding by Design / Backward Design)',
    tag: 'Perencanaan',
    summary:
      'Merancang modul ajar secara alur mundur dalam 3 tahap: (1) Tetapkan tujuan akhir & pemahaman bermakna (CP/TP), (2) Tentukan bukti & instrumen asesmen ketercapaian, (3) Susun aktivitas belajar.',
    examCue:
      'Jika di soal guru sudah punya Tujuan Pembelajaran lalu menanyakan langkah berikutnya sebelum kegiatan belajar, jawabannya rancang bukti asesmen.',
  },
  {
    id: 'gl-tarl',
    category: 'model',
    term: 'TaRL (Teaching at the Right Level)',
    tag: 'Pendekatan Wajib',
    summary:
      'Pendekatan pembelajaran yang menyesuaikan aktivitas dengan tingkat capaian dan kesiapan aktual siswa dari hasil asesmen diagnostik awal, bukan semata menyamakan berdasar usia atau tingkatan kelas.',
    examCue:
      'Kata kunci: kemampuan awal kelas sangat beragam / ada yang belum menguasai dasar -> kelompokkan fleksibel sesuai level capaian.',
  },
  {
    id: 'gl-diferensiasi',
    category: 'model',
    term: 'Diferensiasi (Konten, Proses, Produk) & Gaya Belajar VARK+',
    tag: 'Pembelajaran Responsif',
    summary:
      'Konten = variasi materi/sumber belajar; Proses = variasi cara memahami (sesuai kesiapan/gaya belajar Visual, Auditory, Kinestetik, Audiovisual, Write); Produk = variasi wujud hasil karya murid.',
    examCue:
      'Fokus materi berbeda = Konten; fokus cara siswa mengolah aktivitas = Proses; fokus kebebasan format tugas akhir = Produk.',
  },
  {
    id: 'gl-udl',
    category: 'model',
    term: 'UDL / DUP (Desain Universal untuk Pembelajaran)',
    tag: 'Inklusi',
    summary:
      'Kerangka desain kelas proaktif yang sejak awal menyediakan beragam cara penyajian informasi, beragam cara siswa mengekspresikan pemahaman, dan ragam keterlibatan agar inklusif bagi semua termasuk ABK.',
    examCue:
      'Pilih saat soal membahas akomodasi hambatan belajar/disabilitas sejak perancangan bahan ajar, bukan perbaikan dadakan.',
  },
  {
    id: 'gl-crt',
    category: 'model',
    term: 'CRT (Culturally Responsive Teaching)',
    tag: 'Kontekstual Budaya',
    summary:
      'Mengintegrasikan latar belakang budaya, kebiasaan, bahasa ibu, dan kearifan lokal peserta didik ke dalam contoh, sumber belajar, dan aktivitas kelas.',
    examCue:
      'Kata kunci: materi dikaitkan budaya daerah, tradisi lokal, atau menghargai latar belakang identitas murid.',
  },
  {
    id: 'gl-ctl',
    category: 'model',
    term: 'CTL (Contextual Teaching and Learning)',
    tag: 'Pendekatan',
    summary:
      'Menghubungkan materi pembelajaran secara langsung dengan situasi nyata kehidupan sehari-hari siswa agar pembelajaran terasa relevan dan aplikatif.',
    examCue:
      'Kata kunci: menghubungkan konsep sekolah dengan persoalan keseharian/dunia kerja nyata siswa.',
  },
  {
    id: 'gl-mendalam',
    category: 'model',
    term: 'Pembelajaran Mendalam (Deep Learning: 3M)',
    tag: 'Kebijakan Baru',
    summary:
      'Proses belajar yang menekankan keterhubungan konsep lintas situasi secara Berkesadaran (mindful), Bermakna (meaningful), dan Menggembirakan (joyful), serta melatih berpikir tingkat tinggi dan refleksi.',
    examCue:
      'Pilih opsi yang membangun pemahaman konsep mendalam + refleksi sadar, bukan sekadar menghafal prosedur atau kuis cepat.',
  },
  {
    id: 'gl-pbl-pjbl',
    category: 'model',
    term: 'PBL (Problem Based) vs PjBL (Project Based Learning)',
    tag: 'Model Pembelajaran',
    summary:
      'PBL berpusat pada penyelidikan & perumusan solusi atas masalah nyata kontekstual; PjBL berpusat pada perancangan & pembuatan produk/karya nyata berkelanjutan melalui jadwal proyek dan evaluasi.',
    examCue:
      'Cara cepat memilih: ingin menganalisis masalah & cari solusi = PBL; ingin menghasilkan karya/produk/poster/alat = PjBL.',
  },
  {
    id: 'gl-discovery-inquiry',
    category: 'model',
    term: 'Discovery Learning vs Inquiry Learning',
    tag: 'Model Pembelajaran',
    summary:
      'Discovery: siswa menemukan kembali konsep lewat eksplorasi terarah dengan panduan penuntun guru. Inquiry: siswa menyelidiki pertanyaan ilmiah, merumuskan hipotesis, mengumpulkan data, dan menguji kebenaran.',
    examCue:
      'Kata kunci: menemukan konsep dengan penuntun = Discovery; menyusun hipotesis -> kumpul data -> menguji & simpulkan = Inquiry.',
  },
  {
    id: 'gl-cooperative-tps',
    category: 'model',
    term: 'Cooperative Learning & Think-Pair-Share',
    tag: 'Model Kolaborasi',
    summary:
      'Cooperative Learning menata kerja tim dengan tanggung jawab individu tiap anggota (Jigsaw, STAD). Think-Pair-Share melatih siswa berpikir sendiri (Think), berpasangan (Pair), lalu berbagi (Share).',
    examCue:
      'Jika ada siswa pemalu/pasif atau sulit langsung masuk kelompok besar, pilih Think-Pair-Share atau beri peran individu terstruktur.',
  },
  {
    id: 'gl-explicit-5m',
    category: 'model',
    term: 'Explicit Instruction & Pendekatan Saintifik (5M)',
    tag: 'Model & Pendekatan',
    summary:
      'Explicit Instruction: guru memodelkan langkah jelas, memberi latihan terbimbing, lalu mandiri (cocok untuk prosedur baru atau keselamatan kerja). Saintifik 5M: Mengamati, Menanya, Mencoba, Menalar, Mengomunikasikan.',
    examCue:
      'Pilih Explicit Instruction saat murid butuh penguasaan langkah prosedural terstruktur/keselamatan alat sebelum kerja mandiri.',
  },
  {
    id: 'gl-modul-tefa',
    category: 'model',
    term: 'Urutan Penyusunan Modul Ajar & Teaching Factory (TeFa)',
    tag: 'Perangkat & SMK',
    summary:
      'Urutan Modul Ajar: Analisis konteks/kebutuhan murid -> Tentukan CP/TP -> Rancang asesmen -> Pilih kegiatan/model -> Siapkan media -> Tindak lanjut (remedial/pengayaan/refleksi). TeFa menyelaraskan praktik dengan alur mutu industri & K3LH.',
    examCue:
      'Selalu dahulukan analisis kebutuhan & tujuan sebelum memilih media/kegiatan atau memproduksi barang di bengkel/studio.',
  },

  // === 3. ASESMEN, UMPAN BALIK & TINDAK LANJUT ===
  {
    id: 'gl-jenis-asesmen',
    category: 'asesmen',
    term: 'Asesmen Diagnostik vs Formatif vs Sumatif',
    tag: 'Jenis Asesmen',
    summary:
      'Diagnostik (sebelum belajar) = memetakan kemampuan awal, kebutuhan & minat; Formatif (selama belajar) = memantau progres, memberi umpan balik langsung & memperbaiki pengajaran; Sumatif (akhir unit) = mengukur capaian.',
    examCue:
      'Sebelum mengajar -> Diagnostik; perbaikan saat proses & sebelum UH -> Formatif; nilai akhir periode -> Sumatif.',
  },
  {
    id: 'gl-afl-aol-aal',
    category: 'asesmen',
    term: 'Assessment for (AfL), as (AaL), dan of Learning (AoL)',
    tag: 'Paradigma Asesmen',
    summary:
      'AfL (for Learning) = asesmen oleh guru untuk memperbaiki proses belajar saat berlangsung; AaL (as Learning) = melibatkan siswa merefleksikan & menilai belajarnya sendiri/teman; AoL (of Learning) = penilaian hasil akhir.',
    examCue:
      'Siswa menilai diri/teman atau berdialog merumuskan perbaikan diri sendiri = Assessment as Learning (AaL).',
  },
  {
    id: 'gl-tindak-lanjut',
    category: 'asesmen',
    term: 'Tindak Lanjut Asesmen (Belum Tuntas, Mahir, Miskonsepsi)',
    tag: 'Keputusan Guru',
    summary:
      'Belum tuntas -> analisis letak kesulitan lalu remedial terarah; Sudah mahir/cepat selesai -> beri pengayaan/tantangan baru; Ada miskonsepsi -> klarifikasi konsep dengan contoh konkret & metode berbeda.',
    examCue:
      'Jangan langsung ulang soal yang sama tanpa diagnosis, jangan biarkan murid mahir hanya menunggu diam, jangan menghukum miskonsepsi.',
  },
  {
    id: 'gl-instrumen-solo',
    category: 'asesmen',
    term: 'Instrumen Autentik, Rubrik & Taksonomi SOLO / Bloom',
    tag: 'Kualitas Penilaian',
    summary:
      'Sesuaikan instrumen: Tes tertulis (pengetahuan), Observasi + ceklis (perilaku/kerja tim), Wawancara/Jurnal (emosi/minat), Proyek/Portofolio (karya autentik), Rubrik analitik/holistik (kriteria objektif). SOLO memetakan kedalaman struktur berpikir.',
    examCue:
      'Untuk menilai proses praktik atau kolaborasi kelompok, gabungkan observasi ceklis, tugas individu, dan rubrik transparan.',
  },
  {
    id: 'gl-tpack-literasi',
    category: 'asesmen',
    term: 'TPACK, SAMR & 4 Literasi Dasar',
    tag: 'Teknologi & Literasi',
    summary:
      'TPACK memadukan teknologi, pedagogi, dan materi sesuai tujuan & ketersediaan sekolah. 4 Literasi: Membaca (evaluasi isi teks), Numerasi (data/angka/grafik), Sains (fenomena berbasis bukti), Digital (verifikasi info kritis).',
    examCue:
      'Teknologi tidak dipilih karena paling canggih/tren, melainkan karena sesuai tujuan materi, kesiapan murid, dan fasilitas yang ada.',
  },

  // === 4. KEPRIBADIAN, SOSIAL, SEL & POLA KASUS ===
  {
    id: 'gl-khd',
    category: 'kepribadian',
    term: 'Filosofi Ki Hadjar Dewantara (Among, Semboyan, Tri Pusat)',
    tag: 'Filosofi Pendidikan',
    summary:
      'Mendidik = menuntun kodrat anak menuju keselamatan & kebahagiaan; Sistem Among = membimbing dengan kasih sayang tanpa paksaan; Ing Ngarsa Sung Tulada (depan teladan), Ing Madya Mangun Karsa (tengah bangun semangat), Tut Wuri Handayani (belakang dorong); Tri Pusat = keluarga + sekolah + masyarakat.',
    examCue:
      'Pilih tindakan menuntun sesuai kodrat zaman/alam anak dan melibatkan kolaborasi orang tua serta masyarakat.',
  },
  {
    id: 'gl-p3',
    category: 'kepribadian',
    term: 'Profil Pelajar Pancasila (6 Dimensi)',
    tag: 'Kepribadian',
    summary:
      'Beriman & berakhlak mulia (jujur, peduli, integritas), Berkebinekaan global (toleran hargai budaya), Gotong royong (kolaborasi tim), Mandiri (inisiatif & tanggung jawab), Bernalar kritis (berbasis bukti), Kreatif (ide inovatif).',
    examCue:
      'Cocokkan ciri kasus dengan dimensi: kerja tim = Gotong royong; toleransi perbedaan = Berkebinekaan global; uji bukti = Bernalar kritis.',
  },
  {
    id: 'gl-sel-casel',
    category: 'kepribadian',
    term: '5 KSE (SEL CASEL) & EMC2',
    tag: 'Sosial Emosional',
    summary:
      'CASEL: (1) Kesadaran diri (kenali emosi/kekuatan), (2) Manajemen diri (atur emosi & fokus), (3) Kesadaran sosial (empati perspektif lain), (4) Keterampilan berelasi (komunikasi & resolusi konflik), (5) Pengambilan keputusan bertanggung jawab (etis & aman). EMC2 = Empathy, Mindfulness, Compassion, Critical Inquiry.',
    examCue:
      'Saat siswa emosi atau konflik, validasi perasaan secara tenang dulu (kesadaran & manajemen diri) sebelum berdialog mencari solusi.',
  },
  {
    id: 'gl-growth-mindset',
    category: 'kepribadian',
    term: 'Growth Mindset & "Power of Yet"',
    tag: 'Kepribadian Guru',
    summary:
      'Keyakinan bahwa kemampuan dapat berkembang lewat latihan terarah, strategi tepat, dan umpan balik ("belum bisa", bukan "memang tidak berbakat"). Lawannya Fixed Mindset yang melabeli kecerdasan bersifat tetap.',
    examCue:
      'Pilih respons guru yang memuji proses/strategi belajar dan mengajak mengevaluasi cara mencoba ulang.',
  },
  {
    id: 'gl-refleksi-pkb',
    category: 'kepribadian',
    term: 'Refleksi Diri Guru (Siklus Gibbs/4F) & PKB Komunitas',
    tag: 'Sosial & Profesi',
    summary:
      'Alur refleksi sistematis: Lihat data & respons siswa -> Temukan kekuatan/kendala -> Cari akar penyebab -> Rencanakan perbaikan -> Uji coba & evaluasi ulang, lalu kembangkan bersama MGMP/KKG/Lesson Study.',
    examCue:
      'Guru profesional tidak menyalahkan murid saat mayoritas kelas gagal, melainkan merefleksikan desain ajar & berkolaborasi dengan rekan sejawat.',
  },
  {
    id: 'gl-pola-kasus',
    category: 'kepribadian',
    term: 'Pola Aman Kasus Kelas, Praktikum & Bullying',
    tag: 'Pegangan UTBK',
    summary:
      'Pola umum: Kenali masalah -> Cari penyebab -> Pilih tindakan berpihak pada siswa -> Pantau hasil -> Perbaiki. Praktikum tim: cepat selesai = pengayaan; pasif = peran individu/Think-Pair-Share; mendominasi = atur giliran & rotasi peran. Bullying: lindungi korban -> hentikan perilaku tanpa mempermalukan -> dengar semua pihak -> dialog restoratif & kesepakatan kelas.',
    examCue:
      'Selalu coret opsi yang menghukum di depan kelas, melabeli, membiarkan, membandingkan murid, atau menyerahkan semua masalah ke orang tua tanpa pendampingan sekolah.',
  },
];
