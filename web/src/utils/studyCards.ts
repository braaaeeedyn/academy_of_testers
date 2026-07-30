import type { Flashcard, PremadeFlashcard, Stack, StudyCard } from '../types/flashcards'

/** Fisher-Yates, on a copy. */
export function shuffle<T>(items: T[]): T[] {
  const next = [...items]
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

/** Key shapes are validated server-side; keep these two in sync with CardProgressController. */
export function premadeKey(premadeId: string): string {
  return `premade:${premadeId}`
}

export function userKey(flashcardId: number): string {
  return `user:${flashcardId}`
}

export function premadeToStudyCard(card: PremadeFlashcard): StudyCard {
  return {
    key: premadeKey(card.id),
    source: 'premade',
    question: card.question,
    answer: card.answer,
    explanation: card.explanation,
    eyebrow: `Unit ${card.unitNumber} · ${card.unitTitle}`,
  }
}

export function userToStudyCard(card: Flashcard): StudyCard {
  return {
    key: userKey(card.id),
    source: 'user',
    question: card.question,
    answer: card.answer,
    eyebrow: 'Your card',
  }
}

/** The full pool for a subject: every premade card plus every card the user wrote. */
export function buildStudyCards(premade: PremadeFlashcard[], mine: Flashcard[]): StudyCard[] {
  return [...premade.map(premadeToStudyCard), ...mine.map(userToStudyCard)]
}

/**
 * Resolves a stack's stored refs against the current card pool. Refs that no
 * longer resolve — a premade card dropped from the bank, say — are skipped
 * rather than rendered as an empty card.
 */
export function resolveStack(stack: Stack, pool: StudyCard[]): StudyCard[] {
  const byKey = new Map(pool.map((card) => [card.key, card]))
  return stack.cards
    .map((ref) =>
      ref.flashcardId != null ? byKey.get(userKey(ref.flashcardId)) : byKey.get(premadeKey(ref.premadeId!))
    )
    .filter((card): card is StudyCard => card !== undefined)
}
