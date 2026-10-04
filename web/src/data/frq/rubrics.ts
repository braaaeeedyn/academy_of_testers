import type { FrqRubricRow } from './types'

/** Point-per-part FRQ rubric (task-scored questions). Returns fresh rows so callers can't share them. */
export function pointBased(
  parts: { name: string; maxPoints: number; criteria: string }[]
): FrqRubricRow[] {
  return parts.map((p) => ({ ...p }))
}
