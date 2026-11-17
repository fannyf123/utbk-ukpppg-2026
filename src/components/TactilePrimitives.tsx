import { useState } from 'react';

/** Die-cut scallop outline adapted from huggo-tape-template.tsx */
function scallopPath(r: number, bump: number, n: number): string {
  const pt = (a: number, rr: number) =>
    `${(60 + rr * Math.cos(a)).toFixed(2)} ${(60 + rr * Math.sin(a)).toFixed(2)}`;
  let d = `M${pt(0, r)}`;
  for (let i = 0; i < n; i++) {
    const a0 = (i / n) * Math.PI * 2;
    const a1 = ((i + 1) / n) * Math.PI * 2;
    d += ` Q${pt((a0 + a1) / 2, r + bump * 2)} ${pt(a1, r)}`;
  }
  return `${d}Z`;
}

const STAMP_OUT = scallopPath(51, 4.2, 14);
const STAMP_IN = scallopPath(46, 3.6, 14);

export function WorkshopStamp({ className }: { className?: string }) {
  return (
    <svg
      className={className ? `brand-stamp ${className}` : 'brand-stamp'}
      viewBox="0 0 120 120"
      aria-hidden="true"
    >
      <path d={STAMP_OUT} fill="#fffaf0" stroke="#16281c" strokeWidth="3" />
      <path d={STAMP_IN} fill="#16281c" />
      <circle
        cx="60"
        cy="60"
        r="37"
        fill="none"
        stroke="#c9f227"
        strokeWidth="1.8"
        strokeDasharray="2.5 3.5"
      />
      <text
        x="60"
        y="62"
        textAnchor="middle"
        fill="#ffd51f"
        fontSize="22"
        fontFamily="Bricolage Grotesque, sans-serif"
        fontWeight="800"
      >
        UTBK
      </text>
      <text
        x="60"
        y="79"
        textAnchor="middle"
        fill="#fffaf0"
        fontSize="9"
        letterSpacing="2"
        fontFamily="IBM Plex Mono, monospace"
        fontWeight="700"
      >
        MESIN 26
      </text>
      <ellipse
        cx="42"
        cy="30"
        rx="16"
        ry="5.5"
        fill="#ffffff"
        opacity="0.16"
        transform="rotate(-28 42 30)"
      />
    </svg>
  );
}

interface TapeStripProps {
  kind?: 'masking' | 'clear' | 'print';
  label?: string;
  peelable?: boolean;
  className?: string;
}

export function TapeStrip({
  kind = 'masking',
  label,
  peelable = false,
  className = '',
}: TapeStripProps) {
  const [peeled, setPeeled] = useState(false);

  if (peelable) {
    return (
      <button
        type="button"
        className={`tape-strip tape-${kind} tape-pin is-peelable ${peeled ? 'is-peeled' : ''} ${className}`}
        onClick={() => setPeeled((p) => !p)}
        aria-pressed={peeled}
        aria-label={peeled ? 'Tempelkan kembali selotip catatan' : 'Kupas selotip catatan'}
        title={peeled ? 'Klik untuk tempel kembali' : 'Klik untuk kelupas selotip'}
      >
        {label ?? (peeled ? 'terkelupas' : 'selotip')}
      </button>
    );
  }

  return (
    <span className={`tape-strip tape-${kind} tape-pin ${className}`} aria-hidden="true">
      {label ?? ''}
    </span>
  );
}

const RIBBON_PHRASES = [
  '50 PCK TEKNIK MESIN SMK',
  '30 PEDAGOGI UMUM',
  'PG · PGK KATEGORI · PGK MCMA',
  '150 MENIT SIMULASI CBT',
  'ACAK TANPA PENGULANGAN',
];

export function RibbonMarquee() {
  const line = RIBBON_PHRASES.join('  ✦  ');
  return (
    <div className="tape-marquee" aria-hidden="true">
      <div className="tape-marquee-track">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="tape-marquee-item">
            {line} ✦
          </span>
        ))}
      </div>
    </div>
  );
}
