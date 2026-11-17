import { JUKNIS_SUBCOMPETENCIES } from '../data/juknisReference';
import type {
  Competency,
  ExamQuestion,
  ExamResultSummary,
  ExamSession,
  QuestionBank,
  QuestionType,
  SubcompetencyScore,
  TenBlockScore,
  UserAnswer,
} from '../types/exam';

export interface QuestionEvaluation {
  answered: boolean;
  isComplete: boolean;
  strictCorrect: boolean;
  /** Nilai 0..1: untuk PG 0|1, untuk PGK_KATEGORI proporsi baris benar, untuk PGK_MCMA akurasi diagnostik */
  partialRatio: number;
  rawEarned: number;
  rawMax: number;
}

export function getQuestionMaxPoints(q: ExamQuestion): number {
  if (q.type === 'PGK_KATEGORI') return q.statements.length;
  return 5;
}

export function evaluateQuestion(
  question: ExamQuestion,
  userAnswer: UserAnswer | undefined
): QuestionEvaluation {
  const rawMax = getQuestionMaxPoints(question);

  if (!userAnswer) {
    return {
      answered: false,
      isComplete: false,
      strictCorrect: false,
      partialRatio: 0,
      rawEarned: 0,
      rawMax,
    };
  }

  if (question.type === 'PG' && userAnswer.type === 'PG') {
    if (userAnswer.selected === null) {
      return {
        answered: false,
        isComplete: false,
        strictCorrect: false,
        partialRatio: 0,
        rawEarned: 0,
        rawMax,
      };
    }
    const ok = userAnswer.selected === question.answer;
    return {
      answered: true,
      isComplete: true,
      strictCorrect: ok,
      partialRatio: ok ? 1 : 0,
      rawEarned: ok ? 5 : 0,
      rawMax,
    };
  }

  if (question.type === 'PGK_MCMA' && userAnswer.type === 'PGK_MCMA') {
    const chosen = Array.from(new Set(userAnswer.selected)).sort((a, b) => a - b);
    if (chosen.length === 0) {
      return {
        answered: false,
        isComplete: false,
        strictCorrect: false,
        partialRatio: 0,
        rawEarned: 0,
        rawMax,
      };
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
    const raw = (hits - falsePos * 0.5) / expected.length;
    const partialRatio = strictCorrect ? 1 : Math.max(0, Math.min(0.95, raw));
    return {
      answered: true,
      isComplete: chosen.length > 0,
      strictCorrect,
      partialRatio,
      rawEarned: strictCorrect ? 5 : 0,
      rawMax,
    };
  }

  if (question.type === 'PGK_KATEGORI' && userAnswer.type === 'PGK_KATEGORI') {
    const total = question.statements.length;
    const pickedCount = userAnswer.selections.filter((s) => s !== null).length;
    if (pickedCount === 0) {
      return {
        answered: false,
        isComplete: false,
        strictCorrect: false,
        partialRatio: 0,
        rawEarned: 0,
        rawMax,
      };
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
      rawEarned: correctRows,
      rawMax,
    };
  }

  return {
    answered: false,
    isComplete: false,
    strictCorrect: false,
    partialRatio: 0,
    rawEarned: 0,
    rawMax,
  };
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
  let partialCorrectCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;
  let totalPartial = 0;
  let pointsEarned = 0;
  let maxPoints = 0;
  let pckCorrect = 0;
  let pckTotal = 0;
  let puCorrect = 0;
  let puTotal = 0;
  const missedIds: string[] = [];

  const tenBlockMap = new Map<number, { earned: number; max: number }>();

  for (let i = 0; i < session.slots.length; i++) {
    const slot = session.slots[i];
    const q = slot.question;
    const ev = evaluateQuestion(q, session.answers[q.id]);

    byType[q.type].total++;
    pointsEarned += ev.rawEarned;
    maxPoints += ev.rawMax;

    const blockIdx = Math.floor(i / 10);
    const blk = tenBlockMap.get(blockIdx) ?? { earned: 0, max: 0 };
    blk.earned += ev.rawEarned;
    blk.max += ev.rawMax;
    tenBlockMap.set(blockIdx, blk);

    if (ev.strictCorrect) {
      byType[q.type].correct++;
      strictCorrectCount++;
    } else {
      missedIds.push(q.id);
      if (!ev.answered) {
        unansweredCount++;
      } else if (ev.partialRatio > 0) {
        partialCorrectCount++;
      } else {
        wrongCount++;
      }
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
      rawEarned: 0,
      rawMax: 0,
    };
    existingSub.total++;
    if (ev.strictCorrect) existingSub.correct++;
    existingSub.earnedPoints += ev.partialRatio;
    existingSub.rawEarned += ev.rawEarned;
    existingSub.rawMax += ev.rawMax;
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
  const tenBlocks: TenBlockScore[] = Array.from(tenBlockMap.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([bIdx, vals]) => {
      const start = bIdx * 10 + 1;
      const end = Math.min((bIdx + 1) * 10, totalQuestions);
      return {
        label: `Soal ${start}–${end}`,
        earned: vals.earned,
        max: vals.max,
      };
    });

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
    paketId: session.paketId,
    prodiId: session.prodiId,
    prodiLabel: session.prodiLabel,
    participantName: session.participantName,
    title: session.title,
    completedAt,
    elapsedSeconds,
    totalQuestions,
    strictCorrectCount,
    partialCorrectCount,
    wrongCount,
    unansweredCount,
    strictScore: totalQuestions > 0 ? Math.round((strictCorrectCount / totalQuestions) * 100) : 0,
    weightedScore: totalQuestions > 0 ? Math.round((totalPartial / totalQuestions) * 100) : 0,
    pointsEarned,
    maxPoints,
    scaleScore: maxPoints > 0 ? Math.round((pointsEarned / maxPoints) * 100) : 0,
    pckCorrect,
    pckTotal,
    puCorrect,
    puTotal,
    tenBlocks,
    byType,
    bySubcompetency,
    byTopic,
    missedIds,
    flaggedIds: [...session.flaggedIds],
    slots: session.slots,
    answers: session.answers,
  };
}
