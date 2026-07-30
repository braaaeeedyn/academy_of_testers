import type { SubjectFrqSet } from './types'
import { pointBased } from './rubrics'

// AP Macro/Microeconomics free responses are scored point-by-point across parts (graphs,
// calculations, and explanations). Describe your graphs in words since this is a text box.

export const AP_MACROECONOMICS_FRQ: SubjectFrqSet = {
  subjectName: 'AP Macroeconomics',
  note: 'Scored point-by-point like the official AP Macroeconomics FRQ. Describe any graph you would draw in words (axes, curves, and the direction of any shift).',
  prompts: [
    {
      id: 'macro-frq-recession',
      essayType: 'Long FRQ',
      title: 'An economy in recession',
      year: 'Sample prompt',
      suggestedMinutes: 25,
      directions:
        'Assume the economy of Loravia is operating below full employment. Answer all parts. Explain'
        + ' your reasoning and describe any graphs in words.',
      rubric: pointBased([
        { name: '(a) AD–AS graph', maxPoints: 2, criteria: '1 point for a correctly described AD–AS graph; 1 point for showing current output below full-employment output (a recessionary gap).' },
        { name: '(b) Fiscal policy', maxPoints: 2, criteria: '1 point for identifying an appropriate expansionary fiscal action; 1 point for correctly explaining its effect on aggregate demand and output.' },
        { name: '(c) Interest rates', maxPoints: 1, criteria: 'Correctly explains the effect of the policy (or crowding out) on real interest rates.' },
        { name: '(d) Long-run adjustment', maxPoints: 1, criteria: 'Explains how the economy returns to long-run equilibrium (self-correction or policy) with correct direction.' },
      ]),
    },
  ],
}

export const AP_MICROECONOMICS_FRQ: SubjectFrqSet = {
  subjectName: 'AP Microeconomics',
  note: 'Scored point-by-point like the official AP Microeconomics FRQ. Describe any graph you would draw in words.',
  prompts: [
    {
      id: 'micro-frq-competitive-firm',
      essayType: 'Long FRQ',
      title: 'A perfectly competitive firm',
      year: 'Sample prompt',
      suggestedMinutes: 25,
      directions:
        'A firm operates in a perfectly competitive market and is currently earning a positive'
        + ' economic profit. Answer all parts, explaining your reasoning and describing graphs in words.',
      rubric: pointBased([
        { name: '(a) Profit-max output', maxPoints: 1, criteria: 'States that the firm produces where marginal revenue (= price) equals marginal cost.' },
        { name: '(b) Graph', maxPoints: 2, criteria: '1 point for a correctly described firm graph (ATC, MC, and price = MR line); 1 point for correctly shading/identifying the profit area.' },
        { name: '(c) Long-run entry', maxPoints: 2, criteria: '1 point for stating firms enter the market; 1 point for explaining the effect on price and the firm’s profit (falls to zero economic profit).' },
        { name: '(d) Allocative efficiency', maxPoints: 1, criteria: 'Correctly explains that in long-run equilibrium price equals marginal cost, so the outcome is allocatively efficient.' },
      ]),
    },
  ],
}
