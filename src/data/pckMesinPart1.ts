import type { ExamQuestion } from '../types/exam';

/**
 * Bank PCK Teknik Mesin SMK — Bagian 1 (46 Soal):
 * 1. Gambar Teknik, Proyeksi & CAD (12)
 * 2. Pemesinan Bubut, Frais & Gerinda (12)
 * 3. Pemrograman CNC & Simulator (11)
 * 4. Metrologi Presisi & Pengukuran (11)
 */
export const PCK_MESIN_PART_1: ExamQuestion[] = [
  // === 1. GAMBAR TEKNIK, PROYEKSI & CAD (12) ===
  {
    id: 'pck-gt-01',
    bank: 'PCK',
    topic: 'Gambar Teknik, Proyeksi & CAD',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Dalam praktik membaca gambar kerja di kelas X Teknik Mesin, sebagian besar siswa menggambar pandangan atas tepat di BAWAH pandangan depan padahal etiket gambar mencantumkan simbol proyeksi kuadran III (Amerika/ISO E terbalik — kerucut terpotong dengan lingkaran berada di sisi kiri trapesium jika dilihat standar ISO Amerika). Guru ingin meluruskan miskonsepsi spasial siswa tersebut agar tidak salah membuat benda kerja. Tindakan pedagogis yang paling tepat adalah ....',
    options: [
      'Meminta siswa menghafal definisi kuadran I dan III dari buku paket lalu mengerjakan 20 soal latihan menggambar kotak.',
      'Menggunakan model kubus proyeksi transparan (glass box) atau simulasi CAD 3D yang dibuka lipatan bidangnya langkah demi langkah sambil membandingkan simbol arah pandang pada etiket.',
      'Menghilangkan penjelasan proyeksi Amerika dari RPP agar siswa hanya mengenal proyeksi Eropa saja.',
      'Memberikan nilai nol pada seluruh gambar tugas dan menginstruksikan siswa menyalin ulang gambar kerja milik teman yang benar.',
      'Menjelaskan ulang posisi pandangan hanya menggunakan kalimat lisan di depan kelas tanpa alat peraga.',
    ],
    answer: 1,
    explanation:
      'Pada proyeksi Amerika (Kuadran III), bidang proyeksi berada di antara pengamat dan benda (seolah berada di dalam kotak kaca transparan yang lipatannya dibuka ke depan), sehingga pandangan atas berada di ATAS pandangan depan dan pandangan kanan di KANAN pandangan depan. Mengatasi miskonsepsi spasial paling efektif dengan visualisasi konkret (glass box / simulasi rotasi CAD 3D) lalu menghubungkannya ke simbol etiket.',
  },
  {
    id: 'pck-gt-02',
    bank: 'PCK',
    topic: 'Gambar Teknik, Proyeksi & CAD',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada gambar kerja perakitan poros dan bantalan tercantum ukuran Ø30 H7/g6 dan Ø30 H7/p6. Seorang siswa menyimpulkan bahwa kedua pasangan tersebut sama-sama longgar karena nominalnya sama-sama Ø30 mm. Untuk meluruskan pemahaman konsep sistem suaian basis lubang (ISO 286), penjelasan teknis sekaligus pendampingan yang paling tepat adalah ....',
    options: [
      'Menjelaskan bahwa huruf kecil selalu menyatakan lubang dan huruf besar menyatakan poros.',
      'Menunjukkan pada tabel batas penyimpangan ISO bahwa H7 memiliki batas bawah 0 (basis lubang), g6 memiliki batas atas negatif sehingga H7/g6 pasti suaian longgar (clearance fit), sedangkan p6 bernilai positif sehingga H7/p6 merupakan suaian sesak (interference fit).',
      'Menyatakan bahwa perbedaan huruf hanya memengaruhi kehalusan permukaan Ra tanpa mengubah ukuran aktual poros.',
      'Meminta siswa membubut semua poros tepat 30,00 mm agar cocok dengan kedua lubang.',
      'Mengabaikan kode huruf dan meminta siswa cukup mengukur memakai mistar baja biasa.',
    ],
    answer: 1,
    explanation:
      'Dalam sistem basis lubang ISO, huruf kapital (H7) menunjukkan daerah toleransi lubang dengan deviasi bawah = 0 (+0,021/0 untuk Ø30). Huruf kecil g6 berada di bawah garis nol (-0,007/-0,020 mm) sehingga menghasilkan clearance fit (suaian longgar), sementara p6 berada jauh di atas garis nol (+0,022/+0,035 mm) sehingga menghasilkan interference fit (suaian sesak, pemasangan dipres).',
  },
  {
    id: 'pck-gt-03',
    bank: 'PCK',
    topic: 'Gambar Teknik, Proyeksi & CAD',
    pckFocus: 'Media/ICT & Simulator',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Sekolah menghadapi kendala keterbatasan jumlah lisensi komputer berkemampuan tinggi di lab CAD, sementara sebagian siswa hanya memiliki gawai standar untuk belajar di luar jam sekolah. Guru ingin kompetensi pemodelan parametrik 3D dan pembacaan gambar kerja tetap dicapai secara merata dan fleksibel (fleksibilitas belajar di mana saja). Strategi pemanfaatan media berbasis TIK yang paling tepat adalah ....',
    options: [
      'Menghapus materi pemodelan 3D dari silabus dan menggantinya penuh dengan gambar manual pensil.',
      'Memanfaatkan simulator/platform CAD berbasis web ringan yang dapat diakses lintas perangkat untuk latihan sketch-extrude dan membaca proyeksi interaktif di luar jam lab, dipadukan sesi verifikasi assembly di lab sekolah.',
      'Mewajibkan setiap orang tua siswa membeli laptop workstation grafis mahal secara pribadi.',
      'Menjadikan demonstrasi layar proyektor guru sebagai satu-satunya aktivitas CAD tanpa praktik mandiri murid.',
      'Meminta siswa hanya menonton rekaman video tutorial berdurasi 3 jam tanpa lembar kerja tugas terukur.',
    ],
    answer: 1,
    explanation:
      'Subkompetensi P.4 menekankan pemanfaatan TIK secara kritis dan kreatif untuk memperluas akses belajar. Simulator/web-CAD ringan lintas perangkat memungkinkan siswa berlatih sketch, constraint, dan ekstrusi dasar kapan saja tanpa sepenuhnya bergantung pada jadwal sempit laboratorium sekolah, sementara jam lab dioptimalkan untuk verifikasi kompleksitas dan manufaktur.',
  },
  {
    id: 'pck-gt-04',
    bank: 'PCK',
    topic: 'Gambar Teknik, Proyeksi & CAD',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Siswa kelas XI diminta membuat gambar potongan (section view) sebuah rumah katup berlubang bertingkat yang memiliki rusuk penguat (rib/web) tipis searah bidang potong. Saat memeriksa draf CAD 2D siswa, guru melihat seluruh area rusuk penguat ikut diarsir penuh seperti dinding pejal. Mengacu standar ISO 128 gambar teknik mesin, perbaikan yang harus dibimbingkan guru adalah ....',
    options: [
      'Menambah kerapatan arsiran pada bagian rusuk agar terlihat lebih kuat.',
      'Menjelaskan bahwa fitur rusuk penguat (rib), sirip, jari-jari roda, maupun pasak bila terpotong memanjang TIDAK boleh diarsir agar tidak menimbulkan salah tafsir sebagai dinding pejal masif.',
      'Menghapus garis kontur rusuk seluruhnya dari gambar pandangan potongan.',
      'Mengubah sudut garis arsiran menjadi vertikal 90° di sepanjang rusuk.',
      'Mengganti seluruh gambar menjadi gambar perspektif isometris tanpa ukuran.',
    ],
    answer: 1,
    explanation:
      'Menurut konvensi ISO gambar teknik mesin, elemen tipis yang berfungsi sebagai penguat/pengikat (rusuk/rib, sirip, pasak, baut, poros pejal, jari-jari roda gigi) tidak diarsir apabila terpotong sejajar sumbu memanjangnya, guna menghindari kesan visual keliru seolah bagian tersebut berdinding tebal penuh.',
  },
  {
    id: 'pck-gt-05',
    bank: 'PCK',
    topic: 'Gambar Teknik, Proyeksi & CAD',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Dalam tugas membuat model 3D CAD sebuah bracket tumpuan poros dan mengekspornya ke gambar kerja 2D standar manufaktur, indikator asesmen otentik yang paling mencerminkan kesiapan standar industri (bukan sekadar bentuk mirip) adalah ....',
    options: [
      'Hanya menilai kecepatan waktu pengumpulan file gambar pertama tanpa memeriksa ukuran.',
      'Menilai kelengkapan sketsa fully-constrained, ketepatan intent desain (feature tree terstruktur), kejelasan proyeksi, pencantuman toleransi fungsional, kekasaran permukaan, serta kelengkapan etiket sesuai ISO.',
      'Memberi nilai sempurna selama warna rendering 3D tampak mengilap dan menarik.',
      'Menghitung jumlah garis konstruksi yang dibuat siswa tanpa memverifikasi fungsi perakitan.',
      'Menguji siswa dengan soal pilihan ganda hafalan nama ikon menu perangkat lunak saja.',
    ],
    answer: 1,
    explanation:
      'Asesmen otentik CAD manufaktur berorientasi kesiapan produksi (design for manufacturing): sketsa harus terdefinisi penuh (fully constrained), feature tree logis untuk revisi, serta gambar kerja 2D mencantumkan proyeksi benar, dimensi fungsional, toleransi, simbol Ra, dan etiket lengkap.',
  },
  {
    id: 'pck-gt-06',
    bank: 'PCK',
    topic: 'Gambar Teknik, Proyeksi & CAD',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Pada pelajaran Gambar Teknik Dasar kelas X, siswa sering kebingungan menentukan garis mana yang seharusnya digambar sebagai garis tipis kontinu, garis tebal kontinu, garis putus-putus, dan garis sumbu bertitik tipis. Agar bermakna secara konseptual dan kontekstual, pendekatan pembelajaran paling efektif adalah ....',
    options: [
      'Menyuruh siswa menghafal tabel ketebalan pena Rapido (0,18 mm s.d. 0,7 mm) di luar kepala sebelum menggambar apa pun.',
      'Menugaskan siswa menganalisis cetak biru (blueprint) komponen mesin riil di bengkel secara berkelompok untuk menelusuri mengapa perbedaan jenis/ketebalan garis mencegah kesalahan operator mesin saat membaca lubang tersembunyi dan sumbu bor.',
      'Membagikan gambar jadi untuk dijiplak menggunakan kertas kalkir tanpa diskusi fungsi garis.',
      'Mengubah seluruh jenis garis menjadi tebal kontinu agar mudah terlihat dari jauh.',
      'Menunda pembelajaran jenis garis hingga kelas XII karena dianggap terlalu teoretis.',
    ],
    answer: 1,
    explanation:
      'Pembelajaran konseptual dan bermakna (P.1) menghubungkan aturan standar ISO (jenis dan ketebalan garis) langsung dengan fungsi komunikasi teknis di lantai produksi: misalnya, kesalahan membedakan garis tersembunyi (putus-putus) dan garis sumbu (gores-titik) membuat operator salah mengebor koordinat.',
  },
  {
    id: 'pck-gt-07',
    bank: 'PCK',
    topic: 'Gambar Teknik, Proyeksi & CAD',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Perhatikan tabel interpretasi simbol gambar teknik mesin dan CAD berikut ini. Tentukan apakah setiap pernyataan siswa Benar atau Salah.',
    table: [
      ['Notasi pada Gambar Kerja', 'Interpretasi yang Disampaikan Siswa'],
      ['R12 vs Ø24', 'Menyatakan radius 12 mm pada fillet vs diameter lingkaran penuh 24 mm'],
      ['Ra 0,8 μm vs Ra 12,5 μm', 'Ra 12,5 μm jauh lebih halus daripada Ra 0,8 μm'],
      ['Simbol ⊥ (tegak lurus) 0,05 | A', 'Toleransi geometrik ketegaklurusan maksimal 0,05 mm terhadap bidang datum A'],
      ['M16 × 1,5', 'Ulir metrik halus dengan diameter nominal 16 mm dan kisar (pitch) 1,5 mm'],
    ],
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Penafsiran R12 sebagai jari-jari 12 mm pada busur/fillet dan Ø24 sebagai diameter penuh 24 mm.',
        answer: 0,
        reason: 'R digunakan untuk busur/jari-jari, sedangkan Ø menyatakan ukuran diameter penuh.',
      },
      {
        text: 'Klaim bahwa Ra 12,5 μm menghasilkan permukaan yang jauh lebih halus daripada Ra 0,8 μm.',
        answer: 1,
        reason: 'Nilai Ra (Roughness Average) lebih KECIL berarti permukaan lebih HALUS (0,8 μm umumnya dicapai gerinda/finishing presisi, sedangkan 12,5 μm adalah pembubutan kasar).',
      },
      {
        text: 'Membaca frame kontrol toleransi ⊥ 0,05 | A sebagai batas penyimpangan ketegaklurusan 0,05 mm mengacu datum A.',
        answer: 0,
        reason: 'Struktur Feature Control Frame GD&T benar: simbol karakteristik | toleransi | datum.',
      },
      {
        text: 'Menafsirkan M16 × 1,5 sebagai ulir metrik halus berdiameter luar nominal 16 mm dengan kisar 1,5 mm.',
        answer: 0,
        reason: 'Kisar standar kasar M16 adalah 2,0 mm, sehingga 1,5 mm termasuk kisar halus.',
      },
    ],
    explanation:
      'Kesalahan paling sering di SMK adalah membalik arti angka Ra: semakin kecil angka Ra dalam mikrometer (μm), semakin halus kekasaran rata-ratanya. Pemahaman GD&T dan notasi ulir juga wajib teliti untuk menghindari gagal pasang.',
  },
  {
    id: 'pck-gt-08',
    bank: 'PCK',
    topic: 'Gambar Teknik, Proyeksi & CAD',
    pckFocus: 'Media/ICT & Simulator',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Guru membimbing murid kelas XI merancang perakitan (assembly) ragum sederhana menggunakan perangkat lunak CAD 3D parametrik. Tentukan apakah prinsip pemodelan berikut Tepat atau Tidak Tepat untuk diajarkan.',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Menetapkan hubungan mate/constraint konsentris dan koinsiden antarpart sehingga gerakan pencekaman dapat disimulasikan dan diuji tabrakannya (interference check).',
        answer: 0,
        reason: 'Constraint kinematik tepat memvalidasi fungsi gerak dan mendeteksi tabrakan antar komponen sebelum diproduksi.',
      },
      {
        text: 'Menggeser komponen secara manual di ruang 3D tanpa mate hingga tampak berimpit di layar lalu membiarkannya mengambang (unconstrained).',
        answer: 1,
        reason: 'Part tanpa mate akan bergeser saat terjadi perubahan ukuran atau export gambar kerja dan merusak validitas assembly.',
      },
      {
        text: 'Menghubungkan model 3D langsung ke bill of materials (BOM) otomatis pada gambar 2D agar jumlah komponen standar dan nonstandar konsisten.',
        answer: 0,
        reason: 'Integrasi asosiatif model–BOM–gambar 2D adalah praktik industri yang memperkecil kesalahan daftar material.',
      },
    ],
    explanation:
      'Keunggulan utama CAD parametrik 3D adalah asosiasi dinamis antara constraint sketsa, assembly mate, interference detection, dan BOM gambar kerja 2D.',
  },
  {
    id: 'pck-gt-09',
    bank: 'PCK',
    topic: 'Gambar Teknik, Proyeksi & CAD',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Saat mengevaluasi gambar kerja komponen mesin bertoleransi yang dibuat siswa kelas XI, tentukan apakah kritik asesmen berikut Benar atau Salah.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Pemberian ukuran rantai berulang tanpa datum acuan menyebabkan akumulasi kesalahan toleransi pada lubang-lubang kritis.',
        answer: 0,
        reason: 'Dimensioning berantai menjumlahkan toleransi tiap segmen; fitur kritis wajib mengacu pada datum fungsional.',
      },
      {
        text: 'Menumpuk angka dimensi di dalam arsiran gambar potongan tanpa memutus arsiran masih diperbolehkan dan dianggap rapi menurut standar ISO.',
        answer: 1,
        reason: 'Angka ukuran harus ditempatkan di luar area terarsir, atau bila terpaksa masuk, garis arsiran di sekitar angka wajib diputus agar terbaca jelas.',
      },
      {
        text: 'Pemilihan datum harus selaras dengan permukaan acuan pengecekan metrologi dan pemegangan di mesin.',
        answer: 0,
        reason: 'Datum desain, datum manufaktur, dan datum inspeksi sebaiknya sinkron agar benda mudah diukur dan dijepit.',
      },
    ],
    explanation:
      'Kualitas gambar kerja manufaktur ditentukan oleh kejelasan keterbacaan (angka tidak bertabrakan arsiran) serta strategi pendimensian berbasis datum untuk mengendalikan akumulasi toleransi.',
  },
  {
    id: 'pck-gt-10',
    bank: 'PCK',
    topic: 'Gambar Teknik, Proyeksi & CAD',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Banyak siswa pemula membuat sketsa 2D CAD dengan hasil "biru" (under-constrained), sehingga saat mereka mengubah salah satu panjang sisi di tengah desain, geometri lain melenceng acak. Langkah instruksional apa saja yang tepat dilakukan guru untuk mengatasi kebiasaan ini? (Pilih semua jawaban benar)',
    options: [
      'Membiasakan siswa menerapkan geometric constraints (horizontal, vertikal, konsentris, simetri, tangen) sebelum mengisi seluruh dimensi angka.',
      'Menjelaskan konsep titik pusat asal (origin) sebagai jangkar datum pertama agar posisi sketsa tidak melayang bebas.',
      'Melatih kebiasaan uji tarik titik/garis (drag test) pada elemen yang belum hitam/fully constrained untuk melacak derajat kebebasan tersisa.',
      'Menyuruh siswa memakai fitur "Fix" (kunci mati koordinat layar) pada setiap garis agar cepat berubah warna menjadi terkunci.',
      'Mengharuskan semua bentuk selalu dibuat dalam 1 sketsa rumit tunggal sebelum operasi extrude pertama.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Sketsa parametrik yang sehat dikendalikan melalui origin datum + geometric constraints + dimensional constraints hingga fully defined. Mengandalkan "Fix" (kunci koordinat mati) merusak parametrik bila dimensi perlu direvisi, dan menggabungkan terlalu banyak profil dalam satu sketsa membuat feature tree rapuh.',
  },
  {
    id: 'pck-gt-11',
    bank: 'PCK',
    topic: 'Gambar Teknik, Proyeksi & CAD',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Dalam satu kelas X Gambar Teknik terdapat tiga kelompok kesiapan: Kelompok A cepat menguasai proyeksi ortogonal 3 pandangan, Kelompok B masih tertukar letak pandangan kiri vs kanan, dan Kelompok C kesulitan membayangkan bentuk 3D dari gambar kerja datar. Rancangan pembelajaran berdiferensiasi yang tepat adalah .... (Pilih lebih dari satu)',
    options: [
      'Menyediakan benda peraga balok bertingkat nyata serta simulator rotasi 3D interaktif bagi Kelompok C untuk mencocokkan pandangan nyata dengan ortogonalnya.',
      'Memberikan kartu tantangan (checklist pemetaan wajah benda depan–atas–samping) berjenjang bagi Kelompok B.',
      'Memberikan proyek pengayaan gambar potongan separuh dan perakitan sederhana kepada Kelompok A.',
      'Menghentikan materi seluruh kelas selama tiga minggu hanya untuk mengulang proyeksi titik bagi semua kelompok secara seragam.',
      'Meminta Kelompok C hanya menggambar ulang etiket agar cepat selesai bersamaan.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Diferensiasi kelas teknik memadukan scaffolding konkret-spasial bagi yang kesulitan imajinasi 3D (Kelompok C), pemetaan prosedural bagi yang masih tertukar proyeksi (Kelompok B), dan tantangan analisis gambar potongan/assembly bagi kelompok cepat (Kelompok A).',
  },
  {
    id: 'pck-gt-12',
    bank: 'PCK',
    topic: 'Gambar Teknik, Proyeksi & CAD',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.4',
    prompt:
      'Untuk menyelaraskan kompetensi CAD & Gambar Manufaktur siswa SMK Teknik Mesin dengan kebutuhan industri modern dan Teaching Factory, keterampilan esensial apa saja yang wajib terintegrasi dalam modul ajar? (Pilih semua jawaban benar)',
    options: [
      'Penguasaan ekspor file netral/manufaktur (seperti STEP/IGES/DXF) untuk simulasi CAM atau pemotongan CNC/laser.',
      'Kemampuan membaca dan menerjemahkan toleransi dimensi serta kekasaran permukaan terhadap pemilihan proses mesin.',
      'Keterampilan merevisi model parametrik berdasarkan hasil uji kecocokan assembly dan umpan balik operator.',
      'Ketergantungan penuh pada penghafalan letak menu ikon versi software tunggal keluaran tahun lama.',
      'Mengabaikan etiket dan daftar komponen (BOM) karena dianggap urusan administrasi kantor.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Dalam ekosistem manufaktur modern, CAD adalah mata rantai menuju CAM dan QC: siswa perlu menguasai interoperabilitas STEP/DXF, toleransi fungsional terhadap kapabilitas proses mesin, serta revisi model parametrik kolaboratif.',
  },

  // === 2. PEMESINAN BUBUT, FRAIS & GERINDA (12) ===
  {
    id: 'pck-pm-01',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Siswa kelas XI akan membubut poros baja lunak (mild steel) berdiameter awal Ø50 mm dengan kecepatan potong (Cs) sesuai rekomendasi pahat HSS sebesar 31,4 m/menit (π = 3,14). Sebelum menyalakan mesin, seorang siswa langsung menyetel putaran spindel ke 900 rpm dengan alasan "makin cepat makin halus". Bagaimana guru membimbing perhitungan matematis dan alasan teknis yang benar?',
    options: [
      'Menyetujui 900 rpm asalkan cairan pendingin dialirkan penuh terus-menerus.',
      'Menggunakan rumus n = (1000 × Cs) / (π × d) sehingga diperoleh n = (1000 × 31,4) / (3,14 × 50) = 200 rpm, dan menjelaskan bahwa putaran 900 rpm mengakibatkan panas berlebih yang menumpulkan ujung pahat HSS dengan cepat.',
      'Menghitung n = (π × d × Cs) / 1000 sehingga menyarankan putaran 5 rpm.',
      'Menyetel putaran ke angka tertinggi mesin (1500 rpm) agar gesekan berkurang.',
      'Mengabaikan diameter benda kerja karena kecepatan putar hanya bergantung pada jenis oli pelumas gearbox.',
    ],
    answer: 1,
    explanation:
      'Putaran spindel bubut dihitung dengan rumus n = (1000 × Cs) / (π × d). Untuk Cs = 31,4 m/menit dan d = 50 mm, n = 31.400 / 157 = 200 rpm (pilih putaran mesin terdekat di tabel gearbox, misal 180–210 rpm). Mengoperasikan pahat HSS jauh di atas Cs desain (900 rpm = Cs ≈ 141 m/menit) melampaui batas temperatur tahan panas HSS sehingga mata pahat gosong/tumpul seketika.',
  },
  {
    id: 'pck-pm-02',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Saat mengasah dan memasang pahat bubut rata kanan, siswa menemukan ujung pahat menghasilkan permukaan kasar bergetar (chatter) disertai tonjolan kecil tepat di tengah ujung sumbu (pip) saat membubut muka (facing). Setelah dicek guru, ujung mata potong pahat terpasang 3 mm LEBIH TINGGI dari senter kepala lepas (tailstock). Mengapa masalah itu muncul dan bagaimana pembimbingan paling tepat?',
    options: [
      'Posisi pahat lebih tinggi daripada senter menyebabkan sudut bebas (clearance angle) efektif mengecil/bergesekan dengan bidang kerja dan menyisakan pusat yang tak tersayat; siswa dibimbing menyetel ujung pahat tepat setinggi ujung senter kepala lepas menggunakan mal/senter.',
      'Posisi pahat sebaiknya dinaikkan lagi menjadi 6 mm di atas senter agar tatal patah.',
      'Masalah timbul murni karena rahang cekam berputar terbalik tanpa hubungan dengan tinggi pahat.',
      'Solusinya cukup dengan menurunkan kedalaman potong menjadi 0,05 mm tanpa menyentuh posisi pahat.',
      'Siswa diminta menekan eretan lintang lebih keras untuk memaksa pip patah sendiri.',
    ],
    answer: 0,
    explanation:
      'Pemasangan ujung mata potong pahat bubut wajib setinggi senter benda kerja. Bila terlalu tinggi, sisi bawah pahat bergesekan dengan benda kerja (sudut bebas efektif hilang -> getaran/panas) dan saat facing menyisakan tonjolan kecil di pusat sumbu. Bila terlalu rendah, mata potong mudah membongkar (digging in) dan berisiko patah.',
  },
  {
    id: 'pck-pm-03',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada pembelajaran mesin frais konvensional dengan kepala pembagi (dividing head) berasio cacing 40:1, siswa diminta membuat roda gigi lurus sebanyak z = 32 gigi. Guru memberi piring pembagi berlubang 15, 16, 17, 18, 19, dan 20. Perhitungan penentuan jarak lubang engkol yang harus dikuasai siswa adalah ....',
    options: [
      '40 / 32 = 1 1/4 putaran -> 1 putaran penuh + 4 lubang pada lingkaran lubang 16 (atau 5 lubang pada lingkaran 20).',
      '32 / 40 = 4/5 putaran -> 0 putaran penuh + 12 lubang pada lingkaran 16.',
      '40 / 32 = 1 8/32 -> cukup 1 putaran penuh + 8 lubang pada lingkaran 20.',
      '40 × 32 = 1280 putaran total, dibagi dua arah.',
      '1 putaran penuh + 4 lubang pada lingkaran lubang 18.',
    ],
    answer: 0,
    explanation:
      'Rumus pembagian langsung kepala pembagi standar rasio 40:1 adalah n_k = 40 / z = 40 / 32 = 1 8/32 = 1 1/4 putaran. Pecahan 1/4 disesuaikan dengan jumlah lubang piring pembagi yang tersedia: pada piring 16 adalah 4/16 (4 jarak lubang), atau pada piring 20 adalah 5/20 (5 jarak lubang) setelah 1 putaran penuh.',
  },
  {
    id: 'pck-pm-04',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Dalam praktikum pembubutan ulir segitiga metrik M12 × 1,75 dengan eretan atas dimiringkan 29,5° (atau setengah sudut ulir), guru ingin siswa tidak sekadar meniru tombol tuas ulir, tetapi memahami prinsip kerja mekanisme agar tidak merusak drat pada pemakanan ulang. Aktivitas pemaknaan konsep terbaik sebelum menyayat adalah ....',
    options: [
      'Melarang siswa membaca arah gerak jarum dial ulir agar terbiasa menebak posisi pemakanan.',
      'Menjelaskan konsep sinkronisasi lead screw dan half-nut: mengapa pada kisar ganjil/desimal tertentu half-nut TIDAK boleh dibuka selama proses hingga selesai (cukup putar balik spindel setelah membebaskan pahat ke belakang) serta memvalidasi kisar dengan mal ulir pada goresan uji sangat dangkal (scratch pass).',
      'Menyuruh siswa membuka half-nut sesuka hati setiap akhir lintasan lalu memulai dari posisi sembarang.',
      'Memakai kecepatan spindel 1200 rpm agar inersia mesin mengunci ulir otomatis.',
      'Langsung menyayat sedalam 1,08 mm dalam satu lintasan tunggal.',
    ],
    answer: 1,
    explanation:
      'Kesalahan paling fatal siswa saat membubut ulir adalah membebaskan tuas half-nut tanpa memahami kelipatan kisar lead screw (menyebabkan ulir ganda/rusak pada lintasan berikutnya) serta tidak melakukan scratch pass terukur memakai mal ulir terlebih dahulu.',
  },
  {
    id: 'pck-pm-05',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Seorang siswa mengerjakan pengefraisan alur pada mesin frais vertikal konvensional menggunakan metode frais searah (climb milling) pada mesin tua yang baut ulir mejanya memiliki celah longgar (backlash) cukup besar. Tiba-tiba benda kerja tertarik menyentak hingga mata pisau endmill patah. Diagnosis teknis untuk bahan refleksi kelas adalah ....',
    options: [
      'Pisau endmill selalu tidak cocok untuk alur dangkal pada baja.',
      'Pada climb milling, komponen gaya potong mendorong benda kerja searah laju pemakanan meja sehingga celah backlash terseret mendadak; mesin konvensional tanpa mekanisme anti-backlash lebih aman menggunakan frais berlawanan arah (conventional milling).',
      'Putaran spindel mesin frais vertikal seharusnya selalu diputar terbalik CCW.',
      'Sebab tunggalnya adalah kekurangan pelumas gemuk pada sumbu Z.',
      'Ragum mesin harus dibuka longgar agar bisa meredam getaran.',
    ],
    answer: 1,
    explanation:
      'Pada climb milling (frais searah), arah putar gigi pisau sama dengan arah gerak meja sehingga gaya potong menarik benda kerja ke depan—jika meja konvensional memiliki backlash longgar, meja melompat dan mematahkan pisau. Pada mesin konvensional dengan backlash, conventional milling (gaya mendorong melawan gerak meja) menekan ulir meja tetap mantap.',
  },
  {
    id: 'pck-pm-06',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Sebelum menyalakan mesin gerinda datar/silinder, seorang siswa menemukan bahwa batu gerinda aluminium oksida baru saja terjatuh ke lantai beton sebelumnya tetapi tampak utuh secara kasat mata. Langkah inspeksi keselamatan wajib yang harus diajarkan guru adalah ....',
    options: [
      'Langsung memasang batu gerinda dan menyalakannya sambil berdiri di depan garis putar untuk memastikan suaranya halus.',
      'Melakukan Ring Test (menggantung/menyangga lubang pusat batu dengan pin non-logam dan mengetuk pelan sisi samping memakai gagang kayu/obeng plastik): suara nyaring menandakan utuh, suara sumbang/pecah menandakan retak dalam sehingga WAJIB ditolak pakai.',
      'Mengamplas seluruh sisi luar batu dengan amplas kasar agar bekas jatuh hilang.',
      'Merendam batu dalam oli pelumas selama 1 malam.',
      'Mengencangkan mur flens pengunci sekuat tenaga tanpa pelapis kertas blotter.',
    ],
    answer: 1,
    explanation:
      'Batu gerinda vitrified sangat rapuh terhadap retak mikro internal akibat benturan jatuh; saat berputar pada kecepatan tinggi bisa meledak. Ring test wajib dilakukan sebelum pemasangan (dengan blotter/kertas peredam di antara flens, torsi secukupnya), dan saat uji jalan awal operator wajib berdiri di SAMPING bidang putar selama ±1 menit, bukan di depannya.',
  },
  {
    id: 'pck-pm-07',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Pada uji praktik membubut bertingkat siswa SMK, guru merumuskan langkah pengisian rubrik proses dan produk. Tentukan apakah pernyataan praktik pembubutan berikut Benar atau Salah.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Sebelum membubut panjang dengan penopang senter kepala lepas (tailstock), siswa wajib membuat lubang senter (center drill) terlebih dahulu pada ujung permukaan rata benda kerja.',
        answer: 0,
        reason: 'Center drill menciptakan dudukan kerucut 60° yang presisi dan aman bagi senter putar kepala lepas.',
      },
      {
        text: 'Penjepitan benda kerja panjang cukup dicekam sedikit (±5 mm) dan dibiarkan menonjol 15 kali diameternya tanpa penopang kepala lepas agar pembubutan lebih cepat.',
        answer: 1,
        reason: 'Overhang berlebih tanpa tailstock/steady rest memicu defleksi, tirus tak disengaja, chatter, dan bahaya benda kerja terlempar.',
      },
      {
        text: 'Penyapuan finishing dilakukan dengan ketebalan potong (depth of cut) tipis terukur sebelum mengecek dimensi menggunakan mikrometer saat spindel berhenti total.',
        answer: 0,
        reason: 'Pengukuran wajib saat mesin berhenti penuh agar terhindar kecelakaan dan hasil ukur akurat.',
      },
      {
        text: 'Pembersihan tatal baja melilit panjang di dekat cekam saat spindel berputar dilakukan cepat memakai jari tangan telanjang agar waktu tidak habis.',
        answer: 1,
        reason: 'Sangat berbahaya; pembersihan tatal wajib menghentikan mesin terlebih dahulu dan menggunakan pengait tatal (chip hook) atau kuas.',
      },
    ],
    explanation:
      'Asesmen proses pemesinan menggabungkan kepatuhan prosedur keselamatan (cekam aman, senter bor, ukur saat mesin berhenti, chip hook) dan strategi pemotongan (roughing vs finishing).',
  },
  {
    id: 'pck-pm-08',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Guru menjelaskan teknik pembubutan tirus luar (taper turning) pada bengkel bubut konvensional SMK. Tentukan apakah pernyataan mengenai metode pembubutan tirus berikut Benar atau Salah.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Memiringkan eretan atas (compound rest) cocok untuk tirus curam yang relatif pendek karena panjang pemakanannya dibatasi langkah eretan atas.',
        answer: 0,
        reason: 'Compound rest fleksibel hingga sudut curam, tetapi panjang langkah eretannya terbatas dan pengumpanannya manual.',
      },
      {
        text: 'Menggeser kepala lepas (tailstock offset) paling cocok untuk benda kerja tirus panjang bersudut kecil dan memungkinkan penggunaan pemakanan otomatis eretan memanjang.',
        answer: 0,
        reason: 'Offset tailstock memanfaatkan pembubutan antar dua senter dengan feed otomatis untuk tirus landai panjang.',
      },
      {
        text: 'Rumus sudut kemiringan eretan atas untuk diameter besar D, diameter kecil d, dan panjang tirus L adalah tan α = (D - d) / (2 × L).',
        answer: 0,
        reason: 'Selisih jari-jari adalah (D - d)/2 dibagi panjang tirus L menghasilkan nilai tangen setengah sudut kerucut (α).',
      },
    ],
    explanation:
      'Pemilihan metode tirus bergantung pada sudut dan panjang tirus: eretan atas untuk sudut besar/pendek, offset kepala lepas untuk sudut kecil/panjang antar-senter, atau taper attachment jika tersedia.',
  },
  {
    id: 'pck-pm-09',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Media/ICT & Simulator',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Ketika rasio jumlah siswa terhadap unit mesin bubut fisik di bengkel adalah 4:1, guru merancang pembelajaran berotasi memadukan simulasi digital prapraktik dan bengkel nyata. Evaluasi efektivitas skenario berikut.',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Kelompok yang menunggu giliran mesin fisik menganalisis lembar kerja rencana pemotongan (perhitungan Cs, rpm, urutan langkah, dan identifikasi bahaya) atau menjalankan simulator virtual agar tetap aktif belajar.',
        answer: 0,
        reason: 'Meminimalkan waktu menganggur (idle time) dan memastikan siswa siap mental/hitung sebelum menyentuh mesin fisik.',
      },
      {
        text: 'Seluruh 32 siswa berkerumun rapat menonton 1 siswa mengoperasikan mesin yang sama tanpa tugas terstruktur hingga bel berbunyi.',
        answer: 1,
        reason: 'Kerumunan dekat mesin berputar melanggar keselamatan K3LH dan memicu kepasifan belajar.',
      },
      {
        text: 'Setiap siswa wajib lolos cek kesiapan (pemeriksaan clamping, arah putar, rpm, dan APD) bersama teman pengamat/guru sebelum tombol start mesin fisik ditekan.',
        answer: 0,
        reason: 'Pembiasaan peer-verification check-list menanamkan disiplin keselamatan dan tanggung jawab kolaboratif.',
      },
    ],
    explanation:
      'Manajemen rotasi bengkel (station rotation) memadukan simulator/perencanaan di meja kerja, peer-check keselamatan, dan giliran mesin berjumlah kecil guna menjaga keterlibatan aktif maupun keselamatan.',
  },
  {
    id: 'pck-pm-10',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam praktikum pembubutan rata poros baja St 37, siswa mendapati benda kerja berubah warna kebiruan pada ujung tatal, pahat cepat aus berbunyi melengking, dan ukuran diameter ternyata menyusut sedikit di luar gambar sesudah dingin. Faktor apa saja yang logis menjadi penyebab teknis kejadian tersebut? (Pilih semua jawaban benar)',
    options: [
      'Putaran spindel terlalu tinggi melampaui batas Cs rekomendasi pahat sehingga terjadi panas berlebih dan pemuaian termal benda kerja selama disayat.',
      'Pemilihan cairan pendingin (coolant) tidak memadai atau tidak dialirkan tepat menuju titik pertemuan ujung potong dan benda kerja.',
      'Siswa mengabaikan ketepatan sudut bebas/senter pahat atau meneruskan pemakanan memakai mata potong yang sudah tumpul.',
      'Pembacaan skala nonius eretan lintang terlalu kecil 0,02 mm pada finishing.',
      'Benda kerja tidak dilap memakai kain basah saat mesin masih berputar 800 rpm.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Panas berlebih (tatal biru + bunyi melengking) akibat rpm berlebih, tanpa coolant efektif, atau pahat tumpul/tinggi salah menyebabkan keausan cepat sekaligus pemuaian benda kerja saat masih panas (saat didinginkan diameternya menyusut di bawah ukuran target).',
  },
  {
    id: 'pck-pm-11',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Guru akan mengajarkan urutan langkah kerja (operation sheet / SOP) pembuatan poros eksentrik sederhana kepada kelas XI. Pendekatan pembelajaran berbasis masalah dan kontekstual mana saja yang paling efektif membangun kemandirian berpikir siswa? (Pilih lebih dari satu)',
    options: [
      'Meminta siswa menganalisis gambar kerja poros eksentrik terlebih dahulu untuk merumuskan urutan operasi (facing -> senter -> bubut bertingkat -> pencekaman offset rahang/collet) sebelum membandingkannya dengan contoh SOP baku.',
      'Mendiskusikan konsekuensi urutan salah—misalnya langsung mengebor alur pasak atau mengulir sebelum membubut diameter bertingkat acuan.',
      'Menyediakan lembar kerja berpanduan pertanyaan reflektif agar setiap kelompok memverifikasi titik tumpu datum pencekaman.',
      'Menuliskan urutan 1–15 di papan tulis dan melarang siswa menanyakan alasan mengapa suatu langkah didahulukan.',
      'Menghilangkan tahap penyusunan operation sheet dan menyuruh siswa langsung memotong bahan sesuka urutan masing-masing.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Menyusun operation sheet secara analitis (membandingkan konsekuensi urutan salah, menjaga integritas datum pencekaman) membentuk kompetensi perencana proses (process engineer mindset), bukan sekadar operator peniru instruksi mekanis.',
  },
  {
    id: 'pck-pm-12',
    bank: 'PCK',
    topic: 'Pemesinan Bubut, Frais & Gerinda',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.5',
    prompt:
      'Agar proyek bengkel pemesinan berorientasi Teaching Factory dan tidak berakhir menjadi besi bekas tak berguna, komponen asesmen otentik dan pemanfaatan produk yang bernilai edukatif tinggi meliputi .... (Pilih semua jawaban benar)',
    options: [
      'Memproduksi komponen fungsional layak pakai (seperti pin pengunci bengkel, poros roda troli sekolah, atau fixture alat bantu praktik) dengan standar QC toleransi jelas.',
      'Mewajibkan siswa mengisi lembar Quality Control mandiri (membandingkan target gambar kerja vs ukuran aktual dengan deviasi tercatat).',
      'Mengadakan refleksi perbaikan proses apabila ada dimensi di luar toleransi (rework/analisis akar cacat) bukan sekadar langsung memberi skor akhir tanpa umpan balik.',
      'Membuang seluruh hasil praktik yang meleset 0,05 mm tanpa pernah mengajak siswa mengukur atau mendiagnosis penyebab penyimpangannya.',
      'Menilai seluruh kelompok hanya berdasarkan kilau pengamplasan akhir tanpa memeriksa fungsi kecocokan perakitan.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Teaching Factory menghubungkan standar mutu produk nyata, dokumentasi QC berbasis toleransi terukur, dan siklus evaluasi perbaikan cacat manufaktur sehingga proses pembelajaran bermakna penuh.',
  },

  // === 3. PEMROGRAMAN CNC & SIMULATOR (11) ===
  {
    id: 'pck-cnc-01',
    bank: 'PCK',
    topic: 'Pemrograman CNC & Simulator',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada program mesin CNC Bubut/Frais sistem koordinat G90 (Absolut) vs G91 (Inkremental), posisi pahat saat ini berada di (X20, Z5). Blok berikutnya tertulis: "G91 G01 X10 Z-15 F120". Seorang siswa menyimpulkan pahat akan bergerak berhenti di koordinat (X10, Z-15) terhadap titik nol benda kerja. Pembimbingan konseptual yang benar adalah ....',
    options: [
      'Menyetujui kesimpulan siswa karena angka di baris program selalu mengacu titik nol mesin.',
      'Menunjukkan pada simulator CNC bahwa perintah G91 bermakna inkremental (pergeseran relatif dari posisi sekarang), sehingga X+10 dan Z-15 memindahkan pahat ke posisi akhir (X30, Z-10) relatif terhadap titik nol G54.',
      'Menjelaskan bahwa G01 menonaktifkan fungsi sumbu Z secara otomatis.',
      'Mengubah F120 menjadi G00 agar pahat tidak menyentuh benda kerja sama sekali.',
      'Mengganti seluruh program menjadi kode M05 supaya koordinat nol bergeser otomatis.',
    ],
    answer: 1,
    explanation:
      'G90 = koordinat absolut terhadap datum G54; G91 = koordinat inkremental (jarak perpindahan dari posisi sesaat). Dari posisi (X20, Z5), perpindahan inkremental X+10 Z-15 menempatkan pahat di koordinat absolut X = 20+10 = 30 dan Z = 5+(-15) = -10. Salah mengartikan G90/G91 adalah penyebab klasik tabrakan tool di CNC.',
  },
  {
    id: 'pck-cnc-02',
    bank: 'PCK',
    topic: 'Pemrograman CNC & Simulator',
    pckFocus: 'Media/ICT & Simulator',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Di SMK, jumlah mesin CNC riil sangat terbatas dan biaya risiko jika pahat carbide atau spindel menabrak cekam akibat salah kode G-Code sangat mahal. Urutan alur pembelajaran (scaffolding) berbasis TIK yang paling aman dan efektif sebelum eksekusi pemotongan benda kerja nyata adalah ....',
    options: [
      'Membiarkan siswa langsung memasukkan program ketikan manual ke mesin nyata tanpa pengecekan agar belajar dari bunyi tabrakan.',
      'Menyusun dan menguji G-Code di simulator CNC interaktif terlebih dahulu (cek lintasan toolpath & deteksi tabrakan) -> memverifikasi parameter tool offset & G54 -> melaksanakan dry-run / single-block dengan rapid override rendah di mesin riil sebelum memotong.',
      'Hanya mengajarkan teori menghafal arti G00–G99 di papan tulis sepanjang semester tanpa simulasi maupun mesin.',
      'Mengizinkan siswa menyalin program yang sama milik satu kelompok lalu menekan Cycle Start beramai-ramai tanpa verifikasi kerja offset.',
      'Melepas pengaman pintu mesin CNC agar siswa lebih cepat melihat posisi ujung pahat saat rapid G00.',
    ],
    answer: 1,
    explanation:
      'Prosedur bertahap Simulator Digital -> Verifikasi Work Offset (G54) & Tool Geometry Offset -> Dry Run / Single Block di mesin fisik dengan Rapid Override 25% & jari dekat tombol Feed Hold/Emergency Stop adalah praktik standar industri sekaligus mitigasi risiko keselamatan bengkel CNC.',
  },
  {
    id: 'pck-cnc-03',
    bank: 'PCK',
    topic: 'Pemrograman CNC & Simulator',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Seorang siswa menulis blok program pemakanan kontur CNC Bubut dari Z5 menuju Z-25 secara langsung memakai perintah "G00 X28 Z-25;" untuk memotong benda kerja baja diameter awal Ø35 mm. Sebelum menekan tombol simulasi Run, guru menghentikan siswa tersebut karena blok tersebut sangat berbahaya. Mengapa blok itu keliru dan bagaimana perbaikannya?',
    options: [
      'G00 adalah gerak pemosisian cepat (rapid traverse) tanpa pemakanan terkendali; menabrakkan pahat ke material pada kecepatan rapid merusak pahat dan benda kerja—pemotongan wajib memakai G01 dengan nilai feed rate (F) sesuai material.',
      'Kode G00 hanya boleh dipakai bila spindel berputar terbalik M04.',
      'Kesalahan terletak pada tidak dicantumkannya nilai putaran rpm di setiap baris program.',
      'Seharusnya menggunakan G02 untuk menyayat silinder lurus memanjang.',
      'Z-25 berarti memotong ke arah menjauhi cekam sehingga pahat tidak akan menyentuh benda.',
    ],
    answer: 0,
    explanation:
      'G00 selalu bergerak dengan kecepatan maksimum mesin (rapid non-cutting move) dan lintasannya tidak dirancang untuk beban penyayatan; menabrakkan pahat berkecepatan rapid ke material pejal mengakibatkan patah pahat hingga kerusakan turret. Penyayatan lurus wajib menggunakan G01 dengan Feed (F).',
  },
  {
    id: 'pck-cnc-04',
    bank: 'PCK',
    topic: 'Pemrograman CNC & Simulator',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada pemrograman CNC Milling 3-Axis untuk mengerjakan kontur luar profil persegi berukuran tepat 60 × 40 mm menggunakan pisau endmill Ø10 mm, siswa memprogram senter koordinat profil persis di 60 × 40 mm tanpa menyalakan kompensasi radius (G41/G42) atau offset CAM. Akibatnya ukuran akhir balok mengecil menjadi 50 × 30 mm! Konsep apa yang harus ditanamkan guru?',
    options: [
      'Pisau endmill selalu mengikis tambahan 5 mm karena pemuaian panas.',
      'Lintasan program CNC mengendalikan sumbu PUSAT pisau, sehingga tanpa mengaktifkan Cutter Radius Compensation (G41/G42 + nilai radius tool D) atau pergeseran offset setengah diameter pisau (5 mm di tiap sisi), kedua sisi termakan radius pisau sebesar 2 × 5 = 10 mm.',
      'Ukuran mengecil terjadi karena siswa memakai koordinat G90 alih-alih G91.',
      'Masalah bisa diselesaikan otomatis dengan mengganti perintah F menjadi lebih lambat.',
      'Endmill Ø10 mm hanya boleh digunakan untuk membuat lubang pengeboran.',
    ],
    answer: 1,
    explanation:
      'Tanpa Cutter Radius Compensation (G41 kiri / G42 kanan terhadap arah gerak, dengan register D berisi radius R=5 mm) atau offset toolpath di CAM, pusat pisau bergerak tepat di atas garis kontur sehingga benda kerja terpotong sebesar 1× radius di kiri dan 1× radius di kanan = berkurang 10 mm total!',
  },
  {
    id: 'pck-cnc-05',
    bank: 'PCK',
    topic: 'Pemrograman CNC & Simulator',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Sebuah SMK memiliki perangkat simulator CNC di PC maupun browser interaktif sehingga setiap siswa bisa menguji G-Code secara mandiri kapan saja. Bagaimana strategi asesmen guru untuk memastikan siswa benar-benar memahami logika kode G/M dan bukan sekadar menebak-nebak hingga simulasi kebetulan terlihat mulus?',
    options: [
      'Hanya menilai screenshot hasil render benda akhir tanpa membaca baris G-Code sama sekali.',
      'Menggabungkan uji pembacaan dry-trace (siswa diminta memprediksi koordinat akhir & lintasan dari cuplikan G-Code bermasalah), inspeksi keselamatan rapid/clearance plane Z+, validasi ketepatan G54/tool offset, dan penjelasan lisan alasan pemilihan G/M code.',
      'Memberikan satu file NC master dari guru untuk dijalankan serentak lalu menilai kerapian nama file.',
      'Menguji hafalan kode M00 sampai M99 tanpa konteks kontur.',
      'Membebaskan siswa mengganti program menjadi siklus acak hingga garis merah tidak muncul lagi.',
    ],
    answer: 1,
    explanation:
      'Asesmen otentik pemrograman CNC memadukan kemampuan membaca & men-debug G-Code (menemukan bug keamanan seperti kurang Z-safe plane, salah G90/G91, atau G00 masuk ke material) dengan validasi produk di simulator.',
  },
  {
    id: 'pck-cnc-06',
    bank: 'PCK',
    topic: 'Pemrograman CNC & Simulator',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Siswa kelas XII memeriksa potongan program CNC Milling berikut:\nN10 G54 G90 G17 G21;\nN20 T01 M06;\nN30 S1500 M03;\nN40 G00 X0 Y0 Z5;\nN50 G01 Z-3 F100;\nN60 G02 X20 Y20 R20 F150;\nN70 G00 Z25;\nN80 M05;\nN90 M30;\nTentukan ketepatan masing-masing interpretasi kode pada tabel berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Blok N10 menetapkan Work Coordinate System G54, mode absolut (G90), bidang kerja X-Y (G17), dan satuan milimeter (G21).',
        answer: 0,
        reason: 'Semua kode modal inisialisasi N10 tepat untuk pemesinan bidang XY milimeter berbasis G54.',
      },
      {
        text: 'Blok N60 memerintahkan gerak melingkar berlawanan arah jarum jam (CCW) dari (0,0) ke (20,20).',
        answer: 1,
        reason: 'G02 adalah interpolasi melingkar SEARAH jarum jam (Clockwise / CW); berlawanan jarum jam adalah G03.',
      },
      {
        text: 'Blok N70 mengangkat pahat cepat ke jarak aman Z+25 mm sebelum spindel dihentikan oleh M05 pada N80.',
        answer: 0,
        reason: 'Retract Z aman mendahului penghentian spindel (M05) dan akhir program + rewind (M30).',
      },
      {
        text: 'Blok N50 menyayat langsung turun vertikal menembus material sejauh 3 mm memakai kecepatan rapid maksimal mesin.',
        answer: 1,
        reason: 'N50 menggunakan G01 F100 (gerak pemakanan terkendali 100 mm/menit), BUKAN G00 rapid.',
      },
    ],
    explanation:
      'Kemampuan membaca setiap modal kode G/M secara presisi (membedakan G02 CW vs G03 CCW, G00 vs G01, retract aman sebelum M05/M30) merupakan inti literasi pemrograman CNC.',
  },
  {
    id: 'pck-cnc-07',
    bank: 'PCK',
    topic: 'Pemrograman CNC & Simulator',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Dalam pengoperasian mesin CNC nyata di bengkel sekolah setelah verifikasi simulator selesai, tentukan apakah prosedur keselamatan di bawah ini Sesuai atau Tidak Sesuai dengan SOP TUK/Industri.',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Memverifikasi nilai Work Offset (G54 Z0) pada permukaan referensi benda kerja sebelum menjalankan program.',
        answer: 0,
        reason: 'Kesalahan penentuan Z0 pada G54 adalah sumber utama tool crash.',
      },
      {
        text: 'Menonaktifkan sensor pintu interlock agar pintu tetap terbuka penuh dan tangan bisa menyemprot oli tambahan saat spindel berputar cepat.',
        answer: 1,
        reason: 'Membypass interlock keselamatan sangat terlarang karena berisiko melontarkan serpihan berkecepatan tinggi atau melukai tangan.',
      },
      {
        text: 'Menjalankan Single Block dengan Rapid Override diturunkan (misal 25%) pada pemotongan pertama benda uji sambil memantau jarak ke benda (Distance-to-Go).',
        answer: 0,
        reason: 'Single Block + pemantauan Distance-to-Go memberi kendali penuh untuk menekan Feed Hold bila posisi mendekat meleset.',
      },
    ],
    explanation:
      'Disiplin menguji offset Z0, menjaga fungsi safety interlock, serta menjalankan Single Block dan memantau Distance-to-Go pada running pertama melindungi siswa dan mesin bernilai ratusan juta rupiah.',
  },
  {
    id: 'pck-cnc-08',
    bank: 'PCK',
    topic: 'Pemrograman CNC & Simulator',
    pckFocus: 'Media/ICT & Simulator',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Guru memadukan perangkat lunak CAD-CAM (yang menghasilkan G-Code otomatis dari model 3D) dengan pembelajaran pemrograman G-Code manual pada siswa kelas XII. Tentukan ketepatan pertimbangan pedagogis berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Pemahaman G-Code manual tetap penting diajarkan agar lulusan SMK mampu membaca, memverifikasi keselamatan header/retract, dan mengedit cepat nilai feed/offset langsung di panel mesin CNC.',
        answer: 0,
        reason: 'Post-processor CAM tetap perlu diverifikasi operator di mesin melalui pembacaan G-Code sadar.',
      },
      {
        text: 'Karena sudah ada fitur generate G-Code dari CAM, operator mesin tidak perlu lagi mengecek apakah post-processor yang dipilih sesuai dengan kontroler mesin (misal Fanuc vs Siemens vs GSK).',
        answer: 1,
        reason: 'Salah memilih post-processor memicu kesalahan sintaks siklus (misal G71/Cycle81) hingga gerakan tak terduga berbahaya.',
      },
      {
        text: 'Siswa dapat membandingkan simulasi CAM vs G-Code tulisan tangan untuk kontur sederhana guna melihat hubungan antara model geometri dan efisiensi toolpath.',
        answer: 0,
        reason: 'Perbandingan kedua pendekatan memperdalam pemahaman konseptual dan efisiensi waktu siklus.',
      },
    ],
    explanation:
      'Sinergi CAM dan pemahaman G-Code dasar membekali siswa berpikir kritis atas keluaran post-processor sekaligus efisien mengolah kontur kompleks.',
  },
  {
    id: 'pck-cnc-09',
    bank: 'PCK',
    topic: 'Pemrograman CNC & Simulator',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada praktik CNC Bubut sistem absolut diameter (X = diameter, Z = panjang, nol di ujung kanan sumbu poros), siswa menulis program untuk membubut lurus diameter Ø30 mm menjadi Ø26 mm sejauh 40 mm ke arah cekam (Z-40). Saat dijalankan pada simulator, muncul pesan error / kontur terbalik / menabrak cekam. Apa saja kesalahan umum yang perlu diperiksa guru bersama siswa? (Pilih semua jawaban benar)',
    options: [
      'Menuliskan tanda Z+40 alih-alih Z-40 sehingga pahat melaju keluar menjauhi benda kerja ke arah tailstock.',
      'Salah memasukkan nilai jari-jari (X13) padahal mesin berada pada mode pemrograman diameter (seharusnya X26).',
      'Lupa memberikan baris gerak pendekatan awal di luar diameter benda kerja (misal G00 X32 Z2) sehingga pahat memotong miring diagonal langsung dari home position.',
      'Mengakhiri program dengan M30 alih-alih M02.',
      'Menggunakan satuan metrik G21 untuk dimensi milimeter.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Tiga sumber bug tersering di CNC Bubut adalah terbaliknya tanda sumbu Z (- ke arah cekam), tertukarnya mode X diameter vs X radius, serta lupa posisi aman clearance pendekatan (Z+2 / X > diameter bahan baku) sebelum G01.',
  },
  {
    id: 'pck-cnc-10',
    bank: 'PCK',
    topic: 'Pemrograman CNC & Simulator',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Untuk menciptakan pembelajaran pemrograman CNC yang bermakna, menantang, dan menyenangkan (deep learning), strategi mana saja yang layak diterapkan guru? (Pilih semua jawaban benar)',
    options: [
      'Memberikan tantangan "Debug Kode Bermasalah" di simulator di mana siswa berperan sebagai teknisi pemeliharaan yang mencari 3 jebakan tabrakan pada baris program.',
      'Menyelenggarakan proyek mini membuat produk kreatif bernilai guna (misal gantungan kunci aluminium terukir profil atau komponen rakitan presisi) dengan kompetisi efisiensi waktu siklus tanpa mengorbankan toleransi.',
      'Mengajak siswa memvisualisasikan lintasan pahat pada kertas berpetak Kartesius terlebih dahulu sebelum mengetikkannya di simulator.',
      'Meminta siswa menyalin 5 halaman kode heksadesimal dan G-Code proyek orang lain tanpa mengerti batas sumbu mesin.',
      'Menghukum setiap kesalahan sintaks di simulator dengan melarang siswa praktik selama satu bulan.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Eksplorasi aman di simulator, tantangan debugging, pemetaan koordinat Kartesius, dan proyek produk fungsional menciptakan rasa ingin tahu, berpikir kritis, dan motivasi intrinsik tanpa risiko merusak alat.',
  },
  {
    id: 'pck-cnc-11',
    bank: 'PCK',
    topic: 'Pemrograman CNC & Simulator',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.5',
    prompt:
      'Pada siklus bubut berulang kasar (Roughing Cycle, misalnya G71 pada Fanuc), parameter kritis yang wajib dijelaskan beserta dampaknya kepada siswa mencakup .... (Pilih semua jawaban benar)',
    options: [
      'Kedalaman penyayatan per lintasan (U / depth of cut) agar beban daya spindel tidak melampaui kapasitas sisipan karbida.',
      'Besarnya penyisihan material finishing pada sumbu X dan Z (U/W allowance) agar lintasan akhir G70 mampu menghasilkan kehalusan dan ukuran tepat.',
      'Penentuan nomor blok awal dan akhir sub-profil kontur (P dan Q) secara berurut menanjak atau menurun konsisten sesuai aturan mesin.',
      'Penghapusan titik nol benda kerja G54 di pertengahan siklus.',
      'Pengaturan putaran spindel menjadi 0 rpm selama proses roughing.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Siklus G71 mempermudah pemrograman pengasaran bertingkat selama siswa memahami kendali kedalaman potong per pass, sisa material finishing (allowance X/Z) untuk siklus G70, serta batas blok profil P–Q yang logis.',
  },

  // === 4. METROLOGI PRESISI & PENGUKURAN (11) ===
  {
    id: 'pck-met-01',
    bank: 'PCK',
    topic: 'Metrologi Presisi & Pengukuran',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam asesmen pembacaan mikrometer luar (ketelitian 0,01 mm) terhadap sebuah pin poros, pada skala utama (sleeve) bagian atas terlihat tepat melampaui garis 14 mm, garis setengah milimeter di bagian bawah SUDAH terlihat jelas di kanan angka 14, dan garis horizontal pada bidal (thimble) sejajar pada skala 28. Seorang siswa menuliskan hasil ukur "14,28 mm". Kekeliruan siswa dan pembimbingan paling tepat adalah ....',
    options: [
      'Siswa sudah benar karena angka 28 langsung ditambahkan ke 14 mm.',
      'Siswa melewatkan pembacaan garis bawah setengah milimeter (0,50 mm) yang sudah tampak; pembacaan seharusnya 14,00 + 0,50 + 0,28 = 14,78 mm.',
      'Siswa seharusnya mengalikan 28 dengan 0,02 mm sehingga hasilnya 14,56 mm.',
      'Hasil yang benar adalah 14,028 mm karena tiap putaran bidal bernilai 0,1 mm.',
      'Garis setengah milimeter hanya dihitung apabila skala bidal berada di bawah angka 10.',
    ],
    answer: 1,
    explanation:
      'Pada mikrometer standar metrik 0,01 mm, satu putaran penuh bidal bergeser 0,50 mm (50 strip × 0,01 mm). Karena garis skala bawah 0,50 mm sesudah 14 mm SUDAH tampak, pembacaannya adalah 14 + 0,50 + (28 × 0,01) = 14,78 mm. Melupakan garis 0,5 mm adalah miskonsepsi #1 siswa pada mikrometer.',
  },
  {
    id: 'pck-met-02',
    bank: 'PCK',
    topic: 'Metrologi Presisi & Pengukuran',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Guru mengamati dua kebiasaan siswa saat mengukur diameter poros presisi Ø20 ± 0,02 mm memakai mikrometer luar: siswa memutar langsung bidal (thimble) sekuat tenaga agar terjepit kencang, dan tidak pernah memeriksa titik nol (zero check) sebelum digunakan. Dampak teknis dan langkah edukatif paling tepat adalah ....',
    options: [
      'Mengharuskan siswa memutar gagang/bidal dengan tang agar tekanan selalu konsisten tinggi.',
      'Membimbing siswa mengecek titik nol terlebih dahulu, lalu selalu memutar RATCHET STOP (pemutar bergerigi belakang) hingga berbunyi 2–3 klik agar gaya tekan ukur seragam dan poros tidak tertekan deformasi/ulir mikrometer aus.',
      'Menyarankan penggunaan jangka sorong biasa berketelitian 0,05 mm untuk menggantikan mikrometer karena lebih tahan bantingan.',
      'Menambahkan faktor koreksi acak +0,05 mm pada setiap pembacaan.',
      'Membekukan benda kerja dalam kulkas sebelum diukur agar lebih keras.',
    ],
    answer: 1,
    explanation:
      'Gaya ukur berlebihan merusak keakuratan ulir halus mikrometer dan menimbulkan penyimpangan ukuran elastis/pembengkokan rangka. Menggunakan ratchet stop (atau friction thimble) memastikan gaya tekan standar dan berulang; verifikasi titik nol menjamin tidak ada kesalahan sistematis (zero error).',
  },
  {
    id: 'pck-met-03',
    bank: 'PCK',
    topic: 'Metrologi Presisi & Pengukuran',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Gambar kerja menuntut panjang bahu poros sebesar 35,00 ± 0,03 mm. Siswa memilih memakai jangka sorong (vernier caliper) ketelitian 0,05 mm untuk melakukan inspeksi kelayakan lulus/gagal (pass/fail). Sebagai guru Teknik Mesin, bagaimana Anda membimbing evaluasi pemilihan alat ukur tersebut?',
    options: [
      'Menganggap jangka sorong 0,05 mm sangat presisi untuk memeriksa toleransi 0,03 mm.',
      'Menjelaskan prinsip Rule of 10 / Gauge Maker Rule dalam metrologi industri: ketelitian alat ukur idealnya 1/10 (atau minimal jauh lebih halus) dari pita toleransi benda; alat berketelitian 0,05 mm terlalu kasar untuk memverifikasi toleransi ±0,03 mm sehingga diperlukan mikrometer atau bore/height gauge berketelitian 0,01 mm.',
      'Meminta siswa menaksir seperempat garis di antara strip nonius 0,05 mm dengan mata telanjang.',
      'Menurunkan standar toleransi pada gambar kerja menjadi ±0,5 mm sepihak tanpa persetujuan perancang.',
      'Cukup mengukurnya dengan mistar baja 1 mm sambil diterawang ke lampu.',
    ],
    answer: 1,
    explanation:
      'Salah satu kompetensi inti metrologi adalah kesesuaian kecermatan instrumen ukur terhadap pita toleransi produk. Jangka sorong 0,05 mm memiliki resolusi lebih besar daripada batas ±0,03 mm sehingga tidak andal; mikrometer 0,01 mm jauh lebih sesuai.',
  },
  {
    id: 'pck-met-04',
    bank: 'PCK',
    topic: 'Metrologi Presisi & Pengukuran',
    pckFocus: 'Media/ICT & Simulator',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Pada awal kelas X, banyak siswa membutuhkan waktu lama membaca garis nonius 0,02 mm pada jangka sorong karena keterbatasan alat fisik bagus di sekolah. Cara memanfaatkan media digital sebelum sesi pemeriksaan blok ukur nyata (gauge block) di kelas adalah ....',
    options: [
      'Menunjukkan foto skala nonius statis yang buram di papan tulis tanpa interaksi.',
      'Menugaskan latihan mandiri di simulator interaktif pembacaan skala jangka sorong dan mikrometer (yang dilengkapi zoom skala dan variasi ukuran acak dengan umpan balik instan) hingga mencapai ketepatan >90%, lalu memvalidasi pengukurannya di atas alat nyata dan blok ukur di bengkel.',
      'Membagikan tabel jawaban pembacaan ukuran kepada seluruh kelas sebelum kuis dimulai.',
      'Menyuruh siswa hanya memakai jangka sorong digital LCD dan melarang mengenal skala vernier.',
      'Mengganti seluruh sesi pengukuran praktik dengan tugas merangkum sejarah penemuan jangka sorong.',
    ],
    answer: 1,
    explanation:
      'Simulator membaca jangka sorong/mikrometer memungkinkan latihan berulang tak terbatas di luar bengkel dengan variasi soal acak serta pembesaran visual garis nonius yang jernih, sebelum siswa menghadapi benda ukur dan rasa tekan (feel) alat nyata di laboratorium.',
  },
  {
    id: 'pck-met-05',
    bank: 'PCK',
    topic: 'Metrologi Presisi & Pengukuran',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Ketika menyetel kebulatan/kelurusan pencekaman poros pada cekam rahang 4 independen (4-jaw independent chuck) di mesin bubut, siswa sering bingung menggerakkan rahang yang mana saat melihat jarum dial indicator menyimpang maksimum dan minimum. Bimbingan konseptual terbaik adalah ....',
    options: [
      'Meminta siswa memutar mesin 600 rpm sambil menempelkan ujung dial indicator di permukaan poros.',
      'Memandu siswa memutar cekam pelan dengan TANGAN hingga menemukan pembacaan terendah dan tertinggi di seberangnya, menandai titik puncak dengan kapur, lalu mengajarkan bahwa titik dengan simpangan positif terbesar berarti "terlalu dekat ke alat ukur" sehingga rahang di sisi tersebut dikendurkan seperlunya sementara rahang berlawanannya dikencangkan setengah nilai selisih simpangan (run-out/TIR).',
      'Mengganti rahang 4 menjadi cekam rahang 3 dengan cara digetok memakai palu baja.',
      'Mengukur kelurusan senter cukup dengan menempelkan ujung jari tangan ke poros berputar.',
      'Membiarkan penyimpangan 1 mm asalkan kecepatan potong dinaikkan.',
    ],
    answer: 1,
    explanation:
      'Penyetelan 4-jaw dengan dial indicator melatih penalaran hubungan selisih TIR (Total Indicator Reading) terhadap eksentrisitas (setengah TIR): jika simpangan puncak +0,40 mm, pusat benda hanya bergeser 0,20 mm menuju dial sehingga penyesuaian rahang dilakukan bertahap sejauh setengah selisih bacaan sambil terus dicek manual dengan putaran tangan.',
  },
  {
    id: 'pck-met-06',
    bank: 'PCK',
    topic: 'Metrologi Presisi & Pengukuran',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Berdasarkan data praktikum pembacaan jangka sorong 0,02 mm (50 bagian nonius = 49 mm utama), evaluasi kebenaran pernyataan siswa berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Jika garis angka 0 pada skala nonius berada tepat di antara 23 mm dan 24 mm skala utama, dan garis ke-17 nonius (angka 3,4 mm pada skala vernier) segaris lurus dengan skala utama, maka hasil ukurnya 23,34 mm.',
        answer: 0,
        reason: '23 mm + (17 × 0,02 mm) = 23 + 0,34 = 23,34 mm.',
      },
      {
        text: 'Kesalahan paralaks terjadi akibat mata pengamat melihat garis skala nonius dari sudut miring kiri/kanan, bukan tegak lurus terhadap bidang skala.',
        answer: 0,
        reason: 'Pembacaan wajib tegak lurus (90°) tepat di atas garis skala untuk menghindari bias paralaks.',
      },
      {
        text: 'Untuk mengukur kedalaman lubang buntu berdiameter kecil, bagian yang paling tepat digunakan pada jangka sorong adalah rahang pengukur dalam bagian atas.',
        answer: 1,
        reason: 'Rahang atas dipakai mengukur diameter dalam/celah; pengukuran kedalaman lubang menggunakan batang pengukur kedalaman (depth bar) di ujung ekor jangka sorong.',
      },
      {
        text: 'Sebelum menyimpan jangka sorong ke kotak, rahang ukur sebaiknya dikunci sangat rapat (menutup 0 mm rapat-rapat) selama berbulan-bulan agar debu tidak masuk.',
        answer: 1,
        reason: 'Dalam perawatan alat ukur presisi, rahang dibiarkan sedikit terbuka (±1–2 mm) tidak terkunci keras, dibersihkan dengan lap lembut, serta diolesi minyak anti-karat tipis.',
      },
    ],
    explanation:
      'Literasi metrologi tidak hanya membaca angka nonius dengan tepat, tetapi juga memakai rahang/batang ukur sesuai fungsinya, mencegah paralaks, dan merawat alat ukur agar celah rahang presisi tidak korosi atau melengket.',
  },
  {
    id: 'pck-met-07',
    bank: 'PCK',
    topic: 'Metrologi Presisi & Pengukuran',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Guru merancang asesmen otentik inspeksi Kualitas (Quality Control) benda kerja poros dan lubang di kelas XI. Tentukan apakah langkah siswa berikut Tepat atau Tidak Tepat.',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Mengukur diameter silinder pada dua sisi tegak lurus (0° dan 90°) di tiga titik sepanjang poros (ujung-tengah-pangkal) guna mendeteksi kesalahan kebulatan (out-of-roundness) serta ketirusan (taper).',
        answer: 0,
        reason: 'Pengukuran satu titik saja dapat menutupi cacat tirus atau oval pada hasil pembubutan.',
      },
      {
        text: 'Langsung mengukur benda kerja logam yang masih sangat panas sesaat setelah keluar dari penyayatan kasar agar lebih cepat mencatat laporan.',
        answer: 1,
        reason: 'Ekspansi termal akibat panas pemotongan membuat hasil pengukuran menyimpang dari ukuran suhu referensi standar (20 °C).',
      },
      {
        text: 'Mengkalibrasi (zero-set) bore gauge menggunakan mikrometer luar yang telah diverifikasi atau setting ring master sebelum mengukur diameter lubang dalam.',
        answer: 0,
        reason: 'Dial bore gauge adalah instrumen ukur komparatif yang wajib disetel terhadap ukuran acuan presisi.',
      },
    ],
    explanation:
      'Inspeksi QC industri sejati memperhitungkan multi-posisi sumbu untuk mendeteksi cacat geometrik (ketirusan/kelonjongan), menstabilkan suhu benda kerja, dan mensetting instrumen komparatif dengan master referensi.',
  },
  {
    id: 'pck-met-08',
    bank: 'PCK',
    topic: 'Metrologi Presisi & Pengukuran',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Dalam pemeliharaan laboratorium metrologi presisi di SMK, evaluasilah ketepatan kebiasaan siswa saat bekerja memakai Gauge Block (blok ukur standar) dan Meja Rata Granit (surface plate).',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Meletakkan alat ukur presisi di atas kain lap bersih terpisah dari kikir, palu, maupun geram besi tajam agar muka ukur tidak tergores.',
        answer: 0,
        reason: 'Alat ukur wajib dipisahkan dari perkakas bangku keras dan serpihan tatal agar permukaan referensi tidak rusak.',
      },
      {
        text: 'Menyusun blok ukur dengan cara menggeser-putar lembut (wringing) setelah membersihkan lapisan pelindung agar menempel akibat tarikan molekuler tanpa benturan keras.',
        answer: 0,
        reason: 'Teknik wringing menghasilkan tumpukan dimensi tanpa celah udara dan mencegah goresan muka ukur.',
      },
      {
        text: 'Menjadikan permukaan meja rata granit sebagai landasan memukul pen atau penitik benda kerja agar getarannya stabil.',
        answer: 1,
        reason: 'Meja rata granit atau besi cor hanya boleh untuk pengukuran kerataan/penandaan halus, tidak boleh dipukul karena dapat retak/gompal.',
      },
    ],
    explanation:
      'Pemeliharaan instrumen ukur presisi adalah bagian wajib kompetensi metrologi: pisahkan dari alat potong/tatal, gunakan meja rata khusus inspeksi, dan praktikkan wringing yang bersih.',
  },
  {
    id: 'pck-met-09',
    bank: 'PCK',
    topic: 'Metrologi Presisi & Pengukuran',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam percobaan pengukuran berulang menggunakan jangka sorong terhadap benda standar 25,00 mm oleh lima siswa berbeda, hasil yang tercatat ternyata bervariasi cukup lebar (24,88 mm hingga 25,22 mm). Faktor sumber kesalahan pengukuran (measurement error) yang relevan dibahas guru dalam refleksi kelas adalah .... (Pilih semua jawaban benar)',
    options: [
      'Posisi rahang ukur jangka sorong miring terhadap garis tegak lurus sumbu silinder atau berada di sisi ujung rahang yang sudah aus/longgar.',
      'Variasi gaya tekan ibu jari tangan masing-masing pengukur serta belum dibersihkannya debu/geram halus di antara rahang dan benda kerja.',
      'Kesalahan posisi sudut pandang mata pengamat terhadap garis berimpit skala nonius (kesalahan paralaks).',
      'Jangka sorong yang memiliki baterai lemah menyebabkan ukuran logam berubah.',
      'Ketidaksesuaian warna pelapis kotak kayu tempat alat ukur.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Variasi antar-pengamat (reproducibility) muncul dari posisi rahang tidak tegak lurus (kosines error), kebersihan permukaan kontak, inkonsistensi tekanan tangan (karena jangka sorong tidak punya ratchet stop), dan paralaks.',
  },
  {
    id: 'pck-met-10',
    bank: 'PCK',
    topic: 'Metrologi Presisi & Pengukuran',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Pengukuran sudut ulir, kemiringan tirus, dan kerataan komponen mesin memerlukan instrumen khusus di luar alat ukur panjang linier biasa. Pasangan fungsi dan instrumen metrologi yang tepat dikuasai siswa SMK Teknik Mesin meliputi .... (Pilih semua jawaban benar)',
    options: [
      'Bevel Protractor Universal untuk mengukur dan mengecek besar sudut komponen hingga ketelitian 5 menit busur (5\').',
      'Thread Pitch Gauge (mal ulir) serta Three-Wire Method + mikrometer untuk memverifikasi kisar dan diameter efektif (pitch diameter) ulir.',
      'Dial Indicator (jam ukur) di atas magnetic stand untuk mengukur kelurusan (straightness), kerataan (flatness), dan keolengan (run-out).',
      'Siku-siku penggaris plastik biasa sebagai penguji toleransi keolengan poros spindel 0,01 mm.',
      'Feeler gauge (pulur celah) untuk menentukan jenis kadar karbon baja paduan.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pengukuran sudut presisi memakai Universal Bevel Protractor (5\'), pemeriksaan kisar/pitch ulir dengan Thread Pitch Gauge & diameter tusuk dengan Three-Wire Method, serta penyimpangan geometris dinamis dengan Dial Indicator.',
  },
  {
    id: 'pck-met-11',
    bank: 'PCK',
    topic: 'Metrologi Presisi & Pengukuran',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Untuk membantu siswa yang memiliki hambatan ketelitian membaca skala vernier kecil tanpa menimbulkan rasa malu di depan kelompok, penyesuaian pembelajaran responsif dan suportif yang tepat dilakukan guru adalah .... (Pilih lebih dari satu)',
    options: [
      'Menyediakan lembar kartu pembesaran visual (exploded diagram pembacaan) dan memadukan latihan simulator interaktif yang bisa diperbesar di layar.',
      'Menggunakan teknik berpasangan saling memverifikasi (think-pair-verify) pada benda uji bernomor buta sehingga tiap siswa berkesempatan mendiskusikan langkah baca skala utama + nonius secara aman.',
      'Mendiagnosis secara spesifik apakah kekeliruan terletak pada pengenalan angka puluhan, pelupaan strip 0,5 mm, atau cara menentukan garis berimpit.',
      'Meminta siswa tersebut hanya bertugas menyapu lantai bengkel selama jam pelajaran Metrologi berlangsung.',
      'Melarang siswa memegang alat ukur nyata hingga ujian kenaikan kelas selesai.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pendampingan diagnostik yang spesifik (memilah kesalahan baca skala utama vs garis 0,5 mm vs nonius) dipadukan media bantu perbesar visual dan verifikasi berpasangan secara psikologis aman efektif membangun kecakapan metrologi.',
  },
];
