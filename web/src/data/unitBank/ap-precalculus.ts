import type { SubjectUnitBank } from './types'

export const BANK_AP_PRECALCULUS: SubjectUnitBank = {
  "label": "AP Precalculus",
  "slug": "ap-precalculus",
  "units": [
    {
      "unitNumber": 1,
      "title": "Polynomial and Rational Functions",
      "questions": [
        {
          "id": "q-u1-easy-1",
          "question": "What is the degree of the polynomial \\(f(x) = 3x^4 - 2x^2 + 7\\)?",
          "options": [
            "2",
            "3",
            "4",
            "7"
          ],
          "correctAnswer": 2,
          "explanation": "The degree is the highest exponent of the variable. The highest power here is \\(x^4\\), so the degree is 4.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-2",
          "question": "What is the \\(y\\)-intercept of \\(f(x) = x^2 - 5x + 6\\)?",
          "options": [
            "\\(6\\)",
            "\\(-5\\)",
            "\\(0\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The \\(y\\)-intercept occurs at \\(x = 0\\): \\(f(0) = 6\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-3",
          "question": "The zeros of \\(f(x) = (x - 2)(x + 3)\\) are",
          "options": [
            "\\(x = 2\\) and \\(x = -3\\)",
            "\\(x = -2\\) and \\(x = 3\\)",
            "\\(x = 2\\) and \\(x = 3\\)",
            "\\(x = -2\\) and \\(x = -3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Setting each factor to zero: \\(x - 2 = 0\\) gives \\(x = 2\\), and \\(x + 3 = 0\\) gives \\(x = -3\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-4",
          "question": "A rational function \\(f(x) = \\frac{1}{x - 4}\\) has a vertical asymptote at",
          "options": [
            "\\(x = 4\\)",
            "\\(x = -4\\)",
            "\\(y = 0\\)",
            "\\(x = 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A vertical asymptote occurs where the denominator equals zero (and the numerator does not): \\(x - 4 = 0\\), so \\(x = 4\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-5",
          "question": "What is the leading coefficient of \\(f(x) = -5x^3 + 2x - 1\\)?",
          "options": [
            "\\(-5\\)",
            "\\(2\\)",
            "\\(-1\\)",
            "\\(3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The leading coefficient is the coefficient of the highest-degree term, \\(-5x^3\\), which is \\(-5\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-6",
          "question": "The end behavior of an even-degree polynomial with a positive leading coefficient is that both ends",
          "options": [
            "go up (toward \\(+\\infty\\))",
            "go down (toward \\(-\\infty\\))",
            "one up, one down",
            "stay flat"
          ],
          "correctAnswer": 0,
          "explanation": "For an even degree with a positive leading coefficient, \\(f(x) \\to +\\infty\\) as \\(x \\to \\pm\\infty\\)—both ends rise.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-7",
          "question": "Which is a factor of \\(f(x) = x^2 - 9\\)?",
          "options": [
            "\\(x - 3\\)",
            "\\(x - 9\\)",
            "\\(x + 9\\)",
            "\\(x^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(x^2 - 9\\) is a difference of squares: \\((x - 3)(x + 3)\\). So \\(x - 3\\) is a factor.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-8",
          "question": "A polynomial function is continuous",
          "options": [
            "only at integers",
            "for all real numbers",
            "never",
            "only where it is positive"
          ],
          "correctAnswer": 1,
          "explanation": "Polynomial functions are continuous and smooth over the entire set of real numbers, with no breaks or asymptotes.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-9",
          "question": "The horizontal asymptote of \\(f(x) = \\frac{3x}{x + 2}\\) is",
          "options": [
            "\\(y = 3\\)",
            "\\(y = 0\\)",
            "\\(x = -2\\)",
            "\\(y = 2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "When numerator and denominator have equal degree, the horizontal asymptote is the ratio of leading coefficients: \\(3/1 = 3\\), so \\(y = 3\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-10",
          "question": "How many real zeros (counting multiplicity) can a degree-3 polynomial have at most?",
          "options": [
            "1",
            "2",
            "3",
            "4"
          ],
          "correctAnswer": 2,
          "explanation": "A polynomial of degree \\(n\\) has at most \\(n\\) real zeros. A cubic can have at most 3.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-medium-1",
          "question": "At a zero of even multiplicity, the graph of a polynomial",
          "options": [
            "crosses the \\(x\\)-axis",
            "touches the \\(x\\)-axis and turns around (does not cross)",
            "has a vertical asymptote",
            "is undefined"
          ],
          "correctAnswer": 1,
          "explanation": "A zero of even multiplicity produces a graph that touches the \\(x\\)-axis and bounces back, rather than crossing it.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-2",
          "question": "What is the horizontal asymptote of \\(f(x) = \\frac{2x + 1}{x^2 - 3}\\)?",
          "options": [
            "\\(y = 2\\)",
            "\\(y = 0\\)",
            "\\(y = 1\\)",
            "none"
          ],
          "correctAnswer": 1,
          "explanation": "When the denominator's degree is greater than the numerator's, the horizontal asymptote is \\(y = 0\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-3",
          "question": "The function \\(f(x) = \\frac{x^2 - 1}{x - 1}\\) has a hole (removable discontinuity) at",
          "options": [
            "\\(x = 1\\)",
            "\\(x = -1\\)",
            "\\(x = 0\\)",
            "\\(x = 2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(x^2 - 1 = (x-1)(x+1)\\); the \\((x-1)\\) cancels with the denominator, leaving a hole at \\(x = 1\\) rather than an asymptote.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-4",
          "question": "If \\(f(x) = x^3 - 4x\\), what are its real zeros?",
          "options": [
            "\\(x = 0, 2, -2\\)",
            "\\(x = 0, 4\\)",
            "\\(x = 2, -2\\)",
            "\\(x = 4, -4\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Factor: \\(x^3 - 4x = x(x^2 - 4) = x(x-2)(x+2)\\). Zeros are \\(x = 0, 2, -2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-5",
          "question": "A polynomial of odd degree with a positive leading coefficient has end behavior",
          "options": [
            "down on the left, up on the right",
            "up on both ends",
            "down on both ends",
            "up on the left, down on the right"
          ],
          "correctAnswer": 0,
          "explanation": "For odd degree with positive leading coefficient, \\(f(x) \\to -\\infty\\) as \\(x \\to -\\infty\\) and \\(f(x) \\to +\\infty\\) as \\(x \\to +\\infty\\): down-left, up-right.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-6",
          "question": "The average rate of change of \\(f(x) = x^2\\) on the interval \\([1, 3]\\) is",
          "options": [
            "\\(4\\)",
            "\\(2\\)",
            "\\(8\\)",
            "\\(9\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Average rate of change \\(= \\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{2} = 4\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-7",
          "question": "Which describes the multiplicity of the zero at \\(x = 2\\) in \\(f(x) = (x - 2)^3(x + 1)\\)?",
          "options": [
            "multiplicity 3",
            "multiplicity 1",
            "multiplicity 2",
            "multiplicity 4"
          ],
          "correctAnswer": 0,
          "explanation": "The factor \\((x - 2)\\) appears to the third power, so the zero at \\(x = 2\\) has multiplicity 3.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-8",
          "question": "A rational function has a slant (oblique) asymptote when the degree of the numerator is",
          "options": [
            "exactly one more than the degree of the denominator",
            "equal to the denominator's degree",
            "less than the denominator's degree",
            "two more than the denominator's degree"
          ],
          "correctAnswer": 0,
          "explanation": "A slant asymptote occurs when the numerator's degree is exactly one greater than the denominator's degree.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-9",
          "question": "If \\(f(x) = x^2 - 6x + 8\\), the vertex occurs at \\(x =\\)",
          "options": [
            "\\(3\\)",
            "\\(-3\\)",
            "\\(6\\)",
            "\\(8\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The vertex \\(x\\)-coordinate is \\(x = -\\frac{b}{2a} = -\\frac{-6}{2(1)} = 3\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-10",
          "question": "The domain of \\(f(x) = \\frac{5}{x^2 - 4}\\) excludes which values?",
          "options": [
            "\\(x = 2\\) and \\(x = -2\\)",
            "\\(x = 4\\)",
            "\\(x = 0\\)",
            "\\(x = 5\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The denominator \\(x^2 - 4 = (x-2)(x+2)\\) is zero at \\(x = 2\\) and \\(x = -2\\), which must be excluded from the domain.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-hard-1",
          "question": "A polynomial function \\(f\\) has zeros at \\(x = -1\\) (multiplicity 2) and \\(x = 3\\) (multiplicity 1). What is the minimum possible degree of \\(f\\)?",
          "options": [
            "2",
            "3",
            "4",
            "1"
          ],
          "correctAnswer": 1,
          "explanation": "The multiplicities sum to \\(2 + 1 = 3\\), so the minimum degree is 3 (e.g., \\(f(x) = (x+1)^2(x-3)\\)).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-2",
          "question": "For \\(f(x) = \\frac{x^2 - 4}{x^2 - x - 6}\\), identify the vertical asymptote(s).",
          "options": [
            "\\(x = 3\\) only",
            "\\(x = 3\\) and \\(x = -2\\)",
            "\\(x = 2\\) and \\(x = -2\\)",
            "none"
          ],
          "correctAnswer": 0,
          "explanation": "Factor: numerator \\((x-2)(x+2)\\), denominator \\((x-3)(x+2)\\). The \\((x+2)\\) cancels (hole at \\(x=-2\\)), leaving a vertical asymptote only at \\(x = 3\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-3",
          "question": "As \\(x \\to \\infty\\), the function \\(f(x) = \\frac{4x^3 + x}{2x^3 - 5}\\) approaches",
          "options": [
            "\\(2\\)",
            "\\(0\\)",
            "\\(\\infty\\)",
            "\\(4\\)"
          ],
          "correctAnswer": 0,
          "explanation": "With equal degrees, the horizontal asymptote is the ratio of leading coefficients: \\(4/2 = 2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-4",
          "question": "A cubic polynomial with real coefficients has one real zero at \\(x = 2\\). What must be true about its other two zeros?",
          "options": [
            "They are both equal to 2",
            "They are either two more real zeros or a pair of complex conjugates",
            "They must be complex and unequal to each other's conjugate",
            "There are no other zeros"
          ],
          "correctAnswer": 1,
          "explanation": "A degree-3 polynomial has 3 zeros (counting multiplicity). Besides \\(x=2\\), the remaining two are either both real or a complex conjugate pair (since complex zeros of real polynomials come in conjugate pairs).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-5",
          "question": "The graph of \\(f(x) = x^4 - 5x^2 + 4\\) crosses the \\(x\\)-axis at how many distinct points?",
          "options": [
            "2",
            "3",
            "4",
            "0"
          ],
          "correctAnswer": 2,
          "explanation": "Let \\(u = x^2\\): \\(u^2 - 5u + 4 = (u-1)(u-4)\\), so \\(x^2 = 1\\) or \\(x^2 = 4\\), giving \\(x = \\pm 1, \\pm 2\\)—four distinct zeros.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-6",
          "question": "If a polynomial \\(f(x)\\) satisfies \\(f(1) = -2\\) and \\(f(4) = 7\\), the Intermediate Value Theorem guarantees that",
          "options": [
            "\\(f\\) has a maximum on \\([1,4]\\)",
            "\\(f\\) has at least one zero on the interval \\((1, 4)\\)",
            "\\(f\\) is increasing on \\([1,4]\\)",
            "\\(f\\) has no zeros"
          ],
          "correctAnswer": 1,
          "explanation": "Since \\(f\\) is continuous and changes sign from \\(-2\\) to \\(7\\), the IVT guarantees at least one value \\(c\\) in \\((1,4)\\) with \\(f(c) = 0\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-7",
          "question": "A rational function \\(f(x) = \\frac{x^2 + 3x + 2}{x + 1}\\) simplifies to",
          "options": [
            "\\(x + 2\\) with a hole at \\(x = -1\\)",
            "\\(x + 1\\) with no restrictions",
            "\\(x + 2\\) with a vertical asymptote at \\(x = -1\\)",
            "\\(x - 2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Factor numerator: \\((x+1)(x+2)\\). Cancel \\((x+1)\\) to get \\(x + 2\\), but \\(x = -1\\) is excluded—a hole (removable discontinuity), not an asymptote.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-8",
          "question": "Which best describes the behavior of \\(f(x) = \\frac{1}{x - 2}\\) as \\(x \\to 2^+\\) (from the right)?",
          "options": [
            "\\(f(x) \\to +\\infty\\)",
            "\\(f(x) \\to -\\infty\\)",
            "\\(f(x) \\to 0\\)",
            "\\(f(x) \\to 2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "As \\(x \\to 2^+\\), \\(x - 2\\) is a small positive number, so \\(\\frac{1}{x-2} \\to +\\infty\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-9",
          "question": "A polynomial \\(f\\) is positive on \\((-\\infty, -1)\\), negative on \\((-1, 2)\\), and positive on \\((2, \\infty)\\). What can be concluded about its zeros at \\(x = -1\\) and \\(x = 2\\)?",
          "options": [
            "Both have even multiplicity",
            "Both have odd multiplicity (the sign changes at each)",
            "Neither is a zero",
            "Only \\(x = 2\\) is a zero"
          ],
          "correctAnswer": 1,
          "explanation": "The function changes sign at both \\(x = -1\\) and \\(x = 2\\), which happens at zeros of odd multiplicity (the graph crosses the axis).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-10",
          "question": "For \\(f(x) = \\frac{2x^2 + 3}{x - 1}\\), what type of asymptote does the function have besides the vertical asymptote?",
          "options": [
            "a horizontal asymptote at \\(y = 2\\)",
            "a slant (oblique) asymptote",
            "a horizontal asymptote at \\(y = 0\\)",
            "no other asymptote"
          ],
          "correctAnswer": 1,
          "explanation": "The numerator's degree (2) is exactly one more than the denominator's (1), so the function has a slant asymptote (found by polynomial division).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 2,
      "title": "Exponential and Logarithmic Functions",
      "questions": [
        {
          "id": "q-u2-easy-1",
          "question": "What is the value of \\(2^0\\)?",
          "options": [
            "\\(0\\)",
            "\\(1\\)",
            "\\(2\\)",
            "undefined"
          ],
          "correctAnswer": 1,
          "explanation": "Any nonzero base raised to the power 0 equals 1, so \\(2^0 = 1\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-2",
          "question": "The expression \\(\\log_2 8\\) equals",
          "options": [
            "\\(2\\)",
            "\\(3\\)",
            "\\(4\\)",
            "\\(8\\)"
          ],
          "correctAnswer": 1,
          "explanation": "\\(\\log_2 8\\) asks for the power of 2 that gives 8. Since \\(2^3 = 8\\), the answer is 3.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-3",
          "question": "An exponential function \\(f(x) = a \\cdot b^x\\) represents growth when",
          "options": [
            "\\(b > 1\\)",
            "\\(0 < b < 1\\)",
            "\\(b = 1\\)",
            "\\(b = 0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "When the base \\(b > 1\\), the function increases (exponential growth). When \\(0 < b < 1\\), it decays.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-4",
          "question": "The inverse of the exponential function \\(f(x) = b^x\\) is",
          "options": [
            "\\(\\log_b x\\)",
            "\\(x^b\\)",
            "\\(b/x\\)",
            "\\(-b^x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The logarithm base \\(b\\) is the inverse of the exponential function base \\(b\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-5",
          "question": "What is \\(\\log_{10} 1000\\)?",
          "options": [
            "\\(2\\)",
            "\\(3\\)",
            "\\(10\\)",
            "\\(100\\)"
          ],
          "correctAnswer": 1,
          "explanation": "\\(10^3 = 1000\\), so \\(\\log_{10} 1000 = 3\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-6",
          "question": "The domain of \\(f(x) = \\log(x)\\) is",
          "options": [
            "all real numbers",
            "\\(x > 0\\)",
            "\\(x \\geq 0\\)",
            "\\(x < 0\\)"
          ],
          "correctAnswer": 1,
          "explanation": "Logarithms are defined only for positive arguments, so the domain is \\(x > 0\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-7",
          "question": "The value of \\(e^0\\) is",
          "options": [
            "\\(0\\)",
            "\\(1\\)",
            "\\(e\\)",
            "\\(2.718\\)"
          ],
          "correctAnswer": 1,
          "explanation": "Any nonzero base to the power 0 is 1, so \\(e^0 = 1\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-8",
          "question": "Which is equivalent to \\(\\log_b(xy)\\)?",
          "options": [
            "\\(\\log_b x + \\log_b y\\)",
            "\\(\\log_b x \\cdot \\log_b y\\)",
            "\\(\\log_b x - \\log_b y\\)",
            "\\(\\log_b(x + y)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The product rule for logarithms: \\(\\log_b(xy) = \\log_b x + \\log_b y\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-9",
          "question": "An exponential decay function has a base \\(b\\) such that",
          "options": [
            "\\(b > 1\\)",
            "\\(0 < b < 1\\)",
            "\\(b = 1\\)",
            "\\(b < 0\\)"
          ],
          "correctAnswer": 1,
          "explanation": "For exponential decay, the base satisfies \\(0 < b < 1\\), so the function decreases as \\(x\\) increases.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-10",
          "question": "The horizontal asymptote of \\(f(x) = 2^x\\) is",
          "options": [
            "\\(y = 0\\)",
            "\\(y = 2\\)",
            "\\(x = 0\\)",
            "\\(y = 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "As \\(x \\to -\\infty\\), \\(2^x \\to 0\\). The graph approaches the horizontal asymptote \\(y = 0\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-medium-1",
          "question": "Solve for \\(x\\): \\(3^x = 81\\).",
          "options": [
            "\\(x = 3\\)",
            "\\(x = 4\\)",
            "\\(x = 27\\)",
            "\\(x = 9\\)"
          ],
          "correctAnswer": 1,
          "explanation": "Since \\(81 = 3^4\\), we have \\(3^x = 3^4\\), so \\(x = 4\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-2",
          "question": "The expression \\(\\log_b\\left(\\frac{x}{y}\\right)\\) is equivalent to",
          "options": [
            "\\(\\log_b x - \\log_b y\\)",
            "\\(\\log_b x + \\log_b y\\)",
            "\\(\\frac{\\log_b x}{\\log_b y}\\)",
            "\\(\\log_b x \\cdot \\log_b y\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The quotient rule for logarithms: \\(\\log_b\\left(\\frac{x}{y}\\right) = \\log_b x - \\log_b y\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-3",
          "question": "Using the power rule, \\(\\log_b(x^3)\\) equals",
          "options": [
            "\\(3\\log_b x\\)",
            "\\(\\log_b x + 3\\)",
            "\\((\\log_b x)^3\\)",
            "\\(\\frac{1}{3}\\log_b x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The power rule: \\(\\log_b(x^n) = n\\log_b x\\), so \\(\\log_b(x^3) = 3\\log_b x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-4",
          "question": "A population doubles every year, starting at 500. Which function models the population after \\(t\\) years?",
          "options": [
            "\\(P(t) = 500 \\cdot 2^t\\)",
            "\\(P(t) = 500 + 2t\\)",
            "\\(P(t) = 500 \\cdot t^2\\)",
            "\\(P(t) = 2 \\cdot 500^t\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Doubling each year gives exponential growth with base 2: \\(P(t) = 500 \\cdot 2^t\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-5",
          "question": "Solve \\(\\log_2 x = 5\\).",
          "options": [
            "\\(x = 32\\)",
            "\\(x = 10\\)",
            "\\(x = 25\\)",
            "\\(x = 7\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\log_2 x = 5\\) means \\(x = 2^5 = 32\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-6",
          "question": "The graph of \\(f(x) = \\log(x - 3)\\) has a vertical asymptote at",
          "options": [
            "\\(x = 3\\)",
            "\\(x = -3\\)",
            "\\(x = 0\\)",
            "\\(y = 3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The argument \\(x - 3\\) must be positive; the vertical asymptote is where it equals zero: \\(x = 3\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-7",
          "question": "Which expression equals \\(\\log 2 + \\log 50\\)?",
          "options": [
            "\\(\\log 100 = 2\\)",
            "\\(\\log 52\\)",
            "\\(\\log 25\\)",
            "\\(\\log 2500\\)"
          ],
          "correctAnswer": 0,
          "explanation": "By the product rule, \\(\\log 2 + \\log 50 = \\log(2 \\cdot 50) = \\log 100 = 2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-8",
          "question": "An exponential function passes through \\((0, 3)\\) and \\((1, 12)\\). Its equation is",
          "options": [
            "\\(f(x) = 3 \\cdot 4^x\\)",
            "\\(f(x) = 3 \\cdot 12^x\\)",
            "\\(f(x) = 12 \\cdot 3^x\\)",
            "\\(f(x) = 3 + 9x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f(0) = 3\\) gives \\(a = 3\\). Then \\(f(1) = 3b = 12\\), so \\(b = 4\\). Thus \\(f(x) = 3 \\cdot 4^x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-9",
          "question": "The change-of-base formula expresses \\(\\log_b x\\) as",
          "options": [
            "\\(\\frac{\\ln x}{\\ln b}\\)",
            "\\(\\ln x \\cdot \\ln b\\)",
            "\\(\\frac{\\ln b}{\\ln x}\\)",
            "\\(\\ln(x/b)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The change-of-base formula: \\(\\log_b x = \\frac{\\ln x}{\\ln b}\\) (or using any consistent base).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-10",
          "question": "If \\(f(x) = 5 \\cdot (0.8)^x\\), the function represents",
          "options": [
            "exponential decay",
            "exponential growth",
            "linear growth",
            "a constant"
          ],
          "correctAnswer": 0,
          "explanation": "The base \\(0.8\\) satisfies \\(0 < b < 1\\), so the function decays exponentially.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-hard-1",
          "question": "Solve for \\(x\\): \\(2^{x+1} = 16\\).",
          "options": [
            "\\(x = 3\\)",
            "\\(x = 4\\)",
            "\\(x = 7\\)",
            "\\(x = 15\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(16 = 2^4\\), so \\(2^{x+1} = 2^4\\), giving \\(x + 1 = 4\\) and \\(x = 3\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-2",
          "question": "If \\(\\log_b 2 = 0.3\\) and \\(\\log_b 3 = 0.5\\), what is \\(\\log_b 12\\)?",
          "options": [
            "\\(1.1\\)",
            "\\(0.8\\)",
            "\\(1.5\\)",
            "\\(0.6\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(12 = 2^2 \\cdot 3\\), so \\(\\log_b 12 = 2\\log_b 2 + \\log_b 3 = 2(0.3) + 0.5 = 0.6 + 0.5 = 1.1\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-3",
          "question": "Solve \\(\\log(x) + \\log(x - 3) = 1\\).",
          "options": [
            "\\(x = 5\\)",
            "\\(x = -2\\)",
            "\\(x = 5\\) and \\(x = -2\\)",
            "\\(x = 10\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Combine: \\(\\log[x(x-3)] = 1\\), so \\(x^2 - 3x = 10\\), giving \\(x^2 - 3x - 10 = 0\\), \\((x-5)(x+2)=0\\). Only \\(x = 5\\) is valid (the domain requires \\(x > 3\\)).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-4",
          "question": "A quantity decays so that half remains every 4 hours. What fraction remains after 12 hours?",
          "options": [
            "\\(\\frac{1}{8}\\)",
            "\\(\\frac{1}{4}\\)",
            "\\(\\frac{1}{2}\\)",
            "\\(\\frac{1}{12}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "12 hours is 3 half-lives (\\(12/4 = 3\\)). The fraction remaining is \\((1/2)^3 = 1/8\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-5",
          "question": "Solve for \\(x\\): \\(e^{2x} = 7\\). (Express exactly.)",
          "options": [
            "\\(x = \\frac{\\ln 7}{2}\\)",
            "\\(x = \\ln 7 - 2\\)",
            "\\(x = 2\\ln 7\\)",
            "\\(x = \\frac{7}{2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Take the natural log: \\(2x = \\ln 7\\), so \\(x = \\frac{\\ln 7}{2}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-6",
          "question": "The functions \\(f(x) = 3^x\\) and \\(g(x) = \\log_3 x\\) are inverses. This means their graphs are",
          "options": [
            "reflections of each other across the line \\(y = x\\)",
            "parallel",
            "identical",
            "reflections across the \\(x\\)-axis"
          ],
          "correctAnswer": 0,
          "explanation": "A function and its inverse are reflections of each other across the line \\(y = x\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-7",
          "question": "An investment grows continuously at 5% per year, modeled by \\(A = P e^{0.05t}\\). Approximately how is the doubling time found?",
          "options": [
            "Solve \\(2 = e^{0.05t}\\), giving \\(t = \\frac{\\ln 2}{0.05}\\)",
            "Solve \\(2 = 0.05t\\)",
            "Solve \\(t = 2P\\)",
            "Solve \\(2 = t^{0.05}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Doubling means \\(A = 2P\\), so \\(2 = e^{0.05t}\\). Taking the natural log: \\(t = \\frac{\\ln 2}{0.05}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-8",
          "question": "If \\(\\log_5 x = 2\\) and \\(\\log_5 y = 3\\), then \\(\\log_5\\left(\\frac{x^2}{y}\\right)\\) equals",
          "options": [
            "\\(1\\)",
            "\\(7\\)",
            "\\(-1\\)",
            "\\(4\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\log_5\\left(\\frac{x^2}{y}\\right) = 2\\log_5 x - \\log_5 y = 2(2) - 3 = 4 - 3 = 1\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-9",
          "question": "The graph of \\(g(x) = 2^{x} - 3\\) compared to \\(f(x) = 2^x\\) is shifted",
          "options": [
            "down 3 units, with horizontal asymptote \\(y = -3\\)",
            "up 3 units",
            "right 3 units",
            "left 3 units"
          ],
          "correctAnswer": 0,
          "explanation": "Subtracting 3 shifts the graph down 3 units, moving the horizontal asymptote from \\(y = 0\\) to \\(y = -3\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-10",
          "question": "Why does an exponential model \\(f(x) = a b^x\\) eventually exceed any polynomial model as \\(x \\to \\infty\\) (for \\(b > 1\\))?",
          "options": [
            "Exponential functions grow at a rate proportional to their current value, causing faster-than-polynomial growth",
            "Polynomials are undefined for large \\(x\\)",
            "Exponentials are linear",
            "They grow at the same rate"
          ],
          "correctAnswer": 0,
          "explanation": "An exponential function's growth rate is proportional to its own value, so it compounds and ultimately outpaces any fixed-degree polynomial as \\(x\\) grows large.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 3,
      "title": "Trigonometric and Polar Functions",
      "questions": [
        {
          "id": "q-u3-easy-1",
          "question": "On the unit circle, \\(\\sin(\\theta)\\) corresponds to the",
          "options": [
            "\\(x\\)-coordinate",
            "\\(y\\)-coordinate",
            "radius",
            "angle in degrees"
          ],
          "correctAnswer": 1,
          "explanation": "On the unit circle, a point is \\((\\cos\\theta, \\sin\\theta)\\), so \\(\\sin\\theta\\) is the \\(y\\)-coordinate.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-2",
          "question": "What is \\(\\sin(0)\\)?",
          "options": [
            "\\(0\\)",
            "\\(1\\)",
            "\\(-1\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "At angle 0, the point on the unit circle is \\((1, 0)\\), so \\(\\sin(0) = 0\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-3",
          "question": "What is \\(\\cos(0)\\)?",
          "options": [
            "\\(0\\)",
            "\\(1\\)",
            "\\(-1\\)",
            "\\(\\frac{1}{2}\\)"
          ],
          "correctAnswer": 1,
          "explanation": "At angle 0, the point on the unit circle is \\((1, 0)\\), so \\(\\cos(0) = 1\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-4",
          "question": "The period of the basic sine function \\(y = \\sin(x)\\) is",
          "options": [
            "\\(\\pi\\)",
            "\\(2\\pi\\)",
            "\\(\\frac{\\pi}{2}\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 1,
          "explanation": "The sine function repeats every \\(2\\pi\\), so its period is \\(2\\pi\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-5",
          "question": "How many radians are in \\(180^\\circ\\)?",
          "options": [
            "\\(\\pi\\)",
            "\\(2\\pi\\)",
            "\\(\\frac{\\pi}{2}\\)",
            "\\(90\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(180^\\circ = \\pi\\) radians, since a full circle \\(360^\\circ = 2\\pi\\) radians.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-6",
          "question": "The amplitude of \\(y = 3\\sin(x)\\) is",
          "options": [
            "\\(3\\)",
            "\\(1\\)",
            "\\(2\\pi\\)",
            "\\(0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The amplitude is the absolute value of the coefficient of the sine, which is \\(3\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-7",
          "question": "The tangent function is defined as",
          "options": [
            "\\(\\frac{\\sin\\theta}{\\cos\\theta}\\)",
            "\\(\\frac{\\cos\\theta}{\\sin\\theta}\\)",
            "\\(\\sin\\theta \\cdot \\cos\\theta\\)",
            "\\(\\sin\\theta + \\cos\\theta\\)"
          ],
          "correctAnswer": 0,
          "explanation": "By definition, \\(\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-8",
          "question": "In polar coordinates, a point is described by",
          "options": [
            "\\((x, y)\\)",
            "\\((r, \\theta)\\) — a radius and an angle",
            "\\((a, b, c)\\)",
            "a single number"
          ],
          "correctAnswer": 1,
          "explanation": "Polar coordinates use \\((r, \\theta)\\): the distance \\(r\\) from the origin and the angle \\(\\theta\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-9",
          "question": "What is \\(\\cos(90^\\circ)\\)?",
          "options": [
            "\\(0\\)",
            "\\(1\\)",
            "\\(-1\\)",
            "\\(\\frac{1}{2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "At \\(90^\\circ\\) the point on the unit circle is \\((0, 1)\\), so \\(\\cos(90^\\circ) = 0\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-10",
          "question": "The Pythagorean identity states that",
          "options": [
            "\\(\\sin^2\\theta + \\cos^2\\theta = 1\\)",
            "\\(\\sin\\theta + \\cos\\theta = 1\\)",
            "\\(\\sin^2\\theta - \\cos^2\\theta = 1\\)",
            "\\(\\tan^2\\theta = 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The fundamental Pythagorean identity is \\(\\sin^2\\theta + \\cos^2\\theta = 1\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-medium-1",
          "question": "What is the period of \\(y = \\sin(2x)\\)?",
          "options": [
            "\\(\\pi\\)",
            "\\(2\\pi\\)",
            "\\(4\\pi\\)",
            "\\(\\frac{\\pi}{2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The period of \\(\\sin(bx)\\) is \\(\\frac{2\\pi}{b}\\). Here \\(b = 2\\), so the period is \\(\\frac{2\\pi}{2} = \\pi\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-2",
          "question": "What is \\(\\sin\\left(\\frac{\\pi}{6}\\right)\\)?",
          "options": [
            "\\(\\frac{1}{2}\\)",
            "\\(\\frac{\\sqrt{3}}{2}\\)",
            "\\(\\frac{\\sqrt{2}}{2}\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{\\pi}{6} = 30^\\circ\\), and \\(\\sin(30^\\circ) = \\frac{1}{2}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-3",
          "question": "The graph of \\(y = \\cos(x)\\) has a maximum value of 1 at",
          "options": [
            "\\(x = 0\\)",
            "\\(x = \\frac{\\pi}{2}\\)",
            "\\(x = \\pi\\)",
            "\\(x = \\frac{3\\pi}{2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\cos(x)\\) reaches its maximum of 1 at \\(x = 0\\) (and every \\(2\\pi\\) thereafter).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-4",
          "question": "For \\(y = 2\\sin(x) + 3\\), the midline of the graph is",
          "options": [
            "\\(y = 3\\)",
            "\\(y = 2\\)",
            "\\(y = 0\\)",
            "\\(y = 5\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The vertical shift \\(+3\\) moves the midline to \\(y = 3\\); the graph oscillates 2 units above and below it.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-5",
          "question": "What is \\(\\tan\\left(\\frac{\\pi}{4}\\right)\\)?",
          "options": [
            "\\(1\\)",
            "\\(0\\)",
            "\\(\\frac{\\sqrt{3}}{3}\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "At \\(\\frac{\\pi}{4} = 45^\\circ\\), \\(\\sin = \\cos = \\frac{\\sqrt2}{2}\\), so \\(\\tan = \\frac{\\sin}{\\cos} = 1\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-6",
          "question": "The reciprocal of \\(\\sin\\theta\\) is",
          "options": [
            "\\(\\csc\\theta\\)",
            "\\(\\sec\\theta\\)",
            "\\(\\cot\\theta\\)",
            "\\(\\cos\\theta\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The cosecant is the reciprocal of sine: \\(\\csc\\theta = \\frac{1}{\\sin\\theta}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-7",
          "question": "Converting the polar point \\((r, \\theta) = (2, 0)\\) to rectangular coordinates gives",
          "options": [
            "\\((2, 0)\\)",
            "\\((0, 2)\\)",
            "\\((0, 0)\\)",
            "\\((2, 2)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(x = r\\cos\\theta = 2\\cos 0 = 2\\), \\(y = r\\sin\\theta = 2\\sin 0 = 0\\). So the point is \\((2, 0)\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-8",
          "question": "The function \\(y = \\cos(x)\\) is best described as",
          "options": [
            "an even function, symmetric about the \\(y\\)-axis",
            "an odd function",
            "neither even nor odd",
            "a linear function"
          ],
          "correctAnswer": 0,
          "explanation": "Cosine is even: \\(\\cos(-x) = \\cos(x)\\), so its graph is symmetric about the \\(y\\)-axis.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-9",
          "question": "For \\(y = \\sin(x)\\), what is the range?",
          "options": [
            "\\([-1, 1]\\)",
            "\\([0, 1]\\)",
            "all real numbers",
            "\\([0, 2\\pi]\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The sine function oscillates between \\(-1\\) and \\(1\\), so its range is \\([-1, 1]\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-10",
          "question": "The vertical asymptotes of \\(y = \\tan(x)\\) occur where",
          "options": [
            "\\(\\cos(x) = 0\\)",
            "\\(\\sin(x) = 0\\)",
            "\\(x = 0\\)",
            "\\(\\tan(x) = 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(\\tan(x) = \\frac{\\sin x}{\\cos x}\\), it is undefined (has vertical asymptotes) where \\(\\cos(x) = 0\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-hard-1",
          "question": "The function \\(y = 3\\sin(2x) + 1\\) has amplitude, period, and midline, respectively, of",
          "options": [
            "\\(3\\), \\(\\pi\\), \\(y = 1\\)",
            "\\(2\\), \\(3\\), \\(y = 1\\)",
            "\\(3\\), \\(2\\pi\\), \\(y = 0\\)",
            "\\(1\\), \\(\\pi\\), \\(y = 3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Amplitude \\(= |3| = 3\\); period \\(= \\frac{2\\pi}{2} = \\pi\\); vertical shift \\(+1\\) gives midline \\(y = 1\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-2",
          "question": "If \\(\\cos\\theta = \\frac{3}{5}\\) and \\(\\theta\\) is in the first quadrant, what is \\(\\sin\\theta\\)?",
          "options": [
            "\\(\\frac{4}{5}\\)",
            "\\(\\frac{5}{4}\\)",
            "\\(\\frac{3}{4}\\)",
            "\\(-\\frac{4}{5}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Using \\(\\sin^2\\theta + \\cos^2\\theta = 1\\): \\(\\sin^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}\\). In quadrant I, \\(\\sin\\theta = \\frac{4}{5}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-3",
          "question": "Solve \\(2\\sin(x) = 1\\) for \\(x\\) in \\([0, 2\\pi)\\).",
          "options": [
            "\\(x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}\\)",
            "\\(x = \\frac{\\pi}{6}\\) only",
            "\\(x = \\frac{\\pi}{3}, \\frac{2\\pi}{3}\\)",
            "\\(x = \\frac{\\pi}{2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\sin(x) = \\frac12\\) at \\(x = \\frac{\\pi}{6}\\) and \\(x = \\frac{5\\pi}{6}\\) within \\([0, 2\\pi)\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-4",
          "question": "A sinusoidal function has a maximum of 7 and a minimum of 1. Its amplitude and midline are",
          "options": [
            "amplitude 3, midline \\(y = 4\\)",
            "amplitude 6, midline \\(y = 4\\)",
            "amplitude 3, midline \\(y = 3\\)",
            "amplitude 4, midline \\(y = 3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Amplitude \\(= \\frac{\\max - \\min}{2} = \\frac{7 - 1}{2} = 3\\); midline \\(= \\frac{\\max + \\min}{2} = \\frac{7 + 1}{2} = 4\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-5",
          "question": "The rectangular point \\((0, -4)\\) corresponds to which polar coordinates (with \\(r > 0\\))?",
          "options": [
            "\\((4, \\frac{3\\pi}{2})\\)",
            "\\((4, \\frac{\\pi}{2})\\)",
            "\\((-4, 0)\\)",
            "\\((4, \\pi)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(r = \\sqrt{0^2 + (-4)^2} = 4\\). The point is on the negative \\(y\\)-axis, at angle \\(\\frac{3\\pi}{2}\\). So \\((4, \\frac{3\\pi}{2})\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-6",
          "question": "Which transformation does the graph of \\(y = \\sin\\left(x - \\frac{\\pi}{2}\\right)\\) represent relative to \\(y = \\sin(x)\\)?",
          "options": [
            "a horizontal shift right by \\(\\frac{\\pi}{2}\\) (which equals \\(\\cos x\\)... shifted)",
            "a vertical shift up",
            "a reflection",
            "a change in amplitude"
          ],
          "correctAnswer": 0,
          "explanation": "Subtracting \\(\\frac{\\pi}{2}\\) inside the function shifts the graph right by \\(\\frac{\\pi}{2}\\). (In fact \\(\\sin(x - \\frac{\\pi}{2}) = -\\cos x\\).)",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-7",
          "question": "If \\(\\sin\\theta > 0\\) and \\(\\cos\\theta < 0\\), the angle \\(\\theta\\) lies in which quadrant?",
          "options": [
            "Quadrant II",
            "Quadrant I",
            "Quadrant III",
            "Quadrant IV"
          ],
          "correctAnswer": 0,
          "explanation": "Sine (the \\(y\\)-coordinate) is positive and cosine (the \\(x\\)-coordinate) is negative in Quadrant II.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-8",
          "question": "The polar equation \\(r = 4\\) describes",
          "options": [
            "a circle of radius 4 centered at the origin",
            "a line",
            "a single point",
            "a spiral"
          ],
          "correctAnswer": 0,
          "explanation": "When \\(r\\) is constant for all \\(\\theta\\), the graph is a circle of that radius centered at the origin.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-9",
          "question": "Over one full period, how many times does \\(y = \\cos(x)\\) equal 0?",
          "options": [
            "2",
            "1",
            "4",
            "0"
          ],
          "correctAnswer": 0,
          "explanation": "Within one period \\([0, 2\\pi)\\), \\(\\cos(x) = 0\\) at \\(x = \\frac{\\pi}{2}\\) and \\(x = \\frac{3\\pi}{2}\\)—twice.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-10",
          "question": "A Ferris wheel's height is modeled by \\(h(t) = 25\\sin\\left(\\frac{\\pi}{15}t\\right) + 30\\). What are the maximum height and the period?",
          "options": [
            "max 55, period 30",
            "max 30, period 15",
            "max 25, period 30",
            "max 55, period 15"
          ],
          "correctAnswer": 0,
          "explanation": "Max height \\(= 30 + 25 = 55\\). Period \\(= \\frac{2\\pi}{\\pi/15} = 30\\).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 4,
      "title": "Functions Involving Parameters, Vectors, and Matrices",
      "questions": [
        {
          "id": "q-u4-easy-1",
          "question": "A vector has both",
          "options": [
            "magnitude and direction",
            "only magnitude",
            "only direction",
            "neither"
          ],
          "correctAnswer": 0,
          "explanation": "A vector is defined by both a magnitude (length) and a direction.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-2",
          "question": "Parametric equations express \\(x\\) and \\(y\\) each as functions of",
          "options": [
            "a third variable (parameter), often \\(t\\)",
            "each other only",
            "a constant",
            "the origin"
          ],
          "correctAnswer": 0,
          "explanation": "Parametric equations define \\(x = f(t)\\) and \\(y = g(t)\\) in terms of a parameter \\(t\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-3",
          "question": "The magnitude of the vector \\(\\langle 3, 4 \\rangle\\) is",
          "options": [
            "\\(5\\)",
            "\\(7\\)",
            "\\(12\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Magnitude \\(= \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-4",
          "question": "Adding vectors \\(\\langle 1, 2 \\rangle\\) and \\(\\langle 3, 4 \\rangle\\) gives",
          "options": [
            "\\(\\langle 4, 6 \\rangle\\)",
            "\\(\\langle 3, 8 \\rangle\\)",
            "\\(\\langle 4, 8 \\rangle\\)",
            "\\(\\langle 2, 2 \\rangle\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Vectors are added component-wise: \\(\\langle 1+3, 2+4 \\rangle = \\langle 4, 6 \\rangle\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-5",
          "question": "A matrix is best described as",
          "options": [
            "a rectangular array of numbers arranged in rows and columns",
            "a single number",
            "a type of vector only",
            "an angle"
          ],
          "correctAnswer": 0,
          "explanation": "A matrix is a rectangular array of numbers organized into rows and columns.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-6",
          "question": "The dimensions of a matrix with 2 rows and 3 columns are written as",
          "options": [
            "\\(2 \\times 3\\)",
            "\\(3 \\times 2\\)",
            "\\(6\\)",
            "\\(5\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Matrix dimensions are stated as rows \\(\\times\\) columns, so 2 rows and 3 columns is \\(2 \\times 3\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-7",
          "question": "Multiplying the vector \\(\\langle 2, 3 \\rangle\\) by the scalar 4 gives",
          "options": [
            "\\(\\langle 8, 12 \\rangle\\)",
            "\\(\\langle 6, 7 \\rangle\\)",
            "\\(\\langle 2, 12 \\rangle\\)",
            "\\(\\langle 4, 4 \\rangle\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Scalar multiplication multiplies each component: \\(4\\langle 2, 3 \\rangle = \\langle 8, 12 \\rangle\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-8",
          "question": "In the parametric equations \\(x = t\\), \\(y = t^2\\), when \\(t = 3\\), the point is",
          "options": [
            "\\((3, 9)\\)",
            "\\((9, 3)\\)",
            "\\((3, 3)\\)",
            "\\((3, 6)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "At \\(t = 3\\): \\(x = 3\\) and \\(y = 3^2 = 9\\), giving the point \\((3, 9)\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-9",
          "question": "The identity matrix acts like the number ___ in matrix multiplication.",
          "options": [
            "1",
            "0",
            "2",
            "-1"
          ],
          "correctAnswer": 0,
          "explanation": "The identity matrix leaves other matrices unchanged under multiplication, playing the role that 1 plays for numbers.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-10",
          "question": "To add two matrices, they must have",
          "options": [
            "the same dimensions",
            "the same determinant",
            "only one row each",
            "different sizes"
          ],
          "correctAnswer": 0,
          "explanation": "Matrix addition is done element-by-element, so the matrices must have identical dimensions.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-medium-1",
          "question": "Eliminate the parameter from \\(x = t + 1\\), \\(y = 2t\\). The relationship between \\(x\\) and \\(y\\) is",
          "options": [
            "\\(y = 2(x - 1)\\)",
            "\\(y = 2x + 1\\)",
            "\\(y = x - 1\\)",
            "\\(y = 2x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "From \\(x = t + 1\\), \\(t = x - 1\\). Substitute into \\(y = 2t\\): \\(y = 2(x - 1)\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-2",
          "question": "The magnitude of the vector \\(\\langle -6, 8 \\rangle\\) is",
          "options": [
            "\\(10\\)",
            "\\(14\\)",
            "\\(2\\)",
            "\\(48\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Magnitude \\(= \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-3",
          "question": "If \\(\\vec{u} = \\langle 2, -1 \\rangle\\) and \\(\\vec{v} = \\langle 3, 5 \\rangle\\), then \\(\\vec{u} - \\vec{v}\\) equals",
          "options": [
            "\\(\\langle -1, -6 \\rangle\\)",
            "\\(\\langle 5, 4 \\rangle\\)",
            "\\(\\langle -1, 6 \\rangle\\)",
            "\\(\\langle 1, -6 \\rangle\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Subtract component-wise: \\(\\langle 2 - 3, -1 - 5 \\rangle = \\langle -1, -6 \\rangle\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-4",
          "question": "For matrices to be multiplied \\(AB\\), the number of columns of \\(A\\) must equal",
          "options": [
            "the number of rows of \\(B\\)",
            "the number of columns of \\(B\\)",
            "the number of rows of \\(A\\)",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Matrix multiplication \\(AB\\) is defined only when the number of columns of \\(A\\) equals the number of rows of \\(B\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-5",
          "question": "The parametric equations \\(x = \\cos t\\), \\(y = \\sin t\\) (for \\(0 \\le t < 2\\pi\\)) trace out",
          "options": [
            "a unit circle",
            "a straight line",
            "a parabola",
            "a single point"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(\\cos^2 t + \\sin^2 t = 1\\), the points satisfy \\(x^2 + y^2 = 1\\)—the unit circle.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-6",
          "question": "The determinant of the \\(2 \\times 2\\) matrix \\(\\begin{bmatrix} 2 & 3 \\\\ 1 & 4 \\end{bmatrix}\\) is",
          "options": [
            "\\(5\\)",
            "\\(11\\)",
            "\\(8\\)",
            "\\(-5\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For \\(\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}\\), the determinant is \\(ad - bc = (2)(4) - (3)(1) = 8 - 3 = 5\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-7",
          "question": "A vector in component form \\(\\langle a, b \\rangle\\) has direction angle \\(\\theta\\) where \\(\\tan\\theta =\\)",
          "options": [
            "\\(\\frac{b}{a}\\)",
            "\\(\\frac{a}{b}\\)",
            "\\(ab\\)",
            "\\(a + b\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The direction angle satisfies \\(\\tan\\theta = \\frac{b}{a}\\) (the ratio of the vertical to horizontal component).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-8",
          "question": "Scalar multiplication of a matrix by 3 multiplies",
          "options": [
            "every entry of the matrix by 3",
            "only the first row by 3",
            "only the diagonal by 3",
            "the determinant only"
          ],
          "correctAnswer": 0,
          "explanation": "Scalar multiplication multiplies every entry of the matrix by that scalar.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-9",
          "question": "Parametric equations are especially useful because they can",
          "options": [
            "represent motion and curves that are not functions of \\(x\\)",
            "only represent straight lines",
            "never represent circles",
            "only work for polynomials"
          ],
          "correctAnswer": 0,
          "explanation": "Parametric equations can describe paths (including motion over time) and curves, like circles, that fail the vertical-line test and are not functions of \\(x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-10",
          "question": "Adding the matrices \\(\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}\\) and \\(\\begin{bmatrix} 0 & 1 \\\\ 2 & 1 \\end{bmatrix}\\) gives",
          "options": [
            "\\(\\begin{bmatrix} 1 & 3 \\\\ 5 & 5 \\end{bmatrix}\\)",
            "\\(\\begin{bmatrix} 1 & 2 \\\\ 5 & 5 \\end{bmatrix}\\)",
            "\\(\\begin{bmatrix} 0 & 2 \\\\ 6 & 4 \\end{bmatrix}\\)",
            "\\(\\begin{bmatrix} 1 & 3 \\\\ 5 & 4 \\end{bmatrix}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Add corresponding entries: \\(\\begin{bmatrix} 1+0 & 2+1 \\\\ 3+2 & 4+1 \\end{bmatrix} = \\begin{bmatrix} 1 & 3 \\\\ 5 & 5 \\end{bmatrix}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-hard-1",
          "question": "A projectile's path is given by \\(x = 3t\\), \\(y = -t^2 + 4t\\). At what parameter value \\(t\\) does the object hit the ground (\\(y = 0\\)) for \\(t > 0\\)?",
          "options": [
            "\\(t = 4\\)",
            "\\(t = 2\\)",
            "\\(t = 3\\)",
            "\\(t = 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Set \\(y = 0\\): \\(-t^2 + 4t = 0\\), so \\(t(4 - t) = 0\\). The positive solution is \\(t = 4\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-2",
          "question": "If \\(\\vec{u} = \\langle 4, 3 \\rangle\\), what is the unit vector in the direction of \\(\\vec{u}\\)?",
          "options": [
            "\\(\\langle \\frac{4}{5}, \\frac{3}{5} \\rangle\\)",
            "\\(\\langle 4, 3 \\rangle\\)",
            "\\(\\langle \\frac{1}{4}, \\frac{1}{3} \\rangle\\)",
            "\\(\\langle \\frac{3}{5}, \\frac{4}{5} \\rangle\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The magnitude is \\(\\sqrt{16 + 9} = 5\\). Dividing each component by 5 gives the unit vector \\(\\langle \\frac{4}{5}, \\frac{3}{5} \\rangle\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-3",
          "question": "The product of \\(\\begin{bmatrix} 1 & 2 \\end{bmatrix}\\) (1×2) and \\(\\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}\\) (2×1) is",
          "options": [
            "\\([11]\\)",
            "\\([7]\\)",
            "\\([12]\\)",
            "\\(\\begin{bmatrix} 3 & 8 \\end{bmatrix}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The product is a 1×1 matrix: \\((1)(3) + (2)(4) = 3 + 8 = 11\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-4",
          "question": "Eliminating the parameter from \\(x = 2\\cos t\\), \\(y = 2\\sin t\\) yields the equation",
          "options": [
            "\\(x^2 + y^2 = 4\\)",
            "\\(x^2 + y^2 = 2\\)",
            "\\(x + y = 2\\)",
            "\\(x^2 - y^2 = 4\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\left(\\frac{x}{2}\\right)^2 + \\left(\\frac{y}{2}\\right)^2 = \\cos^2 t + \\sin^2 t = 1\\), so \\(x^2 + y^2 = 4\\)—a circle of radius 2.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-5",
          "question": "A matrix transformation can rotate or scale points in the plane. Multiplying a point (as a column vector) by a matrix corresponds to",
          "options": [
            "applying a linear transformation to that point",
            "adding a constant to the point",
            "reflecting only across \\(y = x\\)",
            "leaving the point unchanged always"
          ],
          "correctAnswer": 0,
          "explanation": "Multiplying a vector by a matrix applies a linear transformation (such as rotation, scaling, or reflection) to the point.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-6",
          "question": "Two vectors \\(\\vec{u} = \\langle 2, 4 \\rangle\\) and \\(\\vec{v} = \\langle 1, 2 \\rangle\\) are related how?",
          "options": [
            "\\(\\vec{u} = 2\\vec{v}\\), so they are parallel",
            "they are perpendicular",
            "they have equal magnitude",
            "they are opposite in direction"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(\\vec{u} = \\langle 2, 4 \\rangle = 2\\langle 1, 2 \\rangle = 2\\vec{v}\\), the vectors are scalar multiples—hence parallel.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-7",
          "question": "The determinant of \\(\\begin{bmatrix} 3 & 0 \\\\ 0 & 5 \\end{bmatrix}\\) tells us the transformation scales area by a factor of",
          "options": [
            "\\(15\\)",
            "\\(8\\)",
            "\\(0\\)",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The determinant is \\((3)(5) - (0)(0) = 15\\). The absolute value of the determinant gives the area scaling factor of the linear transformation.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-8",
          "question": "For the parametric motion \\(x = t^2\\), \\(y = t^3\\), which statement about the resulting curve is true?",
          "options": [
            "It is not a function of \\(x\\) in general because a single \\(x\\) can correspond to two \\(y\\) values",
            "It is always a straight line",
            "\\(x\\) can be negative",
            "It never passes through the origin"
          ],
          "correctAnswer": 0,
          "explanation": "For \\(t\\) and \\(-t\\), \\(x = t^2\\) is the same but \\(y = t^3\\) differs in sign, so one \\(x\\)-value can give two \\(y\\)-values—hence the curve is not a function of \\(x\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-9",
          "question": "If a vector has magnitude 10 and direction angle \\(30^\\circ\\), its horizontal component is",
          "options": [
            "\\(10\\cos 30^\\circ = 5\\sqrt{3}\\)",
            "\\(10\\sin 30^\\circ = 5\\)",
            "\\(10\\)",
            "\\(30\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The horizontal component is \\(|\\vec{v}|\\cos\\theta = 10\\cos 30^\\circ = 10 \\cdot \\frac{\\sqrt3}{2} = 5\\sqrt3\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-10",
          "question": "Why are matrices useful for solving systems of linear equations?",
          "options": [
            "A system can be represented as a matrix equation and solved using matrix operations (e.g., inverses or row reduction)",
            "Matrices can only store data, not solve equations",
            "Systems of equations cannot be written as matrices",
            "Matrices only work for one equation"
          ],
          "correctAnswer": 0,
          "explanation": "A linear system can be written as \\(A\\vec{x} = \\vec{b}\\); matrix techniques such as finding \\(A^{-1}\\) or row reduction then solve for the unknowns efficiently.",
          "difficulty": "hard"
        }
      ]
    }
  ]
}
