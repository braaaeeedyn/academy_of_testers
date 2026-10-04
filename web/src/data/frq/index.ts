import type { SubjectFrqSet } from './types'
import { AP_CS_PRINCIPLES_FRQ } from './computerScience'
import { AP_MUSIC_THEORY_FRQ } from './arts'
import { AP_RESEARCH_FRQ } from './capstone'
import { RELEASED_FRQ_COUNTS, RELEASED_FRQ_LOADERS } from './released/manifest'

export type {
  SubjectFrqSet,
  FrqPrompt,
  FrqRubricRow,
  ReleasedFrqSet,
  ReleasedFrqQuestion,
  ReleasedFrqExample,
} from './types'

/**
 * Hand-written practice prompts, kept only for subjects without a released exam booklet in
 * ./released (AP Research is a paper, CSP has no written FRQ, Music Theory is aural/notation).
 */
export const FRQ_DATA: SubjectFrqSet[] = [
  AP_CS_PRINCIPLES_FRQ,
  AP_MUSIC_THEORY_FRQ,
  AP_RESEARCH_FRQ,
]

export function getFrqSetBySubjectName(name: string): SubjectFrqSet | undefined {
  return FRQ_DATA.find((s) => s.subjectName === name)
}

/** Lazily loads a subject's released exam questions (each subject is its own chunk). */
export function loadReleasedFrqSet(name: string) {
  return RELEASED_FRQ_LOADERS[name]?.() ?? Promise.resolve(undefined)
}

export function getReleasedFrqCount(name: string): number {
  return RELEASED_FRQ_COUNTS[name] ?? 0
}
