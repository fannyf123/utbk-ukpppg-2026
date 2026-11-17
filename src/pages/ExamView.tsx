import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Send } from 'lucide-react';
import { ArenaLogoMark } from '../components/ArenaVisuals';
import { NavigatorSidebar } from '../components/NavigatorSidebar';
import { QuestionRenderer } from '../components/QuestionRenderer';
import { evaluateQuestion } from '../engine/scoring';
import type { FontScale, ThemeMode } from '../engine/storage';
import type { ExamSession, UserAnswer } from '../types/exam';

interface ExamViewProps {
  session: ExamSession;
  theme: ThemeMode;
  fontScale: FontScale;
  onToggleTheme: () => void;
  onChangeFontScale: (next: FontScale) => void;
  onUpdateSession: (updater: (prev: ExamSession) => ExamSession) => void;
  onSubmitExam: (completedAt: number) => void;
  onPauseExit: () => void;
}

function formatCountdown(seconds: number): string {
  const safe = Math.max(0, Math.floor(seconds));
  const hrs = Math.floor(safe / 3600);
  const mins = Math.floor((safe % 3600) / 60);
  const secs = safe % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

export function ExamView({
  session,
  theme,
  fontScale,
  onToggleTheme,
  onChangeFontScale,
  onUpdateSession,
  onSubmitExam,
  onPauseExit,
}: ExamViewProps) {
  const [remainingSeconds, setRemainingSeconds] = useState<number>(() =>
    Math.max(0, Math.ceil((session.endsAt - Date.now()) / 1000))
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const autoSubmittedRef = useRef(false);

  useEffect(() => {
    const tick = () => {
      const rem = Math.max(0, Math.ceil((session.endsAt - Date.now()) / 1000));
      setRemainingSeconds(rem);
      if (rem <= 0 && !autoSubmittedRef.current) {
        autoSubmittedRef.current = true;
        onSubmitExam(session.endsAt);
      }
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, [session.endsAt, onSubmitExam]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (confirmOpen) setConfirmOpen(false);
        if (drawerOpen) setDrawerOpen(false);
        return;
      }
      if (e.altKey && e.key === 'ArrowRight') {
        e.preventDefault();
        onUpdateSession((prev) => ({
          ...prev,
          currentIndex: Math.min(prev.slots.length - 1, prev.currentIndex + 1),
        }));
      } else if (e.altKey && e.key === 'ArrowLeft') {
        e.preventDefault();
        onUpdateSession((prev) => ({
          ...prev,
          currentIndex: Math.max(0, prev.currentIndex - 1),
        }));
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onUpdateSession, confirmOpen, drawerOpen]);

  const currentSlot = session.slots[session.currentIndex];
  const currentQuestion = currentSlot.question;
  const currentAnswer = session.answers[currentQuestion.id];
  const isFlagged = session.flaggedIds.includes(currentQuestion.id);
  const isRevealed =
    session.instantFeedback && session.revealedIds.includes(currentQuestion.id);

  const answeredCount = session.slots.filter(
    (s) => evaluateQuestion(s.question, session.answers[s.question.id]).isComplete
  ).length;
  const unansweredCount = session.slots.length - answeredCount;
  const progressPct = Math.round((answeredCount / session.slots.length) * 100);

  const timerClass =
    remainingSeconds <= 300
      ? 'is-critical'
      : remainingSeconds <= 900
        ? 'is-warning'
        : '';

  const handleSetAnswer = (nextAns: UserAnswer) => {
    onUpdateSession((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [currentQuestion.id]: nextAns,
      },
    }));
  };

  const handleToggleFlag = () => {
    onUpdateSession((prev) => {
      const exists = prev.flaggedIds.includes(currentQuestion.id);
      return {
        ...prev,
        flaggedIds: exists
          ? prev.flaggedIds.filter((id) => id !== currentQuestion.id)
          : [...prev.flaggedIds, currentQuestion.id],
      };
    });
  };

  const handleRevealNow = () => {
    onUpdateSession((prev) => {
      if (prev.revealedIds.includes(currentQuestion.id)) return prev;
      return {
        ...prev,
        revealedIds: [...prev.revealedIds, currentQuestion.id],
      };
    });
  };

  const handleJump = (index: number) => {
    onUpdateSession((prev) => ({
      ...prev,
      currentIndex: Math.max(0, Math.min(prev.slots.length - 1, index)),
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header className="exam-topbar">
        <div className="exam-progress-hairline" aria-hidden="true">
          <div className="exam-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <div className="exam-topbar-inner">
          <div className="exam-cluster">
            <button
              type="button"
              className="brand-btn"
              onClick={onPauseExit}
              title="Simpan progres sementara dan kembali ke daftar paket"
              aria-label="Kembali ke beranda"
            >
              <ArenaLogoMark size={30} />
              <div>
                <span style={{ display: 'block', fontSize: '0.88rem', fontWeight: 800, color: 'var(--ink-900)' }}>
                  {session.title}
                </span>
                <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--ink-500)' }} className="tabular">
                  {answeredCount} dari {session.slots.length} soal terjawab
                </span>
              </div>
            </button>
          </div>

          <div className="exam-cluster">
            <div className="font-group" role="group" aria-label="Ukuran huruf soal">
              {(['sm', 'md', 'lg'] as FontScale[]).map((sc) => (
                <button
                  key={sc}
                  type="button"
                  className={fontScale === sc ? 'is-selected' : ''}
                  onClick={() => onChangeFontScale(sc)}
                  aria-label={`Ukuran font ${sc}`}
                >
                  {sc === 'sm' ? 'A-' : sc === 'md' ? 'A' : 'A+'}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="btn btn-sm btn-ghost"
              aria-label={theme === 'light' ? 'Aktifkan mode gelap' : 'Aktifkan mode terang'}
              onClick={onToggleTheme}
            >
              {theme === 'light' ? 'Gelap' : 'Terang'}
            </button>

            <div
              className={`timer-box tabular ${timerClass}`}
              role="timer"
              aria-live="off"
              aria-label={`Sisa waktu ${formatCountdown(remainingSeconds)}`}
            >
              <Clock size={15} aria-hidden="true" />
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--ink-500)' }}>
                SISA WAKTU
              </span>
              <span>{formatCountdown(remainingSeconds)}</span>
            </div>

            <button
              type="button"
              className="btn btn-sm btn-ghost mobile-only"
              onClick={() => setDrawerOpen(true)}
            >
              Peta ({answeredCount}/{session.slots.length})
            </button>

            <button
              type="button"
              className="btn btn-sm btn-accent"
              onClick={() => setConfirmOpen(true)}
            >
              <Send size={14} aria-hidden="true" />
              Selesai
            </button>
          </div>
        </div>
      </header>

      <main className="exam-grid" style={{ flex: 1, width: '100%' }}>
        <section
          key={currentQuestion.id}
          className="kartu question-sheet view-enter"
          aria-label={`Soal nomor ${session.currentIndex + 1}`}
        >
          <QuestionRenderer
            question={currentQuestion}
            index={session.currentIndex}
            total={session.slots.length}
            answer={currentAnswer}
            isFlagged={isFlagged}
            showFeedback={isRevealed}
            canRevealNow={session.instantFeedback}
            onChangeAnswer={handleSetAnswer}
            onToggleFlag={handleToggleFlag}
            onRevealNow={handleRevealNow}
          />

          <div className="q-footer-nav">
            <button
              type="button"
              className="btn btn-ghost"
              disabled={session.currentIndex === 0}
              onClick={() => handleJump(session.currentIndex - 1)}
            >
              <ChevronLeft size={17} aria-hidden="true" />
              Sebelumnya
            </button>

            {session.currentIndex < session.slots.length - 1 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleJump(session.currentIndex + 1)}
              >
                Selanjutnya
                <ChevronRight size={17} aria-hidden="true" />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-accent"
                onClick={() => setConfirmOpen(true)}
              >
                <Send size={16} aria-hidden="true" />
                Selesai &amp; Kumpulkan
              </button>
            )}
          </div>
        </section>

        <aside className="kartu nav-sidebar-card desktop-only" aria-label="Navigasi nomor soal">
          <NavigatorSidebar session={session} onJump={handleJump} />
        </aside>
      </main>

      {drawerOpen && (
        <div
          className="drawer-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Navigasi Soal"
          onClick={() => setDrawerOpen(false)}
        >
          <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
            <NavigatorSidebar
              session={session}
              onJump={handleJump}
              onCloseMobile={() => setDrawerOpen(false)}
            />
          </div>
        </div>
      )}

      {confirmOpen && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="submit-modal-title"
          onClick={() => setConfirmOpen(false)}
        >
          <div className="modal-box" style={{ maxWidth: 480 }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 id="submit-modal-title">Konfirmasi Selesai Try Out</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--ink-100)' }}>
                <span>Terjawab lengkap</span>
                <strong className="tabular">{answeredCount} soal</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--ink-100)' }}>
                <span>Belum lengkap / kosong</span>
                <strong className="tabular">{unansweredCount} soal</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                <span>Ditandai Ragu-ragu</span>
                <strong className="tabular">{session.flaggedIds.length} soal</strong>
              </div>
            </div>

            {unansweredCount > 0 && (
              <div
                style={{
                  padding: '0.75rem 0.9rem',
                  borderRadius: '0.7rem',
                  backgroundColor: 'var(--sun-50)',
                  border: '1px solid var(--sun-500)',
                  marginBottom: '1rem',
                  fontSize: '0.86rem',
                  color: 'var(--ink-900)',
                }}
              >
                Masih ada <strong>{unansweredCount} soal</strong> yang belum lengkap atau belum diisi.
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setConfirmOpen(false)}
              >
                Kembali Periksa
              </button>
              <button
                type="button"
                className="btn btn-accent"
                onClick={() => onSubmitExam(Date.now())}
              >
                Ya, Selesai &amp; Lihat Nilai
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
