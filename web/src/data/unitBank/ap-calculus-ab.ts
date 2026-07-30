import type { SubjectUnitBank } from './types'

export const BANK_AP_CALCULUS_AB: SubjectUnitBank = {
  "label": "AP Calculus AB",
  "slug": "ap-calculus-ab",
  "units": [
    {
      "unitNumber": 1,
      "title": "Limits and Continuity",
      "questions": [
        {
          "id": "q-u1-easy-1",
          "question": "What is \\(\\lim_{x \\to 2}(3x + 1)\\)?",
          "options": [
            "\\(7\\)",
            "\\(6\\)",
            "\\(1\\)",
            "\\(3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For a continuous function, substitute directly: \\(3(2) + 1 = 7\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-2",
          "question": "What is \\(\\lim_{x \\to \\infty}\\frac{1}{x}\\)?",
          "options": [
            "\\(0\\)",
            "\\(1\\)",
            "\\(\\infty\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "As \\(x\\) grows without bound, \\(\\frac{1}{x}\\) approaches 0.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-3",
          "question": "A function \\(f\\) is continuous at \\(x = a\\) if",
          "options": [
            "\\(\\lim_{x \\to a}f(x) = f(a)\\)",
            "\\(f(a) = 0\\)",
            "\\(f\\) is a polynomial",
            "the limit does not exist"
          ],
          "correctAnswer": 0,
          "explanation": "Continuity at a requires the limit to exist, f(a) to exist, and them to be equal.",
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
          "question": "What is \\(\\lim_{x \\to 3}(x^2 - 4)\\)?",
          "options": [
            "\\(5\\)",
            "\\(9\\)",
            "\\(-4\\)",
            "\\(13\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Substitute directly: \\(3^2 - 4 = 9 - 4 = 5\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-6",
          "question": "What is \\(\\lim_{x \\to \\infty}\\frac{5}{x^2}\\)?",
          "options": [
            "\\(0\\)",
            "\\(5\\)",
            "\\(\\infty\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "As \\(x \\to \\infty\\), the denominator grows without bound, so the fraction approaches 0.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-7",
          "question": "A removable discontinuity (hole) occurs when",
          "options": [
            "the limit exists but does not equal f(a) (or f(a) is undefined)",
            "the function is continuous",
            "the limit is infinite",
            "the function is a line"
          ],
          "correctAnswer": 0,
          "explanation": "A removable discontinuity happens where the limit exists but differs from (or f is undefined at) that point—a 'hole.'",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-8",
          "question": "The limit \\(\\lim_{x \\to 2}\\frac{1}{x - 2}\\) is",
          "options": [
            "does not exist (infinite)",
            "0",
            "2",
            "1"
          ],
          "correctAnswer": 0,
          "explanation": "As x approaches 2, the denominator approaches 0, making the expression grow without bound (the two-sided limit does not exist).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-9",
          "question": "What is \\(\\lim_{x \\to 0}(x^2 + 3x + 2)\\)?",
          "options": [
            "\\(2\\)",
            "\\(0\\)",
            "\\(5\\)",
            "\\(3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Substitute 0: \\(0 + 0 + 2 = 2\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-10",
          "question": "Polynomials are continuous",
          "options": [
            "for all real numbers",
            "only at integers",
            "nowhere",
            "only where positive"
          ],
          "correctAnswer": 0,
          "explanation": "Polynomial functions are continuous everywhere on the real number line.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-medium-1",
          "question": "What is \\(\\lim_{x \\to 2}\\frac{x^2 - 4}{x - 2}\\)?",
          "options": [
            "\\(4\\)",
            "\\(0\\)",
            "undefined",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Factor: \\(\\frac{(x-2)(x+2)}{x-2} = x + 2\\); the limit is \\(2 + 2 = 4\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-2",
          "question": "What is \\(\\lim_{x \\to \\infty}\\frac{3x^2 + 2x}{5x^2 - 1}\\)?",
          "options": [
            "\\(\\frac{3}{5}\\)",
            "\\(0\\)",
            "\\(\\infty\\)",
            "\\(3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For equal-degree rational functions, the limit is the ratio of leading coefficients: \\(3/5\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-3",
          "question": "If \\(\\lim_{x \\to 2^-}f(x) = 3\\) and \\(\\lim_{x \\to 2^+}f(x) = 5\\), then \\(\\lim_{x \\to 2}f(x)\\)",
          "options": [
            "does not exist",
            "equals 4",
            "equals 3",
            "equals 5"
          ],
          "correctAnswer": 0,
          "explanation": "Since the left and right limits differ, the two-sided limit does not exist.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-4",
          "question": "For \\(f(x) = kx + 1\\) (\\(x < 2\\)) and \\(f(x) = x^2\\) (\\(x \\geq 2\\)) to be continuous at \\(x = 2\\), \\(k =\\)",
          "options": [
            "\\(\\frac{3}{2}\\)",
            "\\(2\\)",
            "\\(1\\)",
            "\\(4\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Continuity requires \\(2k + 1 = 4\\), so \\(k = 3/2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-5",
          "question": "What is \\(\\lim_{x \\to \\infty}\\frac{2x + 3}{x^2 + 1}\\)?",
          "options": [
            "\\(0\\)",
            "\\(2\\)",
            "\\(\\infty\\)",
            "\\(3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The denominator's degree exceeds the numerator's, so the limit is 0.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-6",
          "question": "The Intermediate Value Theorem guarantees that a continuous function on \\([a, b]\\)",
          "options": [
            "takes every value between f(a) and f(b)",
            "has a maximum",
            "is differentiable",
            "is a polynomial"
          ],
          "correctAnswer": 0,
          "explanation": "The IVT states a continuous function on a closed interval attains every value between f(a) and f(b).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-7",
          "question": "What is \\(\\lim_{x \\to 0}\\frac{\\sin(3x)}{x}\\)?",
          "options": [
            "\\(3\\)",
            "\\(1\\)",
            "\\(0\\)",
            "\\(\\frac{1}{3}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{\\sin(3x)}{x} = 3\\cdot\\frac{\\sin(3x)}{3x}\\), which approaches \\(3 \\cdot 1 = 3\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-8",
          "question": "A jump discontinuity occurs when",
          "options": [
            "the left and right limits both exist but are unequal",
            "the function is continuous",
            "the limit is infinite",
            "the function has a hole"
          ],
          "correctAnswer": 0,
          "explanation": "A jump discontinuity has finite left and right limits that differ.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-9",
          "question": "What is \\(\\lim_{x \\to 4}\\frac{x - 4}{\\sqrt{x} - 2}\\)?",
          "options": [
            "\\(4\\)",
            "\\(0\\)",
            "\\(2\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "Multiply by the conjugate: \\(\\frac{(x-4)(\\sqrt{x}+2)}{x - 4} = \\sqrt{x} + 2\\); at \\(x = 4\\), this is \\(2 + 2 = 4\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-10",
          "question": "A vertical asymptote of a rational function occurs where",
          "options": [
            "the denominator is zero but the numerator is not",
            "the numerator is zero",
            "the function is continuous",
            "x = 0"
          ],
          "correctAnswer": 0,
          "explanation": "A vertical asymptote occurs where the denominator equals zero and the factor does not cancel with the numerator.",
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
          "explanation": "This standard limit equals \\(\\frac{1}{2}\\) (provable via L'Hôpital's rule or the small-angle expansion).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-2",
          "question": "What is \\(\\lim_{x \\to \\infty}\\left(\\sqrt{x^2 + x} - x\\right)\\)?",
          "options": [
            "\\(\\frac{1}{2}\\)",
            "\\(0\\)",
            "\\(\\infty\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Multiply by the conjugate: \\(\\frac{x}{\\sqrt{x^2+x}+x} \\to \\frac{x}{2x} = \\frac{1}{2}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-3",
          "question": "If \\(f\\) is continuous on \\([1, 4]\\) with \\(f(1) = -2\\) and \\(f(4) = 5\\), the IVT guarantees",
          "options": [
            "at least one c in (1, 4) with f(c) = 0",
            "f has a maximum of 5",
            "f is increasing",
            "f(2) = 0"
          ],
          "correctAnswer": 0,
          "explanation": "Since f is continuous and changes sign, the IVT guarantees a zero somewhere in (1, 4).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-4",
          "question": "What is \\(\\lim_{x \\to 0^+}x\\ln x\\)?",
          "options": [
            "\\(0\\)",
            "\\(-\\infty\\)",
            "\\(1\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "Rewriting as \\(\\frac{\\ln x}{1/x}\\) and applying L'Hôpital gives \\(\\lim -x = 0\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-5",
          "question": "The function \\(f(x) = \\frac{x^2 - 1}{x - 1}\\) has, at \\(x = 1\\),",
          "options": [
            "a removable discontinuity (hole) with limit 2",
            "a vertical asymptote",
            "a jump discontinuity",
            "continuity"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{(x-1)(x+1)}{x-1} = x + 1\\) for \\(x \\ne 1\\); the limit is 2 but f(1) is undefined—a hole.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-6",
          "question": "What is \\(\\lim_{x \\to \\infty}\\frac{e^x}{x^2}\\)?",
          "options": [
            "\\(\\infty\\)",
            "\\(0\\)",
            "\\(1\\)",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Exponential growth dominates polynomial growth, so the limit is \\(\\infty\\) (confirmable by L'Hôpital twice).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-7",
          "question": "For \\(\\lim_{x \\to 0}\\frac{\\tan x}{x}\\), the value is",
          "options": [
            "\\(1\\)",
            "\\(0\\)",
            "\\(\\infty\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{\\tan x}{x} = \\frac{\\sin x}{x}\\cdot\\frac{1}{\\cos x} \\to 1 \\cdot 1 = 1\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-8",
          "question": "The Squeeze Theorem is used to evaluate \\(\\lim_{x \\to 0}x^2\\sin\\frac{1}{x}\\), which equals",
          "options": [
            "\\(0\\)",
            "\\(1\\)",
            "does not exist",
            "\\(\\infty\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(-x^2 \\le x^2\\sin\\frac{1}{x} \\le x^2\\) and both bounds go to 0, the limit is 0.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-9",
          "question": "A horizontal asymptote of \\(f(x) = \\frac{2x^3 + 1}{x^3 - x}\\) is at",
          "options": [
            "\\(y = 2\\)",
            "\\(y = 0\\)",
            "\\(y = 1\\)",
            "none"
          ],
          "correctAnswer": 0,
          "explanation": "Equal degrees give the horizontal asymptote as the ratio of leading coefficients: \\(y = 2/1 = 2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-10",
          "question": "If \\(\\lim_{x \\to a}f(x)\\) exists but \\(f(a)\\) does not, then f has at \\(x = a\\)",
          "options": [
            "a removable discontinuity",
            "a jump discontinuity",
            "an infinite discontinuity",
            "continuity"
          ],
          "correctAnswer": 0,
          "explanation": "When the limit exists but f(a) is undefined (or differs), it is a removable discontinuity.",
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
          "question": "The derivative of \\(f(x) = x^3\\) is",
          "options": [
            "\\(3x^2\\)",
            "\\(x^2\\)",
            "\\(3x\\)",
            "\\(x^4/4\\)"
          ],
          "correctAnswer": 0,
          "explanation": "By the power rule, \\(\\frac{d}{dx}x^3 = 3x^2\\).",
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
          "explanation": "The derivative of any constant is 0.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-3",
          "question": "The derivative represents the",
          "options": [
            "instantaneous rate of change (slope of the tangent line)",
            "area under the curve",
            "average value",
            "y-intercept"
          ],
          "correctAnswer": 0,
          "explanation": "The derivative gives the instantaneous rate of change, i.e., the slope of the tangent line.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-4",
          "question": "The derivative of \\(f(x) = 5x\\) is",
          "options": [
            "\\(5\\)",
            "\\(5x\\)",
            "\\(x\\)",
            "\\(0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The derivative of a linear function \\(5x\\) is its slope, 5.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-5",
          "question": "The power rule states that \\(\\frac{d}{dx}x^n =\\)",
          "options": [
            "\\(nx^{n-1}\\)",
            "\\(nx^n\\)",
            "\\(x^{n-1}\\)",
            "\\(\\frac{x^{n+1}}{n+1}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The power rule: \\(\\frac{d}{dx}x^n = nx^{n-1}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-6",
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
          "id": "q-u2-easy-7",
          "question": "The derivative of \\(e^x\\) is",
          "options": [
            "\\(e^x\\)",
            "\\(xe^{x-1}\\)",
            "\\(1\\)",
            "\\(\\ln x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{d}{dx}e^x = e^x\\); the exponential is its own derivative.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-8",
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
          "id": "q-u2-easy-9",
          "question": "The derivative of \\(f(x) = x^2 + 3x\\) is",
          "options": [
            "\\(2x + 3\\)",
            "\\(2x\\)",
            "\\(x + 3\\)",
            "\\(2x + 3x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Differentiate term by term: \\(2x + 3\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-10",
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
          "id": "q-u2-medium-1",
          "question": "Using the product rule, the derivative of \\(f(x) = x^2 e^x\\) is",
          "options": [
            "\\(2xe^x + x^2 e^x\\)",
            "\\(2xe^x\\)",
            "\\(x^2 e^x\\)",
            "\\(2xe^{x-1}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Product rule: \\((2x)(e^x) + (x^2)(e^x) = 2xe^x + x^2 e^x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-2",
          "question": "The derivative of \\(f(x) = \\frac{x}{x + 1}\\) using the quotient rule is",
          "options": [
            "\\(\\frac{1}{(x+1)^2}\\)",
            "\\(\\frac{1}{x+1}\\)",
            "\\(\\frac{x}{(x+1)^2}\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Quotient rule: \\(\\frac{(1)(x+1) - (x)(1)}{(x+1)^2} = \\frac{1}{(x+1)^2}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-3",
          "question": "The slope of the tangent line to \\(f(x) = x^2\\) at \\(x = 3\\) is",
          "options": [
            "\\(6\\)",
            "\\(9\\)",
            "\\(3\\)",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 2x\\); at \\(x = 3\\), \\(f'(3) = 6\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-4",
          "question": "The derivative of \\(f(x) = \\sqrt{x} = x^{1/2}\\) is",
          "options": [
            "\\(\\frac{1}{2\\sqrt{x}}\\)",
            "\\(\\frac{1}{2}x\\)",
            "\\(2\\sqrt{x}\\)",
            "\\(\\frac{1}{\\sqrt{x}}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "By the power rule, \\(\\frac{d}{dx}x^{1/2} = \\tfrac{1}{2}x^{-1/2} = \\frac{1}{2\\sqrt{x}}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-5",
          "question": "The equation of the tangent line to \\(f(x) = x^2\\) at \\(x = 1\\) is",
          "options": [
            "\\(y = 2x - 1\\)",
            "\\(y = 2x + 1\\)",
            "\\(y = x\\)",
            "\\(y = 2x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f(1) = 1\\), \\(f'(1) = 2\\); tangent: \\(y - 1 = 2(x - 1)\\), i.e., \\(y = 2x - 1\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-6",
          "question": "The derivative of \\(f(x) = 3\\sin x - 2\\cos x\\) is",
          "options": [
            "\\(3\\cos x + 2\\sin x\\)",
            "\\(3\\cos x - 2\\sin x\\)",
            "\\(-3\\cos x + 2\\sin x\\)",
            "\\(3\\sin x + 2\\cos x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Differentiate: \\(3\\cos x - 2(-\\sin x) = 3\\cos x + 2\\sin x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-7",
          "question": "If a function is differentiable at a point, then it is",
          "options": [
            "continuous at that point",
            "discontinuous",
            "a polynomial",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Differentiability implies continuity (though continuity does not imply differentiability).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-8",
          "question": "The derivative of \\(f(x) = \\tan x\\) is",
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
          "id": "q-u2-medium-9",
          "question": "The second derivative of \\(f(x) = x^4\\) is",
          "options": [
            "\\(12x^2\\)",
            "\\(4x^3\\)",
            "\\(24x\\)",
            "\\(x^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 4x^3\\), \\(f''(x) = 12x^2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-10",
          "question": "The derivative of \\(f(x) = 2x^3 - 5x^2 + 4\\) is",
          "options": [
            "\\(6x^2 - 10x\\)",
            "\\(6x^2 - 10x + 4\\)",
            "\\(2x^2 - 5x\\)",
            "\\(6x - 10\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Differentiate each term: \\(6x^2 - 10x + 0 = 6x^2 - 10x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-hard-1",
          "question": "The derivative of \\(f(x) = x^2\\sin x\\) is",
          "options": [
            "\\(2x\\sin x + x^2\\cos x\\)",
            "\\(2x\\cos x\\)",
            "\\(x^2\\cos x\\)",
            "\\(2x\\sin x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Product rule: \\((2x)(\\sin x) + (x^2)(\\cos x)\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-2",
          "question": "Using the definition, \\(f'(x) = \\lim_{h \\to 0}\\frac{f(x+h) - f(x)}{h}\\). For \\(f(x) = x^2\\), this gives",
          "options": [
            "\\(2x\\)",
            "\\(x\\)",
            "\\(2\\)",
            "\\(x^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{(x+h)^2 - x^2}{h} = \\frac{2xh + h^2}{h} = 2x + h \\to 2x\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-3",
          "question": "At what point does \\(f(x) = x^3 - 3x\\) have a horizontal tangent?",
          "options": [
            "\\(x = 1\\) and \\(x = -1\\)",
            "\\(x = 0\\) only",
            "\\(x = 3\\)",
            "nowhere"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 3x^2 - 3 = 0\\) gives \\(x^2 = 1\\), so \\(x = \\pm 1\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-4",
          "question": "The derivative of \\(f(x) = \\frac{\\sin x}{x}\\) is",
          "options": [
            "\\(\\frac{x\\cos x - \\sin x}{x^2}\\)",
            "\\(\\frac{\\cos x}{x}\\)",
            "\\(\\frac{\\cos x - \\sin x}{x^2}\\)",
            "\\(\\cos x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Quotient rule: \\(\\frac{(\\cos x)(x) - (\\sin x)(1)}{x^2} = \\frac{x\\cos x - \\sin x}{x^2}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-5",
          "question": "Why is \\(f(x) = |x|\\) not differentiable at \\(x = 0\\)?",
          "options": [
            "The left and right derivatives differ (a corner)",
            "it is discontinuous",
            "the limit is infinite",
            "it is a polynomial"
          ],
          "correctAnswer": 0,
          "explanation": "The slope is \\(-1\\) from the left and \\(+1\\) from the right, so the derivative does not exist at the corner.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-6",
          "question": "The derivative of \\(f(x) = e^x\\cos x\\) is",
          "options": [
            "\\(e^x(\\cos x - \\sin x)\\)",
            "\\(e^x\\cos x\\)",
            "\\(-e^x\\sin x\\)",
            "\\(e^x(\\cos x + \\sin x)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Product rule: \\(e^x\\cos x + e^x(-\\sin x) = e^x(\\cos x - \\sin x)\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-7",
          "question": "If \\(f'(x) > 0\\) on an interval, then f is",
          "options": [
            "increasing on that interval",
            "decreasing",
            "constant",
            "concave up"
          ],
          "correctAnswer": 0,
          "explanation": "A positive derivative means the function is increasing.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-8",
          "question": "The instantaneous velocity of a particle with position \\(s(t) = t^3 - 6t^2 + 9t\\) at \\(t = 1\\) is",
          "options": [
            "\\(0\\)",
            "\\(3\\)",
            "\\(9\\)",
            "\\(-3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v(t) = s'(t) = 3t^2 - 12t + 9\\); \\(v(1) = 3 - 12 + 9 = 0\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-9",
          "question": "The derivative of \\(f(x) = x^2\\ln x\\) is",
          "options": [
            "\\(2x\\ln x + x\\)",
            "\\(2x\\ln x\\)",
            "\\(x + \\ln x\\)",
            "\\(\\frac{2x}{x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Product rule: \\((2x)(\\ln x) + (x^2)(\\frac{1}{x}) = 2x\\ln x + x\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-10",
          "question": "For \\(f(x) = x^3\\), the tangent line at \\(x = 2\\) has slope",
          "options": [
            "\\(12\\)",
            "\\(8\\)",
            "\\(6\\)",
            "\\(3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 3x^2\\); \\(f'(2) = 3(4) = 12\\).",
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
          "question": "The chain rule is used to differentiate",
          "options": [
            "composite functions",
            "sums",
            "constants",
            "products only"
          ],
          "correctAnswer": 0,
          "explanation": "The chain rule differentiates composite functions f(g(x)).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-2",
          "question": "The chain rule states that \\(\\frac{d}{dx}f(g(x)) =\\)",
          "options": [
            "\\(f'(g(x))\\cdot g'(x)\\)",
            "\\(f'(g(x))\\)",
            "\\(f'(x)g'(x)\\)",
            "\\(f(g'(x))\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The chain rule: \\(\\frac{d}{dx}f(g(x)) = f'(g(x))\\cdot g'(x)\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-3",
          "question": "The derivative of \\((x^2 + 1)^3\\) is",
          "options": [
            "\\(3(x^2+1)^2 \\cdot 2x\\)",
            "\\(3(x^2+1)^2\\)",
            "\\(6x\\)",
            "\\((x^2+1)^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(3(x^2+1)^2 \\cdot \\frac{d}{dx}(x^2+1) = 3(x^2+1)^2(2x)\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-4",
          "question": "Implicit differentiation is used when",
          "options": [
            "y is not explicitly solved for in terms of x",
            "the function is a polynomial",
            "x is constant",
            "y is a constant"
          ],
          "correctAnswer": 0,
          "explanation": "Implicit differentiation handles equations where y is not isolated, like \\(x^2 + y^2 = 1\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-5",
          "question": "The derivative of \\(\\sin(2x)\\) is",
          "options": [
            "\\(2\\cos(2x)\\)",
            "\\(\\cos(2x)\\)",
            "\\(2\\sin(2x)\\)",
            "\\(-2\\cos(2x)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(\\cos(2x) \\cdot 2 = 2\\cos(2x)\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-6",
          "question": "The derivative of \\(e^{3x}\\) is",
          "options": [
            "\\(3e^{3x}\\)",
            "\\(e^{3x}\\)",
            "\\(3e^x\\)",
            "\\(e^{3}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(e^{3x} \\cdot 3 = 3e^{3x}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-7",
          "question": "The derivative of \\(\\ln(x^2)\\) is",
          "options": [
            "\\(\\frac{2}{x}\\)",
            "\\(\\frac{1}{x^2}\\)",
            "\\(\\frac{1}{2x}\\)",
            "\\(2\\ln x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(\\frac{1}{x^2}\\cdot 2x = \\frac{2}{x}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-8",
          "question": "An inverse function's derivative relates to the original by",
          "options": [
            "\\((f^{-1})'(x) = \\frac{1}{f'(f^{-1}(x))}\\)",
            "\\((f^{-1})'(x) = f'(x)\\)",
            "\\((f^{-1})'(x) = -f'(x)\\)",
            "they are unrelated"
          ],
          "correctAnswer": 0,
          "explanation": "The inverse function derivative formula is \\((f^{-1})'(x) = \\frac{1}{f'(f^{-1}(x))}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-9",
          "question": "The derivative of \\(\\cos(5x)\\) is",
          "options": [
            "\\(-5\\sin(5x)\\)",
            "\\(5\\sin(5x)\\)",
            "\\(-\\sin(5x)\\)",
            "\\(5\\cos(5x)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(-\\sin(5x)\\cdot 5 = -5\\sin(5x)\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-10",
          "question": "The derivative of \\(\\sqrt{x^2 + 1}\\) is",
          "options": [
            "\\(\\frac{x}{\\sqrt{x^2+1}}\\)",
            "\\(\\frac{1}{2\\sqrt{x^2+1}}\\)",
            "\\(2x\\)",
            "\\(\\sqrt{2x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(\\frac{1}{2\\sqrt{x^2+1}}\\cdot 2x = \\frac{x}{\\sqrt{x^2+1}}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-medium-1",
          "question": "The derivative of \\((3x + 2)^5\\) is",
          "options": [
            "\\(15(3x+2)^4\\)",
            "\\(5(3x+2)^4\\)",
            "\\(3(3x+2)^4\\)",
            "\\((3x+2)^4\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(5(3x+2)^4 \\cdot 3 = 15(3x+2)^4\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-2",
          "question": "For \\(x^2 + y^2 = 25\\), implicit differentiation gives \\(\\frac{dy}{dx} =\\)",
          "options": [
            "\\(-\\frac{x}{y}\\)",
            "\\(\\frac{x}{y}\\)",
            "\\(-\\frac{y}{x}\\)",
            "\\(\\frac{y}{x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Differentiating: \\(2x + 2y\\frac{dy}{dx} = 0\\), so \\(\\frac{dy}{dx} = -\\frac{x}{y}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-3",
          "question": "The derivative of \\(\\sin^2 x\\) is",
          "options": [
            "\\(2\\sin x\\cos x\\)",
            "\\(2\\sin x\\)",
            "\\(\\cos^2 x\\)",
            "\\(2\\cos x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(2\\sin x \\cdot \\cos x = 2\\sin x\\cos x\\) (which equals \\(\\sin 2x\\)).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-4",
          "question": "The derivative of \\(e^{x^2}\\) is",
          "options": [
            "\\(2xe^{x^2}\\)",
            "\\(e^{x^2}\\)",
            "\\(2xe^{2x}\\)",
            "\\(x^2 e^{x^2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(e^{x^2}\\cdot 2x = 2xe^{x^2}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-5",
          "question": "The derivative of \\(\\ln(\\cos x)\\) is",
          "options": [
            "\\(-\\tan x\\)",
            "\\(\\tan x\\)",
            "\\(\\frac{1}{\\cos x}\\)",
            "\\(-\\sin x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(\\frac{1}{\\cos x}\\cdot(-\\sin x) = -\\tan x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-6",
          "question": "The derivative of \\(\\arctan x\\) is",
          "options": [
            "\\(\\frac{1}{1 + x^2}\\)",
            "\\(\\frac{1}{\\sqrt{1-x^2}}\\)",
            "\\(\\frac{1}{x^2}\\)",
            "\\(\\sec^2 x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{d}{dx}\\arctan x = \\frac{1}{1 + x^2}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-7",
          "question": "For \\(xy = 4\\), implicit differentiation gives \\(\\frac{dy}{dx} =\\)",
          "options": [
            "\\(-\\frac{y}{x}\\)",
            "\\(\\frac{y}{x}\\)",
            "\\(-\\frac{x}{y}\\)",
            "\\(\\frac{4}{x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Product rule: \\(y + x\\frac{dy}{dx} = 0\\), so \\(\\frac{dy}{dx} = -\\frac{y}{x}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-8",
          "question": "The derivative of \\(\\arcsin x\\) is",
          "options": [
            "\\(\\frac{1}{\\sqrt{1 - x^2}}\\)",
            "\\(\\frac{1}{1 + x^2}\\)",
            "\\(\\frac{-1}{\\sqrt{1-x^2}}\\)",
            "\\(\\cos x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1 - x^2}}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-9",
          "question": "The derivative of \\(\\cos^3 x\\) is",
          "options": [
            "\\(-3\\cos^2 x\\sin x\\)",
            "\\(3\\cos^2 x\\)",
            "\\(-3\\sin^3 x\\)",
            "\\(3\\cos^2 x\\sin x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(3\\cos^2 x \\cdot(-\\sin x) = -3\\cos^2 x\\sin x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-10",
          "question": "The derivative of \\(\\tan(x^2)\\) is",
          "options": [
            "\\(2x\\sec^2(x^2)\\)",
            "\\(\\sec^2(x^2)\\)",
            "\\(2x\\tan(x^2)\\)",
            "\\(2\\sec^2 x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(\\sec^2(x^2)\\cdot 2x = 2x\\sec^2(x^2)\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-hard-1",
          "question": "The derivative of \\((x^2 + 1)^4(2x - 3)^3\\) requires",
          "options": [
            "the product rule and the chain rule",
            "only the power rule",
            "only the chain rule",
            "implicit differentiation"
          ],
          "correctAnswer": 0,
          "explanation": "This product of two composite functions requires the product rule, with the chain rule for each factor.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-2",
          "question": "For \\(x^2 + y^2 = 25\\), the slope of the tangent at \\((3, 4)\\) is",
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
          "id": "q-u3-hard-3",
          "question": "The derivative of \\(f(x) = e^{\\sin x}\\) is",
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
          "id": "q-u3-hard-4",
          "question": "If \\(f(x) = x^3\\) and \\(g = f^{-1}\\), then \\(g'(8) =\\)",
          "options": [
            "\\(\\frac{1}{12}\\)",
            "\\(12\\)",
            "\\(\\frac{1}{3}\\)",
            "\\(8\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f^{-1}(8) = 2\\); \\(f'(x) = 3x^2\\), \\(f'(2) = 12\\); so \\(g'(8) = \\frac{1}{12}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-5",
          "question": "The derivative of \\(\\ln(\\sqrt{x^2 + 1})\\) is",
          "options": [
            "\\(\\frac{x}{x^2 + 1}\\)",
            "\\(\\frac{1}{x^2+1}\\)",
            "\\(\\frac{2x}{x^2+1}\\)",
            "\\(\\frac{x}{\\sqrt{x^2+1}}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Rewrite as \\(\\tfrac{1}{2}\\ln(x^2+1)\\); derivative is \\(\\tfrac{1}{2}\\cdot\\frac{2x}{x^2+1} = \\frac{x}{x^2+1}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-6",
          "question": "For \\(\\sin(xy) = x\\), implicit differentiation involves differentiating \\(\\sin(xy)\\) using",
          "options": [
            "the chain rule and product rule",
            "only the power rule",
            "only the quotient rule",
            "no rules"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{d}{dx}\\sin(xy) = \\cos(xy)\\cdot\\frac{d}{dx}(xy)\\), where the inner derivative uses the product rule.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-7",
          "question": "The derivative of \\(f(x) = (2x + 1)^{10}\\) is",
          "options": [
            "\\(20(2x+1)^9\\)",
            "\\(10(2x+1)^9\\)",
            "\\(2(2x+1)^9\\)",
            "\\((2x+1)^9\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(10(2x+1)^9 \\cdot 2 = 20(2x+1)^9\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-8",
          "question": "The second derivative of \\(y\\) for \\(x^2 + y^2 = 1\\) can be found by",
          "options": [
            "differentiating \\(\\frac{dy}{dx} = -\\frac{x}{y}\\) again, using the quotient and chain rules",
            "only substitution",
            "the power rule alone",
            "it does not exist"
          ],
          "correctAnswer": 0,
          "explanation": "After finding \\(\\frac{dy}{dx}\\) implicitly, differentiate it again (using quotient/chain rules and substituting \\(\\frac{dy}{dx}\\)) to get the second derivative.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-9",
          "question": "The derivative of \\(f(x) = \\sin(\\cos x)\\) is",
          "options": [
            "\\(-\\cos(\\cos x)\\sin x\\)",
            "\\(\\cos(\\cos x)\\)",
            "\\(-\\sin(\\cos x)\\)",
            "\\(\\cos(\\sin x)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Chain rule: \\(\\cos(\\cos x)\\cdot(-\\sin x) = -\\cos(\\cos x)\\sin x\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-10",
          "question": "Logarithmic differentiation is especially useful for functions like",
          "options": [
            "\\(y = x^x\\)",
            "\\(y = x^2\\)",
            "\\(y = \\sin x\\)",
            "\\(y = 3x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "For a variable base and exponent like \\(x^x\\), taking the natural log first (logarithmic differentiation) simplifies finding the derivative.",
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
          "question": "If \\(s(t)\\) is position, then velocity is",
          "options": [
            "\\(s'(t)\\)",
            "\\(s''(t)\\)",
            "\\(\\int s\\,dt\\)",
            "\\(s(t)/t\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Velocity is the derivative of position, \\(v(t) = s'(t)\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-2",
          "question": "Acceleration is the derivative of",
          "options": [
            "velocity",
            "position",
            "displacement",
            "distance"
          ],
          "correctAnswer": 0,
          "explanation": "Acceleration is \\(a(t) = v'(t) = s''(t)\\), the derivative of velocity.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-3",
          "question": "A related rates problem involves finding",
          "options": [
            "how one rate relates to another via a common variable (usually time)",
            "an area",
            "a single derivative",
            "a limit"
          ],
          "correctAnswer": 0,
          "explanation": "Related rates connect the rates of change of related quantities, typically differentiating with respect to time.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-4",
          "question": "If a particle's velocity is positive, the particle is moving in the",
          "options": [
            "positive direction",
            "negative direction",
            "at rest",
            "accelerating only"
          ],
          "correctAnswer": 0,
          "explanation": "Positive velocity means motion in the positive direction.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-5",
          "question": "A particle is momentarily at rest when its velocity is",
          "options": [
            "zero",
            "maximum",
            "negative",
            "positive"
          ],
          "correctAnswer": 0,
          "explanation": "A particle is at rest at instants where its velocity equals zero.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-6",
          "question": "The derivative can approximate a function's change using the",
          "options": [
            "local linear (tangent line) approximation",
            "area",
            "limit",
            "integral"
          ],
          "correctAnswer": 0,
          "explanation": "The tangent line provides a local linear approximation of a function near a point.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-7",
          "question": "L'Hôpital's rule applies to limits of the form",
          "options": [
            "0/0 or ∞/∞",
            "0 · ∞ always",
            "any limit",
            "0 + 0"
          ],
          "correctAnswer": 0,
          "explanation": "L'Hôpital's rule applies to indeterminate forms 0/0 and ∞/∞.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-8",
          "question": "For position \\(s(t) = t^2\\), the velocity at \\(t = 3\\) is",
          "options": [
            "\\(6\\)",
            "\\(9\\)",
            "\\(3\\)",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v(t) = 2t\\); \\(v(3) = 6\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-9",
          "question": "Speed is the",
          "options": [
            "absolute value of velocity",
            "derivative of acceleration",
            "integral of position",
            "same as velocity always"
          ],
          "correctAnswer": 0,
          "explanation": "Speed is \\(|v(t)|\\), the magnitude of velocity.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-10",
          "question": "A particle changes direction when its velocity",
          "options": [
            "changes sign (passes through zero)",
            "is at a maximum",
            "is constant",
            "is positive"
          ],
          "correctAnswer": 0,
          "explanation": "A particle reverses direction when velocity changes sign, passing through zero.",
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
          "explanation": "\\(v(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3) = 0\\) at \\(t = 1, 3\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-2",
          "question": "A spherical balloon's volume is \\(V = \\frac{4}{3}\\pi r^3\\). \\(\\frac{dV}{dt}\\) in terms of \\(\\frac{dr}{dt}\\) is",
          "options": [
            "\\(4\\pi r^2 \\frac{dr}{dt}\\)",
            "\\(\\frac{4}{3}\\pi r^2\\)",
            "\\(4\\pi r\\frac{dr}{dt}\\)",
            "\\(\\pi r^2\\frac{dr}{dt}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Differentiate with respect to t: \\(\\frac{dV}{dt} = 4\\pi r^2\\frac{dr}{dt}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-3",
          "question": "The linear approximation of \\(f(x) = \\sqrt{x}\\) near \\(x = 4\\) gives \\(\\sqrt{4.1} \\approx\\)",
          "options": [
            "\\(2.025\\)",
            "\\(2.05\\)",
            "\\(2.1\\)",
            "\\(2.0\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f(4) = 2\\), \\(f'(4) = \\frac{1}{4}\\); \\(\\sqrt{4.1} \\approx 2 + \\frac{1}{4}(0.1) = 2.025\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-4",
          "question": "Using L'Hôpital's rule, \\(\\lim_{x \\to 0}\\frac{e^x - 1}{x} =\\)",
          "options": [
            "\\(1\\)",
            "\\(0\\)",
            "\\(\\infty\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "Form 0/0; differentiate: \\(\\lim\\frac{e^x}{1} = e^0 = 1\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-5",
          "question": "A particle's velocity is \\(v(t) = t^2 - 4\\). It is moving in the negative direction when",
          "options": [
            "\\(0 \\le t < 2\\)",
            "\\(t > 2\\)",
            "\\(t < 0\\)",
            "never"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v(t) < 0\\) when \\(t^2 < 4\\), i.e., \\(-2 < t < 2\\); for \\(t \\ge 0\\), that is \\(0 \\le t < 2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-6",
          "question": "If the radius of a circle increases at \\(2\\ \\text{cm/s}\\), the rate of area increase when \\(r = 5\\) is (\\(A = \\pi r^2\\))",
          "options": [
            "\\(20\\pi\\ \\text{cm}^2/\\text{s}\\)",
            "\\(10\\pi\\)",
            "\\(25\\pi\\)",
            "\\(4\\pi\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{dA}{dt} = 2\\pi r\\frac{dr}{dt} = 2\\pi(5)(2) = 20\\pi\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-7",
          "question": "A particle is speeding up when velocity and acceleration have",
          "options": [
            "the same sign",
            "opposite signs",
            "zero values",
            "perpendicular directions"
          ],
          "correctAnswer": 0,
          "explanation": "A particle speeds up when velocity and acceleration point in the same direction (same sign).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-8",
          "question": "Using L'Hôpital's rule, \\(\\lim_{x \\to 0}\\frac{\\sin x}{x} =\\)",
          "options": [
            "\\(1\\)",
            "\\(0\\)",
            "\\(\\infty\\)",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "Form 0/0; differentiate: \\(\\lim\\frac{\\cos x}{1} = \\cos 0 = 1\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-9",
          "question": "The total distance traveled differs from displacement because distance",
          "options": [
            "accounts for direction changes (uses |velocity|)",
            "is always smaller",
            "ignores time",
            "equals displacement always"
          ],
          "correctAnswer": 0,
          "explanation": "Total distance integrates speed \\(|v(t)|\\), accounting for back-and-forth motion, while displacement is the net change.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-10",
          "question": "A ladder slides down a wall. This is an example of a ___ problem.",
          "options": [
            "related rates",
            "optimization",
            "limit",
            "area"
          ],
          "correctAnswer": 0,
          "explanation": "The sliding ladder relates the rates of change of horizontal and vertical positions—a classic related rates problem.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-hard-1",
          "question": "A \\(10\\ \\text{m}\\) ladder slides down a wall. When the base is \\(6\\ \\text{m}\\) from the wall and moving out at \\(2\\ \\text{m/s}\\), the top moves down at",
          "options": [
            "\\(1.5\\ \\text{m/s}\\)",
            "\\(2\\ \\text{m/s}\\)",
            "\\(3\\ \\text{m/s}\\)",
            "\\(0.5\\ \\text{m/s}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(x^2 + y^2 = 100\\); at \\(x=6, y=8\\). \\(2x\\frac{dx}{dt} + 2y\\frac{dy}{dt} = 0\\): \\(6(2) + 8\\frac{dy}{dt} = 0\\), \\(\\frac{dy}{dt} = -1.5\\ \\text{m/s}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-2",
          "question": "A particle's position is \\(s(t) = t^3 - 3t^2\\). The total distance traveled from \\(t = 0\\) to \\(t = 3\\) is",
          "options": [
            "\\(8\\)",
            "\\(0\\)",
            "\\(4\\)",
            "\\(9\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v = 3t^2 - 6t = 3t(t-2)\\), zero at t=2. From 0 to 2, s goes 0 to -4 (distance 4); from 2 to 3, s goes -4 to 0 (distance 4). Total = 8.",
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
          "explanation": "Form ∞/∞; differentiate: \\(\\lim\\frac{1/x}{1} = 0\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-4",
          "question": "Water drains from a cone. This related rates problem requires relating the changing volume to the changing",
          "options": [
            "height (and radius via similar triangles)",
            "only the radius",
            "only time",
            "the surface area only"
          ],
          "correctAnswer": 0,
          "explanation": "For a draining cone, the radius and height are linked by similar triangles, so the volume rate connects to the height rate.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-5",
          "question": "The differential \\(dy\\) for \\(y = x^2\\) is",
          "options": [
            "\\(2x\\,dx\\)",
            "\\(x^2\\,dx\\)",
            "\\(2\\,dx\\)",
            "\\(x\\,dx\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(dy = f'(x)\\,dx = 2x\\,dx\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-6",
          "question": "A particle has \\(v(t) = t^2 - 4t + 3\\) and \\(a(t) = 2t - 4\\). At \\(t = 3\\), the particle is",
          "options": [
            "speeding up (v and a both positive)",
            "slowing down",
            "at rest",
            "reversing"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v(3) = 9 - 12 + 3 = 0\\)... at exactly t=3 v=0; just after, v>0 and \\(a(3)=2>0\\), so it speeds up. (v and a same sign shortly after.)",
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
          "explanation": "The tangent-line (linear) approximation is most accurate close to the point of tangency and degrades farther away.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-8",
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
          "id": "q-u4-hard-9",
          "question": "A shadow lengthens as a person walks from a lamppost. This is a related rates problem solved using",
          "options": [
            "similar triangles and differentiation",
            "integration",
            "the power rule alone",
            "a limit"
          ],
          "correctAnswer": 0,
          "explanation": "The shadow problem uses similar triangles to relate distances, then differentiates with respect to time.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-10",
          "question": "A particle moving along a line has acceleration \\(a(t) = 6t\\) and initial velocity \\(v(0) = -9\\). It is momentarily at rest when",
          "options": [
            "\\(t = \\sqrt{3}\\)",
            "\\(t = 3\\)",
            "\\(t = 9\\)",
            "\\(t = 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(v(t) = 3t^2 - 9\\); setting \\(v = 0\\): \\(3t^2 = 9\\), \\(t = \\sqrt{3}\\).",
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
          "question": "A critical point of f occurs where",
          "options": [
            "\\(f'(x) = 0\\) or f' is undefined",
            "\\(f(x) = 0\\)",
            "\\(f''(x) = 0\\)",
            "x = 0"
          ],
          "correctAnswer": 0,
          "explanation": "Critical points occur where the derivative is zero or undefined.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-2",
          "question": "If \\(f'(x) > 0\\) on an interval, f is",
          "options": [
            "increasing",
            "decreasing",
            "constant",
            "concave up"
          ],
          "correctAnswer": 0,
          "explanation": "A positive first derivative means the function is increasing.",
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
          "explanation": "A positive second derivative indicates concave up.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-4",
          "question": "A local maximum can occur where f' changes from",
          "options": [
            "positive to negative",
            "negative to positive",
            "zero to zero",
            "positive to positive"
          ],
          "correctAnswer": 0,
          "explanation": "At a local max, the function stops increasing and starts decreasing, so f' goes from + to −.",
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
          "explanation": "An inflection point is where the concavity of the graph changes.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-6",
          "question": "The absolute maximum of a continuous function on a closed interval occurs at",
          "options": [
            "a critical point or an endpoint",
            "only the middle",
            "only endpoints",
            "only critical points"
          ],
          "correctAnswer": 0,
          "explanation": "By the Extreme Value Theorem, the absolute extrema occur at critical points or endpoints.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-7",
          "question": "If \\(f'(x) < 0\\), the function is",
          "options": [
            "decreasing",
            "increasing",
            "constant",
            "concave up"
          ],
          "correctAnswer": 0,
          "explanation": "A negative first derivative means the function is decreasing.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-8",
          "question": "The second derivative test: if \\(f'(c) = 0\\) and \\(f''(c) > 0\\), then c is a",
          "options": [
            "local minimum",
            "local maximum",
            "inflection point",
            "saddle"
          ],
          "correctAnswer": 0,
          "explanation": "If f'(c)=0 and f''(c)>0 (concave up), c is a local minimum.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-9",
          "question": "Optimization problems seek to find",
          "options": [
            "maximum or minimum values",
            "limits",
            "areas",
            "derivatives only"
          ],
          "correctAnswer": 0,
          "explanation": "Optimization finds the maximum or minimum of a quantity subject to constraints.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-10",
          "question": "The Mean Value Theorem guarantees a point where the instantaneous rate equals the",
          "options": [
            "average rate of change over the interval",
            "maximum value",
            "minimum value",
            "second derivative"
          ],
          "correctAnswer": 0,
          "explanation": "The MVT guarantees a c where f'(c) equals the average rate of change over [a, b].",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-medium-1",
          "question": "For \\(f(x) = x^3 - 3x\\), the local maximum occurs at",
          "options": [
            "\\(x = -1\\)",
            "\\(x = 1\\)",
            "\\(x = 0\\)",
            "\\(x = 3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 3x^2 - 3 = 0\\) at \\(x = \\pm 1\\); f' changes + to − at \\(x = -1\\), a local max.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-2",
          "question": "For \\(f(x) = x^3\\), the inflection point is at",
          "options": [
            "\\(x = 0\\)",
            "\\(x = 1\\)",
            "\\(x = -1\\)",
            "none"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f''(x) = 6x = 0\\) at \\(x = 0\\), where concavity changes—an inflection point.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-3",
          "question": "The absolute maximum of \\(f(x) = x^2\\) on \\([-1, 3]\\) is",
          "options": [
            "\\(9\\) (at x = 3)",
            "\\(1\\)",
            "\\(0\\)",
            "\\(3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Check critical point (x=0, f=0) and endpoints: f(-1)=1, f(3)=9. Maximum is 9.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-4",
          "question": "A rectangle with perimeter 20 has maximum area when it is a",
          "options": [
            "square (5 by 5)",
            "1 by 9",
            "2 by 8",
            "long thin rectangle"
          ],
          "correctAnswer": 0,
          "explanation": "For fixed perimeter, area is maximized by a square; 5 by 5 gives area 25.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-5",
          "question": "If \\(f''(x) < 0\\), the graph is",
          "options": [
            "concave down",
            "concave up",
            "linear",
            "increasing"
          ],
          "correctAnswer": 0,
          "explanation": "A negative second derivative indicates concave down.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-6",
          "question": "For \\(f(x) = x^3 - 3x\\), the function is increasing on",
          "options": [
            "\\((-\\infty, -1)\\) and \\((1, \\infty)\\)",
            "\\((-1, 1)\\)",
            "all reals",
            "nowhere"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 3(x^2 - 1) > 0\\) when \\(|x| > 1\\), so f increases on \\((-\\infty,-1)\\) and \\((1,\\infty)\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-7",
          "question": "The first derivative test distinguishes local extrema by examining",
          "options": [
            "sign changes of f' around critical points",
            "the value of f",
            "the second derivative only",
            "the y-intercept"
          ],
          "correctAnswer": 0,
          "explanation": "The first derivative test uses the sign change of f' to classify critical points as maxima, minima, or neither.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-8",
          "question": "The Mean Value Theorem requires f to be",
          "options": [
            "continuous on [a,b] and differentiable on (a,b)",
            "a polynomial",
            "increasing",
            "constant"
          ],
          "correctAnswer": 0,
          "explanation": "The MVT requires continuity on the closed interval and differentiability on the open interval.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-9",
          "question": "A candidate for an absolute minimum on \\([0, 4]\\) for \\(f(x) = x^2 - 4x\\) is",
          "options": [
            "\\(x = 2\\) (the vertex)",
            "\\(x = 0\\)",
            "\\(x = 4\\)",
            "\\(x = 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 2x - 4 = 0\\) at \\(x = 2\\); f(2) = -4 is the minimum (below endpoints f(0)=0, f(4)=0).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-10",
          "question": "A function with \\(f'(x) = 0\\) everywhere on an interval is",
          "options": [
            "constant on that interval",
            "increasing",
            "decreasing",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "If the derivative is zero throughout, the function is constant on that interval.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-hard-1",
          "question": "An open-top box is made from a square of side 12 by cutting squares of side x from the corners. The volume is maximized when",
          "options": [
            "\\(x = 2\\)",
            "\\(x = 3\\)",
            "\\(x = 6\\)",
            "\\(x = 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(V = x(12-2x)^2\\); \\(V' = 0\\) gives \\(x = 2\\) (the valid maximizer).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-2",
          "question": "For \\(f(x) = x^4 - 4x^3\\), inflection points occur at",
          "options": [
            "\\(x = 0\\) and \\(x = 2\\)",
            "\\(x = 2\\) only",
            "\\(x = 4\\)",
            "none"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f''(x) = 12x^2 - 24x = 12x(x-2) = 0\\) at \\(x = 0, 2\\), where concavity changes.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-3",
          "question": "By the MVT, if \\(f(x) = x^2\\) on \\([0, 4]\\), the value c where \\(f'(c)\\) equals the average rate of change is",
          "options": [
            "\\(c = 2\\)",
            "\\(c = 4\\)",
            "\\(c = 0\\)",
            "\\(c = 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Average rate = \\(\\frac{16-0}{4} = 4\\); \\(f'(c) = 2c = 4\\), so \\(c = 2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-4",
          "question": "A cylindrical can of fixed volume uses minimum material when its height equals",
          "options": [
            "its diameter (h = 2r)",
            "its radius",
            "zero",
            "twice its diameter"
          ],
          "correctAnswer": 0,
          "explanation": "Minimizing surface area for fixed volume gives the optimal relationship \\(h = 2r\\) (height equals diameter).",
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
          "explanation": "When both f'(c) and f''(c) are zero, the second derivative test is inconclusive; use the first derivative test instead.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-6",
          "question": "The point on the line \\(y = x\\) closest to \\((4, 0)\\) is found by",
          "options": [
            "minimizing the distance (or its square) as a function of x",
            "maximizing distance",
            "setting y = 0",
            "taking a limit"
          ],
          "correctAnswer": 0,
          "explanation": "Minimize \\(D^2 = (x-4)^2 + x^2\\); \\(\\frac{d}{dx}(2x^2 - 8x + 16) = 4x - 8 = 0\\) gives \\(x = 2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-7",
          "question": "For \\(f(x) = x + \\frac{1}{x}\\) on \\((0, \\infty)\\), the minimum value is",
          "options": [
            "\\(2\\) (at x = 1)",
            "\\(1\\)",
            "\\(0\\)",
            "there is no minimum"
          ],
          "correctAnswer": 0,
          "explanation": "\\(f'(x) = 1 - \\frac{1}{x^2} = 0\\) at \\(x = 1\\); \\(f(1) = 2\\), a minimum.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-8",
          "question": "A function is concave up and increasing. This means",
          "options": [
            "both f' > 0 and f'' > 0",
            "f' < 0",
            "f'' < 0",
            "f is constant"
          ],
          "correctAnswer": 0,
          "explanation": "Increasing means f' > 0; concave up means f'' > 0.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-9",
          "question": "Rolle's Theorem guarantees a point where f'(c) = 0 when f is continuous, differentiable, and",
          "options": [
            "f(a) = f(b)",
            "f is increasing",
            "f(a) = 0",
            "f is a polynomial"
          ],
          "correctAnswer": 0,
          "explanation": "Rolle's Theorem (a special case of the MVT) applies when the function has equal values at the endpoints.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-10",
          "question": "To find where a curve is concave down, one solves",
          "options": [
            "\\(f''(x) < 0\\)",
            "\\(f'(x) < 0\\)",
            "\\(f(x) < 0\\)",
            "\\(f''(x) = 0\\) only"
          ],
          "correctAnswer": 0,
          "explanation": "A graph is concave down where the second derivative is negative.",
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
          "question": "The antiderivative of \\(f(x) = 2x\\) is",
          "options": [
            "\\(x^2 + C\\)",
            "\\(2x^2\\)",
            "\\(2 + C\\)",
            "\\(x^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int 2x\\,dx = x^2 + C\\).",
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
          "explanation": "The integration power rule: \\(\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-3",
          "question": "A definite integral \\(\\int_a^b f(x)\\,dx\\) represents",
          "options": [
            "the net signed area under the curve",
            "the slope",
            "the derivative",
            "the limit"
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
          "question": "A Riemann sum approximates",
          "options": [
            "the area under a curve",
            "the derivative",
            "the tangent line",
            "the limit"
          ],
          "correctAnswer": 0,
          "explanation": "Riemann sums approximate the definite integral (area) using rectangles.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-9",
          "question": "\\(\\int 3\\,dx =\\)",
          "options": [
            "\\(3x + C\\)",
            "\\(3\\)",
            "\\(0\\)",
            "\\(x^3\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The integral of a constant: \\(\\int 3\\,dx = 3x + C\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-10",
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
          "id": "q-u6-medium-1",
          "question": "\\(\\int_0^2 3x^2\\,dx =\\)",
          "options": [
            "\\(8\\)",
            "\\(12\\)",
            "\\(4\\)",
            "\\(6\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int 3x^2\\,dx = x^3\\); evaluate: \\([x^3]_0^2 = 8 - 0 = 8\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-2",
          "question": "Using u-substitution, \\(\\int 2x(x^2 + 1)^3\\,dx =\\)",
          "options": [
            "\\(\\frac{(x^2+1)^4}{4} + C\\)",
            "\\((x^2+1)^4 + C\\)",
            "\\(\\frac{(x^2+1)^3}{3}\\)",
            "\\(2x(x^2+1)^4\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Let \\(u = x^2 + 1\\), \\(du = 2x\\,dx\\); \\(\\int u^3\\,du = \\frac{u^4}{4} + C\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-3",
          "question": "\\(\\int_1^3 (2x)\\,dx =\\)",
          "options": [
            "\\(8\\)",
            "\\(6\\)",
            "\\(4\\)",
            "\\(9\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int 2x\\,dx = x^2\\); \\([x^2]_1^3 = 9 - 1 = 8\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-4",
          "question": "The FTC Part 2 states \\(\\int_a^b f(x)\\,dx =\\)",
          "options": [
            "\\(F(b) - F(a)\\), where F is an antiderivative",
            "\\(f(b) - f(a)\\)",
            "\\(f'(b) - f'(a)\\)",
            "\\(F(a) - F(b)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The FTC evaluates a definite integral as \\(F(b) - F(a)\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-5",
          "question": "\\(\\frac{d}{dx}\\int_0^x t^2\\,dt =\\)",
          "options": [
            "\\(x^2\\)",
            "\\(\\frac{x^3}{3}\\)",
            "\\(2x\\)",
            "\\(x^2 + C\\)"
          ],
          "correctAnswer": 0,
          "explanation": "By the FTC Part 1, the derivative of the accumulation function is the integrand: \\(x^2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-6",
          "question": "\\(\\int (4x^3 - 2x)\\,dx =\\)",
          "options": [
            "\\(x^4 - x^2 + C\\)",
            "\\(12x^2 - 2\\)",
            "\\(4x^4 - 2x^2\\)",
            "\\(x^4 - x^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Integrate term by term: \\(x^4 - x^2 + C\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-7",
          "question": "The average value of f on [a, b] is",
          "options": [
            "\\(\\frac{1}{b-a}\\int_a^b f(x)\\,dx\\)",
            "\\(\\int_a^b f(x)\\,dx\\)",
            "\\(f(b) - f(a)\\)",
            "\\(\\frac{f(a)+f(b)}{2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The average value of a function is \\(\\frac{1}{b-a}\\int_a^b f\\,dx\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-8",
          "question": "\\(\\int e^{2x}\\,dx =\\)",
          "options": [
            "\\(\\frac{1}{2}e^{2x} + C\\)",
            "\\(e^{2x} + C\\)",
            "\\(2e^{2x}\\)",
            "\\(\\frac{e^{2x}}{2x}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Substitute \\(u = 2x\\): \\(\\int e^{2x}\\,dx = \\frac{1}{2}e^{2x} + C\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-9",
          "question": "A left Riemann sum with increasing f generally gives an ___ of the true area.",
          "options": [
            "underestimate",
            "overestimate",
            "exact value",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "For an increasing function, using left endpoints underestimates the area.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-10",
          "question": "\\(\\int_0^\\pi \\sin x\\,dx =\\)",
          "options": [
            "\\(2\\)",
            "\\(0\\)",
            "\\(1\\)",
            "\\(\\pi\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\([-\\cos x]_0^\\pi = -\\cos\\pi + \\cos 0 = 1 + 1 = 2\\).",
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
          "explanation": "Let \\(u = x^2+1\\), \\(du = 2x\\,dx\\); \\(\\frac{1}{2}\\int u^{1/2}\\,du = \\frac{1}{2}\\cdot\\frac{2}{3}u^{3/2} = \\frac{1}{3}(x^2+1)^{3/2} + C\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-2",
          "question": "\\(\\frac{d}{dx}\\int_1^{x^2} \\sin t\\,dt =\\)",
          "options": [
            "\\(2x\\sin(x^2)\\)",
            "\\(\\sin(x^2)\\)",
            "\\(2x\\cos(x^2)\\)",
            "\\(\\sin x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "By the FTC with the chain rule: \\(\\sin(x^2)\\cdot 2x\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-3",
          "question": "The average value of \\(f(x) = x^2\\) on \\([0, 3]\\) is",
          "options": [
            "\\(3\\)",
            "\\(9\\)",
            "\\(6\\)",
            "\\(\\frac{9}{2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{1}{3}\\int_0^3 x^2\\,dx = \\frac{1}{3}\\cdot\\frac{27}{3} = \\frac{1}{3}(9) = 3\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-4",
          "question": "\\(\\int_0^1 \\frac{2x}{x^2 + 1}\\,dx =\\)",
          "options": [
            "\\(\\ln 2\\)",
            "\\(\\ln 1\\)",
            "\\(1\\)",
            "\\(2\\ln 2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Let \\(u = x^2+1\\); \\(\\int \\frac{du}{u} = \\ln|u|\\); \\([\\ln(x^2+1)]_0^1 = \\ln 2 - \\ln 1 = \\ln 2\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-5",
          "question": "A Riemann sum becomes a definite integral in the limit as",
          "options": [
            "the number of subintervals approaches infinity (width → 0)",
            "the width increases",
            "the function becomes linear",
            "x approaches a"
          ],
          "correctAnswer": 0,
          "explanation": "As the partition is refined (n → ∞, Δx → 0), the Riemann sum converges to the definite integral.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-6",
          "question": "\\(\\int \\sec^2 x\\,dx =\\)",
          "options": [
            "\\(\\tan x + C\\)",
            "\\(\\sec x + C\\)",
            "\\(-\\cot x\\)",
            "\\(\\sec x\\tan x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Since \\(\\frac{d}{dx}\\tan x = \\sec^2 x\\), \\(\\int \\sec^2 x\\,dx = \\tan x + C\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-7",
          "question": "If \\(\\int_0^4 f(x)\\,dx = 10\\) and \\(\\int_0^2 f(x)\\,dx = 3\\), then \\(\\int_2^4 f(x)\\,dx =\\)",
          "options": [
            "\\(7\\)",
            "\\(13\\)",
            "\\(3\\)",
            "\\(10\\)"
          ],
          "correctAnswer": 0,
          "explanation": "By additivity: \\(\\int_2^4 = \\int_0^4 - \\int_0^2 = 10 - 3 = 7\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-8",
          "question": "The trapezoidal rule generally gives a better area approximation than a Riemann sum because it",
          "options": [
            "uses trapezoids that better fit the curve",
            "uses fewer points",
            "ignores the endpoints",
            "is always exact"
          ],
          "correctAnswer": 0,
          "explanation": "The trapezoidal rule approximates the region with trapezoids, fitting curves better than rectangles.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-9",
          "question": "\\(\\int_0^{\\pi/2} \\cos x\\,dx =\\)",
          "options": [
            "\\(1\\)",
            "\\(0\\)",
            "\\(\\frac{\\pi}{2}\\)",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\([\\sin x]_0^{\\pi/2} = 1 - 0 = 1\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-10",
          "question": "The accumulation function \\(F(x) = \\int_0^x f(t)\\,dt\\) is increasing where",
          "options": [
            "f(x) > 0",
            "f(x) < 0",
            "f(x) = 0",
            "f is decreasing"
          ],
          "correctAnswer": 0,
          "explanation": "By the FTC, \\(F'(x) = f(x)\\); F increases where its derivative f is positive.",
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
          "question": "A differential equation is an equation involving",
          "options": [
            "a function and its derivatives",
            "only constants",
            "only integrals",
            "only limits"
          ],
          "correctAnswer": 0,
          "explanation": "A differential equation relates a function to its derivatives.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-2",
          "question": "The general solution to \\(\\frac{dy}{dx} = 2x\\) is",
          "options": [
            "\\(y = x^2 + C\\)",
            "\\(y = 2x\\)",
            "\\(y = x^2\\)",
            "\\(y = 2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Integrate: \\(y = \\int 2x\\,dx = x^2 + C\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-3",
          "question": "A slope field is a graphical representation of",
          "options": [
            "the slopes given by a differential equation at various points",
            "the solution curve only",
            "the area",
            "the derivative's derivative"
          ],
          "correctAnswer": 0,
          "explanation": "A slope field shows small line segments indicating the slope \\(\\frac{dy}{dx}\\) at grid points.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-4",
          "question": "An initial condition is used to",
          "options": [
            "find the specific value of C in a general solution",
            "create a slope field",
            "take a derivative",
            "find a limit"
          ],
          "correctAnswer": 0,
          "explanation": "An initial condition (a known point) determines the constant C, giving a particular solution.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-5",
          "question": "Exponential growth is modeled by the differential equation",
          "options": [
            "\\(\\frac{dy}{dt} = ky\\)",
            "\\(\\frac{dy}{dt} = k\\)",
            "\\(\\frac{dy}{dt} = kt\\)",
            "\\(\\frac{dy}{dt} = y^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{dy}{dt} = ky\\) (rate proportional to amount) models exponential growth/decay.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-6",
          "question": "The solution to \\(\\frac{dy}{dt} = ky\\) is",
          "options": [
            "\\(y = y_0 e^{kt}\\)",
            "\\(y = kt\\)",
            "\\(y = y_0 + kt\\)",
            "\\(y = kt^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The exponential model solution is \\(y = y_0 e^{kt}\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-7",
          "question": "Separation of variables is a technique that",
          "options": [
            "separates y and x terms to opposite sides before integrating",
            "takes the second derivative",
            "finds limits",
            "uses the chain rule"
          ],
          "correctAnswer": 0,
          "explanation": "Separation of variables rearranges the equation so each variable is on its own side, then integrates.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-8",
          "question": "For \\(\\frac{dy}{dx} = 3\\), the general solution is",
          "options": [
            "\\(y = 3x + C\\)",
            "\\(y = 3\\)",
            "\\(y = x^3\\)",
            "\\(y = 3x^2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Integrate the constant: \\(y = 3x + C\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-9",
          "question": "If \\(k < 0\\) in \\(y = y_0 e^{kt}\\), the model describes",
          "options": [
            "exponential decay",
            "exponential growth",
            "linear growth",
            "no change"
          ],
          "correctAnswer": 0,
          "explanation": "A negative k gives exponential decay.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-10",
          "question": "A particular solution is a solution that",
          "options": [
            "satisfies a given initial condition",
            "has an arbitrary constant",
            "is always y = 0",
            "is a slope field"
          ],
          "correctAnswer": 0,
          "explanation": "A particular solution has the constant determined by an initial condition.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-medium-1",
          "question": "Solve \\(\\frac{dy}{dx} = \\frac{x}{y}\\) by separation of variables. The relation is",
          "options": [
            "\\(y^2 = x^2 + C\\)",
            "\\(y = x + C\\)",
            "\\(y = x^2\\)",
            "\\(\\ln y = x\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Separate: \\(y\\,dy = x\\,dx\\); integrate: \\(\\frac{y^2}{2} = \\frac{x^2}{2} + C_1\\), so \\(y^2 = x^2 + C\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-2",
          "question": "A population grows at \\(\\frac{dP}{dt} = 0.05P\\). Its doubling time is approximately",
          "options": [
            "\\(\\frac{\\ln 2}{0.05} \\approx 13.9\\)",
            "\\(0.05\\)",
            "\\(20\\)",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Doubling: \\(2 = e^{0.05t}\\), so \\(t = \\frac{\\ln 2}{0.05} \\approx 13.9\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-3",
          "question": "The solution to \\(\\frac{dy}{dx} = 2x\\) with \\(y(0) = 3\\) is",
          "options": [
            "\\(y = x^2 + 3\\)",
            "\\(y = x^2\\)",
            "\\(y = 2x + 3\\)",
            "\\(y = x^2 + C\\)"
          ],
          "correctAnswer": 0,
          "explanation": "General: \\(y = x^2 + C\\); \\(y(0) = 3\\) gives \\(C = 3\\), so \\(y = x^2 + 3\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-4",
          "question": "In a slope field, along a horizontal line where \\(\\frac{dy}{dx}\\) depends only on x, the slopes are",
          "options": [
            "the same at all points with the same x",
            "random",
            "always zero",
            "always positive"
          ],
          "correctAnswer": 0,
          "explanation": "If the slope depends only on x, all segments at a given x-value share the same slope.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-5",
          "question": "Solve \\(\\frac{dy}{dx} = y\\) with \\(y(0) = 2\\).",
          "options": [
            "\\(y = 2e^x\\)",
            "\\(y = e^x + 1\\)",
            "\\(y = 2x\\)",
            "\\(y = x^2 + 2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Solution \\(y = Ce^x\\); \\(y(0) = 2\\) gives \\(y = 2e^x\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-6",
          "question": "A radioactive substance decays with \\(\\frac{dN}{dt} = -kN\\). This is",
          "options": [
            "exponential decay",
            "exponential growth",
            "linear decay",
            "no decay"
          ],
          "correctAnswer": 0,
          "explanation": "A negative proportional rate gives exponential decay, \\(N = N_0 e^{-kt}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-7",
          "question": "To verify that \\(y = e^{2x}\\) solves \\(\\frac{dy}{dx} = 2y\\), one checks that",
          "options": [
            "\\(2e^{2x} = 2e^{2x}\\)",
            "\\(e^{2x} = 2x\\)",
            "\\(2e^{2x} = e^{2x}\\)",
            "the equation is linear"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{dy}{dx} = 2e^{2x}\\) and \\(2y = 2e^{2x}\\); they match, confirming the solution.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-8",
          "question": "The general solution to \\(\\frac{dy}{dx} = \\cos x\\) is",
          "options": [
            "\\(y = \\sin x + C\\)",
            "\\(y = -\\sin x\\)",
            "\\(y = \\cos x + C\\)",
            "\\(y = -\\cos x + C\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Integrate: \\(y = \\int \\cos x\\,dx = \\sin x + C\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-9",
          "question": "An equilibrium solution of a differential equation is one where",
          "options": [
            "\\(\\frac{dy}{dt} = 0\\) (the solution is constant)",
            "y grows",
            "y decays",
            "y oscillates"
          ],
          "correctAnswer": 0,
          "explanation": "An equilibrium (steady-state) solution has zero rate of change, so it stays constant.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-10",
          "question": "Newton's law of cooling, \\(\\frac{dT}{dt} = -k(T - T_s)\\), predicts that an object's temperature approaches",
          "options": [
            "the surrounding temperature \\(T_s\\)",
            "absolute zero",
            "infinity",
            "its initial value"
          ],
          "correctAnswer": 0,
          "explanation": "The object's temperature exponentially approaches the ambient temperature \\(T_s\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-hard-1",
          "question": "Solve \\(\\frac{dy}{dx} = xy\\) with \\(y(0) = 1\\).",
          "options": [
            "\\(y = e^{x^2/2}\\)",
            "\\(y = e^x\\)",
            "\\(y = x^2 + 1\\)",
            "\\(y = \\frac{x^2}{2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Separate: \\(\\frac{dy}{y} = x\\,dx\\); integrate: \\(\\ln y = \\frac{x^2}{2} + C\\); with y(0)=1, \\(y = e^{x^2/2}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-2",
          "question": "The logistic differential equation \\(\\frac{dP}{dt} = kP(1 - \\frac{P}{M})\\) models growth that",
          "options": [
            "levels off at carrying capacity M",
            "grows without bound",
            "decays to zero",
            "oscillates"
          ],
          "correctAnswer": 0,
          "explanation": "The logistic model produces S-shaped growth that levels off as P approaches the carrying capacity M.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-3",
          "question": "For the logistic equation, the population grows fastest when",
          "options": [
            "\\(P = M/2\\)",
            "\\(P = M\\)",
            "\\(P = 0\\)",
            "\\(P = 2M\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The logistic growth rate is maximized at \\(P = M/2\\), the inflection point of the solution curve.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-4",
          "question": "Solve \\(\\frac{dy}{dx} = \\frac{2x}{y}\\) with \\(y(0) = 3\\).",
          "options": [
            "\\(y = \\sqrt{2x^2 + 9}\\)",
            "\\(y = 2x^2 + 3\\)",
            "\\(y = x^2 + 3\\)",
            "\\(y = \\sqrt{x^2 + 9}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Separate: \\(y\\,dy = 2x\\,dx\\); \\(\\frac{y^2}{2} = x^2 + C\\); y(0)=3 gives \\(C = 4.5\\), so \\(y^2 = 2x^2 + 9\\), \\(y = \\sqrt{2x^2+9}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-5",
          "question": "Euler's method approximates solutions to differential equations by",
          "options": [
            "taking small steps along tangent lines",
            "integrating exactly",
            "using slope fields only",
            "finding limits"
          ],
          "correctAnswer": 0,
          "explanation": "Euler's method uses the slope (derivative) to step forward in small increments, approximating the solution curve.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-6",
          "question": "For \\(\\frac{dy}{dt} = -0.1y\\), a substance's half-life is approximately",
          "options": [
            "\\(\\frac{\\ln 2}{0.1} \\approx 6.93\\)",
            "\\(0.1\\)",
            "\\(10\\)",
            "\\(0.693\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Half-life: \\(\\frac{1}{2} = e^{-0.1t}\\), so \\(t = \\frac{\\ln 2}{0.1} \\approx 6.93\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-7",
          "question": "A solution curve in a slope field follows the",
          "options": [
            "direction of the slope segments at each point",
            "x-axis",
            "steepest ascent",
            "random path"
          ],
          "correctAnswer": 0,
          "explanation": "A solution curve is tangent to the slope segments throughout the slope field.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-8",
          "question": "The equilibrium solutions of the logistic equation \\(\\frac{dP}{dt} = kP(1 - P/M)\\) are",
          "options": [
            "\\(P = 0\\) and \\(P = M\\)",
            "\\(P = M/2\\) only",
            "\\(P = M\\) only",
            "there are none"
          ],
          "correctAnswer": 0,
          "explanation": "Setting \\(\\frac{dP}{dt} = 0\\) gives \\(P = 0\\) (unstable) and \\(P = M\\) (stable carrying capacity).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-9",
          "question": "Using Euler's method with step \\(h = 0.5\\) for \\(\\frac{dy}{dx} = y\\), \\(y(0) = 1\\), the estimate for \\(y(0.5)\\) is",
          "options": [
            "\\(1.5\\)",
            "\\(1\\)",
            "\\(2\\)",
            "\\(0.5\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(y_1 = y_0 + h\\cdot f(x_0, y_0) = 1 + 0.5(1) = 1.5\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-10",
          "question": "Why does Euler's method accumulate error over many steps?",
          "options": [
            "Each step uses the tangent slope, which deviates from the true curve, and errors compound",
            "it is exact",
            "it uses integrals",
            "the slope is random"
          ],
          "correctAnswer": 0,
          "explanation": "Euler's method approximates the curve with straight tangent segments; the small errors at each step accumulate over many steps.",
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
          "question": "The area between a curve \\(y = f(x)\\) and the x-axis from a to b is",
          "options": [
            "\\(\\int_a^b f(x)\\,dx\\)",
            "\\(f(b) - f(a)\\)",
            "\\(f'(x)\\)",
            "the slope"
          ],
          "correctAnswer": 0,
          "explanation": "The area under a curve is given by the definite integral \\(\\int_a^b f(x)\\,dx\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-2",
          "question": "The area between two curves f (top) and g (bottom) is",
          "options": [
            "\\(\\int_a^b [f(x) - g(x)]\\,dx\\)",
            "\\(\\int_a^b f(x)g(x)\\,dx\\)",
            "\\(f - g\\)",
            "\\(\\int f + g\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The area between curves is the integral of (top − bottom).",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-3",
          "question": "The volume of a solid of revolution using the disk method is",
          "options": [
            "\\(\\int_a^b \\pi [R(x)]^2\\,dx\\)",
            "\\(\\int_a^b R(x)\\,dx\\)",
            "\\(\\pi R^2\\)",
            "\\(\\int 2\\pi R\\,dx\\)"
          ],
          "correctAnswer": 0,
          "explanation": "The disk method: \\(V = \\int_a^b \\pi [R(x)]^2\\,dx\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-4",
          "question": "To find the position from a velocity function, you",
          "options": [
            "integrate the velocity",
            "differentiate it",
            "take a limit",
            "find the maximum"
          ],
          "correctAnswer": 0,
          "explanation": "Position is the integral (antiderivative) of velocity.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-5",
          "question": "The net change of a quantity equals",
          "options": [
            "the integral of its rate of change",
            "the derivative",
            "the maximum value",
            "the slope"
          ],
          "correctAnswer": 0,
          "explanation": "The net change theorem: net change is the integral of the rate of change.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-6",
          "question": "The displacement of a particle from \\(t = a\\) to \\(t = b\\) is",
          "options": [
            "\\(\\int_a^b v(t)\\,dt\\)",
            "\\(\\int_a^b |v(t)|\\,dt\\)",
            "\\(v(b) - v(a)\\)",
            "\\(v'(t)\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Displacement is the integral of velocity (signed).",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-7",
          "question": "The total distance traveled is",
          "options": [
            "\\(\\int_a^b |v(t)|\\,dt\\)",
            "\\(\\int_a^b v(t)\\,dt\\)",
            "\\(v(b) - v(a)\\)",
            "the displacement"
          ],
          "correctAnswer": 0,
          "explanation": "Total distance integrates speed \\(|v(t)|\\), accounting for direction changes.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-8",
          "question": "The average value of a function equals the total accumulation divided by",
          "options": [
            "the length of the interval",
            "the maximum",
            "the derivative",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Average value = \\(\\frac{1}{b-a}\\int_a^b f\\,dx\\); the integral divided by the interval length.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-9",
          "question": "The washer method finds the volume of a solid with",
          "options": [
            "a hole (region between two radii)",
            "no hole",
            "a triangular base",
            "a square cross-section"
          ],
          "correctAnswer": 0,
          "explanation": "The washer method handles solids of revolution with a hole: \\(V = \\int \\pi(R^2 - r^2)\\,dx\\).",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-10",
          "question": "To find accumulated water from an inflow rate \\(r(t)\\), you compute",
          "options": [
            "\\(\\int r(t)\\,dt\\)",
            "\\(r'(t)\\)",
            "\\(r(t)/t\\)",
            "the maximum of r"
          ],
          "correctAnswer": 0,
          "explanation": "Total accumulation is the integral of the rate: \\(\\int r(t)\\,dt\\).",
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
          "explanation": "\\(\\int_0^1 (x - x^2)\\,dx = [\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\frac{1}{6}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-2",
          "question": "The volume when \\(y = x^2\\) from 0 to 2 is revolved about the x-axis (disk method) is",
          "options": [
            "\\(\\frac{32\\pi}{5}\\)",
            "\\(8\\pi\\)",
            "\\(\\frac{8\\pi}{3}\\)",
            "\\(4\\pi\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(V = \\int_0^2 \\pi(x^2)^2\\,dx = \\pi\\int_0^2 x^4\\,dx = \\pi\\cdot\\frac{32}{5} = \\frac{32\\pi}{5}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-3",
          "question": "A particle has velocity \\(v(t) = t - 2\\). Its displacement from \\(t = 0\\) to \\(t = 4\\) is",
          "options": [
            "\\(0\\)",
            "\\(4\\)",
            "\\(8\\)",
            "\\(-2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int_0^4 (t-2)\\,dt = [\\frac{t^2}{2} - 2t]_0^4 = 8 - 8 = 0\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-4",
          "question": "For that same particle (\\(v = t - 2\\)), the total distance from 0 to 4 is",
          "options": [
            "\\(4\\)",
            "\\(0\\)",
            "\\(8\\)",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "v < 0 on [0,2] and > 0 on [2,4]. Each part has area 2, so total distance = 2 + 2 = 4.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-5",
          "question": "If water flows in at \\(r(t) = 2t\\) L/min for the first 5 min, the total volume added is",
          "options": [
            "\\(25\\ \\text{L}\\)",
            "\\(10\\ \\text{L}\\)",
            "\\(50\\ \\text{L}\\)",
            "\\(5\\ \\text{L}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int_0^5 2t\\,dt = [t^2]_0^5 = 25\\ \\text{L}\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-6",
          "question": "The volume by revolving the region between \\(y = x\\) and \\(y = x^2\\) requires the",
          "options": [
            "washer method (region between two curves)",
            "disk method",
            "shell of constant radius",
            "no integration"
          ],
          "correctAnswer": 0,
          "explanation": "Revolving a region bounded by two curves creates a solid with a hole, requiring the washer method.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-7",
          "question": "The area under \\(y = \\sin x\\) from 0 to \\(\\pi\\) is",
          "options": [
            "\\(2\\)",
            "\\(0\\)",
            "\\(\\pi\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int_0^\\pi \\sin x\\,dx = [-\\cos x]_0^\\pi = 2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-8",
          "question": "If a car's velocity is \\(v(t) = 3t^2\\), the distance traveled in the first 2 s is",
          "options": [
            "\\(8\\)",
            "\\(12\\)",
            "\\(6\\)",
            "\\(4\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int_0^2 3t^2\\,dt = [t^3]_0^2 = 8\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-9",
          "question": "The average value of \\(f(x) = x\\) on \\([0, 4]\\) is",
          "options": [
            "\\(2\\)",
            "\\(4\\)",
            "\\(8\\)",
            "\\(1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{1}{4}\\int_0^4 x\\,dx = \\frac{1}{4}\\cdot 8 = 2\\).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-10",
          "question": "To find the area between curves that intersect, you first",
          "options": [
            "find the points of intersection (limits of integration)",
            "take a derivative",
            "find the maximum",
            "use a slope field"
          ],
          "correctAnswer": 0,
          "explanation": "The intersection points determine the bounds of the region and thus the limits of integration.",
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
          "explanation": "They intersect at 0 and 2; \\(\\int_0^2 (2x - x^2)\\,dx = [x^2 - \\frac{x^3}{3}]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-2",
          "question": "The volume of the solid formed by revolving \\(y = \\sqrt{x}\\) from 0 to 4 about the x-axis is",
          "options": [
            "\\(8\\pi\\)",
            "\\(16\\pi\\)",
            "\\(4\\pi\\)",
            "\\(\\frac{32\\pi}{5}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(V = \\pi\\int_0^4 (\\sqrt{x})^2\\,dx = \\pi\\int_0^4 x\\,dx = \\pi\\cdot 8 = 8\\pi\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-3",
          "question": "A solid has a base that is the region under \\(y = x\\) from 0 to 2, with square cross-sections perpendicular to the x-axis. Its volume is",
          "options": [
            "\\(\\frac{8}{3}\\)",
            "\\(4\\)",
            "\\(8\\)",
            "\\(2\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Cross-section area = (side)² = \\(x^2\\); \\(V = \\int_0^2 x^2\\,dx = \\frac{8}{3}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-4",
          "question": "A particle's acceleration is \\(a(t) = 6t\\), with \\(v(0) = 0\\) and \\(s(0) = 0\\). Its position at \\(t = 2\\) is",
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
          "question": "If water flows out of a tank at rate \\(r(t) = 4t\\) and in at \\(6\\), the net change in volume over \\([0, 3]\\) is",
          "options": [
            "\\(0\\)",
            "\\(18\\)",
            "\\(-18\\)",
            "\\(9\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Net rate = \\(6 - 4t\\); \\(\\int_0^3 (6 - 4t)\\,dt = [6t - 2t^2]_0^3 = 18 - 18 = 0\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-6",
          "question": "The washer method volume revolving the region between \\(y = x\\) and \\(y = x^2\\) about the x-axis uses",
          "options": [
            "\\(\\int_0^1 \\pi(x^2 - x^4)\\,dx\\)",
            "\\(\\int_0^1 \\pi(x - x^2)\\,dx\\)",
            "\\(\\int_0^1 \\pi x^2\\,dx\\)",
            "\\(\\int_0^1 (x - x^2)\\,dx\\)"
          ],
          "correctAnswer": 0,
          "explanation": "Outer radius x, inner radius x²: \\(V = \\pi\\int_0^1 [(x)^2 - (x^2)^2]\\,dx = \\pi\\int_0^1 (x^2 - x^4)\\,dx\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-7",
          "question": "The accumulated change in a quantity Q with \\(Q'(t)\\) known and \\(Q(0)\\) given is found by",
          "options": [
            "\\(Q(t) = Q(0) + \\int_0^t Q'(s)\\,ds\\)",
            "\\(Q(t) = Q'(t)\\)",
            "\\(Q(t) = Q(0)\\)",
            "differentiating"
          ],
          "correctAnswer": 0,
          "explanation": "By the net change theorem, \\(Q(t) = Q(0) + \\int_0^t Q'(s)\\,ds\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-8",
          "question": "The average value of \\(f(x) = \\sin x\\) on \\([0, \\pi]\\) is",
          "options": [
            "\\(\\frac{2}{\\pi}\\)",
            "\\(\\frac{1}{\\pi}\\)",
            "\\(1\\)",
            "\\(\\frac{\\pi}{2}\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\frac{1}{\\pi}\\int_0^\\pi \\sin x\\,dx = \\frac{1}{\\pi}(2) = \\frac{2}{\\pi}\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-9",
          "question": "The region under \\(y = e^x\\) from 0 to 1 has area",
          "options": [
            "\\(e - 1\\)",
            "\\(e\\)",
            "\\(1\\)",
            "\\(e + 1\\)"
          ],
          "correctAnswer": 0,
          "explanation": "\\(\\int_0^1 e^x\\,dx = [e^x]_0^1 = e - 1\\).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-10",
          "question": "A particle's velocity is \\(v(t) = \\cos t\\). Over \\([0, 2\\pi]\\), its displacement is ___ and total distance is ___.",
          "options": [
            "0; 4",
            "4; 0",
            "2; 2",
            "0; 0"
          ],
          "correctAnswer": 0,
          "explanation": "Displacement \\(= \\int_0^{2\\pi}\\cos t\\,dt = 0\\); total distance \\(= \\int_0^{2\\pi}|\\cos t|\\,dt = 4\\).",
          "difficulty": "hard"
        }
      ]
    }
  ]
}
