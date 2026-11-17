import type {
  ExamResultSummary,
  ExamSession,
  MasteryRecord,
} from '../types/exam';
import { evaluateQuestion } from './scoring';

const ACTIVE_SESSION_KEY = 'utbk_ukpppg_active_session_v1';
const HISTORY_KEY = 'utbk_ukpppg_history_v1';
const MASTERY_KEY = 'utbk_ukpppg_mastery_v1';
const PREFS_KEY = 'utbk_ukpppg_prefs_v1';

export type ThemeMode = 'light' | 'dark';
export type FontScale = 'sm' | 'md' | 'lg';

export interface UserPreferences {
  theme: ThemeMode;
  fontScale: FontScale;
}

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function loadActiveSession(): ExamSession | null {
  try {
    return safeParse<ExamSession | null>(
      window.localStorage.getItem(ACTIVE_SESSION_KEY),
      null
    );
  } catch {
    return null;
  }
}

export function saveActiveSession(session: ExamSession | null): void {
  try {
    if (!session) {
      window.localStorage.removeItem(ACTIVE_SESSION_KEY);
    } else {
      window.localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(session));
    }
  } catch {
    // Ignore storage quota errors cleanly
  }
}

export function loadHistory(): ExamResultSummary[] {
  try {
    const parsed = safeParse<ExamResultSummary[]>(
      window.localStorage.getItem(HISTORY_KEY),
      []
    );
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function appendHistory(result: ExamResultSummary): ExamResultSummary[] {
  const prev = loadHistory();
  const next = [result, ...prev.filter((r) => r.id !== result.id)].slice(0, 20);
  try {
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  } catch {
    // Fallback menyimpan versi ringkas tanpa salinan penuh slots bila kuota penuh
    try {
      const compact = next.map((r, i) => (i === 0 ? r : { ...r, slots: [], answers: {} }));
      window.localStorage.setItem(HISTORY_KEY, JSON.stringify(compact));
    } catch {
      // Ignore
    }
  }
  return next;
}

export function loadMastery(): Record<string, MasteryRecord> {
  try {
    const parsed = safeParse<Record<string, MasteryRecord>>(
      window.localStorage.getItem(MASTERY_KEY),
      {}
    );
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function updateMasteryFromSession(
  session: ExamSession,
  completedAt: number = Date.now()
): Record<string, MasteryRecord> {
  const prev = loadMastery();
  const next: Record<string, MasteryRecord> = { ...prev };

  for (const slot of session.slots) {
    const q = slot.question;
    const ev = evaluateQuestion(q, session.answers[q.id]);
    const old = next[q.id];
    next[q.id] = {
      seenCount: (old?.seenCount ?? 0) + 1,
      correctCount: (old?.correctCount ?? 0) + (ev.strictCorrect ? 1 : 0),
      wrongCount: (old?.wrongCount ?? 0) + (ev.strictCorrect ? 0 : 1),
      lastAttemptAt: completedAt,
      lastCorrect: ev.strictCorrect,
    };
  }

  try {
    window.localStorage.setItem(MASTERY_KEY, JSON.stringify(next));
  } catch {
    // Ignore
  }
  return next;
}

export function clearAllExamProgress(): void {
  try {
    window.localStorage.removeItem(ACTIVE_SESSION_KEY);
    window.localStorage.removeItem(HISTORY_KEY);
    window.localStorage.removeItem(MASTERY_KEY);
  } catch {
    // Ignore
  }
}

export function loadPreferences(): UserPreferences {
  try {
    const parsed = safeParse<Partial<UserPreferences>>(
      window.localStorage.getItem(PREFS_KEY),
      {}
    );
    return {
      theme: parsed.theme === 'dark' ? 'dark' : 'light',
      fontScale:
        parsed.fontScale === 'sm' || parsed.fontScale === 'lg' ? parsed.fontScale : 'md',
    };
  } catch {
    return { theme: 'light', fontScale: 'md' };
  }
}

export function savePreferences(prefs: UserPreferences): void {
  try {
    window.localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {
    // Ignore
  }
}
