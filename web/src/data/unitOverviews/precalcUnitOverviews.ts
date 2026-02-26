import type { SubjectUnitOverview, UnitOverview, SubunitOverview } from './types'

function subunit(
  id: string,
  title: string,
  summary: string = '',
  keyIdeas: string[] = [],
  opts?: { exampleCode?: string; exampleLanguage?: 'java' | 'pseudocode' | 'latex'; exampleExplanation?: string }
): SubunitOverview {
  return { id, title, summary, keyIdeas, ...opts }
}

const PRECALC_UNITS: UnitOverview[] = [
  {
    unitNumber: 1,
    title: 'Polynomial and Rational Functions',
    subunits: [
      subunit(
        '1-1',
        'Rates of Change & Change in Tandem',
        'When two quantities vary together, we measure how one changes relative to the other using average rate of change. For a function \\(f(x)\\), the average rate of change over \\([a,b]\\) is \\(\\frac{f(b)-f(a)}{b-a}\\). Linear functions have constant rate of change (slope). Quadratic and higher-degree polynomials have changing rates of change.\n\n' +
          'General method: (1) Identify the interval \\([a,b]\\). (2) Compute \\(f(a)\\) and \\(f(b)\\). (3) Apply \\(\\frac{f(b)-f(a)}{b-a}\\). (4) Interpret the result in context. Rate of change represents “output change per unit input.”',
        ['Linear \\(\\Rightarrow\\) constant rate (slope).', 'Quadratic/polynomial \\(\\Rightarrow\\) nonconstant rate.', 'Average rate of change = \\(\\frac{f(b)-f(a)}{b-a}\\).'],
        {
          exampleCode: `f(x)=3x^2-2x \\text{ from } 1 \\text{ to } 4
\\\\
\\frac{f(4)-f(1)}{4-1} = \\frac{40-1}{3} = 13`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Over \\([1,4]\\), the function changes by 39 units for 3 units of input, so the average rate of change is 13.',
        }
      ),
      subunit(
        '1-2',
        'Polynomial Structure and Behavior',
        'A polynomial\'s degree and leading coefficient determine its long-term (end) behavior. The number of zeros (including complex) equals the degree, counting multiplicity. If a polynomial has real coefficients, complex zeros occur in conjugate pairs: if \\(a+bi\\) is a zero, so is \\(a-bi\\).\n\n' +
          'General method: (1) Identify degree and leading term. (2) Determine end behavior from degree parity (odd/even) and sign of the leading coefficient. (3) Find zeros (factoring, synthetic division, etc.). (4) Account for multiplicity and complex conjugates. Odd degree \\(\\Rightarrow\\) opposite end behavior (one end up, one down); even degree \\(\\Rightarrow\\) same end behavior (both up or both down).',
        ['Odd degree \\(\\Rightarrow\\) opposite end behavior; even degree \\(\\Rightarrow\\) same end behavior.', 'Complex zeros with real coefficients occur in conjugate pairs: \\(a+bi\\) and \\(a-bi\\).', 'Number of zeros (with multiplicity) equals degree.'],
        {
          exampleCode: `f(x)=-2x^5+3x^3-7.\\quad \\text{Leading term } -2x^5 \\text{ (odd, negative)}
\\\\
x\\to\\infty \\Rightarrow f(x)\\to -\\infty
\\\\
x\\to -\\infty \\Rightarrow f(x)\\to \\infty`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Odd degree with negative leading coefficient: graph goes down as \\(x\\) goes right and up as \\(x\\) goes left.',
        }
      ),
      subunit(
        '1-3',
        'Rational Function Structure and Behavior',
        'A rational function is \\(f(x)=\\frac{p(x)}{q(x)}\\). Zeros come from the numerator (where \\(p(x)=0\\) and the factor does not cancel). Vertical asymptotes come from denominator zeros that remain after simplification. Holes occur when a factor cancels—the zero of that factor is not in the domain, but the limit exists. End behavior depends on the degrees of numerator and denominator: if degree(num) < degree(denom), horizontal asymptote \\(y=0\\); if equal, \\(y\\) = ratio of leading coefficients; if degree(num) > degree(denom), slant asymptote.\n\n' +
          'General method: (1) Factor numerator and denominator. (2) Cancel common factors (identify holes). (3) Remaining denominator zeros \\(\\Rightarrow\\) vertical asymptotes. (4) Compare degrees for horizontal or slant asymptote.',
        ['Zeros from numerator; vertical asymptotes from denominator zeros (after canceling); holes where factors cancel.', 'Degree num < denom \\(\\Rightarrow\\) \\(y=0\\); equal \\(\\Rightarrow\\) ratio of leading coefficients; num > denom \\(\\Rightarrow\\) slant asymptote.', 'Factor and simplify to identify holes vs vertical asymptotes.'],
        {
          exampleCode: `f(x)=\\frac{x^2-4}{x-2} = \\frac{(x-2)(x+2)}{x-2}
\\\\
\\text{Hole at } x=2.\\quad \\text{Simplified: } f(x)=x+2 \\text{ for } x\\neq 2`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The factor \\((x-2)\\) cancels, so there is a hole at \\(x=2\\) (undefined there) but no vertical asymptote; the graph is the line \\(y=x+2\\) with one point removed.',
        }
      ),
      subunit(
        '1-4',
        'Equivalent Representations of Algebraic Expressions',
        'Different forms of an expression reveal different properties. Factored form shows zeros (roots). Standard form shows degree and end behavior. Simplified rational form shows asymptotes and holes. Choosing the right representation helps when graphing or solving.\n\n' +
          'General method: (1) Decide what feature you need (zeros, asymptotes, intercepts, etc.). (2) Rewrite using factoring, expanding, or simplifying. (3) Extract information from the new form. Factored form \\(\\Rightarrow\\) intercepts; standard form \\(\\Rightarrow\\) end behavior; simplified rational form \\(\\Rightarrow\\) discontinuities.',
        ['Factored form \\(\\Rightarrow\\) zeros/intercepts.', 'Standard form \\(\\Rightarrow\\) degree and end behavior.', 'Simplified rational form \\(\\Rightarrow\\) vertical asymptotes and holes.'],
        {
          exampleCode: `x^3-4x = x(x^2-4) = x(x-2)(x+2)
\\\\
\\text{Zeros: } 0,\\ 2,\\ -2`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Factoring reveals the roots; the fully factored form makes it easy to see the three zeros and their multiplicities.',
        }
      ),
      subunit(
        '1-5',
        'Transformations of Functions',
        'Functions change through shifts, reflections, and stretches. The general form \\(g(x)=a\\cdot f(b(x-h))+k\\) encodes: \\(h\\) = horizontal shift (right if \\(h>0\\)); \\(k\\) = vertical shift (up if \\(k>0\\)); \\(a\\) = vertical stretch/compression and reflection (reflect over \\(x\\)-axis if \\(a<0\\)); \\(b\\) = horizontal stretch/compression (and period change for trig). Horizontal changes affect the input; vertical changes affect the output. Apply transformations in a consistent order (e.g. horizontal shift, then horizontal scale, then vertical scale, then vertical shift).',
        ['\\(g(x)=a\\cdot f(b(x-h))+k\\): \\(h\\) horizontal shift, \\(k\\) vertical shift, \\(a\\) vertical stretch/reflection, \\(b\\) horizontal stretch.', 'Horizontal changes apply to input; vertical to output.', 'Reflection over \\(x\\)-axis when \\(a<0\\); over \\(y\\)-axis when \\(b<0\\) (inside the argument).'],
        {
          exampleCode: `g(x) = -2(x-3)^2 + 5
\\\\
\\text{Right 3, up 5, vertical stretch by 2, reflect over } x\\text{-axis}
\\\\
\\text{Vertex at } (3,5),\\ \\text{opens down}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Compared to \\(y=x^2\\), the graph is shifted to the right by 3 and up by 5, stretched vertically by 2, and reflected, so the vertex is at \\((3,5)\\) and the parabola opens downward.',
        }
      ),
      subunit(
        '1-6',
        'Function Model Selection and Assumptions',
        'Different contexts require different function types. Linear models imply constant rate of change. Polynomial models allow changing curvature (quadratic for one turn, higher degree for more). Rational models capture asymptotic behavior (leveling off or blowing up). Exponential models fit growth or decay by a constant factor. Modeling requires stating assumptions clearly: what is constant, what is bounded, and how variables relate.\n\n' +
          'General method: (1) Examine the pattern of change in the data or scenario. (2) Identify presence of asymptotes, curvature, or constant percent change. (3) Choose an appropriate function type. (4) State assumptions (e.g. “growth remains exponential,” “no upper limit”). Data increasing steadily \\(\\Rightarrow\\) linear; accelerating \\(\\Rightarrow\\) quadratic/polynomial; leveling off or exploding \\(\\Rightarrow\\) rational or exponential.',
        ['Linear \\(\\Rightarrow\\) constant rate; polynomial \\(\\Rightarrow\\) changing curvature; rational \\(\\Rightarrow\\) asymptotes.', 'State assumptions about growth, limits, and relationships.', 'Data pattern (steady vs accelerating vs leveling off) suggests model type.'],
        {
          exampleCode: `\\text{Cost per item decreases as quantity increases}
\\\\
\\Rightarrow \\text{rational model (e.g. total cost / quantity)}
\\\\
\\text{Linear: constant rate. Quadratic: one bend. Exponential: constant percent change.}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'When cost per unit depends on quantity, a rational function (ratio of two polynomials) often fits; linear and exponential models suit other patterns.',
        }
      ),
      subunit(
        '1-7',
        'Function Model Construction and Applications',
        'Construct functions from constraints: given zeros, points, asymptotes, or behavioral conditions, build a formula. Zeros give factors; a vertical asymptote at \\(x=a\\) gives a factor \\((x-a)\\) in the denominator (that does not cancel). Use a given point to solve for unknown constants.\n\n' +
          'General method: (1) Identify required features (zeros, asymptotes, intercepts). (2) Write the function in factored or rational form with unknown constant(s). (3) Substitute a given point to solve for the constant(s). (4) Verify that the function matches all conditions.',
        ['Zeros \\(\\Rightarrow\\) factors in numerator (or overall).', 'Vertical asymptote \\(x=a\\) \\(\\Rightarrow\\) denominator factor \\((x-a)\\) (non-canceling).', 'Use a point \\((x_0,y_0)\\) to solve for the leading coefficient or other constant.'],
        {
          exampleCode: `\\text{Cubic with zeros } -1,\\ 2,\\ 3 \\text{ and } f(0)=6
\\\\
f(x)=a(x+1)(x-2)(x-3)
\\\\
f(0)=a(1)(-2)(-3)=6a=6 \\Rightarrow a=1
\\\\
f(x)=(x+1)(x-2)(x-3)`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The zeros determine the factors; the condition \\(f(0)=6\\) determines \\(a\\) so the \\(y\\)-intercept is correct.',
        }
      ),
    ],
  },
  {
    unitNumber: 2,
    title: 'Exponential and Logarithmic Functions',
    subunits: [
      subunit(
        '2-1',
        'Arithmetic vs. Geometric Change',
        'Arithmetic sequences change by a constant difference; geometric sequences change by a constant ratio. Linear functions model constant additive change, while exponential functions model constant multiplicative change. Recognizing which pattern a situation follows helps you choose an appropriate model.\n\n' +
          'General method: (1) Look at how the output changes when the input increases by 1 (or a fixed step). (2) If the difference between successive terms is constant, use an arithmetic (linear) model: \\(a_n = a_1 + (n-1)d\\). (3) If the ratio between successive terms is constant, use a geometric (exponential) model: \\(a_n = a_1 r^{n-1}\\). (4) Connect the sequence behavior to a linear or exponential function of a real variable.',
        [
          'Constant difference \\(\\Rightarrow\\) arithmetic sequence and linear growth.',
          'Constant ratio \\(\\Rightarrow\\) geometric sequence and exponential growth.',
          'Exponential growth accelerates (or decays) over time; linear growth adds the same amount each step.',
        ],
        {
          exampleCode: `\\text{Arithmetic: } 5,8,11,14,\\dots \\\\Rightarrow d=3,\\\\ a_n = 5 + (n-1)\\\\cdot 3
\\\\
\\\\text{Geometric: } 5,10,20,40,\\dots \\\\Rightarrow r=2,\\\\ a_n = 5\\\\cdot 2^{n-1}`,
          exampleLanguage: 'latex',
          exampleExplanation:
            'The arithmetic sequence adds 3 each time (linear). The geometric sequence multiplies by 2 each time (exponential).',
        }
      ),
      subunit(
        '2-2',
        'Exponential Functions & Manipulation',
        'An exponential function has the form \\(f(x)=ab^x\\) where \\(b>0\\) and \\(b\\neq 1\\). Usually \\(a\\) is the initial value (when \\(x=0\\)) and \\(b\\) is the growth or decay factor. If \\(b>1\\), the function models exponential growth; if \\(0<b<1\\), it models exponential decay. Exponent rules let us rewrite and simplify expressions and understand horizontal shifts inside the exponent.\n\n' +
          'General method: (1) Identify parameters \\(a\\) and \\(b\\). (2) Use exponent laws such as \\(b^{x+y}=b^x b^y\\) and \\((b^x)^y = b^{xy}\\) to rewrite expressions. (3) Write \\(f(x)=ab^{x-h}\\) or \\(f(x)=ab^{x}+k\\) to see horizontal and vertical shifts. Horizontal shifts occur inside the exponent; vertical shifts occur outside.',
        [
          '\\(a\\) = initial value (often \\(f(0)\\)).',
          '\\(b\\) = growth/decay factor; \\(b>1\\) growth, \\(0<b<1\\) decay.',
          'Exponent rules allow simplification and reveal transformations.',
        ],
        {
          exampleCode: `f(x)=3\\\\cdot 2^{x-1}
\\\\
f(1)=3\\\\cdot 2^0 = 3,\\\\quad f(0)=3\\\\cdot 2^{-1}=\\\\tfrac{3}{2}`,
          exampleLanguage: 'latex',
          exampleExplanation:
            'Writing \\(f(x)=3\\\\cdot 2^{x-1}\\) shows a horizontal shift of 1 unit to the right compared to \\(3\\\\cdot 2^x\\); the initial value at \\(x=1\\) is 3.',
        }
      ),
      subunit(
        '2-3',
        'Exponential Modeling and Validation',
        'Exponential models describe processes with constant percentage growth or decay (constant multiplicative factor per unit of \\(x\\)). To build a model, we identify an initial value and a growth (or decay) factor, then write \\(f(x)=ab^x\\). To validate a model, we compare its predictions to data and see whether the multiplicative pattern holds better than a competing linear or polynomial model.\n\n' +
          'General method: (1) Determine initial value \\(a\\) (often the value at \\(x=0\\)). (2) Compute the growth factor \\(b\\) from data (e.g. \\(b=1+r\\) where \\(r\\) is the growth rate). (3) Write \\(f(x)=ab^x\\). (4) Compare predicted values with actual data: calculate residuals or percent errors and check whether exponential behavior is reasonable over the time window.',
        [
          'Growth factor \\(b=1+r\\) where \\(r\\) is the rate (e.g. 5% \\(\\Rightarrow r=0.05\\)).',
          'Exponential models: constant percent change per unit time.',
          'Validate by checking residuals/percent error and comparing with other models.',
        ],
        {
          exampleCode: `\\\\text{Population grows 5\\\\% annually.}
\\\\
f(t)=P_0(1.05)^t`,
          exampleLanguage: 'latex',
          exampleExplanation:
            'Each year the population is multiplied by 1.05 (an increase of 5% of its current size), so \\(P_0(1.05)^t\\) is an appropriate model.',
        }
      ),
      subunit(
        '2-4',
        'Function Composition and Inverses',
        'Composition combines two functions by feeding the output of one into the input of another: \\((f\\\\circ g)(x)=f(g(x))\\\\). Many real-world models are built as compositions (e.g. unit conversions, scaling then shifting). An inverse function reverses a function\'s input and output: if \\(f(a)=b\\), then \\(f^{-1}(b)=a\\). Exponential and logarithmic functions are inverses: \\(b^x\\) and \\(\\\\log_b x\\) undo each other.',
        [
          'Composition: \\((f\\\\circ g)(x)=f(g(x))\\); think “plug \\(g(x)\\) into \\(f\\)”.',
          'Inverse \\(f^{-1}\\) reverses \\(f\\): reflect graph across \\(y=x\\).',
          '\\(b^x\\) and \\(\\\\log_b x\\) are inverse functions on their domains.',
        ],
        {
          exampleCode: `f(x)=2x+3,\\\\quad g(x)=x^2
\\\\
(f\\\\circ g)(x)=f(g(x))=2x^2+3
\\\\
\\\\text{Inverse of } f: y=2x+3 \\\\Rightarrow x=2y+3 \\\\Rightarrow y=\\\\frac{x-3}{2}`,
          exampleLanguage: 'latex',
          exampleExplanation:
            'For composition, square first (via \\(g\\)) then double and add 3 (via \\(f\\)). For the inverse, swap \\(x\\) and \\(y\\) and solve for \\(y\\).',
        }
      ),
      subunit(
        '2-5',
        'Logarithmic Expressions & Properties',
        'A logarithm answers the question: “To what power must we raise the base \\(b\\\\) to get \\(x\\\\)?” By definition, \\(b^y=x\\\\iff \\\\log_b x = y\\\\). Log properties come from exponent rules. They let us rewrite products, quotients, and powers as sums, differences, and multiples of logs, which is useful for simplifying expressions and solving equations.\n\n' +
          'General method: (1) Rewrite in exponential form if needed. (2) Apply properties: \\(\\\\log_b(xy)=\\\\log_b x + \\\\log_b y\\\\); \\(\\\\log_b(x/y)=\\\\log_b x - \\\\log_b y\\\\); \\(\\\\log_b(x^r)=r\\\\log_b x\\\\). (3) Simplify expressions and combine terms when possible.',
        [
          'Definition: \\(b^y=x\\\\iff \\\\log_b x = y\\\\).',
          'Product, quotient, power rules: logs turn multiplication into addition, division into subtraction, powers into multiples.',
          'Logs are defined only for positive arguments; base \\(b>0, b\\\\neq 1\\).',
        ],
        {
          exampleCode: `\\\\log_2(8)=3 \\\\quad \\\\text{since } 2^3=8
\\\\
\\\\log_b(xy)=\\\\log_b x+\\\\log_b y`,
          exampleLanguage: 'latex',
          exampleExplanation:
            'Because \\(2^3=8\\), the base-2 logarithm of 8 is 3. The product rule follows from \\(b^{u+v}=b^u b^v\\).',
        }
      ),
      subunit(
        '2-6',
        'Logarithmic Functions & Manipulation',
        'Logarithmic functions are inverses of exponential functions. A basic log function has the form \\(f(x)=\\\\log_b x\\\\) with domain \\(x>0\\\\) and vertical asymptote at \\(x=0\\\\). Its graph increases slowly and passes through \\((1,0)\\\\). Transformations like \\(f(x)=\\\\log_b(x-h)+k\\\\) shift the graph horizontally and vertically, changing the location of the asymptote and intercepts.\n\n' +
          'General method: (1) Identify the base \\(b\\\\) and any shifts or stretches. (2) Rewrite in exponential form when solving equations. (3) Apply transformations as with other parent functions: inside the log affects \\(x\\\\); outside affects \\(y\\\\).',
        [
          'Domain of \\(\\\\log_b x\\\\): \\(x>0\\\\); vertical asymptote at \\(x=0\\\\).',
          'Graph increases slowly for \\(b>1\\\\); decreases for \\(0<b<1\\\\).',
          'Transformations: \\(\\\\log_b(x-h)+k\\\\) shifts right by \\(h\\\\), up by \\(k\\\\).',
        ],
        {
          exampleCode: `g(x)=\\\\log_3(x-2)
\\\\
\\\\text{Domain } x>2;\\\\quad \\\\text{vertical asymptote at } x=2`,
          exampleLanguage: 'latex',
          exampleExplanation:
            'Replacing \\(x\\) by \\(x-2\\) shifts the basic \\(\\\\log_3 x\\\\) graph right 2 units, moving the vertical asymptote from 0 to 2.',
        }
      ),
      subunit(
        '2-7',
        'Exponential & Logarithmic Equations and Inequalities',
        'To solve exponential equations, we often isolate the exponential expression and either rewrite both sides with a common base or take logarithms of both sides. To solve logarithmic equations, we combine logs using properties and then rewrite in exponential form. For inequalities, we must remember that logarithms with base \\(b>1\\\\) are increasing (order is preserved) and with \\(0<b<1\\\\) are decreasing (order reverses). Always check that solutions stay in the domain (e.g. log arguments remain positive).',
        [
          'Exponential equations: isolate the exponential; use common bases or take logs.',
          'Logarithmic equations: combine logs, then rewrite in exponential form.',
          'Check domain restrictions (e.g. arguments of logs must be positive); watch monotonicity for inequalities.',
        ],
        {
          exampleCode: `2^x = 7 \\\\Rightarrow x = \\\\log_2 7 = \\\\frac{\\\\ln 7}{\\\\ln 2}`,
          exampleLanguage: 'latex',
          exampleExplanation:
            'Taking natural logs of both sides gives \\(x\\\\ln 2 = \\\\ln 7\\\\), so \\(x=\\\\ln 7/\\\\ln 2\\\\).',
        }
      ),
      subunit(
        '2-8',
        'Logarithmic Modeling and Semi-Log Plots',
        'Logarithmic models describe data that grows quickly and then levels off, or situations where increments shrink over time. Semi-log plots (log scale on one axis, linear on the other) are used to linearize exponential data: if \\(y=ab^x\\\\), then taking logs gives \\(\\\\ln y = \\\\ln a + x\\\\ln b\\\\), which is linear in \\(x\\\\). If plotting \\(\\\\ln y\\\\) vs. \\(x\\\\) produces a straight line, the original relationship is approximately exponential.\\n\\n' +
          'General method: (1) Decide whether the data seems exponential (constant percent change) or better fit by a log model. (2) Take logarithms of both sides (usually natural log). (3) Plot the transformed data (e.g. \\(\\\\ln y\\\\) vs. \\(x\\\\)) to see if it is approximately linear. (4) Interpret slope and intercept in terms of \\(a\\\\) and \\(b\\\\).',
        [
          'If \\(y=ab^x\\\\), then \\(\\\\ln y = \\\\ln a + x\\\\ln b\\\\) (linear in \\(x\\\\)).',
          'Semi-log plots turn exponential curves into straight lines.',
          'Logarithmic models (e.g. \\(y=a+b\\\\ln x\\\\)) can fit data that rises quickly then levels off.',
        ],
        {
          exampleCode: `y = 5\\\\cdot 3^x
\\\\
\\\\ln y = \\\\ln 5 + x\\\\ln 3`,
          exampleLanguage: 'latex',
          exampleExplanation:
            'On a semi-log plot of \\(\\\\ln y\\\\) vs. \\(x\\\\), this model appears as a straight line with slope \\(\\\\ln 3\\\\) and intercept \\(\\\\ln 5\\\\).',
        }
      ),
    ],
  },
  {
    unitNumber: 3,
    title: 'Trigonometric and Polar Functions',
    subunits: [
      subunit(
        '3-1',
        'Periodic Phenomena & Unit Circle Foundations',
        'Periodic phenomena repeat at regular intervals. Trigonometric functions model periodic motion using angles measured in radians. The unit circle (circle of radius 1 centered at the origin) defines sine and cosine as the coordinates of the point where the terminal side of an angle \\(\\theta\\) intersects the circle: the point is \\((\\cos\\theta, \\sin\\theta)\\). Working in radians keeps formulas clean (e.g. arc length \\(s=r\\theta\\)) and matches calculus.\n\n' +
          'General method: (1) Measure angles in radians. (2) Identify the quadrant to determine sign of sine and cosine. (3) Use unit circle coordinates for standard angles, or right-triangle ratios \\(\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}\\), \\(\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}\\). (4) Determine sign and value. The period of a periodic phenomenon is the length of one full cycle.',
        [
          'Period = length of one full cycle.',
          '\\(\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}\\), \\(\\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}\\).',
          'Standard angles: \\(0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}\\) and their multiples.',
        ],
        {
          exampleCode: `\\sin\\left(\\frac{\\pi}{6}\\right)=\\frac{1}{2},\\quad \\cos\\left(\\frac{\\pi}{3}\\right)=\\frac{1}{2}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'On the unit circle, \\(\\pi/6\\) corresponds to \\((\\sqrt{3}/2, 1/2)\\) and \\(\\pi/3\\) to \\((1/2, \\sqrt{3}/2)\\), so sine and cosine take these values.',
        }
      ),
      subunit(
        '3-2',
        'Sine, Cosine, and Tangent Functions',
        'Sine and cosine are periodic with period \\(2\\pi\\); tangent has period \\(\\pi\\). The identity \\(\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}\\) links tangent to sine and cosine, so tangent is undefined where \\(\\cos\\theta=0\\) (vertical asymptotes). Graphs of sine and cosine oscillate between \\(-1\\) and \\(1\\); the amplitude is half the distance from maximum to minimum.\n\n' +
          'General method: (1) Identify amplitude for sine/cosine (default 1). (2) Determine period (\\(2\\pi\\) for sin/cos, \\(\\pi\\) for tan). (3) Locate intercepts and key points (max, min, zeros). (4) Sketch one cycle and extend by periodicity.',
        [
          'Sine and cosine range: \\([-1, 1]\\); amplitude = half the peak-to-trough distance.',
          'Tangent has vertical asymptotes where \\(\\cos\\theta=0\\) (e.g. \\(\\theta = \\pi/2 + k\\pi\\)).',
          'Period: sine and cosine \\(=2\\pi\\); tangent \\(=\\pi\\).',
        ],
        {
          exampleCode: `y=\\sin x
\\\\
\\text{One cycle from } 0 \\text{ to } 2\\pi`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The basic sine graph starts at 0, rises to 1 at \\(\\pi/2\\), returns to 0 at \\(\\pi\\), goes to \\(-1\\) at \\(3\\pi/2\\), and completes at \\(2\\pi\\).',
        }
      ),
      subunit(
        '3-3',
        'Sinusoidal Modeling & Transformations',
        'Sinusoidal functions model oscillating behavior (waves, tides, alternating current). The general form \\(y = A\\sin(B(x-h))+k\\) (or cosine) encodes: \\(A\\) = amplitude; \\(\\frac{2\\pi}{B}\\) = period; \\(h\\) = horizontal (phase) shift; \\(k\\) = vertical shift (midline). Amplitude is the distance from the midline to a peak; period is the length of one full cycle.\n\n' +
          'General method: (1) Identify amplitude and midline from max/min or given values. (2) Compute period from \\(B\\): period \\(= \\frac{2\\pi}{B}\\). (3) Determine phase shift from \\(h\\) (horizontal shift). (4) Sketch starting at midline or a maximum and extend by periodicity.',
        [
          'Amplitude \\(A\\) = distance from midline to peak.',
          'Period \\(= \\frac{2\\pi}{B}\\); horizontal shift \\(h\\) affects the starting point of the cycle.',
          '\\(k\\) is the vertical shift (midline \\(y=k\\)).',
        ],
        {
          exampleCode: `y=3\\cos\\left(2x-\\frac{\\pi}{2}\\right)
\\\\
\\text{Amplitude } = 3,\\quad \\text{Period } = \\frac{2\\pi}{2}=\\pi`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Factor as \\(3\\cos(2(x-\\pi/4))\\): amplitude 3, period \\(\\pi\\), phase shift \\(\\pi/4\\) to the right.',
        }
      ),
      subunit(
        '3-4',
        'Tangent, Secant, Cosecant, and Cotangent',
        'The reciprocal trig functions are defined by \\(\\sec\\theta = \\frac{1}{\\cos\\theta}\\), \\(\\csc\\theta = \\frac{1}{\\sin\\theta}\\), \\(\\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{\\cos\\theta}{\\sin\\theta}\\). Their graphs have vertical asymptotes wherever the denominator is zero: secant where cosine is 0, cosecant where sine is 0. Cotangent has period \\(\\pi\\) like tangent.\n\n' +
          'General method: (1) Express the function as a reciprocal of sine or cosine. (2) Identify where the denominator equals zero \\(\\Rightarrow\\) vertical asymptotes. (3) Sketch asymptotes and behavior (approach \\(\\pm\\infty\\)). (4) Plot key values between asymptotes.',
        [
          'Secant undefined where \\(\\cos\\theta=0\\) (vertical asymptotes).',
          'Cosecant undefined where \\(\\sin\\theta=0\\).',
          'Cotangent period \\(=\\pi\\); asymptotes where \\(\\sin\\theta=0\\).',
        ],
        {
          exampleCode: `y=\\sec x
\\\\
\\text{Vertical asymptotes at } x=\\frac{\\pi}{2}+k\\pi`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Since \\(\\sec x = 1/\\cos x\\), the graph has asymptotes wherever \\(\\cos x=0\\), i.e. \\(x = \\pi/2 + k\\pi\\).',
        }
      ),
      subunit(
        '3-5',
        'Inverse Trigonometric Functions',
        'Inverse trig functions reverse sine, cosine, and tangent: \\(\\sin^{-1}x\\), \\(\\cos^{-1}x\\), \\(\\tan^{-1}x\\) (also written \\(\\arcsin\\), \\(\\arccos\\), \\(\\arctan\\)). Because the original functions are not one-to-one on their full domains, we restrict the domain so that each inverse is a function. The output is always an angle in the restricted range.\n\n' +
          'General method: (1) Ensure the input is within the function\'s domain (e.g. \\(-1\\le x\\le 1\\) for \\(\\sin^{-1}\\) and \\(\\cos^{-1}\\)). (2) Identify the angle in the restricted range whose trig value equals the input. (3) Use the unit circle or known triangles.',
        [
          '\\(\\sin^{-1}x \\in [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]\\) (principal range for arcsin).',
          '\\(\\cos^{-1}x \\in [0, \\pi]\\) (principal range for arccos).',
          '\\(\\tan^{-1}x \\in (-\\frac{\\pi}{2}, \\frac{\\pi}{2})\\) (principal range for arctan).',
        ],
        {
          exampleCode: `\\sin^{-1}\\left(\\frac{\\sqrt{2}}{2}\\right)=\\frac{\\pi}{4}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The angle in \\([-\\pi/2, \\pi/2]\\) whose sine is \\(\\sqrt{2}/2\\) is \\(\\pi/4\\).',
        }
      ),
      subunit(
        '3-6',
        'Trigonometric Equations & Identities',
        'Trigonometric identities relate trig functions algebraically; the fundamental Pythagorean identity is \\(\\sin^2\\theta + \\cos^2\\theta = 1\\). Solving trig equations means finding all angles that satisfy the equation, often giving a general solution with \\(+2\\pi k\\) or \\(+\\pi k\\) to capture all coterminal angles. Identities are used to rewrite one side until it matches the other, or to convert an equation to a single trig function.\n\n' +
          'General method (equations): (1) Rewrite in a single trig function if possible (use identities). (2) Solve the basic equation (e.g. \\(\\sin u = c\\)). (3) Add all solutions in the desired interval, or give the general solution with periodicity. General method (identities): (1) Start with one side. (2) Apply Pythagorean, reciprocal, or quotient identities. (3) Simplify until both sides match.',
        [
          'General solution includes \\(+2\\pi k\\) (or \\(+\\pi k\\) for tangent) for all integers \\(k\\).',
          'Check interval restrictions when asked for solutions in \\([0, 2\\pi)\\) or similar.',
          'Convert between forms (e.g. \\(\\sin^2 + \\cos^2 = 1\\)) when helpful.',
        ],
        {
          exampleCode: `\\sin x = \\frac{1}{2} \\Rightarrow x = \\frac{\\pi}{6},\\ \\frac{5\\pi}{6} + 2\\pi k`,
          exampleLanguage: 'latex',
          exampleExplanation: 'In \\([0, 2\\pi)\\), the solutions are \\(\\pi/6\\) and \\(5\\pi/6\\); the general solution adds \\(+2\\pi k\\) for any integer \\(k\\).',
        }
      ),
      subunit(
        '3-7',
        'Polar Coordinates and Graphs',
        'Polar coordinates represent points as \\((r, \\theta)\\) where \\(r\\) is the distance from the origin and \\(\\theta\\) is the angle from the positive \\(x\\)-axis. Conversion to rectangular coordinates: \\(x = r\\cos\\theta\\), \\(y = r\\sin\\theta\\). The same point can have multiple polar representations (e.g. \\((r, \\theta)\\) and \\((-r, \\theta+\\pi)\\)). Negative \\(r\\) means the point is in the direction opposite to \\(\\theta\\).\n\n' +
          'General method: (1) Identify \\(r\\) and \\(\\theta\\) from the problem or from \\(r=f(\\theta)\\). (2) Convert to rectangular \\((x,y)\\) if needed using \\(x=r\\cos\\theta\\), \\(y=r\\sin\\theta\\). (3) Plot by marking angle and distance. (4) For \\(r=f(\\theta)\\), trace the curve as \\(\\theta\\) varies. Common curves include circles, spirals, and roses.',
        [
          'Same point may have multiple polar representations \\((r, \\theta)\\) and \\((-r, \\theta+\\pi)\\).',
          'Negative \\(r\\): go in the direction opposite to \\(\\theta\\).',
          'Common curves: circles (\\(r=\\text{const}\\) or \\(r=2a\\cos\\theta\\)), spirals, roses (\\(r=\\cos(n\\theta)\\)).',
        ],
        {
          exampleCode: `r=2\\cos\\theta \\quad \\text{represents a circle}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Multiplying by \\(r\\) gives \\(r^2=2r\\cos\\theta\\), or \\(x^2+y^2=2x\\), which is a circle (e.g. center \\((1,0)\\), radius 1).',
        }
      ),
      subunit(
        '3-8',
        'Rates of Change in Polar Functions',
        'For a polar function \\(r=f(\\theta)\\), change occurs with respect to the angle \\(\\theta\\). Area swept out from angle \\(\\alpha\\) to \\(\\beta\\) is \\(A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta\\). Arc length of the polar curve is \\(L = \\int_\\alpha^\\beta \\sqrt{r^2 + (dr/d\\theta)^2}\\,d\\theta\\). These formulas come from approximating with circular sectors and small segments. Geometry in polar coordinates differs from rectangular: \\(r\\) and \\(\\theta\\) play different roles.\n\n' +
          'General method: (1) Identify \\(r(\\theta)\\) and the \\(\\theta\\)-interval. (2) Compute \\(dr/d\\theta\\) if needed for arc length. (3) Substitute into the area or arc-length formula. (4) Integrate over the interval.',
        [
          'Polar area: \\(A = \\frac{1}{2}\\int r^2\\,d\\theta\\) (sector area \\(\\frac{1}{2}r^2\\,d\\theta\\)).',
          'Rates of change in polar form depend on \\(d\\theta\\) (and \\(dr/d\\theta\\) for arc length).',
          'Geometry differs from rectangular: use polar formulas for area and arc length.',
        ],
        {
          exampleCode: `r=2,\\quad \\text{area from } 0 \\text{ to } \\pi:\\quad A=\\frac{1}{2}\\int_0^\\pi 4\\,d\\theta = 2\\pi`,
          exampleLanguage: 'latex',
          exampleExplanation: 'For the constant function \\(r=2\\), the region from \\(\\theta=0\\) to \\(\\theta=\\pi\\) is a semicircle of radius 2; area \\(= \\frac{1}{2}\\pi(2)^2 = 2\\pi\\).',
        }
      ),
    ],
  },
  {
    unitNumber: 4,
    title: 'Functions Involving Parameters, Vectors, and Matrices',
    subunits: [
      subunit(
        '4-1',
        'Parametric Functions and Planar Motion',
        'A parametric function defines \\(x\\) and \\(y\\) separately in terms of a parameter \\(t\\): \\(x=f(t),\\\\ y=g(t)\\). The parameter often represents time, so the curve is traced out as \\(t\\) varies. The same geometric curve can be traced in different ways depending on how \\(x(t)\\) and \\(y(t)\\) change with \\(t\\), and the direction of motion is determined by increasing \\(t\\).\\n\\n' +
          'General method: (1) Identify \\(x(t)\\) and \\(y(t)\\). (2) Eliminate the parameter if needed by solving for \\(t\\) and substituting, to obtain a Cartesian equation. (3) Determine direction of motion by evaluating points for increasing \\(t\\). (4) Sketch the curve with arrows indicating orientation.',
        [
          'A single curve may be traced differently depending on how \\(t\\) runs.',
          'Motion depends on how \\(x\\) and \\(y\\) change together as \\(t\\) changes.',
          'Direction is determined by increasing \\(t\\).',
        ],
        {
          exampleCode: `x=t,\\\\quad y=t^2
\\\\
\\\\text{Eliminate } t: y=x^2`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The parametric curve is the parabola \\(y=x^2\\), traced from left to right as \\(t\\) (and thus \\(x\\)) increases.',
        }
      ),
      subunit(
        '4-2',
        'Parametric Rates of Change and Geometry',
        'Rates of change for parametric functions depend on derivatives with respect to \\(t\\). If \\(x=f(t)\\) and \\(y=g(t)\\), then the slope of the curve is \\(\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}\\) (provided \\(dx/dt\\neq 0\\)). Second derivatives describe concavity, and the velocity vector is \\(\\langle x\\\'(t), y\\\'(t)\\rangle\\). Special points occur where these derivatives vanish or are undefined.\\n\\n' +
          'General method: (1) Compute \\(dx/dt\\) and \\(dy/dt\\). (2) Form \\(dy/dx = (dy/dt)/(dx/dt)\\). (3) Evaluate at desired \\(t\\) values to get slopes. (4) Interpret slopes and the velocity vector geometrically (direction and speed of motion). Horizontal tangents occur when \\(dy/dt=0\\) and \\(dx/dt\\neq 0\\); vertical tangents when \\(dx/dt=0\\) and \\(dy/dt\\neq 0\\).',
        [
          'Horizontal tangent when \\(dy/dt = 0\\) but \\(dx/dt\\neq 0\\).',
          'Vertical tangent when \\(dx/dt = 0\\) but \\(dy/dt\\neq 0\\).',
          'Velocity vector: \\(\\langle x\\\'(t), y\\\'(t)\\rangle\\); its magnitude is speed.',
        ],
        {
          exampleCode: `x=t^2,\\\\quad y=t^3
\\\\
\\\\frac{dy}{dx} = \\\\frac{3t^2}{2t} = \\\\frac{3t}{2}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The slope depends on \\(t\\); at \\(t=0\\) the slope is 0 (horizontal tangent), and for \\(t>0\\) the slope is positive, matching the curve’s geometry.',
        }
      ),
      subunit(
        '4-3',
        'Implicitly Defined Functions & Parametrization',
        'An implicit function is defined by an equation relating \\(x\\) and \\(y\\), such as \\(F(x,y)=0\\). We can analyze its slope using implicit differentiation, or describe the same curve via a parametrization. Parametrization rewrites the relationship using a parameter \\(t\\) so that \\(x=x(t)\\) and \\(y=y(t)\\), often simplifying motion or making the geometry more transparent.\\n\\n' +
          'General method (implicit differentiation): (1) Differentiate both sides with respect to \\(x\\), treating \\(y\\) as a function of \\(x\\). (2) Use the chain rule for any term involving \\(y\\) (e.g. \\(d(y^2)/dx = 2y\\,dy/dx\\)). (3) Solve for \\(dy/dx\\). General method (parametrization): (1) Introduce a parameter \\(t\\). (2) Express \\(x(t), y(t)\\) so that substituting them into the equation satisfies it. (3) Verify and, if needed, determine the \\(t\\)-interval that traces the desired portion of the curve.',
        [
          'Implicit functions may not be easily solvable for \\(y\\) explicitly.',
          'Parametrization describes entire curves and can encode direction and speed.',
          'Multiple parametrizations of the same curve may exist.',
        ],
        {
          exampleCode: `x^2 + y^2 = 4
\\\\
\\\\text{Parametrization: } x=2\\\\cos t,\\\\ y=2\\\\sin t`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Substituting gives \\((2\\\\cos t)^2 + (2\\\\sin t)^2 = 4(\\\\cos^2 t + \\\\sin^2 t)=4\\), so the parametrization traces the circle of radius 2.',
        }
      ),
      subunit(
        '4-4',
        'Conic Sections',
        'Conic sections (circles, ellipses, parabolas, hyperbolas) arise from intersecting a plane with a cone and are described algebraically by quadratic equations in \\(x\\) and \\(y\\). Standard forms reveal geometric features such as center, radius or axes lengths, and direction of opening. Rewriting a general quadratic into standard form (often by completing the square) lets us identify the type of conic and sketch it accurately.\\n\\n' +
          'General method: (1) Rewrite the equation in standard form by grouping \\(x\\)-terms and \\(y\\)-terms and completing the square. (2) Identify the type of conic (circle, ellipse, parabola, hyperbola) from the signs and coefficients. (3) Extract center, vertices, axes, and asymptotes (for hyperbolas). (4) Sketch the graph using this geometric information.',
        [
          'Circle: \\((x-h)^2 + (y-k)^2 = r^2\\).',
          'Ellipse: \\(\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1\\); hyperbola uses subtraction.',
          'Parabola: one variable squared; opens along the unsquared variable’s axis.',
        ],
        {
          exampleCode: `\\\\frac{x^2}{9} + \\\\frac{y^2}{4} = 1`,
          exampleLanguage: 'latex',
          exampleExplanation: 'This is an ellipse centered at the origin with semi-axes 3 (in the \\(x\\)-direction) and 2 (in the \\(y\\)-direction).',
        }
      ),
      subunit(
        '4-5',
        'Vectors and Vector-Valued Functions',
        'A vector in the plane can be written as \\(\\\\mathbf{v}=\\\\langle a,b\\\\rangle\\), representing a directed segment with components \\(a\\) and \\(b\\). Vector-valued functions describe motion by giving position as a function of time: \\(\\\\mathbf{r}(t)=\\\\langle x(t), y(t)\\\\rangle\\). We can add vectors, scale them, find their magnitude, and differentiate or integrate component-wise to study motion.\\n\\n' +
          'General method: (1) Identify vector components. (2) Compute magnitude using \\(|\\\\mathbf{v}|=\\\\sqrt{a^2+b^2}\\). (3) Perform addition or scalar multiplication component-wise. (4) For motion, differentiate \\(\\\\mathbf{r}(t)\\) component-wise to get velocity, and differentiate again to get acceleration.',
        [
          'Velocity: \\(\\\\mathbf{r}\\\\\'(t)\\); acceleration: \\(\\\\mathbf{r}\\\\\'\'(t)\\).',
          'Speed is the magnitude of the velocity vector.',
          'Vectors encode both direction and magnitude, useful for forces and motion.',
        ],
        {
          exampleCode: `\\\\mathbf{r}(t)=\\\\langle t, t^2\\\\rangle
\\\\
\\\\mathbf{r}\\\\'(t)=\\\\langle 1, 2t\\\\rangle`,
          exampleLanguage: 'latex',
          exampleExplanation: 'The position moves along the parabola \\(y=x^2\\); the velocity vector shows that horizontal speed is constant while vertical speed grows linearly with \\(t\\).',
        }
      ),
      subunit(
        '4-6',
        'Matrices and Matrix Operations',
        'A matrix is a rectangular array of numbers used to represent linear systems and linear transformations. An \\(m\\\\times n\\) matrix has \\(m\\) rows and \\(n\\) columns. Matrix multiplication corresponds to composing linear transformations, and is defined by row-by-column products. Order matters: in general, matrix multiplication is not commutative.\\n\\n' +
          'General method: (1) Verify that the inner dimensions match (for an \\(m\\\\times n\\) matrix times an \\(n\\\\times p\\) matrix). (2) Multiply rows of the first matrix by columns of the second, summing the products to form each entry. (3) Use matrices to represent systems of equations or transformations and interpret the result.',
        [
          'Dimensions \\(m\\\\times n\\) matter for whether a product is defined.',
          'Matrix multiplication is generally not commutative (\\\\(AB\\\\neq BA\\\\)).',
          'The identity matrix acts like 1 for multiplication (\\\\(AI=IA=A\\\\)).',
        ],
        {
          exampleCode: `\\\\begin{pmatrix}1 & 2\\\\\\\\ 3 & 4\\\\end{pmatrix}\\\\begin{pmatrix}2\\\\\\\\ 1\\\\end{pmatrix}
=
\\\\begin{pmatrix}4\\\\\\\\ 10\\\\end{pmatrix}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Multiplying the 2\\\\times2 matrix by a 2\\\\times1 column vector gives a new vector whose entries are row-by-column dot products.',
        }
      ),
      subunit(
        '4-7',
        'Determinants, Inverses, and Linear Transformations',
        'The determinant of a square matrix measures how a linear transformation scales area (in 2D) or volume (in higher dimensions) and whether it reverses orientation. For a 2\\\\times2 matrix, the determinant is \\(\\\\det\\\\begin{pmatrix}a & b\\\\\\\\ c & d\\\\end{pmatrix} = ad-bc\\). A matrix is invertible if and only if its determinant is nonzero; the inverse reverses the transformation.\\n\\n' +
          'General method: (1) Compute the determinant. (2) If the determinant is zero, the matrix is not invertible (it collapses area/volume). (3) If nonzero, compute the inverse using formulas or row operations. (4) Interpret the determinant as the area-scaling factor and sign for orientation.',
        [
          'Determinant zero \\(\\\\Rightarrow\\) no inverse; transformation is not one-to-one.',
          'Determinant nonzero \\(\\\\Rightarrow\\) invertible; inverse reverses the transformation.',
          'In 2D, the absolute value of the determinant is the area-scaling factor.',
        ],
        {
          exampleCode: `A=\\\\begin{pmatrix}2 & 1\\\\\\\\ 1 & 1\\\\end{pmatrix}
\\\\quad\\\\Rightarrow\\\\quad \\\\det A = 2(1)-1(1)=1`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Since \\(\\\\det A=1\\\\neq 0\\\\), the matrix is invertible and preserves area (scaling factor 1) while possibly rotating or shearing the plane.',
        }
      ),
      subunit(
        '4-8',
        'Matrices as Functions and Modeling Contexts',
        'Matrices act as functions transforming vectors: given a matrix \\(A\\), the transformation \\(T(\\\\mathbf{x}) = A\\\\mathbf{x}\\) maps input vectors to output vectors. This framework models systems in economics, physics, computer graphics, and networks. Composing transformations corresponds to multiplying their matrices, so we can combine several effects (e.g. rotation then scaling) into a single matrix product.\\n\\n' +
          'General method: (1) Identify the matrix \\(A\\). (2) Multiply \\(A\\) by an input vector to get the output. (3) Interpret what the transformation does to basic vectors or shapes (e.g. unit square). (4) Use matrix equations to model and solve real-world systems.',
        [
          'Matrices represent rotations, reflections, scalings, and shears in the plane.',
          'Composition of transformations corresponds to matrix multiplication.',
          'Real-world systems (e.g. Markov chains, input-output models) can be written as matrix equations.',
        ],
        {
          exampleCode: `A=\\\\begin{pmatrix}0 & -1\\\\\\\\ 1 & 0\\\\end{pmatrix}
\\\\quad\\\\Rightarrow\\\\quad T(x)=Ax \\\\text{ rotates vectors } 90^\\\\circ \\\\text{ counterclockwise}`,
          exampleLanguage: 'latex',
          exampleExplanation: 'Applying this matrix to the standard basis vectors sends \\((1,0)\\\\) to \\((0,1)\\\\) and \\((0,1)\\\\) to \\((-1,0)\\\\), which is a 90-degree counterclockwise rotation.',
        }
      ),
    ],
  },
]

export const PRECALC_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Precalculus',
  units: PRECALC_UNITS,
}
