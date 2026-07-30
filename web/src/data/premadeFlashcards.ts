import { getUnitBank } from './unitBank/lookup'
import type { BankUnit, UnitQuestion } from './unitBank/types'
import type { PremadeFlashcard } from '../types/flashcards'

/** Cards per subject. Every subject's practice bank comfortably exceeds this. */
const CARDS_PER_SUBJECT = 20

const DIFFICULTY_RANK: Record<string, number> = { easy: 0, medium: 1, hard: 2 }

/**
 * Flattens a unit into a single draw order: easiest questions first, so a
 * truncated deck still leads with the fundamentals. Untagged questions sort last.
 */
function unitDrawOrder(unit: BankUnit): UnitQuestion[] {
  return unit.questions
    .slice()
    .sort((a, b) => (DIFFICULTY_RANK[a.difficulty ?? ''] ?? 3) - (DIFFICULTY_RANK[b.difficulty ?? ''] ?? 3))
}

/**
 * Builds a deck from the subject's practice bank. Questions are drawn
 * round-robin across units so a 20-card deck spans the whole course rather
 * than exhausting Unit 1. The result is deterministic — card ids stay stable
 * across renders and reloads.
 */
export function getPremadeFlashcardsBySubjectName(subjectName: string): PremadeFlashcard[] {
  const bank = getUnitBank(subjectName)
  if (!bank) return []

  const queues = bank.units.map(unitDrawOrder)
  const deck: PremadeFlashcard[] = []

  const deepest = Math.max(0, ...queues.map((queue) => queue.length))
  for (let depth = 0; depth < deepest && deck.length < CARDS_PER_SUBJECT; depth++) {
    for (let u = 0; u < queues.length && deck.length < CARDS_PER_SUBJECT; u++) {
      const question = queues[u][depth]
      if (!question) continue

      const unit = bank.units[u]
      deck.push({
        id: `${bank.slug}-u${unit.unitNumber}-${question.id}`,
        question: question.question,
        answer: question.options[question.correctAnswer],
        explanation: question.explanation,
        unitNumber: unit.unitNumber,
        unitTitle: unit.title,
      })
    }
  }

  return deck
}
