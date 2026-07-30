import type { SubjectFrqSet } from './types'
import { pointBased } from './rubrics'

export const AP_ART_HISTORY_FRQ: SubjectFrqSet = {
  subjectName: 'AP Art History',
  note: 'Scored point-by-point like the official AP Art History free response. Because there is no image here, choose a specific work you know and analyze it fully.',
  prompts: [
    {
      id: 'arthist-frq-analysis',
      essayType: 'Visual & Contextual Analysis',
      title: 'Analyze a work and its context',
      year: 'Sample prompt',
      suggestedMinutes: 20,
      directions:
        'Select one specific work of art from the required course image set. Identify it, then analyze'
        + ' how its visual features and historical context convey meaning. Respond to all parts.',
      rubric: pointBased([
        { name: 'Identification', maxPoints: 1, criteria: 'Correctly identifies a specific work (title/culture/period) accurately enough to analyze.' },
        { name: 'Visual analysis', maxPoints: 2, criteria: '1 point for accurately describing specific visual/formal features; 1 point for explaining how those features create meaning or effect.' },
        { name: 'Context', maxPoints: 2, criteria: '1 point for accurate historical/cultural context; 1 point for connecting that context to the work’s function or meaning.' },
        { name: 'Argument', maxPoints: 1, criteria: 'Supports an overall claim about the work with a coherent line of reasoning.' },
      ]),
    },
  ],
}

export const AP_MUSIC_THEORY_FRQ: SubjectFrqSet = {
  subjectName: 'AP Music Theory',
  note: 'Modeled on the AP Music Theory written free response. Notation and aural tasks can’t be captured here, so these are analysis questions answered in text (e.g. Roman numerals, terms).',
  prompts: [
    {
      id: 'music-frq-harmony',
      essayType: 'Harmonic Analysis',
      title: 'Analyze a chord progression',
      year: 'Sample prompt',
      suggestedMinutes: 15,
      directions:
        'A four-chord progression in C major is: C major → A minor → F major → G major. Answer all'
        + ' parts using Roman-numeral analysis and correct terminology.',
      rubric: pointBased([
        { name: 'Roman numerals', maxPoints: 2, criteria: '1 point for correctly labeling at least two chords; 1 point for the full correct analysis I – vi – IV – V.' },
        { name: 'Function', maxPoints: 1, criteria: 'Correctly identifies the function of the final chord (V = dominant) and its tendency to resolve to I.' },
        { name: 'Cadence', maxPoints: 1, criteria: 'Names the cadence type implied if the progression continued to I (authentic cadence) with justification.' },
        { name: 'Voice-leading', maxPoints: 1, criteria: 'Describes one correct voice-leading principle relevant to the progression (e.g. resolving the leading tone).' },
      ]),
    },
  ],
}
