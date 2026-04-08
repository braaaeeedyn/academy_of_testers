import type { SubjectUnitOverview } from './types'
import { parseRawOverview } from './parseRawOverview'

// NOTE: Source-preserving content. Paste your AP Physics C: E&M raw unit overview text into RAW_AP_PHYSICS_C_EM.
// Expected format (same as other unit overviews in this folder):
//   Unit N – Title
//   N.N Subunit title
//   ...paragraphs...
//   Key ideas: ...
const RAW_AP_PHYSICS_C_EM = `
AP Physics C: E&M

`

export const AP_PHYSICS_C_EM_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Physics C: E&M',
  units: parseRawOverview(RAW_AP_PHYSICS_C_EM),
  features: { latex: false, codeExamples: false },
}

