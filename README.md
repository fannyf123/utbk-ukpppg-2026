# Tryout UTBK UKPPPG 2026 · Teknik Mesin SMK

Aplikasi web simulasi & latihan UTBK UKPPPG Calon Guru Bidang Studi **Teknik Mesin SMK** yang dirancang sesuai **Petunjuk Teknis UKPPPG Bagi Calon Guru Tahun 2026** (Hal. 7 & Lampiran 4 Hal. 47).

## Fitur Utama
- **Simulasi Resmi 80 Soal · 150 Menit**: 50 soal PCK Teknik Mesin SMK + 30 soal Pedagogi Umum dengan penghitung mundur persisten, penanda Ragu-Ragu, Peta Nomor Soal 1–80, penyesuaian ukuran huruf (`A- / A / A+`), serta mode Terang & Gelap.
- **3 Bentuk Soal Resmi BPPP**: Pilihan Ganda Sederhana (`PG`), Pilihan Ganda Kompleks Kategori (`PGK_KATEGORI`), dan Pilihan Ganda Kompleks Multiple Answer (`PGK_MCMA`).
- **Acak Cerdas Tanpa Pengulangan**: Soal yang belum pernah dikerjakan atau masih salah diprioritaskan lebih dahulu pada simulasi baru; posisi opsi dan baris pernyataan juga diacak otomatis.
- **Mode Drill Terfokus**: Latihan berdasarkan Rumpun, Topik spesifik (Gambar/CAD, Pemesinan, CNC, Metrologi, Material & Heat Treatment, Pengelasan, Elemen Mesin, K3LH/TeFa, PMA Vokasi/Umum, SEL, Filosofi Nilai, Growth Mindset, PPDP), atau Bentuk Soal, dengan opsi cek jawaban langsung.
- **Laporan Diagnostik Subkompetensi**: Rincian capaian `P.1–P.6`, `K.1–K.3`, `S.1–S.3`, `PF.1–PF.5`, pembahasan lengkap, serta tombol 1-klik untuk melatih ulang soal yang masih keliru.

## Pengembangan Lokal
```bash
npm install
npm run typecheck
npm test
npm run build
```
