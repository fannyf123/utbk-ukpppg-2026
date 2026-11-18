import type { ExamQuestion } from '../types/exam';

/**
 * 14 Soal Tambahan PCK Teknik Mesin SMK (Gaya LMS PPG & 4 Kompetensi Guru 2026)
 */
export const PCK_MESIN_EXTRA: ExamQuestion[] = [
  {
    "id": "pck-ex-01",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Asesmen Awal Prasyarat Sebelum Praktik Bangku (P.6)",
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Sebelum memulai praktik kerja bangku pembuatan ulir dasar di kelas X, guru mengamati beberapa murid langsung memilih ukuran alat tanpa memahami konsep bahwa bagian dalam lubang harus menyisakan ruang untuk profil pengikatan. Tindakan perbaikan instruksional terbaik sebelum mengizinkan siswa mengebor benda kerja adalah ....",
    "options": [
      "Langsung memberikan sanksi pengurangan nilai praktik kepada seluruh siswa yang salah mengambil alat.",
      "Memfasilitasi demonstrasi peraga perbandingan antara bahan berulir rapat dan yang kebesaran agar murid menemukan sendiri akibat konseptualnya sebelum memilih ukuran alat.",
      "Menyuruh murid menyalin rumus pemilihan ukuran lubang dari papan tulis sebanyak lima belas kali.",
      "Membiarkan siswa melubangi benda kerja salah sampai alatnya patah agar menjadi pengalaman jera.",
      "Memasangkan semua peralatan kerja oleh guru agar siswa tinggal memutar alat di akhir."
    ],
    "answer": 1,
    "explanation": "Mengatasi miskonsepsi konsep sebelum eksekusi fisik melalui demonstrasi pembanding menumbuhkan pemahaman konseptual yang mencegah kesalahan fatal dan kerusakan bahan."
  },
  {
    "id": "pck-ex-02",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Growth Mindset & Umpan Balik Proses (K.2)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.2",
    "prompt": "Dalam kerja bangku kelas X, seorang murid kecewa karena alatnya tersendat lalu patah akibat ia terburu-buru memutar dengan paksa, hingga berujar, \"Tangan saya memang kasar, tidak bakal bisa sabar bekerja rapi.\" Respons guru paling tepat membangun pola pikir bertumbuh adalah ....",
    "options": [
      "\"Memang butuh ketenangan khusus; lain kali lihat temanmu saja dulu daripada merusak alat lagi.\"",
      "\"Alat patah itu wajar kalau kurang berbakat kerja bangku, fokus saja nanti ke pelajaran menggambar.\"",
      "\"Kejadian ini belum berhasil bukan karena bakat tanganmu, melainkan karena belum memberi jeda putar balik melepas tatal dan memeriksa pelumasan; mari latih ritme bertahap pada bahan latihan berikutnya.\"",
      "\"Kamu harus mengganti alat tersebut dengan uang saku supaya minggu depan lebih berhati-hati.\"",
      "\"Coba baca kembali tata tertib penggunaan alat bengkel dari halaman awal.\""
    ],
    "answer": 2,
    "explanation": "Pola pikir bertumbuh (K.2) memisahkan kejadian gagal sementara dari identitas diri (\"belum berhasil\" bukan \"tidak berbakat\") serta menunjuk perbaikan strategi konkret."
  },
  {
    "id": "pck-ex-03",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Pemahaman Sistem Kontrol Otomatis Kontekstual (PF.2)",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.2",
    "prompt": "Pada pembelajaran dasar sistem otomasi bertenaga udara dan fluida kelas XI, siswa mampu menyambung selang rangkaian mengikuti diagram contoh namun kebingungan ketika diminta merancang solusi sederhana untuk membuka pintu pagar pengaman secara berurutan. Strategi pengajaran paling tepat membangun transfer konseptual adalah ....",
    "options": [
      "Menyuruh murid menyalin sepuluh gambar diagram rangkaian standar dari papan tulis ke buku gambar.",
      "Membimbing murid menganalisis fungsi tiap komponen pengarah dalam bahasa alur sebab-akibat (\"jika sensor ditekan -> maka penggerak keluar\") menggunakan simulator digital sebelum merakit.",
      "Menghilangkan proyek perancangan baru dan hanya menguji perakitan ulang gambar contoh buku paket.",
      "Memberikan kuis cepat menghafal simbol-simbol grafis komponen dari modul cetak.",
      "Mengerjakan rancangan rangkaiannya oleh guru agar kelas segera lanjut ke bab kelistrikan."
    ],
    "answer": 1,
    "explanation": "Menerjemahkan diagram menjadi logika alur fungsi sebab-akibat dengan simulator interaktif membekali murid nalar merancang solusi baru (transfer belajar)."
  },
  {
    "id": "pck-ex-04",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Pembentukan Sikap Waspada K3 & Lingkungan Aman (K.3)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Kepribadian",
    "subkompetensi": "K.3",
    "prompt": "Saat mengawasi praktik sistem bertekanan di lab mekanik, guru melihat beberapa siswa mencoba memeriksa dugaan kebocoran selang saluran bertekanan tinggi menggunakan telapak tangan kosong sementara tekanan sistem masih aktif. Langkah edukatif dan konsisten keselamatan paling tepat dilakukan guru saat itu adalah ....",
    "options": [
      "Membiarkan selama belum terlihat semburan keras agar siswa belajar dari pengamatan langsung.",
      "Segera menghentikan sistem dengan tenang, menyelamatkan posisi tangan murid, lalu menjelaskan prinsip bahaya tekanan tersembunyi serta membiasakan metode pemeriksaan aman tak langsung (penurunan tekanan & media deteksi).",
      "Memarahi murid di hadapan seluruh kelas lalu mengeluarkan kelompok tersebut dari ujian semester.",
      "Menyuruh siswa mengenakan sarung tangan kain biasa agar tetap bisa meraba titik bocor dengan cepat.",
      "Menulis peringatan di grup pesan kelas sesudah jam sekolah selesai tanpa menghentikan praktik."
    ],
    "answer": 1,
    "explanation": "Guru konsisten mendahulukan keselamatan jiwa di bengkel melalui penghentian bahaya seketika secara tenang dan edukasi bermakna tentang prinsip risiko serta pemeriksaan tak langsung aman."
  },
  {
    "id": "pck-ex-05",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Scaffolding Bertahap & Pencegahan Kebergantungan (P.1)",
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "Dalam praktik pengeboran lubang berdiameter besar pada benda logam di mesin bor kolom, banyak siswa pemula langsung tergesa memakai mata bor ukuran akhir sehingga mesin bergetar keras dan benda kerja terlepas memutar. Pendekatan pembelajaran berbasis pemahaman prinsip yang paling tepat adalah ....",
    "options": [
      "Meminta siswa menghafal aturan urutan ukuran bor dari papan pengumuman lalu menandatangani surat pernyataan.",
      "Membimbing murid menguji alasan beban potong bertahap lewat demonstrasi peraga sederhana (pengeboran berawal ukuran kecil menuju besar) agar mereka paham fungsi pemusatan & pelepasan beban.",
      "Melarang siswa mengebor sendiri dan menyerahkan seluruh pengeboran besar kepada petugas bengkel.",
      "Menyuruh siswa memegang benda kerja lebih erat dengan kedua tangan tanpa alat penjepit ragum.",
      "Memberikan nilai rendah secara langsung tiap kali mata bor mengeluarkan bunyi bergetar."
    ],
    "answer": 1,
    "explanation": "Pembelajaran konseptual menyingkap alasan ilmiah di balik prosedur bertahap dan penjepitan aman (mengurangi beban pusat & momen puntir), bukan sekadar aturan hafalan."
  },
  {
    "id": "pck-ex-06",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Etika Pelaporan Kendala Alat & Kolaborasi Tendik (S.2)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Sosial",
    "subkompetensi": "S.2",
    "prompt": "Seorang murid melaporkan merasakan getaran aliran listrik ringan saat menyentuh bodi logam salah satu mesin perkakas di bengkel. Tindakan guru yang paling mencerminkan tanggung jawab keselamatan, etika profesional, dan kolaborasi sekolah adalah ....",
    "options": [
      "Meminta murid tersebut memakai sepatu berbahan tebal saja lalu tetap melanjutkan uji praktik.",
      "Segera menonaktifkan aliran daya unit tersebut, memasang penanda peringatan aman, mengapresiasi kepedulian murid, serta berkoordinasi dengan teknisi/tenaga kependidikan sarana bengkel untuk pemeriksaan.",
      "Menyuruh murid pindah ke mesin sebelah dan mencatat keluhannya di akhir bulan saja.",
      "Menganggap hal itu hanya listrik statis ringan karena udara bengkel sedang kering.",
      "Memerintahkan murid membongkar sendiri panel listrik mesin guna melatih kemandirian perbaikan."
    ],
    "answer": 1,
    "explanation": "Kolaborasi pendidik, murid, dan tenaga kependidikan sarana menjaga ruang praktik tetap aman dengan mengisolasi unit berisiko segera serta melibatkan petugas berwenang."
  },
  {
    "id": "pck-ex-07",
    "bank": "PCK",
    "topic": "K3LH & Teaching Factory",
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.4",
    "prompt": "Dalam pengenalan strategi perawatan mesin perkakas (Maintenance Strategy) kelas XII, siswa membedakan perawatan reaktif (Breakdown), terjadwal berkala (Preventive), dan berbasis kondisi getaran/oli/suhu (Predictive / PdM). Contoh penerapan Preventive & Autonomous Maintenance harian yang paling relevan dibiasakan pada siswa operator bengkel sekolah adalah ....",
    "options": [
      "Menunggu sampai gearbox mesin bubut berbunyi keras dan gigi rontok baru melapor.",
      "Melaksanakan pemeriksaan awal pra-operasi (cek level kaca oli spindel/apron, kebersihan bedways bebas geram kasar, pengetesan gerak halus eretan, pelumasan slideway melalui pompa/nipple oil, dan pencatatan log harian mesin sebelum/sesudah dipakai).",
      "Membongkar total seluruh isi headstock transmisi setiap akhir jam pelajaran praktik.",
      "Membiarkan tatal baja halus menumpuk berkarat bersama air pendingin di atas meja mesin frais.",
      "Mengganti oli pelumas mesin dengan minyak goreng bekas kantin."
    ],
    "answer": 1,
    "explanation": "Perawatan mandiri operator (Autonomous Maintenance / TPM) dan Preventive harian melibatkan inspeksi level pelumas, pembersihan landasan mesin (ways) sebelum menggeser eretan agar tidak tergores geram, dan pelumasan rutin harian guna menjaga presisi mesin jangka panjang."
  },
  {
    "id": "pck-ex-08",
    "bank": "PCK",
    "topic": "Pemesinan Bubut, Frais & Gerinda",
    "pckFocus": "Asesmen Otentik",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Saat ujian praktik kerja bangku dasar kelas X (mengikir rata, siku, dan sejajar sepotong balok benda kerja baja memakai kikir tangan dan gergaji besi), beberapa siswa menghabiskan energi dengan memegang ujung kikir sembarangan dan menarik dengan tekanan penuh ke belakang maupun ke depan. Aspek psikomotor spesifik apa yang perlu dinilai serta dikoreksi guru lewat umpan balik formatif?",
    "options": [
      "Menyuruh siswa mengikir mundur lebih keras lagi supaya gigi kikir cepat menempel.",
      "Mengamati dan menilai postur kaki sejajar ergonomis, gerakan dorong lurus stabil menekan hanya pada LANGKAH MAJU (forward stroke) dan mengangkat/melepas tekanan saat langkah balik (karena gigi kikir dipotong miring maju-menekan saat mundur menumpulkan mata potong), serta memeriksa kerataan dengan pisau perata/mistar rambut (straight edge) terhadap celah cahaya dan kesikuan 90° secara bertahap.",
      "Hanya menimbang balok besi akhir tanpa pernah melihat posisi tangan maupun kerataan bidang.",
      "Mengizinkan siswa diam-diam mengamplas balok di mesin gerinda bangku lalu mengaku hasil kikir.",
      "Memilih daun gergaji dengan gigi menghadap ke belakang (tarik) padahal gagang didesain dorong."
    ],
    "answer": 1,
    "explanation": "Keterampilan dasar kikir melibatkan efisiensi ergonomi tubuh, tekanan hanya saat langkah maju, teknik cross-filing & draw-filing, dan verifikasi siklis menggunakan straight edge (celah sinar) & penyiku 90°."
  },
  {
    "id": "pck-ex-09",
    "bank": "PCK",
    "topic": "Gambar Teknik, Proyeksi & CAD",
    "pckFocus": "Media/ICT & Simulator",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "prompt": "Siswa kelas XI mengalami kesulitan memahami hubungan ukuran antar-elemen saat merancang rakitan poros–bantalan–puli–pasak di CAD 3D (top-down vs bottom-up assembly) karena selalu gagal memasang komponen ketika lubang dan diameter tidak sinkron. Pendekatan terstruktur berbasis fitur CAD modern yang paling tepat diajarkan guru adalah ....",
    "options": [
      "Membiarkan siswa menggambar tiap part dengan angka acak lalu memaksa pasaknya dipotong manual dengan extrude cut sembarang.",
      "Melatih pemanfaatan tabel/variabel parameter global atau desain master sketch/referensi bersama (dan konvensi lubang standar Toolbox/ISO fastener) agar bila diameter poros diubah dari Ø20 ke Ø25 mm, lubang puli, alur pasak, dan bantalan ikut menyesuaikan konsisten sesuai standar.",
      "Menghapus seluruh penggunaan lubang pasak dari desain assembly siswa.",
      "Menjadikan file JPG foto katalog sebagai pengganti model 3D komponen.",
      "Menyuruh siswa menggambar seluruh komponen mesin menempel menjadi satu solid body tunggal (multi-part merged) agar tidak perlu assembly mate."
    ],
    "answer": 1,
    "explanation": "Mengelola keterkaitan ukuran antar-part melalui master sketch, global variables, atau komponen standar ISO membantu siswa memahami \"design intent\" (niat desain parametrik) di dunia rekayasa manufaktur."
  },
  {
    "id": "pck-ex-10",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Bermakna (Ausubel) & Penghubungan Pengetahuan Awal (P.1)",
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "Berdasarkan teori belajar bermakna David Ausubel, murid kelas X sulit memahami sifat campuran berbagai jenis bahan teknik apabila diajarkan sebagai daftar unsur terisolasi yang dihafalkan begitu saja. Langkah Advance Organizer yang paling efektif sebelum masuk topik tersebut adalah ....",
    "options": [
      "Langsung membagikan kuis pilihan ganda hafalan unsur kimia sebelum menyapa kelas.",
      "Menampilkan peta konsep awal yang menghubungkan benda-benda akrab (seperti peralatan dapur tahan karat vs perkakas potong kuat vs komponen ringan kendaraan) dengan ide besar penguatan sifat bahan.",
      "Meminta seluruh siswa membaca keras-keras halaman glosarium buku teknik secara bergantian.",
      "Memberikan tugas meringkas tabel periodik unsur kimia sepanjang pelajaran berlangsung.",
      "Mengadakan permainan lempar bola tebak singkatan nama logam tanpa penjelasan konteks."
    ],
    "answer": 1,
    "explanation": "Advance Organizer Ausubel menyediakan kerangka pengait konseptual awal yang mengaitkan pengetahuan sehari-hari murid dengan gagasan baru yang lebih spesifik."
  },
  {
    "id": "pck-ex-11",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Evaluasi Pemahaman Konsep & Aplikasi Lokal (P.5)",
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.5",
    "prompt": "Guru Teknik Mesin mengajar topik Sistem Penggerak dan Pemindahan Daya di SMK daerah agraris. Tentukan ketepatan penerapan pembelajaran berbasis lingkungan sekitar berikut (Tepat / Kurang Tepat).",
    "categories": [
      "Tepat",
      "Kurang Tepat"
    ],
    "statements": [
      {
        "text": "Menggunakan contoh nyata peralatan mekanis lingkungan sekitar seperti alat perontok hasil panen atau pompa irigasi sebagai konteks penyelidikan prinsip transmisi daya.",
        "answer": 0
      },
      {
        "text": "Menilai karya murid dengan mempertimbangkan kesesuaian solusi rancangan terhadap kemudahan perawatan bagi masyarakat pengguna lokal.",
        "answer": 0
      },
      {
        "text": "Mengabaikan seluruh mesin sederhana daerah sekitar dan hanya membahas robot manufaktur mahal yang tidak pernah dijumpai siswa.",
        "answer": 1
      },
      {
        "text": "Meminta murid menghafalkan istilah komponen impor tanpa membahas fungsi nyatanya pada alat bantu lokal.",
        "answer": 1
      }
    ],
    "explanation": "Subkompetensi P.5 menekankan pemanfaatan sumber belajar sekitar dan konteks lokal agar ilmu kejuruan terasa dekat, relevan, dan aplikatif."
  },
  {
    "id": "pck-ex-12",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Asesmen Reflektif & Penilaian Sejawat (P.6)",
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Dalam rangka menerapkan Assessment as Learning (AaL) pada proyek perakitan dan perawatan mesin kelas XI Teknik Mesin, tentukan apakah pernyataan berikut Sesuai atau Tidak Sesuai.",
    "categories": [
      "Sesuai",
      "Tidak Sesuai"
    ],
    "statements": [
      {
        "text": "Murid menggunakan daftar cek kriteria mutu mandiri selama proyek berlangsung untuk memeriksa kemajuan kerjanya dan memutuskan bagian mana yang perlu diperbaiki.",
        "answer": 0
      },
      {
        "text": "Umpan balik teman sejawat dipandu rubrik santun guna membantu rekan menemukan celah kelonggaran atau keselamatan sebelum penilaian guru.",
        "answer": 0
      },
      {
        "text": "Penilaian diri dipakai sebagai nilai final tunggal rapor tanpa verifikasi pengamatan guru sehingga murid memberi skor serba sempurna pada dirinya sendiri.",
        "answer": 1
      },
      {
        "text": "Seluruh kriteria rubrik disembunyikan oleh guru agar hanya guru yang mengetahui standar kelulusan proyek.",
        "answer": 1
      }
    ],
    "explanation": "Assessment as Learning melatih metakognisi dan regulasi diri murid melalui evaluasi diri serta peer-review berpanduan rubrik transparan."
  },
  {
    "id": "pck-ex-13",
    "bank": "PCK",
    "topic": "PCK Teknik Mesin · Komunikasi Empatik & Pendidikan Inklusif (S.1)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi LMS PPG & 4 Kompetensi Guru 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Sosial",
    "subkompetensi": "S.1",
    "prompt": "Pada pembelajaran Teknik Mesin di bengkel inklusif, guru perlu memastikan pesan instruksi keselamatan dan alur praktik diterima utuh oleh seluruh murid, termasuk murid berhambatan pendengaran serta murid dari latar bahasa daerah berbeda. Langkah komunikasi efektif yang PALING tepat meliputi .... (Pilih semua yang benar)",
    "options": [
      "Menyajikan instruksi inti melalui kombinasi penjelasan lisan menghadap kelas (tidak membelakangi murid), peragaan langkah konkret, serta kartu visual bergambar jelas.",
      "Menghindari istilah jargon asing berbelit-belit tanpa padanan sederhana saat memberi pengarahan awal agar tidak membingungkan murid.",
      "Mengecek keterpahaman instruksi lewat permintaan peragaan balik atau diskusi singkat sebelum menyalakan peralatan.",
      "Berbicara semakin cepat dan keras di tengah suara mesin menyala agar murid berhambatan mendengar tetap fokus.",
      "Menyerahkan penyampaian informasi keselamatan kerja khusus kepada teman sebangku sambil menyuruh guru fokus ke siswa mahir."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Komunikasi inklusif, empatik, dan efektif (S.1) mengutamakan aksesibilitas pesan lisan-visual-peragaan, bahasa jelas, serta konfirmasi pemahaman sebelum praktik berisiko."
  },
  {
    "id": "pck-ex-14",
    "bank": "PCK",
    "topic": "K3LH & Teaching Factory",
    "pckFocus": "Metode Pengajaran",
    "source": "Bank PCK Teknik Mesin SMK",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.5",
    "prompt": "Sebagai calon guru profesional Teknik Mesin di abad ke-21 yang mengajar generasi Z/Alpha di SMK dengan beragam kesiapan belajar dan keterbatasan fasilitas fisik bengkel di sebagian sekolah mitra, strategi pembelajaran fleksibel-mandiri mana saja yang memperkuat kemandirian kompetensi vokasional murid? (Pilih lebih dari satu)",
    "options": [
      "Menyediakan modul mikro-pembelajaran & simulator interaktif berbasis web (pembacaan mikrometer/vernier, CAD sketch-to-3D, pengenalan simbol gambar & CNC toolpath) agar siswa dapat berlatih konsep dan prosedur kapan pun serta di mana pun sebelum jam bengkel nyata.",
      "Mewajibkan uji pemahaman konseptual dan keselamatan pra-bengkel secara digital/singkat agar jam mesin berkapasitas terbatas fokus dipakai untuk penyayatan presisi dan umpan balik keterampilan psikomotor.",
      "Membangun komunitas belajar sejawat di kelas (peer tutor) dengan rubrik checklist verifikasi bersama untuk mengasah komunikasi teknis dan kepemimpinan bengkel.",
      "Melarang siswa mengakses sumber belajar digital apa pun di luar jam tatap muka ruang praktik.",
      "Menggantikan seluruh jam kerja mesin bubut dan las hingga kelas XII penuh hanya dengan slide ceramah."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Memadukan latihan fleksibel kapan saja/di mana saja (simulator konseptual & K3LH prapraktik) dengan optimalisasi jam bengkel nyata dan peer-verification menjawab tantangan keterbatasan mesin fisik tanpa mengurangi mutu psikomotor."
  }
];
