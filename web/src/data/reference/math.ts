import type { SubjectReference } from './types'

export const AP_CALCULUS_BC_REFERENCE: SubjectReference = {
  subjectName: 'AP Calculus BC',
  note: 'Calculus BC covers all of AB plus series, parametric/polar, and additional integration techniques.',
  formulaGroups: [
    {
      title: 'Series',
      items: [
        { name: 'Geometric series', latex: '\\sum_{n=0}^{\\infty} ar^n = \\frac{a}{1-r}, \\; |r| < 1' },
        { name: 'Taylor series', latex: 'f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n' },
        { name: 'Maclaurin e^x', latex: 'e^x = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}' },
        { name: 'Ratio test', latex: '\\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right| = L, \\; L<1 \\Rightarrow \\text{converges}' },
      ],
    },
    {
      title: 'Parametric & polar',
      items: [
        { name: 'Parametric slope', latex: '\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}' },
        { name: 'Arc length', latex: 'L = \\int_a^b \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt' },
        { name: 'Polar area', latex: 'A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta' },
      ],
    },
    {
      title: 'Integration techniques',
      items: [
        { name: 'By parts', latex: '\\int u\\,dv = uv - \\int v\\,du' },
        { name: "L'Hôpital", latex: '\\lim \\frac{f}{g} = \\lim \\frac{f\'}{g\'} \\; (\\tfrac{0}{0}\\text{ or }\\tfrac{\\infty}{\\infty})' },
      ],
    },
  ],
  frequentlyTested: [
    { topic: 'Series & convergence', weight: '17–18%', note: 'Taylor/Maclaurin series, convergence tests, and error bounds — BC-only and heavily tested.' },
    { topic: 'Integration & techniques', weight: '17–20%', note: 'By parts, partial fractions, improper integrals.' },
    { topic: 'Parametric, polar, vectors', weight: '11–12%', note: 'Derivatives, arc length, and polar area.' },
    { topic: 'Differential equations', weight: '6–9%', note: 'Euler’s method and logistic growth (BC additions).' },
  ],
}

export const AP_PRECALCULUS_REFERENCE: SubjectReference = {
  subjectName: 'AP Precalculus',
  note: 'Core function families and identities for AP Precalculus.',
  formulaGroups: [
    {
      title: 'Function models',
      items: [
        { name: 'Exponential', latex: 'f(x) = a\\,b^{x}' },
        { name: 'Logarithm rule', latex: '\\log_b(xy) = \\log_b x + \\log_b y' },
        { name: 'Change of base', latex: '\\log_b x = \\frac{\\ln x}{\\ln b}' },
      ],
    },
    {
      title: 'Trigonometry',
      items: [
        { name: 'Pythagorean identity', latex: '\\sin^2\\theta + \\cos^2\\theta = 1' },
        { name: 'Sinusoidal model', latex: 'f(x) = a\\sin(b(x - c)) + d' },
        { name: 'Law of cosines', latex: 'c^2 = a^2 + b^2 - 2ab\\cos C' },
      ],
    },
  ],
  frequentlyTested: [
    { topic: 'Polynomial & rational functions', weight: '~30%', note: 'End behavior, zeros, asymptotes, and rates of change.' },
    { topic: 'Exponential & logarithmic', weight: '~30%', note: 'Modeling growth/decay and inverse relationships.' },
    { topic: 'Trigonometric & polar', weight: '~30%', note: 'Sinusoidal modeling, identities, and polar functions.' },
  ],
}

export const AP_STATISTICS_REFERENCE: SubjectReference = {
  subjectName: 'AP Statistics',
  note: 'Key formulas for AP Statistics. A formula sheet and calculator are provided on the exam.',
  formulaGroups: [
    {
      title: 'Descriptive statistics',
      items: [
        { name: 'Sample mean', latex: '\\bar{x} = \\frac{1}{n}\\sum x_i' },
        { name: 'Standard deviation', latex: 's = \\sqrt{\\frac{1}{n-1}\\sum (x_i - \\bar{x})^2}' },
        { name: 'z-score', latex: 'z = \\frac{x - \\mu}{\\sigma}' },
      ],
    },
    {
      title: 'Inference',
      items: [
        { name: 'Confidence interval', latex: '\\text{estimate} \\pm (\\text{critical value})(\\text{SE})' },
        { name: 'Test statistic', latex: 't = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}' },
        { name: 'Proportion SE', latex: 'SE = \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}' },
      ],
    },
  ],
  frequentlyTested: [
    { topic: 'Exploring data', weight: '15–23%', note: 'Distributions, summary stats, and graphical displays.' },
    { topic: 'Sampling & experiments', weight: '12–15%', note: 'Study design, bias, randomization.' },
    { topic: 'Probability & distributions', weight: '20–30%', note: 'Random variables, binomial/normal, sampling distributions.' },
    { topic: 'Inference', weight: '30–40%', note: 'Confidence intervals and significance tests for means and proportions.' },
  ],
}
