import { useEffect, useRef, useState } from 'react';
import {
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Grid,
  Moon,
  Send,
  Sun,
} from 'lucide-react';
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

  // Sinkronkan timer langsung ke deadline endsAt agar tahan refresh
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

  // Pintasan keyboard (Alt+ArrowLeft / Alt+ArrowRight untuk navigasi soal)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
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
  }, [onUpdateSession]);

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
          <div className="exam-status-cluster">
            <button
              type="button"
              className="btn btn-sm btn-ghost"
              onClick={onPauseExit}
              title="Simpan progres sementara & kembali ke beranda"
            >
              <ChevronLeft size={16} />
              Beranda
            </button>
            <div
              className={`timer-pill ${timerClass}`}
              role="timer"
              aria-live="off"
              aria-label={`Sisa waktu ${formatCountdown(remainingSeconds)}`}
            >
              <Clock size={16} />
              <span>{formatCountdown(remainingSeconds)}</span>
            </div>
            <span className="badge mono">
              {answeredCount}/{session.slots.length} Terisi
            </span>
          </div>

          <div className="exam-status-cluster">
            <div className="icon-group" role="group" aria-label="Ukuran huruf soal">
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
              aria-label="Ganti tema tampilan"
              onClick={onToggleTheme}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <button
              type="button"
              className="btn btn-sm btn-secondary mobile-only"
              onClick={() => setDrawerOpen(true)}
            >
              <Grid size={16} />
              Peta ({answeredCount}/{session.slots.length})
            </button>

            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={() => setConfirmOpen(true)}
            >
              <Send size={15} />
              Kumpulkan
            </button>
          </div>
        </div>
      </header>

      <div className="exam-layout">
        <section className="question-card" aria-label={`Soal nomor ${session.currentIndex + 1}`}>
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

          <div className="question-footer">
            <button
              type="button"
              className="btn btn-secondary"
              disabled={session.currentIndex === 0}
              onClick={() => handleJump(session.currentIndex - 1)}
            >
              <ChevronLeft size={16} />
              Sebelumnya
            </button>

            <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>
              Pintasan: Alt + Panah Kiri / Kanan
            </span>

            {session.currentIndex < session.slots.length - 1 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleJump(session.currentIndex + 1)}
              >
                Selanjutnya
                <ChevronRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setConfirmOpen(true)}
              >
                <Send size={16} />
                Selesai &amp; Kumpulkan
              </button>
            )}
          </div>
        </section>

        <aside className="nav-sidebar desktop-sidebar" aria-label="Navigasi nomor soal">
          <NavigatorSidebar session={session} onJump={handleJump} />
        </aside>
      </div>

      {drawerOpen && (
        <div
          className="drawer-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Peta Nomor Soal"
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
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 id="submit-modal-title">Konfirmasi Pengumpulan Jawaban</h3>
            </div>

            <div className="spec-strip" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '1rem' }}>
              <div className="spec-item">
                <span className="spec-val">{answeredCount}</span>
                <span className="spec-label">Terisi Lengkap</span>
              </div>
              <div className="spec-item">
                <span className="spec-val">{unansweredCount}</span>
                <span className="spec-label">Belum Selesai</span>
              </div>
              <div className="spec-item">
                <span className="spec-val">{session.flaggedIds.length}</span>
                <span className="spec-label">Ditandai Ragu</span>
              </div>
            </div>

            {unansweredCount > 0 && (
              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'flex-start',
                  padding: '0.75rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--color-accent-soft)',
                  border: '1px solid var(--color-accent-border)',
                  marginBottom: '1rem',
                  fontSize: '0.88rem',
                }}
              >
                <AlertTriangle size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <span>
                  Masih ada <strong>{unansweredCount} soal</strong> yang belum terisi lengkap. Pastikan
                  setiap baris tabel pada soal PGK Kategori sudah dipilih sebelum mengakhiri ujian.
                </span>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.6rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-secondary"
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
