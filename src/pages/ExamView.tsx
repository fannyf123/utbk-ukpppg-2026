import { useEffect, useRef, useState } from 'react';
import { Clock } from 'lucide-react';
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
  return hrs > 0 ? `${pad(hrs)}:${pad(mins)}:${pad(secs)}` : `${pad(mins)}:${pad(secs)}`;
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

  // Keyboard navigation + Escape closes open dialog/drawer
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

  const timerClass =
    remainingSeconds <= 300
      ? 'is-critical'
      : remainingSeconds <= 900
        ? 'is-warn'
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
    <div className="app-shell">
      <header className="exam-toolbar">
        <div className="exam-toolbar-inner">
          <div className="exam-cluster">
            <button
              type="button"
              className="btn btn-sm"
              onClick={onPauseExit}
              title="Simpan progres sementara dan kembali ke beranda"
            >
              Beranda
            </button>
            <div
              className={`timer-box ${timerClass}`}
              role="timer"
              aria-live="off"
              aria-label={`Sisa waktu ${formatCountdown(remainingSeconds)}`}
            >
              <Clock size={16} aria-hidden="true" />
              <span>{formatCountdown(remainingSeconds)}</span>
            </div>
            <span className="score-tag is-good">
              {answeredCount}/{session.slots.length} Terisi
            </span>
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
              className="btn btn-sm"
              aria-label={theme === 'light' ? 'Aktifkan mode gelap' : 'Aktifkan mode terang'}
              onClick={onToggleTheme}
            >
              {theme === 'light' ? 'Gelap' : 'Terang'}
            </button>

            <button
              type="button"
              className="btn btn-sm mobile-only"
              onClick={() => setDrawerOpen(true)}
            >
              Peta ({answeredCount}/{session.slots.length})
            </button>

            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={() => setConfirmOpen(true)}
            >
              Kumpulkan
            </button>
          </div>
        </div>
      </header>

      <main className="exam-grid">
        <section className="question-sheet grain-surface" aria-label={`Soal nomor ${session.currentIndex + 1}`}>
          <QuestionRenderer
            question={currentQuestion}
            index={session.currentIndex}
            total={session.slots.length}
            answer={currentAnswer}
            isFlagged={isFlagged}
            showFeedback={isRevealed}
            canRevealNow={session.instantFeedback}
            onChangeAnswer={handleSetAnswer}
            onRevealNow={handleRevealNow}
          />

          <div className="question-footer">
            <button
              type="button"
              className="btn"
              disabled={session.currentIndex === 0}
              onClick={() => handleJump(session.currentIndex - 1)}
            >
              Sebelumnya
            </button>

            {!isRevealed && (
              <button
                type="button"
                className={`btn btn-flag ${isFlagged ? 'is-active' : ''}`}
                aria-pressed={isFlagged}
                onClick={handleToggleFlag}
              >
                {isFlagged ? 'Ditandai Ragu-Ragu' : 'Tandai Ragu-Ragu'}
              </button>
            )}

            {session.currentIndex < session.slots.length - 1 ? (
              <button
                type="button"
                className="btn btn-ink"
                onClick={() => handleJump(session.currentIndex + 1)}
              >
                Selanjutnya
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setConfirmOpen(true)}
              >
                Selesai &amp; Kumpulkan
              </button>
            )}
          </div>
        </section>

        <aside className="nav-sidebar desktop-sidebar grain-surface" aria-label="Navigasi nomor soal">
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
          <div className="drawer-panel grain-surface" onClick={(e) => e.stopPropagation()}>
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
          <div className="modal-box grain-surface" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 id="submit-modal-title">Konfirmasi Pengumpulan Jawaban</h3>
            </div>

            <div
              className="work-ticket"
              style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '1rem' }}
            >
              <div className="ticket-cell">
                <span className="ticket-num">{answeredCount}</span>
                <span className="ticket-lbl">Terisi Lengkap</span>
              </div>
              <div className="ticket-cell">
                <span className="ticket-num">{unansweredCount}</span>
                <span className="ticket-lbl">Belum Selesai</span>
              </div>
              <div className="ticket-cell">
                <span className="ticket-num">{session.flaggedIds.length}</span>
                <span className="ticket-lbl">Ragu-Ragu</span>
              </div>
            </div>

            {unansweredCount > 0 && (
              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--accent-yellow)',
                  color: '#16281c',
                  border: '2px solid #16281c',
                  marginBottom: '1rem',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                }}
              >
                Masih ada <strong>{unansweredCount} soal</strong> belum terisi lengkap. Pastikan
                seluruh baris tabel pada soal PGK Kategori sudah dipilih sebelum mengakhiri ujian.
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn"
                onClick={() => setConfirmOpen(false)}
              >
                Kembali Periksa Soal
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onSubmitExam(Date.now())}
              >
                Ya, Kumpulkan &amp; Lihat Skor
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
