import type {
  DrillConfig,
  ExamQuestion,
  ExamSession,
  MasteryRecord,
  ShuffledSlot,
  UserAnswer,
} from '../types/exam';

export type Rng = () => number;

export function shuffleArray<T>(items: readonly T[], rng: Rng = Math.random): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Mengacak urutan opsi/pernyataan sebuah soal tanpa memutasi bank asli,
 * dan menyesuaikan indeks jawaban agar tetap valid dengan urutan tampil.
 */
export function buildShuffledSlot(
  sourceQuestion: ExamQuestion,
  rng: Rng = Math.random,
  shuffleChoices = true
): ShuffledSlot {
  if (sourceQuestion.type === 'PG') {
    const indices = sourceQuestion.options.map((_, i) => i);
    const orderMap = shuffleChoices ? shuffleArray(indices, rng) : indices;
    const options = orderMap.map((origIdx) => sourceQuestion.options[origIdx]);
    const answer = orderMap.indexOf(sourceQuestion.answer);
    return {
      orderMap,
      question: {
        ...sourceQuestion,
        options,
        answer,
      },
    };
  }

  if (sourceQuestion.type === 'PGK_MCMA') {
    const indices = sourceQuestion.options.map((_, i) => i);
    const orderMap = shuffleChoices ? shuffleArray(indices, rng) : indices;
    const options = orderMap.map((origIdx) => sourceQuestion.options[origIdx]);
    const answer = sourceQuestion.answer
      .map((origAns) => orderMap.indexOf(origAns))
      .sort((a, b) => a - b);
    return {
      orderMap,
      question: {
        ...sourceQuestion,
        options,
        answer,
      },
    };
  }

  // PGK_KATEGORI: acak urutan baris pernyataan
  const rowIndices = sourceQuestion.statements.map((_, i) => i);
  const orderMap = shuffleChoices ? shuffleArray(rowIndices, rng) : rowIndices;
  const statements = orderMap.map((origIdx) => ({
    ...sourceQuestion.statements[origIdx],
  }));
  return {
    orderMap,
    question: {
      ...sourceQuestion,
      statements,
      categories: [...sourceQuestion.categories] as [string, string],
    },
  };
}

/**
 * Prioritaskan soal yang belum pernah dilihat, disusul yang terakhir salah, lalu yang sudah dikuasai.
 * Di dalam setiap tingkatan, soal diacak agar setiap percobaan berbeda.
 */
export function prioritizeQuestions(
  candidates: readonly ExamQuestion[],
  mastery: Record<string, MasteryRecord>,
  rng: Rng = Math.random
): ExamQuestion[] {
  const unseen: ExamQuestion[] = [];
  const weakOrMissed: ExamQuestion[] = [];
  const mastered: ExamQuestion[] = [];

  for (const q of candidates) {
    const m = mastery[q.id];
    if (!m || m.seenCount === 0) {
      unseen.push(q);
    } else if (!m.lastCorrect || m.wrongCount > m.correctCount) {
      weakOrMissed.push(q);
    } else {
      mastered.push(q);
    }
  }

  return [
    ...shuffleArray(unseen, rng),
    ...shuffleArray(weakOrMissed, rng),
    ...shuffleArray(mastered, rng),
  ];
}

/**
 * Mengambil kuota N soal sambil mengutamakan tingkat prioritas (unseen > weak/missed > mastered)
 * dan menjaga keseimbangan ketiga bentuk soal (PG, PGK_KATEGORI, PGK_MCMA) di dalam tier tersebut.
 */
function pickBalancedByType(
  pool: readonly ExamQuestion[],
  targetCount: number,
  mastery: Record<string, MasteryRecord>,
  rng: Rng
): ExamQuestion[] {
  if (pool.length <= targetCount) {
    return prioritizeQuestions(pool, mastery, rng);
  }

  const unseen: ExamQuestion[] = [];
  const weakOrMissed: ExamQuestion[] = [];
  const mastered: ExamQuestion[] = [];

  for (const q of pool) {
    const m = mastery[q.id];
    if (!m || m.seenCount === 0) unseen.push(q);
    else if (!m.lastCorrect || m.wrongCount > m.correctCount) weakOrMissed.push(q);
    else mastered.push(q);
  }

  const pickWithinTier = (tierItems: ExamQuestion[], need: number): ExamQuestion[] => {
    if (need <= 0 || tierItems.length === 0) return [];
    if (tierItems.length <= need) return shuffleArray(tierItems, rng);

    const pg = shuffleArray(tierItems.filter((q) => q.type === 'PG'), rng);
    const kat = shuffleArray(tierItems.filter((q) => q.type === 'PGK_KATEGORI'), rng);
    const mcma = shuffleArray(tierItems.filter((q) => q.type === 'PGK_MCMA'), rng);

    const desiredKat = Math.min(kat.length, Math.max(1, Math.round(need * 0.2)));
    const desiredMcma = Math.min(mcma.length, Math.max(1, Math.round(need * 0.2)));
    const desiredPg = Math.min(pg.length, Math.max(0, need - desiredKat - desiredMcma));

    const chosen: ExamQuestion[] = [
      ...pg.slice(0, desiredPg),
      ...kat.slice(0, desiredKat),
      ...mcma.slice(0, desiredMcma),
    ];

    if (chosen.length < need) {
      const chosenIds = new Set(chosen.map((q) => q.id));
      const rest = shuffleArray(
        tierItems.filter((q) => !chosenIds.has(q.id)),
        rng
      );
      chosen.push(...rest.slice(0, need - chosen.length));
    }
    return chosen;
  };

  const picked: ExamQuestion[] = [];
  for (const tier of [unseen, weakOrMissed, mastered]) {
    if (picked.length >= targetCount) break;
    picked.push(...pickWithinTier(tier, targetCount - picked.length));
  }

  return shuffleArray(picked, rng);
}

export function createInitialAnswer(question: ExamQuestion): UserAnswer {
  if (question.type === 'PG') {
    return { type: 'PG', selected: null };
  }
  if (question.type === 'PGK_MCMA') {
    return { type: 'PGK_MCMA', selected: [] };
  }
  return {
    type: 'PGK_KATEGORI',
    selections: question.statements.map(() => null),
  };
}

/**
 * Membangun Simulasi Resmi UTBK UKPPPG 2026 sesuai Juknis Hal. 7:
 * 80 Soal (50 PCK Teknik Mesin + 30 Pedagogi Umum) · Waktu 150 Menit (9.000 detik).
 */
export function createOfficialExamSession(
  pckBank: readonly ExamQuestion[],
  puBank: readonly ExamQuestion[],
  mastery: Record<string, MasteryRecord>,
  options?: { mixBanksOrder?: boolean; now?: number; rng?: Rng }
): ExamSession {
  const rng = options?.rng ?? Math.random;
  const now = options?.now ?? Date.now();

  const chosenPck = pickBalancedByType(pckBank, 50, mastery, rng);
  const chosenPu = pickBalancedByType(puBank, 30, mastery, rng);

  const orderedQuestions = options?.mixBanksOrder
    ? shuffleArray([...chosenPck, ...chosenPu], rng)
    : [...chosenPck, ...chosenPu];

  const slots = orderedQuestions.map((q) => buildShuffledSlot(q, rng, true));
  const answers: Record<string, UserAnswer> = {};
  for (const slot of slots) {
    answers[slot.question.id] = createInitialAnswer(slot.question);
  }

  const durationSeconds = 150 * 60;
  return {
    id: `tryout-${now}-${Math.floor(rng() * 10000)}`,
    mode: 'official',
    title: 'Simulasi Resmi UTBK UKPPPG 2026 (80 Soal)',
    instantFeedback: false,
    createdAt: now,
    durationSeconds,
    endsAt: now + durationSeconds * 1000,
    currentIndex: 0,
    flaggedIds: [],
    revealedIds: [],
    slots,
    answers,
  };
}

/**
 * Membangun sesi Drill Topik / Format / Review Soal Salah.
 */
export function filterDrillQuestions(
  allQuestions: readonly ExamQuestion[],
  config: Pick<DrillConfig, 'bank' | 'topic' | 'subkompetensi' | 'type' | 'onlyMissedIds'>
): ExamQuestion[] {
  if (config.onlyMissedIds && config.onlyMissedIds.length > 0) {
    const missedSet = new Set(config.onlyMissedIds);
    return allQuestions.filter((q) => missedSet.has(q.id));
  }
  return allQuestions.filter((q) => {
    if (config.bank !== 'ALL' && q.bank !== config.bank) return false;
    if (config.topic !== 'ALL' && q.topic !== config.topic) return false;
    if (
      config.subkompetensi &&
      config.subkompetensi !== 'ALL' &&
      q.subkompetensi !== config.subkompetensi
    ) {
      return false;
    }
    if (config.type !== 'ALL' && q.type !== config.type) return false;
    return true;
  });
}

export function createDrillSession(
  allQuestions: readonly ExamQuestion[],
  config: DrillConfig,
  mastery: Record<string, MasteryRecord>,
  options?: { now?: number; rng?: Rng }
): ExamSession {
  const rng = options?.rng ?? Math.random;
  const now = options?.now ?? Date.now();

  const filtered = filterDrillQuestions(allQuestions, config);

  const count = Math.min(config.count, filtered.length);
  const chosen = prioritizeQuestions(filtered, mastery, rng).slice(0, count);
  const slots = chosen.map((q) => buildShuffledSlot(q, rng, true));

  const answers: Record<string, UserAnswer> = {};
  for (const slot of slots) {
    answers[slot.question.id] = createInitialAnswer(slot.question);
  }

  // ~2 menit per soal untuk simulasi drill
  const durationSeconds = Math.max(10 * 60, slots.length * 120);
  const title =
    config.customTitle ??
    (config.subkompetensi && config.subkompetensi !== 'ALL'
      ? `Drill Subkompetensi ${config.subkompetensi}`
      : config.topic !== 'ALL'
        ? `Drill: ${config.topic}`
        : config.bank === 'ALL'
          ? 'Drill Campuran PCK & Pedagogi'
          : `Drill ${config.bank === 'PCK' ? 'PCK Teknik Mesin' : 'Pedagogi Umum'}`);

  return {
    id: `drill-${now}-${Math.floor(rng() * 10000)}`,
    mode: 'drill',
    title,
    instantFeedback: config.instantFeedback,
    createdAt: now,
    durationSeconds,
    endsAt: now + durationSeconds * 1000,
    currentIndex: 0,
    flaggedIds: [],
    revealedIds: [],
    slots,
    answers,
  };
}
