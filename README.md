# KALIBRASI UTBK | Tryout UKPPPG 2026 (Teknik Mesin SMK)

Aplikasi web simulasi dan latihan UTBK UKPPPG Calon Guru Bidang Studi **Teknik Mesin SMK** yang dirancang sesuai **Petunjuk Teknis UKPPPG Bagi Calon Guru Tahun 2026** (Hal. 7, Hal. 10–11, Hal. 34–35, serta Lampiran 4 Hal. 47) dengan bahasa desain **Precision Calibration Workstation** (rel perintah kiri, telemetri skala vernier, dan matriks 17 subkompetensi).

## Fitur Utama
- **01 Ruang Uji (`50 PCK + 30 PU · 150 Menit`)**: Skala komposisi Vernier interaktif (urutan terstruktur 1–50 PCK / 51–80 PU atau campur acak), penghitung mundur persisten, penanda Ragu-Ragu, Peta Soal 1–80, ukuran huruf (`A- / A / A+`), serta tema Terang & Gelap.
- **02 Studio Drill & Matriks 17 Subkompetensi**: Filter kombinasi Rumpun (`PCK`/`PU`), Topik Teknik Mesin & Pedagogi, kode Subkompetensi (`P.1–PF.5`), Bentuk Soal (`PG`, `PGK_KATEGORI`, `PGK_MCMA`), jumlah butir, serta pratinjau ukuran pool bank soal secara langsung.
- **03 Juknis & Arsip**: Riwayat skor ketat BPPP vs parsial dari setiap sesi beserta tata tertib resmi ujian berbasis *ExamBPPP* dan TUK LPTK.
- **Acak Cerdas Tanpa Pengulangan**: Soal yang belum dikerjakan atau masih salah diprioritaskan lebih dahulu pada simulasi baru; opsi jawaban PG/MCMA dan baris pernyataan PGK Kategori diacak otomatis.

## Pengembangan Lokal
```bash
npm install
npm run typecheck
npm test
npm run build
```
