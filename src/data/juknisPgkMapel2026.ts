import type { ExamQuestion } from '../types/exam';

/**
 * Butir PCK 3-format Juknis UKPPPG 2026 (PGK_KATEGORI, PGK_MCMA, PG) untuk Prodi Mapel
 * (PJOK, Bahasa Inggris, PPKn, PAI, IPS Terpadu, Bahasa Indonesia, Matematika).
 */
export const JUKNIS_PGK_MAPEL_2026: ExamQuestion[] = [
  // =========================================================================
  // PJOK (11 butir: 5 PGK_KATEGORI, 4 PGK_MCMA, 2 PG)
  // =========================================================================
  {
    id: 'jk26-pjok-01',
    bank: 'PCK',
    topic: 'PCK PJOK · Pembelajaran Taktis TGFU & Modifikasi Permainan Bola Besar',
    prodiScope: ['pjok'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG PJOK 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Dalam materi permainan bola besar (sepak bola dan bola basket) di SMP, guru ingin meninggalkan pola latihan dril antre memanjang yang membuat siswa pasif, dan beralih pada pendekatan taktis (*Teaching Games for Understanding* / TGFU). Tentukan apakah keputusan pembelajaran guru PJOK berikut **Tepat** atau **Kurang Tepat**!',
    categories: ['Tepat', 'Kurang Tepat'],
    statements: [
      {
        text: 'Menerapkan permainan area kecil (*small-sided game* 3v3 atau 4v4) sehingga setiap siswa lebih sering menyentuh bola dan berlatih mengambil keputusan operan maupun bergerak tanpa bola.',
        answer: 0,
        reason: 'Small-sided game melipatgandakan waktu aktif bergerak (ALT-PE) dan tuntutan keputusan taktis tiap siswa.',
      },
      {
        text: 'Memulai pertemuan dengan permainan modifikasi singkat, lalu menghentikan sejenak (*freeze*) untuk berdiskusi bersama siswa mengenai masalah ruang kosong sebelum masuk dril perbaikan teknik operan.',
        answer: 0,
        reason: 'Siklus TGFU menempatkan kesadaran masalah taktis (*game appreciation & tactical awareness*) sebagai pemicu kebutuhan teknik.',
      },
      {
        text: 'Meminta 32 siswa berbaris dalam satu antrean tunggal menunggu giliran menendang satu bola ke gawang selama 60 menit penuh.',
        answer: 1,
        reason: 'Antrean tunggal panjang membuat waktu aktif siswa sangat rendah dan membosankan.',
      },
      {
        text: 'Mengharuskan seluruh siswa kelas VII langsung bermain 11v11 di lapangan ukuran dewasa standar FIFA tanpa penyesuaian aturan meskipun bola hampir tidak pernah menyentuh siswa pemula.',
        answer: 1,
        reason: 'Tanpa modifikasi ukuran lapangan dan aturan, pemain yang dominan menguasai bola sementara siswa lain terisolasi.',
      },
    ],
    explanation:
      'Pendekatan taktis (TGFU) dan modifikasi permainan meningkatkan partisipasi merata, pemahaman ruang bermain, dan transfer keterampilan teknik ke situasi pertandingan nyata.',
  },
  {
    id: 'jk26-pjok-02',
    bank: 'PCK',
    topic: 'PCK PJOK · Fisiologi Kebugaran Jasmani Prinsip FITT & VO2Max',
    prodiScope: ['pjok'],
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Kurasi Juknis UKPPPG PJOK 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Saat mendampingi proyek penyusunan program kebugaran mandiri bagi siswa SMA, guru memeriksa pemahaman konsep prinsip latihan **FITT** dan fisiologi latihan. Tentukan apakah pernyataan konsep latihan berikut **Benar** atau **Salah**!',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Untuk meningkatkan daya tahan kardiorespirasi secara efektif, intensitas latihan aerobik perlu mencapai zona latihan target sekitar 60%-85% denyut jantung maksimal (DNM) dengan durasi berkelanjutan minimal 20-30 menit.',
        answer: 0,
        reason: 'Komponen Intensity dan Time dalam FITT menentukan terjadinya adaptasi sistem jantung-paru.',
      },
      {
        text: 'Peregangan dinamis (*dynamic stretching*) dengan gerakan terkontrol lebih cocok diletakkan pada tahap pemanasan sebelum lari cepat, sementara peregangan statis ditahan lebih tepat saat pendinginan (*cooling down*).',
        answer: 0,
        reason: 'Peregangan dinamis meningkatkan suhu otot dan kesiapan neuromuskular tanpa menurunkan ledakan daya otot sebelum sprint.',
      },
      {
        text: 'Mengukur daya tahan aerobik (*VO2Max*) di halaman sekolah yang terbatas dapat dilakukan secara sahih memakai tes *Bleep Test* (lari bolak-balik 20 meter berirama audio).',
        answer: 0,
        reason: 'Multistage Fitness Test 20 m merupakan instrumen lapangan terstandar yang praktis untuk estimasi VO2Max.',
      },
      {
        text: 'Prinsip *overload* menuntut seluruh peserta didik SD langsung berlatih beban angkat besi maksimal 1-RM pada pertemuan pertama agar kekuatan ototnya segera melonjak.',
        answer: 1,
        reason: 'Beban maksimal 1-RM berisiko tinggi terhadap lempeng epifisis pertumbuhan anak dan melanggar prinsip progresi aman.',
      },
    ],
    explanation:
      'Guru PJOK perlu meluruskan miskonsepsi fisiologi olahraga (FITT, pemanasan dinamis vs statis, pengukuran VO2Max, dan batas aman prinsip *overload* sesuai tahap pertumbuhan usia).',
  },
  {
    id: 'jk26-pjok-03',
    bank: 'PCK',
    topic: 'PCK PJOK · Biomekanika Atletik & Ketentuan Keselamatan Nomor Lempar-Lompat',
    prodiScope: ['pjok'],
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Kurasi Juknis UKPPPG PJOK 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.4',
    prompt:
      'Guru PJOK merencanakan praktik cabang Atletik (Jalan Cepat, Lari Estafet, Lompat Jauh, dan Tolak Peluru) di halaman sekolah. Tentukan apakah prosedur teknik dan keselamatan lapangan berikut **Sesuai Standar** atau **Tidak Sesuai**!',
    categories: ['Sesuai Standar', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Pada nomor Jalan Cepat, guru memeriksa kontak kaki berkesinambungan ke tanah tanpa fase melayang (*no visible flight phase*) dan posisi lutut tungkai tumpu depan lurus sejak menyentuh lintasan hingga tegak.',
        answer: 0,
        reason: 'Kedua aturan biomekanika ini merupakan pembeda utama Jalan Cepat dari lari menurut regulasi World Athletics.',
      },
      {
        text: 'Dalam latihan Tolak Peluru atau lempar roket anak, seluruh siswa penunggu berdiri di area belakang garis lempar dan tidak boleh masuk sektor jatuhan sebelum aba-aba ambil alat serentak dari guru.',
        answer: 0,
        reason: 'Disiplin manajemen zona lempar adalah standar K3 mutlak untuk mencegah kecelakaan benturan alat lempar.',
      },
      {
        text: 'Pada lomba lari estafet 4 x 100 m, seluruh pelari ke-1, ke-2, ke-3, dan ke-4 wajib memulai lari dari posisi diam menggunakan start jongkok di masing-masing tikungan.',
        answer: 1,
        reason: 'Hanya pelari ke-1 yang memakai start jongkok dari garis diam; pelari ke-2, ke-3, dan ke-4 memakai start melayang di zona pergantian tongkat.',
      },
      {
        text: 'Menggunakan gawai untuk merekam video sudut samping tolakan Lompat Jauh siswa secara berpasangan lalu membandingkannya untuk umpan balik seketika sebelum percobaan ulang.',
        answer: 0,
        reason: 'Peer video feedback membantu siswa melihat sudut tolakan dan meluruskan mendarat kaki secara nyata.',
      },
    ],
    explanation:
      'Penguasaan teknik dasar biomekanika atletik harus berjalan beriringan dengan disiplin manajemen keselamatan sektor praktik serta pemanfaatan umpan balik visual yang efektif.',
  },
  {
    id: 'jk26-pjok-04',
    bank: 'PCK',
    topic: 'PCK PJOK · Penilaian Autentik Psikomotorik, Taktis & Sportivitas',
    prodiScope: ['pjok'],
    pckFocus: 'Asesmen Otentik',
    source: 'Kurasi Juknis UKPPPG PJOK 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Guru PJOK menyusun instrumen asesmen pembelajaran permainan net (bola voli/bulu tangkis) jenjang SMP-SMA agar adil dan mencerminkan capaian kompetensi menyeluruh. Tentukan apakah praktik penilaian berikut **Valid & Adil** atau **Bias / Tidak Valid**!',
    categories: ['Valid & Adil', 'Bias / Tidak Valid'],
    statements: [
      {
        text: 'Menilai unjuk kerja teknik passing atau servis menggunakan rubrik kualitas mekanika gerakan (*penilaian proses*) yang dipadukan keberhasilan mengarahkan bola ke sasaran (*penilaian produk*) dalam situasi permainan.',
        answer: 0,
        reason: 'Gabungan penilaian proses, produk, dan pengambilan keputusan dalam permainan menghasilkan gambaran kompetensi gerak autentik.',
      },
      {
        text: 'Mengamati perilaku sportivitas mengakui kesalahan sentuh net, menghargai keputusan wasit sebaya, dan memberi semangat teman kelompok dalam lembar observasi sikap terintegrasi.',
        answer: 0,
        reason: 'Pendidikan karakter fair play dan tanggung jawab sosial merupakan tujuan inti PJOK.',
      },
      {
        text: 'Menetapkan nilai praktik bola voli seluruh siswa kelas VIII murni dari tinggi badan dan jarak vertikal loncatan tanpa menilai teknik maupun kontribusi permainan.',
        answer: 1,
        reason: 'Faktor biologis bawaan bukan indikator hasil belajar keterampilan; penilaian proses gerak jauh lebih adil.',
      },
      {
        text: 'Mengisi jurnal log aktivitas fisik mingguan disertai target denyut nadi aman untuk menumbuhkan refleksi kebugaran jangka panjang peserta didik.',
        answer: 0,
        reason: 'Assessment as learning melalui log aktivitas melatih kemandirian menjaga kesehatan di luar jam sekolah.',
      },
    ],
    explanation:
      'Asesmen otentik PJOK menyeimbangkan kualitas proses gerak, efektivitas hasil permainan, kesadaran konsep taktis-fisiologis, dan internalisasi nilai sportivitas.',
  },
  {
    id: 'jk26-pjok-05',
    bank: 'PCK',
    topic: 'PCK PJOK · Pertolongan Pertama Cedera Olahraga R.I.C.E & Cuaca Terik',
    prodiScope: ['pjok'],
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Kurasi Juknis UKPPPG PJOK 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Dalam sesi praktik lapangan terbuka pada siang hari yang cukup terik, guru PJOK menghadapi situasi darurat kesehatan ringan pada dua peserta didik. Tentukan apakah tindakan penanganan berikut **Tepat Secara Medis-Pedagogis** atau **Kontraindikasi / Berisiko**!',
    categories: ['Tepat', 'Berisiko'],
    statements: [
      {
        text: 'Terhadap siswa yang baru terkilir pergelangan kakinya (cedera akut jaringan lunak tanpa patah tulang terbuka), guru mengistirahatkan sendi, mengompres dingin terbungkus kain, membalut elastis tidak terlalu ketat, dan meninggikan kaki (R.I.C.E.).',
        answer: 0,
        reason: 'Protokol R.I.C.E membatasi pembengkakan dan perdarahan kapiler pada 24-48 jam fase akut cedera terkilir.',
      },
      {
        text: 'Membawa siswa terkilir segera ke tukang urut pijat keras atau merendam sendi yang baru membengkak ke dalam air panas mendidih di menit pertama agar darah mengalir cepat.',
        answer: 1,
        reason: 'Pijatan keras dan kompres panas pada fase akut justru melebarkan pembuluh darah, memperparah memar/bengkak, dan berisiko merobek serabut ligamen.',
      },
      {
        text: 'Saat seorang siswa tampak pucat, pusing, dan sempoyongan kepanasan (*heat exhaustion*), segera hentikan aktivitasnya, bawa ke tempat teduh sejuk, longgarkan pakaian, kompres sejuk, dan beri minum bertahap jika sadar penuh.',
        answer: 0,
        reason: 'Penanganan cepat mencegah eskalasi menuju heat stroke yang mengancam nyawa.',
      },
      {
        text: 'Saat salah satu siswa terjatuh mengalami luka lecet berdarah di lutut, membiarkan darah menetes di lapangan agar permainan tim tidak terganggu waktunya.',
        answer: 1,
        reason: 'Keselamatan kesehatan peserta didik dan pencegahan infeksi selalu menjadi prioritas utama di lapangan.',
      },
    ],
    explanation:
      'Kesiapsiagaan keselamatan olahraga (R.I.C.E yang tepat tanpa pijat panas fase akut, respons stres panas, dan sterilisasi luka terbuka) wajib dikuasai setiap guru PJOK.',
  },
  {
    id: 'jk26-pjok-06',
    bank: 'PCK',
    topic: 'PCK PJOK · Pembelajaran Inklusif Senam Lantai & Manajemen Alat Terbatas',
    prodiScope: ['pjok'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG PJOK 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Guru PJOK mengajar materi senam lantai guling depan dan sikap keseimbangan di SMP dengan fasilitas hanya 2 matras untuk 34 siswa, sekaligus ada seorang siswa bertubuh sangat gemuk yang cemas cedera leher serta takut ditertawakan teman sekelas. Pilihlah SEMUA strategi pedagogis inklusif dan manajemen lapangan yang PALING TEPAT!',
    options: [
      'Menata pembelajaran model stasiun (*circuit stations*): 2 pos matras berputar cepat disertai pos paralel tanpa matras (latihan kekuatan inti, keseimbangan satu kaki, kelentukan, dan umpan balik berpasangan) agar tidak ada antrean menganggur.',
      'Menyiapkan modifikasi bidang miring matras bertingkat yang membantu momentum guling aman serta memberi pendampingan teknik *spotting* dengan menempelkan dagu rapat ke dada, bukan bertumpu di ubun-ubun.',
      'Menegakkan kesepakatan kelas saling menghargai (*anti-body shaming*) dan menyediakan variasi tingkat tantangan tugas gerak sesuai kesiapan fisik masing-masing siswa.',
      'Mewajibkan siswa yang cemas tersebut mencoba sendirian sebagai contoh pembuka di tengah kerumunan kelas tanpa bidang bantu.',
      'Mengubah seluruh jam praktik olahraga sepanjang semester menjadi tugas menyalin ukuran matras standar Olimpiade di ruang kelas.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Kombinasi circuit stations untuk keterbatasan alat, modifikasi bidang miring + spotting leher aman, dan budaya saling menghargai menjaga keselamatan fisik maupun psikologis seluruh peserta didik.',
  },
  {
    id: 'jk26-pjok-07',
    bank: 'PCK',
    topic: 'PCK PJOK · Mengatasi Water Phobia & Progresi Renang Pemula',
    prodiScope: ['pjok'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG PJOK 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Dalam praktik pembelajaran aktivitas air di kolam renang dangkal, beberapa siswa pemula tampak panik dan ketakutan memasukkan wajah ke air (*water phobia*). Pilihlah SEMUA langkah scaffolding aman dan menggembirakan yang PALING TEPAT diambil guru PJOK!',
    options: [
      'Mengawali dari pengenalan air bertahap (*water familiarization*) di tepi kolam dangkal: duduk mencelupkan kaki, membasuh wajah, dan bermain meniup gelembung udara di permukaan air (*bubble blowing*).',
      'Membimbing latihan mengapung telungkup dan meluncur pendek berpegangan dinding kolam atau memakai papan pelampung (*kickboard*) menuju rekan berjarak 2-3 meter.',
      'Menjadikan permainan air sederhana bernada menggembirakan sebagai jembatan adaptasi sebelum masuk ke koordinasi kayuhan lengan dan pernapasan gaya renang.',
      'Mendorong siswa secara mendadak ke kolam kedalaman 2 meter supaya insting bertahan hidupnya langsung muncul.',
      'Memberi nilai nol langsung dan memerintahkan siswa duduk mengawasi temannya tanpa dibimbing adaptasi bertahap.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Adaptasi bertahap di perairan dangkal (latihan kontrol napas, pelampung, meluncur jarak pendek) menghilangkan kecemasan psikologis sekaligus membangun keterampilan akuatik aman.',
  },
  {
    id: 'jk26-pjok-08',
    bank: 'PCK',
    topic: 'PCK PJOK · Inovasi Media Visual & Gerak Berirama Siswa',
    prodiScope: ['pjok'],
    pckFocus: 'Media/ICT & Simulator',
    source: 'Kurasi Juknis UKPPPG PJOK 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Pada pembelajaran senam ritmik dan rangkaian senam lantai (meroda, guling lenting) jenjang SMP-SMA, siswa sering bingung mengoordinasikan irama langkah serta sudut tolakan lengan karena contoh guru bergerak terlalu cepat. Pilihlah SEMUA inovasi media belajar berbasis TIK maupun visual yang PALING EFEKTIF!',
    options: [
      'Menyediakan kartu seri urutan foto fase gerak (*sequence cards*) di setiap pos latihan agar siswa dapat mencocokkan posisi awal, tumpuan tangan, tolakan pinggul, hingga pendaratan.',
      'Memutar video model gerakan dengan pemutaran gerak lambat (*slow-motion*) sambil menggarisbawahi penanda visual poros tubuh sebelum siswa mempraktikkan berpasangan.',
      'Memberi otonomi kelompok memilih musik bertempo sesuai kesiapan dalam proyek koreografi langkah dasar aktivitas berirama lalu merekam latihannya untuk evaluasi mandiri.',
      'Memaksa seluruh siswa langsung menirukan video senam aerobik berkecepatan tinggi 145 BPM dalam lima menit pertama tanpa jeda koreksi.',
      'Mengharuskan siswa menulis karangan biografi pencipta alat musik pengiring senam sepanjang 10 halaman.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Kartu urutan fase, video slow-motion terarah, dan kebebasan eksplorasi tempo musik bertahap memberi dukungan visual-kinestetik yang mempercepat penguasaan koordinasi gerak.',
  },
  {
    id: 'jk26-pjok-09',
    bank: 'PCK',
    topic: 'PCK PJOK · Perancangan Tujuan Pembelajaran Holistik Keterampilan & Nilai Sosial',
    prodiScope: ['pjok'],
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Kurasi Juknis UKPPPG PJOK 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.1',
    prompt:
      'Guru PJOK merumuskan modul ajar permainan bola kecil (bulu tangkis/kasti) fase D-E agar tidak hanya menuntut kemampuan mengayun alat, tetapi mencerminkan tujuan pendidikan menyeluruh PJOK Kurikulum Merdeka. Pilihlah SEMUA rumusan tujuan pembelajaran operasional yang MENCERMINKAN integrasi keterampilan gerak, literasi taktis, dan nilai karakter!',
    options: [
      'Peserta didik mampu mempraktikkan variasi pegangan raket dan pukulan forehand-servis terarah ke area kosong dalam permainan modifikasi.',
      'Peserta didik mampu menganalisis posisi penempatan bola yang menyulitkan lawan (*spatial decision*) selama simulasi reli berpasangan.',
      'Peserta didik menunjukkan sikap fair play, komunikasi menghargai rekan satu tim, dan kepatuhan keselamatan jarak ayunan alat selama bermain.',
      'Peserta didik mampu menghafalkan seluruh nama juara All England sejak tahun 1950 secara kronologis.',
      'Peserta didik hanya mengerjakan 50 soal pilihan ganda tentang panjang jaring net dari buku tulis tanpa memegang alat praktik.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Capaian Pembelajaran PJOK memadukan elemen keterampilan gerak (*motor skill*), pengetahuan konsep & strategi gerak (*tactical knowledge*), serta pengembangan karakter dan nilai sosial (*fair play*).',
  },
  {
    id: 'jk26-pjok-10',
    bank: 'PCK',
    topic: 'PCK PJOK · Progresi Pembelajaran Teknik Dasar Lari Sprint & Passing Bola',
    prodiScope: ['pjok'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG PJOK 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Saat mengajarkan teknik dasar mengoper bola sepak menggunakan kaki bagian dalam kepada siswa pemula kelas VII, bola sering melenceng jauh dan kontrol siswa berantakan karena guru langsung menugaskan umpan jauh jarak 25 meter di awal pertemuan. Pengaturan progresi pengalaman belajar paling sesuai kaidah didaktik PJOK adalah ....',
    options: [
      'Memperjauh jarak umpan menjadi 40 meter agar kekuatan otot tungkai siswa cepat terbentuk.',
      'Mengawali dari jarak pendek terkontrol (3-5 meter) berpasangan fokus pada penempatan kaki tumpu di samping bola dan sudut pergelangan kaki, baru memperjauh jarak serta menambahkan tekanan rintangan dinamis.',
      'Menghentikan seluruh latihan passing dan hanya membiarkan siswa menendang bebas ke arah gawang kosong.',
      'Mengganti seluruh sesi lapangan dengan menyalin peraturan kartu kuning dari papan tulis.',
      'Mengelompokkan hanya lima siswa anggota klub sekolah sementara 29 siswa lain duduk di pinggir lapangan.',
    ],
    answer: 1,
    explanation:
      'Prinsip progresi tugas gerak (*dari sederhana ke kompleks, dekat ke jauh, statis ke dinamis*) memastikan kontrol mekanika kaki tumpu dan bidang perkenaan terbentuk kuat sebelum menghadapi tekanan permainan nyata.',
  },
  {
    id: 'jk26-pjok-11',
    bank: 'PCK',
    topic: 'PCK PJOK · Modifikasi Bola Voli Ringan untuk Mengatasi Rasa Takut Siswa',
    prodiScope: ['pjok'],
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Kurasi Juknis UKPPPG PJOK 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Banyak siswi dan siswa pemula kelas VII takut mempraktikkan passing bawah bola voli karena lengan bawah terasa sakit memar terkena pantulan bola kulit standar keras sehingga mereka membelokkan wajah dan menekuk siku kaku. Solusi PCK paling efektif untuk membangun kepercayaan diri sekaligus memperbaiki teknik gerak siswa adalah ....',
    options: [
      'Tetap menggunakan bola kulit keras standar dan mewajibkan 100 kali passing berturut-turut tanpa jeda agar lengan terbiasa kebal.',
      'Memodifikasi alat awal dengan bola lebih ringan/empuk (bola plastik/busa) sambil melatih ayunan bahu lurus dan bidang perkenaan pergelangan lengan secara berpasangan bertahap sebelum transisi ke bola voli standar.',
      'Menghilangkan materi bola voli dari silabus semester karena dianggap terlalu menyakitkan bagi pemula.',
      'Hanya menilai tes tulis menghafalkan gambar tinggi net putra dan putri.',
      'Membebaskan siswa yang takut untuk tidak mengikuti praktik PJOK sama sekali.',
    ],
    answer: 1,
    explanation:
      'Modifikasi peralatan (*bola lebih lunak dan ringan*) menurunkan ambang kecemasan nyeri sekaligus membuka ruang belajar fokus pada posisi lengan lurus dan ayunan dorong passing yang benar.',
  },

  // =========================================================================
  // BAHASA INGGRIS (9 butir: 4 PGK_KATEGORI, 5 PGK_MCMA)
  // =========================================================================
  {
    id: 'jk26-ing-01',
    bank: 'PCK',
    topic: 'PCK B. Inggris · Siklus Genre-Based Approach (BKOF-MOT-JCOT-ICOT)',
    prodiScope: ['bahasa-inggris'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG Bahasa Inggris 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Guru Bahasa Inggris merancang unit pembelajaran teks Hortatory Exposition atau Procedure menggunakan pendekatan **Genre-Based Approach (GBA)**. Tentukan apakah penempatan aktivitas pada tiap tahapan GBA berikut **Sesuai Tahapan** atau **Tidak Sesuai**!',
    categories: ['Sesuai Tahapan', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Pada tahap Building Knowledge of the Field (BKOF), guru mengaktifkan kosakata latar dan pengalaman awal murid terkait isu lingkungan lokal melalui diskusi gambar pemantik.',
        answer: 0,
        reason: 'BKOF membangun konteks pengetahuan lapangan dan kosakata kunci sebelum murid membedah teks utuh.',
      },
      {
        text: 'Pada tahap Modelling of the Text (MOT), murid menganalisis struktur teks (*thesis-arguments-recommendation*), tujuan komunikatif, serta ciri kebahasaan teks model secara terpandu.',
        answer: 0,
        reason: 'MOT memfokuskan pembedahan fungsi sosial, generic structure, dan language features teks contoh.',
      },
      {
        text: 'Pada tahap Joint Construction of the Text (JCOT), setiap murid dilarang berdiskusi dan wajib langsung menulis esai individual berstandar ujian akhir tanpa bimbingan.',
        answer: 1,
        reason: 'JCOT justru fase kolaborasi menyusun teks bersama teman atau dipandu guru; menulis mandiri adalah tahap ICOT.',
      },
      {
        text: 'Pada tahap Independent Construction of the Text (ICOT), murid menyusun teks orisinal secara mandiri dengan memanfaatkan kerangka struktur dan umpan balik rubrik dari fase sebelumnya.',
        answer: 0,
        reason: 'ICOT menguji kemandirian memproduksi teks bermakna setelah melewati perancah BKOF-MOT-JCOT.',
      },
    ],
    explanation:
      'Genre-Based Approach dalam Kurikulum Merdeka mengintegrasikan siklus BKOF -> MOT -> JCOT -> ICOT secara bertahap agar siswa menguasai konteks sosial, struktur, kebahasaan, lalu produksi mandiri.',
  },
  {
    id: 'jk26-ing-02',
    bank: 'PCK',
    topic: 'PCK B. Inggris · Asesmen Autentik Speaking, Writing & Umpan Balik Konstruktif',
    prodiScope: ['bahasa-inggris'],
    pckFocus: 'Asesmen Otentik',
    source: 'Kurasi Juknis UKPPPG Bahasa Inggris 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Seorang guru Bahasa Inggris menyusun asesmen formatif dan sumatif keterampilan produktif (*Speaking* & *Writing*) bagi siswa SMA kelas X. Tentukan apakah praktik asesmen berikut **Valid & Edukatif** atau **Kurang Tepat**!',
    categories: ['Valid & Edukatif', 'Kurang Tepat'],
    statements: [
      {
        text: 'Menggunakan rubrik analitik Writing yang mencakup *content/organization*, *coherence/cohesion*, *vocabulary*, dan *grammar mechanics* serta komentar spesifik perbaikan sebelum draf final.',
        answer: 0,
        reason: 'Rubrik analitik + umpan balik formatif memberi arah jelas bagi murid memperbaiki kualitas tulisan.',
      },
      {
        text: 'Menilai kemampuan berbicara siswa melalui tugas simulasi role-play situasional atau presentasi perspektif bermakna (bukan sekadar membaca keras daftar kosa kata terisolasi).',
        answer: 0,
        reason: 'Penilaian komunikatif mengukur kelancaran, ketepatan interaksi makna, dan kefasihan dalam konteks nyata.',
      },
      {
        text: 'Langsung memotong pembicaraan siswa setiap kali muncul satu kesalahan akhiran `-s` atau pelafalan di tengah presentasi kelompok sehingga siswa kehilangan rasa percaya diri.',
        answer: 1,
        reason: 'Interupsi koreksi berlebihan di tengah kelancaran berbicara merusak kepercayaan diri siswa; kesalahan tata bahasa lebih tepat dicatat untuk umpan balik hangat setelah presentasi.',
      },
      {
        text: 'Membagikan lembar ceklis *peer-review* terpandu agar siswa belajar mengevaluasi kejelasan argumen tulisan teman secara sopan dan spesifik.',
        answer: 0,
        reason: 'Peer assessment dengan rubrik sederhana menumbuhkan metakognisi menulis dan kemandirian belajar.',
      },
    ],
    explanation:
      'Penilaian produktif EFL menyeimbangkan kefasihan dan akurasi menggunakan rubrik analitik jelas, peer-feedback terstruktur, dan pemberian umpan balik yang menjaga rasa aman berbicara.',
  },
  {
    id: 'jk26-ing-03',
    bank: 'PCK',
    topic: 'PCK B. Inggris · Diagnostik Miskonsepsi Grammar Kontekstual & Reading Inference',
    prodiScope: ['bahasa-inggris'],
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Kurasi Juknis UKPPPG Bahasa Inggris 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Guru menemukan dua kendala khas di kelas XI: siswa terbiasa menerjemahkan teks secara kata per kata tanpa memahami makna tersirat (*inference*), serta mencampuradukkan penggunaan Simple Past dan Present Perfect dalam teks Recount/News Item. Tentukan apakah langkah perbaikan guru berikut **Tepat** atau **Tidak Tepat**!',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Melatih pertanyaan *reading comprehension* berbasis inferensi dan pencarian kata kunci rujukan konteks (*context clues*), bukan hanya menebak informasi literal tersurat.',
        answer: 0,
        reason: 'Strategi context clues dan inferensi melatih pemahaman membaca mendalam tingkat HOTS.',
      },
      {
        text: 'Mengajarkan perbedaan Simple Past vs Present Perfect melalui garis waktu visual konteks pengalaman masa lampau selesai (*yesterday/in 2022*) dibanding peristiwa yang masih relevan hingga kini dalam cerita Recount nyata.',
        answer: 0,
        reason: 'Pembelajaran grammar berbasis fungsi teks dan garis waktu jauh lebih bermakna daripada hafalan tabel rumus terisolasi.',
      },
      {
        text: 'Meminta siswa menghafalkan daftar 300 kata kerja tidak beraturan beserta terjemahan harfiah tanpa pernah dipakai menyusun kalimat atau membaca teks.',
        answer: 1,
        reason: 'Hafalan dekontekstual cepat terlupakan dan tidak mentransfer ke kecakapan komunikasi maupun pemahaman wacana.',
      },
      {
        text: 'Memberikan tugas menuliskan arti kamus di atas setiap kata teks bacaan hingga penuh sebelum mendiskusikan gagasan utama paragraf.',
        answer: 1,
        reason: 'Penerjemahan kata demi kata memperlambat kelancaran membaca dan menghalangi kemampuan menebak makna global.',
      },
    ],
    explanation:
      'Guru Bahasa Inggris perlu menggeser pengajaran bahasa dari hafalan harfiah mekanis ke strategi inferensi teks utuh dan pengajaran tata bahasa komunikatif kontekstual.',
  },
  {
    id: 'jk26-ing-04',
    bank: 'PCK',
    topic: 'PCK B. Inggris · Integrasi TIK Kritis, Literasi Digital & Etika Kelas EFL',
    prodiScope: ['bahasa-inggris'],
    pckFocus: 'Media/ICT & Simulator',
    source: 'Kurasi Juknis UKPPPG Bahasa Inggris 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Dalam membelajarkan literasi multimodal Bahasa Inggris di kelas menengah, guru mengintegrasikan media digital, kuis interaktif, dan perangkat bantu menulis berbasis AI/kamus digital. Tentukan apakah praktik pemanfaatan TIK berikut **Kritis & Edukatif** atau **Kurang Tepat**!',
    categories: ['Kritis & Edukatif', 'Kurang Tepat'],
    statements: [
      {
        text: 'Membimbing siswa memanfaatkan alat bantu koreksi tata bahasa digital untuk merevisi draf argumen mereka sambil meminta siswa menuliskan alasan perbaikan tiap koreksi yang diterima (*critical revision log*).',
        answer: 0,
        reason: 'Siswa tetap menjadi subjek aktif yang menalar perbaikan struktur kalimat, bukan menyalin pasif.',
      },
      {
        text: 'Mengombinasikan bahan ajar multimodal (infografis, siniar pendek, video ber-subtitle Inggris) disertai pengatur grafis alur peristiwa untuk memfasilitasi keberagaman level literasi kelas.',
        answer: 0,
        reason: 'Bahan multimodal memperluas akses pemahaman dan melayani gaya belajar berbeda (prinsip UDL).',
      },
      {
        text: 'Memperbolehkan siswa menyalin utuh seluruh teks esai berbahasa Inggris yang dihasilkan AI generatif tanpa verifikasi sumber maupun pemahaman isi, lalu langsung diberi nilai A.',
        answer: 1,
        reason: 'Plagiarisme dan penggunaan pasif AI menggagalkan tujuan pengukuran kemampuan menulis dan literasi kritis siswa.',
      },
      {
        text: 'Memilih materi teks digital lokal berbahasa Inggris tentang budaya dan isu lingkungan daerah siswa agar relevan dengan konteks kehidupan nyata mereka.',
        answer: 0,
        reason: 'Kontekstualisasi konten lokal dalam Bahasa Inggris (CRT) meningkatkan keterlibatan dan rasa kepemilikan belajar.',
      },
    ],
    explanation:
      'Integrasi TIK di kelas Bahasa Inggris harus memperluas akses multimodal, mengasah nalar kritis verifikasi informasi digital, dan menjaga integritas kepenulisan asli peserta didik.',
  },
  {
    id: 'jk26-ing-05',
    bank: 'PCK',
    topic: 'PCK B. Inggris · Penanganan Foreign Language Anxiety & Inklusivitas',
    prodiScope: ['bahasa-inggris'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG Bahasa Inggris 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Dalam kelas campuran berkemampuan beragam (*mixed-ability EFL classroom*), beberapa siswa sangat fasih sementara sebagian besar siswa pasif karena cemas ditertawakan bila salah pelafalan maupun tata bahasa saat berbicara Bahasa Inggris (*speaking anxiety*). Pilihlah SEMUA strategi pembelajaran berdiferensiasi dan aman secara psikologis yang PALING TEPAT diterapkan guru!',
    options: [
      'Menyepakati aturan kelas anti-ejekan serta membangun iklim aman di mana kesalahan berbahasa dipandang sebagai bagian wajar belajar.',
      'Menerapkan scaffolding berbicara bertahap: latihan berpasangan (*pair work*) atau rekaman audio/kelompok kecil terpandu *sentence starters* sebelum presentasi di depan forum kelas.',
      'Menyediakan pilihan topik tugas berbasis minat nyata siswa dan variasi pengatur grafis visual (*story map / graphic organizer*) untuk membantu siswa berkesulitan menyusun alur gagasan.',
      'Mewajibkan siswa yang paling pemalu langsung berpidato spontan selama 5 menit di papan tulis agar rasa takutnya hilang seketika.',
      'Memisahkan siswa yang belum lancar berbicara ke luar ruangan sepanjang jam praktik percakapan.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Mengurangi speaking anxiety pada kelas campuran dicapai lewat budaya kelas suportif, scaffolding *low-stakes* (pair -> group -> class) berbantuan *sentence frames/graphic organizer*, bukan paksaan publik atau eksklusi.',
  },
  {
    id: 'jk26-ing-06',
    bank: 'PCK',
    topic: 'PCK B. Inggris · Komunikasi Bahasa Inggris untuk Tujuan Khusus (ESP/SMK)',
    prodiScope: ['bahasa-inggris'],
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Kurasi Juknis UKPPPG Bahasa Inggris 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.4',
    prompt:
      'Saat merancang pembelajaran Bahasa Inggris adaptif untuk siswa SMK program keahlian Pariwisata, Bisnis, maupun Teknologi (*English for Specific Purposes*), guru ingin pembelajaran benar-benar mendukung kesiapan kerja siswa. Pilihlah SEMUA desain aktivitas kontekstual yang PALING RELEVAN!',
    options: [
      'Merancang simulasi proyek *handling guest reservation complaints*, *product pitch*, atau *writing technical troubleshooting manuals / standard emails* sesuai bidang kejuruan siswa.',
      'Mengajarkan ragam ungkapan kesantunan profesional (*polite functional expressions*) dalam wawancara kerja dan layanan pelanggan.',
      'Menggunakan sumber belajar autentik seperti brosur wisata lokal, spesifikasi produk teknis, dan prosedur keselamatan berbahasa Inggris.',
      'Memfokuskan seluruh semester hanya pada pembedahan syair sastra Inggris abad ke-16 tanpa kaitan konteks komunikasi kerja maupun akademik.',
      'Menugaskan siswa menghafalkan terjemahan daftar istilah tata bahasa Latin yang tidak pernah dipakai dalam praktik profesi.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pengembangan kurikulum Bahasa Inggris adaptif (PF.4) menyesuaikan materi fungsional, genre, dan kosakata otentik dengan konteks satuan pendidikan serta kebutuhan komunikasi nyata peserta didik.',
  },
  {
    id: 'jk26-ing-07',
    bank: 'PCK',
    topic: 'PCK B. Inggris · Penguatan Literasi Membaca Kritis (HOTS Reading)',
    prodiScope: ['bahasa-inggris'],
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Kurasi Juknis UKPPPG Bahasa Inggris 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Untuk melatih keterampilan berpikir tingkat tinggi (C4-C5) siswa kelas XI dalam memahami teks *Argumentative* atau *Analytical Exposition* mengenai isu penggunaan gadget di sekolah, pilihlah SEMUA aktivitas dan indikator evaluasi yang PALING MENDORONG penalaran kritis siswa!',
    options: [
      'Meminta siswa membandingkan dua sudut pandang teks berbeda, mengidentifikasi klaim penulis beserta kualitas bukti pendukungnya (*evaluating claims and evidence*).',
      'Menyelenggarakan diskusi panel terstruktur atau debat ramah kelompok untuk mempertahankan argumen berdasar data yang relevan.',
      'Membimbing siswa mengevaluasi nada tulisan (*author attitude/tone*), bias argumen, dan implikasi kesimpulan bagi kehidupan pelajar kini.',
      'Hanya menanyakan baris kata keberapa kata *however* muncul di paragraf ketiga tanpa memahami isi argumen teks.',
      'Menugaskan siswa menyalin ulang seluruh teks paragraf demi paragraf ke buku tulis dengan tulisan tegak bersambung.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pembelajaran membaca kritis pada teks eksposisi/argumentatif melatih analisis klaim-bukti, perspektif berimbang, serta evaluasi sikap penulis (*tone/bias*), bukan pemindaian kata mekanis.',
  },
  {
    id: 'jk26-ing-08',
    bank: 'PCK',
    topic: 'PCK B. Inggris · Mengelola Diskusi Kelompok Bahasa Inggris yang Timpang',
    prodiScope: ['bahasa-inggris'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG Bahasa Inggris 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Sosial',
    subkompetensi: 'S.1',
    prompt:
      'Selama kegiatan diskusi kelompok Bahasa Inggris (*collaborative speaking*), guru mengamati pola yang berulang: dua siswa yang fasih terus mendominasi pembicaraan sementara tiga anggota lainnya hanya diam mencatat karena bingung bagaimana menyela atau merespons dalam Bahasa Inggris. Pilihlah SEMUA intervensi inklusif dan komunikatif paling tepat yang dilakukan guru!',
    options: [
      'Menetapkan peran berputar dalam kelompok (seperti *facilitator*, *timekeeper*, *idea contributor*, *summarizer*) beserta kartu frasa bantu diskusi (*useful phrases for turn-taking & agreeing/disagreeing*).',
      'Menerapkan aturan *talking tokens/chips* agar setiap anggota memperoleh jatah bicara setara dan belajar mendengarkan rekan dengan empatik.',
      'Memberikan waktu berpikir individu tenang 1-2 menit sebelum diskusi (*Think-Pair-Share*) supaya siswa non-dominan sempat merumuskan gagasannya.',
      'Membiarkan siswa dominan menyelesaikan seluruh presentasi kelompok karena nilai tim terlihat paling bagus.',
      'Melarang siswa yang kesulitan berbicara memakai frasa bantu catatan kecil dan langsung memotong poin nilai partisipasi mereka.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Struktur peran kelompok jelas, frase bantu pergiliran bicara (*scaffolding linguistic turns*), dan *Think-Pair-Share* memutus dominasi segelintir siswa serta memberi ruang inklusif bagi seluruh peserta.',
  },
  {
    id: 'jk26-ing-09',
    bank: 'PCK',
    topic: 'PCK B. Inggris · Pembelajaran Keterampilan Menyimak (Listening) Strategis',
    prodiScope: ['bahasa-inggris'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG Bahasa Inggris 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Mayoritas siswa SMP mengeluhkan rekaman audio Bahasa Inggris berdurasi sedang terasa terlalu cepat sehingga mereka panik tertinggal saat baru mendengar tiga kalimat awal. Pilihlah SEMUA desain pengajaran *Listening* berbasis tahap (*Pre-While-Post Listening*) yang PALING TEPAT untuk mengatasi hambatan tersebut!',
    options: [
      'Pada *Pre-Listening*, mengaktifkan skema konteks gambar/situasi, memprediksi kosakata kunci, dan menetapkan tujuan menyimak spesifik agar siswa tahu apa yang perlu dicari.',
      'Pada *While-Listening*, memutar audio secara bertahap: putaran pertama untuk menangkap gagasan umum (*listening for gist*), lalu putaran kedua untuk rincian spesifik (*listening for detail*) memakai lembar kerja terpandu.',
      'Pada *Post-Listening*, mengajak siswa mendiskusikan isi, menanggapi pesan secara komunikatif, dan merefleksikan kosakata ekspresi baru yang muncul dalam konteks audio.',
      'Memutar audio sekali saja pada volume rendah tanpa arahan tugas lalu langsung menghukum siswa yang salah menjawab.',
      'Menghentikan pembelajaran menyimak sepenuhnya di sekolah dan menggantinya dengan soal pilihan ganda ejaan huruf diam.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Siklus *Pre-While-Post Listening* (*gist* -> *detail* -> tindak lanjut komunikatif) menurunkan beban kognitif siswa serta membangun keterampilan menyimak strategis berkelanjutan.',
  },

  // =========================================================================
  // PPKn / PENDIDIKAN PANCASILA (8 butir: 4 PGK_KATEGORI, 4 PGK_MCMA)
  // =========================================================================
  {
    id: 'jk26-ppkn-01',
    bank: 'PCK',
    topic: 'PCK PPKn · Kontekstualisasi Nilai Pancasila & Keadilan Sosial di Sekolah',
    prodiScope: ['ppkn'],
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Kurasi Juknis UKPPPG PPKn 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam membelajarkan Pendidikan Pancasila agar tidak berhenti pada hafalan bunyi sila semata, guru menguji kemampuan siswa menganalisis keterkaitan masalah aktual dengan nilai sila Pancasila. Tentukan apakah kesesuaian analisis berikut **Benar** atau **Salah**!',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Mewajibkan siswa mengevaluasi kasus perundungan digital dan ujaran kebencian berbasis SARA melalui perspektif Sila Kedua (Kemanusiaan yang Adil dan Beradab) dan Sila Ketiga (Persatuan Indonesia) membangun nalar kewarganegaraan kontekstual.',
        answer: 0,
        reason: 'Kajian kasus aktual menumbuhkan kepedulian moral dan pemahaman fungsi Pancasila sebagai pedoman hidup nyata.',
      },
      {
        text: 'Pembelajaran Sila Keempat dapat dipraktikkan langsung lewat simulasi musyawarah menyusun piagam aturan kelas yang menghargai pendapat minoritas dengan kepala dingin dan menghindari pemaksaan kehendak.',
        answer: 0,
        reason: 'Demokrasi Pancasila memadukan kebebasan berpendapat yang bertanggung jawab dengan penghargaan mufakat.',
      },
      {
        text: 'Konsep Bela Negara di tingkat pelajar SMP/SMA hanya relevan jika siswa ikut pelatihan militer bersenjata, dan sama sekali tidak berkaitan dengan sikap jujur tidak menyontek maupun bijak literasi siber.',
        answer: 1,
        reason: 'Miskonsepsi umum: bela negara pelajar terwujud melalui ketahanan nirmiliter berupa integritas akademik, disiplin, prestasi, dan merawat persatuan sosial.',
      },
      {
        text: 'Menilai penguasaan Pancasila siswa semata-mata lewat hafalan urutan nama tokoh perumus dan tanggal rapat BPUPKI tahun 1945 tanpa mengecek penerapan etika sehari-hari sudah cukup mengukur ketercapaian Kurikulum Merdeka.',
        answer: 1,
        reason: 'PPKn modern menuntut keseimbangan pengetahuan kewarganegaraan, keterampilan analitis, dan disposisi sikap kewargaan nyata.',
      },
    ],
    explanation:
      'Pembelajaran Pendidikan Pancasila berbasis konteks mengaitkan nilai kelima sila dengan tantangan keseharian pelajar (anti-bullying, demokrasi kelas, bela negara nirmiliter, keadilan sosial).',
  },
  {
    id: 'jk26-ppkn-02',
    bank: 'PCK',
    topic: 'PCK PPKn · Miskonsepsi Ketatanegaraan & Hak Konstitusional Warga Negara',
    prodiScope: ['ppkn'],
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Kurasi Juknis UKPPPG PPKn 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Saat menganalisis kasus ketatanegaraan dan HAM bersama siswa kelas XI, muncul sejumlah pemahaman keliru di kelas. Tentukan apakah pernyataan konsep konstitusi NRI 1945 dan sistem demokrasi berikut **Benar** atau **Salah**!',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Menurut Pasal 24C ayat (1) UUD NRI 1945, Mahkamah Konstitusi berwenang mengadili pada tingkat pertama dan terakhir yang putusannya bersifat final untuk menguji Undang-Undang terhadap Undang-Undang Dasar.',
        answer: 0,
        reason: 'Kewenangan uji materiil UU terhadap UUD berada di Mahkamah Konstitusi, sedangkan peraturan perundang-undangan di bawah UU terhadap UU diuji oleh Mahkamah Agung.',
      },
      {
        text: 'Kebebasan berpendapat yang dijamin konstitusi bersifat mutlak tanpa batas sehingga warga negara bebas menyebarkan fitnah atau data pribadi orang lain di media sosial atas nama demokrasi.',
        answer: 1,
        reason: 'Kebebasan berpendapat dalam negara hukum demokratis dibatasi oleh penghormatan hak orang lain, ketertiban umum, etika, serta pertanggungjawaban hukum.',
      },
      {
        text: 'Seseorang yang berstatus tersangka dan sedang diperiksa media sosial berhak tetap dilindungi oleh asas praduga tak bersalah sebelum ada putusan pengadilan berkekuatan hukum tetap.',
        answer: 0,
        reason: 'Supremasi hukum dan due process of law melindungi hak prosedural setiap warga negara.',
      },
      {
        text: 'Salah satu indikator substantif negara demokratis adalah adanya rotasi kekuasaan damai melalui pemilu berkala yang jujur dan adil, jaminan HAM, serta kebebasan pers yang bertanggung jawab.',
        answer: 0,
        reason: 'Ciri substantif demokrasi melampaui label formal menuju sirkulasi kekuasaan yang akuntabel.',
      },
    ],
    explanation:
      'Guru PPKn meluruskan batas kewenangan lembaga tinggi negara (MK vs MA), keseimbangan hak asasi dan kewajiban penghormatan hak sesama, serta asas negara hukum demokratis.',
  },
  {
    id: 'jk26-ppkn-03',
    bank: 'PCK',
    topic: 'PCK PPKn · Desain UbD & Asesmen Proyek Kewarganegaraan Autentik',
    prodiScope: ['ppkn'],
    pckFocus: 'Asesmen Otentik',
    source: 'Kurasi Juknis UKPPPG PPKn 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Guru PPKn menerapkan prinsip *Understanding by Design* (UbD) dan penilaian proyek pada materi Norma, Kebinekaan, serta Partisipasi Warga Negara. Tentukan apakah rancangan asesmen dan desain pembelajaran berikut **Tepat** atau **Kurang Tepat**!',
    categories: ['Tepat', 'Kurang Tepat'],
    statements: [
      {
        text: 'Dalam UbD, guru menetapkan pemahaman mendalam serta tujuan transfer sikap keseimbangan hak-kewajiban terlebih dahulu, disusul penentuan bukti asesmen autentik sebelum memilih aktivitas diskusi.',
        answer: 0,
        reason: 'Alur backward design (desired results -> assessment evidence -> learning plan) menjamin keselarasan seluruh aktivitas kelas.',
      },
      {
        text: 'Mengukur capaian materi Norma dan Keadilan melalui proyek observasi masalah tata tertib lingkungan sekolah lengkap dengan analisis akar masalah, usulan aturan adil, dan refleksi pribadi siswa.',
        answer: 0,
        reason: 'Proyek investigasi sosial menguji civic knowledge, civic skills, dan civic disposition sekaligus.',
      },
      {
        text: 'Menilai proyek infografis perbandingan demokrasi hanya berdasarkan banyaknya jumlah hiasan stiker bintang tanpa menilai ketajaman analisis keseimbangan hak warga dan kontrol kekuasaan.',
        answer: 1,
        reason: 'Rubrik harus mengukur substansi analisis kewarganegaraan HOTS, bukan hiasan dekoratif semata.',
      },
      {
        text: 'Membatasi penilaian ranah keterampilan PPKn hanya dengan ujian pilihan ganda mengingat nomor pasal dan ayat secara mendadak di akhir bulan.',
        answer: 1,
        reason: 'Uji hafalan pasal pilihan ganda hanya mengukur ingatan kognitif C1, tidak memotret kecakapan partisipatif maupun sikap sosial siswa.',
      },
    ],
    explanation:
      'Pengembangan instrumen PPKn berorientasi UbD menilai kesatuan pengetahuan konstitusional, keterampilan analisis masalah sosial, dan refleksi perilaku warga sekolah.',
  },
  {
    id: 'jk26-ppkn-04',
    bank: 'PCK',
    topic: 'PCK PPKn · Etika Netralitas Guru & Ruang Aman Diskusi Isu Publik',
    prodiScope: ['ppkn'],
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Kurasi Juknis UKPPPG PPKn 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.1',
    prompt:
      'Ketika memandu debat atau diskusi kelas XI terkait isu kebijakan publik, pemilu, atau keberagaman pandangan masyarakat yang sensitif, tentukan apakah sikap guru PPKn berikut **Sesuai Etika Pendidik** atau **Melanggar Prinsip**!',
    categories: ['Sesuai Etika', 'Melanggar Prinsip'],
    statements: [
      {
        text: 'Guru menjaga netralitas politik praktis di kelas dengan memfasilitasi siswa menganalisis isu berbasis data fakta hukum, konstitusi, dan kemaslahatan umum secara objektif.',
        answer: 0,
        reason: 'Netralitas guru menjaga kebebasan berpikir kritis siswa dalam koridor konstitusi dan etika akademik.',
      },
      {
        text: 'Melatih siswa memverifikasi sumber rujukan resmi (putusan lembaga negara, lembaran undang-undang, data statistik valid) sebelum mempercayai potongan berita viral media sosial.',
        answer: 0,
        reason: 'Literasi fakta dan cek silang sumber resmi membentengi siswa dari hoaks serta polarisasi.',
      },
      {
        text: 'Mengancam memberi nilai rendah bagi siswa yang memiliki argumen kebijakan publik berbeda dari preferensi pribadi guru meskipun berdasar analisis data sah.',
        answer: 1,
        reason: 'Pemaksaan opini pribadi guru merusak ruang aman berpikir kritis dan mencederai keadilan penilaian.',
      },
      {
        text: 'Menyelesaikan perdebatan sengit kelompok mengenai keragaman budaya dengan membungkam diskusi selamanya dan menggantinya menyalin pasal KUHP.',
        answer: 1,
        reason: 'Kelas PPKn seharusnya menjadi laboratorium mediasi dialog empatik dan penyelesaian perbedaan secara demokratis.',
      },
    ],
    explanation:
      'Kompetensi kepribadian dan sosial guru Pendidikan Pancasila tercermin dari netralitas etis, keberanian memfasilitasi dialog sehat berbasis fakta konstitusi, serta keteladanan toleransi.',
  },
  {
    id: 'jk26-ppkn-05',
    bank: 'PCK',
    topic: 'PCK PPKn · Strategi Model Kooperatif Melawan Etnosentrisme di Kelas',
    prodiScope: ['ppkn'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG PPKn 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Sosial',
    subkompetensi: 'S.1',
    prompt:
      'Dalam persiapan proyek tema Bhinneka Tunggal Ika di SMP, guru mengamati terbentuknya klik pertemanan berdasarkan daerah asal dan adanya siswa yang berbisik enggan berkelompok dengan rekan berbeda suku maupun kondisi fisik. Pilihlah SEMUA strategi pembelajaran kooperatif dan pendampingan sosial paling tepat!',
    options: [
      'Menerapkan model kooperatif tipe *Jigsaw* atau *Group Investigation* dengan komposisi kelompok heterogen sehingga setiap anggota memegang bagian materi unik yang wajib saling diajarkan ke tim asalnya.',
      'Melakukan dialog empatik secara pribadi (*private coaching*) kepada siswa yang menolak rekan baru untuk menggali kekhawatirannya serta menumbuhkan rasa saling menghormati tanpa mempermalukannya di forum terbuka.',
      'Merancang aktivitas *ice breaking* pengenalan kekuatan unik budaya daerah masing-masing dan menugaskan pembagian peran tim yang setara dan kolaboratif.',
      'Mengabulkan permintaan pemisahan suku agar kelompok seragam dan suasana kelas cepat tenang tanpa upaya integrasi.',
      'Mengumumkan penolakan siswa tersebut melalui pengeras suara saat upacara agar tidak diulangi kelas lain.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Jigsaw menciptakan saling ketergantungan positif antaranggota heterogen, sementara pendampingan empatik pribadi menjaga martabat siswa sambil membina kesadaran multikultural nyata.',
  },
  {
    id: 'jk26-ppkn-06',
    bank: 'PCK',
    topic: 'PCK PPKn · Akomodasi Inklusif & Pembelajaran Berdiferensiasi PPKn',
    prodiScope: ['ppkn'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG PPKn 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Di dalam kelas VIII Pendidikan Pancasila terdapat peserta didik berhambatan pendengaran (*tunarungu*), peserta didik dengan kesulitan membaca teks hukum panjang, serta peserta didik yang sudah mahir menganalisis artikel kebijakan. Pilihlah SEMUA desain pembelajaran berdiferensiasi dan inklusif yang PALING TEPAT diterapkan guru!',
    options: [
      'Menyediakan materi multimodal: ringkasan teks konstitusi berbahasa sederhana disertai video berteks (*closed caption*), kartu bagan alur visual hak-kewajiban, serta bacaan analitis pengayaan bagi siswa mahir.',
      'Mengatur posisi duduk siswa tunarungu di area depan dengan pencahayaan wajah guru yang jelas untuk memudahkan pembacaan gerak bibir dan dilengkapi komunikasi gestur/isyarat inklusif.',
      'Memperbolehkan siswa memilih bukti pemahaman akhir sesuai kekuatan ekspresinya (infografis kampanye aturan sekolah, simulasi drama peran anti-bullying, atau esai analisis kasus).',
      'Mengeluarkan siswa berkebutuhan khusus dari kegiatan diskusi musyawarah kelas untuk diberi lembar menyalin huruf sendiri di pojok ruangan.',
      'Membagikan hanya salinan naskah Undang-Undang setebal 40 halaman dengan huruf kecil rapat sebagai satu-satunya bahan bacaan bagi seluruh siswa.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Prinsip UDL dan Lampiran 4 S.1 menuntut komunikasi lisan, tulisan, dan isyarat yang inklusif disertai variasi representasi konten serta produk tanpa mengeksklusi peserta didik berkebutuhan khusus.',
  },
  {
    id: 'jk26-ppkn-07',
    bank: 'PCK',
    topic: 'PCK PPKn · Simulasi Hukum, Anti-Perundungan & Hak Asasi Manusia',
    prodiScope: ['ppkn'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG PPKn 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Untuk menanamkan kesadaran hukum, penghormatan HAM, dan sikap anti-perundungan (*anti-bullying*) pada siswa SMA agar tidak hanya sekadar menghafal sanksi pidana, pilihlah SEMUA strategi pembelajaran aktif berbasis skenario kehidupan nyata yang PALING BERMAKNA!',
    options: [
      'Menyelenggarakan simulasi bermain peran (*role play*) penyelesaian konflik perundungan sekolah dilanjutkan diskusi dampak psikologis korban dan kesepakatan piagam kelas aman.',
      'Mengajak siswa menganalisis studi kasus riil dilema pelanggaran hak pribadi (*personal rights*) dan hak milik (*property rights*) di lingkungan sekitar serta merumuskan jalur pengaduan konstitusional yang sah.',
      'Memfasilitasi penyusunan rancangan proyek aksi sosial kampanye budaya tertib lalu lintas atau literasi digital anti-ujaran kebencian bersama komunitas sekolah.',
      'Mengharuskan siswa menyalin nomor-nomor pasal ancaman penjara KUHP sebanyak sepuluh halaman sebagai pekerjaan rumah rutin.',
      'Menganjurkan siswa menyelesaikan perselisihan pelanggaran hak antarwarga kelas lewat boikot kelompok tanpa mediasi guru.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Simulasi empatik role-play, analisis kasus dilema HAM aktual, dan proyek kampanye sosial mengubah hukum dari teks pasal kering menjadi kesadaran moral kewargaan aktif.',
  },
  {
    id: 'jk26-ppkn-08',
    bank: 'PCK',
    topic: 'PCK PPKn · Integrasi P5 & Literasi Kewarganegaraan Digital',
    prodiScope: ['ppkn'],
    pckFocus: 'Media/ICT & Simulator',
    source: 'Kurasi Juknis UKPPPG PPKn 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Guru Pendidikan Pancasila mengintegrasikan TIK secara kritis dalam proyek kokurikuler bertema Suara Demokrasi dan Kewargaan Digital. Pilihlah SEMUA aktivitas belajar digital yang PALING TEPAT menumbuhkan nalar kritis serta etika berwarga negara di ruang siber!',
    options: [
      'Melatih siswa membedah disinformasi/hoaks politik atau isu sosial memakai metode cek fakta (*fact-checking* lintas sumber resmi, tanggal unggahan, dan verifikasi data statistik).',
      'Memanfaatkan simulasi pemungutan suara elektronik OSIS/MPK secara transparan disertai penyusunan kampanye visi-misi digital bebas ujaran kebencian.',
      'Membuat pameran digital atau siniar pendek hasil wawancara tokoh masyarakat lokal mengenai praktik musyawarah gotong royong di lingkungan sekitar.',
      'Mengarahkan siswa meniru gaya komentar provokatif warganet anonim untuk menguji keberanian berargumen tanpa data.',
      'Menggunakan platform kuis semata-mata untuk menguji cepat hafalan nama seluruh kabinet dari tahun 1945 hingga 1959.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Integrasi TIK pada PPKn membentuk warga digital yang kritis menyaring hoaks, memahami tata kelola demokrasi elektronik transparan, dan terampil mendokumentasikan kearifan sosial lokal.',
  },

  // =========================================================================
  // PAI / PENDIDIKAN AGAMA ISLAM (10 butir: 5 PGK_KATEGORI, 5 PGK_MCMA)
  // =========================================================================
  {
    id: 'jk26-pai-01',
    bank: 'PCK',
    topic: 'PCK PAI · Moderasi Beragama (*Wasathiyyah*) & Komitmen Kebangsaan',
    prodiScope: ['pai'],
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Kurasi Juknis UKPPPG PAI 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam membelajarkan tema Akhlak dan Moderasi Beragama (*Islam Wasathiyyah*) di kelas SMA/SMK, guru menyajikan sejumlah pernyataan sikap sosial remaja di tengah masyarakat majemuk. Tentukan apakah setiap sikap berikut **Sesuai Nilai Moderasi** atau **Keliru / Ekstrem**!',
    categories: ['Sesuai Nilai Moderasi', 'Keliru / Ekstrem'],
    statements: [
      {
        text: 'Menghormati kebebasan pemeluk agama lain beribadah dan bekerja sama dalam kerja bakti kemanusiaan tanpa mencampuradukkan keyakinan ritual ibadah (*tasamuh*).',
        answer: 0,
        reason: 'Toleransi Islam menghargai hak sesama warga dalam muamalah sosial seraya menjaga kemurnian akidah.',
      },
      {
        text: 'Mengakomodasi budaya lokal nusantara yang membawa nilai kebaikan moral serta silaturahmi sepanjang tidak bertentangan dengan prinsip syariat Islam.',
        answer: 0,
        reason: 'Sikap akomodatif terhadap kebudayaan lokal yang maslahat merupakan salah satu indikator kunci moderasi beragama.',
      },
      {
        text: 'Membiasakan siswa memaksakan satu pendapat fikih khilafiyah mazhab tertentu dan melabeli siswa atau komunitas lain dengan sebutan merendahkan.',
        answer: 1,
        reason: 'Sikap eksklusif-intoleran atas perbedaan cabang fikih khilafiyah bertentangan dengan prinsip keadilan, keseimbangan (*tawazun*), dan antikekerasan.',
      },
      {
        text: 'Menghapus kecintaan dan komitmen kebangsaan terhadap NKRI karena dianggap tidak berkaitan dengan pendidikan agama.',
        answer: 1,
        reason: 'Komitmen kebangsaan merawat keutuhan tanah air dan kedamaian masyarakat merupakan pilar utama Moderasi Beragama.',
      },
    ],
    explanation:
      'Guru PAI membekali siswa dengan empat pilar Moderasi Beragama (komitmen kebangsaan, toleransi/*tasamuh*, antikekerasan, dan akomodatif budaya lokal) berbasis pemahaman syariat yang berimbang.',
  },
  {
    id: 'jk26-pai-02',
    bank: 'PCK',
    topic: 'PCK PAI · Diagnostik Pembelajaran Al-Qur’an (Tajwid, Makhraj & Hafalan Bermakna)',
    prodiScope: ['pai'],
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Kurasi Juknis UKPPPG PAI 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Pada pelajaran Al-Qur’an Hadis di kelas VII, sebagian besar siswa terbata-bata membedakan hukum bacaan nun sukun/tanwin, keliru melafalkan makhraj huruf halqiyah, serta hanya menghafal ayat tanpa paham pesan akhlaknya. Tentukan apakah langkah PCK guru PAI berikut **Tepat** atau **Kurang Tepat**!',
    categories: ['Tepat', 'Kurang Tepat'],
    statements: [
      {
        text: 'Melakukan pemetaan awal kemampuan membaca Al-Qur’an (*asesmen diagnostik tilawah*) lalu menerapkan bimbingan berdiferensiasi berbantuan tutor sebaya fasih bagi kelompok pemula.',
        answer: 0,
        reason: 'Pemetaan awal mencegah siswa kurang lancar merasa tertinggal atau terbebani di kelas heterogen.',
      },
      {
        text: 'Memanfaatkan rekaman audio murottal interaktif serta bagan visual tempat keluar huruf (*makharijul huruf*) untuk melatih pengucapan presisi disertai diskusi tadabbur makna kandungan ayat.',
        answer: 0,
        reason: 'Mengaitkan ketepatan tajwid dengan pemahaman makna teks membuat pembelajaran Al-Qur’an bermakna dan menyentuh akhlak.',
      },
      {
        text: 'Menyuruh siswa yang belum lancar mengeja huruf hijaiyah membaca keras seorang diri di depan kelas lalu menyorakinya setiap ada kesalahan tajwid agar cepat berubah.',
        answer: 1,
        reason: 'Mempermalukan peserta didik meruntuhkan motivasi membaca Al-Qur’an dan menciptakan trauma belajar.',
      },
      {
        text: 'Membebaskan seluruh siswa tidak membaca Al-Qur’an sama sekali dan menggantinya hanya dengan menulis transliterasi latin tanpa belajar tanda baca Arab.',
        answer: 1,
        reason: 'Transliterasi latin hanya bantuan sementara dan tidak dapat menggantikan kemandirian membaca mushaf sesuai kaidah tajwid.',
      },
    ],
    explanation:
      'Pengajaran Al-Qur’an yang berpusat pada murid memadukan diagnostik kesiapan tilawah, scaffolding tutor sebaya + visual makhraj, iklim aman empatik, dan pengaitan pesan ayat ke perilaku sehari-hari.',
  },
  {
    id: 'jk26-pai-03',
    bank: 'PCK',
    topic: 'PCK PAI · Pembelajaran Fiqih Kontekstual Berbasis Maqasid & Kasus Nyata',
    prodiScope: ['pai'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG PAI 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Guru PAI ingin mengajarkan materi Fiqih Ibadah dan Muamalah modern (transaksi digital/e-commerce, zakat profesi, penyelenggaraan jenazah, serta hukum pernikahan dewasa) agar menumbuhkan nalar HOTS C4-C5. Tentukan apakah rancangan belajar guru berikut **Efektif & Kontekstual** atau **Hanya Hafalan / Tidak Efektif**!',
    categories: ['Efektif & Kontekstual', 'Hanya Hafalan'],
    statements: [
      {
        text: 'Menggunakan model Problem-Based Learning menganalisis kasus transaksi bayar tunda/paylater atau jual beli daring berdasarkan syarat sah akad, prinsip bebas gharar-riba, dan etika muamalah.',
        answer: 0,
        reason: 'Menautkan prinsip fikih syariat dengan praktik transaksi digital modern melatih literasi muamalah kritis.',
      },
      {
        text: 'Memfasilitasi praktik langsung tata cara pengurusan jenazah dengan boneka manekin/kain kafan di aula setelah siswa menganalisis perbedaan kewajiban fardhu kifayahnya.',
        answer: 0,
        reason: 'Simulasi psikomotorik kontekstual menjembatani teori fikih dengan kesiapan melayani masyarakat nyata.',
      },
      {
        text: 'Menggali pemahaman kritis bahaya pernikahan usia anak melalui analisis prinsip Maqasid al-Syariah (menjaga jiwa, akal, dan keturunan) yang diselaraskan aturan batas usia perkawinan negara.',
        answer: 0,
        reason: 'Integrasi dalil syar’i dengan kemaslahatan kesehatan psikologis-sosial menumbuhkan kedewasaan berpikir pelajar.',
      },
      {
        text: 'Menilai penguasaan fikih semata-mata lewat soal menebak tahun lahir empat imam mazhab dan menyalin ulang daftar rukun secara mekanis.',
        answer: 1,
        reason: 'Soal hafalan kering tanpa aplikasi kasus nyata tidak mengukur pemahaman fungsional dan penalaran hukum Islam.',
      },
    ],
    explanation:
      'Pembelajaran Fiqih yang bermakna mengaitkan landasan dalil dan tujuan syariat (*Maqasid al-Syariah*) dengan persoalan transaksi digital, kewajiban sosial, serta praktik ibadah langsung.',
  },
  {
    id: 'jk26-pai-04',
    bank: 'PCK',
    topic: 'PCK PAI · Asesmen Autentik Sikap Spiritual, Akhlak & Praktik Ibadah',
    prodiScope: ['pai'],
    pckFocus: 'Asesmen Otentik',
    source: 'Kurasi Juknis UKPPPG PAI 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Untuk menghindari bias di mana siswa mendapat nilai PAI tinggi di ujian pilihan ganda namun perilaku sehari-hari serta gerakan ibadahnya masih keliru, guru merancang sistem asesmen menyeluruh. Tentukan apakah langkah asesmen guru PAI berikut **Sahih & Edukatif** atau **Kurang Sahih**!',
    categories: ['Sahih & Edukatif', 'Kurang Sahih'],
    statements: [
      {
        text: 'Menilai praktik wudhu dan shalat siswa menggunakan lembar observasi berjenjang (kualitas gerakan *tuma’ninah*, urutan rukun, dan ketepatan bacaan) yang disertai umpan balik perbaikan privat.',
        answer: 0,
        reason: 'Observasi unjuk kinerja psikomotorik ibadah memvalidasi penguasaan praktik nyata siswa.',
      },
      {
        text: 'Menerapkan pembiasaan kejujuran (seperti kantin kejujuran atau refleksi akhlak harian) yang dipantau lewat catatan anekdotal berkala dan evaluasi diri siswa (*self-assessment*).',
        answer: 0,
        reason: 'Internalisasi akhlak memerlukan pengamatan kebiasaan berkelanjutan serta kesadaran reflektif peserta didik.',
      },
      {
        text: 'Memberikan nilai maksimal pada aspek akhlak mulia seluruh siswa secara otomatis tanpa pengamatan hanya karena seluruh siswa berasal dari latar keluarga yang taat.',
        answer: 1,
        reason: 'Penilaian harus didasarkan pada bukti observasi perilaku dan perkembangan nyata masing-masing peserta didik, bukan asumsi latar belakang.',
      },
      {
        text: 'Mengadakan proyek kampanye poster maupun video singkat adab bermedia sosial dan hormat kepada orang tua menggunakan rubrik kedalaman pesan dalil beserta keteladanan sikap.',
        answer: 0,
        reason: 'Asesmen proyek autentik mendorong kreativitas siswa membumikan ajaran akhlak karimah.',
      },
    ],
    explanation:
      'Asesmen PAI yang utuh mengukur ranah kognitif pemahaman dalil, unjuk kerja psikomotorik ibadah, serta pembiasaan karakter dan refleksi diri.',
  },
  {
    id: 'jk26-pai-05',
    bank: 'PCK',
    topic: 'PCK PAI · Integrasi TIK Kritis & Pembelajaran Berpusat pada Siswa PAI',
    prodiScope: ['pai'],
    pckFocus: 'Media/ICT & Simulator',
    source: 'Kurasi Juknis UKPPPG PAI 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Pada materi Sejarah Kebudayaan Islam (SKI) masa keemasan Bani Abbasiyah dan masuknya Islam secara damai di Nusantara, guru memanfaatkan perangkat TIK untuk memperdalam pemahaman kelas VIII-X. Tentukan apakah praktik TPACK guru PAI berikut **Tepat** atau **Tidak Tepat**!',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Menugaskan siswa menelusuri jejak akulturasi arsitektur masjid kuno Nusantara dan kontribusi ilmuwan muslim Baitul Hikmah melalui peta interaktif digital serta sumber sejarah tepercaya.',
        answer: 0,
        reason: 'Media digital eksploratif menumbuhkan kebanggaan sejarah peradaban sekaligus literasi penelusuran sumber valid.',
      },
      {
        text: 'Membimbing siswa menyaring konten kajian keagamaan viral di media sosial dengan mengecek kejelasan sanad rujukan, otoritas keilmuan, dan nilai kedamaian ajarannya.',
        answer: 0,
        reason: 'Literasi digital kritis melindungi pelajar dari paparan konten intoleran maupun informasi keagamaan tanpa dasar ilmiah.',
      },
      {
        text: 'Menggunakan video demonstrasi singkat fokus *tuma’ninah* rukuk dan sujud dalam shalat sebelum siswa mempraktikkan secara berpasangan di mushalla sekolah.',
        answer: 0,
        reason: 'Visualisasi model gerak ibadah memperjelas detail posisi yang sulit dijelaskan lewat teks semata.',
      },
      {
        text: 'Membiarkan siswa menonton sembarang cuplikan film fiksi laga kolosal sepanjang jam pelajaran tanpa lembar panduan analisis sejarah maupun klarifikasi fakta.',
        answer: 1,
        reason: 'Tayangan hiburan tanpa kurasi fakta sejarah dan tujuan belajar analitis mengaburkan kompetensi sejarah kebudayaan Islam.',
      },
    ],
    explanation:
      'TPACK di kelas PAI menggunakan multimedia untuk memperjelas praktik ibadah, mengeksplorasi sejarah peradaban secara ilmiah, dan membekali siswa kecakapan menyaring informasi agama di ruang digital.',
  },
  {
    id: 'jk26-pai-06',
    bank: 'PCK',
    topic: 'PCK PAI · Pembelajaran Berdiferensiasi Sejarah Peradaban & Al-Qur’an',
    prodiScope: ['pai'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG PAI 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Guru PAI mengajar materi Kontribusi Ilmuwan Muslim Masa Kejayaan Islam atau Analisis Akhlak Mulia di kelas dengan gaya belajar serta fasilitas gawai yang beragam. Pilihlah SEMUA rancangan **pembelajaran berdiferensiasi** yang adil dan tetap menjaga kedalaman substansi keilmuan!',
    options: [
      'Menyediakan pilihan produk karya akhir: infografis lini masa tokoh ilmuwan muslim, rekaman audio cerita inspiratif keteladanan, atau esai reflektif kontekstual sesuai bakat murid.',
      'Menjaga kesetaraan rubrik penilaian inti lintas produk berbeda (ketepatan fakta sumber, kedalaman hikmah teladan, dan relevansi dengan tantangan generasi masa kini).',
      'Memastikan alternatif materi cetak dan pengerjaan luring tersedia lengkap bagi siswa yang tidak memiliki perangkat ponsel/kuota memadai agar tidak tertinggal.',
      'Membatasi nilai tertinggi siswa yang membuat infografis menjadi 75 sedangkan pembuat esai berhak mendapat 95 meski isinya setara.',
      'Mewajibkan seluruh kelas membuat film dokumenter berbayar berdurasi 30 menit dengan aplikasi berlangganan.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Diferensiasi produk yang adil memberi otonomi media ekspresi tanpa mendiskriminasi kondisi sosial-ekonomi siswa, sambil berpegang pada rubrik ketepatan materi yang sama.',
  },
  {
    id: 'jk26-pai-07',
    bank: 'PCK',
    topic: 'PCK PAI · Pendampingan Masalah Sosial-Emosional & Keteladanan Akhlak',
    prodiScope: ['pai'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG PAI 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.1',
    prompt:
      'Saat jam istirahat, guru PAI mendapati beberapa siswa saling mengejek kebiasaan ibadah teman yang berbeda organisasi keagamaan (*khilafiyah cabang furu’iyyah*) sehingga salah satu anak tampak tertekan dan enggan mengikuti shalat berjamaah di sekolah. Pilihlah SEMUA langkah bijak guru PAI sebagai pendidik dan teladan akhlak karimah!',
    options: [
      'Menenangkan anak yang tertekan secara empatik serta meluruskan dengan hangat bahwa perbedaan rincian furu’iyyah yang memiliki dasar dalil muktabar wajib disikapi saling menghormati (*tasamuh*).',
      'Mengajak siswa pelaku ejekan berdialog reflektif tentang nilai ukhuwah Islamiyah dan bahaya sikap merasa paling benar serta melukai perasaan sesama.',
      'Menampilkan keteladanan sikap ramah, inklusif, serta tidak pernah menyinggung atau merendahkan tradisi keagamaan kelompok mana pun selama mengajar.',
      'Membela salah satu organisasi keagamaan di depan mushalla sekolah dan menyatakan amalan pihak lain tertolak.',
      'Menghukum fisik seluruh siswa di lapangan upacara agar masalah cepat dilupakan tanpa penjelasan pemahaman agama.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Guru PAI berperan sebagai pengayom ukhuwah, membina adab perbedaan pendapat furu’iyyah secara ilmiah-santun, serta menjaga iklim mushalla sekolah tetap damai dan inklusif bagi seluruh pelajar.',
  },
  {
    id: 'jk26-pai-08',
    bank: 'PCK',
    topic: 'PCK PAI · Pendekatan Contextual Teaching and Learning (CTL) Kejujuran & Kepedulian',
    prodiScope: ['pai'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG PAI 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Agar nilai Amanah, Jujur, dan Kepedulian Sosial dalam materi PAI tidak menjadi sekadar teori hafalan ujian, guru merancang pembelajaran berbasis pendekatan **Contextual Teaching and Learning (CTL)**. Pilihlah SEMUA aktivitas CTL yang PALING EFEKTIF membumikan nilai tersebut di sekolah!',
    options: [
      'Menjalankan praktik pengelolaan *Kantin Kejujuran* atau kotak barang temuan (*lost and found*) kelas diikuti refleksi berkala atas pengalaman nyata siswa menghadapi godaan.',
      'Mengajak siswa melakukan aksi sosial terencana menyantuni kaum duafa/panti sekitar atau mengelola zakat-infak-sedekah sekolah secara transparan dan akuntabel.',
      'Menyajikan studi kasus dilema moral keseharian pelajar (seperti menyontek saat ujian atau menyebar aib teman di grup chat) untuk dipecahkan berdasar dalil Al-Qur’an-Hadis.',
      'Membaca berulang kali arti bahasa kata *shiddiq* dan *amanah* dari buku paket tanpa pernah mengaitkannya dengan pengalaman siswa.',
      'Memberikan hukuman menulis ayat seratus kali setiap kali kelas berisik tanpa memaknai konteks akhlak.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pendekatan CTL menghubungkan ajaran nilai Islam dengan pengalaman langsung di lingkungan sekolah/masyarakat (*experiential & authentic moral practice*), refleksi diri, dan penyelesaian dilema nyata.',
  },
  {
    id: 'jk26-pai-09',
    bank: 'PCK',
    topic: 'PCK PAI · Kolaborasi Guru PAI, Wali Kelas & Orang Tua dalam Pembiasaan Ibadah',
    prodiScope: ['pai'],
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Kurasi Juknis UKPPPG PAI 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Sosial',
    subkompetensi: 'S.2',
    prompt:
      'Hasil evaluasi menunjukkan beberapa siswa mulai malas melaksanakan ibadah harian di rumah dan kurang disiplin menghormati orang tua setelah pulang sekolah. Pilihlah SEMUA strategi kolaborasi empatik dan berkelanjutan yang tepat dilakukan guru PAI bersama keluarga serta pihak sekolah!',
    options: [
      'Menjalin komunikasi positif dan santun dengan orang tua/wali melalui buku penghubung atau forum dialog orang tua agar pembiasaan di sekolah selaras dengan dukungan hangat di rumah.',
      'Berkolaborasi dengan guru BK, wali kelas, dan komunitas kerohanian siswa (*Rohis*) menyelenggarakan kegiatan pembinaan karakter yang menggembirakan tanpa nada menghakimi.',
      'Melibatkan peserta didik merancang komitmen target ibadah pribadi realistis beserta catatan refleksi kendala yang dihadapi tiap minggu untuk dibimbing bersama.',
      'Mengirimkan surat teguran keras penuh nada menyalahkan pola asuh orang tua melalui grup WhatsApp kelas umum.',
      'Menurunkan langsung nilai ujian tulis sejarah Islam siswa sebagai balasan laporan keluhan keluarga.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Kolaborasi tri-pusat pendidikan (guru PAI, orang tua/wali, guru BK/teman sebaya) berjalan paling efektif lewat kemitraan komunikasi empatik yang menjaga martabat keluarga dan murid.',
  },
  {
    id: 'jk26-pai-10',
    bank: 'PCK',
    topic: 'PCK PAI · Perancangan Pembelajaran Hadis Kontekstual & Etika Sosial',
    prodiScope: ['pai'],
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Kurasi Juknis UKPPPG PAI 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.1',
    prompt:
      'Ketika mengajarkan pemahaman Hadis tentang etos kerja, kebersihan lingkungan, serta larangan ghibah dan penyebaran berita dusta (*tabayyun*) di jenjang SMP-SMA, pilihlah SEMUA strategi perancangan pembelajaran yang PALING SESUAI dengan tujuan pembinaan akhlak di satuan pendidikan!',
    options: [
      'Membimbing siswa menelaah matan dan isi kandungan hadis lalu menerapkannya sebagai solusi atas kasus nyata literasi bermedia sosial (*tabayyun* sebelum meneruskan pesan) dan kebiasaan menjaga kebersihan ruang kelas.',
      'Mengajak siswa membandingkan dampak psikologis maupun sosial dari perilaku *ghibah/namimah* daring dibanding komunikasi santun yang menjaga kehormatan sesama.',
      'Menghadirkan proyek aksi kelompok "Sekolah Bersih & Damai Bermedia" disertai penilaian proses serta refleksi perubahan kebiasaan siswa.',
      'Memfokuskan 100% ujian akhir semata pada pengurutan nomor halaman kitab syarah hadis dalam bahasa asing tanpa menyinggung penerapannya.',
      'Melarang siswa mendiskusikan relevansi hadis dengan fenomena aplikasi pesan instan masa kini.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pembelajaran hadis kontekstual mengintegrasikan penguasaan isi ajaran dengan kecakapan menyikapi era digital (*tabayyun*, anti-ghibah siber) dan kepedulian ekologis lingkungan sekolah.',
  },

  // =========================================================================
  // IPS TERPADU (6 butir: 3 PGK_KATEGORI, 3 PGK_MCMA)
  // =========================================================================
  {
    id: 'jk26-ips-01',
    bank: 'PCK',
    topic: 'PCK IPS · Kajian Terpadu Geografi-Ekonomi-Sosiologi & Miskonsepsi Vulkanisme',
    prodiScope: ['ips'],
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Kurasi Juknis UKPPPG IPS 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Dalam pembelajaran IPS Terpadu serta Geografi SMA/SMP tentang dinamika litosfer dan interaksi antarruang, guru mendapati siswa sering memandang fenomena gunung berapi semata sebagai bencana tanpa potensi ekonomi, atau bingung membedakan dampak sosial-ekonomi alih fungsi lahan. Tentukan apakah pendekatan PCK guru IPS berikut **Tepat & Holistik** atau **Kurang Tepat**!',
    categories: ['Tepat & Holistik', 'Kurang Tepat'],
    statements: [
      {
        text: 'Mengajak siswa memetakan sebaran pertanian hortikultura subur, energi panas bumi (geothermal), dan wisata lereng gunung api berdampingan dengan peta jalur evakuasi serta mitigasi risiko bencana.',
        answer: 0,
        reason: 'Pendekatan geografi spasial berimbang meluruskan miskonsepsi satu sisi dengan menghubungkan potensi kesuburan vulkanik dan mitigasi bencana.',
      },
      {
        text: 'Pada tema alih fungsi lahan pertanian ke kawasan industri, guru membimbing analisis multidimensi: perubahan tata guna lahan (geografi), pergeseran mata pencaharian & ketahanan pangan (ekonomi), serta perubahan relasi masyarakat (sosiologi).',
        answer: 0,
        reason: 'Esensi IPS Terpadu adalah menyatukan sudut pandang keruangan, ekonomi, sosiologis, dan historis dalam satu fenomena nyata.',
      },
      {
        text: 'Meminta siswa menghafalkan daftar ketinggian 80 gunung api di seluruh dunia dalam meter tanpa mendiskusikan dampak maupun adaptasi masyarakat sekitar.',
        answer: 1,
        reason: 'Hafalan daftar fakta kering tidak mengembangkan kemampuan berpikir spasial dan analisis keterkaitan manusia dengan lingkungan.',
      },
      {
        text: 'Menyalahkan warga lereng gunung secara sepihak di kelas tanpa menelaah keterikatan sejarah mata pencaharian agraris dan kebijakan tata ruang wilayah.',
        answer: 1,
        reason: 'Analisis IPS menuntut empati sosial dan pemahaman faktor struktural geografis-ekonomi secara objektif.',
      },
    ],
    explanation:
      'Pembelajaran IPS dan Geografi kontekstual melatih siswa melihat fenomena secara multidimensional (manusia-ruang-waktu-ekonomi) sekaligus meluruskan generalisasi keliru.',
  },
  {
    id: 'jk26-ips-02',
    bank: 'PCK',
    topic: 'PCK IPS · Experiential Learning Ekonomi Pasar & Berpikir Kesejarahan Kritis',
    prodiScope: ['ips'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG IPS 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Guru IPS / Ekonomi & Sejarah merancang kegiatan kelas untuk menjembatani konsep abstrak kurva keseimbangan pasar serta peristiwa ekonomi masa kolonial (*Landrent* vs *Cultuurstelsel*) dengan nalar kritis siswa. Tentukan apakah strategi pengajaran berikut **Bermakna (HOTS)** atau **Mekanis / Hafalan**!',
    categories: ['Bermakna (HOTS)', 'Mekanis / Hafalan'],
    statements: [
      {
        text: 'Mengadakan simulasi tawar-menawar pasar di kelas memakai kartu anggaran pembeli dan kartu biaya produksi penjual, lalu memplot harga transaksi kelas menjadi kurva permintaan dan penawaran nyata.',
        answer: 0,
        reason: 'Simulasi eksperiensial menjembatani mekanisme harga pasar konkret dengan representasi abstrak titik potong kurva equilibrium.',
      },
      {
        text: 'Menerapkan Problem-Based Learning membandingkan bukti arsip kebijakan Sewa Tanah dan Tanam Paksa untuk menganalisis struktur beban petani serta relevansinya bagi kedaulatan pangan kini.',
        answer: 0,
        reason: 'Pembelajaran sejarah kritis berbasis sumber mendorong penalaran sebab-akibat struktural lintas waktu, bukan sekadar menghafal angka tahun.',
      },
      {
        text: 'Meminta siswa menyalin ulang garis waktu nama lengkap seluruh Gubernur Jenderal Hindia Belanda dan menebak tanggal kedatangan tiap kapal dagang dalam kuis mingguan.',
        answer: 1,
        reason: 'Penghafalan kronologi kering tanpa analisis konteks sejarah gagal melatih kesadaran berpikir historis.',
      },
      {
        text: 'Mengawali pelajaran Ekonomi dasar langsung dengan mengerjakan 40 soal persamaan sistem linear permintaan tanpa menjelaskan perilaku konsumen maupun produsen di balik kurva.',
        answer: 1,
        reason: 'Melompat ke aljabar abstrak sebelum makna konsep terbentuk memicu kebingungan konseptual siswa.',
      },
    ],
    explanation:
      'Model simulasi pasar untuk Ekonomi dan investigasi bukti arsip untuk Sejarah menumbuhkan pemahaman konseptual yang jauh lebih dalam dibandingkan dril hitung atau hafalan tahun.',
  },
  {
    id: 'jk26-ips-03',
    bank: 'PCK',
    topic: 'PCK IPS · Asesmen Inkuiri Masalah Sosial & Integrasi Kearifan Lokal',
    prodiScope: ['ips'],
    pckFocus: 'Asesmen Otentik',
    source: 'Kurasi Juknis UKPPPG IPS 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Setelah siswa melakukan wawancara lapangan sederhana mengenai dinamika UMKM lokal atau masalah sampah lingkungan masyarakat, guru IPS melakukan evaluasi dan pendampingan. Tentukan apakah praktik asesmen guru berikut **Tepat** atau **Tidak Tepat**!',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Menilai laporan investigasi lapangan siswa dengan rubrik meliputi keakuratan data wawancara, ketajaman analisis faktor sosial-ekonomi penyebab masalah, kelayakan solusi kontekstual, dan etika narasumber.',
        answer: 0,
        reason: 'Asesmen autentik inkuiri sosial menilai kecakapan metodologis lapangan, nalar lintas disiplin, dan etika penelitian sosial.',
      },
      {
        text: 'Membimbing siswa menyusun pertanyaan wawancara sopan serta menjaga kerahasiaan data pribadi informan ketika mengolah temuan penelitian sosial masyarakat.',
        answer: 0,
        reason: 'Etika pengumpulan data merupakan kompetensi wajib pembelajaran inkuiri IPS.',
      },
      {
        text: 'Membagikan nilai proyek semata berdasarkan tebal jumlah halaman jilid mika meski seluruh isi tabel laporan terbukti hasil salin-tempel tanpa turun ke lapangan.',
        answer: 1,
        reason: 'Penilaian harus menguji keaslian bukti proses penyelidikan lapangan serta validitas argumen, bukan ketebalan kertas semata.',
      },
      {
        text: 'Menyelenggarakan presentasi gelar temuan (*gallery walk*) dengan tanggapan kritis antar-kelompok untuk melatih kemampuan argumentasi berbasis data sosial.',
        answer: 0,
        reason: 'Diskusi terbuka antar-kelompok memperkaya perspektif solusi masalah kemasyarakatan.',
      },
    ],
    explanation:
      'Inkuiri sosial dan ekonomi lokal menuntut penilaian proses investigasi lapangan beretika, ketajaman analisis sebab-akibat berbasis data nyata, dan pertanggungjawaban gagasan solutif.',
  },
  {
    id: 'jk26-ips-04',
    bank: 'PCK',
    topic: 'PCK IPS · Analisis Perubahan Sosial Budaya & Ketimpangan Era Digital',
    prodiScope: ['ips'],
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Kurasi Juknis UKPPPG IPS Sosiologi 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam pembelajaran Sosiologi / IPS tema Perubahan Sosial Masyarakat Pedesaan akibat penetrasi internet dan ekonomi digital, guru ingin mendorong kemampuan analisis kritis (C4) siswa terhadap fenomena budaya konsumtif serta kesenjangan akses usaha lokal. Pilihlah SEMUA tujuan dan tugas pembelajaran yang PALING TEPAT!',
    options: [
      'Membimbing siswa menganalisis faktor pendorong dan penghambat adopsi platform niaga elektronik (*e-commerce*) oleh perajin/petani lokal di desa sekitar beserta strategi pemberdayaannya.',
      'Mengajak siswa membandingkan perubahan pola interaksi tatap muka gotong royong sebelum dan sesudah hadirnya media sosial pada berbagai generasi warga desa.',
      'Merancang rekomendasi program literasi ekonomi kreatif lokal yang memanfaatkan teknologi digital sekaligus merawat modal sosial (*social capital*) solidaritas warga.',
      'Menyuruh siswa menghafalkan daftar definisi perubahan evolusi dan revolusi dari lima tokoh sosiologi tanpa mengamati lingkungan masyarakat sekitar.',
      'Menginstruksikan seluruh kelompok langsung menyimpulkan bahwa seluruh kemajuan teknologi digital mutlak merusak budaya bangsa tanpa memeriksa manfaat produktifnya.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Analisis sosiologis dan IPS terpadu menghindari generalisasi hitam-putih, sebaliknya meneliti data dampak ganda transformasi digital terhadap relasi sosial dan pemberdayaan ekonomi masyarakat.',
  },
  {
    id: 'jk26-ips-05',
    bank: 'PCK',
    topic: 'PCK IPS · Pemanfaatan Peta Digital (SIG/Google Earth) & Data Statistik Ekonomi',
    prodiScope: ['ips'],
    pckFocus: 'Media/ICT & Simulator',
    source: 'Kurasi Juknis UKPPPG IPS 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Guru IPS / Geografi & Ekonomi hendak mengintegrasikan TIK secara kritis untuk membelajarkan topik Sebaran Penduduk, Pola Penggunaan Lahan, serta Inflasi Daerah di kelas X-XI. Pilihlah SEMUA strategi pemanfaatan media TIK yang PALING TEPAT!',
    options: [
      'Menggunakan citra satelit historis (seperti Google Earth Timelapse) agar siswa mengamati langsung penyusutan area hijau atau perubahan garis pantai wilayahnya dari tahun ke tahun.',
      'Membimbing siswa mengakses portal data resmi (seperti BPS) untuk membandingkan tren inflasi komoditas pangan antar-tahun lalu menganalisis faktor distribusi di balik angka tersebut.',
      'Mengajak siswa memvisualisasikan temuan peta tematik digital sederhana beserta narasi rekomendasi tata ruang atau pengendalian harga pangan lokal.',
      'Mengharuskan siswa mewarnai peta batas kecamatan pada kertas buram memakai pensil warna sebagai satu-satunya aktivitas tiga minggu berturut-turut.',
      'Menggunakan berita gosip tidak terverifikasi di media sosial sebagai rujukan utama angka inflasi nasional.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pemanfaatan citra geospasial historis dan data statistik resmi (BPS) melatih keterampilan literasi data, penalaran keruangan, dan analisis ekonomi berbasis bukti otentik.',
  },
  {
    id: 'jk26-ips-06',
    bank: 'PCK',
    topic: 'PCK IPS · Strategi Resolusi Konflik Sosial & Pembelajaran Multiperspektif',
    prodiScope: ['ips'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG IPS 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Saat membahas topik sensitif seperti konflik tata guna lahan agraria, urbanisasi, atau kesenjangan sosial dalam diskusi kelas IPS, peserta didik terbagi dalam dua kubu berargumen panas berdasarkan latar belakang lingkungan tempat tinggalnya. Pilihlah SEMUA tindakan manajemen diskusi inklusif dan kritis paling tepat oleh guru!',
    options: [
      'Menyediakan paket sumber bacaan beragam dari berbagai perspektif pemangku kepentingan (*multiple perspectives*: warga lokal, pelaku usaha, pemerhati lingkungan, pemerintah daerah) agar siswa berargumen berdasar fakta lengkap.',
      'Menegakkan kesepakatan etika diskusi (*mendengarkan argumen lawan bicara secara empatik, mengkritik gagasan bukan pribadi*).',
      'Membimbing teknik mediasi resolusi konflik (*kompromi dan kolaborasi win-win*) sebagai tugas sintesis akhir tiap kelompok.',
      'Memihak langsung pada kelompok yang bersuara paling keras agar diskusi cepat selesai sebelum bel berbunyi.',
      'Menghapus seluruh topik isu sosial nyata dari pelajaran IPS agar tidak ada perbedaan pendapat di kelas.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pengajaran multiperspektif berbasis bukti menumbuhkan empati sosial, berpikir objektif lintas sudut pandang, serta kecakapan negosiasi konstruktif sebagai bekal hidup bermasyarakat.',
  },

  // =========================================================================
  // BAHASA INDONESIA (4 butir: 2 PGK_KATEGORI, 2 PGK_MCMA)
  // =========================================================================
  {
    id: 'jk26-bind-01',
    bank: 'PCK',
    topic: 'PCK B. Indonesia · Asesmen Proses Menulis Teks Argumentasi & Ejaan Kontekstual',
    prodiScope: ['bahasa-indonesia'],
    pckFocus: 'Asesmen Otentik',
    source: 'Kurasi Juknis UKPPPG Bahasa Indonesia 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Guru Bahasa Indonesia kelas XI melaksanakan pembelajaran menulis teks Argumentasi terkait isu kearifan lokal pangan dan transportasi publik. Tentukan apakah praktik pembimbingan dan asesmen guru berikut **Tepat** atau **Kurang Tepat**!',
    categories: ['Tepat', 'Kurang Tepat'],
    statements: [
      {
        text: 'Mengukur proses menulis secara bertahap (kerangka argumen -> draf awal -> revisi sejawat/guru berbasis rubrik kohesi, kekuatan bukti, dan EYD V -> karya final) dibanding hanya menilai produk akhir sekali jadi.',
        answer: 0,
        reason: 'Process writing approach dengan umpan balik bertahap terbukti meningkatkan kualitas penalaran tulisan dan keteraturan struktur.',
      },
      {
        text: 'Mengajarkan penyuntingan kalimat efektif dan EYD V langsung di dalam draf karangan asli siswa sendiri beserta alasan perbaikan maknanya.',
        answer: 0,
        reason: 'Penyuntingan terintegrasi dalam konteks tulisan bermakna membantu siswa merasakan langsung fungsi kejelasan bahasa.',
      },
      {
        text: 'Memberikan nilai utama tulisan argumentasi semata-mata dari jumlah kata terpanjang dan tulisan tangan paling rapi walaupun klaim opini tidak disertai bukti data apa pun.',
        answer: 1,
        reason: 'Esensi teks argumentasi terletak pada logika penalaran klaim-alasan-bukti yang valid dan terstruktur, bukan panjang kata kosong.',
      },
      {
        text: 'Mengembalikan karangan siswa penuh coretan tanda silang merah tanpa catatan umpan balik apa yang sudah baik dan bagian mana yang perlu diperbaiki.',
        answer: 1,
        reason: 'Coretan tanpa umpan balik konstruktif mematikan motivasi menulis dan tidak memberi petunjuk perbaikan konkret.',
      },
    ],
    explanation:
      'Pembelajaran dan asesmen menulis Bahasa Indonesia efektif memadukan proses bertahap (*process approach*), penyuntingan kaidah EYD kontekstual, dan umpan balik rubrik yang membangun.',
  },
  {
    id: 'jk26-bind-02',
    bank: 'PCK',
    topic: 'PCK B. Indonesia · Literasi Informasi Multimodal & Apresiasi Sastra Reflektif',
    prodiScope: ['bahasa-indonesia'],
    pckFocus: 'Media/ICT & Simulator',
    source: 'Kurasi Juknis UKPPPG Bahasa Indonesia 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Pada era Kurikulum Merdeka, pelajaran Bahasa Indonesia memadukan keterampilan menyimak, membaca-memirsa teks multimodal, berbicara, dan menulis sastra maupun nonsastra. Tentukan apakah strategi pemanfaatan media dan pengajaran sastra berikut **Tepat** atau **Kurang Tepat**!',
    categories: ['Tepat', 'Kurang Tepat'],
    statements: [
      {
        text: 'Dalam materi membaca teks berita/infografis digital, membimbing siswa mengevaluasi akurasi judul vs isi (*anti-clickbait*), membedakan fakta dan opini penulis, serta membandingkan dua sumber media.',
        answer: 0,
        reason: 'Kecakapan memirsa dan membaca kritis teks multimodal merupakan inti literasi informasi Kurikulum Merdeka.',
      },
      {
        text: 'Saat membelajarkan cerpen atau puisi, mengajak siswa memaknai konflik batin tokoh, pilihan majas pencitraan, dan relevansi nilai moralnya terhadap kehidupan remaja masa kini.',
        answer: 0,
        reason: 'Apresiasi sastra sejati menumbuhkan kepekaan rasa, empati kemanusiaan, dan refleksi nilai, bukan hafalan riwayat hidup pengarang.',
      },
      {
        text: 'Menilai pemahaman puisi hanya melalui tes menghafalkan tahun terbit kumpulan puisi serta arti istilah jenis rima secara terpisah dari teks puisinya.',
        answer: 1,
        reason: 'Tes hafalan definisi majas/rima di luar konteks teks menghambat kepekaan estetika dan pemaknaan karya sastra.',
      },
      {
        text: 'Mengajak kelompok siswa memproduksi teks tanggapan berupa siniar audio atau resensi video berpedoman skrip tertulis untuk mengasah kesantunan berbahasa lisan dan visual.',
        answer: 0,
        reason: 'Integrasi produk multimodal melatih keselarasan gagasan tulis, artikulasi lisan, dan etika komunikasi modern.',
      },
    ],
    explanation:
      'Pembelajaran Bahasa Indonesia abad ke-21 menyatukan literasi kritis teks multimodal (memilah fakta-opini, bias) dan apresiasi sastra reflektif yang menyentuh nalar maupun rasa.',
  },
  {
    id: 'jk26-bind-03',
    bank: 'PCK',
    topic: 'PCK B. Indonesia · Diferensiasi Mengajar Teks Pidato & Debat Komunikatif',
    prodiScope: ['bahasa-indonesia'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Juknis UKPPPG Bahasa Indonesia 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Saat mengajarkan keterampilan berbicara Teks Pidato Persuasif atau Diskusi Debat di kelas IX dengan keberagaman kepercayaan diri serta kemampuan bahasa siswa (termasuk siswa berlatar bahasa ibu daerah kental), pilihlah SEMUA pendekatan pembelajaran responsif dan berdiferensiasi yang PALING TEPAT!',
    options: [
      'Menyediakan ragam model video dan transkrip contoh pidato berbagai topik dekat kehidupan murid (*bullying*, pelestarian budaya daerah, gaya hidup sehat) sebagai perancah (*scaffolding*) kerangka berbicara.',
      'Memberikan latihan berjenjang mulai dari menyusun poin gagasan, latihan berpasangan (*peer rehearsal*), lalu tampil di kelompok kecil sebelum pementasan kelas.',
      'Menyediakan pilihan topik sesuai minat siswa serta rubrik penilaian yang menekankan kebermaknaan pesan persuasi, kontak mata, intonasi, dan kejelasan gagasan tanpa mencela logat daerah alami siswa.',
      'Melarang siswa yang berlogat kedaerahan ikut tampil berbicara dan hanya memberi mereka tugas mengedarkan daftar hadir.',
      'Mewajibkan seluruh 34 siswa menghafalkan satu naskah pidato politik yang identik kata demi kata dalam semalam.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pembelajaran berbicara inklusif menghargai keberagaman latar kebahasaan siswa, memberi scaffolding latihan bertingkat agar cemas berkurang, serta menilai keutuhan persuasi daripada hafalan kaku.',
  },
  {
    id: 'jk26-bind-04',
    bank: 'PCK',
    topic: 'PCK B. Indonesia · Diagnosis Miskonsepsi Struktur Teks Eksplanasi & Laporan Hasil Observasi',
    prodiScope: ['bahasa-indonesia'],
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Kurasi Juknis UKPPPG Bahasa Indonesia 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Setelah memeriksa draf siswa pada materi Teks Laporan Hasil Observasi (LHO) dan Teks Eksplanasi fenomena alam/sosial, guru mendapati siswa sering mencampuradukkan opini subjektif pribadi tanpa bukti ke dalam LHO serta menyusun Eksplanasi hanya berupa ajakan persuasif tanpa memaparkan urutan sebab-akibat. Pilihlah SEMUA intervensi diagnostik paling tepat oleh guru!',
    options: [
      'Memandu kegiatan *membandingkan dua teks* (contoh LHO objektif berbasis pengamatan empiris vs teks eksposisi/persuasi penuh opini) agar siswa menandai sendiri perbedaan ciri kata kerja faktual dan kausalitasnya.',
      'Membekali pengatur grafis bagan alur sebab-akibat (*cause-effect chain*) dan tabel pemilah antara kalimat fakta terukur dengan kalimat opini evaluatif sebelum siswa merevisi drafnya.',
      'Mengadakan konferensi tulisan singkat (*writing conference*) kelompok untuk mendiskusikan mengapa kalimat tertentu tergolong opini alih-alih hasil observasi faktual.',
      'Menyuruh siswa menghafal definisi LHO sepanjang satu paragraf dari glosarium tanpa meninjau kembali kalimat pada draf karangan mereka sendiri.',
      'Mengganti seluruh tulisan siswa dengan salinan laporan praktikum orang lain di internet agar hasilnya langsung tampak objektif.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Membandingkan pasangan contoh teks kontras, memakai bagan pemilah fakta-opini serta bagan kausalitas, dan meninjau draf secara kolaboratif langsung membongkar miskonsepsi genre siswa.',
  },

  // =========================================================================
  // MATEMATIKA (2 butir tambahan: 1 PGK_KATEGORI, 1 PGK_MCMA)
  // =========================================================================
  {
    id: 'jk26-mat-01',
    bank: 'PCK',
    topic: 'PCK Matematika · Diagnostik Miskonsepsi Aljabar & Penalaran Proporsional',
    prodiScope: ['matematika'],
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Kurasi Juknis UKPPPG Matematika 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Saat menganalisis pekerjaan siswa kelas VII-IX pada topik Aljabar dan Perbandingan, guru menemukan beberapa kesalahan konseptual berulang seperti `(a + b)^2 = a^2 + b^2` serta menganggap perbandingan senilai selalu berlaku untuk setiap masalah waktu dan jumlah pekerja. Tentukan apakah langkah diagnostik dan perbaikan PCK guru berikut **Tepat** atau **Kurang Tepat**!',
    categories: ['Tepat', 'Kurang Tepat'],
    statements: [
      {
        text: 'Menjembatani miskonsepsi `(a + b)^2` dengan model visual luas persegi panjang (*area model*) bersisi `(a + b)` sehingga siswa menemukan sendiri kemunculan dua persegi panjang suku silang `2ab`.',
        answer: 0,
        reason: 'Representasi geometris area model (enaktif-ikonik Bruner) membuktikan secara visual mengapa suku tengah `2ab` wajib ada.',
      },
      {
        text: 'Menggunakan kerangka analisis kesalahan Newman (*Reading, Comprehension, Transformation, Process Skills, Encoding*) saat memeriksa jawaban soal cerita agar tepat melacak di tahap mana siswa gagal menerjemahkan kalimat ke model matematika.',
        answer: 0,
        reason: 'Newman Error Analysis membedakan kesalahan membaca/memahami konteks dari kekeliruan hitungan aritmetika.',
      },
      {
        text: 'Meluruskan perbandingan berbalik nilai dengan menanyakan makna logis dunia nyata ("jika jumlah tukang bangunan ditambah, apakah proyek selesai lebih cepat atau lebih lama?") sebelum memasukkan rumus rasio.',
        answer: 0,
        reason: 'Penalaran akal sehat kontekstual (*RME / Pendekatan Realistik*) mencegah siswa mengali-silang rumus secara membabi buta.',
      },
      {
        text: 'Memberikan hukuman mengerjakan 60 soal latihan aljabar sejenis tanpa terlebih dahulu menanyakan alasan di balik kesalahan siswa menyederhanakan suku berbeda.',
        answer: 1,
        reason: 'Dril mekanis berulang tanpa perbaikan akar miskonsepsi justru mengukuhkan prosedur keliru yang sama.',
      },
    ],
    explanation:
      'Pembelajaran Matematika bermakna memadukan model geometris konkret (area model), diagnostik tahap Newman, serta konteks realistik (RME) untuk membongkar kesalahan prosedur aljabar dan proporsi.',
  },
  {
    id: 'jk26-mat-02',
    bank: 'PCK',
    topic: 'PCK Matematika · Integrasi GeoGebra, Eksplorasi Van Hiele & Pemecahan Masalah Polya',
    prodiScope: ['matematika'],
    pckFocus: 'Media/ICT & Simulator',
    source: 'Kurasi Juknis UKPPPG Matematika 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Dalam membelajarkan materi Transformasi Geometri, Fungsi Kuadrat, dan Sifat Lingkaran di SMP-SMA menggunakan GeoGebra serta tahapan pemecahan masalah Polya, pilihlah SEMUA strategi pembelajaran yang PALING EFEKTIF mendorong pemahaman konseptual siswa (*relational understanding*) alih-alih sekadar hafalan rumus (*instrumental*)!',
    options: [
      'Meminta siswa menggeser parameter koefisien `a`, `b`, dan `c` pada slider GeoGebra lalu mengamati perubahan bentuk grafik parabola untuk menemukan sendiri hubungan diskriminan dan titik puncak (*discovery*).',
      'Membimbing eksplorasi bertingkat sesuai level berpikir geometri Van Hiele (visualisasi -> analisis sifat -> deduksi informal) sebelum menuntut pembuktian teorema formal.',
      'Menerapkan empat langkah pemecahan masalah Polya (memahami masalah, merencanakan strategi, melaksanakan rencana, dan memeriksa ulang kewajaran jawaban) pada masalah nyata.',
      'Langsung menayangkan semua titik hasil akhir GeoGebra tanpa memberi kesempatan siswa memprediksi pengaruh perubahan nilai koefisien terlebih dahulu.',
      'Mengharuskan siswa menghafalkan rumus cepat koordinat bayangan transformasi tanpa memahami pemetaan titik pada bidang Kartesius.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Memadukan eksperimen slider GeoGebra (*exploratory ICT*), pentahapan Van Hiele, dan kebiasaan refleksi langkah akhir Polya membangun pemahaman relasional (Skemp) yang kokoh.',
  },
];
