import type { ExamQuestion } from '../types/exam';

/**
 * Bank PCK Teknik Mesin SMK — Bagian 2 (42 Soal):
 * 5. Ilmu Bahan, Logam & Perlakuan Panas (10)
 * 6. Teknologi Pengelasan (SMAW/GMAW/GTAW) (11)
 * 7. Elemen Mesin & Sistem Transmisi (10)
 * 8. K3LH Bengkel, Manajemen Bengkel & Teaching Factory (11)
 */
export const PCK_MESIN_PART_2: ExamQuestion[] = [
  // === 5. ILMU BAHAN, LOGAM & PERLAKUAN PANAS (10) ===
  {
    id: 'pck-mat-01',
    bank: 'PCK',
    topic: 'Ilmu Bahan & Heat Treatment',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Seorang siswa memanaskan pahat/pin dari baja perkakas karbon tinggi hingga merah cerah (suhu austenitisasi ±820 °C), lalu langsung mencelupkannya ke air (quenching) agar keras. Keesokan harinya saat dipukul ringan di tanggem, pin itu patah getas seperti kaca! Siswa berkesimpulan bahwa proses pengerasan telah gagal total. Penjelasan konsep metalurgi dan langkah perbaikan proses yang tepat dibimbingkan guru adalah ....',
    options: [
      'Menyuruh siswa mengulangi pencelupan air es sambil menaikkan suhu pemanasan ke 1200 °C.',
      'Menjelaskan bahwa pendinginan kejut menghasilkan struktur martensit yang sangat keras tetapi penuh tegangan dalam dan getas; setelah quenching WAJIB dilakukan proses TEMPERING (dipanaskan kembali ke suhu 150–450 °C lalu didinginkan tenang) untuk melepaskan sebagian tegangan sisa dan memulihkan ketangguhan tanpa menghilangkan kekerasan yang dibutuhkan.',
      'Menjelaskan bahwa semua baja karbon tinggi memang mustahil dikeraskan di bengkel.',
      'Mengganti bahan menjadi besi cor kelabu agar lebih ulet jika dipukul.',
      'Mengelas ulang bagian yang patah memakai elektroda E6013 tanpa perlakuan panas awal.',
    ],
    answer: 1,
    explanation:
      'Siklus pengerasan baja yang benar selalu berpasangan: Austenitizing + Quenching (membentuk martensit keras namun getas) lalu segera diikuti Tempering (menurunkan kerapuhan dengan menukar sedikit kekerasan demi ketangguhan kerja/toughness).',
  },
  {
    id: 'pck-mat-02',
    bank: 'PCK',
    topic: 'Ilmu Bahan & Heat Treatment',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Dalam percobaan identifikasi material bengkel (uji percikan gerinda / spark test dan pemilihan bahan), seorang siswa menyamakan baja karbon rendah (misal ST 37 / AISI 1015, karbon ±0,15%) dengan baja karbon sedang/tinggi (misal AISI 1045 atau S45C, karbon ±0,45%) untuk membuat komponen poros pasak yang harus dikeraskan melalui quenching langsung. Bagaimana guru membimbing konsep pengaruh kadar karbon terhadap kemampuan pengerasan (hardenability)?',
    options: [
      'Menjelaskan bahwa baja karbon sangat rendah (<0,25% C) tidak memiliki cukup karbon untuk membentuk martensit keras bila di-quench langsung; peningkatan kekuatan permukaannya umumnya memakai karburasi (case hardening) atau diganti baja karbon sedang/paduan seperti S45C/SCM.',
      'Menyatakan semua baja asal di-quench minyak pasti mencapai kekerasan 60 HRC.',
      'Mengajari bahwa semakin rendah kadar karbon, semakin getas sifat baja saat dicelup air.',
      'Meminta siswa mengecat poros agar kekerasan permukaannya naik.',
      'Menjelaskan bahwa kadar karbon hanya menentukan warna logam saat digerinda tanpa mengubah sifat mekanis.',
    ],
    answer: 0,
    explanation:
      'Pembentukan martensit keras saat quenching sangat bergantung pada kandungan karbon terlarut dalam austenit. Baja karbon rendah (<0,25% C) hampir tidak mengeras saat di-quench biasa sehingga memerlukan difusi karbon permukaan (carburizing) atau pemilihan material S45C/baja paduan.',
  },
  {
    id: 'pck-mat-03',
    bank: 'PCK',
    topic: 'Ilmu Bahan & Heat Treatment',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Saat menganalisis data kurva uji tarik (tensile test) antara Baja Lunak (Mild Steel), Baja Karbon Tinggi yang Dikeraskan, dan Polimer Ulet untuk proyek pemilihan material, konsep mekanis yang paling krusial untuk dikuasai siswa adalah perbedaan antara kekuatan luluh (yield strength), kekuatan tarik maksimum (UTS), dan ketangguhan (toughness). Cara menyimpulkannya dari grafik tegangan–regangan (stress–strain) adalah ....',
    options: [
      'Kemiringan garis linier awal (Modulus Elastisitas/Young) menunjukkan keuletan total benda sebelum putus.',
      'Kekuatan luluh (yield) menandai batas akhir deformasi elastis sebelum bahan melengkung permanen (plastis), UTS adalah puncak tegangan tertinggi, sedangkan luas total di bawah kurva hingga titik patah merepresentasikan ketangguhan (energi yang diserap sebelum patah).',
      'Bahan yang memiliki titik patah tinggi tetapi regangan nol persen pasti paling tangguh menahan tumbukan mendadak.',
      'Kekuatan tarik hanya berlaku bila benda ditekan, bukan ditarik.',
      'Deformasi plastis berarti benda kembali persis ke panjang semula begitu gaya dilepaskan.',
    ],
    answer: 1,
    explanation:
      'Pada desain elemen mesin (poros/rangka), batas luluh (yield strength) justru lebih kritis daripada UTS karena komponen tidak boleh mengalami perubahan bentuk permanen saat beroperasi; sedangkan luas di bawah kurva tegangan–regangan menggambarkan ketangguhan (ketahanan kejut/impak).',
  },
  {
    id: 'pck-mat-04',
    bank: 'PCK',
    topic: 'Ilmu Bahan & Heat Treatment',
    pckFocus: 'Media/ICT & Simulator',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Karena mesin uji tarik universal (UTM) dan tungku perlakuan panas beratmosfer terkendali di bengkel sekolah terbatas jumlah spesimennya dan berbiaya mahal per kali uji, strategi pembelajaran yang memadukan konsep mikrostruktur dan praktik hemat sumber daya adalah ....',
    options: [
      'Menghilangkan materi sifat mekanik logam seluruhnya dari mata pelajaran.',
      'Menggunakan simulasi interaktif diagram fasa Fe–Fe3C dan kurva uji tarik virtual untuk mengeksplorasi variasi kadar karbon & laju pendinginan terhadap perubahan fasa/grafik terlebih dahulu, baru kemudian melaksanakan demonstrasi pengujian spesimen fisik pilihan sebagai pembuktian empiris.',
      'Menyuruh siswa menghafal angka suhu eutektoid 723 °C tanpa memahami perubahan ferit-perlit-austenit.',
      'Mengganti alat uji tarik dengan menebak kekuatan kawat menggunakan tarikan tangan siswa.',
      'Memutar video iklan pabrik baja tanpa penugasan analisis kurva.',
    ],
    answer: 1,
    explanation:
      'Simulasi interaktif Fe–Fe3C dan lab virtual uji tarik memberi siswa kesempatan bereksperimen puluhan skenario kadar karbon & cooling rate tanpa merusak puluhan batang uji mahal, lalu mengonfirmasi fenomena riil pada spesimen uji fisik terbatas di bengkel.',
  },
  {
    id: 'pck-mat-05',
    bank: 'PCK',
    topic: 'Ilmu Bahan & Heat Treatment',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Untuk membantu siswa kelas X membedakan sifat logam fero (baja, besi cor) dan nonfero (aluminium, tembaga, kuningan) secara kontekstual berbasis lingkungan bengkel sekitar, kegiatan inkuiri sederhana namun bermakna yang dapat dilakukan siswa adalah ....',
    options: [
      'Membaca nama lambang unsur kimia di papan tulis selama 2 jam.',
      'Menguji langsung potongan limbah bengkel (scrap) memakai uji magnet, perkiraan massa jenis relatif, kekerasan kikir tangan, warna oksidasi, dan uji percikan gerinda aman (dengan kacamata pelindung) lalu mengklasifikasikan aplikasinya pada komponen otomotif/permesinan.',
      'Menjilat permukaan logam untuk membedakan kandungan tembaga dan seng.',
      'Mengumpulkan foto kemasan cat logam dari toko bangunan.',
      'Melarang siswa menyentuh potongan sampel logam hingga kelas XII.',
    ],
    answer: 1,
    explanation:
      'Eksperimen identifikasi scrap logam bengkel (feromagnetik vs non-magnetik, bobot/densitas Al vs Fe vs Cu, uji kikir, warna geram/percikan terkendali dengan APD) menghubungkan teori bahan teknik dengan material nyata di tempat kerja.',
  },
  {
    id: 'pck-mat-06',
    bank: 'PCK',
    topic: 'Ilmu Bahan & Heat Treatment',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada materi perlakuan panas (Heat Treatment) dan uji kekerasan bahan, tentukan apakah perbandingan pernyataan teknis berikut Benar atau Salah.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Annealing (pelunakan penuh) dilakukan dengan memanaskan baja ke suhu kritis lalu mendinginkannya SANGAT LAMBAT di dalam tungku tertutup agar struktur lunak, tegangan sisa hilang, dan mudah dimesin.',
        answer: 0,
        reason: 'Pendinginan amat lambat dalam furnace menghasilkan perlit kasar yang lunak dan ulet.',
      },
      {
        text: 'Normalizing mendinginkan baja di udara bebas diam (tanpa dicelup air) guna menghaluskan ukuran butir dan menyeragamkan struktur mikro sesudah proses pengerjaan panas/las.',
        answer: 0,
        reason: 'Air cooling pada normalizing mendingin lebih cepat dari furnace cooling, menghasilkan perlit lebih halus dan seragam.',
      },
      {
        text: 'Metode uji kekerasan Rockwell C (HRC) paling cocok dipakai menguji pelat aluminium sangat tipis atau foil tembaga lunak.',
        answer: 1,
        reason: 'HRC memakai beban besar 150 kgf dan penetrator kerucut intan (khusus baja keras); logam tipis/lunak akan tembus—sebaiknya memakai Rockwell skala B/F atau Vickers mikro.',
      },
    ],
    explanation:
      'Membedakan media pendinginan heat treatment (tungku = Annealing, udara tenang = Normalizing, oli/air = Quenching) serta memilih skala uji kekerasan sesuai ketebalan/kekerasan benda menghindarkan kesalahan proses manufaktur.',
  },
  {
    id: 'pck-mat-07',
    bank: 'PCK',
    topic: 'Ilmu Bahan & Heat Treatment',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Dalam proyek rekayasa desain sederhana, siswa diminta memilih material beserta perlakuan permukaannya untuk komponen Roda Gigi Transmisi Beban Tinggi vs Dudukan Rangka Mesin Peredam Getaran. Tentukan kesesuaian alasan pemilihan material berikut.',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Memilih Besi Cor Kelabu (Gray Cast Iron) untuk rangka/bodi mesin bubut karena memiliki grafit serpih yang efektif meredam getaran dan mudah dicor bentuk kompleks.',
        answer: 0,
        reason: 'Damping capacity besi cor kelabu sangat baik untuk bed/rangka mesin perkakas.',
      },
      {
        text: 'Memilih Aluminium murni lunak untuk gigi penggerak beban berat tanpa pelapisan karena bobotnya ringan dan tahan korosi.',
        answer: 1,
        reason: 'Aluminium murni memiliki kekuatan lelah permukaan dan ketahanan aus sangat rendah untuk roda gigi transmisi beban berat.',
      },
      {
        text: 'Memilih baja paduan karbon rendah-paduan (seperti baja karburasi) atau baja karbon sedang yang diberi pengerasan permukaan untuk roda gigi agar permukaan gigi keras tahan aus sementara inti gigi tetap tangguh menyerap beban kejut.',
        answer: 0,
        reason: 'Kombinasi permukaan keras (wear resistance) + inti tangguh (impact toughness) adalah desain ideal roda gigi.',
      },
    ],
    explanation:
      'Asesmen otentik ilmu bahan tidak berhenti di menghafal nama logam, melainkan menimbang tuntutan kerja mekanis (redaman getaran, ketahanan aus permukaan vs ketangguhan inti).',
  },
  {
    id: 'pck-mat-08',
    bank: 'PCK',
    topic: 'Ilmu Bahan & Heat Treatment',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.4',
    prompt:
      'Evaluasilah kebenaran pemahaman siswa mengenai konsep korosi dan perlindungan permukaan logam teknik berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Baja tahan karat (Stainless Steel tipe austenitik 304) tahan karat bukan karena bebas besi, melainkan adanya unsur Kromium (Cr ≥ 10,5–18%) yang membentuk lapisan pasif kromium oksida tipis rapat yang mampu memulihkan diri.',
        answer: 0,
        reason: 'Lapisan pasif Cr2O3 melindungi baja dasar selama mendapat cukup oksigen permukaan.',
      },
      {
        text: 'Menyambung langsung pipa baja dan fitting tembaga/kuningan di lingkungan lembap tanpa penyekat dielektrik dapat mempercepat korosi galvanik pada logam yang lebih anodik.',
        answer: 0,
        reason: 'Pasangan dua logam berbeda potensial elektrokimia dalam elektrolit membentuk sel korosi galvanik.',
      },
      {
        text: 'Mengelas baja tahan karat dan baja karbon menggunakan kawat las baja karbon biasa tidak memengaruhi ketahanan korosi sambungan sama sekali.',
        answer: 1,
        reason: 'Pengelasan logam tak sejenis dengan elektroda karbon rendah akan mengencerkan kadar Cr dan memicu karat parah serta retak batas las.',
      },
    ],
    explanation:
      'Pengetahuan mekanisme pasivasi stainless steel dan bahaya korosi galvanik membantu teknisi mesin memilih pengikat (fastener), pelapisan, maupun prosedur perbaikan yang awet.',
  },
  {
    id: 'pck-mat-09',
    bank: 'PCK',
    topic: 'Ilmu Bahan & Heat Treatment',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Siswa kelas X sering tertukar antara konsep Sifat Kekerasan (Hardness), Keuletan (Ductility), dan Kekakuan (Stiffness / Modulus Elastisitas). Fakta metalurgi apa saja yang harus ditegaskan guru beserta contoh bengkelnya agar ketiganya tidak lagi disamakan? (Pilih semua jawaban benar)',
    options: [
      'Bahan yang sangat keras (misalnya keramik atau kaca/martensit tak ditemper) belum tentu ulet—malah cenderung getas (brittle) saat mengalami beban tumbuk.',
      'Kekakuan (stiffness) diukur dari Modulus Elastisitas E (hambatan terhadap melentur elastis), yang nilainya hampir sama antara baja karbon rendah dan baja paduan keras walaupun batas luluhnya berbeda jauh.',
      'Keuletan (ductility) ditandai besarnya deformasi plastis yang dapat dialami sebelum putus (persen perpanjangan/% elongation), misalnya kawat tembaga dan aluminium ulet mudah dibentuk tarik tanpa patah.',
      'Semakin keras suatu logam, pasti selalu semakin tinggi daya regangnya sebelum patah.',
      'Besi cor kelabu lebih ulet daripada baja karbon rendah.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Kekerasan = ketahanan terhadap goresan/penetrasi lokal; Kekakuan (E) = ketahanan melentur di daerah elastis (baja lunak & baja keras punya E ≈ 200 GPa); Keuletan = kemampuan berubah bentuk plastis panjang tanpa putus.',
  },
  {
    id: 'pck-mat-10',
    bank: 'PCK',
    topic: 'Ilmu Bahan & Heat Treatment',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Jika sekolah menyelenggarakan praktikum perlakuan panas sederhana menggunakan dapur pemanas dan media celup oli/air di bengkel, persyaratan keselamatan kerja (K3LH) wajib yang harus dipatuhi seluruh siswa meliputi .... (Pilih semua jawaban benar)',
    options: [
      'Memakai sarung tangan kulit tahan panas, apron kulit, pelindung wajah (face shield), dan penjepit baja panjang yang kokoh saat memindahkan benda kerja bersuhu merah.',
      'Menjaga area sekitar tangki celup oli bebas dari genangan air atau benda mudah terbakar karena minyak panas dapat menyala sesaat (flash fire) bila benda merah masuk setengah bagian.',
      'Menyediakan alat pemadam api ringan (APAR tipe CO2/serbuk kering—BUKAN air!) dan penutup logam tangki oli di dekat stasiun heat treatment.',
      'Menggunakan sarung tangan kain tipis katun bekas lap bengkel agar tangan lebih lincah memegang tang panas.',
      'Menengok langsung dari atas mulut tungku terbuka tanpa pelindung mata untuk mengecek warna nyala logam.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Keselamatan kerja perlakuan panas berfokus pada bahaya luka bakar radiasi/percikan media celup serta risiko penyalaan uap oli (gunakan APD kulit + face shield, tangki oli berpenutup cepat, dan APAR non-air—karena menyiram api oli dengan air menimbulkan ledakan uap minyak panas!).',
  },

  // === 6. TEKNOLOGI PENGELASAN SMAW/GMAW/GTAW (11) ===
  {
    id: 'pck-las-01',
    bank: 'PCK',
    topic: 'Teknologi Pengelasan',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam praktikum las busur manual (SMAW) posisi datar (1G/1F) pada pelat baja tebal 6 mm memakai elektroda E6013 Ø3,2 mm, seorang siswa mengeluhkan jalur lasnya cekung dan di sepanjang tepi kaki las timbul alur cekukan parit yang menggerogoti pelat induk (undercut). Saat diamati, siswa menggunakan arus tinggi 150 A dan mengayun elektroda terlalu cepat tanpa berhenti sejenak di sisi pinggir. Tindakan perbaikan instruksional terbaik adalah ....',
    options: [
      'Menaikkan arus menjadi 180 A agar cairan las meluber menutup cekukan secara alami.',
      'Menunjukkan spesimen cacat undercut di bawah cahaya senter, membimbing penurunan arus ke rentang ideal Ø3,2 mm (±95–125 A), memperlambat laju jalan (travel speed), menjaga panjang busur pendek (± diameter inti elektroda), serta memberi jeda sesaat (dwell) pada tepi ayunan untuk mengisi kaki las.',
      'Menyuruh siswa menutupi cekukan dengan cat besi tebal sebelum dinilai guru.',
      'Mengganti elektroda E6013 menjadi kawat las aluminium.',
      'Menambah jarak panjang busur hingga 15 mm agar panas menyebar.',
    ],
    answer: 1,
    explanation:
      'Undercut terjadi ketika busur terlalu panas (arus tinggi/busur panjang) mencairkan logam induk di tepi jalur las namun tidak cukup terisi cairan pengisi karena laju ayun/jalan terlalu cepat. Solusinya: sesuaikan ampere, pertahankan busur pendek, dan perlambat jeda di tepi jalur las.',
  },
  {
    id: 'pck-las-02',
    bank: 'PCK',
    topic: 'Teknologi Pengelasan',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada penyiapan pengelasan konstruksi baja struktural memakai elektroda low-hydrogen E7018, guru menemukan sekelompok siswa menyimpan elektroda E7018 bekas bungkus sobek di rak terbuka lembap selama dua minggu, lalu langsung menggunakannya dan menghasilkan banyak lubang jarum (porosity) serta retak bawah manik las. Penjelasan teknis yang wajib ditanamkan guru adalah ....',
    options: [
      'Elektroda E7018 harus dipanaskan ulang / disimpan di oven pemanas (holding/rebaking oven) karena fluks low-hydrogen menyerap uap air atmosfer (higroskopis) yang terurai menjadi gas hidrogen berujung porosity dan hydrogen-induced cracking.',
      'Elektroda E7018 memang wajib dicelupkan ke air sebelum dinyalakan supaya tidak terlalu panas.',
      'Porosity muncul karena warna fluks abu-abu tidak sekuat fluks merah.',
      'Elektroda E7018 hanya boleh dipakai pada mesin las listrik arus AC tegangan rumah.',
      'Cacat tersebut bisa diatasi cukup dengan menggerinda permukaan atas hasil las saja tanpa membuang akar pori.',
    ],
    answer: 0,
    explanation:
      'Kode E7018 menandakan elektroda rendah hidrogen (low-hydrogen potassium iron powder) berdaya tarik 70.000 psi. Fluksnya mudah menyerap lembap dari udara terbuka; kelembapan terurai di busur panas menjadi gas H2 pemicu porosity dan cold cracking, sehingga penyimpanan dan pemanasan oven (baking/holding) wajib dipatuhi.',
  },
  {
    id: 'pck-las-03',
    bank: 'PCK',
    topic: 'Teknologi Pengelasan',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Saat mengajarkan pengaturan mesin las DC pada proses SMAW dan GTAW (TIG), siswa masih bingung membedakan efek sambungan polaritas DCEN (Direct Current Electrode Negative / lurus) dengan DCEP (Direct Current Electrode Positive / balik). Konsep distribusi panas yang paling akurat untuk dijelaskan adalah ....',
    options: [
      'Pada pengelasan GTAW/TIG baja karbon menggunakan elektroda tungsten non-konsumabel, dipilih polaritas DCEN (elektroda di kutub negatif) agar elektron mengalir ke benda kerja (~70% panas ke pelat benda kerja) sehingga penetrasi dalam dan ujung tungsten tidak cepat meleleh; sedangkan elektroda terbungkus seperti E7018 atau GMAW umumnya memakai DCEP untuk penetrasi stabil dan pelelehan kawat.',
      'Polaritas DCEN selalu meletakkan kabel holder elektroda pada terminal positif (+) mesin.',
      'Pada mesin las DC, menukar kabel massa dan kabel elektroda tidak membawa efek apa pun pada panas busur.',
      'GTAW baja selalu memakai DCEP supaya ujung tungsten cepat mencair menyatu ke pelat.',
      'Polaritas hanya memengaruhi bunyi dengung trafo mesin tanpa efek metalurgi.',
    ],
    answer: 0,
    explanation:
      'Pada rangkaian busur DC, sebagian besar energi tumbukan elektron (~2/3 hingga 70% panas) jatuh ke kutub positif (anoda). Karena itu GTAW baja memakai DCEN (elektroda - -> benda kerja +) menjaga tungsten tetap awet sambil melelehkan benda kerja dalam, sementara DCEP (elektroda +) menaikkan laju leleh kawat & pembersihan oksida (cleaning action pada Al di AC/DCEP tertentu).',
  },
  {
    id: 'pck-las-04',
    bank: 'PCK',
    topic: 'Teknologi Pengelasan',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Di bengkel las SMK, seorang siswa mengeluhkan matanya terasa perih bagaikan kemasukan pasir pada malam hari setelah praktik, meskipun mengaku hanya "sekali-sekali melirik tanpa kap las saat membantu teman memegangi pelat" (arc eye / photokeratitis). Tindakan pencegahan kolaboratif dan edukasi K3LH paling tepat pada sesi bengkel berikutnya adalah ....',
    options: [
      'Menyarankan siswa cukup memakai kacamata hitam fesyen biasa saat melihat percikan las teman.',
      'Mewajibkan penggunaan kap/helm las filter gelap sesuai ampere (shade 10–12) untuk SEMUA siswa yang berada di zona bilik las termasuk helper, memasang tirai pelindung sinar UV antarmeja las, serta membiasakan teriakan aba-aba "Mata / Awas Nyala!" sebelum menyentuhkan elektroda.',
      'Mengurangi waktu praktik pengelasan menjadi 10 menit per bulan tanpa tirai pelindung.',
      'Meminta siswa menutup mata sambil tetap mengarahkan tangan elektroda secara meraba.',
      'Mengganti helm las dengan kaca bening gerinda agar lebih terang.',
    ],
    answer: 1,
    explanation:
      'Radiasi sinar UV las menyebar ke sekitar dan melukai kornea (arc flash) tidak hanya pada operator, melainkan juga helper/pengamat di sampingnya. Prosedur K3LH wajib meliputi helm las berfilter shade tepat (atau auto-darkening), tirai las anti-UV antar bilik, serta komunikasi aba-aba sebelum menyalakan busur.',
  },
  {
    id: 'pck-las-05',
    bank: 'PCK',
    topic: 'Teknologi Pengelasan',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Untuk menilai mutu sambungan las tumpul kampuh V pelat siswa secara objektif tidak hanya berdasarkan keindahan riak permukaan luar, bentuk uji merusak (Destructive Test) dan tak merusak (NDT) yang realistis dilaksanakan di bengkel SMK adalah ....',
    options: [
      'Cukup menimbang berat benda kerja sebelum dan sesudah dilas.',
      'Mengombinasikan inspeksi visual terukur memakai welding gauge (cek lebar, tinggi reinforcement, kelurusan, undercut) dengan uji tekuk terbimbing (Guided Bend Test: root bend & face bend) atau uji patahan (nick-break) guna membuktikan fusi akar las bebas slag inclusion dan retak dalam.',
      'Memukul benda kerja ke tembok beton sampai bengkok lalu menilai warna cat semprotnya.',
      'Mengukur suhu ruangan bilik las menggunakan termometer badan.',
      'Memberi nilai 100 selama panjang pelat tidak berubah.',
    ],
    answer: 1,
    explanation:
      'Jalur las yang terlihat rapi di permukaan dapat menyembunyikan cacat kurang penetrasi akar (incomplete penetration) atau terak terperangkap (slag inclusion). Inspeksi visual menggunakan welding gauge + uji tekuk akar/muka (guided bend test) menguji kekuatan fusi sambungan sesuai standar AWS/ASME secara autentik.',
  },
  {
    id: 'pck-las-06',
    bank: 'PCK',
    topic: 'Teknologi Pengelasan',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Evaluasilah ketepatan identifikasi penyebab dan penanganan cacat pengelasan SMAW berikut pada pernyataan tabel siswa.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Slag inclusion (terak terperangkap) antar-lapisan pada pengelasan multi-pass sering terjadi karena terak lapisan sebelumnya belum dibersihkan tuntas memakai palu terak dan sikat kawat sebelum pass berikutnya.',
        answer: 0,
        reason: 'Sisa terak keras yang tertimbun cairan las berikutnya menimbulkan celah lemah internal.',
      },
      {
        text: 'Spatter (percikan butiran logam) yang sangat banyak menempel di sekitar pelat sering dipicu arus terlalu tinggi, busur terlalu panjang, atau kabel kerja/polaritas tidak sesuai.',
        answer: 0,
        reason: 'Busur panjang/tidak stabil dan arus berlebih melemparkan percikan logam cair keluar kolam las.',
      },
      {
        text: 'Untuk mencegah penyusutan dan melengkungnya pelat tipis (distorsi termal), seluruh sambungan panjang wajib dilas sekali jalan terus-menerus dari satu ujung tanpa pengelasan ikat (tack weld) maupun jepit.',
        answer: 1,
        reason: 'Pengendalian distorsi justru memerlukan tack weld jarak teratur, jig penjepit/pendingin tembaga, serta teknik pengelasan selang-seling/langkah mundur (backstep welding).',
      },
    ],
    explanation:
      'Pencegahan cacat las merupakan kombinasi kebersihan antar-pass, kendali busur & ampere, serta teknik tack weld / backstep / clamping untuk menekan distorsi termal.',
  },
  {
    id: 'pck-las-07',
    bank: 'PCK',
    topic: 'Teknologi Pengelasan',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Dalam pengenalan proses las GMAW (MIG/MAG) di kelas XI, tentukan kebenaran prinsip parameter pengoperasian berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Pada pengelasan GMAW baja karbon (MAG), gas pelindung umumnya menggunakan CO2 murni atau campuran Argon + CO2, sedangkan kawat las gulungan (wire) bertindak sekaligus sebagai elektroda dan bahan tambah.',
        answer: 0,
        reason: 'Gas aktif CO2/campuran melindungi kolam las baja sementara wire feed terus menyuplai kawat.',
      },
      {
        text: 'Jika aliran gas pelindung pada regulator habis atau nozzle tersumbat spatter sehingga gas bocor keluar sebelum melindungi kolam las, hasil las akan mengalami cacat porosity parah akibat udara atmosfer masuk.',
        answer: 0,
        reason: 'Hilangnya selubung gas (shielding gas) menyebabkan O2/N2 udara bereaksi dan membentuk rongga gas.',
      },
      {
        text: 'Menggunakan gas pelindung Oksigen murni 100% adalah praktik aman paling ekonomis pada pengelasan TIG dan MIG.',
        answer: 1,
        reason: 'Oksigen murni mengoksidasi logam panas secara ekstrem dan berbahaya; pengelasan memakai gas inert Argon/Helium atau campuran aktif Ar+CO2 terkendali.',
      },
    ],
    explanation:
      'Pemahaman fungsi shielding gas, kestabilan wire feed speed vs tegangan, dan kebersihan contact tip/nozzle sangat penting dalam peralihan kompetensi siswa dari SMAW ke GMAW.',
  },
  {
    id: 'pck-las-08',
    bank: 'PCK',
    topic: 'Teknologi Pengelasan',
    pckFocus: 'Media/ICT & Simulator',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Sekolah menyediakan perangkat Simulator Las Virtual (VR/AR Welding Simulator) untuk melatih kelas X sebelum memegang mesin las nyata dengan elektroda habis pakai. Tentukan apakah pemanfaatan simulator tersebut Tepat atau Tidak Tepat.',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Memanfaatkan simulator untuk melatih konsistensi sudut kerja (work angle), sudut jalan (travel angle), panjang jarak busur, dan kecepatan tangan secara berulang tanpa membuang banyak elektroda dan pelat besi.',
        answer: 0,
        reason: 'Psikomotor awal seperti kestabilan sudut dan kecepatan gerak tangan efektif dibentuk aman lewat umpan balik grafis simulator.',
      },
      {
        text: 'Menyatakan siswa yang lulus 100% di simulator VR otomatis tidak perlu lagi berlatih mengelas pelat baja asli sebelum dilepas ujian sertifikasi kompetensi.',
        answer: 1,
        reason: 'Simulator tidak sepenuhnya menggantikan rasa dinamika kolam cairan logam (weld pool), asap/panas riil, pembersihan terak, dan suara busur sebenarnya.',
      },
      {
        text: 'Menggunakan grafik rekaman kesalahan dari simulator sebagai umpan balik diagnostik individual sebelum siswa pindah ke bilik las nyata.',
        answer: 0,
        reason: 'Data analitik jarak busur dan kecepatan mempercepat koreksi kebiasaan gerak tangan.',
      },
    ],
    explanation:
      'Simulator las berperan sebagai jembatan psikomotor aman dan hemat bahan sebelum praktik logam riil, bukan pengganti mutlak pengalaman nyata di bilik las.',
  },
  {
    id: 'pck-las-09',
    bank: 'PCK',
    topic: 'Teknologi Pengelasan',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Siswa mencoba menyalakan busur las SMAW tetapi ujung elektroda berulang kali menempel lengket (sticking) ke pelat kerja dan padam. Faktor-faktor penyebab paling umum yang perlu diperiksa bersama siswa adalah .... (Pilih semua jawaban benar)',
    options: [
      'Setting arus (ampere) pada mesin las terlalu rendah dibandingkan rekomendasi diameter elektroda yang dipasang.',
      'Permukaan pelat baja masih tertutup karat tebal, cat, atau minyak sehingga menghambat aliran arus busur awal, atau klem massa terpasang longgar.',
      'Gerakan tangan siswa saat mengetuk/menggores awal tidak langsung diangkat sedikit membentuk celah busur stabil (±2–3 mm) sehingga kawat membeku menempel.',
      'Kabel holder elektroda tidak dicelupkan terlebih dahulu ke ember air garam.',
      'Ketebalan pelat baja terlalu rata dan bersih.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Elektroda lengket paling kerap muncul akibat ampere terlalu rendah, kontak listrik terhambat karat/cat atau klem massa kendor, serta teknik scratch/tap start tanpa menarik cepat ke jarak busur stabil.',
  },
  {
    id: 'pck-las-10',
    bank: 'PCK',
    topic: 'Teknologi Pengelasan',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada proses pengelasan sambungan pelat tebal (>8 mm) dengan persiapan kampuh V tunggal (single V-groove), tujuan pedagogis yang harus dijelaskan kepada siswa sebelum menyayat tepi pelat memakai gerinda/bevel meliputi .... (Pilih semua jawaban benar)',
    options: [
      'Memberikan ruang akses elektroda hingga ke dasar sambungan agar tercapai penetrasi akar penuh (complete joint penetration) tanpa terhalang dinding pelat tebal.',
      'Mengatur celah akar (root gap) dan muka akar (root face) terukur agar akar tidak jebol berlebih (burn-through) namun tetap tersambung matang.',
      'Membersihkan zona las sekitar 20–30 mm dari minyak, gemuk, terak potong oksigen (mill scale), dan kelembapan.',
      'Menghilangkan root face hingga setipis silet dengan sudut kampuh 10° saja agar pengisian elektroda seminimal mungkin.',
      'Membiarkan celah sambungan rapat 0 mm pada pelat tebal 16 mm tanpa kampuh sedikit pun.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Persiapan sambungan (joint preparation) sangat menentukan mutu akar las: sudut kampuh (±60° total), root face, dan root gap mencegah lack of penetration maupun burn-through, disertai pembersihan zona las.',
  },
  {
    id: 'pck-las-11',
    bank: 'PCK',
    topic: 'Teknologi Pengelasan',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Dalam asesmen praktik proyek pembuatan rangka meja kerja/rak bengkel berbasis Teaching Factory, indikator rubrik penilaian pengelasan yang adil, menyeluruh, dan sesuai standar industri mencakup .... (Pilih semua jawaban benar)',
    options: [
      'Kesikuan dan kesesuaian dimensi rakitan rangka (toleransi kerataan/kesikuan diagonal sebelum maupun sesudah dilas penuh).',
      'Kualitas sambungan las (tidak ada retak, undercut berat, porosity, maupun slag tertinggal) serta kerapian finishing gerinda tanpa mengikis tipis logam induk.',
      'Kepatuhan prosedur K3LH (APD lengkap, sistem hisap asap/ventilasi, penanganan limbah puntung elektroda dan kondisi bilik las 5R).',
      'Hanya melihat tinggi tumpukan las paling tebal di semua sudut agar terlihat penuh.',
      'Mengukur seberapa cepat siswa menghabiskan sekotak penuh elektroda tanpa peduli kesikuan rangka.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Produk konstruksi las dinilai secara holistik: kesesuaian geometris rakitan (kesikuan diagonal/distorsi terkendali), integritas fusi las bebas cacat kritis, dan kedisiplinan keselamatan K3LH.',
  },

  // === 7. ELEMEN MESIN & SISTEM TRANSMISI (10) ===
  {
    id: 'pck-em-01',
    bank: 'PCK',
    topic: 'Elemen Mesin & Transmisi',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Pada perakitan sistem transmisi motor listrik ke poros mesin bor/konveyor menggunakan sepasang roda gigi lurus (spur gear): roda gigi penggerak (driver) memiliki jumlah gigi z₁ = 20 berputar pada n₁ = 1200 rpm, memutar roda gigi yang digerakkan (driven) dengan jumlah gigi z₂ = 60. Banyak siswa salah menjawab bahwa roda gigi besar berputar lebih cepat atau menjadi 3600 rpm. Bagaimana guru menjelaskan prinsip rasio putaran dan torsi secara logis?',
    options: [
      'Membenarkan jawaban 3600 rpm karena jumlah gigi z₂ tiga kali lebih banyak.',
      'Membimbing menggunakan hukum kekekalan kecepatan tangensial / persamaan n₁ × z₁ = n₂ × z₂ sehingga n₂ = (20 / 60) × 1200 = 400 rpm (turun 3 kali lipat), dan menuntun siswa memahami bahwa penurunan putaran berbanding terbalik dengan peningkatan Torsi keluaran (mekanikal advantage).',
      'Menghitung n₂ = 1200 - (60 - 20) = 1160 rpm.',
      'Menjelaskan bahwa arah putar kedua roda gigi bertautan luar akan selalu searah.',
      'Menyatakan rasio putaran hanya bergantung pada bahan pelumas bukan jumlah gigi.',
    ],
    answer: 1,
    explanation:
      'Pada pasangan dua roda gigi bertautan luar, putaran berbanding terbalik dengan jumlah gigi: n₂ / n₁ = z₁ / z₂ = 20 / 60 = 1/3 -> n₂ = 400 rpm (berputar berlawanan arah). Reduksi kecepatan 3:1 menaikkan torsi poros keluaran menjadi ~3 kali lipat (dikurangi rugi efisiensi).',
  },
  {
    id: 'pck-em-02',
    bank: 'PCK',
    topic: 'Elemen Mesin & Transmisi',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Dalam proyek pemasangan bantalan gelinding (rolling bearing) tipe ball bearing ke rumah bantalan (housing) dan poros mesin, siswa menyarankan memukul bagian lingkar luar (outer race) bantalan dengan keras memakai palu besi ketika memasang bantalan ke POROS yang bersuaian sesak. Mengapa guru wajib segera mencegah langkah tersebut?',
    options: [
      'Memukul outer race saat mengepres inner race ke poros mengalirkan seluruh gaya kejut melalui bola-bola bantalan dan lintasan pacu (raceway) sehingga menimbulkan lekukan permanen (brinelling/cacat dini) dan memperpendek umur bantalan secara drastis; pemasangan ke poros wajib menekan/memanas-induksi hanya pada INNER RACE.',
      'Memukul outer race sebenarnya lebih kuat asalkan dilakukan memakai palu besar 5 kg.',
      'Bantalan gelinding cukup ditempelkan menggunakan lem epoksi tanpa perlu press fit.',
      'Bola baja di dalam bantalan memang dirancang untuk menahan hantaman palu langsung.',
      'Semua bantalan harus selalu dibakar dengan obor las hingga merah menyala sebelum dipasang.',
    ],
    answer: 0,
    explanation:
      'Aturan emas perakitan bantalan: gaya tekan pemasangan wajib selalu disalurkan pada cincin (race) yang sedang mengalami suaian sesak! Saat memasang ke poros (biasanya suaian sesak pada inner race), gunakan pipa penekan atau pemanas induksi bantalan (<110–120 °C) pada inner race agar bola-bola tidak terhantam dan mengalami brinelling.',
  },
  {
    id: 'pck-em-03',
    bank: 'PCK',
    topic: 'Elemen Mesin & Transmisi',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Ketika siswa membongkar sabuk V (V-belt) pada mesin bor kolom dan memasang sabuk baru yang terlalu kendor atau malah terlalu kencang ekstrem, pemahaman teknik pemeliharaan transmisi sabuk yang perlu dikuasai siswa adalah ....',
    options: [
      'Sabuk yang dipasang sekencang-kencangnya hingga kaku seperti batang besi akan memperpanjang usia bantalan motor listrik.',
      'Ketegangan (tension) sabuk diatur terukur melalui pemeriksaan defleksi di tengah bentangan; terlalu kendor menimbulkan selip/panas/aus sabuk, sedangkan terlalu tegang membebani poros dan merusak bantalan motor lebih cepat, ditambah pemeriksaan kesejajaran alur puli (pulley alignment).',
      'Sabuk V bekerja mengandalkan gaya gesek bagian alas bawahnya yang menumpu dasar parit puli.',
      'Permukaan sabuk V wajib selalu diolesi oli gemuk supaya tidak berdecit saat start.',
      'Untuk puli berpasangan 2 sabuk paralel, cukup mengganti 1 sabuk yang putus sambil membiarkan sabuk sebelahnya yang sudah melar.',
    ],
    answer: 1,
    explanation:
      'Sabuk V menyalurkan daya melalui gesekan baji pada kedua DINDING SAMPING sabuk (bukan menyentuh dasar alur). Pengukuran defleksi tegangan tengah bentangan dan keselarasan bidang puli mencegah selip maupun beban berlebih radial pada bearing motor; sistem multi-belt harus diganti satu set berpasangan (matched set).',
  },
  {
    id: 'pck-em-04',
    bank: 'PCK',
    topic: 'Elemen Mesin & Transmisi',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.1',
    prompt:
      'Dalam mengajarkan fungsi Pasak (Key) dan Baut Pengikat bertingkat pada siswa kelas XI, cara terbaik membangun pemikiran analitis keselamatan rancangan (fail-safe design philosophy) adalah ....',
    options: [
      'Menyuruh siswa menyalin gambar macam-macam pasak tanpa diskusi aplikasi.',
      'Mengajak siswa membedah kasus mekanik nyata: mengapa pasak benam pada poros pompa sengaja dirancang lebih mudah mengalami tegangan geser putus dibanding poros utama atau impeller mahal ketika terjadi kemacetan beban mendadak (berfungsi sebagai mekanisme sekring mekanis/mechanical fuse).',
      'Mengajarkan bahwa pasak boleh diganti dengan paku beton seadanya asalkan masuk ke alur.',
      'Menjelaskan bahwa pasak bertugas menahan gaya tarik aksial berat pada crane.',
      'Melarang pembahasan tegangan geser (shear stress) karena dianggap terlalu matematis.',
    ],
    answer: 1,
    explanation:
      'Mengaitkan elemen mesin dengan filosofi perancangan (pasak sebagai pengunci torsi sekaligus mechanical fuse murah untuk melindungi poros dan gearbox mahal) menumbuhkan pemahaman konseptual dan konteks industri.',
  },
  {
    id: 'pck-em-05',
    bank: 'PCK',
    topic: 'Elemen Mesin & Transmisi',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.6',
    prompt:
      'Siswa diberi studi kasus pemeliharaan mesin: "Baut kepala heksagonal bertanda angka `8.8` pada flens pengikat putus akibat dikencangkan memakai kunci sambung pipa sembarangan hingga ulirnya tertarik molor." Asesmen pemahaman kode standar baut metrik ISO yang paling tepat diajukan guru adalah ....',
    options: [
      'Meminta siswa menghafal panjang total semua baut di gudang sekolah.',
      'Menugaskan siswa mengartikan kode kelas kekuatan `8.8` (angka pertama × 100 = 800 MPa kuat tarik minimum UTS; angka kedua 0,8 × 800 = 640 MPa kuat luluh/yield), lalu menghitung rekomendasi penggunaan kunci torsi (torque wrench) dan urutan pengencangan menyilang (crisscross) pada flens.',
      'Menyarankan mengganti baut `8.8` dengan baut `4.6` karena angka lebih kecil berarti lebih lentur.',
      'Menyuruh mengelas permanen seluruh kepala baut ke bodi flens supaya tidak kendur.',
      'Menjelaskan angka `8.8` adalah tanggal produksi bulan Agustus tahun 2008.',
    ],
    answer: 1,
    explanation:
      'Pada baut metrik kelas properti ISO (misal 8.8, 10.9, 12.9): angka depan × 100 MPa = UTS nominal (800 MPa), dan angka belakang menyatakan rasio kuat luluh (80% × 800 = 640 MPa). Pengencangan terkendali dengan torque wrench mencegah melampaui batas luluh baut (stripping/necking).',
  },
  {
    id: 'pck-em-06',
    bank: 'PCK',
    topic: 'Elemen Mesin & Transmisi',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Tentukan ketepatan pernyataan teknis mengenai sistem transmisi mekanik (puli-sabuk, rantai-sproket, dan roda gigi) berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Transmisi rantai dan sproket bersifat penggerak positif (positive drive) bebas selip jika terawat baik, berbeda dengan sabuk datar/V biasa yang masih memungkinkan micro-slip saat beban kejut tinggi.',
        answer: 0,
        reason: 'Kaitan positif gigi sproket terhadap rol rantai menjamin rasio kecepatan tetap tanpa selip.',
      },
      {
        text: 'Untuk jarak antar-poros yang sangat jauh (> 2 meter), penggunaan sepasang roda gigi lurus bersentuhan langsung umumnya jauh lebih ekonomis dan ringkas daripada transmisi sabuk atau rantai.',
        answer: 1,
        reason: 'Jarak poros jauh membutuhkan ukuran roda gigi raksasa dan presisi rumah gigi mahal; untuk jarak jauh lebih ekonomis memakai sabuk/rantai.',
      },
      {
        text: 'Roda gigi miring (helical gear) bekerja lebih senyap dan mampu memikul beban gigi lebih besar dibanding roda gigi lurus seukuran karena kontak antar-gigi terjadi bertahap, namun menimbulkan gaya aksial (dorong searah poros).',
        answer: 0,
        reason: 'Sudut heliks menghasilkan kontak bertahap halus sekaligus komponen gaya aksial yang perlu ditahan bantalan (thrust/angular contact bearing).',
      },
    ],
    explanation:
      'Pemilihan elemen transmisi membandingkan kebutuhan rasio konstan (no-slip), jarak sumbu poros, kebisingan operasi, serta beban gaya radial maupun aksial pada tumpuan bantalan.',
  },
  {
    id: 'pck-em-07',
    bank: 'PCK',
    topic: 'Elemen Mesin & Transmisi',
    pckFocus: 'Media/ICT & Simulator',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.4',
    prompt:
      'Dalam membelajarkan prinsip kerja kotak roda gigi percepatan (gearbox) dan kopling mekanis, evaluasi efektivitas pemanfaatan media simulasi dan alat peraga terpotong (cutaway) berikut.',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Menggunakan animasi kinematika 3D interaktif atau unit gearbox terpotong (cutaway) yang dapat diputar tuasnya sehingga siswa melihat langsung pergeseran garpu pemindah dan jalur aliran torsi di tiap tingkat gigi.',
        answer: 0,
        reason: 'Visualisasi alur daya internal pada mekanisme tertutup sulit dibayangkan hanya lewat teks datar.',
      },
      {
        text: 'Meminta siswa membayangkan susunan kopling gesek dan gigi mundur (idler gear) secara abstrak lewat dikte lisan penuh tanpa sketsa ataupun model.',
        answer: 1,
        reason: 'Tanpa representasi visual/konkret, siswa mudah gagal memahami mekanisme pembalikan arah putar oleh idler gear.',
      },
      {
        text: 'Meminta siswa menghitung rasio reduksi total susunan majemuk (compound gear train) berdasarkan data jumlah gigi yang langsung mereka amati dan verifikasi dari simulasi.',
        answer: 0,
        reason: 'Menautkan pengamatan visual aliran mekanik dengan perhitungan matematis memperdalam pemahaman.',
      },
    ],
    explanation:
      'Pembelajaran elemen mesin memadukan benda peraga cutaway + animasi aliran gerak untuk menjembatani konsep abstrak menjadi pemahaman mekanis konkret.',
  },
  {
    id: 'pck-em-08',
    bank: 'PCK',
    topic: 'Elemen Mesin & Transmisi',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Tentukan ketepatan pernyataan mengenai pelumasan dan pencegahan keausan elemen mesin berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Pelumasan hidrodinamik bekerja membentuk lapisan tipis film minyak bertekanan di antara poros berputar dan bantalan luncur sehingga permukaan logam tidak bersentuhan langsung.',
        answer: 0,
        reason: 'Putaran poros menyeret oli ke celah konvergen (wedge) hingga mengangkat beban secara hidrodinamik.',
      },
      {
        text: 'Mengisi penuh 100% seluruh rongga kosong rumah bantalan gelinding (bearing housing) dengan gemuk (grease) selalu lebih baik daripada pengisian 30–50% kapasitas ruang.',
        answer: 1,
        reason: 'Pengisian grease berlebih hingga 100% memicu pengadukan berlebih (churning), kenaikan suhu cepat, dan jebolnya seal pelindung.',
      },
      {
        text: 'Oli pelumas tidak hanya berfungsi menurunkan koefisien gesekan, tetapi juga membantu menyerap panas, mencegah korosi permukaan, dan membawa partikel kontaminan halus menuju filter.',
        answer: 0,
        reason: 'Fungsi multi-peran pelumas meliputi lubrikasi, pendinginan, proteksi karat, pembersihan, dan peredaman.',
      },
    ],
    explanation:
      'Pengetahuan tribologi praktis—termasuk takaran grease 30–50% ruang housing bearing agar tidak overheating—mencegah kegagalan perawatan prematur di bengkel.',
  },
  {
    id: 'pck-em-09',
    bank: 'PCK',
    topic: 'Elemen Mesin & Transmisi',
    pckFocus: 'Miskonsepsi Siswa',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.2',
    prompt:
      'Dalam praktikum pembongkaran dan pemeriksaan mesin penggerak dua poros yang dihubungkan kopling fleksibel tipe flens pin-karet (flexible coupling), gejala getaran hebat dan kerusakan bantalan dini sering muncul. Penyebab teknis di bidang elemen mesin yang relevan diperiksa siswa meliputi .... (Pilih semua jawaban benar)',
    options: [
      'Ketidaklurusan sumbu poros motor terhadap poros mesin (angular misalignment maupun parallel offset misalignment) di luar batas toleransi kopling.',
      'Ketidakseimbangan massa (unbalance) pada puli/rotor berputar atau karet peredam kopling telah mengeras retak aus.',
      'Fondasi pelat dasar mesin kurang kokoh atau baut jangkar longgar (soft foot) memicu resonansi getaran.',
      'Arah tulisan kode tipe bantalan pada plastik kemasan awal menghadap keluar.',
      'Penggunaan baut kelas 8.8 alih-alih baut kayu pada pelat dudukan motor.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Sumber utama getaran mesin rotasi industri adalah misalignment poros (angular/parallel), unbalance, kelonggaran pondasi/soft foot, serta kerusakan elemen peredam/bantalan.',
  },
  {
    id: 'pck-em-10',
    bank: 'PCK',
    topic: 'Elemen Mesin & Transmisi',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.2',
    prompt:
      'Seorang guru merancang unit pembelajaran "Pemilihan Komponen Transmisi untuk Mesin Pencacah Kompos Sekolah" agar memicu pemikiran tingkat tinggi (HOTS) dan kolaborasi. Aktivitas kelas mana saja yang mendukung keterlibatan aktif seluruh profil belajar siswa? (Pilih lebih dari satu)',
    options: [
      'Siswa bekerja dalam kelompok dengan pembagian peran (analis beban/daya motor, perancang rasio kecepatan puli/gearbox, pencari spesifikasi katalog standar bearing/sabuk, dan peninjau K3LH pelindung transmisi).',
      'Kelompok menyusun argumentasi membandingkan dua alternatif transmisi (misal sabuk V bertingkat vs gearbox reduksi) dengan data harga komponen, perawatan, dan keselamatan.',
      'Mengadakan ulasan sejawat (gallery walk) di mana kelompok lain menguji kelogisan perhitungan putaran poros keluaran dan kemudahan pemeliharaan desain teman.',
      'Guru langsung menyerahkan seluruh gambar jadi dan daftar belanja ke siswa untuk disalin tanpa analisis alasan pilihan komponen.',
      'Membebaskan siswa memasang rantai tanpa tutup pelindung (guard) demi alasan estetika.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Proyek desain nyata berbasis analisis katalog standar industri, perbandingan trade-off teknis-ekonomis, dan peninjauan K3LH mendorong pembelajaran mendalam berpusat pada siswa.',
  },

  // === 8. K3LH BENGKEL, MANAJEMEN BENGKEL & TEACHING FACTORY (11) ===
  {
    id: 'pck-k3-01',
    bank: 'PCK',
    topic: 'K3LH & Teaching Factory',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Di bengkel pemesinan, guru melihat seorang siswa baru masuk area mesin bubut dengan memakai sarung tangan kain rajut, jam tangan logam di pergelangan kiri, serta membiarkan ujung tali jaket menjuntai bebas dengan alasan "agar tangan tidak kotor tatal dan tidak kedinginan". Tindakan korektif segera sekaligus pembimbingan alasan ilmiah K3LH yang paling tepat adalah ....',
    options: [
      'Membiarkannya karena sarung tangan selalu baik untuk semua pekerjaan mesin.',
      'Menghentikan mesin/memintanya mundur dari area mesin berputar sebelum start: mewajibkan melepas sarung tangan kain, jam tangan, dan jaket bertali; menjelaskan bahwa mesin berputar berpotensi MENARIK/MELILIT kain dan aksesori (entanglement hazard) jauh lebih fatal daripada risiko kotoran debu—untuk menyingkirkan tatal gunakan chip hook/kuas setelah spindel berhenti total, sementara APD utama bubut adalah safety glasses, wearpack pas badan, dan safety shoes.',
      'Mengganti sarung tangan kain rajut dengan sarung tangan plastik longgar agar lebih licin.',
      'Hanya memintanya bekerja lebih cepat supaya segera selesai.',
      'Menghukum siswa lari mengelilingi lapangan bengkel tanpa pernah menjelaskan bahaya entanglement.',
    ],
    answer: 1,
    explanation:
      'Salah satu aturan K3LH paling krusial dan paling sering disalahpahami siswa di bengkel mesin perkakas adalah LARANGAN sarung tangan, baju lengan panjang longgar, jam tangan/cincin, dan rambut terurai di sekitar komponen berputar (spindel, chuck, drill). Ketika menyentuh bagian berputar, serat kain dapat tertarik seketika menarik jari/lengan masuk ke mesin.',
  },
  {
    id: 'pck-k3-02',
    bank: 'PCK',
    topic: 'K3LH & Teaching Factory',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.1',
    prompt:
      'Saat kelompok siswa hendak membersihkan dan mengganti sabuk V di dalam kap motor sebuah mesin frais, guru menekankan penerapan prosedur LOTO (Lockout/Tagout). Namun seorang siswa berkata, "Tombol merah mesin kan sudah dimatikan, Pak, tidak usah repot pasang gembok dan label di sakelar induk." Bagaimana respons keteladanan sekaligus edukasi K3LH guru?',
    options: [
      'Menyetujui argumen siswa supaya praktikum cepat berlanjut.',
      'Menegaskan tidak boleh berkompromi terhadap LOTO: menjelaskan skenario nyata di bengkel ramai di mana teman kelompok lain yang tidak tahu mengira mesin rusak lalu menyalakan sakelar dinding tanpa melihat tangan siswa berada di puli; memasang gembok pribadi + tag identifikasi pada isolator utama mengunci sumber energi hingga seluruh pekerjaan perawatan tuntas.',
      'Menyuruh satu teman berdiri menjaga tombol saja sambil tetap mengobrol memakai ponsel.',
      'Mengganti gembok pengaman dengan selembar selotip kertas biasa.',
      'Melakukan penggantian sabuk saat motor berjalan pelan supaya sabuk mudah masuk alur.',
    ],
    answer: 1,
    explanation:
      'LOTO (Lockout/Tagout) mengisolasi sumber energi listrik/pneumatik/hidrolik secara fisik (gembok hanya dibuka oleh pekerja yang memasangnya + tag peringatan) saat perawatan/perbaikan, menumbuhkan integritas budaya keselamatan yang tidak bisa ditawar oleh alasan terburu-buru.',
  },
  {
    id: 'pck-k3-03',
    bank: 'PCK',
    topic: 'K3LH & Teaching Factory',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.4',
    prompt:
      'Sekolah menerapkan model pembelajaran Teaching Factory (TeFa) pada kompetensi pemesinan untuk menerima pesanan komponen pengikat dari bengkel industri mitra. Tantangan pembelajaran yang sering terjadi adalah guru hanya mengerjakan pesanan itu sendiri atau menyerahkannya kepada 2 siswa terpintar demi kejar target tenggat, sementara 26 siswa lainnya hanya menonton. Solusi manajemen pembelajaran TeFa yang benar adalah ....',
    options: [
      'Menghapus program TeFa dan kembali ke latihan mengikir balok tanpa fungsi selamanya.',
      'Memecah alur produksi menjadi struktur lini stasiun kerja bernilai belajar (desain CAD/gambar kerja -> penyediaan bahan & roughing -> pemesinan presisi -> deburring & inspeksi QC dimensi -> pengemasan) dengan rotasi peran terjadwal serta pendampingan kualitas berlapis sehingga seluruh siswa berpartisipasi terukur sesuai capaian kurikulum.',
      'Mempekerjakan siswa lembur hingga tengah malam setiap hari tanpa memperhatikan kurikulum kelas.',
      'Menerima proyek jauh di luar kapasitas mesin bengkel sekolah lalu mensubkontrakkannya ke luar 100%.',
      'Membayar buruh harian dari luar dan tetap mengklaimnya sebagai karya portofolio seluruh siswa.',
    ],
    answer: 1,
    explanation:
      'Inti Teaching Factory yang sejati memadukan standar mutu/waktu industri dengan pemerataan pengalaman belajar kurikulum (perancangan, eksekusi berstasiun, QC, dan budaya kerja 5R) melalui dekomposisi pekerjaan dan rotasi terencana.',
  },
  {
    id: 'pck-k3-04',
    bank: 'PCK',
    topic: 'K3LH & Teaching Factory',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.3',
    prompt:
      'Dalam penerapan budaya kerja industri 5R (Ringkas, Rapi, Resik, Rawat, Rajin) di bengkel SMK, banyak siswa mengira 5R sekadar kerja bakti menyapu lantai pada 5 menit akhir jam praktik. Langkah pembudayaan yang bermakna agar 5R benar-benar mencerminkan efisiensi kerja industri adalah ....',
    options: [
      'Menjadikan hukuman menyapu bengkel bagi siapa saja yang nilainya jelek.',
      'Membimbing siswa menerapkan setiap huruf secara nyata: Ringkas (memilah alat perlu vs barang tak terpakai di area mesin), Rapi (penataan shadow board berkode lokasi untuk kunci cekam, jangka sorong, & pahat agar pencarian <30 detik), Resik (pembersihan sambil memeriksa anomali kebocoran oli/baut kendor), Rawat (standarisasi checklist bengkel), dan Rajin (konsistensi harian tanpa disuruh).',
      'Menumpuk semua kunci pas, kikir, dan mikrometer ke dalam satu peti besi tertutup.',
      'Melarang aktivitas praktik di bengkel setiap hari Jumat agar lantai selalu tampak mengilap.',
      'Memasang spanduk slogan 5R besar tanpa menyediakan rak khusus ataupun tempat pemilah limbah tatal.',
    ],
    answer: 1,
    explanation:
      '5R bukan sekadar "bersih-bersih", melainkan sistem manajemen tempat kerja visual (seperti shadow board, pemisahan limbah logam/B3/coolant bekas, dan cleaning as inspection untuk mendeteksi dini kebocoran/keausan mesin).',
  },
  {
    id: 'pck-k3-05',
    bank: 'PCK',
    topic: 'K3LH & Teaching Factory',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PG',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.1',
    prompt:
      'Mengacu pada tujuan pendidikan kejuruan (SMK) dan profil kesiapan kerja lulusan Teknik Mesin (subkompetensi PF.1), portofolio pembelajaran apa yang paling kuat membuktikan kesiapan lulusan di hadapan penguji industri (UKK / DUDIKA)?',
    options: [
      'Kumpulan foto selfie siswa di depan gedung sekolah memakai seragam praktik.',
      'Rekam utuh proyek manufaktur terintegrasi: gambar kerja bertoleransi + lembar perencanaan proses (WPS/operation sheet) + komponen rakitan jadi yang memenuhi toleransi QC + catatan inspeksi ukur mandiri + evaluasi perbaikan cacat beserta kepatuhan K3LH.',
      'Sertifikat hafalan nama-nama perusahaan manufaktur di kawasan industri.',
      'Buku catatan penuh salinan teks definisi dari mesin fotokopi.',
      'Daftar absensi kehadiran kelas teori tanpa satu pun benda kerja terukur.',
    ],
    answer: 1,
    explanation:
      'Lulusan Teknik Mesin SMK dituntut memiliki keutuhan kompetensi end-to-end: menerjemahkan gambar kerja -> merencanakan proses -> mengeksekusi aman -> memverifikasi ukuran QC -> merefleksikan perbaikan mutu.',
  },
  {
    id: 'pck-k3-06',
    bank: 'PCK',
    topic: 'K3LH & Teaching Factory',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.3',
    prompt:
      'Berdasarkan prinsip Hirarki Pengendalian Risiko K3LH (Eliminasi, Substitusi, Rekayasa Teknik/Engineering Control, Administrasi/SOP, dan APD) di bengkel teknik mesin, tentukan ketepatan pengelompokan contoh berikut.',
    categories: ['Tepat', 'Tidak Tepat'],
    statements: [
      {
        text: 'Memasang pelindung akrilik transparan penahan percikan tatal (chuck guard) dan sistem penyedot asap las lokal (fume extractor) termasuk pengendalian Rekayasa Teknik (Engineering Control).',
        answer: 0,
        reason: 'Menghalangi/menyingkirkan bahaya secara fisik di sumber mesin atau lingkungan kerja adalah Engineering Control.',
      },
      {
        text: 'Membagikan kacamata safety kepada siswa menempati urutan PERTAMA paling efektif dan menggantikan kebutuhan pelindung mesin berputar maupun ventilasi ruangan.',
        answer: 1,
        reason: 'APD merupakan lapisan pertahanan TERAKHIR (bukan teratas) dalam hirarki K3LH, dipakai melengkapi bukan menggantikan kontrol rekayasa dan SOP.',
      },
      {
        text: 'Mengganti cairan pemotong berbasis bahan kimia berbahaya tinggi ke bio-coolant ramah lingkungan yang rendah iritasi kulit merupakan upaya Substitusi.',
        answer: 0,
        reason: 'Mengganti bahan berbahaya dengan alternatif lebih aman adalah definisi Substitusi.',
      },
    ],
    explanation:
      'Guru produktif SMK perlu menanamkan pola pikir keselamatan sistemik sesuai hirarki pengendalian risiko: upayakan eliminasi/substitusi/rekayasa teknik/SOP terlebih dahulu, lalu perkuat dengan APD wajib yang sesuai jenis mesin.',
  },
  {
    id: 'pck-k3-07',
    bank: 'PCK',
    topic: 'K3LH & Teaching Factory',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Sosial',
    subkompetensi: 'S.2',
    prompt:
      'Dalam tata kelola limbah dan pemeliharaan bengkel mesin sekolah ramah lingkungan (LH), evaluasi ketepatan prosedur siswa berikut.',
    categories: ['Benar', 'Salah'],
    statements: [
      {
        text: 'Cairan pendingin (emulsi coolant bekas) dan oli hidrolik/gearbox bekas ditampung dalam jeriken berlabel limbah B3 untuk ditangani pengelola berizin, TIDAK dibuang ke saluran air/selokan sekolah.',
        answer: 0,
        reason: 'Oli/coolant bekas mencemari air tanah dan ekosistem saluran drainase jika dibuang bebas.',
      },
      {
        text: 'Tatal geram baja, kuningan, dan aluminium dikumpulkan terpisah di wadah scrap logam agar mudah didaur ulang sekaligus mengurangi bahaya sayatan kaki atau terbakarnya geram magnesium/aluminium.',
        answer: 0,
        reason: 'Pemilahan scrap memaksimalkan nilai daur ulang serta keselamatan kerja.',
      },
      {
        text: 'Kain majun basah berminyak maupun sisa thinner cat semprot boleh langsung dibakar bersama tumpukan kertas di halaman belakang bengkel setiap sore.',
        answer: 1,
        reason: 'Pembakaran terbuka majun berminyak & bahan kimia melepaskan asap beracun serta berisiko kebakaran spontan/meluas.',
      },
    ],
    explanation:
      'Aspek Lingkungan Hidup (LH) dalam K3LH menuntut pengelolaan bertanggung jawab terhadap limbah cair (oli/coolant B3), limbah padat tajam (pemilahan scrap logam), dan kain majun terkontaminasi.',
  },
  {
    id: 'pck-k3-08',
    bank: 'PCK',
    topic: 'K3LH & Teaching Factory',
    pckFocus: 'Metode Pengajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_KATEGORI',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Ketika menghadapi keterbatasan jumlah unit mesin fisik perkakas modern di sekolah maupun waktu praktik bengkel yang sempit, evaluasi kelayakan strategi perluasan pengalaman belajar siswa berikut.',
    categories: ['Sesuai', 'Tidak Sesuai'],
    statements: [
      {
        text: 'Membuat kesepakatan jadwal magang/kunjungan belajar terstruktur dengan bengkel manufaktur atau UMKM teknik sekitar (konteks lokal) guna mengamati langsung proses produksi yang belum tersedia di sekolah.',
        answer: 0,
        reason: 'Memanfaatkan potensi industri sekitar (P.5 & S.2) memperkaya wawasan proses manufaktur modern.',
      },
      {
        text: 'Menyiapkan modul belajar mandiri interaktif (simulator CAD/CNC, video trouble-shooting persiapan setup mesin, dan latihan baca gambar kerja) sehingga siswa sudah siap teknis sebelum jam giliran mesin fisik di sekolah dimulai.',
        answer: 0,
        reason: 'Blended workshop preparation memaksimalkan waktu bernilai tinggi saat di mesin sesungguhnya.',
      },
      {
        text: 'Mengosongkan jam pelajaran praktik seluruhnya dan menyuruh siswa menyalin buku panduan mesin dari halaman 1 sampai 200.',
        answer: 1,
        reason: 'Penyalinan mekanis tidak mengembangkan penalaran teknis, keterampilan desain, maupun kesiapan kerja.',
      },
    ],
    explanation:
      'Keterbatasan laboratorium fisik diatasi lewat pembelajaran campuran cerdas (simulasi pra-bengkel, pemetaan persiapan proses terstruktur, dan kemitraan industri lokal).',
  },
  {
    id: 'pck-k3-09',
    bank: 'PCK',
    topic: 'K3LH & Teaching Factory',
    pckFocus: 'K3LH & Teaching Factory',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Kepribadian',
    subkompetensi: 'K.3',
    prompt:
      'Sebuah kejadian nyaris celaka (near-miss) terjadi di bengkel saat sebuah kunci cekam (chuck key) bubut lupa dicabut oleh siswa dari rahang cekam, lalu terlempar menghantam dinding aman ketika sakelar sempat dinyalakan sekilas. Tindakan guru yang edukatif, konstruktif, dan berorientasi perbaikan budaya aman adalah .... (Pilih semua jawaban benar)',
    options: [
      'Segera menghentikan seluruh operasi sebentar, memastikan tidak ada cedera, lalu menjadikan insiden near-miss tersebut studi refleksi bersama kelas untuk menganalisis akar penyebab hilangnya fokus.',
      'Menetapkan aturan visual "Tangan Tidak Boleh Lepas dari Kunci Cekam Selama Terpasang di Chuck" serta mempertimbangkan penggunaan/modifikasi kunci cekam berpegas pengaman (spring-loaded safety chuck key) sesuai ketersediaan.',
      'Menguatkan prosedur saling memeriksa berpasangan (buddy check) dan checklist pra-start tanpa mempermalukan atau merendahkan martabat siswa secara kasar.',
      'Menyembunyikan kejadian tersebut agar catatan administrasi bengkel terlihat nol insiden.',
      'Membiarkan kunci cekam biasa tetap ditinggalkan menancap di chuck asalkan putaran masih rendah.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Dalam budaya keselamatan industri (Zero Accident Mindset), pelaporan dan analisis terbuka atas kejadian near-miss berharga emas untuk memperbaiki rekayasa/prosedur (kunci bermekanisme pegas + aturan no-hand-off chuck key + buddy check) tanpa menutupi masalah ataupun mempermalukan.',
  },
  {
    id: 'pck-k3-10',
    bank: 'PCK',
    topic: 'K3LH & Teaching Factory',
    pckFocus: 'Asesmen Otentik',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Profesional',
    subkompetensi: 'PF.5',
    prompt:
      'Untuk memastikan proyek akhir pembelajaran bengkel kelas XII Teknik Mesin mencerminkan kolaborasi lintas keahlian (CAD, Pemesinan/CNC, Pengelasan, Metrologi, dan K3LH), ciri rancangan projek dan rubrik terpadu yang kuat meliputi .... (Pilih semua jawaban benar)',
    options: [
      'Mulai dari perancangan produk fungsional di CAD beserta analisis pemilihan material dan toleransi perakitan.',
      'Eksekusi fabrikasi (pemotongan, pemesinan presisi, pengelasan konstruksi rangka/penyetelan transmisi) menggunakan operation sheet dan kepatuhan K3LH.',
      'Inspeksi dimensi QC silang oleh teman/tim penguji memakai instrumen ukur presisi yang tepat (Rule of 10), dilengkapi refleksi revisi atas penyimpangan yang ditemukan.',
      'Menghilangkan tahap perencanaan gambar dan langsung memotong besi agar cepat jadi.',
      'Menilai seluruh anggota kelompok dengan angka identik 95 tanpa mengamati kinerja individual maupun catatan inspeksi.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Integrasi lintas elemen kompetensi SMK menghasilkan proyek berstandar manufaktur utuh—menghubungkan rancangan digital CAD, eksekusi terukur di lantai bengkel, inspeksi metrologi independen, serta refleksi profesional.',
  },
  {
    id: 'pck-k3-11',
    bank: 'PCK',
    topic: 'K3LH & Teaching Factory',
    pckFocus: 'Tujuan Pembelajaran',
    source: 'Bank PCK Teknik Mesin SMK',
    type: 'PGK_MCMA',
    kompetensi: 'Pedagogik',
    subkompetensi: 'P.5',
    prompt:
      'Penyesuaian jenis APD dan rambu keselamatan wajib di bengkel Teknik Mesin harus spesifik terhadap sumber bahaya tiap zona mesin (tidak disamaratakan keliru). Pasangan zona kerja bengkel dan fokus keselamatan utamanya yang tepat adalah .... (Pilih semua jawaban benar)',
    options: [
      'Zona Mesin Bubut/Bor/Frais: wajib safety glasses/face shield, wearpack pas badan, sepatu safety; dilarang keras sarung tangan berbahan kain/longgar dan aksesori berjuntai dekat bagian berputar.',
      'Zona Pengelasan (SMAW/GMAW): wajib helm/kap las berfilter shade sesuai, sarung tangan kulit las panjang, apron tahan percikan api, sepatu safety kulit tertutup, dan ventilasi hisap asap.',
      'Zona Gerinda Bangku & Potong: wajib safety glasses + face shield penahan percikan, memeriksa penyangga benda kerja (tool rest berjarak maks. ±3 mm dari batu), dan pelindung percikan terpasang.',
      'Zona Kerja Mesin Bubut: sarung tangan rajut berbulu tebal diwajibkan untuk mencengkeram poros yang sedang berputar kencang.',
      'Zona Las Busur: cukup memakai sandal jepit dan kacamata baca bening asalkan ruangannya terang.',
    ],
    answer: [0, 1, 2],
    explanation:
      'Keselamatan bengkel menuntut ketepatan memilih APD per karakter risiko: perlindungan dari bahaya belitan (entanglement) di mesin rotasi tanpa sarung tangan vs perlindungan termal/radiasi UV + kulit tertutup total di zona pengelasan serta face shield di zona gerinda.',
  },
];
