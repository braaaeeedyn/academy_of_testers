import type { SubjectUnitOverview, UnitOverview } from './types'
import { subunit } from './parseRawOverview'

/** Shared unit definitions for AP Calculus AB and BC. AB uses units 1,8; BC uses units 1,10. */
const CALC_UNITS: UnitOverview[] = [
  {
    unitNumber: 1,
    title: 'Limits and Continuity',
    subunits: [
      subunit(
        '1-0',
        'Unit Overview: Limits and Continuity',
        'Limits describe what a function approaches as the input approaches a specific value. Rather than focusing on plugging a number in directly, limits analyze behavior arbitrarily close to that number. This idea becomes the foundation of derivatives and integrals later in calculus.\n\n' +
          'Continuity builds on limits. A function is continuous if it has no breaks, jumps, or infinite behavior. In this unit, we connect algebraic, graphical, and numerical methods to understand how functions behave near important values.',
        ['Limits describe behavior as the input approaches a value.', 'Continuity means no breaks, jumps, or infinite behavior.', 'Algebraic, graphical, and numerical methods all support understanding limits.'],
        {
          exampleCode: `\\lim_{x\\to 2}(3x+1) = 3(2)+1 = 6+1 = 7`,
          exampleLanguage: 'latex',
          exampleExplanation: 'For polynomials, direct substitution gives the limit. Here the limit as \\(x\\) approaches 2 is 7.',
        }
      ),
      subunit(
        '1-1',
        'Concept of a Limit & Limit Notation',
        'A limit asks: what value does f(x) approach as x approaches a number? The function does not need to be defined at that number for the limit to exist. We often compare left-hand and right-hand behavior.\n\n' +
          'For a two-sided limit to exist, both one-sided limits must match.',
        ['Limits describe what f(x) approaches as x approaches a value.', 'The function need not be defined at that point.', 'The two-sided limit exists only if left-hand and right-hand limits are equal.'],
        {
          exampleCode: `f(x) = \\begin{cases} x+1 & x<2 \\\\ 5 & x\\ge 2 \\end{cases}
\\\\
\\lim_{x\\to 2^-} f(x) = 2+1 = 3,\\quad \\lim_{x\\to 2^+} f(x) = 5
\\\\
\\text{Since } 3\\neq 5,\\ \\lim_{x\\to 2} f(x) \\text{ does not exist.}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'When the left-hand and right-hand limits differ, the two-sided limit does not exist.',
        }
      ),
      subunit(
        '1-2',
        'Estimating Limits (Graphs, Tables, Multiple Representations)',
        "Sometimes substitution doesn't work directly, especially if it leads to an indeterminate form. In those cases, we can estimate using values near the target input.",
        ['When direct substitution gives 0/0 or other indeterminate forms, estimate using nearby values.', 'Tables and graphs can show the value the function approaches.', 'Values from both sides should approach the same number for the limit to exist.'],
        {
          exampleCode: `f(x) = \\frac{x^2-1}{x-1}
\\\\
\\text{Values near } x=1:\\quad f(0.9) = \\frac{0.81-1}{-0.1} = 1.9,\\quad f(1.1) = \\frac{0.21}{0.1} = 2.1
\\\\
\\lim_{x\\to 1} \\frac{x^2-1}{x-1} = 2`,
          exampleLanguage: 'latex',
          exampleExplanation: 'A numerical table shows the limit is 2 even though \\(f(1)\\) is undefined.',
        }
      ),
      subunit(
        '1-3',
        'Algebraic Properties of Limits',
        'We can separate limits across addition, subtraction, multiplication, and division (as long as denominators do not go to zero).',
        ['Limits can be split over sums, differences, constant multiples, and products.', 'The limit of a quotient is the quotient of the limits when the denominator limit is nonzero.', 'These properties allow breaking complex limits into simpler pieces.'],
        {
          exampleCode: `\\lim_{x\\to 3}(2x^2-5x+4) = 2\\lim_{x\\to 3} x^2 - 5\\lim_{x\\to 3} x + 4
\\\\
= 2(9) - 5(3) + 4 = 18 - 15 + 4 = 7`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Using the sum, difference, and constant-multiple properties, we evaluate each part and combine.',
        }
      ),
      subunit(
        '1-4',
        'Algebraic Manipulation & The Squeeze Theorem',
        "If substitution gives 0/0 we simplify, for example by factoring, rationalizing, or using the squeeze theorem. When a function is trapped between two others that have the same limit, it must have that limit too.",
        ['Indeterminate form 0/0 often can be resolved by factoring, canceling, or rationalizing.', 'The Squeeze Theorem: if g(x) ≤ f(x) ≤ h(x) and lim g = lim h = L, then lim f = L.', 'Use the squeeze theorem when direct substitution or algebra is not enough.'],
        {
          exampleCode: `\\text{Factoring: } \\lim_{x\\to 2} \\frac{x^2-4}{x-2} = \\lim_{x\\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x\\to 2}(x+2) = 4
\\\\
\\text{Squeeze: } -1\\le \\sin x \\le 1 \\Rightarrow -x\\le x\\sin x\\le x,\\ \\lim_{x\\to 0}(-x)=\\lim_{x\\to 0} x = 0 \\Rightarrow \\lim_{x\\to 0} x\\sin x = 0`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Factoring removes the zero in the denominator. The squeeze theorem bounds \\(x\\sin x\\) by functions whose limits are 0.',
        }
      ),
      subunit(
        '1-5',
        'Types of Discontinuities',
        'Discontinuities occur when continuity fails, jump, removable, or infinite. Identifying the type helps you describe behavior and decide whether a limit exists.',
        ['Jump discontinuity: left-hand and right-hand limits exist but are not equal.', 'Removable discontinuity: the limit exists but does not equal the function value (or the function is undefined there).', 'Infinite discontinuity: the function grows without bound (vertical asymptote).'],
        {
          exampleCode: `f(x) = \\begin{cases} 2 & x<1 \\\\ 5 & x\\ge 1 \\end{cases}
\\\\
\\lim_{x\\to 1^-} f(x) = 2,\\quad \\lim_{x\\to 1^+} f(x) = 5
\\\\
\\text{Since they differ, this is a jump discontinuity.}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'At \\(x=1\\) the function jumps from 2 to 5, so the two-sided limit does not exist.',
        }
      ),
      subunit(
        '1-6',
        'Continuity at a Point and Over an Interval',
        'A function is continuous at x = a if: (1) f(a) exists, (2) lim f(x) as x→a exists, and (3) they are equal. Over an interval, continuity means continuity at every point in that interval.',
        ['Continuity at a point requires f(a), lim f(x), and their equality.', 'On a closed interval [a,b], continuity means at every point in the interval.', 'Polynomials, rational functions (where defined), and many basic functions are continuous on their domains.'],
        {
          exampleCode: `f(x) = \\begin{cases} x^2 & x\\neq 2 \\\\ 4 & x=2 \\end{cases}
\\\\
\\lim_{x\\to 2} x^2 = 4,\\quad f(2)=4
\\\\
\\text{The limit equals the function value, so } f \\text{ is continuous at } 2.`,
          exampleLanguage: 'latex',
          exampleExplanation: 'All three conditions hold: \\(f(2)\\) exists, the limit exists, and they are equal.',
        }
      ),
      subunit(
        '1-7',
        'Removing Discontinuities',
        'If a limit exists but the function value does not match (or is undefined), we can often redefine the function at that point to make it continuous. This is "removing" a removable discontinuity.',
        ['When lim f(x) exists but f(a) is undefined or not equal to the limit, the discontinuity is removable.', 'Define or redefine f(a) = lim f(x) to make the function continuous at a.', 'Factor and cancel common factors to find the limit used for the new value.'],
        {
          exampleCode: `f(x) = \\frac{x^2-9}{x-3} = \\frac{(x-3)(x+3)}{x-3} = x+3 \\quad (x\\neq 3)
\\\\
\\lim_{x\\to 3} f(x) = 6.\\quad \\text{Define } f(3)=6 \\text{ to make } f \\text{ continuous.}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'After canceling, the limit is 6. Defining \\(f(3)=6\\) removes the discontinuity.',
        }
      ),
      subunit(
        '1-8',
        'Infinite Limits & Vertical Asymptotes',
        'If the denominator approaches 0 and the numerator is nonzero, the function may grow without bound. Such behavior is described by infinite limits and corresponds to vertical asymptotes.',
        ['When the denominator → 0 and the numerator does not, the limit may be ∞ or -∞.', 'One-sided limits can differ: from the left and right you may get different infinities.', 'The line x = a is a vertical asymptote when the limit (from at least one side) is ∞ or -∞.'],
        {
          exampleCode: `\\lim_{x\\to 0^+} \\frac{1}{x}
\\\\
\\text{As } x\\to 0^+:\\quad \\frac{1}{0.1}=10,\\ \\frac{1}{0.01}=100,\\ \\frac{1}{0.001}=1000
\\\\
\\Rightarrow \\lim_{x\\to 0^+} \\frac{1}{x} = \\infty.\\quad \\text{Vertical asymptote at } x=0.`,
          exampleLanguage: 'latex',
          exampleExplanation: 'As \\(x\\) approaches 0 from the right, \\(1/x\\) grows without bound, so the limit is \\(\\infty\\).',
        }
      ),
      subunit(
        '1-9',
        'Limits at Infinity & Horizontal Asymptotes',
        'For rational functions, the limit as x → ∞ or x → -∞ is determined by the highest-degree terms. When the limit is a finite number L, the line y = L is a horizontal asymptote.',
        ['For rational functions, divide numerator and denominator by the highest power of x.', 'As x → ∞, terms like 1/xⁿ → 0; the limit is the ratio of the leading coefficients.', 'Horizontal asymptotes describe end behavior: y = L when lim f(x) = L as x → ∞ or x → -∞.'],
        {
          exampleCode: `\\lim_{x\\to \\infty} \\frac{5x^2+3}{2x^2-1} = \\lim_{x\\to \\infty} \\frac{5+3/x^2}{2-1/x^2} = \\frac{5}{2}
\\\\
\\text{Horizontal asymptote: } y = \\frac{5}{2}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The leading terms dominate; the limit is the ratio of the leading coefficients.',
        }
      ),
      subunit(
        '1-10',
        'Intermediate Value Theorem',
        'If a function is continuous on a closed interval [a,b], it takes every value between f(a) and f(b). So if k is between f(a) and f(b), there is at least one c in (a,b) such that f(c) = k.',
        ['IVT requires continuity on [a,b] and a value k between f(a) and f(b).', 'Conclusion: there exists c in (a,b) with f(c) = k.', 'Used to show roots exist, to justify solutions, and to reason about ranges.'],
        {
          exampleCode: `f(x) = x^3 - x \\text{ on } [0,2]
\\\\
f(0)=0,\\quad f(2)=8-2=6
\\\\
\\text{Since } f \\text{ is continuous and } 3 \\in (0,6),\\ \\exists\\ c\\in (0,2) \\text{ with } f(c)=3.`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The IVT guarantees that the continuous function attains every value between 0 and 6, including 3.',
        }
      ),
    ],
  },
  {
    unitNumber: 2,
    title: 'Fundamentals of Differentiation',
    subunits: [
      subunit(
        '2-0',
        'Unit Overview: Differentiation',
        'Differentiation formalizes the idea of instantaneous change. While limits describe what a function approaches, derivatives describe how fast a function is changing at a specific point. This allows us to measure velocity, growth rates, sensitivity, and optimization.\n\n' +
          'The derivative is defined using a limit of a difference quotient. In this unit, we move from the conceptual definition of rate of change to powerful rules that make differentiation efficient and systematic. Once you know the definition and the basic rules, you can differentiate a wide variety of functions without returning to the limit every time.',
        ['The derivative measures instantaneous rate of change.', 'It is defined as the limit of the difference quotient as \\(h\\to 0\\).', 'Differentiation rules (power, product, quotient, chain) make finding derivatives systematic.'],
        {
          exampleCode: `f'(x) = \\lim_{h\\to 0} \\frac{f(x+h)-f(x)}{h}
\\\\
\\text{This limit, when it exists, is the slope of the tangent line to } y=f(x) \\text{ at } x.`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The core definition: the derivative is the limit of the average rate of change over smaller and smaller intervals, giving the instantaneous rate at \\(x\\).',
        }
      ),
      subunit(
        '2-1',
        'Average & Instantaneous Rates of Change',
        'The average rate of change measures how much a function changes over an interval. It is the slope of the secant line between two points: \\(\\frac{f(b)-f(a)}{b-a}\\). This is the same idea as "rise over run" between two points on the graph.\n\n' +
          'The instantaneous rate of change is the slope at a single point; this becomes the derivative and represents the slope of the tangent line. As the interval shrinks to a point, the secant line approaches the tangent line, and the average rate approaches the instantaneous rate.\n\n' +
          'In applications, average rate might be "miles per hour over a trip"; instantaneous rate is "speed at this moment" (what the speedometer reads).',
        ['Average rate of change = slope of secant line = \\(\\frac{f(b)-f(a)}{b-a}\\).', 'Instantaneous rate of change = derivative = slope of tangent line.', 'The derivative is the limit of average rates as the interval shrinks to a point.'],
        {
          exampleCode: `\\text{Example 1 (Average): } f(x)=x^2 \\text{ on } [1,3]
\\\\
\\frac{f(3)-f(1)}{3-1} = \\frac{9-1}{2} = 4
\\\\
\\text{Example 2 (Instantaneous): } f'(x)=2x \\Rightarrow f'(3)=6
\\\\
\\text{Extra: On } [2,4],\\ \\frac{f(4)-f(2)}{4-2} = \\frac{16-4}{2} = 6 \\text{ (average); } f'(3)=6 \\text{ (instantaneous at midpoint).}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Average rate on \\([1,3]\\) is 4; the instantaneous rate at \\(x=3\\) is 6. On \\([2,4]\\), the average rate equals the instantaneous rate at the midpoint \\(x=3\\), a useful pattern for quadratic functions.',
        }
      ),
      subunit(
        '2-2',
        'Definition of the Derivative & Notation',
        'The derivative is defined using the limit of the difference quotient. It measures how a function changes as \\(h\\to 0\\). Several notations exist: \\(f\'(x)\\) (prime notation), \\(\\frac{dy}{dx}\\) (Leibniz), or \\(D_x f(x)\\) (operator notation).\n\n' +
          'Using the definition strengthens conceptual understanding before applying rules. On the exam, you may be asked to find a derivative from the limit definition; expanding, simplifying, and then taking the limit is the standard approach. Once the limit is taken, the result is a new function, the derivative.',
        ['\\(f\'(x) = \\lim_{h\\to 0} \\frac{f(x+h)-f(x)}{h}\\) when the limit exists.', 'Notation: \\(f\'(x)\\), \\(\\frac{dy}{dx}\\), \\(D_x f\\).', 'Expand, simplify, then take the limit; often \\(h\\) cancels before substituting \\(h=0\\).'],
        {
          exampleCode: `f(x)=x^2 \\Rightarrow f'(x) = \\lim_{h\\to 0} \\frac{(x+h)^2 - x^2}{h}
\\\\
= \\lim_{h\\to 0} \\frac{x^2+2xh+h^2-x^2}{h} = \\lim_{h\\to 0} \\frac{2xh+h^2}{h}
\\\\
= \\lim_{h\\to 0} (2x+h) = 2x
\\\\
\\text{Extra: } f(x)=x^3 \\Rightarrow f'(x)=\\lim_{h\\to 0}\\frac{(x+h)^3-x^3}{h} = \\lim_{h\\to 0}(3x^2+3xh+h^2)=3x^2`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Expanding \\((x+h)^2\\) and canceling \\(h\\) removes the indeterminate form; then \\(h\\to 0\\) gives \\(2x\\). The same process for \\(x^3\\) yields \\(3x^2\\), foreshadowing the power rule.',
        }
      ),
      subunit(
        '2-3',
        'Estimating Derivatives from Graphs & Tables',
        'When an explicit formula is not available, derivatives can be estimated using nearby values. We approximate the slope of the tangent line using a small difference quotient: \\(\\frac{f(x+h)-f(x)}{h}\\) or \\(\\frac{f(x)-f(x-h)}{h}\\) for small \\(h\\).\n\n' +
          'From a table, choose two points close to the point of interest and compute the slope between them. From a graph, sketch the tangent line and estimate its slope using two points on that line. The smaller \\(h\\) is, the better the approximation, but in practice, very small \\(h\\) can lead to rounding error.',
        ['Use \\(\\frac{f(x+h)-f(x)}{h}\\) or symmetric difference \\(\\frac{f(x+h)-f(x-h)}{2h}\\) for small \\(h\\).', 'From tables: pick two nearby \\(x\\) values and compute slope.', 'The exact derivative is the limit of these approximations as \\(h\\to 0\\).'],
        {
          exampleCode: `f(x)=x^3,\\ \\text{estimate } f'(2)
\\\\
\\frac{f(2.01)-f(2)}{0.01} = \\frac{8.120601-8}{0.01} = 12.0601
\\\\
\\text{Exact: } f'(x)=3x^2 \\Rightarrow f'(2)=12.\\quad \\text{Close.}
\\\\
\\text{Extra (symmetric): } \\frac{f(2.01)-f(1.99)}{0.02} = \\frac{8.120601-7.880599}{0.02} \\approx 12`,
          exampleLanguage: 'latex',
          exampleExplanation: 'A one-sided difference with \\(h=0.01\\) gives about 12.06; the symmetric difference often gives an even better estimate. The exact value is 12.',
        }
      ),
      subunit(
        '2-4',
        'Differentiability and Continuity',
        'If a function is differentiable at a point, it must be continuous there. However, continuity does not guarantee differentiability. Corners, cusps, and vertical tangents prevent differentiability because the limit of the difference quotient fails to exist (or is infinite).\n\n' +
          'At a corner, the left-hand and right-hand limits of the difference quotient differ. At a cusp, both one-sided "slopes" may go to \\(\\pm\\infty\\) in opposite ways. A vertical tangent means the derivative is infinite. Knowing these cases helps you identify where \\(f\'\\) does not exist.',
        ['Differentiable \\(\\Rightarrow\\) continuous; continuous \\(\\not\\Rightarrow\\) differentiable.', 'Corners and cusps: left and right derivatives differ or are infinite.', 'Vertical tangent: limit of difference quotient is \\(\\infty\\) or \\(-\\infty\\).'],
        {
          exampleCode: `f(x)=|x| \\text{ at } x=0
\\\\
\\lim_{h\\to 0^-} \\frac{|h|}{h} = \\lim_{h\\to 0^-} \\frac{-h}{h} = -1
\\\\
\\lim_{h\\to 0^+} \\frac{|h|}{h} = \\lim_{h\\to 0^+} \\frac{h}{h} = 1
\\\\
\\text{Since } -1 \\neq 1,\\ f'(0) \\text{ does not exist.}
\\\\
\\text{Extra: } g(x)=x^{2/3} \\text{ has a cusp at } 0; \\text{ both sides give } \\pm\\infty.`,
          exampleLanguage: 'latex',
          exampleExplanation: 'For \\(|x|\\), the left derivative is \\(-1\\) and the right derivative is \\(1\\), so there is no single tangent slope at 0.',
        }
      ),
      subunit(
        '2-5',
        'Basic Derivative Rules (Power, Constant, Sum, Difference, Constant Multiple)',
        'These rules allow us to differentiate efficiently without the limit definition every time. The power rule: \\(\\frac{d}{dx}x^n = nx^{n-1}\\). Constants pull out; sums and differences are differentiated term by term.\n\n' +
          'Combined with the constant-multiple rule \\(\\frac{d}{dx}[c\\,f(x)] = c\\,f\'(x)\\), you can differentiate any polynomial quickly. Always reduce powers and combine like terms after differentiating.',
        ['Power rule: \\(\\frac{d}{dx}x^n = nx^{n-1}\\).', 'Sum/difference: \\((f\\pm g)\' = f\' \\pm g\'\\). Constant multiple: \\((cf)\' = cf\'\\).', 'Apply to each term of a polynomial; then simplify.'],
        {
          exampleCode: `\\frac{d}{dx}(4x^5) = 4\\cdot 5x^4 = 20x^4
\\\\
\\frac{d}{dx}(3x^3 - 2x + 7) = 9x^2 - 2
\\\\
\\text{Extra: } \\frac{d}{dx}(-x^4 + 2x^2 - 5) = -4x^3 + 4x`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Constant multiple and power rule for the first; sum and power rules for the polynomial. The derivative of a constant is 0.',
        }
      ),
      subunit(
        '2-6',
        'Derivatives of Trig, Exponential, and Log Functions',
        'These functions follow specific derivative patterns that you should memorize: \\(\\frac{d}{dx}\\sin x = \\cos x\\), \\(\\frac{d}{dx}\\cos x = -\\sin x\\), \\(\\frac{d}{dx}e^x = e^x\\), and \\(\\frac{d}{dx}\\ln x = \\frac{1}{x}\\) (for \\(x>0\\)).\n\n' +
          'Together with the constant-multiple and sum rules, you can differentiate sums and constant multiples of these functions. The fact that \\(e^x\\) is its own derivative is central to exponential growth and differential equations.',
        ['\\(\\frac{d}{dx}\\sin x = \\cos x\\), \\(\\frac{d}{dx}\\cos x = -\\sin x\\).', '\\(\\frac{d}{dx}e^x = e^x\\), \\(\\frac{d}{dx}\\ln x = \\frac{1}{x}\\) for \\(x>0\\).', 'Combine with sum and constant-multiple rules.'],
        {
          exampleCode: `\\frac{d}{dx}(5e^x + 3\\sin x) = 5e^x + 3\\cos x
\\\\
\\frac{d}{dx}(\\ln x^2) = \\frac{d}{dx}(2\\ln x) = \\frac{2}{x}
\\\\
\\text{Extra: } \\frac{d}{dx}(4\\cos x - 2e^x + \\ln x) = -4\\sin x - 2e^x + \\frac{1}{x}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'First: constant multiple and sum. Second: rewrite \\(\\ln x^2 = 2\\ln x\\) then differentiate. The extra example combines all three function types.',
        }
      ),
      subunit(
        '2-7',
        'Product and Quotient Rules',
        'When multiplying or dividing functions, special rules apply. Product rule: \\((fg)\' = f\'g + fg\'\\). Quotient rule: \\(\\big(\\frac{f}{g}\\big)\' = \\frac{f\'g - fg\'}{g^2}\\). Memorize both; the quotient rule is easy to misremember (order of numerator: derivative of top times bottom minus top times derivative of bottom).\n\n' +
          'For products of three or more functions, apply the product rule repeatedly or group terms. For quotients, identify top and bottom clearly and apply the formula; then simplify.',
        ['Product rule: \\((fg)\' = f\'g + fg\'\\).', 'Quotient rule: \\(\\big(\\frac{f}{g}\\big)\' = \\frac{f\'g - fg\'}{g^2}\\).', 'Simplify after applying; factor when it helps.'],
        {
          exampleCode: `\\frac{d}{dx}(x^2\\sin x) = 2x\\sin x + x^2\\cos x
\\\\
\\frac{d}{dx}\\left(\\frac{x^2}{x+1}\\right) = \\frac{2x(x+1)-x^2(1)}{(x+1)^2} = \\frac{x^2+2x}{(x+1)^2}
\\\\
\\text{Extra: } \\frac{d}{dx}(x\\cdot e^x) = 1\\cdot e^x + x\\cdot e^x = e^x(1+x)`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Product rule: derivative of first times second plus first times derivative of second. Quotient: (top\')(bottom) minus (top)(bottom\'), all over bottom squared.',
        }
      ),
      subunit(
        '2-8',
        'Derivatives of Additional Trig Functions',
        'The remaining trig derivatives: \\(\\frac{d}{dx}\\tan x = \\sec^2 x\\), \\(\\frac{d}{dx}\\sec x = \\sec x\\tan x\\), \\(\\frac{d}{dx}\\cot x = -\\csc^2 x\\), and \\(\\frac{d}{dx}\\csc x = -\\csc x\\cot x\\). They follow from the derivatives of \\(\\sin\\) and \\(\\cos\\) and the quotient rule.\n\n' +
          'These show up in integration (antiderivatives) and in problems involving angles and rates. Knowing \\(\\sec^2 x\\) is the derivative of \\(\\tan x\\) is especially common.',
        ['\\(\\frac{d}{dx}\\tan x = \\sec^2 x\\), \\(\\frac{d}{dx}\\sec x = \\sec x\\tan x\\).', '\\(\\frac{d}{dx}\\cot x = -\\csc^2 x\\), \\(\\frac{d}{dx}\\csc x = -\\csc x\\cot x\\).', 'Combine with constant multiple and sum.'],
        {
          exampleCode: `\\frac{d}{dx}(3\\tan x) = 3\\sec^2 x
\\\\
\\frac{d}{dx}(\\sec x + \\cot x) = \\sec x\\tan x - \\csc^2 x
\\\\
\\text{Extra: } \\frac{d}{dx}(2\\sec x - \\tan x) = 2\\sec x\\tan x - \\sec^2 x`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Constant multiple for the first; sum of two terms for the second. The extra example mixes \\(\\sec\\) and \\(\\tan\\).',
        }
      ),
      subunit(
        '2-9',
        'Selecting Appropriate Differentiation Techniques',
        'Many functions require combining multiple rules. The key is identifying structure: Is it a product? Quotient? Composition (next unit: chain rule)? A sum of simpler pieces? Start by labeling parts and deciding which rule applies to each.\n\n' +
          'For products, use the product rule and then simplify or factor. For quotients, use the quotient rule and then simplify the numerator. If the function is a composition (e.g. \\(\\sin(x^2)\\)), you will need the chain rule, covered in Unit 3.',
        ['Identify structure: product, quotient, sum, or composition.', 'Apply one rule at a time; simplify between steps.', 'Product: \\(f\'g+fg\'\\); quotient: \\(\\frac{f\'g-fg\'}{g^2}\\); sum: differentiate term by term.'],
        {
          exampleCode: `f(x)=x^2 e^x \\Rightarrow f'(x) = 2xe^x + x^2 e^x = e^x(2x+x^2)
\\\\
f(x)=\\frac{\\sin x}{x^2} \\Rightarrow f'(x) = \\frac{x^2\\cos x - 2x\\sin x}{x^4} = \\frac{x\\cos x - 2\\sin x}{x^3}
\\\\
\\text{Extra: } g(x)=x\\ln x \\Rightarrow g'(x) = 1\\cdot\\ln x + x\\cdot\\frac{1}{x} = \\ln x + 1`,
          exampleLanguage: 'latex',
          exampleExplanation: 'First: product rule then factor \\(e^x\\). Second: quotient rule then simplify. Third: product rule with \\(x\\) and \\(\\ln x\\).',
        }
      ),
    ],
  },
  {
    unitNumber: 3,
    title: 'Composite, Implicit, and Inverse Functions',
    subunits: [
      subunit(
        '3-0',
        'Unit Overview',
        'In earlier units we differentiated straightforward expressions using the power rule, product rule, and quotient rule. In this unit we learn how to differentiate more complex structures: compositions of functions (one function inside another), equations that are not solved for one variable (implicit relations), and inverse relationships.\n\n' +
          'The key idea is that derivatives respect structure. When functions are nested, multiplied, or implicitly defined, we must apply rules that carefully track how quantities depend on one another. The chain rule captures the idea that if \\(y = f(g(x))\\), then the rate of change of \\(y\\) with respect to \\(x\\) flows through both the outer function \\(f\\) and the inner function \\(g\\). Implicit differentiation extends this by treating \\(y\\) as a function of \\(x\\) even when we cannot solve for \\(y\\) explicitly.\n\n' +
          'Inverse functions and inverse trigonometric functions have derivative formulas that follow from the chain rule and the definition of an inverse. Higher-order derivatives (second derivative, third derivative, and so on) measure how rates themselves change, leading to acceleration, concavity, and more refined approximations.',
        ['Compositions require the chain rule: differentiate outer, then multiply by derivative of inner.', 'Implicit relations: differentiate both sides with respect to \\(x\\), treating \\(y\\) as a function of \\(x\\).', 'Inverse and inverse trig derivatives follow from the chain rule and \\((f^{-1})\'(x) = 1/f\'(f^{-1}(x))\\).'],
        {
          exampleCode: `\\text{If } y = f(g(x)), \\text{ then } \\frac{dy}{dx} = f'(g(x))\\cdot g'(x).
\\\\
\\text{The rate of change flows through both functions.}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The chain rule: the derivative of the composition is the derivative of the outer function evaluated at the inner, times the derivative of the inner.',
        }
      ),
      subunit(
        '3-1',
        'The Chain Rule',
        'The chain rule is used when differentiating a composite function. If one function is inside another, we differentiate the outer function first (with the inner left as is), then multiply by the derivative of the inner function. In symbols: \\(\\frac{d}{dx}f(g(x)) = f\'(g(x))\\cdot g\'(x)\\).\n\n' +
          'Identifying the outer and inner functions is the first step. For \\((3x^2+1)^5\\), the outer function is “something to the fifth” and the inner is \\(3x^2+1\\). For \\(\\sin(x^3)\\), the outer is sine and the inner is \\(x^3\\). Practice rewriting expressions as \\(f(g(x))\\) so the structure is clear.\n\n' +
          'The chain rule generalizes to three or more nested functions: differentiate from the outside in, multiplying by each inner derivative. On the exam, chain rule appears in combination with power, product, quotient, and trig rules.',
        ['\\(\\frac{d}{dx}f(g(x)) = f\'(g(x))\\cdot g\'(x)\\): outer derivative evaluated at inner, times inner derivative.', 'Identify outer and inner; apply one step at a time.', 'Often appears with power rule: \\([g(x)]^n\\) gives \\(n[g(x)]^{n-1}\\cdot g\'(x)\\).'],
        {
          exampleCode: `f(x)=(3x^2+1)^5
\\\\
\\text{Outer: } 5(3x^2+1)^4 \\quad \\text{Inner: } 6x
\\\\
f'(x) = 5(3x^2+1)^4 \\cdot 6x = 30x(3x^2+1)^4
\\\\
\\frac{d}{dx}\\sin(x^3) = \\cos(x^3)\\cdot 3x^2 = 3x^2\\cos(x^3)
\\\\
\\text{Extra: } \\frac{d}{dx}e^{x^2} = e^{x^2}\\cdot 2x = 2xe^{x^2}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'First: power rule on the outside, then multiply by the derivative of \\(3x^2+1\\). Second: derivative of sine is cosine, then multiply by \\(3x^2\\). Extra: \\(e^{\\text{inner}}\\) stays, multiply by derivative of \\(x^2\\).',
        }
      ),
      subunit(
        '3-2',
        'Implicit Differentiation',
        'Implicit differentiation is used when \\(y\\) is not isolated on one side of the equation. We differentiate both sides with respect to \\(x\\), treating \\(y\\) as a function of \\(x\\) and applying the chain rule whenever we hit \\(y\\). The key is that \\(\\frac{d}{dx}(y) = \\frac{dy}{dx}\\), and \\(\\frac{d}{dx}(y^n) = ny^{n-1}\\frac{dy}{dx}\\).\n\n' +
          'After differentiating, collect all terms involving \\(\\frac{dy}{dx}\\) on one side and factor; then solve for \\(\\frac{dy}{dx}\\). The result is usually in terms of both \\(x\\) and \\(y\\), which is fine, we often evaluate it at a specific point.\n\n' +
          'Use the product rule when a term is \\(xy\\) or \\(x^2 y\\): \\(\\frac{d}{dx}(xy) = x\\frac{dy}{dx} + y\\). Implicit differentiation is essential for curves that are not functions (e.g. circles, ellipses) and for related rates when the relation between variables is implicit.',
        ['Differentiate both sides with respect to \\(x\\); treat \\(y\\) as a function of \\(x\\).', '\\(\\frac{d}{dx}(y) = \\frac{dy}{dx}\\); for \\(y^n\\) use chain rule: \\(ny^{n-1}\\frac{dy}{dx}\\).', 'Solve for \\(\\frac{dy}{dx}\\); product rule for terms like \\(xy\\).'],
        {
          exampleCode: `x^2 + y^2 = 25 \\Rightarrow 2x + 2y\\frac{dy}{dx} = 0
\\\\
2y\\frac{dy}{dx} = -2x \\Rightarrow \\frac{dy}{dx} = -\\frac{x}{y}
\\\\
xy=10 \\Rightarrow x\\frac{dy}{dx} + y = 0 \\Rightarrow \\frac{dy}{dx} = -\\frac{y}{x}
\\\\
\\text{Extra: } x^2y + y^3 = 6 \\Rightarrow 2xy + x^2\\frac{dy}{dx} + 3y^2\\frac{dy}{dx} = 0 \\Rightarrow \\frac{dy}{dx} = -\\frac{2xy}{x^2+3y^2}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Circle: derivative of \\(y^2\\) is \\(2y\\frac{dy}{dx}\\). Product \\(xy\\): use product rule. Extra: product and power rule on \\(y^3\\), then solve for \\(\\frac{dy}{dx}\\).',
        }
      ),
      subunit(
        '3-3',
        'Inverse Functions & Inverse Trig Derivatives',
        'If a function has an inverse, their derivatives are related by \\((f^{-1})\'(x) = \\frac{1}{f\'(f^{-1}(x))}\\). So the slope of the inverse at a point is the reciprocal of the slope of the original at the corresponding point.\n\n' +
          'Inverse trig functions follow special derivative formulas: \\(\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1-x^2}}\\), \\(\\frac{d}{dx}\\arccos x = -\\frac{1}{\\sqrt{1-x^2}}\\), \\(\\frac{d}{dx}\\arctan x = \\frac{1}{1+x^2}\\), and similar for \\(\\text{arccot}\\), \\(\\text{arcsec}\\), \\(\\text{arccsc}\\). When the argument is not just \\(x\\), apply the chain rule: derivative of inverse trig of \\(u\\) is the formula in \\(u\\) times \\(u\'\\).\n\n' +
          'Restrictions on domains (e.g. \\(\\arcsin\\) only on \\([-1,1]\\)) ensure that inverses exist and that the derivative formulas are valid.',
        ['\\((f^{-1})\'(x) = 1/f\'(f^{-1}(x))\\): slope of inverse is reciprocal of slope of \\(f\\) at the corresponding point.', '\\(\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1-x^2}}\\), \\(\\frac{d}{dx}\\arctan x = \\frac{1}{1+x^2}\\); restrict domains.', 'For \\(\\arctan(u(x))\\), use formula in \\(u\\) then multiply by \\(u\'\\).'],
        {
          exampleCode: `\\frac{d}{dx}\\arcsin x = \\frac{1}{\\sqrt{1-x^2}}
\\\\
\\frac{d}{dx}\\arctan(2x) = \\frac{1}{1+(2x)^2}\\cdot 2 = \\frac{2}{1+4x^2}
\\\\
\\text{Extra: } \\frac{d}{dx}\\arcsin(x^2) = \\frac{1}{\\sqrt{1-x^4}}\\cdot 2x = \\frac{2x}{\\sqrt{1-x^4}}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'For \\(\\arctan(2x)\\), the derivative of \\(\\arctan u\\) is \\(1/(1+u^2)\\); substitute \\(u=2x\\) and multiply by \\(2\\).',
        }
      ),
      subunit(
        '3-4',
        'Higher-Order Derivatives',
        'Higher-order derivatives measure how rates themselves change. The second derivative is the derivative of the first derivative; it often represents acceleration (in motion) or concavity (in graphing). Notation: \\(f\'\'(x)\\) or \\(f^{(2)}(x)\\), and \\(\\frac{d^2 y}{dx^2}\\) in Leibniz form.\n\n' +
          'To find the second derivative, differentiate once to get \\(f\'(x)\\), then differentiate again. If the first derivative used the product or quotient rule, the second derivative may require those rules again, so keep expressions tidy.\n\n' +
          'The third derivative and beyond appear less often but follow the same idea. Higher-order derivatives are used in Taylor polynomials and in differential equations.',
        ['Second derivative: \\(f\'\'(x) = \\frac{d}{dx}[f\'(x)]\\); notation \\(\\frac{d^2 y}{dx^2}\\).', 'Interpretation: second derivative = acceleration (motion) or concavity (graphing).', 'Differentiate the first derivative; simplify before differentiating again when possible.'],
        {
          exampleCode: `f(x)=x^3 \\Rightarrow f'(x)=3x^2 \\Rightarrow f''(x)=6x
\\\\
f(x)=e^x\\sin x \\Rightarrow f'(x)=e^x\\sin x + e^x\\cos x
\\\\
f''(x)=e^x\\sin x + e^x\\cos x + e^x\\cos x - e^x\\sin x = 2e^x\\cos x
\\\\
\\text{Extra: } g(x)=\\ln x \\Rightarrow g'(x)=\\frac{1}{x} \\Rightarrow g''(x)=-\\frac{1}{x^2}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'For \\(e^x\\sin x\\), the first derivative uses the product rule; the second applies the product rule to each term of \\(f\'\\).',
        }
      ),
      subunit(
        '3-5',
        'Selecting Procedures for Complex Derivatives',
        'Many functions require combining the chain rule with the product rule, quotient rule, or both. The challenge is identifying structure first: Is there a composition? A product? A quotient? Then apply the appropriate rule(s) in order.\n\n' +
          'For a quotient where the numerator or denominator is a composition (e.g. \\(\\ln(x^2+1)\\)), use the quotient rule first; when differentiating the numerator or denominator, use the chain rule. For \\(e^{\\sin x}\\), the outer function is \\(e^u\\) and the inner is \\(\\sin x\\), so the derivative is \\(e^{\\sin x}\\cos x\\).\n\n' +
          'Strategy: (1) Identify the outermost structure (quotient, product, sum). (2) Apply that rule. (3) When differentiating a part that is composite, use the chain rule. (4) Simplify.',
        ['Identify outermost structure (quotient, product, composition), then apply rules in order.', 'Quotient with composite top/bottom: quotient rule first, then chain rule on each part.', '\\(e^{u(x)}\\): derivative is \\(e^{u(x)}\\cdot u\'(x)\\).'],
        {
          exampleCode: `f(x)=\\frac{\\ln(x^2+1)}{x} \\Rightarrow f'(x) = \\frac{x\\cdot\\frac{2x}{x^2+1} - \\ln(x^2+1)}{x^2}
\\\\
f(x)=e^{\\sin x} \\Rightarrow f'(x) = e^{\\sin x}\\cos x
\\\\
\\text{Extra: } g(x)=(\\sin x)^2 e^x = e^x\\sin^2 x \\Rightarrow g'(x)=e^x\\sin^2 x + e^x\\cdot 2\\sin x\\cos x = e^x\\sin x(\\sin x + 2\\cos x)`,
          exampleLanguage: 'latex',
          exampleExplanation: 'First: quotient rule; derivative of \\(\\ln(x^2+1)\\) uses chain rule \\(1/(x^2+1)\\cdot 2x\\). Second: chain rule for \\(e^{\\sin x}\\).',
        }
      ),
    ],
  },
  {
    unitNumber: 4,
    title: 'Contextual Applications of Differentiation',
    subunits: [
      subunit(
        '4-0',
        'Unit Overview',
        'Derivatives are not just symbolic tools; they describe real-world change. In this unit we apply derivatives to motion, growth, optimization, and approximation. We move from computing derivatives to interpreting what they mean in context.\n\n' +
          'If \\(f(x)\\) represents a quantity (revenue, position, population, area), then \\(f\'(x)\\) represents the rate at which that quantity changes with respect to \\(x\\) (often time). Units matter: if \\(f\\) is in dollars and \\(x\\) in units sold, \\(f\'\\) is in dollars per unit; if \\(s(t)\\) is position in meters and \\(t\\) in seconds, \\(s\'(t)\\) is velocity in m/s.\n\n' +
          'Key applications include position,velocity,acceleration relationships, related rates (two or more quantities changing with respect to time), linearization (using the tangent line to approximate values), and L\'Hôpital\'s rule for limits that yield indeterminate forms.',
        ['\\(f\'(x)\\) = rate of change of \\(f\\) with respect to \\(x\\); interpret units.', 'Position \\(s(t)\\), velocity \\(v(t)=s\'(t)\\), acceleration \\(a(t)=v\'(t)\\).', 'Related rates: differentiate with respect to time; linearization: \\(L(x)=f(a)+f\'(a)(x-a)\\).'],
        {
          exampleCode: `\\text{Rate of change of } f \\text{ at } x \\text{ is } f'(x).
\\\\
\\text{In motion: } v(t)=s'(t),\\quad a(t)=v'(t)=s''(t).`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The derivative gives the instantaneous rate of change; the second derivative gives the rate of change of that rate (acceleration or concavity).',
        }
      ),
      subunit(
        '4-1',
        'Interpreting the Derivative in Context',
        'If \\(f(x)\\) represents a real quantity (revenue, cost, population, etc.), then \\(f\'(x)\\) represents how that quantity changes per unit change in \\(x\\). Always state units: “revenue is increasing at \$30 per unit” means that for each additional unit sold, revenue rises by about \$30 at that level.\n\n' +
          'Positive derivative means the quantity is increasing; negative means decreasing. The magnitude tells how fast. In business, \\(R\'(x)\\) might be marginal revenue; in science, \\(P\'(t)\\) might be growth rate. Read the problem carefully to identify what \\(f\\) and \\(x\\) represent and what \\(f\'(a)\\) means in that context.',
        ['\\(f\'(x)\\) = instantaneous rate of change of \\(f\\) with respect to \\(x\\).', 'State units (e.g. dollars per unit, meters per second).', 'Positive \\(f\'\\) means increasing; negative means decreasing.'],
        {
          exampleCode: `R(x)=5x^2 \\Rightarrow R'(x)=10x
\\\\
\\text{At } x=3:\\ R'(3)=30.\\quad \\text{Revenue is increasing at } \\$30 \\text{ per unit.}
\\\\
\\text{Extra: } C(x)=100+4x \\Rightarrow C'(x)=4.\\quad \\text{Marginal cost } \\$4 \\text{ per item.}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'At \\(x=3\\), selling one more unit increases revenue by approximately \$30. The derivative gives the rate per unit.',
        }
      ),
      subunit(
        '4-2',
        'Position, Velocity, and Acceleration',
        'Position \\(s(t)\\), velocity \\(v(t)\\), and acceleration \\(a(t)\\) are related by differentiation: \\(v(t) = s\'(t)\\) and \\(a(t) = v\'(t) = s\'\'(t)\\). So velocity is the rate of change of position with respect to time, and acceleration is the rate of change of velocity.\n\n' +
          'Speed is the magnitude of velocity: \\(|v(t)|\\). When \\(v(t)>0\\) the object moves in the positive direction; when \\(v(t)<0\\) it moves in the negative direction. When \\(v(t)=0\\) the object may be at a rest point (could be a max or min position). Acceleration indicates whether velocity is increasing or decreasing; \\(a(t)>0\\) means velocity is increasing.',
        ['\\(v(t)=s\'(t)\\), \\(a(t)=v\'(t)=s\'\'(t)\\).', 'Speed = \\(|v(t)|\\); \\(v>0\\) motion in positive direction, \\(v<0\\) in negative.', 'Rest when \\(v=0\\); acceleration tells whether speed is increasing or decreasing.'],
        {
          exampleCode: `s(t)=t^3-6t^2 \\Rightarrow v(t)=3t^2-12t,\\quad a(t)=6t-12
\\\\
\\text{Extra: } s(t)=4\\cos t \\Rightarrow v(t)=-4\\sin t,\\quad a(t)=-4\\cos t \\text{ (simple harmonic motion)}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Differentiate position once for velocity, twice for acceleration. In the extra, \\(a(t)=-4\\cos t = -s(t)\\) illustrates \\(s\'\' + s = 0\\).',
        }
      ),
      subunit(
        '4-3',
        'Applied Rates of Change (Non-Motion Contexts)',
        'Rates of change appear in economics, biology, chemistry, and many other fields. Population growth, decay of a substance, cost versus output, and pressure versus depth are all modeled by functions whose derivatives give the rate of change.\n\n' +
          'Exponential models \\(P(t)=P_0 e^{kt}\\) have derivative \\(P\'(t)=kP_0 e^{kt}=kP(t)\\), so the growth rate is proportional to the current amount. When the problem gives a formula, differentiate it and interpret the derivative in the context of the problem; always include units.',
        ['Identify the function and the variable; differentiate and interpret \\(f\'\\) in context.', 'Exponential growth/decay: \\(P\'(t)=kP(t)\\); rate proportional to amount.', 'State units (e.g. people per year, grams per minute).'],
        {
          exampleCode: `P(t)=200e^{0.03t} \\Rightarrow P'(t)=200\\cdot 0.03\\cdot e^{0.03t} = 6e^{0.03t}
\\\\
\\text{Population growth rate } = 6e^{0.03t} \\text{ (e.g. people per year at time } t\\text{).}
\\\\
\\text{Extra: } V(r)=\\frac{4}{3}\\pi r^3 \\Rightarrow \\frac{dV}{dr}=4\\pi r^2 \\text{ (rate of change of volume with respect to radius)}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The derivative \\(P\'(t)\\) gives the instantaneous growth rate. For the sphere, \\(dV/dr\\) is the rate at which volume changes per unit change in radius.',
        }
      ),
      subunit(
        '4-4',
        'Related Rates',
        'When two or more quantities depend on time (or another variable), we can relate their rates by differentiating the equation connecting them with respect to time. For example, if \\(A=\\pi r^2\\), then \\(\\frac{dA}{dt} = 2\\pi r\\frac{dr}{dt}\\) by the chain rule.\n\n' +
          'Strategy: (1) Write an equation relating the quantities. (2) Differentiate both sides with respect to \\(t\\). (3) Substitute known values and solve for the unknown rate. Remember that we need values for all variables that appear in the differentiated equation at the moment of interest.',
        ['Relate quantities with an equation; differentiate both sides with respect to \\(t\\).', 'Chain rule: \\(\\frac{d}{dt}[f(r)] = f\'(r)\\frac{dr}{dt}\\).', 'Substitute known values and unknown rate; solve for the unknown rate.'],
        {
          exampleCode: `A=\\pi r^2 \\Rightarrow \\frac{dA}{dt} = 2\\pi r\\frac{dr}{dt}
\\\\
\\text{If } r=3 \\text{ and } \\frac{dr}{dt}=2:\\quad \\frac{dA}{dt} = 2\\pi\\cdot 3\\cdot 2 = 12\\pi
\\\\
\\text{Extra: } V=\\frac{4}{3}\\pi r^3 \\Rightarrow \\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Area of a circle: derivative with respect to \\(t\\) uses chain rule. Given \\(r\\) and \\(dr/dt\\), we find \\(dA/dt\\) in square units per time.',
        }
      ),
      subunit(
        '4-5',
        'Linearization & Local Linearity',
        'Near a point, a differentiable function behaves like its tangent line. The linear approximation (linearization) at \\(x=a\\) is \\(L(x) = f(a) + f\'(a)(x-a)\\). We use it to approximate \\(f(x)\\) when \\(x\\) is close to \\(a\\).\n\n' +
          'To approximate \\(\\sqrt{4.1}\\), let \\(f(x)=\\sqrt{x}\\) and \\(a=4\\); then \\(f(4)=2\\), \\(f\'(x)=\\frac{1}{2\\sqrt{x}}\\) so \\(f\'(4)=\\frac{1}{4}\\), and \\(L(4.1)=2+\\frac{1}{4}(0.1)=2.025\\). The error is small when \\(x\\) is close to \\(a\\); the approximation is best for values near the point of tangency.\n\n' +
          'Local linearity means that zooming in on a differentiable function makes it look like a line, the tangent line. This idea underlies both linear approximation and the definition of the derivative.',
        ['\\(L(x)=f(a)+f\'(a)(x-a)\\) is the tangent line at \\(x=a\\); use to approximate \\(f(x)\\) near \\(a\\).', 'Choose \\(a\\) close to the \\(x\\) at which you want the value.', 'Error increases as \\(x\\) moves away from \\(a\\).'],
        {
          exampleCode: `f(x)=\\sqrt{x},\\ a=4 \\Rightarrow f(4)=2,\\ f'(x)=\\frac{1}{2\\sqrt{x}},\\ f'(4)=\\frac{1}{4}
\\\\
L(x)=2+\\frac{1}{4}(x-4),\\quad L(4.1)=2+\\frac{1}{4}(0.1)=2.025 \\approx \\sqrt{4.1}
\\\\
\\text{Extra: } f(x)=e^x,\\ a=0 \\Rightarrow L(x)=1+x;\\quad e^{0.1}\\approx 1.1`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The tangent line at \\(x=4\\) gives a good approximation to \\(\\sqrt{x}\\) for \\(x\\) near 4. For \\(e^x\\) near 0, \\(L(x)=1+x\\) is the linearization.',
        }
      ),
      subunit(
        '4-6',
        "L'Hôpital's Rule",
        "When a limit produces the indeterminate form \\(\\frac{0}{0}\\) or \\(\\frac{\\infty}{\\infty}\\), we can often evaluate it by differentiating the numerator and denominator separately: \\(\\lim_{x\\to c}\\frac{f(x)}{g(x)} = \\lim_{x\\to c}\\frac{f\'(x)}{g\'(x)}\\) (provided the limit on the right exists or is \\(\\pm\\infty\\)).\n\n" +
          "Apply L'Hôpital's rule only when the limit is indeterminate. After applying, check if the new limit is determinate; if it is still \\(0/0\\) or \\(\\infty/\\infty\\), apply the rule again. Other indeterminate forms (\\(0\\cdot\\infty\\), \\(\\infty-\\infty\\)) can sometimes be rewritten so that L'Hôpital applies.\n\n" +
          "Common use: \\(\\lim_{x\\to 0}\\frac{\\sin x}{x} = \\lim_{x\\to 0}\\frac{\\cos x}{1} = 1\\).",
        ['Only for \\(0/0\\) or \\(\\infty/\\infty\\): \\(\\lim\\frac{f}{g} = \\lim\\frac{f\'}{g\'}\\) when the right-hand limit exists.', 'Differentiate numerator and denominator separately; do not use the quotient rule.', 'If the result is still indeterminate, apply the rule again.'],
        {
          exampleCode: `\\lim_{x\\to 0} \\frac{\\sin x}{x} \\stackrel{\\frac{0}{0}}{=} \\lim_{x\\to 0} \\frac{\\cos x}{1} = 1
\\\\
\\text{Extra: } \\lim_{x\\to 0} \\frac{e^x-1}{x} = \\lim_{x\\to 0} \\frac{e^x}{1} = 1`,
          exampleLanguage: 'latex',
          exampleExplanation: "Indeterminate \\(0/0\\); after differentiating numerator and denominator, the limit is \\(\\cos 0 = 1\\). The extra is another standard limit that equals 1.",
        }
      ),
    ],
  },
  {
    unitNumber: 5,
    title: 'Analytical Applications of Differentiation',
    subunits: [
      subunit(
        '5-0',
        'Unit Overview',
        'In this unit, derivatives move from computation to analysis. Instead of just finding \\(f\'(x)\\), we use derivatives to determine where functions increase, decrease, reach maximum or minimum values, and change concavity. This is the structural toolkit for understanding graphs without graphing technology.\n\n' +
          'By analyzing the first derivative we learn where \\(f\'\\) is positive (increasing), negative (decreasing), or zero (horizontal tangents and candidates for extrema). By analyzing the second derivative we learn where the graph is concave up or concave down and where inflection points occur. Together, the first and second derivatives let us reconstruct the behavior of a function from scratch, critical points, intervals of increase/decrease, local and absolute extrema, and concavity.\n\n' +
          'The Mean Value Theorem and Extreme Value Theorem provide the theoretical foundation: the EVT guarantees that a continuous function on a closed interval attains a maximum and minimum; the MVT says that somewhere the instantaneous rate equals the average rate. Optimization problems apply these ideas to real-world constraints: express the quantity to maximize or minimize as a function of one variable, then find critical points and classify them.',
        ['First derivative: sign of \\(f\'\\) gives increase/decrease; zeros give critical points.', 'Second derivative: sign of \\(f\'\'\\) gives concavity; zeros give inflection candidates.', 'EVT: continuous on \\([a,b]\\) \\(\\Rightarrow\\) absolute max and min exist. MVT: \\(f\'(c)\\) = average rate for some \\(c\\in(a,b)\\).'],
        {
          exampleCode: `\\text{Analysis toolkit: } f'(x) \\text{ for increase/decrease and critical points;}
\\\\
f''(x) \\text{ for concavity and inflection.}
\\\\
\\text{Optimization: maximize/minimize a quantity subject to constraints.}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The first derivative drives increasing/decreasing behavior and locates extrema; the second derivative describes concavity and refines the shape of the graph.',
        }
      ),
      subunit(
        '5-1',
        'Mean Value Theorem & Extreme Value Theorem',
        'The Extreme Value Theorem (EVT) states that if \\(f\\) is continuous on a closed interval \\([a,b]\\), then \\(f\\) attains an absolute maximum and an absolute minimum on \\([a,b]\\). These can occur at critical points (where \\(f\'(x)=0\\) or \\(f\'\\) does not exist) or at the endpoints \\(x=a\\) and \\(x=b\\). So to find absolute extrema on \\([a,b]\\), evaluate \\(f\\) at all critical points in \\((a,b)\\) and at both endpoints, then take the largest and smallest values.\n\n' +
          'The Mean Value Theorem (MVT) states that if \\(f\\) is continuous on \\([a,b]\\) and differentiable on \\((a,b)\\), then there exists at least one \\(c\\in(a,b)\\) such that \\(f\'(c) = \\frac{f(b)-f(a)}{b-a}\\). In words: the instantaneous rate of change equals the average rate of change over the interval at some point in the interior. The MVT is used to prove other theorems and to guarantee the existence of a point where the tangent line is parallel to the secant line.',
        ['EVT: continuous on \\([a,b]\\) \\(\\Rightarrow\\) absolute max and min exist (at critical points or endpoints).', 'MVT: \\(f\'(c) = \\frac{f(b)-f(a)}{b-a}\\) for some \\(c\\in(a,b)\\) when \\(f\\) is continuous on \\([a,b]\\) and differentiable on \\((a,b)\\).', 'To find absolute extrema: list critical points and endpoints, then evaluate \\(f\\) at each.'],
        {
          exampleCode: `f(x)=x^2 \\text{ on } [1,3]
\\\\
\\text{Average rate: } \\frac{f(3)-f(1)}{3-1} = \\frac{9-1}{2} = 4
\\\\
f'(x)=2x.\\quad \\text{Set } 2c=4 \\Rightarrow c=2.
\\\\
\\text{At } x=2 \\text{ the instantaneous rate equals the average rate.}
\\\\
\\text{Extra: } f(x)=\\sqrt{x} \\text{ on } [1,4] \\Rightarrow \\frac{f(4)-f(1)}{3}=\\frac{1}{3},\\quad f'(c)=\\frac{1}{2\\sqrt{c}}=\\frac{1}{3} \\Rightarrow c=\\frac{9}{4}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'MVT guarantees a \\(c\\) in \\((1,3)\\) where \\(f\'(c)=4\\); here \\(c=2\\) works. For absolute extrema on \\([1,3]\\), check \\(f(1)=1\\), \\(f(3)=9\\), and any critical points; max is 9, min is 1.',
        }
      ),
      subunit(
        '5-2',
        'Critical Points & Increasing/Decreasing Behavior',
        'Critical points occur where \\(f\'(x)=0\\) or \\(f\'(x)\\) does not exist. These are the only places where a local maximum or minimum can occur (aside from endpoints on a closed interval). To find them, set \\(f\'(x)=0\\) and solve, and also identify any \\(x\\) where \\(f\'\\) is undefined.\n\n' +
          'The sign of \\(f\'(x)\\) on intervals between critical points determines whether \\(f\\) is increasing or decreasing: \\(f\'>0\\) means increasing, \\(f\'<0\\) means decreasing. Build a number line with critical points, pick a test value in each interval, and evaluate \\(f\'\\) there. A sign change from positive to negative at a critical point indicates a local maximum; negative to positive indicates a local minimum.',
        ['Critical points: \\(f\'(x)=0\\) or \\(f\'\\) does not exist; candidates for local extrema.', '\\(f\'>0\\) \\(\\Rightarrow\\) increasing; \\(f\'<0\\) \\(\\Rightarrow\\) decreasing.', 'Use a sign chart (number line) with test values in each interval.'],
        {
          exampleCode: `f(x)=x^3-3x \\Rightarrow f'(x)=3x^2-3 = 3(x^2-1) = 3(x-1)(x+1)
\\\\
f'(x)=0 \\Rightarrow x = \\pm 1
\\\\
\\text{Intervals: } x<-1 \\Rightarrow f'>0 \\text{ (inc); } -1<x<1 \\Rightarrow f'<0 \\text{ (dec); } x>1 \\Rightarrow f'>0 \\text{ (inc)}
\\\\
\\text{Local max at } x=-1;\\ \\text{local min at } x=1
\\\\
\\text{Extra: } g(x)=x^4-4x^2 \\Rightarrow g'(x)=4x^3-8x=4x(x^2-2);\\ \\text{critical at } x=0,\\ \\pm\\sqrt{2}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Factoring \\(f\'\\) makes the sign chart easy: for \\(x<-1\\) both factors are negative, so \\(f\'>0\\); between \\(-1\\) and \\(1\\), one factor is negative, so \\(f\'<0\\); for \\(x>1\\) both positive, so \\(f\'>0\\).',
        }
      ),
      subunit(
        '5-3',
        'First and Second Derivative Tests',
        'The First Derivative Test classifies a critical point by the sign of \\(f\'\\) on either side: if \\(f\'\\) changes from positive to negative at \\(c\\), then \\(f\\) has a local maximum at \\(c\\); if from negative to positive, a local minimum. If there is no sign change, the critical point is neither a max nor a min (e.g. \\(f(x)=x^3\\) at \\(x=0\\)).\n\n' +
          'The Second Derivative Test uses concavity at the critical point: if \\(f\'(c)=0\\) and \\(f\'\'(c)>0\\), then \\(f\\) is concave up at \\(c\\) and there is a local minimum; if \\(f\'\'(c)<0\\), then \\(f\\) is concave down and there is a local maximum. If \\(f\'\'(c)=0\\), the test is inconclusive, use the first derivative test or check concavity on both sides.',
        ['First derivative test: sign change of \\(f\'\\) at \\(c\\): + to − \\(\\Rightarrow\\) local max; − to + \\(\\Rightarrow\\) local min.', 'Second derivative test: \\(f\'(c)=0\\) and \\(f\'\'(c)>0\\) \\(\\Rightarrow\\) local min; \\(f\'\'(c)<0\\) \\(\\Rightarrow\\) local max.', 'If \\(f\'\'(c)=0\\), second derivative test is inconclusive; use first derivative test.'],
        {
          exampleCode: `f(x)=x^4-4x^2 \\Rightarrow f'(x)=4x^3-8x = 4x(x^2-2)
\\\\
\\text{Critical points: } x=0,\\ \\pm\\sqrt{2}
\\\\
f''(x)=12x^2-8.\\quad f''(0)=-8<0 \\Rightarrow \\text{local max at } 0.
\\\\
f''(\\sqrt{2})=12(2)-8=16>0 \\Rightarrow \\text{local min.}
\\\\
\\text{Extra: } h(x)=x^3 \\Rightarrow h'(0)=0,\\ h''(0)=0; \\text{ first derivative test shows no local extrema at } 0.`,
          exampleLanguage: 'latex',
          exampleExplanation: 'At \\(x=0\\), \\(f\'\'(0)<0\\) so the graph is concave down and we have a local maximum. At \\(x=\\pm\\sqrt{2}\\), \\(f\'\'>0\\) so local minima.',
        }
      ),
      subunit(
        '5-4',
        'Concavity and Inflection Points',
        'Concavity is determined by the sign of the second derivative: \\(f\'\'(x)>0\\) means the graph is concave up (holds water); \\(f\'\'(x)<0\\) means concave down. On intervals where \\(f\'\'\\) is positive, \\(f\'\\) is increasing (slopes of tangent lines get steeper); where \\(f\'\'\\) is negative, \\(f\'\\) is decreasing.\n\n' +
          'An inflection point is a point where the concavity changes; that is, where \\(f\'\'\\) changes sign. Candidates are where \\(f\'\'(x)=0\\) or where \\(f\'\'\\) does not exist. Confirm by checking that \\(f\'\'\\) actually changes sign on either side; not every zero of \\(f\'\'\\) is an inflection point (e.g. \\(f(x)=x^4\\) has \\(f\'\'(0)=0\\) but no sign change).',
        ['\\(f\'\'(x)>0\\) \\(\\Rightarrow\\) concave up; \\(f\'\'(x)<0\\) \\(\\Rightarrow\\) concave down.', 'Inflection point: concavity changes; candidates where \\(f\'\'(x)=0\\) or \\(f\'\'\\) DNE.', 'Verify sign change of \\(f\'\'\\) on both sides; \\(f\'\'(c)=0\\) alone is not enough.'],
        {
          exampleCode: `f(x)=x^3 \\Rightarrow f'(x)=3x^2,\\quad f''(x)=6x
\\\\
f''(x)=0 \\Rightarrow x=0.\\quad x<0 \\Rightarrow f''<0 \\text{ (concave down); } x>0 \\Rightarrow f''>0 \\text{ (concave up)}
\\\\
\\text{Inflection point at } x=0.
\\\\
\\text{Extra: } p(x)=x^4 \\Rightarrow p''(x)=12x^2;\\ p''(0)=0 \\text{ but no sign change, no inflection at } 0.`,
          exampleLanguage: 'latex',
          exampleExplanation: 'For \\(x^3\\), the second derivative \\(6x\\) changes from negative to positive at 0, so 0 is an inflection point. For \\(x^4\\), \\(12x^2\\ge 0\\) everywhere, so no concavity change.',
        }
      ),
      subunit(
        '5-5',
        'Graphing with Derivatives',
        'By combining critical points, intervals of increase/decrease, concavity, inflection points, and end behavior (limits as \\(x\\to\\pm\\infty\\)), we can sketch a function without a calculator. Checklist: (1) Find \\(f\'\\) and critical points; build sign chart for \\(f\'\\) to get increase/decrease and local extrema. (2) Find \\(f\'\'\\) and where it is zero or undefined; build sign chart for \\(f\'\'\\) to get concavity and inflection points. (3) Compute \\(f\\) at critical points and a few key \\(x\\); optionally find intercepts and limits. (4) Sketch using all of the above.\n\n' +
          'The curve rises where \\(f\'>0\\) and falls where \\(f\'<0\\); it is concave up where \\(f\'\'>0\\) and concave down where \\(f\'\'<0\\). At inflection points the curve changes from “cupped” one way to the other.',
        ['Combine: critical points, sign of \\(f\'\\) (inc/dec), sign of \\(f\'\'\\) (concavity), inflection points, end behavior.', 'Sketch using extrema, concavity, and a few computed values.', 'Local max: peak; local min: valley; inflection: where concavity flips.'],
        {
          exampleCode: `f(x)=x^3-3x
\\\\
\\text{From before: local max at } x=-1,\\ \\text{local min at } x=1;\\ f''(x)=6x \\Rightarrow \\text{inflection at } x=0.
\\\\
\\text{Shape: increases } (-\\infty,-1),\\ \\text{decreases } (-1,1),\\ \\text{increases } (1,\\infty);\\ \\text{concave down for } x<0,\\ \\text{concave up for } x>0.
\\\\
\\text{Extra: } f(-1)=2,\\ f(0)=0,\\ f(1)=-2 \\text{ give key points for the sketch.}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'With extrema at \\(\\pm 1\\) and inflection at 0, the cubic has a local max, then decreases through an inflection, then a local min, then increases, the classic cubic shape.',
        }
      ),
      subunit(
        '5-6',
        'Optimization',
        'Optimization problems ask for the maximum or minimum value of some quantity (area, volume, profit, cost, distance) subject to constraints. The quantity we want to optimize is the objective function; the constraints often relate two or more variables so we can express the objective in one variable, differentiate, and find critical points.\n\n' +
          'Strategy: (1) Read the problem and identify what is to be maximized or minimized. (2) Draw a diagram and label variables. (3) Write the objective function in one variable, use the constraints to eliminate other variables. (4) Determine the domain (often \\(x>0\\) and physical limits). (5) Find \\(f\'(x)\\) and set it to zero; solve for critical points. (6) Check critical points and endpoints (if the domain is closed) by evaluating \\(f\\); the largest value is the maximum, the smallest is the minimum. (7) Answer the question with units.\n\n' +
          'Common pitfalls: forgetting to express the objective in a single variable; using the wrong endpoint or forgetting that the domain might be open (e.g. \\(x>0\\) with no upper bound); misidentifying whether you need a max or a min; and not checking that the critical point actually gives a max or min (use first or second derivative test, or compare values).\n\n' +
          'Classic examples: rectangle of fixed perimeter (maximize area, square is best); open-top box from a rectangle by cutting squares from corners (maximize volume); cylinder of fixed surface area (maximize volume); distance from a point to a curve (minimize distance squared to avoid square roots). In each case, the constraint reduces the number of free variables so the objective becomes a function of one variable.',
        ['Identify objective (what to max/min) and constraints; express objective as a function of one variable.', 'Find domain (physical and mathematical); find \\(f\'\\) and critical points; evaluate \\(f\\) at critical points and endpoints.', 'Confirm max vs min (second derivative test or compare values); state answer with units.'],
        {
          exampleCode: `\\text{Maximize area of rectangle with perimeter } 20.
\\\\
2x+2y=20 \\Rightarrow y=10-x.\\quad A(x)=x(10-x)=10x-x^2
\\\\
A'(x)=10-2x=0 \\Rightarrow x=5 \\Rightarrow y=5.\\quad \\text{Square } 5\\times 5;\\ A_{\\max}=25.
\\\\
\\text{Extra 1 (box): Cut squares of side } h \\text{ from corners of } 12\\times 8 \\text{ sheet; fold to open-top box.}
\\\\
V(h)=h(12-2h)(8-2h),\\ 0<h<4.\\quad V'(h)=0 \\Rightarrow h\\approx 1.57 \\text{ gives max volume.}
\\\\
\\text{Extra 2 (cylinder): Surface area } S=2\\pi r^2+2\\pi rh = 24\\pi \\Rightarrow h=\\frac{12}{r}-r.
\\\\
V(r)=\\pi r^2 h = \\pi r^2\\left(\\frac{12}{r}-r\\right)=12\\pi r - \\pi r^3.\\quad V'(r)=12\\pi - 3\\pi r^2=0 \\Rightarrow r=2,\\ h=4.`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Rectangle: one variable \\(x\\); domain \\(0<x<10\\); single critical point \\(x=5\\) gives max (or check \\(A\'\'<0\\)). Box: volume in one variable \\(h\\); cylinder: use constraint to get \\(h\\) in terms of \\(r\\), then \\(V(r)\\) and differentiate.',
        }
      ),
      subunit(
        '5-7',
        'Behavior of Implicit Relations',
        'When a relation is given implicitly (e.g. \\(x^2+y^2=16\\)), we may not have an explicit formula for \\(y\\) as a function of \\(x\\). We can still analyze slopes and behavior using implicit differentiation: differentiate both sides with respect to \\(x\\), treating \\(y\\) as a function of \\(x\\), then solve for \\(\\frac{dy}{dx}\\). The result gives the slope of the tangent line at any point \\((x,y)\\) on the curve.\n\n' +
          'Horizontal tangents occur where \\(\\frac{dy}{dx}=0\\) (set numerator of \\(dy/dx\\) to zero if it is a fraction). Vertical tangents occur where the denominator is zero (and the numerator is not). To find extrema on the curve, set \\(\\frac{dy}{dx}=0\\) and combine with the original equation to solve for \\((x,y)\\). Second derivatives can be found by differentiating the expression for \\(\\frac{dy}{dx}\\) again (using the quotient or chain rule as needed), but often the algebra is heavy; the AP exam often focuses on first derivative and slope behavior.',
        ['Use implicit differentiation to get \\(\\frac{dy}{dx}\\) in terms of \\(x\\) and \\(y\\).', 'Horizontal tangent: \\(\\frac{dy}{dx}=0\\); vertical tangent: denominator of \\(\\frac{dy}{dx}\\) = 0.', 'Slope at a point: substitute \\((x,y)\\) into \\(\\frac{dy}{dx}\\).'],
        {
          exampleCode: `x^2+y^2=16 \\Rightarrow 2x+2y\\frac{dy}{dx}=0 \\Rightarrow \\frac{dy}{dx}=-\\frac{x}{y}
\\\\
\\text{At } (0,4):\\ \\frac{dy}{dx}=0 \\Rightarrow \\text{horizontal tangent.}
\\\\
\\text{At } (4,0):\\ \\text{denominator } y=0 \\Rightarrow \\text{vertical tangent.}
\\\\
\\text{Extra: } xy=4 \\Rightarrow y+x\\frac{dy}{dx}=0 \\Rightarrow \\frac{dy}{dx}=-\\frac{y}{x};\\ \\text{at } (2,2),\\ \\text{slope } =-1.`,
          exampleLanguage: 'latex',
          exampleExplanation: 'For the circle, \\(dy/dx=-x/y\\) is zero when \\(x=0\\) (top and bottom of the circle) and undefined when \\(y=0\\) (left and right), matching the geometry.',
        }
      ),
    ],
  },
  {
    unitNumber: 6,
    title: 'Integration and Accumulation of Change',
    subunits: [
      subunit(
        '6-0',
        'Unit Overview',
        'Integration reverses differentiation and measures accumulated change. If derivatives measure instantaneous rates, integrals measure total accumulation over an interval, area under a curve, distance traveled, total growth, or any quantity that builds up from a rate.\n\n' +
          'This unit introduces Riemann sums (finite approximations using rectangles or other shapes), the definite integral as the limit of those sums, and the Fundamental Theorem of Calculus, which links integration to antiderivatives. We then develop systematic techniques for finding antiderivatives: basic rules (reversing the power rule), substitution (for composites), integration by parts, partial fractions, and handling improper integrals (infinite limits or unbounded integrands).\n\n' +
          'Choosing the right technique depends on the structure of the integrand, whether it contains a composition, a product of certain types of functions, a rational function, or an infinite interval. Practice with many forms builds fluency.',
        ['Definite integral = limit of Riemann sums; represents accumulated change (e.g. area, distance).', 'FTC Part 1: derivative of \\(\\int_a^x f(t)\\,dt\\) is \\(f(x)\\). Part 2: \\(\\int_a^b f(x)\\,dx = F(b)-F(a)\\) for antiderivative \\(F\\).', 'Techniques: basic rules, substitution, by parts, partial fractions; improper integrals use limits.'],
        {
          exampleCode: `\\text{Derivative } \\Rightarrow \\text{ rate. Integral } \\Rightarrow \\text{ total accumulation.}
\\\\
\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty} \\sum_{i=1}^n f(x_i^*)\\Delta x`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The definite integral is defined as the limit of Riemann sums; the FTC then lets us evaluate it using antiderivatives.',
        }
      ),
      subunit(
        '6-1',
        'Riemann Sums & Definite Integrals',
        'A Riemann sum approximates the area under a curve (or net signed area) by dividing the interval into subintervals and summing areas of rectangles. General form: \\(\\sum f(x_i^*)\\Delta x\\), where \\(x_i^*\\) is a sample point in the \\(i\\)th subinterval and \\(\\Delta x = (b-a)/n\\). The choice of sample point gives left, right, or midpoint sums; as \\(n\\to\\infty\\) (or \\(\\Delta x\\to 0\\)), the limit is the definite integral \\(\\int_a^b f(x)\\,dx\\).\n\n' +
          'The definite integral exists when \\(f\\) is continuous on \\([a,b]\\) (or has finitely many discontinuities). It can represent area when \\(f\\ge 0\\), or net signed area when \\(f\\) takes both signs. Setting up a Riemann sum from a verbal or tabular description is common on the AP exam.',
        ['Riemann sum: \\(\\sum f(x_i^*)\\Delta x\\); definite integral = limit as \\(n\\to\\infty\\) (or \\(\\Delta x\\to 0\\)).', 'Left/right/midpoint: choice of \\(x_i^*\\); right often \\(x_i\\), left \\(x_{i-1}\\), midpoint \\(\\frac{x_{i-1}+x_i}{2}\\).', '\\(\\int_a^b f(x)\\,dx\\) = net signed area; area when \\(f\\ge 0\\).'],
        {
          exampleCode: `\\int_0^2 x\\,dx \\approx \\text{ 2 rectangles, } \\Delta x=1,\\ \\text{right endpoints: }
\\\\
f(1)+f(2) = 1+2 = 3,\\quad (1+2)(1)=3
\\\\
\\text{Exact: } \\int_0^2 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^2 = 2
\\\\
\\text{Extra: } \\text{midpoint } n=2:\\ x^*=\\frac{1}{2},\\ \\frac{3}{2}\\Rightarrow \\frac{1}{2}+\\frac{3}{2}=2 \\text{ (exact for linear } f\\text{).}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'With two right-endpoint rectangles we get 3; the exact integral is 2 (area of a triangle). More rectangles give better approximations.',
        }
      ),
      subunit(
        '6-2',
        'Fundamental Theorem of Calculus',
        'Part 1: If \\(f\\) is continuous on \\([a,b]\\) and \\(F(x)=\\int_a^x f(t)\\,dt\\), then \\(F\'(x)=f(x)\\) on \\((a,b)\\). So the derivative of the accumulation function is the integrand. Part 2: If \\(F\\) is any antiderivative of \\(f\\) on \\([a,b]\\), then \\(\\int_a^b f(x)\\,dx = F(b)-F(a)\\). We write \\(F(b)-F(a)=[F(x)]_a^b\\).\n\n' +
          'Part 2 is the main tool for evaluating definite integrals: find an antiderivative \\(F\\), then plug in the limits. Part 1 is used when the upper limit is a function of \\(x\\) (chain rule then applies) or when interpreting accumulation functions. The FTC unifies the limit-of-sums definition with antiderivatives.',
        ['FTC Part 1: \\(\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)\\).', 'FTC Part 2: \\(\\int_a^b f(x)\\,dx = F(b)-F(a)\\) where \\(F\'=f\\).', 'Use Part 2 to evaluate: find \\(F\\), then \\(F(b)-F(a)\\).'],
        {
          exampleCode: `\\int_1^3 2x\\,dx.\\quad \\text{Antiderivative } F(x)=x^2.
\\\\
F(3)-F(1) = 9-1 = 8
\\\\
\\text{Extra: } \\frac{d}{dx}\\int_0^x \\cos t\\,dt = \\cos x \\text{ (Part 1).}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'For \\(2x\\), an antiderivative is \\(x^2\\); the definite integral is \\(3^2-1^2=8\\).',
        }
      ),
      subunit(
        '6-3',
        'Properties of Definite Integrals',
        'Integrals obey linearity: \\(\\int_a^b [f(x)\\pm g(x)]\\,dx = \\int_a^b f(x)\\,dx \\pm \\int_a^b g(x)\\,dx\\) and \\(\\int_a^b c\\,f(x)\\,dx = c\\int_a^b f(x)\\,dx\\). Interval additivity: \\(\\int_a^b f + \\int_b^c f = \\int_a^c f\\); reversing limits gives \\(\\int_b^a f = -\\int_a^b f\\). For even/odd functions on symmetric intervals, \\(\\int_{-a}^a f\\) simplifies (odd \\(\\Rightarrow\\) 0; even \\(\\Rightarrow\\) twice \\(\\int_0^a f\\)).\n\n' +
          'These properties let us split integrands, combine intervals, and use symmetry. They are often used together with the FTC to evaluate integrals step by step.',
        ['Linearity: \\(\\int (f\\pm g) = \\int f \\pm \\int g\\); \\(\\int c f = c\\int f\\).', '\\(\\int_a^b f + \\int_b^c f = \\int_a^c f\\); \\(\\int_b^a f = -\\int_a^b f\\).', 'Even on \\([-a,a]\\): double \\(\\int_0^a f\\); odd: zero.'],
        {
          exampleCode: `\\int_0^2 (3x+1)\\,dx = \\int_0^2 3x\\,dx + \\int_0^2 1\\,dx
\\\\
= \\left[\\frac{3x^2}{2}\\right]_0^2 + [x]_0^2 = 6+2 = 8
\\\\
\\text{Extra: } \\int_{-1}^1 x^3\\,dx = 0 \\text{ (odd function).}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Splitting the integral and using antiderivatives \\(\\frac{3x^2}{2}\\) and \\(x\\) gives 8.',
        }
      ),
      subunit(
        '6-4',
        'Antiderivatives & Basic Rules',
        'Antiderivatives reverse differentiation: \\(F\'(x)=f(x)\\) means \\(F\\) is an antiderivative of \\(f\\). The general antiderivative includes \\(+C\\) (constant of integration) because derivatives of constants are zero. Reverse power rule: \\(\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}+C\\) for \\(n\\neq -1\\); for \\(n=-1\\), \\(\\int \\frac{1}{x}\\,dx = \\ln|x|+C\\).\n\n' +
          'Sums and constant multiples: \\(\\int [f(x)+g(x)]\\,dx = \\int f(x)\\,dx + \\int g(x)\\,dx\\) and \\(\\int c\\,f(x)\\,dx = c\\int f(x)\\,dx\\). Basic trig and exponential: \\(\\int \\cos x\\,dx = \\sin x+C\\), \\(\\int \\sin x\\,dx = -\\cos x+C\\), \\(\\int e^x\\,dx = e^x+C\\).',
        ['\\(\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}+C\\) for \\(n\\neq -1\\); \\(\\int \\frac{1}{x}\\,dx = \\ln|x|+C\\).', 'Antiderivatives differ by a constant; always \\(+C\\) for indefinite integrals.', 'Linearity: \\(\\int (f+g) = \\int f + \\int g\\), \\(\\int c f = c\\int f\\).'],
        {
          exampleCode: `\\int 4x^3\\,dx = 4\\cdot\\frac{x^4}{4}+C = x^4+C
\\\\
\\text{Extra: } \\int (2x^5 - 3)\\,dx = \\frac{2x^6}{6}-3x+C = \\frac{x^6}{3}-3x+C`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Constant multiple and power rule: bring out 4, increase power by 1, divide by new power, add \\(C\\).',
        }
      ),
      subunit(
        '6-5',
        'Substitution',
        'Substitution (reverse chain rule) is used when the integrand contains a composition: an inner function and its derivative (up to a constant). Let \\(u = g(x)\\), so \\(du = g\'(x)\\,dx\\); replace \\(g(x)\\) with \\(u\\) and \\(g\'(x)\\,dx\\) with \\(du\\). The integral becomes \\(\\int f(u)\\,du\\), which we hope is simpler.\n\n' +
          'After integrating in \\(u\\), substitute back to \\(x\\). For definite integrals, either substitute back and use the original limits, or change limits: when \\(x=a\\), \\(u=g(a)\\); when \\(x=b\\), \\(u=g(b)\\). Then \\(\\int_a^b f(g(x))g\'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du\\).',
        ['Choose \\(u\\) so that \\(du\\) appears (up to a constant); substitute \\(u\\) and \\(du\\).', 'Indefinite: integrate in \\(u\\), then replace \\(u\\) with \\(g(x)\\).', 'Definite: either replace back and use \\(x\\)-limits, or change limits to \\(u\\)-values.'],
        {
          exampleCode: `\\int 2x(x^2+1)^5\\,dx.\\quad u=x^2+1 \\Rightarrow du=2x\\,dx
\\\\
\\int u^5\\,du = \\frac{u^6}{6}+C = \\frac{(x^2+1)^6}{6}+C
\\\\
\\text{Extra: } \\int \\frac{1}{2\\sqrt{x}}\\cdot e^{\\sqrt{x}}\\,dx;\\ u=\\sqrt{x} \\Rightarrow \\int e^u\\,du = e^{\\sqrt{x}}+C`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The factor \\(2x\\) is the derivative of \\(x^2+1\\), so \\(u=x^2+1\\) turns the integral into \\(\\int u^5\\,du\\).',
        }
      ),
      subunit(
        '6-6',
        'Integration Techniques (Long Division, Completing the Square, Integration by Parts)',
        'When the integrand does not match a basic form, we use additional techniques. Long division: for rational functions where the degree of the numerator is at least the denominator, divide first, then integrate the polynomial and remainder. Completing the square: rewrite quadratics to match an inverse-trig or log form.\n\n' +
          'Integration by parts: \\(\\int u\\,dv = uv - \\int v\\,du\\). Choose \\(u\\) and \\(dv\\) so that \\(du\\) is simpler and \\(\\int v\\,du\\) is easier than the original. LIATE (Log, Inverse trig, Algebraic, Trig, Exponential) often suggests \\(u\\): prefer \\(u=\\ln x\\) or \\(u=x\\) with \\(dv=e^x\\,dx\\) for \\(\\int x e^x\\,dx\\).',
        ['By parts: \\(\\int u\\,dv = uv - \\int v\\,du\\); choose \\(u\\) so \\(du\\) simplifies.', 'Long division when degree(num) \\(\\ge\\) degree(denom); then integrate quotient and remainder.', 'Completing the square for quadratics under roots or in denominators.'],
        {
          exampleCode: `\\int xe^x\\,dx.\\quad u=x,\\ dv=e^x\\,dx \\Rightarrow du=dx,\\ v=e^x
\\\\
\\int xe^x\\,dx = xe^x - \\int e^x\\,dx = xe^x - e^x + C
\\\\
\\text{Extra: } \\int \\ln x\\,dx;\\ u=\\ln x,\\ dv=dx \\Rightarrow du=\\frac{1}{x}\\,dx,\\ v=x \\Rightarrow x\\ln x - x + C`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Choosing \\(u=x\\) and \\(dv=e^x\\,dx\\) makes \\(v=e^x\\) and \\(\\int v\\,du = \\int e^x\\,dx\\) trivial.',
        }
      ),
      subunit(
        '6-7',
        'Partial Fractions',
        'Partial fractions decompose a rational function \\(\\frac{P(x)}{Q(x)}\\) (with \\(\\deg P < \\deg Q\\)) into a sum of simpler fractions whose denominators are factors of \\(Q(x)\\). For distinct linear factors \\((x-a)(x-b)\\), the form is \\(\\frac{A}{x-a}+\\frac{B}{x-b}\\); set the sum equal to the original fraction, clear denominators, and solve for \\(A\\) and \\(B\\) by substituting convenient \\(x\\) or matching coefficients.\n\n' +
          'After decomposing, integrate each term: \\(\\int \\frac{A}{x-a}\\,dx = A\\ln|x-a|+C\\). Repeated factors and irreducible quadratics have slightly different forms; the AP exam often uses distinct linears.',
        ['Decompose \\(\\frac{P}{Q}\\) into sum of fractions with factors of \\(Q\\) in denominator.', 'Distinct linears \\((x-a)(x-b)\\): \\(\\frac{A}{x-a}+\\frac{B}{x-b}\\); solve for \\(A,B\\).', 'Integrate each term: \\(\\int \\frac{A}{x-a}\\,dx = A\\ln|x-a|+C\\).'],
        {
          exampleCode: `\\int \\frac{1}{x(x+1)}\\,dx.\\quad \\frac{1}{x(x+1)} = \\frac{A}{x}+\\frac{B}{x+1}
\\\\
1 = A(x+1)+Bx.\\quad x=0 \\Rightarrow A=1;\\ x=-1 \\Rightarrow B=-1
\\\\
\\int \\left(\\frac{1}{x}-\\frac{1}{x+1}\\right)dx = \\ln|x|-\\ln|x+1|+C
\\\\
\\text{Extra: } \\frac{2}{(x-1)(x+2)} = \\frac{A}{x-1}+\\frac{B}{x+2} \\Rightarrow A=\\frac{2}{3},\\ B=-\\frac{2}{3}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Substituting \\(x=0\\) and \\(x=-1\\) into \\(1=A(x+1)+Bx\\) quickly gives \\(A\\) and \\(B\\).',
        }
      ),
      subunit(
        '6-8',
        'Improper Integrals',
        'Improper integrals occur when the interval is unbounded (\\(\\int_a^\\infty f\\) or \\(\\int_{-\\infty}^b f\\)) or when the integrand has an infinite discontinuity (e.g. vertical asymptote inside \\([a,b]\\)). We define them as limits: \\(\\int_a^\\infty f(x)\\,dx = \\lim_{b\\to\\infty}\\int_a^b f(x)\\,dx\\), and similarly for \\(\\int_{-\\infty}^b\\) and for \\(\\int_a^b f\\) when \\(f\\) is unbounded at an endpoint.\n\n' +
          'If the limit exists and is finite, the improper integral converges; otherwise it diverges. For \\(\\int_1^\\infty \\frac{1}{x^p}\\,dx\\), convergence when \\(p>1\\) and divergence when \\(p\\le 1\\) is a standard result.',
        ['Unbounded interval: \\(\\int_a^\\infty f = \\lim_{b\\to\\infty}\\int_a^b f\\); similarly for \\(-\\infty\\).', 'Unbounded integrand: define as limit approaching the bad point.', 'Converge = limit is finite; diverge = limit is \\(\\infty\\) or does not exist.'],
        {
          exampleCode: `\\int_1^\\infty \\frac{1}{x^2}\\,dx = \\lim_{b\\to\\infty} \\int_1^b x^{-2}\\,dx
\\\\
= \\lim_{b\\to\\infty} \\left[-\\frac{1}{x}\\right]_1^b = \\lim_{b\\to\\infty}\\left(-\\frac{1}{b}+1\\right) = 1
\\\\
\\text{Extra: } \\int_1^\\infty \\frac{1}{x}\\,dx = \\lim_{b\\to\\infty} \\ln b = \\infty \\text{ (diverges).}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The antiderivative of \\(x^{-2}\\) is \\(-x^{-1}\\); as \\(b\\to\\infty\\), \\(-1/b\\to 0\\), so the integral converges to 1.',
        }
      ),
      subunit(
        '6-9',
        'Selecting Techniques for Antidifferentiation',
        'Choosing the right technique depends on the integrand. Substitution: look for a composition with the inner derivative present (e.g. \\(x\\) and \\(x^2+4\\)). By parts: product of different types (e.g. polynomial × exponential, or \\(\\ln x\\) × 1). Partial fractions: rational function with denominator that factors into linears (or quadratics). Basic rules: polynomials, single powers, \\(e^x\\), \\(\\sin x\\), \\(\\cos x\\).\n\n' +
          'For \\(\\int \\frac{x}{x^2+4}\\,dx\\), the derivative of \\(x^2+4\\) is \\(2x\\); we have \\(x\\), so substitute \\(u=x^2+4\\) with \\(du=2x\\,dx\\) and adjust the constant. Try substitution first when you see an obvious inner function; then consider by parts for products, and partial fractions for rational functions.',
        ['Substitution: composition with derivative of inner function present.', 'By parts: product (e.g. \\(x\\cdot e^x\\), \\(\\ln x\\)). Partial fractions: rational with factorable denominator.', 'Simplify first (expand, factor); match structure to technique.'],
        {
          exampleCode: `\\int \\frac{x}{x^2+4}\\,dx.\\quad u=x^2+4 \\Rightarrow du=2x\\,dx
\\\\
\\frac{1}{2}\\int \\frac{du}{u} = \\frac{1}{2}\\ln|u|+C = \\frac{1}{2}\\ln(x^2+4)+C
\\\\
\\text{Extra: } \\int x\\cos x\\,dx \\Rightarrow \\text{by parts } u=x,\\ dv=\\cos x\\,dx \\Rightarrow x\\sin x + \\cos x + C`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The \\(x\\) in the numerator is (up to 2) the derivative of \\(x^2+4\\), so substitution reduces the integral to \\(\\int \\frac{1}{u}\\,du\\).',
        }
      ),
    ],
  },
  {
    unitNumber: 7,
    title: 'Differential Equations',
    subunits: [
      subunit(
        '7-0',
        'Unit Overview',
        'A differential equation is an equation that relates a function to its derivative (or derivatives). Instead of being given an explicit formula and then differentiating it, we are given information about how something changes, the rate of change, and we must reconstruct the original function. This “inverse” perspective appears everywhere: population dynamics, cooling and heating, radioactive decay, loan interest, and chemical reactions.\n\n' +
          'This unit focuses on first-order differential equations: equations that involve only the first derivative \\(\\frac{dy}{dx}\\) (or \\(\\frac{dP}{dt}\\), etc.). We learn how to interpret slope fields (which show the slope of solution curves at each point in the plane), how to approximate solutions numerically using Euler\'s method, and how to solve certain equations analytically using separation of variables. These tools allow us to model exponential and logistic growth, Newton\'s law of cooling, and many other real-world systems.\n\n' +
          'The general form of a first-order differential equation is \\(\\frac{dy}{dx} = f(x,y)\\): the rate of change of \\(y\\) with respect to \\(x\\) is given by some function of \\(x\\) and \\(y\\). A solution is a function \\(y(x)\\) that satisfies this relationship. Initial value problems specify a starting point \\(y(x_0)=y_0\\) so that we obtain a unique solution.',
        ['First-order DE: \\(\\frac{dy}{dx}=f(x,y)\\); solution = function satisfying the equation.', 'Slope fields show slopes at points; Euler\'s method approximates solutions step by step.', 'Separation of variables: rewrite as \\(\\frac{1}{h(y)}\\,dy = g(x)\\,dx\\) and integrate both sides.'],
        {
          exampleCode: `\\frac{dy}{dx} = f(x,y)
\\\\
\\text{Solution: a function } y(x) \\text{ such that its derivative equals } f(x,y(x)).`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The differential equation describes how the slope of a solution curve depends on \\(x\\) and \\(y\\); solving it means finding all curves that have those slopes.',
        }
      ),
      subunit(
        '7-1',
        'Modeling with Differential Equations',
        'Many real-world problems are stated in terms of rates of change rather than explicit formulas. When a quantity\'s rate of change depends on the quantity itself (or on time, or on other variables), we can write a differential equation to model the situation. The goal is to translate the verbal or physical description into an equation involving a function and its derivative.\n\n' +
          'For example, if a population grows in proportion to its current size, the more individuals there are, the faster the population grows, we write \\(\\frac{dP}{dt} = kP\\), where \\(P(t)\\) is population at time \\(t\\) and \\(k>0\\) is the growth rate constant. This says that the growth rate \\(dP/dt\\) is proportional to \\(P\\). Similarly, Newton\'s law of cooling states that the rate at which an object\'s temperature changes is proportional to the difference between the object\'s temperature and the ambient (room) temperature: \\(\\frac{dT}{dt} = -k(T - T_{\\text{room}})\\). The negative sign indicates that the object cools when it is hotter than the room.\n\n' +
          'Recognizing these patterns, rate proportional to quantity, or rate proportional to difference from an equilibrium, is the first step in building and solving differential equation models. Once the equation is written, we can use slope fields, Euler\'s method, or separation of variables (when applicable) to understand and compute solutions.',
        ['Translate “rate of change” into \\(\\frac{dy}{dt}\\) or \\(\\frac{dP}{dt}\\); relate it to \\(y\\), \\(P\\), or \\(t\\).', 'Exponential-type: \\(\\frac{dP}{dt}=kP\\) (rate proportional to amount).', 'Cooling: \\(\\frac{dT}{dt}=-k(T-T_{\\text{room}})\\) (rate proportional to temperature difference).'],
        {
          exampleCode: `\\frac{dP}{dt} = 0.05P \\quad \\text{(growth rate 5\\% of current population)}
\\\\
\\frac{dT}{dt} = -k(T-T_{\\text{room}}) \\quad \\text{(Newton's Law of Cooling)}
\\\\
\\text{Both are separable; solutions are exponential or exponential-type.}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The population equation says that the rate at which \\(P\\) changes is 0.05 times \\(P\\); we will see that this leads to \\(P(t)=P_0 e^{0.05t}\\). The cooling equation says temperature moves toward the room temperature at a rate proportional to the gap.',
        }
      ),
      subunit(
        '7-2',
        "Slope Fields & Euler's Method",
        'A slope field (or direction field) is a graphical representation of a differential equation \\(\\frac{dy}{dx}=f(x,y)\\). At each point \\((x,y)\\) in the plane (or in a region), we draw a short line segment whose slope is \\(f(x,y)\\). So at every point we see the slope that a solution curve would have if it passed through that point. Solution curves are curves that are tangent to these segments at every point; they “flow” along the slopes. Sketching a solution that passes through a given point (an initial condition) amounts to following the direction of the segments.\n\n' +
          "Euler's method is a numerical procedure to approximate the value of a solution at a chosen point. We start at an initial point \\((x_0,y_0)\\), take a small step in \\(x\\) of size \\(\\Delta x\\), and use the slope at \\((x_0,y_0)\\) to estimate the change in \\(y\\): \\(y_1 = y_0 + f(x_0,y_0)\\,\\Delta x\\). Then we repeat: \\(y_{n+1} = y_n + f(x_n,y_n)\\,\\Delta x\\). The smaller \\(\\Delta x\\) is, the more accurate the approximation (but the more steps we need). Euler's method is a simple example of a numerical integrator; it can be extended to get better accuracy (e.g. improved Euler, Runge,Kutta).",
        ['Slope field: at each \\((x,y)\\) draw a segment with slope \\(f(x,y)\\); solution curves follow these directions.', "Euler: \\(y_{n+1} = y_n + f(x_n,y_n)\\,\\Delta x\\); start at \\((x_0,y_0)\\), step by \\(\\Delta x\\).", 'Smaller \\(\\Delta x\\) generally gives a better approximation but more steps.'],
        {
          exampleCode: `\\frac{dy}{dx}=x+y,\\quad y(0)=1,\\quad \\Delta x=0.1
\\\\
f(0,1)=0+1=1.\\quad y_1 = 1 + 1(0.1) = 1.1
\\\\
\\text{So } y(0.1)\\approx 1.1.
\\\\
\\text{Extra step: } f(0.1,1.1)=1.2 \\Rightarrow y_2 = 1.1 + 1.2(0.1) = 1.22 \\Rightarrow y(0.2)\\approx 1.22`,
          exampleLanguage: 'latex',
          exampleExplanation: 'At \\((0,1)\\) the slope is \\(0+1=1\\), so over a step of 0.1 we expect \\(y\\) to increase by about \\(1(0.1)=0.1\\), giving \\(y(0.1)\\approx 1.1\\). Repeating gives a piecewise-linear approximation to the true solution curve.',
        }
      ),
      subunit(
        '7-3',
        'Separation of Variables',
        'Separation of variables is an algebraic and calculus technique for solving differential equations that can be written in the form \\(\\frac{dy}{dx} = g(x)\\,h(y)\\); that is, the right-hand side is a product of a function of \\(x\\) only and a function of \\(y\\) only. We “separate” by dividing both sides by \\(h(y)\\) (assuming \\(h(y)\\neq 0\\)) and multiplying by \\(dx\\) to get \\(\\frac{1}{h(y)}\\,dy = g(x)\\,dx\\). Then we integrate both sides: \\(\\int \\frac{1}{h(y)}\\,dy = \\int g(x)\\,dx\\). The left side gives an expression in \\(y\\) (plus a constant), the right side an expression in \\(x\\) (plus a constant); combining the constants we get an implicit equation relating \\(x\\) and \\(y\\). Often we can solve for \\(y\\) explicitly.\n\n' +
          'The method works because we are effectively reversing the chain rule: we treat \\(y\\) as a function of \\(x\\) and integrate with respect to \\(x\\) on one side and with respect to \\(y\\) on the other. Not every differential equation is separable; for example, \\(\\frac{dy}{dx}=x+y\\) cannot be written as \\(g(x)h(y)\\), so we use other tools (slope fields, Euler\'s method, or more advanced techniques) for those.',
        ['Separable: \\(\\frac{dy}{dx}=g(x)h(y)\\). Rewrite as \\(\\frac{1}{h(y)}\\,dy = g(x)\\,dx\\).', 'Integrate both sides; include \\(+C\\) on one side (or combine constants).', 'Solve for \\(y\\) if possible; use initial condition to find \\(C\\) when given.'],
        {
          exampleCode: `\\frac{dy}{dx}=3xy \\Rightarrow \\frac{1}{y}\\,dy = 3x\\,dx
\\\\
\\int \\frac{1}{y}\\,dy = \\int 3x\\,dx \\Rightarrow \\ln|y| = \\frac{3x^2}{2}+C
\\\\
|y| = e^{3x^2/2 + C} = e^C e^{3x^2/2} \\Rightarrow y = C_1 e^{3x^2/2}
\\\\
\\text{Extra: } \\frac{dy}{dx}=\\frac{y}{x} \\Rightarrow \\frac{dy}{y}=\\frac{dx}{x} \\Rightarrow \\ln|y|=\\ln|x|+C \\Rightarrow y=Kx`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Dividing by \\(y\\) and multiplying by \\(dx\\) puts all \\(y\\) terms on one side and all \\(x\\) terms on the other. Integrating gives \\(\\ln|y|\\) and \\(3x^2/2\\); exponentiating and absorbing the constant yields the general solution.',
        }
      ),
      subunit(
        '7-4',
        'Initial Value Problems',
        'An initial value problem (IVP) consists of a differential equation together with a single point on the solution curve, typically \\(y(x_0)=y_0\\), which we call the initial condition. The purpose of the initial condition is to select one solution from the family of solutions (which usually include an arbitrary constant \\(C\\)). By substituting the initial condition into the general solution, we solve for \\(C\\) and obtain the unique solution that passes through the given point.\n\n' +
          'Procedure: (1) Solve the differential equation (e.g. by separation of variables) to get the general solution, which will contain \\(C\\). (2) Substitute \\(x=x_0\\) and \\(y=y_0\\) into the general solution. (3) Solve for \\(C\\). (4) Write the final answer with \\(C\\) replaced by its value. This ensures that our model not only obeys the rate law but also matches the observed state at one time.',
        ['IVP = differential equation + initial condition \\(y(x_0)=y_0\\).', 'Find general solution (with \\(C\\)), then plug in \\((x_0,y_0)\\) to solve for \\(C\\).', 'Final answer: unique solution that satisfies both the DE and the initial condition.'],
        {
          exampleCode: `\\frac{dy}{dx}=2y,\\quad y(0)=3
\\\\
\\frac{1}{y}\\,dy = 2\\,dx \\Rightarrow \\ln|y|=2x+C \\Rightarrow y=Ce^{2x}
\\\\
y(0)=3 \\Rightarrow 3 = C e^0 = C \\Rightarrow C=3
\\\\
y = 3e^{2x}
\\\\
\\text{Extra: } y(1)=2 \\Rightarrow 2=Ce^2 \\Rightarrow C=2e^{-2} \\Rightarrow y=2e^{2x-2}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The general solution \\(y=Ce^{2x}\\) has one free constant; the condition \\(y(0)=3\\) pins down \\(C=3\\), so the only solution through \\((0,3)\\) is \\(y=3e^{2x}\\).',
        }
      ),
      subunit(
        '7-5',
        'Exponential Growth & Decay Models',
        'When the rate of change of a quantity is proportional to the quantity itself, \\(\\frac{dP}{dt}=kP\\), the model is called exponential growth (if \\(k>0\\)) or exponential decay (if \\(k<0\\)). The solution is \\(P(t)=P_0 e^{kt}\\), where \\(P_0\\) is the value at \\(t=0\\) (the initial value). This formula is derived by separation of variables: \\(\\frac{1}{P}\\,dP = k\\,dt\\), integrate to get \\(\\ln|P|=kt+C\\), then \\(P=e^{kt+C}=P_0 e^{kt}\\) with \\(P_0=e^C\\).\n\n' +
          'In growth, \\(k>0\\) and \\(P(t)\\) increases without bound as \\(t\\) increases; doubling time is constant. In decay, \\(k<0\\) and \\(P(t)\\) approaches zero; half-life is constant. Applications include population growth (with unlimited resources), radioactive decay, continuously compounded interest, and simple models of drug concentration. When resources are limited, the logistic model (next subunit) is more realistic.',
        ['\\(\\frac{dP}{dt}=kP\\) \\(\\Rightarrow\\) \\(P(t)=P_0 e^{kt}\\). \\(k>0\\) growth, \\(k<0\\) decay.', 'Initial value \\(P_0\\) sets the scale; \\(k\\) sets the rate.', 'Doubling/half-life: \\(e^{kT}=2\\) or \\(1/2\\) \\(\\Rightarrow\\) \\(T=\\frac{\\ln 2}{|k|}\\) or \\(\\frac{\\ln(1/2)}{k}\\).'],
        {
          exampleCode: `P(0)=100,\\ k=0.04 \\Rightarrow P(t)=100e^{0.04t}
\\\\
P(10)=100e^{0.4} \\approx 149
\\\\
\\text{Decay: } \\frac{dQ}{dt}=-0.2Q \\Rightarrow Q(t)=Q_0 e^{-0.2t}
\\\\
\\text{Extra: half-life } T \\text{ when } e^{-0.2T}=\\frac{1}{2} \\Rightarrow T=\\frac{\\ln 2}{0.2}\\approx 3.47`,
          exampleLanguage: 'latex',
          exampleExplanation: 'With 4% growth rate, \\(k=0.04\\); after 10 time units the population is \\(100e^{0.4}\\approx 149\\). For decay, the negative \\(k\\) makes the exponent negative so \\(Q(t)\\) decreases toward zero.',
        }
      ),
      subunit(
        '7-6',
        'Logistic Growth Models',
        'Logistic growth models situations where growth is limited by resources (food, space, etc.). Instead of \\(\\frac{dP}{dt}=kP\\), we use \\(\\frac{dP}{dt}=kP\\big(1-\\frac{P}{L}\\big)\\), where \\(L\\) is the carrying capacity, the maximum population the environment can sustain. When \\(P\\) is small, \\(1-P/L\\approx 1\\) and growth is approximately exponential; as \\(P\\) approaches \\(L\\), the factor \\(1-P/L\\) approaches zero, so the growth rate slows and \\(P\\) levels off near \\(L\\).\n\n' +
          'The solution can be written in the form \\(P(t)=\\frac{L}{1+Ce^{-kt}}\\). The constant \\(C\\) is determined by the initial condition: if \\(P(0)=P_0\\), then \\(P_0=\\frac{L}{1+C}\\), so \\(1+C=\\frac{L}{P_0}\\) and \\(C=\\frac{L}{P_0}-1\\). As \\(t\\to\\infty\\), \\(e^{-kt}\\to 0\\), so \\(P(t)\\to L\\). The logistic model is separable; solving it involves partial fractions or a substitution to integrate \\(\\int \\frac{dP}{P(L-P)}\\).',
        ['Logistic: \\(\\frac{dP}{dt}=kP(1-\\frac{P}{L})\\); \\(L\\) = carrying capacity.', 'Solution: \\(P(t)=\\frac{L}{1+Ce^{-kt}}\\); \\(P\\to L\\) as \\(t\\to\\infty\\).', 'Use \\(P(0)=P_0\\) to find \\(C\\): \\(P_0=\\frac{L}{1+C}\\) \\(\\Rightarrow\\) \\(C=\\frac{L}{P_0}-1\\).'],
        {
          exampleCode: `\\frac{dP}{dt}=0.3P\\left(1-\\frac{P}{500}\\right),\\quad P(0)=50
\\\\
P(t)=\\frac{500}{1+Ce^{-0.3t}}.\\quad 50=\\frac{500}{1+C} \\Rightarrow 1+C=10 \\Rightarrow C=9
\\\\
P(t)=\\frac{500}{1+9e^{-0.3t}}
\\\\
\\text{As } t\\to\\infty,\\ P(t)\\to 500 \\text{ (carrying capacity).}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'With \\(L=500\\) and \\(P(0)=50\\), we get \\(50(1+C)=500\\) so \\(C=9\\). The solution approaches 500 as time increases, so the population levels off at the carrying capacity.',
        }
      ),
    ],
  },
  {
    unitNumber: 8,
    title: 'Applications of Integration',
    subunits: [
      subunit(
        '8-0',
        'Unit Overview',
        'Up to this point, integrals have primarily been tools for reversing derivatives or computing signed area. In this unit, integration becomes geometric and physical. We use integrals to compute average values of functions, total distance traveled by an object moving along a line, area between two curves, volumes of solids (both by cross sections and by rotation), and the length of a curve (arc length).\n\n' +
          'The unifying idea is accumulation. If we can describe a quantity in very small pieces, thin rectangles, thin disks, thin slices, we can sum infinitely many of those pieces using an integral. Every application in this unit follows the same structure: (1) Identify a small piece. (2) Express that piece mathematically (height × width, area of a slice, etc.). (3) Integrate over the interval. That is the universal blueprint. The “integral of a rate” gives total change; the “integral of an area” gives volume or another accumulated measure.',
        ['Accumulation: small pieces (rectangles, disks, slices) summed via \\(\\int\\).', 'Blueprint: identify piece → express mathematically → integrate over interval.', 'Applications: average value, displacement/distance, area between curves, volume (cross section or rotation), arc length.'],
        {
          exampleCode: `\\text{1. Identify small piece.}
\\\\
\\text{2. Express piece (e.g. area } A(x),\\text{ length } \\sqrt{1+(f')^2}\\,dx\\text{).}
\\\\
\\text{3. Integrate: } \\int_a^b \\text{(piece)}\\,dx \\text{ or } \\int_a^b \\text{(piece)}\\,dt.`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Whether we are summing areas of rectangles, cross-sectional areas, or lengths of curve segments, the pattern is the same: express the infinitesimal quantity and integrate.',
        }
      ),
      subunit(
        '8-1',
        'Average Value of a Function',
        'The average value of a function \\(f\\) on an interval \\([a,b]\\) is not found by plugging in the midpoint or averaging a few values. Instead, it is the constant height that would produce the same total accumulated area over \\([a,b]\\) as \\(f\\) does. So we sum the area (the definite integral) and “spread it evenly” over the interval length: \\(f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx\\).\n\n' +
          'Interpretation: if \\(f(x)\\) were replaced by the constant \\(f_{\\text{avg}}\\) on \\([a,b]\\), the area under the horizontal line would equal the area under \\(y=f(x)\\). General method: (1) Compute \\(\\int_a^b f(x)\\,dx\\). (2) Divide by \\(b-a\\). (3) Simplify.',
        ['\\(f_{\\text{avg}} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx\\): total area divided by interval length.', 'Not the midpoint value; it is the constant height with the same total area.', 'Compute integral, then divide by \\(b-a\\).'],
        {
          exampleCode: `f(x)=x^2 \\text{ on } [0,2]
\\\\
\\int_0^2 x^2\\,dx = \\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{8}{3}
\\\\
f_{\\text{avg}} = \\frac{1}{2-0}\\cdot\\frac{8}{3} = \\frac{4}{3}
\\\\
\\text{Extra: } f(x)=\\sin x \\text{ on } [0,\\pi] \\Rightarrow f_{\\text{avg}} = \\frac{1}{\\pi}\\int_0^\\pi \\sin x\\,dx = \\frac{2}{\\pi}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The area under \\(y=x^2\\) from 0 to 2 is \\(8/3\\); a rectangle of height \\(4/3\\) and width 2 has the same area.',
        }
      ),
      subunit(
        '8-2',
        'Motion via Integrals',
        'Derivatives relate position, velocity, and acceleration (\\(v=s\'\\), \\(a=v\'\\)). Integration reverses this: if we know velocity \\(v(t)\\), then position (displacement) is \\(s(t)=\\int v(t)\\,dt\\), and the displacement from \\(t=a\\) to \\(t=b\\) is \\(\\int_a^b v(t)\\,dt\\). Displacement can be zero or negative if the object moves backward; total distance traveled is \\(\\int_a^b |v(t)|\\,dt\\), which requires splitting the interval at points where \\(v(t)=0\\) and integrating the absolute value on each subinterval.\n\n' +
          'General method for displacement: integrate velocity and evaluate the definite integral. For total distance: find where \\(v(t)=0\\), split the integral at those times, and on each piece use the appropriate sign (or \\(|v(t)|\\)) so that the contributions are positive.',
        ['Displacement \\(s(b)-s(a) = \\int_a^b v(t)\\,dt\\); distance = \\(\\int_a^b |v(t)|\\,dt\\).', 'When \\(v\\) changes sign, split the interval and use \\(|v|\\) (or add positive contributions).', 'Integrate velocity for displacement; use absolute value for total distance.'],
        {
          exampleCode: `v(t)=3t^2-6t = 3t(t-2).\\quad \\text{Displacement } \\int_0^3 (3t^2-6t)\\,dt = [t^3-3t^2]_0^3 = 0
\\\\
\\text{Distance: } v=0 \\text{ at } t=0,2.\\quad \\int_0^2 |v| + \\int_2^3 |v| \\text{ (or } -\\int_0^2 v + \\int_2^3 v \\text{ if } v<0 \\text{ on } (0,2)).`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Displacement 0 means the object returns to its starting position. Total distance is the sum of distances traveled in each direction; from 0 to 2 the velocity is negative, so distance is \\(-\\int_0^2 v\\), and from 2 to 3 use \\(\\int_2^3 v\\).',
        }
      ),
      subunit(
        '8-3',
        'Area Between Curves',
        'When two curves \\(y=f(x)\\) and \\(y=g(x)\\) overlap on an interval \\([a,b]\\), the area between them (with \\(f\\ge g\\) on \\([a,b]\\)) is \\(\\int_a^b [f(x)-g(x)]\\,dx\\). The key idea is to subtract vertically: at each \\(x\\), the height of the region is the top curve minus the bottom curve. If the curves cross, find intersection points and split the integral so that in each subinterval we know which is top and which is bottom.\n\n' +
          'General method: (1) Find intersection points (set \\(f(x)=g(x)\\)). (2) Determine which function is on top and which is on bottom in each region. (3) Set up \\(\\int (\\text{top}-\\text{bottom})\\,dx\\) for each piece. (4) Integrate and add (or subtract) as needed.',
        ['Area = \\(\\int_a^b (\\text{top} - \\text{bottom})\\,dx\\); subtract vertically.', 'Find intersections to get limits and to split regions if curves cross.', 'Top/bottom determined by which curve is higher on that interval.'],
        {
          exampleCode: `y=x^2 \\text{ and } y=4.\\quad x^2=4 \\Rightarrow x=\\pm 2
\\\\
\\text{Top } y=4,\\ \\text{bottom } y=x^2:\\quad \\int_{-2}^2 (4-x^2)\\,dx = \\left[4x-\\frac{x^3}{3}\\right]_{-2}^2 = \\frac{32}{3}
\\\\
\\text{Extra: } y=x^2,\\ y=2x \\Rightarrow x^2=2x \\Rightarrow x=0,2;\\ \\text{area } = \\int_0^2 (2x-x^2)\\,dx = \\frac{4}{3}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Between \\(x=-2\\) and \\(x=2\\), the line \\(y=4\\) is above the parabola \\(y=x^2\\); the integral gives the area of that region.',
        }
      ),
      subunit(
        '8-4',
        'Volumes with Cross Sections',
        'Instead of rotating a region to form a solid, we build a solid by stacking cross sections perpendicular to an axis. Each slice has a cross-sectional area \\(A(x)\\) (or \\(A(y)\\)) that depends on the position along the axis. The volume is \\(V = \\int_a^b A(x)\\,dx\\) (or the analogous integral in \\(y\\)). The cross sections might be squares, rectangles, semicircles, or other shapes; the key is to express the area of a typical slice in terms of \\(x\\) (or \\(y\\)) and then integrate.\n\n' +
          'General method: (1) Identify the base region and the axis perpendicular to the slices. (2) Determine the shape and dimensions of a typical cross section at position \\(x\\). (3) Write \\(A(x)\\) in terms of \\(x\\). (4) Integrate \\(A(x)\\) over the interval that spans the solid.',
        ['\\(V = \\int_a^b A(x)\\,dx\\) where \\(A(x)\\) = area of cross section at \\(x\\).', 'Slices are perpendicular to the axis; express \\(A(x)\\) using the geometry of the slice.', 'Common: squares, rectangles, semicircles; side length or radius in terms of \\(x\\).'],
        {
          exampleCode: `\\text{Base: } y=x \\text{ and } y=0 \\text{ from } 0 \\text{ to } 2.\\quad \\text{Cross sections: squares } \\perp x\\text{-axis.}
\\\\
\\text{Side length } = x \\Rightarrow A(x)=x^2.\\quad V = \\int_0^2 x^2\\,dx = \\frac{8}{3}
\\\\
\\text{Extra: semicircles } \\Rightarrow A(x)=\\frac{1}{2}\\pi\\left(\\frac{x}{2}\\right)^2 = \\frac{\\pi x^2}{8}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'At each \\(x\\) the cross section is a square whose side equals the vertical distance from the axis to the line \\(y=x\\), so the area is \\(x^2\\).',
        }
      ),
      subunit(
        '8-5',
        'Disc and Washer Methods',
        'When we rotate a region about a horizontal or vertical axis, we generate a solid of revolution. The disc method applies when there is no hole: each slice is a circle of radius \\(R(x)\\) (the distance from the axis to the curve), so the cross-sectional area is \\(\\pi R(x)^2\\) and \\(V = \\pi\\int_a^b R(x)^2\\,dx\\). The washer method applies when there is a hole: the slice is a ring with outer radius \\(R(x)\\) and inner radius \\(r(x)\\), so \\(A(x)=\\pi[R(x)^2 - r(x)^2]\\) and \\(V = \\pi\\int_a^b [R(x)^2 - r(x)^2]\\,dx\\).\n\n' +
          'General method: (1) Sketch the region and the axis. (2) Identify the radius (or radii) as the distance from the axis to the curve(s). (3) Square the radius (or subtract squares for a washer). (4) Multiply by \\(\\pi\\) and integrate.',
        ['Disc: \\(V = \\pi\\int_a^b R(x)^2\\,dx\\) (no hole). Washer: \\(V = \\pi\\int_a^b [R^2 - r^2]\\,dx\\) (hole).', '\\(R\\) = distance from axis to outer curve; \\(r\\) = distance to inner curve (boundary of hole).', 'Same idea in \\(y\\) if rotating about a horizontal axis and integrating in \\(y\\).'],
        {
          exampleCode: `y=x^2 \\text{ from } 0 \\text{ to } 1 \\text{ about } x\\text{-axis}.\\quad R(x)=x^2
\\\\
V = \\pi\\int_0^1 (x^2)^2\\,dx = \\pi\\int_0^1 x^4\\,dx = \\pi\\left[\\frac{x^5}{5}\\right]_0^1 = \\frac{\\pi}{5}
\\\\
\\text{Washer: region between } y=x^2 \\text{ and } y=x \\text{ about } x\\text{-axis } \\Rightarrow R=x,\\ r=x^2`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Rotating \\(y=x^2\\) about the \\(x\\)-axis gives discs of radius \\(x^2\\); the volume is \\(\\pi\\int_0^1 x^4\\,dx = \\pi/5\\).',
        }
      ),
      subunit(
        '8-6',
        'Arc Length & Distance Traveled',
        'Arc length measures the length of a curve \\(y=f(x)\\) from \\(x=a\\) to \\(x=b\\). The formula is \\(L = \\int_a^b \\sqrt{1+[f\'(x)]^2}\\,dx\\). It comes from approximating the curve by many small line segments: each segment has horizontal run \\(\\Delta x\\) and vertical rise \\(f\'(x)\\Delta x\\) (approximately), so its length is \\(\\sqrt{(\\Delta x)^2 + (f\'(x)\\Delta x)^2} = \\sqrt{1+[f\'(x)]^2}\\,\\Delta x\\); summing and taking the limit gives the integral.\n\n' +
          'General method: (1) Compute \\(f\'(x)\\). (2) Form \\(1+[f\'(x)]^2\\). (3) Take the square root and integrate. The integral often requires substitution (e.g. \\(u=1+4x^2\\) for \\(f(x)=x^2\\)) or a trig substitution. Total distance traveled by a particle is \\(\\int |v(t)|\\,dt\\) over the time interval, which is a different use of “distance” (along the line of motion) versus arc length (along a curve in the plane).',
        ['\\(L = \\int_a^b \\sqrt{1+[f\'(x)]^2}\\,dx\\); comes from Pythagorean theorem on infinitesimal segments.', 'Compute \\(f\'\\); then \\(1+(f\')^2\\); then integrate \\(\\sqrt{\\cdots}\\).', 'Distance traveled (motion): \\(\\int |v(t)|\\,dt\\); arc length is length of the graph of \\(f\\).'],
        {
          exampleCode: `y=x^2 \\text{ from } 0 \\text{ to } 1.\\quad f'(x)=2x
\\\\
L = \\int_0^1 \\sqrt{1+4x^2}\\,dx
\\\\
\\text{Substitution } u=1+4x^2,\\ du=8x\\,dx \\text{ (or trig sub)} \\Rightarrow \\text{ leads to } \\frac{1}{4}\\left(2\\sqrt{5}+\\ln(2+\\sqrt{5})\\right)
\\\\
\\text{Distance traveled: } \\int_a^b |v(t)|\\,dt`,
          exampleLanguage: 'latex',
          exampleExplanation: 'For \\(y=x^2\\), \\(f\'(x)=2x\\), so the integrand is \\(\\sqrt{1+4x^2}\\). Evaluating this integral requires a substitution or trig substitution; the result gives the length of the parabola from \\((0,0)\\) to \\((1,1)\\).',
        }
      ),
    ],
  },
  // BC-only units
  {
    unitNumber: 9,
    title: 'Parametric, Polar, and Vector-Valued Functions',
    subunits: [
      subunit(
        '9-0',
        'Unit Overview',
        'In previous units, curves were written explicitly as \\(y=f(x)\\). But many curves cannot be expressed that way, circles (except half-circles), loops, and motion in the plane require a different approach. In this unit we describe curves using three representations: parametric equations (both \\(x\\) and \\(y\\) depend on a third variable, usually time \\(t\\)), vector-valued functions (position written as a vector \\(\\vec{r}(t)=\\langle x(t),y(t)\\rangle\\)), and polar coordinates (points described by distance \\(r\\) from the origin and angle \\(\\theta\\)).\n\n' +
          'These representations allow us to analyze motion, slope, curvature, area, and arc length in more flexible ways. Parametric and vector forms are natural for particle motion; polar coordinates simplify many curves (circles, roses, spirals) and lead to compact area and arc length formulas. The BC exam expects fluency in converting between forms, computing derivatives (including \\(dy/dx\\) and \\(d^2y/dx^2\\) for parametric curves), and setting up integrals for arc length and area in polar form.',
        ['Parametric: \\(x=f(t)\\), \\(y=g(t)\\); slope \\(dy/dx = (dy/dt)/(dx/dt)\\).', 'Vector-valued: \\(\\vec{r}(t)=\\langle x(t),y(t)\\rangle\\); derivative component-wise.', 'Polar: \\(x=r\\cos\\theta\\), \\(y=r\\sin\\theta\\); area \\(\\frac{1}{2}\\int r^2\\,d\\theta\\), arc length from \\(\\sqrt{(dx/dt)^2+(dy/dt)^2}\\).'],
        {
          exampleCode: `x=f(t),\\quad y=g(t) \\quad \\text{(parametric)}
\\\\
\\vec{r}(t) = \\langle x(t), y(t) \\rangle \\quad \\text{(vector)}
\\\\
x=r\\cos\\theta,\\quad y=r\\sin\\theta \\quad \\text{(polar)}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Parametric and vector forms use a parameter \\(t\\); polar uses \\(r\\) and \\(\\theta\\). Each representation has derivative and integral formulas suited to its geometry.',
        }
      ),
      subunit(
        '9-1',
        'Parametric Equations & Derivatives',
        'A parametric curve is defined by \\(x=f(t)\\) and \\(y=g(t)\\), where \\(t\\) runs over some interval. The slope of the curve at a point is not \\(dy/dx\\) computed directly, because \\(y\\) is not given as a function of \\(x\\); instead we use the chain rule: \\(\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}\\), provided \\(dx/dt\\neq 0\\). So we compute \\(dx/dt\\) and \\(dy/dt\\) separately, then form their ratio.\n\n' +
          'General method: (1) Compute \\(dx/dt\\) and \\(dy/dt\\). (2) Form \\(dy/dx = (dy/dt)/(dx/dt)\\). (3) Simplify. (4) Evaluate at a given \\(t\\) if needed. Horizontal tangents occur when \\(dy/dt=0\\) (and \\(dx/dt\\neq 0\\)); vertical tangents when \\(dx/dt=0\\) (and \\(dy/dt\\neq 0\\)).',
        ['\\(\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}\\) (chain rule); require \\(dx/dt\\neq 0\\).', 'Horizontal tangent: \\(dy/dt=0\\); vertical tangent: \\(dx/dt=0\\).', 'Compute \\(x\'(t)\\) and \\(y\'(t)\\), then take the ratio.'],
        {
          exampleCode: `x=t^2,\\quad y=t^3 \\Rightarrow \\frac{dx}{dt}=2t,\\ \\frac{dy}{dt}=3t^2
\\\\
\\frac{dy}{dx} = \\frac{3t^2}{2t} = \\frac{3t}{2}
\\\\
\\text{At } t=1:\\ \\frac{dy}{dx} = \\frac{3}{2}
\\\\
\\text{Extra: } x=\\cos t,\\ y=\\sin t \\Rightarrow \\frac{dy}{dx} = \\frac{\\cos t}{-\\sin t} = -\\cot t`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The ratio \\((dy/dt)/(dx/dt)\\) gives the slope of the parametric curve at parameter \\(t\\). At \\(t=1\\) the point is \\((1,1)\\) and the slope is \\(3/2\\).',
        }
      ),
      subunit(
        '9-2',
        'Second Derivatives & Motion in Parametric Form',
        'The second derivative \\(d^2y/dx^2\\) for a parametric curve measures concavity. Since \\(dy/dx\\) is a function of \\(t\\), we differentiate it with respect to \\(t\\) and then divide by \\(dx/dt\\): \\(\\frac{d^2y}{dx^2} = \\frac{d/dt(dy/dx)}{dx/dt}\\). In motion problems, position is \\(\\vec{r}(t)=\\langle x(t),y(t)\\rangle\\), velocity is \\(\\vec{v}(t)=\\vec{r}\'(t)=\\langle x\'(t),y\'(t)\\rangle\\), and acceleration is \\(\\vec{a}(t)=\\vec{r}\'\'(t)=\\langle x\'\'(t),y\'\'(t)\\rangle\\).\n\n' +
          'General method for \\(d^2y/dx^2\\): (1) Find \\(dy/dx\\) in terms of \\(t\\). (2) Differentiate that with respect to \\(t\\) to get \\(d/dt(dy/dx)\\). (3) Divide by \\(dx/dt\\).',
        ['\\(\\frac{d^2y}{dx^2} = \\frac{d/dt(dy/dx)}{dx/dt}\\); concavity in parametric form.', '\\(\\vec{v}(t)=\\vec{r}\'(t)\\), \\(\\vec{a}(t)=\\vec{r}\'\'(t)\\); velocity and acceleration are component-wise derivatives.', 'Differentiate \\(dy/dx\\) with respect to \\(t\\), then divide by \\(dx/dt\\).'],
        {
          exampleCode: `x=t,\\quad y=t^2 \\Rightarrow \\frac{dy}{dx} = \\frac{2t}{1} = 2t
\\\\
\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) = 2,\\quad \\frac{dx}{dt}=1 \\Rightarrow \\frac{d^2y}{dx^2} = \\frac{2}{1} = 2
\\\\
\\text{Constant concavity (parabola).}
\\\\
\\text{Motion: } \\vec{r}(t)=\\langle t^2,\\sin t\\rangle \\Rightarrow \\vec{v}=\\langle 2t,\\cos t\\rangle,\\ \\vec{a}=\\langle 2,-\\sin t\\rangle`,
          exampleLanguage: 'latex',
          exampleExplanation: 'For \\(x=t\\), \\(y=t^2\\), the first derivative is \\(2t\\) and the second derivative with respect to \\(x\\) is \\(2\\), so the curve is concave up everywhere.',
        }
      ),
      subunit(
        '9-3',
        'Arc Length (Parametric)',
        'The arc length of a parametric curve \\(x=x(t)\\), \\(y=y(t)\\) from \\(t=a\\) to \\(t=b\\) is \\(L = \\int_a^b \\sqrt{(dx/dt)^2+(dy/dt)^2}\\,dt\\). This comes from the Pythagorean theorem applied to a small displacement: in time \\(dt\\), the particle moves approximately \\(dx\\) in \\(x\\) and \\(dy\\) in \\(y\\), so the distance is \\(\\sqrt{(dx)^2+(dy)^2} = \\sqrt{(dx/dt)^2+(dy/dt)^2}\\,dt\\).\n\n' +
          'General method: (1) Compute \\(dx/dt\\) and \\(dy/dt\\). (2) Square them and add. (3) Take the square root. (4) Integrate from \\(t=a\\) to \\(t=b\\). For the unit circle \\(x=\\cos t\\), \\(y=\\sin t\\), we get \\(\\sqrt{\\sin^2 t+\\cos^2 t}=1\\), so \\(L=\\int_0^{2\\pi} 1\\,dt = 2\\pi\\).',
        ['\\(L = \\int_a^b \\sqrt{(dx/dt)^2+(dy/dt)^2}\\,dt\\); speed \\(\\times\\) time.', 'Same as \\(\\int_a^b |\\vec{v}(t)|\\,dt\\) when \\(\\vec{r}=\\langle x,y\\rangle\\).', 'Compute \\(x\'(t)\\) and \\(y\'(t)\\), then \\(\\sqrt{(x\')^2+(y\')^2}\\) and integrate.'],
        {
          exampleCode: `x=\\cos t,\\quad y=\\sin t
\\\\
\\sqrt{(-\\sin t)^2+(\\cos t)^2} = \\sqrt{\\sin^2 t+\\cos^2 t} = 1
\\\\
L = \\int_0^{\\pi/2} 1\\,dt = \\frac{\\pi}{2} \\quad \\text{(quarter circle)}
\\\\
\\text{Extra: } x=t^2,\\ y=t^3 \\Rightarrow L = \\int_0^1 \\sqrt{4t^2+9t^4}\\,dt = \\int_0^1 t\\sqrt{4+9t^2}\\,dt`,
          exampleLanguage: 'latex',
          exampleExplanation: 'For the circle, the integrand simplifies to 1, so arc length equals the length of the \\(t\\)-interval, a quarter circle has length \\(\\pi/2\\).',
        }
      ),
      subunit(
        '9-4',
        'Vector-Valued Functions (Differentiation & Integration)',
        'A vector-valued function \\(\\vec{r}(t)=\\langle x(t),y(t)\\rangle\\) (or with a \\(z\\)-component in space) gives position as a vector. The derivative is taken component-wise: \\(\\vec{r}\'(t)=\\langle x\'(t),y\'(t)\\rangle\\), which is the velocity vector. The second derivative is acceleration. Integration is also component-wise: \\(\\int \\vec{r}(t)\\,dt = \\langle \\int x(t)\\,dt,\\int y(t)\\,dt\\rangle + \\vec{C}\\), where \\(\\vec{C}\\) is a constant vector.\n\n' +
          'General method for differentiation: differentiate each component. For integration: integrate each component and add a constant vector. Definite integrals: \\(\\int_a^b \\vec{r}(t)\\,dt = \\langle \\int_a^b x(t)\\,dt,\\int_a^b y(t)\\,dt\\rangle\\).',
        ['\\(\\vec{r}\'(t)=\\langle x\'(t),y\'(t)\\rangle\\); derivative component-wise.', '\\(\\int \\vec{r}\\,dt = \\langle \\int x\\,dt,\\int y\\,dt\\rangle + \\vec{C}\\).', 'Velocity \\(\\vec{v}=\\vec{r}\'\\); acceleration \\(\\vec{a}=\\vec{r}\'\'\\).'],
        {
          exampleCode: `\\vec{r}(t) = \\langle t^2, \\sin t \\rangle
\\\\
\\vec{v}(t) = \\vec{r}'(t) = \\langle 2t, \\cos t \\rangle,\\quad \\vec{a}(t) = \\langle 2, -\\sin t \\rangle
\\\\
\\int \\langle 3t, 2 \\rangle\\,dt = \\left\\langle \\frac{3t^2}{2}, 2t \\right\\rangle + \\vec{C}
\\\\
\\text{Extra: } \\int_0^1 \\langle t, t^2 \\rangle\\,dt = \\left\\langle \\frac{1}{2}, \\frac{1}{3} \\right\\rangle`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Differentiating or integrating a vector-valued function is done by applying the operation to each component. The constant of integration is a vector \\(\\vec{C}=\\langle C_1,C_2\\rangle\\).',
        }
      ),
      subunit(
        '9-5',
        'Polar Coordinates & Polar Derivatives',
        'In polar coordinates, a point is given by \\((r,\\theta)\\) where \\(r\\) is the distance from the origin and \\(\\theta\\) is the angle from the positive \\(x\\)-axis. Conversion: \\(x=r\\cos\\theta\\) and \\(y=r\\sin\\theta\\). A curve may be given as \\(r=r(\\theta)\\). The slope \\(dy/dx\\) in polar form is found by writing \\(x\\) and \\(y\\) in terms of \\(\\theta\\), then \\(\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta}\\). Using \\(x=r\\cos\\theta\\) and \\(y=r\\sin\\theta\\) with \\(r=r(\\theta)\\), we get \\(\\frac{dy}{dx} = \\frac{r\'\\sin\\theta + r\\cos\\theta}{r\'\\cos\\theta - r\\sin\\theta}\\), where \\(r\'=dr/d\\theta\\).\n\n' +
          'General method: (1) Find \\(r\'=dr/d\\theta\\). (2) Substitute into the slope formula. (3) Simplify. Horizontal tangent when numerator \\(=0\\); vertical when denominator \\(=0\\).',
        ['\\(x=r\\cos\\theta\\), \\(y=r\\sin\\theta\\); \\(\\frac{dy}{dx} = \\frac{r\'\\sin\\theta+r\\cos\\theta}{r\'\\cos\\theta-r\\sin\\theta}\\).', '\\(r\' = dr/d\\theta\\); slope in terms of \\(r\\) and \\(\\theta\\).', 'Horizontal tangent: \\(r\'\\sin\\theta+r\\cos\\theta=0\\); vertical: \\(r\'\\cos\\theta-r\\sin\\theta=0\\).'],
        {
          exampleCode: `r=2\\theta \\Rightarrow r'=2
\\\\
\\frac{dy}{dx} = \\frac{2\\sin\\theta+2\\theta\\cos\\theta}{2\\cos\\theta-2\\theta\\sin\\theta} = \\frac{\\sin\\theta+\\theta\\cos\\theta}{\\cos\\theta-\\theta\\sin\\theta}
\\\\
\\text{Extra: } r=1+\\cos\\theta \\Rightarrow r'=-\\sin\\theta;\\ \\text{cardioid slope at } \\theta=\\pi/2 \\text{ uses formula.}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'For \\(r=2\\theta\\) (a spiral), \\(r\'=2\\); the slope formula gives \\(dy/dx\\) in terms of \\(\\theta\\).',
        }
      ),
      subunit(
        '9-6',
        'Area in Polar Coordinates',
        'The area enclosed by a polar curve \\(r=r(\\theta)\\) from \\(\\theta=\\alpha\\) to \\(\\theta=\\beta\\) is \\(A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta\\). This comes from summing thin wedges: a wedge between angles \\(\\theta\\) and \\(\\theta+d\\theta\\) has approximate area \\(\\frac{1}{2}r^2\\,d\\theta\\) (area of a circular sector of radius \\(r\\) and angle \\(d\\theta\\)).\n\n' +
          'General method: (1) Identify the \\(\\theta\\)-interval (often \\(0\\) to \\(2\\pi\\) for a full closed curve, or find where \\(r=0\\)). (2) Square \\(r(\\theta)\\). (3) Integrate \\(\\frac{1}{2}\\int r^2\\,d\\theta\\) over the interval. For area between two polar curves, use \\(A=\\frac{1}{2}\\int (r_{\\text{outer}}^2 - r_{\\text{inner}}^2)\\,d\\theta\\).',
        ['\\(A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta\\); area of wedges \\(\\frac{1}{2}r^2\\,d\\theta\\).', 'Between two curves: \\(\\frac{1}{2}\\int (r_1^2 - r_2^2)\\,d\\theta\\) (larger minus smaller).', 'Find \\(\\theta\\)-limits (full curve or where \\(r=0\\)); then integrate \\(r^2/2\\).'],
        {
          exampleCode: `r=2 \\text{ from } 0 \\text{ to } 2\\pi
\\\\
A = \\frac{1}{2}\\int_0^{2\\pi} 4\\,d\\theta = 2\\int_0^{2\\pi} d\\theta = 4\\pi \\quad \\text{(circle radius 2)}
\\\\
\\text{Extra: } r=2\\cos\\theta \\text{ (circle)} \\Rightarrow A = \\frac{1}{2}\\int_{-\\pi/2}^{\\pi/2} 4\\cos^2\\theta\\,d\\theta = \\pi`,
          exampleLanguage: 'latex',
          exampleExplanation: 'For the circle \\(r=2\\), \\(r^2=4\\) is constant, so \\(A=\\frac{1}{2}(4)(2\\pi)=4\\pi\\), the area of a circle of radius 2.',
        }
      ),
    ],
  },
  {
    unitNumber: 10,
    title: 'Infinite Sequences and Series',
    subunits: [
      subunit(
        '10-0',
        'Unit Overview',
        'An infinite series is the sum of infinitely many terms: \\(\\sum_{n=1}^\\infty a_n = a_1+a_2+a_3+\\cdots\\). Unlike finite sums, infinite series require careful analysis, adding infinitely many numbers does not always produce a finite result. A series converges if the sequence of partial sums \\(S_N = \\sum_{n=1}^N a_n\\) approaches a finite limit as \\(N\\to\\infty\\); otherwise the series diverges.\n\n' +
          'This unit focuses on determining whether a series converges or diverges. We use several tests: the \\(n\\)th-term test (if \\(a_n\\not\\to 0\\) then the series diverges), geometric series, integral test, comparison tests, alternating series test, ratio test, and others. Later we study power series \\(\\sum a_n(x-c)^n\\) and Taylor/Maclaurin series, which represent functions as infinite polynomials and allow us to approximate functions and compute limits.',
        ['Series \\(\\sum a_n\\) converges if partial sums \\(S_N\\) have a finite limit; otherwise it diverges.', 'If \\(a_n\\not\\to 0\\) then \\(\\sum a_n\\) diverges; \\(a_n\\to 0\\) is necessary but not sufficient.', 'Tests: geometric, \\(p\\)-series, integral, comparison, alternating, ratio; power series and Taylor series.'],
        {
          exampleCode: `\\sum_{n=1}^\\infty a_n = a_1 + a_2 + a_3 + \\cdots
\\\\
\\text{Key question: Does } S_N = \\sum_{n=1}^N a_n \\text{ approach a finite limit as } N\\to\\infty\\text{?}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Convergence means the partial sums settle to a finite number; divergence means they do not (they may go to infinity or oscillate).',
        }
      ),
      subunit(
        '10-1',
        'Convergence & Divergence of Series',
        'A series \\(\\sum_{n=1}^\\infty a_n\\) converges if its sequence of partial sums \\(S_N = a_1+\\cdots+a_N\\) approaches a finite limit \\(L\\) as \\(N\\to\\infty\\); we then write \\(\\sum a_n = L\\). If the partial sums do not approach a finite limit, the series diverges. An essential fact: if \\(\\lim_{n\\to\\infty} a_n \\neq 0\\) (or the limit does not exist), then the series must diverge. So the first check is always: does \\(a_n\\to 0\\)? If not, the series diverges. If yes, we need further tests (geometric, integral, comparison, etc.) to decide convergence.',
        ['Convergence: partial sums \\(S_N\\to\\) finite limit; divergence: otherwise.', 'If \\(a_n\\not\\to 0\\) then \\(\\sum a_n\\) diverges (nth-term test for divergence).', '\\(a_n\\to 0\\) is necessary but not sufficient for convergence.'],
        {
          exampleCode: `\\sum_{n=1}^\\infty \\frac{n}{n+1}.\\quad \\lim_{n\\to\\infty} \\frac{n}{n+1} = 1 \\neq 0
\\\\
\\text{Since the term limit is not 0, the series diverges.}
\\\\
\\text{Extra: } \\sum \\frac{1}{n^2} \\text{ has } a_n\\to 0 \\text{ but we need integral or } p\\text{-series test to show it converges.}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The terms \\(n/(n+1)\\) approach 1, so the partial sums grow without bound (each term is close to 1 for large \\(n\\)). Thus the series diverges.',
        }
      ),
      subunit(
        '10-2',
        'Geometric Series & nth-Term Test',
        'A geometric series has the form \\(\\sum_{n=0}^\\infty ar^n = a+ar+ar^2+\\cdots\\) (or starting at \\(n=1\\)). It converges if and only if \\(|r|<1\\), and the sum is \\(\\frac{a}{1-r}\\). If \\(|r|\\ge 1\\), the series diverges. The \\(n\\)th-term test for divergence: if \\(\\lim_{n\\to\\infty} a_n \\neq 0\\), then \\(\\sum a_n\\) diverges. This test can only show divergence, not convergence.\n\n' +
          'For \\(\\sum_{n=0}^\\infty 3(1/2)^n\\), we have \\(a=3\\) and \\(r=1/2\\); since \\(|r|<1\\), the series converges to \\(3/(1-1/2)=6\\).',
        ['Geometric \\(\\sum ar^n\\): converges to \\(a/(1-r)\\) if \\(|r|<1\\); diverges if \\(|r|\\ge 1\\).', 'nth-term test: if \\(a_n\\not\\to 0\\) then \\(\\sum a_n\\) diverges.', 'Identify \\(a\\) and \\(r\\) (ratio of consecutive terms).'],
        {
          exampleCode: `\\sum_{n=0}^\\infty 3\\left(\\frac{1}{2}\\right)^n.\\quad a=3,\\ r=\\frac{1}{2},\\ |r|<1
\\\\
\\text{Sum } = \\frac{3}{1-1/2} = \\frac{3}{1/2} = 6
\\\\
\\text{Extra: } \\sum_{n=1}^\\infty \\frac{2^n}{3^n} = \\sum \\left(\\frac{2}{3}\\right)^n \\Rightarrow r=2/3,\\ \\text{sum } = \\frac{2/3}{1-2/3}=2`,
          exampleLanguage: 'latex',
          exampleExplanation: 'With \\(r=1/2\\), the geometric series converges; the sum formula \\(a/(1-r)\\) gives 6.',
        }
      ),
      subunit(
        '10-3',
        'Integral Test & p-Series',
        'If \\(a_n=f(n)\\) where \\(f(x)\\) is positive, continuous, and decreasing for \\(x\\ge 1\\), then \\(\\sum_{n=1}^\\infty a_n\\) and \\(\\int_1^\\infty f(x)\\,dx\\) either both converge or both diverge. So we can use the convergence of the improper integral to decide the series. A \\(p\\)-series is \\(\\sum_{n=1}^\\infty \\frac{1}{n^p}\\). It converges if \\(p>1\\) and diverges if \\(p\\le 1\\) (including the harmonic series \\(p=1\\)).\n\n' +
          'Example: \\(\\sum \\frac{1}{n^2}\\) converges because \\(p=2>1\\). The harmonic series \\(\\sum \\frac{1}{n}\\) diverges because \\(p=1\\).',
        ['Integral test: \\(a_n=f(n)\\), \\(f\\) positive, continuous, decreasing \\(\\Rightarrow\\) \\(\\sum a_n\\) and \\(\\int_1^\\infty f(x)\\,dx\\) same behavior.', '\\(p\\)-series \\(\\sum 1/n^p\\): converges if \\(p>1\\), diverges if \\(p\\le 1\\).', 'Harmonic series \\(\\sum 1/n\\) diverges (\\(p=1\\)).'],
        {
          exampleCode: `\\sum_{n=1}^\\infty \\frac{1}{n^2}.\\quad p=2>1 \\Rightarrow \\text{converges}
\\\\
\\sum_{n=1}^\\infty \\frac{1}{n}.\\quad p=1 \\Rightarrow \\text{diverges (harmonic series)}
\\\\
\\text{Extra: } \\int_1^\\infty \\frac{1}{x^2}\\,dx = 1 \\text{ (converges)} \\Rightarrow \\sum \\frac{1}{n^2} \\text{ converges}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The \\(p\\)-series rule follows from the integral test: \\(\\int_1^\\infty 1/x^p\\,dx\\) converges for \\(p>1\\) and diverges for \\(p\\le 1\\).',
        }
      ),
      subunit(
        '10-4',
        'Comparison Tests',
        'We compare a complicated series to a simpler one whose convergence is known. Direct comparison: if \\(0\\le a_n\\le b_n\\) for all \\(n\\) and \\(\\sum b_n\\) converges, then \\(\\sum a_n\\) converges. If \\(0\\le b_n\\le a_n\\) and \\(\\sum b_n\\) diverges, then \\(\\sum a_n\\) diverges. Limit comparison: if \\(a_n,b_n>0\\) and \\(\\lim_{n\\to\\infty} a_n/b_n = L\\) with \\(0<L<\\infty\\), then \\(\\sum a_n\\) and \\(\\sum b_n\\) have the same behavior.\n\n' +
          'Example: \\(\\frac{1}{n^2+3} < \\frac{1}{n^2}\\) and \\(\\sum 1/n^2\\) converges, so \\(\\sum \\frac{1}{n^2+3}\\) converges.',
        ['Direct: \\(0\\le a_n\\le b_n\\) and \\(\\sum b_n\\) converges \\(\\Rightarrow\\) \\(\\sum a_n\\) converges; \\(0\\le b_n\\le a_n\\) and \\(\\sum b_n\\) diverges \\(\\Rightarrow\\) \\(\\sum a_n\\) diverges.', 'Limit comparison: \\(a_n/b_n\\to L\\in (0,\\infty)\\) \\(\\Rightarrow\\) same convergence behavior.', 'Choose a comparison series you know (e.g. \\(p\\)-series, geometric).'],
        {
          exampleCode: `\\sum \\frac{1}{n^2+3}.\\quad \\frac{1}{n^2+3} < \\frac{1}{n^2},\\quad \\sum \\frac{1}{n^2} \\text{ converges}
\\\\
\\Rightarrow \\sum \\frac{1}{n^2+3} \\text{ converges}
\\\\
\\text{Extra: } \\sum \\frac{1}{\\sqrt{n}+1} > \\frac{1}{2\\sqrt{n}} \\text{ for } n\\ge 1;\\ \\sum \\frac{1}{\\sqrt{n}} \\text{ diverges } (p=1/2) \\Rightarrow \\text{ original diverges}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Making the denominator larger gives a smaller term; since the smaller series \\(\\sum 1/n^2\\) converges, the larger terms still sum to a finite value.',
        }
      ),
      subunit(
        '10-5',
        'Alternating Series & Error Bound',
        'An alternating series has the form \\(\\sum (-1)^n a_n\\) or \\(\\sum (-1)^{n+1} a_n\\) with \\(a_n>0\\). The alternating series test: if \\(a_n\\) is decreasing, \\(a_n\\to 0\\), then the series converges. For such a series, the error after \\(n\\) terms satisfies \\(|R_n| \\le a_{n+1}\\), the first omitted term bounds the error. So to approximate the sum within a given error, find \\(n\\) so that \\(a_{n+1}\\) is smaller than the desired error.\n\n' +
          'Example: \\(\\sum (-1)^n/n\\) has \\(a_n=1/n\\) decreasing and \\(a_n\\to 0\\), so it converges. \\(|R_5|\\le a_6 = 1/6\\).',
        ['Alternating \\(\\sum (-1)^n a_n\\): if \\(a_n\\) decreases and \\(a_n\\to 0\\) then series converges.', 'Error bound: \\(|R_n|\\le a_{n+1}\\) (first omitted term).', 'Use to approximate sums: choose \\(n\\) so \\(a_{n+1}\\) is within tolerance.'],
        {
          exampleCode: `\\sum (-1)^n \\frac{1}{n}.\\quad a_n=\\frac{1}{n} \\text{ decreasing}, \\ a_n\\to 0 \\Rightarrow \\text{converges}
\\\\
|R_5| \\le a_6 = \\frac{1}{6}
\\\\
\\text{Extra: } \\sum \\frac{(-1)^n}{n^2} \\Rightarrow |R_{10}| \\le \\frac{1}{121}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The alternating harmonic series converges (to \\(\\ln 2\\)); the error after 5 terms is at most the magnitude of the next term, \\(1/6\\).',
        }
      ),
      subunit(
        '10-6',
        'Absolute vs Conditional Convergence',
        'If \\(\\sum |a_n|\\) converges, we say \\(\\sum a_n\\) converges absolutely. Absolute convergence implies convergence (the series \\(\\sum a_n\\) itself converges). If \\(\\sum a_n\\) converges but \\(\\sum |a_n|\\) diverges, we say \\(\\sum a_n\\) converges conditionally. So: absolutely convergent \\(\\Rightarrow\\) convergent; conditionally convergent means the series converges only because of cancellation (e.g. alternating signs).\n\n' +
          'Example: \\(\\sum (-1)^n/n\\) converges (alternating series test) but \\(\\sum 1/n\\) diverges, so the series is conditionally convergent.',
        ['Absolute: \\(\\sum |a_n|\\) converges \\(\\Rightarrow\\) \\(\\sum a_n\\) converges.', 'Conditional: \\(\\sum a_n\\) converges but \\(\\sum |a_n|\\) diverges.', 'Absolute convergence \\(\\Rightarrow\\) convergence; conditional relies on sign cancellation.'],
        {
          exampleCode: `\\sum (-1)^n \\frac{1}{n}.\\quad \\text{Series converges (alternating).}
\\\\
\\sum \\left|(-1)^n \\frac{1}{n}\\right| = \\sum \\frac{1}{n} \\text{ diverges}
\\\\
\\Rightarrow \\text{conditionally convergent}
\\\\
\\text{Extra: } \\sum \\frac{(-1)^n}{n^2} \\Rightarrow \\sum \\frac{1}{n^2} \\text{ converges } \\Rightarrow \\text{ absolutely convergent}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Taking absolute values gives the harmonic series, which diverges; so the alternating harmonic series is not absolutely convergent, only conditionally.',
        }
      ),
      subunit(
        '10-7',
        'Ratio Test',
        'For a series \\(\\sum a_n\\) (with nonzero terms for large \\(n\\)), compute \\(L = \\lim_{n\\to\\infty} \\left|\\frac{a_{n+1}}{a_n}\\right|\\). If \\(L<1\\), the series converges absolutely. If \\(L>1\\) (or \\(L=\\infty\\)), the series diverges. If \\(L=1\\), the test is inconclusive. The ratio test is especially useful when \\(a_n\\) involves factorials or exponentials.\n\n' +
          'Example: \\(\\sum n!/2^n\\); ratio \\(|a_{n+1}/a_n| = (n+1)!/2^{n+1} \\cdot 2^n/n! = (n+1)/2 \\to \\infty\\), so the series diverges.',
        ['\\(L = \\lim |a_{n+1}/a_n|\\): \\(L<1\\) converge, \\(L>1\\) diverge, \\(L=1\\) inconclusive.', 'Useful for factorials and exponentials; simplify \\(a_{n+1}/a_n\\) and take limit.', 'Often \\(L=\\infty\\) for series that diverge (e.g. \\(n!/2^n\\)).'],
        {
          exampleCode: `\\sum \\frac{n!}{2^n}.\\quad \\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{(n+1)!}{2^{n+1}}\\cdot\\frac{2^n}{n!} = \\frac{n+1}{2} \\to \\infty
\\\\
L>1 \\Rightarrow \\text{diverges}
\\\\
\\text{Extra: } \\sum \\frac{x^n}{n!} \\Rightarrow \\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{|x|}{n+1} \\to 0 \\Rightarrow \\text{converges for all } x`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The ratio \\((n+1)/2\\) grows without bound, so \\(L=\\infty\\) and the series diverges. For \\(\\sum x^n/n!\\), the ratio \\(|x|/(n+1)\\to 0\\) so the series converges for every \\(x\\).',
        }
      ),
      subunit(
        '10-8',
        'Taylor Polynomials & Lagrange Error Bound',
        'The Taylor polynomial of degree \\(n\\) for \\(f\\) at \\(x=a\\) is \\(P_n(x) = f(a) + f\'(a)(x-a) + \\frac{f\'\'(a)}{2!}(x-a)^2 + \\cdots + \\frac{f^{(n)}(a)}{n!}(x-a)^n\\). It approximates \\(f(x)\\) near \\(a\\). The remainder \\(R_n(x)=f(x)-P_n(x)\\) satisfies the Lagrange form: \\(|R_n(x)| \\le \\frac{M}{(n+1)!}|x-a|^{n+1}\\), where \\(M\\) is an upper bound on \\(|f^{(n+1)}|\\) on the interval between \\(a\\) and \\(x\\).\n\n' +
          'Example: For \\(e^x\\) near 0, \\(P_2(x)=1+x+x^2/2\\). To bound error on \\([-1,1]\\), \\(f^{(3)}(x)=e^x\\le e\\), so \\(|R_2|\\le e\\cdot 1^3/3! = e/6\\).',
        ['\\(P_n(x)\\) = sum of terms \\(\\frac{f^{(k)}(a)}{k!}(x-a)^k\\) for \\(k=0,\\ldots,n\\).', 'Lagrange error: \\(|R_n(x)|\\le \\frac{M}{(n+1)!}|x-a|^{n+1}\\) with \\(M\\ge |f^{(n+1)}|\\) on interval.', 'Use to guarantee approximation accuracy or to show convergence of Taylor series.'],
        {
          exampleCode: `e^x \\approx P_2(x) = 1 + x + \\frac{x^2}{2} \\quad \\text{(near 0)}
\\\\
\\text{Lagrange: } |R_n(x)| \\le \\frac{M}{(n+1)!}|x-a|^{n+1},\\quad M = \\max |f^{(n+1)}|
\\\\
\\text{Extra: } \\sin x \\approx x - \\frac{x^3}{3!} \\Rightarrow P_3(x) = x - \\frac{x^3}{6}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The Taylor polynomial \\(P_2\\) for \\(e^x\\) at 0 matches \\(f(0)\\), \\(f\'(0)\\), and \\(f\'\'(0)\\). The Lagrange bound gives a worst-case error in terms of the next derivative.',
        }
      ),
      subunit(
        '10-9',
        'Power Series & Radius of Convergence',
        'A power series is \\(\\sum_{n=0}^\\infty a_n(x-c)^n\\). It converges for \\(x\\) in an interval centered at \\(c\\); the radius of convergence \\(R\\) is half the length of that interval (or \\(R=\\infty\\) if it converges for all \\(x\\)). We often use the ratio test: compute \\(L = \\lim |a_{n+1}/a_n|\\cdot|x-c|\\) (or the limit of \\(|a_{n+1}(x-c)^{n+1}/(a_n(x-c)^n)|\\)); convergence when \\(L<1\\), which gives \\(|x-c|<R\\) with \\(R=1/\\lim |a_{n+1}/a_n|\\) (when the limit exists).\n\n' +
          'Example: \\(\\sum x^n/n!\\); ratio \\(|x|/(n+1)\\to 0\\) for every \\(x\\), so the series converges for all \\(x\\) and \\(R=\\infty\\).',
        ['Power series \\(\\sum a_n(x-c)^n\\): converges in \\(|x-c|<R\\), diverges for \\(|x-c|>R\\); check endpoints separately.', 'Use ratio test: \\(L = \\lim |a_{n+1}/a_n|\\cdot|x-c|\\); \\(L<1\\) \\(\\Rightarrow\\) converge.', '\\(R=\\infty\\) means converges for all \\(x\\) (e.g. \\(\\sum x^n/n!\\)).'],
        {
          exampleCode: `\\sum \\frac{x^n}{n!}.\\quad \\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{|x|^{n+1}/(n+1)!}{|x|^n/n!} = \\frac{|x|}{n+1} \\to 0
\\\\
\\text{Converges for all } x.\\quad R = \\infty
\\\\
\\text{Extra: } \\sum n! x^n \\Rightarrow \\left|\\frac{a_{n+1}}{a_n}\\right| = (n+1)|x| \\to \\infty \\text{ for } x\\neq 0 \\Rightarrow R=0`,
          exampleLanguage: 'latex',
          exampleExplanation: 'For \\(\\sum x^n/n!\\), the ratio \\(|x|/(n+1)\\) goes to 0 for every \\(x\\), so the series converges for all real \\(x\\); this is the power series for \\(e^x\\).',
        }
      ),
      subunit(
        '10-10',
        'Taylor & Maclaurin Series Representations',
        'If \\(f\\) has derivatives of all orders at \\(a\\), the Taylor series for \\(f\\) at \\(a\\) is \\(\\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!}(x-a)^n\\). When \\(a=0\\), it is the Maclaurin series: \\(f(x)=\\sum_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!}x^n\\). Under suitable conditions (e.g. remainder \\(R_n\\to 0\\)), the series converges to \\(f(x)\\) on an interval. Common examples: \\(e^x = \\sum x^n/n!\\), \\(\\sin x = x - x^3/3! + x^5/5! - \\cdots\\), \\(\\cos x = 1 - x^2/2! + x^4/4! - \\cdots\\), \\(\\frac{1}{1-x} = \\sum x^n\\) for \\(|x|<1\\).\n\n' +
          'These series are used to approximate functions, compute limits, and integrate functions that have no elementary antiderivative.',
        ['Taylor: \\(f(x)=\\sum \\frac{f^{(n)}(a)}{n!}(x-a)^n\\); Maclaurin: \\(a=0\\).', '\\(\\sin x = x - x^3/3! + x^5/5! - \\cdots\\); \\(e^x = \\sum x^n/n!\\); \\(1/(1-x)=\\sum x^n\\) for \\(|x|<1\\).', 'Convergence: remainder \\(R_n\\to 0\\); radius from ratio test or Lagrange bound.'],
        {
          exampleCode: `\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots
\\\\
e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots
\\\\
\\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n \\quad (|x|<1)
\\\\
\\text{Extra: } \\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots \\quad (-1<x\\le 1)`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The Maclaurin series for \\(\\sin x\\) has only odd powers with alternating signs; it converges to \\(\\sin x\\) for all \\(x\\).',
        }
      ),
    ],
  },
]

export const CALC_AB_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Calculus AB',
  units: CALC_UNITS.slice(0, 8),
  features: { latex: true, codeExamples: false, defaultExampleLanguage: 'latex' },
}

export const CALC_BC_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Calculus BC',
  units: CALC_UNITS,
  features: { latex: true, codeExamples: false, defaultExampleLanguage: 'latex' },
}
