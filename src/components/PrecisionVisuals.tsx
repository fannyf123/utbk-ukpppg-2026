import type { ExamQuestion, MasteryRecord } from '../types/exam';
import { JUKNIS_SUBCOMPETENCIES } from '../data/juknisReference';

export function CalibratorMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="calibrator-mark"
    >
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line x1="8" y1="8" x2="8" y2="24" stroke="currentColor" strokeWidth="2.2" />
      <line x1="8" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="2.2" />
      <line x1="24" y1="9" x2="24" y2="23" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="3" fill="var(--signal-accent)" />
    </svg>
  );
}

interface VernierScaleProps {
  mixOrder: boolean;
  totalBank: number;
  pckBank: number;
  puBank: number;
}

/**
 * Instrumen Skala Kalibrasi Interaktif 0–80 Soal sesuai Juknis 2026:
 * Menampilkan proporsi 50 PCK Teknik Mesin (62.5%) vs 30 PU (37.5%) dalam format mikrometer/caliper.
 */
export function VernierScaleTelemetry({
  mixOrder,
  totalBank,
  pckBank,
  puBank,
}: VernierScaleProps) {
  const ticks = Array.from({ length: 81 }, (_, i) => i);
  const startX = 18;
  const trackW = 684;
  const pckW = (50 / 80) * trackW;
  const puW = (30 / 80) * trackW;
  const splitX = startX + pckW;

  return (
    <div className="vernier-instrument">
      <div className="vernier-head">
        <span className="mono vernier-caption">
          SKALA KOMPOSISI RESMI (N = 80 BUTIR / 150 MENIT)
        </span>
        <span className="mono vernier-caption" style={{ color: 'var(--signal-accent)' }}>
          {mixOrder ? 'MODE: 1-80 CAMPUR ACAK' : 'MODE: 1-50 PCK | 51-80 PU'}
        </span>
      </div>

      <svg
        viewBox="0 0 720 116"
        className="vernier-svg"
        role="img"
        aria-label="Diagram skala komposisi 50 soal PCK Teknik Mesin dan 30 soal Pedagogi Umum"
      >
        {/* Rail background */}
        <rect x={startX} y="36" width={trackW} height="10" fill="var(--bg-inset)" />
        {/* PCK 50 span */}
        <rect
          x={startX}
          y="36"
          width={pckW}
          height="10"
          className="vernier-bar-pck"
          style={{
            opacity: mixOrder ? 0.45 : 1,
          }}
        />
        {/* PU 30 span */}
        <rect
          x={splitX}
          y="36"
          width={puW}
          height="10"
          className="vernier-bar-pu"
          style={{
            opacity: mixOrder ? 0.45 : 1,
          }}
        />

        {/* Mix mode alternating weave indicator */}
        {mixOrder &&
          Array.from({ length: 16 }, (_, idx) => (
            <rect
              key={idx}
              x={startX + idx * (trackW / 16)}
              y="36"
              width={trackW / 32}
              height="10"
              className="vernier-bar-pck"
            />
          ))}

        {/* Precision ruler ticks */}
        {ticks.map((t) => {
          const x = startX + (t / 80) * trackW;
          const isMajor = t % 10 === 0;
          const isMid = t % 5 === 0 && !isMajor;
          const yTop = isMajor ? 18 : isMid ? 24 : 29;
          return (
            <g key={t}>
              <line
                x1={x}
                y1={yTop}
                x2={x}
                y2="36"
                stroke="var(--ink-secondary)"
                strokeWidth={isMajor ? 1.6 : 0.9}
                strokeOpacity={isMajor ? 0.9 : 0.45}
              />
              {isMajor && (
                <text
                  x={x}
                  y="13"
                  textAnchor="middle"
                  className="vernier-tick-label"
                >
                  {String(t).padStart(2, '0')}
                </text>
              )}
            </g>
          );
        })}

        {/* Sliding Signal Jaw Cursor at 50/80 boundary or spread center */}
        <g
          className="vernier-cursor"
          style={{
            transform: mixOrder ? `translateX(${startX + trackW / 2}px)` : `translateX(${splitX}px)`,
          }}
        >
          <line x1="0" y1="14" x2="0" y2="66" stroke="var(--signal-accent)" strokeWidth="2.2" />
          <polygon points="-5,15 5,15 0,22" fill="var(--signal-accent)" />
          <rect
            x="-40"
            y="66"
            width="80"
            height="24"
            rx="2"
            fill="var(--signal-accent)"
          />
          <text
            x="0"
            y="82"
            textAnchor="middle"
            fill="#ffffff"
            className="vernier-cursor-text"
          >
            {mixOrder ? 'ACAK 80' : 'BATAS 50'}
          </text>
        </g>

        {/* Bottom Span Legends */}
        <text x={startX} y="109" className="vernier-span-label">
          PCK MESIN ({pckBank}) · 62.5%
        </text>
        <text x={startX + trackW} y="109" textAnchor="end" className="vernier-span-label">
          PEDAGOGI UMUM ({puBank}) · 37.5%
        </text>
      </svg>

      <div className="vernier-foot mono">
        <span>POOL: {totalBank} SOAL</span>
        <span>112.5 DTK/SOAL</span>
        <span>PG · KATEGORI · MCMA</span>
      </div>
    </div>
  );
}

interface CompetencyMatrixProps {
  allQuestions: readonly ExamQuestion[];
  mastery: Record<string, MasteryRecord>;
  onSelectSubcompetency: (code: string) => void;
}

export function CompetencyMatrixPanel({
  allQuestions,
  mastery,
  onSelectSubcompetency,
}: CompetencyMatrixProps) {
  const counts = new Map<string, { total: number; seen: number; correct: number }>();
  for (const s of JUKNIS_SUBCOMPETENCIES) {
    counts.set(s.code, { total: 0, seen: 0, correct: 0 });
  }
  for (const q of allQuestions) {
    const entry = counts.get(q.subkompetensi);
    if (!entry) continue;
    entry.total++;
    const m = mastery[q.id];
    if (m && m.seenCount > 0) {
      entry.seen++;
      if (m.lastCorrect) entry.correct++;
    }
  }

  return (
    <div className="comp-matrix-grid" role="group" aria-label="Peta 17 subkompetensi Juknis 2026">
      {JUKNIS_SUBCOMPETENCIES.map((sub) => {
        const stat = counts.get(sub.code) ?? { total: 0, seen: 0, correct: 0 };
        const pct = stat.seen > 0 ? Math.round((stat.correct / stat.seen) * 100) : null;
        const tone =
          pct === null
            ? 'is-unseen'
            : pct >= 75
              ? 'is-strong'
              : pct >= 50
                ? 'is-mid'
                : 'is-weak';

        return (
          <button
            key={sub.code}
            type="button"
            className={`comp-cell ${tone}`}
            aria-label={`Drill Subkompetensi ${sub.code} ${sub.shortTitle}`}
            title={`${sub.code} (${sub.kompetensi}): ${sub.shortTitle} - Klik untuk latihan khusus kode ini`}
            disabled={stat.total === 0}
            onClick={() => onSelectSubcompetency(sub.code)}
          >
            <div className="comp-cell-top">
              <span className="mono comp-code">{sub.code}</span>
              <span className="mono comp-pct">{pct !== null ? `${pct}%` : `${stat.total}`}</span>
            </div>
            <div className="comp-cell-name">{sub.shortTitle}</div>
          </button>
        );
      })}
    </div>
  );
}

export function ResultDialChart({
  score,
  label,
  sublabel,
}: {
  score: number;
  label: string;
  sublabel: string;
}) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.max(0, Math.min(100, score)) / 100) * circumference;

  const strokeColor =
    score >= 75
      ? 'var(--status-success)'
      : score >= 55
        ? 'var(--status-warn)'
        : 'var(--signal-accent)';

  return (
    <div className="result-dial-card">
      <svg width="112" height="112" viewBox="0 0 112 112" aria-hidden="true">
        <circle
          cx="56"
          cy="56"
          r={radius}
          fill="none"
          stroke="var(--bg-inset)"
          strokeWidth="9"
        />
        <circle
          cx="56"
          cy="56"
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth="9"
          strokeLinecap="butt"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 56 56)"
          className="dial-arc-fill"
        />
        <text x="56" y="61" textAnchor="middle" className="dial-score-num">
          {score}
        </text>
      </svg>
      <div>
        <div className="mono dial-label">{label}</div>
        <div className="dial-sub">{sublabel}</div>
      </div>
    </div>
  );
}
