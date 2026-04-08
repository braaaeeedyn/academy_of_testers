import type { SubjectUnitOverview } from './types'
import { parseRawOverview } from './parseRawOverview'

// NOTE: Source-preserving content. Paste your AP Physics 2 raw unit overview text into RAW_AP_PHYSICS_2.
// Expected format (same as other unit overviews in this folder):
//   Unit N – Title
//   N.N Subunit title
//   ...paragraphs...
//   Key ideas: ...
const RAW_AP_PHYSICS_2 = `
AP Physics 2

`

export const AP_PHYSICS_2_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Physics 2',
  units: parseRawOverview(RAW_AP_PHYSICS_2),
  features: { latex: false, codeExamples: false },
}

