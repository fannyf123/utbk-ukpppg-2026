import { useState } from 'react';
import { evaluateQuestion } from '../engine/scoring';
import type { ExamSession } from '../types/exam';

interface NavigatorSidebarProps {
  session: ExamSession;
  onJump: (index: number) => void;
  onCloseMobile?: () => void;
}

type FilterTab = 'all' | 'unanswered' | 'flagged' | 'answered';

export function NavigatorSidebar({
  session,
  onJump,
  onCloseMobile,
}: NavigatorSidebarProps) {
  const [filter, setFilter] = useState<FilterTab>('all');
  const flaggedSet = new Set(session.flaggedIds);

  const statuses = session.slots.map((slot, idx) => {
    const ev = evaluateQuestion(slot.question, session.answers[slot.question.id]);
    const isFlagged = flaggedSet.has(slot.question.id);
    return {
      idx,
      id: slot.question.id,
      bank: slot.question.bank,
      isComplete: ev.isComplete,
      isPartial: ev.answered && !ev.isComplete,
      isFlagged,
    };
  });

  const visible = statuses.filter((s) => {
    if (filter === 'unanswered') return !s.isComplete;
    if (filter === 'flagged') return s.isFlagged;
    if (filter === 'answered') return s.isComplete;
    return true;
  });

  const answeredCount = statuses.filter((s) => s.isComplete).length;
  const remainingCount = statuses.length - answeredCount;
  const flaggedCount = statuses.filter((s) => s.isFlagged).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <strong style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--ink-900)' }}>
          Navigasi soal
        </strong>
        {onCloseMobile && (
          <button
            type="button"
            className="btn btn-sm btn-ghost"
            aria-label="Tutup peta soal"
            onClick={onCloseMobile}
          >
            Tutup
          </button>
        )}
      </div>

      <div className="nav-kpi-row tabular">
        <div className="nav-kpi-box">
          <span className="nav-kpi-val">{answeredCount}</span>
          <span className="nav-kpi-lbl">Terjawab</span>
        </div>
        <div className="nav-kpi-box">
          <span className="nav-kpi-val">{remainingCount}</span>
          <span className="nav-kpi-lbl">Belum</span>
        </div>
        <div className="nav-kpi-box">
          <span className="nav-kpi-val">{flaggedCount}</span>
          <span className="nav-kpi-lbl">Ragu-ragu</span>
        </div>
      </div>

      <div className="nav-filter-row" role="tablist" aria-label="Filter navigasi soal">
        {(
          [
            ['all', 'Semua'],
            ['unanswered', 'Belum'],
            ['flagged', 'Ragu'],
            ['answered', 'Terisi'],
          ] as [FilterTab, string][]
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={filter === key}
            className={`nav-filter-btn ${filter === key ? 'is-active' : ''}`}
            onClick={() => setFilter(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="nav-grid">
        {visible.length === 0 ? (
          <div
            style={{
              gridColumn: '1 / -1',
              fontSize: '0.82rem',
              color: 'var(--ink-500)',
              padding: '0.85rem 0.25rem',
              textAlign: 'center',
            }}
          >
            Tidak ada soal pada filter ini.
          </div>
        ) : (
          visible.map((item) => {
            const cls = [
              'nav-num-btn tabular',
              item.idx === session.currentIndex ? 'is-current' : '',
              item.isFlagged
                ? 'is-flagged'
                : item.isComplete
                  ? 'is-answered'
                  : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <button
                key={item.id}
                type="button"
                className={cls}
                title={`Soal ${item.idx + 1} (${item.bank})`}
                aria-label={`Ke soal nomor ${item.idx + 1}`}
                aria-current={item.idx === session.currentIndex ? 'step' : undefined}
                onClick={() => {
                  onJump(item.idx);
                  onCloseMobile?.();
                }}
              >
                {item.idx + 1}
              </button>
            );
          })
        )}
      </div>

      <div className="nav-legend">
        <div>
          <span className="legend-dot" style={{ backgroundColor: 'var(--ink-800)', borderColor: 'var(--ink-800)' }} />
          Terjawab
        </div>
        <div>
          <span className="legend-dot" style={{ borderStyle: 'dashed', backgroundColor: 'var(--surface)' }} />
          Belum lengkap
        </div>
        <div>
          <span className="legend-dot" style={{ backgroundColor: 'var(--surface)' }} />
          Kosong
        </div>
        <div>
          <span className="legend-dot" style={{ backgroundColor: 'var(--sun-300)', borderColor: 'var(--sun-500)' }} />
          Ragu-ragu
        </div>
      </div>
    </div>
  );
}
