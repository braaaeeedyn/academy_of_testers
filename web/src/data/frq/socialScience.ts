import type { SubjectFrqSet } from './types'
import { pointBased } from './rubrics'

export const AP_HUMAN_GEOGRAPHY_FRQ: SubjectFrqSet = {
  subjectName: 'AP Human Geography',
  note: 'Scored like the official AP Human Geography FRQ — seven parts (A–G), one point each, with escalating tasks (define → describe → explain).',
  prompts: [
    {
      id: 'humangeo-frq-urban',
      essayType: 'FRQ (7 parts)',
      title: 'Urbanization and city models',
      year: 'Sample prompt',
      suggestedMinutes: 20,
      directions: 'Answer all seven parts about urbanization and the internal structure of cities.',
      rubric: pointBased([
        { name: 'A — Define', maxPoints: 1, criteria: 'Correctly defines “suburbanization.”' },
        { name: 'B — Describe', maxPoints: 1, criteria: 'Describes one characteristic of the concentric-zone (or another named) urban model.' },
        { name: 'C — Explain', maxPoints: 1, criteria: 'Explains one cause of suburban growth in the twentieth century.' },
        { name: 'D — Explain', maxPoints: 1, criteria: 'Explains one economic effect of suburbanization on central cities.' },
        { name: 'E — Explain', maxPoints: 1, criteria: 'Explains one environmental consequence of urban sprawl.' },
        { name: 'F — Explain', maxPoints: 1, criteria: 'Explains how one urban planning response (e.g. smart growth, greenbelts) addresses sprawl.' },
        { name: 'G — Explain', maxPoints: 1, criteria: 'Explains one limitation of that planning response.' },
      ]),
    },
  ],
}

export const AP_PSYCHOLOGY_FRQ: SubjectFrqSet = {
  subjectName: 'AP Psychology',
  note: 'Modeled on the AP Psychology applied free response — each part awards a point for correctly applying a specific concept to the scenario. Define AND apply the term; a definition alone does not score.',
  prompts: [
    {
      id: 'psych-frq-apply',
      essayType: 'Application FRQ',
      title: 'Applying concepts to a scenario',
      year: 'Sample prompt',
      suggestedMinutes: 20,
      directions:
        'Maria is preparing for a big exam. Explain how EACH of the following psychological concepts'
        + ' could apply to Maria’s studying and performance. For each, you must apply the concept to'
        + ' the scenario, not just define it.',
      rubric: pointBased([
        { name: 'Spacing effect', maxPoints: 1, criteria: 'Correctly applies the spacing effect to how Maria should distribute her studying.' },
        { name: 'Serial position effect', maxPoints: 1, criteria: 'Correctly applies primacy/recency to what Maria remembers from a study list.' },
        { name: 'Yerkes–Dodson law', maxPoints: 1, criteria: 'Correctly applies arousal/performance to Maria’s test-day anxiety.' },
        { name: 'Retrieval practice', maxPoints: 1, criteria: 'Correctly applies testing/retrieval practice as an effective study strategy for Maria.' },
        { name: 'Growth mindset', maxPoints: 1, criteria: 'Correctly applies mindset to how Maria interprets a setback while studying.' },
      ]),
    },
  ],
}
