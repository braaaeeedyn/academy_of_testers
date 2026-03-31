export type { SubunitOverview, UnitOverview, SubjectUnitOverview } from './types'

import type { SubjectUnitOverview } from './types'
import { CSA_UNIT_OVERVIEWS } from './csaUnitOverviews'
import { CSP_UNIT_OVERVIEWS } from './cspUnitOverviews'
import { CALC_AB_UNIT_OVERVIEWS, CALC_BC_UNIT_OVERVIEWS } from './calcUnitOverviews'
import { PRECALC_UNIT_OVERVIEWS } from './precalcUnitOverviews'
import { STATS_UNIT_OVERVIEWS } from './statsUnitOverviews'
import { PHYSICS1_UNIT_OVERVIEWS } from './physics1UnitOverviews'
import { AP_BIOLOGY_UNIT_OVERVIEWS } from './apBiologyUnitOverviews'
import { AFRICAN_AMERICAN_STUDIES_UNIT_OVERVIEWS } from './africanAmericanStudiesUnitOverviews'
import { COMPARATIVE_GOVERNMENT_UNIT_OVERVIEWS } from './comparativeGovernmentUnitOverviews'
import { EUROPEAN_HISTORY_UNIT_OVERVIEWS } from './europeanHistoryUnitOverviews'
import { HUMAN_GEOGRAPHY_UNIT_OVERVIEWS } from './humanGeographyUnitOverviews'
import { MACROECONOMICS_UNIT_OVERVIEWS } from './macroeconomicsUnitOverviews'
import { MICROECONOMICS_UNIT_OVERVIEWS } from './microeconomicsUnitOverviews'
import { PSYCHOLOGY_UNIT_OVERVIEWS } from './psychologyUnitOverviews'
import { APUSH_UNIT_OVERVIEWS } from './apushUnitOverviews'
import { AP_US_GOVERNMENT_UNIT_OVERVIEWS } from './apUsGovernmentUnitOverviews'
import { AP_WORLD_HISTORY_UNIT_OVERVIEWS } from './apWorldHistoryUnitOverviews'
import { AP_ENGLISH_LANGUAGE_UNIT_OVERVIEWS } from './apEnglishLanguageUnitOverviews'
import { AP_ENGLISH_LITERATURE_UNIT_OVERVIEWS } from './apEnglishLiteratureUnitOverviews'
import { AP_RESEARCH_UNIT_OVERVIEWS } from './apResearchUnitOverviews'
import { AP_SEMINAR_UNIT_OVERVIEWS } from './apSeminarUnitOverviews'
import { AP_CHEMISTRY_UNIT_OVERVIEWS } from './apChemistryUnitOverviews'
import { AP_ENV_SCIENCE_UNIT_OVERVIEWS } from './apEnvScienceUnitOverviews'

const SUBJECT_OVERVIEWS: SubjectUnitOverview[] = [
  CSA_UNIT_OVERVIEWS,
  CSP_UNIT_OVERVIEWS,
  CALC_AB_UNIT_OVERVIEWS,
  CALC_BC_UNIT_OVERVIEWS,
  PRECALC_UNIT_OVERVIEWS,
  STATS_UNIT_OVERVIEWS,
  PHYSICS1_UNIT_OVERVIEWS,
  AP_BIOLOGY_UNIT_OVERVIEWS,
  AFRICAN_AMERICAN_STUDIES_UNIT_OVERVIEWS,
  COMPARATIVE_GOVERNMENT_UNIT_OVERVIEWS,
  EUROPEAN_HISTORY_UNIT_OVERVIEWS,
  HUMAN_GEOGRAPHY_UNIT_OVERVIEWS,
  MACROECONOMICS_UNIT_OVERVIEWS,
  MICROECONOMICS_UNIT_OVERVIEWS,
  PSYCHOLOGY_UNIT_OVERVIEWS,
  APUSH_UNIT_OVERVIEWS,
  AP_US_GOVERNMENT_UNIT_OVERVIEWS,
  AP_WORLD_HISTORY_UNIT_OVERVIEWS,
  AP_ENGLISH_LANGUAGE_UNIT_OVERVIEWS,
  AP_ENGLISH_LITERATURE_UNIT_OVERVIEWS,
  AP_RESEARCH_UNIT_OVERVIEWS,
  AP_SEMINAR_UNIT_OVERVIEWS,
  AP_CHEMISTRY_UNIT_OVERVIEWS,
  AP_ENV_SCIENCE_UNIT_OVERVIEWS,
]

export function getUnitOverviewBySubjectName(subjectName: string): SubjectUnitOverview | undefined {
  const direct = SUBJECT_OVERVIEWS.find((o) => o.subjectName === subjectName)
  if (direct) return direct

  const aliases: Record<string, string> = {
    'AP United States Government and Politics': 'AP US Government and Politics',
    'AP US Government': 'AP US Government and Politics',
    'AP Government': 'AP US Government and Politics',
    'AP Comparative Government and Politics': 'AP Comparative Government',
    'AP United States History': 'AP US History',
    'AP World History': 'AP World History: Modern',
    'AP English Language': 'AP English Language and Composition',
    'AP English Literature': 'AP English Literature and Composition',
  }

  const canonical = aliases[subjectName]
  if (!canonical) return undefined
  return SUBJECT_OVERVIEWS.find((o) => o.subjectName === canonical)
}

