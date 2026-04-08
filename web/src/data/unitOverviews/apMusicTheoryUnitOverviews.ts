import type { SubjectUnitOverview } from './types'
import { parseRawOverview } from './parseRawOverview'

// NOTE: Source-preserving content. Paste your AP Music Theory raw unit overview text into RAW_AP_MUSIC_THEORY.
// Expected format (same as other unit-overview files in this folder):
//   Unit N – Title
//   N.N Subunit title
//   ...paragraphs...
//   Key ideas: ...
const RAW_AP_MUSIC_THEORY = `
AP Music Theory

`

export const AP_MUSIC_THEORY_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Music Theory',
  units: parseRawOverview(RAW_AP_MUSIC_THEORY),
  features: { latex: false, codeExamples: false },
}

