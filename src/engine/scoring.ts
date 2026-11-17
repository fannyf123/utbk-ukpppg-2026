import { JUKNIS_SUBCOMPETENCIES } from '../data/juknisReference';
import type {
  Competency,
  ExamQuestion,
  ExamResultSummary,
  ExamSession,
  QuestionBank,
  QuestionType,
  SubcompetencyScore,
  UserAnswer,
} from '../types/exam';

export interface QuestionEvaluation {
  answered: boolean;
  isComplete: boolean;
  strictCorrect: boolean;
  /** Nilai 0..1: untuk PG 0|1, untuk PGK_KATEGORI proporsi baris benar, untuk PGK_MCMA Jaccard/akurasi diagnostik */
  partialRatio: number;
}

export function evaluateQuestion(
  question: ExamQuestion,
  userAnswer: UserAnswer | undefined
): QuestionEvaluation {
  if (!userAnswer) {
    return { answered: false, isComplete: false, strictCorrect: false, partialRatio: 0 };
  }

  if (question.type === 'PG' && userAnswer.type === 'PG') {
    if (userAnswer.selected === null) {
      return { answered: false, isComplete: false, strictCorrect: false, partialRatio: 0 };
    }
    const ok = userAnswer.selected === question.answer;
    return { answered: true, isComplete: true, strictCorrect: ok, partialRatio: ok ? 1 : 0 };
  }

  if (question.type === 'PGK_MCMA' && userAnswer.type === 'PGK_MCMA') {
    const chosen = Array.from(new Set(userAnswer.selected)).sort((a, b) => a - b);
    if (chosen.length === 0) {
      return { answered: false, isComplete: false, strictCorrect: false, partialRatio: 0 };
    }
    const expected = Array.from(new Set(question.answer)).sort((a, b) => a - b);
    const strictCorrect =
      chosen.length === expected.length && chosen.every((v, idx) => v === expected[idx]);

    const expectedSet = new Set(expected);
    const chosenSet = new Set(chosen);
    let hits = 0;
    let falsePos = 0;
    for (const c of chosenSet) {
      if (expectedSet.has(c)) hits++;
      else falsePos++;
    }
    // Skor diagnostik parsial memberi kredit proporsional tanpa hadiah tebak semua
    const raw = (hits - falsePos * 0.5) / expected.length;
    const partialRatio = strictCorrect ? 1 : Math.max(0, Math.min(0.95, raw));
    return {
      answered: true,
      isComplete: chosen.length > 0,
      strictCorrect,
      partialRatio,
    };
  }

  if (question.type === 'PGK_KATEGORI' && userAnswer.type === 'PGK_KATEGORI') {
    const total = question.statements.length;
    const pickedCount = userAnswer.selections.filter((s) => s !== null).length;
    if (pickedCount === 0) {
      return { answered: false, isComplete: false, strictCorrect: false, partialRatio: 0 };
    }
    let correctRows = 0;
    for (let i = 0; i < total; i++) {
      if (userAnswer.selections[i] === question.statements[i].answer) {
        correctRows++;
      }
    }
    const isComplete = pickedCount === total;
    const strictCorrect = isComplete && correctRows === total;
    return {
      answered: true,
      isComplete,
      strictCorrect,
      partialRatio: total > 0 ? correctRows / total : 0,
    };
  }

  return { answered: false, isComplete: false, strictCorrect: false, partialRatio: 0 };
}

export function gradeSession(
  session: ExamSession,
  completedAt: number = Date.now()
): ExamResultSummary {
  const byType: Record<QuestionType, { correct: number; total: number }> = {
    PG: { correct: 0, total: 0 },
    PGK_KATEGORI: { correct: 0, total: 0 },
    PGK_MCMA: { correct: 0, total: 0 },
  };

  const subMap = new Map<string, SubcompetencyScore>();
  const topicMap = new Map<
    string,
    { topic: string; bank: QuestionBank; correct: number; total: number }
  >();

  let strictCorrectCount = 0;
  let totalPartial = 0;
  let pckCorrect = 0;
  let pckTotal = 0;
  let puCorrect = 0;
  let puTotal = 0;
  const missedIds: string[] = [];

  for (const slot of session.slots) {
    const q = slot.question;
    const ev = evaluateQuestion(q, session.answers[q.id]);

    byType[q.type].total++;
    if (ev.strictCorrect) {
      byType[q.type].correct++;
      strictCorrectCount++;
    } else {
      missedIds.push(q.id);
    }

    totalPartial += ev.partialRatio;

    if (q.bank === 'PCK') {
      pckTotal++;
      if (ev.strictCorrect) pckCorrect++;
    } else {
      puTotal++;
      if (ev.strictCorrect) puCorrect++;
    }

    const subKey = q.subkompetensi;
    const existingSub = subMap.get(subKey) ?? {
      code: subKey,
      kompetensi: q.kompetensi as Competency,
      correct: 0,
      total: 0,
      earnedPoints: 0,
    };
    existingSub.total++;
    if (ev.strictCorrect) existingSub.correct++;
    existingSub.earnedPoints += ev.partialRatio;
    subMap.set(subKey, existingSub);

    const existingTopic = topicMap.get(q.topic) ?? {
      topic: q.topic,
      bank: q.bank,
      correct: 0,
      total: 0,
    };
    existingTopic.total++;
    if (ev.strictCorrect) existingTopic.correct++;
    topicMap.set(q.topic, existingTopic);
  }

  const orderIndex = new Map(JUKNIS_SUBCOMPETENCIES.map((m, idx) => [m.code, idx]));
  const bySubcompetency = Array.from(subMap.values()).sort(
    (a, b) => (orderIndex.get(a.code) ?? 99) - (orderIndex.get(b.code) ?? 99)
  );
  const byTopic = Array.from(topicMap.values()).sort((a, b) => {
    if (a.bank !== b.bank) return a.bank === 'PCK' ? -1 : 1;
    return a.topic.localeCompare(b.topic);
  });

  const totalQuestions = session.slots.length;
  const elapsedSeconds = Math.max(
    1,
    Math.min(
      session.durationSeconds,
      Math.round((completedAt - session.createdAt) / 1000)
    )
  );

  return {
    id: session.id,
    mode: session.mode,
    title: session.title,
    completedAt,
    elapsedSeconds,
    totalQuestions,
    strictCorrectCount,
    strictScore: totalQuestions > 0 ? Math.round((strictCorrectCount / totalQuestions) * 100) : 0,
    weightedScore: totalQuestions > 0 ? Math.round((totalPartial / totalQuestions) * 100) : 0,
    pckCorrect,
    pckTotal,
    puCorrect,
    puTotal,
    byType,
    bySubcompetency,
    byTopic,
    missedIds,
    flaggedIds: [...session.flaggedIds],
    slots: session.slots,
    answers: session.answers,
  };
}
