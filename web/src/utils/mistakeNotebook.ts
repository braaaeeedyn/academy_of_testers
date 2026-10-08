// Mistake Notebook scheduling: a small Leitner-style spaced-repetition queue. Pure, with no runtime
// imports, so the acceptance script can load it directly.
//
// Entries hold references only (source, subject, question id), never question content or answers:
// AP content is resolved from the bundled bank at review time and SAT content from the server.

export type MistakeSource = 'ap' | 'sat'

export interface MistakeEntry {
  key: string
  source: MistakeSource
  subject: string
  questionId: string
  /** Index into REVIEW_INTERVALS_DAYS of the interval just scheduled. */
  box: number
  /** Epoch ms when the entry is next due. */
  dueAt: number
  addedAt: number
  lastMissedAt: number
  misses: number
}

export interface MistakeRef {
  source: MistakeSource
  subject: string
  questionId: string | number
}

export const REVIEW_INTERVALS_DAYS = [1, 3, 7, 14, 30]
export const DAY_MS = 86_400_000

const LAST_BOX = REVIEW_INTERVALS_DAYS.length - 1

export function mistakeKey(source: MistakeSource, subject: string, questionId: string | number): string {
  return source === 'sat' ? `sat:${questionId}` : `ap:${subject}:${questionId}`
}

/** Adds a miss, or resets an existing entry to the first box. Never duplicates; never mutates. */
export function recordMiss(entries: MistakeEntry[], miss: MistakeRef, now: number): MistakeEntry[] {
  const key = mistakeKey(miss.source, miss.subject, miss.questionId)
  const existing = entries.find((e) => e.key === key)
  if (existing) {
    return entries.map((e) =>
      e.key === key
        ? { ...e, box: 0, dueAt: now + REVIEW_INTERVALS_DAYS[0] * DAY_MS, lastMissedAt: now, misses: e.misses + 1 }
        : e,
    )
  }
  const entry: MistakeEntry = {
    key,
    source: miss.source,
    subject: miss.subject,
    questionId: String(miss.questionId),
    box: 0,
    dueAt: now + REVIEW_INTERVALS_DAYS[0] * DAY_MS,
    addedAt: now,
    lastMissedAt: now,
    misses: 1,
  }
  return [...entries, entry]
}

/**
 * Folds one review into the schedule. Correct moves the entry up a box (a correct answer in the
 * last box graduates it out of the notebook); wrong sends it back to box 0. Never mutates.
 */
export function recordReview(entries: MistakeEntry[], key: string, correct: boolean, now: number): MistakeEntry[] {
  const existing = entries.find((e) => e.key === key)
  if (!existing) return entries.slice()
  if (correct && existing.box >= LAST_BOX) return entries.filter((e) => e.key !== key)
  return entries.map((e) => {
    if (e.key !== key) return e
    if (correct) {
      const box = e.box + 1
      return { ...e, box, dueAt: now + REVIEW_INTERVALS_DAYS[box] * DAY_MS }
    }
    return { ...e, box: 0, dueAt: now + REVIEW_INTERVALS_DAYS[0] * DAY_MS, lastMissedAt: now, misses: e.misses + 1 }
  })
}

/** Entries due at `now`, soonest first. */
export function dueEntries(entries: MistakeEntry[], now: number): MistakeEntry[] {
  return entries.filter((e) => e.dueAt <= now).sort((a, b) => a.dueAt - b.dueAt)
}
