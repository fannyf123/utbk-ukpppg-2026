import type { ExamQuestion } from '../types/exam';

/**
 * Modul PCK & SJT bergaya LMS PPG & 4 Kompetensi Guru (Lampiran 4 Juknis 2026)
 * Untuk penggantian soal hitungan akuntansi/teknis non-pedagogis pada Prodi:
 * - Akuntansi & Keuangan SMK (24 butir: 18 PG, 3 PGK_KATEGORI, 3 PGK_MCMA)
 * - SMK Vokasi: TKJ/RPL, TKR Otomotif, Pemasaran, TITL, APHP (30 butir: 22 PG, 4 PGK_KATEGORI, 4 PGK_MCMA)
 * - PPKn (4 butir: 2 PG, 1 PGK_KATEGORI, 1 PGK_MCMA)
 */
export const LMS_PPG_AKT_VOK_PPKN_2026: ExamQuestion[] = [
  // ================= AKUNTANSI SMK (24 BUTIR) =================
  {
    id: 'lms26-akt-01',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Pemahaman Konseptual vs Prosedural (P.1)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Dalam mata pelajaran Akuntansi Dasar kelas X, mayoritas murid dapat menghafal daftar saldo normal akun di luar kepala, tetapi ketika dihadapkan pada bukti transaksi baru di luar contoh buku paket mereka keliru menempatkan posisi akun. Strategi pembelajaran paling tepat untuk membawa murid dari hafalan prosedural menuju pemahaman konseptual yang bermakna adalah ....',
    options: [
      'Menambah tugas menghafalkan ulang daftar pengelompokan akun setiap awal jam pelajaran.',
      'Membimbing murid menalar logika persamaan dasar akuntansi (pengaruh transaksi terhadap aset, kewajiban, dan ekuitas) melalui analisis bukti transaksi nyata sebelum menarik aturan pencatatan.',
      'Membagikan kunci jawaban contoh soal latihan agar murid menghafal pola soal yang sering keluar.',
      'Mengurangi jumlah latihan analisis dokumen bukti agar murid fokus pada tes hafalan definisi.',
      'Menayangkan salindia berisi definisi lengkap siklus akuntansi selama dua jam pelajaran.',
    ],
    answer: 1,
    explanation:
      'Pemahaman mendalam dalam Akuntansi terbangun saat murid memahami nalar logika perubahan aset/kewajiban/ekuitas di balik transaksi nyata, bukan sekadar menghafal posisi kolom.',
  },
  {
    id: 'lms26-akt-02',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Asesmen Awal & Peta Kebutuhan Belajar (P.6)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Sebelum memulai unit penyusunan laporan keuangan perusahaan jasa di kelas XI Akuntansi, Bu Tari memberikan soal pilihan ganda cepat tentang definisi istilah akuntansi dari buku paket dan menggunakannya untuk menyusun peringkat kelas. Kelemahan mendasar langkah tersebut sebagai asesmen diagnostik awal adalah ....',
    options: [
      'Jumlah pilihan jawabannya terlalu sedikit untuk menentukan nilai rapor tengah semester.',
      'Instrumen hanya mengukur hafalan istilah dan pemeringkatan sehingga gagal mengidentifikasi letak miskonsepsi konsep prasyarat murid sebelum unit baru dimulai.',
      'Waktu pelaksanaan di awal pertemuan membuat jam praktik pencatatan transaksi menjadi berkurang.',
      'Murid belum terbiasa mengerjakan ulangan tanpa diberi tahu kisi-kisi dua minggu sebelumnya.',
      'Soal definisi seharusnya diberikan secara lisan per individu di depan seluruh kelas.',
    ],
    answer: 1,
    explanation:
      'Asesmen awal kognitif bertujuan memetakan penguasaan prasyarat serta letak miskonsepsi guna merancang pembelajaran sesuai kebutuhan murid, bukan memeringkat atau sekadar menguji hafalan definisi.',
  },
  {
    id: 'lms26-akt-03',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Teaching at the Right Level & Diferensiasi (P.2)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Hasil pemetaan awal di kelas X Akuntansi menunjukkan: 7 murid sudah lancar menelusuri alur transaksi hingga jurnal, 15 murid paham aturan dasar namun kerap ragu menganalisis bukti transaksi tidak rutin, dan 6 murid masih cemas dengan angka karena latar minat belajar sebelumnya berbeda. Tindakan diferensiasi berdasar TaRL yang paling tepat adalah ....',
    options: [
      'Menunda seluruh pembelajaran kelas sampai keenam murid yang cemas tuntas memahami konsep awal.',
      'Membagi kelompok berdasarkan nilai rapor SMP secara permanen selama dua semester penuh.',
      'Menyediakan proyek studi kasus analisis anomali untuk kelompok mahir, kartu panduan alur verifikasi bukti untuk kelompok tengah, dan bimbingan bertahap dengan simulasi sederhana bagi yang masih cemas, lalu meninjau ulang perkembangannya berkala.',
      'Menyuruh keenam murid tersebut mengerjakan tugas merangkum teori sejarah akuntansi terpisah.',
      'Memberikan seluruh kelas latihan penyalinan dokumen yang sama agar kondisi pembelajaran seragam.',
    ],
    answer: 2,
    explanation:
      'Diferensiasi dan TaRL melayani ketiga tingkat kesiapan belajar dengan dukungan serta tantangan proporsional, pengelompokan fleksibel, dan evaluasi kemajuan berkala.',
  },
  {
    id: 'lms26-akt-04',
    bank: 'PCK',
    topic: 'PCK Akuntansi · DUP (Universal Design for Learning) (P.2)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Saat mengajarkan konsep akuntansi kas kecil, guru mendapati beberapa murid mudah paham melalui simulasi transaksi langsung di pojok koperasi kelas, sebagian melalui bagan alur visual, dan seorang murid dengan hambatan penglihatan ringan kesulitan membaca tabel angka berukuran rapat. Penyesuaian berdasarkan prinsip DUP adalah ....',
    options: [
      'Mengeluarkan murid dengan hambatan penglihatan dari praktik pencatatan kas kecil agar tidak terbebani.',
      'Menyajikan materi melalui kombinasi diagram alur kontras jelas, simulasi peran kasir, lembar cetak/digital berhuruf lebih besar beserta pembaca layar, sambil menjaga tujuan belajar yang sama.',
      'Mewajibkan seluruh murid mencatat materi hanya dari papan tulis karena lebih melatih ketelitian.',
      'Meminta teman sebangku mengerjakan seluruh bagian pencatatan tabel untuk murid tersebut.',
      'Menurunkan kriteria ketuntasan minimal secara sepihak bagi murid yang kesulitan melihat tabel.',
    ],
    answer: 1,
    explanation:
      'Prinsip ragam representasi dan aksesibilitas DUP menghapus hambatan teknis pada media ajar (ukuran font/pembaca layar + ragam modalitas visual/simulasi) tanpa menurunkan standar kompetensi.',
  },
  {
    id: 'lms26-akt-05',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Pembelajaran Mendalam 3M (P.3)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Guru Akuntansi kelas XI ingin merancang pembelajaran Pengelolaan Keuangan Usaha Mikro yang mencerminkan pembelajaran berkesadaran, bermakna, dan menggembirakan. Rancangan kegiatan yang paling sesuai dengan ketiga prinsip tersebut adalah ....',
    options: [
      'Murid menjawab kuis daring pilihan ganda definisi laporan keuangan dengan hadiah poin tambahan.',
      'Murid mendengarkan penjelasan lisan guru selama dua jam tentang pentingnya kejujuran akuntan.',
      'Murid berkolaborasi dengan pengelola usaha kecil sekitar sekolah/kantin untuk mengidentifikasi masalah pencatatan kas mereka, merancang buku kas sederhana, mengujinya, lalu merefleksikan manfaatnya.',
      'Murid menyalin sepuluh soal cerita transaksi fiktif dari buku paket dan mengerjakannya dalam diam.',
      'Murid membuat poster berwarna bertuliskan kutipan motivasi akuntan sukses dunia.',
    ],
    answer: 2,
    explanation:
      'Menghubungkan materi dengan persoalan nyata pelaku usaha sekitar menumbuhkan kebermaknaan, keterlibatan kolaboratif memicu semangat belajar menggembirakan, dan refleksi dampak menumbuhkan kesadaran belajar.',
  },
  {
    id: 'lms26-akt-06',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Integrasi TIK Kritis (P.4)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Banyak murid kelas XI Akuntansi terbiasa langsung memasukkan angka ke perangkat lunak akuntansi yang otomatis menyusun laporan keuangan, namun mereka tidak mampu mendeteksi ketika laporan tersebut salah akibat kekeliruan input akun awal. Integrasi teknologi yang paling kritis dan mendidik adalah ....',
    options: [
      'Melarang sama sekali penggunaan komputer sepanjang semester hingga lulus.',
      'Merancang aktivitas verifikasi jejak audit di mana murid membandingkan bukti transaksi, memprediksi dampak laporan secara manual konseptual, lalu menguji dan menalar hasil olahan perangkat lunak.',
      'Memperbanyak jam latihan mengetik angka tercepat pada aplikasi lembar kerja.',
      'Membagikan video tutorial langkah klik menu aplikasi langkah demi langkah untuk ditiru persis.',
      'Mengubah ujian akhir menjadi tes menghafal fungsi tombol pada perangkat lunak akuntansi.',
    ],
    answer: 1,
    explanation:
      'Integrasi TIK secara kritis (P.4) memastikan perangkat lunak menjadi sarana memperkuat pemahaman konseptual dan penelusuran logika kesalahan, bukan sekadar input otomatis tanpa penalaran.',
  },
  {
    id: 'lms26-akt-07',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Culturally Responsive Teaching & Potensi Lokal (P.5)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Sebagian besar orang tua murid kelas X Akuntansi di suatu SMK merupakan pedagang pasar tradisional dan perajin rumahan yang sering belum memisahkan uang pribadi dengan kas usaha. Guru ingin mengaitkan pengetahuan keluarga tersebut ke pembelajaran Akuntansi Dasar secara bermakna (P.5 & S.2). Langkah paling tepat adalah ....',
    options: [
      'Menugaskan murid mengkritik cara pengelolaan uang orang tua mereka di depan kelas sebagai contoh keliru.',
      'Menggunakan studi kasus simulasi warung atau usaha keluarga secara hormat (atau mengundang pelaku UMKM berbagi pengalaman), membimbing prinsip pemisahan entitas usaha, dan merancang catatan harian sederhana.',
      'Meminta orang tua mengumpulkan buku tabungan keluarga ke sekolah untuk diaudit oleh siswa.',
      'Menggunakan seluruh contoh perusahaan publik raksasa dari luar negeri agar siswa berpikir berskala besar.',
      'Menyuruh murid menghafalkan definisi entitas ekonomi dalam bahasa Inggris.',
    ],
    answer: 1,
    explanation:
      'Memanfaatkan realitas ekonomi keluarga sebagai konteks belajar bermakna dan bermartabat menghargai latar murid sambil menanamkan konsep entitas usaha secara aplikatif.',
  },
  {
    id: 'lms26-akt-08',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Umpan Balik Konstruktif & Rubrik (P.6)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Saat memeriksa tugas siklus akuntansi murid yang kolom neraca lajurnya belum seimbang dan terdapat beberapa kekeliruan klasifikasi beban, guru ingin memberikan umpan balik yang mendorong murid memperbaiki pekerjaannya secara mandiri. Umpan balik paling efektif adalah ....',
    options: [
      '"Tugasmu masih belum seimbang dan nilainya 55; ulangi semua dari halaman pertama sampai sama dengan contoh."',
      '"Kelompokmu kurang teliti, silakan minta diajari kelompok yang sudah mendapat nilai sempurna."',
      '"Pencatatan kas dan piutangmu di jurnal khusus sudah rapi serta sesuai dokumen sumber. Selisih terlihat di tahap pemindahan kelompok beban sewa; periksa kembali mana transaksi yang masih menjadi aset awal dan perbaiki sebelum pengumpulan final."',
      '"Kerjakan soal latihan yang lebih mudah saja dulu agar nilai rata-ratamu tidak turun."',
      '"Bagus sudah mengumpulkan tepat waktu, tetap semangat belajar akuntansi ya!"',
    ],
    answer: 2,
    explanation:
      'Umpan balik formatif bermakna (feed-up, feed-back, feed-forward) menyoroti bukti ketepatan yang sudah dicapai, menunjukkan titik selisih konseptual secara spesifik, serta memberi arahan langkah koreksi.',
  },
  {
    id: 'lms26-akt-09',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Etika Profesi & Kejujuran Data (K.1)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.1',
    prompt:
      'Dalam proyek pengelolaan koperasi siswa (Teaching Factory Akuntansi), dua murid bendahara kelas panik karena catatan saldo fisik kas selisih sedikit dibanding buku kas akibat lupa mencatat nota pengeluaran kecil. Mereka berniat mengubah angka nota agar laporan tampak rapi di depan pembina sekolah. Sikap keteladanan etis guru yang paling tepat adalah ....',
    options: [
      'Membiarkan perubahan angka tersebut agar koperasi siswa tetap meraih predikat administrasi terbaik.',
      'Memarahi kedua murid secara terbuka di depan seluruh kelas karena dianggap melakukan pencurian.',
      'Membimbing murid secara jujur melacak kronologi pengeluaran yang tertinggal, mencatat penyesuaian transparan sesuai fakta bukti, dan merefleksikan nilai integritas profesi akuntan.',
      'Mengambil alih buku kas dan menutup selisihnya dengan uang pribadi guru secara diam-diam.',
      'Menghapus seluruh proyek koperasi siswa dan menggantinya dengan soal buku tulis.',
    ],
    answer: 2,
    explanation:
      'Keteladanan etika guru (K.1) dalam bidang akuntansi menanamkan integritas, akuntabilitas bukti, dan kejujuran pelaporan daripada memalsukan catatan demi pencitraan.',
  },
  {
    id: 'lms26-akt-10',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Growth Mindset & Siklus Refleksi MAR (K.2)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.2',
    prompt:
      'Rani murid kelas X Akuntansi sering berkata, "Otak saya bukan tipe hitung-hitungan, pasti salah terus kalau menyusun laporan." Setelah guru membimbingnya memakai daftar alur klasifikasi bertahap, Rani mulai dapat mengelompokkan pos laporan secara benar dan tersenyum lega. Guru ingin memperkuat kesadaran Growth Mindset Rani melalui refleksi. Pertanyaan reflektif paling tepat adalah ....',
    options: [
      '"Lihat, ternyata tugas kali ini memang lebih gampang daripada minggu lalu ya?"',
      '"Strategi pemetaan bertahap mana yang paling membantumu menemukan posisi pos laporan tadi, dan bagaimana kamu bisa memakainya pada tantangan berikutnya?"',
      '"Semoga nilai ujianmu nanti tetap tinggi ya, kamu hanya perlu lebih sering menghafal rumus saja."',
      '"Tuh kan, kalau tidak malas mencatat pasti bisa seperti temanmu yang paling pintar."',
      '"Jangan terlalu senang dulu karena materi kelas XI nanti jauh lebih sulit dari ini."',
    ],
    answer: 1,
    explanation:
      'Siklus Growth Mindset (Mindset-Action-Result) diperkuat ketika murid diajak menghubungkan keberhasilan hasil belajar dengan strategi/tindakan konkret yang ia lakukan sendiri.',
  },
  {
    id: 'lms26-akt-11',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Iklim Kelas Aman & Kesadaran Sosial (K.3)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.3',
    prompt:
      'Saat sesi diskusi kelompok analisis transaksi, seorang murid pendiam keliru menyebutkan posisi pencatatan sehingga langsung diejek oleh teman satu mejanya dengan sebutan "tidak cocok masuk Akuntansi". Tindakan konsisten guru untuk membangun budaya kelas yang aman dan menghargai proses belajar adalah ....',
    options: [
      'Menertawakan ringan agar suasana mencair dan meminta murid yang salah segera membuka buku.',
      'Menegaskan bahwa kesalahan adalah bagian normal dari proses belajar setiap orang, memfasilitasi norma saling menghormati di kelas, serta membimbing kelompok menalar kembali konsepnya bersama.',
      'Memindahkan murid yang diejek ke bangku paling belakang sendirian agar terhindar dari gangguan.',
      'Membiarkan dinamika tersebut agar murid terbiasa menghadapi tekanan dunia kerja.',
      'Menghukum pemberi ejekan dengan menyuruhnya mengerjakan 50 soal tambahan di luar jam.',
    ],
    answer: 1,
    explanation:
      'Menjaga lingkungan belajar aman (K.3) menuntut guru meluruskan budaya ejekan secara edukatif, memvalidasi keamanan mencoba di kelas, dan menumbuhkan empati antar-murid.',
  },
  {
    id: 'lms26-akt-12',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Komunikasi Empatik Lintas Karakteristik (S.1)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.1',
    prompt:
      'Ibu Sumi, orang tua murid kelas XI Akuntansi, bekerja seharian sebagai buruh harian dan kurang memahami istilah teknis laporan akademik seperti KKTP maupun diferensiasi. Guru perlu mengomunikasikan hambatan anaknya yang mulai sering membolos pada mata pelajaran praktik. Langkah komunikasi sosial-empatik terbaik adalah ....',
    options: [
      'Mengirimkan surat panggilan resmi dengan bahasa regulasi kurikulum formal agar orang tua segera hadir.',
      'Menitipkan pesan lisan kepada anak untuk disampaikan sendiri kepada ibunya saat pulang.',
      'Memilih waktu komunikasi yang fleksibel, memakai bahasa sederhana yang ramah dan menghargai situasi keluarga, menunjukkan contoh kemajuan karya anak, lalu menyepakati langkah pendampingan bersama.',
      'Menunggu jadwal pembagian rapor akhir semester agar penyampaian masalah lebih efisien.',
      'Mengumumkan nama murid yang sering membolos pada rapat komite agar menjadi perhatian bersama.',
    ],
    answer: 2,
    explanation:
      'Komunikasi inklusif dan empatik (S.1) menyesuaikan bahasa dengan mitra bicara, menghindari jargon rumit, menghargai kondisi ekonomi/waktu keluarga, dan berfokus pada solusi kolaboratif.',
  },
  {
    id: 'lms26-akt-13',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Kolaborasi Antar-Guru & Tendik (S.2)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.2',
    prompt:
      'Banyak murid kelas X Akuntansi keliru menafsirkan soal cerita transaksi usaha bukan karena lemah konsep akuntansi, melainkan karena kurang cermat memahami hubungan sebab-akibat pada kalimat teks bahasa Indonesia. Langkah kolaboratif terbaik antar-pendidik di sekolah untuk mengatasi hal ini adalah ....',
    options: [
      'Menyerahkan masalah tersebut sepenuhnya kepada guru Bahasa Indonesia karena di luar cakupan Akuntansi.',
      'Menyederhanakan semua soal akuntansi menjadi angka-angka murni tanpa konteks kalimat cerita.',
      'Berkolaborasi dengan guru Bahasa Indonesia dan tim literasi sekolah merancang latihan membaca pemahaman konteks transaksi serta menerapkannya bertahap lintas kelas.',
      'Memberikan tugas tambahan merangkum kamus besar di luar jam belajar produktif.',
      'Menurunkan standar ketuntasan minimal seluruh siswa agar tidak ada yang mengulang.',
    ],
    answer: 2,
    explanation:
      'Pengembangan literasi murid perlu kolaborasi lintas mata pelajaran dan komunitas pendidik (S.2) agar kendala pemahaman bacaan transaksi diselesaikan secara utuh.',
  },
  {
    id: 'lms26-akt-14',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Komunitas Pembelajaran & PKB (S.3)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.3',
    prompt:
      'Dalam forum MGMP Akuntansi, seorang guru memaparkan praktik baik penggunaan studi kasus UMKM nyata untuk menggantikan soal hafalan angka di modul ajar. Bentuk partisipasi aktif guru peserta yang paling konstruktif mendukung keprofesian berkelanjutan adalah ....',
    options: [
      'Mendengarkan diam hingga selesai lalu meminta salinan dokumennya untuk dipakai persis tanpa perubahan.',
      'Mengajukan pertanyaan kritis terkait adaptasi ke beragam tingkat kesiapan murid, berbagi pengalaman di kelasnya, dan bersepakat menguji adaptasinya melalui observasi teman sejawat.',
      'Menolak gagasan tersebut karena buku cetak lama dirasa lebih aman untuk persiapan ujian.',
      'Membandingkan nilai ujian sekolah masing-masing agar terlihat guru mana yang paling berhasil.',
      'Menghadiri rapat hingga daftar hadir ditandatangani lalu berfokus pada pekerjaan pribadi lain.',
    ],
    answer: 1,
    explanation:
      'Komunitas pembelajaran profesional berkembang lewat dialog reflektif kritis, kontekstualisasi strategi mengajar, dan kolaborasi uji praktik nyata antar-guru.',
  },
  {
    id: 'lms26-akt-15',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Penguasaan Tujuan & Karakteristik Materi (PF.1)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.1',
    prompt:
      'Mengacu pada tujuan satuan pendidikan SMK Program Keahlian Akuntansi dan Keuangan Lembaga, kemampuan puncak yang PALING penting dibangun dalam pembelajaran agar lulusan siap menghadapi dunia kerja dan pendidikan lanjut adalah ....',
    options: [
      'Kemampuan menghafalkan puluhan kode nomor akun secara cepat dalam lomba cerdas cermat.',
      'Kemampuan menalar keabsahan bukti transaksi, menyusun informasi keuangan yang akuntabel, memanfaatkan teknologi secara etis, dan mengambil keputusan keuangan yang bertanggung jawab.',
      'Kecepatan menulis angka dengan tulisan tangan sangat rapi di buku besar kertas ukuran besar.',
      'Penguasaan hapalan pasal lengkap aturan kepegawaian dan gaji pegawai negeri.',
      'Kepatuhan menyalin seluruh contoh soal buku teks tanpa pernah mempertanyakan konteksnya.',
    ],
    answer: 1,
    explanation:
      'Tujuan pendidikan SMK Akuntansi (PF.1) menekankan penalaran akuntabilitas informasi, integritas etis, dan pengambilan keputusan berbasis bukti dengan dukungan teknologi.',
  },
  {
    id: 'lms26-akt-16',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Konsep Esensial & Miskonsepsi Murid (PF.2)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Saat mendampingi murid menganalisis laporan keuangan usaha mikro di kelas XI Akuntansi, beberapa murid mengira bahwa usaha yang mencatat keuntungan tinggi di laporan laba rugi pasti memiliki uang tunai melimpah di kas saat itu juga. Strategi guru untuk meluruskan miskonsepsi konseptual tersebut adalah ....',
    options: [
      'Membenarkan anggapan itu agar murid tidak bingung membedakan jenis laporan keuangan.',
      'Menyajikan kasus usaha nyata yang banyak menjual secara kredit atau membeli persediaan, lalu membimbing murid menelusuri perbedaan pengakuan laba berbasis transaksi dengan arus masuk-keluar kas riil.',
      'Menugaskan murid menghafal definisi kata per kata seluruh unsur laporan keuangan dari buku paket.',
      'Menghapus materi arus kas dari pembahasan kelas karena dianggap terlalu abstrak bagi siswa SMK.',
      'Langsung memberikan skor rendah pada tes akhir agar murid mencari tahu jawabannya sendiri.',
    ],
    answer: 1,
    explanation:
      'Menghadirkan contoh kasus nyata (penjualan kredit/piutang vs kas) membantu murid memahami perbedaan konsep berbasis akrual dan likuiditas kas tanpa terjebak hafalan mekanis.',
  },
  {
    id: 'lms26-akt-17',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Potensi & Kebutuhan Belajar Konteks Lokal (PF.3)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Di sebuah SMK yang mayoritas muridnya berasal dari keluarga petani dan nelayan, guru mendapati siswa tampak pasif dan menganggap pelajaran Akuntansi hanya berguna bagi perusahaan besar di kota. Langkah penyesuaian materi berbasis konteks lokal (PF.3) paling tepat adalah ....',
    options: [
      'Tetap menggunakan seluruh studi kasus perusahaan manufaktur internasional agar standar kompetensi kelas tinggi.',
      'Merancang proyek pencatatan keuangan hasil panen/tangkapan ikan dan biaya sarana produksi berbasis pengalaman keluarga murid sebagai jembatan menuju standar pelaporan usaha menengah.',
      'Menyederhanakan materi akuntansi menjadi sekadar pelajaran penjumlahan aritmetika dasar.',
      'Mengadakan kuis berhadiah agar murid mau menghafalkan istilah perusahaan multinasional.',
      'Meminta murid mencari berita bursa saham luar negeri lalu merangkumnya setiap pekan.',
    ],
    answer: 1,
    explanation:
      'Mengangkat konteks ekonomi lokal keluarga murid sebagai titik masuk menjembatani karakteristik peserta didik menuju penguasaan konsep disiplin ilmu akuntansi yang bermakna.',
  },
  {
    id: 'lms26-akt-18',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Pengembangan Kurikulum Adaptif & Inovasi (PF.4)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.4',
    prompt:
      'Hasil evaluasi tahunan Teaching Factory Akuntansi mengungkap murid pandai mengoperasikan tabel angka namun sering gagap ketika berhadapan langsung dengan pelanggan koperasi atau diminta menjelaskan risiko kesalahan catatan pajak secara sederhana kepada mitra UMKM. Pengembangan alur kurikulum operasional sekolah yang paling adaptif adalah ....',
    options: [
      'Mengurangi jam praktik pelayanan dan memperbanyak soal hitungan manual di kelas.',
      'Mengintegrasikan simulasi komunikasi layanan akuntansi, konsultasi pencatatan sederhana bagi mitra UMKM, serta studi kasus kepatuhan pajak terkini ke dalam proyek akhir lintas semester.',
      'Menggantikan mata pelajaran komunikasi bisnis dengan latihan mengetik sepuluh jari.',
      'Menyerahkan pembinaan komunikasi pelanggan sepenuhnya kepada perusahaan tempat siswa magang nanti.',
      'Mewajibkan murid menghafal undang-undang perpajakan beserta nomor pasalnya di luar kepala.',
    ],
    answer: 1,
    explanation:
      'Kurikulum adaptif (PF.4) memperbarui pengalaman belajar sekolah agar mencakup literasi komunikasi finansial, kepatuhan terkini, dan praktik konsultasi nyata bersama UMKM.',
  },
  {
    id: 'lms26-akt-19',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Rubrik & Asesmen Otentik Siklus Akuntansi (P.6)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Bu Lina menyusun sistem penilaian proyek siklus akuntansi bagi kelas XI Akuntansi SMK. Tentukan apakah pernyataan praktik penilaian berikut Sesuai atau Tidak Sesuai dengan prinsip asesmen yang adil, valid, dan berkesinambungan.',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Asesmen mencakup ketepatan analisis bukti dokumen, konsistensi penelusuran catatan, dan kemampuan murid menjelaskan makna laporan keuangan yang disusunnya.',
        answer: 0,
      },
      {
        text: 'Murid yang menyusun laporan dengan aplikasi pengolah angka tetap diuji pemahamannya untuk mendeteksi kemungkinan kesalahan klasifikasi atau rumus yang keliru.',
        answer: 0,
      },
      {
        text: 'Jika hasil akhir laporan tidak seimbang, seluruh jawaban proses analisis transaksi murid sebelumnya langsung diberi nilai nol mutlak.',
        answer: 1,
      },
      {
        text: 'Rubrik penilaian dibagikan hanya sesudah semua murid mengumpulkan hasil akhir agar tidak membatasi cara murid mengerjakan.',
        answer: 1,
      },
    ],
    explanation:
      'Asesmen valid menghargai proses penalaran beserta kebenaran bukti, menggunakan rubrik transparan sejak awal, serta memeriksa pemahaman konseptual di balik alat digital.',
  },
  {
    id: 'lms26-akt-20',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Manajemen Kelompok PjBL & CASEL (P.3)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Selama proyek pembuatan laporan keuangan simulasi usaha kelas XI Akuntansi, satu kelompok mengalami konflik karena dua anggota mendominasi komputer sementara dua anggota lain hanya disuruh merapikan map dokumen. Evaluasi ketepatan tindakan fasilitasi guru berikut (Tepat / Tidak Tepat).',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Memfasilitasi dialog refleksi kelompok, membantu merotasi peran verifikator bukti dan pengolah data secara berkala, serta memantau keterlibatan tiap anggota.',
        answer: 0,
      },
      {
        text: 'Menetapkan penilaian kontribusi individu dan pemahaman proses di samping produk akhir kelompok dalam rubrik proyek.',
        answer: 0,
      },
      {
        text: 'Membiarkan pembagian kerja timpang tersebut asalkan laporan kelompok selesai dikumpulkan tepat waktu sebelum bel pulang.',
        answer: 1,
      },
      {
        text: 'Mengganti seluruh proyek kolaboratif menjadi ujian pilihan ganda individu agar tidak lagi timbul konflik.',
        answer: 1,
      },
    ],
    explanation:
      'Guru membina keterampilan berelasi dan tanggung jawab dalam PjBL melalui rotasi peran yang adil, dialog kelompok, dan penilaian proses kontribusi individu.',
  },
  {
    id: 'lms26-akt-21',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Etika Privasi & Kerahasiaan Data (K.1)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.1',
    prompt:
      'Dalam praktik pembelajaran akuntansi berbasis data mitra UMKM nyata sekitar sekolah, guru dan murid mengakses catatan penjualan dan kewajiban usaha milik mitra. Evaluasilah kesesuaian sikap menjaga etika profesi dan privasi berikut (Sesuai / Tidak Sesuai).',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Menyamarkan identitas rahasia mitra dan meminta izin tertulis sebelum data simulasi dibahas dalam pembelajaran di kelas.',
        answer: 0,
      },
      {
        text: 'Menyertakan nilai utang dan margin keuntungan asli pemilik toko tanpa izin sebagai konten promosi media sosial sekolah.',
        answer: 1,
      },
      {
        text: 'Mengajarkan murid kewajiban menjaga kerahasiaan data keuangan sebagai kompetensi karakter utama seorang profesional akuntansi.',
        answer: 0,
      },
      {
        text: 'Mengizinkan murid menyalin bebas basis data pelanggan mitra ke perangkat pribadi untuk kepentingan pribadi di luar tugas belajar.',
        answer: 1,
      },
    ],
    explanation:
      'Kematangan moral dan etika profesi (K.1) mengharuskan perlindungan data mitra nyata (anonimitas dan persetujuan penggunaan data belajar) sekaligus menanamkannya ke karakter siswa.',
  },
  {
    id: 'lms26-akt-22',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Pembelajaran Mendalam & Scaffolding (P.1)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Untuk memastikan murid kelas X Akuntansi tidak terjebak belajar dangkal (sekadar menyalin kolom pencatatan tanpa tahu makna ekonominya), langkah rancangan Pembelajaran Mendalam manakah yang paling tepat diterapkan guru? (Pilih semua yang benar)',
    options: [
      'Memulai unit dengan studi kasus nyata tentang dampak keputusan transaksi terhadap kondisi usaha sebelum memperkenalkan format pencatatan formal.',
      'Menyediakan lembar bantu pertanyaan pemandu (scaffolding) saat murid pertama kali menelaah bundel dokumen, lalu menguranginya bertahap seiring kemandirian.',
      'Mengakhiri setiap praktik dengan pertanyaan refleksi: "Apa arti perubahan laporan ini bagi pemilik usaha dan langkah apa yang perlu diperhatikan?"',
      'Memberikan lima puluh soal latihan pencatatan berpola sama persis untuk disalin ulang ke buku tulis.',
      'Melarang murid berdiskusi tentang alasan di balik aturan pencatatan hingga akhir semester.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pembelajaran mendalam dan scaffolding mengedepankan pemahaman konseptual, konteks aplikasi nyata, panduan bertahap di ZPD, serta refleksi makna.',
  },
  {
    id: 'lms26-akt-23',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Pengembangan Bahan Ajar & Media Adaptif (PF.5)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.5',
    prompt:
      'Dalam memperbarui bahan ajar Akuntansi agar relevan dengan karakteristik generasi masa kini dan kebutuhan inklusi kelas, inovasi pengembangan media guru yang paling tepat meliputi .... (Pilih semua yang benar)',
    options: [
      'Mengembangkan simulasi dokumen digital interaktif dengan petunjuk visual warna-kontras aman dan petunjuk langkah jelas.',
      'Menyediakan opsi penyajian informasi melalui video singkat berteks, bagan alur, dan panduan teks terstruktur sesuai DUP.',
      'Menghubungkan bahan ajar dengan praktik pengelolaan kas harian sekolah atau UMKM lokal agar mudah dipahami murid.',
      'Menyalin halaman buku teks terbitan dua puluh tahun lalu ke dalam berkas PDF tanpa memperbarui konteksnya.',
      'Mengisi seluruh salindia ajar dengan paragraf definisi panjang tanpa contoh transaksi atau pertanyaan pemantik.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pengembangan bahan ajar kreatif dan inovatif (PF.5) memadukan ragam representasi DUP, media interaktif kontekstual, dan pembaruan relevan zaman.',
  },
  {
    id: 'lms26-akt-24',
    bank: 'PCK',
    topic: 'PCK Akuntansi · Rencana Tindak Lanjut & Evaluasi Berbasis Data (P.6)',
    prodiScope: ['akuntansi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Setelah mengevaluasi hasil asesmen tengah unit laporan keuangan, guru menemukan 10 murid menguasai analisis transaksi dengan baik, 12 murid mampu mencatat prosedur rutin tetapi bingung menjelaskan alasan penyesuaian, dan 6 murid masih keliru mengklasifikasikan akun dasar. Tindak lanjut yang tepat mencakup .... (Pilih semua yang benar)',
    options: [
      'Menyediakan tantangan proyek analisis studi kasus anomali laporan untuk kelompok pertama yang sudah mahir.',
      'Melakukan diskusi klinik pemahaman konseptual berbasis simulasi konkret transaksi penyesuaian bagi kelompok kedua.',
      'Memberikan penguatan ulang konsep dasar klasifikasi entitas dengan alat bantu kartu akun bergambar bagi kelompok ketiga.',
      'Mengulang ceramah bab pertama untuk seluruh kelas secara sama rata selama tiga minggu.',
      'Mengabaikan perbedaan ketiga kelompok tersebut lalu langsung menyelenggarakan ujian sumatif bab berikutnya.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Tindak lanjut asesmen diagnostik/formatif harus terarah pada profil kebutuhan tiap kelompok: pengayaan, penguatan konseptual, dan remediasi prasyarat.',
  },

  // ================= SMK VOKASI: TKJ/RPL, TKR, PEMASARAN, TITL, APHP (30 BUTIR) =================
  {
    id: 'lms26-vok-01',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi (RPL) · Asesmen Diagnostik & ZPD Scaffolding (P.1)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Di kelas X Rekayasa Perangkat Lunak (RPL), sebagian murid mampu menyalin baris kode program dari papan tulis hingga aplikasi berjalan, tetapi gagal total ketika diminta mengubah alur logika sederhana untuk kasus baru. Tindakan guru untuk mengatasi pembelajaran dangkal tersebut adalah ....',
    options: [
      'Menambah jumlah baris kode yang harus disalin murid dari buku modul setiap pertemuan.',
      'Membimbing murid memetakan logika alur pemecahan masalah melalui diagram atau pseudocode bahasa sehari-hari dengan panduan bertahap sebelum menulis kode program.',
      'Menilai hasil praktik hanya berdasarkan apakah tampilan program tidak memunculkan pesan kesalahan saat dijalankan.',
      'Menyerahkan pembelajaran logika kepada siswa yang sudah terbiasa belajar pemrograman otodidak di rumah.',
      'Memberikan ulangan hafalan sintaks perintah bahasa pemrograman tanpa studi kasus.',
    ],
    answer: 1,
    explanation:
      'Mengajak murid menalar alur logika dan merancang pemecahan masalah sebelum menyalin sintaks menumbuhkan pemahaman konseptual serta transfer belajar.',
  },
  {
    id: 'lms26-vok-02',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi (TKJ) · Integrasi TIK & Simulator Jaringan (P.4)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Dalam mata pelajaran Teknik Komputer dan Jaringan (TKJ), jumlah perangkat router fisik di laboratorium terbatas sementara kelas berjumlah 32 murid. Pemanfaatan teknologi paling kritis dan efektif agar seluruh murid aktif bernalar sebelum praktik perangkat fisik adalah ....',
    options: [
      'Mengganti seluruh sesi praktik dengan menonton guru mengonfigurasi satu perangkat dari kursi belakang.',
      'Memanfaatkan aplikasi simulator topologi jaringan interaktif di mana setiap murid merancang alur skema, menguji prediksi jalur paket, menganalisis kegagalan koneksi, lalu bergantian memvalidasi di perangkat fisik.',
      'Membagi berkas PDF berisi daftar perintah konfigurasi untuk dihafalkan menjelang ujian tertulis.',
      'Menugaskan 30 murid menonton 2 murid perwakilan kelas menyambungkan kabel laboratorium.',
      'Mengadakan kuis daring tebak nama perangkat jaringan setiap awal pelajaran.',
    ],
    answer: 1,
    explanation:
      'Simulator interaktif memfasilitasi eksperimen, pemecahan masalah, dan pemahaman konseptual bagi semua murid sebelum praktik di perangkat terbatas.',
  },
  {
    id: 'lms26-vok-03',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi (TKR) · Diferensiasi & TaRL Bengkel Otomotif (P.2)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Pak Bima mengajar Teknik Kendaraan Ringan (TKR) di kelas X. Hasil asesmen awal menunjukkan: 6 murid sudah biasa membantu perawatan motor di bengkel orang tua, 14 murid paham nama komponen tetapi cemas menyentuh mesin saat menyala, dan 8 murid belum memahami cara kerja dasar sistem kendaraan. Rancangan belajar yang paling responsif adalah ....',
    options: [
      'Meminta keenam murid yang mahir menyelesaikan seluruh pekerjaan bengkel sedangkan teman lain menonton.',
      'Membagi kelompok permanen berdasarkan asal SMP hingga kenaikan kelas XI.',
      'Merancang tiga jalur dukungan fleksibel: tantangan studi kasus diagnosis kerusakan untuk yang mahir, panduan kerja terstruktur berpasangan untuk kelompok tengah, dan pengenalan komponen aman mesin mati + simulasi bagi kelompok pemula.',
      'Memperlambat seluruh jadwal semester hingga kedelapan murid pemula hafal seluruh buku manual kendaraan.',
      'Menugaskan seluruh kelas mengerjakan soal tulis hafalan nama suku cadang selama satu bulan.',
    ],
    answer: 2,
    explanation:
      'TaRL dan diferensiasi menyusun variasi dukungan serta tantangan kontekstual sesuai tingkat kesiapan aktual murid tanpa menstigma kelompok pemula.',
  },
  {
    id: 'lms26-vok-04',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi (Pemasaran) · Pembelajaran Mendalam 3M (P.3)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Bu Ratna mengajarkan strategi pemasaran produk lokal bagi kelas XI Bisnis Daring dan Pemasaran. Aktivitas pembelajaran manakah yang paling mencerminkan pengalaman berkesadaran, bermakna, dan menggembirakan?',
    options: [
      'Murid mendengarkan ceramah definisi bauran pemasaran lalu menyalin ringkasannya ke buku catatan.',
      'Murid bermitra langsung dengan pedagang kecil sekitar sekolah untuk mengamati kendala penjualan mereka, merancang kampanye komunikasi produk kreatif, menguji respons pembeli, dan merefleksikan perbaikan strateginya.',
      'Murid berlomba menjawab soal hafalan istilah pemasaran bahasa Inggris melalui aplikasi kuis.',
      'Guru memberikan brosur toko ritel modern agar murid meniru tata bahasanya untuk dikumpulkan minggu depan.',
      'Murid menonton video profil perusahaan teknologi dunia kemudian merangkum kunci sukses pendirinya.',
    ],
    answer: 1,
    explanation:
      'Mengatasi masalah nyata pelaku usaha sekitar menghadirkan kebermaknaan, uji langsung karya memicu kegembiraan belajar aktif, dan refleksi hasil membangun kesadaran belajar.',
  },
  {
    id: 'lms26-vok-05',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi (APHP) · Kearifan Lokal & CRT (P.5)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Di sebuah SMK Agribisnis Pengolahan Hasil Pertanian (APHP) di sentra perkebunan pisang dan kelapa daerah, guru ingin menerapkan Culturally Responsive Teaching (CRT) pada pembelajaran pengembangan produk pangan bernilai tambah. Kegiatan paling tepat dan substantif adalah ....',
    options: [
      'Meminta murid memakai ikat kepala adat daerah saat mempresentasikan makalah industri impor.',
      'Menghadirkan pelaku olahan pangan tradisional setempat atau pengetahuan keluarga murid sebagai mitra, menelaah kendala ketahanan mutu produk lokal, lalu merancang inovasi pengolahan yang higienis.',
      'Mengubah nama produk uji coba dengan bahasa daerah meskipun bahannya seluruhnya produk impor pabrik.',
      'Menugaskan murid menyalin daftar makanan khas seluruh provinsi di Indonesia dari internet.',
      'Memutar musik tradisional sepanjang jam praktikum laboratorium pengolahan berlangsung.',
    ],
    answer: 1,
    explanation:
      'CRT dan P.5 menempatkan potensi lingkungan, sumber bahan lokal, dan pengetahuan komunitas sebagai fondasi ilmiah inovasi pembelajaran bermakna.',
  },
  {
    id: 'lms26-vok-06',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi (TITL) · Budaya Aman K3 & Pencegahan Rasa Malu (K.3)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.3',
    prompt:
      'Saat praktik instalasi kelistrikan sederhana di kelas X TITL, seorang murid ragu dan terus bertanya ulang sebelum menyambung rangkaian karena takut tersengat listrik. Sebagian temannya mulai menyindirnya "penakut". Langkah konsisten guru untuk menjamin keamanan psikologis sekaligus budaya keselamatan kerja (K3) adalah ....',
    options: [
      'Membenarkan sikap kehati-hatian murid tersebut sebagai budaya K3 yang terpuji, menegaskan norma kelas bebas ejekan, memandu pemeriksaan jalur aman tanpa tegangan sebelum diuji, dan memberi dukungan bertahap.',
      'Menyuruh murid tersebut berani menyentuh kabel agar segera hilang rasa takutnya.',
      'Memindahkan murid tersebut menjadi petugas mencatat inventaris gudang hingga akhir semester.',
      'Membiarkan sindiran teman-temannya sebagai cara membangun mental pekerja lapangan.',
      'Menegur murid tersebut di depan kelas karena memperlambat jadwal kerja kelompok lain.',
    ],
    answer: 0,
    explanation:
      'Memvalidasi sikap hati-hati sebagai budaya keselamatan K3 sekaligus menghentikan ejekan menjaga keselamatan fisik dan psikologis peserta didik di bengkel.',
  },
  {
    id: 'lms26-vok-07',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Umpan Balik Konstruktif & Rubrik Autentik (P.6)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Pada proyek PjBL perbaikan perangkat keras di bengkel TKJ/TKR, beberapa kelompok mengumpulkan hasil produk yang bisa menyala di menit akhir, namun kabel/komponen terlihat semrawut, tidak sesuai SOP K3, dan ada siswa yang tidak mengerti cara kerjanya. Perbaikan sistem penilaian yang paling tepat untuk semester ini adalah ....',
    options: [
      'Tetap menilai 100 persen berdasarkan kondisi menyala atau tidaknya alat di menit akhir karena paling praktis.',
      'Menggunakan rubrik proses dan produk yang jelas sejak awal (perencanaan aman, kerapian instalasi, uji fungsi, dan verifikasi pemahaman individu melalui tanya jawab singkat) dengan titik pemeriksaan formatif tengah jalan.',
      'Memberikan tes pilihan ganda teori di kertas sebagai nilai tunggal agar objektif.',
      'Memberikan nilai seragam tertinggi untuk seluruh kelompok asalkan tidak ada alat yang rusak.',
      'Meminta ketua kelompok memberi nilai kepada anggotanya masing-masing tanpa pengawasan guru.',
    ],
    answer: 1,
    explanation:
      'Asesmen kejuruan otentik menilai kepatuhan proses, keselamatan K3, mutu produk, serta penguasaan konsep individu bukan semata hasil jadi terburu-buru.',
  },
  {
    id: 'lms26-vok-08',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Etika Profesi & Kejujuran (K.1)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.1',
    prompt:
      'Seorang murid kelas XII RPL diketahui menyerahkan kode aplikasi proyek akhir yang hampir seluruhnya diunduh utuh dari repositori publik internet tanpa pengakuan sumber maupun pemahaman alur kerjanya. Sikap etis dan mendidik yang paling tepat dilakukan guru adalah ....',
    options: [
      'Menutup mata karena aplikasi tersebut berjalan baik saat didemonstrasikan di depan tamu industri.',
      'Mengajak murid berdialog pribadi tentang integritas akademik dan etika lisensi perangkat lunak, memintanya memaparkan bagian yang dipahami, serta memberi kesempatan memodifikasi fitur dengan bimbingan.',
      'Menyebut nama murid tersebut sebagai penipu di papan pengumuman jurusan agar memberi efek jera.',
      'Melarang murid memakai internet selamanya dalam pengerjaan tugas sekolah apa pun.',
      'Memberikan nilai tuntas dengan catatan pribadi agar ia berjanji membuat proyek baru setelah lulus.',
    ],
    answer: 1,
    explanation:
      'Pembinaan etika profesional (K.1) memadukan ketegasan terhadap kejujuran karya/HKI dengan pendekatan restoratif yang menuntut akuntabilitas pemahaman siswa.',
  },
  {
    id: 'lms26-vok-09',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Refleksi Diri Guru & Growth Mindset (K.2)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.2',
    prompt:
      'Dalam asesmen tengah semester mata pelajaran produktif SMK, analisis butir soal menunjukkan 65% murid mampu mendefinisikan komponen, namun gagal saat diminta menganalisis penyebab kerusakan pada studi kasus kontekstual baru. Sikap refleksi diri guru yang mencerminkan pola pikir bertumbuh adalah ....',
    options: [
      'Menyalahkan tingkat konsentrasi generasi muda sekarang yang dinilai kurang tekun menghafal buku teks.',
      'Mengakui bahwa dominasi metode ceramah hafalan selama ini belum melatih penalaran kasus, berdiskusi di MGMP, lalu merancang pembelajaran berbasis studi kasus bertahap untuk diuji dampaknya.',
      'Membuang semua soal analisis kasus dari ulangan berikutnya supaya tingkat kelulusan kelas naik drastis.',
      'Menurunkan standar kriteria kelulusan tanpa mengubah metode pembelajaran di kelas.',
      'Menyuruh seluruh murid membeli buku latihan soal tambahan dari penerbit luar.',
    ],
    answer: 1,
    explanation:
      'Guru reflektif melihat kesenjangan hasil analisis butir sebagai cermin perbaikan strategi mengajarnya sendiri menuju pembelajaran berbasis nalar kasus.',
  },
  {
    id: 'lms26-vok-10',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · DUP & Pendidikan Inklusif (P.2)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Seorang murid kelas XI jurusan Pemasaran sangat cemerlang menyusun ide kampanye produk dan persuasif saat berbicara lisan di video, namun mengalami hambatan disleksia ringan sehingga sangat lambat dan tertekan ketika ditugaskan menulis laporan naratif lima halaman. Tindakan asesmen sesuai prinsip DUP adalah ....',
    options: [
      'Tetap mewajibkan laporan tertulis lima halaman dengan font kecil demi keadilan aturan formal.',
      'Memberi pilihan moda penyajian bukti pencapaian tujuan (presentasi video terstruktur, infografis audio, atau laporan berbantuan alat baca-tulis) yang diukur memakai rubrik tujuan yang sama.',
      'Mengurangi separuh tujuan kompetensi pemasaran khusus baginya agar lebih ringan.',
      'Memintanya cukup menjadi penonton saat teman-temannya menyusun laporan.',
      'Menempatkannya di ruang ujian terpisah tanpa menyediakan akomodasi cara penyajian.',
    ],
    answer: 1,
    explanation:
      'Ragam cara aksi dan ekspresi dalam DUP memberi murid keleluasaan menunjukkan penguasaan kompetensi tanpa terhalang oleh satu bentuk format teks semata (firm goals, flexible means).',
  },
  {
    id: 'lms26-vok-11',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Kolaborasi Orang Tua & Dunia Kerja (S.2)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.2',
    prompt:
      'Untuk menyelaraskan unit Praktik Layanan Pelanggan & Perawatan Berkala di jurusan TKR/Pemasaran agar relevan dengan etika kerja terkini tanpa memberatkan jadwal belajar murid, bentuk kolaborasi mitra industri/DUDIKA dan sekolah yang paling berdampak edukatif adalah ....',
    options: [
      'Menyerahkan murid bekerja penuh membantu operasional bengkel mitra sepanjang semester tanpa modul ajar.',
      'Mengundang praktisi mitra sebagai guru tamu studi kasus dan pengulas rubrik proyek autentik di sekolah bersama guru, lalu merefleksikan umpan baliknya untuk perbaikan belajar.',
      'Meminta perusahaan mitra menyumbangkan spanduk promosi untuk dipasang di gerbang sekolah.',
      'Mengirim murid mengamati toko selama setengah jam tanpa lembar observasi terarah.',
      'Mengadakan pertemuan seremonial penandatanganan kerja sama setahun sekali tanpa tindak lanjut kelas.',
    ],
    answer: 1,
    explanation:
      'Kolaborasi DUDIKA yang bermakna (S.2) menyelaraskan kompetensi pembelajaran kelas dan rubrik penilaian otentik melalui keterlibatan langsung praktisi dalam dialog edukatif.',
  },
  {
    id: 'lms26-vok-12',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Komunikasi Empatik Lintas Karakteristik (S.1)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.1',
    prompt:
      'Seorang murid pindahan dari daerah terpencil di kelas X SMK Vokasi jarang menjawab saat diskusi karena kerap merasa malu dengan logat daerahnya setelah beberapa teman sempat tersenyum mendengarnya. Langkah guru paling empatik dan inklusif adalah ....',
    options: [
      'Memintanya berlatih menghilangkan logat daerah agar cepat diterima lingkungan sekolah baru.',
      'Menghindari menunjuknya berbicara di kelas sampai ia berani dengan sendirinya.',
      'Menegaskan kesepakatan menghargai keberagaman bahasa di kelas, berdialog empatik secara pribadi, dan memberi peran presentasi awal berpasangan agar ia percaya diri.',
      'Menghukum siswa yang tersenyum dengan tugas kebersihan bengkel selama seminggu.',
      'Memindahkannya ke kelompok murid yang semuanya pendiam agar situasi kelas terasa tenang.',
    ],
    answer: 2,
    explanation:
      'Komunikasi inklusif melindungi martabat dan identitas murid melalui norma kelas aman serta dukungan bertahap menuju partisipasi aktif.',
  },
  {
    id: 'lms26-vok-13',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Komunitas Belajar & Lesson Study (S.3)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.3',
    prompt:
      'Dalam tahap refleksi (See) setelah Lesson Study pada mata pelajaran kejuruan SMK, pengamat menemukan kelompok yang lambat selesai sering terhenti lama hanya karena menunggu antrean bertanya langsung kepada guru. Tindak lanjut guru dan tim komunitas belajar yang paling tepat untuk siklus berikutnya adalah ....',
    options: [
      'Membatalkan pendekatan praktik berbasis proyek dan kembali ke metode ceramah klasikal.',
      'Merancang kartu panduan pemecahan kendala bertingkat (troubleshooting guide), memanfaatkan tutor sebaya terlatih, dan menjadwalkan rotasi pendampingan guru secara merata.',
      'Mengurangi target kompetensi kelompok yang lambat agar mereka tidak perlu bertanya kepada guru.',
      'Menambah tugas rumah tertulis bagi seluruh siswa di kelas.',
      'Menggabungkan kelompok yang cepat dan lambat dengan tugas diselesaikan hanya oleh siswa cepat.',
    ],
    answer: 1,
    explanation:
      'Lesson Study (S.3 / K.3) menghasilkan perbaikan desain manajemen kelas konkret, seperti panduan mandiri bertingkat dan rotasi pendampingan, untuk meningkatkan waktu belajar efektif semua murid.',
  },
  {
    id: 'lms26-vok-14',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Tujuan Pendidikan Vokasi & Profil Lulusan (PF.1)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.1',
    prompt:
      'Sesuai arah tujuan pendidikan menengah kejuruan dan Permendikdasmen tentang Standar Kompetensi Lulusan, orientasi utama pembelajaran produktif SMK di abad ke-21 sebaiknya diarahkan pada ....',
    options: [
      'Pelatihan berulang satu prosedur manual sempit yang persis sama hingga murid hafal secara otomatis.',
      'Integrasi penguasaan nalar konseptual bidang keahlian, budaya keselamatan & etika kerja, pemecahan masalah adaptif, literasi digital, dan kesiapan belajar sepanjang hayat.',
      'Penguasaan hapalan nama-nama alat beserta sejarah pembuatannya dalam tes tertulis.',
      'Pengerjaan pesanan produksi massal terus-menerus tanpa menyisakan waktu refleksi pembelajaran.',
      'Pemisahan penuh antara teori dasar ilmu dengan keterampilan kerja di bengkel.',
    ],
    answer: 1,
    explanation:
      'Pendidikan vokasi modern membekali nalar konseptual adaptif, etika dan budaya kerja aman, literasi teknologi, serta kemampuan terus belajar menghadapi perubahan industri.',
  },
  {
    id: 'lms26-vok-15',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Miskonsepsi Konsep Kejuruan (PF.2)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam proyek Pemasaran Digital kelas XI, beberapa murid berkesimpulan bahwa "jumlah tayangan video yang tinggi sudah pasti menunjukkan keberhasilan strategi pemasaran", meskipun jumlah pembeli tidak bertambah dan komentar menunjukkan calon konsumen masih bingung akan manfaat produk. Guru paling tepat membimbing murid dengan cara ....',
    options: [
      'Membenarkan kesimpulan murid karena metrik angka penayangan paling mudah dinilai di laporan.',
      'Memandu murid menganalisis kesenjangan antara jangkauan audiens, keterpahaman pesan nilai produk, dan bukti umpan balik calon konsumen untuk merancang perbaikan strategi komunikasi.',
      'Meminta seluruh kelompok membeli iklan berbayar agar jumlah tayangan mereka tetap naik setiap minggu.',
      'Menghilangkan pembahasan data analitik digital dan fokus pada tugas menggambar spanduk manual.',
      'Memberi hukuman membuat sepuluh video baru tanpa mengevaluasi pesan video sebelumnya.',
    ],
    answer: 1,
    explanation:
      'Penguasaan disiplin ilmu secara pedagogis (PF.2) meluruskan miskonsepsi data dangkal dengan mengajari murid membaca hubungan indikator mutu pesan dan kebutuhan konsumen nyata.',
  },
  {
    id: 'lms26-vok-16',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Kebutuhan Belajar Kontekstual (PF.3)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Hasil observasi pembelajaran kelas X TKJ/RPL menunjukkan murid sangat antusias ketika diminta menganalisis kasus nyata aplikasi layanan sekolah yang lambat atau jaringan sekolah yang terputus di jam istirahat, tetapi langsung pasif saat diminta membaca definisi protokol teori di bab awal buku paket. Keputusan guru yang paling mencerminkan PF.3 adalah ....',
    options: [
      'Melarang murid membahas kasus sekolah sebelum menuntaskan membaca seluruh bab teori di buku.',
      'Menggunakan kasus kendala nyata di lingkungan sekolah sebagai fenomena pembuka penyelidikan (PBL/Inquiry), lalu membimbing murid menemukan konsep teoretis sebagai alat penjelas solusi.',
      'Menghilangkan seluruh konsep teoretis dari RPP agar murid cukup mencoba-coba solusi acak.',
      'Memberikan hukuman meringkas dua bab teori tambahan apabila murid terlihat mengantuk saat membaca.',
      'Memutar film fiksi bertema teknologi selama jam pelajaran berlangsung.',
    ],
    answer: 1,
    explanation:
      'Memahami karakteristik minat dan kebutuhan belajar murid (PF.3) menjadikan kasus kontekstual lingkungan nyata sebagai jembatan menuju penguasaan konsep ilmiah.',
  },
  {
    id: 'lms26-vok-17',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Kurikulum Adaptif Perkembangan Zaman (PF.4)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.4',
    prompt:
      'Sejalan dengan perkembangan industri otomotif, digital, dan kelistrikan yang semakin mengarah ke teknologi ramah lingkungan serta otomatisasi cerdas, tim pengajar SMK perlu memperbarui kurikulum operasional satuan pendidikan. Langkah adaptif dan realistis yang paling tepat dilakukan adalah ....',
    options: [
      'Menghapus seluruh mata pelajaran dasar dan langsung menggantinya dengan materi sertifikasi khusus berbiaya tinggi.',
      'Menyelaraskan tujuan pembelajaran dasar dengan isu efisiensi energi, keselamatan kerja teknologi baru, dan proyek pemecahan masalah menggunakan simulasi digital sesuai kesiapan sarana sekolah.',
      'Menunggu diterbitkannya buku paket cetak baru tiga tahun lagi sebelum mengubah rencana pembelajaran.',
      'Meminta seluruh siswa mengikuti kursus privat di luar sekolah atas biaya pribadi masing-masing.',
      'Mempertahankan seluruh modul praktik lama tanpa perubahan karena mesin bengkel masih sama.',
    ],
    answer: 1,
    explanation:
      'Pengembangan kurikulum adaptif (PF.4) memperbarui konteks tujuan pembelajaran menuju isu masa depan (keberlanjutan & literasi teknologi) secara kontekstual dan realistis.',
  },
  {
    id: 'lms26-vok-18',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Penelitian Tindakan Kelas & Inovasi (PF.5)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.5',
    prompt:
      'Dalam upaya meningkatkan keaktifan bertanya dan kemampuan penalaran pemecahan masalah murid di kelas kejuruan, Pak Hendro merancang PTK dengan memanfaatkan studi kasus pendek "Apa yang Terjadi Jika...?" (prediksi-observasi-penjelasan) sebelum setiap praktik dimulai. Cara paling sahih bagi guru untuk mengevaluasi keberhasilan inovasi tersebut adalah ....',
    options: [
      'Merasa cukup puas karena suasana kelas terasa lebih ramai daripada semester sebelumnya.',
      'Mengumpulkan data berkala berupa rekaman partisipasi pertanyaan analitis murid, hasil asesmen pemahaman konsep pra dan pasca-praktik, serta catatan refleksi kendala selama dua siklus.',
      'Meminta kepala sekolah memberikan penghargaan inovasi sebelum uji coba kelas selesai dilaksanakan.',
      'Mengambil contoh laporan keberhasilan PTK sekolah lain yang sudah terbit sebagai bahan pembanding.',
      'Menilai keberhasilan hanya dari berapa cepat kelompok membersihkan ruang praktik setelah selesai.',
    ],
    answer: 1,
    explanation:
      'Praktik profesional empiris dan konseptual (PF.5) menilai efektivitas perubahan strategi ajar melalui pengumpulan bukti data beragam yang objektif serta refleksi antarsiklus.',
  },
  {
    id: 'lms26-vok-19',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · SEL 5 KSE CASEL (Pengambilan Keputusan) (K.1)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.1',
    prompt:
      'Dalam kegiatan proyek kejuruan SMK, seorang anggota kelompok mengetahui temannya menyalin laporan pengamatan bengkel milik kelompok lain karena takut nilainya kurang, padahal mereka bersahabat erat. Jika guru ingin membimbing murid tersebut menggunakan kompetensi Responsible Decision Making dari kerangka CASEL, pendekatan refleksi yang paling tepat adalah ....',
    options: [
      'Menyuruh murid tersebut diam saja demi menjaga kekompakan persahabatan jangka panjang di kelas.',
      'Mengajaknya menimbang nilai kejujuran, keselamatan akibat ketidaksiapan pemahaman, serta opsi cara membantu sahabatnya memahami ulang tugas dengan bermartabat sebelum mengambil tindakan.',
      'Menghukum kedua anak di depan umum agar seluruh angkatan mengetahui pelanggaran tersebut.',
      'Mengabaikan peristiwa itu karena menyalin laporan antar-kelompok dianggap kebiasaan lumrah di SMK.',
      'Meminta murid tersebut memutus hubungan pertemanan sepenuhnya sesudah melapor kepada guru.',
    ],
    answer: 1,
    explanation:
      'Pengambilan keputusan bertanggung jawab (Responsible Decision Making) dalam CASEL melatih pertimbangan etis, norma keselamatan, konsekuensi jangka panjang, dan kepedulian sosial.',
  },
  {
    id: 'lms26-vok-20',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Filosofi Pendidikan & Sistem Among (P.3)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Mengacu pada pemikiran Ki Hadjar Dewantara tentang pendidikan yang memerdekakan dan menuntun kodrat alam serta kodrat zaman murid, makna paling tepat dalam pembelajaran kejuruan SMK abad ke-21 adalah ....',
    options: [
      'Membebaskan murid menentukan sendiri mau belajar atau bermain tanpa bimbingan target pembelajaran.',
      'Menuntut semua murid menguasai seluruh keahlian persis dengan kecepatan dan cara yang seragam.',
      'Menuntun potensi unik dan kesiapan tiap murid agar bertumbuh dalam suasana aman-bermakna, seraya membekali literasi digital dan karakter kerja yang relevan dengan tantangan zamannya.',
      'Menolak segala bentuk pemanfaatan teknologi modern di sekolah demi melestarikan cara tradisional.',
      'Menyerahkan pendidikan karakter sepenuhnya kepada keluarga agar sekolah cukup mengajarkan teori kerja.',
    ],
    answer: 2,
    explanation:
      'Mendidik menurut Ki Hadjar Dewantara ialah menuntun kodrat potensi anak selaras tuntutan zamannya (kolaboratif, melek teknologi, berkarakter luhur) dengan kasih sayang dan arah jelas.',
  },
  {
    id: 'lms26-vok-21',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Lingkungan Belajar Aman & Anti-Bullying (P.3)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Di ruang praktik kejuruan kelas XI, seorang murid berpostur kecil sering dijadikan bahan candaan fisik dan disuruh mengerjakan seluruh pekerjaan beres-beres bengkel oleh beberapa teman kelompoknya dengan dalih tradisi senioritas bengkel. Tindakan guru yang paling mencerminkan penciptaan budaya belajar aman dan restoratif adalah ....',
    options: [
      'Menutup mata selama tidak terjadi cedera fisik serius atau kerusakan mesin bengkel.',
      'Meminta murid tersebut berusaha mengimbangi candaan temannya agar cepat akrab di bengkel.',
      'Menghentikan praktik penindasan segera, melindungi murid terdampak secara empatik, membimbing refleksi pihak pelaku tentang norma keselamatan psikologis bersama, dan memantau keadilan pembagian peran.',
      'Mengeluarkan murid korban dari kelompok dan menugaskannya menyapu kantor jurusan sendirian.',
      'Memanggil seluruh orang tua untuk menjatuhkan sanksi drop-out tanpa pemeriksaan atau pendampingan awal.',
    ],
    answer: 2,
    explanation:
      'Lingkungan belajar aman menuntut pencegahan perundungan tanpa toleransi, perlindungan korban, pendekatan restoratif menyadarkan pelaku, serta evaluasi keadilan peran di ruang praktik.',
  },
  {
    id: 'lms26-vok-22',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Deskripsi Rapor & Umpan Balik Berbasis Bukti (P.6)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Dari pengamatan proyek akhir semester kelas X SMK Vokasi, Dina mahir menganalisis penyebab masalah alur kerja tim dan komunikatif saat presentasi, tetapi masih terburu-buru saat verifikasi akhir keselamatan peralatan kerja. Deskripsi pelaporan capaian paling akurat dan membangun untuk Dina adalah ....',
    options: [
      '"Dina adalah siswi aktif dengan nilai praktik 85 yang membanggakan orang tua dan wali kelas."',
      '"Dina sangat teliti dalam seluruh aspek keselamatan kerja dan tidak memiliki kendala sepanjang semester."',
      '"Dina menunjukkan kekuatan menonjol dalam analisis pemecahan masalah dan komunikasi tim, serta perlu membiasakan pemeriksaan ulang daftar cek keselamatan sebelum menuntaskan praktik."',
      '"Dina sering ceroboh ketika praktik hampir selesai sehingga harus lebih serius belajar di kelas XI nanti."',
      '"Nilai sikap Dina perlu ditingkatkan lagi agar sejajar dengan peringkat lima besar di kelas X."',
    ],
    answer: 2,
    explanation:
      'Pelaporan asesmen yang baik menggambarkan secara akurat capaian spesifik yang menonjol dan aspek konkret yang masih butuh pembinaan berdasarkan bukti pengamatan.',
  },
  {
    id: 'lms26-vok-23',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Prinsip UbD Backward Design (P.1)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Tim guru kejuruan SMK sedang menyusun Modul Ajar berbasis kerangka Understanding by Design (UbD) untuk unit Pemecahan Masalah Produk/Layanan. Tentukan ketepatan langkah perancangan berikut (Sesuai / Tidak Sesuai).',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Menentukan pemahaman mendasar dan kompetensi bermakna yang harus dikuasai lulusan sebagai pijakan awal (Tahap 1).',
        answer: 0,
      },
      {
        text: 'Merancang tugas kinerja otentik dan kriteria rubrik bukti keberhasilan terlebih dahulu sebelum memilih aktivitas kelas (Tahap 2).',
        answer: 0,
      },
      {
        text: 'Memilih permainan ice-breaking dan daftar materi populer terlebih dahulu, lalu menyesuaikan tujuan belajar belakangan agar sesuai sisa waktu.',
        answer: 1,
      },
      {
        text: 'Memastikan seluruh aktivitas belajar di Tahap 3 terkait langsung mendukung pencapaian bukti asesmen yang sudah dirancang.',
        answer: 0,
      },
    ],
    explanation:
      'Alur mundur UbD dimulai dari penetapan hasil belajar diharapkan -> perancangan bukti & rubrik asesmen otentik -> baru penyusunan pengalaman belajar yang selaras.',
  },
  {
    id: 'lms26-vok-24',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Integrasi DUP & Inklusi Bengkel (P.2)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Dalam kelas X kejuruan yang heterogen terdapat murid bertipe pembelajar visual-spasial, murid yang cepat cemas membaca petunjuk teks padat, dan satu murid dengan hambatan pendengaran ringan. Evaluasilah kesesuaian penyesuaian praktik guru berikut dengan prinsip DUP (Sesuai / Tidak Sesuai).',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Menyediakan kartu instruksi visual bergambar alur langkah di stasiun praktik di samping penjelasan verbal yang jelas berhadapan wajah.',
        answer: 0,
      },
      {
        text: 'Menurunkan standar ketuntasan keselamatan kerja dan mutu bagi murid berhambatan pendengaran supaya mudah lulus.',
        answer: 1,
      },
      {
        text: 'Memfasilitasi pilihan cara menyampaikan hasil refleksi belajar (rekaman demonstrasi singkat, poster alur, atau ringkasan terstruktur).',
        answer: 0,
      },
      {
        text: 'Memisahkan kelompok berkemampuan lambat di ruang berbeda sepanjang semester tanpa interaksi dengan kelompok lain.',
        answer: 1,
      },
    ],
    explanation:
      'DUP memvariasikan sarana akses representasi dan cara ekspresi sambil mempertahankan tujuan utama serta keterlibatan bersama di lingkungan belajar inklusif.',
  },
  {
    id: 'lms26-vok-25',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Literasi Kritis & Keamanan Digital (P.4)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Guru TKJ/RPL/Pemasaran membiasakan murid kelas XI menggunakan sumber informasi daring dan alat kecerdasan buatan (AI) untuk riset proyek kejuruan. Tentukan apakah kebijakan pembelajaran berikut Tepat atau Kurang Tepat.',
    categories: ['Tepat', 'Kurang Tepat'],
    statements: [
      {
        text: 'Melatih murid membandingkan minimal dua sumber tepercaya serta memverifikasi kelogisan hasil keluaran digital sebelum diterapkan.',
        answer: 0,
      },
      {
        text: 'Mengizinkan murid menyalin mentah jawaban atau kode dari mesin pencari tanpa wajib memahami maupun menguji ulang fungsinya.',
        answer: 1,
      },
      {
        text: 'Mengedukasi perlindungan data pribadi, kerahasiaan akun sekolah, serta etika sitasi karya milik pihak lain.',
        answer: 0,
      },
      {
        text: 'Mengukur kecakapan TIK semata-mata dari seberapa cepat murid mengunduh bahan ajar digital ke ponsel.',
        answer: 1,
      },
    ],
    explanation:
      'Literasi digital kritis (P.4) menekankan verifikasi silang kredibilitas informasi, penalaran manusia, etika sitasi, serta kesadaran keamanan data.',
  },
  {
    id: 'lms26-vok-26',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Pengembangan KSE & Iklim Sekolah (S.2)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Sosial',
    subkompetensi: 'S.2',
    prompt:
      'Sekolah Menengah Kejuruan merancang program budaya kerja positif dan school well-being bagi seluruh warga jurusan produktif. Evaluasilah kesesuaian program berikut (Mendukung / Kurang Mendukung).',
    categories: ['Mendukung', 'Kurang Mendukung'],
    statements: [
      {
        text: 'Menyediakan saluran aman dan dipercaya bagi murid untuk menyampaikan kendala belajar, konflik tim, atau pengalaman intimidasi di bengkel.',
        answer: 0,
      },
      {
        text: 'Mewajibkan kebiasaan saling menyapa, memberi apresiasi atas progres belajar rekan, dan menyelesaikan perselisihan melalui dialog.',
        answer: 0,
      },
      {
        text: 'Memajang papan peringkat nilai praktikum terendah di lobi bengkel guna memacu rasa malu dan kompetisi antar-siswa.',
        answer: 1,
      },
      {
        text: 'Membatasi kegiatan pembinaan sosial-emosional hanya bagi murid yang pernah melanggar tata tertib saja.',
        answer: 1,
      },
    ],
    explanation:
      'SEL sebagai budaya sekolah (school well-being) merangkul seluruh warga melalui rasa aman, komunikasi terbuka, apresiasi progres, dan relasi saling hormat.',
  },
  {
    id: 'lms26-vok-27',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Penanganan Masalah Praktik Berbasis KSE & Coaching (P.3)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Di bengkel kejuruan, terdapat murid yang sangat cepat menyelesaikan pekerjaan individu tetapi mudah kesal dan enggan bekerja saat ditempatkan dalam tugas kolaborasi kelompok. Pendekatan paling tepat yang dapat dilakukan guru untuk melatih keterampilan berelasi dan regulasi diri murid tersebut adalah .... (Pilih semua yang benar)',
    options: [
      'Menyediakan peran menantang seperti pemantau mutu atau pembimbing rekan (tutor sebaya) disertai pelatihan mendengar pendapat anggota lain secara aktif.',
      'Memberikan refleksi terstruktur tentang apa kekuatan diri sekaligus manfaat sinergi perspektif tim dalam proyek kerja kompleks.',
      'Memfasilitasi tahapan bertahap dari diskusi berpasangan (Think-Pair-Share) sebelum masuk dinamika kelompok besar.',
      'Membebaskan murid tersebut mengerjakan tugas sendiri sepanjang tahun agar tidak terganggu temannya.',
      'Memarahinya di depan kelompok agar ia tunduk pada pilihan mayoritas tanpa menyampaikan idenya.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Murid berkecepatan tinggi namun canggung berkolaborasi perlu fasilitasi bertahap, peran tanggung jawab konstruktif, dan refleksi keterampilan berelasi (CASEL).',
  },
  {
    id: 'lms26-vok-28',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Asesmen Awal Holistik Kognitif & Nonkognitif (P.6)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Pada minggu pertama kelas X SMK Vokasi, wali kelas produktif merancang asesmen awal yang komprehensif untuk memetakan profil belajar murid. Instrumen dan pemanfaatan data yang PALING tepat meliputi .... (Pilih semua yang benar)',
    options: [
      'Angket singkat beserta obrolan santai mengenai minat karier, preferensi belajar (visual/praktik/diskusi), serta kenyamanan berinteraksi dalam kelompok.',
      'Tugas studi kasus atau demonstrasi awal sederhana guna memetakan pengetahuan prasyarat serta potensi miskonsepsi konsep sebelum mengajar topik baru.',
      'Memakai hasil pemetaan untuk merancang variasi media belajar, pengelompokan fleksibel, serta penyiapan scaffolding di kelas.',
      'Mengumumkan skor tes diagnostik awal seluruh murid sebagai daftar peringkat kemampuan tetap sepanjang kelas X.',
      'Menjadikan angka asesmen diagnostik awal sebagai bobot penentu ketidaklulusan rapor semester pertama.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Asesmen diagnostik awal memadukan aspek kognitif dan nonkognitif murni untuk kepentingan perancangan layanan belajar, bukan untuk memeringkat atau menghukum nilai rapor.',
  },
  {
    id: 'lms26-vok-29',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Strategi Menghadapi Keterbatasan Sarana Kontekstual (P.5)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Sebuah SMK kejuruan di daerah menghadapi keterbatasan jumlah unit peralatan praktik mutakhir dibanding jumlah murid di kelas. Strategi pembelajaran adaptif yang paling tepat dan kreatif adalah .... (Pilih semua yang benar)',
    options: [
      'Menerapkan model rotasi stasiun belajar: sebagian kelompok menganalisis kasus pada simulator digital/peraga sederhana sementara kelompok lain bergiliran menggunakan unit utama.',
      'Memaksimalkan sumber daya dan studi kasus nyata komunitas/mitra usaha sekitar sekolah agar konteks belajar tetap otentik.',
      'Membekali setiap stasiun rotasi dengan lembar kerja bermakna sehingga murid yang menunggu giliran tetap aktif belajar konseptual.',
      'Menghentikan seluruh praktik sepanjang tahun dan hanya menugaskan murid menyalin materi buku cetak di ruang teori.',
      'Membiarkan 80 persen kelas bermain bebas sambil hanya mengamati 3 murid unggulan praktik di bengkel.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Rotasi stasiun bermakna, pemanfaatan simulasi digital, serta pelibatan sumber belajar komunitas lokal menjaga seluruh murid belajar aktif meski alat terbatas.',
  },
  {
    id: 'lms26-vok-30',
    bank: 'PCK',
    topic: 'PCK SMK Vokasi · Penyelarasan Kurikulum & Keterampilan Abad 21 (PF.4)',
    prodiScope: ['smk-vokasi'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.4',
    prompt:
      'Dalam merevisi Alur Tujuan Pembelajaran (ATP) program keahlian SMK Vokasi agar responsif terhadap tuntutan zaman, unsur penting mana sajakah yang wajib terintegrasi di dalam proyek pembelajaran murid? (Pilih semua yang benar)',
    options: [
      'Penalaran kritis dalam memecahkan kendala nyata konteks kerja, bukan sekadar menghafal prosedur rutin.',
      'Kepatuhan pada budaya aman kerja (K3), tanggung jawab etika digital, serta kesadaran dampak lingkungan (green practices).',
      'Komunikasi efektif dalam layanan, kerja sama tim lintas peran, serta kebiasaan refleksi perbaikan diri berkelanjutan.',
      'Pembatasan ketat topik pelajaran agar hanya meniru soal latihan ujian tertulis sepuluh tahun lalu.',
      'Penghapusan proyek kolaboratif dengan alasan proyek memperlambat target penyampaian materi teks di papan tulis.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pengembangan kurikulum SMK yang relevan memadukan kompetensi teknis konseptual dengan bernalar kritis, K3/lingkungan, etika digital, kolaborasi, dan refleksi.',
  },

  // ================= PPKN (4 BUTIR TAMBAHAN BERBASIS LMS PPG) =================
  {
    id: 'lms26-ppkn-01',
    bank: 'PCK',
    topic: 'PCK PPKn · Pembelajaran Mendalam Nilai Demokrasi & Kasus Nyata (P.3)',
    prodiScope: ['ppkn'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Pada topik musyawarah mufakat dan tanggung jawab warga negara kelas VIII SMP, murid sudah hafal definisi prinsip demokrasi namun kerap memaksakan kehendak saat berdiskusi kelompok. Rancangan Pembelajaran Mendalam paling tepat untuk menjembatani teori menjadi sikap nyata adalah ....',
    options: [
      'Menyuruh murid menyalin ulang bunyi sila keempat dan menghafal contoh sejarah sidang bersejarah.',
      'Memfasilitasi simulasi musyawarah penyelesaian masalah nyata tata tertib atau fasilitas kelas, mendampingi etika mendengar perbedaan pendapat, lalu mengajak murid merefleksikan pengalaman pengambilan keputusan adil.',
      'Menggantikan diskusi dengan tugas merangkum makalah individu tentang sistem pemilu berbagai negara.',
      'Memberi hukuman poin pengurangan nilai kepada setiap siswa yang suaranya terdengar berbeda dari ketua.',
      'Mengadakan kuis daring definisi lembaga negara dengan peringkat tercepat.',
    ],
    answer: 1,
    explanation:
      'Pendidikan Pancasila bermakna (P.3 / PF.2) dialami langsung melalui praktik musyawarah atas persoalan hidup bersama di sekolah disertai refleksi nilai.',
  },
  {
    id: 'lms26-ppkn-02',
    bank: 'PCK',
    topic: 'PCK PPKn · Komunikasi Inklusif & Anti-Stereotip (S.1)',
    prodiScope: ['ppkn'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.1',
    prompt:
      'Dalam diskusi topik keberagaman di kelas X PPKn, dua kelompok murid saling melontarkan generalisasi negatif mengenai tradisi daerah kelompok lain. Sikap guru PPKn yang paling tepat mencerminkan keteladanan komunikasi empatik dan moderasi adalah ....',
    options: [
      'Menghentikan pembahasan topik keberagaman supaya suasana kelas kembali aman tanpa perselisihan.',
      'Menegaskan aturan komunikasi tanpa merendahkan kelompok mana pun, membimbing murid menelusuri konteks filosofi di balik perbedaan budaya, dan menumbuhkan empati perspektif bersama.',
      'Membiarkan perdebatan berlangsung panas sebagai wujud kebebasan berpendapat mutlak di kelas demokrasi.',
      'Menentukan siapa kelompok yang tradisinya paling benar agar perdebatan segera berakhir.',
      'Memberi sanksi skorsing kepada seluruh anggota kelompok yang terlibat diskusi pada hari itu.',
    ],
    answer: 1,
    explanation:
      'Guru PPKn meneladankan dialog bermartabat yang menghentikan stereotip, mendorong pemahaman lintas perspektif budaya, dan membangun norma ruang aman.',
  },
  {
    id: 'lms26-ppkn-03',
    bank: 'PCK',
    topic: 'PCK PPKn · Evaluasi Asesmen Sikap & Praktik Kewarganegaraan (P.6)',
    prodiScope: ['ppkn'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Bu Ratna merancang asesmen autentik untuk proyek kewarganegaraan siswa kelas XI (aksi kepedulian komunitas sekitar sekolah). Tentukan kesesuaian prinsip penilaian berikut (Sesuai / Tidak Sesuai).',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Penilaian mencakup proses identifikasi persoalan nyata, etika wawancara warga, kolaborasi tim, dan refleksi dampak tindak lanjut.',
        answer: 0,
      },
      {
        text: 'Murid dilibatkan melakukan penilaian diri (self-assessment) serta umpan balik teman sejawat tentang partisipasi musyawarah dalam kelompok.',
        answer: 0,
      },
      {
        text: 'Kelompok dinilai semata-mata berdasarkan kemewahan dan tebalnya penjilidan makalah laporan tanpa memeriksa proses di lapangan.',
        answer: 1,
      },
      {
        text: 'Kriteria pencapaian dikunci melalui pilihan ganda hafalan nomor pasal peraturan perundang-undangan sebagai satu-satunya nilai proyek.',
        answer: 1,
      },
    ],
    explanation:
      'Asesmen otentik PPKn mengukur keterpaduan penalaran nilai, tindakan nyata beretika di komunitas, kolaborasi, serta refleksi diri peserta didik.',
  },
  {
    id: 'lms26-ppkn-04',
    bank: 'PCK',
    topic: 'PCK PPKn · Pendidikan Nilai, Inklusi & Kebinekaan (PF.3)',
    prodiScope: ['ppkn'],
    source: 'Kurasi LMS PPG & 4 Kompetensi Guru 2026',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Dalam merancang pembelajaran Penguatan Profil Pelajar Pancasila dan Kebinekaan yang sesuai karakteristik murid majemuk di kelas, tindakan pedagogis yang paling relevan dilakukan guru PPKn adalah .... (Pilih semua yang benar)',
    options: [
      'Menghadirkan dilema nilai keseharian yang dekat dengan kehidupan remaja agar murid berlatih menalar pilihan etis secara bertanggung jawab.',
      'Menjadikan pengalaman keberagaman latar keluarga dan tradisi lokal murid sebagai sumber belajar yang dihargai setara.',
      'Memberikan beragam cara bagi murid menyuarakan gagasan kewargaan (esai opini, poster kampanye, podcast dialog, atau presentasi kelompok).',
      'Menghindari pembahasan isu perbedaan sosial sepenuhnya agar tidak menimbulkan pertanyaan sulit dari murid.',
      'Menilai kepribadian siswa hanya berdasarkan kepatuhan menyalin teks nilai moral dari papan tulis.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Pembelajaran PPKn kontekstual mengintegrasikan penalaran dilema nyata, penghormatan latar budaya murid sebagai aset belajar, dan ragam ekspresi DUP.',
  },
];
