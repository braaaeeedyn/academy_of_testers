export type { SubunitOverview, UnitOverview, SubjectUnitOverview } from './types'

import type { SubjectUnitOverview } from './types'
import { CSA_UNIT_OVERVIEWS } from './csaUnitOverviews'
import { CSP_UNIT_OVERVIEWS } from './cspUnitOverviews'
import { CALC_AB_UNIT_OVERVIEWS, CALC_BC_UNIT_OVERVIEWS } from './calcUnitOverviews'
import { PRECALC_UNIT_OVERVIEWS } from './precalcUnitOverviews'
import { STATS_UNIT_OVERVIEWS } from './statsUnitOverviews'
import { PHYSICS1_UNIT_OVERVIEWS } from './physics1UnitOverviews'

const SUBJECT_OVERVIEWS: SubjectUnitOverview[] = [
  CSA_UNIT_OVERVIEWS,
  CSP_UNIT_OVERVIEWS,
  CALC_AB_UNIT_OVERVIEWS,
  CALC_BC_UNIT_OVERVIEWS,
  PRECALC_UNIT_OVERVIEWS,
  STATS_UNIT_OVERVIEWS,
  PHYSICS1_UNIT_OVERVIEWS,
]

export function getUnitOverviewBySubjectName(subjectName: string): SubjectUnitOverview | undefined {
  return SUBJECT_OVERVIEWS.find((o) => o.subjectName === subjectName)
}

