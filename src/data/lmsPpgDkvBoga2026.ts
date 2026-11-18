import type { ExamQuestion } from '../types/exam';

/**
 * Modul PCK & SJT bergaya LMS PPG & 4 Kompetensi Guru (Lampiran 4 Juknis 2026)
 * Untuk penggantian soal teknis/resep non-pedagogis pada Prodi:
 * - DKV SMK (18 butir: 12 PG, 3 PGK_KATEGORI, 3 PGK_MCMA)
 * - Tata Boga SMK (26 butir: 20 PG, 3 PGK_KATEGORI, 3 PGK_MCMA)
 */
export const LMS_PPG_DKV_BOGA_2026: ExamQuestion[] = [
  // ================= DKV SMK (18 BUTIR) =================
  {
    id: 'lms26-dkv-01',
    bank: 'PCK',
    topic: 'PCK DKV · Pembelajaran Mendalam (UbD & Asesmen Awal)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Pak Galih merancang unit pembelajaran Desain Poster Edukasi di kelas X DKV memakai kerangka Understanding by Design (UbD). Setelah menetapkan tujuan agar murid memahami hierarki visual sebagai jembatan komunikasi pesan, langkah perencanaan berikutnya yang paling tepat sebelum memilih aktivitas proyek adalah ....',
    options: [
      'Menyusun tutorial singkat penggunaan perangkat lunak desain terbaru setiap hari.',
      'Menentukan bukti asesmen otentik dan kriteria rubrik ketercapaian pemahaman pesan visual yang diharapkan.',
      'Mengumpulkan daftar aplikasi desain populer yang banyak digunakan agensi kreatif.',
      'Membagikan template poster siap pakai agar seluruh murid menyelesaikan karya tepat waktu.',
      'Memberikan ulangan harian berbentuk pilihan ganda hafalan nama menu perangkat lunak.',
    ],
    answer: 1,
    explanation:
      'Dalam alur mundur UbD (Backward Design), setelah merumuskan tujuan bermakna, guru menetapkan bukti penilaian dan kriteria ketercapaian (Tahap 2) terlebih dahulu sebelum merancang aktivitas belajar (Tahap 3).',
  },
  {
    id: 'lms26-dkv-02',
    bank: 'PCK',
    topic: 'PCK DKV · TaRL & Diferensiasi Kesiapan Belajar',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Berdasarkan hasil asesmen diagnostik awal proyek Desain Kemasan di kelas XI DKV, sebagian murid sudah terampil membuat sketsa konsep dan mengoperasikan perangkat lunak vektor, sebagian mampu menggambar manual dengan baik tetapi canggung memakai aplikasi digital, sedangkan kelompok kecil masih bingung menentukan gagasan utama target audiens. Keputusan diferensiasi paling tepat sesuai prinsip TaRL dan keberpihakan pada murid adalah ....',
    options: [
      'Meminta kelompok yang lambat mengikuti kelas tambahan di luar jam sekolah agar dapat menyamai kelas reguler.',
      'Membagi kelompok permanen berdasarkan peringkat nilai semester lalu hingga akhir tahun.',
      'Merancang pendampingan bertahap sesuai peta kesiapan: klinik ide audiens untuk kelompok awal, scaffolding transisi sketsa ke aplikasi digital, serta tantangan studi kasus klien nyata bagi yang sudah mahir dengan peninjauan ulang berkala.',
      'Mengizinkan kelompok yang belum mahir aplikasi hanya menonton pekerjaan teman yang lebih cepat.',
      'Menghilangkan tahap perancangan konsep audiens agar semua murid fokus menyalin contoh dari internet.',
    ],
    answer: 2,
    explanation:
      'Pembelajaran berdiferensiasi dan TaRL mengelompokkan dukungan secara fleksibel sesuai kebutuhan aktual murid (bukan permanen) serta tetap menyediakan tantangan setara bagi kelompok mahir.',
  },
  {
    id: 'lms26-dkv-03',
    bank: 'PCK',
    topic: 'PCK DKV · Lingkungan Belajar Inklusif & DUP (UDL)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Di kelas X DKV terdapat seorang murid dengan hambatan penglihatan parsial (buta warna parsial) yang merasa minder saat mendapat tugas merancang infografis kampanye kebersihan sekolah. Tindakan guru yang paling mencerminkan Desain Universal untuk Pembelajaran (DUP/UDL) dan keadilan akses adalah ....',
    options: [
      'Membebaskan murid tersebut dari seluruh tugas desain visual dan menggantinya dengan merangkum buku teks.',
      'Mengarahkan murid menggunakan kombinasi kontras gelap-terang yang jelas, pola/ikon pembeda selain warna, serta alat bantu pemeriksa kontras digital sambil tetap menuntut standar pesan komunikasi yang sama.',
      'Menyarankan orang tua memindahkan murid tersebut ke jurusan non-desain karena dianggap tidak cocok.',
      'Menurunkan standar penilaian proyek secara diam-diam tanpa memberi umpan balik peningkatan karya.',
      'Meminta teman sebangkunya memilihkan seluruh warna tanpa melibatkan murid tersebut dalam pengambilan keputusan desain.',
    ],
    answer: 1,
    explanation:
      'DUP menghilangkan hambatan pada media/strategi tanpa menurunkan tujuan belajar atau memarginalkan murid: diferensiasi akses visual dengan kontras, ikon, dan penanda non-warna memberdayakan potensinya.',
  },
  {
    id: 'lms26-dkv-04',
    bank: 'PCK',
    topic: 'PCK DKV · Umpan Balik Konstruktif & Growth Mindset',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.2',
    prompt:
      'Setelah menerima kritik tata letak yang dinilai masih penuh dan sulit dibaca, Dika murid kelas X DKV berkata, "Saya memang tidak punya bakat seni dari lahir, percuma mencoba terus." Respons umpan balik guru yang paling mendorong pola pikir bertumbuh (Growth Mindset) serta perbaikan nyata adalah ....',
    options: [
      '"Kalau memang merasa berat di estetika, fokus saja membantu bagian pengetikan teks kelompok."',
      '"Skor desainmu masih 60; usahakan minggu depan nilainya sudah di atas kriteria ketuntasan."',
      '"Pilihan fotomu sudah kuat menangkap emosi pesan; pada tahap ini tata letak masih penuh karena teks judul dan isi berukuran mirip. Mari coba sisakan ruang kosong di atas lalu bandingkan keterbacaannya."',
      '"Bakat desain memang perlu waktu lama, coba saja tiru karya peringkat satu di kelas."',
      '"Jangan terlalu sedih, nilai proyek lain nanti bisa membantu menutup kekurangan di tugas ini."',
    ],
    answer: 2,
    explanation:
      'Umpan balik Growth Mindset mengakui kekuatan spesifik karya, memandang kesulitan sebagai proses belajar yang dapat diperbaiki melalui strategi konkret (feed-up, feed-back, feed-forward), bukan menilai bakat bawaan tetap.',
  },
  {
    id: 'lms26-dkv-05',
    bank: 'PCK',
    topic: 'PCK DKV · Integrasi TIK Kritis & Etika Digital (P.4)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Dalam proyek pembuatan ilustrasi kampanye budaya lokal kelas XI DKV, hampir separuh kelas mengumpulkan hasil gambar instan buatan generator AI tanpa memahami proses komposisi dan mengklaimnya sebagai karya orisinal penuh. Langkah pedagogis dan etis terbaik guru untuk membangun literasi digital kritis adalah ....',
    options: [
      'Memblokir seluruh akses internet di lab sekolah selamanya dan memberi nilai nol tanpa dialog.',
      'Mengubah rubrik asesmen agar membolehkan generator AI sebagai alat bantu eksplorasi awal dengan kewajiban mencantumkan bukti prompt, dokumentasi sketsa proses modifikasi manusia, serta pemahaman hak cipta karya.',
      'Membiarkan praktik tersebut karena industri masa depan akan sepenuhnya otomatis.',
      'Meminta seluruh murid membeli aplikasi berbayar mahal agar terdeteksi manual.',
      'Memuji kecerdasan murid memakai AI untuk menghemat waktu pengerjaan tugas akhir.',
    ],
    answer: 1,
    explanation:
      'Integrasi TIK secara kritis menuntut guru menanamkan transparansi proses kreatif, etika hak kekayaan intelektual (HKI), dan pembuktian nalar perancangan siswa sendiri.',
  },
  {
    id: 'lms26-dkv-06',
    bank: 'PCK',
    topic: 'PCK DKV · Culturally Responsive Teaching (P.5)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Bu Sinta mengajar DKV di wilayah yang memiliki banyak perajin batik dan anyaman tradisional. Ia ingin menerapkan Culturally Responsive Teaching (CRT) agar murid memahami konsep identitas visual merek (branding) secara mendalam dan tidak sekadar meniru merek luar negeri. Rancangan kegiatan yang paling substantif adalah ....',
    options: [
      'Meminta murid memakai pakaian batik saat presentasi tugas logo produk minuman modern dari luar negeri.',
      'Mengajak murid mewawancarai pelaku UMKM kriya lokal untuk menggali filosofi motif budaya setempat, lalu merancang ulang identitas kemasan autentik yang relevan bagi pasar masa kini.',
      'Membagikan foto produk merek ternama internasional sebagai patokan tunggal keindahan desain.',
      'Menugaskan murid menghafal sejarah berdirinya kampung kriya lalu membuat rangkuman tertulis.',
      'Menggunakan lagu daerah sebagai musik latar selama murid menggambar bebas di komputer.',
    ],
    answer: 1,
    explanation:
      'CRT menghubungkan aset budaya dan kearifan lokal sebagai sumber belajar substantif untuk memecahkan masalah nyata perancangan komunikasi visual, bukan sekadar tempelan simbolis.',
  },
  {
    id: 'lms26-dkv-07',
    bank: 'PCK',
    topic: 'PCK DKV · Pembelajaran Sosial-Emosional & Komunikasi Empatik (S.1)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.1',
    prompt:
      'Saat sesi kritik karya (design critique) di kelas XI DKV, beberapa murid menertawakan poster buatan Nando yang menggunakan gaya tipografi daerah asalnya karena dianggap "kampungan". Nando tampak menarik diri dan enggan mempresentasikan karyanya lagi. Respons guru yang paling tepat untuk membangun iklim belajar aman dan kesadaran sosial adalah ....',
    options: [
      'Menghentikan presentasi dan menegur keras penertawa di depan seluruh kelas tanpa diskusi lanjutan.',
      'Menyarankan Nando mengganti gaya poster dengan desain minimalis modern agar diterima teman-temannya.',
      'Menetapkan norma kelas saling menghargai proses berkarya, memfasilitasi dialog tentang keberagaman ekspresi budaya visual, dan memberi kesempatan Nando menjelaskan makna karyanya.',
      'Memindahkan Nando bekerja sendirian di pojok ruang praktik agar merasa tenang.',
      'Menganggap candaan tersebut hal wajar di kalangan remaja kreatif untuk melatih mental industri.',
    ],
    answer: 2,
    explanation:
      'Guru menjaga keamanan psikologis kelas secara restoratif: menegaskan kesepakatan saling menghargai, menumbuhkan empati sosial, dan memandang latar budaya murid sebagai aset komunikasi visual.',
  },
  {
    id: 'lms26-dkv-08',
    bank: 'PCK',
    topic: 'PCK DKV · Asesmen Formatif Berkelanjutan (P.6)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Selama dua minggu terakhir, hasil nilai tugas poster DKV hanya diumumkan lewat angka akhir setelah proyek selesai dikumpulkan. Guru menyadari murid mengulang kesalahan yang sama pada fokus pesan dan kesesuaian khalayak di proyek berikutnya. Perbaikan strategi asesmen formatif yang paling efektif adalah ....',
    options: [
      'Menambah jumlah tugas poster menjadi dua kali lipat agar murid lebih terbiasa.',
      'Menerapkan cek proses berkala di setiap tahap (brief konsep, sketsa kasar, draf digital) dengan rubrik sederhana, diskusi umpan balik sebaya terstruktur, dan waktu revisi sebelum penilaian akhir.',
      'Memberikan ujian tulis pilihan ganda di akhir semester tentang sejarah desain komunikasi visual.',
      'Menampilkan peringkat lima nilai terbaik dan lima nilai terendah di papan pengumuman kelas.',
      'Menggunakan kriteria penilaian baru yang dirahasiakan agar murid tidak sekadar mengejar angka.',
    ],
    answer: 1,
    explanation:
      'Asesmen formatif berkelanjutan dan Assessment as Learning memberi murid informasi perbaikan selama proses berlangsung sehingga kekeliruan konsep pesan dapat dikoreksi sebelum hasil akhir dikumpulkan.',
  },
  {
    id: 'lms26-dkv-09',
    bank: 'PCK',
    topic: 'PCK DKV · Filosofi Pendidikan Ki Hadjar Dewantara (K.3)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.3',
    prompt:
      'Dalam proyek pameran karya visual bertema lingkungan sekolah, Pak Danu merancang kegiatan pembelajaran berdasarkan pemikiran Sistem Among Ki Hadjar Dewantara agar kemandirian dan kreativitas murid berkembang optimal. Penerapan prinsip "Tut Wuri Handayani" yang paling tepat tampak pada tindakan guru berupa ....',
    options: [
      'Menentukan seluruh tema, pilihan warna, dan sketsa tata letak yang wajib diikuti persis oleh setiap murid.',
      'Melepaskan murid menentukan segalanya sendiri tanpa panduan tujuan maupun umpan balik sejak awal hingga akhir.',
      'Memberikan kebebasan terarah bagi murid merancang gagasan visualnya sendiri sambil memantau proses secara cermat serta memberi dorongan maupun pertanyaan pemantik saat murid menemui jalan buntu.',
      'Mengerjakan sebagian besar desain pameran agar nama baik sekolah tidak tercoreng oleh karya siswa pemula.',
      'Mengelompokkan murid hanya berdasarkan nilai ujian teori komunikasi.',
    ],
    answer: 2,
    explanation:
      'Tut Wuri Handayani berarti pendidik memberi kepercayaan dan ruang kemandirian berkarya sambil tetap mendampingi dan mengarahkan dari belakang apabila peserta didik membutuhkan dorongan.',
  },
  {
    id: 'lms26-dkv-10',
    bank: 'PCK',
    topic: 'PCK DKV · Kolaborasi Orang Tua & Komunitas (S.2)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.2',
    prompt:
      'Sebagian orang tua murid kelas X DKV khawatir anak mereka hanya "bermain komputer" karena kurang memahami bagaimana proyek desain grafis mendukung kompetensi kerja. Langkah komunikasi dan kolaborasi guru yang paling konstruktif adalah ....',
    options: [
      'Menjawab singkat melalui pesan teks bahwa hal tersebut sudah sesuai kurikulum nasional.',
      'Mengirimkan daftar istilah bahasa Inggris desain grafis agar orang tua mempelajarinya sendiri.',
      'Mengundang orang tua dalam gelar karya mini yang menampilkan proses sketsa hingga portofolio solusi desain bagi UMKM, sambil menjelaskan dengan bahasa sederhana kaitan keterampilan tersebut dengan kesiapan karier.',
      'Menghindari diskusi dengan orang tua agar tidak memicu perdebatan mengenai jam praktik lab.',
      'Menugaskan murid membuat makalah panjang tentang sejarah desain untuk ditandatangani orang tua.',
    ],
    answer: 2,
    explanation:
      'Komunikasi bermitra dalam Tri Pusat Pendidikan melibatkan bahasa yang mudah dipahami, bukti portofolio konkret karya anak, dan pelibatan orang tua dalam melihat kebermaknaan pembelajaran.',
  },
  {
    id: 'lms26-dkv-11',
    bank: 'PCK',
    topic: 'PCK DKV · Pembelajaran Mendalam 3M (P.3)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Guru DKV ingin mengubah pelajaran pembuatan media kampanye sosial dari sekadar latihan menyalin contoh desain di internet menjadi pengalaman belajar yang berkesadaran, bermakna, dan menggembirakan. Rancangan yang paling mencerminkan ketiga prinsip tersebut adalah ....',
    options: [
      'Murid mengikuti kuis tebak nama ikon perangkat lunak secara cepat lalu mendesain kartu ucapan bebas.',
      'Murid mengobservasi langsung masalah informasi di lingkungan sekolah/warga (seperti alur pilah sampah), merancang purwarupa media informasi visual, menguji keterbacaannya pada pengguna nyata, dan merefleksikan dampaknya.',
      'Guru menayangkan video inspirasi agensi desain kelas dunia lalu meminta murid merangkum isinya di buku catatan.',
      'Murid berlomba meniru ulang poster iklan komersial populer sepersis mungkin dalam waktu satu jam.',
      'Guru mendemonstrasikan langkah demi langkah fitur aplikasi sementara seluruh murid menirukan klik yang sama.',
    ],
    answer: 1,
    explanation:
      'Pembelajaran Mendalam (3M) terwujud saat murid sadar akan tujuan dan refleksinya (berkesadaran), mengerjakan isu nyata bermakna bagi lingkungan sekitar (bermakna), serta antusias menguji karyanya secara aktif (menggembirakan).',
  },
  {
    id: 'lms26-dkv-12',
    bank: 'PCK',
    topic: 'PCK DKV · Pengembangan Profesi & Lesson Study (S.3)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.3',
    prompt:
      'Setelah membandingkan hasil asesmen dua kelas paralel DKV pada materi penyampaian pesan visual, Bu Nia mendapati kelas yang diajarnya cenderung menghasilkan karya seragam dan kaku, sementara kelas rekan sejawatnya lebih kaya eksplorasi ide. Sikap profesional reflektif Bu Nia yang paling tepat adalah ....',
    options: [
      'Menyimpulkan bahwa murid di kelasnya memang memiliki bakat visual yang lebih rendah dibanding kelas lain.',
      'Mengubah rubrik penilaiannya agar karya yang seragam tetap mendapat nilai tinggi.',
      'Mengajak rekan sejawat berdiskusi melalui komunitas belajar MGMP sekolah/Lesson Study untuk mengamati strategi pemantik ide, mencoba penyesuaian di kelasnya, dan memantau perkembangannya.',
      'Mengganti seluruh rencana pembelajaran menjadi tugas individu tanpa diskusi lagi.',
      'Meminta siswa kelasnya menyontoh portofolio kelas sebelah agar hasil akhirnya tampak beragam.',
    ],
    answer: 2,
    explanation:
      'Pola pikir bertumbuh guru bersama komunitas pembelajaran (Kombel/MGMP/Lesson Study) mengubah data kesenjangan hasil menjadi bahan refleksi praktik dan kolaborasi peningkatan mutu ajar.',
  },
  {
    id: 'lms26-dkv-13',
    bank: 'PCK',
    topic: 'PCK DKV · Evaluasi Rubrik & Asesmen Otentik (P.6)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Bu Rika mengevaluasi instrumen penilaian proyek kampanye visual kelas XI DKV agar benar-benar mencerminkan ketercapaian tujuan pembelajaran dan prinsip asesmen adil. Tentukan kesesuaian setiap pernyataan praktik penilaian berikut (Sesuai / Tidak Sesuai).',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Rubrik menilai keseluruhan alur perancangan (riset audiens, ketepatan pesan visual, dan eksekusi karya), bukan semata-mata keindahan tampilan akhir.',
        answer: 0,
      },
      {
        text: 'Siswa dengan kekuatan berbeda (ilustrasi manual, desain digital, atau storytelling audio-visual) dapat memilih bentuk sajian selama diukur dengan rubrik tujuan komunikasi yang sama.',
        answer: 0,
      },
      {
        text: 'Kriteria penilaian dirahasiakan hingga akhir semester agar murid tidak sekadar bekerja mengejar indikator rubrik.',
        answer: 1,
      },
      {
        text: 'Nilai proyek kelompok diberikan seragam untuk semua anggota tanpa menelusuri kontribusi dan pemahaman konseptual masing-masing murid.',
        answer: 1,
      },
    ],
    explanation:
      'Asesmen autentik dan prinsip DUP menuntut rubrik transparan yang selaras tujuan pembelajaran, menghargai keragaman cara ekspresi (firm goals, flexible means), serta mengukur proses dan kontribusi individu.',
  },
  {
    id: 'lms26-dkv-14',
    bank: 'PCK',
    topic: 'PCK DKV · Manajemen Kerja Kelompok & KSE CASEL (P.3)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Dalam proyek PjBL kolaborasi produksi media informasi di kelas XI DKV, guru menemukan dinamika kelompok berupa siswa yang mendominasi perangkat dan siswa lain yang hanya menjadi penonton pasif. Tentukan apakah langkah fasilitasi guru berikut Tepat atau Kurang Tepat.',
    categories: ['Tepat', 'Kurang Tepat'],
    statements: [
      {
        text: 'Memfasilitasi refleksi peran dalam kelompok dan membagi tanggung jawab spesifik yang dirotasi (periset pesan, konseptor sketsa, penyunting visual, presenter).',
        answer: 0,
      },
      {
        text: 'Langsung mengganti proyek kolaboratif menjadi tugas individual untuk selamanya agar tidak ada konflik.',
        answer: 1,
      },
      {
        text: 'Membuat kesepakatan alur kerja kelompok dan daftar cek refleksi diri tiap pertemuan untuk melatih keterampilan berelasi dan tanggung jawab.',
        answer: 0,
      },
      {
        text: 'Mengabaikan konflik di kelompok karena membiarkan siswa saling menyingkirkan dianggap bagian latihan mental kerja.',
        answer: 1,
      },
    ],
    explanation:
      'Manajemen pembelajaran kolaboratif yang berpusat pada murid memfasilitasi dialog, pembagian peran adil, dan evaluasi proses kerja kelompok untuk mengembangkan KSE berelasi serta tanggung jawab.',
  },
  {
    id: 'lms26-dkv-15',
    bank: 'PCK',
    topic: 'PCK DKV · Etika Profesi & Keamanan Belajar (K.1)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.1',
    prompt:
      'Dalam penyelenggaraan pembelajaran berbasis proyek nyata (Teaching Factory DKV) yang bekerja sama dengan mitra luar sekolah, guru menghadapi beberapa dilema etika dan keselamatan belajar. Tentukan apakah keputusan guru berikut Etis atau Tidak Etis.',
    categories: ['Etis', 'Tidak Etis'],
    statements: [
      {
        text: 'Memastikan seluruh karya murid yang dipakai mitra mendapatkan pengakuan kredit pencipta yang jelas serta tidak mengeksploitasi jam belajar murid untuk kejar tayang komersial.',
        answer: 0,
      },
      {
        text: 'Meminta murid lembur hingga larut malam menyelesaikan pesanan luar sekolah dengan janji nilai tambah meski melanggar jadwal belajar aman.',
        answer: 1,
      },
      {
        text: 'Memeriksa kelayakan ergonomi ruang kerja komputer serta pencahayaan studio praktik sekaligus mengedukasi jeda istirahat mata berkala demi kesehatan murid.',
        answer: 0,
      },
      {
        text: 'Mengganti karya murid yang belum sempurna dengan hasil desain buatan guru sendiri agar terlihat memuaskan di mata pengawas maupun mitra.',
        answer: 1,
      },
    ],
    explanation:
      'Integritas dan keberpihakan guru menjaga keaslian proses belajar murid, kesehatan fisik-mental di ruang praktik, serta keadilan penghargaan hak karya siswa dalam TeFa.',
  },
  {
    id: 'lms26-dkv-16',
    bank: 'PCK',
    topic: 'PCK DKV · Tujuan Pendidikan Vokasi & Kurikulum Adaptif (PF.1)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.1',
    prompt:
      'Sebagai guru produktif DKV yang menyelaraskan pembelajaran dengan tujuan pendidikan menengah kejuruan dan kebutuhan karakter Profil Lulusan, indikator pembelajaran bermakna mana sajakah yang PALING penting diprioritaskan? (Pilih semua yang benar)',
    options: [
      'Menghubungkan kompetensi perancangan pesan visual dengan pemahaman kebutuhan nyata pengguna, konteks sosial-budaya, dan etika komunikasi.',
      'Mengembangkan kemandirian belajar sepanjang hayat, kemampuan refleksi atas kritik karya, serta kolaborasi tim lintas peran.',
      'Menanamkan kesadaran hak cipta, kejujuran portofolio orisinal, dan kesiapan beradaptasi terhadap perubahan teknologi kreatif.',
      'Menghafalkan seluruh daftar menu pintasan perangkat lunak tertentu tanpa mempelajari prinsip komunikasi visual.',
      'Membatasi pembelajaran hanya pada meniru template desain yang sedang tren agar seluruh siswa cepat mendapat nilai seragam.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Penguasaan tujuan pendidikan SMK DKV menekankan nalar komunikasi visual, etika profesi digital, kolaborasi, dan kemampuan adaptif jangka panjang, bukan hafalan menu software semata.',
  },
  {
    id: 'lms26-dkv-17',
    bank: 'PCK',
    topic: 'PCK DKV · Perancangan Strategi Pengajaran Konsep (PF.3)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Dalam asesmen awal kelas X DKV, guru mendapati murid mampu membuat desain penuh hiasan warna-warni di komputer, tetapi pesan inti informasi gagal ditangkap pembaca. Strategi pembelajaran manakah yang tepat untuk menjembatani miskonsepsi bahwa "desain bagus sama dengan banyak hiasan"? (Pilih semua yang benar)',
    options: [
      'Meminta murid membandingkan dua contoh media informasi yang jelas vs membingungkan melalui analisis studi kasus sebelum menyentuh perangkat lunak.',
      'Menerapkan skema kerja bertahap (scaffolding) mulai dari menyusun urutan prioritas informasi di sketsa kertas sebelum menambahkan elemen dekoratif.',
      'Memfasilitasi uji keterbacaan singkat oleh teman sejawat untuk mengecek apakah pesan utama dapat langsung dipahami dalam beberapa detik.',
      'Langsung memberikan skor rendah disertai hukuman membuat sepuluh poster baru dalam satu minggu.',
      'Melarang penggunaan warna dan gambar selamanya hingga murid lulus kelas X.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Mengatasi miskonsepsi konseptual memerlukan perbandingan contoh kontras, scaffolding prioritas gagasan sebelum hiasan, dan umpan balik nyata dari pembaca.',
  },
  {
    id: 'lms26-dkv-18',
    bank: 'PCK',
    topic: 'PCK DKV · Praktik Inovatif & PTK (PF.5)',
    prodiScope: ['dkv'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.5',
    prompt:
      'Pak Hendra melakukan Penelitian Tindakan Kelas (PTK) di kelas XI DKV karena murid sering menyerah sebelum menyelesaikan revisi proyek desain. Praktik perbaikan pembelajaran yang relevan dan empiris untuk diuji pada siklus berikutnya meliputi .... (Pilih semua yang benar)',
    options: [
      'Menyediakan kartu panduan refleksi diri terstruktur untuk membantu murid memecah masalah revisi menjadi langkah kecil yang terukur.',
      'Menerapkan siklus umpan balik bertahap antarsesama murid (peer critique) sebelum penilaian sumatif.',
      'Mendokumentasikan jurnal kemajuan draf karya murid secara berkala untuk mengamati efektivitas perubahan strategi mengajar.',
      'Menurunkan standar ketuntasan agar seluruh siswa dinyatakan berhasil tanpa revisi karya.',
      'Menyalin laporan PTK dari sekolah lain dan mengganti nama sekolah sebagai bukti administrasi.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pengembangan praktik profesional secara konseptual dan empiris (PF.5) dilakukan lewat refleksi terdata, scaffolding revisi karya, dan pengamatan dampak strategi baru secara jujur.',
  },

  // ================= TATA BOGA SMK (26 BUTIR) =================
  {
    id: 'lms26-boga-01',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Asesmen Awal & Kesiapan Praktik (P.6)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Di awal unit praktik pengolahan hidangan di kelas X Tata Boga, Bu Sari mendapati kesiapan murid sangat beragam: sebagian sudah terbiasa membantu usaha kuliner keluarga di rumah, sebagian hanya mengenal teori bahan makanan dari buku, dan beberapa murid belum terbiasa mengelola peralatan dapur dengan aman. Tindakan asesmen awal dan tindak lanjut paling tepat dilakukan Bu Sari sebelum praktik dimulai adalah ....',
    options: [
      'Langsung menyuruh seluruh kelas memasak hidangan kompleks bersamaan agar yang belum terbiasa cepat menyesuaikan diri.',
      'Melakukan asesmen diagnostik keterampilan dasar dan observasi awal, lalu memetakan pendampingan bertahap sesuai tingkat kesiapan murid sebelum tugas mandiri.',
      'Menyuruh murid yang sudah mahir menunggu dan hanya membaca ulang buku resep sementara murid lain belajar dasar.',
      'Memakai nilai rapor SMP sebagai penentu tetap kelompok kerja hingga lulus kelas XII.',
      'Memberikan tes hafalan nama-nama alat dapur selama dua jam sebelum membolehkan siswa melihat dapur praktik.',
    ],
    answer: 1,
    explanation:
      'Asesmen awal di kelas praktik bertujuan memetakan kesiapan konseptual dan keterampilan dasar agar guru dapat memberi pendampingan bertahap yang aman dan efektif.',
  },
  {
    id: 'lms26-boga-02',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Pemahaman Mendalam vs Hafalan Resep (P.1)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Pada mata pelajaran Boga Dasar, hampir seluruh murid mampu menuliskan langkah-langkah resep hidangan dengan hafal di luar kepala. Namun ketika salah satu bahan lokal pengganti tersedia atau alat pengatur suhu berbeda, mereka kebingungan dan masakan gagal. Strategi pembelajaran paling tepat untuk membangun pemahaman konseptual dan transfer pengetahuan adalah ....',
    options: [
      'Menambah tugas menyalin dan menghafal dua puluh resep standar baru setiap minggu.',
      'Memfasilitasi murid menganalisis fungsi ilmiah tiap kelompok bahan serta prinsip perpindahan panas melalui eksperimen terarah, lalu membandingkan hasilnya sebelum merancang variasi resep mandiri.',
      'Melarang segala bentuk substitusi bahan di laboratorium sekolah agar murid tetap mengikuti satu buku resep saja.',
      'Membagikan lembaran jawaban langkah demi langkah ketika ada bahan yang habis di pasar.',
      'Menayangkan video memasak koki profesional berdurasi satu jam tanpa tanya jawab.',
    ],
    answer: 1,
    explanation:
      'Pembelajaran bermakna dan mendalam (P.1) membawa murid memahami konsep alasan di balik prosedur ("mengapa"), bukan sekadar menghafal urutan resep ("bagaimana") sehingga mampu beradaptasi pada situasi baru.',
  },
  {
    id: 'lms26-boga-03',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Teaching at the Right Level / Diferensiasi (P.2)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Hasil observasi tengah unit Tata Boga menunjukkan tiga kondisi: 8 murid sudah lancar menyusun rencana kerja mandiri dan menjaga konsistensi mutu hidangan, 12 murid mampu mengikuti instruksi visual tetapi sering keliru mengatur urutan persiapan bahan, serta 6 murid masih ragu memegang peralatan kerja karena cemas berbuat salah. Langkah pembelajaran yang paling responsif adalah ....',
    options: [
      'Memberikan satu jenis modul cetak padat teks yang sama persis untuk seluruh kelas.',
      'Menurunkan standar kelulusan murid yang cemas agar mereka cepat selesai praktik bersama kelompok lain.',
      'Menyediakan tiga jalur dukungan: proyek variasi penyajian bagi yang mahir, kartu panduan alur persiapan visual bagi kelompok tengah, dan bimbingan bertahap ruang aman tanpa tekanan bagi yang masih cemas.',
      'Menyerahkan kelompok yang ragu kepada teman sebayanya sepenuhnya agar guru fokus menguji kelompok mahir.',
      'Mengulang ceramah teori tata laksana dapur dari awal bagi seluruh kelas selama dua pertemuan.',
    ],
    answer: 2,
    explanation:
      'Diferensiasi dan TaRL menyesuaikan dukungan proses dan scaffolding sesuai tingkat kesiapan aktual sambil memelihara tujuan belajar dan rasa aman seluruh murid.',
  },
  {
    id: 'lms26-boga-04',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Pembelajaran Berkesadaran, Bermakna, Menggembirakan (P.3)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Bu Nita mengajar topik pengemasan dan penyajian hidangan pangan sehat di kelas XI Tata Boga. Rancangan pembelajaran manakah yang paling kuat mewujudkan proses berkesadaran, bermakna, dan menggembirakan secara bersamaan?',
    options: [
      'Murid mendengarkan penjelasan guru tentang definisi pangan bergizi lalu mengerjakan 25 soal pilihan ganda daring berhadiah.',
      'Murid mewawancarai warga kantin sekolah tentang kebiasaan jajan, merancang inovasi kudapan bergizi terjangkau, melakukan uji rasa teman sebaya, dan merefleksikan perbaikan gizi serta kemasannya.',
      'Guru memberikan poin tambahan bagi murid yang paling cepat meniru bentuk penyajian foto dari majalah.',
      'Murid membaca buku paket bab gizi pangan secara mandiri di rumah dan mengumpulkan ringkasannya.',
      'Guru memutar film dokumenter kuliner mancanegara lalu memberi tugas mengomentari keindahan warna masakannya.',
    ],
    answer: 1,
    explanation:
      'Mengamati masalah nyata warga sekolah membuat pembelajaran bermakna, uji karya aktif menjadikan pengalaman menggembirakan, dan refleksi proses mengembangkan kesadaran belajar murid.',
  },
  {
    id: 'lms26-boga-05',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Integrasi TIK Kritis & TPACK (P.4)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Sekolah menyediakan akses internet dan perangkat tablet di ruang kelas Tata Boga, tetapi jam penggunaan dapur praktik dan bahan praktik terbatas. Pemanfaatan teknologi yang paling kritis dan kreatif untuk memperdalam pemahaman murid sebelum masuk dapur adalah ....',
    options: [
      'Menggantikan seluruh buku resep kertas dengan berkas PDF yang dibagikan di grup percakapan.',
      'Meminta murid mencatat ulang seluruh video memasak dari media sosial tanpa menganalisis tahap kritisnya.',
      'Menggunakan video interaktif berjeda dan simulasi perencanaan alur kerja digital untuk mengidentifikasi titik rawan kegagalan serta kesalahan sanitasi sebelum melakukan praktik riil.',
      'Mengadakan kuis hafalan nama bumbu setiap pagi melalui aplikasi ponsel berdurasi lima menit.',
      'Menampilkan salinan teks buku paket melalui proyektor agar siswa lebih mudah menyalin ke buku tulis.',
    ],
    answer: 2,
    explanation:
      'Integrasi TIK yang bermakna bukan sekadar alih media PDF/salindia, melainkan memakai simulasi dan analisis video interaktif untuk melatih penalaran proses dan kesiapan praktik.',
  },
  {
    id: 'lms26-boga-06',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Culturally Responsive Teaching & Potensi Lokal (P.5)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Sebuah SMK Tata Boga berada di kawasan pedesaan penghasil umbi-umbian lokal dan gula kelapa tradisional, sedangkan selama ini proyek praktik selalu memakai bahan impor mahal yang sulit diperoleh murid di rumah. Pendekatan berbasis sumber belajar lokal (CRT & P.5) yang paling tepat dilakukan guru adalah ....',
    options: [
      'Meminta murid menghafalkan nama bahan lokal pada tabel pengetahuan bahan lalu kembali memakai bahan impor.',
      'Mengajak murid meneliti nilai ekonomi-gizi bahan lokal sekitar, berdiskusi dengan pelaku olahan tradisional setempat, serta menginovasikan produk kuliner modern berbahan umbi lokal.',
      'Mengadakan festival memakai pakaian adat saat ujian praktik hidangan kontinental barat.',
      'Mengharuskan keluarga murid menyumbangkan hasil panen rumah untuk persediaan dapur sekolah tanpa integrasi belajar.',
      'Mengurangi jumlah jam praktik memasak dan mengalihkannya menjadi pelajaran membaca katalog produk impor.',
    ],
    answer: 1,
    explanation:
      'Pemanfaatan potensi lingkungan, kearifan lokal, dan pengetahuan keluarga murid menjadikan inovasi pangan relevan dengan realitas hidup mereka serta melatih nalar kejuruan kreatif.',
  },
  {
    id: 'lms26-boga-07',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Umpan Balik Konstruktif & Rubrik (P.6)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Saat mengoreksi hasil praktik pengolahan kue seorang murid yang teksturnya kurang mengembang dan penyajiannya kurang rapi, guru ingin memberikan umpan balik yang benar-benar memampukan murid memperbaiki kinerjanya pada praktik berikutnya. Pernyataan umpan balik paling efektif adalah ....',
    options: [
      '"Kuenya belum sesuai standar penilaian, silakan latihan lebih giat lagi di rumah minggu ini."',
      '"Nilaimu masih di bawah kriteria ketercapaian karena belum bisa menyamai hasil kelompok A."',
      '"Kebersihan area kerjamu sudah sangat tertib dan penataan hiasannya rapi. Bagian dalam kue masih padat kemungkinan karena pengadukan adonan terlalu lama setelah tepung masuk; di percobaan berikutnya coba teknik lipat secukupnya lalu amati perubahannya."',
      '"Karya ini gagal total, tolong baca ulang resep dari awal sampai akhir sebelum ujian bulan depan."',
      '"Rasanya sudah lumayan enak kok, pertahankan saja semangat belajarnya di kelas."',
    ],
    answer: 2,
    explanation:
      'Umpan balik formatif bermakna memadukan pengakuan kekuatan nyata karya (feed-back), diagnosis penyebab spesifik kesalahan proses, dan langkah perbaikan konkret ke depan (feed-forward).',
  },
  {
    id: 'lms26-boga-08',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Etika & Kejujuran Akademik di Dapur Praktik (K.1)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.1',
    prompt:
      'Menjelang penilaian proyek pameran sekolah, sekelompok murid diam-diam membeli kue jadi dari toko luar untuk disajikan seolah-olah hasil buatan tim mereka sendiri karena produk olahan mereka sempat gosong. Sebagai teladan etika dan integritas, tindakan guru yang paling tepat adalah ....',
    options: [
      'Menutup mata demi menjaga nama baik kelas di hadapan tamu pameran dan kepala sekolah.',
      'Memarahi kelompok tersebut secara terbuka di tengah keramaian tamu agar menjadi peringatan keras.',
      'Mengajak kelompok berdialog pribadi mengenai nilai kejujuran proses, mengganti sajian dengan apa yang berhasil mereka perbaiki bersama, dan membimbing refleksi manajemen waktu.',
      'Langsung mengeluarkan murid tersebut dari program keahlian Tata Boga pada hari yang sama.',
      'Memberikan nilai sempurna asalkan kelompok berjanji tidak mengulanginya pada semester depan.',
    ],
    answer: 2,
    explanation:
      'Keteladanan etika (K.1) memadukan ketegasan menjaga kejujuran ilmiah/profesional dengan pembimbingan empatik yang menghargai martabat murid serta kesempatan belajar dari kegagalan.',
  },
  {
    id: 'lms26-boga-09',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Refleksi Guru & Lesson Study (K.2)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.2',
    prompt:
      'Dalam tahap evaluasi sesudah mengajar dua kelas paralel Tata Boga, Pak Dedi melihat kelas yang memakai lembar daftar cek kendali mutu mandiri menyelesaikan praktik lebih tertib daripada kelas yang ia arahkan terus-menerus secara lisan. Sikap refleksi berkelanjutan yang paling mencerminkan Growth Mindset guru adalah ....',
    options: [
      'Beranggapan bahwa karakter anak di kelas kedua memang lebih sulit diatur sejak SMP.',
      'Mencatat perbedaan respons murid, berdiskusi dengan guru pamong atau rekan MGMP untuk menelaah strategi kemandirian murid, lalu mengujicobakan panduan visual di kelas kedua dan memantau hasilnya.',
      'Menghilangkan kegiatan praktik berkelompok pada kelas kedua karena dianggap tidak siap.',
      'Memberi instruksi lisan yang lebih keras lagi agar siswa di kelas kedua mau mendengar.',
      'Menyamakan nilai kedua kelas secara administratif agar laporan kinerja tampak seragam.',
    ],
    answer: 1,
    explanation:
      'Guru reflektif (K.2) melihat perbedaan capaian antar-kelas sebagai umpan balik atas strateginya sendiri, bukan sekadar menyalahkan murid, lalu melakukan uji perbaikan terukur.',
  },
  {
    id: 'lms26-boga-10',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Konsistensi Budaya Aman & Pencegahan Kecemasan (K.3)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.3',
    prompt:
      'Saat praktik penggunaan alat potong dan kompor di kelas X, seorang murid baru tampak gemetar dan menumpahkan bahan karena takut dimarahi seperti pengalaman masa lalunya, sehingga beberapa teman mulai mencemooh. Tindakan konsisten guru dalam menjaga budaya belajar aman dan potensi murid adalah ....',
    options: [
      'Meminta murid tersebut hanya bertugas mencatat resep di pojok ruangan hingga semester berakhir.',
      'Menghentikan cemoohan dengan tegas tanpa mempermalukan siapa pun, menenangkan murid tersebut, menegaskan aturan keselamatan kerja dan budaya saling mendukung di dapur, lalu mendampinginya bertahap.',
      'Membiarkan cemoohan berlalu karena pekerja dapur profesional memang harus tahan tekanan keras.',
      'Mengambil alih seluruh tugas kelompok agar target penyajian tidak terlambat.',
      'Menegur murid tersebut supaya tidak manja jika ingin lulus dari sekolah kejuruan.',
    ],
    answer: 1,
    explanation:
      'Budaya belajar yang aman dan berpihak pada murid melarang perundungan dalam bentuk apa pun serta memberi ruang pendampingan bertahap agar rasa percaya diri murid tumbuh.',
  },
  {
    id: 'lms26-boga-11',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Komunikasi Inklusif & Empatik (S.1)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.1',
    prompt:
      'Salah satu murid kelas XI Tata Boga memiliki hambatan pendengaran ringan yang mengandalkan pembacaan gerak bibir dan petunjuk visual, tetapi suasana dapur praktik sering bising oleh alat penghisap asap dan obrolan kelompok. Penyesuaian komunikasi inklusif yang paling tepat diterapkan guru adalah ....',
    options: [
      'Meminta teman sebangkunya menyalin seluruh penjelasan lisan guru seusai pelajaran berlangsung.',
      'Menempatkan murid pada area yang berhadapan jelas dengan wajah guru saat pengarahan, memadukan isyarat tangan disepakati serta kartu instruksi visual berlaminasi tahan air untuk setiap stasiun kerja.',
      'Berbicara dengan suara jauh lebih keras di tengah kebisingan dapur tanpa mengubah posisi maupun alat bantu.',
      'Menyarankan murid pindah dari praktik kelompok ke tugas tulis di perpustakaan saat mesin dapur menyala.',
      'Mengurangi tuntutan kualitas produk hanya untuk murid tersebut agar tidak tertinggal teman lain.',
    ],
    answer: 1,
    explanation:
      'Komunikasi inklusif (S.1 & DUP) memanfaatkan saluran multimodal (kontak wajah, isyarat, dan instruksi visual) sehingga hambatan kebisingan lingkungan tidak menghalangi partisipasi setara.',
  },
  {
    id: 'lms26-boga-12',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Kolaborasi Dunia Kerja & Orang Tua (S.2)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.2',
    prompt:
      'Sekolah ingin mengembangkan unit pembelajaran Kewirausahaan Kue Kering agar relevan dengan kebiasaan keluarga murid dan peluang pasar sekitar sekolah. Bentuk kolaborasi dengan orang tua dan masyarakat yang paling berdampak langsung bagi mutu belajar murid adalah ....',
    options: [
      'Mengirimkan surat edaran agar orang tua wajib membeli produk praktik anak mereka setiap bulan.',
      'Menghadirkan orang tua atau pelaku usaha kue rumahan lokal sebagai narasumber berbagi praktik menjaga konsistensi rasa dan pengelolaan pesanan, lalu murid menerapkannya dalam proyek penjualan sekolah.',
      'Membagikan hasil nilai rapor tengah semester lewat grup pesan instan sambil memuji murid nilai tertinggi.',
      'Meminta orang tua menyiapkan bahan praktik dari rumah agar biaya sekolah berkurang.',
      'Menyelenggarakan rapat penyampaian tata tertib seragam dapur sekali setahun.',
    ],
    answer: 1,
    explanation:
      'Kemitraan Tri Pusat Pendidikan memposisikan keluarga dan pelaku usaha lokal sebagai sumber pengetahuan otentik yang memperkaya pembelajaran kontekstual peserta didik.',
  },
  {
    id: 'lms26-boga-13',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Pengembangan Keprofesian Berkelanjutan (S.3)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.3',
    prompt:
      'Bu Ani menemukan model lembar refleksi proses praktik dapur yang efektif menurunkan angka pemborosan bahan makanan di kelasnya. Agar memberi dampak berkelanjutan bagi pengembangan profesi, langkah terbaik yang dilakukannya adalah ....',
    options: [
      'Menyimpan lembar kerja tersebut untuk kelasnya sendiri agar nilainya tetap unggul dibanding guru lain.',
      'Membagikan perangkat tersebut di komunitas belajar sekolah/MGMP Tata Boga, membuka ruang kritik perbaikan bersama, dan mengevaluasi efektivitas penerapannya lintas kelas.',
      'Membuat artikel promosi di media sosial pribadinya tanpa melibatkan tim pengajar lain.',
      'Menyerahkan lembar tersebut ke bagian tata usaha sebagai arsip administrasi akhir tahun.',
      'Mengganti seluruh jadwal mengajar guru lain agar mengikuti cara mengajarnya.',
    ],
    answer: 1,
    explanation:
      'Kompetensi Sosial S.3 menekankan partisipasi aktif dalam komunitas pembelajaran dan organisasi profesi untuk berbagi inovasi, saling menguji gagasan, dan berkembang bersama.',
  },
  {
    id: 'lms26-boga-14',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Tujuan Pendidikan & Profil Lulusan (PF.1)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.1',
    prompt:
      'Mengacu pada tujuan pendidikan kejuruan dan kebutuhan karakter kerja di bidang Tata Boga, asesmen sumatif praktik proyek akhir kelas XII paling bermakna apabila dirancang untuk mengukur ....',
    options: [
      'Kecepatan menghafalkan istilah asing nama saus dalam ujian tertulis berdurasi tiga jam.',
      'Integrasi kemampuan merencanakan alur produksi higienis, bekerja dalam tim dengan etika layanan, memecahkan kendala di dapur, dan merefleksikan perbaikan mutu produk.',
      'Banyaknya jumlah jenis hiasan piring mewah yang ditiru dari katalog hotel bintang lima.',
      'Kepatuhan menghafalkan jumlah halaman buku teks keselamatan kerja.',
      'Kemampuan memproduksi satu resep yang diulang-ulang secara persis sejak kelas X.',
    ],
    answer: 1,
    explanation:
      'Tujuan pendidikan SMK tidak hanya melatih keterampilan mekanis, melainkan memadukan kesiapan nalar kerja, higienitas profesional, etika kolaborasi, dan kemampuan pemecahan masalah nyata.',
  },
  {
    id: 'lms26-boga-15',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Konsep Ilmu Gizi & Miskonsepsi Murid (PF.2)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam diskusi perancangan menu sehat di kelas X Tata Boga, sebagian besar murid meyakini bahwa menu tanpa nasi sama sekali tidak mengandung zat tenaga, serta menganggap sayuran berwarna pucat selalu tidak bergizi. Pendekatan penguasaan materi yang tepat untuk meluruskan miskonsepsi tersebut adalah ....',
    options: [
      'Menyuruh murid menyalin ulang daftar tabel komposisi zat gizi pangan di papan tulis hingga akhir jam.',
      'Menghadirkan beragam sumber bahan pangan pokok dan sayuran nyata agar murid menganalisis kandungan zat gizinya, membandingkan klaim awal dengan bukti ilmiah, lalu merancang kombinasi menu seimbang.',
      'Melarang murid memakai bahan pokok selain nasi dalam tugas perencanaan menu.',
      'Memberikan hukuman meringkas bab pencernaan dari buku biologi.',
      'Menyatakan keyakinan murid tersebut benar karena sesuai kebiasaan makan keluarga sehari-hari.',
    ],
    answer: 1,
    explanation:
      'Penguasaan disiplin ilmu secara pedagogis (PF.2/PCK) mendorong pembuktian konseptual dengan menganalisis variasi bahan nyata agar murid meninggalkan miskonsepsi dan memahami kesetaraan fungsi gizi.',
  },
  {
    id: 'lms26-boga-16',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Karakteristik Materi & Kebutuhan Belajar (PF.3)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Sebagian murid kelas XI Tata Boga lancar mengikuti praktik rutin jika langkahnya ditulis persis seperti resep harian, tetapi kesulitan menjawab ketika ditanya mengapa hasil produk berubah warna atau teksturnya gagal. Kondisi pemahaman tersebut menunjukkan bahwa ....',
    options: [
      'Murid sudah mencapai penguasaan konseptual penuh karena produk rutinnya sering habis terjual.',
      'Murid baru menguasai prosedur operasional permukaan dan belum membangun pemahaman konsep prinsip pengolahan di baliknya sehingga sulit menalar sebab-akibat.',
      'Soal evaluasi guru terlalu rumit bagi siswa SMK yang seharusnya fokus pada kecepatan tangan saja.',
      'Alat dapur di sekolah tidak layak pakai untuk mengajarkan prinsip dasar tata boga.',
      'Murid mengalami hambatan konsentrasi permanen saat berada di lingkungan dapur.',
    ],
    answer: 1,
    explanation:
      'Ciri pemahaman dangkal (prosedural tanpa konseptual) adalah mampu mengulang urutan langkah hafalan namun gagal menalar alasan di balik perubahan fisik/kimia makanan.',
  },
  {
    id: 'lms26-boga-17',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Adaptasi Kurikulum & Perkembangan Zaman (PF.4)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.4',
    prompt:
      'Setelah mengevaluasi umpan balik dari mitra industri kuliner dan hasil asesmen akhir tahun, tim pengajar Tata Boga menemukan lulusan kesulitan menyesuaikan produk untuk konsumen yang memiliki pembatasan diet/alergi pangan tertentu. Langkah penyesuaian kurikulum operasional sekolah yang paling adaptif adalah ....',
    options: [
      'Menambah jam teori memasak klasik dengan memangkas jam pembelajaran kewirausahaan.',
      'Menambahkan modul dan proyek autentik penyesuaian menu ramah alergi serta pelabelan informasi bahan yang transparan pada alur tujuan pembelajaran kelas XI–XII.',
      'Mengganti seluruh buku cetak di perpustakaan dengan buku resep luar negeri.',
      'Meminta murid mempelajari penanganan alergi pangan secara otodidak sesudah lulus ujian sekolah.',
      'Membebaskan kelompok dari kewajiban mencatat komposisi alergen selama produk terasa enak.',
    ],
    answer: 1,
    explanation:
      'Pengembangan kurikulum adaptif (PF.4) menerjemahkan kebutuhan nyata masyarakat/industri serta temuan evaluasi ke dalam alur tujuan pembelajaran dan proyek kontekstual di kelas.',
  },
  {
    id: 'lms26-boga-18',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Praktik Profesional Inovatif & Keberlanjutan (PF.5)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.5',
    prompt:
      'Guru Tata Boga mengamati tingginya volume sisa bahan layak olah setelah jam praktik siswa selesai setiap minggu. Inisiatif praktik profesional inovatif berbasis pembiasaan ramah lingkungan yang paling bermakna bagi pembelajaran murid adalah ....',
    options: [
      'Membuang seluruh sisa bahan secepat mungkin ke tempat sampah luar agar dapur cepat terlihat bersih.',
      'Merancang proyek kreatif pengelolaan bahan sisa layak pakai (zero-waste culinary) dan pemilahan sampah organik bersama tim sekolah sambil menilai kesadaran keberlanjutan murid.',
      'Mengurangi porsi praktik memasak murid menjadi setengah kali per bulan tanpa mencari solusi bahan.',
      'Mengharuskan murid membawa pulang bahan sisa meskipun mereka tidak menginginkannya.',
      'Memberikan denda uang kepada kelompok yang menghasilkan sisa potongan bahan paling banyak.',
    ],
    answer: 1,
    explanation:
      'Inovasi profesional guru (PF.5) mengubah persoalan nyata pengelolaan limbah dapur sekolah menjadi pengalaman proyek berkesadaran lingkungan (green skills).',
  },
  {
    id: 'lms26-boga-19',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Pendekatan Experiential Learning Kolb (P.1)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Dalam menerapkan pembelajaran berbasis pengalaman (Experiential Learning Kolb) setelah simulasi layanan pelanggan dan penyajian makanan selesai dilakukan murid, guru meminta setiap kelompok menuliskan perasaan mereka saat melayani keluhan, hambatan koordinasi tim, dan bagian proses yang berhasil maupun meleset. Aktivitas tersebut berada pada tahap ....',
    options: [
      'Concrete Experience',
      'Reflective Observation',
      'Abstract Conceptualization',
      'Active Experimentation',
      'Generalization',
    ],
    answer: 1,
    explanation:
      'Setelah pengalaman nyata (Concrete Experience), mengamati kembali apa yang terjadi, merasakan dinamika tim, dan mengenali hambatan termasuk tahap Reflective Observation sebelum merumuskan prinsip perbaikan.',
  },
  {
    id: 'lms26-boga-20',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Penilaian & Pelaporan Rapor Berbasis Bukti (P.6)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Berdasarkan catatan asesmen sumatif, Raka murid kelas X Tata Boga sangat cakap dalam menerapkan kebersihan pribadi dan kerja sama dapur, namun masih memerlukan pendampingan dalam mengatur waktu penyelesaian penyajian secara serentak. Deskripsi capaian laporan pembelajaran yang paling informatif dan mendidik adalah ....',
    options: [
      '"Raka anak yang baik dan rajin saat mengikuti pelajaran praktik kuliner semester ini."',
      '"Raka memperoleh nilai akhir 84 dan berada di urutan kedelapan terbaik dari seluruh kelas X Tata Boga."',
      '"Raka menunjukkan penguasaan sangat baik pada penerapan higienitas dan kolaborasi tim dapur, serta perlu pembiasaan lanjutan dalam manajemen urutan waktu persiapan hingga penyajian."',
      '"Raka harus lebih cekatan dan disiplin bekerja di dapur agar tidak kalah saing dengan teman sekelas."',
      '"Raka telah menuntaskan seluruh capaian pembelajaran praktik memasak tanpa catatan hambatan berarti."',
    ],
    answer: 2,
    explanation:
      'Pelaporan bermakna berbasis bukti menyebut kekuatan spesifik yang sudah dikuasai serta area perbaikan konkret yang perlu pendampingan lanjutan secara positif dan informatif.',
  },
  {
    id: 'lms26-boga-21',
    bank: 'PCK',
    topic: 'PCK Tata Boga · KSE CASEL & Pengelolaan Emosi di Dapur (P.3)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Menjelang penilaian akhir uji praktik masakan, suasana dapur sekolah sempat tegang hingga dua siswa bertengkar menyalahkan kesalahan kelompok atas hidangan yang kurang sempurna. Tentukan apakah tindakan guru berikut Sesuai atau Tidak Sesuai dengan prinsip pembelajaran sosial-emosional (SEL).',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Mengajak siswa jeda sejenak menenangkan diri, mengenali emosi yang muncul, lalu membimbing dialog penyelesaian masalah secara konstruktif.',
        answer: 0,
      },
      {
        text: 'Membentak kedua siswa di depan seluruh kelas dan mengancam membatalkan kelulusan ujian praktik mereka.',
        answer: 1,
      },
      {
        text: 'Memfasilitasi kesepakatan pembagian ulang peran tim yang adil agar proyek berlanjut tanpa saling menyalahkan.',
        answer: 0,
      },
      {
        text: 'Menyuruh salah satu siswa mengalah sepenuhnya meskipun perasaannya tidak didengar demi menghemat waktu praktik.',
        answer: 1,
      },
    ],
    explanation:
      'Keterampilan sosial-emosional CASEL (self-management, social awareness, relationship skills) diterapkan melalui teknik jeda pengelolaan emosi dan mediasi restoratif yang adil.',
  },
  {
    id: 'lms26-boga-22',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Analisis Butir & Tindak Lanjut Asesmen (P.6)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Hasil evaluasi tertulis unit Keamanan Pangan menunjukkan rata-rata kelas 80 (melampaui KKTP 75), namun analisis per butir mengungkap mayoritas kelas keliru memahami alasan pencegahan kontaminasi silang bahan mentah dan matang. Evaluasilah ketepatan pernyataan tindak lanjut berikut (Benar / Salah).',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Nilai rata-rata kelas yang tinggi dapat menutupi kelemahan spesifik, sehingga guru tetap wajib merancang penguatan ulang terarah khusus pada pencegahan kontaminasi silang.',
        answer: 0,
      },
      {
        text: 'Butir tentang kontaminasi silang perlu dibuang dari soal karena terbukti terlalu sulit dijawab sebagian besar siswa.',
        answer: 1,
      },
      {
        text: 'Guru melakukan pemeriksaan balik mengapa miskonsepsi terjadi, memadukan demonstrasi contoh nyata alur pemisahan alat, lalu mengecek ulang pemahaman siswa.',
        answer: 0,
      },
      {
        text: 'Karena rata-rata kelas sudah melampaui kriteria ketuntasan minimal, seluruh pembelajaran unit keamanan pangan otomatis dianggap berhasil tuntas.',
        answer: 1,
      },
    ],
    explanation:
      'Analisis butir asesmen mengungkap miskonsepsi kritis di balik angka rata-rata kelas; guru harus membenahi pengajaran pada indikator esensial tersebut, bukan mengabaikannya.',
  },
  {
    id: 'lms26-boga-23',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Kebijakan Layanan Inklusif & Akses Adil (K.3)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.3',
    prompt:
      'Guru Tata Boga menerima informasi dari wali murid bahwa seorang peserta didik tidak bisa mengikuti praktik olahan berbahan tertentu karena alasan keyakinan atau alergi kesehatan serius, sekaligus kesulitan membeli seragam praktik khusus akibat kendala ekonomi keluarga. Evaluasilah keadilan dan konsistensi langkah guru berikut (Tepat / Tidak Tepat).',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Berkomunikasi secara pribadi menjaga privasi murid dan orang tua untuk menyediakan bahan pengganti aman dengan target kompetensi memasak yang setara.',
        answer: 0,
      },
      {
        text: 'Mengumumkan kendala ekonomi keluarga anak tersebut di depan kelas agar teman-temannya bersedia patungan membantu.',
        answer: 1,
      },
      {
        text: 'Berkoordinasi dengan tim pengelola sekolah dan sarana guna menyiapkan fasilitas peminjaman celemek/perlengkapan kerja layak secara bijaksana.',
        answer: 0,
      },
      {
        text: 'Menggugurkan keikutsertaan murid dari proyek kuliner lalu menggantinya hanya dengan menyalin teks resep di bangku belakang.',
        answer: 1,
      },
    ],
    explanation:
      'Keputusan pedagogis dan kepribadian yang arif menjaga martabat murid, privasi kondisi keluarga, keselamatan alergi, dan keterlibatan penuh dengan bahan alternatif aman.',
  },
  {
    id: 'lms26-boga-24',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Prinsip Teaching Factory Berorientasi Belajar (PF.4)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.4',
    prompt:
      'Agar penyelenggaraan Teaching Factory (TeFa) Jasa Boga di SMK tidak sekadar memaksa siswa mengerjakan pesanan rutin seperti buruh produksi, melainkan benar-benar mengembangkan kompetensi abad ke-21 dan penguasaan materi mendalam, praktik yang HARUS diterapkan meliputi .... (Pilih semua yang benar)',
    options: [
      'Menyisipkan sesi refleksi pasca-produksi untuk mengevaluasi konsistensi mutu, kendala koordinasi, dan peluang inovasi layanan.',
      'Merotasi peran murid di setiap siklus agar seluruh murid belajar perencanaan, pengolahan, pengendalian mutu, pengemasan, dan pencatatan usaha.',
      'Menghubungkan kasus kendala pesanan nyata dengan analisis konsep pengolahan makanan dan komunikasi pelanggan secara kontekstual.',
      'Menempatkan satu murid terus-menerus pada tugas mencuci alat hingga lulus agar produksi pesanan berjalan super cepat.',
      'Menggantikan seluruh jam refleksi dan asesmen dengan pemenuhan target jumlah kemasan semata.',
    ],
    answer: [0, 1, 2],
    explanation:
      'TeFa sejati di SMK menempatkan proses belajar murid di atas produksi semata melalui rotasi peran, refleksi kritis, dan integrasi konsep dengan penyelesaian masalah nyata.',
  },
  {
    id: 'lms26-boga-25',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Peran Keterlibatan Orang Tua & Budaya Aman (S.2)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Sosial',
    subkompetensi: 'S.2',
    prompt:
      'Ketika menyelenggarakan proyek bazar pangan sehat bersama siswa kelas XI Tata Boga, langkah kolaboratif manakah yang paling tepat melibatkan orang tua, tenaga kependidikan, serta komunitas sekolah agar pengalaman belajar optimal? (Pilih semua yang benar)',
    options: [
      'Berkoordinasi dengan petugas pengelola ruang, bagian kesiswaan, dan kantin sekolah tentang kebersihan lokasi serta alur transaksi aman.',
      'Mengundang orang tua sebagai mitra pengamat umpan balik karya dan berbagi pengalaman kebiasaan makan sehat keluarga.',
      'Membimbing murid menyampaikan informasi bahan pangan dan alasan kesehatan produknya kepada warga sekolah secara komunikatif dan ramah.',
      'Menyerahkan seluruh persiapan, pengawasan kebersihan, dan transaksi bazar kepada orang tua agar murid cukup berfoto.',
      'Mengabaikan izin pengelolaan ruang sekolah karena proyek merupakan bagian dari jadwal mata pelajaran produktif.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Kolaborasi lintas unsur (S.2) memadukan sinergi tenaga kependidikan, warga sekolah, dan orang tua sebagai mitra pembelajaran yang tetap menempatkan murid sebagai subjek aktif.',
  },
  {
    id: 'lms26-boga-26',
    bank: 'PCK',
    topic: 'PCK Tata Boga · Scaffolding & ZPD Praktik Kuliner (P.1)',
    prodiScope: ['tata-boga'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Beberapa murid kelas X Tata Boga belum mampu menyusun perencanaan kerja dan menata tahapan pengolahan dua hidangan secara mandiri tanpa kesalahan urutan. Mengacu konsep ZPD dan scaffolding Vygotsky, dukungan guru yang tepat sebelum mengurangi bantuan secara bertahap mencakup .... (Pilih semua yang benar)',
    options: [
      'Menyediakan lembar bantu bagan alir urutan kerja dengan pengingat titik pemeriksaan kritis pada percobaan awal.',
      'Mengajukan pertanyaan pemandu ("Langkah mana yang harus disiapkan lebih dulu agar bahan tidak rusak menunggu?") daripada langsung memerintahkan.',
      'Mengurangi panduan daftar cek perlahan (fading) setelah murid terbukti konsisten merencanakan urutan kerjanya secara mandiri.',
      'Mengambil alih seluruh tahapan pembuatan makanan sampai selesai agar waktu praktik di dapur cepat usai.',
      'Membiarkan murid mencoba-coba tanpa panduan atau umpan balik apa pun sejak pertemuan pertama hingga ujian.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Scaffolding efektif menyediakan dukungan terstruktur di area ZPD (bagan bantu + pertanyaan pemantik) lalu menguranginya secara bertahap (fading) saat kemandirian murid bertumbuh.',
  },
];
