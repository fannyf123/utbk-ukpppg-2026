import type { ExamQuestion } from '../types/exam';

/**
 * Bank PCK Teknik Mesin SMK - Bagian 1 (46 Soal PCK & SJT bergaya LMS PPG 2026)
 * Seluruh butir berfokus pada asesmen, strategi pembelajaran, TPACK, diferensiasi, & 4 Kompetensi Guru.
 */
export const PCK_MESIN_PART_1: ExamQuestion[] = [
  {
    "id": "pck-gt-01",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Miskonsepsi Konseptual vs Prosedural (PF.3)",
    "pckFocus": "Miskonsepsi Siswa",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.3",
    "prompt": "Dalam pembelajaran membaca gambar kerja Teknik Mesin kelas X, hampir seluruh murid dapat menyalin garis benda dari modul latihan secara rapi. Namun saat diminta menjelaskan kegunaan setiap pandangan gambar bagi operator di bengkel, sebagian besar murid kebingungan dan salah menempatkan tampak benda. Kondisi tersebut menunjukkan bahwa ....",
    "options": [
      "Murid sudah mencapai pemahaman mendalam karena terampil menggambar garis dengan cepat dan rapi.",
      "Pemahaman murid masih sebatas prosedural menyalin gambar tanpa memahami makna komunikasi teknik di balik penempatan pandangan.",
      "Kompetensi gambar teknik terlalu sulit bagi kelas X sehingga perlu ditunda hingga kelas XII.",
      "Guru sebaiknya menambah tugas menyalin sepuluh lembar gambar kerja tambahan agar murid terbiasa.",
      "Ketidakpahaman muncul semata-mata karena pensil dan meja gambar sekolah belum memenuhi standar."
    ],
    "answer": 1,
    "explanation": "Mampu menjalankan prosedur menyalin tanpa mengerti alasan dan makna komunikasi benda kerja merupakan ciri pemahaman dangkal; pembelajaran bermakna menuntut pemahaman konseptual melalui benda nyata atau model 3D."
  },
  {
    "id": "pck-gt-02",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Prinsip UbD Backward Design (P.1)",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "Pak Arif menyusun Modul Ajar Gambar Teknik & Pemodelan CAD kelas XI memakai alur Understanding by Design (UbD). Setelah merumuskan tujuan bermakna agar murid mampu merancang dokumen kerja komponen sederhana yang siap dikerjakan rekan bengkel, langkah perencanaan berikutnya yang paling tepat adalah ....",
    "options": [
      "Langsung memilih aplikasi kuis daring dan permainan pemecah kebekuan untuk pertemuan pertama.",
      "Menetapkan bukti asesmen kinerja otentik serta kriteria rubrik keterpahaman gambar oleh pemakai, sebelum memilih urutan aktivitas belajar.",
      "Membagikan daftar menu ikon perangkat lunak desain terbaru kepada seluruh murid.",
      "Meminta murid membeli buku referensi tebal tentang sejarah gambar teknik industri.",
      "Menjadwalkan ceramah guru selama empat pertemuan agar seluruh definisi garis dikuasai dulu."
    ],
    "answer": 1,
    "explanation": "Tahap 2 UbD (Backward Design) menentukan bukti penilaian otentik dan kriteria ketercapaian segera sesudah menetapkan tujuan bermakna, baru kemudian merancang aktivitas belajar pada Tahap 3."
  },
  {
    "id": "pck-gt-03",
    "bank": "PCK",
    "topic": "Gambar Teknik, Proyeksi & CAD",
    "pckFocus": "Media/ICT & Simulator",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "prompt": "Sekolah menghadapi kendala keterbatasan jumlah lisensi komputer berkemampuan tinggi di lab CAD, sementara sebagian siswa hanya memiliki gawai standar untuk belajar di luar jam sekolah. Guru ingin kompetensi pemodelan parametrik 3D dan pembacaan gambar kerja tetap dicapai secara merata dan fleksibel (fleksibilitas belajar di mana saja). Strategi pemanfaatan media berbasis TIK yang paling tepat adalah ....",
    "options": [
      "Menghapus materi pemodelan 3D dari silabus dan menggantinya penuh dengan gambar manual pensil.",
      "Memanfaatkan simulator/platform CAD berbasis web ringan yang dapat diakses lintas perangkat untuk latihan sketch-extrude dan membaca proyeksi interaktif di luar jam lab, dipadukan sesi verifikasi assembly di lab sekolah.",
      "Mewajibkan setiap orang tua siswa membeli laptop workstation grafis mahal secara pribadi.",
      "Menjadikan demonstrasi layar proyektor guru sebagai satu-satunya aktivitas CAD tanpa praktik mandiri murid.",
      "Meminta siswa hanya menonton rekaman video tutorial berdurasi 3 jam tanpa lembar kerja tugas terukur."
    ],
    "answer": 1,
    "explanation": "Subkompetensi P.4 menekankan pemanfaatan TIK secara kritis dan kreatif untuk memperluas akses belajar. Simulator/web-CAD ringan lintas perangkat memungkinkan siswa berlatih sketch, constraint, dan ekstrusi dasar kapan saja tanpa sepenuhnya bergantung pada jadwal sempit laboratorium sekolah, sementara jam lab dioptimalkan untuk verifikasi kompleksitas dan manufaktur."
  },
  {
    "id": "pck-gt-04",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Penyelarasan Konsep & Pengalaman Nyata (PF.2)",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.2",
    "prompt": "Siswa kelas XI Teknik Mesin sering lupa mencantumkan informasi ukuran kritis dan keterangan fungsi bagian berongga saat membuat gambar rancangan produk di CAD sehingga komponen sulit dikerjakan kelompok pemesinan. Strategi pengajaran paling tepat untuk membangun kesadaran konseptual murid terhadap standar informasi gambar kerja adalah ....",
    "options": [
      "Menghukum siswa dengan menggambar ulang ukuran yang terlewat sebanyak lima kali di kertas.",
      "Mengadakan simulasi silang di mana kelompok bengkel mencoba membaca gambar buatan teman tanpa penjelasan lisan pembuatnya sehingga tampak informasi apa yang kurang.",
      "Membagikan template gambar jadi untuk diubah namanya saja agar tidak ada kesalahan ukuran.",
      "Meminta siswa menghafalkan daftar aturan penulisan ukuran dari bab pertama buku cetak.",
      "Menilai kelengkapan gambar hanya pada ujian akhir semester dalam bentuk pilihan ganda."
    ],
    "answer": 1,
    "explanation": "Menguji gambar rancangan pada \"pembaca nyata\" (peer bengkel) membuat murid menyadari langsung fungsi gambar sebagai bahasa komunikasi kerja yang akurat dan bermakna."
  },
  {
    "id": "pck-gt-05",
    "bank": "PCK",
    "topic": "Gambar Teknik, Proyeksi & CAD",
    "pckFocus": "Asesmen Otentik",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Dalam tugas membuat model 3D CAD sebuah bracket tumpuan poros dan mengekspornya ke gambar kerja 2D standar manufaktur, indikator asesmen otentik yang paling mencerminkan kesiapan standar industri (bukan sekadar bentuk mirip) adalah ....",
    "options": [
      "Hanya menilai kecepatan waktu pengumpulan file gambar pertama tanpa memeriksa ukuran.",
      "Menilai kelengkapan sketsa fully-constrained, ketepatan intent desain (feature tree terstruktur), kejelasan proyeksi, pencantuman toleransi fungsional, kekasaran permukaan, serta kelengkapan etiket sesuai ISO.",
      "Memberi nilai sempurna selama warna rendering 3D tampak mengilap dan menarik.",
      "Menghitung jumlah garis konstruksi yang dibuat siswa tanpa memverifikasi fungsi perakitan.",
      "Menguji siswa dengan soal pilihan ganda hafalan nama ikon menu perangkat lunak saja."
    ],
    "answer": 1,
    "explanation": "Asesmen otentik CAD manufaktur berorientasi kesiapan produksi (design for manufacturing): sketsa harus terdefinisi penuh (fully constrained), feature tree logis untuk revisi, serta gambar kerja 2D mencantumkan proyeksi benar, dimensi fungsional, toleransi, simbol Ra, dan etiket lengkap."
  },
  {
    "id": "pck-gt-06",
    "bank": "PCK",
    "topic": "Gambar Teknik, Proyeksi & CAD",
    "pckFocus": "Metode Pengajaran",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "Pada pelajaran Gambar Teknik Dasar kelas X, siswa sering kebingungan menentukan garis mana yang seharusnya digambar sebagai garis tipis kontinu, garis tebal kontinu, garis putus-putus, dan garis sumbu bertitik tipis. Agar bermakna secara konseptual dan kontekstual, pendekatan pembelajaran paling efektif adalah ....",
    "options": [
      "Menyuruh siswa menghafal tabel ketebalan pena Rapido (0,18 mm s.d. 0,7 mm) di luar kepala sebelum menggambar apa pun.",
      "Menugaskan siswa menganalisis cetak biru (blueprint) komponen mesin riil di bengkel secara berkelompok untuk menelusuri mengapa perbedaan jenis/ketebalan garis mencegah kesalahan operator mesin saat membaca lubang tersembunyi dan sumbu bor.",
      "Membagikan gambar jadi untuk dijiplak menggunakan kertas kalkir tanpa diskusi fungsi garis.",
      "Mengubah seluruh jenis garis menjadi tebal kontinu agar mudah terlihat dari jauh.",
      "Menunda pembelajaran jenis garis hingga kelas XII karena dianggap terlalu teoretis."
    ],
    "answer": 1,
    "explanation": "Pembelajaran konseptual dan bermakna (P.1) menghubungkan aturan standar ISO (jenis dan ketebalan garis) langsung dengan fungsi komunikasi teknis di lantai produksi: misalnya, kesalahan membedakan garis tersembunyi (putus-putus) dan garis sumbu (gores-titik) membuat operator salah mengebor koordinat."
  },
  {
    "id": "pck-gt-07",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Evaluasi Pembelajaran Bermakna di Lab CAD (P.1)",
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "Bu Sinta mengevaluasi rencana kegiatan pembelajaran Gambar Teknik & CAD kelas X agar mendorong pengalaman belajar mendalam bagi murid yang baru mengenal benda mekanis. Tentukan kesesuaian tiap rancangan berikut (Sesuai / Tidak Sesuai).",
    "categories": [
      "Sesuai",
      "Tidak Sesuai"
    ],
    "statements": [
      {
        "text": "Mengawali pelajaran dengan pengamatan langsung komponen mesin nyata di bengkel agar murid memahami bentuk fisik benda sebelum menggambarnya di layar CAD.",
        "answer": 0
      },
      {
        "text": "Meminta murid langsung menghafal seluruh fungsi tombol perangkat lunak selama dua minggu sebelum menyentuh satu pun komponen nyata.",
        "answer": 1
      },
      {
        "text": "Menghadirkan pertanyaan pemantik tentang risiko kesalahan komunikasi ukuran antara perancang dan operator agar pembelajaran terasa kontekstual.",
        "answer": 0
      },
      {
        "text": "Menugaskan seluruh murid menyalin ulang langkah klik tutorial dari papan tulis secara seragam tanpa diskusi alasan pemilihan bentuk.",
        "answer": 1
      }
    ],
    "explanation": "Pembelajaran bermakna mengaitkan pengamatan benda nyata, konteks fungsi di dunia kerja, dan nalar alasan desain daripada hafalan ikon ataupun menyalin pasif."
  },
  {
    "id": "pck-gt-08",
    "bank": "PCK",
    "topic": "Gambar Teknik, Proyeksi & CAD",
    "pckFocus": "Media/ICT & Simulator",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "prompt": "Guru membimbing murid kelas XI merancang perakitan (assembly) ragum sederhana menggunakan perangkat lunak CAD 3D parametrik. Tentukan apakah prinsip pemodelan berikut Tepat atau Tidak Tepat untuk diajarkan.",
    "categories": [
      "Tepat",
      "Tidak Tepat"
    ],
    "statements": [
      {
        "text": "Menetapkan hubungan mate/constraint konsentris dan koinsiden antarpart sehingga gerakan pencekaman dapat disimulasikan dan diuji tabrakannya (interference check).",
        "answer": 0
      },
      {
        "text": "Menggeser komponen secara manual di ruang 3D tanpa mate hingga tampak berimpit di layar lalu membiarkannya mengambang (unconstrained).",
        "answer": 1
      },
      {
        "text": "Menghubungkan model 3D langsung ke bill of materials (BOM) otomatis pada gambar 2D agar jumlah komponen standar dan nonstandar konsisten.",
        "answer": 0
      }
    ],
    "explanation": "Keunggulan utama CAD parametrik 3D adalah asosiasi dinamis antara constraint sketsa, assembly mate, interference detection, dan BOM gambar kerja 2D."
  },
  {
    "id": "pck-gt-09",
    "bank": "PCK",
    "topic": "Gambar Teknik, Proyeksi & CAD",
    "pckFocus": "Asesmen Otentik",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Saat mengevaluasi gambar kerja komponen mesin bertoleransi yang dibuat siswa kelas XI, tentukan apakah kritik asesmen berikut Benar atau Salah.",
    "categories": [
      "Benar",
      "Salah"
    ],
    "statements": [
      {
        "text": "Pemberian ukuran rantai berulang tanpa datum acuan menyebabkan akumulasi kesalahan toleransi pada lubang-lubang kritis.",
        "answer": 0
      },
      {
        "text": "Menumpuk angka dimensi di dalam arsiran gambar potongan tanpa memutus arsiran masih diperbolehkan dan dianggap rapi menurut standar ISO.",
        "answer": 1
      },
      {
        "text": "Pemilihan datum harus selaras dengan permukaan acuan pengecekan metrologi dan pemegangan di mesin.",
        "answer": 0
      }
    ],
    "explanation": "Kualitas gambar kerja manufaktur ditentukan oleh kejelasan keterbacaan (angka tidak bertabrakan arsiran) serta strategi pendimensian berbasis datum untuk mengendalikan akumulasi toleransi."
  },
  {
    "id": "pck-gt-10",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Scaffolding ZPD Pemodelan 3D (PF.3)",
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.3",
    "prompt": "Pada minggu awal praktik pemodelan sketsa 2D di perangkat CAD, sebagian murid kelas X terus kehilangan kendali bentuk rancangannya ketika ukuran bagian lain diubah. Jika guru menerapkan prinsip scaffolding Vygotsky pada zona perkembangan proksimal (ZPD) murid, langkah pendampingan yang PALING tepat meliputi .... (Pilih semua yang benar)",
    "options": [
      "Menyediakan daftar cek panduan pemeriksaan kestabilan hubungan antar-garis pada latihan pertama, lalu melepasnya perlahan pada tugas mandiri berikutnya.",
      "Memberi pertanyaan penuntun agar murid menemukan sendiri bagian sketsa mana yang masih bebas bergerak sebelum guru membetulkannya.",
      "Memberikan contoh perbandingan antara gambar yang stabil dan yang mudah berubah bentuk ketika diuji.",
      "Mengambil alih mouse murid dan membetulkan gambarnya secara penuh sampai selesai agar cepat tuntas.",
      "Membiarkan murid mencoba-coba tanpa panduan atau umpan balik hingga jam pelajaran habis."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Scaffolding bekerja di area ZPD dengan menyediakan bantuan terukur (daftar cek, pertanyaan pemandu, model pembanding) lalu menguranginya bertahap (fading) seiring kemandirian murid."
  },
  {
    "id": "pck-gt-11",
    "bank": "PCK",
    "topic": "Gambar Teknik, Proyeksi & CAD",
    "pckFocus": "Metode Pengajaran",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "prompt": "Dalam satu kelas X Gambar Teknik terdapat tiga kelompok kesiapan: Kelompok A cepat menguasai proyeksi ortogonal 3 pandangan, Kelompok B masih tertukar letak pandangan kiri vs kanan, dan Kelompok C kesulitan membayangkan bentuk 3D dari gambar kerja datar. Rancangan pembelajaran berdiferensiasi yang tepat adalah .... (Pilih lebih dari satu)",
    "options": [
      "Menyediakan benda peraga balok bertingkat nyata serta simulator rotasi 3D interaktif bagi Kelompok C untuk mencocokkan pandangan nyata dengan ortogonalnya.",
      "Memberikan kartu tantangan (checklist pemetaan wajah benda depan–atas–samping) berjenjang bagi Kelompok B.",
      "Memberikan proyek pengayaan gambar potongan separuh dan perakitan sederhana kepada Kelompok A.",
      "Menghentikan materi seluruh kelas selama tiga minggu hanya untuk mengulang proyeksi titik bagi semua kelompok secara seragam.",
      "Meminta Kelompok C hanya menggambar ulang etiket agar cepat selesai bersamaan."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Diferensiasi kelas teknik memadukan scaffolding konkret-spasial bagi yang kesulitan imajinasi 3D (Kelompok C), pemetaan prosedural bagi yang masih tertukar proyeksi (Kelompok B), dan tantangan analisis gambar potongan/assembly bagi kelompok cepat (Kelompok A)."
  },
  {
    "id": "pck-gt-12",
    "bank": "PCK",
    "topic": "Gambar Teknik, Proyeksi & CAD",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.4",
    "prompt": "Untuk menyelaraskan kompetensi CAD & Gambar Manufaktur siswa SMK Teknik Mesin dengan kebutuhan industri modern dan Teaching Factory, keterampilan esensial apa saja yang wajib terintegrasi dalam modul ajar? (Pilih semua jawaban benar)",
    "options": [
      "Penguasaan ekspor file netral/manufaktur (seperti STEP/IGES/DXF) untuk simulasi CAM atau pemotongan CNC/laser.",
      "Kemampuan membaca dan menerjemahkan toleransi dimensi serta kekasaran permukaan terhadap pemilihan proses mesin.",
      "Keterampilan merevisi model parametrik berdasarkan hasil uji kecocokan assembly dan umpan balik operator.",
      "Ketergantungan penuh pada penghafalan letak menu ikon versi software tunggal keluaran tahun lama.",
      "Mengabaikan etiket dan daftar komponen (BOM) karena dianggap urusan administrasi kantor."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Dalam ekosistem manufaktur modern, CAD adalah mata rantai menuju CAM dan QC: siswa perlu menguasai interoperabilitas STEP/DXF, toleransi fungsional terhadap kapabilitas proses mesin, serta revisi model parametrik kolaboratif."
  },
  {
    "id": "pck-pm-01",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Asesmen Diagnostik Awal & Pemetaan Kesiapan (P.6)",
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi LMS PPG & Setuju_Soal PMA UST 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Di kelas XI Teknik Pemesinan, Pak Dimas akan membelajarkan praktik pengoperasian mesin perkakas dasar. Dari pengamatan awal, Kelompok A sudah terbiasa membantu usaha perbengkelan keluarga, Kelompok B baru memahami teori di kelas namun belum pernah memegang tuas mesin nyata, dan Kelompok C belum mengenal fungsi bagian maupun prinsip aman mesin tersebut. Keputusan pembelajaran awal yang paling tepat adalah ....",
    "options": [
      "Langsung memberikan tes tulis pilihan ganda yang sama dan menyuruh seluruh siswa segera mengoperasikan mesin.",
      "Membagi kelompok permanen berdasarkan nilai rapor kelas X tanpa memberi kesempatan berpindah.",
      "Melaksanakan asesmen awal diagnostik sederhana beserta observasi kesiapan, lalu merancang pengenalan aman mesin & scaffolding berbeda sesuai kebutuhan tiap kelompok.",
      "Menyerahkan pengajaran Kelompok C sepenuhnya kepada murid Kelompok A tanpa pengawasan keselamatan dari guru.",
      "Menunda praktik bengkel seluruh kelas hingga akhir semester agar menunggu semua hafal buku panduan."
    ],
    "answer": 2,
    "explanation": "Asesmen awal di kelas praktik bertujuan memetakan kesiapan nyata agar guru dapat merancang pendampingan aman dan strategi diferensiasi tepat sasaran."
  },
  {
    "id": "pck-pm-02",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Pemahaman Prosedural vs Konseptual di Bengkel (PF.3)",
    "pckFocus": "Miskonsepsi Siswa",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.3",
    "prompt": "Saat mengerjakan benda kerja di bengkel pemesinan, beberapa murid hanya meniru angka pengaturan putaran dan posisi tuas milik kelompok sebelahnya tanpa mengetahui mengapa hasil penyayatan mereka berbeda karena bahan dan kondisi alat berbeda. Untuk mengubah pembelajaran dangkal menjadi bermakna, langkah terbaik guru adalah ....",
    "options": [
      "Menulis satu angka pengaturan tetap di papan tulis supaya semua murid menyalin setelan yang sama persis.",
      "Memfasilitasi murid membandingkan karakteristik dua kondisi benda kerja serta mengamati dampaknya pada hasil pemotongan, lalu mendiskusikan alasannya bersama.",
      "Mengurangi jam praktik mesin dan memperbanyak soal hafalan pilihan ganda tentang nama bagian mesin.",
      "Memberi sanksi pengurangan nilai setiap kali ada kelompok yang bertanya tentang perbedaan setelan.",
      "Menyuruh kelompok lain menyetelkan mesin milik teman yang hasilnya masih kasar."
    ],
    "answer": 1,
    "explanation": "Pemahaman mendalam muncul ketika murid menghubungkan sebab-akibat antara kondisi nyata material/perkakas dengan keputusan pengaturan kerja melalui observasi dan dialog ilmiah."
  },
  {
    "id": "pck-pm-03",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Pembelajaran Berdiferensiasi di Kelas Praktik (P.2)",
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "prompt": "Dalam unit pembelajaran perencanaan urutan kerja pemesinan kelas XI, guru mendapati murid lebih mudah memahami instruksi lewat tiga cara berbeda: sebagian butuh peragaan demonstrasi langsung, sebagian terbantu diagram alur langkah visual, dan sebagian cepat menangkap melalui studi kasus pemecahan kendala. Pendekatan yang paling tepat menerapkan pembelajaran berdiferensiasi adalah ....",
    "options": [
      "Menyajikan seluruh materi hanya melalui diktat teks panjang karena paling standar bagi SMK.",
      "Memisahkan murid ke ruang kelas berbeda secara permanen berdasarkan gaya belajar mereka.",
      "Menyediakan sumber belajar multimodal (demonstrasi nyata, kartu panduan visual, dan studi kasus alur kerja) serta dukungan bertahap dengan target capaian kompetensi yang sama.",
      "Menghilangkan penjelasan teori urutan kerja dan langsung menguji hasil akhir benda kerja.",
      "Meminta semua murid menonton video tutorial yang sama lalu meringkasnya di kertas."
    ],
    "answer": 2,
    "explanation": "Diferensiasi dan DUP menyajikan keragaman akses konten dan proses sesuai kebutuhan murid sambil mempertahankan satu tujuan belajar serta standar kompetensi bersama."
  },
  {
    "id": "pck-pm-04",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Komunikasi Empatik & Pencegahan Rasa Malu (S.1)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Sosial",
    "subkompetensi": "S.1",
    "prompt": "Ketika praktik dasar pemesinan dimulai, seorang murid yang mengalami kegagapan bicara saat gugup tampak ragu bertanya meskipun ia bingung dengan urutan keselamatan mesin, sementara beberapa teman mulai tertawa mendengar cara bertanyanya. Respons empatik dan inklusif paling tepat dari guru adalah ....",
    "options": [
      "Menyuruh murid tersebut menulis saja semua pertanyaannya agar suasana bengkel tetap tenang tanpa tertawa.",
      "Menegur pemberi tawaan dengan keras sambil meminta murid tersebut berlatih berbicara lancar dulu.",
      "Segera menenangkan situasi tanpa mempermalukan siapa pun, menegakkan norma saling menghormati di bengkel, mendengar pertanyaan murid dengan sabar, serta membuka opsi bertanya tertulis atau personal.",
      "Mengabaikan tawaan teman agar murid tersebut terbiasa menghadapi tekanan lingkungan bengkel.",
      "Meminta teman sebangkunya menjawabkan semua pertanyaan atas nama murid tersebut sepanjang semester."
    ],
    "answer": 2,
    "explanation": "Guru menciptakan iklim inklusif (S.1/K.3) dengan menghentikan ejekan secara bermartabat, menghargai keberanian bertanya, dan menyediakan saluran komunikasi beragam yang aman."
  },
  {
    "id": "pck-pm-05",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Umpan Balik Formatif & Growth Mindset (K.2)",
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.2",
    "prompt": "Seusai percobaan awal pembubutan bertingkat, hasil ukuran benda kerja milik Deni meleset sehingga ia merasa putus asa dan berkata, \"Saya memang tidak berbakat di bengkel mesin, lebih baik menyerah saja.\" Pernyataan umpan balik guru yang paling tepat menumbuhkan Growth Mindset sekaligus mengarah pada perbaikan nyata adalah ....",
    "options": [
      "\"Benar juga, ketelitian di mesin memang bakat bawaan, coba cari bidang lain di semester depan.\"",
      "\"Nilaimu masih kurang dari kriteria ketuntasan minimal; minggu depan harus sudah lebih bagus dari ini.\"",
      "\"Kedisiplinanmu mengenakan APD dan keselarasan alur langkah awal sudah baik. Hasil akhir bergeser karena tahap pengecekan sebelum langkah terakhir belum dilakukan; mari coba sekali lagi dengan jeda ukur sebelum tahap akhir.\"",
      "\"Lihat karya kelompok sebelah yang mulus, tiru persis cara kerja mereka supaya lulus.\"",
      "\"Tidak usah khawatir, tugas teori tertulis nanti bisa membantu menaikkan nilai praktiknya.\""
    ],
    "answer": 2,
    "explanation": "Umpan balik Growth Mindset memuji proses baik yang sudah dilakukan, memandang kegagalan sebagai informasi sementara (\"belum berhasil\"), dan memberi strategi perbaikan spesifik."
  },
  {
    "id": "pck-pm-06",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Kolaborasi Orang Tua & Komunikasi Sederhana (S.2)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Sosial",
    "subkompetensi": "S.2",
    "prompt": "Wali murid seorang siswa kelas X Teknik Mesin datang menemui guru wali kejuruan karena khawatir keselamatan anaknya di bengkel sekaligus bingung membaca istilah capaian laporan belajar seperti ATP dan KKTP. Sikap komunikasi dan kemitraan terbaik guru adalah ....",
    "options": [
      "Menjelaskan ulang dengan membacakan definisi istilah kurikulum dari dokumen resmi pemerintah.",
      "Menyuruh wali murid membaca panduan akademik sekolah yang diunggah di situs web.",
      "Menyambut dengan ramah, menerjemahkan perkembangan belajar anak dengan bahasa sehari-hari sambil menunjukkan portofolio hasil praktik dan prosedur K3 bengkel yang aman, lalu menyepakati dukungan di rumah.",
      "Menghindari dialog panjang dengan alasan seluruh siswa bengkel ditanggung aturan tata tertib.",
      "Menyerahkan penjelasan keselamatan bengkel sepenuhnya kepada petugas kebersihan atau teknisi ruang."
    ],
    "answer": 2,
    "explanation": "Kolaborasi bermartabat bersama orang tua (S.1 & S.2) memakai bahasa yang mudah dipahami, bukti portofolio konkret, dan membangun rasa percaya atas keamanan belajar anak."
  },
  {
    "id": "pck-pm-07",
    "bank": "PCK",
    "topic": "Pemesinan Bubut, Frais & Gerinda",
    "pckFocus": "Asesmen Otentik",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Pada uji praktik membubut bertingkat siswa SMK, guru merumuskan langkah pengisian rubrik proses dan produk. Tentukan apakah pernyataan praktik pembubutan berikut Benar atau Salah.",
    "categories": [
      "Benar",
      "Salah"
    ],
    "statements": [
      {
        "text": "Sebelum membubut panjang dengan penopang senter kepala lepas (tailstock), siswa wajib membuat lubang senter (center drill) terlebih dahulu pada ujung permukaan rata benda kerja.",
        "answer": 0
      },
      {
        "text": "Penjepitan benda kerja panjang cukup dicekam sedikit (±5 mm) dan dibiarkan menonjol 15 kali diameternya tanpa penopang kepala lepas agar pembubutan lebih cepat.",
        "answer": 1
      },
      {
        "text": "Penyapuan finishing dilakukan dengan ketebalan potong (depth of cut) tipis terukur sebelum mengecek dimensi menggunakan mikrometer saat spindel berhenti total.",
        "answer": 0
      },
      {
        "text": "Pembersihan tatal baja melilit panjang di dekat cekam saat spindel berputar dilakukan cepat memakai jari tangan telanjang agar waktu tidak habis.",
        "answer": 1
      }
    ],
    "explanation": "Asesmen proses pemesinan menggabungkan kepatuhan prosedur keselamatan (cekam aman, senter bor, ukur saat mesin berhenti, chip hook) dan strategi pemotongan (roughing vs finishing)."
  },
  {
    "id": "pck-pm-08",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Evaluasi Pembelajaran Mendalam 3M di Bengkel (P.3)",
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.3",
    "prompt": "Dalam merancang praktik kerja bengkel pemesinan kelas XI, Pak Hasan ingin memastikan proses belajar berjalan secara berkesadaran, bermakna, dan menggembirakan. Tentukan apakah pernyataan kegiatan berikut Sesuai atau Tidak Sesuai dengan ketiga prinsip Pembelajaran Mendalam tersebut.",
    "categories": [
      "Sesuai",
      "Tidak Sesuai"
    ],
    "statements": [
      {
        "text": "Murid diajak merumuskan sasaran mutu benda kerja untuk alat bantu sekolah yang benar-benar dibutuhkan dan merefleksikan perbaikan tiap selesai tahap.",
        "answer": 0
      },
      {
        "text": "Guru memberi poin hadiah kecepatan tertinggi tanpa memperhatikan keselamatan kerja serta pemahaman konsep proses oleh murid.",
        "answer": 1
      },
      {
        "text": "Suasana bengkel dibangun suportif dengan dialog terbuka ketika terjadi kekeliruan percobaan sehingga murid berani belajar dari kesalahan.",
        "answer": 0
      },
      {
        "text": "Murid diwajibkan mengerjakan potongan benda latihan berulang-ulang tanpa dijelaskan fungsi maupun tujuan penerapannya di kehidupan nyata.",
        "answer": 1
      }
    ],
    "explanation": "Pembelajaran Mendalam memadukan kesadaran tujuan dan refleksi (berkesadaran), manfaat nyata karya (bermakna), serta suasana aman yang menumbuhkan rasa ingin tahu (menggembirakan)."
  },
  {
    "id": "pck-pm-09",
    "bank": "PCK",
    "topic": "Pemesinan Bubut, Frais & Gerinda",
    "pckFocus": "Media/ICT & Simulator",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "prompt": "Ketika rasio jumlah siswa terhadap unit mesin bubut fisik di bengkel adalah 4:1, guru merancang pembelajaran berotasi memadukan simulasi digital prapraktik dan bengkel nyata. Evaluasi efektivitas skenario berikut.",
    "categories": [
      "Tepat",
      "Tidak Tepat"
    ],
    "statements": [
      {
        "text": "Kelompok yang menunggu giliran mesin fisik menganalisis lembar kerja rencana pemotongan (perhitungan Cs, rpm, urutan langkah, dan identifikasi bahaya) atau menjalankan simulator virtual agar tetap aktif belajar.",
        "answer": 0
      },
      {
        "text": "Seluruh 32 siswa berkerumun rapat menonton 1 siswa mengoperasikan mesin yang sama tanpa tugas terstruktur hingga bel berbunyi.",
        "answer": 1
      },
      {
        "text": "Setiap siswa wajib lolos cek kesiapan (pemeriksaan clamping, arah putar, rpm, dan APD) bersama teman pengamat/guru sebelum tombol start mesin fisik ditekan.",
        "answer": 0
      }
    ],
    "explanation": "Manajemen rotasi bengkel (station rotation) memadukan simulator/perencanaan di meja kerja, peer-check keselamatan, dan giliran mesin berjumlah kecil guna menjaga keterlibatan aktif maupun keselamatan."
  },
  {
    "id": "pck-pm-10",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Tindak Lanjut Asesmen Formatif Berjenjang (P.6)",
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Setelah memantau asesmen formatif perencanaan kerja pemesinan untuk 30 murid, guru memperoleh data: 8 murid mahir menyusun rencana kerja aman dan efektif; 14 murid dapat menyusun langkah namun bingung menjelaskan urutan prioritas keselamatan; dan 8 murid belum memahami langkah awal serta ragu membaca petunjuk kerja. Langkah tindak lanjut tepat adalah .... (Pilih semua yang benar)",
    "options": [
      "Menyediakan studi kasus tantangan pemecahan masalah bengkel yang lebih kompleks bagi kelompok 8 murid yang sudah mahir.",
      "Membimbing kelompok 14 murid melalui diskusi perbandingan risiko keselamatan di tiap urutan langkah.",
      "Memberikan penguatan dasar menggunakan bagan alur langkah sederhana bergambar dan pendampingan intensif bagi kelompok 8 murid terakhir.",
      "Memberikan nilai ulangan tambahan yang sama persis untuk seluruh kelas agar peringkat segera keluar.",
      "Meminta 8 murid terakhir menyalin buku paket aturan bengkel sebanyak dua kali tanpa praktik."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Asesmen formatif berfungsi memetakan jenis dukungan berbeda sesuai profil kesalahan/kesiapan tiap kelompok (pengayaan, penguatan nalar konsep, dan remediasi prasyarat)."
  },
  {
    "id": "pck-pm-11",
    "bank": "PCK",
    "topic": "Pemesinan Bubut, Frais & Gerinda",
    "pckFocus": "Metode Pengajaran",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "Guru akan mengajarkan urutan langkah kerja (operation sheet / SOP) pembuatan poros eksentrik sederhana kepada kelas XI. Pendekatan pembelajaran berbasis masalah dan kontekstual mana saja yang paling efektif membangun kemandirian berpikir siswa? (Pilih lebih dari satu)",
    "options": [
      "Meminta siswa menganalisis gambar kerja poros eksentrik terlebih dahulu untuk merumuskan urutan operasi (facing -> senter -> bubut bertingkat -> pencekaman offset rahang/collet) sebelum membandingkannya dengan contoh SOP baku.",
      "Mendiskusikan konsekuensi urutan salah-misalnya langsung mengebor alur pasak atau mengulir sebelum membubut diameter bertingkat acuan.",
      "Menyediakan lembar kerja berpanduan pertanyaan reflektif agar setiap kelompok memverifikasi titik tumpu datum pencekaman.",
      "Menuliskan urutan 1–15 di papan tulis dan melarang siswa menanyakan alasan mengapa suatu langkah didahulukan.",
      "Menghilangkan tahap penyusunan operation sheet dan menyuruh siswa langsung memotong bahan sesuka urutan masing-masing."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Menyusun operation sheet secara analitis (membandingkan konsekuensi urutan salah, menjaga integritas datum pencekaman) membentuk kompetensi perencana proses (process engineer mindset), bukan sekadar operator peniru instruksi mekanis."
  },
  {
    "id": "pck-pm-12",
    "bank": "PCK",
    "topic": "Pemesinan Bubut, Frais & Gerinda",
    "pckFocus": "Asesmen Otentik",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.5",
    "prompt": "Agar proyek bengkel pemesinan berorientasi Teaching Factory dan tidak berakhir menjadi besi bekas tak berguna, komponen asesmen otentik dan pemanfaatan produk yang bernilai edukatif tinggi meliputi .... (Pilih semua jawaban benar)",
    "options": [
      "Memproduksi komponen fungsional layak pakai (seperti pin pengunci bengkel, poros roda troli sekolah, atau fixture alat bantu praktik) dengan standar QC toleransi jelas.",
      "Mewajibkan siswa mengisi lembar Quality Control mandiri (membandingkan target gambar kerja vs ukuran aktual dengan deviasi tercatat).",
      "Mengadakan refleksi perbaikan proses apabila ada dimensi di luar toleransi (rework/analisis akar cacat) bukan sekadar langsung memberi skor akhir tanpa umpan balik.",
      "Membuang seluruh hasil praktik yang meleset 0,05 mm tanpa pernah mengajak siswa mengukur atau mendiagnosis penyebab penyimpangannya.",
      "Menilai seluruh kelompok hanya berdasarkan kilau pengamplasan akhir tanpa memeriksa fungsi kecocokan perakitan."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Teaching Factory menghubungkan standar mutu produk nyata, dokumentasi QC berbasis toleransi terukur, dan siklus evaluasi perbaikan cacat manufaktur sehingga proses pembelajaran bermakna penuh."
  },
  {
    "id": "pck-cnc-01",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Kurikulum Adaptif & Literasi Teknologi (PF.4)",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.4",
    "prompt": "Pembelajaran otomasi manufaktur (CNC) di suatu SMK selama ini hanya menekankan menyalin deretan kode pemrograman dari modul lawas, sementara mitra industri menyampaikan lulusan sering kesulitan beradaptasi saat berganti merek kendali mesin maupun membaca alur simulasi. Pengembangan pembelajaran paling adaptif dilakukan tim guru adalah ....",
    "options": [
      "Mengharuskan siswa menghafalkan ratusan perintah kode dari tiga merek mesin sekaligus dalam ujian tulis.",
      "Menggeser fokus pengajaran ke pemahaman prinsip dasar sistem koordinat, alur verifikasi aman melalui simulator komputer, serta refleksi pemecahan masalah logika program.",
      "Menghapus seluruh materi otomasi komputer karena jenis kendali di industri terlalu cepat berubah.",
      "Meminta siswa belajar sendiri di luar jam sekolah melalui tutorial media sosial tanpa bimbingan guru.",
      "Tetap mengajarkan penyalinan satu set kode baku agar seluruh kelas cepat tuntas secara administratif."
    ],
    "answer": 1,
    "explanation": "Kurikulum adaptif (PF.4) membekali prinsip konseptual yang mudah ditransfer lintas merek kendali mesin dan melatih literasi verifikasi digital secara aman."
  },
  {
    "id": "pck-cnc-02",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Scaffolding TIK & Simulator Aman (P.4)",
    "pckFocus": "Media/ICT & Simulator",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "prompt": "Di sebuah SMK, jumlah mesin terotomasi di bengkel terbatas sedangkan risiko kerusakan alat akibat kesalahan alur perintah cukup tinggi. Alur pendampingan (scaffolding) berbasis TIK paling aman dan efektif sebelum murid melaksanakan praktik pemotongan benda kerja nyata adalah ....",
    "options": [
      "Meminta murid langsung mengetik perintah pada mesin nyata tanpa uji coba agar langsung belajar dari kesalahan.",
      "Membimbing murid merancang serta menguji urutan perintah di aplikasi simulator terlebih dahulu untuk mendeteksi tabrakan lintasan, dilanjutkan verifikasi kesesuaian titik acuan kerja serta uji jalan bertahap tanpa beban sebelum praktik nyata.",
      "Mewajibkan murid menghafal seluruh daftar istilah perintah di papan tulis selama satu semester tanpa pernah memakai simulator maupun mesin.",
      "Mengizinkan seluruh kelompok menyalin satu berkas kerja yang sama lalu langsung menjalankan mesin tanpa memeriksa ulang acuan awal.",
      "Melepas pelindung pintu mesin selama praktik agar murid dapat melihat pergerakan ujung alat lebih dekat dan cepat."
    ],
    "answer": 1,
    "explanation": "Integrasi TIK yang tepat (TPACK) menempatkan simulator interaktif sebagai ruang belajar aman sebelum uji jalan bertahap tanpa beban (dry run), sehingga murid memahami konsep tanpa risiko keselamatan kerja."
  },
  {
    "id": "pck-cnc-03",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Penanganan Kecemasan & Keselamatan Psikologis (K.3)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.3",
    "prompt": "Saat mulai belajar mengoperasikan perangkat lunak simulasi mesin otomatis (CNC) kelas XI, beberapa murid tampak takut menekan tombol jalankan karena khawatir melakukan kesalahan yang merusak sistem, hingga berujar \"saya tidak mengerti logika komputer\". Tindakan guru paling tepat membangun rasa aman belajar dan kesiapan murid adalah ....",
    "options": [
      "Menginstruksikan murid yang cepat paham saja yang memegang kendali sementara sisanya mencatat di buku.",
      "Menegaskan bahwa simulator memang dirancang sebagai ruang aman untuk mencoba dan menemukan kesalahan tanpa risiko rusak fisik, lalu membimbing dengan tahapan uji verifikasi bertahap.",
      "Langsung memberikan sanksi nilai setiap kali jalur gerakan pada simulator menyimpang.",
      "Mengatakan bahwa ketakutan tersebut menandakan mereka tidak pantas memilih jurusan pemesinan.",
      "Mengubah kegiatan belajar simulator menjadi tugas mengerjakan soal pilihan ganda tertulis."
    ],
    "answer": 1,
    "explanation": "Ruang belajar aman psikologis mengubah rasa takut gagal menjadi keberanian bereksperimen secara terkendali melalui simulasi dan bimbingan bertahap."
  },
  {
    "id": "pck-cnc-04",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Miskonsepsi Pemrograman Berbantuan Komputer (PF.3)",
    "pckFocus": "Miskonsepsi Siswa",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.3",
    "prompt": "Guru menemukan pola miskonsepsi di kelas XI: murid mudah menghasilkan alur kerja otomatis lewat fitur bawaan komputer, tetapi saat dimensi komponen atau posisi acuan bergeser, mereka tidak menyadari kesalahannya hingga simulasi menunjukkan tabrakan. Cara terbaik guru mengoreksi miskonsepsi tersebut adalah ....",
    "options": [
      "Mematikan seluruh fitur otomatis perangkat lunak selamanya agar murid hanya menulis manual seumur sekolah.",
      "Membimbing murid memprediksi posisi titik acuan kerja di atas sketsa kertas terlebih dahulu, membandingkan prediksi dengan hasil gerak simulator, dan menganalisis penyebab selisihnya.",
      "Memberikan satu berkas simulasi yang sudah dibenarkan guru agar tinggal dijalankan bersama di kelas.",
      "Menambah tugas menghafalkan istilah bahasa Inggris dalam menu perangkat lunak.",
      "Mengabaikan kesalahan simulasi selama benda kerja akhir nanti tetap jadi di tangan murid mahir."
    ],
    "answer": 1,
    "explanation": "Menghubungkan prediksi mental sketsa dengan verifikasi visual simulator (Predict-Observe-Explain) membangun kesadaran spasial serta logika kendali, bukan sekadar klik tombol."
  },
  {
    "id": "pck-cnc-05",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Asesmen Otentik Logika Simulasi (P.6)",
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Setiap murid dapat menguji hasil rancangannya lewat simulator komputer mandiri kapan saja. Bagaimana strategi asesmen guru untuk memastikan murid benar-benar memahami logika pergerakan dan keamanan proses, bukan sekadar mencoba acak sampai tampilan simulasi kebetulan terlihat rapi?",
    "options": [
      "Hanya menilai tangkapan layar gambar akhir benda kerja tanpa memeriksa urutan langkah kerja sama sekali.",
      "Memadukan tugas menelusuri kesalahan (murid memprediksi arah lintasan dan menemukan bagian rancangan bermasalah sebelum dijalankan), daftar periksa keselamatan pergerakan awal, serta klarifikasi lisan singkat mengenai alasan rancangan mereka.",
      "Membagikan satu berkas jadi milik guru untuk dijalankan bersama lalu menilai kerapian penamaan berkas murid.",
      "Menguji hafalan daftar singkatan perintah satu per satu secara tertulis tanpa konteks kasus benda kerja.",
      "Membebaskan murid mengganti angka parameter secara acak hingga peringatan kesalahan pada layar hilang."
    ],
    "answer": 1,
    "explanation": "Asesmen otentik dan menyeluruh mengukur proses berpikir (prediksi, pelacakan kesalahan, justifikasi lisan) selain produk akhir sehingga mencegah ketergantungan pada trial-and-error acak."
  },
  {
    "id": "pck-cnc-06",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Literasi Digital & Evaluasi Simulasi (P.4)",
    "pckFocus": "Media/ICT & Simulator",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "prompt": "Guru memanfaatkan aplikasi simulasi manufaktur digital untuk memperdalam pemahaman alur produksi siswa kelas XII. Tentukan apakah pernyataan praktik pembelajaran teknologi berikut Tepat atau Kurang Tepat.",
    "categories": [
      "Tepat",
      "Kurang Tepat"
    ],
    "statements": [
      {
        "text": "Murid diminta menguji beberapa rancangan urutan pemesinan di simulator, mencatat temuan kendala efisiensi atau keselamatan, dan menyimpulkan pilihan terbaiknya.",
        "answer": 0
      },
      {
        "text": "Teknologi dipakai hanya untuk menggantikan papan tulis dengan menayangkan salindia teks panjang di layar proyektor.",
        "answer": 1
      },
      {
        "text": "Guru melatih murid bersikap kritis mengecek kesesuaian logika gerakan hasil generator otomatis software terhadap kondisi alat bengkel nyata.",
        "answer": 0
      },
      {
        "text": "Siswa dinilai semata-mata dari seberapa cepat mereka menyelesaikan klik menu aplikasi tanpa perlu menjelaskan alasan langkahnya.",
        "answer": 1
      }
    ],
    "explanation": "Integrasi TIK secara kritis dan kreatif (P.4) menempatkan perangkat lunak/simulator sebagai sarana eksplorasi nalar dan evaluasi masalah, bukan sekadar substitusi papan tulis atau klik mekanis."
  },
  {
    "id": "pck-cnc-07",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Budaya Keselamatan & Pengambilan Keputusan (K.3)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.3",
    "prompt": "Dalam transisi pembelajaran dari simulator komputer menuju mesin otomatis nyata di bengkel SMK, guru menetapkan budaya kerja aman yang konsisten. Evaluasi ketepatan kebijakan kelas berikut (Sesuai / Tidak Sesuai).",
    "categories": [
      "Sesuai",
      "Tidak Sesuai"
    ],
    "statements": [
      {
        "text": "Murid wajib melewati tahap pemeriksaan silang bersama guru/rekan (hold point) atas simulasi aman sebelum menyalakan mesin fisik nyata.",
        "answer": 0
      },
      {
        "text": "Pelindung pintu pengaman mesin boleh dibuka saat berlangsungnya proses agar siswa dapat mengamati gerakan komponen lebih dekat dengan cepat.",
        "answer": 1
      },
      {
        "text": "Murid dibiasakan segera menghentikan proses dengan tenang dan melaporkan kejanggalan kepada pembimbing tanpa takut dimarahi.",
        "answer": 0
      },
      {
        "text": "Siswa diizinkan menjalankan rancangan baru langsung di mesin nyata demi mengejar ketepatan waktu jam pelajaran tanpa verifikasi awal.",
        "answer": 1
      }
    ],
    "explanation": "Budaya belajar aman menanamkan verifikasi wajib pra-eksekusi, kepatuhan penuh pada pelindung keselamatan mesin, serta keberanian melapor dini tanpa rasa takut."
  },
  {
    "id": "pck-cnc-08",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Sinergi Alat Otomatis & Logika Konsep (P.4)",
    "pckFocus": "Media/ICT & Simulator",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "prompt": "Guru memadukan perangkat lunak pemodelan otomatis (yang menghasilkan alur kerja secara cepat dari gambar 3D) dengan latihan penyusunan logika lintasan dasar pada murid kelas XII. Tentukan ketepatan pertimbangan pedagogis berikut.",
    "categories": [
      "Benar",
      "Salah"
    ],
    "statements": [
      {
        "text": "Pemahaman logika gerak dasar tetap penting diajarkan agar murid mampu membaca ulang, memverifikasi keselamatan gerak awal, dan menilai kesesuaian hasil otomatis dari komputer.",
        "answer": 0
      },
      {
        "text": "Karena komputer sudah menghasilkan alur kerja secara otomatis, murid tidak perlu lagi diajarkan memeriksa kesesuaian keluaran perangkat lunak dengan kondisi mesin bengkel.",
        "answer": 1
      },
      {
        "text": "Membandingkan hasil rancangan otomatis komputer dengan rancangan manual sederhana melatih murid melihat hubungan antara bentuk geometri dan efisiensi langkah kerja.",
        "answer": 0
      }
    ],
    "explanation": "Pemanfaatan teknologi dalam TPACK tidak menggantikan nalar konseptual murid; pemahaman dasar tetap menjadi fondasi berpikir kritis untuk memverifikasi hasil perangkat lunak."
  },
  {
    "id": "pck-cnc-09",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Praktik Profesional & Refleksi Pengajaran (PF.5)",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.5",
    "prompt": "Setelah satu semester mengajarkan pemodelan hingga simulasi otomatis, Pak Dodi mengevaluasi jurnal belajar muridnya dan melihat banyak murid masih keliru menafsirkan langkah verifikasi sebelum kerja nyata. Pengembangan praktik profesional inovatif untuk perbaikan siklus pembelajaran selanjutnya meliputi .... (Pilih semua yang benar)",
    "options": [
      "Menyusun lembar refleksi kasus kesalahan simulasi (\"Kesalahan yang Ditemukan -> Dampaknya -> Cara Verifikasi Ulang\") untuk dibahas bersama di kelas.",
      "Merancang kolaborasi tinjauan sejawat (peer-review) antarkelompok sebelum program simulasi diserahkan untuk validasi guru.",
      "Mendiskusikan temuan kesalahan berulang murid bersama rekan guru produktif di komunitas belajar MGMP guna memperbaiki urutan modul ajar.",
      "Menghapus seluruh sesi simulasi dan kembali ke tes pilihan ganda teori semata supaya tingkat kelulusan tinggi.",
      "Membiarkan siswa mengulang kesalahan yang sama pada mesin fisik supaya mendapatkan efek jera secara langsung."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Inovasi profesional (PF.5 / K.2 / S.3) mengandalkan bukti kesalahan belajar untuk memperbaiki desain modul, penguatan peer-review, dan diskusi kolaboratif antar-pendidik."
  },
  {
    "id": "pck-cnc-10",
    "bank": "PCK",
    "topic": "Pemrograman CNC & Simulator",
    "pckFocus": "Metode Pengajaran",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.3",
    "prompt": "Untuk menciptakan pembelajaran pemrograman CNC yang bermakna, menantang, dan menyenangkan (deep learning), strategi mana saja yang layak diterapkan guru? (Pilih semua jawaban benar)",
    "options": [
      "Memberikan tantangan \"Debug Kode Bermasalah\" di simulator di mana siswa berperan sebagai teknisi pemeliharaan yang mencari 3 jebakan tabrakan pada baris program.",
      "Menyelenggarakan proyek mini membuat produk kreatif bernilai guna (misal gantungan kunci aluminium terukir profil atau komponen rakitan presisi) dengan kompetisi efisiensi waktu siklus tanpa mengorbankan toleransi.",
      "Mengajak siswa memvisualisasikan lintasan pahat pada kertas berpetak Kartesius terlebih dahulu sebelum mengetikkannya di simulator.",
      "Meminta siswa menyalin 5 halaman kode heksadesimal dan program simulasi CNC proyek orang lain tanpa mengerti batas sumbu mesin.",
      "Menghukum setiap kesalahan sintaks di simulator dengan melarang siswa praktik selama satu bulan."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Eksplorasi aman di simulator, tantangan debugging, pemetaan koordinat Kartesius, dan proyek produk fungsional menciptakan rasa ingin tahu, berpikir kritis, dan motivasi intrinsik tanpa risiko merusak alat."
  },
  {
    "id": "pck-cnc-11",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Kemandirian & Sistem Among di Bengkel Modern (P.5)",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.5",
    "prompt": "Penerapan nilai filosofis Ki Hadjar Dewantara (Ing Ngarsa Sung Tulada, Ing Madya Mangun Karsa, Tut Wuri Handayani) ketika membimbing proyek simulasi teknologi manufaktur di SMK terwujud dalam perilaku guru berikut .... (Pilih semua yang benar)",
    "options": [
      "Memberi teladan disiplin memeriksa keselamatan kerja, ketelitian verifikasi data, dan ketenangan menghadapi kendala sistem (Ing Ngarsa Sung Tulada).",
      "Berdiskusi bersama di tengah kelompok untuk memantik semangat eksplorasi pemecahan masalah saat murid menemui hambatan logika (Ing Madya Mangun Karsa).",
      "Memberikan kemandirian kelompok mengembangkan rancangan solusi sendiri dengan dukungan umpan balik konstruktif dari belakang (Tut Wuri Handayani).",
      "Menyelesaikan seluruh perancangan proyek siswa secara sepihak agar hasil pameran jurusan tampak memukau.",
      "Membebaskan siswa menentukan jam pulang dan meninggalkan tugas proyek tanpa pemantauan maupun arah tujuan belajar."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Sistem Among menyeimbangkan keteladanan sikap, dorongan inspiratif di tengah proses, dan pemberian kemandirian terarah sesuai kesiapan peserta didik."
  },
  {
    "id": "pck-met-01",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Penyelidikan Kesalahan Pengukuran & Konsep (PF.2)",
    "pckFocus": "Miskonsepsi Siswa",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.2",
    "prompt": "Saat asesmen awal Pengukuran Teknik di kelas X, sebagian besar murid mampu menjawab soal teoretis di buku tentang fungsi alat ukur, tetapi saat diberi benda nyata mereka sering ragu memilih alat mana yang tepat dan keliru memastikan kesesuaian ketelitian dengan kebutuhan benda kerja. Langkah pembelajaran paling tepat untuk membangun pemahaman bermakna adalah ....",
    "options": [
      "Menambah jumlah latihan soal menuliskan ulang gambar skala alat ukur dari papan tulis.",
      "Menghadirkan beberapa benda kerja dengan kebutuhan ketelitian berbeda serta meminta murid menyelidiki, membandingkan hasil beragam alat ukur, dan menyimpulkan alasan pemilihannya.",
      "Melarang murid memakai alat ukur sederhana dan langsung mewajibkan satu jenis alat ukur paling rumit.",
      "Memberikan kunci tabel konversi satuan agar murid tidak perlu memikirkan jenis alat ukur.",
      "Menugaskan murid menyalin bab peraturan kalibrasi alat ukur laboratorium di buku catatan."
    ],
    "answer": 1,
    "explanation": "Pembelajaran berbasis penyelidikan membandingkan ketelitian alat langsung terhadap kebutuhan benda nyata mengubah hafalan konsep menjadi keterampilan mengambil keputusan ilmiah."
  },
  {
    "id": "pck-met-02",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Analisis Kebutuhan & Dukungan Belajar Multidimensi (PF.3)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.3",
    "prompt": "Sebelum memulai unit Inspeksi Kualitas Benda Kerja, guru mencatat profil murid di kelasnya: Andi cepat memahami konsep ketelitian namun kesulitan melihat garis skala sangat halus dari jauh karena hambatan penglihatan; Sinta paham ketika mempraktikkan langsung namun gugup jika diuji terburu-buru; Bima lancar menjelaskan lisan namun kerap tergesa-gesa menuliskan data. Simpulan pedagogis paling tepat adalah ....",
    "options": [
      "Menempatkan Sinta dan Andi dalam kelompok lambat karena dianggap memiliki hambatan kemampuan dasar.",
      "Menetapkan tes cepat berbasis waktu satu menit per orang sebagai standar tunggal keadilan ujian.",
      "Memahami bahwa kesiapan belajar bersifat multidimensi: guru menyediakan media visual pembesar/digital bagi Andi, waktu & cek bertahap tenang bagi Sinta, dan daftar verifikasi bagi Bima dengan tujuan sama.",
      "Membebaskan Andi dari praktik pemeriksaan alat ukur agar cukup mengerjakan tugas ringkasan tulis.",
      "Mengelompokkan murid hanya berdasarkan nilai ujian tengah semester sebelumnya."
    ],
    "answer": 2,
    "explanation": "Karakteristik murid bersifat multidimensi; hambatan indrawi atau tempo kecemasan bukan ukuran rendahnya kecerdasan sehingga guru menyediakan akomodasi akses yang tepat."
  },
  {
    "id": "pck-met-03",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Etika Pengujian & Kejujuran Data Pengukuran (K.1)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.1",
    "prompt": "Dalam proyek uji kualitas produk di laboratorium pengukuran, satu kelompok mendapati hasil ukur benda buatannya sedikit melewati batas toleransi yang diminta. Salah seorang anggota mengusulkan memanipulasi angka di lembar laporan agar kelompoknya tetap mendapat nilai sempurna. Tindakan guru paling tepat sebagai teladan ketegasan etika adalah ....",
    "options": [
      "Menyetujui pengubahan kecil pada data laporan selama selisih ukurannya tidak mencolok.",
      "Menolak keras segala manipulasi data, membimbing murid mencatat data faktual apa adanya, menelaah bersama penyebab penyimpangan, dan menilai jujur analisis perbaikannya dalam rubrik.",
      "Memberi nilai nol permanen untuk seluruh semester tanpa mendengar penjelasan kelompok tersebut.",
      "Meminta kelompok menukar benda kerjanya secara diam-diam dengan milik kelompok lain yang sudah tepat.",
      "Menyatakan bahwa pelaporan angka yang rapi lebih penting daripada kesesuaian data pengukuran lapangan."
    ],
    "answer": 1,
    "explanation": "Integritas etika profesi (K.1) mengharuskan objektivitas dan kejujuran data sebagai nilai utama; kegagalan dimensi benda menjadi materi refleksi analitis, bukan alasan memalsukan laporan."
  },
  {
    "id": "pck-met-04",
    "bank": "PCK",
    "topic": "Metrologi Presisi & Pengukuran",
    "pckFocus": "Media/ICT & Simulator",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "prompt": "Pada awal kelas X, banyak siswa membutuhkan waktu lama membaca skala alat ukur jangka sorong karena keterbatasan alat fisik bagus di sekolah. Cara memanfaatkan media digital sebelum sesi pemeriksaan blok ukur nyata (gauge block) di kelas adalah ....",
    "options": [
      "Menunjukkan foto skala nonius statis yang buram di papan tulis tanpa interaksi.",
      "Menugaskan latihan mandiri di simulator interaktif pembacaan skala jangka sorong dan mikrometer (yang dilengkapi zoom skala dan variasi ukuran acak dengan umpan balik instan) hingga mencapai ketepatan >90%, lalu memvalidasi pengukurannya di atas alat nyata dan blok ukur di bengkel.",
      "Membagikan tabel jawaban pembacaan ukuran kepada seluruh kelas sebelum kuis dimulai.",
      "Menyuruh siswa hanya memakai jangka sorong digital LCD dan melarang mengenal skala vernier.",
      "Mengganti seluruh sesi pengukuran praktik dengan tugas merangkum sejarah penemuan jangka sorong."
    ],
    "answer": 1,
    "explanation": "Simulator membaca jangka sorong/mikrometer memungkinkan latihan berulang tak terbatas di luar bengkel dengan variasi soal acak serta pembesaran visual garis nonius yang jernih, sebelum siswa menghadapi benda ukur dan rasa tekan (feel) alat nyata di laboratorium."
  },
  {
    "id": "pck-met-05",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Experiential Learning & Refleksi Praktik (P.1)",
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "Guru mengaplikasikan siklus Experiential Learning dalam pelajaran Pengukuran dan Kontrol Mutu. Setelah seluruh kelompok merasakan langsung proses mengukur benda kerja bergiliran dengan kondisi pencahayaan dan sudut pandang berbeda, guru mengajak murid menuliskan hambatan yang mereka rasakan serta mengapa angka tiap pengamat bisa berbeda. Langkah tersebut mencerminkan tahap ....",
    "options": [
      "Concrete Experience",
      "Reflective Observation",
      "Active Experimentation",
      "Summative Assessment",
      "Drill Repetition"
    ],
    "answer": 1,
    "explanation": "Mengamati dan merefleksikan pengalaman yang baru dialami beserta penyebab variasi hasil pengamatan termasuk tahap Reflective Observation sebelum menyusun konsep kesimpulan."
  },
  {
    "id": "pck-met-06",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Analisis Butir & Tindak Lanjut Evaluasi (P.6)",
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Hasil ulangan bab Inspeksi Pengukuran di kelas X menunjukkan rata-rata kelas mencapai angka 81 (di atas kriteria ketuntasan 75), namun analisis per butir menunjukkan 75% murid keliru menginterpretasikan kesesuaian pemilihan alat ukur terhadap fungsi komponen. Tentukan kesesuaian simpulan dan tindak lanjut guru berikut (Sesuai / Tidak Sesuai).",
    "categories": [
      "Sesuai",
      "Tidak Sesuai"
    ],
    "statements": [
      {
        "text": "Meski rata-rata kelas melampaui kriteria, ada kesulitan spesifik pada aspek pemilihan alat sehingga guru perlu menyelenggarakan penguatan konsep terarah pada bagian itu.",
        "answer": 0
      },
      {
        "text": "Guru membuang soal pemilihan alat ukur dari arsip evaluasi karena terbukti menyulitkan mayoritas peserta didik di kelas X.",
        "answer": 1
      },
      {
        "text": "Guru mengevaluasi cara mengajarnya sendiri apakah selama ini terlalu menekankan hafalan membaca skala ketimbang penalaran alasan memilih instrumen.",
        "answer": 0
      },
      {
        "text": "Pembelajaran unit pengukuran dinyatakan selesai total karena angka rata-rata kelas telah memenuhi syarat administratif ketuntasan.",
        "answer": 1
      }
    ],
    "explanation": "Analisis butir asesmen mengungkap celah belajar yang tersembunyi di balik nilai rata-rata kelas dan memandu refleksi praktik mengajar guru secara akurat."
  },
  {
    "id": "pck-met-07",
    "bank": "PCK",
    "topic": "Metrologi Presisi & Pengukuran",
    "pckFocus": "Asesmen Otentik",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Guru merancang asesmen otentik inspeksi Kualitas (Quality Control) benda kerja poros dan lubang di kelas XI. Tentukan apakah langkah siswa berikut Tepat atau Tidak Tepat.",
    "categories": [
      "Tepat",
      "Tidak Tepat"
    ],
    "statements": [
      {
        "text": "Mengukur diameter silinder pada dua sisi tegak lurus (0° dan 90°) di tiga titik sepanjang poros (ujung-tengah-pangkal) guna mendeteksi kesalahan kebulatan (out-of-roundness) serta ketirusan (taper).",
        "answer": 0
      },
      {
        "text": "Langsung mengukur benda kerja logam yang masih sangat panas sesaat setelah keluar dari penyayatan kasar agar lebih cepat mencatat laporan.",
        "answer": 1
      },
      {
        "text": "Mengkalibrasi (zero-set) bore gauge menggunakan mikrometer luar yang telah diverifikasi atau setting ring master sebelum mengukur diameter lubang dalam.",
        "answer": 0
      }
    ],
    "explanation": "Inspeksi QC industri sejati memperhitungkan multi-posisi sumbu untuk mendeteksi cacat geometrik (ketirusan/kelonjongan), menstabilkan suhu benda kerja, dan mensetting instrumen komparatif dengan master referensi."
  },
  {
    "id": "pck-met-08",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Kolaborasi & Pemeliharaan Sarana Bersama (S.2)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Sosial",
    "subkompetensi": "S.2",
    "prompt": "Untuk menumbuhkan tanggung jawab merawat alat laboratorium pengukuran presisi sekolah secara berkelanjutan, guru berkolaborasi bersama tenaga kependidikan pengelola laboratorium (toolman) dan peserta didik. Tentukan ketepatan langkah kolaboratif berikut (Tepat / Kurang Tepat).",
    "categories": [
      "Tepat",
      "Kurang Tepat"
    ],
    "statements": [
      {
        "text": "Menyusun kesepakatan prosedur peminjaman, pemeriksaan kebersihan, dan pelaporan kondisi alat bersama petugas laboratorium serta perwakilan siswa.",
        "answer": 0
      },
      {
        "text": "Menyerahkan urusan merapikan dan memeriksa seluruh peralatan laboratorium sepenuhnya kepada petugas ruang bengkel agar murid fokus pulang cepat.",
        "answer": 1
      },
      {
        "text": "Melibatkan murid dalam siklus refleksi kepedulian terhadap fasilitas bersama sebagai bagian pembinaan karakter tanggung jawab.",
        "answer": 0
      },
      {
        "text": "Mengunci seluruh peralatan presisi di lemari pamer dan hanya menunjukkannya dari balik kaca karena khawatir rusak dipakai murid belajar.",
        "answer": 1
      }
    ],
    "explanation": "Sinergi pendidik, tenaga kependidikan, dan murid membangun budaya rasa memiliki, keselamatan alat belajar, dan kemandirian karakter kerja."
  },
  {
    "id": "pck-met-09",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Ragam Ekspresi & DUP dalam Pengukuran (P.2)",
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "prompt": "Pada asesmen akhir pemahaman prinsip inspeksi mutu benda kerja kelas X, guru ingin menerapkan prinsip Universal Design for Learning (DUP) tanpa menurunkan standar kompetensi tujuan pembelajaran. Langkah yang paling sesuai mencakup .... (Pilih semua yang benar)",
    "options": [
      "Menyediakan pilihan instrumen bantu akses visual (skala perbesar/pembaca digital) bagi murid yang memiliki kendala penglihatan halus.",
      "Memberi keleluasaan cara menyajikan hasil laporan pemeriksaan mutu (demonstrasi video penjelasan, tabel diagram lisan, atau laporan tertulis terstruktur) dengan rubrik kriteria tujuan yang sama.",
      "Menyediakan panduan petunjuk kerja bergambar disertai langkah tulis singkat agar dapat diakses beragam profil pemahaman bahasa.",
      "Membebaskan murid berkebutuhan khusus dari seluruh pemeriksaan keakuratan pengukuran supaya mereka pasti lulus.",
      "Mewajibkan seluruh murid menyerahkan esai tulisan tangan tiga halaman dalam kondisi senyap total."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "DUP menawarkan aksesibilitas representasi dan fleksibilitas cara ekspresi (firm goals, flexible means) sementara kriteria mutu dan tujuan pembelajaran tetap dijaga setara."
  },
  {
    "id": "pck-met-10",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Pelaporan Capaian & Deskripsi Rapor Informatif (P.6)",
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Hasil catatan belajar unit Kontrol Kualitas menunjukkan Bayu sangat teliti saat bekerja dengan daftar cek pemeriksaan serta sopan membantu teman kelompok, namun masih memerlukan pendampingan saat menalar keterkaitan penyimpangan data hasil ukur dengan penyebab prosesnya. Deskripsi laporan capaian yang informatif bagi Bayu dan orang tuanya seharusnya memuat unsur berikut .... (Pilih semua yang benar)",
    "options": [
      "Pernyataan jelas mengenai kekuatan yang sudah dicapai Bayu secara spesifik pada ketelitian pemeriksaan berdasar bukti praktik.",
      "Catatan area keterampilan yang masih membutuhkan dukungan lanjutan, yaitu menalar hubungan hasil penyimpangan ukur dengan langkah proses sebelumnya.",
      "Bahasa yang positif, membangun, dan dapat dipahami oleh murid maupun orang tua tanpa sekadar mencantumkan peringkat kelas.",
      "Hanya mencantumkan angka rata-rata rapor disertai pesan umum \"Tingkatkan lagi belajarnya agar mendapat peringkat lebih baik\".",
      "Mengkritik perilaku Bayu di kelas tanpa mengaitkannya dengan data perkembangan kompetensi selama satu semester."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Deskripsi rapor berbasis bukti (P.6) menyebutkan secara spesifik pencapaian kekuatan murid sekaligus aspek perbaikan yang membutuhkan bimbingan lanjutan dengan bahasa konstruktif."
  },
  {
    "id": "pck-met-11",
    "bank": "PCK",
    "topic": "Metrologi Presisi & Pengukuran",
    "pckFocus": "Metode Pengajaran",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "prompt": "Untuk membantu siswa yang memiliki hambatan ketelitian membaca skala alat ukur kecil tanpa menimbulkan rasa malu di depan kelompok, penyesuaian pembelajaran responsif dan suportif yang tepat dilakukan guru adalah .... (Pilih lebih dari satu)",
    "options": [
      "Menyediakan lembar kartu pembesaran visual (exploded diagram pembacaan) dan memadukan latihan simulator interaktif yang bisa diperbesar di layar.",
      "Menggunakan teknik berpasangan saling memverifikasi (think-pair-verify) pada benda uji bernomor buta sehingga tiap siswa berkesempatan mendiskusikan langkah baca skala utama + nonius secara aman.",
      "Mendiagnosis secara spesifik apakah kekeliruan terletak pada pengenalan angka puluhan, pelupaan strip 0,5 mm, atau cara menentukan garis berimpit.",
      "Meminta siswa tersebut hanya bertugas menyapu lantai bengkel selama jam pelajaran Metrologi berlangsung.",
      "Melarang siswa memegang alat ukur nyata hingga ujian kenaikan kelas selesai."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pendampingan diagnostik yang spesifik (memilah kesalahan baca skala utama vs garis 0,5 mm vs nonius) dipadukan media bantu perbesar visual dan verifikasi berpasangan secara psikologis aman efektif membangun kecakapan metrologi."
  }
];
