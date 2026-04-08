import type { SubjectUnitOverview, UnitOverview } from './types'
import { subunit } from './parseRawOverview'

const STATS_UNITS: UnitOverview[] = [
  {
    unitNumber: 1,
    title: 'Exploring One-Variable Data',
    subunits: [
      subunit(
        '1-0',
        'Unit 1 Overview: Exploring One-Variable Data',
        'This unit introduces statistics as the science of learning from data. We explore single variables: how to classify them (categorical vs quantitative), display them (tables and graphs), describe their distributions (shape, center, spread), and use the normal distribution. The goal is to summarize and compare one-variable data in context.'
      ),
      subunit(
        '1-1',
        'Introducing Statistics: What Can We Learn from Data?',
        'Statistics is the science of learning from data. It involves collecting, organizing, analyzing, and drawing conclusions from information. A variable is a characteristic measured on individuals. Variables are either categorical (labels or groups) or quantitative (numerical measurements).\n\n' +
          'General method: (1) Identify the individuals. (2) Identify the variable measured. (3) Classify the variable as categorical or quantitative. (4) Determine whether you have a population or a sample.',
        [
          'Population = entire group of interest; sample = subset of the population.',
          'Categorical = categories or labels; arithmetic is not meaningful.',
          'Quantitative = numeric values; arithmetic (mean, etc.) is meaningful.',
        ],
        {
          exampleCode: '\\text{Favorite color} \\Rightarrow \\text{categorical}.\\quad \\text{Height in inches} \\Rightarrow \\text{quantitative}.',
          exampleLanguage: 'latex',
          exampleExplanation: 'Favorite color has no meaningful average; height does.',
        }
      ),
      subunit(
        '1-2',
        'The Language of Variation: Variables',
        'Variables describe variation among individuals. Categorical variables place individuals into groups (e.g. major, yes/no). Quantitative variables take numeric values that support arithmetic (e.g. height, score). Distinguish between the population (all individuals of interest) and the sample (the subset actually observed).',
        [
          'Population = entire group; sample = subset used for inference.',
          'Categorical: categories only; quantitative: numeric with meaningful arithmetic.',
        ]
      ),
      subunit(
        '1-3',
        'Representing a Categorical Variable with Tables',
        'Categorical data are summarized using frequency tables (counts per category) and relative frequency tables (proportions or percentages). Count how many individuals fall in each category; relative frequency is that count divided by the total.\n\n' +
          'General method: (1) Count frequencies for each category. (2) Compute relative frequencies (frequency / total). (3) Present in a table with clear labels. (4) Use relative frequencies to compare across groups of different sizes.',
        [
          'Frequency = count in each category; relative frequency = proportion or %.',
          'Relative frequency allows comparison when totals differ.',
        ],
        {
          exampleCode: '\\text{Survey of 100 students: 40 math, 35 science, 25 English.}\\\\quad \\frac{40}{100}=0.40 \\text{ for math}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Relative frequency for math is 40/100 = 0.40 (40%).',
        }
      ),
      subunit(
        '1-4',
        'Representing a Categorical Variable with Graphs',
        'Categorical data are displayed with bar charts (equal-width bars, heights = frequency or proportion) or segmented (stacked) bar charts when comparing groups. Bars are separated to show categories.\n\n' +
          'General method: (1) Count frequencies or relative frequencies. (2) Construct a bar chart with equal-width bars; height = frequency or relative frequency. (3) Label axes and categories clearly. (4) Use segmented bar charts to compare distributions across groups.',
        [
          'Bars are separated (not continuous); height = frequency or proportion.',
          'Compare categories using relative frequency when totals differ.',
        ]
      ),
      subunit(
        '1-5',
        'Representing a Quantitative Variable with Graphs',
        'Quantitative data are displayed using dotplots, histograms, and stemplots. These graphs reveal the shape, center, and spread of the distribution. Dotplots show each value; histograms group values into bins; stemplots split stems and leaves.\n\n' +
          'General method: (1) Choose an appropriate graph (dotplot for small data sets, histogram for larger sets). (2) For histograms, determine class intervals (bin width). (3) Plot the data. (4) Label axes and scale clearly.',
        [
          'Histograms have touching bars; bin width affects shape and detail.',
          'Look for shape (symmetric, skewed), center, spread, and outliers.',
        ],
        {
          exampleCode: '\\text{Test scores } 60\\text{--}100 \\text{ grouped into bins of width } 5.',
          exampleLanguage: 'latex',
          exampleExplanation: 'Bins might be 60,65, 65,70, etc.; count how many values fall in each.',
        }
      ),
      subunit(
        '1-6',
        'Describing the Distribution of a Quantitative Variable',
        'Distributions are described using SOCS: Shape, Outliers, Center, Spread. Shape may be symmetric, right-skewed (tail to the right), or left-skewed (tail to the left). Outliers are extreme values; center is summarized by mean or median; spread by range, IQR, or standard deviation.\n\n' +
          'General method: (1) Describe shape (symmetric, skewed left/right). (2) Identify gaps or outliers. (3) Report center (mean or median). (4) Report spread (range, IQR, or SD).',
        [
          'Right-skewed \\(\\Rightarrow\\) long tail to the right; left-skewed \\(\\Rightarrow\\) long tail to the left.',
          'Outliers are extreme observations that may need special attention.',
        ],
        {
          exampleCode: '\\text{Histogram with long right tail} \\Rightarrow \\text{right-skewed}',
          exampleLanguage: 'latex',
          exampleExplanation: 'The tail points in the direction of the skew.',
        }
      ),
      subunit(
        '1-7',
        'Summary Statistics for a Quantitative Variable',
        'Quantitative data are summarized numerically. The mean is \\(\\bar{x} = \\frac{\\sum x_i}{n}\\). The standard deviation is \\(s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}\\). The median and IQR are resistant to outliers; the mean and standard deviation are not.\n\n' +
          'General method: (1) Compute the mean. (2) Compute deviations from the mean. (3) Calculate the standard deviation. (4) Compare with median and IQR for resistance to outliers.',
        [
          'Mean is sensitive to outliers; median is resistant.',
          '\\(\\text{IQR} = Q_3 - Q_1\\); resistant measure of spread.',
        ],
        {
          exampleCode: '\\text{Data: } 2, 4, 6 \\quad \\Rightarrow \\quad \\bar{x} = \\frac{12}{3} = 4',
          exampleLanguage: 'latex',
          exampleExplanation: 'Sum = 12, n = 3, so mean = 4.',
        }
      ),
      subunit(
        '1-8',
        'Graphical Representations of Summary Statistics',
        'Boxplots display the five-number summary: minimum, \\(Q_1\\), median, \\(Q_3\\), maximum. The box shows the middle 50%; whiskers extend to the smallest and largest non-outlier values. Modified boxplots plot outliers individually. Outliers are often defined as below \\(Q_1 - 1.5(\\text{IQR})\\) or above \\(Q_3 + 1.5(\\text{IQR})\\).\n\n' +
          'General method: (1) Compute the five-number summary. (2) Compute IQR. (3) Find outlier fences: \\(Q_1 - 1.5(\\text{IQR})\\) and \\(Q_3 + 1.5(\\text{IQR})\\). (4) Draw the box and whiskers; plot outliers separately.',
        [
          'Box = middle 50%; whiskers extend to non-outliers.',
          'Outliers plotted individually; fences at \\(Q_1 - 1.5(\\text{IQR})\\) and \\(Q_3 + 1.5(\\text{IQR})\\).',
        ],
        {
          exampleCode: 'Q_1=10,\\ Q_3=20,\\ \\text{IQR}=10 \\Rightarrow \\text{Upper fence } = 20+1.5(10)=35',
          exampleLanguage: 'latex',
          exampleExplanation: 'Values above 35 would be plotted as outliers.',
        }
      ),
      subunit(
        '1-9',
        'Comparing Distributions of a Quantitative Variable',
        'Compare two or more distributions using side-by-side boxplots or side-by-side histograms. Use SOCS: compare shape, center, spread, and outliers. Use consistent scales and always interpret in context.\n\n' +
          'General method: (1) Compare shapes. (2) Compare centers (median or mean). (3) Compare spreads (IQR or SD). (4) Note any outliers. Use precise language (e.g. "higher median") rather than vague terms.',
        [
          'Always compare in context; use consistent scales.',
          'Avoid vague language; cite specific statistics (e.g. median, IQR).',
        ],
        {
          exampleCode: '\\text{Class A median } 78,\\ \\text{Class B median } 85 \\Rightarrow \\text{Class B has higher center}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Comparing medians gives a clear center comparison.',
        }
      ),
      subunit(
        '1-10',
        'The Normal Distribution',
        'The normal distribution is symmetric and bell-shaped, defined by mean \\(\\mu\\) and standard deviation \\(\\sigma\\). The Empirical Rule: about 68% of values fall within 1 SD of the mean, 95% within 2 SD, and 99.7% within 3 SD. We standardize using the z-score \\(z = \\frac{x - \\mu}{\\sigma}\\) and use tables or technology to find areas (probabilities).\n\n' +
          'General method: (1) Standardize: \\(z = \\frac{x - \\mu}{\\sigma}\\). (2) Use a normal table or calculator to find the area (probability). (3) Interpret in context.',
        [
          'Normal curve is symmetric; mean = median = mode.',
          'Standardization (z-scores) allows comparison across different scales.',
        ],
        {
          exampleCode: '\\mu=100,\\ \\sigma=15,\\ x=130 \\Rightarrow z = \\frac{130-100}{15} = 2',
          exampleLanguage: 'latex',
          exampleExplanation: 'Score 130 is 2 standard deviations above the mean.',
        }
      ),
    ],
  },
  {
    unitNumber: 2,
    title: 'Exploring Two-Variable Data',
    subunits: [
      subunit(
        '2-0',
        'Unit 2 Overview: Exploring Two-Variable Data',
        'This unit focuses on relationships between two variables: explanatory vs response, categorical vs quantitative. We use two-way tables and conditional proportions for two categorical variables, and scatterplots, correlation, and least squares regression for two quantitative variables. Residuals and residual plots help assess whether a linear model is appropriate.'
      ),
      subunit(
        '2-1',
        'Introducing Statistics: Are Variables Related?',
        'When studying two variables, we examine whether they are related. One variable may help explain or predict changes in another. The explanatory variable (x) is used to predict or explain; the response variable (y) is the outcome we measure. An association exists when changes in one variable tend to correspond to changes in the other.\n\n' +
          'General method: (1) Identify explanatory and response variables. (2) Determine whether each is categorical or quantitative. (3) Examine the pattern or association. (4) Describe the relationship in context. Association does not imply causation.',
        [
          'Explanatory (x) predicts or explains; response (y) is the outcome.',
          'Association does not imply causation; context determines interpretation.',
          'Relationships may be positive, negative, or none.',
        ],
        {
          exampleCode: '\\text{Study hours (explanatory) vs exam score (response).} \\quad \\text{More hours} \\Rightarrow \\text{higher scores}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Positive association; we cannot conclude that studying causes higher scores (confounding possible).',
        }
      ),
      subunit(
        '2-2',
        'Representing Two Categorical Variables',
        'Relationships between two categorical variables are displayed in two-way tables (contingency tables). Rows and columns show the two variables; cells show counts. Conditional proportions (row or column proportions) help determine whether an association exists, compare the distribution of one variable across categories of the other.\n\n' +
          'General method: (1) Construct a two-way table with counts. (2) Calculate row or column conditional proportions. (3) Compare proportions across rows or columns. (4) Conclude whether an association appears present.',
        [
          'Compare conditional proportions, not overall totals.',
          'Large differences in conditional proportions suggest association.',
          'Similar proportions across groups suggest independence.',
        ],
        {
          exampleCode: '70\\% \\text{ of athletes prefer A, } 40\\% \\text{ of non-athletes} \\Rightarrow \\text{evidence of association}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Different conditional proportions indicate that preference is associated with athlete status.',
        }
      ),
      subunit(
        '2-3',
        'Statistics for Two Categorical Variables',
        'Beyond two-way tables, we summarize association between two categorical variables using conditional distributions, percent differences, or (in later units) chi-square tests. The key is comparing conditional proportions: if the distribution of one variable is similar across categories of the other, the variables may be independent.',
        [
          'Conditional distributions describe one variable given the other.',
          'Independence: conditional distributions are the same across groups.',
        ]
      ),
      subunit(
        '2-4',
        'Representing the Relationship Between Two Quantitative Variables',
        'Two quantitative variables are displayed in a scatterplot: explanatory on the x-axis, response on the y-axis. Describe the relationship using form (linear, curved), direction (positive, negative), strength (how closely points follow the pattern), and outliers.\n\n' +
          'General method: (1) Plot explanatory variable on x-axis, response on y-axis. (2) Describe form, direction, strength, and any outliers. (3) Interpret in context.',
        [
          'Positive association: y tends to increase as x increases.',
          'Negative association: y tends to decrease as x increases.',
          'Strength: points close to a clear pattern = strong; scattered = weak.',
        ],
        {
          exampleCode: '\\text{Height vs weight} \\Rightarrow \\text{positive linear association}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Taller people tend to weigh more; points cluster around a line with positive slope.',
        }
      ),
      subunit(
        '2-5',
        'Correlation',
        'Correlation \\(r\\) measures the strength and direction of a linear relationship. It is the average of the products of the z-scores: \\(r = \\frac{1}{n-1} \\sum \\left( \\frac{x_i - \\bar{x}}{s_x} \\right) \\left( \\frac{y_i - \\bar{y}}{s_y} \\right)\\). Values range from \\(-1\\) to \\(1\\); \\(r>0\\) indicates positive association, \\(r<0\\) negative. Correlation does not imply causation, and outliers can strongly affect \\(r\\).\n\n' +
          'General method: (1) Verify that the relationship is roughly linear. (2) Calculate \\(r\\) using technology. (3) Interpret magnitude and sign. (4) Check for influential points.',
        [
          '\\(r>0\\) positive association; \\(r<0\\) negative; \\(|r|\\) near 1 = strong linear.',
          'Correlation does not imply causation; outliers strongly affect \\(r\\).',
        ],
        {
          exampleCode: 'r=0.85 \\Rightarrow \\text{strong positive linear relationship}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Points cluster closely around a line with positive slope.',
        }
      ),
      subunit(
        '2-6',
        'Linear Regression Models',
        'The Least Squares Regression Line (LSRL) predicts the response from the explanatory variable: \\(\\hat{y} = a + bx\\). The slope \\(b = r \\frac{s_y}{s_x}\\) and the intercept \\(a = \\bar{y} - b\\bar{x}\\). The slope is the predicted change in y per unit increase in x; the intercept is the predicted y when \\(x=0\\) (interpret only when that is in scope).\n\n' +
          'General method: (1) Calculate slope and intercept (or use technology). (2) Write \\(\\hat{y} = a + bx\\). (3) Interpret slope and intercept in context. (4) Use the equation for prediction within the data range.',
        [
          'Slope = predicted change in y per unit increase in x.',
          'LSRL minimizes the sum of squared residuals.',
        ],
        {
          exampleCode: '\\hat{y}=50+3x \\Rightarrow \\text{each extra hour studied, score +3 (predicted)}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Slope 3: for each additional hour of study, predicted exam score increases by 3 points.',
        }
      ),
      subunit(
        '2-7',
        'Residuals',
        'The residual is the observed value minus the predicted value: residual \\(= y - \\hat{y}\\). Residuals show prediction error. A residual plot (residuals vs x or vs \\(\\hat{y}\\)) is used to assess the linear model: random scatter suggests the linear model is appropriate; a curved or systematic pattern suggests nonlinearity or other problems.\n\n' +
          'General method: (1) Compute residuals \\(y - \\hat{y}\\) for each point. (2) Plot residuals vs x (or vs \\(\\hat{y}\\)). (3) Look for patterns (curve, funnel shape). (4) Decide whether the linear model is appropriate.',
        [
          'Random scatter in residual plot \\(\\Rightarrow\\) linear model reasonable.',
          'Curved or systematic pattern \\(\\Rightarrow\\) consider nonlinear model.',
          'Large residual \\(\\Rightarrow\\) possible outlier or influential point.',
        ],
        {
          exampleCode: '\\text{Residual plot shows curve} \\Rightarrow \\text{linear model not appropriate}',
          exampleLanguage: 'latex',
          exampleExplanation: 'A curved pattern indicates that a straight line does not capture the relationship.',
        }
      ),
      subunit(
        '2-8',
        'Least Squares Regression',
        'The least squares method chooses the line that minimizes \\(\\sum (y - \\hat{y})^2\\). Squaring residuals prevents positive and negative errors from canceling. Predictions are most reliable within the range of the observed x values; extrapolation (predicting far outside that range) can be unreliable.\n\n' +
          'General method: (1) Use the regression equation to predict. (2) Check that the x-value is within the data range. (3) Avoid extrapolation when possible. (4) Interpret the prediction in context.',
        [
          'Minimize sum of squared residuals; extrapolation may be unreliable.',
          'Model valid only when linearity and other assumptions are reasonable.',
        ],
        {
          exampleCode: '\\text{Data } x=1\\text{--}8 \\text{ hrs. Predict } x=5 \\Rightarrow \\text{OK. Predict } x=20 \\Rightarrow \\text{extrapolation}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Interpolation (within range) is safer; predicting at 20 hours is extrapolation and may be inaccurate.',
        }
      ),
      subunit(
        '2-9',
        'Analyzing Departures from Linearity',
        'When a linear model is not appropriate, look for curved patterns in the scatterplot or residual plot, outliers, or influential points. Transformations (e.g. log of y) can sometimes linearize a relationship. Always describe departures from linearity in context and choose an appropriate model or refrain from using a line.',
        [
          'Curved relationship \\(\\Rightarrow\\) linear model inappropriate; consider transformation or other model.',
          'Outliers and influential points can distort the LSRL.',
        ]
      ),
    ],
  },
  {
    unitNumber: 3,
    title: 'Collecting Data',
    subunits: [
      subunit(
        '3-0',
        'Unit 3 Overview: Collecting Data',
        'This unit covers how to plan and carry out studies that produce trustworthy data. We distinguish observational studies (observe only) from experiments (impose treatments), and discuss random sampling methods, sources of bias, and principles of experimental design (control, randomization, replication). Proper design determines whether we can infer association or causation.'
      ),
      subunit(
        '3-1',
        'Introducing Statistics: Do the Data We Collected Tell the Truth?',
        'Data can mislead if the study was poorly designed or biased. Whether the data "tell the truth" depends on how the sample was selected, whether treatments were randomly assigned (in experiments), and whether confounding was controlled. This unit develops the criteria for evaluating and designing studies that support valid conclusions.'
      ),
      subunit(
        '3-2',
        'Introduction to Planning a Study',
        'Studies are designed to collect data that answer specific research questions. Two main types: observational study, observe individuals without imposing treatments; experiment, impose treatments and measure the response. Observational studies can show association; experiments with random assignment can support causal conclusions.\n\n' +
          'General method: (1) Identify the research question. (2) Determine explanatory and response variables. (3) Decide whether an observational study or experiment is appropriate. (4) Define the population and how the sample will be obtained.',
        [
          'Observational study: observe only; shows association.',
          'Experiment: impose treatments; can support causation when well designed.',
          'Clear definitions of variables and population improve validity.',
        ],
        {
          exampleCode: '\\text{Survey teens about sleep} \\Rightarrow \\text{observational.} \\quad \\text{Assign sleep schedules} \\Rightarrow \\text{experiment}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Surveying only observes; assigning treatments allows comparison and causal inference when randomized.',
        }
      ),
      subunit(
        '3-3',
        'Random Sampling and Data Collection',
        'Random sampling ensures that every individual (or every set of individuals of a given size) has a known chance of being selected, which reduces selection bias. Common methods: Simple Random Sample (SRS), every possible sample of size n equally likely; stratified, divide population into strata, sample from each; cluster, randomly select groups and use all individuals in those groups; systematic, select every kth individual.\n\n' +
          'General method: (1) Define the population and sampling frame. (2) Choose a sampling method. (3) Use a random mechanism to select the sample. (4) Collect data from selected individuals.',
        [
          'SRS: every group of size n equally likely to be chosen.',
          'Stratified: divide into groups (strata), then sample from each.',
          'Cluster: randomly select entire groups (clusters); all in selected clusters are in the sample.',
          'Randomization reduces bias and supports generalization to the population.',
        ],
        {
          exampleCode: '\\text{Number students, use random number generator} \\Rightarrow \\text{SRS}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Each student has the same chance of being selected; each set of n students has the same chance.',
        }
      ),
      subunit(
        '3-4',
        'Potential Problems with Sampling',
        'Bias occurs when the sampling method systematically favors certain outcomes or underrepresents parts of the population. Common sources: undercoverage, some groups not in the sampling frame or underrepresented; nonresponse, selected individuals do not respond; response bias, wording of questions or context leads to inaccurate answers.\n\n' +
          'General method: (1) Identify the sampling frame and check who might be excluded. (2) Determine if certain groups are underrepresented (undercoverage). (3) Examine response rate and consider nonresponse bias. (4) Evaluate question wording and context for response bias.',
        [
          'Undercoverage: some groups in the population are not represented.',
          'Nonresponse: selected individuals do not participate; nonresponders may differ from responders.',
          'Response bias: answers systematically distorted by question wording or context.',
        ],
        {
          exampleCode: '\\text{Online survey excludes people without internet} \\Rightarrow \\text{undercoverage bias}',
          exampleLanguage: 'latex',
          exampleExplanation: 'The sample does not represent the full population; conclusions may not generalize.',
        }
      ),
      subunit(
        '3-5',
        'Introduction to Experimental Design',
        'Well-designed experiments use control, randomization, and replication. Control: use a control group (e.g. placebo) for comparison. Randomization: randomly assign subjects to treatments to balance confounding variables across groups. Replication: use enough subjects (or experimental units) so that random variation can be assessed and effects can be detected.\n\n' +
          'General method: (1) Define treatments and control. (2) Randomly assign subjects to treatment groups. (3) Use a control group when appropriate. (4) Replicate, ensure sufficient sample size and consistent procedures.',
        [
          'Random assignment balances groups and reduces confounding.',
          'Control group provides a baseline for comparison.',
          'Replication reduces the impact of random variation and supports generalizability.',
        ],
        {
          exampleCode: '\\text{Randomly assign patients to treatment or placebo}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Random assignment helps ensure that treatment and control groups are comparable at the start.',
        }
      ),
      subunit(
        '3-6',
        'Selecting an Experimental Design',
        'Common designs: Completely randomized design; all subjects randomly assigned to treatments with no blocking. Randomized block design, form blocks of similar subjects, then randomly assign within each block to reduce variability due to the blocking variable. Matched pairs, pair similar individuals and randomly assign which member gets which treatment (or use each subject as their own control).\n\n' +
          'General method: (1) Identify blocking variables if variability can be reduced by grouping similar units. (2) Randomly assign treatments within blocks (or within pairs). (3) Keep treatment conditions consistent. (4) Collect response data.',
        [
          'Blocking reduces variability by comparing within similar groups.',
          'Matched pairs compare similar individuals or same individual under two conditions.',
          'Completely randomized design is appropriate when units are roughly homogeneous.',
        ],
        {
          exampleCode: '\\text{Pair students by GPA, randomize study method within pairs} \\Rightarrow \\text{matched pairs}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Pairing by GPA controls for prior achievement when comparing the two study methods.',
        }
      ),
      subunit(
        '3-7',
        'Inference and Experiments',
        'Inference means drawing conclusions about a population from sample data. Causation can be inferred from experiments when there is random assignment and control of confounding variables. Observational studies show association only; confounding variables (e.g. a third variable related to both x and y) can explain the association without causation.\n\n' +
          'General method: (1) Identify the study type (observational vs experiment). (2) Determine whether random assignment was used. (3) Assess potential confounding. (4) Conclude association only, or possible causation (if experiment with random assignment).',
        [
          'Observational studies \\(\\Rightarrow\\) association only, not causation.',
          'Experiments with random assignment \\(\\Rightarrow\\) can support causal conclusions.',
          'Confounding variables can create misleading associations.',
        ],
        {
          exampleCode: '\\text{Ice cream sales } \\& \\text{ drowning: confounder = temperature. Association } \\neq \\text{ causation}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Both increase in summer; the association is explained by temperature, not by ice cream causing drowning.',
        }
      ),
    ],
  },
  {
    unitNumber: 4,
    title: 'Probability, Random Variables, and Probability Distributions',
    subunits: [
      subunit(
        '4-0',
        'Unit 4 Overview: Probability, Random Variables, and Probability Distributions',
        'This unit covers probability (likelihood of events), conditional probability and independence, simulation to estimate probabilities, and random variables (discrete and continuous). We compute means and standard deviations of random variables and combine them. Special distributions include the binomial (count of successes in n trials) and the geometric (trials until first success).'
      ),
      subunit(
        '4-1',
        'Introducing Statistics: Random and Non-Random Patterns?',
        'Probability helps distinguish random variation from real patterns. Random processes (e.g. coin flips) have predictable long-run behavior even though individual outcomes are uncertain. We use probability to quantify how likely outcomes are and to model random variables that arise in data collection and inference.'
      ),
      subunit(
        '4-2',
        'Estimating Probabilities Using Simulation',
        'Simulation uses random processes (e.g. random number generators) to approximate probabilities when theoretical calculation is difficult. Assign random numbers to outcomes, run many trials, and estimate the probability as (number of successes) / (total trials). The Law of Large Numbers: as the number of trials increases, the simulated proportion approaches the true probability.\n\n' +
          'General method: (1) Define the event of interest. (2) Assign random numbers to outcomes. (3) Run many trials. (4) Estimate probability as (successes)/(total trials).',
        [
          'Larger number of trials improves accuracy of the estimate.',
          'Random number generators ensure fairness and independence.',
          'Simulation approximates theoretical probability.',
        ],
        {
          exampleCode: '\\text{Simulate 1000 runs of 5 coin flips; count proportion with exactly 3 heads}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Use simulation to estimate P(exactly 3 heads in 5 flips) when not using the binomial formula.',
        }
      ),
      subunit(
        '4-3',
        'Introduction to Probability',
        'Probability measures the likelihood of an event, with values from 0 to 1. Basic rules: Complement \\(P(A^c) = 1 - P(A)\\); Addition Rule \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\). The total probability of the sample space is 1.\n\n' +
          'General method: (1) Define the event(s). (2) Identify the sample space. (3) Apply the addition rule or complement rule as appropriate. (4) Interpret the result in context.',
        [
          'Complement: "not A"; \\(P(A^c) = 1 - P(A)\\).',
          'Mutually exclusive: \\(P(A \\cap B) = 0\\); then \\(P(A \\cup B) = P(A) + P(B)\\).',
          'Total probability of all outcomes = 1.',
        ],
        {
          exampleCode: 'P(A)=0.3 \\Rightarrow P(A^c)=1-0.3=0.7',
          exampleLanguage: 'latex',
          exampleExplanation: 'The probability that A does not occur is 0.7.',
        }
      ),
      subunit(
        '4-4',
        'Mutually Exclusive Events',
        'Two events are mutually exclusive (disjoint) if they cannot occur together: \\(P(A \\cap B) = 0\\). For mutually exclusive events, the Addition Rule simplifies to \\(P(A \\cup B) = P(A) + P(B)\\). When events are not mutually exclusive, subtract \\(P(A \\cap B)\\) to avoid double-counting.',
        [
          'Mutually exclusive \\(\\Rightarrow\\) \\(P(A \\cap B)=0\\); use \\(P(A)+P(B)\\) for union.',
          'If not mutually exclusive, use \\(P(A)+P(B)-P(A \\cap B)\\).',
        ]
      ),
      subunit(
        '4-5',
        'Conditional Probability',
        'Conditional probability is the probability of A given that B has occurred: \\(P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}\\). Conditioning restricts the sample space to outcomes in B. Conditional probabilities are often computed from two-way tables.\n\n' +
          'General method: (1) Identify the conditioning event B. (2) Find \\(P(A \\cap B)\\) and \\(P(B)\\). (3) Apply \\(P(A \\mid B) = P(A \\cap B)/P(B)\\). (4) Interpret in context.',
        [
          'Conditioning restricts the sample space to outcomes where B occurs.',
          '\\(P(A \\mid B)\\) is often found from two-way tables (e.g. row or column proportions).',
        ],
        {
          exampleCode: 'P(A \\cap B)=0.2,\\ P(B)=0.5 \\Rightarrow P(A|B)=\\frac{0.2}{0.5}=0.4',
          exampleLanguage: 'latex',
          exampleExplanation: 'Given B, the probability of A is 0.4.',
        }
      ),
      subunit(
        '4-6',
        'Independent Events and Unions of Events',
        'Events A and B are independent if the occurrence of one does not change the probability of the other: \\(P(A \\mid B) = P(A)\\) or equivalently \\(P(A \\cap B) = P(A)P(B)\\). For the union of events, use \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\); when A and B are independent, \\(P(A \\cap B) = P(A)P(B)\\).\n\n' +
          'General method: (1) Check independence using \\(P(A \\cap B) = P(A)P(B)\\) or conditional definition. (2) For unions, apply the addition rule. (3) For intersections of independent events, multiply probabilities.',
        [
          'Independence: \\(P(A \\cap B)=P(A)P(B)\\); one event does not affect the other.',
          'Addition rule for union: \\(P(A \\cup B)=P(A)+P(B)-P(A \\cap B)\\).',
        ]
      ),
      subunit(
        '4-7',
        'Introduction to Random Variables and Probability Distributions',
        'A random variable assigns a numerical value to each outcome of a random process. A discrete random variable has a countable set of possible values; its probability distribution lists \\(P(X=x)\\) for each value, with \\(\\sum P(x) = 1\\) and each \\(P(x) \\ge 0\\).\n\n' +
          'General method: (1) Define the random variable (what is being measured). (2) List possible values and their probabilities. (3) Verify probabilities sum to 1 and are nonnegative. (4) Interpret the distribution in context.',
        [
          'Random variables may be discrete (countable) or continuous.',
          'Distribution describes long-run behavior; \\(\\sum P(x)=1\\).',
        ],
        {
          exampleCode: '\\text{Heads in 2 flips: } X=0,1,2 \\text{ with } P(0)=P(2)=0.25,\\ P(1)=0.5',
          exampleLanguage: 'latex',
          exampleExplanation: 'Discrete distribution with three possible values; probabilities sum to 1.',
        }
      ),
      subunit(
        '4-8',
        'Mean and Standard Deviation of Random Variables',
        'The mean (expected value) of a discrete random variable is \\(\\mu_X = \\sum x \\cdot P(x)\\). The variance is \\(\\sigma_X^2 = \\sum (x - \\mu_X)^2 P(x)\\); the standard deviation is \\(\\sigma_X = \\sqrt{\\sigma_X^2}\\). The mean is the long-run average; the SD measures variability; units match the random variable.\n\n' +
          'General method: (1) Multiply each value by its probability and sum to get the mean. (2) Compute \\(\\sum (x-\\mu_X)^2 P(x)\\) for variance. (3) Take the square root for SD.',
        [
          'Mean \\(\\mu_X = \\sum x \\cdot P(x)\\); long-run average.',
          'SD measures spread; units same as the random variable.',
        ],
        {
          exampleCode: 'X=0,1 \\text{ with } P(0)=0.6,\\ P(1)=0.4 \\Rightarrow \\mu_X=0(0.6)+1(0.4)=0.4',
          exampleLanguage: 'latex',
          exampleExplanation: 'Expected value is 0.4.',
        }
      ),
      subunit(
        '4-9',
        'Combining Random Variables',
        'For independent random variables X and Y: the mean of \\(X+Y\\) is \\(\\mu_{X+Y} = \\mu_X + \\mu_Y\\); the variance of \\(X+Y\\) is \\(\\sigma_{X+Y}^2 = \\sigma_X^2 + \\sigma_Y^2\\), so the SD is \\(\\sigma_{X+Y} = \\sqrt{\\sigma_X^2 + \\sigma_Y^2}\\). Means always add; variances add only when the variables are independent; standard deviations do not add directly.\n\n' +
          'General method: (1) Verify independence when using variance addition. (2) Add means. (3) Add variances (not SDs); take square root for the SD of the sum. (4) Interpret in context.',
        [
          'Means always add: \\(\\mu_{X+Y} = \\mu_X + \\mu_Y\\).',
          'Variances add for independent X, Y: \\(\\sigma_{X+Y}^2 = \\sigma_X^2 + \\sigma_Y^2\\); SDs do not add.',
        ],
        {
          exampleCode: '\\mu_X=5,\\ \\mu_Y=7 \\Rightarrow \\mu_{X+Y}=12',
          exampleLanguage: 'latex',
          exampleExplanation: 'Expected value of the sum is the sum of the expected values.',
        }
      ),
      subunit(
        '4-10',
        'Introduction to the Binomial Distribution',
        'A binomial random variable counts the number of successes in \\(n\\) independent trials with the same probability \\(p\\) of success on each trial. Conditions (BINS): Binary outcomes (success/failure), Independent trials, Fixed Number of trials \\(n\\), Same probability \\(p\\) of success. Probability formula: \\(P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}\\).\n\n' +
          'General method: (1) Verify BINS conditions. (2) Identify \\(n\\) and \\(p\\). (3) Use the binomial formula or technology. (4) Interpret the probability in context.',
        [
          'BINS: Binary, Independent, fixed N, Same p.',
          '\\(P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}\\).',
        ],
        {
          exampleCode: '\\text{5 flips, } P(\\text{3 heads}) = \\binom{5}{3}(0.5)^3(0.5)^2',
          exampleLanguage: 'latex',
          exampleExplanation: 'Binomial with n=5, p=0.5; probability of exactly 3 successes.',
        }
      ),
      subunit(
        '4-11',
        'Parameters for a Binomial Distribution',
        'For a binomial random variable with \\(n\\) trials and success probability \\(p\\): mean \\(\\mu = np\\) and standard deviation \\(\\sigma = \\sqrt{np(1-p)}\\). These formulas describe the center and spread of the distribution of the count of successes.',
        [
          'Mean \\(\\mu = np\\); SD \\(\\sigma = \\sqrt{np(1-p)}\\).',
          'Use these to describe the binomial distribution or to check results.',
        ]
      ),
      subunit(
        '4-12',
        'The Geometric Distribution',
        'A geometric random variable counts the number of trials until the first success. Conditions: independent trials, constant probability \\(p\\) of success on each trial, count until first success. Probability that the first success occurs on trial \\(k\\): \\(P(X=k) = (1-p)^{k-1} p\\). Mean \\(\\mu = 1/p\\). Memoryless property: \\(P(X > s+t \\mid X > s) = P(X > t)\\).\n\n' +
          'General method: (1) Identify \\(p\\). (2) Determine the trial number \\(k\\). (3) Apply \\(P(X=k) = (1-p)^{k-1}p\\). (4) Interpret in context.',
        [
          'Mean \\(\\mu = 1/p\\) (expected number of trials until first success).',
          'Memoryless: given no success in first s trials, distribution of remaining trials is same as from the start.',
        ],
        {
          exampleCode: 'p=0.2 \\Rightarrow P(X=3)=(0.8)^2(0.2)=0.128',
          exampleLanguage: 'latex',
          exampleExplanation: 'Probability that the first success occurs on the third trial (two failures then success).',
        }
      ),
    ],
  },
  {
    unitNumber: 5,
    title: 'Sampling Distributions',
    subunits: [
      subunit(
        '5-0',
        'Unit 5 Overview: Sampling Distributions',
        'This unit explains why different samples from the same population give different statistics (sampling variability) and when a statistic is biased. We revisit the normal model and the Central Limit Theorem, then derive the sampling distributions for sample proportions, differences in proportions, sample means, and differences in means. These distributions are the foundation for confidence intervals and hypothesis tests in later units.'
      ),
      subunit(
        '5-1',
        'Introducing Statistics: Why Is My Sample Not Like Yours?',
        'Different random samples from the same population produce different statistics; this natural fluctuation is sampling variability. Bias occurs when a statistic systematically over- or underestimates the population parameter. Variability is random and decreases with larger sample size; bias is systematic and cannot be fixed by increasing sample size.\n\n' +
          'General method: (1) Identify the population parameter of interest. (2) Identify the sample statistic. (3) Consider the randomness of sample selection (variability). (4) Distinguish variability from bias.',
        [
          'Variability is random (different samples give different results); bias is systematic (consistently off in one direction).',
          'Larger sample sizes reduce variability but do not remove bias.',
          'Bias cannot be fixed by increasing sample size.',
        ],
        {
          exampleCode: '\\text{Two random samples estimate mean height slightly differently} \\Rightarrow \\text{sampling variability}',
          exampleLanguage: 'latex',
          exampleExplanation: 'The difference is due to chance variation, not a mistake in method.',
        }
      ),
      subunit(
        '5-2',
        'The Normal Distribution, Revisited',
        'The normal model describes many sampling distributions and is used for inference. Standardization \\(z = \\frac{x - \\mu}{\\sigma}\\) converts a value to a z-score so we can use the standard normal table or technology to find probabilities. The distribution is symmetric and bell-shaped with mean = median.\n\n' +
          'General method: (1) Verify that the distribution is normal or approximately normal. (2) Standardize using the z-score. (3) Use a normal table or calculator to find the probability. (4) Interpret in context.',
        [
          'Symmetric, bell-shaped; mean = median.',
          'Standardization allows probability calculations; used in inference.',
        ],
        {
          exampleCode: '\\mu=50,\\ \\sigma=5,\\ x=60 \\Rightarrow z=\\frac{60-50}{5}=2',
          exampleLanguage: 'latex',
          exampleExplanation: 'Score 60 is 2 standard deviations above the mean.',
        }
      ),
      subunit(
        '5-3',
        'The Central Limit Theorem',
        'The Central Limit Theorem (CLT) states that for large sample sizes, the sampling distribution of the sample mean \\(\\bar{x}\\) is approximately normal, regardless of the shape of the population distribution. A common rule of thumb is \\(n \\ge 30\\). The mean of the sampling distribution equals the population mean \\(\\mu\\); larger \\(n\\) gives a better normal approximation.\n\n' +
          'General method: (1) Identify the population distribution. (2) Check the sample size condition (e.g. \\(n \\ge 30\\)). (3) Approximate the sampling distribution of \\(\\bar{x}\\) as normal with mean \\(\\mu\\) and SD \\(\\sigma/\\sqrt{n}\\). (4) Use normal calculations for probabilities.',
        [
          'Applies to the sample mean; sampling distribution of \\(\\bar{x}\\) is approximately normal for large \\(n\\).',
          'Larger \\(n\\) \\(\\Rightarrow\\) better normal approximation.',
          'Mean of sampling distribution = population mean \\(\\mu\\).',
        ],
        {
          exampleCode: '\\text{Population skewed; } n=50 \\Rightarrow \\bar{x} \\text{ approximately normal}',
          exampleLanguage: 'latex',
          exampleExplanation: 'CLT allows us to use normal-based inference for \\(\\bar{x}\\) even when the population is not normal.',
        }
      ),
      subunit(
        '5-4',
        'Biased and Unbiased Point Estimates',
        'A statistic is an unbiased estimator of a parameter if the mean of its sampling distribution equals the parameter. The sample proportion \\(\\hat{p}\\) is unbiased for \\(p\\); the sample mean \\(\\bar{x}\\) is unbiased for \\(\\mu\\). Bias means the sampling distribution is centered at the wrong value; increasing \\(n\\) reduces variability but does not fix bias.',
        [
          'Unbiased: mean of sampling distribution equals the parameter.',
          '\\(\\hat{p}\\) is unbiased for \\(p\\); \\(\\bar{x}\\) is unbiased for \\(\\mu\\).',
          'Bias \\(\\Rightarrow\\) systematically wrong; cannot be fixed by larger \\(n\\).',
        ]
      ),
      subunit(
        '5-5',
        'Sampling Distributions for Sample Proportions',
        'For the sample proportion \\(\\hat{p}\\) from a random sample of size \\(n\\): mean \\(\\mu_{\\hat{p}} = p\\) and standard deviation \\(\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}}\\). Conditions: random sample, 10% condition (\\(n \\le 0.1N\\) when sampling without replacement), and Large Counts \\(np \\ge 10\\) and \\(n(1-p) \\ge 10\\) so the distribution is approximately normal.\n\n' +
          'General method: (1) Verify conditions. (2) Compute mean and SD of \\(\\hat{p}\\). (3) Standardize: \\(z = \\frac{\\hat{p} - p}{\\sigma_{\\hat{p}}}\\). (4) Use the normal distribution for probabilities.',
        [
          'Mean \\(\\mu_{\\hat{p}}=p\\); SD \\(\\sigma_{\\hat{p}}=\\sqrt{p(1-p)/n}\\); spread decreases as \\(n\\) increases.',
          'Large Counts: \\(np \\ge 10\\) and \\(n(1-p) \\ge 10\\) for normal approximation.',
        ],
        {
          exampleCode: 'p=0.5,\\ n=100 \\Rightarrow \\sigma_{\\hat{p}}=\\sqrt{\\frac{0.5(0.5)}{100}}=0.05',
          exampleLanguage: 'latex',
          exampleExplanation: 'Standard deviation of the sampling distribution of \\(\\hat{p}\\).',
        }
      ),
      subunit(
        '5-6',
        'Sampling Distributions for Differences in Sample Proportions',
        'For two independent samples, the difference \\(\\hat{p}_1 - \\hat{p}_2\\) has mean \\(\\mu = p_1 - p_2\\) and standard deviation \\(\\sigma = \\sqrt{\\frac{p_1(1-p_1)}{n_1} + \\frac{p_2(1-p_2)}{n_2}}\\). Both samples should satisfy the usual conditions (random, 10% condition, large counts).\n\n' +
          'General method: (1) Verify independence and conditions for both samples. (2) Compute mean and SD of \\(\\hat{p}_1 - \\hat{p}_2\\). (3) Standardize for probability or inference. (4) Interpret in context.',
        [
          'Mean \\(\\mu = p_1 - p_2\\); variances add for independent samples.',
          'Both samples must satisfy large counts; larger samples reduce variability.',
        ],
        {
          exampleCode: '\\text{Compare approval rates between two groups using } \\hat{p}_1 - \\hat{p}_2',
          exampleLanguage: 'latex',
          exampleExplanation: 'Sampling distribution of the difference is used for two-proportion inference.',
        }
      ),
      subunit(
        '5-7',
        'Sampling Distributions for Sample Means',
        'For the sample mean \\(\\bar{x}\\) from a random sample of size \\(n\\): mean \\(\\mu_{\\bar{x}} = \\mu\\) and standard deviation (standard error) \\(\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}\\). Conditions: random sample, 10% condition, and either normal population or large \\(n\\) (CLT).\n\n' +
          'General method: (1) Verify conditions. (2) Compute mean and SD of \\(\\bar{x}\\). (3) Standardize: \\(z = \\frac{\\bar{x} - \\mu}{\\sigma/\\sqrt{n}}\\). (4) Use the normal model for probabilities.',
        [
          'Mean \\(\\mu_{\\bar{x}}=\\mu\\); SD \\(\\sigma_{\\bar{x}}=\\sigma/\\sqrt{n}\\); spread decreases as \\(n\\) increases.',
          'CLT allows normal approximation when \\(n\\) is large.',
        ],
        {
          exampleCode: '\\mu=100,\\ \\sigma=20,\\ n=25 \\Rightarrow \\sigma_{\\bar{x}}=\\frac{20}{\\sqrt{25}}=4',
          exampleLanguage: 'latex',
          exampleExplanation: 'Standard error of the sample mean is 4.',
        }
      ),
      subunit(
        '5-8',
        'Sampling Distributions for Differences in Sample Means',
        'For two independent samples, the difference \\(\\bar{x}_1 - \\bar{x}_2\\) has mean \\(\\mu = \\mu_1 - \\mu_2\\) and standard deviation \\(\\sigma = \\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}\\). Variances add (not SDs). Conditions: independent random samples, normal populations or large sample sizes.\n\n' +
          'General method: (1) Verify independence and normal/large-sample conditions. (2) Compute mean and SD of \\(\\bar{x}_1 - \\bar{x}_2\\). (3) Standardize for inference. (4) Interpret in context.',
        [
          'Mean \\(\\mu = \\mu_1 - \\mu_2\\); variance of difference = sum of variances (independent samples).',
          'Larger samples reduce standard error; foundation for two-sample t procedures.',
        ],
        {
          exampleCode: '\\text{Compare average test scores between two schools using } \\bar{x}_1 - \\bar{x}_2',
          exampleLanguage: 'latex',
          exampleExplanation: 'Sampling distribution of the difference in means is used for two-sample inference.',
        }
      ),
    ],
  },
  {
    unitNumber: 6,
    title: 'Inference for Categorical Data: Proportions',
    subunits: [
      subunit(
        '6-0',
        'Unit 6 Overview: Inference for Categorical Data: Proportions',
        'This unit covers inference for a single population proportion \\(p\\) and for the difference \\(p_1 - p_2\\) between two proportions. We construct confidence intervals and carry out significance tests. The sampling distribution of \\(\\hat{p}\\) (and of \\(\\hat{p}_1 - \\hat{p}_2\\)) is approximately normal under the right conditions, which justifies the use of z-procedures. We also discuss Type I and Type II errors and how to justify claims using intervals and tests.'
      ),
      subunit(
        '6-1',
        'Introducing Statistics: Why Be Normal?',
        'The sampling distribution of \\(\\hat{p}\\) is approximately normal when the Large Counts condition is met. That normal shape is what allows us to use a single formula for confidence intervals and a z-statistic for tests. Without the normal approximation, we could not use these standard procedures; the "why be normal?" idea is that normality of the sampling distribution is the basis for proportion inference.'
      ),
      subunit(
        '6-2',
        'Constructing a Confidence Interval for a Population Proportion',
        'A confidence interval estimates the population proportion \\(p\\) using the sample proportion \\(\\hat{p}\\). Formula: \\(\\hat{p} \\pm z^* \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}\\), where \\(z^*\\) is the critical value for the chosen confidence level. Conditions: random sample, 10% condition, and Large Counts \\(n\\hat{p} \\ge 10\\) and \\(n(1-\\hat{p}) \\ge 10\\).\n\n' +
          'General method: (1) Verify conditions. (2) Compute \\(\\hat{p}\\). (3) Find the critical value \\(z^*\\) (e.g. 1.96 for 95%). (4) Compute the margin of error and the interval. (5) Interpret in context: "We are C% confident that the interval from ___ to ___ captures the true proportion of ..."',
        [
          'Confidence level determines \\(z^*\\); larger \\(n\\) \\(\\Rightarrow\\) smaller margin of error.',
          'The interval gives a range of plausible values for \\(p\\).',
        ],
        {
          exampleCode: '\\hat{p}=0.6,\\ n=100,\\ 95\\% \\Rightarrow ME=1.96\\sqrt{\\frac{0.6(0.4)}{100}}=0.096,\\quad \\text{CI: } 0.6 \\pm 0.096',
          exampleLanguage: 'latex',
          exampleExplanation: '95% confidence interval for \\(p\\) is approximately (0.504, 0.696).',
        }
      ),
      subunit(
        '6-3',
        'Justifying a Claim Based on a Confidence Interval for a Population Proportion',
        'To justify a claim about a population proportion using a confidence interval: if the claimed value \\(p_0\\) lies inside the interval, the data are consistent with that claim; if \\(p_0\\) lies outside the interval, the data provide evidence against that claim. Always state the confidence level and interpret in context.',
        [
          'Claimed value inside interval \\(\\Rightarrow\\) plausible; outside \\(\\Rightarrow\\) evidence against.',
          'Interpretation must reference the population and the confidence level.',
        ]
      ),
      subunit(
        '6-4',
        'Setting Up a Test for a Population Proportion',
        'Significance tests determine whether sample evidence supports a claim about \\(p\\). Hypotheses: \\(H_0: p = p_0\\) (null) and \\(H_a: p \\neq p_0\\) (two-sided) or \\(H_a: p < p_0\\) or \\(H_a: p > p_0\\) (one-sided). Conditions: random sample, 10% condition, and Large Counts using \\(p_0\\): \\(np_0 \\ge 10\\) and \\(n(1-p_0) \\ge 10\\). The test statistic uses \\(p_0\\) in the standard error: \\(z = \\frac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}\\).',
        [
          'Use \\(p_0\\) (not \\(\\hat{p}\\)) in the standard error for the test statistic.',
          'State \\(H_0\\) and \\(H_a\\) clearly and define \\(p\\) in context.',
        ],
        {
          exampleCode: '\\text{Test if approval rate differs from 50\\%: } H_0: p=0.5,\\ H_a: p \\neq 0.5',
          exampleLanguage: 'latex',
          exampleExplanation: 'Two-sided test; use \\(p_0=0.5\\) in the denominator of the z-statistic.',
        }
      ),
      subunit(
        '6-5',
        'Interpreting p-Values',
        'The p-value is the probability of obtaining a sample statistic as extreme as (or more extreme than) the one observed, assuming \\(H_0\\) is true. A small p-value means such a result would be unlikely if \\(H_0\\) were true, so we have evidence against \\(H_0\\). Compare the p-value to the significance level \\(\\alpha\\): if \\(p \\le \\alpha\\), reject \\(H_0\\); if \\(p > \\alpha\\), fail to reject \\(H_0\\).',
        [
          'Small p-value \\(\\Rightarrow\\) reject \\(H_0\\); evidence in favor of \\(H_a\\).',
          'p-value is not the probability that \\(H_0\\) is true; it is the probability of the data (or more extreme) given \\(H_0\\).',
        ]
      ),
      subunit(
        '6-6',
        'Concluding a Test for a Population Proportion',
        'After computing the test statistic and p-value, state the conclusion in context. If we reject \\(H_0\\), we say there is convincing evidence that [\\(H_a\\) in context]. If we fail to reject \\(H_0\\), we say there is not convincing evidence that [\\(H_a\\) in context]. The conclusion should refer to the population proportion and the alternative hypothesis, not just "reject" or "fail to reject."',
        [
          'Conclusion references the population proportion and the alternative in context.',
          'Do not say "accept \\(H_0\\)"; say "fail to reject \\(H_0\\)" or "no convincing evidence for \\(H_a\\)."',
        ]
      ),
      subunit(
        '6-7',
        'Potential Errors When Performing Tests',
        'Type I error: rejecting a true \\(H_0\\) (false positive). Type II error: failing to reject a false \\(H_0\\) (false negative). The significance level \\(\\alpha\\) is the probability of a Type I error. Power is the probability of correctly rejecting a false \\(H_0\\) (1 minus the probability of Type II error). There is a trade-off: lowering \\(\\alpha\\) reduces Type I error but can increase Type II error; increasing sample size can increase power.\n\n' +
          'General method: (1) Identify \\(H_0\\) and \\(H_a\\). (2) Define what rejecting \\(H_0\\) means in context. (3) Describe Type I and Type II errors in context.',
        [
          '\\(\\alpha\\) = probability of Type I error; power = probability of correctly rejecting false \\(H_0\\).',
          'Trade-off between error types; larger \\(n\\) can increase power.',
        ],
        {
          exampleCode: '\\text{Drug test: Type I = conclude drug works when it doesn\'t. Type II = conclude it doesn\'t work when it does.}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Type I is a false positive; Type II is a false negative.',
        }
      ),
      subunit(
        '6-8',
        'Confidence Intervals for the Difference of Two Proportions',
        'We estimate \\(p_1 - p_2\\) with \\((\\hat{p}_1 - \\hat{p}_2) \\pm z^* \\sqrt{\\frac{\\hat{p}_1(1-\\hat{p}_1)}{n_1} + \\frac{\\hat{p}_2(1-\\hat{p}_2)}{n_2}}\\). Conditions: two independent random samples, 10% condition for each, and Large Counts for both groups (\\(n_1\\hat{p}_1\\), \\(n_1(1-\\hat{p}_1)\\), \\(n_2\\hat{p}_2\\), \\(n_2(1-\\hat{p}_2)\\) all \\(\\ge 10\\)).\n\n' +
          'General method: (1) Verify independence and conditions. (2) Compute \\(\\hat{p}_1\\) and \\(\\hat{p}_2\\) and their difference. (3) Compute the margin of error and the interval. (4) Interpret: "We are C% confident that the interval from ___ to ___ captures the true difference in proportions ..."',
        [
          'If the interval includes 0, we do not have evidence of a significant difference.',
          'Larger samples \\(\\Rightarrow\\) smaller standard error and narrower interval.',
        ],
        {
          exampleCode: '\\text{Compare support rates between two cities using } (\\hat{p}_1 - \\hat{p}_2) \\pm z^* \\sqrt{\\frac{\\hat{p}_1(1-\\hat{p}_1)}{n_1}+\\frac{\\hat{p}_2(1-\\hat{p}_2)}{n_2}}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Use the two sample proportions; do not pool when constructing a CI.',
        }
      ),
      subunit(
        '6-9',
        'Justifying a Claim Based on a Confidence Interval for a Difference of Population Proportions',
        'If the confidence interval for \\(p_1 - p_2\\) contains 0, the data are consistent with no difference between the two proportions. If the interval does not contain 0, we have evidence of a difference (and the sign of the interval indicates which proportion is larger). State the confidence level and interpret in context.',
        [
          'Interval contains 0 \\(\\Rightarrow\\) plausible that \\(p_1 = p_2\\); interval does not contain 0 \\(\\Rightarrow\\) evidence of a difference.',
        ]
      ),
      subunit(
        '6-10',
        'Setting Up a Test for the Difference of Two Population Proportions',
        'We test \\(H_0: p_1 = p_2\\) vs \\(H_a: p_1 \\neq p_2\\) (or one-sided). Under \\(H_0\\), the two proportions are equal, so we use a pooled estimate of the common proportion: \\(\\hat{p} = \\frac{x_1 + x_2}{n_1 + n_2}\\). Conditions: two independent random samples, 10% condition, and Large Counts using the pooled \\(\\hat{p}\\) for both groups.',
        [
          'Pooled \\(\\hat{p}\\) is used only for the test (in the standard error), not for the confidence interval.',
          'State \\(H_0\\) and \\(H_a\\) in terms of \\(p_1\\) and \\(p_2\\).',
        ]
      ),
      subunit(
        '6-11',
        'Carrying Out a Test for the Difference of Two Population Proportions',
        'Compute the pooled proportion \\(\\hat{p} = \\frac{x_1+x_2}{n_1+n_2}\\). The test statistic is \\(z = \\frac{\\hat{p}_1 - \\hat{p}_2}{\\sqrt{\\hat{p}(1-\\hat{p})(\\frac{1}{n_1}+\\frac{1}{n_2})}}\\). Find the p-value (two-tailed or one-tailed), compare to \\(\\alpha\\), and state the conclusion in context: whether there is convincing evidence that the two population proportions differ (or that one is greater than the other).',
        [
          'Use pooled \\(\\hat{p}\\) in the denominator of the z-statistic.',
          'Small p-value \\(\\Rightarrow\\) evidence of a difference; interpretation refers to the two populations.',
        ]
      ),
    ],
  },
  {
    unitNumber: 7,
    title: 'Inference for Quantitative Data: Means',
    subunits: [
      subunit(
        '7-0',
        'Unit 7 Overview: Means',
        'This unit covers inference for a population mean \\(\\mu\\) and for the difference \\(\\mu_1 - \\mu_2\\) between two means. Because we rarely know the population standard deviation, we use the t-distribution (with \\(s\\) and \\(df = n-1\\)) instead of z. We construct confidence intervals and carry out significance tests for one sample and for two independent samples. Choosing the right procedure (one-sample t, two-sample t, or paired t) and communicating conclusions in context are key skills.'
      ),
      subunit(
        '7-1',
        'Introducing Statistics: Should I Worry About Error?',
        'Error in inference has two sources: sampling variability (different samples give different results) and the margin of error in an interval (which quantifies uncertainty). We should worry about error in the sense of reporting and interpreting it correctly: state the margin of error or confidence level, and avoid overstating certainty. Larger sample sizes reduce margin of error; the t-procedure accounts for estimating \\(\\sigma\\) with \\(s\\).'
      ),
      subunit(
        '7-2',
        'Constructing a Confidence Interval for a Population Mean',
        'A confidence interval estimates the population mean \\(\\mu\\) using the sample mean \\(\\bar{x}\\). When the population standard deviation is unknown (almost always), use a t-interval: \\(\\bar{x} \\pm t^* \\frac{s}{\\sqrt{n}}\\), where \\(t^*\\) is the critical value for the chosen confidence level with \\(df = n-1\\). Conditions: random sample, 10% condition, and Nearly Normal condition (population normal or \\(n \\ge 30\\)).\n\n' +
          'General method: (1) Verify conditions. (2) Compute \\(\\bar{x}\\) and \\(s\\). (3) Find \\(t^*\\) using \\(df = n-1\\). (4) Compute margin of error \\(t^* \\cdot \\frac{s}{\\sqrt{n}}\\) and the interval. (5) Interpret: "We are C% confident that the interval from ___ to ___ captures the true mean ..."',
        [
          'Use t-distribution (not z) when \\(\\sigma\\) is unknown; \\(df = n-1\\).',
          'Larger \\(n\\) \\(\\Rightarrow\\) smaller margin of error; interval gives plausible values for \\(\\mu\\).',
        ],
        {
          exampleCode: '\\bar{x}=75,\\ s=10,\\ n=25 \\Rightarrow SE=\\frac{10}{\\sqrt{25}}=2,\\quad 95\\% \\text{ CI: } 75 \\pm t^*(2)',
          exampleLanguage: 'latex',
          exampleExplanation: 'Use \\(t^*\\) with \\(df=24\\) for 95% confidence (e.g. about 2.06).',
        }
      ),
      subunit(
        '7-3',
        'Justifying a Claim About a Population Mean Based on a Confidence Interval',
        'To justify a claim about \\(\\mu\\) using a confidence interval: if the claimed value \\(\\mu_0\\) lies inside the interval, the data are consistent with that claim; if \\(\\mu_0\\) lies outside the interval, the data provide evidence against the claim. State the confidence level and interpret in context.'
      ),
      subunit(
        '7-4',
        'Setting Up a Test for a Population Mean',
        'Significance tests determine whether sample evidence supports a claim about \\(\\mu\\). Hypotheses: \\(H_0: \\mu = \\mu_0\\) and \\(H_a: \\mu \\neq \\mu_0\\) (two-sided) or \\(H_a: \\mu < \\mu_0\\) or \\(H_a: \\mu > \\mu_0\\) (one-sided). Conditions: random sample, 10% condition, Nearly Normal or large \\(n\\). The test statistic is \\(t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}\\) with \\(df = n-1\\).',
        [
          'Use t-distribution; \\(df = n-1\\).',
          'State \\(H_0\\) and \\(H_a\\) clearly; define \\(\\mu\\) in context.',
        ],
        {
          exampleCode: '\\text{Test if average sleep differs from 8 hours: } H_0: \\mu=8,\\ H_a: \\mu \\neq 8',
          exampleLanguage: 'latex',
          exampleExplanation: 'Two-sided t-test for a single mean.',
        }
      ),
      subunit(
        '7-5',
        'Carrying Out a Test for a Population Mean',
        'Compute \\(t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}\\) with \\(df = n-1\\). Find the p-value (using technology or t-table), compare to \\(\\alpha\\), and state the conclusion in context. If \\(p \\le \\alpha\\), reject \\(H_0\\) and conclude there is convincing evidence that [\\(H_a\\) in context]. If \\(p > \\alpha\\), fail to reject \\(H_0\\); there is not convincing evidence that [\\(H_a\\) in context]. The conclusion must reference the population mean.',
        [
          'Small p-value \\(\\Rightarrow\\) reject \\(H_0\\); conclusion references population mean.',
        ]
      ),
      subunit(
        '7-6',
        'Confidence Intervals for the Difference of Two Means',
        'We estimate \\(\\mu_1 - \\mu_2\\) with \\((\\bar{x}_1 - \\bar{x}_2) \\pm t^* \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}\\). Use the unpooled (separate variances) standard error. Conditions: two independent random samples, 10% condition for each, and Nearly Normal or large samples for both. Degrees of freedom for \\(t^*\\) are approximated (e.g. by calculator); use the smaller of \\(n_1-1\\) and \\(n_2-1\\) as a conservative choice if needed.\n\n' +
          'General method: (1) Verify independence and conditions. (2) Compute \\(\\bar{x}_1 - \\bar{x}_2\\) and the standard error. (3) Find \\(t^*\\) with appropriate df. (4) Compute the interval and interpret: "We are C% confident that the interval from ___ to ___ captures the true difference in means ..."',
        [
          'If the interval contains 0, we do not have evidence of a significant difference.',
          'Use unpooled standard error for the CI; larger samples \\(\\Rightarrow\\) smaller variability.',
        ],
        {
          exampleCode: '(\\bar{x}_1-\\bar{x}_2) \\pm t^* \\sqrt{\\frac{s_1^2}{n_1}+\\frac{s_2^2}{n_2}} \\quad \\text{Compare average test scores of two classes}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Two-sample t-interval for \\(\\mu_1 - \\mu_2\\).',
        }
      ),
      subunit(
        '7-7',
        'Justifying a Claim About the Difference of Two Means Based on a Confidence Interval',
        'If the confidence interval for \\(\\mu_1 - \\mu_2\\) contains 0, the data are consistent with no difference between the two means. If the interval does not contain 0, we have evidence of a difference; the sign of the interval indicates which population mean is larger. State the confidence level and interpret in context.'
      ),
      subunit(
        '7-8',
        'Setting Up a Test for the Difference of Two Population Means',
        'We test \\(H_0: \\mu_1 = \\mu_2\\) vs \\(H_a: \\mu_1 \\neq \\mu_2\\) (or one-sided). Conditions: two independent random samples, 10% condition, Nearly Normal or large samples. The test statistic is \\(t = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}\\) with df from the calculator (Welch approximation) or the conservative rule.',
        [
          'Independent samples required; use two-sample t-test (unpooled).',
          'State \\(H_0\\) and \\(H_a\\) in terms of \\(\\mu_1\\) and \\(\\mu_2\\).',
        ],
        {
          exampleCode: '\\text{Test whether new tutoring method improves average score: } H_0: \\mu_1=\\mu_2,\\ H_a: \\mu_1 > \\mu_2',
          exampleLanguage: 'latex',
          exampleExplanation: 'One-sided two-sample t-test.',
        }
      ),
      subunit(
        '7-9',
        'Carrying Out a Test for the Difference of Two Population Means',
        'Compute \\(t = \\frac{\\bar{x}_1 - \\bar{x}_2}{\\sqrt{s_1^2/n_1 + s_2^2/n_2}}\\) and find the p-value using the appropriate df (calculator). Compare to \\(\\alpha\\) and state the conclusion in context: whether there is convincing evidence that the two population means differ (or that one is greater than the other). Interpretation must refer to the difference in population means.',
        [
          'Use two-sample t-test; interpretation refers to difference in population means.',
        ]
      ),
      subunit(
        '7-10',
        'Skills Focus: Selecting, Implementing, and Communicating Inference Procedures',
        'Choosing the correct procedure depends on: (1) One sample or two? (2) Proportion or mean (categorical or quantitative)? (3) Independent samples or paired data? Proportions use z; means use t. For paired data (e.g. before/after on the same subjects), use a one-sample t-test on the differences. Communication must include context, conditions, and a clear interpretation in real-world terms.\n\n' +
          'General method: (1) Identify the parameter of interest. (2) Determine number of samples and whether data are paired. (3) Determine if data are categorical (proportion) or quantitative (mean). (4) Choose the appropriate test or interval. (5) State the conclusion clearly in context.',
        [
          'Proportions \\(\\Rightarrow\\) z procedures; means \\(\\Rightarrow\\) t procedures.',
          'Paired data \\(\\Rightarrow\\) one-sample t on the differences.',
          'Always interpret in real-world context.',
        ],
        {
          exampleCode: '\\text{Before/after on same subjects} \\Rightarrow \\text{paired } t\\text{-test (one-sample } t \\text{ on differences)}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Paired design reduces variability by comparing each subject to themselves.',
        }
      ),
    ],
  },
  {
    unitNumber: 8,
    title: 'Inference for Categorical Data: Chi-Square',
    subunits: [
      subunit(
        '8-0',
        'Unit 8 Overview: Chi Square',
        'This unit covers chi-square tests for categorical data. The Goodness of Fit test checks whether a single categorical variable follows a claimed distribution. For two categorical variables, we use expected counts in two-way tables and chi-square tests for homogeneity (comparing distributions across populations) or independence (testing association in one population). Selecting the right procedure depends on whether we have one variable or two and whether we are comparing populations or assessing association.'
      ),
      subunit(
        '8-1',
        'Introducing Statistics: Are My Results Unexpected?',
        'Chi-square tests answer "Are my results unexpected?" by comparing observed counts to the counts we would expect if a certain model were true (e.g. a claimed distribution or independence). If the observed counts are far from the expected counts, we get a large \\(\\chi^2\\) statistic and a small p-value, suggesting the model does not fit. These tests extend inference beyond a single proportion to entire distributions or to the relationship between two categorical variables.'
      ),
      subunit(
        '8-2',
        'Setting Up a Chi Square Goodness of Fit Test',
        'A chi-square Goodness of Fit test determines whether the distribution of a categorical variable matches a claimed (theoretical) distribution. Hypotheses: \\(H_0\\): The distribution follows the stated proportions; \\(H_a\\): The distribution does not follow the stated proportions. Conditions: random sample, and all expected counts \\(\\ge 5\\). Expected count for each category: \\(E = np\\), where \\(n\\) is the sample size and \\(p\\) is the claimed proportion for that category. Degrees of freedom: \\(df = k - 1\\), where \\(k\\) = number of categories.',
        [
          'One categorical variable; test against a claimed distribution.',
          'Expected counts \\(E = np\\) for each category; all \\(E \\ge 5\\).',
          '\\(df = k - 1\\).',
        ],
        {
          exampleCode: '\\text{Test if die is fair: each side } p=\\frac{1}{6} \\Rightarrow E = \\frac{n}{6} \\text{ per category}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Under \\(H_0\\), each of the 6 outcomes has probability 1/6; expected count = n/6 for each.',
        }
      ),
      subunit(
        '8-3',
        'Carrying Out a Chi Square Goodness of Fit Test',
        'Compute expected counts \\(E = np\\) for each category. The test statistic is \\(\\chi^2 = \\sum \\frac{(O - E)^2}{E}\\), where \\(O\\) = observed count and \\(E\\) = expected count. Use \\(df = k - 1\\) to find the p-value (right-tail). Large \\(\\chi^2\\) means observed counts deviate strongly from expected \\(\\Rightarrow\\) stronger evidence against \\(H_0\\). Always work with counts, not proportions, in the formula. State the conclusion in context.',
        [
          '\\(\\chi^2 = \\sum \\frac{(O-E)^2}{E}\\); large \\(\\chi^2\\) \\(\\Rightarrow\\) evidence against \\(H_0\\).',
          'Compare counts (O and E), not proportions directly.',
        ]
      ),
      subunit(
        '8-4',
        'Expected Counts in Two Way Tables',
        'For a two-way table, expected counts under the assumption of independence (or homogeneity) are computed as \\(E = \\frac{\\text{(row total)} \\times \\text{(column total)}}{\\text{grand total}}\\) for each cell. Conditions for chi-square: all expected counts \\(\\ge 5\\). These expected counts are used in both the test for homogeneity and the test for independence.\n\n' +
          'General method: (1) Construct the two-way table with observed counts. (2) Compute row totals, column totals, and grand total. (3) For each cell, \\(E = \\frac{\\text{row total} \\times \\text{column total}}{\\text{grand total}}\\). (4) Check that all \\(E \\ge 5\\).',
        [
          'Expected counts assume independence (or equal distributions for homogeneity).',
          'All expected counts must be \\(\\ge 5\\) for the chi-square approximation to be valid.',
        ],
        {
          exampleCode: '\\text{Row total } 40,\\ \\text{col total } 50,\\ \\text{grand } 200 \\Rightarrow E=\\frac{40 \\times 50}{200}=10',
          exampleLanguage: 'latex',
          exampleExplanation: 'Expected count for that cell under independence.',
        }
      ),
      subunit(
        '8-5',
        'Setting Up a Chi-Square Test for Homogeneity or Independence',
        'Chi-square tests for two categorical variables use the same test statistic \\(\\chi^2 = \\sum \\frac{(O-E)^2}{E}\\) and \\(df = (r-1)(c-1)\\), where \\(r\\) = number of rows and \\(c\\) = number of columns. Homogeneity: compare distributions of one variable across several populations (one sample per population). Independence: one sample, two variables; test whether the variables are associated. Hypotheses (independence): \\(H_0\\): The variables are independent; \\(H_a\\): The variables are associated. Conditions: random sample(s), all expected counts \\(\\ge 5\\).',
        [
          'Same \\(\\chi^2\\) calculation for homogeneity and independence; \\(df = (r-1)(c-1)\\).',
          'Homogeneity: multiple populations; independence: one population, two variables.',
        ],
        {
          exampleCode: '\\text{Test whether political affiliation differs by region} \\Rightarrow \\chi^2 \\text{ test}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Two categorical variables; test for association (independence) or compare distributions by region (homogeneity).',
        }
      ),
      subunit(
        '8-6',
        'Carrying Out a Chi-Square Test for Homogeneity or Independence',
        'Compute expected counts for each cell: \\(E = \\frac{\\text{row total} \\times \\text{column total}}{\\text{grand total}}\\). Calculate \\(\\chi^2 = \\sum \\frac{(O-E)^2}{E}\\). Find the p-value using \\(df = (r-1)(c-1)\\) (right-tail). Large \\(\\chi^2\\) and small p-value indicate that observed counts deviate from what we would expect under independence (or homogeneity); conclude there is convincing evidence of association (or that distributions differ). State the conclusion in context.',
        [
          'Large deviations of O from E \\(\\Rightarrow\\) large \\(\\chi^2\\) \\(\\Rightarrow\\) evidence of association or difference.',
          'Interpretation differs slightly: homogeneity emphasizes "distributions differ"; independence emphasizes "variables are associated."',
        ]
      ),
      subunit(
        '8-7',
        'Skills Focus: Selecting an Appropriate Inference Procedure for Categorical Data',
        'Choosing the correct procedure: (1) One categorical variable \\(\\Rightarrow\\) Goodness of Fit (test against a claimed distribution). (2) Two categorical variables \\(\\Rightarrow\\) Chi-square test for homogeneity (comparing distributions across populations) or independence (one population, test for association). (3) Single proportion or difference of two proportions \\(\\Rightarrow\\) z procedures (Unit 6). Use chi-square when you have a full table of counts; use z for one or two proportions.\n\n' +
          'General method: (1) Identify the number of variables and number of populations. (2) Choose Goodness of Fit, homogeneity, or independence. (3) Verify conditions (random, expected counts \\(\\ge 5\\)). (4) Interpret results in context.',
        [
          'Goodness of Fit: one sample, one variable, claimed distribution.',
          'Homogeneity: multiple populations, same variable; independence: one population, two variables.',
          'Proportion(s) \\(\\Rightarrow\\) z procedures; full table \\(\\Rightarrow\\) chi-square.',
        ],
        {
          exampleCode: '\\text{Does survey response differ by gender?} \\Rightarrow \\chi^2 \\text{ test of independence}',
          exampleLanguage: 'latex',
          exampleExplanation: 'One sample, two categorical variables (response and gender); test for association.',
        }
      ),
    ],
  },
  {
    unitNumber: 9,
    title: 'Inference for Quantitative Data: Slopes',
    subunits: [
      subunit(
        '9-0',
        'Unit 9 Overview: Slopes',
        'This unit covers inference for the slope of a least-squares regression line. We test whether the population slope \\(\\beta\\) differs from 0 (no linear relationship) and construct confidence intervals for \\(\\beta\\). Conditions for inference are summarized as LINE: Linear relationship, Independent observations, Normal distribution of residuals, Equal variance (constant spread). Degrees of freedom for the t-procedures are \\(df = n - 2\\). Selecting the appropriate procedure and interpreting the slope in context are key skills.'
      ),
      subunit(
        '9-1',
        'Introducing Statistics: Do Those Points Align?',
        'Inference for the regression slope answers "Do those points align?" in the sense of whether there is a significant linear relationship between two quantitative variables. We test \\(H_0: \\beta = 0\\) (no linear relationship) vs \\(H_a: \\beta \\neq 0\\) (or one-sided). If \\(\\beta = 0\\), the population regression line is horizontal and x does not help predict y. The sample slope \\(b\\) and its standard error \\(SE_b\\) are used to construct t-based confidence intervals and tests; inference is about the population slope \\(\\beta\\), not the sample value \\(b\\).'
      ),
      subunit(
        '9-2',
        'Confidence Intervals for the Slope of a Regression Model',
        'A confidence interval for the population slope \\(\\beta\\) is \\(b \\pm t^* (SE_b)\\), where \\(b\\) is the sample slope, \\(SE_b\\) is the standard error of the slope (from regression output), and \\(t^*\\) is the critical value with \\(df = n - 2\\). Conditions: LINE (Linear, Independent, Normal residuals, Equal variance).\n\n' +
          'General method: (1) Verify LINE conditions. (2) Obtain \\(b\\) and \\(SE_b\\) from technology. (3) Find \\(t^*\\) for the desired confidence level with \\(df = n-2\\). (4) Compute the interval. (5) Interpret: "We are C% confident that the interval from ___ to ___ captures the true slope (change in y per unit x) ..."',
        [
          'If the interval includes 0, we do not have evidence of a significant linear relationship.',
          'Interpretation refers to the population slope; units are "change in y per unit x."',
        ],
        {
          exampleCode: '95\\% \\text{ CI for slope: } (1.2,\\ 3.4) \\Rightarrow \\text{For each additional hour studied, score increases between 1.2 and 3.4 points (on average)}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Slope in context: change in response per one-unit increase in the explanatory variable.',
        }
      ),
      subunit(
        '9-3',
        'Justifying a Claim About the Slope of a Regression Model Based on a Confidence Interval',
        'To justify a claim about the slope \\(\\beta\\) using a confidence interval: if the interval contains 0, the data are consistent with no linear relationship (\\(\\beta = 0\\)). If the interval does not contain 0, we have evidence of a linear relationship; the sign of the interval indicates whether the relationship is positive or negative. State the confidence level and interpret in context with units (change in y per unit x).'
      ),
      subunit(
        '9-4',
        'Setting Up a Test for the Slope of a Regression Model',
        'We test \\(H_0: \\beta = 0\\) (no linear relationship) vs \\(H_a: \\beta \\neq 0\\) (or \\(H_a: \\beta < 0\\) or \\(H_a: \\beta > 0\\)). The test statistic is \\(t = \\frac{b - 0}{SE_b} = \\frac{b}{SE_b}\\) with \\(df = n - 2\\). Conditions: LINE. Verify linearity (scatterplot), independence (design), roughly normal residuals (histogram or plot of residuals), and roughly constant spread of residuals.\n\n' +
          'General method: (1) State \\(H_0\\) and \\(H_a\\) in terms of \\(\\beta\\). (2) Verify LINE conditions. (3) Obtain \\(b\\) and \\(SE_b\\); compute t. (4) Find p-value; (5) compare to \\(\\alpha\\); (6) conclude in context.',
        [
          'LINE: Linear, Independent, Normal residuals, Equal variance; \\(df = n - 2\\).',
          'Inference is about \\(\\beta\\) (population slope), not \\(b\\) (sample slope).',
        ],
        {
          exampleCode: '\\text{Test whether hours studied predicts exam score: } H_0: \\beta=0,\\ H_a: \\beta \\neq 0',
          exampleLanguage: 'latex',
          exampleExplanation: 'If we reject \\(H_0\\), there is evidence of a linear relationship between hours and score.',
        }
      ),
      subunit(
        '9-5',
        'Carrying Out a Test for the Slope of a Regression Model',
        'Compute \\(t = \\frac{b}{SE_b}\\) with \\(df = n - 2\\). Find the p-value (two-tailed or one-tailed). Compare to \\(\\alpha\\): if \\(p \\le \\alpha\\), reject \\(H_0\\) and conclude there is convincing evidence of a linear relationship (or that the slope is positive/negative); if \\(p > \\alpha\\), fail to reject \\(H_0\\); there is not convincing evidence of a linear relationship. The test is equivalent to testing whether the correlation differs from 0. Always interpret in terms of the explanatory and response variables.',
        [
          'Small p-value \\(\\Rightarrow\\) evidence of linear association; equivalent to testing correlation \\(\\neq 0\\).',
          'Interpret in context: name the explanatory and response variables and the direction of the relationship.',
        ],
        {
          exampleCode: '\\text{If } p\\text{-value}=0.002,\\ \\text{reject } H_0; \\text{ strong evidence of a linear relationship}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Small p-value indicates that the observed slope would be unlikely if \\(\\beta = 0\\).',
        }
      ),
      subunit(
        '9-6',
        'Skills Focus: Selecting an Appropriate Inference Procedure',
        'Use regression slope inference when: both variables are quantitative, the relationship appears linear (scatterplot), and the goal is to test or estimate the slope. Do not use it when the relationship is not linear, LINE conditions are clearly violated, or the data are categorical. Distinguish association from causation; interpret the slope in real-world units.\n\n' +
          'General method: (1) Identify variable types (both quantitative). (2) Check scatterplot for linear pattern. (3) Verify LINE conditions (residual plot, etc.). (4) Choose a confidence interval for the slope or a test for \\(H_0: \\beta = 0\\). (5) Communicate the conclusion clearly in context.',
        [
          'Regression inference applies to the population slope \\(\\beta\\); interpret in real-world units.',
          'Association does not imply causation; avoid causal language unless the design supports it.',
        ],
        {
          exampleCode: '\\text{Does advertising spending predict sales?} \\Rightarrow \\text{Regression slope inference appropriate}',
          exampleLanguage: 'latex',
          exampleExplanation: 'Both variables quantitative; linear relationship plausible; inference about slope is appropriate.',
        }
      ),
    ],
  },
]

export const STATS_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Statistics',
  units: STATS_UNITS,
  features: { latex: true, codeExamples: false, defaultExampleLanguage: 'latex' },
}
