/**
 * Study content for the SAT Math prep page (`/sat/prep`).
 *
 * Each topic's `id` matches a row in the `sat_skills` table and the `skillId`
 * used by the adaptive engine, so the dashboard's "Study" button can deep-link
 * straight to the matching section via `/sat/prep#<id>`.
 *
 * Videos are intentionally placeholders — set `youtubeId` (the 11-char ID from a
 * youtube.com/watch?v=<id> URL) on a video to make it play. Until then it renders
 * as a labelled "coming soon" slot.
 */

export interface PrepVideo {
  /** Short label shown under/over the player, e.g. "Core concepts walkthrough". */
  title: string
  /** YouTube video ID. Leave undefined to render a placeholder. */
  youtubeId?: string
}

export interface PrepTopic {
  /** Matches `sat_skills.id` / adaptive `skillId`. */
  id: string
  /** Display name, matches `sat_skills.name`. */
  name: string
  /** One-line summary of what the topic covers. */
  summary: string
  /** What shows up on the test — concrete sub-skills. */
  covers: string[]
  /** How-to-study advice: short, actionable tips. */
  advice: string[]
  /** Placeholder video slots (fill in `youtubeId` later). */
  videos: PrepVideo[]
}

export const SAT_PREP_TOPICS: PrepTopic[] = [
  {
    id: 'arithmetic-percentages',
    name: 'Arithmetic & Percentages',
    summary: 'Ratios, proportions, percent change, and unit conversions — the backbone of the easier Math questions.',
    covers: ['Ratios & proportions', 'Percent of / percent change', 'Unit rates & conversions', 'Fractions and decimals'],
    advice: [
      'Memorize the percent-change formula: (new − old) ÷ old × 100. Most percent questions are just this in disguise.',
      'Translate words into an equation before touching numbers — "of" means multiply, "is" means equals.',
      'For "percent greater/less than," decide the base (what you are comparing to) first; it is the number after "than".',
      'When the answer choices are numbers, plugging them back into the question is often faster than solving forward.',
    ],
    videos: [
      { title: 'Percentages & percent change — core concepts' },
      { title: 'Ratios, proportions & unit conversions — worked examples' },
    ],
  },
  {
    id: 'algebra-equations',
    name: 'Algebra & Equations',
    summary: 'Solving linear equations and inequalities, and rearranging formulas for a target variable.',
    covers: ['Linear equations in one variable', 'Inequalities', 'Absolute value', 'Solving for a variable in a formula'],
    advice: [
      'Isolate the variable one operation at a time, and do the same thing to both sides — write every step, do not skip.',
      'Flip the inequality sign whenever you multiply or divide by a negative number. This is the #1 trap here.',
      'Absolute-value equations split into two cases: the inside equals the positive and the negative of the value.',
      'Check your answer by substituting it back in — it costs 10 seconds and catches most arithmetic slips.',
    ],
    videos: [
      { title: 'Solving linear equations & inequalities' },
      { title: 'Rearranging formulas and absolute value' },
    ],
  },
  {
    id: 'linear-functions',
    name: 'Linear Functions',
    summary: 'Slope-intercept form and reading rate-of-change and starting values out of graphs, tables, and word problems.',
    covers: ['Slope & y-intercept', 'Interpreting slope/intercept in context', 'Parallel & perpendicular lines', 'Graphs and tables of lines'],
    advice: [
      'Know y = mx + b cold: m is the rate of change (slope), b is the value when x = 0 (the start).',
      'In context questions, put units on m and b — "$3 per hour" is the slope, "$5 flat fee" is the intercept.',
      'Slope = rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁). Pick any two clean points from a graph or table.',
      'Parallel lines share a slope; perpendicular slopes are negative reciprocals (m and −1/m).',
    ],
    videos: [
      { title: 'Slope-intercept form & interpreting lines' },
      { title: 'Linear functions in word problems' },
    ],
  },
  {
    id: 'systems-of-equations',
    name: 'Systems of Equations',
    summary: 'Solving two equations at once, and knowing when a system has one, none, or infinitely many solutions.',
    covers: ['Substitution', 'Elimination', 'Number of solutions', 'Systems in context'],
    advice: [
      'Use substitution when one variable is already isolated; use elimination when you can line up and cancel a variable.',
      'One solution = lines cross once (different slopes). No solution = parallel (same slope, different intercept). Infinite = identical lines.',
      'For "no solution / infinitely many" questions, compare the equations in y = mx + b form rather than solving.',
      'Label what each variable represents in word problems before you build the two equations.',
    ],
    videos: [
      { title: 'Substitution vs. elimination' },
      { title: 'Number-of-solutions questions' },
    ],
  },
  {
    id: 'quadratics-polynomials',
    name: 'Quadratics & Polynomials',
    summary: 'Factoring, the quadratic formula, vertex/standard forms, and what the discriminant tells you.',
    covers: ['Factoring', 'Quadratic formula', 'Vertex & standard form', 'Discriminant & number of roots'],
    advice: [
      'Try factoring first — most SAT quadratics factor cleanly. Fall back to the quadratic formula only when they do not.',
      'Vertex form y = a(x − h)² + k hands you the vertex (h, k) directly; great for max/min and axis-of-symmetry questions.',
      'The discriminant b² − 4ac tells the number of real solutions: positive = 2, zero = 1, negative = 0.',
      'The roots are the x-intercepts. If a question gives you the zeros, write the factors: zeros 3 and −2 → (x − 3)(x + 2).',
    ],
    videos: [
      { title: 'Factoring & solving quadratics' },
      { title: 'Vertex form, parabolas & the discriminant' },
    ],
  },
  {
    id: 'exponential-functions',
    name: 'Exponential Functions',
    summary: 'Growth and decay modeled by y = a·bˣ, and connecting the base to a percent rate.',
    covers: ['Exponential growth & decay', 'Interpreting a and b', 'Percent growth ↔ base', 'Half-life / doubling'],
    advice: [
      'In y = a·bˣ, a is the starting amount and b is the multiplier per step. b > 1 is growth, 0 < b < 1 is decay.',
      'Convert percents to a base: +5% per year → b = 1.05; −8% per year → b = 0.92.',
      'Contrast with linear: linear adds the same amount each step, exponential multiplies by the same factor each step.',
      'Watch the units on x — if the rate is "per year" then x must be measured in years.',
    ],
    videos: [
      { title: 'Exponential growth & decay basics' },
      { title: 'Turning percent rates into equations' },
    ],
  },
  {
    id: 'data-statistics',
    name: 'Data & Statistics',
    summary: 'Mean/median/mode, spread, reading tables and scatterplots, probability, and drawing valid conclusions.',
    covers: ['Mean, median, mode & range', 'Standard deviation (conceptual)', 'Scatterplots & line of best fit', 'Two-way tables & probability'],
    advice: [
      'Mean is pulled toward outliers; median is not. If a question mentions skew or an extreme value, think median.',
      'For two-way tables, underline exactly which row/column the probability is restricted to before you divide.',
      'A line of best fit is used to predict and to read slope as a rate — you rarely need its exact equation.',
      'Never confuse correlation with causation, and check whether a sample is random before generalizing to a population.',
    ],
    videos: [
      { title: 'Center, spread & interpreting data' },
      { title: 'Scatterplots, tables & probability' },
    ],
  },
  {
    id: 'geometry-trigonometry',
    name: 'Geometry & Trigonometry',
    summary: 'Angles, triangles, circles, area/volume, right-triangle trig, and radian measure.',
    covers: ['Angles & triangles', 'Circles (equations, arcs, sectors)', 'Area, perimeter & volume', 'Right-triangle trig & radians'],
    advice: [
      'Memorize the special right triangles (30-60-90 and 45-45-90) and the Pythagorean triples (3-4-5, 5-12-13).',
      'SOH-CAH-TOA: sine = opp/hyp, cosine = adj/hyp, tangent = opp/adj. Sin(θ) = cos(90° − θ).',
      'Circle equation: (x − h)² + (y − k)² = r², center (h, k), radius r. Complete the square to get there.',
      'The reference sheet gives area/volume formulas — know which to reach for; radians: 180° = π.',
    ],
    videos: [
      { title: 'Triangles, circles & the reference sheet' },
      { title: 'Right-triangle trig & radians' },
    ],
  },
]

/** Look up a topic by its skill id (adaptive `skillId`). */
export function prepTopicById(id: string): PrepTopic | undefined {
  return SAT_PREP_TOPICS.find((t) => t.id === id)
}
