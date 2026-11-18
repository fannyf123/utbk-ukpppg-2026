import type { ExamQuestion } from '../types/exam';

/**
 * Bank PCK Teknik Mesin SMK - Bagian 2 (42 Soal PCK & SJT bergaya LMS PPG 2026)
 * Seluruh butir menguji K3LH, Teaching Factory, CASEL, Growth Mindset, inklusi & pengajaran konsep.
 */
export const PCK_MESIN_PART_2: ExamQuestion[] = [
  {
    "id": "pck-mat-01",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Miskonsepsi Materi & Eksplorasi Nyata (PF.2)",
    "pckFocus": "Miskonsepsi Siswa",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.2",
    "prompt": "Dalam pelajaran Pengetahuan Bahan Teknik kelas X, sebagian besar murid berkesimpulan bahwa setiap logam yang terasa keras di permukaan pasti tahan benturan dan tidak mudah patah. Akibatnya saat memilih material untuk komponen yang menahan beban kejut, mereka memilih bahan paling keras saja. Tindakan pedagogis terbaik untuk meluruskan miskonsepsi konseptual tersebut adalah ....",
    "options": [
      "Menyuruh murid menyalin tabel definisi sifat mekanik logam dari buku paket sebanyak tiga kali.",
      "Menyajikan dua sampel bahan berbeda (keras-getas vs ulet-tangguh) melalui demonstrasi uji patah terkendali atau simulasi, lalu membimbing murid membedakan konsep kekerasan dengan ketangguhan.",
      "Menghilangkan pembahasan perbandingan sifat material agar murid menghafal nama merek dagang logam saja.",
      "Langsung menyalahkan hasil tugas siswa dan memberi nilai nol pada topik pengetahuan bahan.",
      "Menyerahkan penjelasan sifat bahan kepada petugas laboratorium tanpa keterlibatan diskusi kelas."
    ],
    "answer": 1,
    "explanation": "Pembuktian empiris melalui demonstrasi perbandingan sifat nyata membantu murid meninggalkan miskonsepsi bahwa keras sama dengan tahan patah, dan membangun konsep yang bermakna."
  },
  {
    "id": "pck-mat-02",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Tujuan Pembelajaran HOTS & Bermakna (PF.1)",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.1",
    "prompt": "Sejalan dengan tujuan pendidikan menengah kejuruan dan penguatan nalar kritis abad ke-21, rumusan tujuan pembelajaran pada topik Pemilihan Material Teknik di kelas X Teknik Mesin yang paling bermakna (bukan hafalan tingkat rendah) adalah ....",
    "options": [
      "Murid mampu menyebutkan dua puluh kode jenis baja teknik berdasarkan urutan abjad di buku catatan.",
      "Murid mampu menganalisis kebutuhan fungsi komponen nyata serta memilih kandidat bahan yang tepat beserta pertimbangan keselamatan, ketersediaan lokal, dan efisiensinya.",
      "Murid mampu menghafal sejarah penemuan proses peleburan logam pada abad kesembilan belas.",
      "Murid mampu menyalin gambar diagram struktur bahan ke dalam buku tulis dengan tinta warna-warni.",
      "Murid mampu menjawab cepat kuis daring definisi istilah sifat logam dalam tiga puluh detik."
    ],
    "answer": 1,
    "explanation": "Tujuan belajar level tinggi (HOTS C4-C5 & PF.1) menuntut kemampuan menganalisis masalah kontekstual dan mengambil keputusan pemilihan yang bertanggung jawab."
  },
  {
    "id": "pck-mat-03",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Refleksi Guru & Perubahan Strategi Ajar (K.2)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.2",
    "prompt": "Pada ulangan harian Pengetahuan Bahan, kelas yang diajar Pak Andi mendapat nilai rata-rata jauh lebih rendah dibanding kelas paralel yang diajar rekan gurunya dengan pendekatan studi kasus benda sekitar sekolah. Sikap refleksi diri guru yang paling mencerminkan K.2 dan pola pikir bertumbuh adalah ....",
    "options": [
      "Menyimpulkan bahwa murid di kelasnya memang memiliki kesiapan akademik bawaan yang lebih rendah.",
      "Menganggap hasil asesmen tersebut kebetulan semata sehingga metode ceramah tetap dipertahankan.",
      "Mengkaji ulang modul ajar bersama rekan sejawat di MGMP, memeriksa di bagian mana pemahaman murid tersendat, lalu mencoba strategi studi kasus di kelasnya dan memantau hasilnya.",
      "Membuang soal analisis penerapan bahan pada ujian berikutnya agar nilai rata-rata tampak meningkat.",
      "Menegur siswa karena dianggap kurang serius belajar menjelang ulangan di rumah."
    ],
    "answer": 2,
    "explanation": "Refleksi berkelanjutan (K.2) memandang rendahnya capaian sebagai umpan balik atas metode pengajaran guru lalu menindaklanjutinya dengan belajar bersama sejawat."
  },
  {
    "id": "pck-mat-04",
    "bank": "PCK",
    "topic": "Ilmu Bahan & Heat Treatment",
    "pckFocus": "Media/ICT & Simulator",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "prompt": "Karena mesin uji tarik universal (UTM) dan tungku perlakuan panas beratmosfer terkendali di bengkel sekolah terbatas jumlah spesimennya dan berbiaya mahal per kali uji, strategi pembelajaran yang memadukan konsep mikrostruktur dan praktik hemat sumber daya adalah ....",
    "options": [
      "Menghilangkan materi sifat mekanik logam seluruhnya dari mata pelajaran.",
      "Menggunakan simulasi interaktif diagram fasa Fe–Fe3C dan kurva uji tarik virtual untuk mengeksplorasi variasi kadar karbon & laju pendinginan terhadap perubahan fasa/grafik terlebih dahulu, baru kemudian melaksanakan demonstrasi pengujian spesimen fisik pilihan sebagai pembuktian empiris.",
      "Menyuruh siswa menghafal angka suhu eutektoid 723 °C tanpa memahami perubahan ferit-perlit-austenit.",
      "Mengganti alat uji tarik dengan menebak kekuatan kawat menggunakan tarikan tangan siswa.",
      "Memutar video iklan pabrik baja tanpa penugasan analisis kurva."
    ],
    "answer": 1,
    "explanation": "Simulasi interaktif Fe–Fe3C dan lab virtual uji tarik memberi siswa kesempatan bereksperimen puluhan skenario kadar karbon & cooling rate tanpa merusak puluhan batang uji mahal, lalu mengonfirmasi fenomena riil pada spesimen uji fisik terbatas di bengkel."
  },
  {
    "id": "pck-mat-05",
    "bank": "PCK",
    "topic": "Ilmu Bahan & Heat Treatment",
    "pckFocus": "Metode Pengajaran",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.5",
    "prompt": "Untuk membantu siswa kelas X membedakan sifat logam fero (baja, besi cor) dan nonfero (aluminium, tembaga, kuningan) secara kontekstual berbasis lingkungan bengkel sekitar, kegiatan inkuiri sederhana namun bermakna yang dapat dilakukan siswa adalah ....",
    "options": [
      "Membaca nama lambang unsur kimia di papan tulis selama 2 jam.",
      "Menguji langsung potongan limbah bengkel (scrap) memakai uji magnet, perkiraan massa jenis relatif, kekerasan kikir tangan, warna oksidasi, dan uji percikan gerinda aman (dengan kacamata pelindung) lalu mengklasifikasikan aplikasinya pada komponen otomotif/permesinan.",
      "Menjilat permukaan logam untuk membedakan kandungan tembaga dan seng.",
      "Mengumpulkan foto kemasan cat logam dari toko bangunan.",
      "Melarang siswa menyentuh potongan sampel logam hingga kelas XII."
    ],
    "answer": 1,
    "explanation": "Eksperimen identifikasi scrap logam bengkel (feromagnetik vs non-magnetik, bobot/densitas Al vs Fe vs Cu, uji kikir, warna geram/percikan terkendali dengan APD) menghubungkan teori bahan teknik dengan material nyata di tempat kerja."
  },
  {
    "id": "pck-mat-06",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Keselarasan Aktivitas & Pemahaman Mendalam (P.1)",
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "Bu Wati menyusun aktivitas belajar Pengetahuan Bahan & Rekayasa Komponen agar tidak berhenti pada hafalan dangkal. Tentukan apakah praktik pembelajaran berikut Sesuai atau Tidak Sesuai dengan prinsip Pembelajaran Mendalam.",
    "categories": [
      "Sesuai",
      "Tidak Sesuai"
    ],
    "statements": [
      {
        "text": "Murid mengamati komponen rusak nyata dari lingkungan bengkel, mengajukan dugaan penyebab sifat bahan, dan mendiskusikan alternatif perbaikannya.",
        "answer": 0
      },
      {
        "text": "Pembelajaran diisi penuh oleh ceramah guru yang mendiktekan definisi sifat logam sambil siswa menyalinnya di buku tulis.",
        "answer": 1
      },
      {
        "text": "Pada akhir pertemuan, murid diajak menuliskan refleksi keterkaitan konsep materi dengan keamanan produk mesin di kehidupan sehari-hari.",
        "answer": 0
      },
      {
        "text": "Evaluasi akhir hanya berbentuk tebak istilah dari singkatan buku paket untuk menghemat waktu pemeriksaan guru.",
        "answer": 1
      }
    ],
    "explanation": "Pembelajaran Mendalam menghubungkan pengamatan fenomena nyata, penalaran sebab-akibat aktif oleh murid, dan refleksi makna aplikasi."
  },
  {
    "id": "pck-mat-07",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Prinsip Asesmen Otentik & Adil (P.6)",
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Dalam asesmen proyek rekayasa desain pemilihan material komponen sederhana di kelas XI Teknik Mesin, tentukan apakah keputusan penilaian berikut Tepat atau Tidak Tepat.",
    "categories": [
      "Tepat",
      "Tidak Tepat"
    ],
    "statements": [
      {
        "text": "Rubrik menilai argumen alasan pemilihan bahan berdasarkan fungsi kerja, ketahanan lingkungan, dan keamanan pengguna, bukan sekadar menyebutkan nama bahan populer.",
        "answer": 0
      },
      {
        "text": "Guru memberikan umpan balik spesifik pada tahap rancangan awal sehingga kelompok sempat memperbaiki kesalahan penalaran sebelum finalisasi proyek.",
        "answer": 0
      },
      {
        "text": "Kelompok yang memilih bahan berbeda dari contoh kunci guru langsung dinyatakan gagal meskipun argumentasi kelayakannya terbukti logis.",
        "answer": 1
      },
      {
        "text": "Penilaian hanya diberikan pada kelengkapan sampul laporan berjilid rapi tanpa menguji pemahaman individu siswa saat presentasi.",
        "answer": 1
      }
    ],
    "explanation": "Asesmen otentik mengukur penalaran kritis, keterbukaan terhadap solusi beragam yang dapat dipertanggungjawabkan, serta umpan balik formatif sebelum pengumpulan akhir."
  },
  {
    "id": "pck-mat-08",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Kurikulum Berkelanjutan & Potensi Daerah (PF.4)",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.4",
    "prompt": "Sebuah SMK di kawasan industri kecil pandai besi dan bengkel rakyat ingin mengembangkan modul pembelajaran Pengetahuan Bahan & Korosi yang adaptif terhadap konteks lokal dan isu ramah lingkungan. Tentukan kesesuaian kebijakan kurikulum berikut (Sesuai / Tidak Sesuai).",
    "categories": [
      "Sesuai",
      "Tidak Sesuai"
    ],
    "statements": [
      {
        "text": "Memanfaatkan studi kasus kendala karat dan pemanfaatan limbah potongan logam bengkel sekitar sekolah sebagai proyek pemecahan masalah murid.",
        "answer": 0
      },
      {
        "text": "Mengundang perajin atau praktisi pemeliharaan mesin setempat berbagi pengalaman praktis mengenai ketahanan komponen dalam lingkungan lembab.",
        "answer": 0
      },
      {
        "text": "Menolak seluruh contoh bahan dan masalah bengkel daerah karena dianggap kurang prestisius dibandingkan pabrik besar luar negeri.",
        "answer": 1
      },
      {
        "text": "Menghilangkan aspek pencegahan pencemaran limbah pelumas dari alur pembelajaran karena di luar hitungan angka teknis.",
        "answer": 1
      }
    ],
    "explanation": "Kurikulum adaptif dan berkesadaran (PF.4 & P.5) mengaitkan konteks industri rakyat sekitar, potensi lingkungan, serta kesadaran pelestarian alam."
  },
  {
    "id": "pck-mat-09",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Pengajaran Konsep Melalui Analogi & Perbandingan (PF.3)",
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.3",
    "prompt": "Murid kelas X kerap tertukar membedakan tiga konsep dasar sifat mekanik bahan (kekuatan menahan beban, ketahanan gores permukaan, serta kemampuan melentur tanpa patah) karena penjelasan selama ini hanya berupa definisi abstrak. Cara mengajar yang paling efektif menanamkan pemahaman perbedaan ketiganya meliputi .... (Pilih semua yang benar)",
    "options": [
      "Menghadirkan benda pembanding konkret yang akrab di kehidupan sehari-hari (misal kaca vs penggaris plastik lentur vs kawat besi) untuk diamati langsung perilakunya saat diuji ringan.",
      "Menggunakan peta konsep perbandingan ciri dan contoh penerapan pada komponen mesin nyata agar perbedaan fungsi tiap sifat terlihat jelas.",
      "Meminta murid memprediksi apa risiko keselamatan bila sifat tertentu tertukar dalam sebuah studi kasus komponen sekolah.",
      "Mewajibkan murid menghafal kata per kata tiga kalimat definisi dari kamus teknik lalu dites lisan satu per satu.",
      "Membagikan lembaran rumus uji mekanik tanpa menunjukkan satu pun benda pembanding nyata."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Representasi konkret, peta konsep pembanding, dan diskusi konsekuensi aplikasi membuat perbedaan konsep abstrak dipahami mendalam oleh murid."
  },
  {
    "id": "pck-mat-10",
    "bank": "PCK",
    "topic": "Ilmu Bahan & Heat Treatment",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.3",
    "prompt": "Jika sekolah menyelenggarakan praktikum perlakuan panas sederhana menggunakan dapur pemanas dan media celup oli/air di bengkel, persyaratan keselamatan kerja (K3LH) wajib yang harus dipatuhi seluruh siswa meliputi .... (Pilih semua jawaban benar)",
    "options": [
      "Memakai sarung tangan kulit tahan panas, apron kulit, pelindung wajah (face shield), dan penjepit baja panjang yang kokoh saat memindahkan benda kerja bersuhu merah.",
      "Menjaga area sekitar tangki celup oli bebas dari genangan air atau benda mudah terbakar karena minyak panas dapat menyala sesaat (flash fire) bila benda merah masuk setengah bagian.",
      "Menyediakan alat pemadam api ringan (APAR tipe CO2/serbuk kering-BUKAN air!) dan penutup logam tangki oli di dekat stasiun heat treatment.",
      "Menggunakan sarung tangan kain tipis katun bekas lap bengkel agar tangan lebih lincah memegang tang panas.",
      "Menengok langsung dari atas mulut tungku terbuka tanpa pelindung mata untuk mengecek warna nyala logam."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Keselamatan kerja perlakuan panas berfokus pada bahaya luka bakar radiasi/percikan media celup serta risiko penyalaan uap oli (gunakan APD kulit + face shield, tangki oli berpenutup cepat, dan APAR non-air-karena menyiram api oli dengan air menimbulkan ledakan uap minyak panas!)."
  },
  {
    "id": "pck-las-01",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Scaffolding Kesiapan Awal Praktik Penyambungan (P.1)",
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "Pada awal unit pengelasan dasar kelas X Teknik Mesin, banyak murid merasa cemas melihat percikan api dan gagal menyalakan maupun mengendalikan jarak kestabilan tangannya di benda uji pertama. Strategi scaffolding terbaik untuk membawa murid melampaui kecemasan awalnya secara bertahap adalah ....",
    "options": [
      "Memaksa seluruh siswa langsung mengelas sambungan benda kerja utama supaya rasa takut hilang dengan sendirinya.",
      "Memulai latihan koordinasi gerak di simulator visual atau latihan tanpa nyala api/tegangan terlebih dahulu, dilanjutkan bimbingan terukur pada bahan uji latihan sebelum melepas ke proyek nyata.",
      "Mengelompokkan murid yang ragu hanya untuk bertugas mencatat waktu dan mengantarkan alat kerja.",
      "Memberikan hukuman mengulang penjelasan prosedur keselamatan di depan seluruh kelas jika percobaan gagal.",
      "Menunjukkan keahlian guru mengelas super cepat lalu menyuruh murid meniru persis tanpa bimbingan awal."
    ],
    "answer": 1,
    "explanation": "Scaffolding psikomotorik dan emosional dimulai dengan pengondisian aman tanpa tekanan tinggi (simulasi/latihan gerak terkendali) lalu mengurangi bantuan bertahap hingga murid siap mandiri."
  },
  {
    "id": "pck-las-02",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Pendidikan Inklusif & Akomodasi Kebutuhan Murid (P.2)",
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "prompt": "Di bengkel pengelasan kelas XI terdapat satu murid dengan gangguan kecemasan berlebih terhadap suara bising mendadak dan seorang murid kidal yang sering kesulitan mengikuti posisi peragaan tangan kanan oleh guru. Tindakan inklusif yang paling tepat dilakukan guru adalah ....",
    "options": [
      "Memindahkan keduanya ke bagian administrasi bengkel agar terhindar dari alat praktik selama satu tahun.",
      "Mengharuskan murid kidal berlatih memakai tangan kanan agar seragam dengan seluruh aturan standar buku.",
      "Menyediakan pelindung telinga aman, penjelasan langkah tenang sebelum alat dinyalakan, serta menyesuaikan posisi pendampingan cermin/arah kerja aman bagi murid kidal dengan target capaian setara.",
      "Menurunkan standar ketuntasan mutu kerja mereka secara diam-diam agar nilai tetap masuk batas lulus.",
      "Menyerahkan pengawasan keselamatan keduanya kepada teman sekelompok tanpa pendampingan khusus."
    ],
    "answer": 2,
    "explanation": "Pembelajaran inklusif dan DUP menyesuaikan sarana akses serta teknik pendampingan terhadap keragaman fisik maupun psikologis murid tanpa mendiskriminasi atau membatasi kesempatan."
  },
  {
    "id": "pck-las-03",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Pengelolaan Emosi & Keselamatan Sosial-Emosional (K.1)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.1",
    "prompt": "Saat praktik bengkel las, Pak Tono menyadari dirinya sempat berbicara dengan nada tinggi dan kesal karena seorang murid lupa meletakkan pelindung kerja di tempatnya, sehingga murid tersebut terlihat ketakutan dan enggan melanjutkan praktik. Berdasarkan kerangka CASEL, tindakan guru setelah menyadari kesalahan respons emosionalnya adalah ....",
    "options": [
      "Mempertahankan nada tegas agar wibawa guru tetap terjaga dan murid tidak meremehkan aturan bengkel.",
      "Menghindari berkomunikasi dengan murid tersebut selama beberapa hari agar suasana kembali dingin.",
      "Merefleksikan pemicu emosi pribadi (self-awareness & self-management), menyampaikan permintaan maaf secara tulus atas nada tinggi tadi, dan membimbing tenang pentingnya posisi aman.",
      "Menyalahkan murid karena kecerobohannya memang wajar memancing kemarahan pengajar bengkel.",
      "Meminta ketua kelas memarahi rekan yang ceroboh pada apel pagi keesokan harinya."
    ],
    "answer": 2,
    "explanation": "Keteladanan kematangan emosional guru (K.1 & CASEL self-awareness/self-management) tampak saat ia berani mengakui luapan emosi yang kurang tepat, meminta maaf secara bermartabat, dan memulihkan iklim aman."
  },
  {
    "id": "pck-las-04",
    "bank": "PCK",
    "topic": "Teknologi Pengelasan",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.3",
    "prompt": "Di bengkel las SMK, seorang siswa mengeluhkan matanya terasa perih bagaikan kemasukan pasir pada malam hari setelah praktik, meskipun mengaku hanya \"sekali-sekali melirik tanpa kap las saat membantu teman memegangi pelat\" (arc eye / photokeratitis). Tindakan pencegahan kolaboratif dan edukasi K3LH paling tepat pada sesi bengkel berikutnya adalah ....",
    "options": [
      "Menyarankan siswa cukup memakai kacamata hitam fesyen biasa saat melihat percikan las teman.",
      "Mewajibkan penggunaan kap/helm las filter gelap sesuai ampere (shade 10–12) untuk SEMUA siswa yang berada di zona bilik las termasuk helper, memasang tirai pelindung sinar UV antarmeja las, serta membiasakan teriakan aba-aba \"Mata / Awas Nyala!\" sebelum menyentuhkan elektroda.",
      "Mengurangi waktu praktik pengelasan menjadi 10 menit per bulan tanpa tirai pelindung.",
      "Meminta siswa menutup mata sambil tetap mengarahkan tangan elektroda secara meraba.",
      "Mengganti helm las dengan kaca bening gerinda agar lebih terang."
    ],
    "answer": 1,
    "explanation": "Radiasi sinar UV las menyebar ke sekitar dan melukai kornea (arc flash) tidak hanya pada operator, melainkan juga helper/pengamat di sampingnya. Prosedur K3LH wajib meliputi helm las berfilter shade tepat (atau auto-darkening), tirai las anti-UV antar bilik, serta komunikasi aba-aba sebelum menyalakan busur."
  },
  {
    "id": "pck-las-05",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Penilaian Proses, Keamanan & Pemahaman Konsep (P.6)",
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Guru menemukan pola di kelas praktik: ada murid yang hasil tampilan sambungan luar tampak rapi namun mengabaikan pelindung keselamatan dan tidak bisa menjelaskan mengapa penyambungannya kuat, sementara murid lain sangat patuh SOP keselamatan dan memahami penyebab cacat karyanya namun keliru di satu detail akhir. Cara merancang asesmen yang adil adalah ....",
    "options": [
      "Menilai 100 persen berdasarkan kerapian tampilan luar hasil jadi karena paling cepat diamati.",
      "Memakai rubrik analitik transparan yang memisahkan bobot kesiapan keselamatan K3, penguasaan proses persiapan kerja, pemahaman konsep perbaikan kesalahan, serta mutu hasil akhir.",
      "Mengambil satu nilai rata-rata subjektif tanpa kriteria indikator tertulis.",
      "Meluluskan langsung murid yang hasil jadinya bagus meski melanggar keselamatan kerja berat.",
      "Mengubah penilaian praktik menjadi ulangan tertulis pilihan ganda lima puluh soal."
    ],
    "answer": 1,
    "explanation": "Rubrik analitik memetakan kekuatan dan kelemahan tiap aspek (K3, proses, nalar konseptual, dan mutu produk) secara objektif serta memandu perbaikan yang jelas."
  },
  {
    "id": "pck-las-06",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Komunikasi Empatik & Kolaborasi Tim Bengkel (S.1)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Sosial",
    "subkompetensi": "S.1",
    "prompt": "Dalam kerja berpasangan pengelasan proyek rangka sekolah, terjadi perselisihan antara dua murid: satu merasa rekannya lamban memeriksa posisi benda kerja sementara yang lain merasa tidak diberi kesempatan memegang alat bantu karena selalu diserobot. Tentukan kesesuaian tindakan mediasi guru berikut (Sesuai / Tidak Sesuai).",
    "categories": [
      "Sesuai",
      "Tidak Sesuai"
    ],
    "statements": [
      {
        "text": "Mendengarkan perspektif kedua murid secara seimbang tanpa menghakimi lalu memandu kesepakatan pembagian peran serta rotasi bergiliran.",
        "answer": 0
      },
      {
        "text": "Membubarkan pasangan dan menghukum kedua murid tidak boleh mengikuti pelajaran praktik selama dua minggu.",
        "answer": 1
      },
      {
        "text": "Menggunakan momen konflik sebagai latihan keterampilan komunikasi asertif yang saling menghormati di lingkungan kerja nyata.",
        "answer": 0
      },
      {
        "text": "Membiarkan murid yang lebih cepat saja mengerjakan seluruh proyek agar target jumlah rangka sekolah lekas tercapai.",
        "answer": 1
      }
    ],
    "explanation": "Komunikasi empatik dan mediasi (S.1 & KSE relationship skills) menyelesaikan konflik tim dengan mendengar kedua pihak secara adil serta membagi peran kolaborasi yang merata."
  },
  {
    "id": "pck-las-07",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Pengembangan Rancangan Ajar Kritis & Bermakna (P.1)",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "Bu Ratih menyusun urutan pembelajaran PjBL Pembuatan Rak Penyimpanan Alat Bengkel untuk kelas XI Teknik Mesin. Evaluasilah ketepatan prinsip perancangan pembelajaran berikut (Tepat / Kurang Tepat).",
    "categories": [
      "Tepat",
      "Kurang Tepat"
    ],
    "statements": [
      {
        "text": "Mengawali proyek dari kebutuhan nyata penataan bengkel yang dirumuskan bersama murid, sehingga produk memiliki makna dan manfaat konkret.",
        "answer": 0
      },
      {
        "text": "Meminta murid langsung memotong bahan tanpa menyusun rencana kerja maupun meninjau risiko keamanan proses terlebih dahulu.",
        "answer": 1
      },
      {
        "text": "Menyediakan pos tinjauan formatif setelah tahap perakitan awal guna memeriksa keselarasan rancangan dan memberi umpan balik sebelum penyambungan akhir.",
        "answer": 0
      },
      {
        "text": "Menetapkan pemenang proyek tercepat lalu memajang nilai kelompok terburuk di papan pengumuman bengkel.",
        "answer": 1
      }
    ],
    "explanation": "PjBL efektif memadukan kebermaknaan kebutuhan nyata, perencanaan terstruktur aman, serta titik pemantauan formatif selama proses berlangsung."
  },
  {
    "id": "pck-las-08",
    "bank": "PCK",
    "topic": "Teknologi Pengelasan",
    "pckFocus": "Media/ICT & Simulator",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "prompt": "Sekolah menyediakan perangkat Simulator Las Virtual (VR/AR Welding Simulator) untuk melatih kelas X sebelum memegang mesin las nyata dengan elektroda habis pakai. Tentukan apakah pemanfaatan simulator tersebut Tepat atau Tidak Tepat.",
    "categories": [
      "Tepat",
      "Tidak Tepat"
    ],
    "statements": [
      {
        "text": "Memanfaatkan simulator untuk melatih konsistensi sudut kerja (work angle), sudut jalan (travel angle), panjang jarak busur, dan kecepatan tangan secara berulang tanpa membuang banyak elektroda dan pelat besi.",
        "answer": 0
      },
      {
        "text": "Menyatakan siswa yang lulus 100% di simulator VR otomatis tidak perlu lagi berlatih mengelas pelat baja asli sebelum dilepas ujian sertifikasi kompetensi.",
        "answer": 1
      },
      {
        "text": "Menggunakan grafik rekaman kesalahan dari simulator sebagai umpan balik diagnostik individual sebelum siswa pindah ke bilik las nyata.",
        "answer": 0
      }
    ],
    "explanation": "Simulator las berperan sebagai jembatan psikomotor aman dan hemat bahan sebelum praktik logam riil, bukan pengganti mutlak pengalaman nyata di bilik las."
  },
  {
    "id": "pck-las-09",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Menghadapi Keterbatasan & Pembelajaran Kolaboratif (PF.5)",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.5",
    "prompt": "Ketika jumlah ruang bilik praktik pengelasan terbatas hanya cukup untuk sepertiga jumlah siswa di kelas, langkah inovatif guru agar dua pertiga siswa lain tetap aktif bernalar dan terpantau capaian belajarnya meliputi .... (Pilih semua yang benar)",
    "options": [
      "Membagi kelompok secara berotasi: stasiun analisis spesimen cacat hasil sambungan nyata, stasiun simulator atau inspeksi K3, serta stasiun praktik riil di bilik las.",
      "Menjadikan siswa pengamat sebagai mitra umpan balik sebaya memakai daftar cek pemeriksaan postur kerja aman dan kebersihan lingkungan.",
      "Menyisipkan sesi refleksi singkat antar-rotasi agar temuan pengamatan segera dicoba perbaikannya pada giliran berikutnya.",
      "Meminta siswa yang menunggu giliran duduk diam di kantin tanpa lembar kerja atau tanggung jawab belajar.",
      "Menggantikan seluruh jam praktik dua pertiga kelas dengan menuliskan ringkasan kamus istilah las."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Manajemen rotasi stasiun belajar dengan peran observasi sebaya dan analisis spesimen nyata menjaga waktu belajar bermakna untuk seluruh kelas."
  },
  {
    "id": "pck-las-10",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Partisipasi Organisasi Profesi & Berbagi Praktik Baik (S.3)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Sosial",
    "subkompetensi": "S.3",
    "prompt": "Sebagai calon guru profesional Teknik Mesin yang terus mengembangkan mutu pembelajaran keselamatan dan praktik kejuruan, bentuk partisipasi aktif dalam komunitas belajar sekolah maupun MGMP yang PALING berdampak pada kualitas kelas meliputi .... (Pilih semua yang benar)",
    "options": [
      "Berbagi rancangan perangkat asesmen autentik bengkel sekaligus meminta umpan balik rekan sejawat terhadap kejelasan rubriknya.",
      "Melaksanakan Lesson Study (Plan-Do-See) bersama sesama guru produktif untuk mengamati keterlibatan murid pendiam saat praktik.",
      "Mengikuti pelatihan penyegaran teknologi dan pedagogi terkini lalu mendiseminasikan serta mengadaptasinya ke modul ajar sekolah.",
      "Hadir dalam rapat komunitas guru hanya untuk menandatangani daftar hadir pemenuhan jam kinerja tanpa berkontribusi ide.",
      "Menyimpan strategi pengajaran efektif secara tertutup agar nilai kelasnya selalu terlihat lebih tinggi daripada guru lain."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Partisipasi aktif dalam komunitas pembelajaran dan profesi (S.3) mengutamakan keterbukaan kolaborasi, telaah rubrik bersama, dan siklus perbaikan belajar nyata."
  },
  {
    "id": "pck-las-11",
    "bank": "PCK",
    "topic": "Teknologi Pengelasan",
    "pckFocus": "Asesmen Otentik",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Dalam asesmen praktik proyek pembuatan rangka meja kerja/rak bengkel berbasis Teaching Factory, indikator rubrik penilaian pengelasan yang adil, menyeluruh, dan sesuai standar industri mencakup .... (Pilih semua jawaban benar)",
    "options": [
      "Kesikuan dan kesesuaian dimensi rakitan rangka (toleransi kerataan/kesikuan diagonal sebelum maupun sesudah dilas penuh).",
      "Kualitas sambungan las (tidak ada retak, undercut berat, porosity, maupun slag tertinggal) serta kerapian finishing gerinda tanpa mengikis tipis logam induk.",
      "Kepatuhan prosedur K3LH (APD lengkap, sistem hisap asap/ventilasi, penanganan limbah puntung elektroda dan kondisi bilik las 5R).",
      "Hanya melihat tinggi tumpukan las paling tebal di semua sudut agar terlihat penuh.",
      "Mengukur seberapa cepat siswa menghabiskan sekotak penuh elektroda tanpa peduli kesikuan rangka."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Produk konstruksi las dinilai secara holistik: kesesuaian geometris rakitan (kesikuan diagonal/distorsi terkendali), integritas fusi las bebas cacat kritis, dan kedisiplinan keselamatan K3LH."
  },
  {
    "id": "pck-em-01",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Miskonsepsi Prinsip Transmisi & Penemuan Terbimbing (PF.2)",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.2",
    "prompt": "Dalam mempelajari sistem transmisi gerak (hubungan putaran dan gaya tarik) di kelas XI Teknik Mesin, banyak murid hanya menghafal rumus di papan tulis dan salah menyimpulkan bahwa roda penggerak besar selalu menghasilkan tenaga dorong lebih kuat daripada putaran lambat. Pendekatan konstruktivistik terbaik untuk meluruskan miskonsepsi tersebut adalah ....",
    "options": [
      "Menyuruh murid mengerjakan tiga puluh soal hitungan angka dari buku cetak hingga hasilnya benar semua.",
      "Mengajak murid menguji langsung perbandingan rasio peraga sederhana (seperti perpindahan posisi rantai sepeda atau peraga roda berpasangan) untuk merasakan perubahan kecepatan dan beban putaran sebelum merumuskan prinsipnya.",
      "Meminta murid menghafalkan bab dinamika gerak dari buku fisika kelas X secara berulang di rumah.",
      "Menjelaskan ulang dengan suara lebih keras sambil menuliskan contoh hitungan tambahan di papan tulis.",
      "Menyatakan materi konsep transmisi cukup dipahami murid ketika magang di industri nanti."
    ],
    "answer": 1,
    "explanation": "Eksplorasi langsung dengan analogi konkret (transmisi sepeda/peraga fisik) membantu murid membangun pemahaman konseptual sebab-akibat sebelum memformalkannya dalam model hitungan."
  },
  {
    "id": "pck-em-02",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Pengambilan Keputusan Etis & Keselamatan Bengkel (K.3)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.3",
    "prompt": "Sepuluh menit sebelum waktu ujian praktik pembongkaran komponen mesin berakhir, seorang murid mendapati satu bagian pelindung pengaman mesin belum terpasang rapat dan berpotensi lepas saat dinyalakan, sehingga meminta izin menunda uji nyala lima menit. Sebagian murid lain mengejek karena ujian segera ditutup. Keputusan guru paling konsisten menegakkan budaya belajar aman dan pengembangan karakter murid adalah ....",
    "options": [
      "Mengabaikan posisi pelindung demi mempercepat ujian agar seluruh kelas selesai tepat bel berbunyi.",
      "Memuji kesadaran keselamatan murid tersebut sebagai teladan kerja profesional, menenangkan suasana kelas, dan memberi waktu verifikasi aman sebelum mesin diuji nyala.",
      "Mengurangi separuh nilai murid tersebut karena dianggap paling lambat memasang kembali komponen.",
      "Mengambil alih pemasangan pelindung tersebut oleh guru supaya cepat selesai dalam satu menit.",
      "Menyuruh murid menyalakan mesin tanpa pelindung selama lima detik saja untuk mengambil nilai kecepatan."
    ],
    "answer": 1,
    "explanation": "Konsistensi mengembangkan budaya keselamatan belajar (K.3) mengapresiasi kehati-hatian murid dan tidak pernah mengorbankan keamanan demi mengejar kecepatan waktu bel."
  },
  {
    "id": "pck-em-03",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Penyelarasan Konten dengan Karakteristik Murid (PF.3)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.3",
    "prompt": "Pada pelajaran Elemen Mesin dan Perawatan Mekanis kelas XI, guru mendapati murid cepat lupa nama-nama bagian apabila diajarkan dalam daftar panjang terpisah dari benda nyatanya, namun cepat mengerti ketika memeriksa peralatan mesin yang ada di lingkungan rumah maupun sekolah. Strategi penyesuaian materi paling tepat adalah ....",
    "options": [
      "Menugaskan murid menghafalkan sepuluh istilah komponen baru sebelum bel istirahat setiap hari.",
      "Menjadikan mekanisme nyata di sekitar murid (seperti penggerak kipas, pompa air sekolah, atau mesin jahit/perkakas bengkel) sebagai titik masuk penyelidikan fungsi tiap elemen.",
      "Memperbanyak catatan ringkasan tabel sifat komponen untuk disalin ke buku masing-masing.",
      "Memberikan hukuman meringkas ulang apabila murid salah menyebutkan istilah asing komponen.",
      "Memutar tayangan animasi mesin industri berat berteknologi tinggi tanpa mengaitkannya dengan fungsi dasar."
    ],
    "answer": 1,
    "explanation": "Menyelaraskan karakteristik materi dengan pengalaman akrab di lingkungan sekitar murid (PF.3 / P.5 / Ausubel) membangun pemahaman yang bertahan lama dan bermakna."
  },
  {
    "id": "pck-em-04",
    "bank": "PCK",
    "topic": "Elemen Mesin & Transmisi",
    "pckFocus": "Metode Pengajaran",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "Dalam mengajarkan fungsi Pasak (Key) dan Baut Pengikat bertingkat pada siswa kelas XI, cara terbaik membangun pemikiran analitis keselamatan rancangan (fail-safe design philosophy) adalah ....",
    "options": [
      "Menyuruh siswa menyalin gambar macam-macam pasak tanpa diskusi aplikasi.",
      "Mengajak siswa membedah kasus mekanik nyata: mengapa pasak benam pada poros pompa sengaja dirancang lebih mudah mengalami tegangan geser putus dibanding poros utama atau impeller mahal ketika terjadi kemacetan beban mendadak (berfungsi sebagai mekanisme sekring mekanis/mechanical fuse).",
      "Mengajarkan bahwa pasak boleh diganti dengan paku beton seadanya asalkan masuk ke alur.",
      "Menjelaskan bahwa pasak bertugas menahan gaya tarik aksial berat pada crane.",
      "Melarang pembahasan tegangan geser (shear stress) karena dianggap terlalu matematis."
    ],
    "answer": 1,
    "explanation": "Mengaitkan elemen mesin dengan filosofi perancangan (pasak sebagai pengunci torsi sekaligus mechanical fuse murah untuk melindungi poros dan gearbox mahal) menumbuhkan pemahaman konseptual dan konteks industri."
  },
  {
    "id": "pck-em-05",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Tindak Lanjut Pembelajaran Kontekstual & Remedial (P.6)",
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Setelah menganalisis hasil asesmen formatif pembongkaran-pemasangan komponen transmisi mekanis, guru menemukan 6 murid sudah sangat mahir menganalisis penyebab getaran mesin, sementara 8 murid masih terbalik memasang bagian pengaman karena terburu-buru melewati urutan SOP. Rancangan tindak lanjut paling adil dan terarah adalah ....",
    "options": [
      "Menyuruh seluruh 30 murid mengulang pelajaran dasar yang sama dari pertemuan pertama.",
      "Menguji kembali kedelapan murid tersebut dengan soal tes tertulis hafalan yang lebih sulit.",
      "Memberikan pengayaan proyek studi kasus diagnosis perawatan lanjutan bagi 6 murid mahir, serta membimbing ulang kelompok 8 murid memakai pos jeda daftar cek SOP berpasangan.",
      "Meluluskan kedelapan murid tersebut sambil menasihati mereka agar lebih berhati-hati saat kelas XII.",
      "Menyerahkan tugas perbaikan SOP delapan murid kepada ketua kelompok sebagai hukuman."
    ],
    "answer": 2,
    "explanation": "Tindak lanjut formatif melayani keragaman temuan asesmen: pengayaan bagi yang telah melampaui serta perbaikan strategi berpanduan (bukan pengulangan pasif) bagi yang belum tuntas."
  },
  {
    "id": "pck-em-06",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Penerapan Teori Belajar Konstruktivistik vs Behavioristik (P.1)",
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "Guru kelas XI Teknik Mesin membandingkan beragam desain kegiatan pada materi Sistem Pemeliharaan Mesin. Tentukan apakah pernyataan praktik berikut mencerminkan pendekatan Konstruktivistik atau Behavioristik Mekanis (Konstruktivistik / Hafalan Mekanis).",
    "categories": [
      "Konstruktivistik",
      "Hafalan Mekanis"
    ],
    "statements": [
      {
        "text": "Murid menyelidiki gejala mesin bergetar nyata di peraga bengkel, menghubungkannya dengan pengetahuan awal tentang kelurusan poros, lalu merumuskan langkah perawatan.",
        "answer": 0
      },
      {
        "text": "Guru memberikan penguatan poin hadiah setiap kali murid berhasil melafalkan lima langkah SOP secara berurutan tanpa memahami alasannya.",
        "answer": 1
      },
      {
        "text": "Murid membandingkan dua desain sambungan elemen lalu berdiskusi membangun kesimpulan kriteria pemilihan pengikat yang aman.",
        "answer": 0
      },
      {
        "text": "Murid mengulang menyalin bagan langkah pembongkaran komponen di buku tulis dua puluh kali agar terbiasa mengikuti instruksi.",
        "answer": 1
      }
    ],
    "explanation": "Konstruktivisme memosisikan peserta didik aktif membangun konsep dari eksplorasi pengalaman, diskusi, dan pemecahan masalah nyata, bukan pengulangan respons mekanis."
  },
  {
    "id": "pck-em-07",
    "bank": "PCK",
    "topic": "Elemen Mesin & Transmisi",
    "pckFocus": "Media/ICT & Simulator",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "prompt": "Dalam membelajarkan prinsip kerja kotak roda gigi percepatan (gearbox) dan kopling mekanis, evaluasi efektivitas pemanfaatan media simulasi dan alat peraga terpotong (cutaway) berikut.",
    "categories": [
      "Tepat",
      "Tidak Tepat"
    ],
    "statements": [
      {
        "text": "Menggunakan animasi kinematika 3D interaktif atau unit gearbox terpotong (cutaway) yang dapat diputar tuasnya sehingga siswa melihat langsung pergeseran garpu pemindah dan jalur aliran torsi di tiap tingkat gigi.",
        "answer": 0
      },
      {
        "text": "Meminta siswa membayangkan susunan kopling gesek dan gigi mundur (idler gear) secara abstrak lewat dikte lisan penuh tanpa sketsa ataupun model.",
        "answer": 1
      },
      {
        "text": "Meminta siswa menghitung rasio reduksi total susunan majemuk (compound gear train) berdasarkan data jumlah gigi yang langsung mereka amati dan verifikasi dari simulasi.",
        "answer": 0
      }
    ],
    "explanation": "Pembelajaran elemen mesin memadukan benda peraga cutaway + animasi aliran gerak untuk menjembatani konsep abstrak menjadi pemahaman mekanis konkret."
  },
  {
    "id": "pck-em-08",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Kepemimpinan Pembelajaran & Komunitas (S.2)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Sosial",
    "subkompetensi": "S.2",
    "prompt": "Dalam rangka program Projek Kepemimpinan mahasiswa PPG bersama sekolah dan warga sekitar bengkel kejuruan, tim berencana menyelenggarakan bengkel peduli perawatan alat mekanik rumah tangga warga dengan melibatkan murid kelas XI. Tentukan apakah langkah berikut Tepat atau Kurang Tepat.",
    "categories": [
      "Tepat",
      "Kurang Tepat"
    ],
    "statements": [
      {
        "text": "Mengidentifikasi persoalan nyata kebutuhan perbaikan alat warga sekitar bersama tokoh masyarakat lalu menyusun peran murid sesuai kesiapan dan K3.",
        "answer": 0
      },
      {
        "text": "Mengadakan refleksi evaluasi dampak kegiatan bersama murid dan mitra warga sesudah kegiatan selesai dilaksanakan.",
        "answer": 0
      },
      {
        "text": "Mengharuskan seluruh murid melakukan pembongkaran alat listrik bertegangan tinggi di rumah warga tanpa pengawasan keselamatan maupun panduan guru.",
        "answer": 1
      },
      {
        "text": "Meminta guru dan teknisi mengerjakan seluruh perbaikan warga sementara murid cukup berfoto guna pelaporan proyek.",
        "answer": 1
      }
    ],
    "explanation": "Projek kepemimpinan komunitas (S.2) memadukan identifikasi masalah riil masyarakat, keterlibatan belajar murid yang aman dan bermakna, serta refleksi evaluasi bersama."
  },
  {
    "id": "pck-em-09",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Miskonsepsi Tujuan Pendidikan & Penilaian Praktik (PF.1)",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.1",
    "prompt": "Tim penyusun perangkat ajar Teknik Mesin SMK meninjau ulang misi satuan pendidikan kejuruan agar lulusan memiliki daya saing, karakter etis, dan kesiapan belajar jangka panjang. Aspek rancangan pembelajaran manakah yang paling konsisten mendukung tujuan tersebut? (Pilih semua yang benar)",
    "options": [
      "Menanamkan alasan keselamatan, kehandalan komponen, dan dampak sosial di balik setiap standar kerja mekanis.",
      "Memberi peluang pemecahan masalah terbuka berbasis kasus dunia kerja nyata, bukan sekadar instruksi langkah baku tertutup.",
      "Membangun kebiasaan mendokumentasikan catatan pemeriksaan, merefleksikan kesalahan kerja secara jujur, dan berkolaborasi lintas peran.",
      "Memprioritaskan murid cepat menyelesaikan benda kerja meski harus mengabaikan keselamatan rekan maupun standar kerja.",
      "Menjadikan hafalan nama puluhan komponen dalam buku cetak sebagai satu-satunya syarat kelulusan kelas."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Tujuan pendidikan SMK menekankan keutuhan nalar kerja, pemecahan masalah nyata, etika integritas, serta budaya keselamatan kolaboratif."
  },
  {
    "id": "pck-em-10",
    "bank": "PCK",
    "topic": "Elemen Mesin & Transmisi",
    "pckFocus": "Metode Pengajaran",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "prompt": "Seorang guru merancang unit pembelajaran \"Pemilihan Komponen Transmisi untuk Mesin Pencacah Kompos Sekolah\" agar memicu pemikiran tingkat tinggi (HOTS) dan kolaborasi. Aktivitas kelas mana saja yang mendukung keterlibatan aktif seluruh profil belajar siswa? (Pilih lebih dari satu)",
    "options": [
      "Siswa bekerja dalam kelompok dengan pembagian peran (analis beban/daya motor, perancang rasio kecepatan puli/gearbox, pencari spesifikasi katalog standar bearing/sabuk, dan peninjau K3LH pelindung transmisi).",
      "Kelompok menyusun argumentasi membandingkan dua alternatif transmisi (misal sabuk V bertingkat vs gearbox reduksi) dengan data harga komponen, perawatan, dan keselamatan.",
      "Mengadakan ulasan sejawat (gallery walk) di mana kelompok lain menguji kelogisan perhitungan putaran poros keluaran dan kemudahan pemeliharaan desain teman.",
      "Guru langsung menyerahkan seluruh gambar jadi dan daftar belanja ke siswa untuk disalin tanpa analisis alasan pilihan komponen.",
      "Membebaskan siswa memasang rantai tanpa tutup pelindung (guard) demi alasan estetika."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Proyek desain nyata berbasis analisis katalog standar industri, perbandingan trade-off teknis-ekonomis, dan peninjauan K3LH mendorong pembelajaran mendalam berpusat pada siswa."
  },
  {
    "id": "pck-k3-01",
    "bank": "PCK",
    "topic": "K3LH & Teaching Factory",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.3",
    "prompt": "Di bengkel pemesinan, guru melihat seorang siswa baru masuk area mesin bubut dengan memakai sarung tangan kain rajut, jam tangan logam di pergelangan kiri, serta membiarkan ujung tali jaket menjuntai bebas dengan alasan \"agar tangan tidak kotor tatal dan tidak kedinginan\". Tindakan korektif segera sekaligus pembimbingan alasan ilmiah K3LH yang paling tepat adalah ....",
    "options": [
      "Membiarkannya karena sarung tangan selalu baik untuk semua pekerjaan mesin.",
      "Menghentikan mesin/memintanya mundur dari area mesin berputar sebelum start: mewajibkan melepas sarung tangan kain, jam tangan, dan jaket bertali; menjelaskan bahwa mesin berputar berpotensi MENARIK/MELILIT kain dan aksesori (entanglement hazard) jauh lebih fatal daripada risiko kotoran debu-untuk menyingkirkan tatal gunakan chip hook/kuas setelah spindel berhenti total, sementara APD utama bubut adalah safety glasses, wearpack pas badan, dan safety shoes.",
      "Mengganti sarung tangan kain rajut dengan sarung tangan plastik longgar agar lebih licin.",
      "Hanya memintanya bekerja lebih cepat supaya segera selesai.",
      "Menghukum siswa lari mengelilingi lapangan bengkel tanpa pernah menjelaskan bahaya entanglement."
    ],
    "answer": 1,
    "explanation": "Salah satu aturan K3LH paling krusial dan paling sering disalahpahami siswa di bengkel mesin perkakas adalah LARANGAN sarung tangan, baju lengan panjang longgar, jam tangan/cincin, dan rambut terurai di sekitar komponen berputar (spindel, chuck, drill). Ketika menyentuh bagian berputar, serat kain dapat tertarik seketika menarik jari/lengan masuk ke mesin."
  },
  {
    "id": "pck-k3-02",
    "bank": "PCK",
    "topic": "K3LH & Teaching Factory",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.1",
    "prompt": "Saat kelompok siswa hendak membersihkan dan mengganti sabuk V di dalam kap motor sebuah mesin frais, guru menekankan penerapan prosedur LOTO (Lockout/Tagout). Namun seorang siswa berkata, \"Tombol merah mesin kan sudah dimatikan, Pak, tidak usah repot pasang gembok dan label di sakelar induk.\" Bagaimana respons keteladanan sekaligus edukasi K3LH guru?",
    "options": [
      "Menyetujui argumen siswa supaya praktikum cepat berlanjut.",
      "Menegaskan tidak boleh berkompromi terhadap LOTO: menjelaskan skenario nyata di bengkel ramai di mana teman kelompok lain yang tidak tahu mengira mesin rusak lalu menyalakan sakelar dinding tanpa melihat tangan siswa berada di puli; memasang gembok pribadi + tag identifikasi pada isolator utama mengunci sumber energi hingga seluruh pekerjaan perawatan tuntas.",
      "Menyuruh satu teman berdiri menjaga tombol saja sambil tetap mengobrol memakai ponsel.",
      "Mengganti gembok pengaman dengan selembar selotip kertas biasa.",
      "Melakukan penggantian sabuk saat motor berjalan pelan supaya sabuk mudah masuk alur."
    ],
    "answer": 1,
    "explanation": "LOTO (Lockout/Tagout) mengisolasi sumber energi listrik/pneumatik/hidrolik secara fisik (gembok hanya dibuka oleh pekerja yang memasangnya + tag peringatan) saat perawatan/perbaikan, menumbuhkan integritas budaya keselamatan yang tidak bisa ditawar oleh alasan terburu-buru."
  },
  {
    "id": "pck-k3-03",
    "bank": "PCK",
    "topic": "K3LH & Teaching Factory",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.4",
    "prompt": "Sekolah menerapkan model pembelajaran Teaching Factory (TeFa) pada kompetensi pemesinan untuk menerima pesanan komponen pengikat dari bengkel industri mitra. Tantangan pembelajaran yang sering terjadi adalah guru hanya mengerjakan pesanan itu sendiri atau menyerahkannya kepada 2 siswa terpintar demi kejar target tenggat, sementara 26 siswa lainnya hanya menonton. Solusi manajemen pembelajaran TeFa yang benar adalah ....",
    "options": [
      "Menghapus program TeFa dan kembali ke latihan mengikir balok tanpa fungsi selamanya.",
      "Memecah alur produksi menjadi struktur lini stasiun kerja bernilai belajar (desain CAD/gambar kerja -> penyediaan bahan & roughing -> pemesinan presisi -> deburring & inspeksi QC dimensi -> pengemasan) dengan rotasi peran terjadwal serta pendampingan kualitas berlapis sehingga seluruh siswa berpartisipasi terukur sesuai capaian kurikulum.",
      "Mempekerjakan siswa lembur hingga tengah malam setiap hari tanpa memperhatikan kurikulum kelas.",
      "Menerima proyek jauh di luar kapasitas mesin bengkel sekolah lalu mensubkontrakkannya ke luar 100%.",
      "Membayar buruh harian dari luar dan tetap mengklaimnya sebagai karya portofolio seluruh siswa."
    ],
    "answer": 1,
    "explanation": "Inti Teaching Factory yang sejati memadukan standar mutu/waktu industri dengan pemerataan pengalaman belajar kurikulum (perancangan, eksekusi berstasiun, QC, dan budaya kerja 5R) melalui dekomposisi pekerjaan dan rotasi terencana."
  },
  {
    "id": "pck-k3-04",
    "bank": "PCK",
    "topic": "K3LH & Teaching Factory",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.3",
    "prompt": "Dalam penerapan budaya kerja industri 5R (Ringkas, Rapi, Resik, Rawat, Rajin) di bengkel SMK, banyak siswa mengira 5R sekadar kerja bakti menyapu lantai pada 5 menit akhir jam praktik. Langkah pembudayaan yang bermakna agar 5R benar-benar mencerminkan efisiensi kerja industri adalah ....",
    "options": [
      "Menjadikan hukuman menyapu bengkel bagi siapa saja yang nilainya jelek.",
      "Membimbing siswa menerapkan setiap huruf secara nyata: Ringkas (memilah alat perlu vs barang tak terpakai di area mesin), Rapi (penataan shadow board berkode lokasi untuk kunci cekam, jangka sorong, & pahat agar pencarian <30 detik), Resik (pembersihan sambil memeriksa anomali kebocoran oli/baut kendor), Rawat (standarisasi checklist bengkel), dan Rajin (konsistensi harian tanpa disuruh).",
      "Menumpuk semua kunci pas, kikir, dan mikrometer ke dalam satu peti besi tertutup.",
      "Melarang aktivitas praktik di bengkel setiap hari Jumat agar lantai selalu tampak mengilap.",
      "Memasang spanduk slogan 5R besar tanpa menyediakan rak khusus ataupun tempat pemilah limbah tatal."
    ],
    "answer": 1,
    "explanation": "5R bukan sekadar \"bersih-bersih\", melainkan sistem manajemen tempat kerja visual (seperti shadow board, pemisahan limbah logam/B3/coolant bekas, dan cleaning as inspection untuk mendeteksi dini kebocoran/keausan mesin)."
  },
  {
    "id": "pck-k3-05",
    "bank": "PCK",
    "topic": "K3LH & Teaching Factory",
    "pckFocus": "Asesmen Otentik",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.1",
    "prompt": "Mengacu pada tujuan pendidikan kejuruan (SMK) dan profil kesiapan kerja lulusan Teknik Mesin (subkompetensi PF.1), portofolio pembelajaran apa yang paling kuat membuktikan kesiapan lulusan di hadapan penguji industri (UKK / DUDIKA)?",
    "options": [
      "Kumpulan foto selfie siswa di depan gedung sekolah memakai seragam praktik.",
      "Rekam utuh proyek manufaktur terintegrasi: gambar kerja bertoleransi + lembar perencanaan proses (WPS/operation sheet) + komponen rakitan jadi yang memenuhi toleransi QC + catatan inspeksi ukur mandiri + evaluasi perbaikan cacat beserta kepatuhan K3LH.",
      "Sertifikat hafalan nama-nama perusahaan manufaktur di kawasan industri.",
      "Buku catatan penuh salinan teks definisi dari mesin fotokopi.",
      "Daftar absensi kehadiran kelas teori tanpa satu pun benda kerja terukur."
    ],
    "answer": 1,
    "explanation": "Lulusan Teknik Mesin SMK dituntut memiliki keutuhan kompetensi end-to-end: menerjemahkan gambar kerja -> merencanakan proses -> mengeksekusi aman -> memverifikasi ukuran QC -> merefleksikan perbaikan mutu."
  },
  {
    "id": "pck-k3-06",
    "bank": "PCK",
    "topic": "K3LH & Teaching Factory",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_KATEGORI",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.3",
    "prompt": "Berdasarkan prinsip Hirarki Pengendalian Risiko K3LH (Eliminasi, Substitusi, Rekayasa Teknik/Engineering Control, Administrasi/SOP, dan APD) di bengkel teknik mesin, tentukan ketepatan pengelompokan contoh berikut.",
    "categories": [
      "Tepat",
      "Tidak Tepat"
    ],
    "statements": [
      {
        "text": "Memasang pelindung akrilik transparan penahan percikan tatal (chuck guard) dan sistem penyedot asap las lokal (fume extractor) termasuk pengendalian Rekayasa Teknik (Engineering Control).",
        "answer": 0
      },
      {
        "text": "Membagikan kacamata safety kepada siswa menempati urutan PERTAMA paling efektif dan menggantikan kebutuhan pelindung mesin berputar maupun ventilasi ruangan.",
        "answer": 1
      },
      {
        "text": "Mengganti cairan pemotong berbasis bahan kimia berbahaya tinggi ke bio-coolant ramah lingkungan yang rendah iritasi kulit merupakan upaya Substitusi.",
        "answer": 0
      }
    ],
    "explanation": "Guru produktif SMK perlu menanamkan pola pikir keselamatan sistemik sesuai hirarki pengendalian risiko: upayakan eliminasi/substitusi/rekayasa teknik/SOP terlebih dahulu, lalu perkuat dengan APD wajib yang sesuai jenis mesin."
  },
  {
    "id": "pck-k3-07",
    "bank": "PCK",
    "topic": "K3LH & Teaching Factory",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_KATEGORI",
    "kompetensi": "Sosial",
    "subkompetensi": "S.2",
    "prompt": "Dalam tata kelola limbah dan pemeliharaan bengkel mesin sekolah ramah lingkungan (LH), evaluasi ketepatan prosedur siswa berikut.",
    "categories": [
      "Benar",
      "Salah"
    ],
    "statements": [
      {
        "text": "Cairan pendingin (emulsi coolant bekas) dan oli hidrolik/gearbox bekas ditampung dalam jeriken berlabel limbah B3 untuk ditangani pengelola berizin, TIDAK dibuang ke saluran air/selokan sekolah.",
        "answer": 0
      },
      {
        "text": "Tatal geram baja, kuningan, dan aluminium dikumpulkan terpisah di wadah scrap logam agar mudah didaur ulang sekaligus mengurangi bahaya sayatan kaki atau terbakarnya geram magnesium/aluminium.",
        "answer": 0
      },
      {
        "text": "Kain majun basah berminyak maupun sisa thinner cat semprot boleh langsung dibakar bersama tumpukan kertas di halaman belakang bengkel setiap sore.",
        "answer": 1
      }
    ],
    "explanation": "Aspek Lingkungan Hidup (LH) dalam K3LH menuntut pengelolaan bertanggung jawab terhadap limbah cair (oli/coolant B3), limbah padat tajam (pemilahan scrap logam), dan kain majun terkontaminasi."
  },
  {
    "id": "pck-k3-08",
    "bank": "PCK",
    "topic": "K3LH & Teaching Factory",
    "pckFocus": "Metode Pengajaran",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.5",
    "prompt": "Ketika menghadapi keterbatasan jumlah unit mesin fisik perkakas modern di sekolah maupun waktu praktik bengkel yang sempit, evaluasi kelayakan strategi perluasan pengalaman belajar siswa berikut.",
    "categories": [
      "Sesuai",
      "Tidak Sesuai"
    ],
    "statements": [
      {
        "text": "Membuat kesepakatan jadwal magang/kunjungan belajar terstruktur dengan bengkel manufaktur atau UMKM teknik sekitar (konteks lokal) guna mengamati langsung proses produksi yang belum tersedia di sekolah.",
        "answer": 0
      },
      {
        "text": "Menyiapkan modul belajar mandiri interaktif (simulator CAD/CNC, video trouble-shooting persiapan setup mesin, dan latihan baca gambar kerja) sehingga siswa sudah siap teknis sebelum jam giliran mesin fisik di sekolah dimulai.",
        "answer": 0
      },
      {
        "text": "Mengosongkan jam pelajaran praktik seluruhnya dan menyuruh siswa menyalin buku panduan mesin dari halaman 1 sampai 200.",
        "answer": 1
      }
    ],
    "explanation": "Keterbatasan laboratorium fisik diatasi lewat pembelajaran campuran cerdas (simulasi pra-bengkel, pemetaan persiapan proses terstruktur, dan kemitraan industri lokal)."
  },
  {
    "id": "pck-k3-09",
    "bank": "PCK",
    "topic": "K3LH & Teaching Factory",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_MCMA",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.3",
    "prompt": "Sebuah kejadian nyaris celaka (near-miss) terjadi di bengkel saat sebuah kunci cekam (chuck key) bubut lupa dicabut oleh siswa dari rahang cekam, lalu terlempar menghantam dinding aman ketika sakelar sempat dinyalakan sekilas. Tindakan guru yang edukatif, konstruktif, dan berorientasi perbaikan budaya aman adalah .... (Pilih semua jawaban benar)",
    "options": [
      "Segera menghentikan seluruh operasi sebentar, memastikan tidak ada cedera, lalu menjadikan insiden near-miss tersebut studi refleksi bersama kelas untuk menganalisis akar penyebab hilangnya fokus.",
      "Menetapkan aturan visual \"Tangan Tidak Boleh Lepas dari Kunci Cekam Selama Terpasang di Chuck\" serta mempertimbangkan penggunaan/modifikasi kunci cekam berpegas pengaman (spring-loaded safety chuck key) sesuai ketersediaan.",
      "Menguatkan prosedur saling memeriksa berpasangan (buddy check) dan checklist pra-start tanpa mempermalukan atau merendahkan martabat siswa secara kasar.",
      "Menyembunyikan kejadian tersebut agar catatan administrasi bengkel terlihat nol insiden.",
      "Membiarkan kunci cekam biasa tetap ditinggalkan menancap di chuck asalkan putaran masih rendah."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Dalam budaya keselamatan industri (Zero Accident Mindset), pelaporan dan analisis terbuka atas kejadian near-miss berharga emas untuk memperbaiki rekayasa/prosedur (kunci bermekanisme pegas + aturan no-hand-off chuck key + buddy check) tanpa menutupi masalah ataupun mempermalukan."
  },
  {
    "id": "pck-k3-10",
    "bank": "PCK",
    "topic": "K3LH & Teaching Factory",
    "pckFocus": "Asesmen Otentik",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.5",
    "prompt": "Untuk memastikan proyek akhir pembelajaran bengkel kelas XII Teknik Mesin mencerminkan kolaborasi lintas keahlian (CAD, Pemesinan/CNC, Pengelasan, Metrologi, dan K3LH), ciri rancangan projek dan rubrik terpadu yang kuat meliputi .... (Pilih semua jawaban benar)",
    "options": [
      "Mulai dari perancangan produk fungsional di CAD beserta analisis pemilihan material dan toleransi perakitan.",
      "Eksekusi fabrikasi (pemotongan, pemesinan presisi, pengelasan konstruksi rangka/penyetelan transmisi) menggunakan operation sheet dan kepatuhan K3LH.",
      "Inspeksi dimensi QC silang oleh teman/tim penguji memakai instrumen ukur presisi yang tepat (Rule of 10), dilengkapi refleksi revisi atas penyimpangan yang ditemukan.",
      "Menghilangkan tahap perencanaan gambar dan langsung memotong besi agar cepat jadi.",
      "Menilai seluruh anggota kelompok dengan angka identik 95 tanpa mengamati kinerja individual maupun catatan inspeksi."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Integrasi lintas elemen kompetensi SMK menghasilkan proyek berstandar manufaktur utuh-menghubungkan rancangan digital CAD, eksekusi terukur di lantai bengkel, inspeksi metrologi independen, serta refleksi profesional."
  },
  {
    "id": "pck-k3-11",
    "bank": "PCK",
    "topic": "K3LH & Teaching Factory",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.5",
    "prompt": "Penyesuaian jenis APD dan rambu keselamatan wajib di bengkel Teknik Mesin harus spesifik terhadap sumber bahaya tiap zona mesin (tidak disamaratakan keliru). Pasangan zona kerja bengkel dan fokus keselamatan utamanya yang tepat adalah .... (Pilih semua jawaban benar)",
    "options": [
      "Zona Mesin Bubut/Bor/Frais: wajib safety glasses/face shield, wearpack pas badan, sepatu safety; dilarang keras sarung tangan berbahan kain/longgar dan aksesori berjuntai dekat bagian berputar.",
      "Zona Pengelasan (SMAW/GMAW): wajib helm/kap las berfilter shade sesuai, sarung tangan kulit las panjang, apron tahan percikan api, sepatu safety kulit tertutup, dan ventilasi hisap asap.",
      "Zona Gerinda Bangku & Potong: wajib safety glasses + face shield penahan percikan, memeriksa penyangga benda kerja (tool rest berjarak maks. ±3 mm dari batu), dan pelindung percikan terpasang.",
      "Zona Kerja Mesin Bubut: sarung tangan rajut berbulu tebal diwajibkan untuk mencengkeram poros yang sedang berputar kencang.",
      "Zona Las Busur: cukup memakai sandal jepit dan kacamata baca bening asalkan ruangannya terang."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Keselamatan bengkel menuntut ketepatan memilih APD per karakter risiko: perlindungan dari bahaya belitan (entanglement) di mesin rotasi tanpa sarung tangan vs perlindungan termal/radiasi UV + kulit tertutup total di zona pengelasan serta face shield di zona gerinda."
  }
];
