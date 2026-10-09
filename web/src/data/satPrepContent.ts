/**
 * Study content for the SAT Math prep page (`/sat/prep`).
 *
 * Each topic's `id` matches a row in the `sat_skills` table and the `skillId`
 * used by the adaptive engine, so the dashboard's "Study" button can deep-link
 * straight to the matching section via `/sat/prep#<id>`.
 *
 * Every string field below (except `name`, `covers`, and video titles) is rendered
 * through <MathText>, so LaTeX goes in \\( ... \\) / \\[ ... \\].
 *
 * Videos are intentionally placeholders; set `youtubeId` (the 11-char ID from a
 * youtube.com/watch?v=<id> URL) on a video to make it play. Until then it renders
 * as a labelled "coming soon" slot.
 */

export interface PrepVideo {
  /** Short label shown under/over the player, e.g. "Core concepts walkthrough". */
  title: string
  /** YouTube video ID. Leave undefined to render a placeholder. */
  youtubeId?: string
}

/** One idea from the written lesson: a heading and a short explanation. */
export interface PrepConcept {
  heading: string
  body: string
}

/** A formula-sheet entry; `tex` is raw LaTeX (rendered as display math, no delimiters). */
export interface PrepFormula {
  label: string
  tex: string
}

/** A fully worked problem: the student tries it, then reveals the steps. */
export interface PrepWorkedExample {
  problem: string
  steps: string[]
  answer: string
}

/** A short self-check with a one-line answer and reason. */
export interface PrepQuickCheck {
  question: string
  answer: string
}

export interface PrepTopic {
  /** Matches `sat_skills.id` / adaptive `skillId`. */
  id: string
  /** Display name, matches `sat_skills.name`. */
  name: string
  /** One-line summary of what the topic covers. */
  summary: string
  /** What shows up on the test: concrete sub-skills. */
  covers: string[]
  /** The written lesson, in reading order. */
  concepts: PrepConcept[]
  /** The formulas worth memorizing for this topic. */
  formulas: PrepFormula[]
  /** Worked examples, easiest first. */
  examples: PrepWorkedExample[]
  /** Quick self-checks with hidden answers. */
  checks: PrepQuickCheck[]
  /** The mistakes that cost the most points on this topic. */
  traps: string[]
  /** How-to-study advice: short, actionable tips. */
  advice: string[]
  /** Placeholder video slots (fill in `youtubeId` later). */
  videos: PrepVideo[]
}

export const SAT_PREP_TOPICS: PrepTopic[] = [
  {
    id: 'arithmetic-percentages',
    name: 'Arithmetic & Percentages',
    summary: 'Ratios, proportions, percent change, and unit conversions, which come up in many of the easier Math questions.',
    covers: ['Ratios & proportions', 'Percent of / percent change', 'Unit rates & conversions', 'Fractions and decimals'],
    concepts: [
      {
        heading: 'Ratios compare parts',
        body: 'A ratio like \\(3:5\\) compares two parts. If boys to girls is \\(3:5\\), there are \\(3 + 5 = 8\\) parts in total, so boys are \\(\\tfrac{3}{8}\\) of the class, not \\(\\tfrac{3}{5}\\). To scale a ratio, multiply both parts by the same number.',
      },
      {
        heading: 'Proportions: set up, then cross-multiply',
        body: 'When two ratios are equal, write them as fractions with matching units in the same positions, then cross-multiply. If 4 notebooks cost $10, then \\(\\tfrac{4}{10} = \\tfrac{n}{25}\\) gives \\(10n = 100\\), so $25 buys 10 notebooks.',
      },
      {
        heading: 'Think of every percent as a multiplier',
        body: 'Increasing by 20% means multiplying by \\(1.20\\); decreasing by 15% means multiplying by \\(0.85\\). Back-to-back changes multiply: a 20% increase followed by a 20% decrease is \\(1.2 \\times 0.8 = 0.96\\), a net 4% decrease, not 0%.',
      },
      {
        heading: 'Percent change is measured against the original',
        body: 'Percent change is the change divided by the starting value. Going from 50 to 60 is a 20% increase (\\(\\tfrac{10}{50}\\)), but going from 60 back to 50 is only a \\(16.\\overline{6}\\)% decrease (\\(\\tfrac{10}{60}\\)).',
      },
      {
        heading: 'Unit conversions: cancel units like factors',
        body: 'Multiply by fractions equal to 1, arranged so the unit you don’t want cancels: \\(90\\ \\tfrac{\\text{km}}{\\text{h}} \\times \\tfrac{1000\\ \\text{m}}{1\\ \\text{km}} \\times \\tfrac{1\\ \\text{h}}{3600\\ \\text{s}} = 25\\ \\tfrac{\\text{m}}{\\text{s}}\\).',
      },
    ],
    formulas: [
      { label: 'Percent change', tex: '\\text{percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%' },
      { label: 'Percent of a number', tex: '\\text{part} = \\frac{p}{100} \\times \\text{whole}' },
      { label: 'Proportion', tex: '\\frac{a}{b} = \\frac{c}{d} \\;\\Rightarrow\\; ad = bc' },
      { label: 'Repeated percent change', tex: '\\text{final} = \\text{start} \\times (1 \\pm r)^n' },
    ],
    examples: [
      {
        problem: 'A jacket’s price rose from $80 to $92. By what percent did the price increase?',
        steps: [
          'Find the change: \\(92 - 80 = 12\\).',
          'Divide by the original price, not the new one: \\(\\tfrac{12}{80} = 0.15\\).',
          'Convert to a percent: \\(0.15 \\times 100\\% = 15\\%\\).',
        ],
        answer: '15%',
      },
      {
        problem: 'A recipe uses flour and sugar in a \\(5:2\\) ratio. If 35 cups of flour and sugar are used in total, how many cups are sugar?',
        steps: [
          'Count the total parts: \\(5 + 2 = 7\\).',
          'Find the size of one part: \\(35 \\div 7 = 5\\) cups.',
          'Sugar is 2 parts: \\(2 \\times 5 = 10\\) cups.',
        ],
        answer: '10 cups',
      },
      {
        problem: 'A store marks a $50 item up 40%, then puts it on sale at 25% off the marked-up price. What is the sale price?',
        steps: [
          'The markup is a multiplier of \\(1.40\\): \\(50 \\times 1.40 = 70\\).',
          'The discount is a multiplier of \\(0.75\\), applied to the new price: \\(70 \\times 0.75 = 52.5\\).',
          'Notice it is not \\(50 \\times 1.15\\); percents applied in sequence multiply.',
        ],
        answer: '$52.50',
      },
    ],
    checks: [
      { question: 'What is 30% of 250?', answer: '\\(0.30 \\times 250 = 75\\).' },
      { question: 'A population drops from 400 to 340. What is the percent decrease?', answer: '\\(\\tfrac{400 - 340}{400} = \\tfrac{60}{400} = 15\\%\\).' },
      { question: '\\(x\\) is 25% greater than \\(y\\), and \\(y = 48\\). What is \\(x\\)?', answer: '\\(x = 1.25 \\times 48 = 60\\).' },
    ],
    traps: [
      'Dividing by the new value instead of the original when finding a percent change.',
      'Adding successive percents: +20% then −20% is a net 4% loss, not 0%.',
      'Treating a part-to-part ratio (\\(3:5\\)) as a fraction of the whole (\\(\\tfrac{3}{5}\\) instead of \\(\\tfrac{3}{8}\\)).',
      'Comparing quantities before converting them to the same units.',
    ],
    advice: [
      'Memorize the percent-change formula: (new − old) ÷ old × 100. Most percent questions come down to this formula.',
      'Translate words into an equation before touching numbers: "of" means multiply, "is" means equals.',
      'For "percent greater/less than," decide the base (what you are comparing to) first; it is the number after "than".',
      'When the answer choices are numbers, plugging them back into the question is often faster than solving forward.',
    ],
    videos: [
      { title: 'Ultimate Percent Change Formula [TOP 10 SAT Formulas]', youtubeId: 'hdvqs1a2G2c' },
      { title: 'SAT Math Medium: Ratios, Rates, and Proportions', youtubeId: 'MY98DmxOxXM' },
    ],
  },
  {
    id: 'algebra-equations',
    name: 'Algebra & Equations',
    summary: 'Solving linear equations and inequalities, and rearranging formulas for a target variable.',
    covers: ['Linear equations in one variable', 'Inequalities', 'Absolute value', 'Solving for a variable in a formula'],
    concepts: [
      {
        heading: 'Keep the equation balanced',
        body: 'An equation is a balance: whatever you do to one side, do to the other. Clear parentheses (distribute) and combine like terms first, then move variable terms to one side and constants to the other.',
      },
      {
        heading: 'Inequalities work the same, with one exception',
        body: 'Solve an inequality exactly like an equation, but flip the sign whenever you multiply or divide by a negative number: \\(-3x > 12\\) becomes \\(x < -4\\).',
      },
      {
        heading: 'Absolute value splits into two cases',
        body: '\\(|x - 3| = 5\\) means the inside is 5 away from zero, so \\(x - 3 = 5\\) or \\(x - 3 = -5\\), giving \\(x = 8\\) or \\(x = -2\\). An absolute value can never equal a negative number, so \\(|x| = -4\\) has no solution.',
      },
      {
        heading: 'One, none, or infinitely many solutions',
        body: 'Simplify both sides to \\(ax + b = cx + d\\). If \\(a \\ne c\\) there is exactly one solution. If \\(a = c\\) but \\(b \\ne d\\), the \\(x\\)-terms cancel and leave something false like \\(3 = 7\\): no solution. If \\(a = c\\) and \\(b = d\\), you get something always true like \\(3 = 3\\): infinitely many.',
      },
      {
        heading: 'Solving for a variable in a formula',
        body: 'Treat every other letter as if it were a number and isolate the target. From \\(A = \\tfrac{1}{2}bh\\), multiply by 2 and divide by \\(b\\) to get \\(h = \\tfrac{2A}{b}\\).',
      },
    ],
    formulas: [
      { label: 'Flip rule', tex: '-ax > c \\;\\Rightarrow\\; x < -\\tfrac{c}{a} \\quad (a > 0)' },
      { label: 'Absolute value equation', tex: '|u| = k \\;\\Rightarrow\\; u = k \\text{ or } u = -k \\quad (k \\ge 0)' },
      { label: 'Absolute value inequality', tex: '|u| \\le k \\;\\Rightarrow\\; -k \\le u \\le k' },
      { label: 'Infinitely many solutions', tex: 'ax + b = cx + d \\text{ with } a = c,\\ b = d' },
    ],
    examples: [
      {
        problem: 'Solve \\(3(2x - 5) = 4x + 7\\).',
        steps: [
          'Distribute: \\(6x - 15 = 4x + 7\\).',
          'Subtract \\(4x\\) from both sides: \\(2x - 15 = 7\\).',
          'Add 15: \\(2x = 22\\), so \\(x = 11\\).',
          'Check: \\(3(22 - 5) = 51\\) and \\(4(11) + 7 = 51\\). ✓',
        ],
        answer: '\\(x = 11\\)',
      },
      {
        problem: 'For what value of \\(k\\) does \\(4x + k = 2(2x - 3)\\) have infinitely many solutions?',
        steps: [
          'Simplify the right side: \\(4x - 6\\).',
          'The \\(x\\)-coefficients already match (4 and 4), so the constants must match too.',
          'Set \\(k = -6\\).',
        ],
        answer: '\\(k = -6\\)',
      },
      {
        problem: 'Solve \\(|2x + 1| \\le 7\\).',
        steps: [
          'Rewrite as a compound inequality: \\(-7 \\le 2x + 1 \\le 7\\).',
          'Subtract 1 from all three parts: \\(-8 \\le 2x \\le 6\\).',
          'Divide by 2: \\(-4 \\le x \\le 3\\).',
        ],
        answer: '\\(-4 \\le x \\le 3\\)',
      },
    ],
    checks: [
      { question: 'Solve \\(5 - 2x > 11\\).', answer: '\\(-2x > 6\\), so \\(x < -3\\) (the sign flips when dividing by \\(-2\\)).' },
      { question: 'Solve \\(\\tfrac{x}{3} + 4 = 10\\).', answer: '\\(\\tfrac{x}{3} = 6\\), so \\(x = 18\\).' },
      { question: 'Solve \\(v = u + at\\) for \\(t\\).', answer: '\\(t = \\tfrac{v - u}{a}\\).' },
    ],
    traps: [
      'Distributing a negative to only the first term: \\(-(x - 4)\\) is \\(-x + 4\\), not \\(-x - 4\\).',
      'Forgetting to flip the inequality after multiplying or dividing by a negative.',
      'Solving only the positive case of an absolute-value equation.',
      'Answering for the wrong quantity: the SAT often asks for \\(2x + 1\\) or \\(x - y\\), not \\(x\\) itself.',
    ],
    advice: [
      'Isolate the variable one operation at a time, and do the same thing to both sides; write every step, do not skip.',
      'Flip the inequality sign whenever you multiply or divide by a negative number. This is the #1 trap here.',
      'Absolute-value equations split into two cases: the inside equals the positive and the negative of the value.',
      'Check your answer by substituting it back in; it costs 10 seconds and catches most arithmetic slips.',
    ],
    videos: [
      { title: 'SAT Solving Linear Equations and Linear Inequalities (2021) - Heart of Algebra', youtubeId: 'wBA0TpNy0Wo' },
      { title: 'Solving Absolute Value Equations - SAT Math Part 10', youtubeId: 'D2NXnM8RCu0' },
    ],
  },
  {
    id: 'linear-functions',
    name: 'Linear Functions',
    summary: 'Slope-intercept form and reading rate-of-change and starting values out of graphs, tables, and word problems.',
    covers: ['Slope & y-intercept', 'Interpreting slope/intercept in context', 'Parallel & perpendicular lines', 'Graphs and tables of lines'],
    concepts: [
      {
        heading: 'Slope-intercept form',
        body: 'In \\(y = mx + b\\), \\(m\\) is the slope (how much \\(y\\) changes when \\(x\\) goes up by 1) and \\(b\\) is the \\(y\\)-intercept (the value of \\(y\\) when \\(x = 0\\)).',
      },
      {
        heading: 'Slope and intercept in context',
        body: 'In word problems, the slope is a rate and the intercept is a starting amount. In \\(C = 65h + 40\\) for a plumber’s bill, 65 is dollars per hour and 40 is the flat fee charged before any hours are worked. Attaching units to each number is the fastest way to interpret it.',
      },
      {
        heading: 'Building a line from two points',
        body: 'Find the slope with \\(m = \\tfrac{y_2 - y_1}{x_2 - x_1}\\), then substitute either point into \\(y = mx + b\\) to solve for \\(b\\). Point-slope form, \\(y - y_1 = m(x - x_1)\\), skips the second step.',
      },
      {
        heading: 'Standard form',
        body: 'For \\(Ax + By = C\\), the slope is \\(-\\tfrac{A}{B}\\). Find intercepts by setting the other variable to 0: the \\(x\\)-intercept is \\(\\tfrac{C}{A}\\) and the \\(y\\)-intercept is \\(\\tfrac{C}{B}\\).',
      },
      {
        heading: 'Spotting a line in a table',
        body: 'A table is linear when \\(y\\) changes by the same amount every time \\(x\\) goes up by the same step. That constant change per 1 unit of \\(x\\) is the slope; the value at \\(x = 0\\) is the intercept.',
      },
    ],
    formulas: [
      { label: 'Slope-intercept form', tex: 'y = mx + b' },
      { label: 'Slope from two points', tex: 'm = \\frac{y_2 - y_1}{x_2 - x_1}' },
      { label: 'Point-slope form', tex: 'y - y_1 = m(x - x_1)' },
      { label: 'Perpendicular slopes', tex: 'm_1 \\cdot m_2 = -1 \\quad\\Leftrightarrow\\quad m_2 = -\\frac{1}{m_1}' },
    ],
    examples: [
      {
        problem: 'A line passes through \\((2, 5)\\) and \\((6, 17)\\). Write its equation.',
        steps: [
          'Slope: \\(m = \\tfrac{17 - 5}{6 - 2} = \\tfrac{12}{4} = 3\\).',
          'Substitute \\((2, 5)\\): \\(5 = 3(2) + b\\), so \\(b = -1\\).',
          'Check the other point: \\(3(6) - 1 = 17\\). ✓',
        ],
        answer: '\\(y = 3x - 1\\)',
      },
      {
        problem: 'A gym charges according to \\(C = 25m + 60\\), where \\(C\\) is the total cost in dollars after \\(m\\) months. What do 25 and 60 represent?',
        steps: [
          '25 multiplies \\(m\\), so its units are dollars per month: it is the monthly fee.',
          '60 is the cost when \\(m = 0\\), before any months are paid: a one-time sign-up fee.',
        ],
        answer: '25 is the monthly fee; 60 is the one-time sign-up fee.',
      },
      {
        problem: 'What is the slope of a line perpendicular to \\(2x + 5y = 10\\)?',
        steps: [
          'Slope of the given line: \\(-\\tfrac{A}{B} = -\\tfrac{2}{5}\\).',
          'Take the negative reciprocal: flip the fraction and change the sign.',
        ],
        answer: '\\(\\tfrac{5}{2}\\)',
      },
    ],
    checks: [
      { question: 'What is the slope of the line through \\((-1, 4)\\) and \\((3, -4)\\)?', answer: '\\(\\tfrac{-4 - 4}{3 - (-1)} = \\tfrac{-8}{4} = -2\\).' },
      { question: 'What is the \\(y\\)-intercept of \\(3x - 2y = 12\\)?', answer: 'Set \\(x = 0\\): \\(-2y = 12\\), so the intercept is \\((0, -6)\\).' },
      { question: 'A table has \\(x = 0, 1, 2\\) and \\(y = 7, 10, 13\\). What is the equation?', answer: '\\(y\\) rises by 3 per step and starts at 7: \\(y = 3x + 7\\).' },
    ],
    traps: [
      'Flipping slope upside down: it is change in \\(y\\) over change in \\(x\\), never the reverse.',
      'Mixing point order, like \\(\\tfrac{y_2 - y_1}{x_1 - x_2}\\), which flips the sign.',
      'Reading the intercept as the rate (or vice versa) in a word problem.',
      'For perpendicular lines, taking only the reciprocal or only the negative instead of both.',
    ],
    advice: [
      'Know y = mx + b cold: m is the rate of change (slope), b is the value when x = 0 (the start).',
      'In context questions, put units on m and b: "$3 per hour" is the slope, "$5 flat fee" is the intercept.',
      'Slope = rise ÷ run = (y₂ − y₁) ÷ (x₂ − x₁). Pick any two clean points from a graph or table.',
      'Parallel lines share a slope; perpendicular slopes are negative reciprocals (m and −1/m).',
    ],
    videos: [
      { title: 'SAT Math Full Review: Lines, Linear Functions, Linear Systems', youtubeId: 'MV2_-MBCbq0' },
      { title: 'Interpreting linear functions - Basic example (Khan Academy)', youtubeId: 'hOsBsHA6okM' },
    ],
  },
  {
    id: 'systems-of-equations',
    name: 'Systems of Equations',
    summary: 'Solving two equations at once, and knowing when a system has one, none, or infinitely many solutions.',
    covers: ['Substitution', 'Elimination', 'Number of solutions', 'Systems in context'],
    concepts: [
      {
        heading: 'What a solution means',
        body: 'A solution to a system is a pair \\((x, y)\\) that makes both equations true at once. On a graph, it is the point where the two lines cross.',
      },
      {
        heading: 'Substitution',
        body: 'When one equation already reads \\(y = \\dots\\) or \\(x = \\dots\\), plug that expression into the other equation. You are left with one equation in one variable.',
      },
      {
        heading: 'Elimination',
        body: 'Line the equations up and add or subtract them so one variable cancels. If the coefficients don’t match yet, multiply one (or both) equations first. Multiply every term, including the constant.',
      },
      {
        heading: 'Counting solutions without solving',
        body: 'Put both lines in \\(y = mx + b\\) form. Different slopes: exactly one solution. Same slope, different intercepts: parallel lines, no solution. Same slope and same intercept: the same line, infinitely many solutions.',
      },
      {
        heading: 'Look for shortcuts',
        body: 'If a question asks for \\(x + y\\) or \\(2x - y\\), try adding or subtracting the equations directly; you may never need \\(x\\) and \\(y\\) separately.',
      },
    ],
    formulas: [
      { label: 'No solution', tex: '\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2}' },
      { label: 'Infinitely many solutions', tex: '\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}' },
      { label: 'Exactly one solution', tex: '\\frac{a_1}{a_2} \\ne \\frac{b_1}{b_2}' },
    ],
    examples: [
      {
        problem: 'Solve the system \\(2x + 3y = 12\\) and \\(4x - 3y = 6\\).',
        steps: [
          'The \\(y\\)-terms are opposites, so add the equations: \\(6x = 18\\), \\(x = 3\\).',
          'Substitute back: \\(2(3) + 3y = 12\\), so \\(3y = 6\\) and \\(y = 2\\).',
          'Check in the second equation: \\(4(3) - 3(2) = 6\\). ✓',
        ],
        answer: '\\((3, 2)\\)',
      },
      {
        problem: 'Student tickets cost $8 and adult tickets cost $12. A show sold 150 tickets for $1,440. How many student tickets were sold?',
        steps: [
          'Let \\(s\\) be student tickets and \\(a\\) adult tickets: \\(s + a = 150\\) and \\(8s + 12a = 1440\\).',
          'From the first equation, \\(a = 150 - s\\). Substitute: \\(8s + 12(150 - s) = 1440\\).',
          'Simplify: \\(8s + 1800 - 12s = 1440\\), so \\(-4s = -360\\) and \\(s = 90\\).',
          'Check: 60 adult tickets, and \\(8(90) + 12(60) = 720 + 720 = 1440\\). ✓',
        ],
        answer: '90 student tickets',
      },
      {
        problem: 'For what value of \\(c\\) does the system \\(3x + 2y = 7\\) and \\(6x + cy = 10\\) have no solution?',
        steps: [
          'No solution means parallel lines: the \\(x\\)- and \\(y\\)-coefficients are in the same ratio, but the constants are not.',
          'The \\(x\\)-ratio is \\(\\tfrac{3}{6} = \\tfrac{1}{2}\\), so \\(\\tfrac{2}{c} = \\tfrac{1}{2}\\) and \\(c = 4\\).',
          'Confirm the constants differ in ratio: \\(\\tfrac{7}{10} \\ne \\tfrac{1}{2}\\). ✓',
        ],
        answer: '\\(c = 4\\)',
      },
    ],
    checks: [
      { question: 'Solve \\(y = 2x - 1\\) and \\(3x + y = 14\\).', answer: 'Substitute: \\(3x + 2x - 1 = 14\\), so \\(x = 3\\) and \\(y = 5\\).' },
      { question: 'If \\(x + y = 10\\) and \\(x - y = 4\\), what is \\(x\\)?', answer: 'Add the equations: \\(2x = 14\\), so \\(x = 7\\).' },
      { question: 'How many solutions do \\(y = 3x + 2\\) and \\(6x - 2y = -4\\) have?', answer: 'The second becomes \\(y = 3x + 2\\): the same line, so infinitely many.' },
    ],
    traps: [
      'Finding \\(x\\) and stopping when the question asks for \\(y\\), or for \\(x + y\\).',
      'Subtracting equations but forgetting to subtract every term, especially negative ones.',
      'Calling identical lines "no solution": same slope and same intercept means infinitely many.',
      'Writing a word-problem system without first labeling what each variable stands for.',
    ],
    advice: [
      'Use substitution when one variable is already isolated; use elimination when you can line up and cancel a variable.',
      'One solution = lines cross once (different slopes). No solution = parallel (same slope, different intercept). Infinite = identical lines.',
      'For "no solution / infinitely many" questions, compare the equations in y = mx + b form rather than solving.',
      'Label what each variable represents in word problems before you build the two equations.',
    ],
    videos: [
      { title: 'SAT Math: Systems of Equations - Part 1 - Elimination & Substitution', youtubeId: 'UXKUkJeTD0U' },
      { title: 'SAT Math Part 06 - Systems of Equations, Elimination, and...', youtubeId: '8L8h-Wsbzk8' },
    ],
  },
  {
    id: 'quadratics-polynomials',
    name: 'Quadratics & Polynomials',
    summary: 'Factoring, the quadratic formula, vertex/standard forms, and what the discriminant tells you.',
    covers: ['Factoring', 'Quadratic formula', 'Vertex & standard form', 'Discriminant & number of roots'],
    concepts: [
      {
        heading: 'Three forms, three different clues',
        body: 'Standard form \\(y = ax^2 + bx + c\\) shows the \\(y\\)-intercept \\(c\\). Factored form \\(y = a(x - r)(x - s)\\) shows the zeros \\(r\\) and \\(s\\). Vertex form \\(y = a(x - h)^2 + k\\) shows the vertex \\((h, k)\\). In every form, \\(a > 0\\) opens upward (a minimum) and \\(a < 0\\) opens downward (a maximum).',
      },
      {
        heading: 'Factoring',
        body: 'For \\(x^2 + bx + c\\), find two numbers that multiply to \\(c\\) and add to \\(b\\). Also learn the difference of squares, \\(a^2 - b^2 = (a - b)(a + b)\\), which appears constantly.',
      },
      {
        heading: 'The quadratic formula always works',
        body: 'When factoring isn’t obvious, use \\(x = \\tfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\). The Desmos calculator built into the digital SAT can also find zeros and vertices by graphing.',
      },
      {
        heading: 'Finding the vertex',
        body: 'The vertex’s \\(x\\)-coordinate is \\(-\\tfrac{b}{2a}\\), which is also the average of the two zeros. Plug it back in to get the \\(y\\)-coordinate, the minimum or maximum value.',
      },
      {
        heading: 'The discriminant counts real solutions',
        body: 'Look at \\(b^2 - 4ac\\): positive means two real solutions, zero means exactly one, and negative means none (the parabola never touches the \\(x\\)-axis).',
      },
    ],
    formulas: [
      { label: 'Quadratic formula', tex: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}' },
      { label: 'Vertex x-coordinate', tex: 'h = -\\frac{b}{2a}' },
      { label: 'Discriminant', tex: '\\Delta = b^2 - 4ac' },
      { label: 'Sum and product of roots', tex: 'r + s = -\\frac{b}{a}, \\qquad rs = \\frac{c}{a}' },
      { label: 'Difference of squares', tex: 'a^2 - b^2 = (a - b)(a + b)' },
    ],
    examples: [
      {
        problem: 'Solve \\(x^2 - 5x - 14 = 0\\).',
        steps: [
          'Find two numbers that multiply to \\(-14\\) and add to \\(-5\\): \\(-7\\) and \\(2\\).',
          'Factor: \\((x - 7)(x + 2) = 0\\).',
          'Set each factor to zero: \\(x = 7\\) or \\(x = -2\\).',
        ],
        answer: '\\(x = 7\\) or \\(x = -2\\)',
      },
      {
        problem: 'What is the minimum value of \\(f(x) = 2x^2 - 12x + 23\\)?',
        steps: [
          '\\(a = 2 > 0\\), so the parabola opens up and the vertex is a minimum.',
          'Vertex \\(x\\): \\(-\\tfrac{-12}{2(2)} = 3\\).',
          'Evaluate: \\(f(3) = 2(9) - 36 + 23 = 5\\).',
        ],
        answer: '5',
      },
      {
        problem: 'For what value of \\(c\\) does \\(x^2 + 6x + c = 0\\) have exactly one real solution?',
        steps: [
          'Exactly one solution means the discriminant is zero: \\(6^2 - 4(1)(c) = 0\\).',
          'Solve: \\(36 - 4c = 0\\), so \\(c = 9\\).',
          'Check: \\(x^2 + 6x + 9 = (x + 3)^2\\), which has the single root \\(-3\\). ✓',
        ],
        answer: '\\(c = 9\\)',
      },
    ],
    checks: [
      { question: 'What are the zeros of \\(y = (x + 4)(x - 1)\\)?', answer: '\\(x = -4\\) and \\(x = 1\\) (each zero has the opposite sign of the number in its factor).' },
      { question: 'Solve \\(x^2 = 49\\).', answer: '\\(x = 7\\) or \\(x = -7\\).' },
      { question: 'How many real solutions does \\(x^2 + 2x + 5 = 0\\) have?', answer: 'None: \\(2^2 - 4(1)(5) = -16 < 0\\).' },
    ],
    traps: [
      'Dropping the negative root when taking a square root: \\(x^2 = 49\\) has two answers.',
      'Sign errors between zeros and factors: a zero at 3 means a factor of \\((x - 3)\\).',
      'Misreading vertex form: \\((x + 2)^2\\) means \\(h = -2\\), not \\(2\\).',
      'Dividing both sides by \\(x\\), which throws away the solution \\(x = 0\\).',
    ],
    advice: [
      'Try factoring first: most SAT quadratics factor cleanly. Fall back to the quadratic formula only when they do not.',
      'Vertex form y = a(x − h)² + k gives you the vertex (h, k) directly, which makes max/min and axis-of-symmetry questions quick.',
      'The discriminant b² − 4ac tells the number of real solutions: positive = 2, zero = 1, negative = 0.',
      'The roots are the x-intercepts. If a question gives you the zeros, write the factors: zeros 3 and −2 → (x − 3)(x + 2).',
    ],
    videos: [
      { title: 'Factoring Quadratics Made Easy - SAT Math: Every Method Explained', youtubeId: 'o2f4vmvEDS8' },
      { title: 'Parabolas: Vertex, Intercept, and General Form (SAT Math Review Course 25 of 39)', youtubeId: '50AlKNn8d1k' },
    ],
  },
  {
    id: 'exponential-functions',
    name: 'Exponential Functions',
    summary: 'Growth and decay modeled by y = a·bˣ, and connecting the base to a percent rate.',
    covers: ['Exponential growth & decay', 'Interpreting a and b', 'Percent growth ↔ base', 'Half-life / doubling'],
    concepts: [
      {
        heading: 'The shape of an exponential model',
        body: 'In \\(f(x) = a \\cdot b^x\\), \\(a\\) is the starting value (the output when \\(x = 0\\)) and \\(b\\) is the growth factor: what you multiply by each time \\(x\\) increases by 1. If \\(b > 1\\) it grows; if \\(0 < b < 1\\) it decays.',
      },
      {
        heading: 'Turning a percent into a base',
        body: 'Growth by \\(r\\) per period gives \\(b = 1 + r\\); decay by \\(r\\) gives \\(b = 1 - r\\). So +5% per year is \\(b = 1.05\\), and −8% per year is \\(b = 0.92\\). Reading it backwards, \\(b = 0.92\\) means 8% is lost each period.',
      },
      {
        heading: 'Linear adds, exponential multiplies',
        body: 'In a table, a linear pattern changes by the same difference each step (5, 8, 11, 14). An exponential pattern changes by the same ratio (5, 15, 45, 135). Always check which one you have.',
      },
      {
        heading: 'Matching the time unit',
        body: 'The exponent counts periods. If something grows 3% every 2 years and \\(t\\) is in years, use \\(a(1.03)^{t/2}\\). If it grows 1% per month and \\(t\\) is in years, use \\(a(1.01)^{12t}\\).',
      },
      {
        heading: 'Doubling and half-life',
        body: 'Something that doubles every \\(d\\) units is \\(a \\cdot 2^{t/d}\\). Something with a half-life of \\(h\\) is \\(a \\cdot \\left(\\tfrac{1}{2}\\right)^{t/h}\\). When the time is a whole number of periods, just count the doublings or halvings.',
      },
    ],
    formulas: [
      { label: 'Exponential model', tex: 'f(x) = a \\cdot b^x' },
      { label: 'Percent growth / decay', tex: 'f(t) = a(1 + r)^t \\qquad f(t) = a(1 - r)^t' },
      { label: 'Doubling time d', tex: 'f(t) = a \\cdot 2^{t/d}' },
      { label: 'Half-life h', tex: 'f(t) = a \\left(\\tfrac{1}{2}\\right)^{t/h}' },
    ],
    examples: [
      {
        problem: 'A town of 12,000 people grows 4% per year. Write a model and estimate the population after 3 years.',
        steps: [
          'Start \\(a = 12{,}000\\); 4% growth gives \\(b = 1.04\\). Model: \\(P(t) = 12{,}000(1.04)^t\\).',
          'Evaluate: \\(1.04^3 = 1.124864\\), so \\(P(3) = 12{,}000 \\times 1.124864 \\approx 13{,}498\\).',
          'Notice this is more than \\(12{,}000 \\times 1.12 = 13{,}440\\): growth compounds on the new total each year.',
        ],
        answer: '\\(P(t) = 12{,}000(1.04)^t\\); about 13,498 people',
      },
      {
        problem: 'A sample of 80 mg has a half-life of 5 hours. How much remains after 15 hours?',
        steps: [
          'Count half-lives: \\(15 \\div 5 = 3\\).',
          'Halve three times: \\(80 \\to 40 \\to 20 \\to 10\\).',
          'Equivalently, \\(80 \\cdot \\left(\\tfrac{1}{2}\\right)^3 = 10\\).',
        ],
        answer: '10 mg',
      },
      {
        problem: 'A car’s value is modeled by \\(V(t) = 24{,}000(0.85)^t\\), with \\(t\\) in years. Interpret 24,000 and 0.85.',
        steps: [
          '24,000 is \\(V(0)\\): the car’s value when it was bought.',
          '\\(0.85 = 1 - 0.15\\), so each year the car keeps 85% of its value, losing 15%.',
        ],
        answer: 'Purchase value $24,000; loses 15% of its value each year.',
      },
    ],
    checks: [
      { question: 'Is \\(y = 300(0.92)^x\\) growth or decay, and by what percent?', answer: 'Decay, since \\(0.92 < 1\\); it loses 8% per step.' },
      { question: 'A table reads 5, 15, 45, 135. Linear or exponential?', answer: 'Exponential: each value is 3 times the previous one.' },
      { question: '$500 doubles every 6 years. What is it worth after 18 years?', answer: 'Three doublings: \\(500 \\cdot 2^3 = \\$4{,}000\\).' },
    ],
    traps: [
      'Using the rate as the base: 5% growth is \\(b = 1.05\\), not \\(b = 0.05\\).',
      'Writing \\(1.08\\) for an 8% decrease; decay is \\(1 - 0.08 = 0.92\\).',
      'Mismatched time units in the exponent (a monthly rate with \\(t\\) in years).',
      'Treating compound growth as linear: 5% a year for 10 years is not 50%.',
    ],
    advice: [
      'In y = a·bˣ, a is the starting amount and b is the multiplier per step. b > 1 is growth, 0 < b < 1 is decay.',
      'Convert percents to a base: +5% per year → b = 1.05; −8% per year → b = 0.92.',
      'Contrast with linear: linear adds the same amount each step, exponential multiplies by the same factor each step.',
      'Watch the units on x: if the rate is "per year" then x must be measured in years.',
    ],
    videos: [
      { title: 'SAT Math - Exponential Growth and Decay', youtubeId: '1ZE5EihrtZc' },
      { title: 'Exponential Functions (SAT Math Review Course 29 of 39)', youtubeId: 'qNgZxjJBey4' },
    ],
  },
  {
    id: 'data-statistics',
    name: 'Data & Statistics',
    summary: 'Mean/median/mode, spread, reading tables and scatterplots, probability, and drawing valid conclusions.',
    covers: ['Mean, median, mode & range', 'Standard deviation (conceptual)', 'Scatterplots & line of best fit', 'Two-way tables & probability'],
    concepts: [
      {
        heading: 'Measures of center',
        body: 'The mean is the sum divided by the count. The median is the middle value once the data are sorted (the average of the two middle values for an even count). The mode is the most frequent value. Outliers pull the mean toward them but barely move the median.',
      },
      {
        heading: 'Work with totals',
        body: 'Since \\(\\text{sum} = \\text{mean} \\times \\text{count}\\), many mean problems become easy: convert every mean to a total, do the arithmetic on totals, then divide back.',
      },
      {
        heading: 'Spread and standard deviation',
        body: 'Range is max minus min. Standard deviation measures how far values typically sit from the mean. You won’t calculate it on the SAT, but you will compare it: data bunched near the mean have a smaller SD. Adding the same number to every value shifts the mean but leaves the SD unchanged.',
      },
      {
        heading: 'Probability from tables',
        body: 'Probability is favorable outcomes over total outcomes. In a two-way table, the phrase after "given" or "of those who" names the group that goes in the denominator; only count within that row or column.',
      },
      {
        heading: 'Scatterplots and conclusions',
        body: 'A line of best fit predicts values, and its slope is a rate in context. A residual is actual minus predicted. Random sampling lets you generalize to the population that was sampled; only random assignment in an experiment supports cause-and-effect.',
      },
    ],
    formulas: [
      { label: 'Mean', tex: '\\bar{x} = \\frac{\\text{sum of values}}{\\text{number of values}}' },
      { label: 'Total from a mean', tex: '\\text{sum} = \\bar{x} \\times n' },
      { label: 'Probability', tex: 'P(A) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}' },
      { label: 'Conditional probability', tex: 'P(A \\mid B) = \\frac{\\text{count}(A \\text{ and } B)}{\\text{count}(B)}' },
      { label: 'Residual', tex: '\\text{residual} = \\text{actual} - \\text{predicted}' },
    ],
    examples: [
      {
        problem: 'The mean of 5 test scores is 82. What score on a sixth test would raise the mean to 84?',
        steps: [
          'Current total: \\(82 \\times 5 = 410\\).',
          'Needed total for six tests: \\(84 \\times 6 = 504\\).',
          'Sixth score: \\(504 - 410 = 94\\).',
        ],
        answer: '94',
      },
      {
        problem: 'In a survey, 45 seniors play a sport and 30 seniors do not. If a senior is chosen at random, what is the probability they play a sport?',
        steps: [
          'The condition is "a senior," so the denominator is all seniors: \\(45 + 30 = 75\\).',
          'Favorable: seniors who play a sport, 45.',
          '\\(P = \\tfrac{45}{75} = \\tfrac{3}{5}\\).',
        ],
        answer: '\\(\\tfrac{3}{5}\\) (0.6)',
      },
      {
        problem: 'The data set 3, 5, 6, 8, 40 describes commute times in minutes. Which better describes a typical commute, the mean or the median?',
        steps: [
          'Mean: \\(\\tfrac{3 + 5 + 6 + 8 + 40}{5} = \\tfrac{62}{5} = 12.4\\).',
          'Median: the middle of the sorted list, 6.',
          'The outlier 40 drags the mean above four of the five values, so the median is more representative.',
        ],
        answer: 'The median (6 minutes)',
      },
    ],
    checks: [
      { question: 'What is the median of 4, 9, 1, 7, 12, 3?', answer: 'Sorted: 1, 3, 4, 7, 9, 12. Median \\(= \\tfrac{4 + 7}{2} = 5.5\\).' },
      { question: 'If 10 is added to every value in a data set, what happens to the mean and standard deviation?', answer: 'The mean rises by 10; the SD stays the same because the spread doesn’t change.' },
      { question: 'A random sample of 500 adults from one city is surveyed. Can the results be applied to all adults in the country?', answer: 'No. They generalize only to adults in that city, the population that was sampled.' },
    ],
    traps: [
      'Taking the median of an unsorted list.',
      'Using the whole table’s total as the denominator for a conditional probability.',
      'Claiming cause-and-effect from an observational study with no random assignment.',
      'Generalizing a sample’s results beyond the population it was drawn from.',
    ],
    advice: [
      'Mean is pulled toward outliers; median is not. If a question mentions skew or an extreme value, think median.',
      'For two-way tables, underline exactly which row/column the probability is restricted to before you divide.',
      'A line of best fit is used to predict and to read slope as a rate; you rarely need its exact equation.',
      'Never confuse correlation with causation, and check whether a sample is random before generalizing to a population.',
    ],
    videos: [
      { title: 'SAT Math: Mean Median Mode', youtubeId: '6soyH2iLdQg' },
      { title: 'Digital SAT Math - Ottocento #20: Probability + Two-Way Tables', youtubeId: '63q0bcwB1l4' },
    ],
  },
  {
    id: 'geometry-trigonometry',
    name: 'Geometry & Trigonometry',
    summary: 'Angles, triangles, circles, area/volume, right-triangle trig, and radian measure.',
    covers: ['Angles & triangles', 'Circles (equations, arcs, sectors)', 'Area, perimeter & volume', 'Right-triangle trig & radians'],
    concepts: [
      {
        heading: 'Angle facts',
        body: 'Angles on a straight line sum to \\(180^\\circ\\), and so do a triangle’s interior angles. When a line crosses two parallel lines, corresponding and alternate interior angles are equal, and same-side interior angles sum to \\(180^\\circ\\).',
      },
      {
        heading: 'Similar triangles',
        body: 'Similar triangles have equal angles and proportional sides. If the sides scale by \\(k\\), areas scale by \\(k^2\\) and volumes (for similar solids) by \\(k^3\\).',
      },
      {
        heading: 'Right triangles',
        body: 'Use \\(a^2 + b^2 = c^2\\), and memorize the shortcuts: a 45-45-90 triangle has sides \\(x, x, x\\sqrt{2}\\); a 30-60-90 triangle has sides \\(x, x\\sqrt{3}, 2x\\). Common triples are 3-4-5 and 5-12-13 (and their multiples).',
      },
      {
        heading: 'Trigonometry',
        body: 'SOH-CAH-TOA: \\(\\sin\\theta = \\tfrac{\\text{opp}}{\\text{hyp}}\\), \\(\\cos\\theta = \\tfrac{\\text{adj}}{\\text{hyp}}\\), \\(\\tan\\theta = \\tfrac{\\text{opp}}{\\text{adj}}\\). The two acute angles of a right triangle are complementary, so \\(\\sin\\theta = \\cos(90^\\circ - \\theta)\\).',
      },
      {
        heading: 'Circles and radians',
        body: 'A circle with center \\((h, k)\\) and radius \\(r\\) is \\((x - h)^2 + (y - k)^2 = r^2\\); complete the square to get there from expanded form. An arc or sector is a fraction of the whole: \\(\\tfrac{\\theta}{360^\\circ}\\) of the circumference or area. In radians, \\(180^\\circ = \\pi\\) and arc length is simply \\(s = r\\theta\\).',
      },
    ],
    formulas: [
      { label: 'Pythagorean theorem', tex: 'a^2 + b^2 = c^2' },
      { label: 'Circle equation', tex: '(x - h)^2 + (y - k)^2 = r^2' },
      { label: 'Arc length and sector area (degrees)', tex: 's = \\frac{\\theta}{360^\\circ} \\cdot 2\\pi r, \\qquad A = \\frac{\\theta}{360^\\circ} \\cdot \\pi r^2' },
      { label: 'Radians', tex: '180^\\circ = \\pi \\text{ rad}, \\qquad s = r\\theta' },
      { label: 'Complementary angles', tex: '\\sin\\theta = \\cos(90^\\circ - \\theta)' },
    ],
    examples: [
      {
        problem: 'A right triangle has legs 9 and 12. Find the hypotenuse and the sine of the angle opposite the side of length 9.',
        steps: [
          'Hypotenuse: \\(\\sqrt{9^2 + 12^2} = \\sqrt{225} = 15\\) (a 3-4-5 triangle scaled by 3).',
          'Sine is opposite over hypotenuse: \\(\\tfrac{9}{15} = \\tfrac{3}{5}\\).',
        ],
        answer: 'Hypotenuse 15; \\(\\sin\\theta = \\tfrac{3}{5}\\)',
      },
      {
        problem: 'Find the center and radius of the circle \\(x^2 + y^2 - 6x + 4y - 12 = 0\\).',
        steps: [
          'Group and move the constant: \\((x^2 - 6x) + (y^2 + 4y) = 12\\).',
          'Complete each square, adding to both sides: \\((x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4\\).',
          'Factor: \\((x - 3)^2 + (y + 2)^2 = 25\\).',
        ],
        answer: 'Center \\((3, -2)\\), radius 5',
      },
      {
        problem: 'A circle has radius 6. What is the length of an arc with a central angle of \\(60^\\circ\\)?',
        steps: [
          'Fraction of the circle: \\(\\tfrac{60}{360} = \\tfrac{1}{6}\\).',
          'Circumference: \\(2\\pi(6) = 12\\pi\\).',
          'Arc length: \\(\\tfrac{1}{6} \\times 12\\pi = 2\\pi\\).',
        ],
        answer: '\\(2\\pi\\)',
      },
    ],
    checks: [
      { question: 'If \\(\\sin x^\\circ = \\cos 25^\\circ\\) and \\(x\\) is acute, what is \\(x\\)?', answer: '\\(x = 90 - 25 = 65\\).' },
      { question: 'Convert \\(\\tfrac{3\\pi}{4}\\) radians to degrees.', answer: '\\(\\tfrac{3}{4} \\times 180^\\circ = 135^\\circ\\).' },
      { question: 'Two similar triangles have sides in a \\(2:3\\) ratio. What is the ratio of their areas?', answer: 'Square the scale factor: \\(4:9\\).' },
    ],
    traps: [
      'Calculator in the wrong mode: degrees vs. radians.',
      'Sign flips in a circle’s center: \\((x + 2)^2\\) means \\(h = -2\\).',
      'Scaling area or volume by \\(k\\) instead of \\(k^2\\) or \\(k^3\\).',
      'Completing the square on one side only; whatever you add must be added to both sides.',
    ],
    advice: [
      'Memorize the special right triangles (30-60-90 and 45-45-90) and the Pythagorean triples (3-4-5, 5-12-13).',
      'SOH-CAH-TOA: sine = opp/hyp, cosine = adj/hyp, tangent = opp/adj. Sin(θ) = cos(90° − θ).',
      'Circle equation: (x − h)² + (y − k)² = r², center (h, k), radius r. Complete the square to get there.',
      'The reference sheet gives area/volume formulas, so know which to reach for; radians: 180° = π.',
    ],
    videos: [
      { title: 'SAT Math Full Unit Review: Geometry and Trigonometry', youtubeId: 'Vwtux_sW9Zs' },
      { title: 'Right Triangle Trig SOH CAH TOA (SAT Math Review Course 16 of 39)', youtubeId: 'wca4k-kzc4w' },
    ],
  },
]

/** Look up a topic by its skill id (adaptive `skillId`). */
export function prepTopicById(id: string): PrepTopic | undefined {
  return SAT_PREP_TOPICS.find((t) => t.id === id)
}
