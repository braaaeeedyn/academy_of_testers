import type { SubjectFrqSet } from './types'
import { pointBased } from './rubrics'

// AP Calculus / Precalculus / Statistics FRQs are scored point-by-point per part. Prompts use
// plain-text notation (e.g. x^2, sqrt, integral from a to b) since the response box is plain text.

export const AP_CALCULUS_AB_FRQ: SubjectFrqSet = {
  subjectName: 'AP Calculus AB',
  note: 'Scored point-by-point like the official AP Calculus AB FRQ. Show your work; points are earned for setup, correct process, and a correct answer.',
  prompts: [
    {
      id: 'calcab-frq-analysis',
      essayType: 'Long FRQ',
      title: 'Analysis of f(x) = x^3 − 6x^2 + 9x',
      year: 'Sample prompt',
      suggestedMinutes: 15,
      directions: 'Let f(x) = x^3 − 6x^2 + 9x. Answer all parts, showing the work that leads to each answer.',
      rubric: pointBased([
        { name: "(a) f'(x)", maxPoints: 1, criteria: "Correctly computes f'(x) = 3x^2 − 12x + 9." },
        { name: '(b) Critical points', maxPoints: 2, criteria: '1 point for setting f’(x)=0; 1 point for the correct critical x-values x = 1 and x = 3.' },
        { name: '(c) Local extrema', maxPoints: 2, criteria: '1 point for a valid test (first/second derivative); 1 point for correctly classifying x=1 as a local max and x=3 as a local min.' },
        { name: '(d) Concavity', maxPoints: 1, criteria: 'Correctly finds the inflection point at x = 2 (where f’’(x)=6x−12=0).' },
      ]),
    },
  ],
}

export const AP_CALCULUS_BC_FRQ: SubjectFrqSet = {
  subjectName: 'AP Calculus BC',
  note: 'Scored point-by-point like the official AP Calculus BC FRQ.',
  prompts: [
    {
      id: 'calcbc-frq-series',
      essayType: 'Long FRQ',
      title: 'Taylor series for f(x) = e^x',
      year: 'Sample prompt',
      suggestedMinutes: 15,
      directions: 'Let f(x) = e^x. Answer all parts, showing your work.',
      rubric: pointBased([
        { name: '(a) Taylor polynomial', maxPoints: 2, criteria: '1 point for the correct form; 1 point for the degree-4 Taylor polynomial about x=0: 1 + x + x^2/2 + x^3/6 + x^4/24.' },
        { name: '(b) General term', maxPoints: 1, criteria: 'States the general term of the Maclaurin series as x^n / n!.' },
        { name: '(c) Interval of convergence', maxPoints: 2, criteria: '1 point for applying the ratio test; 1 point for concluding the series converges for all real x (interval (−∞, ∞)).' },
        { name: '(d) Approximation', maxPoints: 1, criteria: 'Uses the polynomial to give a reasonable numerical approximation of e^{0.5} (≈ 1.6487).' },
      ]),
    },
  ],
}

export const AP_PRECALCULUS_FRQ: SubjectFrqSet = {
  subjectName: 'AP Precalculus',
  note: 'Scored point-by-point like the official AP Precalculus FRQ.',
  prompts: [
    {
      id: 'precalc-frq-exponential',
      essayType: 'Modeling FRQ',
      title: 'Exponential modeling',
      year: 'Sample prompt',
      suggestedMinutes: 15,
      directions:
        'A population of bacteria is 500 at time t = 0 hours and doubles every 3 hours. Answer all'
        + ' parts, showing your work.',
      rubric: pointBased([
        { name: '(a) Model', maxPoints: 2, criteria: '1 point for exponential form; 1 point for the correct model P(t) = 500 · 2^(t/3).' },
        { name: '(b) Evaluate', maxPoints: 1, criteria: 'Correctly finds the population at t = 9 hours (P = 4000).' },
        { name: '(c) Solve', maxPoints: 2, criteria: '1 point for setting the model equal to 8000; 1 point for solving t = 12 hours (using logarithms or doubling).' },
        { name: '(d) Interpret', maxPoints: 1, criteria: 'Correctly interprets the base/growth factor in context (the population multiplies by 2 every 3 hours).' },
      ]),
    },
  ],
}

export const AP_STATISTICS_FRQ: SubjectFrqSet = {
  subjectName: 'AP Statistics',
  note: 'Scored holistically per part (E/P/I) like the official AP Statistics FRQ. State assumptions, show the procedure, and interpret in context.',
  prompts: [
    {
      id: 'stats-frq-interval',
      essayType: 'Inference FRQ',
      title: 'Confidence interval for a proportion',
      year: 'Sample prompt',
      suggestedMinutes: 15,
      directions:
        'In a random sample of 200 voters, 118 support a ballot measure. Answer all parts, showing'
        + ' the procedure and interpreting results in context.',
      rubric: pointBased([
        { name: '(a) Conditions', maxPoints: 1, criteria: 'Checks the conditions for a one-proportion z-interval (random sample; np and n(1−p) at least 10).' },
        { name: '(b) Interval', maxPoints: 2, criteria: '1 point for the correct setup (p̂ = 0.59, correct SE); 1 point for a correct 95% interval (≈ 0.522 to 0.658).' },
        { name: '(c) Interpretation', maxPoints: 1, criteria: 'Interprets the interval in context (we are 95% confident the true proportion of supporters lies in the interval).' },
        { name: '(d) Conclusion', maxPoints: 1, criteria: 'Uses the interval to address whether a majority (>0.50) plausibly supports the measure, correctly referencing the interval.' },
      ]),
    },
  ],
}
