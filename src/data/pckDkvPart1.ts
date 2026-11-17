import type { ExamQuestion } from '../types/exam';

/**
 * Bank PCK Desain Komunikasi Visual (DKV) SMK - Bagian 1 (30 Soal):
 * 1. Prinsip Tata Letak (Layout), Hirarki Visual & Tipografi (10)
 * 2. Teori Warna, Manajemen Warna (RGB/CMYK/ICC) & Pracetak Vektor/Bitmap (10)
 * 3. Fotografi Studio, Videografi, Audio & Motion Graphic (10)
 */
export const PCK_DKV_PART_1: ExamQuestion[] = [
  // === 1. PRINSIP TATA LETAK (LAYOUT) & TIPOGRAFI (10) ===
  {
    id: 'pck-dkv-01',
    bank: 'PCK',
    topic: 'PCK DKV · Tata Letak & Tipografi',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam praktik merancang poster promosi kegiatan sekolah di kelas X DKV, beberapa siswa mengisi hampir 98% area bidang gambar dengan teks, foto, dan ornamen karena beranggapan ruang kosong (whitespace) menandakan poster belum selesai. Akibatnya pembaca kesulitan menangkap informasi inti acara. Penjelasan konseptual sekaligus strategi bimbingan terbaik dari guru adalah ....',
    options: [
      'Menyarankan siswa menambahkan garis tepi neon tebal di sekitar setiap paragraf agar batas informasi terlihat jelas.',
      'Menunjukkan perbandingan dua versi poster (padat tanpa jeda vs terstruktur dengan whitespace/negative space), lalu membimbing siswa memetakan hirarki baca agar ruang kosong berperan mengistirahatkan mata dan menonjolkan focal point.',
      'Meminta siswa mengecilkan seluruh ukuran huruf judul agar lebih banyak teks muat di bagian atas bidang kerja.',
      'Menetapkan aturan wajib bahwa latar belakang poster DKV harus selalu berwarna putih polos tanpa gambar.',
      'Mengubah format poster menjadi dokumen teks panjang dua halaman agar tidak menyisakan ruang kosong.',
    ],
    answer: 1,
    explanation:
      'Whitespace (negative space) bukan area kosong yang sia-sia, melainkan elemen aktif tata letak yang mengatur pernapasan visual, memisahkan kelompok informasi (proximity), serta mengarahkan fokus pembaca ke judul atau elemen utama (focal point). Membandingkan langsung versi padat vs terstruktur menumbuhkan kepekaan visual murid jauh lebih efektif daripada larangan kaku.',
  },
  {
    id: 'pck-dkv-02',
    bank: 'PCK',
    topic: 'PCK DKV · Tata Letak & Tipografi',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Seorang guru DKV mereviu desain kemasan dan poster siswa kelas XI. Beberapa karya tampak membingungkan karena judul acara, waktu, dan keterangan sponsor memakai ukuran huruf yang nyaris sama tanpa pengelompokan yang jelas. Evaluasi ketepatan prinsip hierarki visual & tata letak berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Hierarki visual yang baik dicapai dengan membedakan skala ukuran, ketebalan huruf (weight), warna, dan posisi sehingga pembaca otomatis menangkap informasi terpenting lebih dulu.',
        answer: 0,
        reason: 'Kontras skala, bobot, dan posisi menciptakan urutan pandang (visual scanning path) yang logis.',
      },
      {
        text: 'Prinsip proximity menuntut elemen yang berkaitan (misalnya tanggal, jam, dan lokasi acara) didekatkan dalam satu gugus, bukan disebar acak di empat sudut.',
        answer: 0,
        reason: 'Kedekatan jarak fisik (proximity) menandakan keterkaitan informasi secara instan.',
      },
      {
        text: 'Untuk menciptakan kesatuan desain yang kuat dalam satu poster, desainer sebaiknya menggabungkan minimal lima jenis font display yang berbeda di setiap baris teks.',
        answer: 1,
        reason: 'Menggunakan terlalu banyak font display merusak kesatuan, keterbacaan, dan hierarki; lazimnya cukup memadukan 1-2 keluarga huruf (maksimal 3 peran berbeda).',
      },
    ],
    explanation:
      'Hierarki visual mengandalkan kontras yang terukur dan pengelompokan logis (proximity), sedangkan penggunaan terlalu banyak jenis huruf dekoratif sekaligus justru melemahkan kejelasan pesan.',
  },
  {
    id: 'pck-dkv-03',
    bank: 'PCK',
    topic: 'PCK DKV · Tata Letak & Tipografi',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Saat mengedit judul spanduk ukuran besar berhuruf kapital semua dengan jenis huruf Sans-Serif geometris, seorang siswa mengeluhkan jarak visual antarhuruf "A" dan "V" pada kata "KREATIVITAS" tampak terlalu renggang dibanding jarak antara "I" dan "T". Pengaturan tipografi yang paling tepat diajarkan guru untuk memperbaiki celah pasangan huruf tertentu tersebut adalah ....',
    options: [
      'Leading, untuk menambah jarak antarbaris paragraf secara vertikal.',
      'Kerning, untuk menyesuaikan jarak optik antara dua karakter huruf tertentu agar terasa seimbang.',
      'Indentation, untuk menjorokkan awal baris paragraf deskriptif.',
      'Drop Cap, untuk memperbesar huruf pertama di sudut kiri paragraf.',
      'Hyphenation, untuk memotong suku kata di akhir baris.',
    ],
    answer: 1,
    explanation:
      'Kerning mengatur celah spesifik antar-pasangan karakter (seperti AV, To, WA) secara optis agar ritme huruf terlihat merata. Tracking mengatur spasi keseluruhan kata/rentang teks secara seragam, sedangkan leading mengatur jarak antarbaris.',
  },
  {
    id: 'pck-dkv-04',
    bank: 'PCK',
    topic: 'PCK DKV · Tata Letak & Tipografi',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Guru DKV merancang pembelajaran merangkai majalah sekolah (editorial layout) memakai pendekatan Understanding by Design (UbD) agar siswa kelas XI memahami fungsi Grid System secara bermakna, bukan sekadar menaruh kotak gambar secara acak. Manakah aktivitas belajar yang paling mencerminkan pemahaman bermakna pada konsep Grid System? (Pilih lebih dari satu)',
    options: [
      'Membedah struktur kolom dan margin pada dua edisi majalah profesional cetak nyata lalu memetakan konsistensi alurnya.',
      'Menghafalkan definisi modular grid, column grid, dan manuscript grid di buku catatan tanpa praktik penyusunan halaman.',
      'Merancang templat master halaman dengan modular grid konsisten dan menjelaskan alasan penempatan foto, caption, serta kolom artikel.',
      'Menonaktifkan garis bantu (guides) sejak awal proyek supaya tata letak terlihat bebas tanpa aturan.',
      'Menguji variasi jumlah kolom (misalnya 3 vs 4 kolom) untuk artikel fitur panjang guna mengevaluasi kenyamanan lebar baca (line length).',
    ],
    answer: [0, 2, 4],
    explanation:
      'Pemahaman bermakna UbD tampak ketika siswa menganalisis karya nyata, merumuskan justifikasi penataan grid secara sadar, serta menguji keterbacaan panjang baris (optimal 45-75 karakter pada tata letak editorial).',
  },
  {
    id: 'pck-dkv-05',
    bank: 'PCK',
    topic: 'PCK DKV · Tata Letak & Tipografi',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Siswa kelas X DKV sering tertukar antara jenis huruf Serif, Sans-Serif, Script, dan Display saat memilih tipografi untuk proyek desain yang berbeda audiens. Agar pembelajaran sesuai konteks lokal dan pengalaman nyata siswa (Contextual Teaching and Learning), langkah yang paling efektif dilakukan guru adalah ....',
    options: [
      'Menayangkan definisi kamus empat kategori font sepanjang satu jam pelajaran.',
      'Mengajak siswa memotret papan nama usaha UMKM, kemasan makanan tradisional, serta aplikasi gawai di sekitar sekolah, lalu mengklasifikasikan karakter psikologis dan keterbacaan tipografi yang dipakai.',
      'Menyuruh siswa menyalin alfabet dengan gaya huruf Times New Roman sebanyak lima halaman penuh.',
      'Membatasi seluruh proyek kelas X hanya memakai huruf Arial agar seragam.',
      'Menunda pengenalan kategori tipografi hingga kelas XII menjelang uji kompetensi.',
    ],
    answer: 1,
    explanation:
      'Contextual Teaching and Learning (CTL) mengaitkan klasifikasi tipografi dengan artefak komunikasi visual di lingkungan nyata siswa sehingga mereka langsung memahami hubungan bentuk huruf, fungsi, keterbacaan jarak pandang, dan citra merek.',
  },
  {
    id: 'pck-dkv-06',
    bank: 'PCK',
    topic: 'PCK DKV · Tata Letak & Tipografi',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Dalam tugas membuat antarmuka poster informasi kesehatan digital yang diakses dari ponsel oleh audiens remaja maupun lansia, guru menilai aspek keterbacaan (legibility & readability). Tentukan ketepatan prinsip tipografi dan kontras aksesibel berikut.',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Menggunakan huruf berornamen tipis (ultra-thin script) untuk paragraf penjelasan ukuran 9 pt di atas foto bertekstur ramai.',
        answer: 1,
        reason: 'Huruf tipis berornamen pada ukuran kecil di atas tekstur ramai merusak legibility dan gagal dibaca terutama oleh pengguna lansia atau layar kecil.',
      },
      {
        text: 'Memastikan kontras kecerahan memadai antara warna teks dan latar belakang (mengacu standar rasio kontras minimal WCAG AA ~4,5:1 untuk teks isi).',
        answer: 0,
        reason: 'Kontras warna yang kuat memastikan teks mudah terbaca di berbagai kondisi pencahayaan layar maupun keterbatasan penglihatan.',
      },
      {
        text: 'Menyediakan jarak antarbaris (leading) sekitar 120%-145% dari ukuran font isi agar baris mata tidak mudah melompat saat membaca.',
        answer: 0,
        reason: 'Leading proporsional mencegah antarbaris bertabrakan atau terlalu renggang sehingga alur baca nyaman.',
      },
    ],
    explanation:
      'Legibility mengacu pada kemudahan membedakan tiap huruf secara individu (dipengaruhi bentuk/goresan), sedangkan readability mengacu pada kenyamanan membaca susunan paragraf (dipengaruhi ukuran, leading, panjang baris, dan kontras latar).',
  },
  {
    id: 'pck-dkv-07',
    bank: 'PCK',
    topic: 'PCK DKV · Tata Letak & Tipografi',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Di kelas X DKV terdapat siswa yang sangat peka estetika komposisi gambar secara alami, namun kesulitan mengartikulasikan alasan teknis tata letak, serta beberapa siswa yang kesulitan memahami istilah keseimbangan asimetris (asymmetric balance). Guru menerapkan pembelajaran terdiferensiasi dengan menyediakan media taktil dan digital. Strategi paling sesuai dengan Universal Design for Learning (UDL) adalah ....',
    options: [
      'Menyajikan seluruh penjelasan hanya lewat modul PDF penuh teks akademik berbahasa Inggris.',
      'Menyediakan berbagai representasi konsep: potongan kertas kartu objek yang bisa digeser fisik untuk mencoba titik tumpu asimetris, simulasi grid interaktif di komputer, serta glosarium visual bergambar.',
      'Memberikan tugas tata letak hanya kepada siswa yang peka estetika dan memberi tugas mencatat kepada siswa lain.',
      'Meminta siswa belajar sendiri di rumah tanpa umpan balik karena gaya belajar berbeda.',
      'Menilai seluruh tugas hanya dari kecepatan waktu mengumpulkan file tanpa memeriksa komposisi.',
    ],
    answer: 1,
    explanation:
      'UDL menekankan keragaman cara penyajian (multiple means of representation) dan keterlibatan sehingga murid dengan kesiapan berbeda tetap dapat menguasai konsep inti keseimbangan asimetris (menyeimbangkan beban visual besar dengan gabungan objek kecil/teks yang berjarak proporsional).',
  },
  {
    id: 'pck-dkv-08',
    bank: 'PCK',
    topic: 'PCK DKV · Tata Letak & Tipografi',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Seorang siswa selalu menyusun seluruh elemen desain simetris rata tengah (center alignment) dari judul, subjudul, paragraf 12 baris, hingga alamat kaki poster, sehingga tata letak terlihat kaku dan sulit dibaca. Untuk memperluas pemahaman tentang prinsip alignment sesuai kebutuhan keterbacaan audiens, arahan yang paling tepat adalah ....',
    options: [
      'Menjelaskan bahwa rata kiri (left-aligned) menciptakan garis sumbu vertikal yang konsisten untuk memulai gerakan mata pada teks paragraf lebih dari tiga baris, sementara rata tengah cukup digunakan selektif pada judul/undangan pendek.',
      'Melarang penggunaan rata kiri selamanya karena hanya cocok untuk dokumen perkantoran.',
      'Mengubah seluruh paragraf menjadi rata kanan-kiri (justified) di kolom sangat sempit tanpa pengaturan spasi.',
      'Memutar arah teks paragraf 45 derajat diagonal supaya terlihat dinamis.',
      'Menghapus seluruh garis bantu rata tulisan agar setiap baris mulai dari posisi berbeda.',
    ],
    answer: 0,
    explanation:
      'Rata kiri (flush left/ragged right) memberi jangkar mata tetap di sisi kiri untuk paragraf informasi yang panjang dan menghindari "sungai putih" (rivers) seperti yang sering muncul pada teks justified di kolom sempit.',
  },
  {
    id: 'pck-dkv-09',
    bank: 'PCK',
    topic: 'PCK DKV · Tata Letak & Tipografi',
    pckFocus: 'Media/ICT & Simulator',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Pada pembelajaran kolaboratif desain majalah digital kelas XI DKV menggunakan platform desain berbasis cloud (seperti Figma/Canva terkelola atau perangkat kolaborasi sekolah), guru ingin memaksimalkan integrasi TIK secara kritis sesuai model SAMR. Praktik mana saja yang menunjukkan peningkatan transformatif (Modification/Redefinition) sekaligus literasi digital? (Pilih lebih dari satu)',
    options: [
      'Siswa mengomentari tata letak rekan satu tim secara langsung pada komponen desain tertentu (threaded comments) dengan argumen prinsip desain.',
      'Guru mencetak layar Figma di kertas lalu meminta siswa menilai dengan pulpen merah saja.',
      'Siswa memanfaatkan fitur komponen (component & styles tokens) sehingga perubahan warna identitas langsung tersinkron di semua halaman purwarupa.',
      'Siswa menguji purwarupa interaktif majalah digital ke pembaca sasaran secara langsung lewat perangkat seluler untuk merekam alur navigasi nyata.',
      'Siswa mengunggah tangkapan layar JPG pasif ke folder drive tanpa metadata atau riwayat revisi.',
    ],
    answer: [0, 2, 3],
    explanation:
      'Integrasi TIK tingkat transformatif dalam DKV tidak sekadar memindahkan kertas ke layar (Substitution), tetapi memanfaatkan kolaborasi real-time terarah, sistem komponen/gaya terpadu, dan uji purwarupa interaktif kepada audiens sasaran.',
  },
  {
    id: 'pck-dkv-10',
    bank: 'PCK',
    topic: 'PCK DKV · Tata Letak & Tipografi',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Guru membuka topik "Irama dan Kesatuan Visual dalam Desain" di kelas X DKV. Untuk menghadirkan Pembelajaran Mendalam yang berkesadaran (mindful), bermakna (meaningful), dan menggembirakan (joyful), kegiatan apersepsi dan inti manakah yang paling tepat?',
    options: [
      'Membuka pelajaran dengan kuis tebak cepat membedakan poster konser yang berhasil vs gagal menarik perhatian dari jarak 3 meter, mengajak siswa menyadari reaksi pandang matanya sendiri (eyeflow), lalu menantang mereka memodifikasi tata letak secara terukur.',
      'Memutar video komedi bebas yang tidak berkaitan dengan tata letak selama 20 menit awal agar siswa tertawa.',
      'Langsung membagikan soal ulangan harian mendadak tanpa penjelasan materi sebelumnya.',
      'Meminta siswa menyalin isi salindia PowerPoint guru ke buku tulis secara diam selama 45 menit.',
      'Menghukum siswa yang salah menebak ukuran margin agar kelas menjadi disiplin.',
    ],
    answer: 0,
    explanation:
      'Mengajak murid sadar mengamati cara matanya sendiri memindai poster nyata menumbuhkan kesadaran desain (mindful), bermakna pada problem komunikasi nyata, dan memicu rasa ingin tahu/kegembiraan eksploratif saat memodifikasi karya.',
  },

  // === 2. TEORI WARNA, MANAJEMEN WARNA (RGB/CMYK/ICC) & PRACETAK VEKTOR/BITMAP (10) ===
  {
    id: 'pck-dkv-11',
    bank: 'PCK',
    topic: 'PCK DKV · Warna & Pracetak',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Seorang siswa kelas XI DKV mendesain kemasan dus kopi dengan warna hijau neon cerah (#39FF14) menggunakan mode dokumen RGB di monitor berpanel lebar. Saat file langsung dicetak offset/digital printing di mesin CMYK tanpa pratinjau gamut, warna hasil cetakan tampak jauh lebih redup dan keabu-abuan. Penjelasan teknis yang paling akurat diberikan guru kepada siswa adalah ....',
    options: [
      'Mesin cetak kehabisan tinta hitam sehingga seluruh warna berubah pudar.',
      'Ruang warna aditif RGB (berbasis cahaya monitor) memiliki rentang warna (gamut) lebih luas terutama pada warna neon cerah dibanding ruang warna subtraktif CMYK (berbasis pigmen tinta di atas kertas), sehingga warna di luar gamut terkonversi turun; desain cetak harus disusun di mode CMYK sejak awal dengan soft-proofing.',
      'File desain wajib diubah ke resolusi 72 PPI terlebih dahulu agar warna hijau neon tetap menyala saat dicetak.',
      'Mengganti seluruh file vektor menjadi file GIF 256 warna sebelum dikirim ke percetakan.',
      'Menjelaskan bahwa layar monitor selalu menampilkan warna lebih gelap daripada kertas cetak.',
    ],
    answer: 1,
    explanation:
      'Monitor memancarkan cahaya (model aditif RGB: Red, Green, Blue) sehingga sanggup menampilkan warna neon terang, sedangkan tinta cetak menyerap/memantulkan cahaya pada kertas (model subtraktif CMYK: Cyan, Magenta, Yellow, Key/Black) dengan gamut lebih sempit. Bekerja langsung pada profil CMYK dan memanfaatkan soft-proofing (Ctrl+Y di AI/PS) mencegah kejutan penurunan warna saat produksi.',
  },
  {
    id: 'pck-dkv-12',
    bank: 'PCK',
    topic: 'PCK DKV · Warna & Pracetak',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam proyek identitas merek perusahaan dan pembuatan spanduk, siswa masih sering mencampur pemahaman antara grafis Vektor dan Bitmap (Raster). Tentukan kebenaran konsep teknis berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Logo merek resmi wajib dibuat dalam format berbasis vektor (misalnya AI, EPS, SVG, PDF vektor) karena dibangun oleh persamaan matematis kurva Bezier sehingga tidak pecah ketika diperbesar seukuran baliho.',
        answer: 0,
        reason: 'Grafis vektor bersifat resolution-independent; garis dan lengkungan dirender ulang tajam pada skala berapa pun.',
      },
      {
        text: 'Mengubah berkas foto JPEG beresolusi rendah (300 x 300 piksel) menjadi dokumen Adobe Illustrator (.ai) secara otomatis menjadikannya logo vektor murni beresolusi tak terbatas.',
        answer: 1,
        reason: 'Sekadar menempatkan (embed) foto JPEG ke dalam file .ai tidak mengubah piksel menjadi kurva vektor kecuali dilakukan penelusuran kurva (tracing/redraw) secara manual/presisi.',
      },
      {
        text: 'Foto produk fotografi dengan gradasi cahaya alami paling tepat diolah menggunakan perangkat lunak berbasis raster/bitmap dengan manajemen resolusi memadai (umumnya 300 PPI pada ukuran cetak standar jarak baca dekat).',
        answer: 0,
        reason: 'Bitmap unggul merepresentasikan detail foto bernada kontinu (continuous-tone) piksel demi piksel.',
      },
    ],
    explanation:
      'Pemilihan format vektor vs bitmap berakar pada sifat matematis kurva vs grid piksel. Desainer profesional merancang logo/tipografi dalam vektor dan foto bernada kontinu dalam bitmap beresolusi sesuai kebutuhan jarak pandang.',
  },
  {
    id: 'pck-dkv-13',
    bank: 'PCK',
    topic: 'PCK DKV · Warna & Pracetak',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada persiapan pracetak (prepress) brosur A4 lipat tiga di kelas XI DKV, beberapa siswa meletakkan foto latar belakang tepat berhenti di garis batas ukuran A4 tanpa dilebihkan, dan menaruh teks nomor kontak hanya 1,5 mm dari tepi potong. Saat brosur dipotong mesin guillotine di percetakan, muncul garis tepi putih tipis dan beberapa huruf bagian pinggir nyaris terpotong. Dua elemen pracetak yang lupa diterapkan siswa adalah ....',
    options: [
      'Drop shadow dan bevel emboss.',
      'Bleed area (perluasan latar minimal 3-5 mm melewati trim line) serta safety margin (jarak aman isi teks/logo ke dalam dari garis potong).',
      'Layer mask dan smart object.',
      'Anti-aliasing dan dithering.',
      'Color lookup dan lens flare.',
    ],
    answer: 1,
    explanation:
      'Toleransi goyang mata pisau pemotong cetak membutuhkan bleed (objek latar dilebihkan 3-5 mm keluar trim mark agar tidak menyisakan celah putih) serta safety margin (biasanya minimal 5-10 mm ke dalam dari trim line agar teks penting tidak terpotong).',
  },
  {
    id: 'pck-dkv-14',
    bank: 'PCK',
    topic: 'PCK DKV · Warna & Pracetak',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Sebelum mengirimkan berkas final desain katalog produk berformat PDF/AI siap cetak (Print-Ready File) ke percetakan mitra industri, daftar periksa pracetak (preflight checklist) manakah yang wajib dipastikan oleh siswa DKV? (Pilih lebih dari satu)',
    options: [
      'Mengonversi seluruh font yang dipakai menjadi kurva (Create Outlines / Convert to Curves) atau memastikan font tertanam aman agar tipe huruf tidak berubah bila percetakan tidak memiliki font tersebut.',
      'Menyertakan tautan foto beresolusi 72 PPI hasil unduhan pratinjau web saja agar ukuran PDF ringan di bawah 500 KB.',
      'Memeriksa warna teks body kecil hitam agar memakai 100% tinta K (C:0 M:0 Y:0 K:100) alih-alih empat tinta (registration black) untuk mencegah melesetnya register cetakan (misregistration).',
      'Menanamkan (embed) atau mengemas (package) seluruh gambar raster tertaut dengan profil warna CMYK dan bleed + crop mark aktif.',
      'Menyimpan berkas final dalam format ekstensi GIF animasi.',
    ],
    answer: [0, 2, 3],
    explanation:
      'Tiga pilar preflight pracetak: (1) font bebas error lewat Create Outlines/embedding, (2) teks hitam kecil memakai pure Black K100 agar tajam dan tidak berbayang jika pelat cetak sedikit bergeser, (3) gambar raster link ter-embed beresolusi cetak (300 PPI pada skala 1:1) di mode CMYK lengkap dengan bleed & crop mark.',
  },
  {
    id: 'pck-dkv-15',
    bank: 'PCK',
    topic: 'PCK DKV · Warna & Pracetak',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Siswa kelas XI hendak mencetak baliho raksasa berukuran 6 x 3 meter di komputer sekolah ber-RAM 8 GB. Ia memaksakan membuat kanvas Photoshop berukuran penuh 600 x 300 cm dengan resolusi 300 PPI sehingga aplikasi mengalami crash akibat ukuran file mentah mencapai puluhan gigabyte. Bimbingan teknis sekaligus penyesuaian berbasis karakteristik ukuran & jarak pandang yang paling tepat adalah ....',
    options: [
      'Menyarankan membuat kanvas pada skala 1:10 (60 x 30 cm) dengan resolusi 300 PPI (setara 30 PPI pada skala penuh 6 x 3 m), karena baliho dilihat dari jarak puluhan meter sehingga tidak menuntut kepadatan 300 PPI di skala penuh, sedangkan teks/logo tetap lebih ringan diproses berbasis vektor.',
      'Meminta siswa menggambar baliho langsung memakai Microsoft Paint resolusi 72 PPI ukuran 100 x 50 piksel.',
      'Membeli 10 monitor tambahan agar RAM komputer sekolah otomatis bertambah.',
      'Menurunkan ukuran baliho fisik menjadi ukuran kertas A5 tanpa persetujuan klien.',
      'Tetap memaksa resolusi 600 PPI pada kanvas 6 x 3 meter selama seminggu penuh.',
    ],
    answer: 0,
    explanation:
      'Format large-format printing (spanduk/baliho jarak pandang jauh) umumnya disiapkan di 30-72 PPI pada ukuran 1:1, atau dirancang di skala 1:10 pada 300 PPI (sering memakai software vektor dengan tautan gambar raster terukur) agar komputer tidak kelebihan beban tanpa mengorbankan ketajaman di jarak pandang jalan.',
  },
  {
    id: 'pck-dkv-16',
    bank: 'PCK',
    topic: 'PCK DKV · Warna & Pracetak',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Untuk membantu siswa memahami skema harmoni warna (monochromatic, analogous, complementary, triadic) dalam proyek desain kemasan minuman sehat buah-buahan, tugas pembelajaran manakah yang paling mendorong penalaran kritis dan transfer konsep (bukan hafalan roda warna)?',
    options: [
      'Menghafalkan urutan dua belas nama warna dalam bahasa Latin di papan tulis.',
      'Menganalisis studi kasus merek minuman kompetitor, merumuskan suasana rasa & target audiens terlebih dahulu, lalu memilih salah satu skema harmoni (misal analogous hangat untuk kesan alami lembut atau complementary untuk daya tarik kontras rak toko) disertai justifikasi psikologi warna.',
      'Mewarnai lingkaran warna standar yang sudah dicetak ulang dari buku paket lama.',
      'Mengambil palet warna acak dari generator daring tanpa menjelaskan alasan pemilihan warna dominan dan aksen.',
      'Memakai skema warna hitam-putih pada seluruh kemasan buah tropis.',
    ],
    answer: 1,
    explanation:
      'Pemilihan skema warna dalam DKV harus dituntun oleh strategi pesan, emosi audiens, dan diferensiasi rak pajang. Menjustifikasi skema (misal aturan proporsi 60-30-10 untuk dominan-sekunder-aksen) melatih penalaran desain tingkat tinggi.',
  },
  {
    id: 'pck-dkv-17',
    bank: 'PCK',
    topic: 'PCK DKV · Warna & Pracetak',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Klien perbankan besar meminta logo utamanya pada kemasan brosur dicetak tepat konsisten memakai kode warna korporat spesifik tanpa risiko pergeseran komposisi tinta campuran CMYK antar-percetakan berbeda. Solusi teknis sistem warna paling tepat yang diajarkan guru DKV adalah ....',
    options: [
      'Menyarankan klien mengganti warna logo menjadi abu-abu agar tidak berubah antar-printer.',
      'Menggunakan Spot Color standar industri (seperti sistem Pantone Matching System / PMS) dengan tinta pra-campur khusus pada pelat cetak terpisah.',
      'Mengirimkan tangkapan layar WhatsApp warna logo tersebut kepada setiap operator cetak agar ditiru kira-kira dengan mata.',
      'Menaikkan brightness monitor lab komputer ke 100% sebelum mengekspor PDF.',
      'Mengonversi file logo ke mode warna Lab lalu mencetaknya di printer inkjet rumah tangga.',
    ],
    answer: 1,
    explanation:
      'Spot Color (Pantone) memakai tinta yang sudah diracik khusus sesuai katalog warna standar internasional sehingga konsistensi warna korporat terjaga presisi di berbagai vendor cetak, berbeda dengan warna proses (CMYK) yang bergantung pada pencampuran titik raster empat tinta.',
  },
  {
    id: 'pck-dkv-18',
    bank: 'PCK',
    topic: 'PCK DKV · Warna & Pracetak',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Pada proyek olah citra digital (digital imaging) kelas XI, guru menemukan beberapa siswa langsung memanipulasi foto asli klien memakai filter destruktif (Erase Tool & Brightness/Contrast permanen) sehingga revisi dari klien tidak dapat dibatalkan di tengah proses. Evaluasi praktik alur kerja (non-destructive workflow) berikut.',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Menggunakan Layer Mask untuk menyembunyikan bagian gambar alih-alih menghapus piksel secara permanen dengan Eraser Tool.',
        answer: 0,
        reason: 'Layer mask memungkinkan transparansi atau potongan objek diubah ulang kapan saja tanpa kehilangan data piksel asli.',
      },
      {
        text: 'Memanfaatkan Adjustment Layers dan Smart Objects agar koreksi tonal warna serta transformasi skala dapat disunting ulang secara fleksibel.',
        answer: 0,
        reason: 'Smart Object menjaga keutuhan data asli saat transformasi, sementara Adjustment Layer memisahkan koreksi warna dari piksel layer foto.',
      },
      {
        text: 'Melakukan Flatten Image di setiap langkah kerja setelah lima menit agar ukuran PSD kecil dan orang lain tidak bisa mengedit layer.',
        answer: 1,
        reason: 'Melakukan Flatten terlalu dini bersifat destruktif dan melumpuhkan kemampuan revisi profesional.',
      },
    ],
    explanation:
      'Non-destructive editing (Smart Objects, Layer Masks, Adjustment Layers) merupakan standar industri grafis profesional yang juga memudahkan asesmen proses kerja siswa.',
  },
  {
    id: 'pck-dkv-19',
    bank: 'PCK',
    topic: 'PCK DKV · Warna & Pracetak',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.2',
    prompt:
      'Setelah mencetak hasil karya murid ke vendor digital printing untuk pameran sekolah, guru mendapati hampir seluruh poster siswanya terlihat terlalu gelap dibanding tampilan di monitor laboratorium. Alih-alih langsung menyalahkan siswa atau percetakan, refleksi diri bertumbuh (growth mindset) dan tindak lanjut pembelajaran yang paling tepat bagi guru adalah ....',
    options: [
      'Mengakui adanya ketidakselarasan manajemen warna (monitor lab terlalu terang & belum terkalibrasi profil ICC dengan mesin cetak), menjadikannya studi kasus pembelajaran color calibration bersama siswa, serta menyertakan tahap test print (proof cetak) dalam modul ajar berikutnya.',
      'Menyembunyikan poster tersebut di gudang sekolah agar kepala sekolah tidak mengetahui masalahnya.',
      'Memotong nilai ujian praktik seluruh siswa karena dianggap gagal memilih warna cerah.',
      'Mengharuskan seluruh siswa membeli monitor kalibrasi profesional secara pribadi dengan biaya sendiri.',
      'Berhenti mengajar materi manajemen warna agar tidak menanggung risiko hasil cetak meleset.',
    ],
    answer: 0,
    explanation:
      'Guru dengan growth mindset (K.2) memandang hasil tak terduga sebagai data umpan balik perbaikan sistem pengajaran: mengajak siswa belajar langsung alur proof cetak dan kalibrasi kecerahan/profil ICC monitor lab.',
  },
  {
    id: 'pck-dkv-20',
    bank: 'PCK',
    topic: 'PCK DKV · Warna & Pracetak',
    pckFocus: 'Media/ICT & Simulator',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Dalam mengajarkan penarikan kurva halus pada gambar ilustrasi vektor menggunakan Pen Tool, banyak siswa kelas X menekan titik anchor node terlalu rapat dan patah sehingga kurva tampak bergerigi. Strategi instruksional berbantuan media/latihan interaktif paling efektif untuk mengatasi kendala teknis ini adalah ....',
    options: [
      'Membimbing siswa memahami mekanisme handle bezier pada titik ekstrem (puncak lengkungan) menggunakan permainan/latihan interaktif The Bezier Game atau templat latihan pen-tool berpanduan letak anchor minimal (jam 12-3-6-9).',
      'Membiarkan siswa menggambar hanya dengan memakai Freehand/Pencil Tool kasar lalu menaikkan ketebalan garis luar menjadi 10 pt.',
      'Meminta siswa menyerahkan gambar ke jasa tracing daring lalu mengekspor hasilnya sebagai tugas sendiri.',
      'Mengharuskan siswa mengklik minimal 100 titik anchor pada setiap sisi lingkaran kecil.',
      'Menghapus materi Pen Tool dari kompetensi DKV karena dianggap terlalu sulit untuk siswa kelas X.',
    ],
    answer: 0,
    explanation:
      'Kurva Bezier yang rapi terbentuk dari titik anchor sesedikit mungkin pada titik ekstrem (puncak vertikal/horizontal atau titik belok) dengan arah handle sejalan tangensial kurva. Simulator interaktif seperti Bezier exercises memberi umpan balik langsung yang efektif.',
  },

  // === 3. FOTOGRAFI STUDIO, VIDEOGRAFI, AUDIO & MOTION GRAPHIC (10) ===
  {
    id: 'pck-dkv-21',
    bank: 'PCK',
    topic: 'PCK DKV · Fotografi & Audio Visual',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Saat praktik fotografi produk di dalam ruangan berkondisi cahaya redup tanpa flash, seorang siswa ingin memotret tetesan air yang membeku tajam di udara sekaligus mendapatkan latar belakang bokeh lembut. Ia langsung menaikkan ISO ke nilai maksimum kamera (ISO 25600) dengan Shutter Speed lambat 1/10 detik dan Aperture f/16. Hasil fotonya ternyata buram gerak (motion blur), berbutir kasar (noise berat), serta latar belakang tetap tajam. Kombinasi pengaturan segitiga eksposur yang tepat untuk diperbaiki bersama guru adalah ....',
    options: [
      'Gunakan Shutter Speed cepat (misal 1/1000 detik atau lebih cepat dengan dukungan lampu studio terus-menerus/flash) untuk membekukan air, buka Aperture lebar (misal f/2.8) untuk bokeh sekaligus memasukkan banyak cahaya sehingga ISO dapat dijaga rendah/wajar agar noise minimal.',
      'Turunkan Shutter Speed menjadi 2 detik dan perkecil Aperture ke f/22 agar gambar tetesan air semakin jelas.',
      'Naikkan ISO setinggi mungkin hingga 51200 sambil tetap memakai Aperture f/16 tanpa menambah sumber cahaya.',
      'Matikan seluruh lampu ruangan dan gunakan mode otomatis Night Landscape tanpa tripod.',
      'Ubah White Balance ke mode Tungsten agar noise dan keburaman gerak otomatis hilang.',
    ],
    answer: 0,
    explanation:
      'Segitiga eksposur: (1) membekukan gerakan cepat tetesan air menuntut Shutter Speed tinggi (>= 1/500-1/1000s), (2) depth of field dangkal/bokeh menuntut Aperture bukaan besar (angka f kecil seperti f/2.8) yang sekaligus memasukkan banyak cahaya, dan (3) pencahayaan studio/tambahan menjaga ISO serendah mungkin agar gambar bersih dari noise.',
  },
  {
    id: 'pck-dkv-22',
    bank: 'PCK',
    topic: 'PCK DKV · Fotografi & Audio Visual',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Siswa kelas XI DKV menyiapkan pemotretan katalog produk makanan di mini studio sekolah memakai pencahayaan Three-Point Lighting dan pengaturan White Balance. Tentukan ketepatan pernyataan berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Key Light berfungsi sebagai sumber cahaya utama pembentuk karakter pencahayaan dan bayangan terkuat pada subjek, sedangkan Fill Light diletakkan di sisi berlawanan untuk melembutkan bayangan keras tersebut tanpa menghilangkannya sama sekali.',
        answer: 0,
        reason: 'Perimbangan key-to-fill light membangun dimensi kedalaman tiga dimensi produk foto secara natural.',
      },
      {
        text: 'Rim Light / Back Light ditempatkan di belakang subjek untuk menciptakan garis cahaya pemisah tepi objek dari latar belakang.',
        answer: 0,
        reason: 'Rim light memberikan highlight tepi sehingga subjek tidak tenggelam menyatu dengan latar.',
      },
      {
        text: 'Pengaturan White Balance berfungsi semata-mata untuk memperbesar bukaan diafragma lensa kamera agar eksposur lebih terang.',
        answer: 1,
        reason: 'White Balance mengompensasi temperatur warna sumber cahaya (Kelvin) agar objek putih benar-benar tampak putih netral tanpa color cast kekuningan/kebiruan, tidak mengubah diafragma.',
      },
    ],
    explanation:
      'Three-point lighting memadukan Key, Fill, dan Back/Rim light untuk memahat dimensi objek, sedangkan White Balance menyelaraskan temperatur warna Kelvin terhadap kondisi sumber cahaya studio.',
  },
  {
    id: 'pck-dkv-23',
    bank: 'PCK',
    topic: 'PCK DKV · Fotografi & Audio Visual',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam proyek pembuatan video profil pengrajin batik lokal kelas XI DKV, terdapat adegan wawancara dua orang saling berhadapan. Saat proses penyuntingan (editing), penonton bingung karena arah pandang kedua tokoh tiba-tiba tampak melihat ke sisi yang sama dan posisi mereka terbalik kanan-kiri antar potongan klip. Kesalahan prinsip pengambilan gambar sinematografi yang terjadi adalah ....',
    options: [
      'Pelanggaran Rule of Thirds karena tidak memakai rasio 1:1.',
      'Pelanggaran 180-Degree Rule (Axis of Action), yaitu kamera berpindah menyeberangi garis imajiner sumbu interaksi antardua subjek tanpa transisi netral.',
      'Kesalahan pengaturan Bitrate video ekspor MP4.',
      'Penggunaan teknik L-Cut dan J-Cut pada jalur audio dialog.',
      'Penerapan sudut kamera Eye-Level pada kedua subjek.',
    ],
    answer: 1,
    explanation:
      '180-Degree Rule menjaga orientasi spasial penonton tetap konsisten dengan mempertahankan kamera di satu sisi garis imajiner (line of action) yang menghubungkan dua subjek. Menyeberanginya tanpa shot pemandu netral membuat tokoh tampak saling membalik posisi.',
  },
  {
    id: 'pck-dkv-24',
    bank: 'PCK',
    topic: 'PCK DKV · Fotografi & Audio Visual',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Sebelum memperbolehkan kelompok siswa meminjam peralatan kamera dan merekam iklan layanan masyarakat berdurasi 60 detik, dokumen praproduksi apa saja yang tepat diwajibkan guru sebagai bagian dari scaffolding urutan kerja? (Pilih lebih dari satu)',
    options: [
      'Creative Brief & Naskah / Skenario ringkas agar pesan visual, target audiens, dan durasi tiap adegan terukur.',
      'Storyboard & Shot List yang merinci ukuran framing (ECU/CU/MS/LS), sudut kamera, dan pergerakan kamera tiap adegan.',
      'File video mentah hasil ekspor 4K yang sudah selesai diedit sepenuhnya.',
      'Daftar kebutuhan properti, audio/dialog, dan pembagian peran kru (sutradara, kamerawan, penata cahaya/suara) sesuai jadwal lokasi.',
      'Desain spanduk cetak berukuran 10 x 4 meter sebelum syuting dimulai.',
    ],
    answer: [0, 1, 3],
    explanation:
      'Praproduksi video menuntut rancangan konsep (creative brief & naskah), perencanaan visual per shot (storyboard & shot list), serta perencanaan logistik/kru agar tahap produksi efisien dan terarah.',
  },
  {
    id: 'pck-dkv-25',
    bank: 'PCK',
    topic: 'PCK DKV · Fotografi & Audio Visual',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam menyunting video dokumenter pendek, suara narasi siswa sering tenggelam oleh musik latar yang terlalu keras, serta perpindahan antaradegan wawancara terdengar terputus kaku. Teknik penyuntingan audio-video yang paling tepat dilatihkan guru kepada siswa adalah ....',
    options: [
      'Mengaktifkan audio ducking (menurunkan level musik latar ke kisaran -18 s.d. -24 dB saat suara narasi utama masuk agar dialog bersih di kisaran -6 s.d. -12 dB) serta menerapkan transisi audio J-Cut / L-Cut agar pergantian adegan mengalir halus.',
      'Menaikkan volume master seluruh track ke +12 dB hingga indikator mencapai puncak merah (clipping) agar terdengar lantang.',
      'Menghapus seluruh suara narasi dan menggantinya dengan musik disko berkecepatan tinggi.',
      'Mengubah seluruh frame rate video menjadi 12 fps agar pemrosesan audio melambat.',
      'Menghilangkan seluruh suara lingkungan alami di lokasi rekaman tanpa menambahkan dialog maupun musik.',
    ],
    answer: 0,
    explanation:
      'Menjaga headroom tanpa clipping, menyeimbangkan volume narasi dan musik latar (ducking), serta memanfaatkan J-cut (audio klip berikut masuk lebih dulu) atau L-cut (audio klip sebelumnya mengalir ke gambar berikutnya) membuat penyuntingan terasa halus dan profesional.',
  },
  {
    id: 'pck-dkv-26',
    bank: 'PCK',
    topic: 'PCK DKV · Fotografi & Audio Visual',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Siswa kelas XII DKV membuat bumper animasi logo 2D (motion graphic) berdurasi 5 detik. Namun gerak masuk teks dan ikon tampak robotik serta kaku karena kecepatan perpindahannya rata dari awal hingga berhenti tiba-tiba. Penjelasan dan praktik penyuntingan kurva gerak yang paling tepat diajarkan adalah ....',
    options: [
      'Menggunakan interpolasi linear di seluruh keyframe supaya posisi bergerak dengan kecepatan tetap.',
      'Menerapkan prinsip animasi Slow In and Slow Out (mengubah keyframe linear menjadi Easy Ease / kurva Bezier pada Graph Editor) agar gerak memiliki akselerasi dan deselerasi alami, dilengkapi prinsip antisipasi atau follow-through tipis.',
      'Mengurangi jumlah frame rate animasi menjadi 5 fps agar mata tidak sempat melihat kekakuan gerak.',
      'Menghapus semua keyframe posisi lalu membiarkan logo statis tanpa gerakan selama 5 detik.',
      'Menambahkan efek strobo kedip berwarna merah-biru berkecepatan tinggi sepanjang video.',
    ],
    answer: 1,
    explanation:
      'Gerakan alami benda di dunia nyata memiliki percepatan awal dan perlambatan sebelum berhenti (Slow In & Slow Out / easing). Memoles Velocity/Value Graph keyframe membuat motion graphic tampak halus dan hidup.',
  },
  {
    id: 'pck-dkv-27',
    bank: 'PCK',
    topic: 'PCK DKV · Fotografi & Audio Visual',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.3',
    prompt:
      'Saat kelas X DKV melakukan sesi pemotretan studio dengan lampu continuous high-wattage dan tripod lampu di ruang praktik sempit, guru menegakkan prosedur K3LH studio fotografi. Evaluasi ketepatan tindakan pengawasan guru berikut.',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Menempelkan lakban pengaman (gaffer tape) sepanjang jalur kabel listrik studio di lantai serta memasang pemberat (sandbag) pada kaki light stand tinggi.',
        answer: 0,
        reason: 'Mencegah siswa tersandung kabel yang bisa menjatuhkan lampu studio mahal dan mencederai orang di ruangan.',
      },
      {
        text: 'Menginstruksikan siswa mencabut langsung rumah lampu logam panas dengan tangan kosong sesaat setelah pemotretan selesai agar cepat disimpan.',
        answer: 1,
        reason: 'Rumah lampu studio menyimpan panas tinggi setelah menyala lama dan wajib didinginkan terlebih dahulu atau ditangani dengan sarung tangan tahan panas saat mati daya.',
      },
      {
        text: 'Memastikan daya listrik tidak bertumpuk berlebih pada satu stopkontak murahan dan menjaga jarak aman antara lampu panas dengan properti kain latar mudah terbakar.',
        answer: 0,
        reason: 'Mencegah korsleting listrik serta risiko kebakaran studio dari panas lampu.',
      },
    ],
    explanation:
      'Disiplin K3LH studio fotografi/videografi DKV mencakup pengamanan beban sandbag light stand, kabel tertata di lantai, manajemen beban daya listrik, dan pendinginan lampu sebelum dikemas.',
  },
  {
    id: 'pck-dkv-28',
    bank: 'PCK',
    topic: 'PCK DKV · Fotografi & Audio Visual',
    pckFocus: 'Media/ICT & Simulator',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Jumlah kamera DSLR/Mirrorless di sekolah terbatas (hanya 4 unit untuk 32 siswa kelas XI DKV) pada jam praktik komposisi framing & segitiga eksposur. Strategi rotasi berbasis teknologi yang paling adil dan menjaga seluruh siswa aktif menguasai konsep adalah ....',
    options: [
      'Membagi kelompok kecil bergilir memakai kamera studio bersamaan dengan stasiun tugas paralel: sebagian kelompok menguji komposisi menggunakan ponsel pintar dengan aplikasi mode pro manual, dan stasiun lainnya mengoperasikan simulator kamera web interaktif serta mengulas hasil bidikan lewat proyektor kelas.',
      'Menyerahkan keempat kamera hanya kepada 4 ketua kelas sepanjang semester sambil meminta 28 siswa lain duduk menonton.',
      'Membatalkan materi fotografi studio hingga sekolah membeli 32 kamera DSLR baru.',
      'Menyuruh siswa menggambar bentuk kamera di buku tulis memakai penggaris selama jam praktik.',
      'Meminta semua siswa mengerjakan tugas menulis makalah sejarah fotografi tanpa memegang alat sama sekali.',
    ],
    answer: 0,
    explanation:
      'Pembelajaran berbasis stasiun (station rotation) memadukan kamera riil, kamera ponsel mode manual Pro, serta simulator eksposur digital menjaga seluruh murid tetap aktif mengalami hubungan langsung shutter/aperture/ISO dan framing meski unit kamera utama terbatas.',
  },
  {
    id: 'pck-dkv-29',
    bank: 'PCK',
    topic: 'PCK DKV · Fotografi & Audio Visual',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Siswa mengumpulkan video reel iklan minuman UMKM berdurasi 30 detik. Sebagian murid mengedit di ponsel dan sebagian memakai perangkat komputer sekolah. Agar penilaian adil dan objektif tidak terjebak pada mahalnya alat yang dipakai murid, fokus kriteria rubrik asesmen autentik paling tepat menilai ....',
    options: [
      'Merk laptop atau spesifikasi harga kamera yang dipakai saat proses syuting.',
      'Kesesuaian pesan dengan brief audiens, kestabilan framing & kontinuitas visual, keterbacaan teks grafis penunjang, kejernihan audio/musik, serta ketepatan pacing potongan gambar.',
      'Ukuran megabyte file video akhir: semakin besar ukurannya otomatis mendapat nilai paling tinggi.',
      'Jumlah efek transisi tiga dimensi berkedip yang dipasang di setiap satu detik video.',
      'Kecepatan mengumpulkan berkas video sebelum hari syuting dijadwalkan guru.',
    ],
    answer: 1,
    explanation:
      'Penilaian autentik DKV berorientasi pada kualitas komunikasi visual, tata gambar, kontinuitas, kebersihan audio, dan eksekusi pesan, bukan harga atau merek perangkat.',
  },
  {
    id: 'pck-dkv-30',
    bank: 'PCK',
    topic: 'PCK DKV · Fotografi & Audio Visual',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.1',
    prompt:
      'Dalam kelompok produksi video dokumenter, siswa berhambatan pendengaran ringan terlihat kesulitan menangkap arahan lisan guru sutradara di tengah suara ramai lokasi luar ruang. Tindakan komunikasi inklusif guru dan rekan tim yang paling tepat untuk mendukung keterlibatannya secara setara adalah ....',
    options: [
      'Memindahkannya ke posisi penjaga tas kelompok di sudut jauh agar tidak perlu berkoordinasi.',
      'Memastikan ia berada dekat posisi pandang saat briefing di tempat lebih tenang, melengkapi instruksi lapangan memakai lembar visual call sheet/cue card isyarat tangan terstruktur saat kamera merekam, dan tetap mempercayainya memegang peran aktif seperti juru kamera atau editor.',
      'Berteriak lebih keras di hadapan seluruh kru sambil menunjuknya setiap kali ia terlambat merespons aba-aba.',
      'Meminta seluruh kelompok menggunakan komunikasi bisik-bisik di belakang punggung.',
      'Menggantikan seluruh nilainya dengan nilai rata-rata tanpa melibatkan kontribusi nyata.',
    ],
    answer: 1,
    explanation:
      'Komunikasi inklusif (S.1) menghadirkan akses informasi visual setara: briefing tatap muka jelas, cue card/isyarat aba-aba produksi (yang justru lazim di industri penyiaran saat syuting!), dan peran teknis aktif bermartabat.',
  },
];
