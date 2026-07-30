import type { SubjectFrqSet } from './types'
import { AP_ENGLISH_LANGUAGE_FRQ } from './englishLanguage'
import { AP_ENGLISH_LITERATURE_FRQ } from './englishLiterature'
import { AP_US_HISTORY_FRQ } from './apUsHistory'
import { AP_WORLD_HISTORY_FRQ, AP_EUROPEAN_HISTORY_FRQ, AP_AFRICAN_AMERICAN_STUDIES_FRQ } from './history'
import { AP_US_GOVERNMENT_FRQ, AP_COMPARATIVE_GOVERNMENT_FRQ } from './government'
import { AP_MACROECONOMICS_FRQ, AP_MICROECONOMICS_FRQ } from './economics'
import { AP_HUMAN_GEOGRAPHY_FRQ, AP_PSYCHOLOGY_FRQ } from './socialScience'
import { AP_CALCULUS_AB_FRQ, AP_CALCULUS_BC_FRQ, AP_PRECALCULUS_FRQ, AP_STATISTICS_FRQ } from './math'
import {
  AP_BIOLOGY_FRQ,
  AP_CHEMISTRY_FRQ,
  AP_ENVIRONMENTAL_SCIENCE_FRQ,
  AP_PHYSICS_1_FRQ,
  AP_PHYSICS_2_FRQ,
  AP_PHYSICS_C_EM_FRQ,
  AP_PHYSICS_C_MECH_FRQ,
} from './sciences'
import { AP_CS_A_FRQ, AP_CS_PRINCIPLES_FRQ } from './computerScience'
import { AP_ART_HISTORY_FRQ, AP_MUSIC_THEORY_FRQ } from './arts'
import { AP_SEMINAR_FRQ, AP_RESEARCH_FRQ } from './capstone'

export type { SubjectFrqSet, FrqPrompt, FrqRubricRow } from './types'

/** All subjects that currently have FRQ practice, keyed by DB subject name. */
export const FRQ_DATA: SubjectFrqSet[] = [
  AP_ENGLISH_LANGUAGE_FRQ,
  AP_ENGLISH_LITERATURE_FRQ,
  AP_US_HISTORY_FRQ,
  AP_WORLD_HISTORY_FRQ,
  AP_EUROPEAN_HISTORY_FRQ,
  AP_AFRICAN_AMERICAN_STUDIES_FRQ,
  AP_US_GOVERNMENT_FRQ,
  AP_COMPARATIVE_GOVERNMENT_FRQ,
  AP_MACROECONOMICS_FRQ,
  AP_MICROECONOMICS_FRQ,
  AP_HUMAN_GEOGRAPHY_FRQ,
  AP_PSYCHOLOGY_FRQ,
  AP_CALCULUS_AB_FRQ,
  AP_CALCULUS_BC_FRQ,
  AP_PRECALCULUS_FRQ,
  AP_STATISTICS_FRQ,
  AP_BIOLOGY_FRQ,
  AP_CHEMISTRY_FRQ,
  AP_ENVIRONMENTAL_SCIENCE_FRQ,
  AP_PHYSICS_1_FRQ,
  AP_PHYSICS_2_FRQ,
  AP_PHYSICS_C_EM_FRQ,
  AP_PHYSICS_C_MECH_FRQ,
  AP_CS_A_FRQ,
  AP_CS_PRINCIPLES_FRQ,
  AP_ART_HISTORY_FRQ,
  AP_MUSIC_THEORY_FRQ,
  AP_SEMINAR_FRQ,
  AP_RESEARCH_FRQ,
]

export function getFrqSetBySubjectName(name: string): SubjectFrqSet | undefined {
  return FRQ_DATA.find((s) => s.subjectName === name)
}
