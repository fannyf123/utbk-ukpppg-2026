# SIAPPPG 2026 | Try Out UTBK UKPPPG Multi-Prodi (Terbuka & Gratis)

Aplikasi web simulasi dan latihan UTBK UKPPPG Calon Guru Tahun 2026 yang diselaraskan dengan **Petunjuk Teknis UKPPPG Bagi Calon Guru Tahun 2026** (Hal. 7, Hal. 10-11, Hal. 34-35, serta Lampiran 4 Hal. 47). Antarmuka mengadopsi tata letak **SIAPPPG 2026** secara **100% terbuka dan bebas bayar** tanpa gerbang harga, kode akses, atau kunci paket.

## Klasifikasi & Isolasi Ketat Per Program Studi (15 Paket + 784 Soal)
Seluruh bank soal diklasifikasi eksplisit per bidang studi (`prodiScope`) agar soal PCK jurusan lain tidak masuk dan menimbulkan ambiguitas pada Prodi yang sedang dikerjakan:
- **Teknik Mesin (SMK)** *(3 paket · masing-masing 80 soal / 150 menit)*: `102 PCK Teknik Mesin SMK` + `211 Pedagogi Umum` (`Simulasi Resmi Acak`, `Paket Spesial A`, `Paket Spesial B` terpisah tanpa duplikasi).
- **DKV · Desain Komunikasi Visual (SMK)** *(1 paket · 80 soal / 150 menit)*: `60 PCK DKV` (`Tata Letak Grid, Tipografi, Warna RGB/CMYK/ICC, Pracetak Vektor-Bitmap, Fotografi/AV, Branding GSM, Dieline Packaging, UI/UX, HKI, K3LH Studio, Asesmen Portofolio & SJT TeFa DKV`) + `201 Pedagogi Umum` terpisah bersih dari Teknik Mesin maupun kejuruan lain.
- **PGSD (Guru Kelas SD)** *(2 paket · 80 soal / 150 menit)*: `61 PCK PGSD` + `266 Pedagogi Umum` (`Paket 3 Guru Kelas SD Lengkap` & `Simulasi Acak Multi-Bank`).
- **Matematika (SMP/SMA/SMK)** *(1 paket · 80 soal / 150 menit)*: `57 PCK Matematika` + `215 Pedagogi Umum` tersinkron tanpa soal Biologi/IPA/Bahasa Inggris.
- **Bahasa Indonesia (SMP/SMA/SMK)** *(1 paket · 80 soal / 150 menit)*: `56 PCK Bahasa Indonesia` + `251 Pedagogi Umum` selaras kebahasaan.
- **IPA & IPAS Terpadu** *(1 paket · 80 soal / 150 menit)*: `52 PCK IPA` + `220 Pedagogi Umum` sains.
- **SMK Vokasi Lainnya** *(1 paket proporsional · 42 soal / 79 menit)*: `12 SJT/PCK non-Mesin & non-DKV` bertanda keahlian spesifik (`TKJ/RPL`, `TKR`, `TITL`, `Tata Boga`, `Akuntansi`, `Animasi`, `APHP`) + `210 Pedagogi Umum`.
- **Pedagogi Umum Murni & Referensi SIAPPPG** *(5 paket)*: `196` butir Pedagogi Umum netral (`Latihan Cepat 30 Soal` & `Simulasi Penuh 80 Soal`) serta 3 paket referensi `Lintas Konteks SIAPPPG` (`Paket 1`, `Paket 2`, `Paket 3`). Total arsip penuh `784` soal dapat dijelajahi lewat **Studio Drill Custom**.

## Fitur Utama
- **Katalog Terfilter Per Prodi & Halaman Detail Paket**: Menampilkan pratinjau antarmuka ujian, ringkasan komposisi kompetensi/bentuk soal, input nama peserta opsional, dan opsi pengacakan urutan soal.
- **Cakupan Terstrata 17/17 Subkompetensi Juknis**: Pengambilan acak paket resmi menjamin keterwakilan seluruh `17` subkompetensi (`P.1-PF.5`) dan ketiga bentuk soal (`PG`, `PGK_MCMA`, `PGK_KATEGORI`).
- **Runner Ujian & Penilaian Skala 100**: Timer mundur otomatis, simpan progres lokal (`localStorage`), font `A-/A/A+`, mode `Gelap/Terang`, tanda `Ragu-ragu`, skor skala `100` (`5 poin` PG/MCMA, `1 poin/baris` PGK Kategori), grafik `Poin per 10 soal`, capaian 4 kompetensi, 3 prioritas belajar terendah, serta pembahasan tiap opsi.

## Pengembangan Lokal
```bash
npm install
npm run typecheck
npm test
npm run build
```
