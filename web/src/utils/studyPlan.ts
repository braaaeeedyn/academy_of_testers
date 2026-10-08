// Week-by-week study plans. Pure, with no runtime imports, so the acceptance script can load it
// directly. Dates are ISO yyyy-mm-dd strings and all arithmetic is in UTC, so a plan never shifts
// with the device's time zone or daylight-saving changes.

export type PlanWeekKind = 'learn' | 'review' | 'mock' | 'final'

export interface PlanTopic {
  id: string
  label: string
}

export interface PlanWeek {
  index: number
  startIso: string
  kind: PlanWeekKind
  topics: PlanTopic[]
  focus: string
}

const DAY_MS = 86_400_000

/** Epoch ms at UTC midnight for an ISO date, or NaN if it isn't one. */
export function isoToUtcMs(iso: string): number {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!m) return NaN
  return Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]))
}

export function utcMsToIso(ms: number): string {
  return new Date(ms).toISOString().slice(0, 10)
}

/** The calendar day a local Date falls on, as ISO yyyy-mm-dd (the clock is the caller's). */
export function localDateToIso(d: Date): string {
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

export function isValidIso(iso: string): boolean {
  return !Number.isNaN(isoToUtcMs(iso))
}

/** Whole or partial weeks from today until the exam; 0 when the exam is today or past. */
export function weeksUntil(examIso: string, todayIso: string): number {
  const exam = isoToUtcMs(examIso)
  const today = isoToUtcMs(todayIso)
  if (Number.isNaN(exam) || Number.isNaN(today)) return 0
  const days = Math.round((exam - today) / DAY_MS)
  return days <= 0 ? 0 : Math.ceil(days / 7)
}

/** Splits items in order into `groups` contiguous groups whose sizes differ by at most 1, larger first. */
function chunk<T>(items: T[], groups: number): T[][] {
  const out: T[][] = []
  const base = Math.floor(items.length / groups)
  const extra = items.length % groups
  let at = 0
  for (let g = 0; g < groups; g++) {
    const size = base + (g < extra ? 1 : 0)
    out.push(items.slice(at, at + size))
    at += size
  }
  return out
}

function labels(topics: PlanTopic[]): string {
  return topics.map((t) => t.label).join(', ')
}

/**
 * Builds one entry per week from today to the exam. Topics are taken in the caller's order (its
 * priority order). The last week is a final review; with six or more weeks the second-to-last
 * full week before it is a full mock exam; every other week teaches topics, with any spare weeks
 * becoming mixed review.
 */
export function buildWeekPlan(examIso: string, todayIso: string, topics: PlanTopic[]): PlanWeek[] {
  const w = weeksUntil(examIso, todayIso)
  if (w === 0) return []
  const today = isoToUtcMs(todayIso)
  const start = (i: number) => utcMsToIso(today + 7 * i * DAY_MS)

  const kinds: PlanWeekKind[] = new Array(w).fill('learn')
  kinds[w - 1] = 'final'
  if (w >= 6) kinds[w - 2] = 'mock'
  const learnIdx = kinds.map((k, i) => (k === 'learn' ? i : -1)).filter((i) => i >= 0)

  const assigned = new Map<number, PlanTopic[]>()
  if (learnIdx.length > 0 && topics.length > 0) {
    if (learnIdx.length >= topics.length) {
      topics.forEach((t, k) => assigned.set(learnIdx[k], [t]))
      learnIdx.slice(topics.length).forEach((i) => (kinds[i] = 'review'))
    } else {
      chunk(topics, learnIdx.length).forEach((group, k) => assigned.set(learnIdx[k], group))
    }
  } else {
    learnIdx.forEach((i) => (kinds[i] = 'review'))
  }

  return kinds.map((kind, i) => {
    let weekTopics: PlanTopic[]
    let focus: string
    switch (kind) {
      case 'learn':
        weekTopics = assigned.get(i) ?? []
        focus = `Learn and practice: ${labels(weekTopics)}`
        break
      case 'review':
        weekTopics = []
        focus = 'Mixed review of earlier topics, plus your Mistake Notebook'
        break
      case 'mock':
        weekTopics = []
        focus = 'Take a full timed practice exam, then review every miss'
        break
      default:
        weekTopics = topics.slice()
        focus =
          w === 1
            ? 'Light review of every topic; rest well before test day'
            : 'Final review: weakest topics, your Mistake Notebook, and rest before test day'
    }
    return { index: i, startIso: start(i), kind, topics: weekTopics, focus }
  })
}
