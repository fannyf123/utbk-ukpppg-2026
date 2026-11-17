import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../App';

describe('UI Integration Flow (SIAPPPG 2026 Multi-Prodi Open Access)', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.scrollTo = () => {};
  });

  it('membuka katalog SIAPPPG bebas bayar, masuk ke Detail Paket Teknik Mesin, mengerjakan ujian, dan menampilkan skor skala 100', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', { name: /Simulasi Try Out UTBK UKPPPG 2026/i })
    ).toBeInTheDocument();

    // Klik kartu pertama (Teknik Mesin SMK · Simulasi Resmi Acak)
    fireEvent.click(
      screen.getAllByRole('button', { name: /Lihat detail & mulai/i })[0]
    );

    expect(screen.getByText(/Komposisi soal/i)).toBeInTheDocument();
    expect(screen.getByText(/Tata tertib pengerjaan/i)).toBeInTheDocument();

    const nameInput = screen.getByLabelText(/Nama peserta \(opsional\)/i);
    fireEvent.change(nameInput, { target: { value: 'Fanny' } });

    fireEvent.click(screen.getByRole('button', { name: /Mulai try out/i }));

    expect(screen.getByText(/Soal 1\b/i)).toBeInTheDocument();
    expect(screen.getByText(/0 dari 80 soal terjawab/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /^Ragu-ragu$/i }));
    expect(
      screen.getByRole('button', { name: /Ditandai Ragu-ragu/i })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Selesai/i }));
    expect(screen.getByText(/Konfirmasi Selesai Try Out/i)).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', { name: /Ya, Selesai & Lihat Nilai/i })
    );

    expect(screen.getByText(/Poin per 10 soal/i)).toBeInTheDocument();
    expect(screen.getByText(/Capaian per kompetensi/i)).toBeInTheDocument();
    expect(screen.getByText(/HASIL TRY OUT .* Fanny/i)).toBeInTheDocument();
  });

  it('menyaring katalog paket berdasarkan tab Prodi (PGSD, Tata Boga, IPS, DKV SMK) dan membuka detail DKV 80 soal', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('tab', { name: 'PGSD' }));
    expect(
      screen.getByText(/PGSD · Paket 3 Guru Kelas SD Lengkap/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/Teknik Mesin SMK · Simulasi Resmi Acak/i)
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('tab', { name: 'Tata Boga SMK' }));
    expect(
      screen.getByText(/Tata Boga · Simulasi Resmi Acak 80 Soal/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/PGSD · Paket 3 Guru Kelas SD Lengkap/i)
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('tab', { name: 'IPS Terpadu' }));
    expect(
      screen.getByText(/IPS Terpadu · Simulasi Resmi Acak 80 Soal/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/Tata Boga · Simulasi Resmi Acak 80 Soal/i)
    ).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('tab', { name: 'DKV SMK' }));
    expect(
      screen.getByText(/DKV · Simulasi Resmi Acak 80 Soal/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/IPS Terpadu · Simulasi Resmi Acak 80 Soal/i)
    ).not.toBeInTheDocument();

    fireEvent.click(
      screen.getAllByRole('button', { name: /Lihat detail & mulai/i })[0]
    );
    fireEvent.click(screen.getByRole('button', { name: /Mulai try out/i }));
    expect(screen.getByText(/0 dari 80 soal terjawab/i)).toBeInTheDocument();
  });

  it('menguji Studio Drill Custom untuk PGK Kategori dengan cek jawaban langsung', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /Studio Drill Custom/i }));

    fireEvent.change(screen.getByLabelText('Bentuk Soal'), {
      target: { value: 'PGK_KATEGORI' },
    });
    fireEvent.click(
      screen.getByRole('button', { name: /Mulai Drill Acak Sekarang/i })
    );

    expect(screen.getByText(/PGK Kategori:/i)).toBeInTheDocument();
    const groups = screen.getAllByRole('group', { name: /Pernyataan \d+/i });
    expect(groups.length).toBeGreaterThanOrEqual(3);

    const checkBtn = screen.getByRole('button', { name: /Periksa Jawaban/i });
    expect(checkBtn).toBeDisabled();

    for (const grp of groups) {
      const firstBtn = grp.querySelector('button');
      if (firstBtn) fireEvent.click(firstBtn);
    }

    expect(checkBtn).not.toBeDisabled();
    fireEvent.click(checkBtn);
    expect(screen.getByText(/Kunci Jawaban Tepat:/i)).toBeInTheDocument();
  });

  it('berpindah tab pada Kisi-Kisi resmi UKPPPG dan meluncurkan latihan langsung dari baris subkompetensi P.1', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('tab', { name: '2. Kepribadian' }));
    expect(screen.getByText(/2\. Kompetensi Kepribadian/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('tab', { name: '1. Pedagogik' }));
    fireEvent.click(screen.getAllByRole('button', { name: /Latih \(/i })[0]);
    fireEvent.click(
      screen.getByRole('button', { name: /Mulai Drill Acak Sekarang/i })
    );

    expect(screen.getByText(/Soal 1\b/i)).toBeInTheDocument();
  });
});
