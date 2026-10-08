// localStorage persistence for the Mistake Notebook. Only the output of recordMiss / recordReview
// is ever written: references and schedule, never question content or answers.
import { recordMiss, recordReview, type MistakeEntry, type MistakeRef } from './mistakeNotebook'

const STORAGE_KEY = 'aot.mistakeNotebook.v1'

const ENTRY_FIELDS: (keyof MistakeEntry)[] = [
  'key',
  'source',
  'subject',
  'questionId',
  'box',
  'dueAt',
  'addedAt',
  'lastMissedAt',
  'misses',
]

/** Copies only the reference fields, so nothing else can leak into storage. */
function sanitize(e: MistakeEntry): MistakeEntry {
  const out = {} as Record<string, unknown>
  for (const f of ENTRY_FIELDS) out[f] = e[f]
  return out as unknown as MistakeEntry
}

function isEntry(v: unknown): v is MistakeEntry {
  if (!v || typeof v !== 'object') return false
  const e = v as Record<string, unknown>
  return (
    typeof e.key === 'string' &&
    (e.source === 'ap' || e.source === 'sat') &&
    typeof e.subject === 'string' &&
    typeof e.questionId === 'string' &&
    typeof e.box === 'number' &&
    typeof e.dueAt === 'number'
  )
}

export function loadNotebook(): MistakeEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter(isEntry).map(sanitize) : []
  } catch {
    return []
  }
}

export function saveNotebook(entries: MistakeEntry[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries.map(sanitize)))
  } catch {
    // Storage blocked or full: the notebook just isn't persisted on this device.
  }
}

/** Records a miss (adds or resets the entry). Safe to call from any answer handler. */
export function addMistake(miss: MistakeRef): void {
  try {
    saveNotebook(recordMiss(loadNotebook(), miss, Date.now()))
  } catch {
    // never let notebook bookkeeping break a quiz
  }
}

/** Folds a review result into the stored notebook and returns the new entries. */
export function reviewMistake(key: string, correct: boolean): MistakeEntry[] {
  const next = recordReview(loadNotebook(), key, correct, Date.now())
  saveNotebook(next)
  return next
}

/** Removes an entry (e.g. its question no longer exists or belongs to another account). */
export function dropMistake(key: string): MistakeEntry[] {
  const next = loadNotebook().filter((e) => e.key !== key)
  saveNotebook(next)
  return next
}
