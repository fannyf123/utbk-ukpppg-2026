import { useState } from 'react';
import { Clock, Flag } from 'lucide-react';
import { getProdiConfig } from '../data/prodiRegistry';
import type { ProdiId } from '../types/exam';

export function ArenaLogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      <rect width="36" height="36" rx="10" fill="#15305c" />
      <path
        d="M18 8L7 13.5L18 19L29 13.5L18 8Z"
        fill="#f7921e"
      />
      <path
        d="M11 16.8V22.8C11 25 14.1 27 18 27C21.9 27 25 25 25 22.8V16.8L18 20.3L11 16.8Z"
        fill="#ffffff"
      />
      <circle cx="27.5" cy="19.5" r="2" fill="#f7921e" />
    </svg>
  );
}

const PREVIEW_SAMPLES: Record<
  string,
  { header: string; stem: string; opts: string[]; answer: number }
> = {
  'teknik-mesin': {
    header: 'Try Out UKPPPG · Teknik Mesin SMK',
    stem: 'Saat belajar membaca gambar proyeksi di bengkel, mayoritas murid cepat menghafal definisi simbol, tetapi keliru menafsirkan tampak benda nyata ketika posisi berubah. Langkah guru paling tepat adalah ....',
    opts: [
      'Menambah soal latihan pilihan ganda menghafal istilah simbol.',
      'Mendiagnosis letak miskonsepsi lalu membimbing murid memakai model benda konkret atau simulasi visual bertahap.',
      'Membiarkan murid menyalin contoh gambar jadi agar tugas cepat terkumpul.',
      'Menguji ulang definisi hafalan di papan tulis sebelum memberi umpan balik.',
    ],
    answer: 1,
  },
  pgsd: {
    header: 'Try Out UKPPPG · Paket 3 PGSD',
    stem: 'Rani (8 tahun) menyadari bahwa jumlah air tetap sama ketika dituang dari gelas pendek-lebar ke gelas tinggi-sempit. Berdasarkan teori Piaget, Rani berada pada tahap ....',
    opts: [
      'Sensorimotor',
      'Praoperasional',
      'Operasional konkret',
      'Operasional formal',
    ],
    answer: 2,
  },
};

export function HeroExamPreviewWidget({ activeProdi }: { activeProdi: ProdiId }) {
  const prodiCfg = getProdiConfig(activeProdi);
  const sample =
    PREVIEW_SAMPLES[activeProdi] ??
    (activeProdi === 'umum'
      ? { ...PREVIEW_SAMPLES.pgsd, header: 'Try Out UKPPPG · Pedagogi Umum' }
      : {
          header: `Try Out UKPPPG · ${prodiCfg.shortLabel}`,
          stem: 'Guru membagi murid sesuai kesiapan awal berdasarkan asesmen diagnostik, menyediakan bantuan bertahap (scaffolding), lalu menyesuaikan kelompok secara berkala. Prinsip ini merupakan penerapan ....',
          opts: [
            'Teaching at the Right Level (TaRL) & diferensiasi dinamis',
            'Penyeragaman modul sepanjang semester tanpa evaluasi',
            'Penilaian berbasis peringkat kelas semata',
            'Pemberian hukuman negatif pada kelompok lambat',
          ],
          answer: 0,
        });

  const [picked, setPicked] = useState<number>(sample.answer);
  const [flagged, setFlagged] = useState<boolean>(false);

  const LETTERS = ['A', 'B', 'C', 'D'];
  const tiles = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="kartu preview-widget" aria-label="Pratinjau ruang simulasi ujian">
      <div className="preview-top">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
          <ArenaLogoMark size={24} />
          <span style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--ink-900)' }}>
            {sample.header}
          </span>
        </div>
        <span className="preview-timer-pill tabular">
          <Clock size={13} aria-hidden="true" />
          02:14:36
        </span>
      </div>

      <div className="preview-body">
        <div>
          <div className="preview-q-meta">
            <div>
              <strong style={{ fontSize: '0.88rem' }}>Soal 4</strong>{' '}
              <span style={{ fontSize: '0.78rem', color: 'var(--ink-500)' }}>dari 80</span>
            </div>
            <button
              type="button"
              onClick={() => setFlagged((f) => !f)}
              className="preview-flag-tag"
              style={{
                backgroundColor: flagged ? 'var(--sun-50)' : 'transparent',
                borderColor: flagged ? 'var(--sun-500)' : 'var(--ink-200)',
                color: flagged ? 'var(--fox-700)' : 'var(--ink-600)',
              }}
            >
              <Flag size={11} style={{ display: 'inline', marginRight: 4 }} aria-hidden="true" />
              {flagged ? 'Ditandai' : 'Ragu-ragu'}
            </button>
          </div>

          <p className="preview-stem">{sample.stem}</p>

          <div className="preview-opts">
            {sample.opts.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPicked(idx)}
                className={`preview-opt ${picked === idx ? 'is-picked' : ''}`}
                style={{ textAlign: 'left' }}
              >
                <span className="preview-opt-letter">{LETTERS[idx]}</span>
                <span>{opt}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="preview-mini-nav">
          <div style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--ink-800)' }}>
            Navigasi soal
          </div>
          <div className="preview-mini-grid">
            {tiles.map((n) => {
              const isFilled = [1, 2, 3, 4, 6, 7, 9, 10, 11].includes(n);
              const isFlag = [5, 12].includes(n) || (n === 4 && flagged);
              const cls = [
                'preview-num',
                isFlag ? 'is-flagged' : isFilled ? 'is-filled' : '',
                n === 4 ? 'is-current' : '',
              ]
                .filter(Boolean)
                .join(' ');
              return (
                <div key={n} className={cls}>
                  {n}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResultNavyRing({ score }: { score: number }) {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, score));
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: 126, height: 126, flexShrink: 0 }}>
      <svg width="126" height="126" viewBox="0 0 126 126" aria-hidden="true">
        <circle
          cx="63"
          cy="63"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="10"
        />
        <circle
          cx="63"
          cy="63"
          r={radius}
          fill="none"
          stroke={clamped >= 75 ? '#34d399' : '#f7921e'}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 63 63)"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', opacity: 0.75 }}>
          NILAI
        </span>
        <span style={{ fontSize: '2.25rem', fontWeight: 800, lineHeight: 1 }} className="tabular">
          {score}
        </span>
        <span style={{ fontSize: '0.68rem', opacity: 0.72 }}>skala 100</span>
      </div>
    </div>
  );
}
