import type { SubjectUnitOverview } from './types'
import { parseRawOverview } from './parseRawOverview'

// NOTE: Source-preserving content. Paste your AP Physics C: Mechanics raw unit overview text into RAW_AP_PHYSICS_C_MECHANICS.
// Expected format (same as other unit overviews in this folder):
//   Unit N – Title
//   N.N Subunit title
//   ...paragraphs...
//   Key ideas: ...
const RAW_AP_PHYSICS_C_MECHANICS = `
AP Physics C: Mechanics

`

export const AP_PHYSICS_C_MECHANICS_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Physics C: Mechanics',
  units: parseRawOverview(RAW_AP_PHYSICS_C_MECHANICS),
  features: { latex: false, codeExamples: false },
}

