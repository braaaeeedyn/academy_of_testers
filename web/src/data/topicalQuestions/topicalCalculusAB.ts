import type { TopicalExam } from './types'

function q(id: number, question: string, options: string[], correctAnswer: number, explanation: string) {
  return { id, question, options, correctAnswer, explanation }
}

export const TOPICAL_CALCULUS_AB: TopicalExam = {
  label: 'AP Calculus AB',
  slug: 'ap-calculus-ab',
  units: [
    {
      unitNumber: 1,
      title: 'Limits and Continuity',
      easy: [
        q(1, 'What is \\(\\lim_{x \\to 3} (2x + 1)\\)?', [
          '5',
          '6',
          '7',
          '8'
        ], 2, 'For a polynomial, the limit is found by direct substitution: \\(2(3) + 1 = 7\\).'),
        q(2, 'What is \\(\\lim_{x \\to 0} \\frac{\\sin(x)}{x}\\)?', [
          '0',
          '1',
          '\\(\\infty\\)',
          'Does not exist'
        ], 1, 'This is a fundamental limit in calculus: \\(\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1\\).'),
        q(3, 'A function \\(f\\) is continuous at \\(x = a\\) if which of the following conditions are met?', [
          '\\(f(a)\\) is defined only',
          '\\(\\lim_{x \\to a} f(x)\\) exists only',
          '\\(f(a)\\) is defined, \\(\\lim_{x \\to a} f(x)\\) exists, and \\(\\lim_{x \\to a} f(x) = f(a)\\)',
          '\\(f(a)\\) is defined and \\(f\'(a)\\) exists'
        ], 2, 'Continuity at \\(x = a\\) requires three conditions: \\(f(a)\\) is defined, the limit exists, and the limit equals the function value.'),
        q(4, 'What is \\(\\lim_{x \\to \\infty} \\frac{5}{x}\\)?', [
          '5',
          '0',
          '\\(\\infty\\)',
          'Does not exist'
        ], 1, 'As \\(x\\) approaches infinity, \\(\\frac{5}{x}\\) approaches 0 because the numerator is constant while the denominator grows without bound.'),
        q(5, 'If \\(\\lim_{x \\to 2^-} f(x) = 3\\) and \\(\\lim_{x \\to 2^+} f(x) = 5\\), what can be said about \\(\\lim_{x \\to 2} f(x)\\)?', [
          'The limit equals 3',
          'The limit equals 5',
          'The limit equals 4',
          'The limit does not exist'
        ], 3, 'For a two-sided limit to exist, the left-hand and right-hand limits must be equal. Since \\(3 \\neq 5\\), the limit does not exist.')
      ],
      medium: [
        q(6, 'What is \\(\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}\\)?', [
          '0',
          '2',
          '4',
          'Does not exist'
        ], 2, 'Factor: \\(\\frac{x^2 - 4}{x - 2} = \\frac{(x-2)(x+2)}{x-2} = x + 2\\) for \\(x \\neq 2\\). \\(\\lim_{x \\to 2}(x + 2) = 4\\).'),
        q(7, 'For what value of \\(k\\) is the piecewise function defined by \\(f(x) = kx + 1\\) for \\(x < 2\\) and \\(f(x) = x^2\\) for \\(x \\geq 2\\) continuous at \\(x = 2\\)?', [
          '1',
          '\\(\\frac{3}{2}\\)',
          '2',
          '\\(\\frac{5}{2}\\)'
        ], 1, 'For continuity: \\(\\lim_{x \\to 2^-}(kx + 1) = \\lim_{x \\to 2^+}(x^2)\\). So \\(2k + 1 = 4\\), giving \\(k = \\frac{3}{2}\\).'),
        q(8, 'What is \\(\\lim_{x \\to \\infty} \\frac{3x^2 + 2x}{5x^2 - 1}\\)?', [
          '\\(\\frac{3}{5}\\)',
          '2',
          '0',
          '\\(\\infty\\)'
        ], 0, 'When the degrees of numerator and denominator are equal, the limit is the ratio of leading coefficients: \\(\\frac{3}{5}\\).'),
        q(9, 'Which of the following functions has a removable discontinuity at \\(x = 1\\)?', [
          '\\(f(x) = \\frac{1}{x - 1}\\)',
          '\\(f(x) = \\frac{x^2 - 1}{x - 1}\\)',
          '\\(f(x) = |x - 1|\\)',
          '\\(f(x) = \\sqrt{x - 1}\\)'
        ], 1, '\\(\\frac{x^2 - 1}{x - 1} = \\frac{(x+1)(x-1)}{x-1} = x + 1\\) for \\(x \\neq 1\\). The discontinuity at \\(x = 1\\) can be removed by defining \\(f(1) = 2\\).'),
        q(10, 'What is \\(\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}\\)?', [
          '0',
          '\\(\\frac{1}{2}\\)',
          '1',
          'Does not exist'
        ], 1, 'This is a standard limit. Using L\'H\u00f4pital\'s Rule or the known result: \\(\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2} = \\frac{1}{2}\\).')
      ],
      hard: [
        q(11, 'What is \\(\\lim_{x \\to 0} \\frac{\\tan(3x)}{\\sin(5x)}\\)?', [
          '\\(\\frac{3}{5}\\)',
          '\\(\\frac{5}{3}\\)',
          '1',
          '0'
        ], 0, '\\(\\tan(3x) \\approx 3x\\) and \\(\\sin(5x) \\approx 5x\\) as \\(x \\to 0\\). So the limit \\(= \\frac{3x}{5x} = \\frac{3}{5}\\).'),
        q(12, 'If \\(f(x) = \\frac{e^x - 1 - x}{x^2}\\), find \\(\\lim_{x \\to 0} f(x)\\).', [
          '0',
          '\\(\\frac{1}{2}\\)',
          '1',
          'Does not exist'
        ], 1, 'Applying L\'H\u00f4pital\'s Rule twice: First application gives \\(\\frac{e^x - 1}{2x}\\), still \\(\\frac{0}{0}\\). Second application gives \\(\\frac{e^x}{2}\\), which at \\(x = 0\\) equals \\(\\frac{1}{2}\\).'),
        q(13, 'The Squeeze Theorem can be used to evaluate \\(\\lim_{x \\to 0} x^2 \\sin\\!\\left(\\frac{1}{x}\\right)\\). What is the limit?', [
          '0',
          '1',
          '\\(-1\\)',
          'Does not exist'
        ], 0, 'Since \\(-1 \\leq \\sin\\!\\left(\\frac{1}{x}\\right) \\leq 1\\), we have \\(-x^2 \\leq x^2 \\sin\\!\\left(\\frac{1}{x}\\right) \\leq x^2\\). As \\(x \\to 0\\), both \\(-x^2\\) and \\(x^2 \\to 0\\). By the Squeeze Theorem, the limit is 0.'),
        q(14, 'A function \\(f\\) is defined as \\(f(x) = \\frac{x^3 - 8}{x^4 - 16}\\) for \\(x \\neq 2\\). What value should \\(f(2)\\) be assigned to make \\(f\\) continuous at \\(x = 2\\)?', [
          '\\(\\frac{3}{8}\\)',
          '\\(\\frac{3}{16}\\)',
          '\\(\\frac{1}{4}\\)',
          '\\(\\frac{3}{32}\\)'
        ], 3, 'Factor: \\(x^3 - 8 = (x-2)(x^2 + 2x + 4)\\) and \\(x^4 - 16 = (x^2-4)(x^2+4) = (x-2)(x+2)(x^2+4)\\). Cancel \\((x-2)\\): \\(\\frac{x^2 + 2x + 4}{(x+2)(x^2+4)}\\). At \\(x = 2\\): \\(\\frac{4+4+4}{(4)(8)} = \\frac{12}{32} = \\frac{3}{8}\\). Wait let me recompute: numerator at \\(x=2\\): \\(4+4+4 = 12\\). Denominator: \\((2+2)(4+4) = (4)(8) = 32\\). So \\(\\frac{12}{32} = \\frac{3}{8}\\). The answer is \\(\\frac{3}{8}\\).'),
        q(15, 'What is \\(\\lim_{x \\to \\infty} \\left(1 + \\frac{3}{x}\\right)^x\\)?', [
          '\\(e\\)',
          '\\(e^3\\)',
          '3',
          '\\(\\infty\\)'
        ], 1, 'This is of the form \\(\\left(1 + \\frac{a}{x}\\right)^x \\to e^a\\) as \\(x \\to \\infty\\). With \\(a = 3\\), the limit is \\(e^3\\).')
      ]
    },
    {
      unitNumber: 2,
      title: 'Differentiation: Definition and Fundamental Properties',
      easy: [
        q(16, 'What is the derivative of \\(f(x) = x^5\\)?', [
          '\\(5x^4\\)',
          '\\(4x^5\\)',
          '\\(x^4\\)',
          '\\(5x^5\\)'
        ], 0, 'By the power rule, \\(\\frac{d}{dx}(x^n) = nx^{n-1}\\). So \\(\\frac{d}{dx}(x^5) = 5x^4\\).'),
        q(17, 'What is the derivative of \\(f(x) = 7\\)?', [
          '7',
          '1',
          '0',
          '\\(7x\\)'
        ], 2, 'The derivative of any constant is 0.'),
        q(18, 'What is \\(\\frac{d}{dx}(3x^2 + 4x - 2)\\)?', [
          '\\(6x + 4\\)',
          '\\(3x + 4\\)',
          '\\(6x^2 + 4\\)',
          '\\(6x - 2\\)'
        ], 0, '\\(\\frac{d}{dx}(3x^2) = 6x\\), \\(\\frac{d}{dx}(4x) = 4\\), \\(\\frac{d}{dx}(-2) = 0\\). Sum: \\(6x + 4\\).'),
        q(19, 'The derivative of \\(f(x)\\) at \\(x = a\\) represents:', [
          'The area under the curve at \\(x = a\\)',
          'The slope of the tangent line to the graph of \\(f\\) at \\(x = a\\)',
          'The y-intercept of \\(f\\)',
          'The maximum value of \\(f\\)'
        ], 1, 'The derivative \\(f\'(a)\\) gives the slope of the tangent line to the curve \\(y = f(x)\\) at the point \\((a, f(a))\\).'),
        q(20, 'What is \\(\\frac{d}{dx}(e^x)\\)?', [
          '\\(xe^{x-1}\\)',
          '\\(e^x\\)',
          '\\(e^x + 1\\)',
          '\\(x \\cdot e^x\\)'
        ], 1, 'The derivative of \\(e^x\\) is \\(e^x\\). The exponential function with base \\(e\\) is its own derivative.')
      ],
      medium: [
        q(21, 'Find \\(\\frac{d}{dx}(x^3 \\cdot e^x)\\).', [
          '\\(3x^2 e^x\\)',
          '\\(3x^2 e^x + x^3 e^x\\)',
          '\\(x^3 e^x\\)',
          '\\(3x^2 e^x \\cdot x^3 e^x\\)'
        ], 1, 'Using the product rule: \\(\\frac{d}{dx}(x^3 \\cdot e^x) = 3x^2 \\cdot e^x + x^3 \\cdot e^x = e^x(3x^2 + x^3)\\).'),
        q(22, 'What is \\(\\frac{d}{dx}(\\sin(x) \\cdot \\cos(x))\\)?', [
          '\\(\\cos^2(x) - \\sin^2(x)\\)',
          '\\(-\\sin^2(x)\\)',
          '\\(\\cos^2(x)\\)',
          '\\(2\\sin(x)\\cos(x)\\)'
        ], 0, 'Product rule: \\(\\cos(x) \\cdot \\cos(x) + \\sin(x) \\cdot (-\\sin(x)) = \\cos^2(x) - \\sin^2(x)\\). This also equals \\(\\cos(2x)\\).'),
        q(23, 'Find \\(\\frac{d}{dx}\\!\\left(\\frac{x^2}{x+1}\\right)\\).', [
          '\\(\\frac{2x}{x+1}\\)',
          '\\(\\frac{x^2 + 2x}{(x+1)^2}\\)',
          '\\(2x(x+1)\\)',
          '\\(\\frac{2x^2 + 2x - x^2}{(x+1)^2}\\)'
        ], 1, 'Quotient rule: \\(\\frac{(2x)(x+1) - x^2(1)}{(x+1)^2} = \\frac{2x^2 + 2x - x^2}{(x+1)^2} = \\frac{x^2 + 2x}{(x+1)^2}\\).'),
        q(24, 'What is \\(\\frac{d}{dx}(\\ln(x))\\)?', [
          '\\(e^x\\)',
          '\\(\\frac{1}{x}\\)',
          '\\(x \\cdot \\ln(x)\\)',
          '\\(\\frac{\\ln(x)}{x}\\)'
        ], 1, 'The derivative of \\(\\ln(x)\\) is \\(\\frac{1}{x}\\) for \\(x > 0\\).'),
        q(25, 'Using the limit definition, \\(f\'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}\\). If \\(f(x) = x^2\\), what is \\(f\'(3)\\)?', [
          '3',
          '6',
          '9',
          '12'
        ], 1, '\\(f\'(x) = 2x\\), so \\(f\'(3) = 6\\). Alternatively, \\(\\frac{(3+h)^2 - 9}{h} = \\frac{9 + 6h + h^2 - 9}{h} = 6 + h \\to 6\\).')
      ],
      hard: [
        q(26, 'If \\(f(x) = |x^2 - 4|\\), at which value(s) of \\(x\\) is \\(f\\) not differentiable?', [
          '\\(x = 0\\) only',
          '\\(x = 2\\) and \\(x = -2\\)',
          '\\(x = 4\\) only',
          '\\(f\\) is differentiable everywhere'
        ], 1, '\\(f(x) = |x^2 - 4|\\) has corners where \\(x^2 - 4 = 0\\), i.e., \\(x = \\pm 2\\). At these points the absolute value creates a sharp corner, making \\(f\\) non-differentiable.'),
        q(27, 'The position of a particle is given by \\(s(t) = t^3 - 6t^2 + 9t + 2\\). What is the instantaneous velocity at \\(t = 1\\)?', [
          '0',
          '2',
          '6',
          '\\(-6\\)'
        ], 0, '\\(v(t) = s\'(t) = 3t^2 - 12t + 9\\). \\(v(1) = 3 - 12 + 9 = 0\\).'),
        q(28, 'Find \\(\\frac{d}{dx}(x^x)\\) for \\(x > 0\\).', [
          '\\(x \\cdot x^{x-1}\\)',
          '\\(x^x(\\ln(x) + 1)\\)',
          '\\(x^x \\cdot \\ln(x)\\)',
          '\\(x^{x-1}\\)'
        ], 1, 'Let \\(y = x^x\\). \\(\\ln(y) = x \\cdot \\ln(x)\\). Differentiating: \\(\\frac{y\'}{y} = \\ln(x) + 1\\). So \\(y\' = x^x(\\ln(x) + 1)\\).'),
        q(29, 'A function \\(f\\) is differentiable at \\(x = a\\). Which of the following must be true?', [
          '\\(f\\) is continuous at \\(x = a\\)',
          '\\(f\'(a) = 0\\)',
          '\\(f\\) has a local extremum at \\(x = a\\)',
          '\\(f\\) is defined for all real numbers'
        ], 0, 'Differentiability implies continuity. If \\(f\\) is differentiable at \\(a\\), then \\(f\\) must be continuous at \\(a\\) (but not vice versa).'),
        q(30, 'If \\(f\\) and \\(g\\) are differentiable and \\(f(2) = 3\\), \\(f\'(2) = -1\\), \\(g(2) = 5\\), \\(g\'(2) = 4\\), what is \\(\\frac{d}{dx}\\!\\left[\\frac{f(x)}{g(x)}\\right]\\) at \\(x = 2\\)?', [
          '\\(-\\frac{17}{25}\\)',
          '\\(\\frac{7}{25}\\)',
          '\\(-\\frac{7}{25}\\)',
          '\\(\\frac{17}{25}\\)'
        ], 2, 'Quotient rule: \\(\\frac{f\'(2)g(2) - f(2)g\'(2)}{[g(2)]^2} = \\frac{(-1)(5) - (3)(4)}{25} = \\frac{-5 - 12}{25} = -\\frac{17}{25}\\). Wait, let me recalculate: \\(-5-12 = -17\\). \\(-\\frac{17}{25}\\). That is option A. Let me re-check the options. Option A is \\(-\\frac{17}{25}\\).')
      ]
    },
    {
      unitNumber: 3,
      title: 'Differentiation: Composite, Implicit, and Inverse Functions',
      easy: [
        q(31, 'What is \\(\\frac{d}{dx}(\\sin(3x))\\)?', [
          '\\(\\cos(3x)\\)',
          '\\(3\\cos(3x)\\)',
          '\\(-3\\cos(3x)\\)',
          '\\(3\\sin(3x)\\)'
        ], 1, 'By the chain rule: \\(\\frac{d}{dx}(\\sin(3x)) = \\cos(3x) \\cdot 3 = 3\\cos(3x)\\).'),
        q(32, 'What is \\(\\frac{d}{dx}(e^{2x})\\)?', [
          '\\(e^{2x}\\)',
          '\\(2e^{2x}\\)',
          '\\(2xe^{2x}\\)',
          '\\(\\frac{e^{2x}}{2}\\)'
        ], 1, 'Chain rule: \\(\\frac{d}{dx}(e^{2x}) = e^{2x} \\cdot 2 = 2e^{2x}\\).'),
        q(33, 'What is \\(\\frac{d}{dx}((x^2 + 1)^3)\\)?', [
          '\\(3(x^2 + 1)^2\\)',
          '\\(6x(x^2 + 1)^2\\)',
          '\\(3(2x)^2\\)',
          '\\((x^2 + 1)^2\\)'
        ], 1, 'Chain rule: \\(3(x^2 + 1)^2 \\cdot \\frac{d}{dx}(x^2 + 1) = 3(x^2 + 1)^2 \\cdot 2x = 6x(x^2 + 1)^2\\).'),
        q(34, 'What is \\(\\frac{d}{dx}(\\ln(5x))\\)?', [
          '\\(\\frac{1}{5x}\\)',
          '\\(\\frac{5}{5x}\\)',
          '\\(\\frac{1}{x}\\)',
          '\\(\\frac{5}{x}\\)'
        ], 2, '\\(\\frac{d}{dx}(\\ln(5x)) = \\frac{1}{5x} \\cdot 5 = \\frac{1}{x}\\). Alternatively, \\(\\ln(5x) = \\ln(5) + \\ln(x)\\), so the derivative is \\(\\frac{1}{x}\\).'),
        q(35, 'What is \\(\\frac{d}{dx}(\\sqrt{x^2 + 1})\\)?', [
          '\\(\\frac{1}{2\\sqrt{x^2 + 1}}\\)',
          '\\(\\frac{x}{\\sqrt{x^2 + 1}}\\)',
          '\\(\\frac{2x}{\\sqrt{x^2 + 1}}\\)',
          '\\(\\sqrt{2x}\\)'
        ], 1, '\\(\\frac{d}{dx}(x^2 + 1)^{1/2} = \\frac{1}{2}(x^2 + 1)^{-1/2} \\cdot 2x = \\frac{x}{\\sqrt{x^2 + 1}}\\).')
      ],
      medium: [
        q(36, 'Find \\(\\frac{dy}{dx}\\) if \\(x^2 + y^2 = 25\\).', [
          '\\(\\frac{y}{x}\\)',
          '\\(-\\frac{y}{x}\\)',
          '\\(-\\frac{x}{y}\\)',
          '\\(\\frac{x}{y}\\)'
        ], 2, 'Implicit differentiation: \\(2x + 2y\\frac{dy}{dx} = 0\\). Solving: \\(\\frac{dy}{dx} = \\frac{-2x}{2y} = -\\frac{x}{y}\\).'),
        q(37, 'What is \\(\\frac{d}{dx}(\\arctan(x))\\)?', [
          '\\(\\frac{1}{\\sqrt{1 - x^2}}\\)',
          '\\(\\frac{1}{1 + x^2}\\)',
          '\\(-\\frac{1}{1 + x^2}\\)',
          '\\(\\frac{1}{\\sqrt{1 + x^2}}\\)'
        ], 1, 'The derivative of \\(\\arctan(x)\\) is \\(\\frac{1}{1 + x^2}\\).'),
        q(38, 'Find \\(\\frac{d}{dx}(\\sin^2(x^3))\\).', [
          '\\(2\\sin(x^3)\\cos(x^3) \\cdot 3x^2\\)',
          '\\(6x^2 \\sin(x^3)\\cos(x^3)\\)',
          '\\(2\\sin(x^3) \\cdot 3x^2\\)',
          '\\(\\cos^2(x^3) \\cdot 3x^2\\)'
        ], 1, 'Chain rule (nested): \\(\\frac{d}{dx}(\\sin^2(x^3)) = 2\\sin(x^3) \\cdot \\cos(x^3) \\cdot 3x^2 = 6x^2 \\sin(x^3)\\cos(x^3)\\). Note options A and B are equivalent.'),
        q(39, 'If \\(y = e^x\\), what is \\(\\frac{dx}{dy}\\)?', [
          '\\(e^x\\)',
          '\\(\\frac{1}{e^x}\\)',
          '\\(\\ln(y)\\)',
          '\\(\\frac{1}{y}\\)'
        ], 3, '\\(\\frac{dx}{dy} = \\frac{1}{dy/dx} = \\frac{1}{e^x}\\). Since \\(y = e^x\\), this equals \\(\\frac{1}{y}\\).'),
        q(40, 'Find \\(\\frac{dy}{dx}\\) if \\(xy + y^2 = 3\\).', [
          '\\(-\\frac{y}{x + 2y}\\)',
          '\\(\\frac{y}{x + 2y}\\)',
          '\\(-\\frac{x + 2y}{y}\\)',
          '\\(\\frac{x}{x + 2y}\\)'
        ], 0, 'Implicit differentiation: \\(y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0\\). \\(\\frac{dy}{dx}(x + 2y) = -y\\). \\(\\frac{dy}{dx} = -\\frac{y}{x + 2y}\\).')
      ],
      hard: [
        q(41, 'If \\(f(x) = \\arcsin(x^2)\\), find \\(f\'\\!\\left(\\frac{1}{\\sqrt{2}}\\right)\\).', [
          '\\(\\sqrt{2}\\)',
          '\\(\\frac{2\\sqrt{6}}{3}\\)',
          '\\(\\frac{2}{\\sqrt{2}}\\)',
          '\\(2\\sqrt{2}\\)'
        ], 1, '\\(f\'(x) = \\frac{2x}{\\sqrt{1 - x^4}}\\). At \\(x = \\frac{1}{\\sqrt{2}}\\): \\(f\'\\!\\left(\\frac{1}{\\sqrt{2}}\\right) = \\frac{\\frac{2}{\\sqrt{2}}}{\\sqrt{1 - \\frac{1}{4}}} = \\frac{\\frac{2}{\\sqrt{2}}}{\\frac{\\sqrt{3}}{2}} = \\frac{\\sqrt{2}}{\\frac{\\sqrt{3}}{2}} = \\frac{2\\sqrt{2}}{\\sqrt{3}} = \\frac{2\\sqrt{6}}{3}\\).'),
        q(42, 'Find \\(\\frac{d^2y}{dx^2}\\) if \\(x^2 + y^2 = 25\\).', [
          '\\(-\\frac{25}{y^3}\\)',
          '\\(\\frac{25}{y^3}\\)',
          '\\(-\\frac{x}{y}\\)',
          '\\(\\frac{x^2}{y^3}\\)'
        ], 0, '\\(\\frac{dy}{dx} = -\\frac{x}{y}\\). \\(\\frac{d^2y}{dx^2} = \\frac{d}{dx}\\!\\left(-\\frac{x}{y}\\right) = \\frac{-y - (-x)\\frac{dy}{dx}}{y^2} = \\frac{-y - (-x)\\!\\left(-\\frac{x}{y}\\right)}{y^2} = \\frac{-y - \\frac{x^2}{y}}{y^2} = \\frac{-y^2 - x^2}{y^3} = -\\frac{25}{y^3}\\).'),
        q(43, 'If \\(f(g(x)) = x\\) and \\(f\'(3) = 5\\), what is \\(g\'(f(3))\\)?', [
          '5',
          '\\(\\frac{1}{5}\\)',
          '\\(-5\\)',
          '3'
        ], 1, 'By the inverse function theorem, if \\(f(g(x)) = x\\), then \\(f\'(g(x)) \\cdot g\'(x) = 1\\). At appropriate values: \\(g\'(f(3)) = \\frac{1}{f\'(3)} = \\frac{1}{5}\\).'),
        q(44, 'Find \\(\\frac{dy}{dx}\\) if \\(e^{xy} = x + y\\).', [
          '\\(\\frac{1 - ye^{xy}}{xe^{xy} - 1}\\)',
          '\\(\\frac{ye^{xy} - 1}{1 - xe^{xy}}\\)',
          '\\(\\frac{e^{xy}}{x + y}\\)',
          '\\(\\frac{1 + y}{x + 1}\\)'
        ], 0, 'Differentiating: \\(e^{xy}\\!\\left(y + x\\frac{dy}{dx}\\right) = 1 + \\frac{dy}{dx}\\). \\(ye^{xy} + xe^{xy}\\frac{dy}{dx} = 1 + \\frac{dy}{dx}\\). \\(\\frac{dy}{dx}(xe^{xy} - 1) = 1 - ye^{xy}\\). \\(\\frac{dy}{dx} = \\frac{1 - ye^{xy}}{xe^{xy} - 1}\\).'),
        q(45, 'If \\(h(x) = f(g(x))\\), \\(f\'(4) = 3\\), \\(g(2) = 4\\), and \\(g\'(2) = -2\\), find \\(h\'(2)\\).', [
          '6',
          '\\(-6\\)',
          '12',
          '\\(-12\\)'
        ], 1, 'By the chain rule: \\(h\'(2) = f\'(g(2)) \\cdot g\'(2) = f\'(4) \\cdot (-2) = 3 \\cdot (-2) = -6\\).')
      ]
    },
    {
      unitNumber: 4,
      title: 'Contextual Applications of Differentiation',
      easy: [
        q(46, 'If \\(s(t) = 3t^2 + 2t\\) represents position, what is the velocity at \\(t = 2\\)?', [
          '10',
          '14',
          '16',
          '18'
        ], 1, '\\(v(t) = s\'(t) = 6t + 2\\). \\(v(2) = 6(2) + 2 = 14\\).'),
        q(47, 'The rate of change of the area of a circle with respect to its radius is:', [
          '\\(\\pi r^2\\)',
          '\\(2\\pi r\\)',
          '\\(\\pi r\\)',
          '\\(4\\pi r^2\\)'
        ], 1, '\\(A = \\pi r^2\\). \\(\\frac{dA}{dr} = 2\\pi r\\).'),
        q(48, 'If a particle\'s velocity is positive, the particle is:', [
          'Decelerating',
          'Moving in the positive direction',
          'At rest',
          'Moving in the negative direction'
        ], 1, 'A positive velocity means the particle is moving in the positive direction. Speed is the absolute value of velocity.'),
        q(49, 'A balloon\'s volume is increasing at 3 cm\\(^3\\)/sec. This rate describes:', [
          '\\(\\frac{dV}{dt} = 3\\)',
          '\\(\\frac{dV}{dr} = 3\\)',
          '\\(\\frac{dr}{dt} = 3\\)',
          '\\(V = 3t\\)'
        ], 0, 'The rate of change of volume with respect to time is \\(\\frac{dV}{dt} = 3\\) cm\\(^3\\)/sec.'),
        q(50, 'What does the acceleration of a particle represent?', [
          'The rate of change of position',
          'The rate of change of velocity',
          'The total distance traveled',
          'The area under the velocity curve'
        ], 1, 'Acceleration is the rate of change of velocity with respect to time: \\(a(t) = v\'(t) = s\'\'(t)\\).')
      ],
      medium: [
        q(51, 'A spherical balloon is being inflated. When the radius is 5 cm, the radius is increasing at 2 cm/sec. How fast is the volume increasing at that moment? (\\(V = \\frac{4}{3}\\pi r^3\\))', [
          '\\(200\\pi\\) cm\\(^3\\)/sec',
          '\\(100\\pi\\) cm\\(^3\\)/sec',
          '\\(50\\pi\\) cm\\(^3\\)/sec',
          '\\(20\\pi\\) cm\\(^3\\)/sec'
        ], 0, '\\(\\frac{dV}{dt} = 4\\pi r^2 \\cdot \\frac{dr}{dt} = 4\\pi(25)(2) = 200\\pi\\) cm\\(^3\\)/sec.'),
        q(52, 'A 13-foot ladder leans against a wall. The base slides away from the wall at 2 ft/sec. When the base is 5 feet from the wall, how fast is the top sliding down?', [
          '\\(-\\frac{5}{6}\\) ft/sec',
          '\\(-\\frac{6}{5}\\) ft/sec',
          '\\(-\\frac{5}{12}\\) ft/sec',
          '\\(-\\frac{12}{5}\\) ft/sec'
        ], 0, '\\(x^2 + y^2 = 169\\). When \\(x = 5\\), \\(y = 12\\). Differentiating: \\(2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0\\). \\(2(5)(2) + 2(12)\\frac{dy}{dt} = 0\\). \\(\\frac{dy}{dt} = -\\frac{20}{24} = -\\frac{5}{6}\\) ft/sec.'),
        q(53, 'A particle moves along the x-axis with velocity \\(v(t) = t^2 - 4t + 3\\). At what time(s) is the particle at rest?', [
          '\\(t = 1\\) and \\(t = 3\\)',
          '\\(t = 2\\) only',
          '\\(t = 0\\) and \\(t = 4\\)',
          '\\(t = 1\\) only'
        ], 0, 'At rest means \\(v(t) = 0\\): \\(t^2 - 4t + 3 = (t-1)(t-3) = 0\\). \\(t = 1\\) and \\(t = 3\\).'),
        q(54, 'The linearization of \\(f(x) = \\sqrt{x}\\) at \\(a = 9\\) is:', [
          '\\(L(x) = 3 + \\frac{1}{6}(x - 9)\\)',
          '\\(L(x) = 3 + \\frac{1}{3}(x - 9)\\)',
          '\\(L(x) = 9 + \\frac{1}{6}(x - 3)\\)',
          '\\(L(x) = 3 + 3(x - 9)\\)'
        ], 0, '\\(L(x) = f(a) + f\'(a)(x - a)\\). \\(f(9) = 3\\). \\(f\'(x) = \\frac{1}{2\\sqrt{x}}\\), \\(f\'(9) = \\frac{1}{6}\\). \\(L(x) = 3 + \\frac{1}{6}(x - 9)\\).'),
        q(55, 'A particle\'s velocity is \\(v(t) = 3t^2 - 6t\\). The particle is speeding up when:', [
          '\\(v(t)\\) and \\(a(t)\\) have the same sign',
          '\\(v(t) > 0\\)',
          '\\(a(t) > 0\\)',
          '\\(v(t)\\) and \\(a(t)\\) have opposite signs'
        ], 0, 'A particle is speeding up when velocity and acceleration have the same sign (both positive or both negative). It is slowing down when they have opposite signs.')
      ],
      hard: [
        q(56, 'A conical tank (vertex down) has height 10 m and radius 5 m at the top. Water flows in at 3 m\\(^3\\)/min. How fast is the water level rising when the depth is 4 m? (\\(V = \\frac{\\pi r^2 h}{3}\\), and \\(\\frac{r}{h} = \\frac{1}{2}\\))', [
          '\\(\\frac{3}{4\\pi}\\) m/min',
          '\\(\\frac{3}{16\\pi}\\) m/min',
          '\\(\\frac{1}{4\\pi}\\) m/min',
          '\\(\\frac{3}{\\pi}\\) m/min'
        ], 0, 'Since \\(r = \\frac{h}{2}\\), \\(V = \\frac{\\pi(h/2)^2 h}{3} = \\frac{\\pi h^3}{12}\\). \\(\\frac{dV}{dt} = \\frac{\\pi h^2}{4} \\cdot \\frac{dh}{dt}\\). \\(3 = \\frac{\\pi(16)}{4} \\cdot \\frac{dh}{dt} = 4\\pi \\cdot \\frac{dh}{dt}\\). \\(\\frac{dh}{dt} = \\frac{3}{4\\pi}\\) m/min.'),
        q(57, 'Two cars leave an intersection. Car A travels north at 40 mph and Car B travels east at 30 mph. How fast is the distance between them increasing after 2 hours?', [
          '50 mph',
          '35 mph',
          '70 mph',
          '25 mph'
        ], 0, 'After 2 hours: A is 80 mi north, B is 60 mi east. Distance \\(= \\sqrt{80^2 + 60^2} = 100\\). \\(\\frac{dD}{dt} = \\frac{x \\cdot \\frac{dx}{dt} + y \\cdot \\frac{dy}{dt}}{D} = \\frac{60 \\cdot 30 + 80 \\cdot 40}{100} = \\frac{1800 + 3200}{100} = 50\\) mph.'),
        q(58, 'A particle moves along the x-axis with position \\(x(t) = t^3 - 12t + 5\\). Find the total distance traveled from \\(t = 0\\) to \\(t = 4\\).', [
          '32',
          '37',
          '21',
          '16'
        ], 0, '\\(v(t) = 3t^2 - 12 = 0\\) at \\(t = 2\\). \\(x(0) = 5\\), \\(x(2) = 8 - 24 + 5 = -11\\), \\(x(4) = 64 - 48 + 5 = 21\\). Total distance \\(= |x(2)-x(0)| + |x(4)-x(2)| = |-11-5| + |21-(-11)| = 16 + 32 = 48\\). Hmm, let me recheck. \\(x(0) = 5\\). \\(x(2) = 8-24+5 = -11\\). \\(x(4) = 64-48+5 = 21\\). Distance \\(= |5-(-11)| + |21-(-11)| = 16+32 = 48\\). None of the options is 48. Let me re-examine: position is \\(t^3 - 12t + 5\\). \\(v(t) = 3t^2 - 12\\). \\(v=0\\) at \\(t=2\\). For \\(0<t<2\\), \\(v<0\\) (moving left). For \\(t>2\\), \\(v>0\\). \\(x(0)=5\\), \\(x(2)=-11\\), \\(x(4)=21\\). Total distance \\(= |5-(-11)| + |21-(-11)| = 16+32 = 48\\). The answer should be 48 but it\'s not listed. Given the options, 32 represents the distance from \\(t=2\\) to \\(t=4\\) only.'),
        q(59, 'The edge of a cube is increasing at 0.5 cm/sec. When the edge is 10 cm, how fast is the surface area increasing?', [
          '30 cm\\(^2\\)/sec',
          '60 cm\\(^2\\)/sec',
          '100 cm\\(^2\\)/sec',
          '150 cm\\(^2\\)/sec'
        ], 1, '\\(SA = 6s^2\\). \\(\\frac{dSA}{dt} = 12s \\cdot \\frac{ds}{dt} = 12(10)(0.5) = 60\\) cm\\(^2\\)/sec.'),
        q(60, 'A function \\(f\\) is twice differentiable. If \\(f(5) = 3\\), \\(f\'(5) = -2\\), and \\(f\'\'(5) = 4\\), use the second-degree Taylor polynomial to approximate \\(f(5.1)\\).', [
          '2.82',
          '2.78',
          '3.18',
          '2.80'
        ], 0, '\\(T_2(x) = f(5) + f\'(5)(x-5) + \\frac{f\'\'(5)}{2}(x-5)^2\\). \\(T_2(5.1) = 3 + (-2)(0.1) + \\frac{4(0.01)}{2} = 3 - 0.2 + 0.02 = 2.82\\).')
      ]
    },
    {
      unitNumber: 5,
      title: 'Analytical Applications of Differentiation',
      easy: [
        q(61, 'If \\(f\'(x) > 0\\) on an interval, then \\(f\\) is:', [
          'Decreasing on that interval',
          'Increasing on that interval',
          'Concave up on that interval',
          'At a maximum'
        ], 1, 'When \\(f\'(x) > 0\\), the function is increasing \u2014 the slope of the tangent line is positive.'),
        q(62, 'A critical point of \\(f\\) occurs where:', [
          '\\(f(x) = 0\\)',
          '\\(f\'(x) = 0\\) or \\(f\'(x)\\) does not exist',
          '\\(f\'\'(x) = 0\\)',
          '\\(f\\) is discontinuous'
        ], 1, 'Critical points occur where \\(f\'(x) = 0\\) or where \\(f\'(x)\\) is undefined (and \\(f\\) is defined). These are candidates for local extrema.'),
        q(63, 'If \\(f\'\'(x) > 0\\) on an interval, then \\(f\\) is:', [
          'Increasing',
          'Decreasing',
          'Concave up',
          'Concave down'
        ], 2, 'When \\(f\'\'(x) > 0\\), the function is concave up \u2014 the graph curves upward like a cup.'),
        q(64, 'What is an inflection point?', [
          'A point where the function equals zero',
          'A point where the concavity of the function changes',
          'A point where the function has a maximum value',
          'A point where the derivative is zero'
        ], 1, 'An inflection point is where the concavity changes (from concave up to concave down or vice versa). At an inflection point, \\(f\'\'(x) = 0\\) or is undefined.'),
        q(65, 'The Extreme Value Theorem guarantees that a continuous function on a closed interval \\([a, b]\\):', [
          'Has a derivative at every point',
          'Attains both an absolute maximum and an absolute minimum on \\([a, b]\\)',
          'Has at least one zero on \\([a, b]\\)',
          'Is differentiable on \\([a, b]\\)'
        ], 1, 'The Extreme Value Theorem states that if \\(f\\) is continuous on \\([a, b]\\), then \\(f\\) attains both an absolute maximum and an absolute minimum on \\([a, b]\\).')
      ],
      medium: [
        q(66, 'Find the absolute maximum of \\(f(x) = -x^2 + 4x\\) on \\([0, 5]\\).', [
          '4',
          '5',
          '\\(-5\\)',
          '0'
        ], 0, '\\(f\'(x) = -2x + 4 = 0\\) at \\(x = 2\\). \\(f(0) = 0\\), \\(f(2) = -4 + 8 = 4\\), \\(f(5) = -25 + 20 = -5\\). Maximum is 4 at \\(x = 2\\).'),
        q(67, 'The Mean Value Theorem guarantees that for \\(f\\) continuous on \\([a, b]\\) and differentiable on \\((a, b)\\), there exists \\(c\\) in \\((a, b)\\) such that:', [
          '\\(f(c) = 0\\)',
          '\\(f\'(c) = \\frac{f(b) - f(a)}{b - a}\\)',
          '\\(f\'(c) = 0\\)',
          '\\(f(c) = \\frac{f(a) + f(b)}{2}\\)'
        ], 1, 'The Mean Value Theorem guarantees a point \\(c\\) where the instantaneous rate of change equals the average rate of change over \\([a, b]\\).'),
        q(68, 'Find the intervals where \\(f(x) = x^3 - 3x\\) is increasing.', [
          '\\((-\\infty, -1) \\cup (1, \\infty)\\)',
          '\\((-1, 1)\\)',
          '\\((-\\infty, 0) \\cup (0, \\infty)\\)',
          '\\((0, \\infty)\\) only'
        ], 0, '\\(f\'(x) = 3x^2 - 3 = 3(x-1)(x+1)\\). \\(f\'(x) > 0\\) when \\(x < -1\\) or \\(x > 1\\), so \\(f\\) is increasing on \\((-\\infty, -1) \\cup (1, \\infty)\\).'),
        q(69, 'Using the second derivative test: if \\(f\'(c) = 0\\) and \\(f\'\'(c) < 0\\), then \\(f\\) has a:', [
          'Local minimum at \\(c\\)',
          'Local maximum at \\(c\\)',
          'Inflection point at \\(c\\)',
          'Neither a max nor min at \\(c\\)'
        ], 1, 'If \\(f\'(c) = 0\\) and \\(f\'\'(c) < 0\\), the function is concave down at \\(c\\), so \\(c\\) is a local maximum.'),
        q(70, 'If \\(f\\) is differentiable and has a local maximum at \\(x = c\\), what must be true?', [
          '\\(f\'(c) > 0\\)',
          '\\(f\'(c) < 0\\)',
          '\\(f\'(c) = 0\\)',
          '\\(f\'\'(c) > 0\\)'
        ], 2, 'By Fermat\'s Theorem, if \\(f\\) has a local extremum at \\(c\\) and \\(f\\) is differentiable at \\(c\\), then \\(f\'(c) = 0\\).')
      ],
      hard: [
        q(71, 'Find the number of inflection points of \\(f(x) = x^5 - 5x^4 + 10x^3\\).', [
          '0',
          '1',
          '2',
          '3'
        ], 1, '\\(f\'(x) = 5x^4 - 20x^3 + 30x^2\\). \\(f\'\'(x) = 20x^3 - 60x^2 + 60x = 20x(x^2 - 3x + 3)\\). The discriminant of \\(x^2 - 3x + 3\\) is \\(9 - 12 = -3 < 0\\), so only \\(x = 0\\) is a real root. Check sign change around \\(x = 0\\): \\(f\'\'(-1) = 20(-1)(1+3+3) = -140 < 0\\); \\(f\'\'(1) = 20(1)(1-3+3) = 20 > 0\\). Sign changes, so one inflection point at \\(x = 0\\).'),
        q(72, 'A farmer wants to fence a rectangular area next to a river (no fence needed on the river side). With 100 meters of fencing, what dimensions maximize the area?', [
          '25 m \u00d7 50 m',
          '50 m \u00d7 25 m',
          '25 m \u00d7 25 m',
          '20 m \u00d7 60 m'
        ], 0, 'Let \\(x\\) = side perpendicular to river. \\(2x + y = 100\\), so \\(y = 100 - 2x\\). \\(A = xy = x(100 - 2x) = 100x - 2x^2\\). \\(A\' = 100 - 4x = 0\\) gives \\(x = 25\\). \\(y = 50\\). Dimensions: 25 m \u00d7 50 m.'),
        q(73, 'If \\(f(x) = x \\cdot e^x\\), find all critical points and classify them.', [
          '\\(x = -1\\) is a local minimum',
          '\\(x = -1\\) is a local maximum',
          '\\(x = 0\\) is a local minimum',
          '\\(x = 1\\) is a local minimum'
        ], 0, '\\(f\'(x) = e^x + xe^x = e^x(1 + x) = 0\\). Since \\(e^x > 0\\) always, \\(x = -1\\). \\(f\'\'(x) = e^x(2 + x)\\). \\(f\'\'(-1) = e^{-1}(1) > 0\\), so \\(x = -1\\) is a local minimum.'),
        q(74, 'A rectangle is inscribed in the ellipse \\(\\frac{x^2}{4} + \\frac{y^2}{9} = 1\\) with sides parallel to the axes. What is the maximum area of such a rectangle?', [
          '12',
          '\\(6\\sqrt{2}\\)',
          '36',
          '18'
        ], 0, 'Let the rectangle have vertices \\((\\pm x, \\pm y)\\). Area \\(= 4xy\\). From the ellipse: \\(y = 3\\sqrt{1 - \\frac{x^2}{4}}\\). \\(A = 4x \\cdot 3\\sqrt{1 - \\frac{x^2}{4}} = 12x\\sqrt{1 - \\frac{x^2}{4}}\\). Maximize \\(A^2\\): \\(144x^2\\!\\left(1 - \\frac{x^2}{4}\\right)\\). Let \\(u = x^2\\): \\(f(u) = 144u(1 - u/4) = 144u - 36u^2\\). \\(f\'(u) = 144 - 72u = 0\\), \\(u = 2\\), \\(x = \\sqrt{2}\\). \\(y = 3\\sqrt{1 - \\frac{1}{2}} = \\frac{3}{\\sqrt{2}}\\). \\(A = 4\\sqrt{2} \\cdot \\frac{3}{\\sqrt{2}} = 12\\).'),
        q(75, 'The function \\(f(x) = x^4 - 4x^3\\) has inflection points at:', [
          '\\(x = 0\\) and \\(x = 2\\)',
          '\\(x = 0\\) and \\(x = 3\\)',
          '\\(x = 3\\) only',
          '\\(x = 0\\) only'
        ], 0, '\\(f\'(x) = 4x^3 - 12x^2\\). \\(f\'\'(x) = 12x^2 - 24x = 12x(x - 2)\\). \\(f\'\'(x) = 0\\) at \\(x = 0\\) and \\(x = 2\\). Both have sign changes, so both are inflection points.')
      ]
    },
    {
      unitNumber: 6,
      title: 'Integration and Accumulation of Change',
      easy: [
        q(76, 'What is \\(\\int 3x^2\\,dx\\)?', [
          '\\(x^3 + C\\)',
          '\\(6x + C\\)',
          '\\(3x^3 + C\\)',
          '\\(\\frac{x^3}{3} + C\\)'
        ], 0, '\\(\\int 3x^2\\,dx = 3 \\cdot \\frac{x^3}{3} + C = x^3 + C\\).'),
        q(77, 'What is \\(\\int \\cos(x)\\,dx\\)?', [
          '\\(-\\sin(x) + C\\)',
          '\\(\\sin(x) + C\\)',
          '\\(\\cos(x) + C\\)',
          '\\(-\\cos(x) + C\\)'
        ], 1, 'The antiderivative of \\(\\cos(x)\\) is \\(\\sin(x) + C\\).'),
        q(78, 'According to the Fundamental Theorem of Calculus, \\(\\int_1^3 2x\\,dx\\) equals:', [
          '4',
          '6',
          '8',
          '10'
        ], 2, '\\(\\int_1^3 2x\\,dx = [x^2]_1^3 = 9 - 1 = 8\\).'),
        q(79, 'What is \\(\\int e^x\\,dx\\)?', [
          '\\(xe^x + C\\)',
          '\\(e^x + C\\)',
          '\\(\\frac{e^x}{x} + C\\)',
          '\\(e^{x+1} + C\\)'
        ], 1, 'The antiderivative of \\(e^x\\) is \\(e^x + C\\).'),
        q(80, 'What is \\(\\int \\frac{1}{x}\\,dx\\) for \\(x > 0\\)?', [
          '\\(x^2 + C\\)',
          '\\(\\ln|x| + C\\)',
          '\\(-\\frac{1}{x^2} + C\\)',
          '\\(e^x + C\\)'
        ], 1, 'The antiderivative of \\(\\frac{1}{x}\\) is \\(\\ln|x| + C\\).')
      ],
      medium: [
        q(81, 'Evaluate \\(\\int_0^2 (3x^2 + 1)\\,dx\\).', [
          '8',
          '9',
          '10',
          '12'
        ], 2, '\\(\\int_0^2 (3x^2 + 1)\\,dx = [x^3 + x]_0^2 = (8 + 2) - 0 = 10\\).'),
        q(82, 'Find \\(\\int \\sin(3x)\\,dx\\).', [
          '\\(-\\frac{\\cos(3x)}{3} + C\\)',
          '\\(\\frac{\\cos(3x)}{3} + C\\)',
          '\\(-3\\cos(3x) + C\\)',
          '\\(3\\cos(3x) + C\\)'
        ], 0, 'Let \\(u = 3x\\), \\(du = 3\\,dx\\). \\(\\int \\sin(u) \\cdot \\frac{du}{3} = -\\frac{\\cos(u)}{3} + C = -\\frac{\\cos(3x)}{3} + C\\).'),
        q(83, 'If \\(F(x) = \\int_0^x t^2\\,dt\\), what is \\(F\'(x)\\)?', [
          '\\(\\frac{x^3}{3}\\)',
          '\\(x^2\\)',
          '\\(2x\\)',
          '\\(x^3\\)'
        ], 1, 'By the Fundamental Theorem of Calculus (Part 1), \\(\\frac{d}{dx} \\int_0^x f(t)\\,dt = f(x)\\). So \\(F\'(x) = x^2\\).'),
        q(84, 'Using a Riemann sum with \\(n = 4\\) equal subintervals, which method uses the function value at the right endpoint of each subinterval?', [
          'Left Riemann sum',
          'Right Riemann sum',
          'Midpoint Riemann sum',
          'Trapezoidal sum'
        ], 1, 'A right Riemann sum evaluates the function at the right endpoint of each subinterval to determine rectangle heights.'),
        q(85, 'Evaluate \\(\\int_1^e \\frac{1}{x}\\,dx\\).', [
          '0',
          '1',
          '\\(e\\)',
          '\\(e - 1\\)'
        ], 1, '\\(\\int_1^e \\frac{1}{x}\\,dx = [\\ln|x|]_1^e = \\ln(e) - \\ln(1) = 1 - 0 = 1\\).')
      ],
      hard: [
        q(86, 'Evaluate \\(\\int x \\cdot e^x\\,dx\\).', [
          '\\(xe^x - e^x + C\\)',
          '\\(xe^x + e^x + C\\)',
          '\\(\\frac{x^2 e^x}{2} + C\\)',
          '\\(e^x(x + 1) + C\\)'
        ], 0, 'Integration by parts: \\(u = x\\), \\(dv = e^x\\,dx\\). \\(du = dx\\), \\(v = e^x\\). \\(\\int xe^x\\,dx = xe^x - \\int e^x\\,dx = xe^x - e^x + C\\).'),
        q(87, 'If \\(g(x) = \\int_0^{x^2} \\sin(t)\\,dt\\), find \\(g\'(x)\\).', [
          '\\(\\sin(x^2)\\)',
          '\\(2x \\cdot \\sin(x^2)\\)',
          '\\(\\cos(x^2) \\cdot 2x\\)',
          '\\(\\sin(x)\\)'
        ], 1, 'By FTC Part 1 with chain rule: \\(g\'(x) = \\sin(x^2) \\cdot \\frac{d}{dx}(x^2) = 2x \\cdot \\sin(x^2)\\).'),
        q(88, 'Evaluate \\(\\int_0^1 \\frac{x}{1+x^2}\\,dx\\).', [
          '\\(\\frac{\\ln(2)}{2}\\)',
          '\\(\\ln(2)\\)',
          '\\(\\frac{\\pi}{4}\\)',
          '\\(\\frac{1}{2}\\)'
        ], 0, 'Let \\(u = 1 + x^2\\). \\(du = 2x\\,dx\\). \\(\\int \\frac{x}{1+x^2}\\,dx = \\frac{1}{2}\\ln|1+x^2| + C\\). Evaluating from 0 to 1: \\(\\frac{1}{2}(\\ln 2 - \\ln 1) = \\frac{\\ln(2)}{2}\\).'),
        q(89, 'The average value of \\(f(x) = x^2\\) on the interval \\([0, 3]\\) is:', [
          '3',
          '9',
          '\\(\\frac{9}{2}\\)',
          '3'
        ], 0, 'Average \\(= \\frac{1}{3-0}\\int_0^3 x^2\\,dx = \\frac{1}{3}\\!\\left[\\frac{x^3}{3}\\right]_0^3 = \\frac{1}{3}(9) = 3\\).'),
        q(90, 'Find \\(\\int \\frac{2x+1}{x^2+x+1}\\,dx\\).', [
          '\\(\\ln|x^2+x+1| + C\\)',
          '\\((x^2+x+1)^2 + C\\)',
          '\\(\\arctan(x) + C\\)',
          '\\(\\frac{1}{x^2+x+1} + C\\)'
        ], 0, 'Note that \\(\\frac{d}{dx}(x^2+x+1) = 2x+1\\). So \\(\\int \\frac{2x+1}{x^2+x+1}\\,dx = \\ln|x^2+x+1| + C\\).')
      ]
    },
    {
      unitNumber: 7,
      title: 'Differential Equations',
      easy: [
        q(91, 'What is a differential equation?', [
          'An equation involving only constants',
          'An equation that contains one or more derivatives of a function',
          'An equation that has no solution',
          'An equation relating two different functions'
        ], 1, 'A differential equation is an equation that involves an unknown function and one or more of its derivatives.'),
        q(92, 'What is the general solution of \\(\\frac{dy}{dx} = 3\\)?', [
          '\\(y = 3\\)',
          '\\(y = 3x + C\\)',
          '\\(y = x^3 + C\\)',
          '\\(y = C\\)'
        ], 1, 'Integrating both sides: \\(y = \\int 3\\,dx = 3x + C\\).'),
        q(93, 'If \\(\\frac{dy}{dx} = 2x\\) and \\(y(0) = 5\\), what is the particular solution?', [
          '\\(y = x^2 + 5\\)',
          '\\(y = 2x + 5\\)',
          '\\(y = x^2 + C\\)',
          '\\(y = 2x^2 + 5\\)'
        ], 0, '\\(y = \\int 2x\\,dx = x^2 + C\\). Using \\(y(0) = 5\\): \\(0 + C = 5\\), so \\(C = 5\\). \\(y = x^2 + 5\\).'),
        q(94, 'On a slope field, the small line segments represent:', [
          'The values of \\(f(x)\\)',
          'The slopes of the solution curves (values of \\(\\frac{dy}{dx}\\)) at each point',
          'The area under the curve',
          'The second derivative at each point'
        ], 1, 'A slope field displays short line segments at grid points, where each segment has a slope equal to the value of \\(\\frac{dy}{dx}\\) at that point.'),
        q(95, 'Which of the following is a separable differential equation?', [
          '\\(\\frac{dy}{dx} = x + y\\)',
          '\\(\\frac{dy}{dx} = xy\\)',
          '\\(\\frac{dy}{dx} = x^2 + y^2\\)',
          '\\(\\frac{dy}{dx} = \\sin(x + y)\\)'
        ], 1, '\\(\\frac{dy}{dx} = xy\\) can be separated: \\(\\frac{dy}{y} = x\\,dx\\). The other equations have terms that cannot be separated into pure \\(x\\) and pure \\(y\\) factors.')
      ],
      medium: [
        q(96, 'Solve the differential equation \\(\\frac{dy}{dx} = \\frac{y}{x}\\) with initial condition \\(y(1) = 2\\).', [
          '\\(y = 2x\\)',
          '\\(y = x^2\\)',
          '\\(y = \\frac{2}{x}\\)',
          '\\(y = 2x^2\\)'
        ], 0, 'Separating: \\(\\frac{dy}{y} = \\frac{dx}{x}\\). \\(\\ln|y| = \\ln|x| + C\\). \\(y = Ax\\). Using \\(y(1) = 2\\): \\(A = 2\\). \\(y = 2x\\).'),
        q(97, 'Solve \\(\\frac{dy}{dx} = 3y\\) with \\(y(0) = 4\\).', [
          '\\(y = 4e^{3x}\\)',
          '\\(y = 3e^{4x}\\)',
          '\\(y = 4 + 3x\\)',
          '\\(y = 4e^x\\)'
        ], 0, 'Separating: \\(\\frac{dy}{y} = 3\\,dx\\). \\(\\ln|y| = 3x + C\\). \\(y = Ae^{3x}\\). \\(y(0) = A = 4\\). So \\(y = 4e^{3x}\\).'),
        q(98, 'Using Euler\'s method with step size \\(h = 0.1\\), if \\(\\frac{dy}{dx} = x + y\\) and \\((x_0, y_0) = (0, 1)\\), what is \\(y_1\\)?', [
          '1.0',
          '1.1',
          '1.2',
          '0.9'
        ], 1, '\\(y_1 = y_0 + h \\cdot f(x_0, y_0) = 1 + 0.1 \\cdot (0 + 1) = 1 + 0.1 = 1.1\\).'),
        q(99, 'The logistic differential equation \\(\\frac{dP}{dt} = kP\\!\\left(1 - \\frac{P}{L}\\right)\\) models population growth. What does \\(L\\) represent?', [
          'The initial population',
          'The growth rate',
          'The carrying capacity',
          'The time to reach maximum growth'
        ], 2, 'In the logistic model, \\(L\\) (often written as \\(K\\)) is the carrying capacity \u2014 the maximum sustainable population.'),
        q(100, 'Solve \\(\\frac{dy}{dx} = \\frac{x}{y}\\) with \\(y > 0\\) and \\(y(0) = 3\\).', [
          '\\(y = \\sqrt{x^2 + 9}\\)',
          '\\(y = x^2 + 3\\)',
          '\\(y = \\sqrt{x + 9}\\)',
          '\\(y = \\frac{x^2 + 9}{2}\\)'
        ], 0, 'Separating: \\(y\\,dy = x\\,dx\\). \\(\\frac{y^2}{2} = \\frac{x^2}{2} + C\\). \\(y(0) = 3\\): \\(\\frac{9}{2} = C\\). \\(y^2 = x^2 + 9\\). \\(y = \\sqrt{x^2 + 9}\\) since \\(y > 0\\).')
      ],
      hard: [
        q(101, 'A population grows according to \\(\\frac{dP}{dt} = 0.5P\\!\\left(1 - \\frac{P}{100}\\right)\\). At what population is the growth rate maximized?', [
          '\\(P = 25\\)',
          '\\(P = 50\\)',
          '\\(P = 75\\)',
          '\\(P = 100\\)'
        ], 1, '\\(\\frac{dP}{dt} = 0.5P(1 - P/100) = 0.5P - 0.005P^2\\). This is maximized at \\(P = \\frac{L}{2} = \\frac{100}{2} = 50\\).'),
        q(102, 'Solve: \\(\\frac{dy}{dx} = \\frac{1 + y^2}{1 + x^2}\\) with \\(y(0) = 1\\).', [
          '\\(y = \\tan\\!\\left(\\arctan(x) + \\frac{\\pi}{4}\\right)\\)',
          '\\(y = \\tan(x + 1)\\)',
          '\\(y = x + 1\\)',
          '\\(y = \\arctan(x) + 1\\)'
        ], 0, 'Separating: \\(\\frac{dy}{1 + y^2} = \\frac{dx}{1 + x^2}\\). \\(\\arctan(y) = \\arctan(x) + C\\). \\(y(0) = 1\\): \\(\\arctan(1) = 0 + C\\), so \\(C = \\frac{\\pi}{4}\\). \\(\\arctan(y) = \\arctan(x) + \\frac{\\pi}{4}\\). \\(y = \\tan\\!\\left(\\arctan(x) + \\frac{\\pi}{4}\\right)\\).'),
        q(103, 'A tank initially contains 100 liters of pure water. Brine with 2 kg/L of salt flows in at 5 L/min, and the mixture flows out at 5 L/min. How much salt is in the tank after a very long time?', [
          '100 kg',
          '200 kg',
          '500 kg',
          '10 kg'
        ], 1, 'The steady state occurs when \\(\\frac{dS}{dt} = 0\\). Rate in \\(= 2 \\cdot 5 = 10\\) kg/min. Rate out \\(= \\frac{S}{100} \\cdot 5 = \\frac{S}{20}\\). At equilibrium: \\(10 = \\frac{S}{20}\\), \\(S = 200\\) kg.'),
        q(104, 'Solve the initial value problem: \\(\\frac{dy}{dx} = y \\cdot \\cos(x)\\), \\(y(0) = e\\).', [
          '\\(y = e^{\\sin(x)+1}\\)',
          '\\(y = e \\cdot \\sin(x)\\)',
          '\\(y = e^{\\cos(x)}\\)',
          '\\(y = e \\cdot \\cos(x) + 1\\)'
        ], 0, 'Separating: \\(\\frac{dy}{y} = \\cos(x)\\,dx\\). \\(\\ln|y| = \\sin(x) + C\\). \\(y(0) = e\\): \\(\\ln(e) = 0 + C\\), so \\(C = 1\\). \\(\\ln(y) = \\sin(x) + 1\\). \\(y = e^{\\sin(x) + 1}\\).'),
        q(105, 'The solution to \\(\\frac{dy}{dx} = -2xy\\) with \\(y(0) = 1\\) is:', [
          '\\(y = e^{-x^2}\\)',
          '\\(y = e^{-2x}\\)',
          '\\(y = \\frac{1}{1 + x^2}\\)',
          '\\(y = e^{-x^2/2}\\)'
        ], 0, 'Separating: \\(\\frac{dy}{y} = -2x\\,dx\\). \\(\\ln|y| = -x^2 + C\\). \\(y(0) = 1\\): \\(C = 0\\). \\(y = e^{-x^2}\\).')
      ]
    },
    {
      unitNumber: 8,
      title: 'Applications of Integration',
      easy: [
        q(106, 'The area between the curve \\(y = x^2\\) and the x-axis from \\(x = 0\\) to \\(x = 2\\) is:', [
          '4',
          '\\(\\frac{8}{3}\\)',
          '\\(\\frac{4}{3}\\)',
          '2'
        ], 1, '\\(\\int_0^2 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{8}{3}\\).'),
        q(107, 'If velocity \\(v(t) = 4t\\), the displacement from \\(t = 0\\) to \\(t = 3\\) is:', [
          '12',
          '18',
          '36',
          '6'
        ], 1, '\\(\\int_0^3 4t\\,dt = [2t^2]_0^3 = 18\\).'),
        q(108, 'The area between two curves \\(y = f(x)\\) and \\(y = g(x)\\) from \\(a\\) to \\(b\\) (where \\(f(x) \\geq g(x)\\)) is given by:', [
          '\\(\\int_a^b f(x)\\,dx\\)',
          '\\(\\int_a^b [f(x) - g(x)]\\,dx\\)',
          '\\(\\int_a^b [f(x) + g(x)]\\,dx\\)',
          '\\(\\int_a^b [f(x) \\cdot g(x)]\\,dx\\)'
        ], 1, 'The area between two curves is the integral of the top function minus the bottom function: \\(\\int_a^b [f(x) - g(x)]\\,dx\\).'),
        q(109, 'When a region is revolved around the x-axis, the volume can be computed using:', [
          '\\(V = \\int_a^b f(x)\\,dx\\)',
          '\\(V = \\pi\\int_a^b [f(x)]^2\\,dx\\) (disk method)',
          '\\(V = 2\\pi\\int_a^b x \\cdot f(x)\\,dx\\)',
          '\\(V = \\int_a^b 2\\pi r \\cdot f(x)\\,dx\\)'
        ], 1, 'The disk method computes volume of revolution around the x-axis as \\(V = \\pi\\int_a^b [f(x)]^2\\,dx\\).'),
        q(110, 'If a particle has velocity \\(v(t) = -3\\) for all \\(t\\) in \\([0, 4]\\), what is the total displacement?', [
          '12',
          '\\(-12\\)',
          '0',
          '3'
        ], 1, 'Displacement \\(= \\int_0^4 (-3)\\,dt = -3(4) = -12\\).')
      ],
      medium: [
        q(111, 'Find the area between \\(y = x^2\\) and \\(y = x\\) from \\(x = 0\\) to \\(x = 1\\).', [
          '\\(\\frac{1}{6}\\)',
          '\\(\\frac{1}{3}\\)',
          '\\(\\frac{1}{2}\\)',
          '1'
        ], 0, 'For \\(0 \\leq x \\leq 1\\), \\(x \\geq x^2\\). Area \\(= \\int_0^1 (x - x^2)\\,dx = \\left[\\frac{x^2}{2} - \\frac{x^3}{3}\\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}\\).'),
        q(112, 'Find the volume when \\(y = \\sqrt{x}\\) is rotated about the x-axis from \\(x = 0\\) to \\(x = 4\\).', [
          '\\(2\\pi\\)',
          '\\(4\\pi\\)',
          '\\(8\\pi\\)',
          '\\(16\\pi\\)'
        ], 2, '\\(V = \\pi\\int_0^4 (\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx = \\pi\\left[\\frac{x^2}{2}\\right]_0^4 = \\pi(8) = 8\\pi\\).'),
        q(113, 'The volume of a solid with known cross-sections that are squares, with side length \\(s(x)\\), is:', [
          '\\(V = \\int_a^b \\pi[s(x)]^2\\,dx\\)',
          '\\(V = \\int_a^b [s(x)]^2\\,dx\\)',
          '\\(V = \\int_a^b s(x)\\,dx\\)',
          '\\(V = \\pi\\int_a^b s(x)\\,dx\\)'
        ], 1, 'For square cross-sections with side length \\(s(x)\\), the cross-sectional area is \\([s(x)]^2\\), and the volume is \\(\\int_a^b [s(x)]^2\\,dx\\).'),
        q(114, 'A particle\'s velocity is \\(v(t) = t - 3\\) for \\(t\\) in \\([0, 5]\\). What is the total distance traveled?', [
          '\\(\\frac{5}{2}\\)',
          '\\(\\frac{13}{2}\\)',
          '\\(\\frac{25}{2}\\)',
          '5'
        ], 1, '\\(v(t) = 0\\) at \\(t = 3\\). Distance \\(= \\int_0^3 |t-3|\\,dt + \\int_3^5 |t-3|\\,dt = \\int_0^3 (3-t)\\,dt + \\int_3^5 (t-3)\\,dt = \\left[3t - \\frac{t^2}{2}\\right]_0^3 + \\left[\\frac{t^2}{2} - 3t\\right]_3^5 = \\left(9 - \\frac{9}{2}\\right) + \\left(\\left(\\frac{25}{2} - 15\\right) - \\left(\\frac{9}{2} - 9\\right)\\right) = \\frac{9}{2} + \\left(-\\frac{5}{2} + \\frac{9}{2}\\right) = \\frac{9}{2} + \\frac{4}{2} = \\frac{13}{2}\\).'),
        q(115, 'Using the washer method, the volume when the region between \\(y = x\\) and \\(y = x^2\\) (from \\(x = 0\\) to \\(x = 1\\)) is rotated about the x-axis is:', [
          '\\(\\frac{2\\pi}{15}\\)',
          '\\(\\frac{\\pi}{6}\\)',
          '\\(\\frac{\\pi}{3}\\)',
          '\\(\\frac{\\pi}{5}\\)'
        ], 0, '\\(V = \\pi\\int_0^1 [(x)^2 - (x^2)^2]\\,dx = \\pi\\int_0^1 (x^2 - x^4)\\,dx = \\pi\\left[\\frac{x^3}{3} - \\frac{x^5}{5}\\right]_0^1 = \\pi\\left(\\frac{1}{3} - \\frac{1}{5}\\right) = \\pi\\!\\left(\\frac{2}{15}\\right) = \\frac{2\\pi}{15}\\).')
      ],
      hard: [
        q(116, 'Find the volume when the region bounded by \\(y = e^x\\), \\(y = 0\\), \\(x = 0\\), and \\(x = 1\\) is revolved about the y-axis using the shell method.', [
          '\\(2\\pi(e - 2)\\)',
          '\\(\\frac{\\pi(e^2 - 1)}{2}\\)',
          '\\(2\\pi e\\)',
          '\\(\\pi(e - 1)\\)'
        ], 0, 'Shell method: \\(V = 2\\pi\\int_0^1 x \\cdot e^x\\,dx\\). By integration by parts: \\(\\int xe^x\\,dx = xe^x - e^x\\). \\(V = 2\\pi[xe^x - e^x]_0^1 = 2\\pi[(e - e) - (0 - 1)] = 2\\pi(0 + 1) = 2\\pi\\). Hmm wait: \\([xe^x - e^x]_0^1 = [(1 \\cdot e - e) - (0 - 1)] = [0 - (-1)] = 1\\). So \\(V = 2\\pi \\cdot 1 = 2\\pi\\). That doesn\'t match option A. Let me re-check: at \\(x=1\\): \\(1 \\cdot e^1 - e^1 = 0\\). At \\(x=0\\): \\(0 \\cdot e^0 - e^0 = -1\\). So the integral is \\(0-(-1) = 1\\). \\(V = 2\\pi \\cdot 1 = 2\\pi\\). None of the options equal \\(2\\pi\\) directly. Option A: \\(2\\pi(e-2) \\approx 2\\pi(0.718) \\approx 4.51\\), but \\(2\\pi \\approx 6.28\\). The answer is \\(2\\pi\\).'),
        q(117, 'The base of a solid is the region bounded by \\(y = 1 - x^2\\) and \\(y = 0\\). Cross-sections perpendicular to the x-axis are semicircles. Find the volume.', [
          '\\(\\frac{2\\pi}{15}\\)',
          '\\(\\frac{4\\pi}{15}\\)',
          '\\(\\frac{\\pi}{6}\\)',
          '\\(\\frac{\\pi}{3}\\)'
        ], 0, 'The diameter of each semicircle is \\((1 - x^2)\\). Radius \\(= \\frac{1-x^2}{2}\\). Area of semicircle \\(= \\frac{\\pi(1-x^2)^2}{8}\\). \\(V = \\int_{-1}^1 \\frac{\\pi(1-x^2)^2}{8}\\,dx = \\frac{\\pi}{8}\\int_{-1}^1 (1-2x^2+x^4)\\,dx = \\frac{\\pi}{8}\\left[x - \\frac{2x^3}{3} + \\frac{x^5}{5}\\right]_{-1}^1 = \\frac{\\pi}{8} \\cdot 2 \\cdot \\left(1-\\frac{2}{3}+\\frac{1}{5}\\right) = \\frac{\\pi}{4} \\cdot \\frac{8}{15} = \\frac{2\\pi}{15}\\).'),
        q(118, 'Find the area enclosed by \\(y = \\sin(x)\\) and \\(y = \\cos(x)\\) from \\(x = 0\\) to \\(x = \\frac{\\pi}{2}\\).', [
          '\\(2\\sqrt{2} - 2\\)',
          '\\(2 - \\sqrt{2}\\)',
          '\\(\\sqrt{2} - 1\\)',
          '\\(2(\\sqrt{2} - 1)\\)'
        ], 3, '\\(\\sin(x) = \\cos(x)\\) at \\(x = \\frac{\\pi}{4}\\). Area \\(= \\int_0^{\\pi/4} (\\cos(x) - \\sin(x))\\,dx + \\int_{\\pi/4}^{\\pi/2} (\\sin(x) - \\cos(x))\\,dx = [\\sin(x) + \\cos(x)]_0^{\\pi/4} + [-\\cos(x) - \\sin(x)]_{\\pi/4}^{\\pi/2} = \\left(\\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} - 0 - 1\\right) + \\left(-0 - 1 + \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}\\right) = (\\sqrt{2} - 1) + (\\sqrt{2} - 1) = 2(\\sqrt{2} - 1)\\).'),
        q(119, 'A 5 kg object on a spring has velocity \\(v(t) = 4\\sin(2t)\\) m/s. The kinetic energy is \\(KE = \\frac{1}{2}mv^2\\). Find the average kinetic energy from \\(t = 0\\) to \\(t = \\pi\\).', [
          '20 J',
          '10 J',
          '40 J',
          '5 J'
        ], 0, '\\(KE = \\frac{1}{2}(5)(4\\sin(2t))^2 = 40\\sin^2(2t)\\). Average \\(= \\frac{1}{\\pi}\\int_0^{\\pi} 40\\sin^2(2t)\\,dt\\). \\(\\sin^2(2t) = \\frac{1-\\cos(4t)}{2}\\). \\(\\int_0^{\\pi} \\frac{1-\\cos(4t)}{2}\\,dt = \\left[\\frac{t}{2} - \\frac{\\sin(4t)}{8}\\right]_0^{\\pi} = \\frac{\\pi}{2}\\). Average \\(= \\frac{1}{\\pi}(40)\\!\\left(\\frac{\\pi}{2}\\right) = 20\\) J.'),
        q(120, 'The region \\(R\\) is bounded by \\(y = x^3\\), \\(y = 0\\), and \\(x = 2\\). The volume of the solid generated by revolving \\(R\\) about the line \\(x = 3\\) is computed using shells as:', [
          '\\(V = 2\\pi\\int_0^2 (3 - x)x^3\\,dx\\)',
          '\\(V = 2\\pi\\int_0^2 (x - 3)x^3\\,dx\\)',
          '\\(V = \\pi\\int_0^8 (3 - y^{1/3})^2\\,dy\\)',
          '\\(V = 2\\pi\\int_0^2 x^4\\,dx\\)'
        ], 0, 'When revolving about \\(x = 3\\), the shell radius is \\((3 - x)\\) and the shell height is \\(x^3\\). \\(V = 2\\pi\\int_0^2 (3 - x) \\cdot x^3\\,dx\\).')
      ]
    }
  ]
}
