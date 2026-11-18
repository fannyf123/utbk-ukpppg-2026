import type { ExamQuestion } from '../types/exam';

/** Bank PGK_KATEGORI & PGK_MCMA PCK Vokasi Juknis UKPPPG 2026 (Gaya LMS PPG & 4 Kompetensi) */
export const JUKNIS_PGK_VOKASI_2026: ExamQuestion[] = [
  {
    "id": "jk26-boga-01",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Praktik Sanitasi Dapur & Kontrol HACCP",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.4",
    "prompt": "Saat membimbing praktik pengolahan unggas di dapur produksi SMK, guru menemukan beberapa kebiasaan siswa selama persiapan bahan. Tentukan apakah setiap praktik siswa berikut **Sesuai HACCP** atau **Berisiko Kontaminasi**!",
    "categories": [
      "Sesuai HACCP",
      "Berisiko Kontaminasi"
    ],
    "statements": [
      {
        "text": "Siswa memakai talenan merah khusus untuk memotong daging ayam mentah dan talenan hijau terpisah untuk sayuran segar siap santap.",
        "answer": 0,
        "reason": "Kode warna talenan memutus risiko kontaminasi silang dari bakteri patogen bahan mentah."
      },
      {
        "text": "Siswa menyimpan wadah fillet ayam mentah di rak paling atas chiller agar mudah diambil, sementara salad buah siap saji diletakkan di rak bawah.",
        "answer": 1,
        "reason": "Bahan mentah di rak atas dapat meneteskan cairan ke produk siap makan di rak bawah."
      },
      {
        "text": "Siswa memverifikasi suhu inti dada ayam panggang memakai termometer tusuk digital hingga mencapai minimal 74 derajat C sebelum plating.",
        "answer": 0,
        "reason": "Titik kendali kritis (CCP) pemasakan unggas memastikan patogen Salmonella mati tuntas."
      },
      {
        "text": "Siswa mencuci talenan bekas daging mentah hanya dengan bilasan air dingin tanpa sabun sanitasi lalu langsung dipakai mengiris buah garnis.",
        "answer": 1,
        "reason": "Pencucian tanpa deterjen dan sanitasi panas/kimia tetap menyisakan biofilm bakteri pada permukaan talenan."
      }
    ],
    "explanation": "Pembelajaran K3LH Tata Boga menuntut penerapan disiplin Hazard Analysis Critical Control Point (HACCP): pemisahan talenan berkode warna, tata letak penyimpanan chiller aman, dan verifikasi suhu inti pemasakan."
  },
  {
    "id": "jk26-boga-02",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Diagnostik Miskonsepsi Patiseri & Emulsi Saus",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "Miskonsepsi Siswa",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.3",
    "prompt": "Dalam praktik Patiseri dan Pengolahan Saus Dasar Kontinental, guru melakukan asesmen diagnostik atas kegagalan produk kelompok siswa. Tentukan apakah setiap analisis penyebab teknis dan solusi guru berikut **Benar** atau **Salah**!",
    "categories": [
      "Benar",
      "Salah"
    ],
    "statements": [
      {
        "text": "Saus mayonnaise pecah karena minyak dituangkan terlalu cepat sekaligus di awal pengocokan sehingga fase terdispersi gagal menyatu dengan pengemulsi kuning telur.",
        "answer": 0,
        "reason": "Penambahan minyak pada mayonnaise harus bertahap tetes demi tetes di awal agar emulsi minyak-dalam-air terbentuk stabil."
      },
      {
        "text": "Sponge cake bantat setelah siswa sering membuka pintu oven pada 10 menit awal pemanggangan akibat hilangnya uap panas sebelum struktur protein telur dan pati terkoagulasi.",
        "answer": 0,
        "reason": "Penurunan suhu mendadak membuat gelembung udara menyusut sebelum rangka kue mengeras."
      },
      {
        "text": "Roti tawar metode tangzhong menjadi keras karena siswa menambahkan air matang yang suhunya sudah dingin (suhu ruang) saat mengulen adonan.",
        "answer": 1,
        "reason": "Pasta tangzhong memang harus didinginkan ke suhu ruang/suam agar tidak mematikan ragi; roti keras umumnya dipicu kurang ulen (windowpane) atau overbaking."
      },
      {
        "text": "Choux paste (kue sus) gagal mengembang berongga karena pemanggangan memakai suhu awal tinggi (sekitar 200 derajat C) lalu diturunkan bertahap.",
        "answer": 1,
        "reason": "Suhu awal tinggi justru wajib bagi choux paste agar air adonan cepat menguap menciptakan rongga sebelum kulit mengering."
      }
    ],
    "explanation": "Guru Tata Boga perlu membimbing siswa menganalisis sains pangan di balik kegagalan produk (emulsi, koagulasi protein, uap air, gelatinisasi) alih-alih sekadar meniru langkah resep."
  },
  {
    "id": "jk26-boga-03",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Rubrik Asesmen Otentik Praktik Hidangan",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Guru menyusun rubrik penilaian ujian praktik Pembuatan Hidangan Utama Indonesia untuk siswa kelas XI Kuliner. Tentukan apakah kriteria penilaian autentik berikut **Tepat** atau **Kurang Tepat**!",
    "categories": [
      "Tepat",
      "Kurang Tepat"
    ],
    "statements": [
      {
        "text": "Memberi bobot seimbang antara ketepatan sanitasi-persiapan (mise en place), teknik proses memasak, keamanan K3, suhu penyajian, cita rasa, dan penataan piring.",
        "answer": 0,
        "reason": "Penilaian autentik kuliner menilai proses kerja industri dan mutu produk akhir secara utuh."
      },
      {
        "text": "Menilai seluruh hasil praktik hanya berdasarkan tampilan foto plating di media sosial tanpa mencicipi rasa maupun suhu penyajian hidangan.",
        "answer": 1,
        "reason": "Mutu sensori (rasa, aroma, tekstur, suhu saji) merupakan inti kualitas produk boga yang wajib diuji langsung."
      },
      {
        "text": "Menyertakan deskriptor perilaku terukur pada setiap rentang skor serta memberi umpan balik korektif langsung terhadap cacat teknik memotong atau bumbu siswa.",
        "answer": 0,
        "reason": "Deskriptor jelas menjaga objektivitas skor sekaligus membantu perbaikan keterampilan siswa."
      },
      {
        "text": "Menyamakan skor seluruh anggota tim dalam satu kelompok tanpa memverifikasi pembagian tugas persiapan, pengolahan, dan pembersihan area kerja.",
        "answer": 1,
        "reason": "Observasi individu diperlukan agar penilaian mencerminkan kontribusi keterampilan tiap siswa secara adil."
      }
    ],
    "explanation": "Asesmen otentik Tata Boga mencakup pengamatan kinerja persiapan (mise en place), K3LH dapur, teknik pemasakan, dan evaluasi organoleptik produk dengan rubrik berdeskriptor jelas."
  },
  {
    "id": "jk26-boga-04",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Perencanaan Gizi Seimbang & Menu Kontekstual",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.2",
    "prompt": "Siswa ditugaskan merancang paket menu makan siang seimbang untuk kantin sehat sekolah dan konsumen lanjut usia. Tentukan apakah prinsip perencanaan menu berikut **Sesuai Kaidah Gizi & Kuliner** atau **Tidak Sesuai**!",
    "categories": [
      "Sesuai Kaidah",
      "Tidak Sesuai"
    ],
    "statements": [
      {
        "text": "Memastikan kombinasi zat gizi makro (karbohidrat kompleks, protein hewani/nabati rendah lemak jenuh) dan mikronutrien dari variasi warna sayuran segar dalam satu porsi.",
        "answer": 0,
        "reason": "Prinsip Isi Piringku menyeimbangkan energi, protein, serat, vitamin, dan mineral harian."
      },
      {
        "text": "Untuk konsumen lansia dengan gangguan mengunyah, mengolah sumber protein hewani dengan teknik braised atau steamed yang empuk serta menekan pemakaian garam natrium berlebih.",
        "answer": 0,
        "reason": "Modifikasi tekstur lunak dan pembatasan natrium menyesuaikan kebutuhan fisiologis lansia."
      },
      {
        "text": "Menyajikan tiga macam bahan bertepung dan gorengan manis dalam satu piring agar terlihat penuh dan mengenyangkan bagi siswa SMP.",
        "answer": 1,
        "reason": "Dominasi karbohidrat olahan dan lemak jenuh berlebih tidak memenuhi standar menu seimbang."
      },
      {
        "text": "Menghilangkan keragaman warna, tekstur, dan aroma antar komponen menu supaya proses penimbangan bahan lebih cepat.",
        "answer": 1,
        "reason": "Menu seimbang yang menggugah selera tetap memadukan kontras warna, tekstur, bentuk potongan, dan metode masak."
      }
    ],
    "explanation": "Perencanaan menu profesional memadukan keseimbangan nutrisi sesuai karakteristik segmen konsumen, variasi sensori, serta efisiensi teknik pengolahan."
  },
  {
    "id": "jk26-boga-05",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Pengendalian Food Cost & Yield Pangan Lokal",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "Media/ICT & Simulator",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "prompt": "Pada unit Produksi Kewirausahaan Jasa Boga SMK, siswa mengelola pesanan 50 boks katering memakai lembar kalkulasi spreadsheet digital. Tentukan apakah pernyataan kendali biaya pangan (*food cost*) berikut **Benar** atau **Salah**!",
    "categories": [
      "Benar",
      "Salah"
    ],
    "statements": [
      {
        "text": "Perhitungan harga pokok per porsi harus memasukkan faktor Edible Portion (EP / persentase susut kupas dan masak), bukan hanya harga beli kotor (As Purchased / AP) di pasar.",
        "answer": 0,
        "reason": "Mengabaikan yield penyusutan sayur atau ikan membuat perkiraan biaya pangan jauh lebih rendah daripada biaya aktual."
      },
      {
        "text": "Memanfaatkan template spreadsheet otomatis memungkinkan siswa mensimulasikan penyesuaian porsi dan margin laba segera saat harga bahan pokok naik.",
        "answer": 0,
        "reason": "Pemanfaatan teknologi spreadsheet mempercepat analisis sensitivitas biaya secara akurat."
      },
      {
        "text": "Jika porsi standar resep 10 orang memerlukan 400 gram daging, maka pesanan 35 orang cukup dikalikan 2,5 menjadi 1.000 gram agar hemat biaya.",
        "answer": 1,
        "reason": "Faktor konversi resep untuk 35/10 = 3,5 kali sehingga membutuhkan 3,5 x 400 g = 1.400 gram daging."
      },
      {
        "text": "Pemakaian teknik garnis dari sayuran mahal yang tidak dapat dimakan harus diperbanyak supaya nilai jual katering tampak mewah.",
        "answer": 1,
        "reason": "Standar plating modern mengutamakan garnis fungsional yang dapat dimakan (edible garnish) sekaligus menjaga efisiensi food cost."
      }
    ],
    "explanation": "Penguasaan kalkulasi konversi resep, faktor penyusutan bahan (AP vs EP), dan food costing digital melatih kemandirian siswa menjalankan usaha jasa boga Teaching Factory."
  },
  {
    "id": "jk26-boga-06",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Pengelolaan Teaching Factory & Keselamatan Dapur",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.5",
    "prompt": "Menjelang layanan pemesanan Teaching Factory restoran sekolah, guru mengamati berbagai perilaku tim dapur siswa. Tentukan apakah tindakan pembelajaran di dapur berikut **Tepat** atau **Tidak Tepat**!",
    "categories": [
      "Tepat",
      "Tidak Tepat"
    ],
    "statements": [
      {
        "text": "Mewajibkan uji alergi menu dan pelabelan allergen (misal kacang tanah atau seafood) pada produk dessert sebelum ditawarkan ke pelanggan.",
        "answer": 0,
        "reason": "Transparansi allergen melindungi keselamatan kesehatan konsumen dan melatih etika layanan boga."
      },
      {
        "text": "Mengarahkan siswa memadamkan minyak wajan yang menyala terbakar dengan menutup rapat memakai penutup logam atau selimut api, bukan menyiramnya memakai air.",
        "answer": 0,
        "reason": "Menyiram api minyak panas (kelas kebakaran K/B) dengan air memicu ledakan percikan api berbahaya."
      },
      {
        "text": "Meminta siswa tetap menggunakan minyak goreng yang sudah menghitam pekat dan berasap pada suhu rendah demi menekan pengeluaran unit produksi.",
        "answer": 1,
        "reason": "Minyak rusak berpolimerisasi dan menghasilkan akrolein beracun yang merusak rasa makanan serta membahayakan kesehatan konsumen."
      },
      {
        "text": "Mengolah kembali buah potong berlebih yang masih segar dan tersimpan higienis menjadi produk selai atau isian tartlet bernilai jual.",
        "answer": 0,
        "reason": "Pemanfaatan trim pangan layak konsumsi mengurangi food waste serta meningkatkan efisiensi margin usaha."
      }
    ],
    "explanation": "Pengelolaan Teaching Factory Kuliner menggabungkan manajemen keselamatan api/bahan, pengendalian alergen, pencegahan food waste, dan kepatuhan mutu layanan."
  },
  {
    "id": "jk26-boga-07",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Metode Pengajaran Diferensiasi Praktik Memasak",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "prompt": "Dalam kelas X Dasar-Dasar Kuliner, sebagian siswa sudah terbiasa mengolah bahan di rumah sementara siswa lain masih gemetar memegang pisau koki dan bingung membedakan ukuran potongan sayur dasar (brunoise, julienne, jardiniere). Pilihlah SEMUA strategi diferensiasi dan scaffolding paling tepat yang diterapkan guru!",
    "options": [
      "Menyediakan model blok plastisin/wortel lunak dengan penggaris panduan ukuran serta demonstrasi teknik cakar tangan aman (*claw grip*) secara bertahap bagi pemula.",
      "Menyiapkan stasiun praktik berjenjang di mana siswa mahir langsung mempraktikkan variasi potongan kompleks untuk mise en place kaldu/saus tanpa menunggu lama.",
      "Membagi panduan visual kartu diagram dimensi milimeter di meja kerja masing-masing sebagai rujukan cepat (*scaffolding*) mandiri.",
      "Melarang siswa yang belum rapi memotong sayur untuk menyentuh pisau sepanjang satu semester penuh dan hanya meminta mereka menyapu dapur.",
      "Membandingkan hasil potongan siswa pemula di depan kelas dengan nada merendahkan agar terpacu cepat."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Diferensiasi dan scaffolding aman dalam keterampilan pisau dapur memadukan bimbingan ergonomis bertahap (claw grip + kartu panduan ukuran) dan tantangan pengayaan berjenjang tanpa menstigma atau menyingkirkan siswa pemula dari pengalaman belajar."
  },
  {
    "id": "jk26-boga-08",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Perbandingan Teknik Panas Kering vs Panas Basah",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.2",
    "prompt": "Siswa kelas XI menganalisis kecocokan teknik memasak berdasarkan karakteristik struktur daging dan sayuran pada proyek menu kontinental. Pilihlah SEMUA analisis teknis yang BENAR dan relevan dijadikan kunci evaluasi guru!",
    "options": [
      "Potongan daging sandung lamur (*brisket*) atau sengkel (*shank*) yang kaya jaringan ikat kolagen lebih tepat diolah menggunakan teknik panas basah perlahan seperti *braising* atau *stewing* agar kolagen terhidrolisis menjadi gelatin empuk.",
      "Teknik *blanching* sayuran hijau dalam air mendidih bergaram sebentar lalu segera direndam air es (*ice bath shock*) bertujuan menginaktifkan enzim perusak warna sekaligus mempertahankan klorofil hijau cerah.",
      "Saat merebus tulang untuk membuat kaldu putih bening (*white stock*), api wajib disetel kecil tenang (*simmering*) sambil rajin menyendok buih kotoran (*skimming*) alih-alih mendidihkan bergolak keras.",
      "Memasukkan sekaligus terlalu banyak potongan ayam dingin ke penggorengan minyak sedikit akan menaikkan suhu minyak drastis sehingga kulit langsung renyah bebas minyak.",
      "Potongan daging tenderloin tanpa jaringan ikat keras wajib direbus mendidih selama empat jam agar tidak alot saat disajikan sebagai steak medium-rare."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Memasukkan bahan dingin berlebih dalam deep-frying justru menjatuhkan suhu minyak sehingga makanan menyerap minyak berlebih (berminyak/soggy), dan tenderloin empuk cocok dimasak cepat panas kering seperti pan-searing/grilling, bukan direbus lama."
  },
  {
    "id": "jk26-boga-09",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Inisiatif PjBL Produk Pangan Lokal Berkearifan Daerah",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.5",
    "prompt": "Guru Tata Boga ingin menumbuhkan kecintaan terhadap bahan pangan lokal (singkong, sukun, talas, gula kelapa) lewat model *Project-Based Learning* agar produk siswa mampu bersaing dengan kudapan impor di pasar modern. Langkah rancangan pembelajaran PjBL paling tepat mencakup ....",
    "options": [
      "Mengidentifikasi potensi komoditas pangan lokal daerah sekitar sekolah beserta permasalahan nilai tambahnya sebagai pertanyaan pemantik proyek.",
      "Membimbing uji coba formulasi standar gramasi tepung lokal, uji ketahanan simpan, dan uji cita rasa panel konsumen (*uji hedonik/organoleptik*).",
      "Mengintegrasikan perhitungan harga pokok produksi, label komposisi gizi kemasan higienis, serta strategi pemasaran digital produk akhir.",
      "Meminta siswa menyalin ulang resep kudapan impor berbahasa asing tanpa satu pun eksperimen modifikasi bahan.",
      "Memfokuskan penilaian semata-mata pada ukuran poster promosi tanpa memeriksa resep standar dan rasa olahan nyata."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "PjBL vokasi berbasis kearifan lokal menuntut siswa mengangkat potensi komoditas sekitar, meneliti formulasi standar terukur, memvalidasi kualitas sensori, dan merancang kelayakan usaha nyata."
  },
  {
    "id": "jk26-boga-10",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Penanganan Keluhan Pelanggan & Etika Layanan",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Sosial",
    "subkompetensi": "S.2",
    "prompt": "Dalam praktik layanan restoran Teaching Factory, seorang tamu mengeluhkan sup krim yang disajikan terlalu asin serta agak dingin. Sebagai guru pembimbing tata hidang dan dapur, sikap profesional dan pembinaan paling tepat yang ditunjukkan bersama siswa adalah ....",
    "options": [
      "Menuntun siswa memohon maaf dengan tulus dan empatik kepada tamu tanpa berdebat menyalahkan selera lidah pelanggan.",
      "Segera menarik hidangan bermasalah lalu menyiapkan ulang pengganti bersuhu standar sambil mencicipi kendali mutu bersama siswa di dapur.",
      "Mengadakan refleksi pascalayanan untuk menelusuri tahap mana standar resep atau pengendalian suhu *bain-marie* terlewat.",
      "Menyuruh siswa berkeras bahwa takaran resep sekolah sudah baku dan meminta tamu tetap membayar penuh tanpa penggantian.",
      "Mengumumkan kesalahan siswa pramusaji lewat pengeras suara ruang makan agar jera."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Layanan hospitality profesional memprioritaskan pemulihan kepuasan tamu secara santun (service recovery), koreksi langsung mutu masakan, dan pembelajaran reflektif internal tanpa mempermalukan peserta didik di depan umum."
  },
  {
    "id": "jk26-boga-11",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Diagnostik Kesalahan Cookies & Teknik Laminasi",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "Miskonsepsi Siswa",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.3",
    "prompt": "Selama praktik produk pastry kering (*cookies*) dan adonan berlapis (*croissant/puff pastry*), dua kelompok siswa mengalami masalah berbeda: kelompok pertama menghasilkan cookies yang melebar tipis menyatu di loyang, sedangkan kelompok kedua menghasilkan croissant bantat tidak berongga lapisannya. Pilihlah SEMUA diagnosis teknis beserta tindak lanjut pembimbingan yang TEPAT!",
    "options": [
      "Pada cookies yang melebar berlebihan, bantu siswa memeriksa konsistensi lemak (*creaming* berlebihan atau mentega meleleh) serta terapkan pendinginan adonan di chiller sebelum dipanggang.",
      "Pada croissant yang gagal berlapis (*butter melted into dough*), bimbing siswa menjaga suhu lemak pelapis (*korsvet/butter*) seimbang dengan elastisitas adonan dasar (*detrempe*) dan lakukan *resting* dingin antar-lipatan.",
      "Membekali lembar ceklis suhu ruang kerja dan pengamatan visual tekstur adonan sebelum masuk tahap pemanggangan.",
      "Menambahkan jumlah ragi instan dua kali lipat ke dalam adonan cookies kering agar bentuknya tinggi mengembang seperti roti tawar.",
      "Memanggang adonan croissant pada suhu sangat rendah selama 90 menit agar mentega keluar merata menjadi genangan di loyang."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Melebarnya cookies dan menyatunya lapisan pastry sama-sama berkaitan erat dengan kontrol suhu lemak serta manajemen pendinginan adonan, bukan penambahan ragi pada cookies atau pemanggangan lambat yang memeras lemak keluar."
  },
  {
    "id": "jk26-boga-12",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Pemanfaatan Media Digital & Asesmen Formatif Video",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "Media/ICT & Simulator",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "prompt": "Guru Kuliner hendak memanfaatkan perangkat digital secara kritis dan kreatif dalam praktik membuat hidangan berteknik kompleks (*poaching egg* atau *plating dessert* presisi). Manakah pemanfaatan TIK yang PALING efektif memperdalam penguasaan keterampilan siswa?",
    "options": [
      "Menampilkan video sudut dekat (*close-up*) dengan anotasi suhu dan penanda visual titik krusial yang dapat diputar ulang melalui gawai di meja kerja tiap kelompok.",
      "Meminta siswa merekam video singkat proses kritis praktik mereka (saat mengocok emulsi atau menggulung adonan) untuk ditinjau umpan balik sejawat dan guru (*formatif video review*).",
      "Menggunakan formulir rubrik digital untuk merekam skor uji sensori konsumen sehingga data evaluasi terhimpun cepat untuk refleksi perbaikan.",
      "Menayangkan video mukbang hiburan berdurasi penuh satu jam pelajaran tanpa lembar observasi teknik.",
      "Melarang siswa mendokumentasikan catatan kesalahan eksperimen resep demi menghemat ruang penyimpanan."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Integrasi TPACK vokasi boga memanfaatkan media visual dekat beranotasi, rekaman proses mandiri untuk umpan balik formatif, dan pengumpulan data organoleptik berbasis digital."
  },
  {
    "id": "jk26-boga-13",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Prinsip Penyimpanan FIFO Bahan Pangan Dapur",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.4",
    "prompt": "Saat praktikum manajemen gudang logistik dapur, seorang siswa menerima pengiriman susu UHT baru yang bertanggal kedaluwarsa lebih lama, lalu menemui stok kemasan lama di rak pendingin belum bertanggal kedaluwarsa tetapi kemasannya sedikit menggembung dan berbau asam. Keputusan paling tepat berdasarkan gabungan prinsip **FIFO** dan keamanan pangan adalah ....",
    "options": [
      "Tetap memakai stok lama yang menggembung lebih dulu demi mematuhi aturan FIFO secara kaku.",
      "Memisahkan dan membuang stok lama yang menggembung (*reject/quarantine*) karena tanda kerusakan mikroba, lalu menggunakan stok aman paling awal masa kedaluwarsanya serta mencatat kejadian pada kartu stok.",
      "Mencampur kedua susu lama dan baru dalam satu panci saus krim agar rasa asamnya tersamar.",
      "Menyimpan seluruh stok susu baru di depan stok lama tanpa pelabelan tanggal datang.",
      "Mengabaikan kondisi kemasan selama tanggal cetakan luar masih belum terlewati."
    ],
    "answer": 1,
    "explanation": "Prinsip FIFO/FEFO selalu tunduk pada kelayakan mutu dan keamanan pangan; produk pangan dengan kemasan rusak/menggembung mengindikasikan kontaminasi gas bakteri dan wajib ditolak atau dimusnahkan seketika."
  },
  {
    "id": "jk26-boga-14",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Penataan Alur Dapur (Kitchen Workflow & Mise en Place)",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "Dalam simulasi pelayanan jam makan siang 40 porsi, guru mengamati dua kelompok selalu terlambat 25 menit menyajikan hidangan utama karena anggotanya sering bolak-balik memotong bawang di tengah kompor menyala dan berebut timbangan digital. Perbaikan alur perencanaan praktik paling efektif yang dibimbing guru adalah ....",
    "options": [
      "Menambah jam pelajaran menjadi dua kali lipat tanpa mengubah cara kerja kelompok.",
      "Mewajibkan penyusunan *time plan* tertulis dan penuntasan total tahapan *mise en place* (penimbangan, pemotongan, peracikan bumbu, dan penyiapan alat saji bersih) tervalidasi sebelum kompor mulai dinyalakan.",
      "Menugaskan guru mengambil alih proses pemotongan sayur seluruh kelompok agar cepat selesai.",
      "Mengurangi porsi penyajian dari 40 porsi menjadi 5 porsi saja di luar perjanjian proyek.",
      "Melarang anggota kelompok berkomunikasi selama memasak supaya suasana dapur sepi."
    ],
    "answer": 1,
    "explanation": "Budaya industri kuliner bertumpu pada *time planning* dan disiplin *mise en place* sebelum fase pemanasan (*cooking service*) sehingga produksi massal berjalan ritmis, aman, dan tepat waktu."
  },
  {
    "id": "jk26-boga-15",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Inklusi & Pembagian Peran Tim Dapur",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PG",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "prompt": "Seorang peserta didik kelas XI mengalami kelelahan kronis dan kesulitan berdiri terus-menerus dalam waktu lama saat praktik dapur 4 JP, sementara kelompoknya mulai meminggirkannya sebagai pencuci piring semata. Langkah inklusif dan kolaboratif paling adil oleh guru adalah ....",
    "options": [
      "Memindahkan siswa tersebut keluar dari jurusan Tata Boga secara sepihak.",
      "Menata stasiun kerja yang ergonomis dengan akses duduk aman pada pos *mise en place*, penimbangan bahan, *quality control* pelabelan suhu, atau *garnish plating*, lalu mengedukasi tim tentang rotasi peran produktif yang setara.",
      "Membiarkan ia duduk di luar ruangan tanpa tugas praktik sepanjang semester.",
      "Mengharuskan ia tetap berdiri 4 jam penuh tanpa jeda istirahat demi keseragaman nilai.",
      "Menyuruh anggota kelompok lain mengerjakan seluruh bagian nilainya secara diam-diam."
    ],
    "answer": 1,
    "explanation": "Pendidikan kejuruan inklusif menyediakan akomodasi ergonomis yang aman (area persiapan/QC/plating ramah posisi duduk) dan memastikan murid tetap berkontribusi pada kompetensi profesional bermakna."
  },
  {
    "id": "jk26-boga-16",
    "bank": "PCK",
    "topic": "PCK Tata Boga · Evaluasi Program Satu Semester Guru Kuliner",
    "prodiScope": [
      "tata-boga"
    ],
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi Juknis UKPPPG Tata Boga 2026",
    "type": "PG",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.5",
    "prompt": "Di akhir tahun ajaran, guru Tata Boga mendapati nilai tes tertulis teori siswa tinggi, tetapi mitra industri hotel/katering tempat PKL mengeluhkan ketidakkonsistenan ukuran porsi, kebersihan meja kerja, dan kecepatan produksi siswa. Tindakan evaluatif berbasis data paling akurat yang sebaiknya dilakukan guru adalah ....",
    "options": [
      "Memperbanyak soal pilihan ganda hafalan definisi peralatan dapur pada ujian tengah semester berikutnya.",
      "Melakukan audit keselarasan antara modul praktik, lembar asesmen kinerja laboratorium sekolah, standar SOP dan kecepatan kerja nyata DUDIKA, lalu merevisi porsi latihan kendali mutu dan simulasi tekanan waktu.",
      "Memprotes pihak industri karena dianggap menuntut siswa terlalu tinggi.",
      "Menghapus program PKL agar keluhan industri tidak muncul kembali.",
      "Menilai kemampuan siswa hanya dari presentasi salindia di ruang kelas teori."
    ],
    "answer": 1,
    "explanation": "Refleksi praktik profesional guru vokasi (PF.5) menggunakan umpan balik mitra DUDIKA untuk menyelaraskan kurikulum praktik sekolah dengan ritme kecepatan, konsistensi standar porsi, dan budaya K3LH industri nyata."
  },
  {
    "id": "jk26-akt-01",
    "bank": "PCK",
    "topic": "PCK Akuntansi · Asesmen Diagnostik Miskonsepsi Akhir Periode (PF.3)",
    "pckFocus": "Miskonsepsi Siswa",
    "source": "Kurasi Juknis UKPPPG 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.3",
    "prompt": "Dalam asesmen diagnostik kesiapan kelas XI Akuntansi sebelum memasuki penyusunan laporan akhir, guru memetakan pemahaman konseptual siswa mengenai dampak pengabaian prosedur akhir periode. Tentukan apakah pernyataan evaluasi pedagogis guru berikut Tepat atau Kurang Tepat.",
    "categories": [
      "Tepat",
      "Kurang Tepat"
    ],
    "statements": [
      {
        "text": "Jika siswa hanya menghafal contoh jurnal tanpa memahami dampak kesalahan terhadap posisi laba maupun kekayaan usaha, guru perlu memfasilitasi studi kasus penelusuran dampak salah saji laporan.",
        "answer": 0
      },
      {
        "text": "Hasil asesmen diagnostik awal dipakai guru sebagai dasar memetakan kelompok pendampingan konsep, bukan untuk menentukan nilai akhir rapor murid.",
        "answer": 0
      },
      {
        "text": "Jika mayoritas kelas gagal menjawab soal diagnostik awal, materi baru tetap dilanjutkan persis sesuai jadwal tanpa penyesuaian karena target kurikulum lebih penting.",
        "answer": 1
      },
      {
        "text": "Guru cukup memberi latihan menyalin contoh soal penyesuaian lebih banyak tanpa mendiskusikan mengapa laporan keuangan bisa menjadi tidak akurat.",
        "answer": 1
      }
    ],
    "explanation": "Asesmen diagnostik memetakan letak miskonsepsi konseptual agar guru menyesuaikan strategi ajar dan membantu murid menalar dampak nyata akuntansi, bukan sekadar menghafal.",
    "prodiScope": [
      "akuntansi"
    ]
  },
  {
    "id": "jk26-akt-02",
    "bank": "PCK",
    "topic": "PCK Akuntansi · Pembinaan Keterampilan Verifikasi Dokumen Berbasis Kasus (PF.2)",
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi Juknis UKPPPG 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.2",
    "prompt": "Siswa kelas XI Akuntansi berlatih memverifikasi bundel dokumen transaksi usaha dagang sebelum dicatat ke dalam pembukuan. Evaluasilah kesesuaian langkah pembimbingan guru menanamkan nalar akuntabilitas berikut (Sesuai / Tidak Sesuai).",
    "categories": [
      "Sesuai",
      "Tidak Sesuai"
    ],
    "statements": [
      {
        "text": "Guru menyisipkan beberapa dokumen bermasalah (seperti nota tanpa otorisasi sah atau bukti ganda) agar siswa terlatih berpikir kritis memeriksa keabsahan bukti sebelum mencatat.",
        "answer": 0
      },
      {
        "text": "Guru membimbing siswa menghubungkan alur dokumen nyata (pesanan -> serah terima -> tagihan) agar siswa memahami konteks transaksi sebelum memilih akun pencatatan.",
        "answer": 0
      },
      {
        "text": "Guru membiarkan siswa mencatat dokumen yang datanya belum lengkap atau diragukan keabsahannya asalkan total sisi kanan dan kiri pada akhirnya tampak seimbang.",
        "answer": 1
      },
      {
        "text": "Guru hanya membagikan kalimat soal teks satu baris tanpa pernah memperkenalkan wujud fisik maupun digital dokumen transaksi nyata.",
        "answer": 1
      }
    ],
    "explanation": "Pembelajaran verifikasi bukti yang bermakna melatih sikap kritis, tanggung jawab validasi keabsahan dokumen sumber, dan pemahaman alur bisnis di balik angka.",
    "prodiScope": [
      "akuntansi"
    ]
  },
  {
    "id": "jk26-akt-03",
    "bank": "PCK",
    "topic": "PCK Akuntansi · K3LH & Tata Kelola Laboratorium Komputer Akuntansi",
    "prodiScope": [
      "akuntansi"
    ],
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi Juknis UKPPPG Akuntansi 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.3",
    "prompt": "Dalam pengelolaan laboratorium Komputer Akuntansi dan proyek Mini Bank SMK, guru menanamkan standar K3 perkantoran serta etika profesi akuntan. Tentukan apakah kebijakan praktik lab berikut **Sesuai Standar** atau **Melanggar Standar**!",
    "categories": [
      "Sesuai Standar",
      "Melanggar Standar"
    ],
    "statements": [
      {
        "text": "Mengatur pencahayaan layar antiglare, ketinggian kursi ergonomis sejajar meja kerja, manajemen kabel listrik rapi dengan jalur pengaman, serta mencadangkan (*backup*) database transaksi berkala.",
        "answer": 0,
        "reason": "Ergonomi K3 perkantoran dan perlindungan integritas data transaksi wajib diterapkan di lab akuntansi."
      },
      {
        "text": "Membiasakan siswa meminta izin memperbesar nilai laba laporan Mini Bank menjelang evaluasi agar laporan kinerja unit usaha tampak selalu untung.",
        "answer": 1,
        "reason": "Rekayasa laporan keuangan (*window dressing* curang) melanggar keras kode etik integritas dan objektivitas profesi akuntan."
      },
      {
        "text": "Mengizinkan siswa membagikan rincian daftar gaji karyawan fiktif maupun data identitas nasabah simulasi ke media sosial pribadi.",
        "answer": 1,
        "reason": "Prinsip kerahasiaan (*confidentiality*) mewajibkan pengelola data keuangan menjaga privasi informasi gaji dan nasabah."
      },
      {
        "text": "Mengharuskan audit dokumen fisik (cek tanda tangan otorisasi manajer dan kesesuaian nominal voucher) sebelum memposting pencairan kas kecil.",
        "answer": 0,
        "reason": "Pengendalian internal kas berbasis bukti berotorisasi mencegah kecurangan maupun selisih kas."
      }
    ],
    "explanation": "Kompetensi Akuntansi Keuangan modern menuntut penguasaan pengendalian internal kas, ergonomi K3 perkantoran, perlindungan data rahasia, dan etika integritas laporan keuangan."
  },
  {
    "id": "jk26-akt-04",
    "bank": "PCK",
    "topic": "PCK Akuntansi · Asesmen Unjuk Kerja Siklus Spreadsheet & Laporan",
    "prodiScope": [
      "akuntansi"
    ],
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi Juknis UKPPPG Akuntansi 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "Guru merancang penilaian proyek praktikum pembuatan siklus akuntansi berbantuan aplikasi pengolah angka (Excel/Spreadsheet) pada kelas XI. Tentukan apakah komponen rubrik berikut **Valid Mengukur Kompetensi** atau **Tidak Valid**!",
    "categories": [
      "Valid",
      "Tidak Valid"
    ],
    "statements": [
      {
        "text": "Menguji pemakaian rumus referensi otomatis seperti `SUMIF` dan `VLOOKUP/XLOOKUP` untuk merangkum neraca saldo dari jurnal umum serta tautan rumus dinamis ke laporan laba rugi dan neraca.",
        "answer": 0,
        "reason": "Keunggulan spreadsheet akuntansi terletak pada otomatisasi dan integritas tautan antarsheet."
      },
      {
        "text": "Memberikan nilai maksimal 100 apabila seluruh kolom angka akhir pada neraca terlihat sama karena siswa mengetikkan angkanya secara manual tanpa memakai formula penjumlahan.",
        "answer": 1,
        "reason": "Angka hasil ketik manual (*hardcoded*) rentan kesalahan berantai dan tidak mencerminkan kompetensi otomasi spreadsheet akuntansi."
      },
      {
        "text": "Menilai kelengkapan jejak audit kesesuaian nomor akun (kode akun konsisten), posisi normal akun kontra, serta narasi interpretasi rasio keuangan.",
        "answer": 0,
        "reason": "Penilaian autentik mengukur ketepatan logika akuntansi dan kemampuan analisis angka laporan, bukan sekadar input data."
      },
      {
        "text": "Menjadikan penggunaan lima jenis animasi warna tabel dan ukuran huruf dekoratif sebagai bobot penentu 70% nilai akhir akuntansi.",
        "answer": 1,
        "reason": "Kriteria estetika berlebihan mengaburkan validitas pengukuran kompetensi profesional akuntansi."
      }
    ],
    "explanation": "Rubrik autentik Spreadsheet Akuntansi harus memberi bobot dominan pada kebenaran logika akuntansi, keterkaitan formula antarlembar kerja, dan akurasi analisis rasio keuangan."
  },
  {
    "id": "jk26-akt-05",
    "bank": "PCK",
    "topic": "PCK Akuntansi · Perencanaan TPACK Praktikum MYOB/Accurate & Diferensiasi",
    "prodiScope": [
      "akuntansi"
    ],
    "pckFocus": "Media/ICT & Simulator",
    "source": "Kurasi Juknis UKPPPG Akuntansi 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.4",
    "prompt": "Dalam pembelajaran Komputer Akuntansi, guru melihat sebagian siswa sangat cekatan mengklik menu entri transaksi pada aplikasi MYOB/Accurate namun gagal menjelaskan mengapa Neraca tetap tidak seimbang atau laba berubah drastis saat salah memilih *linked account*. Pilihlah SEMUA strategi pedagogis berbasis TIK yang PALING TEPAT memadukan penguasaan software dan pemahaman konsep akuntansi!",
    "options": [
      "Menugaskan siswa mengaktifkan fitur rekap jurnal transaksi (`Transaction Journal` / *audit trail*) setelah mengentri faktur untuk melacak akun Debit-Kredit otomatis yang dibentuk aplikasi.",
      "Menyediakan panduan visual bagan pemetaan *linked account* dan kartu bantu alur jurnal dasar bagi siswa yang masih perlu penguatan konsep debet-kredit sebelum praktik penuh.",
      "Mengadakan studi kasus *troubleshooting* di mana siswa diminta menemukan dan mengoreksi kesalahan setup akun pajak/retur pada file database simulasi yang sengaja diberi error.",
      "Menggantikan seluruh jam praktik laboratorium dengan menyalin definisi fungsi ikon toolbar secara manual ke buku tulis.",
      "Mengunci menu pengecekan *Transaction Journal* sehingga siswa hanya menekan tombol Record tanpa melihat dampaknya ke buku besar."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Menghubungkan fitur aplikasi (*Transaction Journal / linked account*) dengan analisis logika akuntansi dan debugging kasus error membuat siswa tidak menjadi sekadar operator klik buta."
  },
  {
    "id": "jk26-akt-06",
    "bank": "PCK",
    "topic": "PCK Akuntansi · Strategi Pembelajaran Kasus Pengendalian Kas (PF.1)",
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi Juknis UKPPPG 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.1",
    "prompt": "Pada unit Pengendalian Kas di kelas XI Akuntansi, guru ingin memastikan murid memahami prinsip transparansi, pemisahan tugas pengelola uang dengan pencatat, serta tujuan rekonsiliasi saldo. Aktivitas pembelajaran dan asesmen mana sajakah yang PALING bermakna mengembangkan kompetensi tersebut? (Pilih semua yang benar)",
    "options": [
      "Menghadirkan studi kasus simulasi selisih catatan kas akibat lemahnya pemisahan tugas, lalu meminta kelompok menganalisis risiko dan menyusun prosedur pencegahannya.",
      "Menjalankan proyek simulasi bergiliran peran bendahara, kasir, dan pemeriksa bukti di koperasi kelas disertai refleksi nilai kejujuran dan akuntabilitas.",
      "Meminta murid menjelaskan tujuan pemeriksaan silang catatan eksternal dibanding mengandalkan catatan internal semata dalam memastikan keandalan kas.",
      "Membagikan lima puluh soal deretan angka saldo bank untuk dihitung manual tanpa diskusi risiko pengendalian.",
      "Mengharuskan murid menghafal definisi seluruh jenis cek perbankan dalam kuis lisan satu arah."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pembelajaran mendalam dan autentik menghubungkan prosedur pengendalian kas dengan makna tata kelola jujur, simulasi peran nyata, serta pencegahan risiko kecurangan.",
    "prodiScope": [
      "akuntansi"
    ]
  },
  {
    "id": "jk26-akt-07",
    "bank": "PCK",
    "topic": "PCK Akuntansi · Pelaksanaan Pembelajaran Aktif Laporan Keuangan",
    "prodiScope": [
      "akuntansi"
    ],
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi Juknis UKPPPG Akuntansi 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "Dalam mengajar topik Hubungan Laba Bersih dan Arus Kas di kelas XII Akuntansi, guru mendapati siswa bingung mengapa perusahaan dengan laba bersih naik 20% tetap dapat mengalami krisis kas dari aktivitas operasi. Aktivitas pembelajaran bermakna dan kontekstual mana saja yang PALING TEPAT dirancang guru untuk membangun pemahaman siswa?",
    "options": [
      "Menghadirkan studi kasus perbandingan dua laporan keuangan usaha nyata yang mengalami lonjakan penjualan kredit piutang tak tertagih dibanding usaha berbasis kas lancar.",
      "Menggunakan permainan kartu transaksi (*cash flow card sorting*) untuk memilah transaksi non-kas (penyusutan, penjualan kredit) dari transaksi arus kas operasi, investasi, dan pendanaan.",
      "Membimbing siswa membuat proyeksi mini laporan arus kas berbasis studi kasus usaha kantin/koperasi sekolah lalu mempresentasikan analisis risikonya.",
      "Menugaskan siswa menyalin ulang definisi seluruh pos aktiva lancar dari buku pegangan sebanyak tiga kali.",
      "Menyuruh siswa menghafalkan persentase rasio tanpa pernah membaca catatan transaksi penjualan kredit dan persediaan."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Membandingkan laporan riil usaha bermasalah piutang, mengklasifikasi transaksi non-kas via kartu, dan memproyeksi arus kas unit usaha nyata melatih nalar analitis hubungan antara akrual laba rugi dan likuiditas kas."
  },
  {
    "id": "jk26-akt-08",
    "bank": "PCK",
    "topic": "PCK Akuntansi · Kontekstualisasi Perpajakan & Koreksi Fiskal",
    "prodiScope": [
      "akuntansi"
    ],
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi Juknis UKPPPG Akuntansi 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.4",
    "prompt": "Saat membelajarkan materi Administrasi Pajak Badan di kelas XII Akuntansi agar selaras aturan perpajakan terkini, guru menguji klasifikasi koreksi fiskal atas sejumlah pengeluaran perusahaan dalam laporan laba rugi komersial. Pilihlah SEMUA analisis perlakuan fiskal yang TEPAT!",
    "options": [
      "Pengeluaran sumbangan umum acara masyarakat yang tidak masuk kategori sumbangan bencana/penelitian sesuai ketentuan pajak dikenakan koreksi fiskal positif karena bersifat *non-deductible expense*.",
      "Pemberian imbalan natura atau tunjangan tertentu yang melebihi batas/syarat ketentuan UU HPP harus dievaluasi secara teliti apakah boleh dibebankan atau perlu dikoreksi fiskal sesuai regulasi terbaru.",
      "Penghasilan bunga deposito bank yang telah dipotong PPh Final Pasal 4 ayat (2) dikenakan koreksi fiskal negatif saat menghitung Penghasilan Kena Pajak akhir tahun agar tidak terhitung pajak berganda.",
      "Seluruh biaya sanksi denda keterlambatan pembayaran pajak dapat dikurangkan sepenuhnya sebagai pengurang laba fiskal perusahaan.",
      "PPN Masukan yang dapat dikreditkan pada pembelian barang kena pajak langsung diklasifikasikan sebagai beban operasional di laporan laba rugi komersial."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Sanksi/denda pajak termasuk non-deductible expense (koreksi positif, tidak dapat mengurangi laba fiskal), dan PPN Masukan yang dapat dikreditkan merupakan aset lancar/kredit pajak hingga diperhitungkan dengan PPN Keluaran."
  },
  {
    "id": "jk26-vok-01",
    "bank": "PCK",
    "topic": "PCK Vokasi · Troubleshooting Jaringan TKJ & Simulasi VLAN",
    "prodiScope": [
      "smk-vokasi"
    ],
    "pckFocus": "Media/ICT & Simulator",
    "source": "Kurasi Juknis UKPPPG TKJ 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.3",
    "prompt": "[TKJ / TJKT] Dalam praktikum administrasi infrastruktur jaringan, guru mengamati cara siswa mendiagnosis kegagalan koneksi antar-segmen VLAN. Tentukan apakah langkah diagnostik siswa berikut **Tepat** atau **Kurang Tepat**!",
    "categories": [
      "Tepat",
      "Kurang Tepat"
    ],
    "statements": [
      {
        "text": "Sebelum langsung membongkar switch fisik, siswa memodelkan topologi dan verifikasi *trunking* VLAN terlebih dahulu memakai simulator seperti Cisco Packet Tracer.",
        "answer": 0,
        "reason": "Simulasi memvisualisasikan broadcast domain dan memvalidasi logika CLI secara aman sebelum konfigurasi hardware nyata."
      },
      {
        "text": "Ketika dua PC berbeda subnet tidak terhubung walau indikator kabel LAN hijau menyala, siswa segera memeriksa IP address, subnet mask, default gateway, dan tabel routing inter-VLAN.",
        "answer": 0,
        "reason": "Troubleshooting terstruktur mengisolasi masalah lapisan IP/routing terlebih dahulu saat konektivitas fisik telah aktif."
      },
      {
        "text": "Setiap kali gagal perintah `ping`, siswa langsung memvonis kartu jaringan rusak lalu mengganti kabel UTP baru berkali-kali tanpa mengecek aturan firewall host tujuan.",
        "answer": 1,
        "reason": "Paket ICMP sering diblokir firewall lokal meskipun konektivitas lapisan fisik dan IP sebenarnya normal."
      },
      {
        "text": "Siswa menonaktifkan enkripsi WPA2/WPA3 menjadi jaringan WiFi terbuka tanpa autentikasi di area kantor guru supaya ponsel mudah tersambung.",
        "answer": 1,
        "reason": "Praktik keamanan jaringan wajib melindungi akses internal dari penyusupan dan penyadapan paket."
      }
    ],
    "explanation": "Guru TKJ membimbing penalaran troubleshooting sistematis berlapis (fisik -> konfigurasi IP/VLAN -> routing/firewall) berbantuan simulator jaringan dan standar keamanan siber dasar."
  },
  {
    "id": "jk26-vok-02",
    "bank": "PCK",
    "topic": "PCK Vokasi · K3LH & Diagnostik Sistem Kendaraan Ringan / Listrik SMK",
    "prodiScope": [
      "smk-vokasi"
    ],
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi Juknis UKPPPG TKR/TITL 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.3",
    "prompt": "[TKR Otomotif / TITL Listrik] Saat melakukan pendampingan praktik sistem kelistrikan dan motor bakar di bengkel SMK, tentukan apakah keputusan keselamatan dan pedagogis guru berikut **Sesuai K3LH & Vokasi** atau **Tidak Sesuai**!",
    "categories": [
      "Sesuai K3LH",
      "Tidak Sesuai"
    ],
    "statements": [
      {
        "text": "Pada praktik kontrol motor 3 fasa TITL, guru mewajibkan prosedur Lockout/Tagout (LOTO) dan pemeriksaan rangkaian dengan multimeter sebelum sakelar MCB utama dihubungkan.",
        "answer": 0,
        "reason": "LOTO dan pengujian kontinuitas sebelum pengaliran daya mencegah sengatan listrik serta hubung singkat berbahaya."
      },
      {
        "text": "Siswa TKR mengukur nilai tahanan sensor sistem injeksi atau baterai menggunakan multimeter sesuai rentang batas pada buku manual servis sebelum memutuskan penggantian komponen.",
        "answer": 0,
        "reason": "Diagnosis berbasis data pengukuran alat ukur dan service manual mencegah pembongkaran coba-coba yang mahal."
      },
      {
        "text": "Untuk menghemat sekring saat praktik panel kelistrikan bodi mobil, siswa diizinkan mengganti sekring putus dengan kawat tembaga tebal langsung ke terminal baterai.",
        "answer": 1,
        "reason": "Mengganti pengaman arus sekring dengan kawat langsung menghilangkan proteksi hubung singkat dan dapat memicu kebakaran kabel."
      },
      {
        "text": "Saat seorang siswa gagal mengidentifikasi kode kerusakan pada diagnostic scanner, guru memberi umpan balik diagnostik terarah alih-alih langsung menyalahkan di depan bengkel.",
        "answer": 0,
        "reason": "Iklim psikologis aman di bengkel mendorong ketelitian analisis siswa tanpa rasa takut menyembunyikan kesalahan."
      }
    ],
    "explanation": "Praktik kejuruan otomotif dan ketenagalistrikan menuntut integrasi ketegasan K3LH (LOTO, sekring standar, APD) dan pembiasaan diagnostik berbasis alat ukur serta manual servis."
  },
  {
    "id": "jk26-vok-03",
    "bank": "PCK",
    "topic": "PCK Vokasi · Rekayasa Perangkat Lunak (RPL/PPLG) Siklus SDLC & PjBL",
    "prodiScope": [
      "smk-vokasi"
    ],
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi Juknis UKPPPG Informatika/RPL 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.1",
    "prompt": "[RPL / PPLG] Siswa kelas XI PPLG melaksanakan proyek pembuatan sistem kasir/inventori bagi UMKM lokal. Tentukan apakah tahapan pembelajaran PjBL rekayasa perangkat lunak berikut **Benar** atau **Salah**!",
    "categories": [
      "Benar",
      "Salah"
    ],
    "statements": [
      {
        "text": "Guru mewajibkan siswa menggali kebutuhan nyata pengguna (*elicitation*), menggambar Use Case Diagram dan ERD, lalu memvalidasi rancangan kepada pengelola UMKM sebelum menulis kode aplikasi.",
        "answer": 0,
        "reason": "Validasi model kebutuhan dan basis data sebelum coding mencegah aplikasi salah sasaran dan perombakan besar di akhir proyek."
      },
      {
        "text": "Melatih siswa memecah modul login, keranjang, dan laporan stok menggunakan teknik dekomposisi serta uji coba skenario error (*input negative values / edge cases*).",
        "answer": 0,
        "reason": "Dekomposisi masalah dan pengujian batas kasus melatih berpikir komputasional dan ketangguhan kode."
      },
      {
        "text": "Melarang siswa memakai struktur kontrol percabangan maupun validasi form supaya program dapat berjalan lebih cepat tanpa pesan kesalahan.",
        "answer": 1,
        "reason": "Tanpa validasi input dan penanganan error, aplikasi bisnis rentan mengalami kerusakan integritas data."
      },
      {
        "text": "Membatasi penilaian proyek RPL hanya pada keindahan kombinasi warna halaman utama tanpa menguji keakuratan perhitungan stok dan transaksi database.",
        "answer": 1,
        "reason": "Kebenaran logika fungsional dan keandalan transaksi merupakan kompetensi inti pengembangan perangkat lunak."
      }
    ],
    "explanation": "Pembelajaran PPLG/RPL modern menekankan alur analisis kebutuhan pengguna nyata, pemodelan sistem, berpikir komputasional, serta pengujian fungsional sebelum penjaminan UI."
  },
  {
    "id": "jk26-vok-04",
    "bank": "PCK",
    "topic": "PCK Vokasi · Evaluasi Strategi Pemasaran Digital & Etika Promosi",
    "prodiScope": [
      "smk-vokasi"
    ],
    "pckFocus": "Asesmen Otentik",
    "source": "Kurasi Juknis UKPPPG Pemasaran 2026",
    "type": "PGK_KATEGORI",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.6",
    "prompt": "[Bisnis Digital / Pemasaran] Dalam unit produksi pemasaran daring SMK, kelompok siswa mengevaluasi performa toko online dan konten *live commerce*. Tentukan apakah keputusan pembelajaran dan asesmen pemasaran berikut **Tepat** atau **Kurang Tepat**!",
    "categories": [
      "Tepat",
      "Kurang Tepat"
    ],
    "statements": [
      {
        "text": "Membimbing siswa membedah data analitik corong konversi (jumlah kunjungan tinggi tetapi konversi pembelian rendah) sebelum mengubah deskripsi produk, foto, atau ulasan kepercayaan.",
        "answer": 0,
        "reason": "Pengambilan keputusan berbasis data analitik lebih akurat mengidentifikasi hambatan di halaman produk dibanding sekadar menambah anggaran iklan."
      },
      {
        "text": "Mengukur unjuk kerja kampanye *live streaming* dengan rubrik ketepatan kerangka persuasi AIDA, kejujuran spesifikasi produk, dan respons cepat terhadap komentar audiens.",
        "answer": 0,
        "reason": "Rubrik pemasaran digital menilai kualitas komunikasi persuasif yang etis serta interaksi real-time."
      },
      {
        "text": "Memperbolehkan siswa memakai klaim khasiat medis palsu pada brosur promosi minuman herbal agar angka klik dan penjualan meningkat cepat selama ujian praktik.",
        "answer": 1,
        "reason": "Klaim palsu melanggar etika profesi pemasaran, merusak kepercayaan jangka panjang konsumen, serta melanggar regulasi perlindungan konsumen."
      },
      {
        "text": "Menyimpulkan suatu kampanye berhasil hanya karena omzet naik 20% walaupun biaya iklan melonjak 80% tanpa menghitung laba bersih atau ROAS.",
        "answer": 1,
        "reason": "Kenaikan pendapatan kotor tanpa memperhitungkan efisiensi biaya iklan (*Return on Ad Spend / margin bersih*) dapat menimbulkan kerugian usaha."
      }
    ],
    "explanation": "Pembelajaran Pemasaran SMK menekankan literasi analitik bisnis (konversi, ROAS/margin), strategi komunikasi AIDA, dan integritas etika periklanan."
  },
  {
    "id": "jk26-vok-05",
    "bank": "PCK",
    "topic": "PCK Vokasi · Teaching Factory, Diferensiasi & Asesmen Lintas Kejuruan",
    "prodiScope": [
      "smk-vokasi"
    ],
    "pckFocus": "Metode Pengajaran",
    "source": "Kurasi Juknis UKPPPG Vokasi SMK 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Pedagogik",
    "subkompetensi": "P.2",
    "prompt": "Pada mata pelajaran Kejuruan Fase F di SMK yang memiliki siswa dengan latar belakang kesiapan awal beragam (sebagian sudah magang di bengkel/toko keluarga, sebagian masih canggung membaca SOP), pilihlah SEMUA pendekatan pembelajaran berdiferensiasi dan *Teaching Factory* yang PALING TEPAT!",
    "options": [
      "Mengelompokkan tugas berbasis proyek berjenjang: siswa pemula didampingi kartu panduan SOP bergambar (*visual scaffolding*), sementara siswa mahir mendapat peran kontrol mutu (*quality control*) atau mentor sebaya.",
      "Menyelaraskan lembar kerja praktik (*job sheet*) sekolah dengan standar tenggat, alat ukur, dan kriteria kelulusan mutu mitra dunia kerja (DUDIKA).",
      "Memberikan asesmen formatif lisan maupun unjuk kerja langsung pada setiap stasiun praktik untuk memberi umpan balik korektif seketika sebelum produk dikirim ke konsumen.",
      "Menugaskan siswa pemula hanya duduk membersihkan lantai ruang teori selama sisa tahun ajaran agar tidak mengganggu kelompok cepat.",
      "Menurunkan standar keselamatan kerja bagi kelompok pemula agar proyek selesai bersamaan."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Diferensiasi di bengkel/studio SMK tidak pernah mengorbankan K3LH maupun standar DUDIKA, melainkan membedakan tingkat dukungan (*scaffolding*) dan peran kolaboratif siswa secara bermakna."
  },
  {
    "id": "jk26-vok-06",
    "bank": "PCK",
    "topic": "PCK Vokasi · Diagnostik Kendaraan Bermotor & Manual Servis TKR",
    "prodiScope": [
      "smk-vokasi"
    ],
    "pckFocus": "Miskonsepsi Siswa",
    "source": "Kurasi Juknis UKPPPG TKR Otomotif 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.2",
    "prompt": "[TKR Otomotif] Saat praktik mendiagnosis kendaraan siswa di bengkel sekolah dengan keluhan mesin tersendat (*brebet*), sulit hidup saat pagi hari, serta tarikan terasa berat di tanjakan, guru melatih penalaran analitis (*troubleshooting*) agar siswa tidak menebak-nebak asal mengganti suku cadang. Pilihlah SEMUA langkah diagnosis teknis berbasis bukti yang TEPAT diajarkan guru!",
    "options": [
      "Memeriksa tegangan baterai aki (standar minimal tanpa beban ~12,6 V serta penurunan saat *cranking*) sebelum memastikan kondisi motor starter.",
      "Membaca *Diagnostic Trouble Code* (DTC) memakai scanner OBD sekaligus mengecek aliran bahan bakar, kebersihan filter udara, serta kondisi percikan api busi berdasar diagram servis.",
      "Mengukur ketebalan kanvas kopling atau celah penyetelan kopling saat muncul gejala putaran mesin tinggi namun laju kendaraan tidak bertambah (*selip kopling*) di tanjakan.",
      "Langsung mengganti blok silinder mesin seluruhnya setiap kali aki mobil melemah akibat lupa mematikan lampu kabin.",
      "Mengabaikan gejala bunyi mendengung dari roda depan karena tidak berkaitan dengan putaran mesin."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Diagnosis otomotif profesional mengaitkan gejala aktual dengan sistem terkait melalui inspeksi multimeter/scanner, pemeriksaan filter-pengapian, dan pengukuran keausan komponen kopling sesuai manual servis."
  },
  {
    "id": "jk26-vok-07",
    "bank": "PCK",
    "topic": "PCK Vokasi · Strategi STP & Penanganan Keluhan Pemasaran",
    "prodiScope": [
      "smk-vokasi"
    ],
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi Juknis UKPPPG Pemasaran 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.2",
    "prompt": "[Bisnis Daring / Pemasaran] Dalam studi kasus pemasaran produk minuman sehat untuk konsumen usia 18-30 tahun aktif berolahraga yang juga dijual di marketplace, guru menguji analisis siswa terkait konsep STP (*Segmenting, Targeting, Positioning*) serta layanan purnajual. Pilihlah SEMUA analisis pemasaran yang BENAR!",
    "options": [
      "Menentukan kelompok sasaran spesifik usia 18-30 tahun yang rutin berolahraga merupakan langkah *Targeting* setelah memetakan segmen demografis dan psikografis.",
      "Membangun citra utama sebagai \"minuman pemulih energi alami bebas gula tambahan\" di benak audiens merupakan strategi *Positioning*.",
      "Saat pelanggan menerima barang salah lalu menyampaikan keluhan bernada marah, respons profesional dimulai dengan menyimak aktif empatik, memverifikasi nomor pesanan, memohon maaf, dan mengirim solusi penggantian cepat.",
      "Mengharuskan semua merek memakai gaya visual berbeda drastis di setiap kanal media sosial supaya konsumen tidak mengenali konsistensi merek.",
      "Mematok harga produk semata-mata lebih murah dari kompetitor tanpa mengukur proposisi nilai (*value proposition*) pada Business Model Canvas."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Pemasaran profesional memadukan ketepatan *Segmenting-Targeting-Positioning*, konsistensi identitas visual lintas kanal, proposisi nilai BMC, dan keterampilan komunikasi pemulihan layanan pelanggan (*service recovery*)."
  },
  {
    "id": "jk26-vok-08",
    "bank": "PCK",
    "topic": "PCK Vokasi · Keamanan Data, Routing & Infrastruktur Jaringan TKJ",
    "prodiScope": [
      "smk-vokasi"
    ],
    "pckFocus": "Tujuan Pembelajaran",
    "source": "Kurasi Juknis UKPPPG TKJ 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Profesional",
    "subkompetensi": "PF.2",
    "prompt": "[TKJ / TJKT] Guru membimbing proyek perancangan jaringan kantor sekolah yang memisahkan segmen lalu lintas guru, lab komputer siswa, dan tamu WiFi pada satu router utama dan beberapa managed switch. Pilihlah SEMUA rancangan arsitektur jaringan yang PALING TEPAT dan aman!",
    "options": [
      "Membagi segmen logis memakai VLAN terpisah (misal VLAN Guru, VLAN Lab Siswa, VLAN Tamu) dan menerapkan Access Control List / aturan firewall antarsegmen agar perangkat tamu tidak bisa mengakses server nilai siswa.",
      "Menghitung alokasi blok subnet IP secara efisien sesuai jumlah host per ruang agar pemakaian alamat IP tidak boros sekaligus mengurangi lalu lintas broadcast berlebihan.",
      "Mengonfigurasi port antara switch dan router pendukung *inter-VLAN routing* dengan mode `trunk` (802.1Q) yang hanya meluluskan ID VLAN terdaftar.",
      "Menyatukan seluruh komputer server keuangan sekolah, komputer siswa, dan WiFi tamu terbuka pada satu subnet `/24` tanpa firewall agar mudah di-ping dari mana saja.",
      "Mematikan seluruh manajemen kabel terstruktur dan pelabelan port patch panel karena tidak berpengaruh terhadap kinerja jaringan."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Desain jaringan modern berbasis segmentasi VLAN, subnetting proporsional, trunking aman 802.1Q, dan firewall antar-zona untuk menjaga performa serta keamanan sistem informasi sekolah."
  },
  {
    "id": "jk26-vok-09",
    "bank": "PCK",
    "topic": "PCK Vokasi · Integrasi DUDIKA & Pengembangan Profesi Guru Kejuruan",
    "prodiScope": [
      "smk-vokasi"
    ],
    "pckFocus": "K3LH & Teaching Factory",
    "source": "Kurasi Juknis UKPPPG Vokasi SMK 2026",
    "type": "PGK_MCMA",
    "kompetensi": "Sosial",
    "subkompetensi": "S.2",
    "prompt": "Agar kurikulum kompetensi kejuruan SMK selalu relevan dengan perkembangan teknologi industri masa kini, guru berinisiatif membangun kemitraan strategis dengan Dunia Usaha, Dunia Industri, dan Dunia Kerja (DUDIKA). Pilihlah SEMUA bentuk kolaborasi yang TEPAT dan berdampak langsung terhadap kualitas pembelajaran siswa!",
    "options": [
      "Melaksanakan penyelarasan kurikulum dan alur tujuan pembelajaran bersama praktisi industri (*kurikulum sinkronisasi DUDIKA*) sesuai kebutuhan peralatan dan kompetensi kerja aktual.",
      "Menghadirkan program guru tamu dari praktisi profesional serta mengikuti program magang guru di industri (*upskilling/reskilling*) untuk memperbarui keterampilan mengajar.",
      "Mengundang mitra industri sebagai penguji eksternal dalam Uji Kompetensi Keahlian (UKK) maupun pembimbingan proyek *Teaching Factory* siswa.",
      "Menyerahkan penyusunan seluruh nilai rapor harian kelas X kepada pengawas pabrik luar meski tidak pernah memantau proses belajar siswa di sekolah.",
      "Mempertahankan materi mesin atau perangkat lunak usang yang sudah 15 tahun ditinggalkan industri agar guru tidak perlu belajar teknologi baru."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Kolaborasi SMK-DUDIKA (inklusif sinkronisasi kurikulum, guru tamu/magang industri, dan uji sertifikasi kompetensi bersama) memastikan lulusan SMK adaptif sesuai tuntutan perkembangan zaman."
  }
];
