import type { ExamQuestion } from '../types/exam';

/**
 * 14 Soal Tambahan PCK Teknik Mesin SMK (Kerja Bangku, Tap/Bor, Pneumatik-Hidrolik, Kelistrikan Mesin, Perawatan Preventif)
 * Membawa Bank PCK menjadi >= 102 soal (cukup untuk 2 simulasi penuh 50 soal tanpa satu pun soal berulang!).
 */
export const PCK_MESIN_EXTRA: ExamQuestion[] = [
  {
    id: 'pck-ex-01',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam praktik kerja bangku, seorang siswa ingin membuat ulir dalam M10 × 1,5 memakai tap tangan pada pelat baja tebal 12 mm. Sebelum mengebor lubang dasar (pre-drill hole), ia memilih mata bor berdiameter tepat Ø10,0 mm dengan alasan "bautnya M10 jadi lubangnya juga harus 10 mm". Cara meluruskan miskonsepsi tersebut secara matematis dan fungsional adalah ....',
    options: [
      'Menyetujui ukuran bor Ø10,0 mm lalu menyuruh siswa mengetuk tap sekuat mungkin.',
      'Menjelaskan bahwa mata tap harus menyayat profil alur ke dinding lubang, sehingga diameter bor pra-tap dihitung mendekati D_bor = D - p = 10 - 1,5 = 8,5 mm (bila memakai Ø10 mm tidak tersisa daging logam untuk membentuk profil ulir dan baut langsung lolos tanpa mencengkeram).',
      'Menyarankan diameter bor sebesar D + p = 11,5 mm agar tap tidak pernah patah.',
      'Meminta siswa langsung mengebor memakai tap No. 3 di mesin bor putaran 1200 rpm.',
      'Mengukur diameter lubang cukup memakai pensil penggaris kayu.',
    ],
    answer: 1,
    explanation:
      'Untuk ulir metrik standar berdasar diameter nominal D dan kisar (pitch) p, diameter lubang bor pra-tap praktis dirumuskan D_bor ≈ D - p (10 - 1,5 = 8,5 mm). Jika dibor sebesar D (10 mm), seluruh bagian daging pembentuk ulir dalam habis terbuang dan ulir gagal terbentuk.',
  },
  {
    id: 'pck-ex-02',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Saat mengetap lubang buntu M8 × 1,25 dengan tangan menggunakan set tap nomor 1 (taper), 2 (plug), dan 3 (bottoming), seorang siswa memaksa memutar terus ke depan tanpa pernah memutar balik seperempat putaran hingga terdengar bunyi "krek" — ujung tap baja keras patah tertanam di dalam blok aluminium berharga mahal! Analisis penyebab teknis yang tepat bagi siswa adalah ....',
    options: [
      'Tap tangan memang wajib diputar terus searah tanpa berhenti sampai dasar lubang.',
      'Mengetap harus dimulai bertahap dari Tap 1 -> 2 -> 3 memakai pelumas potong yang sesuai, dan setiap 1/2 hingga 1 putaran maju WAJIB diputar balik sekitar 1/4–1/2 putaran untuk MEMATAHKAN beram/tatal yang terjepit di alur flute agar torsi tidak melonjak mematahkan tap yang bersifat keras-getas; pastikan juga tangkai tap tegak lurus 90° dengan permukaan benda.',
      'Kesalahan terletak pada penggunaan cairan pelumas; seharusnya lubang tap dikeringkan total.',
      'Aluminium lebih keras dari baja HSS sehingga selalu mematahkan tap.',
      'Tap patah karena siswa memakai tap nomor 1 alih-alih langsung memakai tap nomor 3 pada lubang baru.',
    ],
    answer: 1,
    explanation:
      'Tap terbuat dari baja perkakas sangat keras namun getas terhadap beban puntir miring atau tatal menumpuk (chip jamming). Teknik putar maju-balik (cut-and-break-chip), menjaga kesikuan 90°, memberi cutting fluid/oli sesuai material, serta bergantian dari Tap 1 -> 2 -> 3 mencegah patah tap.',
  },
  {
    id: 'pck-ex-03',
    bank: 'PCK',
    topic: 'Elemen Mesin & Transmisi',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada sistem pneumatik otomasi industri ringan di lab mekatronika Teknik Mesin, beberapa siswa mengira unit FRL (Filter, Regulator, Lubricator) sebelum katup kontrol arah boleh dilepas agar aliran udara kompresor lebih kencang dan murah. Penjelasan fungsi teknis kritis unit FRL tersebut adalah ....',
    options: [
      'Filter menyaring partikel debu dan kondensat uap air dari tangki kompresor (mencegah karat/macet katup), Regulator menstabilkan tekanan kerja sesuai kebutuhan aman komponen (menghindari fluktuasi kompresor & kelebihan beban), dan Lubricator (pada aktuator non-lubed tertentu) mengabutkan oli halus mengurangi keausan seal internal.',
      'FRL hanya berfungsi sebagai hiasan manometer penunjuk suhu udara ruangan.',
      'Regulator tugasnya mengubah udara tekan menjadi cairan minyak hidrolik bertekanan tinggi.',
      'Uap air dalam udara kompresor sebenarnya bagus untuk melumasi katup solenoid listrik.',
      'Filter diletakkan di ujung pembuangan muffler setelah silinder bergerak.',
    ],
    answer: 0,
    explanation:
      'Udara kompresor bengkel kaya kondensat air dan partikel kerak pipa; tanpa FRL (Air Service Unit), kelembapan dan kotoran akan merusak seal karet maupun menyumbat spool katup pneumatik presisi dengan cepat serta membuat gaya dorong silinder tidak konsisten.',
  },
  {
    id: 'pck-ex-04',
    bank: 'PCK',
    topic: 'K3LH & Teaching Factory',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Ketika melatih sistem hidrolik bertekanan tinggi (>100 bar) pada mesin press atau trainer hidrolik sekolah, seorang siswa hendak mengecek dugaan adanya kebocoran halus (pinhole leak) di selang bertekanan tinggi dengan cara meraba sepanjang selang menggunakan telapak tangan telanjang. Mengapa guru wajib menghentikan seketika dan melarang tindakan tersebut?',
    options: [
      'Karena oli hidrolik dapat mewarnai kulit sehingga sulit dicuci sabun.',
      'Semprotan jet fluida hidrolik dari lubang jarum bertekanan ratusan bar dapat MENEMBUS kulit dan jaringan tubuh seperti jarum injeksi tekanan tinggi (high-pressure fluid injection injury) meski tidak terasa sakit awalnya, memicu kerusakan jaringan parah/nekrosis hingga amputasi jika tidak ditangani bedah segera; pengecekan kebocoran wajib saat tekanan diturunkan/dibaca memakai selembar KARTON/KERTAS tebal bergagang sambil memakai APD lengkap.',
      'Selang hidrolik bertekanan menghasilkan sengatan listrik statis 10.000 volt.',
      'Menyentuh selang menyebabkan pompa hidrolik langsung berputar mundur.',
      'Oli hidrolik mendidih di atas suhu 500 °C saat melewati selang karet.',
    ],
    answer: 1,
    explanation:
      'Salah satu bahaya terselubung paling mematikan dalam sistem hidrolik industri adalah Hydraulic Injection Injury: lubang mikroskopis pada selang bertekanan tinggi memancarkan cairan hampir tak terlihat yang menembus sarung tangan/kulit dan menyuntikkan oli ke dalam jaringan tubuh. Selalu periksa memakai selembar kardus atau setelah sistem di-depressurize & LOTO.',
  },
  {
    id: 'pck-ex-05',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada pengeboran lubang berdiameter besar Ø24 mm di mesin bor kolom (drill press) pada pelat baja tebal, seorang siswa langsung memakai mata bor Ø24 mm pada benda kerja rata tanpa lubang awalan (pilot hole) dan putaran tinggi, sehingga mata bor meloncat tergelincir meleset dari titik pusat (centering drift). Langkah prosedural standar yang benar diajarkan guru adalah ....',
    options: [
      'Menekan gagang bor dengan dua tangan bergelayut agar mata bor dipaksa menembus.',
      'Melakukan penitikan pusat (center punch) -> membuat lubang awal menggunakan center drill atau mata bor berdiameter lebih kecil (pilot hole, misal Ø6–8 mm seukuran ketebalan chisel edge bor besar) -> mengebor bertahap hingga Ø24 mm memakai cekam ragum meja yang DIKLEM mati dengan penurunan putaran rpm sesuai diameter.',
      'Memegangi pelat kecil cukup memakai satu tangan kiri tanpa klem meja mesin bor.',
      'Menggunakan putaran tertinggi mesin (2500 rpm) untuk mata bor Ø24 mm pada baja.',
      'Menumpuk balok kayu longgar tanpa penjepit sebagai pengganjal ragum.',
    ],
    answer: 1,
    explanation:
      'Ujung chisel edge mata bor besar cukup lebar dan tidak memotong efisien tanpa lubang pengarah (pilot hole), memicu gaya dorong besar dan selip. Penitik pusat + bor bertahap (mengurangi rpm seiring membesarnya diameter bor) + pencekaman ragum meja aman mencegah benda berputar menyabet operator ("helicoptering").',
  },
  {
    id: 'pck-ex-06',
    bank: 'PCK',
    topic: 'Elemen Mesin & Transmisi',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Dalam pemeliharaan mesin perkakas bertenaga listrik 3 fasa (bubut/frais) di bengkel SMK, siswa melaporkan adanya sensasi kesetrum ringan (arus bocor pada bodi logam mesin) saat memegang tuas eretan. Langkah diagnosis K3LH pertama dan penjelasan komponen pengaman listrik yang wajib diajarkan kepada siswa adalah ....',
    options: [
      'Menyuruh siswa memakai sepatu karet tebal lalu tetap menyalakan mesin.',
      'Segera memutus sumber daya utama / menekan Emergency Stop & memasang tanda "Dilarang Dioperasikan" (Out-of-Service Tag), kemudian memeriksa bersama teknisi kelangsungan sistem pembumian (grounding / PE) bodi mesin dan tahanan isolasi motor sebelum mesin dioperasikan kembali—serta memahami peran ELCB/RCCB memutus cepat arus bocor.',
      'Melepaskan kabel kuning-hijau pembumian dari bodi mesin supaya setrum tidak mengalir ke lantai.',
      'Membungkus tuas handwheel mesin bubut dengan lakban kertas tipis sambil terus menyayat baja.',
      'Menyiram bodi mesin dengan air agar muatan listriknya netral.',
    ],
    answer: 1,
    explanation:
      'Arus bocor pada bodi mesin berisiko fatal akibat kegagalan isolasi belitan/kabel dan terputusnya grounding proteksi (PE). Mesin harus langsung diisolasi (LOTO/tag rusak) dan diperiksa kelistrikan grounding + insulasi oleh pihak berwenang, TIDAK pernah diakali secara darurat.',
  },
  {
    id: 'pck-ex-07',
    bank: 'PCK',
    topic: 'K3LH & Teaching Factory',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.4',
    prompt:
      'Dalam pengenalan strategi perawatan mesin perkakas (Maintenance Strategy) kelas XII, siswa membedakan perawatan reaktif (Breakdown), terjadwal berkala (Preventive), dan berbasis kondisi getaran/oli/suhu (Predictive / PdM). Contoh penerapan Preventive & Autonomous Maintenance harian yang paling relevan dibiasakan pada siswa operator bengkel sekolah adalah ....',
    options: [
      'Menunggu sampai gearbox mesin bubut berbunyi keras dan gigi rontok baru melapor.',
      'Melaksanakan pemeriksaan awal pra-operasi (cek level kaca oli spindel/apron, kebersihan bedways bebas geram kasar, pengetesan gerak halus eretan, pelumasan slideway melalui pompa/nipple oil, dan pencatatan log harian mesin sebelum/sesudah dipakai).',
      'Membongkar total seluruh isi headstock transmisi setiap akhir jam pelajaran praktik.',
      'Membiarkan tatal baja halus menumpuk berkarat bersama air pendingin di atas meja mesin frais.',
      'Mengganti oli pelumas mesin dengan minyak goreng bekas kantin.',
    ],
    answer: 1,
    explanation:
      'Perawatan mandiri operator (Autonomous Maintenance / TPM) dan Preventive harian melibatkan inspeksi level pelumas, pembersihan landasan mesin (ways) sebelum menggeser eretan agar tidak tergores geram, dan pelumasan rutin harian guna menjaga presisi mesin jangka panjang.',
  },
  {
    id: 'pck-ex-08',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Saat ujian praktik kerja bangku dasar kelas X (mengikir rata, siku, dan sejajar sepotong balok ST 37 memakai kikir tangan dan gergaji besi), beberapa siswa menghabiskan energi dengan memegang ujung kikir sembarangan dan menarik dengan tekanan penuh ke belakang maupun ke depan. Aspek psikomotor spesifik apa yang perlu dinilai serta dikoreksi guru lewat umpan balik formatif?',
    options: [
      'Menyuruh siswa mengikir mundur lebih keras lagi supaya gigi kikir cepat menempel.',
      'Mengamati dan menilai postur kaki sejajar ergonomis, gerakan dorong lurus stabil menekan hanya pada LANGKAH MAJU (forward stroke) dan mengangkat/melepas tekanan saat langkah balik (karena gigi kikir dipotong miring maju—menekan saat mundur menumpulkan mata potong), serta memeriksa kerataan dengan pisau perata/mistar rambut (straight edge) terhadap celah cahaya dan kesikuan 90° secara bertahap.',
      'Hanya menimbang balok besi akhir tanpa pernah melihat posisi tangan maupun kerataan bidang.',
      'Mengizinkan siswa diam-diam mengamplas balok di mesin gerinda bangku lalu mengaku hasil kikir.',
      'Memilih daun gergaji dengan gigi menghadap ke belakang (tarik) padahal gagang didesain dorong.',
    ],
    answer: 1,
    explanation:
      'Keterampilan dasar kikir melibatkan efisiensi ergonomi tubuh, tekanan hanya saat langkah maju, teknik cross-filing & draw-filing, dan verifikasi siklis menggunakan straight edge (celah sinar) & penyiku 90°.',
  },
  {
    id: 'pck-ex-09',
    bank: 'PCK',
    topic: 'Gambar Teknik, Proyeksi & CAD',
    pckFocus: 'Media/ICT & Simulator',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Siswa kelas XI mengalami kesulitan memahami hubungan ukuran antar-elemen saat merancang rakitan poros–bantalan–puli–pasak di CAD 3D (top-down vs bottom-up assembly) karena selalu gagal memasang komponen ketika lubang dan diameter tidak sinkron. Pendekatan terstruktur berbasis fitur CAD modern yang paling tepat diajarkan guru adalah ....',
    options: [
      'Membiarkan siswa menggambar tiap part dengan angka acak lalu memaksa pasaknya dipotong manual dengan extrude cut sembarang.',
      'Melatih pemanfaatan tabel/variabel parameter global atau desain master sketch/referensi bersama (dan konvensi lubang standar Toolbox/ISO fastener) agar bila diameter poros diubah dari Ø20 ke Ø25 mm, lubang puli, alur pasak, dan bantalan ikut menyesuaikan konsisten sesuai standar.',
      'Menghapus seluruh penggunaan lubang pasak dari desain assembly siswa.',
      'Menjadikan file JPG foto katalog sebagai pengganti model 3D komponen.',
      'Menyuruh siswa menggambar seluruh komponen mesin menempel menjadi satu solid body tunggal (multi-part merged) agar tidak perlu assembly mate.',
    ],
    answer: 1,
    explanation:
      'Mengelola keterkaitan ukuran antar-part melalui master sketch, global variables, atau komponen standar ISO membantu siswa memahami "design intent" (niat desain parametrik) di dunia rekayasa manufaktur.',
  },
  {
    id: 'pck-ex-10',
    bank: 'PCK',
    topic: 'Ilmu Bahan & Heat Treatment',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Pada mata pelajaran Pengetahuan Bahan Teknik, siswa kesulitan menghafal manfaat unsur paduan baja (Cr, Ni, Mo, Mn, W) secara terpisah dan merasa bosan dengan metode ceramah definisi. Desain pembelajaran yang paling memicu keterhubungan makna kontekstual adalah ....',
    options: [
      'Menguji siswa menulis ulang tabel periodik unsur kimia lengkap dari nomor atom 1 sampai 103.',
      'Memberikan studi kasus kegagalan & pemilihan perkakas nyata di bengkel—membandingkan pisau dapur tahan karat (Cr/Ni), mata pahat HSS (W/Mo/V/Cr tahan panas merah), dan rantai/gigi excavator (Mn tahan benturan/aus)—lalu membimbing siswa menemukan peran masing-masing unsur paduan dari bukti produk nyata.',
      'Membacakan daftar nama unsur paduan secara alfabet selama dua pertemuan berturut-turut.',
      'Menghapus materi baja paduan dan cukup mengenalkan baja karbon rendah.',
      'Menugaskan siswa mewarnai gambar blok baja di kertas HVS.',
    ],
    answer: 1,
    explanation:
      'Pembelajaran konseptual bermakna mengaitkan sifat abstrak unsur paduan kimia langsung dengan tantangan kerja nyata perkakas bengkel dan alat industri yang akrab di sekitar siswa SMK.',
  },
  {
    id: 'pck-ex-11',
    bank: 'PCK',
    topic: 'Elemen Mesin & Transmisi',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada unit pembelajaran Sistem Pneumatik dan Hidrolik SMK Teknik Mesin, tentukan ketepatan perbandingan teknis di bawah ini.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Sistem hidrolik mampu menghasilkan gaya dorong sangat besar dengan ukuran aktuator ringkas karena menggunakan fluida cair tak-mampat (incompressible) pada tekanan kerja puluhan hingga ratusan bar, berbeda dengan pneumatik udara yang bersifat mampu-mampat (compressible).',
        answer: 0,
        reason: 'Sifat fluida cair non-kompresibel mendukung kepadatan daya tinggi & posisi lebih kaku pada hidrolik, sementara pneumatik unggul di kecepatan gerak bersih namun bertekanan relatif rendah (~6–8 bar).',
      },
      {
        text: 'Katup kontrol arah 5/2 (lima lubang port, dua posisi sakelar) umum digunakan untuk mengendalikan maju-mundurnya silinder kerja ganda (double-acting cylinder) secara bolak-balik.',
        answer: 0,
        reason: 'Katup 5/2 menyediakan port suplai (1), dua port kerja A/B (2,4) ke ruang depan/belakang piston, dan dua lubang buang (3,5).',
      },
      {
        text: 'Dalam sistem hidrolik, fluida kerja bertekanan tinggi setelah dipakai menggerakkan silinder dapat dibuang bebas langsung ke udara terbuka ruangan seperti knalpot pneumatik agar hemat selang balik.',
        answer: 1,
        reason: 'Sistem hidrolik bekerja dalam sirkuit tertutup (closed loop): oli kembali melewati jalur return & filter menuju tangki reservoir, bukan dibuang ke udara terbuka.',
      },
    ],
    explanation:
      'Membandingkan fluida tak-mampat (hidrolik bersirkuit balik ke reservoir) versus fluida mampu-mampat (pneumatik bermekanisme buang ke atmosfer) beserta notasi katup 5/2 dan 3/2 mencegah kekeliruan perancangan kontrol mesin.',
  },
  {
    id: 'pck-ex-12',
    bank: 'PCK',
    topic: 'Pemrograman CNC & Simulator',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Dalam menyusun lembar evaluasi pra-eksekusi pemesinan CNC Milling 3-Axis untuk proyek kontur profil berkantong (pocket & contour), tentukan ketepatan pengecekan berikut.',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Memeriksa kecukupan tinggi baut klem/ragum pencekam agar tidak berada di jalur lintasan rapid G00 saat berpindah antar-area pemotongan (clearance plane Z cukup tinggi di atas puncak baut klem).',
        answer: 0,
        reason: 'Tabrakan pahat dengan toe-clamp / rahang ragum saat pindah rapid adalah insiden umum jika clearance Z tidak diukur.',
      },
      {
        text: 'Menyesuaikan arah penyayatan kantong (pocket) dan nilai step-over (umumnya ≤50–70% diameter endmill) agar beban pemotongan seragam tanpa menyisakan pilar material tipis di tengah lintasan.',
        answer: 0,
        reason: 'Step-over >75–100% berisiko meninggalkan pulau tatal tak terpotong dan membebani mata pisau berlebih.',
      },
      {
        text: 'Menggunakan pisau endmill beralur dua/empat standar beralas rata tak berlubang tengah (non-center cutting) untuk menusuk langsung vertikal lurus ke bawah (vertical plunging) sejauh 15 mm tanpa gerakan helikal (ramp) ataupun lubang pra-bor.',
        answer: 1,
        reason: 'Endmill non-center-cutting tidak memiliki tepi potong di pusat sumbu sehingga plunging vertikal akan melelehkan/mematahkan pisau; gunakan helical ramp entry atau pre-drill.',
      },
    ],
    explanation:
      'Verifikasi pra-jalan CNC Milling menuntut kewaspadaan terhadap posisi klem fisik, strategi masuk material (ramping/helical entry vs non-center-cutting endmill), serta besaran step-over yang aman.',
  },
  {
    id: 'pck-ex-13',
    bank: 'PCK',
    topic: 'Teknologi Pengelasan',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada pengelasan GTAW (TIG) bahan pelat aluminium menggunakan kawat pengisi ER4043 dan gas pelindung Argon murni, siswa sering mengalami kesulitan oksidasi di permukaan las (warna kusam berkerak dan manik tidak mau menyatu). Prinsip persiapan & parameter kritis khusus aluminium yang perlu ditekankan guru mencakup .... (Pilih semua jawaban benar)',
    options: [
      'Menghilangkan lapisan oksida aluminium (Al2O3) yang bertitik lebur sangat tinggi (±2050 °C vs logam dasar Al ±660 °C) sebelum mengelas memakai sikat kawat STAINLESS STEEL bersih khusus aluminium dan pelarut pembersih bebas minyak/aseton.',
      'Menggunakan setting arus AC (Alternating Current / high-frequency balance) pada mesin TIG karena setengah siklus elektroda positif (DCEP) menyediakan aksi pembersih katodik memecah lapisan oksida Al2O3 saat mengelas.',
      'Memastikan tabung gas Argon benar-benar murni dan aliran selang bebas kebocoran (memakai tungsten tipe murni/lantanum/ceriated sesuai mesin AC, BUKAN sikat kawat besi bekas baja karbon agar tidak kontaminasi karat!).',
      'Menggunakan setting DCEN dengan gas oksigen murni agar oksida makin tebal.',
      'Menggosok pelat aluminium dengan sikat kawat besi hitam bekas membersihkan karat baut baja.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pengelasan TIG Aluminium unik karena lapisan oksida Al2O3 meleleh jauh lebih tinggi (~2050 °C) dari aluminium itu sendiri (~660 °C). Oleh karenanya wajib dibersihkan mekanis memakai sikat stainless khusus aluminium (bukan sikat baja biasa!) + pelarut, lalu dilas memakai arus AC yang memiliki cathodic cleaning action.',
  },
  {
    id: 'pck-ex-14',
    bank: 'PCK',
    topic: 'K3LH & Teaching Factory',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Sebagai calon guru profesional Teknik Mesin di abad ke-21 yang mengajar generasi Z/Alpha di SMK dengan beragam kesiapan belajar dan keterbatasan fasilitas fisik bengkel di sebagian sekolah mitra, strategi pembelajaran fleksibel-mandiri mana saja yang memperkuat kemandirian kompetensi vokasional murid? (Pilih lebih dari satu)',
    options: [
      'Menyediakan modul mikro-pembelajaran & simulator interaktif berbasis web (pembacaan mikrometer/vernier, CAD sketch-to-3D, pengenalan simbol gambar & CNC toolpath) agar siswa dapat berlatih konsep dan prosedur kapan pun serta di mana pun sebelum jam bengkel nyata.',
      'Mewajibkan uji pemahaman konseptual dan keselamatan pra-bengkel secara digital/singkat agar jam mesin berkapasitas terbatas fokus dipakai untuk penyayatan presisi dan umpan balik keterampilan psikomotor.',
      'Membangun komunitas belajar sejawat di kelas (peer tutor) dengan rubrik checklist verifikasi bersama untuk mengasah komunikasi teknis dan kepemimpinan bengkel.',
      'Melarang siswa mengakses sumber belajar digital apa pun di luar jam tatap muka ruang praktik.',
      'Menggantikan seluruh jam kerja mesin bubut dan las hingga kelas XII penuh hanya dengan slide ceramah.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Memadukan latihan fleksibel kapan saja/di mana saja (simulator konseptual & K3LH prapraktik) dengan optimalisasi jam bengkel nyata dan peer-verification menjawab tantangan keterbatasan mesin fisik tanpa mengurangi mutu psikomotor.',
  },
];
