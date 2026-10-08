// Builds the "Explain my mistake" message that is prefilled into Testy. Pure, with no runtime
// imports, so the acceptance script can load it directly.

/** Mirrors the server's per-message cap (AiChatService.MAX_MESSAGE_LENGTH / TESTY_MAX_CHARS). */
export const EXPLAIN_MAX_CHARS = 1000

export interface ExplainMistakeInput {
  subject: string
  question: string
  options: string[]
  selectedIndex: number
  correctIndex: number
  explanation?: string
}

const ELLIPSIS = '…'
/** Below this, an option is not shortened further. */
const MIN_OPTION_CHARS = 20
/** Below this, the question is not shortened further. */
const MIN_QUESTION_CHARS = 40

function letter(i: number): string {
  return i >= 0 && i < 26 ? String.fromCharCode(65 + i) : '?'
}

function collapse(s: string): string {
  return s.replace(/\s+/g, ' ').trim()
}

function clip(s: string, max: number): string {
  if (max <= 0) return ''
  if (s.length <= max) return s
  if (max === 1) return ELLIPSIS
  return s.slice(0, max - 1).trimEnd() + ELLIPSIS
}

function render(
  subject: string,
  question: string,
  options: string[],
  chosen: string,
  correct: string,
  explanation: string,
): string {
  const lines = [`Explain my mistake (${subject}).`, '', `Question: ${question}`]
  options.forEach((o, i) => lines.push(`${letter(i)}) ${o}`))
  lines.push('', `I chose ${chosen}. The correct answer is ${correct}.`)
  if (explanation) lines.push(`Given explanation: ${explanation}`)
  lines.push('', 'Please explain why my answer is wrong and what to watch for next time.')
  return lines.join('\n')
}

export function buildExplainMistakePrompt(i: ExplainMistakeInput): string {
  const chosen = letter(i.selectedIndex)
  const correct = letter(i.correctIndex)
  let subject = clip(collapse(i.subject), 60)
  let question = collapse(i.question)
  let options = i.options.map(collapse)
  let explanation = collapse(i.explanation ?? '')

  const size = () => render(subject, question, options, chosen, correct, explanation).length
  let over = size() - EXPLAIN_MAX_CHARS

  // 1. Shorten (then drop) the explanation.
  if (over > 0 && explanation) {
    const keep = explanation.length - over
    explanation = keep >= MIN_OPTION_CHARS ? clip(explanation, keep) : ''
    over = size() - EXPLAIN_MAX_CHARS
  }

  // 2. Shorten each option, longest first, down to a floor.
  while (over > 0) {
    let longest = -1
    for (let k = 0; k < options.length; k++) {
      if (options[k].length > MIN_OPTION_CHARS && (longest < 0 || options[k].length > options[longest].length)) {
        longest = k
      }
    }
    if (longest < 0) break
    const target = Math.max(MIN_OPTION_CHARS, options[longest].length - over)
    options = options.map((o, k) => (k === longest ? clip(o, target) : o))
    over = size() - EXPLAIN_MAX_CHARS
  }

  // 3. Shorten the question.
  if (over > 0) {
    question = clip(question, Math.max(MIN_QUESTION_CHARS, question.length - over))
    over = size() - EXPLAIN_MAX_CHARS
  }

  // 4. Last resort (pathological inputs, e.g. dozens of options): hard floors go too.
  if (over > 0) {
    options = options.map((o) => clip(o, 8))
    question = clip(question, 16)
    subject = clip(subject, 20)
    over = size() - EXPLAIN_MAX_CHARS
  }
  if (over > 0) {
    // Keep the chosen and correct options, drop the rest; the letters stay intact.
    options = options.map((o, k) => (k === i.selectedIndex || k === i.correctIndex ? o : ''))
  }

  return render(subject, question, options, chosen, correct, explanation)
}
