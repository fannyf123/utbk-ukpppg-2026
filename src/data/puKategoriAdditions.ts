import type { KategoriQuestion } from '../types/exam';

/**
 * 18 soal PGK Kategori (Benar/Salah atau Sesuai/Tidak Sesuai) untuk Bank Pedagogi Umum (PU).
 * Bersama 129 soal UST (PG & PGK MCMA), memastikan Bank PU memiliki ketiga bentuk soal resmi Juknis UKPPPG 2026.
 */
export const PU_KATEGORI_ADDITIONS: KategoriQuestion[] = [
  {
    id: 'pu-kat-01',
    bank: 'PU',
    topic: 'PMA & Asesmen (Umum)',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Seorang guru SMK merancang asesmen formatif untuk memantau ketercapaian kompetensi di tengah unit pembelajaran sebelum proyek akhir dikumpulkan. Tentukan ketepatan masing-masing prinsip asesmen formatif pada pernyataan berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Hasil asesmen formatif wajib dijadikan bobot terbesar dalam penentuan nilai rapor akhir agar murid serius mengerjakan.',
        answer: 1,
        reason: 'Asesmen formatif berfungsi diagnostik dan perbaikan proses (assessment for/as learning), bukan penentu skor akhir rapor.',
      },
      {
        text: 'Umpan balik formatif diberikan secara spesifik dan tepat waktu saat murid masih memiliki kesempatan memperbaiki proses kerjanya.',
        answer: 0,
        reason: 'Umpan balik yang cepat dan spesifik memandu perbaikan langsung sebelum penilaian sumatif.',
      },
      {
        text: 'Guru memanfaatkan data kesalahan terbanyak dari kuis singkat untuk menyesuaikan aktivitas pembelajaran pada pertemuan berikutnya.',
        answer: 0,
        reason: 'Adaptasi pengajaran berbasis bukti asesmen merupakan inti asesmen formatif.',
      },
      {
        text: 'Asesmen formatif tidak memerlukan kriteria atau rubrik karena sifatnya informal.',
        answer: 1,
        reason: 'Kriteria capaian tetap dibutuhkan agar guru dan murid mengetahui jarak antara kondisi saat ini dan tujuan belajar.',
      },
    ],
    explanation:
      'Asesmen formatif bertujuan memandu perbaikan belajar selama proses berlangsung (bukan memberi angka hukuman), menggunakan kriteria jelas, dan mendorong penyesuaian strategi mengajar guru secara responsif.',
  },
  {
    id: 'pu-kat-02',
    bank: 'PU',
    topic: 'PMA & Asesmen (Umum)',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Kelas XI terdiri atas murid dengan tingkat kesiapan awal beragam: sebagian cepat memahami konsep mandiri, sebagian membutuhkan pemodelan bertahap, dan tiga murid mengalami hambatan literasi teknis. Tentukan apakah langkah pembelajaran berdiferensiasi di bawah ini Sesuai atau Tidak Sesuai dengan prinsip Juknis 2026.',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Membentuk kelompok kemampuan permanen sepanjang satu tahun ajaran agar guru tidak perlu memantau perkembangan ulang.',
        answer: 1,
        reason: 'Pengelompokan diferensiasi harus bersifat fleksibel dan dinamis berdasarkan perkembangan asesmen berkelanjutan.',
      },
      {
        text: 'Menyediakan ragam sumber belajar (lembar kerja visual berlangkah, video demonstrasi singkat, serta bahan pengayaan) untuk tujuan capaian yang setara.',
        answer: 0,
        reason: 'Diferensiasi konten dan proses memberi jalur belajar bervariasi menuju tujuan esensial yang sama.',
      },
      {
        text: 'Menurunkan standar ketuntasan kompetensi inti bagi kelompok yang mengalami kesulitan agar semua murid lulus dengan mudah.',
        answer: 1,
        reason: 'Diferensiasi menyesuaikan dukungan (scaffolding), bukan menurunkan esensi standar kompetensi.',
      },
      {
        text: 'Memberikan pendampingan terbimbing sementara untuk kelompok yang membutuhkan lalu melepaskan bantuan bertahap saat kompetensi mulai terbentuk.',
        answer: 0,
        reason: 'Penerapan scaffolding dan fading responsif sesuai ZPD Vygotsky.',
      },
    ],
    explanation:
      'Pembelajaran berdiferensiasi menjaga target capaian esensial tetap bermutu sambil memvariasikan konten, proses, dan scaffolding secara fleksibel sesuai data asesmen berkala.',
  },
  {
    id: 'pu-kat-03',
    bank: 'PU',
    topic: 'PMA & Asesmen (Umum)',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Dalam prinsip Pembelajaran Mendalam (Deep Learning), guru diharapkan mewujudkan suasana belajar yang berkesadaran (mindful), bermakna (meaningful), dan menggembirakan (joyful). Evaluasi pernyataan praktik kelas berikut.',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Guru mengaitkan materi pelajaran dengan persoalan nyata di lingkungan kerja atau masyarakat sekitar murid sebelum masuk ke konsep abstrak.',
        answer: 0,
        reason: 'Kontekstualisasi ke persoalan nyata menciptakan pembelajaran bermakna (meaningful).',
      },
      {
        text: 'Menggembirakan berarti mengisi jam pelajaran dengan permainan hiburan penuh tanpa perlu menautkannya pada refleksi konsep inti.',
        answer: 1,
        reason: 'Joyful learning hadir dari rasa ingin tahu, tantangan bermakna, dan keberhasilan belajar, bukan hiburan terpisah dari tujuan.',
      },
      {
        text: 'Guru menyediakan jeda refleksi agar murid menyadari strategi berpikir yang berhasil maupun keliru selama memecahkan masalah.',
        answer: 0,
        reason: 'Refleksi metakognitif menumbuhkan pembelajaran berkesadaran (mindful).',
      },
    ],
    explanation:
      'Pembelajaran Mendalam memadukan olah pikir, olah hati, olah rasa, dan olah raga: berkesadaran melalui metakognisi, bermakna lewat konteks nyata, dan menggembirakan melalui tantangan yang membangun motivasi intrinsik.',
  },
  {
    id: 'pu-kat-04',
    bank: 'PU',
    topic: 'Sosial-Emosional (SEL)',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Sosial',
    subkompetensi: 'S.1',
    prompt:
      'Dua siswa terlibat perselisihan tajam saat kerja kelompok karena pembagian tugas tidak berjalan adil hingga salah satu membanting alat tulis. Tentukan apakah respons guru berbasis CASEL & Restorative Practice berikut Tepat atau Tidak Tepat.',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Meminta kedua siswa berhenti sejenak melakukan jeda napas tenang terlebih dahulu sebelum membahas kronologi konflik.',
        answer: 0,
        reason: 'Membantu regulasi emosi (self-management) adalah prasyarat sebelum dialog konstruktif.',
      },
      {
        text: 'Langsung menghukum kedua siswa keluar kelas dan mengurangi nilai praktik seluruh kelompok sebagai efek jera di depan teman.',
        answer: 1,
        reason: 'Hukuman reaktif memicu rasa malu dan tidak melatih keterampilan resolusi konflik atau tanggung jawab.',
      },
      {
        text: 'Memfasilitasi dialog dengan pertanyaan restoratif: apa yang dirasakan masing-masing, siapa yang terdampak, dan kesepakatan perbaikan apa yang disepakati.',
        answer: 0,
        reason: 'Pendekatan restoratif melatih empati sosial (social awareness) dan pengambilan keputusan bertanggung jawab.',
      },
      {
        text: 'Memaksa salah satu siswa segera meminta maaf di depan kelas meskipun akar kesalahpahaman belum didengarkan kedua belah pihak.',
        answer: 1,
        reason: 'Permintaan maaf paksa tanpa pemahaman dan pemulihan relasi bersifat semu.',
      },
    ],
    explanation:
      'Penanganan konflik sosial-emosional memprioritaskan de-eskalasi dan regulasi diri, mendengarkan perspektif secara empatik, serta memfasilitasi kesepakatan pemulihan berbasis tanggung jawab.',
  },
  {
    id: 'pu-kat-05',
    bank: 'PU',
    topic: 'Sosial-Emosional (SEL)',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.1',
    prompt:
      'Dalam penerapan kerangka kompetensi sosial-emosional CASEL terintegrasi dalam pembelajaran harian, tentukan kebenaran pernyataan tentang praktik kesadaran guru (EMC² / Mindfulness) berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Guru yang mengalami kelelahan emosional perlu melatih kesadaran diri (self-awareness) dan jeda tenang agar tidak melampiaskan stres kepada murid.',
        answer: 0,
        reason: 'Kesejahteraan emosional dan regulasi diri guru berdampak langsung pada iklim aman kelas.',
      },
      {
        text: 'Pembelajaran Sosial-Emosional harus selalu diajarkan sebagai mata pelajaran terpisah karena tidak dapat diintegrasikan ke dalam diskusi kerja praktik.',
        answer: 1,
        reason: 'SEL efektif justru saat diintegrasikan dalam rutinitas pembukaan, kolaborasi kelompok, manajemen kegagalan, dan refleksi.',
      },
      {
        text: 'Memberi kesempatan murid memberi umpan balik positif yang jujur antarteman menguatkan kesadaran sosial dan keterampilan berelasi.',
        answer: 0,
        reason: 'Latihan apresiasi dan empati terstruktur membangun relationship skills.',
      },
    ],
    explanation:
      'Kompetensi SEL (CASEL) bekerja optimal ketika menjadi budaya kelas sehari-hari—dimulai dari keteladanan regulasi emosi pendidik sendiri hingga integrasi kolaborasi dan refleksi murid.',
  },
  {
    id: 'pu-kat-06',
    bank: 'PU',
    topic: 'Growth Mindset',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.2',
    prompt:
      'Beberapa siswa merasa rendah diri dengan mengatakan "Saya memang tidak berbakat hitungan teknik, dari SMP sudah selalu gagal." Tentukan apakah respons guru mencerminkan Growth Mindset atau Fixed Mindset.',
    categories: ['Growth Mindset', 'Fixed Mindset'],
    statements: [
      {
        text: '"Kamu hebat sekali dan memang terlahir berbakat cepat tangkap, temanmu yang lambat sebaiknya mencari jurusan yang lebih ringan."',
        answer: 1,
        reason: 'Memuji kecerdasan bawaan tetap dan menyarankan menyerah adalah ciri fixed mindset.',
      },
      {
        text: '"Langkahmu pada konversi satuan belum tepat di bagian ini—mari cek strategi mana yang bisa kita coba ulang supaya otakmu makin terlatih."',
        answer: 0,
        reason: 'Menyoroti proses, strategi spesifik, dan keyakinan bahwa kemampuan dapat berkembang melalui latihan terarah.',
      },
      {
        text: '"Kesalahan pembacaanmu hari ini menunjukkan bagian mana yang belum dikuasai agar kita perbaiki sebelum praktik mesin sesungguhnya."',
        answer: 0,
        reason: 'Memperlakukan kekeliruan sebagai umpan balik diagnostik bukan cap permanen.',
      },
      {
        text: '"Tidak apa-apa kalau kamu tidak bisa bagian ini, memang hanya sebagian siswa yang otaknya cocok di bidang presisi."',
        answer: 1,
        reason: 'Menguatkan keyakinan batas kemampuan statis (fixed mindset) dan mematikan kegigihan.',
      },
    ],
    explanation:
      'Pola pikir bertumbuh (Carol Dweck) menekankan umpan balik berbasis usaha efektif, pemilihan strategi belajar baru, serta keberanian melihat kegagalan awal sebagai bagian dari proses penguasaan.',
  },
  {
    id: 'pu-kat-07',
    bank: 'PU',
    topic: 'Growth Mindset',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.2',
    prompt:
      'Seorang guru senior menolak mempelajari perangkat ajar berbasis simulasi digital karena merasa metode papan tulisnya selama 20 tahun sudah pasti lebih unggul. Evaluasi ciri refleksi profesi pendidik berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Pendidik dengan growth mindset menguji pendekatan baru secara reflektif berdasarkan dampaknya pada pemahaman murid, bukan sekadar kenyamanan kebiasaan.',
        answer: 0,
        reason: 'Subkompetensi K.2 menuntut refleksi berkesinambungan dan belajar sepanjang hayat.',
      },
      {
        text: 'Mengakui bahwa suatu rancangan pembelajaran kurang efektif lalu memperbaikinya bersama rekan sejawat menandakan lemahnya wibawa guru.',
        answer: 1,
        reason: 'Keterbukaan mengevaluasi praktik justru mencerminkan profesionalisme dan teladan pembelajar sepanjang hayat.',
      },
      {
        text: 'Ketidakberhasilan uji coba media baru seharusnya dianalisis akar penyebabnya untuk iterasi perbaikan, bukan langsung dijadikan alasan menghentikan inovasi.',
        answer: 0,
        reason: 'Iterasi berbasis evaluasi merupakan perilaku reflektif bertumbuh.',
      },
    ],
    explanation:
      'Subkompetensi Kepribadian K.2 menekankan refleksi diri berkelanjutan, keterbukaan terhadap umpan balik, dan pembelajaran sepanjang hayat demi peningkatan mutu belajar murid.',
  },
  {
    id: 'pu-kat-08',
    bank: 'PU',
    topic: 'Filosofi & Pendidikan Nilai',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.1',
    prompt:
      'Berdasarkan pemikiran pendidikan Ki Hadjar Dewantara (Tri Nga, Tri Pusat Pendidikan, Sistem Among) dalam konteks sekolah masa kini, tentukan ketepatan pernyataan berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Prinsip "Tut Wuri Handayani" berarti guru melepas murid sepenuhnya tanpa arah atau batasan nilai keselamatan.',
        answer: 1,
        reason: 'Tut Wuri Handayani adalah memberi dorongan kemandirian dari belakang sambil tetap mengawal arah keselamatan dan nilai moral.',
      },
      {
        text: 'Pendidikan harus menuntun kodrat anak dengan memperhatikan kodrat alam (karakteristik lingkungan/daerah) dan kodrat zaman (perkembangan teknologi era kini).',
        answer: 0,
        reason: 'Menuntun sesuai kodrat alam dan kodrat zaman adalah inti filosofi KHD yang sangat relevan dengan pendidikan modern.',
      },
      {
        text: 'Pendidikan budi pekerti (cipta, rasa, karsa, karya) hanya menjadi tugas guru agama dan PPKn, sedangkan guru produktif cukup mengajarkan keterampilan teknis.',
        answer: 1,
        reason: 'Setiap pendidik menanamkan nilai etos kerja, kejujuran pengukuran, tanggung jawab keselamatan, dan kolaborasi melalui keteladanan.',
      },
      {
        text: 'Konsep Trikon (Kontinyu, Konvergen, Konsentris) mendorong sekolah terbuka terhadap kemajuan global sambil tetap berakar pada jati diri budaya bangsa.',
        answer: 0,
        reason: 'Trikon menyeimbangkan inovasi terbuka dan kekhasan nilai lokal.',
      },
    ],
    explanation:
      'Pemikiran Ki Hadjar Dewantara menempatkan guru sebagai penuntun berkarakter teladan (Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani) yang menyelaras­kan kodrat alam dan zaman.',
  },
  {
    id: 'pu-kat-09',
    bank: 'PU',
    topic: 'Filosofi & Pendidikan Nilai',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.3',
    prompt:
      'Di sebuah bengkel praktik, seorang siswa diketahui menyalin laporan pengukuran temannya persis sama tanpa melakukan pengukuran mandiri pada benda kerjanya sendiri. Tentukan apakah tindakan guru berikut Sesuai atau Tidak Sesuai dengan penguatan pendidikan nilai integritas.',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Mengajak siswa berdialog empat mata tentang konsekuensi ketidaktelitian data ukur terhadap keselamatan produk teknik, lalu meminta ia melakukan pengukuran ulang terbimbing.',
        answer: 0,
        reason: 'Mengaitkan nilai kejujuran akademik dengan tanggung jawab profesional sambil memberi peluang pemulihan belajar.',
      },
      {
        text: 'Meloloskan laporan tersebut demi mempercepat rekap nilai akhir semester agar rasio kelulusan kelas tetap 100%.',
        answer: 1,
        reason: 'Mengabaikan pelanggaran integritas merusak karakter profesional siswa dan keteladanan moral guru.',
      },
      {
        text: 'Memasang nama siswa tersebut pada papan pengumuman bengkel berlabel "Pemalsu Data" agar siswa lain takut meniru.',
        answer: 1,
        reason: 'Mempermalukan di ruang publik tidak mendidik kesadaran nilai etis secara bermartabat.',
      },
    ],
    explanation:
      'Pendidikan nilai menuntut ketegasan terhadap prinsip kejujuran yang dipadukan dengan bimbingan reflektif-edukatif, bukan pembiaran maupun perendahan martabat murid.',
  },
  {
    id: 'pu-kat-10',
    bank: 'PU',
    topic: 'PPDP (Perkembangan Murid)',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Dalam memahami karakteristik peserta didik usia remaja SMK (usia 15–18 tahun) menurut kajian PPDP, tentukan ketepatan implikasi pedagogis pada setiap pernyataan berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Pada tahap operasional formal Piaget, remaja SMK mulai mampu bernalar hipotetis-deduktif, sehingga efektif dilibatkan dalam analisis sebab-akibat kegagalan komponen.',
        answer: 0,
        reason: 'Remaja mampu menguji hipotesis dan menganalisis variabel sebab-akibat secara sistematis.',
      },
      {
        text: 'Karena perkembangan identitas diri (Erikson) masih labil, remaja SMK lebih efektif diajari melalui kritik tajam di muka umum daripada umpan balik konstruktif.',
        answer: 1,
        reason: 'Remaja sangat sensitif terhadap penerimaan sosial teman sebaya; kritik merendahkan di muka umum memicu penolakan belajar.',
      },
      {
        text: 'Pembelajaran yang memberi ruang otonomi bermakna (misalnya memilih strategi penyelesaiaan proyek) meningkatkan motivasi intrinsik usia remaja.',
        answer: 0,
        reason: 'Self-Determination Theory menunjukkan kebutuhan akan otonomi, kompetensi, dan keterhubungan memicu motivasi intrinsik remaja.',
      },
    ],
    explanation:
      'Pendidik SMK perlu menyelaraskan tuntutan kognitif penalaran tingkat tinggi dengan iklim psikologis aman yang menghargai otonomi serta identitas remaja.',
  },
  {
    id: 'pu-kat-11',
    bank: 'PU',
    topic: 'PPDP (Perkembangan Murid)',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Sebuah kelas memiliki seorang murid dengan gangguan pendengaran ringan serta beberapa murid dari latar belakang ekonomi keluarga buruh harian yang tidak memiliki komputer di rumah. Tentukan apakah adaptasi pembelajaran berikut Sesuai atau Tidak Sesuai.',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Memastikan seluruh penugasan CAD/simulasi digital hanya bisa dikerjakan di rumah secara mandiri setiap malam tanpa waktu lab sekolah.',
        answer: 1,
        reason: 'Menuntut perangkat mahal di rumah menciptakan ketimpangan akses belajar.',
      },
      {
        text: 'Menyediakan instruksi visual tertulis berdiagram langkah kerja beserta posisi duduk barisan depan dan teks takarir (caption) pada video ajar.',
        answer: 0,
        reason: 'Prinsip Universal Design for Learning (UDL) dan komunikasi inklusif menjamin akses murid dengan hambatan pendengaran.',
      },
      {
        text: 'Mengatur penjadwalan buka lab/akses perangkat cadangan sekolah secara bergilir serta memadukan sketsa kertas terukur sebelum input komputer.',
        answer: 0,
        reason: 'Pemanfaatan sumber belajar adil dan inklusif mengatasi hambatan akses perangkat di rumah.',
      },
    ],
    explanation:
      'Pembelajaran inklusif dan responsif konteks sosial-ekonomi memetakan hambatan nyata murid lalu merancang akses belajar yang setara melalui prinsip UDL dan jadwal dukungan sekolah.',
  },
  {
    id: 'pu-kat-12',
    bank: 'PU',
    topic: 'PMA & Asesmen (Vokasi)',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Seorang guru mengintegrasikan teknologi simulasi interaktif dan aplikasi kuis daring di kelas vokasi. Evaluasi apakah penggunaan TIK berikut memenuhi subkompetensi P.4 (kritis dan kreatif, bukan sekadar mengganti kertas).',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Siswa menggunakan simulator interaktif untuk menguji dampak perubahan parameter pemotongan terhadap getaran dan kekasaran hasil sebelum menyentuh mesin fisik.',
        answer: 0,
        reason: 'TIK dimanfaatkan sebagai laboratorium virtual aman untuk eksplorasi konsep sebab-akibat sebelum praktik berisiko tinggi.',
      },
      {
        text: 'Guru menampilkan salinan PDF buku teks setebal 40 halaman di proyektor lalu menyuruh murid menyalinnya bulat-bulat ke buku catatan selama 2 jam pelajaran.',
        answer: 1,
        reason: 'Hal ini hanya memindahkan teks statis ke layar tanpa meningkatkan interaksi, literasi digital kritis, maupun pemahaman.',
      },
      {
        text: 'Murid diminta merekam video singkat demonstrasi kalibrasi alat ukur buatan kelompoknya disertai narasi langkah K3LH untuk direview sejawat.',
        answer: 0,
        reason: 'Siswa berperan aktif sebagai produsen konten belajar digital yang mengasah pemahaman prosedural sekaligus komunikasi teknis.',
      },
    ],
    explanation:
      'Integrasi TIK pada level transformasi (TPACK & SAMR) memperluas eksplorasi konsep, meningkatkan keselamatan eksperimen, dan mendorong murid berpikir kritis—bukan sekadar digitasi ceramah.',
  },
  {
    id: 'pu-kat-13',
    bank: 'PU',
    topic: 'Sosial-Emosional (SEL)',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Sosial',
    subkompetensi: 'S.2',
    prompt:
      'Sekolah menyelenggarakan pertemuan dengan orang tua/wali dan mitra bengkel industri (DUDIKA) untuk membahas kesiapan praktik kerja lapangan (PKL) sekaligus tren kedisiplinan siswa yang menurun akhir-akhir ini. Tentukan ketepatan langkah kolaborasi guru berikut.',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Membuka forum dengan menyalahkan orang tua di depan mitra industri atas perilaku disiplin anak agar pihak keluarga merasa jera.',
        answer: 1,
        reason: 'Komunikasi kolaboratif dan empatik membangun kemitraan solusi, bukan saling menyalahkan.',
      },
      {
        text: 'Berbagi data observasi belajar dan ketidakhadiran secara objektif, mendengarkan perspektif keluarga, lalu menyepakati langkah pendampingan bersama.',
        answer: 0,
        reason: 'Kolaborasi berbasis data objektif dan kesetaraan kemitraan mencerminkan subkompetensi S.2.',
      },
      {
        text: 'Menyelaraskan masukan kompetensi kerja aman dari pembimbing industri ke dalam rubrik pembelajaran prapraktik di bengkel sekolah.',
        answer: 0,
        reason: 'Kemitraan DUDIKA memperkuat relevansi kurikulum dan kesiapan murid.',
      },
    ],
    explanation:
      'Subkompetensi Sosial S.2 menuntut kemitraan saling menghargai antara sekolah, keluarga, dan mitra eksternal berbasis komunikasi empatik serta bukti pembelajaran konkret.',
  },
  {
    id: 'pu-kat-14',
    bank: 'PU',
    topic: 'PMA & Asesmen (Vokasi)',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Sosial',
    subkompetensi: 'S.3',
    prompt:
      'Dalam rangka pengembangan keprofesian berkelanjutan melalui Komunitas Belajar (Kombel) sekolah dan MGMP Teknik Mesin, evaluasi kebenaran peran guru pada pernyataan berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Kehadiran dalam Komunitas Belajar sekadar untuk menggugurkan syarat administratif sertifikat tanpa membagikan hasil praktik kelas.',
        answer: 1,
        reason: 'Kombel bertujuan inkuiri kolaboratif berbagi bukti praktik nyata untuk meningkatkan hasil belajar murid.',
      },
      {
        text: 'Guru membawa contoh pekerjaan murid yang masih keliru ke forum Kombel/MGMP untuk menganalisis pola miskonsepsi dan merancang perbaikan pembelajaran bersama.',
        answer: 0,
        reason: 'Siklus inkuiri kolaboratif berbasis artefak belajar murid merupakan praktik inti S.3.',
      },
      {
        text: 'Berbagi perangkat ajar teruji dan terbuka menerima kritik konstruktif rekan sejawat melalui lesson study memperkuat budaya profesional kolektif.',
        answer: 0,
        reason: 'Lesson study dan peer reflection mendorong mutu pengajaran berkelanjutan.',
      },
    ],
    explanation:
      'Subkompetensi S.3 berfokus pada partisipasi aktif dan produktif dalam komunitas belajar atau organisasi profesi untuk memecahkan masalah nyata pembelajaran murid.',
  },
  {
    id: 'pu-kat-15',
    bank: 'PU',
    topic: 'PMA & Asesmen (Umum)',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Guru merancang kegiatan berbasis proyek (Project-Based Learning) selama 4 minggu. Tentukan apakah rancangan aktivitas berikut Sesuai atau Tidak Sesuai dengan karakteristik PJBL bermakna.',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Seluruh 3 minggu pertama diisi ceramah teori satu arah, lalu proyek dikerjakan semalam di rumah hanya sebagai tugas pelengkap nilai akhir.',
        answer: 1,
        reason: 'Dalam PJBL sejati, proyek menjadi wahana inkuiri sepanjang unit, bukan hiasan akhir (dessert project).',
      },
      {
        text: 'Memulai unit dengan pertanyaan pemantik autentik, disusul tahapan riset spesifikasi, perancangan, pembuatan prototipe, revisi berbasis umpan balik, dan pameran karya.',
        answer: 0,
        reason: 'Sintaks PJBL mengintegrasikan inkuiri terstruktur, umpan balik berulang, dan produk nyata.',
      },
      {
        text: 'Menilai proyek hanya dari keindahan tampilan luar produk akhir tanpa rubrik proses kerja tim, keselamatan kerja, maupun argumentasi konsep.',
        answer: 1,
        reason: 'Asesmen PJBL menilai proses kolaboratif, ketepatan teknis/konsep, serta refleksi, bukan estetika semata.',
      },
    ],
    explanation:
      'PJBL efektif menempatkan masalah autentik sebagai inti pembelajaran (main course project), disertai check-point formatif dan rubrik proses-produk yang transparan.',
  },
  {
    id: 'pu-kat-16',
    bank: 'PU',
    topic: 'PMA & Asesmen (Umum)',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Untuk menjamin objektivitas dan keadilan penilaian praktik di kelas besar, guru menyusun rubrik analitik. Tentukan ketepatan pernyataan mengenai penyusunan dan pemanfaatan rubrik berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Rubrik sebaiknya dirahasiakan dari murid hingga setelah pengumpulan tugas agar mereka tidak meniru kriteria nilai tinggi.',
        answer: 1,
        reason: 'Rubrik harus dibagikan dan didiskusikan sejak awal agar murid memahami target mutu dan dapat melakukan penilaian diri.',
      },
      {
        text: 'Setiap level capaian pada rubrik mendeskripsikan indikator perilaku atau kualitas terukur, bukan sekadar kata sifat kabur seperti "cukup bagus" atau "kurang rapi".',
        answer: 0,
        reason: 'Deskriptor perilaku/ukuran yang operasional meminimalkan subjektivitas penilai.',
      },
      {
        text: 'Rubrik analitik memudahkan guru memberi umpan balik terarah karena memisahkan kriteria ketepatan dimensi, prosedur keselamatan, dan efisiensi kerja.',
        answer: 0,
        reason: 'Pemisahan dimensi kinerja menunjukkan persis aspek mana yang sudah mahir dan mana yang perlu dibenahi.',
      },
    ],
    explanation:
      'Rubrik analitik yang transparan dan memiliki deskriptor terukur berperan ganda: menjamin konsistensi penilai sekaligus menjadi peta belajar mandiri bagi murid.',
  },
  {
    id: 'pu-kat-17',
    bank: 'PU',
    topic: 'PPDP (Perkembangan Murid)',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Dalam membangun lingkungan belajar yang aman secara psikologis (psychologically safe learning environment) di bengkel atau kelas praktik, evaluasi ketepatan kebijakan guru berikut.',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Menegaskan perbedaan antara kesalahan konsep awal yang wajar didiskusikan dengan pelanggaran prosedur keselamatan yang berisiko cedera.',
        answer: 0,
        reason: 'Murid berani bertanya saat ragu konsep, sekaligus paham batas tegas keselamatan kerja.',
      },
      {
        text: 'Menertawakan murid yang keliru membaca skala alat ukur di depan kelas agar ingatannya menjadi kuat karena malu.',
        answer: 1,
        reason: 'Rasa takut dipermalukan mendorong murid menyembunyikan kebingungan—yang di bengkel justru sangat berbahaya.',
      },
      {
        text: 'Membiasakan rutinitas "tanya sebelum tekan tombol mulai" tanpa cemoohan saat murid ragu memeriksa setting mesin.',
        answer: 0,
        reason: 'Budaya verifikasi aman menghilangkan ketakutan bertanya dan mencegah kecelakaan alat/manusia.',
      },
    ],
    explanation:
      'Lingkungan psikologis aman di kelas vokasi sangat vital bagi keselamatan: siswa harus merasa aman mengakui keraguan prosedural sebelum mengoperasikan mesin.',
  },
  {
    id: 'pu-kat-18',
    bank: 'PU',
    topic: 'Filosofi & Pendidikan Nilai',
    source: 'Simulasi Kisi-Kisi UKPPPG 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.3',
    prompt:
      'Seorang murid kelas XII berbakat sering terlambat masuk bengkel dan mengabaikan pembersihan mesin setelah selesai praktik karena merasa hasil benda kerjanya selalu paling presisi. Evaluasi sikap profesionalisme pendidik pada pernyataan berikut.',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Membiarkan pelanggaran etos 5R tersebut asalkan murid tersebut tetap memenangkan lomba LKS atas nama sekolah.',
        answer: 1,
        reason: 'Kompetensi keahlian di SMK harus utuh antara hardskill teknis dan sikap kerja industri (5R, kedisiplinan, tanggung jawab).',
      },
      {
        text: 'Mengapresiasi kecakapan presisinya sekaligus menetapkan konsekuensi edukatif konsisten bahwa pemeliharaan alat dan ketepatan waktu merupakan syarat mutlak kelulusan praktik.',
        answer: 0,
        reason: 'Konsistensi standar etos kerja mencegah bias halo effect dan membekali kesiapan kerja sejati.',
      },
      {
        text: 'Membimbing murid merefleksikan bahwa di lini produksi industri modern, kedisiplinan SOP dan perawatan alat sama berharganya dengan akurasi produk.',
        answer: 0,
        reason: 'Menginternalisasi nilai tanggung jawab melalui konteks profesional nyata (kebermaknaan nilai).',
      },
    ],
    explanation:
      'Subkompetensi K.3 menuntut konsistensi pendidik menegakkan budaya belajar dan etos kerja unggul secara adil tanpa perlakuan istimewa yang merusak karakter.',
  },
];
