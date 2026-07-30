import type { SubjectReference } from './types'

export const AP_CALCULUS_AB_REFERENCE: SubjectReference = {
  subjectName: 'AP Calculus AB',
  note: 'Core formulas and theorems for AP Calculus AB. A graphing calculator is allowed on parts of the exam.',
  formulaGroups: [
    {
      title: 'Derivative rules',
      items: [
        { name: 'Power rule', latex: '\\frac{d}{dx}\\left[x^n\\right] = n x^{n-1}' },
        { name: 'Product rule', latex: "(fg)' = f'g + fg'" },
        { name: 'Quotient rule', latex: "\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}" },
        { name: 'Chain rule', latex: '\\frac{d}{dx}\\,f(g(x)) = f\'(g(x))\\,g\'(x)' },
      ],
    },
    {
      title: 'Common derivatives',
      items: [
        { name: 'Sine / cosine', latex: '\\frac{d}{dx}\\sin x = \\cos x, \\quad \\frac{d}{dx}\\cos x = -\\sin x' },
        { name: 'Tangent', latex: '\\frac{d}{dx}\\tan x = \\sec^2 x' },
        { name: 'Exponential', latex: '\\frac{d}{dx} e^x = e^x, \\quad \\frac{d}{dx} a^x = a^x \\ln a' },
        { name: 'Natural log', latex: '\\frac{d}{dx}\\ln x = \\frac{1}{x}' },
      ],
    },
    {
      title: 'Integration',
      items: [
        { name: 'Power rule', latex: '\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C, \\; n \\neq -1' },
        { name: 'Reciprocal', latex: '\\int \\frac{1}{x}\\,dx = \\ln|x| + C' },
        { name: 'Exponential', latex: '\\int e^x\\,dx = e^x + C' },
        { name: 'Fundamental Theorem', latex: '\\int_a^b f(x)\\,dx = F(b) - F(a)' },
      ],
    },
    {
      title: 'Key theorems',
      items: [
        { name: 'Mean Value Theorem', latex: "f'(c) = \\frac{f(b) - f(a)}{b - a}", note: 'For f continuous on [a,b] and differentiable on (a,b).' },
        { name: 'Average value', latex: '\\text{avg} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx' },
      ],
    },
  ],
  frequentlyTested: [
    { topic: 'Limits & continuity', weight: '10–12%', note: 'Evaluating limits, one-sided limits, continuity, and asymptotic behavior.' },
    { topic: 'Differentiation', weight: '20–28%', note: 'Rules, implicit differentiation, and derivatives of composite/inverse functions.' },
    { topic: 'Applications of derivatives', weight: '15–18%', note: 'Related rates, optimization, motion, and the MVT.' },
    { topic: 'Integration & accumulation', weight: '17–20%', note: 'Antiderivatives, the FTC, u-substitution, and Riemann sums.' },
    { topic: 'Differential equations', weight: '6–12%', note: 'Slope fields, separable equations, and exponential models.' },
    { topic: 'Applications of integration', weight: '10–15%', note: 'Area between curves, volumes, and average value.' },
  ],
}
