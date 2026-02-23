export type { SubunitOverview, UnitOverview, SubjectUnitOverview } from './types'

import type { SubjectUnitOverview } from './types'
import { CSA_UNIT_OVERVIEWS } from './csaUnitOverviews'
import { CSP_UNIT_OVERVIEWS } from './cspUnitOverviews'

const SUBJECT_OVERVIEWS: SubjectUnitOverview[] = [CSA_UNIT_OVERVIEWS, CSP_UNIT_OVERVIEWS]

export function getUnitOverviewBySubjectName(subjectName: string): SubjectUnitOverview | undefined {
  return SUBJECT_OVERVIEWS.find((o) => o.subjectName === subjectName)
}

