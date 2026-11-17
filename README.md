# SIAPPPG 2026 | Try Out UTBK UKPPPG Multi-Prodi (Terbuka & Gratis)

Aplikasi web simulasi dan latihan UTBK UKPPPG Calon Guru Tahun 2026 yang diselaraskan dengan **Petunjuk Teknis UKPPPG Bagi Calon Guru Tahun 2026** (Hal. 7, Hal. 10-11, Hal. 34-35, serta Lampiran 4 Hal. 47). Antarmuka mengadopsi tata letak **SIAPPPG 2026** secara **100% terbuka dan bebas bayar** tanpa gerbang harga, kode akses, atau kunci paket.

## Kurasi & Filter Ketat Kisi-Kisi Juknis UKPPPG 2026 (22 Paket · 1.208 Soal)
Selain bank soal terkurasi (SIAPPPG Arena, PPG UST, dan bank PCK Prodi internal), bank soal diperluas dari arsip soal **UKOM / UP PPG / UKPPPG** publik (`fungsional.id`, serta kurasi `Tirto`, `Defantri`, `Studiku`, `Scribd`, `Pikiran-Rakyat`). Seluruh butir disaring ketat mengikuti format **PCK & SJT Juknis UKPPPG 2026**:
- **Diterima:** Soal berbasis skenario kelas/bengkel/studio nyata, asesmen formatif/sumatif, UbD, Pembelajaran Mendalam (Deep Learning / Berkesadaran-Bermakna-Menggembirakan), CASEL/EMC2, TeFa/PjBL/Inkuiri, serta PCK miskonsepsi spesifik Prodi dengan pembahasan lengkap.
- **Dibuang / Ditolak:** Soal hafalan regulasi kepegawaian ASN/CPNS/PPPK/UKKJ, soal Kurikulum 2013 (`KI-KD`/`RPP K13`) dan hapalan pasal UU (`UU 20/2003`, `UU 14/2005`), opsi ambigu seperti *"Semua jawaban benar"*, serta soal hafalan konsep kering tanpa konteks pedagogis.

## Klasifikasi & Isolasi Ketat 15 Program Studi
Seluruh bank soal diklasifikasi eksplisit per bidang studi (`prodiScope`) agar soal PCK jurusan lain tidak bercampur:
- **Teknik Mesin (SMK)** *(3 paket · 80 soal / 150 menit)*: `102 PCK Teknik Mesin SMK` + `255 Pedagogi Umum` (`Simulasi Resmi Acak`, `Paket Spesial A`, `Paket Spesial B`).
- **DKV · Desain Komunikasi Visual (SMK)** *(1 paket · 80 soal / 150 menit)*: `79 PCK DKV` + `245 Pedagogi Umum`.
- **Tata Boga (SMK)** *(1 paket proporsional · 72 soal / 135 menit)*: `42 PCK Tata Boga & Kuliner` + `245 Pedagogi Umum Vokasi`.
- **Akuntansi & Keuangan Lembaga (SMK)** *(1 paket proporsional · 66 soal / 124 menit)*: `36 PCK Akuntansi & Perpajakan` + `245 Pedagogi Umum Vokasi`.
- **SMK Vokasi Lainnya** *(1 paket proporsional · 78 soal / 146 menit)*: `48 PCK Kejuruan (Pemasaran/BDP, TKJ/RPL/Informatika, TKR Otomotif, TITL Listrik, APHP)` + `254 Pedagogi Umum Vokasi`.
- **PGSD (Guru Kelas SD)** *(2 paket · 80 soal / 150 menit)*: `80 PCK PGSD` + `345 Pedagogi Umum SD`.
- **Matematika** *(1 paket · 80 soal / 150 menit)*: `62 PCK Matematika` + `258 Pedagogi Umum`.
- **Bahasa Indonesia** *(1 paket · 80 soal / 150 menit)*: `58 PCK Bahasa Indonesia` + `295 Pedagogi Umum`.
- **Bahasa Inggris** *(1 paket proporsional · 54 soal / 101 menit)*: `24 PCK Bahasa Inggris` + `241 Pedagogi Umum`.
- **IPA & IPAS Terpadu** *(1 paket · 80 soal / 150 menit)*: `72 PCK IPA (Fisika, Biologi, Kimia)` + `264 Pedagogi Umum`.
- **IPS Terpadu** *(1 paket proporsional · 78 soal / 146 menit)*: `48 PCK IPS` + `241 Pedagogi Umum`.
- **PJOK** *(1 paket proporsional · 57 soal / 107 menit)*: `27 PCK PJOK` + `241 Pedagogi Umum`.
- **PPKn / Pendidikan Pancasila** *(1 paket proporsional · 55 soal / 103 menit)*: `25 PCK PPKn` + `241 Pedagogi Umum`.
- **PAI (Pendidikan Agama Islam)** *(1 paket proporsional · 70 soal / 131 menit)*: `40 PCK PAI` + `241 Pedagogi Umum`.
- **Pedagogi Umum Murni & Referensi SIAPPPG** *(5 paket)*: `239` butir Pedagogi Umum netral (`Latihan Cepat 30 Soal` & `Simulasi Penuh 80 Soal`) serta 3 paket referensi `Lintas Konteks SIAPPPG`. Seluruh `1.208` soal juga tersedia di **Studio Drill Custom**.

## Fitur Utama
- **Katalog Terfilter 15 Prodi & Halaman Detail Paket**: Menampilkan pratinjau antarmuka ujian, ringkasan komposisi kompetensi/bentuk soal, input nama peserta opsional, dan opsi pengacakan urutan soal.
- **Cakupan Terstrata 17/17 Subkompetensi Juknis**: Pengambilan acak paket resmi menjamin keterwakilan seluruh `17` subkompetensi (`P.1-PF.5`) dan ketiga bentuk soal (`PG`, `PGK_MCMA`, `PGK_KATEGORI`).
- **Runner Ujian & Penilaian Skala 100**: Timer mundur otomatis, simpan progres lokal (`localStorage`), font `A-/A/A+`, mode `Gelap/Terang`, tanda `Ragu-ragu`, skor skala `100` (`5 poin` PG/MCMA, `1 poin/baris` PGK Kategori), grafik `Poin per 10 soal`, capaian 4 kompetensi, 3 prioritas belajar terendah, serta pembahasan tiap opsi.

## Pengembangan Lokal
```bash
npm install
npm run typecheck
npm test
npm run build
```
