// SAT Math: strategies for the built-in graphing calculator. Text only (steps described in words,
// math in \( \) for MathText). No runtime imports, so the acceptance script can load it directly.

export interface DesmosGuideExample {
  problem: string
  steps: string[]
}

export interface DesmosGuideSection {
  id: string
  title: string
  /** When this strategy is worth reaching for. */
  when: string
  steps: string[]
  example?: DesmosGuideExample
  tip?: string
}

export interface DesmosGuide {
  title: string
  intro: string
  sections: DesmosGuideSection[]
}

export const DESMOS_GUIDE: DesmosGuide = {
  title: 'Desmos strategy guide',
  intro:
    'The digital SAT includes the Desmos graphing calculator on every Math question. Used well, it turns many algebra problems into "type it in and read the answer." These are the moves that save the most time. Practice them in the calculator inside the SAT Academy so they are automatic on test day.',
  sections: [
    {
      id: 'graphing-systems',
      title: 'Solve systems by graphing',
      when: 'Any question with two equations and "what is the solution" or "how many solutions."',
      steps: [
        'Type the first equation exactly as written on its own line; Desmos accepts any form, so there is no need to solve for \\(y\\).',
        'Type the second equation on the next line.',
        'Click the point where the two graphs cross. Desmos shows its coordinates; that pair is the solution.',
        'For "how many solutions": crossing once means one, parallel lines mean none, and lines that sit on top of each other mean infinitely many.',
      ],
      example: {
        problem: '\\(3x + 2y = 12\\) and \\(x - y = -1\\). What is \\(x\\)?',
        steps: [
          'Enter \\(3x + 2y = 12\\) on line 1 and \\(x - y = -1\\) on line 2.',
          'Click the intersection: it shows \\((2, 3)\\).',
          'The answer is \\(x = 2\\).',
        ],
      },
      tip: 'If the intersection is off screen, zoom out, or click the wrench icon and widen the window.',
    },
    {
      id: 'vertex-and-zeros',
      title: 'Find the vertex and zeros of a parabola',
      when: 'Quadratic questions asking for a maximum, minimum, vertex, x-intercepts, or roots.',
      steps: [
        'Type the quadratic, for example \\(y = 2x^2 - 8x + 6\\).',
        'Desmos marks the key points with gray dots. Click the turning point to see the vertex.',
        'Click the points where the curve crosses the x-axis to read the zeros.',
        'For "the sum of the solutions" or "the product," add or multiply the zeros you read off, or check against \\(-\\tfrac{b}{a}\\) and \\(\\tfrac{c}{a}\\).',
      ],
      example: {
        problem: 'What is the minimum value of \\(f(x) = x^2 - 6x + 13\\)?',
        steps: [
          'Enter \\(y = x^2 - 6x + 13\\).',
          'Click the vertex: \\((3, 4)\\).',
          'The minimum value is the y-coordinate, \\(4\\).',
        ],
      },
      tip: 'Zeros that are not whole numbers show as decimals. Compare them with the answer choices by typing each choice into Desmos too.',
    },
    {
      id: 'regression',
      title: 'Fit a line or curve to data (regression)',
      when: 'A table of data points and a question about the line of best fit, a model, or a predicted value.',
      steps: [
        'Add a table (the plus button, then "table") and type the data into the \\(x_1\\) and \\(y_1\\) columns.',
        'On a new line type \\(y_1 \\sim m x_1 + b\\). The tilde (\\(\\sim\\)) means "fit"; on the keyboard it is Shift plus the key left of 1.',
        'Desmos prints the best values of \\(m\\) and \\(b\\). Those are the slope and intercept of the best-fit line.',
        'For curved data use a different model, such as \\(y_1 \\sim a x_1^2 + b x_1 + c\\) for a quadratic or \\(y_1 \\sim a \\cdot b^{x_1}\\) for exponential.',
      ],
      example: {
        problem: 'Points \\((1, 3), (2, 5), (4, 9)\\) lie on a line. What is its slope?',
        steps: [
          'Make a table with \\(x_1 = 1, 2, 4\\) and \\(y_1 = 3, 5, 9\\).',
          'Type \\(y_1 \\sim m x_1 + b\\).',
          'Desmos reports \\(m = 2\\) and \\(b = 1\\), so the slope is \\(2\\).',
        ],
      },
      tip: 'Regression also solves "which equation passes through these points" questions: fit, then match the coefficients to a choice.',
    },
    {
      id: 'sliders',
      title: 'Use sliders for unknown constants',
      when: 'An equation contains a letter like \\(k\\), \\(a\\), or \\(c\\) and you must find the value that makes something true (no solution, a tangent line, a given intercept).',
      steps: [
        'Type the equation with the constant in it, for example \\(y = kx + 3\\). Desmos offers to add a slider for \\(k\\); click it.',
        'Type any other equation from the question on the next line.',
        'Drag the slider and watch the graph until the condition holds, for example the lines become parallel (no solution) or the curve just touches the line.',
        'Click the slider value to type an exact number, and widen the slider range if the answer is outside it.',
      ],
      example: {
        problem: 'For what value of \\(k\\) does \\(y = kx + 3\\) have no intersection with \\(y = 4x - 1\\)?',
        steps: [
          'Enter both equations and add a slider for \\(k\\).',
          'Drag \\(k\\) until the lines are parallel and never meet.',
          'That happens at \\(k = 4\\).',
        ],
      },
      tip: 'Sliders find the answer visually; confirm it by checking that the condition really holds (for example, equal slopes).',
    },
    {
      id: 'tables',
      title: 'Evaluate functions with tables',
      when: 'Questions that give a function and ask for several outputs, or compare a function to a table of values.',
      steps: [
        'Define the function on its own line, for example \\(f(x) = 3x^2 - 2x\\).',
        'Type \\(f(5)\\) on another line to get a single value instantly.',
        'For many inputs, add a table, put the inputs in the first column, and type \\(f(x_1)\\) as the second column header.',
        'Compare the computed column with the table in the question to see which function matches.',
      ],
      example: {
        problem: 'If \\(g(x) = 2^x - x\\), what is \\(g(3) + g(4)\\)?',
        steps: [
          'Enter \\(g(x) = 2^x - x\\).',
          'Type \\(g(3) + g(4)\\) on a new line.',
          'Desmos shows \\(17\\).',
        ],
      },
    },
    {
      id: 'checking-answers',
      title: 'Check answer choices',
      when: 'When you have solved by hand, or when algebra is messy and the choices are numbers or equations.',
      steps: [
        'Graph the original equation or both sides of it, for example \\(y = 2(x - 3) + 5\\) and \\(y = 4x - 7\\), and find where they meet.',
        'Or type each answer choice into the expression to see which one makes it true.',
        'For "which expression is equivalent," graph the original and each choice: an equivalent expression draws exactly the same graph.',
        'Spend a few seconds checking, but do not re-check every question; save it for the ones you are unsure of.',
      ],
      example: {
        problem: 'Which is equivalent to \\((x + 3)^2 - 9\\)? Choices include \\(x^2 + 6x\\) and \\(x^2 - 9\\).',
        steps: [
          'Graph \\(y = (x + 3)^2 - 9\\).',
          'Graph \\(y = x^2 + 6x\\): it lies exactly on top of the first curve.',
          'Graph \\(y = x^2 - 9\\): it does not, so \\(x^2 + 6x\\) is the answer.',
        ],
      },
      tip: 'Desmos is a tool, not a crutch: quick mental math is still faster for simple arithmetic.',
    },
  ],
}
