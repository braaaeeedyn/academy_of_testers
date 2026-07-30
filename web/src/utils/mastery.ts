import type { CardMastery } from '../types/flashcards'

/** Correct answers needed in total before a card is retired. Mirrors CardProgress.java. */
export const REQUIRED_TOTAL = 3

/** Consecutive correct answers needed before a card is retired. Mirrors CardProgress.java. */
export const REQUIRED_STREAK = 2

export function emptyMastery(cardKey: string): CardMastery {
  return { cardKey, attempts: 0, correctTotal: 0, correctStreak: 0, mastered: false }
}

/**
 * Folds one self-graded attempt into a card's mastery state. A miss resets the
 * streak but never the running total. Mastery is sticky once earned.
 *
 * The server recomputes this authoritatively; this local copy exists so the UI
 * can respond immediately and so signed-out users can still train a session.
 */
export function applyAttempt(prev: CardMastery, correct: boolean): CardMastery {
  const correctTotal = correct ? prev.correctTotal + 1 : prev.correctTotal
  const correctStreak = correct ? prev.correctStreak + 1 : 0
  return {
    cardKey: prev.cardKey,
    attempts: prev.attempts + 1,
    correctTotal,
    correctStreak,
    mastered:
      prev.mastered || (correctTotal >= REQUIRED_TOTAL && correctStreak >= REQUIRED_STREAK),
  }
}
