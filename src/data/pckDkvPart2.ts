import type { ExamQuestion } from '../types/exam';

/**
 * Bank PCK Desain Komunikasi Visual (DKV) SMK - Bagian 2 (25 Soal):
 * 4. Branding, Identitas Visual, Packaging Dieline, UI/UX & Literasi AI Etis (13)
 * 5. Etika HKI Desainer, K3LH Komputer Grafis, Asesmen Portofolio & SJT TeFa DKV (12)
 */
export const PCK_DKV_PART_2: ExamQuestion[] = [
  // === 4. BRANDING, KEMASAN (PACKAGING), UI/UX & ETIKA AI (13) ===
  {
    id: 'pck-dkv-31',
    bank: 'PCK',
    topic: 'PCK DKV · Branding & Kemasan',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam proyek merancang logo usaha teh herbal lokal kelas XI DKV, seorang siswa menggambar ilustrasi sangat rumit berisi gradasi warna pelangi, daun tipis 12 helai, cangkir detail, dan bayangan drop-shadow berat. Saat logo diuji cetak pada cap stempel nota maupun ikon favicon 16 x 16 piksel, bentuknya menyatu buram tidak terbaca. Prinsip dasar perancangan identitas logo yang perlu dilatihkan guru kepada siswa adalah ....',
    options: [
      'Menyederhanakan bentuk menjadi siluet kuat agar lolos uji skalabilitas dan reproduksi satu warna (solid black/white test) terlebih dahulu sebelum menambahkan warna.',
      'Meningkatkan ukuran canvas Photoshop ke 8000 x 8000 piksel lalu mempertahankan seluruh gradasi pelangi.',
      'Mengharuskan perusahaan hanya mencetak logo pada baliho minimal ukuran 3 meter.',
      'Menambahkan teks motto perusahaan sepanjang dua paragraf di dalam lingkaran logo.',
      'Mengubah logo menjadi foto pemandangan kebun teh nyata tanpa penyederhanaan grafis.',
    ],
    answer: 0,
    explanation:
      'Logo yang tangguh harus lolos uji kesederhanaan, daya ingat, skalabilitas ekstrem (dari stempel/favicon hingga papan nama), serta uji hitam-putih solid (monochrome silhouette) tanpa bergantung pada efek gradasi atau drop-shadow semata.',
  },
  {
    id: 'pck-dkv-32',
    bank: 'PCK',
    topic: 'PCK DKV · Branding & Kemasan',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Siswa kelas XII DKV menyusun Graphic Standard Manual (GSM) atau Brand Guidelines sederhana bagi mitra UMKM makanan ringan. Komponen standar apa saja yang esensial dimuat dalam buku panduan identitas merek tersebut? (Pilih lebih dari satu)',
    options: [
      'Clear space (area aman bebas elemen lain di sekeliling logo) serta ukuran minimum logo untuk media cetak dan layar.',
      'Kode spesifikasi warna resmi lengkap (CMYK, RGB, HEX, serta opsional Pantone) dan aturan tipografi primer/sekunder merek.',
      'Daftar lengkap nomor induk kependudukan seluruh pembeli produk UMKM tersebut.',
      'Contoh penerapan yang benar dan larangan penyalahgunaan logo (distorsi, ganti warna sembarangan, rotasi miring, meletakkan di latar kontras rendah).',
      'Kumpulan file video pribadi pembuat logo saat mengerjakan tugas di rumah.',
    ],
    answer: [0, 1, 3],
    explanation:
      'Graphic Standard Manual (GSM) menjaga konsistensi merek di berbagai vendor dan media lewat aturan ruang aman (clear space), ukuran minimal, palet warna lintas kanal, hierarki tipografi resmi, serta panduan penggunaan yang diizinkan vs dilarang.',
  },
  {
    id: 'pck-dkv-33',
    bank: 'PCK',
    topic: 'PCK DKV · Branding & Kemasan',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Ketika membuat jaring-jaring kemasan karton (packaging dieline) pada perangkat lunak vektor untuk dicetak sekaligus dipotong pisau pon (die-cut), siswa mencampur seluruh garis lipatan dan garis potong luar menjadi satu warna hitam solid yang menyatu dengan grafis produk. Akibatnya operator cetak ikut mencetak garis panduan potong ke atas permukaan kemasan. Standar teknis penyiapan dieline yang benar diajarkan guru adalah ....',
    options: [
      'Memisahkan garis struktur dieline di layer khusus paling atas yang diset overprint stroke non-printing spot color (membedakan jenis garis solid untuk Cut / potong, garis putus-putus untuk Crease / lipatan, dan titikan/khusus untuk Perforation / sobekan).',
      'Menghapus seluruh garis tepi batas potong sebelum mencetak dan meminta tukang potong mengira-ngira ukurannya.',
      'Mewarnai seluruh kotak kemasan dengan warna hitam penuh agar garis potong tersamar.',
      'Menyimpan dieline di dalam format file MP3 agar ringan dibuka.',
      'Mencetak kemasan menggunakan kertas HVS 70 gram lalu melipatnya tanpa garis panduan pola.',
    ],
    answer: 0,
    explanation:
      'Dalam industri packaging prepress, garis structural dieline ditempatkan pada layer terpisah bernama "Dieline", ditandai jelas konvensi garis (Cut solid vs Crease/Fold putus-putus), dan diatur sebagai spot color overprint/non-print saat pelat cetak diproses.',
  },
  {
    id: 'pck-dkv-34',
    bank: 'PCK',
    topic: 'PCK DKV · Branding & Kemasan',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.1',
    prompt:
      'Guru DKV merancang proyek Desain Kemasan Ramah Lingkungan untuk mendukung pencapaian Profil Lulusan yang bernalar kritis, kreatif, dan peduli lingkungan pada Satuan Pendidikan SMK. Langkah siswa yang mencerminkan integrasi tujuan pendidikan kejuruan secara utuh adalah .... (Pilih lebih dari satu)',
    options: [
      'Menghitung efisiensi bahan karton food-grade dan mengurangi lapisan plastik laminasi berlebih tanpa mengurangi fungsi proteksi produk.',
      'Memilih material kertas daur ulang/bersertifikat terurai yang selaras dengan identitas merek serta mencantumkan ikon edukasi daur ulang yang jelas pada panel kemasan.',
      'Menambahkan tiga lapis kotak styrofoam sekali pakai di dalam kemasan agar tampak lebih besar dan mahal.',
      'Menguji langsung purwarupa struktur kemasan (uji ketahanan tumpuk & keamanan pengiriman singkat) serta mengevaluasi dampaknya secara reflektif.',
      'Menghilangkan seluruh informasi komposisi produk serta tanggal kedaluwarsa demi tampilan minimalis kosong.',
    ],
    answer: [0, 1, 3],
    explanation:
      'Desain kemasan profesional di SMK mengintegrasikan fungsi proteksi teknis, efisiensi material cetak, komunikasi legal/edukasi produk (termasuk informasi bahan & ajakan daur ulang), serta tanggung jawab keberlanjutan lingkungan.',
  },
  {
    id: 'pck-dkv-35',
    bank: 'PCK',
    topic: 'PCK DKV · Branding & Kemasan',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada desain kartu nama bisnis eksklusif milik klien arsitek, klien meminta hanya tulisan merek di bagian tengah tampak mengilap timbul dengan efek warna logam keemasan, sementara latar kertas tebal bertekstur tetap doff kesat tanpa pantulan plastik menyeluruh. Teknik finishing pascacetak yang paling tepat direkomendasikan siswa DKV adalah ....',
    options: [
      'Laminasi Glossy menyeluruh di kedua sisi kertas.',
      'Kombinasi dasar Matte/Doff dengan Hot Foil Stamping emas atau Spot UV + Emboss selektif pada area logo saja (disiapkan dalam pelat/masking vektor K100 terpisah).',
      'Mencetak kartu nama di printer kasir termal berwarna hitam putih.',
      'Melapisi seluruh permukaan kertas dengan lakban bening lebar.',
      'Menambah intensitas brightness file JPEG menjadi +80 sebelum dikirim ke percetakan.',
    ],
    answer: 1,
    explanation:
      'Hot foil stamping menghadirkan efek kilau metalik tajam dan Spot UV memberikan kilap lokal di area tertentu kontras dengan permukaan kertas matte/doff. Desainer harus menyiapkan artwork masking 100% solid hitam pada artboard terpisah untuk acuan klise/film finishing.',
  },
  {
    id: 'pck-dkv-36',
    bank: 'PCK',
    topic: 'PCK DKV · UI/UX & Media Digital',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.4',
    prompt:
      'Sejalan dengan perkembangan industri kreatif digital dalam Kurikulum Merdeka DKV Fase F, siswa mempelajari perancangan desain antarmuka pengguna (UI) halaman aplikasi katalog UMKM sebelum masuk tahap pengodean web. Evaluasi langkah desain berbasis alur kerja UX modern berikut.',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Memulai dari riset masalah pengguna & penyusunan wireframe abu-abu low-fidelity terlebih dahulu untuk menguji alur navigasi dan struktur konten sebelum sibuk memilih warna serta ikon dekoratif.',
        answer: 0,
        reason: 'Low-fidelity wireframing memastikan arsitektur informasi dan alur tugas pengguna jelas sebelum tahap visual high-fidelity.',
      },
      {
        text: 'Langsung membuat animasi transisi kompleks dan pemilihan foto estetis sejak hari pertama tanpa mengetahui siapa calon pengguna atau fitur utama yang dibutuhkan.',
        answer: 1,
        reason: 'Melompati riset pengguna dan struktur alur menyebabkan antarmuka terlihat cantik tetapi gagal menyelesaikan masalah usability pengguna.',
      },
      {
        text: 'Memastikan ukuran target sentuh tombol utama di layar seluler cukup nyaman dijangkau jari (minimal kisaran 44-48 px) dengan label tindakan yang tegas.',
        answer: 0,
        reason: 'Standar target sentuh mobile (Fitts Law / panduan aksesibilitas) mencegah salah tekan dan mempercepat konversi tugas pengguna.',
      },
    ],
    explanation:
      'Alur kerja UI/UX modern bergerak berurutan dari empati/riset kebutuhan, struktur alur (wireframe low-fidelity), uji keterpakaian, hingga penyempurnaan visual high-fidelity yang aksesibel.',
  },
  {
    id: 'pck-dkv-37',
    bank: 'PCK',
    topic: 'PCK DKV · UI/UX & Media Digital',
    pckFocus: 'Media/ICT & Simulator',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.1',
    prompt:
      'Dalam proyek ilustrasi poster budaya Nusantara kelas XI, dua siswa menggunakan generator gambar AI untuk membuat keseluruhan ilustrasi akhir dalam 10 detik, lalu menempelkan teks judul dan langsung mengklaim poster tersebut sebagai "100% lukisan digital manual buatan tangan" saat presentasi penilaian autentik. Sikap etis, tegas, sekaligus edukatif yang paling tepat diambil guru adalah ....',
    options: [
      'Membiarkan saja karena gambarnya terlihat rapi dan sekolah bisa cepat menayangkannya di media sosial.',
      'Menegaskan integritas akademik dan HKI tanpa mempermalukan siswa secara kasar di depan umum: meluruskan perbedaan antara penggunaan AI hanya sebagai referensi moodboard eksplorasi dengan kewajiban transparansi proses serta penciptaan karya vektor/ilustrasi orisinal di file sumber bertingkat (editable layers).',
      'Langsung mengeluarkan kedua siswa dari jurusan DKV permanen tanpa sesi pembinaan.',
      'Meminta siswa lain turut memakai AI agar adil lalu menghapus materi menggambar manual.',
      'Memberikan nilai sempurna sekaligus menunjuk keduanya sebagai juara lomba cipta karya orisinal.',
    ],
    answer: 1,
    explanation:
      'Keteladanan etika profesi (K.1) membimbing literasi AI secara jujur: teknologi AI boleh dipakai terbatas sebagai eksplorasi konsep/moodboard bila diizinkan brief, namun klaim palsu atas karya generatif melanggar kejujuran akademik dan menafikan kompetensi inti berkarya DKV (yang dibuktikan lewat sketsa dan file kerja berlapis).',
  },
  {
    id: 'pck-dkv-38',
    bank: 'PCK',
    topic: 'PCK DKV · UI/UX & Media Digital',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Sekolah berada di kawasan sentra kerajinan gerabah dan batik tradisional yang sedang menghadapi penurunan minat pembeli muda. Guru mengajak siswa kelas XI DKV menyusun proyek "Rebranding Kemasan & Katalog Digital Produk Lokal" menggunakan kekayaan kearifan lokal sekitar. Praktik pembelajaran kontekstual manakah yang paling tepat? (Pilih lebih dari satu)',
    options: [
      'Siswa mewawancarai langsung pengrajin setempat untuk menggali nilai filosofi motif lokal sebelum menerjemahkannya ke bahasa visual modern.',
      'Siswa menjiplak persis kemasan teh pabrik multinasional lalu hanya mengganti nama desanya secara asal.',
      'Siswa melakukan riset pasar generasi muda untuk merancang narasi cerita merek (brand storytelling) yang jujur tanpa memutus akar budaya pengrajin.',
      'Siswa mengabaikan usulan pengrajin dengan alasan selera orang tua pengrajin ketinggalan zaman.',
      'Siswa mempresentasikan purwarupa katalog & kemasan kembali kepada komunitas pengrajin untuk mendapatkan umpan balik kelayakan nyata.',
    ],
    answer: [0, 2, 4],
    explanation:
      'Pemanfaatan kearifan lokal dan konteks lingkungan (P.5) bermakna bila siswa menghargai narasi asli komunitas, memadukan riset desain masa kini dengan nilai budaya otentik, dan memvalidasikan karya ke pemangku kepentingan nyata.',
  },
  {
    id: 'pck-dkv-39',
    bank: 'PCK',
    topic: 'PCK DKV · Etika Profesi & HKI',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.1',
    prompt:
      'Dalam produksi Teaching Factory (TeFa) jasa desain kalender dan kemasan komersial berbayar untuk klien eksternal, siswa sering tergoda mengunduh font dan vektor gratis dari situs bebas tanpa memeriksa jenis lisensinya. Evaluasi kepatuhan HKI (Hak Kekayaan Intelektual) dalam praktik desainer berikut.',
    categories: ['Etis & Sah', 'Melanggar HKI'],
    statements: [
      {
        text: 'Menggunakan font berlisensi SIL Open Font License (OFL) atau membeli lisensi komersial resmi sesuai peruntukan klien yang dicantumkan dalam anggaran produksi proyek.',
        answer: 0,
        reason: 'SIL OFL mengizinkan penggunaan komersial maupun cetak secara legal tanpa royalti tersembunyi, atau lisensi resmi dibeli sesuai cakupan klien.',
      },
      {
        text: 'Memakai font bertanda "Free for Personal Use Only" untuk dicetak pada 5.000 dus kemasan produk makanan yang dijual luas oleh perusahaan klien.',
        answer: 1,
        reason: 'Lisensi "Personal Use Only" melarang keras penggunaan pada produk atau materi promosi komersial tanpa membeli lisensi komersial.',
      },
      {
        text: 'Mengambil foto jepretan fotografer profesional dari Google Images lalu menghapus watermark situs stok foto menggunakan Content-Aware Fill untuk dipasang di billboard klien.',
        answer: 1,
        reason: 'Menghapus watermark dan memakai foto berhak cipta tanpa izin merupakan pelanggaran berat hukum hak cipta dan etika profesi.',
      },
    ],
    explanation:
      'Guru DKV wajib menanamkan integritas HKI sejak dini di SMK: membaca detail lisensi (SIL OFL, Creative Commons CC-BY vs CC-BY-NC, Personal vs Commercial Use) dan tidak pernah menghilangkan watermark karya orang lain.',
  },
  {
    id: 'pck-dkv-40',
    bank: 'PCK',
    topic: 'PCK DKV · Metode & Kurikulum',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Beberapa siswa di kelas X DKV terlihat cemas dan malu menunjukkan sketsa tangan kasar (thumbnail sketches) karena merasa "tidak bakat menggambar" dibanding dua teman sekelas yang jago ilustrasi manga. Akibatnya mereka mogok memulai proses kreatif desain poster. Intervensi psikologis aman dan pedagogis terbaik guru adalah ....',
    options: [
      'Mengharuskan semua siswa menggambar potret realis wajah manusia di depan kelas untuk menguji mental.',
      'Menjelaskan bahwa thumbnail sketch di DKV bukan kompetisi melukis indah melainkan alat berpikir cepat struktur tata letak (kotak, garis, blok teks) untuk membandingkan 4-6 alternatif ide dalam 10 menit, serta merayakan keberanian eksplorasi ide di papan tempel.',
      'Mengizinkan kelompok siswa tersebut cukup menuliskan teks esai tanpa perlu membuat rancangan visual apa pun.',
      'Membandingkan hasil sketsa mereka secara sinis di hadapan kelas agar termotivasi.',
      'Langsung memberikan skor terendah di minggu pertama agar mereka cepat mencari jurusan lain.',
    ],
    answer: 1,
    explanation:
      'Mengubah persepsi bahwa sketsa thumbnail adalah "alat berpikir tata letak" bukan pameran keindahan gambar realis menghapus ketakutan gagal (art anxiety), menciptakan iklim psikologis aman (P.3), dan mendorong keberanian iterasi kreatif.',
  },
  {
    id: 'pck-dkv-41',
    bank: 'PCK',
    topic: 'PCK DKV · Metode & Kurikulum',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Sekolah menyusun asesmen diagnostik awal kelas X DKV yang menunjukkan kesenjangan tajam: sepertiga siswa sudah mahir menggunakan komputer dan aplikasi desain sejak SMP, sementara dua pertiga lainnya berasal dari SMP yang belum pernah mengoperasikan mouse pengolah grafis maupun software desain sama sekali. Rancangan strategi diferensiasi proses yang paling efektif pada 4 minggu awal adalah ....',
    options: [
      'Mengajar langsung dengan materi tingkat tinggi desain 3D agar kelompok mahir tertantang, meski dua pertiga siswa tertinggal.',
      'Menerapkan model TaRL / diferensiasi berjenjang: siswa pemula dibimbing lewat stasiun dasar antarmuka komputer, manajemen file vektor, dan lembar kerja latihan bentuk dasar terpandu (guided step cards), sementara kelompok mahir diberi tantangan studi kasus creative brief kompleks tanpa menambah beban tugas hafalan sia-sia, lalu berkolaborasi sebagai tutor sebaya pada sesi tinjauan karya.',
      'Melarang siswa yang sudah mahir menyentuh komputer selama 2 bulan penuh agar menunggu teman-temannya.',
      'Meminta siswa pemula mengikuti kursus berbayar di luar sekolah tanpa bimbingan di jam pelajaran.',
      'Menyatukan semua tugas menjadi ujian pilihan ganda teori sejarah seni sepanjang satu semester.',
    ],
    answer: 1,
    explanation:
      'Diferensiasi dan Teaching at the Right Level (TaRL) menjaga target capaian CP Fase E DKV tercapai lewat jalur penyangga teknis bagi pemula sekaligus pengayaan kompleksitas kasus kreatif bagi siswa yang sudah terampil lebih dulu.',
  },
  {
    id: 'pck-dkv-42',
    bank: 'PCK',
    topic: 'PCK DKV · Inovasi & PTK DKV',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.4',
    prompt:
      'Pada penyusunan Alur Tujuan Pembelajaran (ATP) konsentrasi keahlian DKV untuk menyelaraskan kurikulum sekolah dengan kebutuhan industri kreatif terkini (seperti konten media sosial vertikal, purwarupa UI mobile, dan produksi cetak digital), tindakan guru dalam mengadaptasi kurikulum secara profesional adalah ....',
    options: [
      'Tetap menggunakan silabus tahun 2009 tentang cetak sablon film manual 100% tanpa menyentuh media digital modern.',
      'Mengadakan sinkronisasi kurikulum bersama mitra industri (agensi kreatif/percetakan/studio lokal) untuk memetakan kompetensi esensial terkini ke proyek terpadu tanpa menghilangkan fondasi nirmana, tipografi, dan warna.',
      'Menghapus mata pelajaran dasar nirmana dan tipografi karena dianggap tidak penting di era aplikasi templat.',
      'Mengganti seluruh capaian pembelajaran kurikulum nasional dengan daftar fitur satu merek aplikasi berbayar saja.',
      'Meminta siswa memilih sendiri materi bebas di YouTube tanpa alur ketercapaian capaian pembelajaran.',
    ],
    answer: 1,
    explanation:
      'Pengembangan kurikulum adaptif di SMK (PF.4) menjembatani fondasi desain abadi (nirmana, tipografi, warna, komunikasi visual) dengan alat dan format industri kreatif mutakhir melalui sinkronisasi bersama DUDIKA.',
  },
  {
    id: 'pck-dkv-43',
    bank: 'PCK',
    topic: 'PCK DKV · Inovasi & PTK DKV',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.5',
    prompt:
      'Guru DKV menyadari bahwa 70% siswa kelas XI langsung membuka software grafis tanpa meriset brief maupun membuat sketsa alternatif ide, sehingga banyak karya akhir berhenti pada desain klise yang tidak menjawab masalah klien. Guru berencana melaksanakan Penelitian Tindakan Kelas (PTK) dua siklus dengan inovasi "Kanvas Proses Kreatif 3-Tahap Sebelum Layar". Indikator perbaikan praktik profesional mana saja yang tepat diukur? (Pilih lebih dari satu)',
    options: [
      'Peningkatan keragaman variasi ide awal dan ketajaman kesesuaian konsep akhir terhadap pesan brief dalam lembar rubrik portofolio.',
      'Kenaikan durasi jam bermain gim daring siswa di luar waktu sekolah.',
      'Persentase siswa yang mampu menjelaskan alasan teknis pemilihan warna, grid, dan tipografi secara argumentatif saat presentasi kritik karya.',
      'Jumlah klik iklan banner pada situs web pribadi guru di luar pembelajaran.',
      'Catatan observasi refleksi siklus 1 untuk memperbaiki kelemahan instrumen lembar kerja sebelum masuk ke siklus 2.',
    ],
    answer: [0, 2, 4],
    explanation:
      'PTK reflektif yang bermutu (PF.5) mengukur dampak langsung intervensi instruksional pada kualitas proses berpikir desain murid, ketepatan argumen kreatif, dan menggunakan temuan siklus 1 untuk memperbaiki instrumen siklus 2.',
  },

  // === 5. ETIKA, K3LH STUDIO, ASESMEN & SJT TEACHING FACTORY DKV (12) ===
  {
    id: 'pck-dkv-44',
    bank: 'PCK',
    topic: 'PCK DKV · Etika Profesi & HKI',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.1',
    prompt:
      'Seorang alumni sukses menawarkan komisi pribadi kepada guru DKV agar membujuk siswa membeli paket templat desain bajakan (cracked software & bundled stolen fonts) supaya tugas kelas XI cepat selesai sebelum audit akreditasi bengkel. Sikap profesional guru sesuai kode etik pendidik dan integritas desainer adalah ....',
    options: [
      'Menerima penawaran diam-diam asalkan biaya dibagi merata dengan pengurus kelas.',
      'Menolak dengan tegas dan santun, melaporkan kebutuhan perangkat lunak legal ke pihak sekolah atau memanfaatkan alternatif open-source berkualitas (seperti Inkscape, GIMP, Scribus, Krita, Penpot, Blender, serta Google Fonts/SIL OFL), dan menjadikannya teladan anti-pembajakan bagi murid.',
      'Menyetujui penggunaan perangkat lunak bajakan asal tidak diunggah ke internet.',
      'Meminta alumni mengirim uang komisi langsung lewat siswa ketua kelas.',
      'Mengubah seluruh praktik DKV menjadi menulis teori tangan tanpa menyentuh komputer.',
    ],
    answer: 1,
    explanation:
      'Kode etik guru (K.1) melarang keras konflik kepentingan maupun melegalkan praktik pembajakan perangkat lunak. Mengoptimalkan ekosistem open-source legal dan lisensi pendidikan resmi justru membangun budaya kerja profesional yang bersih.',
  },
  {
    id: 'pck-dkv-45',
    bank: 'PCK',
    topic: 'PCK DKV · Etika Profesi & HKI',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.3',
    prompt:
      'Praktik jangka panjang di laboratorium komputer grafis selama 4-6 jam berturut-turut sering menimbulkan keluhan kelelahan mata (digital eye strain), nyeri leher, dan pergelangan tangan (CTS). Evaluasi penerapan prosedur K3LH ergonomis di lab DKV berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Menerapkan jeda rutin aturan 20-20-20 (setiap 20 menit menatap layar, alihkan pandangan sejauh 20 kaki/6 meter selama 20 detik) disertai peregangan pergelangan tangan saat transisi sesi praktik.',
        answer: 0,
        reason: 'Aturan 20-20-20 dan micro-break peregangan terbukti merelaksasi otot siliaris mata serta mencegah cedera regangan berulang (RSI/CTS) akibat penggunaan mouse dan pen tablet.',
      },
      {
        text: 'Memosisikan bagian atas monitor sejajar atau sedikit di bawah ketinggian mata (pandangan sedikit melandai 10-20 derajat) pada jarak ±50-70 cm dengan pencahayaan ruang tidak menyilaukan layar.',
        answer: 0,
        reason: 'Postur netral leher-punggung dan pencahayaan bebas silau (glare-free) menjaga kenyamanan visual maupun muskuloskeletal saat mengolah detail desain warna.',
      },
      {
        text: 'Menyarankan siswa menutup seluruh jendela dan memadamkan seluruh lampu lab sehingga bekerja dalam gelap total di depan monitor sangat terang.',
        answer: 1,
        reason: 'Kontras ekstrem antara layar sangat terang dan ruangan gelap pekat justru mempercepat kelelahan mata serta merusak akurasi persepsi warna.',
      },
    ],
    explanation:
      'K3LH desainer grafis tidak terbatas pada keselamatan listrik studio, melainkan mencakup ergonomi stasiun kerja, pencegahan Carpal Tunnel Syndrome, kelelahan mata 20-20-20, dan pencahayaan ruang terkendali (ideal sekitar netral tanpa silau langsung).',
  },
  {
    id: 'pck-dkv-46',
    bank: 'PCK',
    topic: 'PCK DKV · Asesmen & Kritik Karya',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Pada akhir unit pembuatan Desain Identitas Visual, seorang siswa mengumpulkan file poster akhir (JPG) terlihat sangat bagus, tetapi tidak memiliki catatan brief, thumbnail sketsa, maupun file sumber bertingkat (.ai/.cdr) serta tidak mampu menjelaskan alasan pemilihan jenis hurufnya saat tanya jawab. Bagaimana penilaian autentik yang adil harus dijalankan oleh guru?',
    options: [
      'Langsung memberi nilai 100 penuh karena tampilan JPG akhirnya sudah sedap dipandang.',
      'Menilai keseluruhan proses berdasarkan rubrik multi-aspek (riset/brief, sketsa eksplorasi, proses file sumber bertingkat, komunikasi lisan/argumentasi desain, dan hasil akhir), mengklarifikasi kendala siswa dalam rapat singkat untuk membuktikan keaslian karya serta memberi kesempatan melengkapi rekam proses secara jujur.',
      'Memajang karya JPG itu di mading sekolah sambil memberi label "Hasil Menjiplak".',
      'Menghapus nilai seluruh kelas karena curiga semua siswa memakai jasa luar.',
      'Mengganti seluruh metode penilaian di sekolah menjadi soal pilihan ganda hafalan istilah CorelDRAW.',
    ],
    answer: 1,
    explanation:
      'Asesmen portofolio DKV menilai proses dan argumentasi di balik karya (bukan hanya file JPG jadi) agar integritas orisinalitas dan kompetensi bernalar desain murid terukur objektif lewat bukti file sumber & wawancara singkat.',
  },
  {
    id: 'pck-dkv-47',
    bank: 'PCK',
    topic: 'PCK DKV · Asesmen & Kritik Karya',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Sosial',
    subkompetensi: 'S.1',
    prompt:
      'Saat mengadakan sesi kritik karya sejawat (peer critique / gallery walk) di kelas XI DKV, dua kali berturut-turut siswa cenderung hanya berkomentar "Bagus banget!" secara basa-basi atau malah mengejek "Warnanya norak kayak tahun 90-an!" yang membuat temannya murung. Langkah apa saja yang tepat dilakukan guru untuk membudayakan komunikasi empatik sekaligus tajam secara teknis? (Pilih lebih dari satu)',
    options: [
      'Membekali siswa format kalimat kritik konstruktif berbasis data visual (misalnya: "Saya menangkap poin X sudah kuat di ..., sementara teks subjudul pada bagian Y agak tenggelam karena ..., usulannya ...").',
      'Menegakkan kesepakatan kelas bahwa kritik hanya ditujukan pada keputusan desain (hierarki, warna, keterbacaan, pesan brief), bukan menyerang kepribadian pembuatnya.',
      'Menghentikan sesi presentasi karya selamanya agar tidak ada siswa yang tersinggung.',
      'Memberikan contoh pemodelan langsung bagaimana guru memberi umpan balik spesifik pada dua karya sebelum meminta murid berlatih.',
      'Meminta siswa memberi kritik anonim berwujud ejekan singkat satu kata tanpa alasan.',
    ],
    answer: [0, 1, 3],
    explanation:
      'Kritik desain (design critique) merupakan kompetensi sosial-emosional kunci profesi DKV: memisahkan ego pembuat dari artefak desain, berpijak pada prinsip visual & creative brief, serta disampaikan empatik dengan usulan perbaikan konkret.',
  },
  {
    id: 'pck-dkv-48',
    bank: 'PCK',
    topic: 'PCK DKV · Teaching Factory & Mitra',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.2',
    prompt:
      'Dalam program Teaching Factory (TeFa) DKV yang bermitra dengan pemilik usaha katering lokal, sang klien tiba-tiba mengirimkan pesan malam hari meminta perombakan total konsep warna dan maskot setelah siswa menyelesaikan 90% desain sesuai persetujuan awal. Bagaimana guru membimbing siswa menjalin kolaborasi profesional yang sehat dengan mitra industri/UMKM?',
    options: [
      'Membiarkan siswa membalas pesan klien dengan emosi marah karena merasa dikerjai.',
      'Membimbing siswa mengevaluasi brief awal yang telah disepakati bersama klien, memfasilitasi pertemuan klarifikasi persuasif untuk memahami alasan bisnis klien, menegosiasikan batas jumlah revisi atau tambahan waktu/biaya wajar (change request) secara tertulis, lalu menindaklanjuti dengan etis.',
      'Mengubah desain secara diam-diam tanpa memberi tahu klien dan langsung mencetak 2.000 brosur.',
      'Memutus kerja sama kemitraan Teaching Factory di tengah jalan dan memblokir kontak UMKM tersebut.',
      'Mengabaikan perubahan tersebut dan memaksa klien membayar tanpa melihat revisi sedikit pun.',
    ],
    answer: 1,
    explanation:
      'Kolaborasi DUDIKA/UMKM nyata dalam Teaching Factory melatih soft-skills komunikasi klien, pengelolaan ruang lingkup kerja (scope & batas revisi pada brief), empati bisnis, dan negosiasi profesional yang saling menghargai (S.2).',
  },
  {
    id: 'pck-dkv-49',
    bank: 'PCK',
    topic: 'PCK DKV · Teaching Factory & Mitra',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Sosial',
    subkompetensi: 'S.2',
    prompt:
      'Sebagian orang tua murid kelas X DKV memprotes keras karena anaknya sering belajar hingga sore di laboratorium atau meminta spesifikasi komputer tertentu di rumah untuk proyek fotografi & desain, karena orang tua mengira jurusan DKV "hanya menggambar-gambar di kertas tanpa prospek kerja jelas". Tentukan ketepatan langkah komunikasi kemitraan orang tua oleh guru DKV.',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Mengundang orang tua dalam gelar karya portofolio & temu wali yang menampilkan peta karier nyata industri DKV (desainer merek, UI/UX, percetakan, agensi konten) sekaligus menjelaskan ketersediaan perangkat lab sekolah agar orang tua tidak terbebani memaksakan beli laptop mahal secara mendadak.',
        answer: 0,
        reason: 'Komunikasi transparan berbasis bukti karya, prospek profesi, dan jaminan fasilitas sekolah membangun dukungan penuh keluarga.',
      },
      {
        text: 'Menyampaikan kepada orang tua agar membeli laptop spesifikasi grafis minimal Rp 25 juta jika ingin anaknya lulus mata pelajaran DKV.',
        answer: 1,
        reason: 'Memberikan tuntutan finansial tidak realistis bertentangan dengan asas keadilan akses pendidikan dan menyalahi pemanfaatan lab sekolah terencana.',
      },
      {
        text: 'Menunjukkan bukti bahwa proyek luar jam wajib di sekolah terpantau jadwal resmi guru pendamping serta menawarkan opsi penjadwalan proyek aman.',
        answer: 0,
        reason: 'Kepastian pengawasan dan jadwal kerja lab menenangkan kekhawatiran keselamatan anak dari pihak keluarga.',
      },
    ],
    explanation:
      'Membangun kemitraan setara dengan orang tua (S.2) membutuhkan edukasi mengenai profil kompetensi DKV modern sekaligus solusi manajemen akses perangkat di laboratorium sekolah sehingga tidak menekan ekonomi keluarga.',
  },
  {
    id: 'pck-dkv-50',
    bank: 'PCK',
    topic: 'PCK DKV · Refleksi & Kombel',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Sosial',
    subkompetensi: 'S.3',
    prompt:
      'Guru DKV di sebuah SMK menghadapi tantangan di mana kemampuan siswa dalam menyampaikan presentasi konsep desain di hadapan klien TeFa masih gugup dan terpaku membaca teks salindia. Melalui forum Komunitas Belajar (Kombel) dan MGMP DKV sekolah, kolaborasi profesional paling efektif yang dapat dirancang adalah ....',
    options: [
      'Menghilangkan tahap presentasi desain dari penilaian agar siswa tidak perlu berbicara di depan orang.',
      'Merancang praktik kolaboratif Lesson Study bersama guru Bahasa Indonesia dan guru sejawat DKV untuk mengintegrasikan struktur pitching brief kreatif singkat 3 menit ke dalam rubrik penilaian proyek DKV, kemudian mengobservasi dan merefleksikan open class secara bersama.',
      'Mengadu ke pengawas sekolah bahwa kelas Bahasa Indonesia gagal melatih siswa berbicara.',
      'Mengumpulkan sertifikat webinar daring saja ke grup chat MGMP tanpa uji praktik apa pun di kelas.',
      'Menyerahkan seluruh tugas presentasi kepada satu siswa juru bicara tetap untuk seluruh kelompok.',
    ],
    answer: 1,
    explanation:
      'Partisipasi aktif dalam Kombel dan MGMP (S.3) berdampak nyata ketika lintas guru (DKV + Bahasa Indonesia) merancang pembelajaran kontekstual kolaboratif (pitching brief) melalui Lesson Study (plan-do-see) langsung di kelas nyata.',
  },
  {
    id: 'pck-dkv-51',
    bank: 'PCK',
    topic: 'PCK DKV · Refleksi & Kombel',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Sosial',
    subkompetensi: 'S.3',
    prompt:
      'Dalam rangka menjaga keselarasan perkembangan dunia desain visual dan perangkat ajar Teaching Factory DKV antar-sekolah SMK di kabupatennya, bentuk kontribusi aktif guru pada organisasi profesi dan MGMP DKV yang bermakna adalah .... (Pilih lebih dari satu)',
    options: [
      'Berbagi modul ajar terbuka (open educational resources), templat creative brief UMKM, dan rubrik penilaian proses portofolio dengan rekan sejawat guru DKV di MGMP.',
      'Menyembunyikan seluruh modul ajar dan instrumen praktik terbaik agar sekolah lain selalu tertinggal.',
      'Menginisiasi pameran karya siswa lintas sekolah sekaligus mengundang praktisi industri/asosiasi desainer grafis sebagai penelaah eksternal.',
      'Hadir dalam rapat MGMP hanya untuk menandatangani daftar hadir demi poin administratif.',
      'Melaksanakan sesi coaching/umpan balik sejawat atas perangkat ajar PjBL yang disusun guru pemula.',
    ],
    answer: [0, 2, 4],
    explanation:
      'Komunitas belajar profesi bermakna melalui saling berbagi praktik baik (OER, brief nyata, rubrik), menghadirkan penelaahan standar industri, serta mendampingi sejawat guru lewat coaching reflektif.',
  },
  {
    id: 'pck-dkv-52',
    bank: 'PCK',
    topic: 'PCK DKV · Filosofi & Tujuan',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.1',
    prompt:
      'Sejalan dengan prinsip Pendidikan Nasional dan filosofi Ki Hadjar Dewantara dalam mendidik calon desainer komunikasi visual SMK, tujuan pembelajaran kejuruan yang holistik tidak sekadar mencetak "operator penekan tombol aplikasi", melainkan membentuk pribadi pembelajar dengan ciri ....',
    options: [
      'Mampu menjiplak setiap desain populer dengan kecepatan maksimal tanpa memahami konteks sosial pesan.',
      'Menguasai kepekaan rasa estetika, nalar kritis memecahkan masalah komunikasi visual bagi masyarakat, kecakapan teknis mutakhir, serta budi pekerti etika profesi (olah cipta, olah rasa, olah karsa, dan olah raga seimbang).',
      'Bekerja terisolasi sendiri menolak segala kritik agar gaya gambar pribadinya tetap murni.',
      'Hanya menghafalkan kombinasi tombol shortcut perangkat lunak tanpa memedulikan target audiens.',
      'Mengutamakan keuntungan finansial sesaat meski harus mempromosikan produk menyesatkan.',
    ],
    answer: 1,
    explanation:
      'Sistem Among dan pendidikan holistik KHD menuntut keseimbangan cipta (penalaran desain), rasa (estetika & empati audiens), karsa (etika & tanggung jawab sosial pesan), serta keterampilan kerja nyata (PF.1).',
  },
  {
    id: 'pck-dkv-53',
    bank: 'PCK',
    topic: 'PCK DKV · Inovasi & PTK DKV',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.5',
    prompt:
      'Guru kelas XI DKV menghadapi kendala bahwa banyak siswa menyerahkan file karya dengan penamaan berantakan ("revisi_fix_banget22.jpg") serta sering kehilangan file aset pendukung saat pindah komputer lab. Guru merancang inovasi pembiasaan SOP Studio Manajemen Berkas ("Project Folder Convention + Version Control Sheet"). Tentukan efektivitas prinsip implementasinya.',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Menjadikan struktur folder standar (01_Brief, 02_Assets_Fonts, 03_Working_Files, 04_Export_Prepress) dan konvensi nama berkas (Proyek_NamaSiswa_v01) sebagai komponen prasyarat kelayakan pengumpulan dalam rubrik kerja.',
        answer: 0,
        reason: 'Kebiasaan manajemen aset terstruktur mencegah tautan foto putus (missing links) saat preflight cetak maupun kerja tim industri.',
      },
      {
        text: 'Membimbing murid melakukan audit berkala terhadap struktur folder tim teman sebangku sebelum file final dikirim ke unit produksi Teaching Factory.',
        answer: 0,
        reason: 'Peer audit file management membudayakan standar quality assurance industri nyata di laboratorium.',
      },
      {
        text: 'Mengharuskan seluruh aset gambar diunduh dan dibiarkan menumpuk di folder Downloads bersama nama acak agar cepat diakses.',
        answer: 1,
        reason: 'Menaruh aset penting di folder Downloads tanpa struktur menyebabkan tautan mudah hilang dan rawan terhapus saat pembersihan PC lab.',
      },
    ],
    explanation:
      'Inovasi SOP studio kelas DKV (PF.5) seperti struktur folder & penamaan versi (versioning) menanamkan disiplin industri nyata sehingga masalah "missing links" dan kebingungan revisi dapat ditekan.',
  },
  {
    id: 'pck-dkv-54',
    bank: 'PCK',
    topic: 'PCK DKV · Asesmen & Kritik Karya',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.2',
    prompt:
      'Setelah satu proyek besar Desain Kampanye Sosial selesai, seorang siswa berkata, "Bu, kayaknya saya tidak punya bakat seni dari lahir, desain teman-teman selalu lebih bagus dari saya." Respon dan umpan balik guru yang konsisten menumbuhkan Growth Mindset berbasis proses belajar DKV adalah ....',
    options: [
      '"Benar, seni memang bakat bawaan, lebih baik kamu fokus mencari nilai di teori hafalan saja."',
      '"Desain yang kuat bukan soal bakat ajaib, melainkan hasil strategi berulang. Lihat progres struktur grid-mu minggu ini sudah jauh lebih rapi dari bulan lalu; sekarang mari kita bedah dua prinsip warna yang belum tepat dan coba satu teknik komposisi baru."',
      '"Jangan sedih, yang penting kamu anak rajin dan sudah mengumpulkan tepat waktu, jadi nilaimu pasti saya buat bagus."',
      '"Kamu hanya kurang berlatih begadang, coba ulangi 50 poster yang sama tanpa petunjuk baru."',
      '"Bakat itu tetap mutlak, tapi tidak apa-apa asal kelompokmu punya anggota lain yang mahir."',
    ],
    answer: 1,
    explanation:
      'Umpan balik Growth Mindset yang autentik (K.2) tidak memberi pujian hampa atau mengamini mitos fixed-talent, melainkan mengakui kemajuan spesifik murid, menekankan bahwa desain adalah keterampilan terlatih, lalu memberi strategi teknis baru yang konkret.',
  },
  {
    id: 'pck-dkv-55',
    bank: 'PCK',
    topic: 'PCK DKV · Metode & Kurikulum',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK DKV SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.4',
    prompt:
      'Dalam implementasi proyek kokurikuler serta Capaian Pembelajaran Fase E ke Fase F Kurikulum Merdeka Program Keahlian DKV, kesinambungan kemampuan yang harus dipastikan guru terkuasai murid secara bertahap dan adaptif meliputi .... (Pilih lebih dari satu)',
    options: [
      'Fondasi komunikasi visual, sketsa, nirmana, tipografi, fotografi dasar, dan literasi perangkat lunak pengolah gambar vektor/bitmap di Fase E sebelum pendalaman proyek klien kompleks di Fase F.',
      'Penguasaan pengoperasian langsung mesin bubut konvensional dan pengelasan listrik SMAW sebagai syarat wajib naik ke kelas XI DKV.',
      'Keterampilan menerjemahkan brief klien menjadi konsep kreatif, produksi media cetak/digital terpadu, evaluasi komunikasi pesan, serta kesiapan kerja wirausaha atau industri (TeFa) pada Fase F.',
      'Menghafalkan tahun lahir seluruh pencipta software grafis sebagai materi utama ujian praktik akhir.',
      'Kemampuan beradaptasi mempelajari alat maupun tren komunikasi visual baru dengan tetap berpijak pada etika HKI dan keselamatan kerja studio.',
    ],
    answer: [0, 2, 4],
    explanation:
      'Kurikulum Merdeka DKV memadukan transisi berjenjang dari dasar keilmuan & literasi teknis DKV (Fase E) menuju eksekusi brief produksi, kewirausahaan kreatif/TeFa, serta adaptabilitas media digital berlandaskan etika dan K3LH (Fase F).',
  },
];
