import type { SubjectUnitBank } from './types'

export const BANK_AP_CALCULUS_BC: SubjectUnitBank = {
  "label": "AP Calculus BC",
  "slug": "ap-calculus-bc",
  "units": [
    {
      "unitNumber": 1,
      "title": "Limits and Continuity",
      "questions": [
        {
          "id": "q-u1-easy-1",
          "question": "What is \\(\\lim_{x \\to 4}(2x - 3)\\)?",
          "options": [
            "\\(5\\)",
            "\\(8\\)",
            "\\(11\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Substitute directly: \\(2(4) - 3 = 5\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-2",
          "question": "What is \\(\\lim_{x \\to \\infty}\\frac{7}{x}\\)?",
          "options": [
            "\\(0\\)",
            "\\(7\\)",
            "\\(\\infty\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "As \\(x \\to \\infty\\), \\(\\frac{7}{x} \\to 0\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-3",
          "question": "A function is continuous at \\(x = a\\) if \\(\\lim_{x \\to a}f(x)\\) equals",
          "options": [
            "\\(f(a)\\)",
            "0",
            "the derivative",
            "infinity"
          ],
          "correctAnswer": 0,
          "explanation": "Continuity requires the limit to equal the function value f(a).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-4",
          "question": "What is \\(\\lim_{x \\to 0}\\frac{\\sin x}{x}\\)?",
          "options": [
            "\\(1\\)",
            "\\(0\\)",
            "\\(\\infty\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "This standard limit equals 1.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-5",
          "question": "What is \\(\\lim_{x \\to 2}(x^2 + 1)\\)?",
          "options": [
            "\\(5\\)",
            "\\(4\\)",
            "\\(3\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Substitute: \\(2^2 + 1 = 5\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-6",
          "question": "A removable discontinuity occurs when",
          "options": [
            "the limit exists but doesn't equal f(a)",
            "the limit is infinite",
            "the function is continuous",
            "the function is linear"
          ],
          "correctAnswer": 0,
          "explanation": "A removable discontinuity (hole) has a limit that exists but differs from (or f(a) is undefined) the function value.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-7",
          "question": "What is \\(\\lim_{x \\to \\infty}\\frac{4x}{x + 1}\\)?",
          "options": [
            "\\(4\\)",
            "\\(0\\)",
            "\\(\\infty\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Equal-degree rational function: ratio of leading coefficients = 4.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-8",
          "question": "An infinite discontinuity is associated with a",
          "options": [
            "vertical asymptote",
            "hole",
            "jump",
            "continuous point"
          ],
          "correctAnswer": 0,
          "explanation": "An infinite discontinuity occurs at a vertical asymptote where the function grows without bound.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-9",
          "question": "What is \\(\\lim_{x \\to 0}\\cos x\\)?",
          "options": [
            "\\(1\\)",
            "\\(0\\)",
            "\\(\\infty\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "Cosine is continuous, so the limit is \\(\\cos 0 = 1\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-10",
          "question": "Polynomials are continuous",
          "options": [
            "everywhere",
            "only at integers",
            "nowhere",
            "only where positive"
          ],
          "correctAnswer": 0,
          "explanation": "Polynomial functions are continuous for all real numbers.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-medium-1",
          "question": "What is \\(\\lim_{x \\to 3}\\frac{x^2 - 9}{x - 3}\\)?",
          "options": [
            "\\(6\\)",
            "\\(0\\)",
            "undefined",
            "\\(3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Factor: \\(\\frac{(x-3)(x+3)}{x-3} = x + 3\\); at \\(x=3\\), this is 6.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-2",
          "question": "What is \\(\\lim_{x \\to \\infty}\\frac{2x^2 + x}{4x^2 - 3}\\)?",
          "options": [
            "\\(\\frac{1}{2}\\)",
            "\\(0\\)",
            "\\(2\\)",
            "\\(\\infty\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Ratio of leading coefficients: \\(2/4 = 1/2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-3",
          "question": "If \\(\\lim_{x \\to 1^-}f(x) = 2\\) and \\(\\lim_{x \\to 1^+}f(x) = 4\\), then \\(\\lim_{x \\to 1}f(x)\\)",
          "options": [
            "does not exist",
            "equals 3",
            "equals 2",
            "equals 4"
          ],
          "correctAnswer": 0,
          "explanation": "The one-sided limits differ, so the two-sided limit does not exist.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-4",
          "question": "What is \\(\\lim_{x \\to 0}\\frac{\\sin(5x)}{x}\\)?",
          "options": [
            "\\(5\\)",
            "\\(1\\)",
            "\\(0\\)",
            "\\(\\frac{1}{5}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{\\sin(5x)}{x} = 5\\cdot\\frac{\\sin(5x)}{5x} \\to 5(1) = 5\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-5",
          "question": "For continuity of \\(f(x) = ax + 2\\) (\\(x < 1\\)) and \\(f(x) = x^2 + 1\\) (\\(x \\geq 1\\)) at \\(x = 1\\), \\(a =\\)",
          "options": [
            "\\(0\\)",
            "\\(1\\)",
            "\\(2\\)",
            "\\(-1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Continuity requires \\(a + 2 = 2\\), so \\(a = 0\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-6",
          "question": "What is \\(\\lim_{x \\to \\infty}\\frac{3x + 5}{x^2 + 2}\\)?",
          "options": [
            "\\(0\\)",
            "\\(3\\)",
            "\\(\\infty\\)",
            "\\(5\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Denominator degree exceeds numerator, so the limit is 0.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-7",
          "question": "The Intermediate Value Theorem applies to functions that are",
          "options": [
            "continuous on a closed interval",
            "differentiable only",
            "polynomials only",
            "discontinuous"
          ],
          "correctAnswer": 0,
          "explanation": "The IVT requires continuity on the closed interval [a, b].",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-8",
          "question": "What is \\(\\lim_{x \\to 0}\\frac{\\tan x}{x}\\)?",
          "options": [
            "\\(1\\)",
            "\\(0\\)",
            "\\(\\infty\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{\\tan x}{x} = \\frac{\\sin x}{x\\cos x} \\to 1\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-9",
          "question": "A jump discontinuity has",
          "options": [
            "finite but unequal one-sided limits",
            "equal one-sided limits",
            "an infinite limit",
            "no limits"
          ],
          "correctAnswer": 0,
          "explanation": "A jump discontinuity occurs when both one-sided limits exist but differ.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-10",
          "question": "What is \\(\\lim_{x \\to 9}\\frac{x - 9}{\\sqrt{x} - 3}\\)?",
          "options": [
            "\\(6\\)",
            "\\(0\\)",
            "\\(3\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "Multiply by the conjugate: \\(\\sqrt{x} + 3\\); at \\(x = 9\\), \\(3 + 3 = 6\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-hard-1",
          "question": "What is \\(\\lim_{x \\to 0}\\frac{1 - \\cos x}{x^2}\\)?",
          "options": [
            "\\(\\frac{1}{2}\\)",
            "\\(1\\)",
            "\\(0\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "This limit equals 1/2 (by L'Hôpital's rule applied twice).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-2",
          "question": "What is \\(\\lim_{x \\to \\infty}\\left(\\sqrt{x^2 + 3x} - x\\right)\\)?",
          "options": [
            "\\(\\frac{3}{2}\\)",
            "\\(0\\)",
            "\\(\\infty\\)",
            "\\(3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Multiply by conjugate: \\(\\frac{3x}{\\sqrt{x^2+3x}+x} \\to \\frac{3x}{2x} = \\frac{3}{2}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-3",
          "question": "What is \\(\\lim_{x \\to 0^+}x\\ln x\\)?",
          "options": [
            "\\(0\\)",
            "\\(-\\infty\\)",
            "\\(1\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "Rewrite as \\(\\frac{\\ln x}{1/x}\\); L'Hôpital gives \\(\\lim(-x) = 0\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-4",
          "question": "What is \\(\\lim_{x \\to \\infty}\\frac{e^x}{x^3}\\)?",
          "options": [
            "\\(\\infty\\)",
            "\\(0\\)",
            "\\(1\\)",
            "\\(3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Exponential growth dominates polynomial, so the limit is \\(\\infty\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-5",
          "question": "The Squeeze Theorem gives \\(\\lim_{x \\to 0}x^2\\cos\\frac{1}{x} =\\)",
          "options": [
            "\\(0\\)",
            "\\(1\\)",
            "does not exist",
            "\\(\\infty\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(-x^2 \\le x^2\\cos\\frac{1}{x} \\le x^2\\), both bounds go to 0, so the limit is 0.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-6",
          "question": "If \\(f\\) is continuous with \\(f(0) = -1\\) and \\(f(3) = 4\\), the IVT guarantees",
          "options": [
            "a zero in (0, 3)",
            "a maximum of 4",
            "f is increasing",
            "f(1) = 0"
          ],
          "correctAnswer": 0,
          "explanation": "Since f changes sign, the IVT guarantees at least one root in (0, 3).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-7",
          "question": "What is \\(\\lim_{x \\to 0}\\frac{e^{2x} - 1}{x}\\)?",
          "options": [
            "\\(2\\)",
            "\\(1\\)",
            "\\(0\\)",
            "\\(\\infty\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Form 0/0; L'Hôpital: \\(\\lim\\frac{2e^{2x}}{1} = 2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-8",
          "question": "The function \\(f(x) = \\frac{x^2 - 4}{x - 2}\\) at \\(x = 2\\) has",
          "options": [
            "a removable discontinuity with limit 4",
            "a vertical asymptote",
            "a jump",
            "continuity"
          ],
          "correctAnswer": 0,
          "explanation": "Factoring gives \\(x + 2\\) for \\(x \\ne 2\\); the limit is 4 but f(2) is undefined—a hole.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-9",
          "question": "What is \\(\\lim_{x \\to \\infty}\\frac{\\ln x}{x}\\)?",
          "options": [
            "\\(0\\)",
            "\\(1\\)",
            "\\(\\infty\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "L'Hôpital: \\(\\lim\\frac{1/x}{1} = 0\\); polynomial dominates logarithm.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-10",
          "question": "A horizontal asymptote of \\(f(x) = \\frac{5x^3 - 2}{x^3 + 1}\\) is",
          "options": [
            "\\(y = 5\\)",
            "\\(y = 0\\)",
            "\\(y = 1\\)",
            "none"
          ],
          "correctAnswer": 0,
          "explanation": "Equal degrees: ratio of leading coefficients = 5, so \\(y = 5\\).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 2,
      "title": "Differentiation: Definition and Fundamental Properties",
      "questions": [
        {
          "id": "q-u2-easy-1",
          "question": "The derivative of \\(f(x) = x^4\\) is",
          "options": [
            "\\(4x^3\\)",
            "\\(x^3\\)",
            "\\(4x\\)",
            "\\(x^5/5\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Power rule: \\(\\frac{d}{dx}x^4 = 4x^3\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-2",
          "question": "The derivative of a constant is",
          "options": [
            "\\(0\\)",
            "\\(1\\)",
            "the constant",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "The derivative of a constant is 0.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-3",
          "question": "The derivative gives the",
          "options": [
            "slope of the tangent line",
            "area",
            "average value",
            "y-intercept"
          ],
          "correctAnswer": 0,
          "explanation": "The derivative is the instantaneous rate of change, the tangent line's slope.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-4",
          "question": "The derivative of \\(\\sin x\\) is",
          "options": [
            "\\(\\cos x\\)",
            "\\(-\\cos x\\)",
            "\\(-\\sin x\\)",
            "\\(\\tan x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{d}{dx}\\sin x = \\cos x\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-5",
          "question": "The derivative of \\(e^x\\) is",
          "options": [
            "\\(e^x\\)",
            "\\(xe^{x-1}\\)",
            "\\(1\\)",
            "\\(\\ln x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{d}{dx}e^x = e^x\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-6",
          "question": "The derivative of \\(\\ln x\\) is",
          "options": [
            "\\(\\frac{1}{x}\\)",
            "\\(\\ln x\\)",
            "\\(x\\)",
            "\\(e^x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{d}{dx}\\ln x = \\frac{1}{x}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-7",
          "question": "The derivative of \\(\\cos x\\) is",
          "options": [
            "\\(-\\sin x\\)",
            "\\(\\sin x\\)",
            "\\(\\cos x\\)",
            "\\(-\\cos x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{d}{dx}\\cos x = -\\sin x\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-8",
          "question": "The derivative of \\(f(x) = 3x^2 - 5x\\) is",
          "options": [
            "\\(6x - 5\\)",
            "\\(6x\\)",
            "\\(3x - 5\\)",
            "\\(6x - 5x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Differentiate term by term: \\(6x - 5\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-9",
          "question": "Differentiability implies",
          "options": [
            "continuity",
            "discontinuity",
            "being a polynomial",
            "being zero"
          ],
          "correctAnswer": 0,
          "explanation": "A differentiable function is necessarily continuous (but not conversely).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-10",
          "question": "The second derivative of \\(x^3\\) is",
          "options": [
            "\\(6x\\)",
            "\\(3x^2\\)",
            "\\(6\\)",
            "\\(x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 3x^2\\), \\(f''(x) = 6x\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-medium-1",
          "question": "The derivative of \\(f(x) = x^3 e^x\\) is",
          "options": [
            "\\(3x^2 e^x + x^3 e^x\\)",
            "\\(3x^2 e^x\\)",
            "\\(x^3 e^x\\)",
            "\\(3x^2 e^{x-1}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Product rule: \\((3x^2)(e^x) + (x^3)(e^x)\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-2",
          "question": "The derivative of \\(f(x) = \\frac{x}{x + 2}\\) is",
          "options": [
            "\\(\\frac{2}{(x+2)^2}\\)",
            "\\(\\frac{1}{x+2}\\)",
            "\\(\\frac{x}{(x+2)^2}\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Quotient rule: \\(\\frac{(1)(x+2) - (x)(1)}{(x+2)^2} = \\frac{2}{(x+2)^2}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-3",
          "question": "The slope of the tangent to \\(f(x) = x^2\\) at \\(x = 4\\) is",
          "options": [
            "\\(8\\)",
            "\\(16\\)",
            "\\(4\\)",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 2x\\); \\(f'(4) = 8\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-4",
          "question": "The derivative of \\(\\sqrt{x}\\) is",
          "options": [
            "\\(\\frac{1}{2\\sqrt{x}}\\)",
            "\\(\\frac{1}{2}x\\)",
            "\\(2\\sqrt{x}\\)",
            "\\(\\frac{1}{\\sqrt{x}}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{d}{dx}x^{1/2} = \\frac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-5",
          "question": "The derivative of \\(\\tan x\\) is",
          "options": [
            "\\(\\sec^2 x\\)",
            "\\(\\sec x\\tan x\\)",
            "\\(-\\csc^2 x\\)",
            "\\(\\cos x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{d}{dx}\\tan x = \\sec^2 x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-6",
          "question": "The tangent line to \\(f(x) = x^2\\) at \\(x = 2\\) is",
          "options": [
            "\\(y = 4x - 4\\)",
            "\\(y = 4x + 4\\)",
            "\\(y = 2x\\)",
            "\\(y = 4x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f(2) = 4\\), \\(f'(2) = 4\\); \\(y - 4 = 4(x - 2)\\) gives \\(y = 4x - 4\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-7",
          "question": "If \\(f'(x) > 0\\), the function is",
          "options": [
            "increasing",
            "decreasing",
            "constant",
            "concave up"
          ],
          "correctAnswer": 0,
          "explanation": "A positive derivative indicates an increasing function.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-8",
          "question": "The velocity of a particle with \\(s(t) = t^3 - 3t^2\\) at \\(t = 1\\) is",
          "options": [
            "\\(-3\\)",
            "\\(3\\)",
            "\\(0\\)",
            "\\(-6\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v(t) = 3t^2 - 6t\\); \\(v(1) = 3 - 6 = -3\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-9",
          "question": "The derivative of \\(f(x) = 4\\sin x - 3\\cos x\\) is",
          "options": [
            "\\(4\\cos x + 3\\sin x\\)",
            "\\(4\\cos x - 3\\sin x\\)",
            "\\(-4\\cos x + 3\\sin x\\)",
            "\\(4\\sin x + 3\\cos x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Differentiate: \\(4\\cos x - 3(-\\sin x) = 4\\cos x + 3\\sin x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-10",
          "question": "The derivative of \\(f(x) = x^2\\ln x\\) is",
          "options": [
            "\\(2x\\ln x + x\\)",
            "\\(2x\\ln x\\)",
            "\\(x + \\ln x\\)",
            "\\(\\frac{2x}{x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Product rule: \\((2x)(\\ln x) + (x^2)(\\frac{1}{x}) = 2x\\ln x + x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-hard-1",
          "question": "Using the definition, for \\(f(x) = x^2\\), \\(f'(x) = \\lim_{h \\to 0}\\frac{(x+h)^2 - x^2}{h}\\) equals",
          "options": [
            "\\(2x\\)",
            "\\(x\\)",
            "\\(2\\)",
            "\\(x^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{2xh + h^2}{h} = 2x + h \\to 2x\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-2",
          "question": "\\(f(x) = x^3 - 3x\\) has a horizontal tangent at",
          "options": [
            "\\(x = \\pm 1\\)",
            "\\(x = 0\\)",
            "\\(x = 3\\)",
            "nowhere"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 3x^2 - 3 = 0\\) gives \\(x = \\pm 1\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-3",
          "question": "The derivative of \\(f(x) = \\frac{\\cos x}{x}\\) is",
          "options": [
            "\\(\\frac{-x\\sin x - \\cos x}{x^2}\\)",
            "\\(\\frac{-\\sin x}{x}\\)",
            "\\(\\frac{\\sin x}{x^2}\\)",
            "\\(-\\sin x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Quotient rule: \\(\\frac{(-\\sin x)(x) - (\\cos x)(1)}{x^2} = \\frac{-x\\sin x - \\cos x}{x^2}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-4",
          "question": "Why is \\(f(x) = |x|\\) not differentiable at \\(x = 0\\)?",
          "options": [
            "The left and right derivatives differ (a corner)",
            "it is discontinuous",
            "the limit is infinite",
            "it is a polynomial"
          ],
          "correctAnswer": 0,
          "explanation": "The slope is −1 from the left and +1 from the right, so the derivative doesn't exist at the corner.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-5",
          "question": "The derivative of \\(f(x) = e^x\\sin x\\) is",
          "options": [
            "\\(e^x(\\sin x + \\cos x)\\)",
            "\\(e^x\\cos x\\)",
            "\\(e^x\\sin x\\)",
            "\\(e^x(\\cos x - \\sin x)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Product rule: \\(e^x\\sin x + e^x\\cos x = e^x(\\sin x + \\cos x)\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-6",
          "question": "The tangent to \\(f(x) = x^3\\) at \\(x = 2\\) has slope",
          "options": [
            "\\(12\\)",
            "\\(8\\)",
            "\\(6\\)",
            "\\(3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 3x^2\\); \\(f'(2) = 12\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-7",
          "question": "The second derivative of \\(f(x) = \\sin x\\) is",
          "options": [
            "\\(-\\sin x\\)",
            "\\(\\cos x\\)",
            "\\(\\sin x\\)",
            "\\(-\\cos x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = \\cos x\\), \\(f''(x) = -\\sin x\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-8",
          "question": "If \\(f''(x) > 0\\) on an interval, the graph is",
          "options": [
            "concave up",
            "concave down",
            "linear",
            "decreasing"
          ],
          "correctAnswer": 0,
          "explanation": "A positive second derivative means concave up.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-9",
          "question": "The derivative of \\(f(x) = \\frac{e^x}{x}\\) is",
          "options": [
            "\\(\\frac{e^x(x - 1)}{x^2}\\)",
            "\\(\\frac{e^x}{x^2}\\)",
            "\\(e^x\\)",
            "\\(\\frac{e^x}{x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Quotient rule: \\(\\frac{e^x\\cdot x - e^x\\cdot 1}{x^2} = \\frac{e^x(x-1)}{x^2}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-10",
          "question": "For \\(f(x) = x^2 + 3x\\), where is the tangent line horizontal?",
          "options": [
            "\\(x = -\\frac{3}{2}\\)",
            "\\(x = 0\\)",
            "\\(x = 3\\)",
            "nowhere"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 2x + 3 = 0\\) gives \\(x = -3/2\\).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 3,
      "title": "Differentiation: Composite, Implicit, and Inverse Functions",
      "questions": [
        {
          "id": "q-u3-easy-1",
          "question": "The chain rule differentiates",
          "options": [
            "composite functions",
            "sums",
            "constants",
            "products only"
          ],
          "correctAnswer": 0,
          "explanation": "The chain rule handles composite functions f(g(x)).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-2",
          "question": "The derivative of \\((x^2 + 1)^3\\) is",
          "options": [
            "\\(3(x^2+1)^2(2x)\\)",
            "\\(3(x^2+1)^2\\)",
            "\\(6x\\)",
            "\\((x^2+1)^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(3(x^2+1)^2 \\cdot 2x\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-3",
          "question": "The derivative of \\(\\sin(3x)\\) is",
          "options": [
            "\\(3\\cos(3x)\\)",
            "\\(\\cos(3x)\\)",
            "\\(3\\sin(3x)\\)",
            "\\(-3\\cos(3x)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(\\cos(3x)\\cdot 3 = 3\\cos(3x)\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-4",
          "question": "Implicit differentiation is used when",
          "options": [
            "y is not solved for explicitly",
            "the function is a polynomial",
            "x is constant",
            "y is a constant"
          ],
          "correctAnswer": 0,
          "explanation": "Implicit differentiation handles equations where y isn't isolated.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-5",
          "question": "The derivative of \\(e^{4x}\\) is",
          "options": [
            "\\(4e^{4x}\\)",
            "\\(e^{4x}\\)",
            "\\(4e^x\\)",
            "\\(e^4\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(e^{4x}\\cdot 4 = 4e^{4x}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-6",
          "question": "The derivative of \\(\\arctan x\\) is",
          "options": [
            "\\(\\frac{1}{1 + x^2}\\)",
            "\\(\\frac{1}{\\sqrt{1-x^2}}\\)",
            "\\(\\frac{1}{x^2}\\)",
            "\\(\\sec^2 x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{d}{dx}\\arctan x = \\frac{1}{1 + x^2}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-7",
          "question": "The derivative of \\(\\arcsin x\\) is",
          "options": [
            "\\(\\frac{1}{\\sqrt{1 - x^2}}\\)",
            "\\(\\frac{1}{1 + x^2}\\)",
            "\\(\\cos x\\)",
            "\\(\\frac{-1}{\\sqrt{1-x^2}}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1 - x^2}}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-8",
          "question": "The inverse function derivative is \\((f^{-1})'(x) =\\)",
          "options": [
            "\\(\\frac{1}{f'(f^{-1}(x))}\\)",
            "\\(f'(x)\\)",
            "\\(-f'(x)\\)",
            "\\(f(x)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The inverse derivative formula: \\((f^{-1})'(x) = \\frac{1}{f'(f^{-1}(x))}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-9",
          "question": "The derivative of \\(\\cos(2x)\\) is",
          "options": [
            "\\(-2\\sin(2x)\\)",
            "\\(2\\sin(2x)\\)",
            "\\(-\\sin(2x)\\)",
            "\\(2\\cos(2x)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(-\\sin(2x)\\cdot 2 = -2\\sin(2x)\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-10",
          "question": "The derivative of \\(\\ln(3x)\\) is",
          "options": [
            "\\(\\frac{1}{x}\\)",
            "\\(\\frac{3}{x}\\)",
            "\\(\\frac{1}{3x}\\)",
            "\\(3\\ln x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(\\frac{1}{3x}\\cdot 3 = \\frac{1}{x}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-medium-1",
          "question": "The derivative of \\((2x + 1)^4\\) is",
          "options": [
            "\\(8(2x+1)^3\\)",
            "\\(4(2x+1)^3\\)",
            "\\(2(2x+1)^3\\)",
            "\\((2x+1)^3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(4(2x+1)^3\\cdot 2 = 8(2x+1)^3\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-2",
          "question": "For \\(x^2 + y^2 = 16\\), \\(\\frac{dy}{dx} =\\)",
          "options": [
            "\\(-\\frac{x}{y}\\)",
            "\\(\\frac{x}{y}\\)",
            "\\(-\\frac{y}{x}\\)",
            "\\(\\frac{y}{x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(2x + 2y\\frac{dy}{dx} = 0\\) gives \\(\\frac{dy}{dx} = -\\frac{x}{y}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-3",
          "question": "The derivative of \\(e^{x^2}\\) is",
          "options": [
            "\\(2xe^{x^2}\\)",
            "\\(e^{x^2}\\)",
            "\\(2xe^{2x}\\)",
            "\\(x^2 e^{x^2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(e^{x^2}\\cdot 2x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-4",
          "question": "The derivative of \\(\\sin^2 x\\) is",
          "options": [
            "\\(2\\sin x\\cos x\\)",
            "\\(2\\sin x\\)",
            "\\(\\cos^2 x\\)",
            "\\(2\\cos x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(2\\sin x\\cos x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-5",
          "question": "The derivative of \\(\\ln(\\sin x)\\) is",
          "options": [
            "\\(\\cot x\\)",
            "\\(\\tan x\\)",
            "\\(\\frac{1}{\\sin x}\\)",
            "\\(\\cos x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(\\frac{1}{\\sin x}\\cdot\\cos x = \\cot x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-6",
          "question": "For \\(xy = 6\\), \\(\\frac{dy}{dx} =\\)",
          "options": [
            "\\(-\\frac{y}{x}\\)",
            "\\(\\frac{y}{x}\\)",
            "\\(-\\frac{x}{y}\\)",
            "\\(\\frac{6}{x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Product rule: \\(y + x\\frac{dy}{dx} = 0\\), so \\(\\frac{dy}{dx} = -\\frac{y}{x}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-7",
          "question": "The derivative of \\(\\tan(x^2)\\) is",
          "options": [
            "\\(2x\\sec^2(x^2)\\)",
            "\\(\\sec^2(x^2)\\)",
            "\\(2x\\tan(x^2)\\)",
            "\\(2\\sec^2 x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(\\sec^2(x^2)\\cdot 2x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-8",
          "question": "The derivative of \\(\\cos^3 x\\) is",
          "options": [
            "\\(-3\\cos^2 x\\sin x\\)",
            "\\(3\\cos^2 x\\)",
            "\\(-3\\sin^3 x\\)",
            "\\(3\\cos^2 x\\sin x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(3\\cos^2 x\\cdot(-\\sin x)\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-9",
          "question": "The derivative of \\(\\sqrt{x^2 + 4}\\) is",
          "options": [
            "\\(\\frac{x}{\\sqrt{x^2+4}}\\)",
            "\\(\\frac{1}{2\\sqrt{x^2+4}}\\)",
            "\\(2x\\)",
            "\\(\\sqrt{2x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(\\frac{1}{2\\sqrt{x^2+4}}\\cdot 2x = \\frac{x}{\\sqrt{x^2+4}}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-10",
          "question": "The derivative of \\(e^{\\cos x}\\) is",
          "options": [
            "\\(-e^{\\cos x}\\sin x\\)",
            "\\(e^{\\cos x}\\)",
            "\\(-\\sin x\\)",
            "\\(e^{-\\sin x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(e^{\\cos x}\\cdot(-\\sin x)\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-hard-1",
          "question": "For \\(x^2 + y^2 = 25\\), the tangent slope at \\((3, 4)\\) is",
          "options": [
            "\\(-\\frac{3}{4}\\)",
            "\\(\\frac{3}{4}\\)",
            "\\(-\\frac{4}{3}\\)",
            "\\(\\frac{4}{3}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{dy}{dx} = -\\frac{x}{y} = -\\frac{3}{4}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-2",
          "question": "If \\(f(x) = x^3\\) and \\(g = f^{-1}\\), then \\(g'(8) =\\)",
          "options": [
            "\\(\\frac{1}{12}\\)",
            "\\(12\\)",
            "\\(\\frac{1}{3}\\)",
            "\\(8\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f^{-1}(8) = 2\\), \\(f'(2) = 12\\), so \\(g'(8) = 1/12\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-3",
          "question": "The derivative of \\(\\ln(\\sqrt{x^2 + 1})\\) is",
          "options": [
            "\\(\\frac{x}{x^2 + 1}\\)",
            "\\(\\frac{1}{x^2+1}\\)",
            "\\(\\frac{2x}{x^2+1}\\)",
            "\\(\\frac{x}{\\sqrt{x^2+1}}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Rewrite as \\(\\tfrac{1}{2}\\ln(x^2+1)\\); derivative \\(= \\frac{x}{x^2+1}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-4",
          "question": "The derivative of \\(f(x) = x^x\\) is best found using",
          "options": [
            "logarithmic differentiation",
            "the power rule",
            "the quotient rule",
            "implicit differentiation only"
          ],
          "correctAnswer": 0,
          "explanation": "With variable base and exponent, take ln of both sides (logarithmic differentiation): \\(f'(x) = x^x(\\ln x + 1)\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-5",
          "question": "The derivative of \\(\\sin(\\cos x)\\) is",
          "options": [
            "\\(-\\cos(\\cos x)\\sin x\\)",
            "\\(\\cos(\\cos x)\\)",
            "\\(-\\sin(\\cos x)\\)",
            "\\(\\cos(\\sin x)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(\\cos(\\cos x)\\cdot(-\\sin x)\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-6",
          "question": "The derivative of \\(e^{\\sin x}\\) is",
          "options": [
            "\\(e^{\\sin x}\\cos x\\)",
            "\\(e^{\\sin x}\\)",
            "\\(\\cos x\\)",
            "\\(e^{\\cos x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(e^{\\sin x}\\cdot\\cos x\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-7",
          "question": "For \\(\\sin(xy) = y\\), differentiating the left side requires",
          "options": [
            "the chain rule and product rule",
            "only the power rule",
            "only the quotient rule",
            "no rules"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{d}{dx}\\sin(xy) = \\cos(xy)\\cdot(y + xy')\\), using chain and product rules.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-8",
          "question": "The derivative of \\((3x + 2)^7\\) is",
          "options": [
            "\\(21(3x+2)^6\\)",
            "\\(7(3x+2)^6\\)",
            "\\(3(3x+2)^6\\)",
            "\\((3x+2)^6\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(7(3x+2)^6\\cdot 3 = 21(3x+2)^6\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-9",
          "question": "The second derivative of \\(y\\) for \\(x^2 + y^2 = 1\\) is found by",
          "options": [
            "differentiating \\(y' = -x/y\\) again using quotient and chain rules",
            "only substitution",
            "the power rule alone",
            "it does not exist"
          ],
          "correctAnswer": 0,
          "explanation": "After finding \\(y' = -x/y\\) implicitly, differentiate again (quotient/chain rules, substituting y') for the second derivative.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-10",
          "question": "The derivative of \\(\\arctan(2x)\\) is",
          "options": [
            "\\(\\frac{2}{1 + 4x^2}\\)",
            "\\(\\frac{1}{1 + 4x^2}\\)",
            "\\(\\frac{2}{1 + x^2}\\)",
            "\\(\\frac{1}{1 + 2x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(\\frac{1}{1 + (2x)^2}\\cdot 2 = \\frac{2}{1 + 4x^2}\\).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 4,
      "title": "Contextual Applications of Differentiation",
      "questions": [
        {
          "id": "q-u4-easy-1",
          "question": "If \\(s(t)\\) is position, velocity is",
          "options": [
            "\\(s'(t)\\)",
            "\\(s''(t)\\)",
            "\\(\\int s\\,dt\\)",
            "\\(s/t\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Velocity is the derivative of position.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-2",
          "question": "Acceleration is the derivative of",
          "options": [
            "velocity",
            "position",
            "distance",
            "displacement"
          ],
          "correctAnswer": 0,
          "explanation": "Acceleration is \\(v'(t) = s''(t)\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-3",
          "question": "L'Hôpital's rule applies to indeterminate forms like",
          "options": [
            "0/0 or ∞/∞",
            "0 + 0",
            "1 × 1",
            "any form"
          ],
          "correctAnswer": 0,
          "explanation": "L'Hôpital's rule applies to 0/0 and ∞/∞ forms.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-4",
          "question": "A related rates problem relates",
          "options": [
            "the rates of change of related quantities via a common variable",
            "only areas",
            "a single derivative",
            "a limit"
          ],
          "correctAnswer": 0,
          "explanation": "Related rates connect rates of change through differentiation with respect to time.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-5",
          "question": "A particle is at rest when its velocity is",
          "options": [
            "zero",
            "maximum",
            "negative",
            "positive"
          ],
          "correctAnswer": 0,
          "explanation": "A particle is momentarily at rest where velocity equals zero.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-6",
          "question": "The linear approximation of a function near a point uses the",
          "options": [
            "tangent line",
            "secant line",
            "area",
            "limit"
          ],
          "correctAnswer": 0,
          "explanation": "Local linear approximation uses the tangent line at the point.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-7",
          "question": "Speed is the",
          "options": [
            "absolute value of velocity",
            "derivative of acceleration",
            "integral of position",
            "same as velocity always"
          ],
          "correctAnswer": 0,
          "explanation": "Speed is |v(t)|.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-8",
          "question": "For \\(s(t) = t^2\\), velocity at \\(t = 5\\) is",
          "options": [
            "\\(10\\)",
            "\\(25\\)",
            "\\(5\\)",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v(t) = 2t\\); \\(v(5) = 10\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-9",
          "question": "A particle changes direction when velocity",
          "options": [
            "changes sign",
            "is maximum",
            "is constant",
            "is positive"
          ],
          "correctAnswer": 0,
          "explanation": "Direction reverses when velocity changes sign through zero.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-10",
          "question": "A particle is speeding up when velocity and acceleration have",
          "options": [
            "the same sign",
            "opposite signs",
            "zero values",
            "no relationship"
          ],
          "correctAnswer": 0,
          "explanation": "Same-sign velocity and acceleration means the particle speeds up.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-medium-1",
          "question": "A particle's position is \\(s(t) = t^3 - 6t^2 + 9t\\). It is at rest when",
          "options": [
            "\\(t = 1\\) and \\(t = 3\\)",
            "\\(t = 0\\)",
            "\\(t = 2\\)",
            "never"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v(t) = 3(t-1)(t-3) = 0\\) at \\(t = 1, 3\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-2",
          "question": "Using L'Hôpital, \\(\\lim_{x \\to 0}\\frac{e^x - 1}{x} =\\)",
          "options": [
            "\\(1\\)",
            "\\(0\\)",
            "\\(\\infty\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "Form 0/0; \\(\\lim\\frac{e^x}{1} = 1\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-3",
          "question": "For \\(V = \\frac{4}{3}\\pi r^3\\), \\(\\frac{dV}{dt} =\\)",
          "options": [
            "\\(4\\pi r^2\\frac{dr}{dt}\\)",
            "\\(\\frac{4}{3}\\pi r^2\\)",
            "\\(4\\pi r\\frac{dr}{dt}\\)",
            "\\(\\pi r^2\\frac{dr}{dt}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Differentiate: \\(\\frac{dV}{dt} = 4\\pi r^2\\frac{dr}{dt}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-4",
          "question": "The linear approximation of \\(\\sqrt{x}\\) near \\(x = 9\\) gives \\(\\sqrt{9.2} \\approx\\)",
          "options": [
            "\\(3.033\\)",
            "\\(3.1\\)",
            "\\(3.0\\)",
            "\\(3.2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f(9) = 3\\), \\(f'(9) = \\frac{1}{6}\\); \\(\\sqrt{9.2} \\approx 3 + \\frac{1}{6}(0.2) \\approx 3.033\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-5",
          "question": "If a circle's radius grows at \\(3\\ \\text{cm/s}\\), the area's rate when \\(r = 4\\) is (\\(A = \\pi r^2\\))",
          "options": [
            "\\(24\\pi\\ \\text{cm}^2/\\text{s}\\)",
            "\\(12\\pi\\)",
            "\\(16\\pi\\)",
            "\\(6\\pi\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{dA}{dt} = 2\\pi r\\frac{dr}{dt} = 2\\pi(4)(3) = 24\\pi\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-6",
          "question": "Using L'Hôpital, \\(\\lim_{x \\to 0}\\frac{\\sin x}{x} =\\)",
          "options": [
            "\\(1\\)",
            "\\(0\\)",
            "\\(\\infty\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\lim\\frac{\\cos x}{1} = 1\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-7",
          "question": "A particle with \\(v(t) = t^2 - 9\\) moves in the negative direction when",
          "options": [
            "\\(0 \\le t < 3\\)",
            "\\(t > 3\\)",
            "\\(t < 0\\)",
            "never"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v < 0\\) when \\(t^2 < 9\\), i.e., \\(-3 < t < 3\\); for \\(t \\ge 0\\), that is \\(0 \\le t < 3\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-8",
          "question": "The differential \\(dy\\) for \\(y = x^3\\) is",
          "options": [
            "\\(3x^2\\,dx\\)",
            "\\(x^3\\,dx\\)",
            "\\(3x\\,dx\\)",
            "\\(x^2\\,dx\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(dy = f'(x)\\,dx = 3x^2\\,dx\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-9",
          "question": "A particle is slowing down when velocity and acceleration have",
          "options": [
            "opposite signs",
            "the same sign",
            "zero values",
            "equal magnitudes"
          ],
          "correctAnswer": 0,
          "explanation": "Opposite signs of velocity and acceleration mean the particle is decelerating.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-10",
          "question": "A sliding ladder problem is a type of",
          "options": [
            "related rates problem",
            "optimization problem",
            "limit problem",
            "series problem"
          ],
          "correctAnswer": 0,
          "explanation": "The sliding ladder relates horizontal and vertical rates—a related rates problem.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-hard-1",
          "question": "A 13 m ladder slides down a wall. When the base is 5 m out and moving at 2 m/s, the top moves down at",
          "options": [
            "\\(\\frac{5}{6}\\ \\text{m/s}\\)",
            "\\(2\\ \\text{m/s}\\)",
            "\\(1\\ \\text{m/s}\\)",
            "\\(\\frac{6}{5}\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "At x=5, y=12. \\(2(5)(2) + 2(12)\\frac{dy}{dt} = 0\\): \\(\\frac{dy}{dt} = -\\frac{20}{24} = -\\frac{5}{6}\\ \\text{m/s}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-2",
          "question": "The total distance a particle with \\(s(t) = t^3 - 3t^2\\) travels from \\(t = 0\\) to \\(t = 3\\) is",
          "options": [
            "\\(8\\)",
            "\\(0\\)",
            "\\(4\\)",
            "\\(9\\)"
          ],
          "correctAnswer": 0,
          "explanation": "v = 3t(t-2), zero at t=2. From 0 to 2: distance 4; from 2 to 3: distance 4. Total = 8.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-3",
          "question": "Using L'Hôpital, \\(\\lim_{x \\to \\infty}\\frac{\\ln x}{x} =\\)",
          "options": [
            "\\(0\\)",
            "\\(1\\)",
            "\\(\\infty\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\lim\\frac{1/x}{1} = 0\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-4",
          "question": "Using L'Hôpital, \\(\\lim_{x \\to 0}\\frac{1 - \\cos x}{x^2} =\\)",
          "options": [
            "\\(\\frac{1}{2}\\)",
            "\\(1\\)",
            "\\(0\\)",
            "\\(\\infty\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Apply L'Hôpital twice: \\(\\frac{\\sin x}{2x} \\to \\frac{\\cos x}{2} = \\frac{1}{2}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-5",
          "question": "A cone drains water. Its related rates problem requires relating volume to height via",
          "options": [
            "similar triangles (r and h)",
            "only the radius",
            "only time",
            "the surface area"
          ],
          "correctAnswer": 0,
          "explanation": "For a draining cone, similar triangles link the radius and height, so V relates to height.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-6",
          "question": "A particle has \\(a(t) = 6t\\) and \\(v(0) = -12\\). It is at rest when",
          "options": [
            "\\(t = 2\\)",
            "\\(t = 12\\)",
            "\\(t = 6\\)",
            "\\(t = 4\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v(t) = 3t^2 - 12 = 0\\) gives \\(t^2 = 4\\), \\(t = 2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-7",
          "question": "The linear approximation is most accurate",
          "options": [
            "near the point of tangency",
            "far from the point",
            "at infinity",
            "at x = 0 only"
          ],
          "correctAnswer": 0,
          "explanation": "The tangent-line approximation is most accurate close to the point of tangency.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-8",
          "question": "Using L'Hôpital, \\(\\lim_{x \\to 0^+}x\\ln x =\\)",
          "options": [
            "\\(0\\)",
            "\\(-\\infty\\)",
            "\\(1\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "Rewrite as \\(\\frac{\\ln x}{1/x}\\); L'Hôpital gives \\(\\lim(-x) = 0\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-9",
          "question": "A shadow problem (person walking from a lamppost) is solved with",
          "options": [
            "similar triangles and differentiation",
            "integration",
            "the power rule alone",
            "a limit"
          ],
          "correctAnswer": 0,
          "explanation": "The shadow's length relates to the person's distance via similar triangles, then differentiated in time.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-10",
          "question": "A balloon rises at 5 m/s. An observer 100 m away sees the angle of elevation change. This is a related rates problem involving",
          "options": [
            "a trigonometric relationship (tangent)",
            "only distance",
            "a series",
            "integration"
          ],
          "correctAnswer": 0,
          "explanation": "The angle relates to height via \\(\\tan\\theta = h/100\\); differentiating gives the rate of angle change.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 5,
      "title": "Analytical Applications of Differentiation",
      "questions": [
        {
          "id": "q-u5-easy-1",
          "question": "A critical point occurs where",
          "options": [
            "\\(f'(x) = 0\\) or is undefined",
            "\\(f(x) = 0\\)",
            "\\(f''(x) = 0\\)",
            "x = 0"
          ],
          "correctAnswer": 0,
          "explanation": "Critical points are where the derivative is zero or undefined.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-2",
          "question": "If \\(f'(x) > 0\\), the function is",
          "options": [
            "increasing",
            "decreasing",
            "constant",
            "concave up"
          ],
          "correctAnswer": 0,
          "explanation": "A positive first derivative means increasing.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-3",
          "question": "If \\(f''(x) > 0\\), the graph is",
          "options": [
            "concave up",
            "concave down",
            "linear",
            "decreasing"
          ],
          "correctAnswer": 0,
          "explanation": "A positive second derivative means concave up.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-4",
          "question": "A local maximum occurs where f' changes from",
          "options": [
            "positive to negative",
            "negative to positive",
            "zero to zero",
            "positive to positive"
          ],
          "correctAnswer": 0,
          "explanation": "At a local max, f' changes from + to −.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-5",
          "question": "An inflection point is where",
          "options": [
            "concavity changes",
            "f = 0",
            "f' = 0 always",
            "the function is discontinuous"
          ],
          "correctAnswer": 0,
          "explanation": "An inflection point is where concavity changes.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-6",
          "question": "Absolute extrema on a closed interval occur at",
          "options": [
            "critical points or endpoints",
            "only the middle",
            "only endpoints",
            "only critical points"
          ],
          "correctAnswer": 0,
          "explanation": "By the Extreme Value Theorem, extrema occur at critical points or endpoints.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-7",
          "question": "If \\(f''(c) > 0\\) and \\(f'(c) = 0\\), then c is a",
          "options": [
            "local minimum",
            "local maximum",
            "inflection point",
            "saddle"
          ],
          "correctAnswer": 0,
          "explanation": "Second derivative test: concave up at a critical point means local minimum.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-8",
          "question": "The Mean Value Theorem relates the average rate of change to the",
          "options": [
            "instantaneous rate at some point",
            "maximum",
            "minimum",
            "second derivative"
          ],
          "correctAnswer": 0,
          "explanation": "The MVT guarantees a point where the instantaneous rate equals the average rate.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-9",
          "question": "Optimization problems seek",
          "options": [
            "maximum or minimum values",
            "limits",
            "areas",
            "derivatives only"
          ],
          "correctAnswer": 0,
          "explanation": "Optimization finds extrema subject to constraints.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-10",
          "question": "If \\(f'(x) < 0\\), the function is",
          "options": [
            "decreasing",
            "increasing",
            "constant",
            "concave up"
          ],
          "correctAnswer": 0,
          "explanation": "A negative first derivative means decreasing.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-medium-1",
          "question": "For \\(f(x) = x^3 - 3x\\), the local maximum is at",
          "options": [
            "\\(x = -1\\)",
            "\\(x = 1\\)",
            "\\(x = 0\\)",
            "\\(x = 3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 3x^2 - 3 = 0\\) at \\(x = \\pm 1\\); f' changes + to − at \\(x = -1\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-2",
          "question": "The inflection point of \\(f(x) = x^3\\) is at",
          "options": [
            "\\(x = 0\\)",
            "\\(x = 1\\)",
            "\\(x = -1\\)",
            "none"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f''(x) = 6x = 0\\) at \\(x = 0\\), where concavity changes.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-3",
          "question": "The absolute maximum of \\(f(x) = x^2\\) on \\([-2, 3]\\) is",
          "options": [
            "\\(9\\)",
            "\\(4\\)",
            "\\(0\\)",
            "\\(3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Endpoints: f(-2)=4, f(3)=9; critical point f(0)=0. Max = 9.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-4",
          "question": "A rectangle with perimeter 40 has maximum area as a",
          "options": [
            "square (10 by 10)",
            "2 by 18",
            "5 by 15",
            "long thin shape"
          ],
          "correctAnswer": 0,
          "explanation": "Fixed perimeter maximizes area with a square: 10 by 10, area 100.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-5",
          "question": "For \\(f(x) = x^3 - 3x\\), the function is decreasing on",
          "options": [
            "\\((-1, 1)\\)",
            "\\((-\\infty, -1)\\)",
            "all reals",
            "\\((1, \\infty)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 3(x^2 - 1) < 0\\) when \\(|x| < 1\\), i.e., on \\((-1, 1)\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-6",
          "question": "By the MVT for \\(f(x) = x^2\\) on \\([0, 6]\\), c where \\(f'(c)\\) equals the average rate is",
          "options": [
            "\\(c = 3\\)",
            "\\(c = 6\\)",
            "\\(c = 0\\)",
            "\\(c = 2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Average rate = 36/6 = 6; \\(f'(c) = 2c = 6\\), so c = 3.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-7",
          "question": "The candidates test for absolute extrema evaluates f at",
          "options": [
            "critical points and endpoints",
            "only the vertex",
            "only endpoints",
            "random points"
          ],
          "correctAnswer": 0,
          "explanation": "Evaluate f at all critical points and endpoints to find absolute extrema.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-8",
          "question": "A function with \\(f'(x) = 0\\) everywhere on an interval is",
          "options": [
            "constant",
            "increasing",
            "decreasing",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "Zero derivative throughout means the function is constant.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-9",
          "question": "For \\(f(x) = x^2 - 6x\\), the minimum on \\([0, 5]\\) is at",
          "options": [
            "\\(x = 3\\)",
            "\\(x = 0\\)",
            "\\(x = 5\\)",
            "\\(x = 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 2x - 6 = 0\\) at x = 3; f(3) = -9 is the minimum.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-10",
          "question": "If \\(f''(c) = 0\\), the point c is",
          "options": [
            "a possible inflection point (must verify concavity change)",
            "definitely a maximum",
            "definitely a minimum",
            "never an inflection point"
          ],
          "correctAnswer": 0,
          "explanation": "f''=0 is a candidate for an inflection point, but concavity must actually change there to confirm it.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-hard-1",
          "question": "An open box from a 12-by-12 square (cutting x from corners) has maximum volume at",
          "options": [
            "\\(x = 2\\)",
            "\\(x = 3\\)",
            "\\(x = 6\\)",
            "\\(x = 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(V = x(12-2x)^2\\); \\(V' = 0\\) gives x = 2.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-2",
          "question": "For \\(f(x) = x^4 - 4x^3\\), inflection points are at",
          "options": [
            "\\(x = 0\\) and \\(x = 2\\)",
            "\\(x = 2\\) only",
            "\\(x = 4\\)",
            "none"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f''(x) = 12x(x-2) = 0\\) at x = 0, 2.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-3",
          "question": "For \\(f(x) = x + \\frac{4}{x}\\) on \\((0, \\infty)\\), the minimum value is",
          "options": [
            "\\(4\\) (at x = 2)",
            "\\(2\\)",
            "\\(0\\)",
            "no minimum"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 1 - \\frac{4}{x^2} = 0\\) at x = 2; f(2) = 2 + 2 = 4.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-4",
          "question": "A cylinder with fixed volume uses minimum material when height equals",
          "options": [
            "its diameter (h = 2r)",
            "its radius",
            "zero",
            "twice its diameter"
          ],
          "correctAnswer": 0,
          "explanation": "Minimizing surface area for fixed volume gives h = 2r.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-5",
          "question": "If \\(f'(c) = 0\\) and \\(f''(c) = 0\\), the second derivative test is",
          "options": [
            "inconclusive",
            "conclusive for a max",
            "conclusive for a min",
            "never used"
          ],
          "correctAnswer": 0,
          "explanation": "When both are zero, the test is inconclusive; use the first derivative test.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-6",
          "question": "The point on \\(y = x²\\) closest to \\((0, 3)\\) is found by minimizing distance, giving x-values of",
          "options": [
            "\\(x = \\pm\\sqrt{2.5}\\)",
            "\\(x = 0\\)",
            "\\(x = 3\\)",
            "\\(x = 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Minimize \\(D^2 = x^2 + (x^2-3)^2\\); \\(\\frac{d}{dx} = 2x + 2(x^2-3)(2x) = 0\\) yields \\(x^2 = 2.5\\), so \\(x = \\pm\\sqrt{2.5}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-7",
          "question": "Rolle's Theorem requires f to be continuous, differentiable, and",
          "options": [
            "f(a) = f(b)",
            "increasing",
            "f(a) = 0",
            "a polynomial"
          ],
          "correctAnswer": 0,
          "explanation": "Rolle's Theorem applies when the function has equal endpoint values.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-8",
          "question": "A function that is increasing and concave down has",
          "options": [
            "f' > 0 and f'' < 0",
            "f' < 0",
            "f'' > 0",
            "f constant"
          ],
          "correctAnswer": 0,
          "explanation": "Increasing (f' > 0) and concave down (f'' < 0).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-9",
          "question": "To find where a curve is concave down, solve",
          "options": [
            "\\(f''(x) < 0\\)",
            "\\(f'(x) < 0\\)",
            "\\(f(x) < 0\\)",
            "\\(f''(x) = 0\\) only"
          ],
          "correctAnswer": 0,
          "explanation": "Concave down where the second derivative is negative.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-10",
          "question": "A farmer with 100 m of fence maximizes a rectangular area against a wall (fencing 3 sides) with dimensions",
          "options": [
            "25 by 50 (area 1250)",
            "20 by 60",
            "10 by 80",
            "33 by 33"
          ],
          "correctAnswer": 0,
          "explanation": "With 2x + y = 100, area = x(100 - 2x); maximized at x = 25, y = 50, area 1250.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 6,
      "title": "Integration and Accumulation of Change",
      "questions": [
        {
          "id": "q-u6-easy-1",
          "question": "The antiderivative of \\(3x^2\\) is",
          "options": [
            "\\(x^3 + C\\)",
            "\\(6x\\)",
            "\\(3x^3\\)",
            "\\(x^3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int 3x^2\\,dx = x^3 + C\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-2",
          "question": "The power rule for integration is \\(\\int x^n\\,dx =\\)",
          "options": [
            "\\(\\frac{x^{n+1}}{n+1} + C\\) (n ≠ -1)",
            "\\(nx^{n-1}\\)",
            "\\(x^{n+1}\\)",
            "\\(\\frac{x^n}{n}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-3",
          "question": "A definite integral represents the",
          "options": [
            "net signed area under a curve",
            "slope",
            "derivative",
            "limit"
          ],
          "correctAnswer": 0,
          "explanation": "A definite integral gives the net signed area between the curve and the x-axis.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-4",
          "question": "\\(\\int \\cos x\\,dx =\\)",
          "options": [
            "\\(\\sin x + C\\)",
            "\\(-\\sin x + C\\)",
            "\\(\\cos x + C\\)",
            "\\(\\tan x + C\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int \\cos x\\,dx = \\sin x + C\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-5",
          "question": "\\(\\int e^x\\,dx =\\)",
          "options": [
            "\\(e^x + C\\)",
            "\\(xe^x\\)",
            "\\(\\frac{e^x}{x}\\)",
            "\\(\\ln x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int e^x\\,dx = e^x + C\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-6",
          "question": "\\(\\int \\frac{1}{x}\\,dx =\\)",
          "options": [
            "\\(\\ln|x| + C\\)",
            "\\(\\frac{1}{x^2}\\)",
            "\\(x + C\\)",
            "\\(e^x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int \\frac{1}{x}\\,dx = \\ln|x| + C\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-7",
          "question": "The Fundamental Theorem of Calculus connects",
          "options": [
            "derivatives and integrals",
            "limits and continuity",
            "only limits",
            "only derivatives"
          ],
          "correctAnswer": 0,
          "explanation": "The FTC links differentiation and integration as inverse processes.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-8",
          "question": "A Riemann sum approximates the",
          "options": [
            "area under a curve",
            "derivative",
            "tangent line",
            "limit"
          ],
          "correctAnswer": 0,
          "explanation": "Riemann sums approximate definite integrals (areas) with rectangles.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-9",
          "question": "\\(\\int \\sin x\\,dx =\\)",
          "options": [
            "\\(-\\cos x + C\\)",
            "\\(\\cos x + C\\)",
            "\\(\\sin x + C\\)",
            "\\(-\\sin x + C\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int \\sin x\\,dx = -\\cos x + C\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-10",
          "question": "\\(\\int \\sec^2 x\\,dx =\\)",
          "options": [
            "\\(\\tan x + C\\)",
            "\\(\\sec x + C\\)",
            "\\(-\\cot x\\)",
            "\\(\\sec x\\tan x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int \\sec^2 x\\,dx = \\tan x + C\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-medium-1",
          "question": "\\(\\int_0^3 2x\\,dx =\\)",
          "options": [
            "\\(9\\)",
            "\\(6\\)",
            "\\(3\\)",
            "\\(18\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\([x^2]_0^3 = 9\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-2",
          "question": "Using u-substitution, \\(\\int 2x(x^2 + 1)^4\\,dx =\\)",
          "options": [
            "\\(\\frac{(x^2+1)^5}{5} + C\\)",
            "\\((x^2+1)^5\\)",
            "\\(\\frac{(x^2+1)^4}{4}\\)",
            "\\(2x(x^2+1)^5\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Let \\(u = x^2+1\\); \\(\\int u^4\\,du = \\frac{u^5}{5} + C\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-3",
          "question": "The FTC Part 2 states \\(\\int_a^b f(x)\\,dx =\\)",
          "options": [
            "\\(F(b) - F(a)\\)",
            "\\(f(b) - f(a)\\)",
            "\\(f'(b) - f'(a)\\)",
            "\\(F(a) - F(b)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The FTC evaluates the integral as F(b) − F(a).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-4",
          "question": "\\(\\frac{d}{dx}\\int_0^x t^3\\,dt =\\)",
          "options": [
            "\\(x^3\\)",
            "\\(\\frac{x^4}{4}\\)",
            "\\(3x^2\\)",
            "\\(x^3 + C\\)"
          ],
          "correctAnswer": 0,
          "explanation": "FTC Part 1: the derivative of the accumulation is the integrand, \\(x^3\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-5",
          "question": "\\(\\int e^{3x}\\,dx =\\)",
          "options": [
            "\\(\\frac{1}{3}e^{3x} + C\\)",
            "\\(e^{3x} + C\\)",
            "\\(3e^{3x}\\)",
            "\\(\\frac{e^{3x}}{3x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Substitute \\(u = 3x\\): \\(\\frac{1}{3}e^{3x} + C\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-6",
          "question": "The average value of f on [a, b] is",
          "options": [
            "\\(\\frac{1}{b-a}\\int_a^b f(x)\\,dx\\)",
            "\\(\\int_a^b f(x)\\,dx\\)",
            "\\(f(b) - f(a)\\)",
            "\\(\\frac{f(a)+f(b)}{2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Average value = \\(\\frac{1}{b-a}\\int_a^b f\\,dx\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-7",
          "question": "\\(\\int_0^\\pi \\sin x\\,dx =\\)",
          "options": [
            "\\(2\\)",
            "\\(0\\)",
            "\\(1\\)",
            "\\(\\pi\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\([-\\cos x]_0^\\pi = 1 + 1 = 2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-8",
          "question": "\\(\\int (6x^2 - 4x)\\,dx =\\)",
          "options": [
            "\\(2x^3 - 2x^2 + C\\)",
            "\\(12x - 4\\)",
            "\\(6x^3 - 4x^2\\)",
            "\\(2x^3 - 2x^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Integrate term by term: \\(2x^3 - 2x^2 + C\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-9",
          "question": "Integration by parts uses the formula",
          "options": [
            "\\(\\int u\\,dv = uv - \\int v\\,du\\)",
            "\\(\\int u\\,dv = uv + \\int v\\,du\\)",
            "\\(\\int uv = u\\int v\\)",
            "\\(\\int u\\,dv = u/v\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Integration by parts: \\(\\int u\\,dv = uv - \\int v\\,du\\) (a BC technique).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-10",
          "question": "\\(\\int x e^x\\,dx\\) (by parts) equals",
          "options": [
            "\\(xe^x - e^x + C\\)",
            "\\(xe^x + C\\)",
            "\\(\\frac{x^2}{2}e^x\\)",
            "\\(e^x + C\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Let u = x, dv = e^x dx: \\(xe^x - \\int e^x\\,dx = xe^x - e^x + C\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-hard-1",
          "question": "\\(\\int x\\sqrt{x^2 + 1}\\,dx =\\)",
          "options": [
            "\\(\\frac{1}{3}(x^2+1)^{3/2} + C\\)",
            "\\((x^2+1)^{3/2}\\)",
            "\\(\\frac{2}{3}(x^2+1)^{3/2}\\)",
            "\\(x^2\\sqrt{x^2+1}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Let \\(u = x^2+1\\); \\(\\frac{1}{2}\\int u^{1/2}\\,du = \\frac{1}{3}(x^2+1)^{3/2} + C\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-2",
          "question": "Using partial fractions, \\(\\int \\frac{1}{x^2 - 1}\\,dx =\\)",
          "options": [
            "\\(\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C\\)",
            "\\(\\ln|x^2 - 1|\\)",
            "\\(\\arctan x\\)",
            "\\(\\frac{1}{x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Partial fractions: \\(\\frac{1}{(x-1)(x+1)} = \\frac{1/2}{x-1} - \\frac{1/2}{x+1}\\), integrating to \\(\\frac{1}{2}\\ln|\\frac{x-1}{x+1}| + C\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-3",
          "question": "\\(\\frac{d}{dx}\\int_1^{x^2}\\sin t\\,dt =\\)",
          "options": [
            "\\(2x\\sin(x^2)\\)",
            "\\(\\sin(x^2)\\)",
            "\\(2x\\cos(x^2)\\)",
            "\\(\\sin x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "FTC with chain rule: \\(\\sin(x^2)\\cdot 2x\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-4",
          "question": "\\(\\int x^2 e^x\\,dx\\) requires integration by parts applied",
          "options": [
            "twice",
            "once",
            "not at all",
            "three times"
          ],
          "correctAnswer": 0,
          "explanation": "Integration by parts twice reduces \\(x^2 e^x\\) to \\((x^2 - 2x + 2)e^x + C\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-5",
          "question": "An improper integral \\(\\int_1^\\infty \\frac{1}{x^2}\\,dx\\) equals",
          "options": [
            "\\(1\\)",
            "\\(\\infty\\)",
            "\\(0\\)",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int_1^\\infty x^{-2}\\,dx = [-x^{-1}]_1^\\infty = 0 - (-1) = 1\\); it converges.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-6",
          "question": "The improper integral \\(\\int_1^\\infty \\frac{1}{x}\\,dx\\)",
          "options": [
            "diverges",
            "equals 1",
            "equals 0",
            "equals ln 2"
          ],
          "correctAnswer": 0,
          "explanation": "\\([\\ln x]_1^\\infty = \\infty\\); the integral diverges.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-7",
          "question": "\\(\\int \\ln x\\,dx\\) (by parts) equals",
          "options": [
            "\\(x\\ln x - x + C\\)",
            "\\(\\frac{1}{x} + C\\)",
            "\\(x\\ln x + C\\)",
            "\\(\\ln x + C\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Let u = ln x, dv = dx: \\(x\\ln x - \\int 1\\,dx = x\\ln x - x + C\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-8",
          "question": "If \\(\\int_0^5 f(x)\\,dx = 12\\) and \\(\\int_0^2 f(x)\\,dx = 5\\), then \\(\\int_2^5 f(x)\\,dx =\\)",
          "options": [
            "\\(7\\)",
            "\\(17\\)",
            "\\(5\\)",
            "\\(12\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int_2^5 = \\int_0^5 - \\int_0^2 = 12 - 5 = 7\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-9",
          "question": "The average value of \\(f(x) = x^2\\) on \\([0, 3]\\) is",
          "options": [
            "\\(3\\)",
            "\\(9\\)",
            "\\(6\\)",
            "\\(\\frac{9}{2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{1}{3}\\int_0^3 x^2\\,dx = \\frac{1}{3}(9) = 3\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-10",
          "question": "An improper integral \\(\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx\\) equals",
          "options": [
            "\\(2\\)",
            "\\(\\infty\\)",
            "\\(1\\)",
            "\\(0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int_0^1 x^{-1/2}\\,dx = [2\\sqrt{x}]_0^1 = 2\\); it converges despite the singularity at 0.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 7,
      "title": "Differential Equations",
      "questions": [
        {
          "id": "q-u7-easy-1",
          "question": "The general solution to \\(\\frac{dy}{dx} = 3x^2\\) is",
          "options": [
            "\\(y = x^3 + C\\)",
            "\\(y = 3x^2\\)",
            "\\(y = x^3\\)",
            "\\(y = 6x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Integrate: \\(y = x^3 + C\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-2",
          "question": "A slope field represents",
          "options": [
            "the slopes given by a differential equation at points",
            "the solution only",
            "the area",
            "the second derivative"
          ],
          "correctAnswer": 0,
          "explanation": "A slope field shows segments indicating dy/dx at grid points.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-3",
          "question": "Exponential growth is modeled by",
          "options": [
            "\\(\\frac{dy}{dt} = ky\\)",
            "\\(\\frac{dy}{dt} = k\\)",
            "\\(\\frac{dy}{dt} = kt\\)",
            "\\(\\frac{dy}{dt} = y^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{dy}{dt} = ky\\) models exponential growth/decay.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-4",
          "question": "The solution to \\(\\frac{dy}{dt} = ky\\) is",
          "options": [
            "\\(y = y_0 e^{kt}\\)",
            "\\(y = kt\\)",
            "\\(y = y_0 + kt\\)",
            "\\(y = kt^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The exponential solution is \\(y = y_0 e^{kt}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-5",
          "question": "Separation of variables separates",
          "options": [
            "y and x terms to opposite sides before integrating",
            "the second derivative",
            "limits",
            "products"
          ],
          "correctAnswer": 0,
          "explanation": "This technique rearranges the equation so each variable is on its own side, then integrates.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-6",
          "question": "An initial condition is used to find",
          "options": [
            "the specific constant C",
            "a slope field",
            "a derivative",
            "a limit"
          ],
          "correctAnswer": 0,
          "explanation": "An initial condition determines C, giving a particular solution.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-7",
          "question": "If \\(k < 0\\) in \\(y = y_0 e^{kt}\\), the model is",
          "options": [
            "exponential decay",
            "exponential growth",
            "linear",
            "constant"
          ],
          "correctAnswer": 0,
          "explanation": "Negative k gives exponential decay.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-8",
          "question": "The general solution to \\(\\frac{dy}{dx} = \\cos x\\) is",
          "options": [
            "\\(y = \\sin x + C\\)",
            "\\(y = -\\sin x\\)",
            "\\(y = \\cos x + C\\)",
            "\\(y = -\\cos x + C\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Integrate: \\(y = \\sin x + C\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-9",
          "question": "Euler's method approximates solutions using",
          "options": [
            "small steps along tangent lines",
            "exact integration",
            "slope fields only",
            "limits"
          ],
          "correctAnswer": 0,
          "explanation": "Euler's method steps forward using the slope, approximating the solution curve.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-10",
          "question": "An equilibrium solution has",
          "options": [
            "\\(\\frac{dy}{dt} = 0\\)",
            "y growing",
            "y decaying",
            "y oscillating"
          ],
          "correctAnswer": 0,
          "explanation": "An equilibrium solution is constant (zero rate of change).",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-medium-1",
          "question": "Solve \\(\\frac{dy}{dx} = \\frac{x}{y}\\). The relation is",
          "options": [
            "\\(y^2 = x^2 + C\\)",
            "\\(y = x + C\\)",
            "\\(y = x^2\\)",
            "\\(\\ln y = x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Separate: \\(y\\,dy = x\\,dx\\); \\(\\frac{y^2}{2} = \\frac{x^2}{2} + C_1\\), so \\(y^2 = x^2 + C\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-2",
          "question": "A population grows with \\(\\frac{dP}{dt} = 0.04P\\). The doubling time is about",
          "options": [
            "\\(\\frac{\\ln 2}{0.04} \\approx 17.3\\)",
            "\\(0.04\\)",
            "\\(25\\)",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Doubling: \\(2 = e^{0.04t}\\), \\(t = \\frac{\\ln 2}{0.04} \\approx 17.3\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-3",
          "question": "The solution to \\(\\frac{dy}{dx} = 2x\\) with \\(y(0) = 5\\) is",
          "options": [
            "\\(y = x^2 + 5\\)",
            "\\(y = x^2\\)",
            "\\(y = 2x + 5\\)",
            "\\(y = x^2 + C\\)"
          ],
          "correctAnswer": 0,
          "explanation": "General: \\(y = x^2 + C\\); \\(y(0) = 5\\) gives C = 5.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-4",
          "question": "Solve \\(\\frac{dy}{dx} = y\\) with \\(y(0) = 3\\).",
          "options": [
            "\\(y = 3e^x\\)",
            "\\(y = e^x + 2\\)",
            "\\(y = 3x\\)",
            "\\(y = x^2 + 3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(y = Ce^x\\); \\(y(0) = 3\\) gives \\(y = 3e^x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-5",
          "question": "Newton's law of cooling predicts temperature approaches",
          "options": [
            "the surrounding temperature",
            "absolute zero",
            "infinity",
            "its initial value"
          ],
          "correctAnswer": 0,
          "explanation": "Temperature exponentially approaches the ambient temperature.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-6",
          "question": "The logistic equation \\(\\frac{dP}{dt} = kP(1 - P/M)\\) models growth that",
          "options": [
            "levels off at carrying capacity M",
            "grows without bound",
            "decays to zero",
            "oscillates"
          ],
          "correctAnswer": 0,
          "explanation": "Logistic growth produces S-shaped growth leveling off at M (a BC topic).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-7",
          "question": "For the logistic equation, growth is fastest when",
          "options": [
            "\\(P = M/2\\)",
            "\\(P = M\\)",
            "\\(P = 0\\)",
            "\\(P = 2M\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Logistic growth rate is maximized at P = M/2, the inflection point.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-8",
          "question": "An equilibrium solution of the logistic equation is",
          "options": [
            "\\(P = 0\\) and \\(P = M\\)",
            "\\(P = M/2\\)",
            "\\(P = 1\\)",
            "none"
          ],
          "correctAnswer": 0,
          "explanation": "Setting dP/dt = 0 gives P = 0 (unstable) and P = M (stable).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-9",
          "question": "A radioactive decay \\(\\frac{dN}{dt} = -kN\\) with half-life relates k to",
          "options": [
            "\\(t_{1/2} = \\frac{\\ln 2}{k}\\)",
            "\\(t_{1/2} = k\\)",
            "\\(t_{1/2} = \\frac{1}{k}\\)",
            "\\(t_{1/2} = k^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Half-life is \\(t_{1/2} = \\frac{\\ln 2}{k}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-10",
          "question": "Using Euler's method with h = 0.5 for \\(\\frac{dy}{dx} = y\\), \\(y(0) = 1\\), the estimate for y(0.5) is",
          "options": [
            "\\(1.5\\)",
            "\\(1\\)",
            "\\(2\\)",
            "\\(0.5\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(y_1 = 1 + 0.5(1) = 1.5\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-hard-1",
          "question": "Solve \\(\\frac{dy}{dx} = xy\\) with \\(y(0) = 2\\).",
          "options": [
            "\\(y = 2e^{x^2/2}\\)",
            "\\(y = 2e^x\\)",
            "\\(y = x^2 + 2\\)",
            "\\(y = \\frac{x^2}{2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Separate: \\(\\frac{dy}{y} = x\\,dx\\); \\(\\ln y = \\frac{x^2}{2} + C\\); with y(0)=2, \\(y = 2e^{x^2/2}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-2",
          "question": "Solve \\(\\frac{dy}{dx} = \\frac{2x}{y}\\) with \\(y(0) = 3\\).",
          "options": [
            "\\(y = \\sqrt{2x^2 + 9}\\)",
            "\\(y = 2x^2 + 3\\)",
            "\\(y = x^2 + 3\\)",
            "\\(y = \\sqrt{x^2 + 9}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Separate: \\(y\\,dy = 2x\\,dx\\); \\(\\frac{y^2}{2} = x^2 + C\\); y(0)=3 gives \\(y^2 = 2x^2 + 9\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-3",
          "question": "For a substance with \\(\\frac{dN}{dt} = -0.1N\\), the half-life is about",
          "options": [
            "\\(6.93\\)",
            "\\(10\\)",
            "\\(0.1\\)",
            "\\(0.693\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(t_{1/2} = \\frac{\\ln 2}{0.1} \\approx 6.93\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-4",
          "question": "Why does Euler's method accumulate error?",
          "options": [
            "Each tangent-line step deviates from the true curve, and errors compound",
            "it is exact",
            "it uses integrals",
            "the slope is random"
          ],
          "correctAnswer": 0,
          "explanation": "Euler's straight-line steps deviate from the curving solution, and these errors accumulate over steps.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-5",
          "question": "The logistic model's carrying capacity M represents",
          "options": [
            "the maximum sustainable population",
            "the initial population",
            "the growth rate",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "M is the carrying capacity—the population level the growth approaches and levels off at.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-6",
          "question": "Solve \\(\\frac{dy}{dx} = y^2\\) with \\(y(0) = 1\\).",
          "options": [
            "\\(y = \\frac{1}{1 - x}\\)",
            "\\(y = e^x\\)",
            "\\(y = x + 1\\)",
            "\\(y = x^2 + 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Separate: \\(\\frac{dy}{y^2} = dx\\); \\(-\\frac{1}{y} = x + C\\); y(0)=1 gives \\(y = \\frac{1}{1-x}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-7",
          "question": "A solution curve in a slope field is",
          "options": [
            "tangent to the slope segments everywhere",
            "perpendicular to segments",
            "a straight line always",
            "random"
          ],
          "correctAnswer": 0,
          "explanation": "A solution curve follows the slope field, tangent to the segments at each point.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-8",
          "question": "Using Euler's method with two steps of h = 0.5 for \\(\\frac{dy}{dx} = y\\), \\(y(0) = 1\\), the estimate for y(1) is",
          "options": [
            "\\(2.25\\)",
            "\\(2\\)",
            "\\(1.5\\)",
            "\\(e\\)"
          ],
          "correctAnswer": 0,
          "explanation": "y(0.5) = 1.5; y(1) = 1.5 + 0.5(1.5) = 2.25.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-9",
          "question": "The logistic differential equation is separable and solved using",
          "options": [
            "partial fractions",
            "the power rule",
            "integration by parts only",
            "a slope field only"
          ],
          "correctAnswer": 0,
          "explanation": "Solving the logistic equation requires partial fraction decomposition of \\(\\frac{1}{P(1-P/M)}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-10",
          "question": "Why is Euler's method with a smaller step size generally more accurate?",
          "options": [
            "Smaller steps follow the curve more closely, reducing accumulated error",
            "larger steps are better",
            "step size doesn't matter",
            "it becomes exact"
          ],
          "correctAnswer": 0,
          "explanation": "Smaller step sizes let the tangent-line approximations track the curve more closely, reducing the total accumulated error.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 8,
      "title": "Applications of Integration",
      "questions": [
        {
          "id": "q-u8-easy-1",
          "question": "The area under \\(y = f(x)\\) from a to b is",
          "options": [
            "\\(\\int_a^b f(x)\\,dx\\)",
            "\\(f(b) - f(a)\\)",
            "\\(f'(x)\\)",
            "the slope"
          ],
          "correctAnswer": 0,
          "explanation": "The area under a curve is the definite integral.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-2",
          "question": "The area between two curves (top f, bottom g) is",
          "options": [
            "\\(\\int_a^b [f(x) - g(x)]\\,dx\\)",
            "\\(\\int_a^b f(x)g(x)\\,dx\\)",
            "\\(f - g\\)",
            "\\(\\int f + g\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Area between curves = integral of (top − bottom).",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-3",
          "question": "The disk method volume is",
          "options": [
            "\\(\\int_a^b \\pi [R(x)]^2\\,dx\\)",
            "\\(\\int_a^b R(x)\\,dx\\)",
            "\\(\\pi R^2\\)",
            "\\(\\int 2\\pi R\\,dx\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Disk method: \\(V = \\int_a^b \\pi [R(x)]^2\\,dx\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-4",
          "question": "Position is found from velocity by",
          "options": [
            "integrating",
            "differentiating",
            "taking a limit",
            "finding the maximum"
          ],
          "correctAnswer": 0,
          "explanation": "Position is the integral of velocity.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-5",
          "question": "Displacement from t = a to b is",
          "options": [
            "\\(\\int_a^b v(t)\\,dt\\)",
            "\\(\\int_a^b |v(t)|\\,dt\\)",
            "\\(v(b) - v(a)\\)",
            "\\(v'(t)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Displacement is the integral of velocity.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-6",
          "question": "Total distance traveled is",
          "options": [
            "\\(\\int_a^b |v(t)|\\,dt\\)",
            "\\(\\int_a^b v(t)\\,dt\\)",
            "\\(v(b) - v(a)\\)",
            "the displacement"
          ],
          "correctAnswer": 0,
          "explanation": "Total distance integrates speed |v(t)|.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-7",
          "question": "The washer method is used for solids with",
          "options": [
            "a hole (region between two radii)",
            "no hole",
            "a triangular base",
            "a square cross-section"
          ],
          "correctAnswer": 0,
          "explanation": "The washer method handles solids of revolution with a hole.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-8",
          "question": "The net change of a quantity equals",
          "options": [
            "the integral of its rate of change",
            "the derivative",
            "the maximum",
            "the slope"
          ],
          "correctAnswer": 0,
          "explanation": "Net change is the integral of the rate of change.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-9",
          "question": "The arc length of a curve involves integrating",
          "options": [
            "\\(\\sqrt{1 + (f'(x))^2}\\)",
            "\\(f(x)\\)",
            "\\(f'(x)\\)",
            "\\(f(x)^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Arc length = \\(\\int_a^b \\sqrt{1 + (f'(x))^2}\\,dx\\), a BC topic.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-10",
          "question": "To find accumulated amount from a rate r(t), compute",
          "options": [
            "\\(\\int r(t)\\,dt\\)",
            "\\(r'(t)\\)",
            "\\(r(t)/t\\)",
            "the maximum of r"
          ],
          "correctAnswer": 0,
          "explanation": "Accumulation is the integral of the rate.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-medium-1",
          "question": "The area between \\(y = x\\) and \\(y = x^2\\) from 0 to 1 is",
          "options": [
            "\\(\\frac{1}{6}\\)",
            "\\(\\frac{1}{2}\\)",
            "\\(\\frac{1}{3}\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int_0^1 (x - x^2)\\,dx = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-2",
          "question": "The volume when \\(y = x^2\\) (0 to 2) revolves about the x-axis is",
          "options": [
            "\\(\\frac{32\\pi}{5}\\)",
            "\\(8\\pi\\)",
            "\\(\\frac{8\\pi}{3}\\)",
            "\\(4\\pi\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(V = \\pi\\int_0^2 x^4\\,dx = \\pi\\cdot\\frac{32}{5}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-3",
          "question": "A particle with \\(v(t) = t - 3\\) has displacement from 0 to 6 of",
          "options": [
            "\\(0\\)",
            "\\(6\\)",
            "\\(9\\)",
            "\\(-3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int_0^6 (t-3)\\,dt = [\\frac{t^2}{2} - 3t]_0^6 = 18 - 18 = 0\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-4",
          "question": "The average value of \\(f(x) = x\\) on \\([0, 6]\\) is",
          "options": [
            "\\(3\\)",
            "\\(6\\)",
            "\\(18\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{1}{6}\\int_0^6 x\\,dx = \\frac{1}{6}(18) = 3\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-5",
          "question": "The area under \\(y = \\sin x\\) from 0 to \\(\\pi\\) is",
          "options": [
            "\\(2\\)",
            "\\(0\\)",
            "\\(\\pi\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\([-\\cos x]_0^\\pi = 2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-6",
          "question": "A solid has a base under \\(y = x\\) from 0 to 2 with square cross-sections. Its volume is",
          "options": [
            "\\(\\frac{8}{3}\\)",
            "\\(4\\)",
            "\\(8\\)",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Cross-section area = x²; \\(V = \\int_0^2 x^2\\,dx = \\frac{8}{3}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-7",
          "question": "The region under \\(y = e^x\\) from 0 to 1 has area",
          "options": [
            "\\(e - 1\\)",
            "\\(e\\)",
            "\\(1\\)",
            "\\(e + 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int_0^1 e^x\\,dx = e - 1\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-8",
          "question": "For a curve given parametrically, the arc length involves",
          "options": [
            "\\(\\int \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt\\)",
            "\\(\\int x\\,dt\\)",
            "\\(\\int y\\,dx\\)",
            "\\(\\int dt\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Parametric arc length = \\(\\int_a^b \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt\\), a BC topic.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-9",
          "question": "To find the area between intersecting curves, first find",
          "options": [
            "the points of intersection (limits)",
            "a derivative",
            "the maximum",
            "a slope field"
          ],
          "correctAnswer": 0,
          "explanation": "Intersection points give the bounds of integration.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-10",
          "question": "A particle with \\(v(t) = t - 3\\) has total distance from 0 to 6 of",
          "options": [
            "\\(9\\)",
            "\\(0\\)",
            "\\(6\\)",
            "\\(3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "v < 0 on [0,3] (area 4.5), v > 0 on [3,6] (area 4.5); total = 9.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-hard-1",
          "question": "The area between \\(y = x^2\\) and \\(y = 2x\\) is",
          "options": [
            "\\(\\frac{4}{3}\\)",
            "\\(\\frac{8}{3}\\)",
            "\\(2\\)",
            "\\(4\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Intersect at 0, 2; \\(\\int_0^2 (2x - x^2)\\,dx = 4 - \\frac{8}{3} = \\frac{4}{3}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-2",
          "question": "The volume revolving \\(y = \\sqrt{x}\\) (0 to 4) about the x-axis is",
          "options": [
            "\\(8\\pi\\)",
            "\\(16\\pi\\)",
            "\\(4\\pi\\)",
            "\\(\\frac{32\\pi}{5}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(V = \\pi\\int_0^4 x\\,dx = \\pi\\cdot 8 = 8\\pi\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-3",
          "question": "The arc length of \\(y = \\frac{2}{3}x^{3/2}\\) from 0 to 3 is",
          "options": [
            "\\(\\frac{14}{3}\\)",
            "\\(3\\)",
            "\\(6\\)",
            "\\(\\frac{7}{3}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(y' = x^{1/2}\\); \\(\\int_0^3 \\sqrt{1 + x}\\,dx = [\\frac{2}{3}(1+x)^{3/2}]_0^3 = \\frac{2}{3}(8 - 1) = \\frac{14}{3}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-4",
          "question": "A particle's acceleration is \\(a(t) = 6t\\) with \\(v(0) = 0\\), \\(s(0) = 0\\). Its position at \\(t = 2\\) is",
          "options": [
            "\\(8\\)",
            "\\(12\\)",
            "\\(24\\)",
            "\\(6\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v = 3t^2\\), \\(s = t^3\\); \\(s(2) = 8\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-5",
          "question": "The washer method for the region between \\(y = x\\) and \\(y = x^2\\) revolved about the x-axis uses",
          "options": [
            "\\(\\int_0^1 \\pi(x^2 - x^4)\\,dx\\)",
            "\\(\\int_0^1 \\pi(x - x^2)\\,dx\\)",
            "\\(\\int_0^1 \\pi x^2\\,dx\\)",
            "\\(\\int_0^1 (x - x^2)\\,dx\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Outer radius x, inner x²: \\(V = \\pi\\int_0^1 [x^2 - x^4]\\,dx\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-6",
          "question": "The average value of \\(f(x) = \\sin x\\) on \\([0, \\pi]\\) is",
          "options": [
            "\\(\\frac{2}{\\pi}\\)",
            "\\(\\frac{1}{\\pi}\\)",
            "\\(1\\)",
            "\\(\\frac{\\pi}{2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{1}{\\pi}\\int_0^\\pi \\sin x\\,dx = \\frac{2}{\\pi}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-7",
          "question": "Water flows in at rate \\(r(t) = 4t\\) and out at 6 over [0, 3]. The net change in volume is",
          "options": [
            "\\(0\\)",
            "\\(18\\)",
            "\\(-18\\)",
            "\\(9\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Net rate = 6 - 4t; \\(\\int_0^3 (6 - 4t)\\,dt = 18 - 18 = 0\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-8",
          "question": "The accumulated value Q(t) with known Q'(t) and Q(0) is",
          "options": [
            "\\(Q(0) + \\int_0^t Q'(s)\\,ds\\)",
            "\\(Q'(t)\\)",
            "\\(Q(0)\\)",
            "differentiating"
          ],
          "correctAnswer": 0,
          "explanation": "By the net change theorem, \\(Q(t) = Q(0) + \\int_0^t Q'(s)\\,ds\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-9",
          "question": "A particle with \\(v(t) = \\cos t\\) over \\([0, 2\\pi]\\) has displacement ___ and total distance ___.",
          "options": [
            "0; 4",
            "4; 0",
            "2; 2",
            "0; 0"
          ],
          "correctAnswer": 0,
          "explanation": "Displacement = \\(\\int_0^{2\\pi}\\cos t\\,dt = 0\\); total distance = \\(\\int_0^{2\\pi}|\\cos t|\\,dt = 4\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-10",
          "question": "The volume of a solid with semicircular cross-sections on a base under \\(y = 2\\) from x = 0 to 4 involves",
          "options": [
            "\\(\\int_0^4 \\frac{\\pi}{2}(1)^2\\,dx\\) (radius = half the diameter)",
            "\\(\\int_0^4 \\pi(2)^2\\,dx\\)",
            "\\(\\int_0^4 2\\,dx\\)",
            "\\(\\int_0^4 4\\,dx\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Cross-sections are semicircles with diameter = 2 (radius 1); area = \\(\\frac{\\pi}{2}(1)^2\\), integrated over the base.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 9,
      "title": "Parametric Equations, Polar Coordinates, and Vector-Valued Functions",
      "questions": [
        {
          "id": "q-u9-easy-1",
          "question": "Parametric equations express x and y as functions of",
          "options": [
            "a parameter t",
            "each other only",
            "a constant",
            "the origin"
          ],
          "correctAnswer": 0,
          "explanation": "Parametric equations give x = f(t) and y = g(t) in terms of a parameter.",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-2",
          "question": "For parametric curves, \\(\\frac{dy}{dx} =\\)",
          "options": [
            "\\(\\frac{dy/dt}{dx/dt}\\)",
            "\\(\\frac{dx/dt}{dy/dt}\\)",
            "\\(dy\\cdot dx\\)",
            "\\(\\frac{dy}{dt}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The parametric derivative is \\(\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-3",
          "question": "Polar coordinates describe a point by",
          "options": [
            "\\((r, \\theta)\\)",
            "\\((x, y)\\)",
            "a single number",
            "\\((a, b, c)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Polar coordinates use a radius r and angle θ.",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-4",
          "question": "To convert polar to rectangular, \\(x =\\)",
          "options": [
            "\\(r\\cos\\theta\\)",
            "\\(r\\sin\\theta\\)",
            "\\(r\\tan\\theta\\)",
            "\\(r\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(x = r\\cos\\theta\\) and \\(y = r\\sin\\theta\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-5",
          "question": "A vector has both",
          "options": [
            "magnitude and direction",
            "only magnitude",
            "only direction",
            "neither"
          ],
          "correctAnswer": 0,
          "explanation": "A vector has magnitude and direction.",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-6",
          "question": "The polar equation \\(r = 3\\) is a",
          "options": [
            "circle of radius 3",
            "line",
            "spiral",
            "point"
          ],
          "correctAnswer": 0,
          "explanation": "Constant r gives a circle of that radius centered at the origin.",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-7",
          "question": "For a vector-valued function \\(\\vec{r}(t) = \\langle f(t), g(t)\\rangle\\), the velocity is",
          "options": [
            "\\(\\langle f'(t), g'(t)\\rangle\\)",
            "\\(\\langle f(t), g(t)\\rangle\\)",
            "\\(f(t)g(t)\\)",
            "a scalar"
          ],
          "correctAnswer": 0,
          "explanation": "The velocity vector is the componentwise derivative.",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-8",
          "question": "The parametric equations \\(x = \\cos t\\), \\(y = \\sin t\\) trace",
          "options": [
            "a unit circle",
            "a line",
            "a parabola",
            "a point"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(x^2 + y^2 = 1\\), they trace the unit circle.",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-9",
          "question": "The area in polar coordinates uses",
          "options": [
            "\\(\\frac{1}{2}\\int r^2\\,d\\theta\\)",
            "\\(\\int r\\,d\\theta\\)",
            "\\(\\int r^2\\,dr\\)",
            "\\(\\pi r^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Polar area = \\(\\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-10",
          "question": "The magnitude of vector \\(\\langle 3, 4\\rangle\\) is",
          "options": [
            "\\(5\\)",
            "\\(7\\)",
            "\\(12\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-medium-1",
          "question": "For \\(x = t^2\\), \\(y = t^3\\), \\(\\frac{dy}{dx} =\\)",
          "options": [
            "\\(\\frac{3t}{2}\\)",
            "\\(\\frac{2}{3t}\\)",
            "\\(3t^2\\)",
            "\\(\\frac{2t}{3}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{3t^2}{2t} = \\frac{3t}{2}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-2",
          "question": "Convert the polar point \\((2, \\pi/2)\\) to rectangular coordinates.",
          "options": [
            "\\((0, 2)\\)",
            "\\((2, 0)\\)",
            "\\((0, 0)\\)",
            "\\((2, 2)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(x = 2\\cos(\\pi/2) = 0\\), \\(y = 2\\sin(\\pi/2) = 2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-3",
          "question": "Eliminating the parameter from \\(x = t + 1\\), \\(y = 2t\\) gives",
          "options": [
            "\\(y = 2(x - 1)\\)",
            "\\(y = 2x + 1\\)",
            "\\(y = x - 1\\)",
            "\\(y = 2x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(t = x - 1\\); \\(y = 2(x - 1)\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-4",
          "question": "The speed of a particle with \\(\\vec{r}(t) = \\langle t, t^2\\rangle\\) at \\(t = 1\\) is",
          "options": [
            "\\(\\sqrt{5}\\)",
            "\\(5\\)",
            "\\(2\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Velocity = ⟨1, 2t⟩; at t=1, ⟨1, 2⟩; speed = \\(\\sqrt{1 + 4} = \\sqrt{5}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-5",
          "question": "The polar equation \\(r = 2\\cos\\theta\\) is a",
          "options": [
            "circle",
            "line",
            "spiral",
            "parabola"
          ],
          "correctAnswer": 0,
          "explanation": "\\(r = 2\\cos\\theta\\) is a circle of radius 1 centered at (1, 0).",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-6",
          "question": "The acceleration of \\(\\vec{r}(t) = \\langle t^2, t^3\\rangle\\) is",
          "options": [
            "\\(\\langle 2, 6t\\rangle\\)",
            "\\(\\langle 2t, 3t^2\\rangle\\)",
            "\\(\\langle t^2, t^3\\rangle\\)",
            "\\(\\langle 0, 0\\rangle\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Velocity ⟨2t, 3t²⟩; acceleration ⟨2, 6t⟩.",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-7",
          "question": "Eliminating the parameter from \\(x = 2\\cos t\\), \\(y = 2\\sin t\\) gives",
          "options": [
            "\\(x^2 + y^2 = 4\\)",
            "\\(x^2 + y^2 = 2\\)",
            "\\(x + y = 2\\)",
            "\\(x^2 - y^2 = 4\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\cos^2 t + \\sin^2 t = 1\\) gives \\(x^2 + y^2 = 4\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-8",
          "question": "The area of one petal of \\(r = \\sin(2\\theta)\\) uses the integral",
          "options": [
            "\\(\\frac{1}{2}\\int_0^{\\pi/2}\\sin^2(2\\theta)\\,d\\theta\\)",
            "\\(\\int_0^{2\\pi}\\sin(2\\theta)\\,d\\theta\\)",
            "\\(\\pi\\sin^2\\theta\\)",
            "\\(\\int r\\,d\\theta\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Polar area of a petal: \\(\\frac{1}{2}\\int r^2\\,d\\theta\\) over the petal's θ-interval (0 to π/2 for this petal).",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-9",
          "question": "A horizontal tangent for a parametric curve occurs where",
          "options": [
            "\\(dy/dt = 0\\) (and dx/dt ≠ 0)",
            "\\(dx/dt = 0\\)",
            "\\(dy/dx = \\infty\\)",
            "t = 0"
          ],
          "correctAnswer": 0,
          "explanation": "A horizontal tangent occurs where dy/dt = 0 (numerator of dy/dx is zero) while dx/dt ≠ 0.",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-10",
          "question": "To convert rectangular to polar, \\(r =\\)",
          "options": [
            "\\(\\sqrt{x^2 + y^2}\\)",
            "\\(x + y\\)",
            "\\(xy\\)",
            "\\(x^2 + y^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(r = \\sqrt{x^2 + y^2}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-hard-1",
          "question": "For a projectile with \\(x = 3t\\), \\(y = -t^2 + 4t\\), it hits the ground (y = 0) at",
          "options": [
            "\\(t = 4\\)",
            "\\(t = 2\\)",
            "\\(t = 3\\)",
            "\\(t = 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(-t^2 + 4t = 0\\), \\(t(4-t) = 0\\); positive root t = 4.",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-2",
          "question": "The second derivative \\(\\frac{d^2y}{dx^2}\\) for parametric equations is",
          "options": [
            "\\(\\frac{d(dy/dx)/dt}{dx/dt}\\)",
            "\\(\\frac{d^2y/dt^2}{d^2x/dt^2}\\)",
            "\\((dy/dx)^2\\)",
            "\\(\\frac{dy/dt}{dx/dt}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The parametric second derivative is \\(\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) \\div \\frac{dx}{dt}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-3",
          "question": "The arc length of a parametric curve from t = a to b is",
          "options": [
            "\\(\\int_a^b \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt\\)",
            "\\(\\int_a^b y\\,dx\\)",
            "\\(\\int_a^b x\\,dt\\)",
            "\\(\\int_a^b dt\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Parametric arc length = \\(\\int_a^b \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-4",
          "question": "The area enclosed by the polar curve \\(r = 1 + \\cos\\theta\\) (cardioid) is found by",
          "options": [
            "\\(\\frac{1}{2}\\int_0^{2\\pi}(1 + \\cos\\theta)^2\\,d\\theta\\)",
            "\\(\\int_0^{2\\pi}(1 + \\cos\\theta)\\,d\\theta\\)",
            "\\(\\pi(1)^2\\)",
            "\\(\\int r\\,dr\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Polar area = \\(\\frac{1}{2}\\int_0^{2\\pi} r^2\\,d\\theta\\) with r = 1 + cos θ.",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-5",
          "question": "A vertical tangent for a parametric curve occurs where",
          "options": [
            "\\(dx/dt = 0\\) (and dy/dt ≠ 0)",
            "\\(dy/dt = 0\\)",
            "\\(dy/dx = 0\\)",
            "t = 1"
          ],
          "correctAnswer": 0,
          "explanation": "A vertical tangent occurs where dx/dt = 0 (making dy/dx undefined) while dy/dt ≠ 0.",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-6",
          "question": "For \\(\\vec{r}(t) = \\langle \\cos t, \\sin t\\rangle\\), the speed at any t is",
          "options": [
            "\\(1\\) (constant)",
            "\\(t\\)",
            "\\(\\cos t\\)",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Velocity = ⟨−sin t, cos t⟩; speed = \\(\\sqrt{\\sin^2 t + \\cos^2 t} = 1\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-7",
          "question": "The slope of the polar curve \\(r = f(\\theta)\\) requires converting to",
          "options": [
            "parametric form x = r cos θ, y = r sin θ, then using dy/dx",
            "only r",
            "only θ",
            "rectangular first"
          ],
          "correctAnswer": 0,
          "explanation": "Treat the polar curve parametrically in θ and compute \\(\\frac{dy/d\\theta}{dx/d\\theta}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-8",
          "question": "The total distance traveled by a particle equals",
          "options": [
            "the integral of speed \\(\\int \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt\\)",
            "the displacement",
            "the velocity",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Total distance is the integral of speed (magnitude of velocity), same as arc length of the path.",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-9",
          "question": "The area between two polar curves is found by",
          "options": [
            "\\(\\frac{1}{2}\\int (r_{outer}^2 - r_{inner}^2)\\,d\\theta\\)",
            "\\(\\int (r_o - r_i)\\,d\\theta\\)",
            "\\(\\pi(r_o^2 - r_i^2)\\)",
            "\\(\\int r\\,dr\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The area between polar curves is \\(\\frac{1}{2}\\int (r_{outer}^2 - r_{inner}^2)\\,d\\theta\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-10",
          "question": "For \\(\\vec{r}(t) = \\langle t^2, t^3\\rangle\\), the curve is not a function of x because",
          "options": [
            "a single x-value (from t and −t giving same t²) can correspond to two y-values",
            "x is always negative",
            "it is a straight line",
            "it has no y-values"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(x = t^2\\) is the same for t and −t but \\(y = t^3\\) differs, one x maps to two y-values—not a function of x.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 10,
      "title": "Infinite Sequences and Series",
      "questions": [
        {
          "id": "q-u10-easy-1",
          "question": "An infinite series is the sum of",
          "options": [
            "the terms of an infinite sequence",
            "two numbers",
            "a finite list",
            "a single term"
          ],
          "correctAnswer": 0,
          "explanation": "An infinite series is the sum of infinitely many terms of a sequence.",
          "difficulty": "easy"
        },
        {
          "id": "q-u10-easy-2",
          "question": "A geometric series \\(\\sum ar^n\\) converges when",
          "options": [
            "\\(|r| < 1\\)",
            "\\(|r| > 1\\)",
            "\\(r = 1\\)",
            "\\(r = 2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A geometric series converges if and only if \\(|r| < 1\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u10-easy-3",
          "question": "The sum of a convergent geometric series \\(\\sum_{n=0}^\\infty ar^n\\) is",
          "options": [
            "\\(\\frac{a}{1 - r}\\)",
            "\\(\\frac{a}{r}\\)",
            "\\(ar\\)",
            "\\(\\frac{r}{1-a}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The sum is \\(\\frac{a}{1 - r}\\) for \\(|r| < 1\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u10-easy-4",
          "question": "The harmonic series \\(\\sum \\frac{1}{n}\\)",
          "options": [
            "diverges",
            "converges to 1",
            "converges to 0",
            "converges to e"
          ],
          "correctAnswer": 0,
          "explanation": "The harmonic series diverges despite its terms going to 0.",
          "difficulty": "easy"
        },
        {
          "id": "q-u10-easy-5",
          "question": "A p-series \\(\\sum \\frac{1}{n^p}\\) converges when",
          "options": [
            "\\(p > 1\\)",
            "\\(p < 1\\)",
            "\\(p = 1\\)",
            "\\(p = 0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "A p-series converges if and only if p > 1.",
          "difficulty": "easy"
        },
        {
          "id": "q-u10-easy-6",
          "question": "The nth-term test for divergence says a series diverges if",
          "options": [
            "the terms do not approach 0",
            "the terms approach 0",
            "the series is geometric",
            "p > 1"
          ],
          "correctAnswer": 0,
          "explanation": "If \\(\\lim a_n \\ne 0\\), the series diverges (though the converse doesn't hold).",
          "difficulty": "easy"
        },
        {
          "id": "q-u10-easy-7",
          "question": "A Taylor series represents a function as",
          "options": [
            "an infinite polynomial (power series)",
            "a single term",
            "a finite sum",
            "a limit"
          ],
          "correctAnswer": 0,
          "explanation": "A Taylor series expresses a function as an infinite power series around a point.",
          "difficulty": "easy"
        },
        {
          "id": "q-u10-easy-8",
          "question": "A power series has a",
          "options": [
            "radius of convergence",
            "fixed sum only",
            "single term",
            "no variable"
          ],
          "correctAnswer": 0,
          "explanation": "A power series converges within a radius (interval) of convergence.",
          "difficulty": "easy"
        },
        {
          "id": "q-u10-easy-9",
          "question": "The Maclaurin series is a Taylor series centered at",
          "options": [
            "\\(x = 0\\)",
            "\\(x = 1\\)",
            "\\(x = \\infty\\)",
            "any point"
          ],
          "correctAnswer": 0,
          "explanation": "A Maclaurin series is a Taylor series centered at x = 0.",
          "difficulty": "easy"
        },
        {
          "id": "q-u10-easy-10",
          "question": "An alternating series has terms that",
          "options": [
            "alternate in sign",
            "are all positive",
            "are all negative",
            "are constant"
          ],
          "correctAnswer": 0,
          "explanation": "An alternating series has terms that switch sign.",
          "difficulty": "easy"
        },
        {
          "id": "q-u10-medium-1",
          "question": "The geometric series \\(\\sum_{n=0}^\\infty \\left(\\frac{1}{2}\\right)^n\\) converges to",
          "options": [
            "\\(2\\)",
            "\\(1\\)",
            "\\(\\frac{1}{2}\\)",
            "\\(\\infty\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{a}{1-r} = \\frac{1}{1 - 1/2} = 2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u10-medium-2",
          "question": "The series \\(\\sum \\frac{1}{n^2}\\)",
          "options": [
            "converges (p = 2 > 1)",
            "diverges",
            "converges to 1",
            "is geometric"
          ],
          "correctAnswer": 0,
          "explanation": "A p-series with p = 2 > 1 converges.",
          "difficulty": "medium"
        },
        {
          "id": "q-u10-medium-3",
          "question": "The ratio test examines",
          "options": [
            "\\(\\lim\\left|\\frac{a_{n+1}}{a_n}\\right|\\)",
            "the first term",
            "the sum",
            "the number of terms"
          ],
          "correctAnswer": 0,
          "explanation": "The ratio test computes \\(L = \\lim|a_{n+1}/a_n|\\); converges if L < 1.",
          "difficulty": "medium"
        },
        {
          "id": "q-u10-medium-4",
          "question": "By the ratio test, a series converges if the limit L is",
          "options": [
            "less than 1",
            "greater than 1",
            "equal to 1",
            "equal to 0 only"
          ],
          "correctAnswer": 0,
          "explanation": "The ratio test: L < 1 means convergence, L > 1 divergence, L = 1 inconclusive.",
          "difficulty": "medium"
        },
        {
          "id": "q-u10-medium-5",
          "question": "The alternating series test requires the terms to decrease in absolute value and",
          "options": [
            "approach 0",
            "increase",
            "stay constant",
            "be positive"
          ],
          "correctAnswer": 0,
          "explanation": "An alternating series converges if the terms decrease to 0 in absolute value.",
          "difficulty": "medium"
        },
        {
          "id": "q-u10-medium-6",
          "question": "The Maclaurin series for \\(e^x\\) is",
          "options": [
            "\\(\\sum_{n=0}^\\infty \\frac{x^n}{n!}\\)",
            "\\(\\sum x^n\\)",
            "\\(\\sum \\frac{x^n}{n}\\)",
            "\\(\\sum n x^n\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\dots\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u10-medium-7",
          "question": "The Maclaurin series for \\(\\sin x\\) is",
          "options": [
            "\\(x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots\\)",
            "\\(1 - \\frac{x^2}{2!} + \\dots\\)",
            "\\(\\sum x^n\\)",
            "\\(x + x^2 + \\dots\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u10-medium-8",
          "question": "The Maclaurin series for \\(\\frac{1}{1 - x}\\) is",
          "options": [
            "\\(\\sum_{n=0}^\\infty x^n\\) for \\(|x| < 1\\)",
            "\\(\\sum \\frac{x^n}{n!}\\)",
            "\\(1 - x\\)",
            "\\(\\sum n x^n\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{1}{1-x} = 1 + x + x^2 + \\dots = \\sum x^n\\) for |x| < 1 (geometric series).",
          "difficulty": "medium"
        },
        {
          "id": "q-u10-medium-9",
          "question": "The integral test compares a series to",
          "options": [
            "a corresponding improper integral",
            "a geometric series only",
            "a finite sum",
            "the ratio"
          ],
          "correctAnswer": 0,
          "explanation": "The integral test compares a positive decreasing series to the improper integral of the corresponding function.",
          "difficulty": "medium"
        },
        {
          "id": "q-u10-medium-10",
          "question": "Absolute convergence means",
          "options": [
            "the series of absolute values converges",
            "the series diverges",
            "the terms are positive",
            "the ratio is 1"
          ],
          "correctAnswer": 0,
          "explanation": "A series converges absolutely if the sum of absolute values converges (which implies convergence).",
          "difficulty": "medium"
        },
        {
          "id": "q-u10-hard-1",
          "question": "The interval of convergence for \\(\\sum \\frac{x^n}{n}\\) is",
          "options": [
            "\\(-1 \\le x < 1\\)",
            "\\(-1 < x < 1\\)",
            "all reals",
            "\\(x = 0\\) only"
          ],
          "correctAnswer": 0,
          "explanation": "The radius is 1; testing endpoints, x = −1 converges (alternating harmonic) but x = 1 diverges (harmonic), giving \\([-1, 1)\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u10-hard-2",
          "question": "Using the ratio test on \\(\\sum \\frac{x^n}{n!}\\), the series converges for",
          "options": [
            "all real x",
            "only |x| < 1",
            "only x = 0",
            "x > 1"
          ],
          "correctAnswer": 0,
          "explanation": "The ratio \\(\\left|\\frac{x}{n+1}\\right| \\to 0 < 1\\) for all x, so the series (which is e^x) converges everywhere.",
          "difficulty": "hard"
        },
        {
          "id": "q-u10-hard-3",
          "question": "The error in an alternating series approximation is bounded by",
          "options": [
            "the first omitted term",
            "the sum",
            "the first term",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "For a convergent alternating series, the truncation error is at most the absolute value of the first omitted term.",
          "difficulty": "hard"
        },
        {
          "id": "q-u10-hard-4",
          "question": "A conditionally convergent series is one that",
          "options": [
            "converges but not absolutely",
            "converges absolutely",
            "diverges",
            "is geometric"
          ],
          "correctAnswer": 0,
          "explanation": "Conditional convergence: the series converges, but the series of absolute values diverges (e.g., alternating harmonic).",
          "difficulty": "hard"
        },
        {
          "id": "q-u10-hard-5",
          "question": "The Taylor series of \\(f\\) about \\(x = a\\) has the term",
          "options": [
            "\\(\\frac{f^{(n)}(a)}{n!}(x-a)^n\\)",
            "\\(f(a)(x-a)^n\\)",
            "\\(\\frac{f(a)}{n}\\)",
            "\\(f^{(n)}(a)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The nth Taylor term is \\(\\frac{f^{(n)}(a)}{n!}(x-a)^n\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u10-hard-6",
          "question": "The Maclaurin series for \\(\\cos x\\) is",
          "options": [
            "\\(1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots\\)",
            "\\(x - \\frac{x^3}{3!} + \\dots\\)",
            "\\(\\sum x^n\\)",
            "\\(\\sum \\frac{x^n}{n!}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\dots\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u10-hard-7",
          "question": "The Lagrange error bound estimates the remainder of a Taylor polynomial using",
          "options": [
            "a bound on the (n+1)th derivative",
            "the first term",
            "the ratio test",
            "the sum"
          ],
          "correctAnswer": 0,
          "explanation": "The Lagrange error bound uses the maximum of the (n+1)th derivative to bound the Taylor approximation's error.",
          "difficulty": "hard"
        },
        {
          "id": "q-u10-hard-8",
          "question": "To find a Taylor series for \\(x^2 e^x\\), one can",
          "options": [
            "multiply the series for e^x by x²",
            "divide by x²",
            "integrate e^x",
            "use the ratio test"
          ],
          "correctAnswer": 0,
          "explanation": "Multiply the known series \\(e^x = \\sum \\frac{x^n}{n!}\\) by x² to get the series for \\(x^2 e^x\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u10-hard-9",
          "question": "The series \\(\\sum \\frac{(-1)^n}{n}\\) is",
          "options": [
            "conditionally convergent",
            "absolutely convergent",
            "divergent",
            "geometric"
          ],
          "correctAnswer": 0,
          "explanation": "The alternating harmonic series converges (alternating series test) but not absolutely (harmonic diverges)—conditionally convergent.",
          "difficulty": "hard"
        },
        {
          "id": "q-u10-hard-10",
          "question": "To find the radius of convergence of a power series, one typically uses",
          "options": [
            "the ratio test",
            "the alternating series test",
            "the nth-term test only",
            "direct summation"
          ],
          "correctAnswer": 0,
          "explanation": "The ratio test is the standard method to determine a power series's radius of convergence.",
          "difficulty": "hard"
        }
      ]
    }
  ]
}
