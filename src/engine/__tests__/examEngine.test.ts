import { describe, expect, it } from 'vitest';
import {
  PAKET_CATALOG,
  createSessionFromPaket,
  getPaketById,
} from '../../data/paketCatalog';
import { PRODI_CONFIGS, questionMatchesProdi } from '../../data/prodiRegistry';
import {
  ALL_QUESTIONS,
  getBankSummary,
  getProdiPckBank,
  getProdiPuBank,
  getProdiQuestions,
} from '../../data/questionBank';
import {
  buildShuffledSlot,
  createDrillSession,
  createOfficialExamSession,
  filterDrillQuestions,
  prioritizeQuestions,
} from '../randomizer';
import { evaluateQuestion, gradeSession } from '../scoring';
import type { MasteryRecord, ProdiId } from '../../types/exam';

function createSeededRng(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

describe('Bank Soal UTBK UKPPPG 2026 & Integritas Multi-Prodi', () => {
  it('memenuhi kapasitas di atas minimum 720 butir lengkap dengan ketiga bentuk soal BPPP', () => {
    const summary = getBankSummary('ALL_ARCHIVE');
    expect(summary.total).toBeGreaterThanOrEqual(725);
    expect(summary.byType.PG).toBeGreaterThanOrEqual(420);
    expect(summary.byType.PGK_KATEGORI).toBeGreaterThanOrEqual(160);
    expect(summary.byType.PGK_MCMA).toBeGreaterThanOrEqual(115);
  });

  it('tidak memiliki ID duplikat, indeks jawaban valid, dan setiap soal memiliki prodiScope jelas', () => {
    const seenIds = new Set<string>();
    for (const q of ALL_QUESTIONS) {
      expect(seenIds.has(q.id)).toBe(false);
      seenIds.add(q.id);
      expect(q.prompt.trim().length).toBeGreaterThanOrEqual(25);
      expect(q.explanation.trim().length).toBeGreaterThanOrEqual(20);
      expect(q.subkompetensi.trim().length).toBeGreaterThanOrEqual(3);

      const hasValidScope =
        q.prodiScope === 'UMUM' ||
        (Array.isArray(q.prodiScope) && q.prodiScope.length >= 1);
      expect(hasValidScope).toBe(true);

      if (q.type === 'PG') {
        expect(q.options.length).toBeGreaterThanOrEqual(4);
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.answer).toBeLessThan(q.options.length);
      } else if (q.type === 'PGK_MCMA') {
        expect(q.options.length).toBeGreaterThanOrEqual(4);
        expect(q.answer.length).toBeGreaterThanOrEqual(2);
        for (const a of q.answer) {
          expect(a).toBeGreaterThanOrEqual(0);
          expect(a).toBeLessThan(q.options.length);
        }
      } else {
        expect(q.categories.length).toBe(2);
        expect(q.statements.length).toBeGreaterThanOrEqual(3);
        for (const st of q.statements) {
          expect(st.text.trim().length).toBeGreaterThan(10);
          expect([0, 1]).toContain(st.answer);
        }
      }
    }
  });

  it('menjamin isolasi prodi agar tidak terjadi kebocoran soal lintas jurusan yang tidak sinkron', () => {
    // 5 Prodi penuh harus memiliki >= 50 PCK + >= 190 PU
    const fullProdis: ProdiId[] = [
      'teknik-mesin',
      'pgsd',
      'matematika',
      'bahasa-indonesia',
      'ipa',
    ];
    for (const pid of fullProdis) {
      expect(getProdiPckBank(pid).length).toBeGreaterThanOrEqual(50);
      expect(getProdiPuBank(pid).length).toBeGreaterThanOrEqual(190);
    }

    // Teknik Mesin TIDAK boleh kemasukan IPA SMP, DKV, B.Ind SMA, atau Paket 3 PGSD/4 Mat/5 B.Ind
    const mesinPool = getProdiQuestions('teknik-mesin');
    expect(mesinPool.some((q) => q.id.startsWith('ust-ipa-'))).toBe(false);
    expect(mesinPool.some((q) => q.id.startsWith('ust-dwi-'))).toBe(false);
    expect(mesinPool.some((q) => q.id.startsWith('ust-sel-sma-'))).toBe(false);
    expect(mesinPool.some((q) => q.id.startsWith('arena-paket-3-pgsd-'))).toBe(false);
    expect(mesinPool.some((q) => q.id === 'ust-setuju-05')).toBe(false); // TKJ

    // PGSD TIDAK boleh kemasukan soal Teknik Mesin / bengkel / DKV / IPA SMP
    const pgsdPool = getProdiQuestions('pgsd');
    expect(pgsdPool.some((q) => q.id.startsWith('pck'))).toBe(false);
    expect(pgsdPool.some((q) => q.id === 'pu-kat-14')).toBe(false);
    expect(pgsdPool.some((q) => q.id === 'pu-kat-18')).toBe(false);
    expect(pgsdPool.some((q) => q.id.startsWith('ust-ipa-'))).toBe(false);

    // Umum Murni TIDAK boleh mengandung soal PCK
    expect(getProdiPckBank('umum').length).toBe(0);
    const umumPool = getProdiQuestions('umum');
    expect(umumPool.length).toBeGreaterThanOrEqual(190);
    expect(umumPool.every((q) => q.prodiScope === 'UMUM')).toBe(true);
  });
});

describe('Randomizer & Simulasi Multi-Prodi', () => {
  it('membangun Simulasi Resmi 80 soal (50 PCK + 30 PU, 150 menit) untuk seluruh 5 Prodi utama tanpa soal bocor', () => {
    const fullProdis: ProdiId[] = [
      'teknik-mesin',
      'pgsd',
      'matematika',
      'bahasa-indonesia',
      'ipa',
    ];
    for (const pid of fullProdis) {
      const session = createOfficialExamSession(
        getProdiPckBank(pid),
        getProdiPuBank(pid),
        {},
        { prodiId: pid, prodiLabel: pid, rng: createSeededRng(42) }
      );
      expect(session.slots.length).toBe(80);
      expect(session.durationSeconds).toBe(150 * 60);
      expect(session.slots.filter((s) => s.question.bank === 'PCK').length).toBe(50);
      expect(session.slots.filter((s) => s.question.bank === 'PU').length).toBe(30);
      expect(session.slots.every((s) => questionMatchesProdi(s.question, pid))).toBe(true);
      const ids = new Set(session.slots.map((s) => s.question.id));
      expect(ids.size).toBe(80);
    }

    // Prodi SMK Vokasi & Umum Murni menyesuaikan proporsional dengan jujur
    const vokasiCfg = PRODI_CONFIGS.find((p) => p.id === 'smk-vokasi')!;
    const vokSession = createOfficialExamSession(
      getProdiPckBank('smk-vokasi'),
      getProdiPuBank('smk-vokasi'),
      {},
      { prodiId: vokasiCfg.id, prodiLabel: vokasiCfg.shortLabel, rng: createSeededRng(7) }
    );
    expect(vokSession.slots.length).toBe(getProdiPckBank('smk-vokasi').length + 30);

    const umumSession = createOfficialExamSession(
      getProdiPckBank('umum'),
      getProdiPuBank('umum'),
      {},
      { prodiId: 'umum', prodiLabel: 'Pedagogi Umum', rng: createSeededRng(7) }
    );
    expect(umumSession.slots.length).toBe(30);
    expect(umumSession.slots.every((s) => s.question.prodiScope === 'UMUM')).toBe(true);
  });

  it('memprioritaskan soal yang belum pernah dikerjakan agar dua simulasi berturut-turut tidak mengulang soal', () => {
    const mesinPck = getProdiPckBank('teknik-mesin');
    const mesinPu = getProdiPuBank('teknik-mesin');
    const first = createOfficialExamSession(mesinPck, mesinPu, {}, { rng: createSeededRng(10) });
    const mastery: Record<string, MasteryRecord> = {};
    for (const slot of first.slots) {
      mastery[slot.question.id] = {
        seenCount: 1,
        correctCount: 1,
        wrongCount: 0,
        lastAttemptAt: 1000,
        lastCorrect: true,
      };
    }

    const second = createOfficialExamSession(mesinPck, mesinPu, mastery, {
      rng: createSeededRng(99),
    });
    const firstIds = new Set(first.slots.map((s) => s.question.id));
    const overlap = second.slots.filter((s) => firstIds.has(s.question.id));
    expect(overlap.length).toBe(0);
  });

  it('mengurutkan soal salah lebih dulu daripada soal yang sudah dikuasai saat melakukan prioritas', () => {
    const subset = ALL_QUESTIONS.slice(0, 6);
    const mastery: Record<string, MasteryRecord> = {
      [subset[0].id]: { seenCount: 1, correctCount: 1, wrongCount: 0, lastAttemptAt: 1, lastCorrect: true },
      [subset[1].id]: { seenCount: 1, correctCount: 0, wrongCount: 1, lastAttemptAt: 1, lastCorrect: false },
    };
    const ordered = prioritizeQuestions(subset, mastery, createSeededRng(7));
    const orderedIds = ordered.map((q) => q.id);
    expect(orderedIds.indexOf(subset[1].id)).toBe(4);
    expect(orderedIds.indexOf(subset[0].id)).toBe(5);
  });

  it('menjaga teks jawaban benar tetap akurat setelah opsi diacak (PG, PGK_MCMA, PGK_KATEGORI)', () => {
    const pgQ = ALL_QUESTIONS.find((q) => q.type === 'PG')!;
    const mcmaQ = ALL_QUESTIONS.find((q) => q.type === 'PGK_MCMA')!;
    const katQ = ALL_QUESTIONS.find((q) => q.type === 'PGK_KATEGORI')!;

    const pgSlot = buildShuffledSlot(pgQ, createSeededRng(123), true);
    if (pgQ.type === 'PG' && pgSlot.question.type === 'PG') {
      expect(pgSlot.question.options[pgSlot.question.answer]).toBe(pgQ.options[pgQ.answer]);
    }

    const mcmaSlot = buildShuffledSlot(mcmaQ, createSeededRng(456), true);
    if (mcmaQ.type === 'PGK_MCMA' && mcmaSlot.question.type === 'PGK_MCMA') {
      const origTexts = new Set(mcmaQ.answer.map((i) => mcmaQ.options[i]));
      const shufTexts = new Set(
        mcmaSlot.question.answer.map((i) =>
          mcmaSlot.question.type === 'PGK_MCMA' ? mcmaSlot.question.options[i] : ''
        )
      );
      expect(shufTexts).toEqual(origTexts);
    }

    const katSlot = buildShuffledSlot(katQ, createSeededRng(789), true);
    if (katQ.type === 'PGK_KATEGORI' && katSlot.question.type === 'PGK_KATEGORI') {
      for (const st of katSlot.question.statements) {
        const orig = katQ.statements.find((o) => o.text === st.text)!;
        expect(st.answer).toBe(orig.answer);
      }
    }
  });
});

describe('Scoring Engine & Drill Builder Multi-Prodi', () => {
  it('menilai tepat untuk PG, PGK_KATEGORI, dan PGK_MCMA beserta agregasi Rumpun & Subkompetensi', () => {
    const session = createDrillSession(
      ALL_QUESTIONS,
      { prodiFilter: 'teknik-mesin', bank: 'PCK', topic: 'ALL', type: 'ALL', count: 12, instantFeedback: false },
      {},
      { rng: createSeededRng(2026) }
    );
    expect(session.slots.length).toBe(12);

    for (let i = 0; i < session.slots.length; i++) {
      const q = session.slots[i].question;
      if (i < 6) {
        if (q.type === 'PG') {
          session.answers[q.id] = { type: 'PG', selected: q.answer };
        } else if (q.type === 'PGK_MCMA') {
          session.answers[q.id] = { type: 'PGK_MCMA', selected: [...q.answer] };
        } else {
          session.answers[q.id] = {
            type: 'PGK_KATEGORI',
            selections: q.statements.map((s) => s.answer),
          };
        }
      }
    }

    const res = gradeSession(session, session.createdAt + 600_000);
    expect(res.strictCorrectCount).toBe(6);
    expect(res.strictScore).toBe(50);
    expect(res.missedIds.length).toBe(6);
    expect(res.pckTotal).toBe(12);
    expect(res.puTotal).toBe(0);

    const mcma = ALL_QUESTIONS.find((q) => q.type === 'PGK_MCMA')!;
    if (mcma.type === 'PGK_MCMA') {
      const partialEval = evaluateQuestion(mcma, {
        type: 'PGK_MCMA',
        selected: [mcma.answer[0]],
      });
      expect(partialEval.strictCorrect).toBe(false);
      expect(partialEval.partialRatio).toBeGreaterThan(0);
    }
  });

  it('memfilter dan membangun sesi drill khusus subkompetensi & prodi terpilih (P.6 · Matematika)', () => {
    const mathP6Pool = filterDrillQuestions(ALL_QUESTIONS, {
      prodiFilter: 'matematika',
      bank: 'ALL',
      topic: 'ALL',
      subkompetensi: 'P.6',
      type: 'ALL',
    });
    expect(mathP6Pool.length).toBeGreaterThan(15);
    expect(mathP6Pool.every((q) => q.subkompetensi === 'P.6' && questionMatchesProdi(q, 'matematika'))).toBe(true);

    const subSession = createDrillSession(
      ALL_QUESTIONS,
      { prodiFilter: 'matematika', bank: 'ALL', topic: 'ALL', subkompetensi: 'P.6', type: 'ALL', count: 8, instantFeedback: true },
      {},
      { prodiLabel: 'Matematika', rng: createSeededRng(314) }
    );
    expect(subSession.slots.length).toBe(8);
    expect(subSession.slots.every((s) => s.question.subkompetensi === 'P.6')).toBe(true);
  });

  it('membangun seluruh 14 Paket Tryout SIAPPPG tanpa bayar dan memisahkan Teknik Mesin Paket A vs Paket B tanpa soal ganda', () => {
    expect(PAKET_CATALOG.length).toBe(14);
    for (const paket of PAKET_CATALOG) {
      const session = createSessionFromPaket(paket, {}, { rng: createSeededRng(77) });
      expect(session.slots.length).toBe(paket.questionCount);
      if (paket.group === 'bidang-studi') {
        expect(
          session.slots.every((s) => questionMatchesProdi(s.question, paket.prodiId))
        ).toBe(true);
      }
    }

    const pakA = createSessionFromPaket(getPaketById('teknik-mesin-paket-a')!, {});
    const pakB = createSessionFromPaket(getPaketById('teknik-mesin-paket-b')!, {});
    const idsA = new Set(pakA.slots.map((s) => s.question.id));
    const overlap = pakB.slots.filter((s) => idsA.has(s.question.id));
    expect(overlap.length).toBe(0);
  });
});
