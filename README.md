# KALIBRASI UTBK | Tryout Multi-Prodi UKPPPG 2026

Aplikasi web simulasi dan latihan UTBK UKPPPG Calon Guru Tahun 2026 yang diselaraskan dengan **Petunjuk Teknis UKPPPG Bagi Calon Guru Tahun 2026** (Hal. 7, Hal. 10–11, Hal. 34–35, serta Lampiran 4 Hal. 47) menggunakan arsitektur **Precision Calibration Workstation**.

## Pemetaan Prodi & Isolasi Bank Soal (729 Butir Terkurasi)
Seluruh bank soal diklasifikasi per bidang studi (`prodiScope`) agar soal PCK jurusan lain tidak masuk ke prodi yang sedang dipilih:
- **Teknik Mesin (SMK)**: `102 PCK Teknik Mesin SMK` + `211 Pedagogi Umum` (`50 PCK + 30 PU · 150 Menit`).
- **PGSD (Guru Kelas SD)**: `61 PCK PGSD` + `266 Pedagogi Umum` (`50 PCK + 30 PU · 150 Menit`).
- **Matematika (SMP/SMA/SMK)**: `57 PCK Matematika` + `215 Pedagogi Umum` (`50 PCK + 30 PU · 150 Menit`).
- **Bahasa Indonesia (SMP/SMA/SMK)**: `56 PCK Bahasa Indonesia` + `251 Pedagogi Umum` (`50 PCK + 30 PU · 150 Menit`).
- **IPA & IPAS Terpadu**: `52 PCK IPA` + `220 Pedagogi Umum` (`50 PCK + 30 PU · 150 Menit`).
- **SMK Vokasi Lintas Keahlian** *(DKV, TKJ/RPL, TKR, TITL, Tata Boga, Akuntansi, APHP, Animasi)*: `17 SJT/PCK Vokasi` + `210 Pedagogi Umum`.
- **Pedagogi Umum Murni (Lintas Prodi)**: `196` butir Pedagogi Umum netral bebas konten jurusan tertentu, ditambah opsi jelajah penuh `729` arsip lintas mapel (`IPS`, `B. Inggris`, `PJOK`, `Seni Budaya`) di **02 Studio Drill**.

## Fitur Utama
- **Pemilih Prodi Persisten (`01 Ruang Uji`, `02 Studio Drill`, `03 Juknis & Arsip`)**: Mengalibrasi skala Vernier, peta 17 subkompetensi (`P.1–PF.5`), dan pintasan topik cepat secara otomatis sesuai Prodi.
- **3 Bentuk Soal Resmi BPPP**: `PG`, `PGK_KATEGORI` (tabel pernyataan beserta alasan per baris), dan `PGK_MCMA`.
- **Acak Cerdas Tanpa Pengulangan**: Prioritas soal belum dikerjakan atau masih salah serta pengacakan posisi opsi/pernyataan tanpa mengubah validitas kunci.

## Pengembangan Lokal
```bash
npm install
npm run typecheck
npm test
npm run build
```
