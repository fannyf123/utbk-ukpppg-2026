import { useCallback, useEffect, useState } from 'react';
import { GlossaryModal } from './components/GlossaryModal';
import { JuknisGuideModal } from './components/JuknisGuideModal';
import { StudioDrillModal } from './components/StudioDrillModal';
import {
  PAKET_CATALOG,
  createSessionFromPaket,
  getPaketById,
  type PaketDef,
} from './data/paketCatalog';
import { getProdiConfig } from './data/prodiRegistry';
import { ALL_QUESTIONS } from './data/questionBank';
import { createDrillSession } from './engine/randomizer';
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
import { PaketDetailView } from './pages/PaketDetailView';
import { ResultView } from './pages/ResultView';
import type {
  DrillConfig,
  ExamResultSummary,
  ExamSession,
  MasteryRecord,
  ProdiId,
} from './types/exam';

type ActiveRoute = 'home' | 'detail' | 'exam' | 'result';

export function App() {
  const [prefs, setPrefs] = useState(() => loadPreferences());
  const [activeSession, setActiveSession] = useState<ExamSession | null>(() =>
    loadActiveSession()
  );
  const [history, setHistory] = useState<ExamResultSummary[]>(() => loadHistory());
  const [mastery, setMastery] = useState<Record<string, MasteryRecord>>(() =>
    loadMastery()
  );
  const [selectedPaket, setSelectedPaket] = useState<PaketDef>(PAKET_CATALOG[0]);
  const [currentResult, setCurrentResult] = useState<ExamResultSummary | null>(null);
  const [route, setRoute] = useState<ActiveRoute>('home');
  const [guideOpen, setGuideOpen] = useState(false);
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [studioOpen, setStudioOpen] = useState(false);
  const [studioPreset, setStudioPreset] = useState<{
    prodi: ProdiId | 'ALL_ARCHIVE';
    sub: string;
  }>({ prodi: 'teknik-mesin', sub: 'ALL' });

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

  const handleChangeProdi = useCallback((prodi: ProdiId) => {
    setPrefs((prev) => ({ ...prev, prodi }));
  }, []);

  const handleOpenDetail = useCallback((paket: PaketDef) => {
    setSelectedPaket(paket);
    setPrefs((prev) => ({ ...prev, prodi: paket.prodiId }));
    setRoute('detail');
    window.scrollTo({ top: 0 });
  }, []);

  const handleStartPaket = useCallback(
    (paket: PaketDef, participantName: string, mixOrder: boolean) => {
      const next = createSessionFromPaket(paket, mastery, {
        participantName,
        mixBanksOrder: mixOrder,
      });
      setActiveSession(next);
      setRoute('exam');
      window.scrollTo({ top: 0 });
    },
    [mastery]
  );

  const handleStartDrill = useCallback(
    (config: DrillConfig) => {
      const prodiFilter = config.prodiFilter ?? prefs.prodi;
      const cfg =
        prodiFilter !== 'ALL_ARCHIVE' ? getProdiConfig(prodiFilter) : null;
      const next = createDrillSession(
        ALL_QUESTIONS,
        { ...config, prodiFilter },
        mastery,
        { prodiLabel: cfg?.shortLabel ?? 'Lintas Prodi' }
      );
      if (next.slots.length === 0) return;
      setActiveSession(next);
      setRoute('exam');
      window.scrollTo({ top: 0 });
    },
    [mastery, prefs.prodi]
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

  const handleRetryFromResult = useCallback(() => {
    const matched = currentResult?.paketId
      ? getPaketById(currentResult.paketId)
      : undefined;
    if (matched) {
      setSelectedPaket(matched);
      setRoute('detail');
    } else {
      setRoute('home');
    }
    window.scrollTo({ top: 0 });
  }, [currentResult]);

  const handleDrillMissed = useCallback(
    (missedIds: string[]) => {
      handleStartDrill({
        prodiFilter: 'ALL_ARCHIVE',
        bank: 'ALL',
        topic: 'ALL',
        type: 'ALL',
        count: missedIds.length,
        instantFeedback: true,
        onlyMissedIds: missedIds,
        customTitle: `Latihan Ulang (${missedIds.length} Soal Belum Tepat)`,
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

  return (
    <>
      {route === 'home' && (
        <HomeView
          activeProdi={prefs.prodi}
          activeSession={activeSession}
          history={history}
          mastery={mastery}
          theme={prefs.theme}
          onToggleTheme={handleToggleTheme}
          onSelectProdiTab={handleChangeProdi}
          onOpenDetail={handleOpenDetail}
          onOpenStudio={(prodi, sub) => {
            setStudioPreset({ prodi: prodi ?? prefs.prodi, sub: sub ?? 'ALL' });
            setStudioOpen(true);
          }}
          onOpenGuide={() => setGuideOpen(true)}
          onOpenGlossary={() => setGlossaryOpen(true)}
          onResumeActive={() => setRoute('exam')}
          onDiscardActive={() => setActiveSession(null)}
          onViewHistoryResult={(res) => {
            setCurrentResult(res);
            setRoute('result');
            window.scrollTo({ top: 0 });
          }}
          onResetProgress={handleResetProgress}
        />
      )}

      {route === 'detail' && (
        <PaketDetailView
          paket={selectedPaket}
          theme={prefs.theme}
          onToggleTheme={handleToggleTheme}
          onBack={() => setRoute('home')}
          onStartPaket={handleStartPaket}
        />
      )}

      {route === 'exam' && activeSession && (
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
      )}

      {route === 'result' && currentResult && (
        <ResultView
          result={currentResult}
          onBackHome={() => setRoute('home')}
          onRetrySame={handleRetryFromResult}
          onDrillMissed={handleDrillMissed}
        />
      )}

      <StudioDrillModal
        open={studioOpen}
        initialProdi={studioPreset.prodi}
        initialSub={studioPreset.sub}
        onClose={() => setStudioOpen(false)}
        onStartDrill={handleStartDrill}
      />

      <JuknisGuideModal open={guideOpen} onClose={() => setGuideOpen(false)} />
      <GlossaryModal
        open={glossaryOpen}
        onClose={() => setGlossaryOpen(false)}
        onPractice={() => {
          setGlossaryOpen(false);
          setStudioPreset({ prodi: prefs.prodi, sub: 'ALL' });
          setStudioOpen(true);
        }}
      />
    </>
  );
}

export default App;
