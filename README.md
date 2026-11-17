# SIAPPPG 2026 | Try Out UTBK UKPPPG Multi-Prodi (Terbuka & Gratis)

Aplikasi web simulasi dan latihan UTBK UKPPPG Calon Guru Tahun 2026 yang diselaraskan dengan **Petunjuk Teknis UKPPPG Bagi Calon Guru Tahun 2026** (Hal. 7, Hal. 10-11, Hal. 34-35, serta Lampiran 4 Hal. 47). Antarmuka mengadopsi tata letak **SIAPPPG 2026** secara **100% terbuka dan bebas bayar** tanpa gerbang harga, kode akses, atau kunci paket.

## Klasifikasi & Isolasi Ketat Per Program Studi (14 Paket + 729 Soal)
Seluruh bank soal diklasifikasi eksplisit per bidang studi (`prodiScope`) agar soal PCK jurusan lain tidak masuk dan menimbulkan ambiguitas pada Prodi yang sedang dikerjakan:
- **Teknik Mesin (SMK)** *(3 paket · masing-masing 80 soal / 150 menit)*: `102 PCK Teknik Mesin SMK` + `211 Pedagogi Umum` (`Simulasi Resmi Acak`, `Paket Spesial A`, `Paket Spesial B` terpisah tanpa duplikasi).
- **PGSD (Guru Kelas SD)** *(2 paket · 80 soal / 150 menit)*: `61 PCK PGSD` + `266 Pedagogi Umum` (`Paket 3 Guru Kelas SD Lengkap` & `Simulasi Acak Multi-Bank`).
- **Matematika (SMP/SMA/SMK)** *(1 paket · 80 soal / 150 menit)*: `57 PCK Matematika` + `215 Pedagogi Umum` tersinkron tanpa soal Biologi/IPA/Bahasa Inggris.
- **Bahasa Indonesia (SMP/SMA/SMK)** *(1 paket · 80 soal / 150 menit)*: `56 PCK Bahasa Indonesia` + `251 Pedagogi Umum` selaras kebahasaan.
- **IPA & IPAS Terpadu** *(1 paket · 80 soal / 150 menit)*: `52 PCK IPA` + `220 Pedagogi Umum` sains.
- **SMK Vokasi Lintas Keahlian** *(1 paket proporsional · 47 soal / 88 menit)*: `17 SJT/PCK Vokasi` bertanda keahlian spesifik (`DKV`, `TKJ/RPL`, `TKR`, `TITL`, `Tata Boga`, `Akuntansi`, `APHP`) + `210 Pedagogi Umum`.
- **Pedagogi Umum Murni & Referensi SIAPPPG** *(5 paket)*: `196` butir Pedagogi Umum netral (`Latihan Cepat 30 Soal` & `Simulasi Penuh 80 Soal`) serta 3 paket referensi `Lintas Konteks SIAPPPG` (`Paket 1`, `Paket 2`, `Paket 3`). Total arsip penuh `729` soal dapat dijelajahi lewat **Studio Drill Custom**.

## Fitur Utama
- **Katalog Terfilter Per Prodi & Halaman Detail Paket**: Menampilkan pratinjau antarmuka ujian, ringkasan komposisi kompetensi/bentuk soal, input nama peserta opsional, dan opsi pengacakan urutan soal.
- **Runner Ujian Lengkap**: Timer mundur otomatis, simpan progres lokal (`localStorage`), ukuran huruf `A-/A/A+`, mode `Gelap/Terang`, tanda `Ragu-ragu`, dan panel peta navigasi nomor `1-80`.
- **Penilaian Resmi Skala 100 & Pembahasan Tiap Opsi**: Skor PG/MCMA `5 poin`, PGK Kategori `1 poin/pernyataan`, grafik `Poin per 10 soal`, capaian 4 kompetensi (`Pedagogik`, `Kepribadian`, `Sosial`, `Profesional`), 3 prioritas belajar terendah, serta pembahasan per opsi & per baris pernyataan.
- **Kisi-Kisi Interaktif UKPPPG & Studio Drill Custom**: 4 tab kompetensi (`P.1-PF.5`) dengan peluncur latihan per subkompetensi serta drill acak berdasarkan Prodi, subkompetensi, dan bentuk soal.

## Pengembangan Lokal
```bash
npm install
npm run typecheck
npm test
npm run build
```
