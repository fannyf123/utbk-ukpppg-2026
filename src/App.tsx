import { useCallback, useEffect, useState } from 'react';
import { JuknisGuideModal } from './components/JuknisGuideModal';
import { WorkshopStamp } from './components/TactilePrimitives';
import { ALL_QUESTIONS, PCK_BANK, PU_BANK } from './data/questionBank';
import { createDrillSession, createOfficialExamSession } from './engine/randomizer';
import { gradeSession } from './engine/scoring';
import {
  appendHistory,
  clearAllExamProgress,
  loadActiveSession,
  loadHistory,
  loadMastery,
  loadPreferences,
  saveActiveSession,
  savePreferences,
  updateMasteryFromSession,
  type FontScale,
  type ThemeMode,
} from './engine/storage';
import { ExamView } from './pages/ExamView';
import { HomeView } from './pages/HomeView';
import { ResultView } from './pages/ResultView';
import type {
  DrillConfig,
  ExamResultSummary,
  ExamSession,
  MasteryRecord,
} from './types/exam';

type ActiveRoute = 'home' | 'exam' | 'result';

export function App() {
  const [prefs, setPrefs] = useState(() => loadPreferences());
  const [activeSession, setActiveSession] = useState<ExamSession | null>(() =>
    loadActiveSession()
  );
  const [history, setHistory] = useState<ExamResultSummary[]>(() => loadHistory());
  const [mastery, setMastery] = useState<Record<string, MasteryRecord>>(() =>
    loadMastery()
  );
  const [currentResult, setCurrentResult] = useState<ExamResultSummary | null>(null);
  const [route, setRoute] = useState<ActiveRoute>('home');
  const [guideOpen, setGuideOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = prefs.theme;
    document.documentElement.dataset.fontScale = prefs.fontScale;
    savePreferences(prefs);
  }, [prefs]);

  useEffect(() => {
    saveActiveSession(activeSession);
  }, [activeSession]);

  const handleToggleTheme = useCallback(() => {
    setPrefs((prev) => ({
      ...prev,
      theme: (prev.theme === 'light' ? 'dark' : 'light') as ThemeMode,
    }));
  }, []);

  const handleChangeFontScale = useCallback((fontScale: FontScale) => {
    setPrefs((prev) => ({ ...prev, fontScale }));
  }, []);

  const handleStartOfficial = useCallback(
    (mixBanksOrder: boolean) => {
      const next = createOfficialExamSession(PCK_BANK, PU_BANK, mastery, {
        mixBanksOrder,
      });
      setActiveSession(next);
      setRoute('exam');
      window.scrollTo({ top: 0 });
    },
    [mastery]
  );

  const handleStartDrill = useCallback(
    (config: DrillConfig) => {
      const next = createDrillSession(ALL_QUESTIONS, config, mastery);
      if (next.slots.length === 0) return;
      setActiveSession(next);
      setRoute('exam');
      window.scrollTo({ top: 0 });
    },
    [mastery]
  );

  const handleUpdateSession = useCallback(
    (updater: (prev: ExamSession) => ExamSession) => {
      setActiveSession((prev) => (prev ? updater(prev) : prev));
    },
    []
  );

  const handleSubmitExam = useCallback(
    (completedAt: number) => {
      if (!activeSession) return;
      const result = gradeSession(activeSession, completedAt);
      const nextHistory = appendHistory(result);
      const nextMastery = updateMasteryFromSession(activeSession, completedAt);
      setHistory(nextHistory);
      setMastery(nextMastery);
      setCurrentResult(result);
      setActiveSession(null);
      setRoute('result');
      window.scrollTo({ top: 0 });
    },
    [activeSession]
  );

  const handleDrillMissed = useCallback(
    (missedIds: string[]) => {
      handleStartDrill({
        bank: 'ALL',
        topic: 'ALL',
        type: 'ALL',
        count: missedIds.length,
        instantFeedback: true,
        onlyMissedIds: missedIds,
        customTitle: `Drill Pemulihan (${missedIds.length} Soal Salah)`,
      });
    },
    [handleStartDrill]
  );

  const handleResetProgress = useCallback(() => {
    clearAllExamProgress();
    setActiveSession(null);
    setHistory([]);
    setMastery({});
    setCurrentResult(null);
  }, []);

  if (route === 'exam' && activeSession) {
    return (
      <>
        <ExamView
          session={activeSession}
          theme={prefs.theme}
          fontScale={prefs.fontScale}
          onToggleTheme={handleToggleTheme}
          onChangeFontScale={handleChangeFontScale}
          onUpdateSession={handleUpdateSession}
          onSubmitExam={handleSubmitExam}
          onPauseExit={() => setRoute('home')}
        />
        <JuknisGuideModal open={guideOpen} onClose={() => setGuideOpen(false)} />
      </>
    );
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <button type="button" className="brand-btn" onClick={() => setRoute('home')}>
            <WorkshopStamp />
            <div>
              <span className="brand-title">UTBK UKPPPG 2026</span>
              <span className="brand-sub">Teknik Mesin SMK · Standar BPPP</span>
            </div>
          </button>

          <div className="topbar-actions">
            <button type="button" className="btn btn-sm" onClick={() => setGuideOpen(true)}>
              Panduan Juknis
            </button>

            <div className="font-group" role="group" aria-label="Ukuran huruf">
              {(['sm', 'md', 'lg'] as FontScale[]).map((sc) => (
                <button
                  key={sc}
                  type="button"
                  className={prefs.fontScale === sc ? 'is-selected' : ''}
                  onClick={() => handleChangeFontScale(sc)}
                  aria-label={`Ukuran font ${sc}`}
                >
                  {sc === 'sm' ? 'A-' : sc === 'md' ? 'A' : 'A+'}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="btn btn-sm"
              aria-label={prefs.theme === 'light' ? 'Aktifkan mode gelap' : 'Aktifkan mode terang'}
              onClick={handleToggleTheme}
            >
              {prefs.theme === 'light' ? 'Gelap' : 'Terang'}
            </button>
          </div>
        </div>
      </header>

      {route === 'result' && currentResult ? (
        <ResultView
          result={currentResult}
          onBackHome={() => setRoute('home')}
          onStartNewOfficial={() => handleStartOfficial(false)}
          onDrillMissed={handleDrillMissed}
        />
      ) : (
        <HomeView
          activeSession={activeSession}
          history={history}
          mastery={mastery}
          onStartOfficial={handleStartOfficial}
          onStartDrill={handleStartDrill}
          onResumeActive={() => setRoute('exam')}
          onDiscardActive={() => setActiveSession(null)}
          onViewHistoryResult={(res) => {
            setCurrentResult(res);
            setRoute('result');
            window.scrollTo({ top: 0 });
          }}
          onResetProgress={handleResetProgress}
          onOpenGuide={() => setGuideOpen(true)}
        />
      )}

      <JuknisGuideModal open={guideOpen} onClose={() => setGuideOpen(false)} />
    </div>
  );
}

export default App;
