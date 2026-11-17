import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../App';

describe('UI Integration Flow (KALIBRASI Workstation)', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.scrollTo = () => {};
  });

  it('memulai Simulasi Resmi 80 soal, menandai ragu, lalu menampilkan laporan diagnostik', () => {
    render(<App />);

    expect(
      screen.getByText(/Simulasi UTBK UKPPPG Calon Guru 2026/i)
    ).toBeInTheDocument();

    const mixToggle = screen.getByRole('checkbox', {
      name: /Acak campur urutan nomor PCK/i,
    });
    fireEvent.click(mixToggle);
    expect(mixToggle).toBeChecked();

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
      screen.getByText(/LAPORAN DIAGNOSTIK UTBK UKPPPG 2026/i)
    ).toBeInTheDocument();
    expect(screen.getByText('SKOR KETAT BPPP')).toBeInTheDocument();
    expect(screen.getByText('PCK Teknik Mesin SMK')).toBeInTheDocument();
    expect(screen.getByText('Pedagogi Umum (PU)')).toBeInTheDocument();
  });

  it('mendukung Mode Drill PGK Kategori via tab Studio Drill dengan cek langsung', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /Buka Studio Drill/i }));

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

    fireEvent.click(screen.getByRole('button', { name: /Buka Studio Drill/i }));

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

  it('meluncurkan drill terfokus langsung dari sel Matriks Subkompetensi P.1', () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole('button', { name: /Drill Subkompetensi P\.1/i })
    );
    expect(screen.getByText('Soal 1 / 15')).toBeInTheDocument();
    expect(screen.getByText(/· P\.1$/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /Kumpulkan/i }));
    fireEvent.click(
      screen.getByRole('button', { name: /Ya, Kumpulkan & Lihat Skor/i })
    );
    expect(
      screen.getByRole('heading', { name: 'Drill Subkompetensi P.1' })
    ).toBeInTheDocument();
  });
});
