import type { CardMastery } from '../types/flashcards'
import type { SubjectUnitBank } from '../data/unitBank/types'
import { REQUIRED_TOTAL, REQUIRED_STREAK } from './mastery'

/** A class's mastery, bucketed into tiers by how many times each question has been answered right. */
export interface ClassMastery {
  /** Total questions in the class's practice bank. */
  total: number
  /** Fully mastered: 3 correct, 2 in a row. */
  mastered: number
  /** Proficient: 2 correct (not yet mastered). */
  proficient: number
  /** Approaching: 1 correct (not yet proficient). */
  approaching: number
  /** mastered / total, in [0,1]; the primary rating. */
  pct: number
}

/**
 * The /progress card key for a unit-practice question. The subject is baked in because bank
 * question ids (e.g. "q-u1-easy-1") repeat across subjects, and progress rows are keyed per user
 * by card key. Both the recorder (UnitPractice) and the reader (planner) must agree on this shape.
 */
export function practiceCardKey(subjectId: number, questionId: string): string {
  return `practice:${subjectId}:${questionId}`
}

export type MasteryTier = 'mastered' | 'proficient' | 'approaching' | 'none'

/** Which tier a single question's progress falls into. */
export function tierOf(row: CardMastery | undefined): MasteryTier {
  if (!row) return 'none'
  if (row.mastered) return 'mastered'
  if (row.correctTotal >= 2) return 'proficient'
  if (row.correctTotal >= 1) return 'approaching'
  return 'none'
}

/**
 * How many correct answers *in a row* are still needed to master a question, given its current
 * progress. Mastery needs 3 correct total AND 2 in a row, so from (correct, streak) that's the
 * larger of the two remaining requirements. 0 once mastered.
 */
export function correctToMaster(row: CardMastery | undefined): number {
  if (row?.mastered) return 0
  const c = row?.correctTotal ?? 0
  const s = row?.correctStreak ?? 0
  return Math.max(REQUIRED_TOTAL - c, REQUIRED_STREAK - s, 0)
}

/**
 * Bucket a class's practice-bank questions into tiers using the user's /progress rows. Rows for
 * other surfaces (e.g. flashcards) share the subject but use different card keys, so intersecting
 * with the bank's question ids keeps this to just the practice questions.
 */
export function computeClassMastery(
  bank: SubjectUnitBank,
  progress: CardMastery[],
  subjectId: number
): ClassMastery {
  const byKey = new Map(progress.map((p) => [p.cardKey, p]))
  let total = 0
  let mastered = 0
  let proficient = 0
  let approaching = 0
  for (const unit of bank.units) {
    for (const q of unit.questions) {
      total++
      switch (tierOf(byKey.get(practiceCardKey(subjectId, q.id)))) {
        case 'mastered':
          mastered++
          break
        case 'proficient':
          proficient++
          break
        case 'approaching':
          approaching++
          break
      }
    }
  }
  return { total, mastered, proficient, approaching, pct: total === 0 ? 0 : mastered / total }
}

/** Compact label for chart axes/bars: drop the "AP " prefix and shorten a few long names. */
export function shortClassLabel(name: string): string {
  let s = name.replace(/^AP\s+/, '')
  s = s
    .replace(/Computer Science/i, 'Comp Sci')
    .replace(/Environmental Science/i, 'Env Sci')
    .replace(/United States/i, 'US')
    .replace(/Comparative Government.*/i, 'Comp Gov')
    .replace(/Government and Politics/i, 'Gov')
    .replace(/English Language.*/i, 'English Lang')
    .replace(/English Literature.*/i, 'English Lit')
    .replace(/Human Geography/i, 'Human Geo')
  return s
}
