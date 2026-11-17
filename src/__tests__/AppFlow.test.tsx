import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../App';

describe('UI Integration Flow (Tactile Workshop)', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.scrollTo = () => {};
  });

  it('memulai Simulasi Resmi 80 soal, menandai ragu, lalu menampilkan laporan diagnostik', () => {
    render(<App />);

    expect(
      screen.getByText(/Tryout UTBK UKPPPG Calon Guru 2026/i)
    ).toBeInTheDocument();

    // Uji interaksi selotip catatan (peelable tape)
    const peelBtn = screen.getByRole('button', { name: /Kupas selotip catatan/i });
    fireEvent.click(peelBtn);
    expect(peelBtn).toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(
      screen.getByRole('button', { name: /Mulai Simulasi Resmi \(80 Soal\)/i })
    );

    expect(screen.getByText('Soal 1 / 80')).toBeInTheDocument();
    expect(screen.getByText('0/80 Terisi')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Tandai Ragu-Ragu/i }));
    expect(
      screen.getByRole('button', { name: /Ditandai Ragu-Ragu/i })
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Kumpulkan/i }));
    expect(screen.getByText(/Konfirmasi Pengumpulan Jawaban/i)).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', { name: /Ya, Kumpulkan & Lihat Skor/i })
    );

    expect(
      screen.getByText(/Laporan Diagnostik UTBK UKPPPG 2026/i)
    ).toBeInTheDocument();
    expect(screen.getByText('PCK Teknik Mesin SMK')).toBeInTheDocument();
    expect(screen.getByText('Pedagogi Umum (PU)')).toBeInTheDocument();
  });

  it('mendukung Mode Drill PGK Kategori dengan tombol Periksa Jawaban langsung', () => {
    render(<App />);

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

  it('mendukung Mode Drill PGK MCMA dengan penghitung opsi terpilih', () => {
    render(<App />);

    fireEvent.change(screen.getByLabelText('Bentuk Soal'), {
      target: { value: 'PGK_MCMA' },
    });
    fireEvent.click(
      screen.getByRole('button', { name: /Mulai Drill Acak Sekarang/i })
    );

    expect(screen.getByText(/Dipilih: 0/i)).toBeInTheDocument();
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    fireEvent.click(checkboxes[1]);
    expect(screen.getByText(/Dipilih: 2/i)).toBeInTheDocument();
  });
});
