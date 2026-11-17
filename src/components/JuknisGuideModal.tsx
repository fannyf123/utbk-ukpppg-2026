import { X } from 'lucide-react';
import { JUKNIS_EXAM_SPECS, JUKNIS_SUBCOMPETENCIES } from '../data/juknisReference';

interface JuknisGuideModalProps {
  open: boolean;
  onClose: () => void;
}

export function JuknisGuideModal({ open, onClose }: JuknisGuideModalProps) {
  if (!open) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="juknis-modal-title"
      onClick={onClose}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 id="juknis-modal-title">Panduan &amp; Kisi-Kisi UTBK UKPPPG 2026</h3>
          <button
            type="button"
            className="btn btn-sm btn-ghost"
            aria-label="Tutup panduan"
            onClick={onClose}
          >
            <X size={16} />
          </button>
        </div>

        <p style={{ marginTop: 0, fontSize: '0.9rem', color: 'var(--ink-secondary)' }}>
          Mengacu pada <strong>Petunjuk Teknis UKPPPG Bagi Calon Guru Tahun 2026</strong> (Hal. 7,
          Hal. 10–11, Hal. 34–35, dan Lampiran 4 Hal. 47).
        </p>

        <h4 style={{ margin: '1rem 0 0.45rem', fontSize: '0.95rem' }}>
          1. Struktur &amp; Bentuk Soal Resmi
        </h4>
        <div className="stem-table-wrap">
          <table className="stem-table">
            <tbody>
              <tr>
                <th>Total Soal</th>
                <td>80 Butir (50 PCK Teknik Mesin + 30 Pedagogi Umum)</td>
              </tr>
              <tr>
                <th>Waktu Pengerjaan</th>
                <td>150 Menit (Rata-rata ±1 menit 52 detik per soal)</td>
              </tr>
              <tr>
                <th>Aplikasi Ujian</th>
                <td>{JUKNIS_EXAM_SPECS.platform}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1rem' }}>
          {JUKNIS_EXAM_SPECS.questionFormats.map((f) => (
            <div
              key={f.type}
              style={{
                padding: '0.55rem 0.75rem',
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.86rem',
              }}
            >
              <strong>{f.label}:</strong> {f.rule}
            </div>
          ))}
        </div>

        <h4 style={{ margin: '1rem 0 0.45rem', fontSize: '0.95rem' }}>
          2. Checklist Tata Tertib TUK LPTK
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1rem' }}>
          {JUKNIS_EXAM_SPECS.checklist.map((item) => (
            <div
              key={item.title}
              style={{
                padding: '0.55rem 0.75rem',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.86rem',
              }}
            >
              <strong>{item.title}:</strong> {item.detail}
            </div>
          ))}
        </div>

        <h4 style={{ margin: '1rem 0 0.45rem', fontSize: '0.95rem' }}>
          3. Pemetaan 17 Subkompetensi Lampiran 4 Juknis
        </h4>
        <div className="stem-table-wrap">
          <table className="stem-table">
            <thead>
              <tr>
                <th>Kode</th>
                <th>Kompetensi</th>
                <th>Fokus Penilaian</th>
              </tr>
            </thead>
            <tbody>
              {JUKNIS_SUBCOMPETENCIES.map((s) => (
                <tr key={s.code}>
                  <td className="mono" style={{ fontWeight: 700 }}>
                    {s.code}
                  </td>
                  <td>{s.kompetensi}</td>
                  <td>{s.shortTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.75rem' }}>
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Tutup Panduan
          </button>
        </div>
      </div>
    </div>
  );
}
