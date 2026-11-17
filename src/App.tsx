import { useCallback, useEffect, useMemo, useState } from 'react';
import { JuknisGuideModal } from './components/JuknisGuideModal';
import { CalibratorMark } from './components/PrecisionVisuals';
import { ALL_QUESTIONS, PCK_BANK, PU_BANK, getBankSummary } from './data/questionBank';
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
import { HomeView, type WorkspaceTab } from './pages/HomeView';
import { ResultView } from './pages/ResultView';
import type {
  DrillConfig,
  ExamResultSummary,
  ExamSession,
  MasteryRecord,
} from './types/exam';

type ActiveRoute = 'home' | 'exam' | 'result';

const NAV_TABS: { id: WorkspaceTab; idx: string; label: string }[] = [
  { id: 'overview', idx: '01', label: 'Ruang Uji' },
  { id: 'studio', idx: '02', label: 'Studio Drill' },
  { id: 'archive', idx: '03', label: 'Juknis & Arsip' },
];

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
  const [homeTab, setHomeTab] = useState<WorkspaceTab>('overview');
  const [guideOpen, setGuideOpen] = useState(false);

  const bankSummary = useMemo(() => getBankSummary(), []);
  const seenCount = useMemo(
    () => Object.values(mastery).filter((m) => m.seenCount > 0).length,
    [mastery]
  );

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
    <div className={route === 'home' ? 'workspace-shell' : ''}>
      {route === 'home' ? (
        <>
          {/* Left Precision Command Rail (Desktop >= 960px) */}
          <aside className="command-rail" aria-label="Navigasi utama">
            <div>
              <button
                type="button"
                className="rail-brand"
                onClick={() => setHomeTab('overview')}
              >
                <CalibratorMark />
                <div>
                  <span className="rail-brand-title">KALIBRASI UTBK</span>
                  <span className="rail-brand-sub">UKPPPG · TEKNIK MESIN</span>
                </div>
              </button>

              <nav className="rail-nav" role="tablist" aria-label="Menu workspace">
                {NAV_TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={homeTab === t.id}
                    className={`rail-nav-btn ${homeTab === t.id ? 'is-active' : ''}`}
                    onClick={() => setHomeTab(t.id)}
                  >
                    <span>{t.label}</span>
                    <span className="rail-nav-idx">{t.idx}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="rail-footer">
              <div className="rail-stat-line">
                <span>TERCAKUP</span>
                <span>
                  {seenCount} / {bankSummary.total}
                </span>
              </div>

              <div className="rail-controls-row">
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

              <button
                type="button"
                className="btn btn-sm btn-subtle"
                onClick={() => setGuideOpen(true)}
              >
                Panduan Juknis 2026
              </button>
            </div>
          </aside>

          {/* Mobile Sticky Top Navigation (< 960px) */}
          <header className="mobile-nav-header">
            <div className="mobile-header-top">
              <button
                type="button"
                className="rail-brand"
                onClick={() => setHomeTab('overview')}
              >
                <CalibratorMark size={24} />
                <div>
                  <span className="rail-brand-title">KALIBRASI UTBK</span>
                </div>
              </button>
              <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                <button
                  type="button"
                  className="btn btn-sm btn-subtle"
                  onClick={() => setGuideOpen(true)}
                >
                  Juknis
                </button>
                <button
                  type="button"
                  className="btn btn-sm"
                  aria-label={prefs.theme === 'light' ? 'Mode gelap mobile' : 'Mode terang mobile'}
                  onClick={handleToggleTheme}
                >
                  {prefs.theme === 'light' ? 'Gelap' : 'Terang'}
                </button>
              </div>
            </div>
            <div className="mobile-tabs" role="tablist" aria-label="Navigasi tab">
              {NAV_TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={homeTab === t.id}
                  className={`mobile-tab-btn ${homeTab === t.id ? 'is-active' : ''}`}
                  onClick={() => setHomeTab(t.id)}
                >
                  {t.idx} {t.label}
                </button>
              ))}
            </div>
          </header>

          <HomeView
            activeTab={homeTab}
            activeSession={activeSession}
            history={history}
            mastery={mastery}
            onChangeTab={setHomeTab}
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
          />
        </>
      ) : (
        currentResult && (
          <ResultView
            result={currentResult}
            onBackHome={() => setRoute('home')}
            onStartNewOfficial={() => handleStartOfficial(false)}
            onDrillMissed={handleDrillMissed}
          />
        )
      )}

      <JuknisGuideModal open={guideOpen} onClose={() => setGuideOpen(false)} />
    </div>
  );
}

export default App;
