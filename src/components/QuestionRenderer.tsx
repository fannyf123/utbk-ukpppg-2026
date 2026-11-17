import { JUKNIS_SUBCOMPETENCIES } from '../data/juknisReference';
import { evaluateQuestion } from '../engine/scoring';
import type { ExamQuestion, UserAnswer } from '../types/exam';

interface QuestionRendererProps {
  question: ExamQuestion;
  index: number;
  total: number;
  answer: UserAnswer;
  isFlagged: boolean;
  showFeedback: boolean;
  canRevealNow?: boolean;
  onChangeAnswer: (next: UserAnswer) => void;
  onRevealNow?: () => void;
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function formatTypeLabel(type: ExamQuestion['type']) {
  if (type === 'PG') return 'PG TUNGGAL';
  if (type === 'PGK_KATEGORI') return 'PGK KATEGORI';
  return 'PGK MCMA';
}

function getCorrectSummaryText(q: ExamQuestion): string {
  if (q.type === 'PG') {
    return `${LETTERS[q.answer] ?? ''}. ${q.options[q.answer]}`;
  }
  if (q.type === 'PGK_MCMA') {
    return q.answer
      .map((i) => `${LETTERS[i] ?? ''}. ${q.options[i]}`)
      .join(' | ');
  }
  return q.statements
    .map((st, idx) => `(${idx + 1}) ${q.categories[st.answer]}`)
    .join(' · ');
}

export function QuestionRenderer({
  question,
  index,
  total,
  answer,
  isFlagged,
  showFeedback,
  canRevealNow = false,
  onChangeAnswer,
  onRevealNow,
}: QuestionRendererProps) {
  const subMeta = JUKNIS_SUBCOMPETENCIES.find((s) => s.code === question.subkompetensi);
  const ev = evaluateQuestion(question, answer);

  const handleToggleMcma = (optIndex: number) => {
    if (showFeedback || answer.type !== 'PGK_MCMA') return;
    const exists = answer.selected.includes(optIndex);
    const next = exists
      ? answer.selected.filter((i) => i !== optIndex)
      : [...answer.selected, optIndex].sort((a, b) => a - b);
    onChangeAnswer({ type: 'PGK_MCMA', selected: next });
  };

  const handleSelectKategori = (rowIdx: number, catVal: 0 | 1) => {
    if (showFeedback || answer.type !== 'PGK_KATEGORI') return;
    const next = [...answer.selections];
    next[rowIdx] = catVal;
    onChangeAnswer({ type: 'PGK_KATEGORI', selections: next });
  };

  return (
    <div>
      <div className="q-header-line">
        <div>
          <span className="q-meta-index">
            Soal {index + 1} / {total}
          </span>
          <span
            className="q-meta-text"
            title={subMeta ? `${subMeta.kompetensi}: ${subMeta.description}` : question.subkompetensi}
          >
            {question.bank === 'PCK' ? 'PCK Teknik Mesin' : 'Pedagogi Umum'} · {question.topic} ·{' '}
            {question.subkompetensi}
            {isFlagged ? ' · [Ragu-Ragu]' : ''}
          </span>
        </div>
        <span className="q-format-tag">{formatTypeLabel(question.type)}</span>
      </div>

      <p className="question-stem">{question.prompt}</p>

      {question.table && question.table.length > 0 && (
        <div className="stem-table-wrap">
          <table className="stem-table">
            <thead>
              <tr>
                {question.table[0].map((cell, ci) => (
                  <th key={ci}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {question.table.slice(1).map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {question.type === 'PG' && answer.type === 'PG' && (
        <div className="options-list" role="radiogroup" aria-label="Pilihan jawaban">
          {question.options.map((optText, i) => {
            const isSelected = answer.selected === i;
            const isAnswer = question.answer === i;
            let stateClass = isSelected ? 'is-selected' : '';
            if (showFeedback) {
              if (isAnswer) stateClass = 'is-correct';
              else if (isSelected) stateClass = 'is-wrong';
            }

            return (
              <button
                key={i}
                type="button"
                role="radio"
                aria-checked={isSelected}
                disabled={showFeedback}
                className={`option-item ${stateClass}`}
                onClick={() => onChangeAnswer({ type: 'PG', selected: i })}
              >
                <span className="option-key">{LETTERS[i]}</span>
                <span>{optText}</span>
              </button>
            );
          })}
        </div>
      )}

      {question.type === 'PGK_MCMA' && answer.type === 'PGK_MCMA' && (
        <div>
          <div className="instruction-strip">
            <span>
              <strong>Pilihan Ganda Kompleks (MCMA):</strong> centang semua pernyataan yang tepat
              (lebih dari satu jawaban benar).
            </span>
            <span className="mono" style={{ fontWeight: 700 }}>
              Dipilih: {answer.selected.length}
            </span>
          </div>
          <div className="options-list" role="group" aria-label="Pilihan ganda kompleks">
            {question.options.map((optText, i) => {
              const isSelected = answer.selected.includes(i);
              const isAnswer = question.answer.includes(i);
              let stateClass = isSelected ? 'is-selected' : '';
              if (showFeedback) {
                if (isAnswer) stateClass = 'is-correct';
                else if (isSelected) stateClass = 'is-wrong';
              }

              return (
                <button
                  key={i}
                  type="button"
                  role="checkbox"
                  aria-checked={isSelected}
                  disabled={showFeedback}
                  className={`option-item ${stateClass}`}
                  onClick={() => handleToggleMcma(i)}
                >
                  <span className="option-key">{isSelected ? '✓' : LETTERS[i]}</span>
                  <span>{optText}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {question.type === 'PGK_KATEGORI' && answer.type === 'PGK_KATEGORI' && (
        <div>
          <div className="instruction-strip">
            <span>
              <strong>PGK Kategori:</strong> tentukan{' '}
              <em>
                {question.categories[0]} / {question.categories[1]}
              </em>{' '}
              untuk setiap pernyataan berikut.
            </span>
            <span className="mono" style={{ fontWeight: 700 }}>
              Terisi: {answer.selections.filter((s) => s !== null).length}/{question.statements.length}
            </span>
          </div>
          <div className="kat-table-wrap">
            {question.statements.map((st, rIdx) => {
              const picked = answer.selections[rIdx];
              return (
                <div key={rIdx} className={`kat-row ${rIdx % 2 === 1 ? 'is-even' : ''}`}>
                  <div className="kat-stmt-text">
                    <span className="mono" style={{ fontWeight: 700, marginRight: '0.45rem' }}>
                      {rIdx + 1}.
                    </span>
                    {st.text}
                  </div>
                  <div
                    className="kat-toggle-group"
                    role="group"
                    aria-label={`Pernyataan ${rIdx + 1}`}
                  >
                    {([0, 1] as const).map((catIdx) => {
                      const isPicked = picked === catIdx;
                      const isRightChoice = st.answer === catIdx;
                      let cls = isPicked ? 'is-selected' : '';
                      if (showFeedback) {
                        if (isRightChoice) cls = 'is-correct';
                        else if (isPicked) cls = 'is-wrong';
                      }

                      return (
                        <button
                          key={catIdx}
                          type="button"
                          disabled={showFeedback}
                          aria-pressed={isPicked}
                          className={`kat-btn ${cls}`}
                          onClick={() => handleSelectKategori(rIdx, catIdx)}
                        >
                          {question.categories[catIdx]}
                        </button>
                      );
                    })}
                  </div>
                  {showFeedback && st.reason && (
                    <div className="kat-row-reason">
                      Kunci <strong>{question.categories[st.answer]}</strong>: {st.reason}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {canRevealNow && !showFeedback && onRevealNow && (
        <div style={{ marginTop: '1.05rem', display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-ink"
            disabled={!ev.isComplete}
            onClick={onRevealNow}
          >
            Periksa Jawaban
          </button>
          {!ev.isComplete && (
            <span style={{ fontSize: '0.84rem', color: 'var(--ink-muted)', alignSelf: 'center' }}>
              {question.type === 'PGK_KATEGORI'
                ? 'Lengkapi seluruh pernyataan terlebih dahulu.'
                : 'Pilih jawaban untuk mengecek.'}
            </span>
          )}
        </div>
      )}

      {showFeedback && (
        <div className={`explanation-box ${ev.strictCorrect ? 'is-correct' : 'is-wrong'}`}>
          <div className="explanation-title">
            {ev.strictCorrect
              ? 'Jawaban Tepat'
              : ev.answered
                ? ev.partialRatio > 0
                  ? `Kurang Tepat (Parsial ${Math.round(ev.partialRatio * 100)}%, skor penuh mewajibkan seluruh bagian tepat)`
                  : 'Belum Tepat'
                : 'Belum Dijawab'}
          </div>
          <div className="correct-key-banner">
            <strong>Kunci Jawaban Tepat:</strong> {getCorrectSummaryText(question)}
          </div>
          <p className="explanation-text">{question.explanation}</p>
          <p
            className="mono"
            style={{
              margin: '0.55rem 0 0',
              fontSize: '0.74rem',
              color: 'var(--ink-muted)',
            }}
          >
            Sumber: {question.source} · Subkompetensi {question.subkompetensi}
          </p>
        </div>
      )}
    </div>
  );
}
