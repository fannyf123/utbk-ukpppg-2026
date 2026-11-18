import type { ExamQuestion } from '../types/exam';

/**
 * Kurasi butir fokus sesuai catatan UKPPPG (Formatif, Tokoh & Teori Belajar,
 * 4 Aliran Belajar, Proses Berpikir Konkret-Deduktif-Induktif-Abstrak,
 * Diferensiasi Konten-Proses-Produk, Gaya Belajar VARK + Audiovisual + Write,
 * serta 4 Kompetensi Guru & Kurikulum PPG Prajabatan 2026).
 */
export const PPG_CATATAN_EXTRAS: ExamQuestion[] = [
  // === 16 BUTIR UMUM (prodiScope: 'UMUM' -> masuk pool semua prodi & Paket Fokus Catatan PPG) ===
  {
    id: 'cat-ppg-01',
    bank: 'PU',
    topic: 'PPDP · Proses Berpikir Induktif vs Deduktif & Konkret',
    prodiScope: 'UMUM',
    source: 'Kurasi Materi PPDP & Catatan UKPPPG 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Seorang guru merancang alur belajar konsep ilmiah dengan terlebih dahulu mengajak peserta didik mengamati lima kasus/gejala nyata di sekitar kelas secara langsung, mencatat pola kesamaannya, lalu membimbing siswa merumuskan sendiri prinsip umum konsep tersebut sebelum mengujinya ke persoalan baru. Proses berpikir utama yang dilatihkan guru di fase penemuan awal tersebut adalah ....',
    options: [
      'Berpikir deduktif, karena siswa dimulai dari hukum/definisi umum menuju contoh spesifik.',
      'Berpikir induktif berbasis pengalaman konkret, karena siswa mengabstraksi prinsip umum dari pengamatan sejumlah fakta/kasus khusus.',
      'Berpikir hafalan mekanis (*rote learning*), karena konsep disalin langsung dari buku paket.',
      'Berpikir abstrak murni tanpa mengaitkan objek maupun fenomena riil di kelas.',
      'Berpikir konvergen tertutup yang hanya menerima satu kalimat definisi buku teks.',
    ],
    answer: 1,
    explanation:
      'Penalaran induktif bergerak dari pengamatan fakta/contoh khusus yang konkret menuju penarikan kesimpulan prinsip umum, berkebalikan dengan penalaran deduktif yang bergerak dari kaidah umum menuju pembuktian khusus.',
  },
  {
    id: 'cat-ppg-02',
    bank: 'PU',
    topic: 'PPDP · Klasifikasi Proses Berpikir (Konkret, Deduktif, Induktif, Abstrak)',
    prodiScope: 'UMUM',
    source: 'Kurasi Materi PPDP & Catatan UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Dalam menyusun alur belajar sesuai kesiapan kognitif peserta didik, guru harus membedakan empat proses berpikir. Tentukan apakah setiap pernyataan berikut **Benar** atau **Salah**!',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Bernalar konkret berarti mengaitkan materi belajar dengan benda, contoh, atau peristiwa riil yang dapat diamati langsung siswa.',
        answer: 0,
        reason: 'Tepat: bernalar konkret bertumpu pada pengalaman dan objek nyata.',
      },
      {
        text: 'Penalaran deduktif bergerak dari pengumpulan fakta-fakta khusus terlebih dahulu untuk menemukan aturan umum baru.',
        answer: 1,
        reason: 'Keliru: khusus ke umum adalah induktif; deduktif bergerak dari prinsip umum menuju penerapan kasus khusus.',
      },
      {
        text: 'Penalaran induktif membantu siswa membangun pemahaman bermakna karena siswa menelusuri contoh nyata hingga menyimpulkan konsep umum.',
        answer: 0,
        reason: 'Tepat: induktif bergerak dari kasus khusus ke kesimpulan umum.',
      },
      {
        text: 'Bernalar abstrak melatih siswa memahami gagasan, simbol, atau hubungan logis yang tidak selalu dapat dilihat langsung secara fisik.',
        answer: 0,
        reason: 'Tepat: berpikir abstrak bekerja dengan konsep/simbol non-fisik secara hipotetis.',
      },
    ],
    explanation:
      'Keempat ragam proses berpikir (konkret = mengaitkan riil, deduktif = umum ke khusus, induktif = khusus ke umum, abstrak = gagasan/simbol tak kasatmata) perlu dipadukan bertahap sesuai usia dan kesiapan peserta didik.',
  },
  {
    id: 'cat-ppg-03',
    bank: 'PU',
    topic: 'PPDP & UDL · Gaya Belajar (Visual, Auditory, Kinestetik, Audiovisual, Write)',
    prodiScope: 'UMUM',
    source: 'Kurasi Materi PPDP / Pendidikan Inklusif 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Dalam pemetaan profil belajar awal kelas, ditemukan ragam preferensi modalitas siswa: kelompok A mudah memahami diagram alur (*visual*), kelompok B kuat lewat diskusi penjelasan (*auditory*), kelompok C tangkas saat mempraktikkan alat peraga fisik (*kinestetik*), kelompok D lebih paham menyimak video tutorial bersuara (*audiovisual*), dan kelompok E terbantu membuat ringkasan catatan tertulis (*write*). Rancangan pembelajaran paling tepat dan selaras prinsip UDL adalah ....',
    options: [
      'Memisahkan kelas secara permanen ke lima ruang terpisah sepanjang semester agar tidak bercampur.',
      'Menyediakan pilihan sumber belajar multimodal yang fleksibel (video demonstrasi bersuara, bagan alur, forum diskusi lisan, panduan praktikum alat peraga, dan lembar jurnal catatan terstruktur) untuk semua siswa.',
      'Hanya menggunakan ceramah lisan satu arah karena paling menghemat waktu persiapan guru.',
      'Melarang siswa yang senang mencatat agar semua fokus menonton video tanpa berdiskusi.',
      'Memberi label permanen pada rapor agar siswa visual dilarang mengikuti praktik peraga.',
    ],
    answer: 1,
    explanation:
      'Dalam UDL dan diferensiasi modern, profil gaya belajar (*Visual, Auditory, Kinestetik, Audiovisual, Write*) dilayani dengan menyediakan variasi representasi dan aktivitas multimodal tanpa melabeli atau memisahkan murid secara kaku.',
  },
  {
    id: 'cat-ppg-04',
    bank: 'PU',
    topic: 'PPDP · Kesesuaian Aktivitas Gaya Belajar & Strategi Multimodal',
    prodiScope: 'UMUM',
    source: 'Kurasi Materi PPDP & Catatan UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Guru menyiapkan variasi media agar seluruh modalitas belajar peserta didik terfasilitasi optimal. Tentukan apakah pasangan strategi dan gaya belajar berikut **Tepat** atau **Kurang Tepat**!',
    categories: ['Tepat', 'Kurang Tepat'],
    statements: [
      {
        text: 'Menyediakan video simulasi demonstrasi bersuara beserta presentasi interaktif bagi siswa dengan kecenderungan belajar Audiovisual.',
        answer: 0,
        reason: 'Tepat: modalitas audiovisual memadukan tampilan visual gerak dan penjelasan suara.',
      },
      {
        text: 'Memfasilitasi siswa dengan preferensi Write (membaca-menulis) melalui panduan membuat catatan terstruktur, ringkasan konsep, dan refleksi tertulis.',
        answer: 0,
        reason: 'Tepat: belajar berbasis tulisan memaksimalkan pemrosesan verbal tertulis.',
      },
      {
        text: 'Melatih siswa bertipe Kinestetik semata-mata dengan membaca teks definisi panjang di layar tanpa menyentuh peraga atau bergerak.',
        answer: 1,
        reason: 'Kurang tepat: siswa kinestetik belajar optimal lewat keterlibatan fisik langsung, simulasi, dan praktik peraga.',
      },
      {
        text: 'Membatasi siswa bertipe Visual dan Auditory hanya pada satu metode seragam karena dianggap mustahil dipadukan di kelas yang sama.',
        answer: 1,
        reason: 'Kurang tepat: pengajaran multimodal dan rotasi aktivitas memungkinkan semua preferensi terlibat aktif dalam satu ekosistem kelas.',
      },
    ],
    explanation:
      'Memahami perbedaan karakteristik Visual (gambar/diagram), Auditory (penjelasan/diskusi), Kinestetik (gerak fisik/peraga), Audiovisual (video/presentasi), dan Write (membaca/menulis) menolong guru memilih kombinasi media yang efektif.',
  },
  {
    id: 'cat-ppg-05',
    bank: 'PU',
    topic: 'PMA · Asesmen Formatif Berkelanjutan & Umpan Balik Real-Time',
    prodiScope: 'UMUM',
    source: 'Kurasi Materi PMA SMK/Umum & Catatan UKPPPG 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Dalam modul Pembelajaran Mendalam dan Asesmen, guru wajib memprioritaskan Asesmen Formatif sebelum melaksanakan asesmen sumatif/ulangan harian. Pilihlah SEMUA fungsi serta praktik **Asesmen Formatif** yang TEPAT!',
    options: [
      'Dilakukan secara berkelanjutan sepanjang proses pembelajaran berlangsung, bukan hanya di akhir bab.',
      'Membantu guru mengevaluasi efektivitas metode pengajaran yang sedang dipakai lalu menyesuaikan strategi belajar secara cepat.',
      'Melibatkan peserta didik secara aktif melalui umpan balik langsung (*real-time feedback*) dan tindak lanjut perbaikan pemahaman.',
      'Berfungsi memantau perkembangan belajar serta memberi kesempatan siswa memperbaiki miskonsepsi sebelum ulangan/sumatif dilaksanakan.',
      'Menjadi satu-satunya penentu kelulusan rapor tanpa ruang perbaikan maupun dialog umpan balik dengan siswa.',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      'Lima peran utama asesmen formatif adalah berlangsung sepanjang proses belajar, menilai dan memperbaiki strategi mengajar guru, melibatkan siswa dalam umpan balik & tindak lanjut real-time, memantau perkembangan, serta memberi kesempatan perbaikan sebelum evaluasi sumatif.',
  },
  {
    id: 'cat-ppg-06',
    bank: 'PU',
    topic: 'PPDP · Teori Jerome Bruner (Discovery Learning & Kurikulum Spiral)',
    prodiScope: 'UMUM',
    source: 'Kurasi Materi PPDP & Catatan UKPPPG 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Mengacu pandangan **Jerome Bruner**, belajar terbaik terjadi ketika peserta didik menemukan sendiri pola dan struktur konsep (*discovery learning*) serta materi diajarkan berulang dengan tingkat kedalaman makin meningkat (*spiral curriculum*). Implementasi pembelajaran kelas yang paling sesuai gagasan Bruner adalah ....',
    options: [
      'Menyampaikan seluruh definisi akhir di menit awal lalu melarang siswa mencoba variasi contoh sendiri.',
      'Merancang eksplorasi bertahap mulai manipulasi benda/tindakan nyata (*enaktif*), penyajian diagram visual (*ikonik*), hingga perumusan simbol/prinsip (*simbolik*) yang ditinjau kembali makin mendalam di fase lanjutan.',
      'Mengulang soal hafalan yang persis sama berpuluh kali tanpa meningkatkan tantangan kognitif siswa.',
      'Memberi hukuman apabila siswa menebak hipotesis awal yang keliru saat proses eksplorasi.',
      'Menunda seluruh pengenalan konsep penting hingga siswa memasuki jenjang kuliah.',
    ],
    answer: 1,
    explanation:
      'Teori belajar Bruner memadukan penemuan aktif (*discovery learning*) melalui tiga modus representasi (enaktif -> ikonik -> simbolik) dan pengulangan konsep berjenjang (*spiral curriculum*) dari sederhana menuju kompleks.',
  },
  {
    id: 'cat-ppg-07',
    bank: 'PU',
    topic: 'PMA · Prinsip Understanding by Design (UbD / Alur Mundur)',
    prodiScope: 'UMUM',
    source: 'Kurasi Materi PMA 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Seorang guru merancang modul ajar dengan terlebih dahulu menentukan permainan daring seru dan video menarik untuk pertemuan pertama, baru belakangan memikirkan tujuan pembelajaran dan bentuk tesnya setelah sesi hampir selesai. Ditinjau dari kerangka **Understanding by Design (UbD)**, kekeliruan utama guru tersebut adalah ....',
    options: [
      'Memakai media teknologi digital terlalu awal di jam pelajaran.',
      'Melanggar alur *backward design* UbD yang seharusnya dimulai dari penetapan hasil yang diharapkan (*desired results*), disusul bukti asesmen yang sahih (*assessment evidence*), baru merancang rencana aktivitas belajar.',
      'Tidak mewajibkan siswa menghafal definisi seluruh istilah sebelum bermain.',
      'Terlalu banyak menetapkan rubrik asesmen autentik sejak awal semester.',
      'Mengabaikan urutan buku teks tanpa menyalin silabus lama secara utuh.',
    ],
    answer: 1,
    explanation:
      'UbD (Wiggins & McTighe) menegaskan perencanaan mundur (*backward design*): (1) Tetapkan Tujuan/Pemahaman Bermakna -> (2) Tentukan Bukti Asesmen Otentik -> (3) Susun Aktivitas Pembelajaran yang mengarah tepat ke bukti dan tujuan tersebut.',
  },
  {
    id: 'cat-ppg-08',
    bank: 'PU',
    topic: 'PPDP · Teori David Ausubel (Meaningful Learning & Advance Organizer)',
    prodiScope: 'UMUM',
    source: 'Kurasi Materi PPDP & Catatan UKPPPG 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Berdasarkan teori belajar bermakna (**Meaningful Learning**) dari **David Ausubel**, keberhasilan belajar sangat bergantung pada ketersambungan informasi baru dengan struktur pengetahuan lama yang sudah dimiliki siswa. Tindakan awal guru di pembukaan pelajaran yang paling mencerminkan prinsip *Advance Organizer* Ausubel adalah ....',
    options: [
      'Langsung memberikan latihan 30 soal rumus baru tanpa mengecek pengetahuan prasyarat siswa.',
      'Menghadirkan jembatan konseptual ringkas (peta konsep pengait, analogi kontekstual, atau ulasan pengalaman lama) yang secara eksplisit menghubungkan pengetahuan awal siswa dengan materi baru yang akan dipelajari.',
      'Meminta siswa membaca diam-diam bab baru selama 20 menit lalu menghafal istilah asingnya.',
      'Memberikan hadiah nilai bonus bagi yang paling cepat menyalin judul bab di papan tulis.',
      'Mengosongkan apersepsi karena dianggap menyita waktu penyampaian materi.',
    ],
    answer: 1,
    explanation:
      'Ausubel menekankan bahwa pembelajaran bermakna terjadi bila pengetahuan baru tertaut secara substantif ke konsep relevan yang sudah ada di memori kognitif siswa, difasilitasi melalui *advance organizer* di awal pelajaran.',
  },
  {
    id: 'cat-ppg-09',
    bank: 'PU',
    topic: 'PPDP · Hierarki Belajar Robert Gagne (Prasyarat Pemecahan Masalah)',
    prodiScope: 'UMUM',
    source: 'Kurasi Materi PPDP & Catatan UKPPPG 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Dalam asesmen diagnostik, seorang guru menemukan mayoritas siswa gagal menjawab soal pemecahan masalah tingkat tinggi (*problem solving*), padahal latihan soal cerita sudah diulang beberapa kali. Merujuk teori **hierarki belajar Robert Gagne** (yang menjembatani behaviorisme dan kognitivisme), akar masalah paling mungkin dan solusi tepat adalah ....',
    options: [
      'Siswa memang tidak berbakat sehingga sebaiknya dibiarkan langsung lanjut ke bab berikutnya.',
      'Kemampuan prasyarat di bawahnya (membedakan ciri objek, konsep dasar, dan aturan/rumus awal) belum dikuasai tuntas; guru perlu memetakan dan memantapkan prasyarat berjenjang sebelum naik ke pemecahan masalah kompleks.',
      'Jumlah soal pemecahan masalah masih kurang banyak sehingga perlu ditambah menjadi 100 soal.',
      'Siswa cukup diberikan hukuman pengurangan poin agar menghafal langkah penyelesaian akhir.',
      'Guru langsung menayangkan kunci jawaban akhir tanpa mengurai langkah prasyarat dasarnya.',
    ],
    answer: 1,
    explanation:
      'Hierarki belajar Gagne (diskriminasi -> konsep konkret/terdefinisi -> aturan/kaidah -> pemecahan masalah) menegaskan bahwa kemampuan tingkat tinggi mustahil dikuasai bila prasyarat konsep dan kaidah di bawahnya masih rapuh.',
  },
  {
    id: 'cat-ppg-10',
    bank: 'PU',
    topic: 'PPDP · Jean Piaget & Kesiapan Tahap Perkembangan Kognitif',
    prodiScope: 'UMUM',
    source: 'Kurasi Materi PPDP & Catatan UKPPPG 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Mengacu pada teori perkembangan kognitif **Jean Piaget**, pembelajaran harus memfasilitasi penemuan mandiri aktif sekaligus menghormati tahap perkembangan berpikir siswa. Penerapan prinsip Piaget ketika siswa masih dominan berada pada transisi berpikir operasional konkret menuju formal adalah ....',
    options: [
      'Menuntut mereka berdebat tentang teori simbolik abstrak tanpa menyentuh contoh kasus atau model peraga nyata.',
      'Mengawali eksplorasi memakai benda nyata, simulasi, atau kasus konkret untuk memicu ketidakseimbangan kognitif produktif (*disequilibrium*) hingga siswa membangun skema adaptasi baru menuju penalaran formal.',
      'Mengharuskan siswa menghafal definisi abstrak buku pegangan kata demi kata.',
      'Mengabaikan perbedaan kecepatan kematangan kognitif agar target jadwal bab tetap seragam.',
      'Menggantikan diskusi eksplorasi mandiri sepenuhnya dengan ceramah satu arah.',
    ],
    answer: 1,
    explanation:
      'Menurut Piaget, pengetahuan dikonstruksi aktif melalui proses asimilasi dan akomodasi ketika siswa mengeksplorasi tantangan belajar yang selaras dengan tahap perkembangan berpikirnya.',
  },
  {
    id: 'cat-ppg-11',
    bank: 'PU',
    topic: 'PPDP · Lev Vygotsky (ZPD & Bantuan Bertahap Scaffolding)',
    prodiScope: 'UMUM',
    source: 'Kurasi Materi PPDP & Catatan UKPPPG 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Seorang guru mengidentifikasi tugas proyek yang sudah terlalu mudah jika dikerjakan sendiri oleh siswa justru membosankan, sedangkan tugas tingkat lanjut sama sekali macet tanpa arahan. Merujuk **Zone of Proximal Development (ZPD)** dan **Scaffolding** dari Vygotsky, posisi belajar ideal yang dirancang guru adalah ....',
    options: [
      'Memberikan tugas di bawah batas kemampuan mandiri agar seluruh kelas langsung mendapat nilai 100 tanpa berpikir.',
      'Merancang tantangan sedikit di atas zona kemampuan mandiri saat ini, lalu memberi bantuan bertahap (pertanyaan pemantik, contoh langkah, bimbingan teman sebaya) yang perlahan dikurangi (*fading*) sampai siswa mampu mandiri.',
      'Memberikan tugas sangat sulit tanpa panduan apa pun agar siswa belajar bertahan sendiri.',
      'Terus membantu menyelesaikan pekerjaan inti siswa hingga akhir tahun tanpa melepas tanggung jawab.',
      'Melarang siswa berkolaborasi dengan teman yang lebih menguasai materi.',
    ],
    answer: 1,
    explanation:
      'ZPD adalah jarak antara apa yang bisa dicapai mandiri vs yang dicapai dengan bimbingan rekan lebih mahir/guru; *scaffolding* menopang proses tersebut sementara lalu dilepas bertahap seiring tumbuhnya kemandirian.',
  },
  {
    id: 'cat-ppg-12',
    bank: 'PU',
    topic: 'PPDP · Membedakan 4 Aliran Teori Belajar (Konstruktivisme, Kognitivisme, Behaviorisme, Humanisme)',
    prodiScope: 'UMUM',
    source: 'Kurasi Materi PPDP & Catatan UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Dalam refleksi rancangan pembelajaran, guru membandingkan empat paradigma utama teori belajar. Tentukan apakah setiap pernyataan identifikasi aliran belajar berikut **Benar** atau **Salah**!',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Konstruktivisme menekankan peserta didik aktif membangun pengetahuannya sendiri berdasarkan pengalaman nyata dan pengetahuan awal yang telah dimiliki (melalui ragam kognitif, sosial, maupun radikal).',
        answer: 0,
        reason: 'Tepat: inti konstruktivisme adalah konstruksi pengetahuan aktif oleh pembelajar.',
      },
      {
        text: 'Kognitivisme memandang belajar semata-mata sebagai respons mekanis pasif terhadap hadiah-hukuman tanpa melibatkan pemrosesan informasi atau belajar bermakna.',
        answer: 1,
        reason: 'Keliru: prinsip stimulus-respons mekanis + reward/punishment adalah ciri behaviorisme, bukan kognitivisme.',
      },
      {
        text: 'Behaviorisme memfokuskan keberhasilan belajar pada perubahan perilaku yang dapat diamati langsung serta penguatan melalui stimulus, respons, *reward*, dan konsekuensi terukur.',
        answer: 0,
        reason: 'Tepat: fokus behaviorisme adalah perubahan tingkah laku teramati lewat pengondisian.',
      },
      {
        text: 'Humanisme berprinsip memanusiakan manusia, di mana proses belajar bermakna ketika siswa memahami potensi dirinya sendiri, kebutuhan aktualisasi, dan hubungannya dengan lingkungan.',
        answer: 0,
        reason: 'Tepat: humanisme menekankan martabat manusia, kesadaran diri, dan kebermaknaan bagi kehidupan siswa.',
      },
    ],
    explanation:
      'Keempat teori belajar (Konstruktivisme, Kognitivisme, Behaviorisme, Humanisme) memiliki kekuatan situasional berbeda; di PPG modern, konstruktivisme-kognitivisme-humanisme menjadi tulang punggung pembelajaran berpusat pada murid.',
  },
  {
    id: 'cat-ppg-13',
    bank: 'PU',
    topic: 'Filosofi, SEL & PPDP · Humanisme & Growth Mindset Menghadapi Kegagalan Belajar',
    prodiScope: 'UMUM',
    source: 'Kurasi MK Filosofi Pendidikan, Growth Mindset & SEL 2026',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.2',
    prompt:
      'Beberapa siswa tampak apatis dan menarik diri karena sering menerima teguran keras di depan umum setiap kali melakukan kesalahan hitung/konsep. Untuk mengintegrasikan prinsip teori belajar **Humanisme**, *Growth Mindset*, dan kompetensi sosial-emosional (`SEL`), langkah perubahan paling tepat oleh guru adalah ....',
    options: [
      'Menambah porsi hukuman poin pengurang nilai supaya efek jera semakin kuat.',
      'Menciptakan iklim aman psikologis yang memanusiakan murid: mengapresiasi usaha dan strategi belajar, memandang kekeliruan sebagai bahan umpan balik perbaikan, serta mendialogkan refleksi diri agar siswa mengenali potensinya.',
      'Menghentikan seluruh penilaian formatif agar siswa tidak pernah merasa salah.',
      'Hanya berinteraksi dengan tiga siswa paling berprestasi di kelas.',
      'Menyarankan siswa pindah jurusan jika melakukan dua kali kesalahan latihan.',
    ],
    answer: 1,
    explanation:
      'Humanisme ("memanusiakan manusia"), Growth Mindset (kesalahan = ruang bertumbuh), dan iklim SEL aman menumbuhkan kembali kepercayaan diri dan keterlibatan intrinsik peserta didik.',
  },
  {
    id: 'cat-ppg-14',
    bank: 'PU',
    topic: 'PMA · Pemetaan Tepat Diferensiasi Konten, Proses, dan Produk',
    prodiScope: 'UMUM',
    source: 'Kurasi Materi PMA, Inklusif & Catatan UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Saat menerapkan pembelajaran berdiferensiasi di kelas yang memiliki perbedaan kesiapan, minat, dan profil gaya belajar, tentukan apakah klasifikasi bentuk diferensiasi berikut **Benar** atau **Salah**!',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Menyediakan variasi sumber materi berupa teks bacaan bertingkat, infografis visual, dan video penjelasan ringkas sesuai kebutuhan awal murid merupakan **Diferensiasi Konten** (fokus pada materi).',
        answer: 0,
        reason: 'Tepat: diferensiasi konten memvariasikan apa yang dipelajari dan format sumber belajarnya.',
      },
      {
        text: 'Membagi aktivitas belajar lewat pilihan diskusi kelompok terbimbing, simulasi peraga, atau belajar mandiri dengan panduan langkah sesuai cara belajar murid merupakan **Diferensiasi Proses** (fokus pada cara siswa memaknai materi).',
        answer: 0,
        reason: 'Tepat: diferensiasi proses menyesuaikan metode dan proses pengolahan pemahaman.',
      },
      {
        text: 'Mengizinkan siswa memilih wujud laporan hasil belajar akhir (poster infografis, rekaman video presentasi, model benda kerja, atau esai tertulis) dengan rubrik capaian setara adalah contoh **Diferensiasi Konten**.',
        answer: 1,
        reason: 'Keliru: variasi bentuk hasil karya unjuk kompetensi murid adalah **Diferensiasi Produk**, bukan konten.',
      },
      {
        text: 'Diferensiasi Produk berarti menurunkan standar KKM secara sepihak bagi siswa tertentu meski tugas tidak sesuai capaian tujuan pembelajaran.',
        answer: 1,
        reason: 'Keliru: diferensiasi memberi pilihan wujud karya sesuai profil/gaya belajar murid dengan menjaga kualitas substansi tujuan belajar yang jelas.',
      },
    ],
    explanation:
      'Pembedaan tegas antara Konten (apa materinya), Proses (bagaimana cara siswa mengolahnya), dan Produk (apa bentuk unjuk karya hasilnya) mencegah kekeliruan desain pembelajaran berdiferensiasi.',
  },
  {
    id: 'cat-ppg-15',
    bank: 'PU',
    topic: 'PMA & Inklusif · Implementasi Diferensiasi Produk Multimodal',
    prodiScope: 'UMUM',
    source: 'Kurasi Materi PMA & Pendidikan Inklusif 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Pada akhir proyek topik lingkungan dan teknologi ramah, guru menerapkan **Diferensiasi Produk** agar murid bisa menampilkan hasil kerja sesuai gaya belajarnya (*Visual*, *Auditory/Audiovisual*, *Kinestetik*, atau *Write*). Hal krusial yang wajib disiapkan guru agar penilaian tetap adil dan bermakna lintas produk berbeda tersebut adalah ....',
    options: [
      'Menetapkan bahwa siswa yang membuat esai tertulis otomatis mendapat skor lebih tinggi dibanding pembuat video atau prototipe.',
      'Menyusun satu rubrik analitik berbasis indikator kedalaman konsep, akurasi analisis, dan kemampuan menjelaskan solusi esensial yang berlaku adil untuk seluruh bentuk produk pilihan murid.',
      'Membebaskan murid mengumpulkan produk apa pun meskipun tidak menyentuh topik proyek sama sekali.',
      'Melarang siswa bekerja berpasangan agar produk semua murid seragam bentuk kertasnya.',
      'Menilai seluruh produk semata-mata dari biaya pembelian alat atau kemewahan desain sampul.',
    ],
    answer: 1,
    explanation:
      'Diferensiasi produk yang sahih memberikan fleksibilitas medium karya (*poster, video audiovisual, purwarupa fisik, atau artikel tulis*) tetapi tetap diukur oleh rubrik capaian konsep inti yang adil dan setara.',
  },
  {
    id: 'cat-ppg-16',
    bank: 'PU',
    topic: 'Etika & 4 Kompetensi Guru · Integrasi Pedagogik, Profesional, Kepribadian, Sosial',
    prodiScope: 'UMUM',
    source: 'Kurasi Uji 4 Kompetensi Juknis UKPPPG 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Sosial',
    subkompetensi: 'S.3',
    prompt:
      'Sesuai UU Guru & Dosen serta kisi-kisi 4 Kompetensi Guru dalam UKPPPG 2026, pilihlah SEMUA tindakan guru yang mencerminkan integrasi utuh kompetensi **Pedagogis, Profesional, Kepribadian, dan Sosial**!',
    options: [
      'Memahami karakteristik keberagaman siswa serta merancang kurikulum/modul ajar adaptif sesuai kebutuhan belajar (**Kompetensi Pedagogik**).',
      'Menguasai kedalaman substansi keilmuan bidang studi sekaligus memanfaatkan teknologi informasi (`IT`/digital) secara relevan untuk memperkaya pembelajaran (**Kompetensi Profesional**).',
      'Menampilkan keteladanan akhlak mulia, kedewasaan emosi, integritas anti-diskriminasi, dan melakukan refleksi praktik mengajar secara berkala (**Kompetensi Kepribadian**).',
      'Membangun komunikasi santun serta kolaborasi objektif dengan orang tua/wali murid, rekan sejawat, dan mitra masyarakat demi kemajuan siswa (**Kompetensi Sosial**).',
      'Menyerahkan sepenuhnya komunikasi masalah belajar siswa kepada ketua kelas karena wali murid dianggap menghambat jadwal pribadi guru.',
    ],
    answer: [0, 1, 2, 3],
    explanation:
      'Keempat kompetensi guru bekerja saling melengkapi: Pedagogik (mengelola pembelajaran sesuai karakter murid & kurikulum), Profesional (menguasai materi + TIK), Kepribadian (teladan akhlak + refleksi), dan Sosial (kemitraan inklusif dengan orang tua & komunitas).',
  },

  // === 4 BUTIR PCK TEKNIK MESIN TERINTEGRASI KONSEP CATATAN PPG (prodiScope: ['teknik-mesin']) ===
  {
    id: 'cat-tm-01',
    bank: 'PCK',
    topic: 'PCK Teknik Mesin · Kurikulum Spiral Bruner & Pemodelan CAD',
    prodiScope: ['teknik-mesin'],
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Kurasi PPG Teknik Mesin & Teori Bruner 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Dalam mengajar pemodelan CAD Autodesk Inventor bagi siswa Teknik Mesin dari kelas X hingga XI, Pak Rian menerapkan gagasan *discovery* dan **Kurikulum Spiral Bruner** (*enaktif-ikonik-simbolik* dengan kompleksitas berjenjang). Urutan desain pembelajaran paling tepat mencerminkan pendekatan tersebut adalah ....',
    options: [
      'Langsung menugaskan siswa kelas X hari pertama membuat rakitan *assembly* mesin lengkap + animasi *exploded view* dan *BOM* tanpa menyentuh benda kerja.',
      'Memulai dengan pengamatan komponen mekanis nyata dan sketsa tangan (*enaktif-ikonik*) -> menuntun siswa menemukan sendiri constraint 2D & fitur dasar *Extrude* -> lalu menaikkan kompleksitas ke *Assembly*, *GD&T*, dan gambar kerja ISO standar di tingkat lanjut.',
      'Menyuruh siswa menghafalkan seluruh nama menu shortcut toolbar di kertas tanpa menyentuh aplikasi CAD.',
      'Mengulang materi menggambar garis lurus sederhana selama tiga semester berturut-turut tanpa proyek baru.',
      'Memberikan file part jadi untuk diganti namanya saja setiap pertemuan.',
    ],
    answer: 1,
    explanation:
      'Pendekatan Bruner pada vokasi Teknik Mesin memadukan penemuan terbimbing di software CAD dari representasi konkret benda nyata menuju sketsa/simbolik gambar teknik ISO dengan kedalaman meningkat berjenjang (*spiral*).',
  },
  {
    id: 'cat-tm-02',
    bank: 'PCK',
    topic: 'PCK Teknik Mesin · Penalaran Induktif vs Deduktif Parameter Pemotongan',
    prodiScope: ['teknik-mesin'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi PPG Teknik Mesin & PPDP 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Banyak siswa kelas XI Teknik Pemesinan hanya menghafal rumus penentuan kecepatan putar mesin tanpa memahami hubungan antara diameter benda kerja, jenis bahan, dan kehalusan permukaan. Untuk memadukan **penalaran induktif** dan **deduktif** secara bermakna, strategi terbaik guru di bengkel adalah ....',
    options: [
      'Menyuruh siswa menyalin rumus kecepatan putar sebanyak 25 kali di buku catatan tanpa praktik.',
      'Mengajak siswa mengamati dan membandingkan hasil permukaan benda kerja pada beberapa variasi ukuran benda dan kecepatan (*induktif*), lalu merumuskan prinsip umumnya dan menerapkannya pada perencanaan job sheet berikutnya (*deduktif*).',
      'Melarang siswa melihat tabel panduan pemesinan dan membiarkan benda kerja gagal total agar jera.',
      'Hanya memberi soal hitung angka di papan tulis tanpa diskusi makna konsepnya.',
      'Menetapkan satu pengaturan kecepatan tunggal untuk seluruh ukuran dan jenis bahan tanpa penjelasan.',
    ],
    answer: 1,
    explanation:
      'Mengamati fakta fisik di lapangan untuk menemukan pola hubungan (*induktif*) lalu menerapkan kaidah prinsip tersebut ke tugas baru (*deduktif*) membangun pemahaman konseptual yang bermakna, bukan hafalan prosedur semata.',
  },
  {
    id: 'cat-tm-03',
    bank: 'PCK',
    topic: 'PCK Teknik Mesin · Backward Design (UbD) & Asesmen Formatif Bengkel',
    prodiScope: ['teknik-mesin'],
    pckFocus: 'Asesmen Otentik',
    source: 'Kurasi PPG Teknik Mesin & PMA Lanjut SMK 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Saat membimbing praktik pembubutan poros bertingkat (suaian bantalan), sejumlah siswa kerap baru menyadari diameter terlanjur kelewat kecil (*undersize*) pada akhir jam praktik setelah komponen jadi rusak. Mengacu kerangka **UbD** dan prinsip **Asesmen Formatif**, perbaikan sistem penilaian paling efektif di bengkel mesin adalah ....',
    options: [
      'Mengumpulkan benda kerja rusak saja di akhir jam lalu memberi nilai nol tanpa bimbingan proses.',
      'Menetapkan standar toleransi ISO sebagai target akhir (*UbD*), lalu mewajibkan pos *cek formatif berkelanjutan* (verifikasi setting nol pahat, pembacaan mikrometer pasca-pemakanan kasar sebelum *finishing*) guna memberi umpan balik koreksi seketika.',
      'Membebaskan siswa membubut sampai selesai tanpa pernah menyentuh alat ukur mikrometer.',
      'Menggantikan seluruh praktik pembubutan di mesin dengan menggambar sketsa di kertas milimeter.',
      'Meminta siswa saling menyalin ukuran diameter punya kelompok sebelahnya.',
    ],
    answer: 1,
    explanation:
      'Dalam asesmen formatif vokasi berbasis UbD, umpan balik real-time di titik kendali proses (*hold points* pengukuran sebelum finishing) mencegah kecacatan fatal sekaligus mengoreksi teknik pengukuran siswa saat itu juga.',
  },
  {
    id: 'cat-tm-04',
    bank: 'PCK',
    topic: 'PCK Teknik Mesin · Diferensiasi Produk & Gaya Belajar VARK+ pada Proyek TeFa',
    prodiScope: ['teknik-mesin'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi PPG Teknik Mesin & Diferensiasi 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Pada penugasan akhir proyek **Teaching Factory Pemesinan & CAD Inventor**, guru ingin memfasilitasi keberagaman modalitas belajar siswa (**Visual, Auditory, Kinestetik, Audiovisual, Write**) melalui **Diferensiasi Konten, Proses, dan Produk** tanpa mengorbankan standar gambar kerja industri. Pilihlah SEMUA rancangan pembelajaran yang TEPAT!',
    options: [
      'Menyediakan paket panduan belajar beragam: lembar job sheet bergambar (*visual*), video tutorial simulasi pemotongan bersuara (*audiovisual*), panduan SOP langkah tertulis (*write*), dan bimbingan peraga cekam benda kerja (*kinestetik*).',
      'Mengizinkan kelompok mempresentasikan laporan analisis pemecahan masalah toleransi dalam pilihan wujud **Diferensiasi Produk**: presentasi video demonstrasi inspeksi alat ukur, poster infografis alur QC bengkel, atau laporan teknis tertulis terstruktur yang diukur oleh rubrik kompetensi sama.',
      'Membagi kelompok diskusi reflektif (*auditory*) di bengkel untuk saling mengoreksi urutan pengerjaan sebelum pemesinan dimulai.',
      'Membebaskan siswa kelompok audiovisual agar tidak perlu memakai kacamata pelindung K3 saat menyalakan mesin bubut.',
      'Mengizinkan siswa membuat produk video animasi hiburan tanpa mencantumkan ukuran toleransi maupun proses pemesinan sama sekali.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Diferensiasi vokasi yang tepat menyediakan akses konten multimodal (`Visual/Audiovisual/Write/Kinestetik`), memfasilitasi proses diskusi + simulasi bengkel, serta memberi keleluasaan ragam bukti produk sambil tetap menjaga ketat standar K3 dan kualitas teknis industri.',
  },
];
