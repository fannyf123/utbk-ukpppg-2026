import type { ExamQuestion } from '../types/exam';

/**
 * Kurasi 16 soal PCK/SJT UKOM & UKPPPG dari penelusuran referensi edukasi publik
 * (Tirto, Defantri, Studiku, Slideshare, Scribd) yang seluruhnya diaudit agar
 * memenuhi Kisi-Kisi Juknis UKPPPG 2026 (Lampiran 4 P.1-PF.5 & 3 format BPPP).
 */
export const WEB_CURATED_EXTRAS: ExamQuestion[] = [
  // === IPA (3 butir PF.2/PF.3 miskonsepsi & eksperimen sains) ===
  {
    id: 'web-ipa-01',
    bank: 'PCK',
    topic: 'PCK IPA · Fotosintesis & Miskonsepsi Sains',
    prodiScope: ['ipa'],
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Kurasi Referensi UKOM/UKPPPG IPA',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Ibu Sayuti merancang praktikum fotosintesis memakai perangkat percobaan Ingenhousz pada tanaman Hydrilla. Ia mendapati sebagian besar siswa keliru menganggap gelembung udara yang muncul di tabung semata-mata hasil respirasi tumbuhan, bukan fotosintesis. Strategi pembelajaran berbasis PCK yang paling tepat untuk meluruskan miskonsepsi tersebut adalah ....',
    options: [
      'Meminta siswa membaca kembali buku teks biologi bab metabolisme lalu merangkum reaksi kimia respirasi.',
      'Membimbing siswa merangkai percobaan Ingenhousz secara kelompok, memvariasikan intensitas cahaya (tempat teduh vs cahaya terang), lalu menguji gas tertampung memakai lidi membara.',
      'Menuliskan persamaan reaksi kimia fotosintesis di papan tulis secara rinci tanpa melakukan percobaan lab.',
      'Melakukan demonstrasi tunggal guru di depan kelas sementara siswa cukup mencatat perubahan warna air.',
      'Memberikan tugas rumah berisi 30 soal pilihan ganda hafalan tentang reaksi terang dan reaksi gelap.',
    ],
    answer: 1,
    explanation:
      'Meluruskan miskonsepsi sains paling efektif dilakukan lewat pembuktian empiris inkuiri: membandingkan laju gelembung di tempat gelap vs terang sekaligus menguji gas dengan lidi membara yang kembali menyala terang sebagai bukti pelepasan gas O2 hasil fotosintesis.',
  },
  {
    id: 'web-ipa-02',
    bank: 'PCK',
    topic: 'PCK IPA · Fisika Hukum Newton & Konflik Kognitif',
    prodiScope: ['ipa'],
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Kurasi Referensi UKOM/UKPPPG IPA',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Seorang guru Fisika/IPA SMP menemukan mayoritas peserta didik beranggapan bahwa benda bergerak pasti selalu sedang didorong gaya searah geraknya, dan bila dorongan berhenti maka benda otomatis langsung berhenti seketika. Tindakan awal berbasis PCK yang paling tepat untuk mengatasi hambatan konseptual ini adalah ....',
    options: [
      'Memberikan sanksi latihan tambahan bagi siswa yang salah menjawab definisi Hukum Newton.',
      'Mengabaikan anggapan awal siswa karena rumus gerak akan otomatis membenarkannya di kelas lanjut.',
      'Merancang demonstrasi konflik kognitif dengan meluncurkan benda di atas lintasan datar sangat licin (minim gesekan) untuk menunjukkan benda tetap melaju meski dorongan awal telah berakhir.',
      'Meminta siswa menyalin ulang bunyi Hukum I, II, dan III Newton sepuluh kali di buku catatan.',
      'Mengalihkan pembelajaran ke bab optik terlebih dahulu karena dianggap lebih mudah dihafal.',
    ],
    answer: 2,
    explanation:
      'Konflik kognitif menantang intuisi keliru Aristotelian murid lewat pengalaman pengamatan langsung (lintasan air-track / permukaan minim gesekan) sehingga siswa merekonstruksi sendiri konsep inersia/kelembaman Hukum I Newton.',
  },
  {
    id: 'web-ipa-03',
    bank: 'PCK',
    topic: 'PCK IPA · Representasi Data Eksperimen Kimia',
    prodiScope: ['ipa'],
    pckFocus: 'Asesmen Otentik',
    source: 'Kurasi Referensi UKOM/UKPPPG IPA',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Bu Nia merancang eksperimen sederhana membandingkan perubahan fisika (memanaskan es batu) dan perubahan kimia (membakar secarik kertas) agar siswa terlatih mengubah data pengamatan konkret menjadi representasi data analitis. Bentuk representasi data paling tepat yang diharapkan disusun siswa setelah percobaan adalah ....',
    options: [
      'Esai panjang mengenai biografi tokoh sejarah ilmu kimia klasik.',
      'Tabel komparasi ciri perubahan (wujud, warna, pembentukan zat baru, sifat reversibilitas) disertai bukti indra pengamatan antara es dipanaskan dan kertas dibakar.',
      'Persamaan diferensial laju perambatan kalor pada bahan selulosa.',
      'Hafalan definisi teks perubahan fisika vs kimia tanpa menyertakan hasil pengamatan praktik.',
      'Sketsa bebas tanpa keterangan variabel pengamatan.',
    ],
    answer: 1,
    explanation:
      'PCK IPA melatih keterampilan proses sains mengubah observasi konkret menjadi representasi tabel komparasi terstruktur agar siswa menarik simpulan perbedaan perubahan fisika dan reaksi kimia dari bukti empiris.',
  },

  // === BAHASA INGRIS (3 butir PCK/SJT) ===
  {
    id: 'web-ing-01',
    bank: 'PCK',
    topic: 'PCK Bahasa Inggris · Argumentative Speaking Assessment',
    prodiScope: ['bahasa-inggris'],
    pckFocus: 'Asesmen Otentik',
    source: 'Kurasi Referensi UKOM/UKPPPG B. Inggris',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Seorang guru Bahasa Inggris ingin menerapkan asesmen autentik untuk mengevaluasi keterampilan berbicara (speaking) sekaligus berpikir kritis (critical thinking) siswa setelah mempelajari teks argumentatif (analytical exposition). Aktivitas penilaian autentik manakah yang paling tepat dipilih guru?',
    options: [
      'Meminta siswa menghafal dan membacakan ulang teks dialog pendek berpasangan tanpa mengubah isi argumen.',
      'Mengadakan latihan meringkas paragraf secara tertulis individu di akhir jam pelajaran.',
      'Menugaskan siswa mempresentasikan dan mempertahankan sudut pandang berbeda (pro vs kontra berbasis bukti teks) mengenai isu pada teks argumentatif melalui diskusi terbuka.',
      'Memberikan ulangan pilihan ganda 20 butir tentang definisi generic structure teks eksposisi.',
      'Menugaskan siswa menerjemahkan seluruh teks kata demi kata memakai kamus.',
    ],
    answer: 2,
    explanation:
      'Esensi argumentative text adalah menimbang posisi dan alasan dari berbagai sudut pandang. Mempresentasikan serta mendiskusikan perspektif berbeda melatih speaking komunikatif sekaligus HOTS critical thinking secara autentik.',
  },
  {
    id: 'web-ing-02',
    bank: 'PCK',
    topic: 'PCK Bahasa Inggris · Recount Inclusive Differentiation',
    prodiScope: ['bahasa-inggris'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Referensi UKOM/UKPPPG B. Inggris',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Dalam kelas menyimak dan berbicara materi Recount Text yang memiliki keberagaman tinggi (termasuk peserta didik dengan hambatan berbahasa Inggris, kesulitan belajar ringan, serta latar budaya beragam), pendekatan pengorganisasian pembelajaran mana yang paling tepat diprioritaskan guru?',
    options: [
      'Menerapkan rencana pembelajaran kaku dengan kecepatan seragam agar seluruh kelas selesai tepat menit yang sama.',
      'Mengandalkan ceramah tata bahasa (grammar lecturing) satu arah sepanjang sesi.',
      'Menerapkan pembelajaran berdiferensiasi berbantuan scaffolding bertahap, pengatur grafis alur kejadian visual (story map/timeline), serta topik pengalaman personal yang relevan secara budaya.',
      'Memisahkan siswa yang kesulitan berbahasa ke kelas lain agar tidak memperlambat siswa yang fasih.',
      'Menilai seluruh siswa hanya lewat tes dikte kosa kata sulit tanpa bantuan konteks.',
    ],
    answer: 2,
    explanation:
      'Pembelajaran Bahasa Inggris inklusif memadukan diferensiasi instruksional (UDL/CRT): visualisasi kerangka urutan kejadian (scaffolding), pilihan topik recount yang dekat budaya murid, dan dukungan bertahap sebelum presentasi lisan.',
  },
  {
    id: 'web-ing-03',
    bank: 'PCK',
    topic: 'PCK Bahasa Inggris · Mengatasi Kecemasan Berbicara',
    prodiScope: ['bahasa-inggris'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Referensi UKOM/UKPPPG B. Inggris',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Saat sesi praktik speaking Bahasa Inggris, seorang siswa bernama Dani terus terdiam dan menolak tampil presentasi kelompok karena cemas ditertawakan teman apabila salah tata bahasa (grammar anxiety). Tindakan paling edukatif dan berpusat pada murid yang dilakukan guru adalah ....',
    options: [
      'Memaksa Dani segera berbicara di depan papan tulis saat itu juga supaya rasa takutnya langsung hilang.',
      'Membebaskan Dani dari seluruh nilai keterampilan berbicara hingga akhir semester.',
      'Berdialog secara empatik berdua dengan Dani, menyepakati budaya kelas anti-ejekan, serta memberi scaffolding bertahap mulai dari latihan rekaman audio pribadi atau kelompok kecil berpasangan sebelum tampil di forum kelas.',
      'Mengabaikan Dani dan hanya menilai murid yang aktif mengacungkan tangan.',
      'Mengurangi nilai sikap Dani secara permanen di depan teman-temannya.',
    ],
    answer: 2,
    explanation:
      'Menciptakan iklim aman psikologis (P.3) untuk mengatasi foreign language speaking anxiety dilakukan lewat validasi empatik, kesepakatan anti-bullying kesalahan berbahasa, dan scaffolding bertingkat (low-stakes rehearsal -> peer pair -> kelas).',
  },

  // === PJOK (3 butir PCK/SJT UKOM PJOK) ===
  {
    id: 'web-pjok-01',
    bank: 'PCK',
    topic: 'PCK PJOK · Modifikasi Bola & Teknik Passing',
    prodiScope: ['pjok'],
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Kurasi Referensi UKOM/UKPPPG PJOK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Saat mengajar passing bawah bola voli di kelas VII SMP, guru mendapati sebagian besar siswa meluruskan siku secara kaku dan takut sakit terkena pantulan bola standar sehingga arah bola tidak terkontrol. Tindakan PCK yang paling tepat diterapkan guru PJOK adalah ....',
    options: [
      'Memarahi siswa agar menahan rasa sakit di lengan dan langsung mengulang servis cepat.',
      'Memodifikasi bola menggunakan bola plastik/busa lebih ringan (atau latihan pantul berpasangan terpandu) lalu memperbaiki posisi bidang perkenaan lengan bawah dan sudut ayunan dorong.',
      'Mengganti seluruh sesi praktik lapangan dengan menyalin ukuran lapangan bola voli dari buku cetak.',
      'Meminta siswa terus melakukan 100 kali passing tanpa mengoreksi posisi lengan.',
      'Hanya melatih siswa tim ekstrakurikuler sekolah dan meminta siswa lain duduk menonton.',
    ],
    answer: 1,
    explanation:
      'Modifikasi peralatan (bola lebih ringan/lunak) mengurangi rasa takut nyeri (afektif) sekaligus memberi ruang fokus memperbaiki biomekanika bidang perkenaan lengan bawah dan ayunan bahu (psikomotorik-kognitif).',
  },
  {
    id: 'web-pjok-02',
    bank: 'PCK',
    topic: 'PCK PJOK · Inklusi Senam Lantai',
    prodiScope: ['pjok'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Referensi UKOM/UKPPPG PJOK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Pada materi praktik guling depan (forward roll) senam lantai, seorang siswa berbadan sangat gemuk merasa cemas cedera leher sekaligus takut ditertawakan rekan sekelas sehingga menolak berlatih. Langkah inklusif dan aman yang paling tepat diambil guru PJOK adalah ....',
    options: [
      'Memaksa siswa tersebut mencoba di urutan pertama tanpa modifikasi agar keberaniannya teruji.',
      'Membiarkan siswa tersebut duduk di pinggir lapangan sepanjang semester dengan nilai minimal.',
      'Menegakkan norma saling menghormati di kelas, menyiapkan modifikasi bidang miring/matras bertingkat yang membantu momentum guling aman, memberikan bantuan penumpuan khusus (spotting), atau opsi variasi koordinasi keseimbangan aman sesuai kesiapan fisik.',
      'Mengganti guling depan dengan lari cepat 400 meter berulang kali bagi seluruh siswa.',
      'Menjanjikan hadiah uang saku apabila ia bersedia melakukannya sendirian disorot seluruh kelas.',
    ],
    answer: 2,
    explanation:
      'Pembelajaran PJOK adaptif dan aman melindungi martabat psikologis (anti-body shaming), keselamatan servikal (spotting & bidang miring), serta memberi scaffolding tugas gerak bermakna.',
  },
  {
    id: 'web-pjok-03',
    bank: 'PCK',
    topic: 'PCK PJOK · Manajemen Stasiun & Keterbatasan Alat',
    prodiScope: ['pjok'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Referensi UKOM/UKPPPG PJOK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Sekolah hanya memiliki 2 buah matras senam untuk 34 siswa dalam jam praktik PJOK sehingga jika dilakukan satu per satu secara bergiliran, siswa banyak menganggur dan waktu aktif gerak (Academic Learning Time-PE) sangat rendah. Solusi pengelolaan praktik paling efektif yang dilakukan guru adalah ....',
    options: [
      'Meminta siswa iuran wajib membeli 10 matras baru terlebih dahulu sebelum belajar.',
      'Menghapus materi kebugaran dan senam lantai sepanjang semester.',
      'Mengorganisasi pembelajaran berbasis stasiun/sirkuit (circuit stations) paralel: pos matras untuk teknik inti bergilir cepat didampingi pos lain tanpa matras (kelentukan, koordinasi, penguatan otot inti, serta umpan balik berpasangan).',
      'Membiarkan seluruh 34 siswa berbaris menunggu satu antrean panjang di depan satu matras.',
      'Memindahkan kegiatan menjadi ujian tertulis definisi senam lantai.',
    ],
    answer: 2,
    explanation:
      'Pembelajaran model stasiun / circuit stations dengan tutor sebaya mengoptimalkan waktu aktif bergerak (ALT-PE) bagi seluruh kelas meski sarana matras sekolah terbatas.',
  },

  // === IPS (4 butir PCK Geografi, Ekonomi, Sejarah, IPS Terpadu) ===
  {
    id: 'web-ips-01',
    bank: 'PCK',
    topic: 'PCK IPS · Geografi Vulkanisme & Miskonsepsi',
    prodiScope: ['ips'],
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Kurasi Referensi UKOM/UKPPPG IPS',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Guru Geografi kelas X akan mengajarkan dinamika litosfer tentang vulkanisme. Asesmen awal mengungkap mayoritas siswa beranggapan wilayah gunung api mutlak selalu merugikan dan miskin potensi ekonomi. Strategi PCK paling tepat untuk membangun pemahaman berimbang siswa adalah ....',
    options: [
      'Meminta siswa menghafalkan daftar seluruh nama gunung api di Indonesia beserta ketinggiannya.',
      'Mengajak siswa memetakan serta menganalisis sebaran kawasan pertanian subur hortikultura, geothermal, dan pariwisata di lereng gunung berapi sekaligus mengaitkannya dengan pelapukan mineral vulkanik dan mitigasi risiko bencana.',
      'Hanya menayangkan berita dampak kerusakan letusan agar siswa berhati-hati.',
      'Memberikan tugas menyalin bab batuan beku dari buku paket tanpa diskusi.',
      'Membagikan 40 soal hafalan nama-nama tipe letusan gunung api.',
    ],
    answer: 1,
    explanation:
      'Memadukan peta data komoditas pertanian/energi lokal dan kajian mitigasi melatih analisis geografi spasial berimbang sekaligus meluruskan miskonsepsi satu sisi tentang fenomena vulkanisme.',
  },
  {
    id: 'web-ips-02',
    bank: 'PCK',
    topic: 'PCK IPS · Simulasi Pasar & Titik Keseimbangan Ekonomi',
    prodiScope: ['ips'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Referensi UKOM/UKPPPG IPS',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Ketika mengajarkan terbentuknya harga keseimbangan (market equilibrium), guru Ekonomi mendapati banyak siswa bingung memaknai titik potong kurva permintaan dan penawaran secara abstrak. Aktivitas experiential learning paling efektif menjembatani konsep tersebut adalah ....',
    options: [
      'Menugaskan siswa menggambar ulang kurva keseimbangan dari buku ke kertas grafik sebanyak 5 kali.',
      'Mengadakan simulasi tawar-menawar pasar kelas (sebagian siswa memegang kartu anggaran pembeli, sebagian memegang kartu biaya produksi penjual), mencatat harga transaksi yang terjadi, lalu memplot datanya bersama menjadi kurva permintaan-penawaran.',
      'Langsung memberikan puluhan persamaan aljabar sistem linear permintaan dan penawaran untuk diselesaikan cepat.',
      'Menyuruh siswa membaca sendiri pengertian keseimbangan pasar dari halaman glosarium.',
      'Menayangkan definisi elastisitas harga lewat salindia penuh teks tanpa simulasi.',
    ],
    answer: 1,
    explanation:
      'Role-play / market experiment kelas menjembatani mekanisme tawar-menawar nyata dengan representasi grafik kurva permintaan-penawaran sehingga rumus dan titik potong equilibrium dipahami bermakna.',
  },
  {
    id: 'web-ips-03',
    bank: 'PCK',
    topic: 'PCK IPS · Sejarah HOTS Cultuurstelsel vs Landrent',
    prodiScope: ['ips'],
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Kurasi Referensi UKOM/UKPPPG IPS',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Guru Sejarah merancang pembelajaran topik "Dampak Kebijakan Ekonomi Kolonial terhadap Masyarakat Nusantara" untuk mengembangkan berpikir kritis (critical historical thinking) alih-alih sekadar menghafal angka tahun. Desain model dan aktivitas yang paling sesuai adalah ....',
    options: [
      'Direct instruction menuliskan garis waktu urutan nama seluruh Gubernur Jenderal Hindia Belanda untuk dihafalkan.',
      'Problem-Based Learning membandingkan bukti arsip sistem Sewa Tanah (Landrent) dan Tanam Paksa (Cultuurstelsel) lalu menganalisis mekanisme beban kerja paksa petani, perubahan struktur agraria, dan pelajarannya bagi kedaulatan ekonomi kini.',
      'Menyalin ringkasan buku sejarah empat halaman penuh selama jam pelajaran.',
      'Kuis cepat menebak tanggal kedatangan setiap armada dagang Eropa.',
      'Menilai siswa hanya dari kerapian warna sampul kliping foto kolonial.',
    ],
    answer: 1,
    explanation:
      'PBL Sejarah membandingkan dua rezim kebijakan ekonomi kolonial berbasis bukti sumber untuk menimbang sebab-akibat struktural dan makna kekiniannya bagi peserta didik.',
  },
  {
    id: 'web-ips-04',
    bank: 'PCK',
    topic: 'PCK IPS · Alih Fungsi Lahan & Indikator Multidimensi',
    prodiScope: ['ips'],
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Kurasi Referensi UKOM/UKPPPG IPS',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam tema IPS Terpadu "Interaksi Antarruang dan Konversi Lahan Pertanian menjadi Kawasan Industri/Permukiman", guru ingin merumuskan tujuan/indikator pembelajaran terpadu tingkat analisis (C4) yang memadukan dimensi geografis, sosiologis, dan ekonomi. Rumusan manakah yang paling tepat?',
    options: [
      'Peserta didik mampu menyebutkan lima contoh kota besar di Pulau Jawa.',
      'Peserta didik mampu menyalin definisi alih fungsi lahan dari kamus geografi.',
      'Peserta didik mampu menganalisis faktor spasial pendorong alih fungsi lahan pertanian serta dampaknya terhadap perubahan mata pencaharian, relasi sosial, dan ketahanan pangan masyarakat setempat.',
      'Peserta didik mampu mewarnai peta batas kecamatan menggunakan pensil warna.',
      'Peserta didik mampu menghafalkan nomor peraturan tata ruang kota secara lisan.',
    ],
    answer: 2,
    explanation:
      'Indikator terpadu IPS memadukan faktor keruangan (geografi), pergeseran mata pencaharian & ketahanan pangan (ekonomi), serta struktur sosial masyarakat pada level analisis (C4).',
  },

  // === SMK VOKASI LAINNYA (TKJ, TKR, Informatika - 3 butir PCK) ===
  {
    id: 'web-vok-01',
    bank: 'PCK',
    topic: 'SJT Vokasi · TKJ / Jaringan (VLAN Simulator)',
    prodiScope: ['smk-vokasi'],
    pckFocus: 'Media/ICT & Simulator',
    source: 'Kurasi Referensi UKOM/UKPPPG TKJ',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      '[TKJ / TJKT] Pak Joko mengajar konfigurasi VLAN (Virtual Local Area Network) pada managed switch untuk kelas XI TJKT. Sebagian besar siswa menganggap perintah CLI abstrak dan membingungkan saat switch fisik di lab terbatas. Strategi PCK berbantuan media digital paling tepat yang dipilih Pak Joko adalah ....',
    options: [
      'Meminta siswa menyalin baris perintah CLI sepanjang 5 halaman dari modul pdf ke buku tulis.',
      'Menghilangkan materi VLAN dan menggantinya semata dengan crimping kabel UTP straight-through.',
      'Memvisualisasikan alur pemisahan broadcast domain terlebih dahulu memakai simulator jaringan (seperti Cisco Packet Tracer) bersamaan demo CLI, dikaitkan studi kasus memisahkan jaringan lab siswa dan jaringan administrasi sekolah sebelum mengonfigurasi perangkat switch nyata.',
      'Memberikan ceramah teori model OSI selama 3 jam penuh tanpa praktik.',
      'Membagikan soal pilihan ganda hafalan panjang rentang port TCP.',
    ],
    answer: 2,
    explanation:
      'Simulator jaringan interaktif menjembatani logika segmentasi VLAN yang abstrak sebelum konfigurasi perangkat keras riil sekaligus mengatasi keterbatasan jumlah switch manageabel di lab SMK.',
  },
  {
    id: 'web-vok-02',
    bank: 'PCK',
    topic: 'SJT Vokasi · TKR Otomotif (Diagnosis Rem ABS)',
    prodiScope: ['smk-vokasi'],
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Kurasi Referensi UKOM/UKPPPG TKR',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      '[TKR Otomotif] Bu Indah merancang tujuan pembelajaran praktik perawatan Sistem Rem ABS (Anti-lock Braking System) bagi siswa Fase F Teknik Kendaraan Ringan agar mencerminkan keterampilan berpikir tingkat tinggi (troubleshooting industri bengkel) dan siap kerja DUDIKA. Rumusan capaian paling tepat adalah ....',
    options: [
      'Siswa mampu menghafalkan kepanjangan istilah ABS dan nama tiga pabrik pembuat rem.',
      'Siswa mampu mendiagnosis gangguan kode DTC sensor kecepatan roda (wheel speed sensor) ABS melalui pembacaan diagnostic scanner & pemeriksaan multimeter berpedoman wiring diagram manual servis, lalu melaksanakan prosedur perbaikan sesuai K3.',
      'Siswa mampu menggambar silinder master rem di kertas gambar A4 tanpa membuka unit praktik.',
      'Siswa mampu menyebutkan definisi gaya gesek dari buku fisika kelas VII.',
      'Siswa mampu mencuci kampas rem tromol tanpa memeriksa kebocoran minyak rem.',
    ],
    answer: 1,
    explanation:
      'Kompetensi vokasi otomotif modern menuntut penalaran diagnostik analitis (baca DTC scanner, ukur resistansi/tegangan berdasarkan wiring diagram service manual) dan perbaikan berstandar SOP keselamatan kerja.',
  },
  {
    id: 'web-vok-03',
    bank: 'PCK',
    topic: 'SJT Vokasi · Informatika / RPL (Berpikir Komputasional)',
    prodiScope: ['smk-vokasi'],
    pckFocus: 'Metode Pengajaran',
    source: 'Kurasi Referensi UKOM/UKPPPG Informatika',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      '[Informatika / RPL] Pak Dani mengajar konsep Berpikir Komputasional dan Algoritma di fase F. Siswa kesulitan memahami bagaimana masalah kompleks dipecah sebelum menulis kode program. Pendekatan PBL kontekstual paling efektif untuk melatih keempat pilar berpikir komputasional secara bermakna adalah ....',
    options: [
      'Meminta siswa menyalin ulang sintaks bahasa C++ dari papan tulis selama dua pertemuan.',
      'Mengharuskan siswa menghafalkan sejarah perkembangan generasi prosesor komputer.',
      'Menantang siswa memecahkan masalah kemacetan antrean kantin sekolah dengan langkah dekomposisi sub-masalah, mengenali pola jam sibuk, mengabstraksi data pesanan penting, lalu merancang flowchart atau pseudocode solusi efisien sebelum mengkodekannya.',
      'Membagikan kuis hafalan perbedaan kapasitas bit dan byte saja.',
      'Melarang siswa membuat rancangan alur diagram alir di atas kertas sebelum mengetik kode.',
    ],
    answer: 2,
    explanation:
      'Berpikir komputasional (dekomposisi, pengenalan pola, abstraksi, dan desain algoritma) berakar kuat saat murid memecahkan persoalan nyata kontekstual dulu secara struktural sebelum mengimplementasikan sintaks kode.',
  },
];
