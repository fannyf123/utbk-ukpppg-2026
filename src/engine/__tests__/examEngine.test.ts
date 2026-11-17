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
import { JUKNIS_SUBCOMPETENCIES } from '../../data/juknisReference';
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
  it('memenuhi kapasitas di atas minimum 1.200 butir lengkap dengan ketiga bentuk soal BPPP', () => {
    const summary = getBankSummary('ALL_ARCHIVE');
    expect(summary.total).toBeGreaterThanOrEqual(1200);
    expect(summary.byType.PG).toBeGreaterThanOrEqual(450);
    expect(summary.byType.PGK_KATEGORI).toBeGreaterThanOrEqual(170);
    expect(summary.byType.PGK_MCMA).toBeGreaterThanOrEqual(125);
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

  it('menjamin isolasi prodi pada seluruh 15 Prodi agar tidak terjadi kebocoran soal lintas jurusan', () => {
    expect(PRODI_CONFIGS.length).toBe(15);

    // 6 Prodi penuh (termasuk DKV SMK & IPA) harus memiliki >= 50 PCK + >= 240 PU
    const fullProdis: ProdiId[] = [
      'teknik-mesin',
      'dkv',
      'pgsd',
      'matematika',
      'bahasa-indonesia',
      'ipa',
    ];
    for (const pid of fullProdis) {
      expect(getProdiPckBank(pid).length).toBeGreaterThanOrEqual(50);
      expect(getProdiPuBank(pid).length).toBeGreaterThanOrEqual(240);
    }

    // 8 Prodi baru & vokasi lainnya harus memiliki pool PCK terisolasi >= 24 + >= 240 PU
    const extendedProdis: ProdiId[] = [
      'tata-boga',
      'akuntansi',
      'smk-vokasi',
      'bahasa-inggris',
      'ips',
      'pjok',
      'ppkn',
      'pai',
    ];
    for (const pid of extendedProdis) {
      expect(getProdiPckBank(pid).length).toBeGreaterThanOrEqual(24);
      expect(getProdiPuBank(pid).length).toBeGreaterThanOrEqual(240);
    }

    // IPA memiliki cakupan empiris PF.2/PF.3 Fisika/Biologi/Kimia >= 20 butir
    const ipaPf23 = getProdiPckBank('ipa').filter(
      (q) => q.subkompetensi === 'PF.2' || q.subkompetensi === 'PF.3'
    );
    expect(ipaPf23.length).toBeGreaterThanOrEqual(20);

    // DKV memiliki >= 75 PCK murni DKV, terpisah bersih dari Teknik Mesin & kejuruan non-DKV
    const dkvPck = getProdiPckBank('dkv');
    expect(dkvPck.length).toBeGreaterThanOrEqual(75);
    const dkvPool = getProdiQuestions('dkv');
    expect(dkvPool.some((q) => q.id.startsWith('pck-gt-'))).toBe(false); // Teknik Mesin
    expect(dkvPool.some((q) => q.id === 'ust-setuju-02')).toBe(false); // Tata Boga
    expect(dkvPool.some((q) => q.id === 'ust-setuju-05')).toBe(false); // TKJ
    expect(dkvPool.some((q) => q.id === 'ust-setuju-07')).toBe(false); // TKR
    expect(dkvPool.some((q) => q.id === 'ust-setuju-06')).toBe(true); // SJT DKV
    expect(dkvPool.some((q) => q.id === 'ust-dwi-ppdp-01')).toBe(true); // PPDP DKV
    expect(dkvPool.some((q) => q.id === 'pck-dkv-01')).toBe(true);

    // Seluruh Prodi SMK (Teknik Mesin, DKV, Tata Boga, Akuntansi, SMK Vokasi) tidak saling tumpang tindih PCK
    const smkProdis: ProdiId[] = ['teknik-mesin', 'dkv', 'tata-boga', 'akuntansi', 'smk-vokasi'];
    for (let i = 0; i < smkProdis.length; i++) {
      const idsA = new Set(getProdiPckBank(smkProdis[i]).map((q) => q.id));
      for (let j = i + 1; j < smkProdis.length; j++) {
        const idsB = getProdiPckBank(smkProdis[j]).map((q) => q.id);
        expect(idsB.some((id) => idsA.has(id))).toBe(false);
      }
    }

    // Teknik Mesin TIDAK boleh kemasukan IPA SMP, DKV, B.Ind SMA, atau Paket 3 PGSD/4 Mat/5 B.Ind
    const mesinPool = getProdiQuestions('teknik-mesin');
    expect(mesinPool.some((q) => q.id.startsWith('ust-ipa-'))).toBe(false);
    expect(mesinPool.some((q) => q.id.startsWith('ust-dwi-'))).toBe(false);
    expect(mesinPool.some((q) => q.id.startsWith('pck-dkv-'))).toBe(false);
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
    expect(umumPool.length).toBeGreaterThanOrEqual(235);
    expect(umumPool.every((q) => q.prodiScope === 'UMUM')).toBe(true);
  });
});

describe('Randomizer & Simulasi Multi-Prodi', () => {
  it('membangun Simulasi Resmi penuh 80 soal (50 PCK + 30 PU, 150 menit) untuk SELURUH 14 Prodi bidang studi plus Umum Murni 30 soal', () => {
    const bidangStudiProdis: ProdiId[] = PRODI_CONFIGS.map((p) => p.id).filter(
      (id): id is ProdiId => id !== 'umum'
    );
    expect(bidangStudiProdis.length).toBe(14);

    for (const pid of bidangStudiProdis) {
      const pckPool = getProdiPckBank(pid);
      // Pastikan setiap Prodi memiliki cadangan > 50 soal agar randomizer selalu bervariasi antar-percobaan
      expect(pckPool.length).toBeGreaterThanOrEqual(63);

      const cfg = PRODI_CONFIGS.find((p) => p.id === pid)!;
      const session = createOfficialExamSession(
        pckPool,
        getProdiPuBank(pid),
        {},
        { prodiId: pid, prodiLabel: cfg.shortLabel, rng: createSeededRng(42) }
      );
      expect(session.slots.length).toBe(80);
      expect(session.durationSeconds).toBe(150 * 60);
      expect(session.slots.filter((s) => s.question.bank === 'PCK').length).toBe(50);
      expect(session.slots.filter((s) => s.question.bank === 'PU').length).toBe(30);
      expect(session.slots.every((s) => questionMatchesProdi(s.question, pid))).toBe(true);
      const ids = new Set(session.slots.map((s) => s.question.id));
      expect(ids.size).toBe(80);

      // Verifikasi randomizer menghasilkan kombinasi/urutan berbeda saat tes baru dimulai dengan riwayat mastery
      const mockMastery: Record<string, MasteryRecord> = {};
      for (const s of session.slots.slice(0, 30)) {
        mockMastery[s.question.id] = {
          seenCount: 1,
          correctCount: 1,
          wrongCount: 0,
          lastAttemptAt: 1000,
          lastCorrect: true,
        };
      }
      const nextSession = createOfficialExamSession(
        pckPool,
        getProdiPuBank(pid),
        mockMastery,
        { prodiId: pid, prodiLabel: cfg.shortLabel, rng: createSeededRng(99) }
      );
      const nextIds = new Set(nextSession.slots.map((s) => s.question.id));
      const newFreshQuestions = [...nextIds].filter((id) => !ids.has(id));
      expect(newFreshQuestions.length).toBeGreaterThanOrEqual(15);
    }

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

  it('membangun seluruh 23 Paket Tryout SIAPPPG tanpa bayar, mengunci 17 subkompetensi pada semua paket prodi resmi, dan menguji Paket Fokus Catatan PPG', () => {
    expect(PAKET_CATALOG.length).toBe(23);
    const allSubs = JUKNIS_SUBCOMPETENCIES.map((s) => s.code);

    for (const paket of PAKET_CATALOG) {
      const session = createSessionFromPaket(paket, {}, { rng: createSeededRng(77) });
      expect(session.slots.length).toBe(paket.questionCount);
      if (paket.group === 'bidang-studi') {
        expect(
          session.slots.every((s) => questionMatchesProdi(s.question, paket.prodiId))
        ).toBe(true);
      }
      if (paket.kind === 'prodi-random') {
        const covered = new Set(session.slots.map((s) => s.question.subkompetensi));
        const missing = allSubs.filter((c) => !covered.has(c));
        expect(missing).toEqual([]);
      }
    }

    const catatanPaket = getPaketById('ppg-catatan-fokus')!;
    const catatanSession = createSessionFromPaket(catatanPaket, {}, { rng: createSeededRng(17) });
    expect(catatanSession.slots.length).toBe(80);
    expect(catatanSession.slots.every((s) => s.question.prodiScope === 'UMUM')).toBe(true);
    const catatanHits = catatanSession.slots.filter((s) => s.question.id.startsWith('cat-ppg-'));
    expect(catatanHits.length).toBe(16);

    const pakA = createSessionFromPaket(getPaketById('teknik-mesin-paket-a')!, {});
    const pakB = createSessionFromPaket(getPaketById('teknik-mesin-paket-b')!, {});
    const idsA = new Set(pakA.slots.map((s) => s.question.id));
    const overlap = pakB.slots.filter((s) => idsA.has(s.question.id));
    expect(overlap.length).toBe(0);
  });
});
