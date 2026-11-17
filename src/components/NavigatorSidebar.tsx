import { useState } from 'react';
import { X } from 'lucide-react';
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
  const flaggedCount = statuses.filter((s) => s.isFlagged).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <strong style={{ fontSize: '0.94rem', display: 'block' }}>Peta Nomor Soal</strong>
          <span style={{ fontSize: '0.76rem', color: 'var(--ink-muted)' }}>
            {answeredCount}/{session.slots.length} selesai · {flaggedCount} ragu
          </span>
        </div>
        {onCloseMobile && (
          <button
            type="button"
            className="btn btn-sm btn-ghost"
            aria-label="Tutup peta soal"
            onClick={onCloseMobile}
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="nav-filter-row" role="tablist" aria-label="Filter peta soal">
        {(
          [
            ['all', 'Semua'],
            ['unanswered', 'Kosong'],
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
              color: 'var(--ink-muted)',
              padding: '0.85rem 0.25rem',
              textAlign: 'center',
            }}
          >
            Tidak ada soal pada filter ini.
          </div>
        ) : (
          visible.map((item) => {
            const cls = [
              'nav-num-btn',
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
          <span
            className="legend-dot"
            style={{ backgroundColor: 'var(--color-success-soft)', border: '1px solid var(--color-success-border)' }}
          />
          Terisi lengkap
        </div>
        <div>
          <span
            className="legend-dot"
            style={{ backgroundColor: 'var(--color-accent-soft)', border: '1px solid var(--color-accent)' }}
          />
          Ragu-ragu
        </div>
        <div>
          <span
            className="legend-dot"
            style={{ backgroundColor: 'var(--bg-canvas)', border: '1px solid var(--border-subtle)' }}
          />
          Belum selesai
        </div>
        <div>
          <span
            className="legend-dot"
            style={{ backgroundColor: 'transparent', border: '2px solid var(--color-primary)' }}
          />
          Aktif dibuka
        </div>
      </div>
    </div>
  );
}
