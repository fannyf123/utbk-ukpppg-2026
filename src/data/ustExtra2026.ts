import type { ExamQuestion } from '../types/exam';

/**
 * Ekstraksi tambahan resmi dosen UST (2026):
 * - Ros_soal Pendalaman UKPPPG 26 PGSD.docx (25 HOTS PG)
 * - HerMar_SD_Soal_SEL_20_Kasus_Kunci_dan_Pembahasan.docx (PG + PGK MCMA)
 * - SOAL PENDALAMAN UTBK SEL FINAL.docx (UMUM SEL + Kolb + EMC2)
 * - SOAL PPDP.docx (Susanti, Dhimas, Murniningsih - bebas duplikasi & bebas error)
 */
export const UST_EXTRA_2026: ExamQuestion[] = [
  {
    "id": "ust-ros-01",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "topic": "Pendalaman UTBK PGSD · P.1",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Bu Rina, guru kelas IV SD, telah mengajarkan penjumlahan pecahan. Hampir semua murid dapat menjawab 1/2 + 1/4 = 3/4 dengan menyamakan penyebut. Namun, ketika diminta menjelaskan dengan gambar mengapa 1/2 lebih besar daripada 1/3 , sebagian besar murid justru menyatakan 1/3 lebih besar \"karena 3 lebih besar dari 2\". Interpretasi yang paling tepat terhadap kondisi pemahaman murid tersebut adalah ....",
    "options": [
      "murid belum menguasai prosedur penjumlahan pecahan sehingga perlu diberi latihan soal hitungan tambahan",
      "murid kurang teliti membaca soal sehingga perlu dilatih membaca instruksi dengan lebih cermat",
      "pemahaman murid masih bersifat prosedural-permukaan, belum konseptual tentang makna pecahan sebagai bagian dari keseluruhan",
      "soal bergambar terlalu sulit untuk murid kelas IV sehingga sebaiknya diganti dengan soal berbentuk angka",
      "murid sudah mencapai pemahaman mendalam karena mampu menyelesaikan operasi hitung pecahan dengan benar"
    ],
    "answer": 2,
    "explanation": "Alasan kunci benar: Murid mampu menjalankan algoritma (menyamakan penyebut) tetapi gagal menalar besaran pecahan; ini ciri pembelajaran dangkal: prosedur dikuasai tanpa makna. Pembelajaran mendalam menuntut pemahaman konseptual yang dapat ditransfer ke representasi lain. A. Data justru menunjukkan prosedur sudah dikuasai; latihan hitung tambahan tidak menyentuh masalah konsep. B. Kesalahannya sistematis (membandingkan penyebut seperti bilangan cacah), bukan karena kurang teliti. D. Menghindari representasi gambar berarti menutup kesempatan membangun konsep; masalahnya bukan pada format soal. E. Mampu berhitung tanpa mampu menjelaskan bukanlah pemahaman mendalam.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-02",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "topic": "Pendalaman UTBK PGSD · P.6",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Pak Dimas, guru kelas V SD, akan memulai topik IPAS \"Ekosistem\". Sebelum menyusun modul ajar, ia ingin mengetahui minat, preferensi cara belajar, dan kenyamanan murid saat bekerja dalam kelompok. Langkah asesmen awal yang paling tepat dilakukan Pak Dimas adalah ....",
    "options": [
      "memberikan angket minat dan preferensi belajar serta mengamati interaksi murid dalam kelompok, lalu memakai hasilnya untuk menentukan pengelompokan dan pilihan aktivitas",
      "memberikan pretes pilihan ganda tentang rantai makanan, lalu memakai nilainya untuk menyusun peringkat murid dari yang tertinggi hingga terendah",
      "melihat nilai ulangan harian materi sebelumnya, lalu memberikan remedial kepada murid yang nilainya berada di bawah kriteria ketercapaian",
      "mewawancarai orang tua tentang nilai rapor semester lalu, lalu memakai informasi itu untuk memprediksi keberhasilan murid pada topik baru",
      "memberikan tes kecerdasan umum, lalu memakai hasilnya untuk memisahkan murid berkemampuan tinggi dan rendah ke dalam kelas berbeda"
    ],
    "answer": 0,
    "explanation": "Alasan kunci benar: Minat, preferensi belajar, dan kenyamanan sosial adalah aspek nonkognitif; teknik yang tepat adalah angket dan observasi. Hasilnya harus dipakai untuk merancang pembelajaran (pengelompokan, pilihan aktivitas), bukan sekadar dicatat. B. Pretes mengukur aspek kognitif, dan pemeringkatan bukan tujuan asesmen awal. C. Ini asesmen materi sebelumnya (kognitif) dan berorientasi remedial, bukan mengenali minat dan preferensi. D. Nilai rapor bukan data nonkognitif dan memprediksi keberhasilan berisiko memberi label. E. Tes kecerdasan tidak sesuai tujuan dan pemisahan kelas bertentangan dengan pembelajaran inklusif.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-03",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.3",
    "topic": "Pendalaman UTBK PGSD · PF.3",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Hasil asesmen awal menulis teks deskripsi di kelas III SD (28 murid) menunjukkan: 6 murid mampu menulis paragraf runtut; 14 murid mampu menulis kalimat, tetapi antarkalimat belum padu; 8 murid masih kesulitan menyusun kalimat sederhana. Lima dari 8 murid tersebut sehari-hari berbahasa Jawa di rumah dan sangat aktif bercerita secara lisan. Keputusan pembelajaran yang paling tepat berdasarkan data tersebut adalah ....",
    "options": [
      "mengajarkan materi menulis paragraf kepada seluruh kelas karena mayoritas murid sudah mampu menulis kalimat dengan benar",
      "menunda materi teks deskripsi bagi seluruh kelas sampai kedelapan murid tuntas menyusun kalimat sederhana",
      "meminta delapan murid yang kesulitan mengikuti les tambahan di luar jam pelajaran agar dapat mengejar teman-temannya",
      "mengelompokkan murid berdasarkan bahasa ibu agar murid yang berbahasa Jawa dapat belajar bersama-sama",
      "menyusun tiga jalur kegiatan sesuai level, dan memanfaatkan kekuatan bercerita lisan kelompok yang kesulitan sebagai jembatan menuju menulis kalimat"
    ],
    "answer": 4,
    "explanation": "Alasan kunci benar: Peta kebutuhan belajar memperlihatkan tiga level kesiapan sekaligus satu potensi (kemampuan bercerita lisan). Keputusan terbaik merespons keduanya: diferensiasi berdasarkan level dan memakai kekuatan murid (asset-based) sebagai titik masuk. A. Mengabaikan 8 murid yang belum siap dan 6 murid yang sudah melampaui. B. Menghambat 20 murid lain; tidak efisien dan tidak adil. C. Memindahkan tanggung jawab ke luar kelas dan tidak memanfaatkan potensi murid. D. Bahasa ibu bukan dasar pengelompokan kebutuhan belajar menulis; dapat menimbulkan segregasi.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-04",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.3",
    "topic": "Pendalaman UTBK PGSD · P.3",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Bu Ani, guru kelas IV SD, akan mengajarkan IPAS topik gaya dan pengaruhnya terhadap gerak benda. Ia menyiapkan beberapa alternatif rancangan kegiatan. Rancangan yang paling mencerminkan pembelajaran yang berkesadaran, bermakna, dan menggembirakan adalah ....",
    "options": [
      "guru menayangkan video animasi tentang gaya yang menarik, lalu murid mengerjakan dua puluh soal isian pengertian dan jenis gaya",
      "murid mengamati gerobak penjual, ayunan, dan pintu di sekitar sekolah, merumuskan pertanyaan, bereksperimen mendorong mobil mainan di permukaan berbeda, lalu merefleksikan hal yang sudah dan belum dipahami",
      "guru membagikan ringkasan materi berwarna dan memberikan hadiah kepada murid yang paling cepat menghafal pengertian gaya",
      "murid mengikuti kuis daring berpoin tentang definisi gaya otot, gaya pegas, dan gaya magnet dengan papan peringkat di layar",
      "guru menjelaskan konsep gaya secara runtut, kemudian murid merangkum bab gaya dari buku siswa di rumah"
    ],
    "answer": 1,
    "explanation": "Alasan kunci benar: Opsi B memuat ketiga prinsip: berkesadaran (murid merumuskan pertanyaan dan merefleksikan pemahamannya), bermakna (fenomena nyata di lingkungan), dan menggembirakan (eksplorasi dan eksperimen yang memantik rasa ingin tahu). A. Video hanya pemanis; inti kegiatan tetap latihan hafalan tanpa makna. C. Hafalan dan hadiah eksternal tidak membangun pemahaman maupun kesadaran belajar. D. Menyenangkan secara permukaan, tetapi hanya menguji definisi (C1) dan kompetitif. E. Berpusat pada guru dan tidak melibatkan murid secara aktif maupun reflektif.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-05",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "topic": "Pendalaman UTBK PGSD · P.6",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Murid kelas IV SD menulis karangan berjudul \"Pergi ke Pasar\". Paragraf pembukanya menarik, tetapi urutan kejadian pada paragraf kedua melompat-lompat sehingga sulit diikuti. Guru akan memberikan umpan balik tertulis. Umpan balik yang paling efektif untuk mendorong perbaikan belajar murid tersebut adalah ....",
    "options": [
      "\"Karanganmu bagus sekali! Pertahankan semangat menulismu, ya.\"",
      "\"Nilaimu 65, masih di bawah kriteria ketercapaian. Belajar lebih giat lagi.\"",
      "\"Karanganmu masih banyak kesalahan. Tolong perbaiki semuanya sebelum dikumpulkan lagi.\"",
      "\"Pembukamu menarik karena langsung menggambarkan suasana pasar. Di paragraf kedua urutan kejadian masih melompat; coba pakai kata 'kemudian' dan 'setelah itu'.\"",
      "\"Coba kamu baca karangan Sinta yang mendapat nilai tertinggi, lalu tiru cara dia menulis.\""
    ],
    "answer": 3,
    "explanation": "Alasan kunci benar: Umpan balik efektif bersifat spesifik, berbasis bukti dari karya murid, menunjukkan kekuatan, menjelaskan kesenjangan dengan tujuan, dan memberi langkah perbaikan konkret (feed up–feed back–feed forward). Opsi D memenuhi semuanya. A. Pujian umum tanpa informasi apa yang baik dan apa yang perlu diperbaiki. B. Hanya angka dan nasihat umum; tidak menunjukkan arah perbaikan. C. Negatif dan tidak spesifik; murid tidak tahu bagian mana yang harus diperbaiki. E. Membandingkan dengan teman dan meniru tidak membangun kemampuan murid sendiri.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-06",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "topic": "Pendalaman UTBK PGSD · P.6",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Untuk asesmen awal materi perkalian kelas III SD, seorang guru menyusun 10 soal berbentuk \"24 × 3 = ....\". Penilaian dilakukan dengan menghitung jumlah jawaban benar. Kelemahan paling mendasar instrumen tersebut sebagai asesmen awal adalah ....",
    "options": [
      "hanya mengukur hasil akhir sehingga tidak dapat mengungkap letak kesulitan murid pada konsep prasyarat seperti penjumlahan berulang dan nilai tempat",
      "jumlah soal terlalu sedikit sehingga skor yang dihasilkan belum memiliki tingkat reliabilitas yang memadai",
      "bentuk soal hitungan kurang menarik sehingga motivasi murid kelas III dalam mengerjakan menjadi rendah",
      "instrumen belum dilengkapi dengan kunci jawaban dan pedoman penskoran yang rinci untuk setiap butir soal",
      "urutan soal tidak disusun dari tingkat kesukaran rendah ke tinggi sehingga membingungkan murid"
    ],
    "answer": 0,
    "explanation": "Alasan kunci benar: Fungsi utama asesmen awal adalah menemukan letak dan penyebab kesulitan (miskonsepsi, prasyarat yang belum dikuasai) untuk merancang pembelajaran. Soal hasil akhir dengan skor benar-salah tidak memberi informasi itu. B. Menambah soal sejenis tidak akan mengungkap penyebab kesulitan. C. Motivasi penting, tetapi bukan kelemahan mendasar dari segi fungsi awal.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-07",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "topic": "Pendalaman UTBK PGSD · P.2",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Bu Monik menyajikan materi siklus air di kelas IV SD hanya melalui teks bacaan panjang di buku. Murid dengan hambatan membaca (disleksia) dan beberapa murid yang lebih mudah memahami lewat gambar tampak tertinggal dan tidak mampu menjelaskan tahapan siklus air. Perbaikan yang paling tepat sesuai Desain Universal untuk Pembelajaran (DUP) adalah ....",
    "options": [
      "prinsip keterlibatan, yaitu memberikan hadiah kepada murid yang mau membaca teks sampai selesai",
      "prinsip aksi dan ekspresi, yaitu membebaskan murid memilih bentuk tugas akhir sesuai keinginannya",
      "prinsip keterlibatan, yaitu mengatur ulang tempat duduk murid yang tertinggal agar lebih dekat dengan guru",
      "prinsip representasi, yaitu menyajikan informasi melalui diagram, video, model, dan audio di samping teks bacaan",
      "prinsip aksi dan ekspresi, yaitu memperpanjang waktu membaca bagi murid yang mengalami kesulitan"
    ],
    "answer": 3,
    "explanation": "Alasan kunci benar: Hambatan terjadi pada cara informasi disajikan (hanya teks). Prinsip DUP yang relevan adalah menyediakan beragam cara representasi, sehingga murid dapat mengakses konten melalui visual, audio, atau model konkret. A. Hadiah tidak menghilangkan hambatan akses terhadap teks. B. Pilihan produk akhir tidak membantu murid memahami materi sejak awal. C. Posisi duduk tidak mengubah bentuk penyajian materi. E. Perpanjangan waktu tetap mengandalkan satu jenis representasi; ini juga bukan inti prinsip aksi dan ekspresi.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-08",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "topic": "Pendalaman UTBK PGSD · P.2",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Guru kelas V SD akan menilai ketercapaian tujuan \"Murid dapat menjelaskan bentuk keragaman budaya di Indonesia dan cara menghargainya\". Murid di kelas tersebut memiliki kekuatan yang beragam: ada yang lancar menulis, berbicara, menggambar, maupun membuat karya tiga dimensi. Rancangan asesmen yang paling sesuai dengan prinsip DUP adalah ....",
    "options": [
      "semua murid membuat makalah tiga halaman dengan format yang sama agar penilaian lebih objektif dan adil",
      "murid memilih bentuk produk (poster, podcast, presentasi, tulisan, atau maket) yang dinilai dengan rubrik bersama berdasarkan tujuan yang sama",
      "murid bebas membuat produk apa saja, kemudian dinilai berdasarkan kreativitas dan kerapian tampilan produknya",
      "murid berkemampuan tinggi membuat makalah, sedangkan murid lainnya cukup mewarnai peta persebaran budaya",
      "guru menyiapkan tes pilihan ganda daring yang sama untuk semua murid agar hasilnya cepat diketahui"
    ],
    "answer": 1,
    "explanation": "Alasan kunci benar: DUP memberi fleksibilitas pada cara murid menunjukkan pemahaman, tetapi tujuan dan kriteria keberhasilan tetap sama (firm goals, flexible means). Rubrik bersama memastikan yang dinilai adalah ketercapaian tujuan, bukan bentuk produknya. A. Satu bentuk produk merugikan murid yang kekuatannya bukan menulis. C. Kriteria bergeser ke tampilan, tidak lagi mengukur tujuan pembelajaran. D. Menurunkan tujuan bagi sebagian murid; ekspektasi tidak setara. E. Hanya satu cara ekspresi dan cenderung mengukur ingatan.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-09",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "topic": "Pendalaman UTBK PGSD · P.4",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "SD tempat Anda mengajar baru mendapat bantuan perangkat laptop dan akses internet. Sebagai guru kelas V, Anda diminta merancang pemanfaatan teknologi pada pembelajaran IPAS topik perubahan wujud benda. Pemanfaatan teknologi yang paling tepat adalah ....",
    "options": [
      "mengganti buku teks cetak dengan berkas PDF materi yang dibagikan melalui grup percakapan kelas",
      "menayangkan salindia berisi teks yang sama dengan isi buku agar murid lebih mudah membaca dari layar",
      "meminta murid mencari jawaban pertanyaan di mesin pencari, lalu menyalinnya ke dalam buku tugas",
      "mewajibkan murid membawa gawai pribadi untuk mengerjakan kuis daring di setiap akhir pembelajaran",
      "murid memakai simulasi interaktif dan fitur teks-ke-suara, membandingkan informasi dari dua sumber daring, menilai kredibilitasnya, lalu membuat infografis"
    ],
    "answer": 4,
    "explanation": "Alasan kunci benar: Integrasi TIK yang kritis dan kreatif memperluas akses (teks-ke-suara), memperdalam pemahaman (simulasi), dan melatih literasi digital (mengevaluasi kredibilitas sumber, mencipta produk). Teknologi mengubah kualitas belajar, bukan sekadar mengganti media. A. Hanya substitusi media tanpa peningkatan kualitas belajar. B. Teknologi dipakai sebagai pengganti papan tulis; murid tetap pasif. C. Mendorong menyalin tanpa berpikir kritis terhadap informasi. D. Mengabaikan murid tanpa gawai dan pemanfaatannya sebatas kuis.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-10",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "topic": "Pendalaman UTBK PGSD · P.2",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Galang, murid kelas V di SD inklusif, memiliki hambatan pendengaran ringan dan memahami ucapan dengan bantuan membaca gerak bibir. Guru kelasnya sering menjelaskan materi sambil menulis di papan dengan posisi membelakangi murid dan sering memutar video tanpa teks. Tindakan guru yang paling tepat untuk mengakomodasi Galang adalah ....",
    "options": [
      "menyarankan orang tua memindahkan Galang ke sekolah luar biasa agar ia memperoleh layanan yang lebih sesuai",
      "meminta teman sebangku Galang menuliskan ulang setiap penjelasan guru di buku catatan Galang",
      "berbicara sambil menghadap kelas, menyediakan visual dan teks pendukung, memakai video berteks, serta menempatkan Galang di posisi yang jelas melihat guru",
      "memberikan tugas dan target capaian yang lebih ringan kepada Galang dibandingkan dengan teman-temannya",
      "berbicara dengan suara lebih keras setiap kali menjelaskan materi agar Galang dapat mendengar dengan baik"
    ],
    "answer": 2,
    "explanation": "Alasan kunci benar: DUP menghilangkan hambatan pada lingkungan belajar, bukan pada murid. Menghadap kelas, menyediakan teks/visual, dan video berteks mengakomodasi Galang sekaligus bermanfaat bagi semua murid. A. Bertentangan dengan semangat pendidikan inklusif. B. Membebani teman dan tidak mengubah praktik guru. D. Menurunkan ekspektasi; hambatan Galang ada pada akses, bukan kemampuan. E. Suara keras tidak menyelesaikan masalah gerak bibir yang tidak terlihat dan video tanpa teks.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-11",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.3",
    "topic": "Pendalaman UTBK PGSD · P.3",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Pada pembelajaran pecahan desimal di kelas VI SD, banyak murid tampak pasif dan bosan. Saat ditanya, mereka mengatakan tidak tahu kegunaan materi tersebut dalam kehidupan. Rancangan yang paling sesuai dengan prinsip ragam cara keterlibatan dalam DUP adalah ....",
    "options": [
      "memberi pilihan konteks masalah (belanja di pasar, menakar bahan kue, mencatat skor olahraga), menetapkan tujuan yang jelas, dan menyediakan kesempatan refleksi kemajuan diri",
      "memberikan poin tambahan bagi murid yang berani maju ke depan kelas untuk mengerjakan soal pecahan desimal",
      "menambah jumlah latihan soal setiap hari agar murid terbiasa dan lama-kelamaan menyukai materi pecahan desimal",
      "memberikan teguran dan sanksi kepada murid yang tidak memperhatikan penjelasan guru selama pembelajaran",
      "memutar musik instrumental selama murid mengerjakan latihan soal agar suasana kelas menjadi lebih santai"
    ],
    "answer": 0,
    "explanation": "Alasan kunci benar: Prinsip keterlibatan menekankan relevansi, pilihan, tujuan yang jelas, dan regulasi diri. Opsi A menjawab akar masalah (murid tidak melihat kegunaan materi) dengan konteks bermakna dan pilihan. B. Motivasi eksternal sesaat dan hanya menyentuh murid yang berani. C. Memperparah kebosanan karena tidak menyentuh relevansi. D. Pendekatan hukuman menurunkan rasa aman belajar. E. Hanya mengubah suasana, bukan keterlibatan kognitif.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-12",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "topic": "Pendalaman UTBK PGSD · P.2",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Hasil asesmen membaca di kelas IV SD menunjukkan murid tersebar pada lima level: belum mengenal huruf, mengenal huruf, membaca kata, membaca paragraf, dan membaca cerita dengan pemahaman. Kebijakan pembelajaran yang paling sesuai dengan pendekatan Teaching at the Right Level (TaRL) adalah ....",
    "options": [
      "semua murid tetap mempelajari materi kelas IV, sedangkan murid yang belum lancar membaca diberi pekerjaan rumah tambahan",
      "murid dikelompokkan secara permanen sepanjang tahun ajaran berdasarkan hasil asesmen membaca di awal semester",
      "murid yang masih berada pada level huruf dipindahkan sementara ke kelas II hingga mampu membaca kata",
      "guru menyampaikan materi kelas IV dengan tempo lebih lambat agar semua murid dapat mengikuti pembelajaran",
      "murid dikelompokkan berdasarkan level kemampuan, diberi aktivitas sesuai level, dan diases ulang secara berkala untuk berpindah kelompok"
    ],
    "answer": 4,
    "explanation": "Alasan kunci benar: Inti TaRL: mengajar dari level kemampuan aktual (bukan tingkat kelas), mengelompokkan secara fleksibel, dan melakukan asesmen berkala sehingga murid dapat naik level. A. Tetap mengajar sesuai kelas, bukan sesuai level. B. Pengelompokan permanen bertentangan dengan prinsip fleksibel TaRL dan berisiko memberi label. C. Menurunkan kelas bukan praktik TaRL; murid belajar sesuai level di dalam rombel. D. Memperlambat tempo tidak menjawab kesenjangan antarlevel.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-13",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "topic": "Pendalaman UTBK PGSD · P.6",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Setelah tiga minggu pembelajaran TaRL di kelas III SD, guru melakukan asesmen ulang terhadap 9 murid kelompok \"membaca kata\". Hasilnya, 5 murid sudah mampu membaca paragraf dengan lancar, sedangkan 4 murid masih berada pada level membaca kata. Tindak lanjut yang paling tepat dilakukan guru adalah ....",
    "options": [
      "mempertahankan kesembilan murid di kelompok membaca kata agar kelompok tetap stabil dan solid",
      "memindahkan kesembilan murid ke kelompok membaca paragraf agar empat murid tidak tertinggal",
      "memindahkan lima murid ke kelompok paragraf dan menganalisis hambatan spesifik empat murid untuk menyesuaikan strategi",
      "mengulang asesmen dengan soal yang lebih mudah agar keempat murid dapat dinyatakan naik level",
      "melaporkan keempat murid kepada orang tua sebagai murid yang mengalami lambat belajar"
    ],
    "answer": 2,
    "explanation": "Alasan kunci benar: Asesmen berkala dalam TaRL berfungsi memindahkan murid sesuai kemajuan dan sebagai dasar menyesuaikan strategi bagi murid yang belum maju. Opsi C melakukan keduanya. A. Menahan murid yang sudah siap naik level. B. Empat murid belum siap; menaikkan paksa membuat mereka tertinggal. D. Memanipulasi instrumen; tidak jujur dan tidak membantu murid. E. Melabeli murid tanpa upaya diagnosis dan perbaikan strategi.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-14",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.3",
    "topic": "Pendalaman UTBK PGSD · K.3",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Dalam tahap See (refleksi) Lesson Study pada pembelajaran numerasi di kelas II SD, pengamat menemukan bahwa pembelajaran TaRL berjalan baik di kelompok atas, tetapi murid kelompok bawah lebih banyak menunggu giliran didampingi guru sehingga waktu belajar efektif mereka sangat sedikit. Rencana tindak lanjut yang paling tepat adalah ....",
    "options": [
      "menghentikan penerapan TaRL dan kembali ke pembelajaran klasikal karena terbukti tidak efektif bagi semua murid",
      "menyiapkan kartu aktivitas mandiri berjenjang, melatih tutor sebaya, menjadwalkan rotasi pendampingan guru, lalu mengevaluasinya pada siklus berikutnya",
      "menambahkan jam pelajaran khusus di luar jam sekolah bagi murid kelompok bawah agar mendapat pendampingan penuh",
      "menggabungkan murid kelompok bawah ke kelompok atas agar mereka dapat belajar dengan meniru teman yang lebih mampu",
      "mengurangi cakupan materi bagi kelompok bawah agar guru tidak perlu terlalu lama mendampingi mereka"
    ],
    "answer": 1,
    "explanation": "Alasan kunci benar: RTL yang baik menjawab akar masalah (keterbatasan waktu pendampingan), tetap konsisten dengan prinsip TaRL, memaksimalkan potensi murid (tutor sebaya, aktivitas mandiri), dan memuat rencana evaluasi siklus berikutnya. A. Keputusan reaktif; masalahnya pada manajemen kelas, bukan pada pendekatan TaRL. C. Membebani murid dan tidak memperbaiki praktik di kelas. D. Bertentangan dengan prinsip mengajar sesuai level. E. Menurunkan ekspektasi dan tidak menyelesaikan masalah waktu belajar.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-15",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.5",
    "topic": "Pendalaman UTBK PGSD · P.5",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Sebuah SD di desa pesisir menerapkan TaRL numerasi. Satu kelompok murid berada pada level \"mengenal bilangan dua angka\" dan masih bingung membedakan nilai puluhan dan satuan. Banyak orang tua murid bekerja sebagai nelayan dan pedagang ikan. Aktivitas yang paling tepat untuk kelompok tersebut adalah ....",
    "options": [
      "mengerjakan lembar soal nilai tempat dari buku paket secara mandiri, kemudian dibahas bersama di akhir pembelajaran",
      "menonton video pembelajaran nilai tempat yang menggunakan konteks belanja di pusat perbelanjaan kota besar",
      "menghafalkan urutan bilangan satu sampai seratus dan tabel perkalian secara bersama-sama setiap hari",
      "memakai kerang atau batu dan ikatan sepuluhan untuk membangun konsep nilai tempat melalui permainan jual-beli ikan tiruan",
      "memainkan gim numerasi daring yang memerlukan kuota internet dan gawai pribadi milik setiap murid"
    ],
    "answer": 3,
    "explanation": "Alasan kunci benar: Murid pada level ini perlu benda konkret untuk membangun konsep nilai tempat (ikatan sepuluhan). Memakai benda dan konteks yang akrab (jual-beli ikan) memanfaatkan potensi lingkungan dan kearifan lokal sehingga bermakna. A. Lembar soal abstrak tidak sesuai bagi murid yang belum memahami konsep. B. Konteks asing bagi murid desa pesisir dan bersifat pasif. C. Hafalan tidak membangun konsep nilai tempat. E. Tidak memperhatikan keterbatasan sarana dan konteks lokal.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-16",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "topic": "Pendalaman UTBK PGSD · P.2",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Dalam forum Kelompok Kerja Guru (KKG) SD, seorang guru kelas III menyampaikan: \"Bagi saya, TaRL itu artinya saya membuat soal mudah untuk murid yang lemah dan soal sulit untuk murid yang pintar, lalu nilai mereka saya bandingkan untuk menentukan peringkat.\" Analisis yang paling tepat terhadap pernyataan tersebut adalah ....",
    "options": [
      "kurang tepat, karena TaRL menekankan pembelajaran yang dimulai dari level aktual murid untuk menaikkan level secara bertahap, bukan membedakan soal untuk dibandingkan",
      "tepat, karena inti pendekatan TaRL adalah membedakan tingkat kesulitan soal berdasarkan kemampuan murid",
      "tepat, selama murid yang lemah tidak mengetahui bahwa soal yang mereka kerjakan lebih mudah",
      "kurang tepat, karena pendekatan TaRL hanya dapat diterapkan pada literasi membaca dan bukan pada numerasi",
      "kurang tepat, karena dalam TaRL guru tidak diperbolehkan memberikan soal yang berbeda kepada murid"
    ],
    "answer": 0,
    "explanation": "Alasan kunci benar: TaRL adalah pendekatan pembelajaran (bukan sekadar pembedaan soal) yang memetakan level, mengajar sesuai level, dan memantau kenaikan level. Membandingkan nilai dari soal berbeda untuk peringkat juga keliru secara asesmen. B. Mereduksi TaRL menjadi pembedaan soal semata. C. Tetap keliru dan menambahkan unsur ketidakterbukaan. D. TaRL diterapkan pada literasi dan numerasi. E. TaRL justru memberikan aktivitas berbeda sesuai level.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-17",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.5",
    "topic": "Pendalaman UTBK PGSD · P.5",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Guru kelas V sebuah SD di Yogyakarta akan mengajarkan sifat-sifat bangun datar. Ia ingin menerapkan Culturally Responsive Teaching (CRT). Kegiatan yang paling mencerminkan CRT adalah ....",
    "options": [
      "menggunakan gambar gedung-gedung terkenal dari buku terbitan luar negeri sebagai contoh bentuk bangun datar",
      "mengajak murid mengidentifikasi pola geometri pada motif batik dan rumah joglo di sekitar mereka, lalu mengaitkannya dengan sifat bangun datar",
      "menyanyikan lagu daerah Jawa bersama-sama sebagai kegiatan pembuka sebelum materi bangun datar dimulai",
      "mewajibkan seluruh murid mengenakan pakaian adat Jawa setiap kali mengikuti pembelajaran matematika",
      "meminta murid menghafalkan nama-nama motif batik khas Yogyakarta beserta daerah asal setiap motif"
    ],
    "answer": 1,
    "explanation": "Alasan kunci benar: CRT menjadikan budaya dan pengalaman murid sebagai jembatan menuju konsep akademik. Opsi B mengintegrasikan budaya lokal secara substantif ke dalam inti konsep geometri. A. Konteks asing; tidak berangkat dari pengalaman murid. C. Unsur budaya hanya tempelan (tokenistik), tidak terhubung dengan konsep. D. Simbolis dan tidak terkait tujuan belajar. E. Hafalan budaya tanpa kaitan dengan konsep matematika.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-18",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Sosial",
    "subkompetensi": "S.1",
    "topic": "Pendalaman UTBK PGSD · S.1",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Yohanes, murid kelas IV SD pindahan dari Nusa Tenggara Timur, ditertawakan teman-temannya setiap kali menjawab pertanyaan karena logat bicaranya berbeda. Sejak itu ia enggan berbicara di kelas. Respons guru yang paling tepat adalah ....",
    "options": [
      "menegur dengan keras murid-murid yang tertawa di depan kelas, lalu segera melanjutkan pembelajaran",
      "menyarankan Yohanes berlatih logat setempat agar dapat menyesuaikan diri dan tidak ditertawakan lagi",
      "membiarkan situasi tersebut karena perbedaan logat merupakan hal yang wajar dalam proses adaptasi",
      "memindahkan Yohanes ke kelompok yang anggotanya lebih pendiam agar ia merasa lebih tenang",
      "membangun kesepakatan kelas untuk menghargai keragaman bahasa, lalu memfasilitasi Yohanes berbagi kosakata dan cerita daerahnya sebagai sumber belajar"
    ],
    "answer": 4,
    "explanation": "Alasan kunci benar: Komunikasi inklusif dan CRT memandang bahasa serta budaya murid sebagai aset. Guru membangun norma kelas yang aman, lalu mengangkat latar Yohanes sebagai sumber belajar bersama sehingga identitasnya dihargai. A. Menghentikan sesaat tetapi tidak membangun pemahaman dan budaya menghargai. B. Menyalahkan korban dan menghapus identitas budayanya (asimilasi). C. Pembiaran memperburuk rasa aman belajar. D. Menghindari masalah; Yohanes tetap terpinggirkan.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-19",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Sosial",
    "subkompetensi": "S.2",
    "topic": "Pendalaman UTBK PGSD · S.2",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Sebagian besar orang tua murid kelas V di sebuah SD di lereng Merapi adalah petani salak. Guru ingin mengintegrasikan pengetahuan keluarga (funds of knowledge) ke dalam pembelajaran matematika materi pengolahan data. Bentuk kolaborasi yang paling tepat adalah ....",
    "options": [
      "mengirimkan surat edaran agar orang tua membantu anak mengerjakan pekerjaan rumah matematika setiap malam",
      "meminta orang tua menyumbangkan hasil panen salak untuk acara kelas sebagai bentuk dukungan terhadap sekolah",
      "mengundang orang tua sebagai narasumber budidaya dan penjualan salak, lalu murid mengolah data hasil panen dan menyajikannya dalam tabel serta diagram",
      "mengadakan pertemuan orang tua untuk menyampaikan nilai rapor dan daftar murid yang perlu remedial matematika",
      "membentuk grup percakapan orang tua untuk menginformasikan jadwal ulangan dan tugas-tugas matematika"
    ],
    "answer": 2,
    "explanation": "Alasan kunci benar: Opsi C memosisikan orang tua sebagai mitra dan sumber pengetahuan, serta mengubah pengetahuan keluarga menjadi konteks pengolahan data yang autentik. Kolaborasi berdampak langsung pada kualitas pembelajaran. A. Kolaborasi satu arah; tidak memanfaatkan pengetahuan keluarga. B. Dukungan material, bukan kolaborasi pembelajaran. D. Komunikasi administratif tentang hasil, bukan pengembangan pembelajaran. E. Hanya penyampaian informasi.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-20",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.3",
    "topic": "Pendalaman UTBK PGSD · K.3",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Seorang guru kelas V SD berkata, \"Anak-anak dari kampung nelayan di kelas saya memang sulit diharapkan nilainya tinggi. Jadi, target saya cukup asal mereka naik kelas.\" Analisis yang paling tepat terhadap pernyataan guru tersebut adalah ....",
    "options": [
      "wajar, karena merupakan bentuk sikap realistis guru dalam memahami keterbatasan kondisi murid",
      "tepat, karena guru telah menyesuaikan target belajar dengan latar belakang ekonomi keluarga murid",
      "sesuai CRT, karena guru telah mempertimbangkan latar belakang sosial-budaya murid dalam menetapkan target",
      "bertentangan dengan CRT, yang menuntut ekspektasi tinggi bagi semua murid disertai dukungan yang responsif terhadap latar budaya mereka",
      "kurang tepat, karena seharusnya guru lebih memfokuskan perhatian pada murid-murid yang berprestasi"
    ],
    "answer": 3,
    "explanation": "Alasan kunci benar: Salah satu pilar CRT adalah ekspektasi tinggi untuk semua murid (high expectations) yang dibarengi scaffolding. Menurunkan target berdasarkan latar sosial merupakan stereotip (deficit thinking) dan menghambat pengembangan potensi murid. A. Membenarkan stereotip sebagai realisme. B. Latar ekonomi bukan dasar menurunkan target belajar. C. Mempertimbangkan budaya dalam CRT berarti memakainya sebagai aset, bukan alasan menurunkan target. E. Mengabaikan sebagian murid bertentangan dengan pembelajaran berpusat pada murid.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-21",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Sosial",
    "subkompetensi": "S.1",
    "topic": "Pendalaman UTBK PGSD · S.1",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Ibu Sumi, orang tua salah satu murid kelas II SD, lebih fasih berbahasa daerah dan kurang memahami istilah-istilah pendidikan. Guru perlu menyampaikan perkembangan belajar anaknya yang masih kesulitan memahami bacaan. Cara komunikasi yang paling tepat adalah ....",
    "options": [
      "menyampaikan perkembangan dengan bahasa sederhana (dibantu bahasa daerah bila perlu), menunjukkan contoh karya anak, dan menyepakati dukungan yang dapat dilakukan di rumah",
      "mengirimkan laporan tertulis yang berisi skor dan deskripsi capaian lengkap dengan istilah kurikulum yang berlaku",
      "menitipkan pesan secara lisan melalui anak agar disampaikan kepada Ibu Sumi sesampainya di rumah",
      "menunda komunikasi sampai waktu pembagian rapor agar informasi yang disampaikan lebih lengkap",
      "meminta Ibu Sumi datang bersama anggota keluarga yang lain yang lebih memahami istilah pendidikan"
    ],
    "answer": 0,
    "explanation": "Alasan kunci benar: Komunikasi inklusif menyesuaikan bahasa dengan mitra bicara, menggunakan bukti konkret (karya anak), dan bersifat dua arah sehingga menghasilkan kesepakatan dukungan. Opsi A memenuhi aspek empatik, efektif, dan kolaboratif. B. Bahasa teknis tidak dipahami Ibu Sumi; komunikasi tidak efektif. C. Pesan berisiko tidak utuh dan tidak dua arah. D. Menunda menghilangkan kesempatan intervensi dini. E. Memindahkan beban kepada orang tua; guru yang semestinya menyesuaikan.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-22",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "topic": "Pendalaman UTBK PGSD · P.6",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Hasil asesmen sumatif pengolahan data di kelas VI SD menunjukkan rerata kelas 78, di atas kriteria ketercapaian tujuan pembelajaran (KKTP) 75. Namun, analisis butir menunjukkan 70% murid menjawab salah pada butir-butir yang menuntut kemampuan menafsirkan diagram batang. Simpulan dan tindak lanjut yang paling tepat adalah ....",
    "options": [
      "pembelajaran telah berhasil karena rerata kelas sudah berada di atas KKTP sehingga guru dapat melanjutkan ke materi berikutnya",
      "butir-butir tentang diagram batang sebaiknya dihapus dari instrumen karena terlalu sulit bagi sebagian besar murid",
      "meski rerata tinggi, ada kesulitan bersama pada kemampuan menafsirkan diagram sehingga perlu pembelajaran ulang yang terarah pada aspek itu",
      "murid yang menjawab salah perlu diberi remedial dengan mengerjakan kembali soal yang sama hingga mendapat jawaban benar",
      "rerata kelas tidak bermakna karena masih terdapat beberapa murid yang memperoleh nilai di bawah kriteria"
    ],
    "answer": 2,
    "explanation": "Alasan kunci benar: Rerata dapat menutupi pola kesulitan. Analisis butir mengungkap kompetensi spesifik yang belum dikuasai mayoritas murid; tindak lanjut yang tepat adalah pembelajaran ulang klasikal terarah pada aspek tersebut. A. Mengabaikan informasi awal dari analisis butir. B. Butir tersebut justru mengukur kompetensi penting; masalahnya pada pembelajaran. D. Mengulang soal yang sama tidak membangun pemahaman menafsirkan diagram. E. Rerata tetap bermakna; masalahnya adalah hanya menggunakan rerata.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-23",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.2",
    "topic": "Pendalaman UTBK PGSD · K.2",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Pak Arif dan Bu Lina adalah guru kelas V A dan V B di sebuah SD. Pada topik bangun ruang, Bu Lina memakai diskusi kelompok berbasis masalah, sedangkan Pak Arif lebih banyak berceramah. Hasil asesmen sumatif kelas V B jauh lebih baik daripada kelas V A yang diajar Pak Arif. Sikap Pak Arif yang paling mencerminkan refleksi diri dan pola pikir bertumbuh adalah ....",
    "options": [
      "menyimpulkan bahwa kelas V A memang berisi murid-murid dengan kemampuan akademik yang lebih rendah",
      "menganggap perbedaan hasil terjadi secara kebetulan sehingga tidak perlu ditindaklanjuti lebih jauh",
      "menyimpulkan bahwa murid kelas V B lebih rajin belajar di rumah dibandingkan dengan murid kelas V A",
      "langsung mengganti seluruh pembelajaran semua mata pelajaran menjadi diskusi tanpa mempertimbangkan karakteristik materi",
      "menjadikan temuan sebagai bahan refleksi praktiknya, memeriksa data lain seperti asesmen awal, berdiskusi dengan Bu Lina, lalu menguji strategi diskusi di kelasnya dan memantau dampaknya"
    ],
    "answer": 4,
    "explanation": "Alasan kunci benar: Guru reflektif memandang hasil asesmen sebagai umpan balik bagi praktiknya sendiri, memeriksa bukti secara cermat, lalu memperbaiki secara terukur. Ini wujud pola pikir bertumbuh dan pemanfaatan asesmen secara reflektif. A. Atribusi pada murid; menghindari refleksi atas praktik guru. B. Mengabaikan bukti yang bermakna. C. Asumsi tanpa data dan tetap menyalahkan faktor luar. D. Generalisasi tergesa-gesa tanpa analisis dan pemantauan.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-24",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "topic": "Pendalaman UTBK PGSD · P.6",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Guru kelas IV SD sedang menulis deskripsi capaian kompetensi matematika pada rapor. Berdasarkan hasil asesmen, Ananda sangat baik dalam membandingkan dan mengurutkan pecahan, tetapi masih kesulitan menyelesaikan soal cerita penjumlahan pecahan berpenyebut berbeda. Deskripsi capaian yang paling tepat adalah ....",
    "options": [
      "\"Ananda menunjukkan kemampuan yang baik dalam mata pelajaran matematika selama satu semester ini.\"",
      "\"Ananda menunjukkan penguasaan yang sangat baik dalam membandingkan dan mengurutkan pecahan, serta perlu bimbingan dalam menyelesaikan soal cerita penjumlahan pecahan berpenyebut berbeda.\"",
      "\"Ananda memperoleh nilai 82 pada mata pelajaran matematika dan menempati peringkat kelima di kelas.\"",
      "\"Ananda perlu lebih rajin belajar di rumah dan lebih banyak berlatih mengerjakan soal-soal matematika.\"",
      "\"Ananda telah mencapai kriteria ketercapaian tujuan pembelajaran pada seluruh materi matematika.\""
    ],
    "answer": 1,
    "explanation": "Alasan kunci benar: Deskripsi capaian yang baik menyebutkan kompetensi spesifik yang dikuasai dan yang perlu ditingkatkan, berdasarkan bukti asesmen, dengan bahasa positif. Opsi B memenuhi ketiga aspek tersebut. A. Terlalu umum; tidak informatif bagi murid dan orang tua. C. Hanya angka dan peringkat; tidak menggambarkan kompetensi. D. Nasihat umum tanpa informasi capaian. E. Tidak sesuai data karena masih ada kompetensi yang belum tercapai.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-ros-25",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.4",
    "topic": "Pendalaman UTBK PGSD · PF.4",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Data asesmen awal dan sumatif di sebuah SD selama satu tahun menunjukkan kemampuan membaca pemahaman murid kelas IV–VI rendah, terutama dalam menyimpulkan isi bacaan. Kepala sekolah meminta tim guru merumuskan rekomendasi untuk tahun ajaran berikutnya. Rekomendasi yang paling tepat adalah ....",
    "options": [
      "menambah jam pelajaran Bahasa Indonesia dengan mengurangi alokasi waktu mata pelajaran lain di kelas IV–VI",
      "mewajibkan murid membaca buku selama lima belas menit sebelum pelajaran dimulai tanpa kegiatan tindak lanjut",
      "mengganti buku teks Bahasa Indonesia dengan buku dari penerbit lain yang memiliki bacaan lebih menarik",
      "merevisi alur tujuan pembelajaran dan modul ajar lintas mata pelajaran agar memuat strategi membaca pemahaman berjenjang, disertai asesmen formatif berkala",
      "menyelenggarakan lomba membaca antarkelas setiap akhir semester untuk menumbuhkan minat baca murid"
    ],
    "answer": 3,
    "explanation": "Alasan kunci benar: Hasil asesmen tingkat sekolah menjadi dasar pengembangan kurikulum operasional secara adaptif. Opsi D menyasar akar masalah (strategi membaca pemahaman), terintegrasi lintas mata pelajaran, berjenjang, dan memiliki mekanisme pemantauan dampak. A. Menambah waktu tanpa mengubah strategi; mengorbankan mata pelajaran lain. B. Kegiatan membaca tanpa tindak lanjut tidak melatih kemampuan menyimpulkan. C. Mengganti sumber tidak menjawab masalah strategi pembelajaran. E. Kegiatan insidental; tidak sistematis dan tidak menyentuh kemampuan pemahaman.",
    "source": "Ros_soal Pendalaman UKPPPG 26 PGSD (UST)"
  },
  {
    "id": "ust-hsel-01",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Sosial",
    "subkompetensi": "S.1",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Saat istirahat, beberapa siswa kelas IV menertawakan Raka karena ia membaca dengan terbata-bata. Raka kemudian memilih duduk sendiri dan tidak mau mengikuti kegiatan membaca bersama. Tindakan guru yang paling tepat untuk mengembangkan kesadaran sosial siswa adalah …",
    "options": [
      "Meminta Raka berlatih membaca lebih keras di depan kelas agar terbiasa",
      "Mengajak siswa memahami perasaan Raka dan membangun kebiasaan saling menghargai",
      "Menegur siswa yang tertawa di depan seluruh kelas tanpa diskusi lebih lanjut",
      "Memindahkan Raka ke kelompok siswa yang kemampuan membacanya sama",
      "Mengabaikan kejadian tersebut agar siswa menyelesaikan masalah sendiri"
    ],
    "answer": 1,
    "explanation": "Kesadaran sosial mencakup empati dan kemampuan memahami perspektif orang lain. Guru perlu membantu siswa memahami dampak perilaku mengejek serta membangun budaya kelas yang menghargai perbedaan.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-02",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.1",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Dalam kerja kelompok kelas V, Nisa merasa kesal karena teman-temannya tidak menggunakan ide yang ia sampaikan. Ia mulai berbicara keras dan menyalahkan anggota kelompok. Respons guru yang paling tepat untuk melatih pengelolaan diri adalah …",
    "options": [
      "Meminta Nisa keluar dari kelompok sampai ia tenang",
      "Mengambil alih tugas kelompok agar pekerjaan cepat selesai",
      "Membimbing Nisa mengenali emosinya, menenangkan diri, lalu menyampaikan pendapat dengan cara yang tepat",
      "Meminta teman-temannya selalu mengikuti ide Nisa agar tidak terjadi konflik",
      "Memberi hukuman karena Nisa telah mengganggu kerja kelompok"
    ],
    "answer": 2,
    "explanation": "Pengelolaan diri membantu siswa mengenali dan mengatur emosi serta perilaku. Guru memberi strategi sederhana untuk menenangkan diri dan berkomunikasi secara tepat.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-03",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Sosial",
    "subkompetensi": "S.1",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Guru kelas III mengetahui bahwa Dito beberapa kali tidak membawa alat mewarnai karena kondisi ekonomi keluarganya. Agar tetap menjaga martabat anak dan mendukung keterlibatannya, guru sebaiknya …",
    "options": [
      "Mengumumkan kepada kelas agar teman-teman mengumpulkan alat mewarnai untuk Dito",
      "Berbicara secara pribadi dengan Dito dan menyiapkan alternatif alat belajar tanpa mempermalukannya",
      "Meminta Dito duduk dan mengamati teman-temannya bekerja",
      "Mengurangi tugas Dito agar ia tidak membutuhkan alat mewarnai",
      "Meminta Dito menjelaskan keadaan keluarganya di depan kelas"
    ],
    "answer": 1,
    "explanation": "Guru menunjukkan empati dan kepedulian dengan memberikan dukungan secara bijaksana, menjaga privasi, serta memastikan anak tetap dapat berpartisipasi dalam pembelajaran.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-04",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Sosial",
    "subkompetensi": "S.2",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Dua siswa kelas IV berselisih saat menyusun poster tentang menjaga kebersihan sekolah. Keduanya saling menyalahkan dan menolak bekerja sama. Langkah guru yang paling tepat untuk mengembangkan keterampilan berelasi adalah …",
    "options": [
      "Menentukan sendiri desain poster yang harus dibuat",
      "Memisahkan keduanya dan memberikan tugas individu",
      "Memfasilitasi dialog, mendengarkan kedua pihak, dan menyepakati pembagian tugas",
      "Meminta salah satu siswa mengalah karena waktu terbatas",
      "Menghentikan kegiatan poster untuk seluruh kelas"
    ],
    "answer": 2,
    "explanation": "Keterampilan berelasi meliputi komunikasi, mendengarkan aktif, kerja sama, dan penyelesaian konflik secara konstruktif.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-05",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.2",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Setelah membentak siswa yang ramai, seorang guru kelas II menyadari bahwa dirinya sedang lelah dan kurang sabar. Tindakan yang menunjukkan kesadaran diri dan pengelolaan diri sebagai teladan adalah …",
    "options": [
      "Merefleksikan pemicu emosinya, meminta maaf kepada siswa, dan menyiapkan cara merespons yang lebih tenang",
      "Menganggap bentakan sebagai cara yang wajar untuk mendisiplinkan anak",
      "Menyalahkan siswa karena membuat guru kehilangan kesabaran",
      "Menghindari kelas tersebut untuk beberapa hari",
      "Meminta siswa melupakan kejadian tanpa penjelasan"
    ],
    "answer": 0,
    "explanation": "Guru menjadi model pembelajaran sosial emosional. Kesadaran terhadap emosi diri, tanggung jawab, dan upaya memperbaiki perilaku memberi contoh nyata bagi siswa.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-06",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.2",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Rafi, siswa kelas V, berkata, “Saya memang tidak pintar matematika,” setelah beberapa kali salah mengerjakan soal. Umpan balik guru yang paling mendukung pola pikir bertumbuh adalah …",
    "options": [
      "“Memang matematika bukan kelebihanmu.”",
      "“Kamu belum berhasil, tetapi strategi dan latihan yang tepat dapat membantumu berkembang.”",
      "“Lihat temanmu, mereka bisa mengerjakan dengan cepat.”",
      "“Tidak perlu mencoba soal yang sulit.”",
      "“Ibu/Bapak akan mengerjakan soal ini untukmu.”"
    ],
    "answer": 1,
    "explanation": "Umpan balik berorientasi proses menekankan usaha, strategi, dan perkembangan. Kata 'belum' membuka ruang bahwa kemampuan dapat dikembangkan.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-07",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.5",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Dalam pembelajaran IPS kelas IV tentang keberagaman pekerjaan, guru mengajak siswa mewawancarai anggota keluarga atau warga sekitar mengenai pekerjaan mereka. Agar kegiatan menjadi pengalaman belajar sosial emosional, guru sebaiknya …",
    "options": [
      "Meminta siswa menghafalkan jenis pekerjaan sebelum wawancara",
      "Mengajak siswa mendengarkan pengalaman narasumber, menghargai setiap pekerjaan, lalu merefleksikan pembelajaran",
      "Menilai siswa hanya berdasarkan banyaknya pertanyaan",
      "Meminta siswa memilih pekerjaan yang dianggap paling bergengsi",
      "Membatasi wawancara pada keluarga yang memiliki pekerjaan formal"
    ],
    "answer": 1,
    "explanation": "Pengalaman langsung perlu diikuti refleksi. Siswa belajar memahami perspektif orang lain dan menghargai kontribusi berbagai jenis pekerjaan.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-08",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Pada pembelajaran kelas V tentang sampah di lingkungan sekolah, guru ingin mengintegrasikan kompetensi sosial emosional. Kegiatan yang paling tepat adalah …",
    "options": [
      "Siswa menyalin definisi sampah dari buku paket",
      "Siswa mengidentifikasi masalah, mendengarkan pendapat teman, menyusun solusi bersama, dan mengevaluasi dampaknya",
      "Guru menyampaikan satu solusi dan meminta siswa menghafalnya",
      "Siswa berlomba mengumpulkan sampah tanpa aturan kerja sama",
      "Siswa mengerjakan soal pilihan ganda secara individu sepanjang pelajaran"
    ],
    "answer": 1,
    "explanation": "Pembelajaran akademik dapat diintegrasikan dengan SEL melalui identifikasi masalah, kolaborasi, pengambilan keputusan, dan refleksi.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-09",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.1",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Seorang siswa kelas VI mengunggah foto temannya yang sedang menangis di grup percakapan kelas tanpa izin. Guru ingin mengembangkan pengambilan keputusan yang bertanggung jawab. Langkah terbaik adalah …",
    "options": [
      "Membimbing siswa memahami privasi, dampak unggahan, meminta penghapusan, dan memperbaiki perilakunya",
      "Melarang seluruh siswa menggunakan gawai selamanya",
      "Membalas dengan mengunggah foto siswa yang melakukan kesalahan",
      "Mengabaikan karena kejadian berlangsung di luar jam pelajaran",
      "Meminta teman-teman memberi komentar agar siswa jera"
    ],
    "answer": 0,
    "explanation": "Pengambilan keputusan bertanggung jawab mempertimbangkan keselamatan, etika, privasi, dampak tindakan, dan cara memperbaiki kesalahan.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-10",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.3",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Sekolah dasar ingin mengetahui apakah program sekolah ramah anak mendukung kesejahteraan warga sekolah. Indikator yang paling relevan untuk diperhatikan adalah …",
    "options": [
      "Banyaknya piala yang diperoleh sekolah",
      "Rasa aman siswa, kualitas hubungan, keterlibatan belajar, dan kesempatan menyampaikan pendapat",
      "Jumlah tugas rumah yang diberikan guru",
      "Kecepatan siswa menyelesaikan seluruh soal",
      "Banyaknya aturan tertulis yang dipasang di kelas"
    ],
    "answer": 1,
    "explanation": "School well-being berkaitan dengan rasa aman, relasi positif, keterlibatan, dukungan, dan pengalaman belajar yang membuat siswa berkembang.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-11",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Dalam proyek membuat taman kelas, guru kelas III melihat beberapa siswa selalu mengambil tugas yang mudah, sedangkan siswa lain mendominasi pekerjaan. Strategi guru yang paling tepat adalah …",
    "options": [
      "Membagi peran yang bermakna dan bergiliran sesuai kemampuan serta memberi dukungan agar semua anak berpartisipasi",
      "Membiarkan siswa yang pandai menyelesaikan seluruh pekerjaan",
      "Memberikan tugas yang sama persis tanpa mempertimbangkan kesiapan siswa",
      "Menunjuk satu ketua untuk mengerjakan seluruh keputusan",
      "Menghentikan proyek karena pembagian tugas tidak seimbang"
    ],
    "answer": 0,
    "explanation": "Pembagian peran yang inklusif membantu siswa merasa memiliki kontribusi, mengembangkan kepercayaan diri, dan belajar bekerja sama.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-12",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Sosial",
    "subkompetensi": "S.1",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Dalam kegiatan bermain peran kelas IV tentang antre di kantin, siswa memeragakan situasi ketika ada teman menyerobot antrean. Agar pengalaman tersebut bermakna bagi perkembangan SEL, guru perlu …",
    "options": [
      "Langsung memberi tahu siapa yang benar dan salah",
      "Mengajak siswa merefleksikan perasaan, akibat tindakan, dan pilihan respons yang adil",
      "Meminta siswa menghafal tata tertib kantin",
      "Mengulang bermain peran tanpa diskusi",
      "Memberi hukuman kepada siswa yang berperan menyerobot"
    ],
    "answer": 1,
    "explanation": "Refleksi membantu siswa menghubungkan pengalaman dengan emosi, perspektif orang lain, konsekuensi, dan pilihan perilaku.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-13",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Sosial",
    "subkompetensi": "S.2",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Guru kelas II melihat seorang siswa sering cemas ketika diminta bekerja dalam kelompok. Guru ingin membangun kemitraan dengan orang tua secara tepat. Tindakan yang paling sesuai adalah …",
    "options": [
      "Menyampaikan masalah anak di grup WhatsApp kelas",
      "Berdiskusi secara pribadi dengan orang tua untuk memahami kebutuhan anak dan menyepakati dukungan yang konsisten",
      "Meminta orang tua memaksa anak agar berani",
      "Membebaskan anak dari semua kegiatan kelompok",
      "Menyimpulkan bahwa anak kurang percaya diri tanpa mencari informasi"
    ],
    "answer": 1,
    "explanation": "Kemitraan guru dan orang tua dilakukan secara komunikatif, menjaga kerahasiaan, memahami kebutuhan anak, dan menyepakati dukungan yang konsisten.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-14",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Guru kelas V ingin mengetahui perkembangan keterampilan sosial emosional siswa setelah pembelajaran kolaboratif selama satu bulan. Cara evaluasi yang paling tepat adalah …",
    "options": [
      "Hanya menggunakan satu tes tertulis tentang definisi CASEL",
      "Menggabungkan observasi perilaku, refleksi siswa, umpan balik teman, dan dokumentasi proses kelompok",
      "Menilai berdasarkan siswa yang paling sering berbicara",
      "Menggunakan jumlah jawaban benar pada pelajaran matematika",
      "Meminta ketua kelas menentukan siapa yang paling baik"
    ],
    "answer": 1,
    "explanation": "Perkembangan SEL tampak dalam perilaku dan interaksi. Bukti yang beragam memberi gambaran lebih utuh daripada satu tes pengetahuan.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-15",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.3",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Siswa kelas IV bermusyawarah menentukan aturan penggunaan pojok baca di kelas. Agar kegiatan mengembangkan pengambilan keputusan bertanggung jawab, guru sebaiknya …",
    "options": [
      "Memfasilitasi siswa mengidentifikasi kebutuhan, mempertimbangkan usulan, dan menyepakati aturan yang adil",
      "Menentukan semua aturan tanpa melibatkan siswa",
      "Meminta siswa yang paling pandai membuat aturan sendiri",
      "Membiarkan setiap siswa menggunakan pojok baca sesuka hati",
      "Mengikuti usulan siswa yang berbicara paling keras"
    ],
    "answer": 0,
    "explanation": "Siswa belajar mempertimbangkan kebutuhan bersama, konsekuensi, keadilan, dan tanggung jawab melalui proses musyawarah yang terarah.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-16",
    "bank": "PU",
    "type": "PGK_MCMA",
    "kompetensi": "Sosial",
    "subkompetensi": "S.1",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Di kelas III, seorang siswa diejek karena logat bicaranya berbeda. Pilih semua tindakan guru yang tepat untuk menumbuhkan kesadaran sosial dan iklim kelas yang menghargai keberagaman.",
    "options": [
      "Mengajak siswa memahami perasaan teman yang diejek",
      "Menegaskan kesepakatan kelas untuk menghormati perbedaan",
      "Meminta siswa yang diejek mengubah logatnya agar diterima",
      "Menggunakan cerita atau kegiatan yang menunjukkan keberagaman sebagai kekuatan",
      "Menganggap ejekan sebagai candaan biasa"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Empati, norma saling menghargai, dan pengenalan keberagaman membantu membangun kesadaran sosial. Anak yang menjadi sasaran tidak boleh dibebani untuk mengubah identitasnya.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-17",
    "bank": "PU",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.3",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Saat mengerjakan proyek membuat maket lingkungan, satu siswa kelas V terus mendominasi diskusi. Anggota lain tidak mendapat kesempatan berbicara. Strategi yang tepat untuk mengembangkan keterampilan berelasi adalah …",
    "options": [
      "Menetapkan giliran berbicara agar semua anggota mendapat kesempatan",
      "Melatih siswa mendengarkan dan menanggapi pendapat teman dengan santun",
      "Membiarkan siswa yang dominan memutuskan seluruh rancangan",
      "Mengajak kelompok merefleksikan proses kerja sama setelah kegiatan",
      "Mengganti seluruh anggota kelompok tanpa pembicaraan"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "explanation": "Giliran berbicara, mendengarkan aktif, dan refleksi kelompok merupakan strategi konkret untuk mengembangkan komunikasi dan kolaborasi.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-18",
    "bank": "PU",
    "type": "PGK_MCMA",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.2",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Seorang siswa kelas IV berkata, “Saya bodoh, tidak akan pernah bisa membaca lancar,” setelah mendapat koreksi dari guru. Respons guru yang mendukung pola pikir bertumbuh adalah …",
    "options": [
      "Mengakui usaha siswa dan menunjukkan kemajuan kecil yang sudah dicapai",
      "Mengajak siswa mencoba strategi membaca yang berbeda dengan pendampingan",
      "Menyampaikan bahwa kemampuan membaca dapat berkembang melalui latihan bertahap",
      "Membandingkan kemampuan membaca siswa dengan teman sekelas",
      "Mengurangi kesempatan siswa membaca agar tidak merasa gagal"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Guru menekankan proses, strategi, kemajuan, dan keyakinan bahwa kemampuan dapat berkembang. Perbandingan sosial dan penghindaran tantangan tidak membantu.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-19",
    "bank": "PU",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.5",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Guru kelas IV mengajak siswa melakukan kunjungan singkat ke lingkungan sekitar untuk mengenali kegiatan warga. Pilih rangkaian kegiatan yang mendukung pembelajaran berbasis pengalaman sekaligus empati.",
    "options": [
      "Menyusun pertanyaan sederhana sebelum kunjungan",
      "Mengamati dan mendengarkan penjelasan warga dengan sikap hormat",
      "Merefleksikan pengalaman dan sudut pandang yang diperoleh setelah kembali ke kelas",
      "Menilai keberhasilan hanya dari jumlah foto yang diambil",
      "Menyimpulkan bahwa semua warga memiliki pengalaman yang sama"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pengalaman belajar yang bermakna meliputi persiapan, keterlibatan langsung, dan refleksi. Sikap menghormati narasumber membantu siswa memahami perspektif yang beragam.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-hsel-20",
    "bank": "PU",
    "type": "PGK_MCMA",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.3",
    "topic": "SEL & KSE Konteks SD (UST)",
    "prodiScope": [
      "pgsd"
    ],
    "prompt": "Sekolah dasar akan menyusun program untuk meningkatkan school well-being. Program yang paling mendukung kesejahteraan siswa adalah …",
    "options": [
      "Menyediakan mekanisme aman bagi siswa untuk menyampaikan pendapat dan masalah",
      "Mengembangkan hubungan positif dan budaya saling menghargai di kelas",
      "Menata lingkungan belajar yang aman, nyaman, dan inklusif",
      "Memusatkan program hanya pada peningkatan jumlah latihan soal",
      "Memberi penghargaan hanya kepada siswa dengan prestasi akademik tertinggi"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kesejahteraan sekolah dibangun melalui rasa aman, relasi positif, suara siswa, dan lingkungan yang inklusif; bukan hanya capaian akademik.",
    "source": "HerMar_SD_Soal_SEL_20_Kasus (UST)"
  },
  {
    "id": "ust-fsel-01",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.3",
    "topic": "Pembelajaran Sosial-Emosional & CASEL (UST)",
    "prodiScope": "UMUM",
    "prompt": "Berikut ini yang merupakan kegiatan pembelajaran untuk memunculkan kompetensi empathy pada EMC2 yaitu ….",
    "options": [
      "Menggunakan teknik – teknik relaksasi seperti visualisasi atau gerakan tubuh ringan untuk membantu peserta didik mengelola stres.",
      "Menerapkan pembelajaran kolaboratif, dimana peserta didik akan berbagi pengalaman atau pandangan mereka masing – masing.",
      "Dalam proses pembelajaran jika ada peserta didik yang belum paham, mereka diarahkan kepada teman sebaya untuk mendapatkan penjelasan terlebih dahulu.",
      "Mendorong peserta didik untuk mengajukan pertanyaan yang mendalam terkait topik yang dipelajari dan mencari jawaban dengan cara sistematis.",
      "Peserta didik berdiskusi secara mendalam dalam pembelajaran berbasis proyek tentang proyek yang akan mereka kerjakan secara berkelompok."
    ],
    "answer": 1,
    "explanation": "Kompetensi empathy dalam kerangka EMC² (Empathy, Mindfulness, Compassion, Critical Inquiry) berkaitan dengan kemampuan memahami dan merasakan perspektif orang lain. Pembelajaran kolaboratif yang mendorong peserta didik untuk berbagi pengalaman dan pandangan pribadi sangat efektif untuk menumbuhkan empati, karena peserta didik belajar melihat dari sudut pandang orang lain dan muncul rasa peduli, menghargai, dan memahami perbedaan.",
    "source": "SOAL PENDALAMAN UTBK SEL FINAL (UST)"
  },
  {
    "id": "ust-fsel-02",
    "bank": "PU",
    "type": "PGK_MCMA",
    "kompetensi": "Sosial",
    "subkompetensi": "S.1",
    "topic": "Pembelajaran Sosial-Emosional & CASEL (UST)",
    "prodiScope": "UMUM",
    "prompt": "Guru kelas mengajak peserta didik melakukan kunjungan singkat ke lingkungan sekitar untuk mengenali kegiatan warga. Pilih rangkaian kegiatan yang mendukung pembelajaran berbasis pengalaman sekaligus empati.",
    "options": [
      "Menyusun pertanyaan sederhana sebelum kunjungan",
      "Mengamati dan mendengarkan penjelasan warga dengan sikap hormat",
      "Merefleksikan pengalaman dan sudut pandang yang diperoleh setelah kembali ke kelas",
      "Menilai keberhasilan hanya dari jumlah foto yang diambil",
      "Menyimpulkan bahwa semua warga memiliki pengalaman yang sama"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pengalaman belajar yang bermakna meliputi persiapan, keterlibatan langsung, dan refleksi. Sikap menghormati narasumber membantu peserta didik memahami perspektif yang beragam.",
    "source": "SOAL PENDALAMAN UTBK SEL FINAL (UST)"
  },
  {
    "id": "ust-fsel-03",
    "bank": "PU",
    "type": "PGK_MCMA",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.3",
    "topic": "Pembelajaran Sosial-Emosional & CASEL (UST)",
    "prodiScope": "UMUM",
    "prompt": "Sekolah akan menyusun program untuk meningkatkan school well-being. Program yang paling mendukung kesejahteraan peserta didik adalah …",
    "options": [
      "Menyediakan mekanisme aman bagi peserta didik untuk menyampaikan pendapat dan masalah",
      "Mengembangkan hubungan positif dan budaya saling menghargai di kelas",
      "Menata lingkungan belajar yang aman, nyaman, dan inklusif",
      "Memusatkan program hanya pada peningkatan jumlah latihan soal",
      "Memberi penghargaan hanya kepada peserta didik dengan prestasi akademik tertinggi"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kesejahteraan sekolah dibangun melalui rasa aman, relasi positif, suara peserta didik, dan lingkungan yang inklusif; bukan hanya capaian akademik.",
    "source": "SOAL PENDALAMAN UTBK SEL FINAL (UST)"
  },
  {
    "id": "ust-ppdp-01",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "topic": "PPDP & Perkembangan Peserta Didik (UST)",
    "prodiScope": "UMUM",
    "prompt": "Seorang guru melaksanakan pembelajaran di kelas yang memiliki karakteristik peserta didik beragam. Berdasarkan hasil pengamatan dan asesmen awal, ditemukan bahwa beberapa peserta didik mampu memahami materi dengan cepat, sebagian membutuhkan contoh konkret dan pendampingan, sedangkan beberapa lainnya memiliki kepercayaan diri rendah sehingga enggan menyampaikan pendapat dalam kegiatan diskusi. Guru menyadari bahwa penggunaan satu strategi pembelajaran yang sama belum tentu dapat mengakomodasi kebutuhan seluruh peserta didik. Di sisi lain, guru tetap harus memastikan bahwa semua peserta didik dapat mencapai tujuan pembelajaran yang telah ditetapkan. Berdasarkan kondisi tersebut, tindakan pedagogis yang paling tepat dilakukan guru adalah ....",
    "options": [
      "Memberikan materi dengan tingkat kesulitan yang sama dan meminta seluruh peserta didik mengikuti tahapan pembelajaran secara seragam agar tidak terjadi kesenjangan kemampuan.",
      "Mengelompokkan peserta didik berdasarkan kemampuan akademik dan memberikan target capaian yang berbeda secara permanen sesuai kelompok masing-masing.",
      "Mengidentifikasi kesiapan, minat, dan kebutuhan belajar peserta didik, kemudian merancang strategi, aktivitas, dan dukungan pembelajaran yang bervariasi dengan tetap mengacu pada tujuan pembelajaran.",
      "Memprioritaskan peserta didik yang memiliki kemampuan akademik rendah melalui pembelajaran remedial, sedangkan peserta didik lainnya diminta belajar secara mandiri.",
      "Memberikan kebebasan kepada peserta didik untuk menentukan sendiri materi yang akan dipelajari tanpa mempertimbangkan tujuan pembelajaran."
    ],
    "answer": 2,
    "explanation": "Guru perlu memahami bahwa peserta didik memiliki karakteristik, kesiapan, minat, dan kebutuhan belajar yang berbeda. Pembelajaran berdiferensiasi menjadi salah satu pendekatan untuk mengakomodasi keragaman tersebut tanpa menghilangkan tujuan pembelajaran yang harus dicapai.",
    "source": "SOAL PPDP (UST)"
  },
  {
    "id": "ust-ppdp-02",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Sosial",
    "subkompetensi": "S.2",
    "topic": "PPDP & Perkembangan Peserta Didik (UST)",
    "prodiScope": "UMUM",
    "prompt": "Dalam suatu kegiatan pembelajaran, seorang guru memberikan tugas proyek kelompok kepada peserta didik. Setiap kelompok diminta menghasilkan sebuah karya berdasarkan materi yang telah dipelajari. Namun, selama proses pengerjaan proyek, guru menemukan beberapa permasalahan: Sebagian peserta didik mendominasi pengambilan keputusan kelompok. Beberapa peserta didik hanya mengikuti hasil pekerjaan temannya tanpa memberikan kontribusi. Terdapat perbedaan pendapat yang menyebabkan konflik antarpeserta didik. Sebagian peserta didik merasa tidak mampu menyelesaikan tugas yang diberikan. Guru ingin mempertahankan pembelajaran berbasis proyek karena kegiatan tersebut berpotensi mengembangkan kreativitas, kolaborasi, komunikasi, dan tanggung jawab peserta didik. Langkah paling tepat yang sebaiknya dilakukan guru adalah ....",
    "options": [
      "Mengambil alih seluruh proses pengerjaan proyek agar setiap kelompok dapat menyelesaikan tugas sesuai waktu yang ditentukan.",
      "Membiarkan peserta didik menyelesaikan permasalahan kelompok secara mandiri karena konflik merupakan bagian dari proses pembelajaran.",
      "Mengganti tugas proyek dengan tugas individu agar setiap peserta didik memiliki tanggung jawab terhadap hasil belajarnya masing-masing.",
      "Memfasilitasi refleksi dan dialog kelompok, membantu pembagian peran secara adil, memberikan pendampingan sesuai kebutuhan, serta menetapkan mekanisme evaluasi kontribusi individu dan kelompok.",
      "Memberikan nilai yang sama kepada seluruh anggota kelompok berdasarkan kualitas produk akhir tanpa mempertimbangkan proses pengerjaan."
    ],
    "answer": 3,
    "explanation": "Guru berperan sebagai fasilitator yang membantu peserta didik mengembangkan keterampilan sosial dan kolaborasi. Permasalahan kelompok perlu diselesaikan melalui komunikasi, refleksi, pembagian tanggung jawab, dan pendampingan. Penilaian juga perlu memperhatikan proses serta kontribusi individu, bukan hanya produk akhir.",
    "source": "SOAL PPDP (UST)"
  },
  {
    "id": "ust-ppdp-03",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "topic": "PPDP & Perkembangan Peserta Didik (UST)",
    "prodiScope": "UMUM",
    "prompt": "Seorang guru telah menyelesaikan pembelajaran pada suatu topik. Untuk mengetahui ketercapaian tujuan pembelajaran, guru melaksanakan asesmen formatif melalui pertanyaan, diskusi, dan tugas individu. Hasil asesmen menunjukkan bahwa sebagian peserta didik telah memahami konsep dan mampu menerapkannya dalam situasi baru. Namun, sebagian lainnya masih mengalami kesulitan dalam memahami konsep dasar. Guru juga menemukan bahwa beberapa peserta didik sebenarnya memahami materi, tetapi mengalami kesulitan ketika harus mengungkapkan pemahamannya melalui bentuk tugas tertulis.Guru ingin menggunakan hasil asesmen tersebut untuk memperbaiki proses pembelajaran berikutnya. Keputusan yang paling tepat dilakukan guru adalah ....",
    "options": [
      "Menggunakan nilai rata-rata kelas sebagai dasar untuk menentukan bahwa tujuan pembelajaran telah tercapai dan melanjutkan pembelajaran ke materi berikutnya.",
      "Memberikan tes ulang dengan bentuk dan tingkat kesulitan yang sama kepada seluruh peserta didik untuk memastikan konsistensi hasil belajar.",
      "Menganalisis hasil asesmen untuk mengidentifikasi kesulitan belajar, memberikan umpan balik yang spesifik, menyediakan kegiatan remedial dan pengayaan, serta menggunakan bentuk asesmen yang sesuai untuk memperoleh gambaran kemampuan peserta didik secara lebih utuh.",
      "Memberikan tugas tambahan kepada peserta didik yang memperoleh nilai rendah, sedangkan peserta didik yang memperoleh nilai tinggi tidak perlu mengikuti kegiatan pembelajaran berikutnya.",
      "Menurunkan kriteria ketercapaian tujuan pembelajaran agar seluruh peserta didik dapat memperoleh hasil belajar yang memuaskan."
    ],
    "answer": 2,
    "explanation": "Asesmen formatif tidak hanya berfungsi untuk memberikan nilai, tetapi juga menjadi dasar pengambilan keputusan pembelajaran. Guru perlu menganalisis kebutuhan belajar, memberikan umpan balik, melakukan remedial, serta menyediakan pengayaan. Penggunaan bentuk asesmen yang bervariasi juga membantu memperoleh gambaran kemampuan peserta didik secara lebih komprehensif.",
    "source": "SOAL PPDP (UST)"
  },
  {
    "id": "ust-ppdp-04",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "topic": "PPDP & Perkembangan Peserta Didik (UST)",
    "prodiScope": "UMUM",
    "prompt": "Seorang guru akan merancang pembelajaran bertema “Penggunaan Plastik Sekali Pakai”. Di kelasnya terdapat peserta didik dengan kemampuan berpikir yang beragam, beberapa peserta didik kurang percaya diri ketika berbicara di depan kelas, peserta didik sedang mengalami perubahan fisik masa remaja, dan terdapat perbedaan pendapat mengenai tanggung jawab moral konsumen terhadap lingkungan. Rancangan pembelajaran yang paling mampu mengintegrasikan dimensi perkembangan kognitif, sosial-emosional, moral, dan fisik adalah .....",
    "options": [
      "Guru memberikan ceramah mengenai pencemaran plastik kemudian meminta seluruh peserta didik mengerjakan 30 soal pilihan ganda secara individual.",
      "Guru menayangkan video pencemaran lingkungan dan meminta seluruh peserta didik membuat rangkuman dengan format yang sama.",
      "Guru membagi peserta didik berdasarkan nilai sebelumnya menjadi kelompok tinggi dan rendah secara permanen, kemudian memberikan tugas berbeda.",
      "Guru meminta peserta didik membaca artikel, menghafalkan dampak plastik, dan mengikuti tes lisan secara bergiliran di depan kelas.",
      "Guru menghadirkan masalah penggunaan plastik di lingkungan sekitar, menyediakan sumber informasi dengan tingkat kompleksitas bertahap, memberi pilihan peran dalam kelompok, memfasilitasi perdebatan mengenai konsekuensi moral berbagai keputusan, memberikan jeda aktivitas yang sesuai, serta menyediakan kesempatan refleksi individual."
    ],
    "answer": 4,
    "explanation": "Sumber bertahap mendukung perkembangan kognitif, pilihan peran dan refleksi menunjang sosial-emosional, dilema penggunaan plastik melatih penalaran moral, dan pengaturan aktivitas mempertimbangkan kebutuhan fisik.",
    "source": "SOAL PPDP (UST)"
  },
  {
    "id": "ust-ppdp-05",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "topic": "PPDP & Perkembangan Peserta Didik (UST)",
    "prodiScope": "UMUM",
    "prompt": "Guru memperoleh hasil pengamatan berikut sebelum pembelajaran proyek sains. Raka cepat memahami konsep tetapi jarang menyampaikan pendapat ketika bekerja dalam kelompok. Sinta membutuhkan waktu lebih lama memahami teks tetapi sangat baik membuat ilustrasi. Andi memahami konsep dengan baik tetapi mengalami hambatan melihat tulisan berukuran kecil dari jarak jauh. Mira aktif berdiskusi dan memiliki minat tinggi terhadap isu lingkungan. Kesimpulan pedagogis yang paling tepat berdasarkan data tersebut adalah ....",
    "options": [
      "Guru cukup menggunakan nilai akademik sebagai dasar pembagian kelompok karena kemampuan kognitif merupakan karakteristik utama pembelajaran.",
      "Raka dan Mira harus ditempatkan pada kelompok berkemampuan tinggi, sedangkan Sinta dan Andi pada kelompok rendah.",
      "Karakteristik peserta didik bersifat multidimensional sehingga perencanaan pembelajaran perlu mempertimbangkan kesiapan kognitif, kondisi fisik, sosial-emosional, serta bakat dan minat secara bersamaan.",
      "Sinta sebaiknya dikecualikan dari tugas konseptual karena memiliki kemampuan visual yang lebih menonjol.",
      "Andi perlu mengerjakan tugas yang lebih mudah karena hambatan visual menunjukkan kemampuan akademik yang lebih rendah."
    ],
    "answer": 2,
    "explanation": "Karakteristik peserta didik tidak dapat direduksi menjadi satu dimensi. Hambatan visual tidak sama dengan rendahnya kemampuan kognitif; kemampuan ilustrasi merupakan potensi yang dapat dimanfaatkan.",
    "source": "SOAL PPDP (UST)"
  },
  {
    "id": "ust-ppdp-06",
    "bank": "PU",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "topic": "PPDP & Perkembangan Peserta Didik (UST)",
    "prodiScope": "UMUM",
    "prompt": "Sebelum mengajarkan materi baru, guru melakukan asesmen diagnostik terhadap 30 peserta didik. Hasilnya: 9 telah menguasai prasyarat dengan baik; 10 mampu mengerjakan soal prosedural tetapi tidak mampu menjelaskan alasan; 7 menunjukkan miskonsepsi pada konsep prasyarat; dan 4 memahami pertanyaan ketika dijelaskan secara lisan tetapi mengalami kesulitan memahami instruksi tertulis panjang. Interpretasi dan tindak lanjut awal yang paling tepat adalah ....",
    "options": [
      "Hasil menunjukkan kebutuhan belajar yang berbeda sehingga guru perlu merancang pengayaan, penguatan pemahaman konseptual, remediasi miskonsepsi, dan dukungan akses terhadap instruksi sesuai kebutuhan masing-masing kelompok.",
      "Peserta didik yang gagal sebaiknya mengulang seluruh materi sebelumnya, sedangkan yang berhasil dapat langsung mengikuti tes akhir.",
      "Semua peserta didik harus menerima pengajaran yang sama karena materi yang akan dipelajari juga sama.",
      "Empat peserta didik terakhir termasuk kelompok berkemampuan rendah karena tidak mampu memahami instruksi tertulis.",
      "Nilai asesmen diagnostik harus dimasukkan ke nilai akhir agar peserta didik lebih serius mengerjakannya."
    ],
    "answer": 0,
    "explanation": "Asesmen diagnostik memetakan jenis kebutuhan: pengayaan, penguatan konseptual, perbaikan miskonsepsi, dan dukungan akses terhadap instruksi. Kesulitan membaca instruksi tidak otomatis menunjukkan kemampuan kognitif rendah.",
    "source": "SOAL PPDP (UST)"
  },
  {
    "id": "ust-ppdp-07",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "topic": "PPDP & Perkembangan Peserta Didik (UST)",
    "prodiScope": [
      "ipa"
    ],
    "prompt": "Seorang guru kelas VII melaksanakan pembelajaran tentang ekosistem. Berdasarkan hasil asesmen diagnostik, ditemukan bahwa peserta didik memiliki kemampuan awal yang beragam. Sebagian peserta didik sudah mampu menjelaskan hubungan antarkomponen ekosistem, sementara sebagian lainnya masih mengalami kesulitan membedakan komponen biotik dan abiotik. Selain itu, beberapa peserta didik lebih mudah memahami materi melalui gambar dan video, sedangkan peserta didik lainnya lebih menyukai kegiatan praktik langsung. Guru tersebut ingin memastikan bahwa seluruh peserta didik mencapai tujuan pembelajaran yang sama tanpa mengabaikan perbedaan karakteristik dan kebutuhan belajarnya. Tindakan pedagogis yang paling tepat dilakukan guru adalah ....",
    "options": [
      "Memberikan materi dan tugas yang sama kepada seluruh peserta didik agar tercipta kesetaraan dalam proses pembelajaran.",
      "Mengelompokkan peserta didik berdasarkan kemampuan akademik secara permanen dan memberikan materi yang berbeda sesuai kelompoknya.",
      "Merancang pembelajaran berdiferensiasi melalui variasi sumber belajar, aktivitas, dan tingkat dukungan berdasarkan kesiapan serta kebutuhan peserta didik, kemudian mengevaluasi perkembangannya secara berkala.",
      "Memprioritaskan peserta didik yang memiliki kemampuan akademik rendah dengan memberikan pembelajaran tambahan, sementara peserta didik lainnya belajar secara mandiri."
    ],
    "answer": 2,
    "explanation": "Permasalahan pada kasus menunjukkan adanya keragaman kesiapan belajar dan preferensi peserta didik. Oleh karena itu, guru perlu menerapkan pembelajaran berdiferensiasi dengan memperhatikan kebutuhan dan karakteristik masing-masing peserta didik. Pilihan C merupakan jawaban paling tepat karena guru tidak menyamaratakan proses belajar, tetapi tetap mengarahkan seluruh peserta didik untuk mencapai tujuan pembelajaran yang sama. Variasi sumber belajar, aktivitas, dan tingkat dukungan memungkinkan peserta didik memperoleh pengalaman belajar yang sesuai dengan kebutuhannya. Pembelajaran juga perlu dievaluasi secara berkala agar guru dapat menyesuaikan strategi berdasarkan perkembangan peserta didik. Mengapa pilihan lainnya kurang tepat? A: Mengabaikan keragaman kesiapan dan kebutuhan belajar peserta didik. B: Pengelompokan permanen berpotensi memberikan label kemampuan dan membatasi perkembangan peserta didik. D: Kurang memperhatikan kebutuhan peserta didik yang sudah menguasai materi karena mereka tidak memperoleh tantangan belajar yang sesuai.",
    "source": "SOAL PPDP (UST)"
  },
  {
    "id": "ust-ppdp-08",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "topic": "PPDP & Perkembangan Peserta Didik (UST)",
    "prodiScope": [
      "matematika",
      "pgsd"
    ],
    "prompt": "Dalam pembelajaran matematika tentang pecahan, seorang guru menemukan bahwa sebagian besar peserta didik memperoleh nilai tinggi pada tes akhir pembelajaran. Namun, ketika diberikan permasalahan kontekstual mengenai pembagian bahan makanan dalam kehidupan sehari-hari, banyak peserta didik tidak mampu menerapkan konsep pecahan yang telah dipelajari. Guru menyadari bahwa hasil tes sebelumnya belum sepenuhnya menggambarkan kemampuan pemahaman konseptual dan penerapan pengetahuan peserta didik. Guru ingin memperbaiki proses pembelajaran agar dapat mengidentifikasi kesulitan belajar dan memberikan intervensi yang tepat. Langkah paling tepat yang seharusnya dilakukan guru adalah ....",
    "options": [
      "Mengulang seluruh materi pecahan dari awal karena hasil penerapan kontekstual menunjukkan bahwa pembelajaran sebelumnya tidak berhasil.",
      "Melakukan asesmen formatif melalui permasalahan kontekstual, menganalisis pola kesalahan peserta didik, memberikan umpan balik spesifik, dan menyesuaikan strategi pembelajaran berdasarkan hasil asesmen.",
      "Memberikan tes tertulis dengan tingkat kesulitan lebih tinggi untuk membedakan peserta didik yang benar-benar memahami materi dan yang belum memahami materi.",
      "Memberikan tugas tambahan kepada seluruh peserta didik dan menggunakan nilai tugas tersebut sebagai dasar penilaian akhir pembelajaran."
    ],
    "answer": 1,
    "explanation": "Kasus tersebut menunjukkan adanya kesenjangan antara keberhasilan peserta didik dalam mengerjakan tes tertulis dan kemampuan mereka menerapkan konsep dalam kehidupan nyata. Guru tidak cukup hanya mengandalkan hasil tes akhir. Guru perlu melakukan asesmen formatif untuk memperoleh informasi mengenai proses pemahaman peserta didik selama pembelajaran berlangsung. Melalui asesmen berbasis masalah kontekstual, guru dapat mengidentifikasi kesulitan yang dialami peserta didik, menganalisis kesalahan pemahaman, memberikan umpan balik yang spesifik, dan memperbaiki strategi pembelajaran. Dengan demikian, asesmen tidak hanya berfungsi mengukur hasil belajar, tetapi juga menjadi dasar untuk meningkatkan kualitas proses pembelajaran. Mengapa pilihan lainnya kurang tepat? A: Mengulang seluruh materi tanpa terlebih dahulu menganalisis letak kesulitan peserta didik merupakan tindakan yang kurang efektif. C: Tes dengan tingkat kesulitan lebih tinggi belum tentu mampu mengidentifikasi penyebab kesulitan belajar. D: Pemberian tugas tambahan tanpa umpan balik dan analisis hasil asesmen tidak menjawab permasalahan utama.",
    "source": "SOAL PPDP (UST)"
  },
  {
    "id": "ust-ppdp-09",
    "bank": "PCK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.5",
    "topic": "PPDP & Perkembangan Peserta Didik (UST)",
    "prodiScope": [
      "ipa"
    ],
    "prompt": "Seorang guru IPA di daerah pesisir mengajarkan materi pencemaran lingkungan. Selama ini, pembelajaran lebih banyak dilakukan melalui penjelasan konsep dan pemberian tugas dari buku teks. Berdasarkan hasil refleksi pembelajaran, guru menemukan bahwa peserta didik mampu menghafalkan jenis-jenis pencemaran, tetapi belum mampu menganalisis permasalahan pencemaran yang terjadi di lingkungan tempat tinggal mereka. Di sekitar sekolah terdapat kawasan pantai yang mengalami permasalahan sampah plastik. Guru ingin mengembangkan pembelajaran yang lebih bermakna, mendorong kemampuan berpikir kritis, serta meningkatkan kepedulian peserta didik terhadap lingkungan. Strategi pembelajaran yang paling tepat untuk mencapai tujuan tersebut adalah ....",
    "options": [
      "Menugaskan peserta didik membaca berbagai referensi mengenai pencemaran lingkungan dan membuat rangkuman secara individu.",
      "Menayangkan video tentang pencemaran laut dari negara lain, kemudian meminta peserta didik mengerjakan soal berdasarkan isi video.",
      "Mengajak peserta didik melakukan pengamatan lingkungan pantai, mengidentifikasi sumber dan dampak pencemaran, menganalisis temuan secara berkelompok, serta merancang solusi yang dapat diterapkan dengan melibatkan masyarakat sekitar.",
      "Meminta peserta didik menghafalkan berbagai jenis pencemaran dan dampaknya, kemudian melakukan evaluasi tertulis pada akhir pembelajaran."
    ],
    "answer": 2,
    "explanation": "Pembelajaran yang bermakna tidak hanya menekankan penguasaan konsep secara teoritis, tetapi juga memberikan kesempatan kepada peserta didik untuk menghubungkan pengetahuan dengan permasalahan nyata di lingkungan mereka. Dalam kasus tersebut, kawasan pantai merupakan sumber belajar kontekstual yang dapat dimanfaatkan guru untuk mengembangkan kemampuan berpikir kritis, kolaborasi, pemecahan masalah, dan kepedulian lingkungan. Melalui kegiatan pengamatan langsung, peserta didik tidak hanya mengetahui konsep pencemaran, tetapi juga menganalisis penyebab dan dampaknya serta mengembangkan solusi berdasarkan kondisi lingkungan setempat. Strategi ini menjadikan peserta didik sebagai subjek aktif dalam pembelajaran dan mendorong pengalaman belajar yang berkesadaran, bermakna, serta menggembirakan. Mengapa pilihan lainnya kurang tepat? A: Rangkuman individu lebih menekankan penguasaan informasi daripada analisis masalah nyata. B: Video dapat menjadi sumber belajar, tetapi belum memberikan pengalaman investigasi langsung terhadap lingkungan peserta didik. D: Menghafal konsep dan mengerjakan tes tertulis belum cukup untuk mengembangkan kemampuan analisis dan pemecahan masalah kontekstual.",
    "source": "SOAL PPDP (UST)"
  }
];
