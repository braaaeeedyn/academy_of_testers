import type { SubjectReference } from './types'

export const AP_MACROECONOMICS_REFERENCE: SubjectReference = {
  subjectName: 'AP Macroeconomics',
  note: 'Core formulas and exam breakdown for AP Macroeconomics.',
  formulaGroups: [
    {
      title: 'Output & spending',
      items: [
        { name: 'GDP (expenditure)', latex: 'GDP = C + I + G + (X - M)' },
        { name: 'Spending multiplier', latex: '\\frac{1}{1 - MPC} = \\frac{1}{MPS}' },
        { name: 'Real interest rate', latex: 'r_{real} = r_{nominal} - \\pi' },
      ],
    },
    {
      title: 'Money & prices',
      items: [
        { name: 'Quantity theory', latex: 'MV = PQ' },
        { name: 'Unemployment rate', latex: '\\frac{\\text{unemployed}}{\\text{labor force}} \\times 100' },
        { name: 'Money multiplier', latex: '\\frac{1}{\\text{reserve ratio}}' },
      ],
    },
  ],
  frequentlyTested: [
    { topic: 'National income & prices', weight: '17–27%', note: 'GDP, inflation, and unemployment measurement.' },
    { topic: 'AD–AS model', weight: '15–20%', note: 'Short- and long-run equilibrium and gaps.' },
    { topic: 'Financial sector', weight: '15–20%', note: 'Money market, banking, and the money multiplier.' },
    { topic: 'Stabilization policy', weight: '20–30%', note: 'Fiscal and monetary policy — the most tested band.' },
  ],
}

export const AP_MICROECONOMICS_REFERENCE: SubjectReference = {
  subjectName: 'AP Microeconomics',
  note: 'Core formulas and exam breakdown for AP Microeconomics.',
  formulaGroups: [
    {
      title: 'Elasticity & revenue',
      items: [
        { name: 'Price elasticity', latex: 'E_d = \\frac{\\%\\,\\Delta Q_d}{\\%\\,\\Delta P}' },
        { name: 'Total revenue', latex: 'TR = P \\times Q' },
        { name: 'Marginal revenue', latex: 'MR = \\frac{\\Delta TR}{\\Delta Q}' },
      ],
    },
    {
      title: 'Costs & profit',
      items: [
        { name: 'Profit maximization', latex: 'MR = MC' },
        { name: 'Average total cost', latex: 'ATC = \\frac{TC}{Q}' },
        { name: 'Economic profit', latex: '\\pi = TR - TC' },
      ],
    },
  ],
  frequentlyTested: [
    { topic: 'Supply & demand', weight: '20–25%', note: 'Markets, elasticity, and welfare (surplus).' },
    { topic: 'Production & costs', weight: '22–25%', note: 'Cost curves and the firm’s short/long-run decisions.' },
    { topic: 'Market structures', weight: '25–35%', note: 'Perfect competition, monopoly, oligopoly — the largest band.' },
    { topic: 'Factor markets', weight: '10–13%', note: 'Labor demand and marginal revenue product.' },
  ],
}
