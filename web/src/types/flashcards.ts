/** A card the signed-in user wrote, persisted server-side against their account. */
export interface Flashcard {
  id: number
  subjectId: number
  question: string
  answer: string
  createdAt: string
  updatedAt: string
}

/** A card derived from the practice problem bank. Available to everyone, never persisted. */
export interface PremadeFlashcard {
  id: string
  question: string
  answer: string
  explanation: string
  unitNumber: number
  unitTitle: string
}

/** Points at either a user's flashcard or a premade card — never both. */
export interface StackCardRef {
  flashcardId: number | null
  premadeId: string | null
}

/** A named subset of a subject's cards, mixing premade and user-written ones. */
export interface Stack {
  id: number
  subjectId: number
  name: string
  cards: StackCardRef[]
  createdAt: string
  updatedAt: string
}

/** Mastery state for one card, as tracked by training mode. */
export interface CardMastery {
  cardKey: string
  attempts: number
  correctTotal: number
  correctStreak: number
  mastered: boolean
}

/**
 * The shape training mode and the stack picker work in: a premade card and a
 * user card flattened into one type, addressed by a stable `key`.
 */
export interface StudyCard {
  key: string
  source: 'premade' | 'user'
  question: string
  answer: string
  explanation?: string
  eyebrow: string
}
