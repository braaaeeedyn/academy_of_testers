export type { SubunitOverview, UnitOverview, SubjectUnitOverview } from './types'

import type { SubjectUnitOverview } from './types'
import { CSA_UNIT_OVERVIEWS } from './csaUnitOverviews'
import { CSP_UNIT_OVERVIEWS } from './cspUnitOverviews'
import { CALC_AB_UNIT_OVERVIEWS, CALC_BC_UNIT_OVERVIEWS } from './calcUnitOverviews'
import { PRECALC_UNIT_OVERVIEWS } from './precalcUnitOverviews'
import { STATS_UNIT_OVERVIEWS } from './statsUnitOverviews'
import { PHYSICS1_UNIT_OVERVIEWS } from './physics1UnitOverviews'
import { AFRICAN_AMERICAN_STUDIES_UNIT_OVERVIEWS } from './africanAmericanStudiesUnitOverviews'
import { COMPARATIVE_GOVERNMENT_UNIT_OVERVIEWS } from './comparativeGovernmentUnitOverviews'
import { EUROPEAN_HISTORY_UNIT_OVERVIEWS } from './europeanHistoryUnitOverviews'
import { HUMAN_GEOGRAPHY_UNIT_OVERVIEWS } from './humanGeographyUnitOverviews'
import { MACROECONOMICS_UNIT_OVERVIEWS } from './macroeconomicsUnitOverviews'
import { MICROECONOMICS_UNIT_OVERVIEWS } from './microeconomicsUnitOverviews'

const SUBJECT_OVERVIEWS: SubjectUnitOverview[] = [
  CSA_UNIT_OVERVIEWS,
  CSP_UNIT_OVERVIEWS,
  CALC_AB_UNIT_OVERVIEWS,
  CALC_BC_UNIT_OVERVIEWS,
  PRECALC_UNIT_OVERVIEWS,
  STATS_UNIT_OVERVIEWS,
  PHYSICS1_UNIT_OVERVIEWS,
  AFRICAN_AMERICAN_STUDIES_UNIT_OVERVIEWS,
  COMPARATIVE_GOVERNMENT_UNIT_OVERVIEWS,
  EUROPEAN_HISTORY_UNIT_OVERVIEWS,
  HUMAN_GEOGRAPHY_UNIT_OVERVIEWS,
  MACROECONOMICS_UNIT_OVERVIEWS,
  MICROECONOMICS_UNIT_OVERVIEWS,
]

export function getUnitOverviewBySubjectName(subjectName: string): SubjectUnitOverview | undefined {
  return SUBJECT_OVERVIEWS.find((o) => o.subjectName === subjectName)
}

