import type { SubjectUnitBank } from './types'

export const BANK_AP_STATISTICS: SubjectUnitBank = {
  "label": "AP Statistics",
  "slug": "ap-statistics",
  "units": [
    {
      "unitNumber": 1,
      "title": "Exploring One-Variable Data",
      "questions": [
        {
          "id": "q-u1-easy-1",
          "question": "The mean of a data set is",
          "options": [
            "the sum of values divided by the number of values",
            "the middle value",
            "the most frequent value",
            "the range"
          ],
          "correctAnswer": 0,
          "explanation": "The mean is the arithmetic average: sum of values divided by count.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-2",
          "question": "The median is",
          "options": [
            "the middle value when data is ordered",
            "the average",
            "the most frequent value",
            "the largest value"
          ],
          "correctAnswer": 0,
          "explanation": "The median is the middle value of an ordered data set.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-3",
          "question": "The mode is",
          "options": [
            "the most frequently occurring value",
            "the average",
            "the middle value",
            "the spread"
          ],
          "correctAnswer": 0,
          "explanation": "The mode is the value that appears most often.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-4",
          "question": "The range of a data set is",
          "options": [
            "the maximum minus the minimum",
            "the average",
            "the middle value",
            "the standard deviation"
          ],
          "correctAnswer": 0,
          "explanation": "Range = maximum value − minimum value.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-5",
          "question": "Standard deviation measures",
          "options": [
            "the spread of data around the mean",
            "the center",
            "the mode",
            "the median"
          ],
          "correctAnswer": 0,
          "explanation": "Standard deviation quantifies the typical distance of values from the mean.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-6",
          "question": "A distribution skewed to the right has a longer tail on the",
          "options": [
            "right (high) side",
            "left side",
            "both sides",
            "neither side"
          ],
          "correctAnswer": 0,
          "explanation": "Right-skewed distributions have a longer tail extending toward larger values.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-7",
          "question": "A quantitative variable is one that is",
          "options": [
            "numerical",
            "categorical",
            "a label",
            "always a proportion"
          ],
          "correctAnswer": 0,
          "explanation": "Quantitative variables take numerical values, unlike categorical variables.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-8",
          "question": "An outlier is a value that is",
          "options": [
            "unusually far from the other data points",
            "the average",
            "the median",
            "the most common"
          ],
          "correctAnswer": 0,
          "explanation": "An outlier lies notably far from the rest of the data.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-9",
          "question": "The interquartile range (IQR) is",
          "options": [
            "Q3 − Q1",
            "the range",
            "the max",
            "the median"
          ],
          "correctAnswer": 0,
          "explanation": "IQR = Q3 − Q1, the spread of the middle 50% of the data.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-10",
          "question": "A histogram is used to display the distribution of",
          "options": [
            "quantitative data",
            "categorical data only",
            "a single value",
            "time only"
          ],
          "correctAnswer": 0,
          "explanation": "Histograms show the distribution of quantitative (numerical) data using bars over intervals.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-medium-1",
          "question": "For a right-skewed distribution, the mean is usually",
          "options": [
            "greater than the median",
            "less than the median",
            "equal to the median",
            "equal to the mode"
          ],
          "correctAnswer": 0,
          "explanation": "In a right-skewed distribution, the high tail pulls the mean above the median.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-2",
          "question": "Which measure of center is most resistant to outliers?",
          "options": [
            "the median",
            "the mean",
            "the range",
            "the standard deviation"
          ],
          "correctAnswer": 0,
          "explanation": "The median is resistant to outliers, unlike the mean which is pulled toward extreme values.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-3",
          "question": "A z-score of 2 means a value is",
          "options": [
            "2 standard deviations above the mean",
            "2 units above the mean",
            "at the mean",
            "below the mean"
          ],
          "correctAnswer": 0,
          "explanation": "A z-score measures how many standard deviations a value is from the mean; z = 2 is two SDs above.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-4",
          "question": "The five-number summary consists of the minimum, Q1, median, Q3, and",
          "options": [
            "maximum",
            "mean",
            "mode",
            "range"
          ],
          "correctAnswer": 0,
          "explanation": "The five-number summary is min, Q1, median, Q3, and max—used to make a boxplot.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-5",
          "question": "By the 1.5 × IQR rule, an outlier is a value below Q1 − 1.5(IQR) or above",
          "options": [
            "Q3 + 1.5(IQR)",
            "Q3 + IQR",
            "the median + IQR",
            "the mean + 1.5(IQR)"
          ],
          "correctAnswer": 0,
          "explanation": "The 1.5 × IQR rule flags values beyond Q1 − 1.5·IQR or Q3 + 1.5·IQR as outliers.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-6",
          "question": "A boxplot displays the",
          "options": [
            "five-number summary",
            "mean and standard deviation",
            "mode only",
            "all individual data points always"
          ],
          "correctAnswer": 0,
          "explanation": "A boxplot visualizes the five-number summary (min, Q1, median, Q3, max).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-7",
          "question": "When comparing two distributions, you should discuss",
          "options": [
            "shape, center, spread, and unusual features",
            "only the mean",
            "only the range",
            "only the mode"
          ],
          "correctAnswer": 0,
          "explanation": "Comparing distributions requires addressing shape, center, spread, and any outliers or unusual features.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-8",
          "question": "If every value in a data set increases by 5, the standard deviation",
          "options": [
            "stays the same",
            "increases by 5",
            "doubles",
            "becomes zero"
          ],
          "correctAnswer": 0,
          "explanation": "Adding a constant shifts all values equally, so the spread (standard deviation) is unchanged.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-9",
          "question": "A distribution with two distinct peaks is called",
          "options": [
            "bimodal",
            "unimodal",
            "uniform",
            "symmetric"
          ],
          "correctAnswer": 0,
          "explanation": "A bimodal distribution has two prominent peaks (modes).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-10",
          "question": "The empirical rule states that in a normal distribution, about 68% of data lies within",
          "options": [
            "1 standard deviation of the mean",
            "2 SDs",
            "3 SDs",
            "the range"
          ],
          "correctAnswer": 0,
          "explanation": "The 68-95-99.7 (empirical) rule: ~68% within 1 SD, ~95% within 2 SDs, ~99.7% within 3 SDs.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-hard-1",
          "question": "A value has a z-score of −1.5 in a data set with mean 50 and SD 10. The value is",
          "options": [
            "35",
            "65",
            "48.5",
            "15"
          ],
          "correctAnswer": 0,
          "explanation": "Value = mean + z·SD = 50 + (−1.5)(10) = 35.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-2",
          "question": "If every value in a data set is multiplied by 3, the mean and standard deviation",
          "options": [
            "both are multiplied by 3",
            "stay the same",
            "are multiplied by 9",
            "become zero"
          ],
          "correctAnswer": 0,
          "explanation": "Multiplying all values by a constant multiplies both the mean and the standard deviation by that constant.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-3",
          "question": "In a normal distribution, approximately what percent of data lies above the mean?",
          "options": [
            "50%",
            "68%",
            "95%",
            "34%"
          ],
          "correctAnswer": 0,
          "explanation": "A normal distribution is symmetric about its mean, so 50% of data lies above (and 50% below) the mean.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-4",
          "question": "Using the empirical rule, what percent of a normal distribution lies between 1 and 2 standard deviations above the mean?",
          "options": [
            "13.5%",
            "34%",
            "47.5%",
            "2.5%"
          ],
          "correctAnswer": 0,
          "explanation": "About 34% lies within 1 SD above and 47.5% within 2 SDs above; the difference (47.5 − 34) = 13.5%.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-5",
          "question": "Why is the median preferred over the mean for describing the center of skewed income data?",
          "options": [
            "The median is not distorted by extreme high values (outliers)",
            "the mean is always wrong",
            "incomes have no center",
            "the median uses all values"
          ],
          "correctAnswer": 0,
          "explanation": "Income data is typically right-skewed with high outliers; the median better represents the typical value since it resists those extremes.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-6",
          "question": "A standardized value (z-score) allows comparison of values from",
          "options": [
            "different distributions with different means and SDs",
            "only the same distribution",
            "only normal distributions",
            "identical data sets"
          ],
          "correctAnswer": 0,
          "explanation": "Z-scores standardize values relative to their own distribution's mean and SD, enabling comparison across different distributions.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-7",
          "question": "In a left-skewed distribution, the order of mean, median, and mode is typically",
          "options": [
            "mean < median < mode",
            "mode < median < mean",
            "mean = median = mode",
            "median < mean < mode"
          ],
          "correctAnswer": 0,
          "explanation": "In a left-skewed distribution, the low tail pulls the mean below the median, which is below the mode.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-8",
          "question": "Two data sets have the same mean but different standard deviations. The one with the larger SD has",
          "options": [
            "values more spread out from the mean",
            "values closer to the mean",
            "a larger mean",
            "no outliers"
          ],
          "correctAnswer": 0,
          "explanation": "A larger standard deviation indicates greater variability—values are more spread out from the mean.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-9",
          "question": "A percentile rank of 90 means a value is",
          "options": [
            "greater than or equal to about 90% of the data",
            "the 90th value",
            "90% of the maximum",
            "the mean"
          ],
          "correctAnswer": 0,
          "explanation": "The 90th percentile is the value at or above which about 90% of the data falls below it.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-10",
          "question": "Which graphical display is best for identifying the shape of a quantitative distribution?",
          "options": [
            "a histogram or dotplot",
            "a bar chart of categories",
            "a pie chart",
            "a two-way table"
          ],
          "correctAnswer": 0,
          "explanation": "Histograms and dotplots reveal the shape (skewness, modality) of quantitative distributions; bar/pie charts are for categorical data.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 2,
      "title": "Exploring Two-Variable Data",
      "questions": [
        {
          "id": "q-u2-easy-1",
          "question": "A scatterplot displays the relationship between",
          "options": [
            "two quantitative variables",
            "one variable",
            "categories only",
            "time only"
          ],
          "correctAnswer": 0,
          "explanation": "A scatterplot plots paired values of two quantitative variables to show their relationship.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-2",
          "question": "The correlation coefficient r measures the",
          "options": [
            "strength and direction of a linear relationship",
            "slope only",
            "the mean",
            "the spread"
          ],
          "correctAnswer": 0,
          "explanation": "The correlation r measures the strength and direction of a linear association between two quantitative variables.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-3",
          "question": "The value of r always lies between",
          "options": [
            "−1 and 1",
            "0 and 1",
            "−∞ and ∞",
            "0 and 100"
          ],
          "correctAnswer": 0,
          "explanation": "The correlation coefficient ranges from −1 (perfect negative) to +1 (perfect positive).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-4",
          "question": "A positive correlation means that as one variable increases, the other tends to",
          "options": [
            "increase",
            "decrease",
            "stay constant",
            "become zero"
          ],
          "correctAnswer": 0,
          "explanation": "Positive correlation: the variables tend to move in the same direction.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-5",
          "question": "A least-squares regression line predicts",
          "options": [
            "the response variable (y) from the explanatory variable (x)",
            "x from y only",
            "the correlation",
            "the mean"
          ],
          "correctAnswer": 0,
          "explanation": "The regression line models y (response) as a function of x (explanatory) to make predictions.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-6",
          "question": "A residual is",
          "options": [
            "the observed value minus the predicted value",
            "the predicted value",
            "the mean",
            "the slope"
          ],
          "correctAnswer": 0,
          "explanation": "A residual = observed y − predicted y, the vertical distance from a point to the regression line.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-7",
          "question": "The slope of a regression line represents",
          "options": [
            "the predicted change in y per unit change in x",
            "the y-intercept",
            "the correlation",
            "the mean of y"
          ],
          "correctAnswer": 0,
          "explanation": "The slope gives the predicted change in the response for each one-unit increase in the explanatory variable.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-8",
          "question": "Correlation does not imply",
          "options": [
            "causation",
            "association",
            "a relationship",
            "a pattern"
          ],
          "correctAnswer": 0,
          "explanation": "A correlation shows association but does not by itself establish that one variable causes the other.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-9",
          "question": "An r value close to 0 indicates",
          "options": [
            "a weak (or no) linear relationship",
            "a strong positive relationship",
            "a strong negative relationship",
            "perfect correlation"
          ],
          "correctAnswer": 0,
          "explanation": "An r near 0 means little or no linear association between the variables.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-10",
          "question": "A two-way table displays the relationship between",
          "options": [
            "two categorical variables",
            "two quantitative variables",
            "one variable",
            "time"
          ],
          "correctAnswer": 0,
          "explanation": "A two-way (contingency) table shows the joint distribution of two categorical variables.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-medium-1",
          "question": "An r value of −0.9 indicates a",
          "options": [
            "strong negative linear relationship",
            "weak negative relationship",
            "strong positive relationship",
            "no relationship"
          ],
          "correctAnswer": 0,
          "explanation": "An r close to −1 indicates a strong negative linear relationship.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-2",
          "question": "The coefficient of determination r² represents",
          "options": [
            "the proportion of variation in y explained by the model",
            "the slope",
            "the correlation",
            "the mean"
          ],
          "correctAnswer": 0,
          "explanation": "r² is the fraction of the variability in the response variable explained by the linear regression on x.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-3",
          "question": "A residual plot with no clear pattern suggests",
          "options": [
            "a linear model is appropriate",
            "a nonlinear model is needed",
            "strong correlation",
            "an outlier"
          ],
          "correctAnswer": 0,
          "explanation": "A random-looking residual plot indicates the linear model fits well; a pattern would suggest otherwise.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-4",
          "question": "If a regression line is ŷ = 3 + 2x, the predicted y when x = 4 is",
          "options": [
            "11",
            "9",
            "5",
            "8"
          ],
          "correctAnswer": 0,
          "explanation": "ŷ = 3 + 2(4) = 3 + 8 = 11.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-5",
          "question": "Extrapolation is problematic because it",
          "options": [
            "predicts beyond the range of the observed data, where the model may not hold",
            "uses too much data",
            "is always accurate",
            "only works for x = 0"
          ],
          "correctAnswer": 0,
          "explanation": "Extrapolation makes predictions outside the observed data range, where the relationship may not continue.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-6",
          "question": "An influential point is one whose removal",
          "options": [
            "substantially changes the regression line",
            "has no effect",
            "is always an outlier in y",
            "increases r to 1"
          ],
          "correctAnswer": 0,
          "explanation": "An influential point strongly affects the slope or position of the regression line when removed.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-7",
          "question": "A positive residual means the observed value is",
          "options": [
            "above the regression line (model underpredicted)",
            "below the line",
            "on the line",
            "the mean"
          ],
          "correctAnswer": 0,
          "explanation": "A positive residual (observed > predicted) means the point lies above the line; the model underpredicted.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-8",
          "question": "The correlation r is not affected by",
          "options": [
            "changing the units of measurement",
            "adding an outlier",
            "the strength of the relationship",
            "the direction"
          ],
          "correctAnswer": 0,
          "explanation": "Correlation is unitless and unchanged by linear transformations (like changing units) of either variable.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-9",
          "question": "A transformation (like taking logs) may be used to",
          "options": [
            "linearize a nonlinear relationship",
            "increase the correlation to 1 always",
            "change the units",
            "remove the response variable"
          ],
          "correctAnswer": 0,
          "explanation": "Transforming data (e.g., logarithms) can straighten curved relationships so a linear model applies.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-10",
          "question": "In a regression, the y-intercept represents",
          "options": [
            "the predicted y when x = 0",
            "the slope",
            "the correlation",
            "the mean of x"
          ],
          "correctAnswer": 0,
          "explanation": "The y-intercept is the predicted response when the explanatory variable equals zero.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-hard-1",
          "question": "If r = 0.8, the proportion of variation in y explained by the model is",
          "options": [
            "64%",
            "80%",
            "40%",
            "20%"
          ],
          "correctAnswer": 0,
          "explanation": "r² = 0.8² = 0.64, so 64% of the variation is explained.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-2",
          "question": "A regression line always passes through the point",
          "options": [
            "(x̄, ȳ) — the means of x and y",
            "(0, 0)",
            "the maximum point",
            "the median point"
          ],
          "correctAnswer": 0,
          "explanation": "The least-squares regression line always passes through the point of averages, (x̄, ȳ).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-3",
          "question": "Why can a strong correlation between two variables NOT establish causation?",
          "options": [
            "A lurking (confounding) variable could cause both, or the relationship could be coincidental",
            "correlation always means causation",
            "strong correlations are always causal",
            "r cannot be strong"
          ],
          "correctAnswer": 0,
          "explanation": "A confounding variable may drive both, or the association may be coincidental; establishing causation requires a controlled experiment.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-4",
          "question": "An outlier in the x-direction (far from the mean of x) is likely to be",
          "options": [
            "influential on the regression line",
            "never influential",
            "the same as an outlier in y",
            "irrelevant"
          ],
          "correctAnswer": 0,
          "explanation": "Points with extreme x-values (high leverage) tend to be influential, pulling the regression line toward them.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-5",
          "question": "A residual plot that shows a curved (U-shaped) pattern indicates",
          "options": [
            "a linear model is not appropriate",
            "a perfect fit",
            "strong correlation",
            "random scatter"
          ],
          "correctAnswer": 0,
          "explanation": "A systematic curved pattern in the residuals signals that a linear model does not capture the relationship well.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-6",
          "question": "The slope of the least-squares line can be computed as",
          "options": [
            "r · (s_y / s_x)",
            "r · (s_x / s_y)",
            "r · s_y",
            "r + s_x"
          ],
          "correctAnswer": 0,
          "explanation": "The regression slope is b = r · (s_y / s_x), where s_y and s_x are the standard deviations.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-7",
          "question": "Two variables have r = 0 but a clear curved relationship. This shows that r measures only",
          "options": [
            "the linear component of association",
            "all associations",
            "causation",
            "the spread"
          ],
          "correctAnswer": 0,
          "explanation": "Correlation r captures only linear association; a strong nonlinear relationship can still yield r ≈ 0.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-8",
          "question": "When interpreting a regression slope in context, you should say",
          "options": [
            "for each one-unit increase in x, y is predicted to change by the slope",
            "x causes y to change",
            "y equals the slope",
            "the correlation is the slope"
          ],
          "correctAnswer": 0,
          "explanation": "The slope's interpretation is a predicted change in y per unit increase in x—phrased as prediction, not causation.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-9",
          "question": "Why should you examine both a scatterplot and a residual plot when fitting a linear model?",
          "options": [
            "The scatterplot shows the overall pattern; the residual plot reveals whether the linear fit is appropriate",
            "only one is needed",
            "they show the same thing",
            "neither is useful"
          ],
          "correctAnswer": 0,
          "explanation": "The scatterplot shows the relationship's form, while the residual plot exposes patterns indicating a poor linear fit—together they assess model appropriateness.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-10",
          "question": "An association between two categorical variables can be assessed using",
          "options": [
            "conditional distributions in a two-way table",
            "a correlation coefficient",
            "a regression line",
            "a z-score"
          ],
          "correctAnswer": 0,
          "explanation": "For categorical variables, comparing conditional distributions in a two-way table reveals association (correlation/regression are for quantitative data).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 3,
      "title": "Collecting Data",
      "questions": [
        {
          "id": "q-u3-easy-1",
          "question": "A population is",
          "options": [
            "the entire group of interest",
            "a subset studied",
            "a single individual",
            "a graph"
          ],
          "correctAnswer": 0,
          "explanation": "A population is the whole group about which we want information.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-2",
          "question": "A sample is",
          "options": [
            "a subset of the population that is studied",
            "the whole population",
            "a single value",
            "a parameter"
          ],
          "correctAnswer": 0,
          "explanation": "A sample is the portion of the population actually examined to draw conclusions.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-3",
          "question": "A simple random sample (SRS) is one in which",
          "options": [
            "every possible sample of the given size has an equal chance of selection",
            "only volunteers participate",
            "the first n people are chosen",
            "the researcher picks favorites"
          ],
          "correctAnswer": 0,
          "explanation": "In an SRS, every group of the desired size is equally likely to be chosen.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-4",
          "question": "A census collects data from",
          "options": [
            "every member of the population",
            "a sample only",
            "one person",
            "volunteers"
          ],
          "correctAnswer": 0,
          "explanation": "A census attempts to gather data from the entire population.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-5",
          "question": "An experiment differs from an observational study in that an experiment",
          "options": [
            "imposes a treatment on subjects",
            "only observes",
            "never uses groups",
            "cannot show causation"
          ],
          "correctAnswer": 0,
          "explanation": "In an experiment, researchers deliberately impose treatments, allowing causal conclusions.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-6",
          "question": "Bias in sampling refers to",
          "options": [
            "a systematic tendency to over- or under-represent some outcomes",
            "random error",
            "a large sample",
            "a small sample"
          ],
          "correctAnswer": 0,
          "explanation": "Bias is a systematic error that consistently skews results away from the truth.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-7",
          "question": "A control group in an experiment",
          "options": [
            "does not receive the treatment, for comparison",
            "gets the treatment",
            "is not studied",
            "determines the sample size"
          ],
          "correctAnswer": 0,
          "explanation": "The control group provides a baseline for comparison, not receiving the experimental treatment.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-8",
          "question": "Random assignment in an experiment helps",
          "options": [
            "create comparable groups and reduce confounding",
            "introduce bias",
            "increase the sample size",
            "eliminate the control group"
          ],
          "correctAnswer": 0,
          "explanation": "Random assignment distributes confounding variables evenly, creating comparable treatment groups.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-9",
          "question": "A convenience sample is likely to be",
          "options": [
            "biased",
            "representative",
            "random",
            "a census"
          ],
          "correctAnswer": 0,
          "explanation": "Selecting whoever is easiest to reach (convenience sampling) usually introduces bias.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-10",
          "question": "Blinding in an experiment means that",
          "options": [
            "subjects (and/or evaluators) do not know the treatment assignments",
            "no data is recorded",
            "the sample is random",
            "the study has no control"
          ],
          "correctAnswer": 0,
          "explanation": "Blinding prevents subjects or evaluators from knowing who got which treatment, reducing bias.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-medium-1",
          "question": "A stratified random sample divides the population into groups and then",
          "options": [
            "randomly samples within each group",
            "samples only one group",
            "uses volunteers",
            "chooses the largest group"
          ],
          "correctAnswer": 0,
          "explanation": "Stratified sampling splits the population into homogeneous strata, then randomly samples within each.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-2",
          "question": "A cluster sample divides the population into groups and then",
          "options": [
            "randomly selects entire groups to sample",
            "samples within all groups",
            "uses only one person",
            "picks favorites"
          ],
          "correctAnswer": 0,
          "explanation": "In cluster sampling, whole clusters are randomly chosen and everyone within them is sampled.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-3",
          "question": "Voluntary response bias occurs when",
          "options": [
            "people with strong opinions are more likely to respond",
            "a random sample is used",
            "everyone responds",
            "the sample is a census"
          ],
          "correctAnswer": 0,
          "explanation": "Voluntary response samples over-represent those with strong feelings, biasing the results.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-4",
          "question": "Why is random assignment important for establishing causation?",
          "options": [
            "It balances confounding variables between groups, isolating the treatment effect",
            "it selects the population",
            "it replaces the control group",
            "it increases the sample"
          ],
          "correctAnswer": 0,
          "explanation": "Random assignment evenly distributes confounders, so differences in outcomes can be attributed to the treatment.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-5",
          "question": "A confounding variable is one that",
          "options": [
            "is associated with both the explanatory variable and the response, obscuring the relationship",
            "is the response",
            "has no effect",
            "is randomly assigned"
          ],
          "correctAnswer": 0,
          "explanation": "A confounder is linked to both variables of interest, making it hard to separate its effect from the treatment's.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-6",
          "question": "The placebo effect is when subjects respond to",
          "options": [
            "a fake treatment because they believe it is real",
            "the actual drug only",
            "random assignment",
            "the control group"
          ],
          "correctAnswer": 0,
          "explanation": "The placebo effect is a response to a treatment's perceived (not actual) effect, motivating the use of placebos.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-7",
          "question": "Replication in an experiment means",
          "options": [
            "using enough subjects (or repeating) to reduce chance variation",
            "doing the experiment once",
            "copying results",
            "using one subject"
          ],
          "correctAnswer": 0,
          "explanation": "Replication—applying treatments to many subjects—reduces the role of chance and increases reliability.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-8",
          "question": "Undercoverage bias occurs when",
          "options": [
            "some groups of the population are left out of the sampling process",
            "the sample is too large",
            "everyone is sampled",
            "the study is an experiment"
          ],
          "correctAnswer": 0,
          "explanation": "Undercoverage happens when part of the population has no chance of being sampled, biasing results.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-9",
          "question": "A double-blind experiment is one where",
          "options": [
            "neither subjects nor those interacting with them know the treatment assignments",
            "only subjects are blind",
            "only researchers are blind",
            "no one is blind"
          ],
          "correctAnswer": 0,
          "explanation": "In a double-blind design, both subjects and the evaluators/administrators are unaware of the assignments, minimizing bias.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-10",
          "question": "The three principles of experimental design are control, randomization, and",
          "options": [
            "replication",
            "confounding",
            "bias",
            "sampling"
          ],
          "correctAnswer": 0,
          "explanation": "Good experiments use control, randomization, and replication to produce valid, reliable results.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-hard-1",
          "question": "Why can only a well-designed experiment (not an observational study) establish causation?",
          "options": [
            "Random assignment controls confounding variables, isolating the treatment's effect",
            "observational studies use larger samples",
            "experiments never have confounders naturally",
            "observation is always biased"
          ],
          "correctAnswer": 0,
          "explanation": "Only random assignment of treatments controls for confounders, allowing a cause-and-effect conclusion; observational studies cannot rule out lurking variables.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-2",
          "question": "A survey question worded to encourage a particular answer introduces",
          "options": [
            "response bias",
            "undercoverage",
            "random error",
            "nonresponse only"
          ],
          "correctAnswer": 0,
          "explanation": "Leading or loaded wording produces response bias, systematically influencing answers.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-3",
          "question": "Nonresponse bias occurs when",
          "options": [
            "selected individuals who do not respond differ systematically from those who do",
            "the sample is random",
            "everyone responds",
            "the study is blinded"
          ],
          "correctAnswer": 0,
          "explanation": "Nonresponse bias arises when non-responders differ from responders, skewing the results.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-4",
          "question": "Why is a larger random sample generally better than a smaller one?",
          "options": [
            "It reduces variability (sampling error), giving more precise estimates",
            "it removes bias",
            "it guarantees a census",
            "larger samples are always biased"
          ],
          "correctAnswer": 0,
          "explanation": "Larger random samples reduce sampling variability, yielding more precise estimates—though size alone does not fix bias.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-5",
          "question": "A block design in an experiment is used to",
          "options": [
            "group similar subjects before random assignment to reduce variability",
            "eliminate randomization",
            "increase confounding",
            "remove the control group"
          ],
          "correctAnswer": 0,
          "explanation": "Blocking groups similar subjects together, then randomizes within blocks, reducing variability from that grouping variable.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-6",
          "question": "Why does increasing sample size NOT reduce bias?",
          "options": [
            "Bias is a systematic error in the method, unaffected by sample size",
            "larger samples are always biased",
            "bias only affects small samples",
            "sample size determines bias"
          ],
          "correctAnswer": 0,
          "explanation": "Bias comes from a flawed sampling or measurement method; a larger sample just gives a more precise but still-biased estimate.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-7",
          "question": "The purpose of a control group with a placebo is to",
          "options": [
            "isolate the treatment effect from the placebo effect",
            "increase the sample size",
            "introduce bias",
            "eliminate randomization"
          ],
          "correctAnswer": 0,
          "explanation": "A placebo control lets researchers separate the treatment's true effect from the psychological placebo effect.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-8",
          "question": "A matched-pairs design is a special case of",
          "options": [
            "a block design (blocks of size 2 or same subject twice)",
            "a completely randomized design",
            "cluster sampling",
            "a census"
          ],
          "correctAnswer": 0,
          "explanation": "Matched pairs pairs similar subjects (or uses each subject as their own control), a form of blocking with block size 2.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-9",
          "question": "Generalizing results to a population is valid only if",
          "options": [
            "the sample was randomly selected from that population",
            "the sample was large",
            "the study was an experiment",
            "subjects volunteered"
          ],
          "correctAnswer": 0,
          "explanation": "Random selection from the population is what justifies generalizing (inference) results to that population.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-10",
          "question": "The distinction between random selection and random assignment is that random selection allows ___ while random assignment allows ___.",
          "options": [
            "generalization to a population; cause-and-effect conclusions",
            "causation; generalization",
            "neither; both",
            "bias; precision"
          ],
          "correctAnswer": 0,
          "explanation": "Random selection permits generalizing to the population; random assignment permits causal conclusions—two different purposes.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 4,
      "title": "Probability, Random Variables, and Probability Distributions",
      "questions": [
        {
          "id": "q-u4-easy-1",
          "question": "The probability of an event ranges from",
          "options": [
            "0 to 1",
            "−1 to 1",
            "0 to 100",
            "1 to 10"
          ],
          "correctAnswer": 0,
          "explanation": "Probabilities range from 0 (impossible) to 1 (certain).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-2",
          "question": "The probability of the complement of event A is",
          "options": [
            "1 − P(A)",
            "P(A)",
            "1 + P(A)",
            "0"
          ],
          "correctAnswer": 0,
          "explanation": "The complement rule: P(not A) = 1 − P(A).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-3",
          "question": "Two events are mutually exclusive (disjoint) if they",
          "options": [
            "cannot occur at the same time",
            "always occur together",
            "are independent",
            "have equal probability"
          ],
          "correctAnswer": 0,
          "explanation": "Mutually exclusive events cannot both happen simultaneously, so P(A and B) = 0.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-4",
          "question": "For independent events A and B, P(A and B) equals",
          "options": [
            "P(A) × P(B)",
            "P(A) + P(B)",
            "P(A) − P(B)",
            "P(A)/P(B)"
          ],
          "correctAnswer": 0,
          "explanation": "For independent events, the joint probability is the product: P(A)·P(B).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-5",
          "question": "A random variable is",
          "options": [
            "a variable whose value is a numerical outcome of a random process",
            "a fixed number",
            "a category",
            "a graph"
          ],
          "correctAnswer": 0,
          "explanation": "A random variable assigns numerical values to the outcomes of a random phenomenon.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-6",
          "question": "The expected value of a discrete random variable is",
          "options": [
            "the sum of each value times its probability",
            "the largest value",
            "the mode",
            "the median"
          ],
          "correctAnswer": 0,
          "explanation": "Expected value E(X) = Σ x·P(x), the long-run average.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-7",
          "question": "A binomial setting requires a fixed number of trials, two outcomes, constant probability, and",
          "options": [
            "independent trials",
            "dependent trials",
            "many outcomes",
            "no probability"
          ],
          "correctAnswer": 0,
          "explanation": "Binomial conditions: fixed n, two outcomes (success/failure), constant p, and independent trials.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-8",
          "question": "For any two events, the general addition rule is P(A or B) =",
          "options": [
            "P(A) + P(B) − P(A and B)",
            "P(A) + P(B)",
            "P(A) × P(B)",
            "P(A) − P(B)"
          ],
          "correctAnswer": 0,
          "explanation": "P(A or B) = P(A) + P(B) − P(A and B), subtracting the overlap.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-9",
          "question": "A conditional probability P(A | B) is the probability of A given that",
          "options": [
            "B has occurred",
            "A has occurred",
            "neither occurred",
            "both are impossible"
          ],
          "correctAnswer": 0,
          "explanation": "P(A | B) is the probability of A given that event B is known to have occurred.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-10",
          "question": "The sum of all probabilities in a probability distribution must equal",
          "options": [
            "1",
            "0",
            "the number of outcomes",
            "100"
          ],
          "correctAnswer": 0,
          "explanation": "All the probabilities in a valid distribution sum to 1.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-medium-1",
          "question": "A fair coin is flipped 3 times. The probability of getting exactly 3 heads is",
          "options": [
            "1/8",
            "1/3",
            "3/8",
            "1/2"
          ],
          "correctAnswer": 0,
          "explanation": "P(HHH) = (1/2)³ = 1/8.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-2",
          "question": "For a random variable with values 1, 2, 3 having probabilities 0.2, 0.5, 0.3, the expected value is",
          "options": [
            "2.1",
            "2",
            "3",
            "1.5"
          ],
          "correctAnswer": 0,
          "explanation": "E(X) = 1(0.2) + 2(0.5) + 3(0.3) = 0.2 + 1.0 + 0.9 = 2.1.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-3",
          "question": "If P(A) = 0.4 and P(B) = 0.5 and they are mutually exclusive, P(A or B) =",
          "options": [
            "0.9",
            "0.2",
            "0.1",
            "1"
          ],
          "correctAnswer": 0,
          "explanation": "For mutually exclusive events, P(A or B) = P(A) + P(B) = 0.4 + 0.5 = 0.9.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-4",
          "question": "The conditional probability formula is P(A | B) =",
          "options": [
            "P(A and B) / P(B)",
            "P(A) / P(B)",
            "P(A and B) × P(B)",
            "P(A) + P(B)"
          ],
          "correctAnswer": 0,
          "explanation": "P(A | B) = P(A and B) / P(B).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-5",
          "question": "For a binomial random variable with n = 10 and p = 0.3, the mean (expected number of successes) is",
          "options": [
            "3",
            "10",
            "0.3",
            "7"
          ],
          "correctAnswer": 0,
          "explanation": "The binomial mean is np = 10 × 0.3 = 3.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-6",
          "question": "Two events are independent if",
          "options": [
            "P(A | B) = P(A)",
            "P(A) = P(B)",
            "they are mutually exclusive",
            "P(A and B) = 0"
          ],
          "correctAnswer": 0,
          "explanation": "Independence means the occurrence of B does not change the probability of A: P(A | B) = P(A).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-7",
          "question": "When adding two independent random variables, the variances",
          "options": [
            "add",
            "subtract",
            "stay the same",
            "multiply"
          ],
          "correctAnswer": 0,
          "explanation": "For independent random variables, variances add: Var(X + Y) = Var(X) + Var(Y).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-8",
          "question": "The standard deviation of a binomial random variable is",
          "options": [
            "√(np(1−p))",
            "np",
            "np(1−p)",
            "√(np)"
          ],
          "correctAnswer": 0,
          "explanation": "The binomial standard deviation is √(np(1−p)).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-9",
          "question": "When you multiply a random variable by a constant c, its mean is multiplied by c and its standard deviation is",
          "options": [
            "multiplied by |c|",
            "unchanged",
            "multiplied by c²",
            "added to c"
          ],
          "correctAnswer": 0,
          "explanation": "Scaling by c multiplies the mean by c and the standard deviation by |c| (variance by c²).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-10",
          "question": "A geometric random variable counts",
          "options": [
            "the number of trials until the first success",
            "the number of successes in n trials",
            "the mean",
            "the variance"
          ],
          "correctAnswer": 0,
          "explanation": "A geometric random variable counts the number of trials needed to get the first success.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-hard-1",
          "question": "A fair die is rolled twice. The probability of getting a sum of 7 is",
          "options": [
            "1/6",
            "1/12",
            "1/36",
            "1/2"
          ],
          "correctAnswer": 0,
          "explanation": "There are 6 ways to sum to 7 out of 36 equally likely outcomes: 6/36 = 1/6.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-2",
          "question": "If P(A) = 0.6, P(B) = 0.5, and P(A and B) = 0.3, are A and B independent?",
          "options": [
            "Yes, because P(A)·P(B) = 0.3 = P(A and B)",
            "No",
            "Cannot be determined",
            "Only if mutually exclusive"
          ],
          "correctAnswer": 0,
          "explanation": "P(A)·P(B) = 0.6 × 0.5 = 0.3, which equals P(A and B), so the events are independent.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-3",
          "question": "A binomial experiment has n = 5 and p = 0.5. The probability of exactly 2 successes is",
          "options": [
            "about 0.3125",
            "0.5",
            "0.25",
            "0.1"
          ],
          "correctAnswer": 0,
          "explanation": "P(X=2) = C(5,2)(0.5)²(0.5)³ = 10 × (1/32) = 10/32 ≈ 0.3125.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-4",
          "question": "Why are mutually exclusive events (with nonzero probabilities) NOT independent?",
          "options": [
            "If one occurs, the other cannot, so knowing one changes the other's probability",
            "they are always independent",
            "they have equal probability",
            "independence requires exclusivity"
          ],
          "correctAnswer": 0,
          "explanation": "Disjoint events are dependent: if A occurs, P(B) becomes 0, so the occurrence of one affects the other.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-5",
          "question": "For the sum of two independent random variables with means 5 and 3 and standard deviations 4 and 3, the standard deviation of the sum is",
          "options": [
            "5",
            "7",
            "25",
            "1"
          ],
          "correctAnswer": 0,
          "explanation": "Variances add: 4² + 3² = 16 + 9 = 25; SD = √25 = 5.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-6",
          "question": "The law of large numbers states that as the number of trials increases, the sample proportion",
          "options": [
            "approaches the true probability",
            "becomes more variable",
            "stays constant",
            "approaches zero"
          ],
          "correctAnswer": 0,
          "explanation": "The law of large numbers: the observed relative frequency converges to the true probability as trials increase.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-7",
          "question": "A test is 90% accurate. If 1% of people have a disease, using Bayes' reasoning, a positive test result",
          "options": [
            "may still more likely be a false positive due to the low base rate",
            "always means disease",
            "is always correct",
            "is impossible to interpret"
          ],
          "correctAnswer": 0,
          "explanation": "With a low disease prevalence (base rate), even an accurate test yields many false positives, so a positive result may more likely be a false alarm.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-8",
          "question": "The expected value of a game is negative. In the long run, a player will",
          "options": [
            "lose money on average",
            "win money",
            "break even",
            "win occasionally with net gain"
          ],
          "correctAnswer": 0,
          "explanation": "A negative expected value means the player's average result is a loss over many plays.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-9",
          "question": "For a probability distribution, the variance is calculated as",
          "options": [
            "Σ (x − μ)² · P(x)",
            "Σ x · P(x)",
            "Σ (x − μ) · P(x)",
            "the mean squared"
          ],
          "correctAnswer": 0,
          "explanation": "Variance = Σ (x − μ)²·P(x), the expected squared deviation from the mean.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-10",
          "question": "When subtracting two independent random variables (X − Y), the variance of the difference is",
          "options": [
            "Var(X) + Var(Y)",
            "Var(X) − Var(Y)",
            "Var(X) × Var(Y)",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "For independent variables, variances add even when subtracting: Var(X − Y) = Var(X) + Var(Y).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 5,
      "title": "Sampling Distributions",
      "questions": [
        {
          "id": "q-u5-easy-1",
          "question": "A sampling distribution is the distribution of",
          "options": [
            "a statistic over all possible samples",
            "a single sample",
            "the population",
            "one value"
          ],
          "correctAnswer": 0,
          "explanation": "A sampling distribution shows how a statistic (like the sample mean) varies across all possible samples.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-2",
          "question": "A parameter describes a ___, while a statistic describes a ___.",
          "options": [
            "population; sample",
            "sample; population",
            "graph; number",
            "number; graph"
          ],
          "correctAnswer": 0,
          "explanation": "Parameters describe populations; statistics describe samples.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-3",
          "question": "The Central Limit Theorem says that the sampling distribution of the sample mean is approximately",
          "options": [
            "normal for large sample sizes",
            "always skewed",
            "uniform",
            "the same as the population"
          ],
          "correctAnswer": 0,
          "explanation": "The CLT states that for large n, the sampling distribution of the mean is approximately normal regardless of the population's shape.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-4",
          "question": "An unbiased estimator is one whose sampling distribution is centered at",
          "options": [
            "the true parameter value",
            "zero",
            "the sample size",
            "the maximum"
          ],
          "correctAnswer": 0,
          "explanation": "An unbiased estimator has a sampling distribution centered on the parameter it estimates.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-5",
          "question": "The mean of the sampling distribution of the sample mean equals",
          "options": [
            "the population mean μ",
            "the sample size",
            "zero",
            "the standard deviation"
          ],
          "correctAnswer": 0,
          "explanation": "E(x̄) = μ; the sample mean is an unbiased estimator of the population mean.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-6",
          "question": "The standard deviation of the sampling distribution of the sample mean is",
          "options": [
            "σ/√n",
            "σ",
            "σ·n",
            "σ²"
          ],
          "correctAnswer": 0,
          "explanation": "The standard deviation of x̄ (standard error) is σ/√n.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-7",
          "question": "As sample size increases, the variability of the sampling distribution",
          "options": [
            "decreases",
            "increases",
            "stays the same",
            "becomes infinite"
          ],
          "correctAnswer": 0,
          "explanation": "Larger samples produce a narrower sampling distribution (smaller standard error).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-8",
          "question": "The sampling distribution of a sample proportion p̂ is centered at",
          "options": [
            "the population proportion p",
            "0.5",
            "zero",
            "the sample size"
          ],
          "correctAnswer": 0,
          "explanation": "The mean of the sampling distribution of p̂ is the true population proportion p.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-9",
          "question": "The standard deviation of the sample proportion p̂ is",
          "options": [
            "√(p(1−p)/n)",
            "p(1−p)",
            "√(p/n)",
            "p/n"
          ],
          "correctAnswer": 0,
          "explanation": "The standard deviation of p̂ is √(p(1−p)/n).",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-easy-10",
          "question": "Sampling variability refers to",
          "options": [
            "the natural variation in a statistic from sample to sample",
            "bias",
            "measurement error",
            "a constant value"
          ],
          "correctAnswer": 0,
          "explanation": "Sampling variability is the differences in a statistic's value that arise from taking different random samples.",
          "difficulty": "easy"
        },
        {
          "id": "q-u5-medium-1",
          "question": "If a population has σ = 20 and we take samples of size 100, the standard error of the mean is",
          "options": [
            "2",
            "20",
            "0.2",
            "200"
          ],
          "correctAnswer": 0,
          "explanation": "Standard error = σ/√n = 20/√100 = 20/10 = 2.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-2",
          "question": "Quadrupling the sample size ___ the standard error.",
          "options": [
            "halves",
            "doubles",
            "quadruples",
            "does not change"
          ],
          "correctAnswer": 0,
          "explanation": "Since SE = σ/√n, multiplying n by 4 multiplies √n by 2, halving the standard error.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-3",
          "question": "The CLT is important because it allows us to use normal-based inference even when",
          "options": [
            "the population is not normal (for large n)",
            "the sample is small",
            "the population is normal",
            "there is no sample"
          ],
          "correctAnswer": 0,
          "explanation": "The CLT lets us apply normal methods to the sample mean for large samples regardless of population shape.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-4",
          "question": "For the normal approximation to a sample proportion to be valid, we typically require",
          "options": [
            "np ≥ 10 and n(1−p) ≥ 10",
            "n ≥ 5",
            "p = 0.5",
            "n < 10"
          ],
          "correctAnswer": 0,
          "explanation": "The large counts condition (np ≥ 10 and n(1−p) ≥ 10) allows a normal approximation for p̂.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-5",
          "question": "A biased estimator is one whose sampling distribution is",
          "options": [
            "not centered at the true parameter",
            "centered at the parameter",
            "always normal",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "A biased estimator systematically over- or underestimates the parameter (its distribution is not centered on it).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-6",
          "question": "If p = 0.5 and n = 100, the standard deviation of p̂ is",
          "options": [
            "0.05",
            "0.5",
            "0.005",
            "0.25"
          ],
          "correctAnswer": 0,
          "explanation": "√(0.5·0.5/100) = √(0.0025) = 0.05.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-7",
          "question": "The shape of the sampling distribution of the mean from a normal population is",
          "options": [
            "normal for any sample size",
            "normal only for large n",
            "always skewed",
            "uniform"
          ],
          "correctAnswer": 0,
          "explanation": "If the population is normal, the sampling distribution of the mean is normal for any sample size.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-8",
          "question": "The standard error estimates the",
          "options": [
            "variability of a statistic from sample to sample",
            "population mean",
            "bias",
            "sample size"
          ],
          "correctAnswer": 0,
          "explanation": "The standard error quantifies how much a sample statistic typically varies from the true parameter.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-9",
          "question": "Why is a larger sample size desirable for estimating a parameter?",
          "options": [
            "It reduces the standard error, giving a more precise estimate",
            "it increases bias",
            "it changes the parameter",
            "it makes the distribution skewed"
          ],
          "correctAnswer": 0,
          "explanation": "Larger n reduces sampling variability (standard error), producing more precise estimates.",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-medium-10",
          "question": "The difference of two sample means has a sampling distribution with standard error found by",
          "options": [
            "combining the two standard errors (√(SE₁² + SE₂²))",
            "subtracting the standard errors",
            "adding the means",
            "multiplying the SEs"
          ],
          "correctAnswer": 0,
          "explanation": "For independent samples, the standard error of the difference of means is √(σ₁²/n₁ + σ₂²/n₂).",
          "difficulty": "medium"
        },
        {
          "id": "q-u5-hard-1",
          "question": "A population has μ = 100 and σ = 15. For samples of size 25, the probability that x̄ exceeds 106 is found using a standard error of",
          "options": [
            "3",
            "15",
            "0.6",
            "0.15"
          ],
          "correctAnswer": 0,
          "explanation": "SE = σ/√n = 15/√25 = 15/5 = 3; then z = (106 − 100)/3 = 2.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-2",
          "question": "Why does the CLT allow inference about means for skewed populations?",
          "options": [
            "The sampling distribution of the mean becomes approximately normal as n grows, even from a skewed population",
            "the population becomes normal",
            "skewness disappears",
            "means are always normal"
          ],
          "correctAnswer": 0,
          "explanation": "Regardless of the population's shape, the CLT ensures the sample mean's distribution approaches normal for large n, enabling normal-based inference.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-3",
          "question": "A sample proportion p̂ = 0.6 comes from n = 400. The standard error is approximately",
          "options": [
            "0.0245",
            "0.6",
            "0.024",
            "0.245"
          ],
          "correctAnswer": 0,
          "explanation": "SE = √(0.6·0.4/400) = √(0.24/400) = √0.0006 ≈ 0.0245.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-4",
          "question": "An estimator can be unbiased but still imprecise if it has",
          "options": [
            "a large standard error (high variability)",
            "a small standard error",
            "a small sample",
            "no distribution"
          ],
          "correctAnswer": 0,
          "explanation": "Unbiased means centered correctly, but a large standard error means individual estimates vary widely—unbiased yet imprecise.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-5",
          "question": "The 10% condition for the standard error formula requires that the sample size be",
          "options": [
            "no more than 10% of the population",
            "at least 10%",
            "exactly 10%",
            "larger than the population"
          ],
          "correctAnswer": 0,
          "explanation": "The 10% condition (n ≤ 0.10·N) ensures independence when sampling without replacement, validating the standard error formula.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-6",
          "question": "Why is the sampling distribution of the sample mean less variable than the population?",
          "options": [
            "Averaging reduces the effect of individual extreme values (SE = σ/√n)",
            "means are larger",
            "populations have no variability",
            "the sample is bigger than the population"
          ],
          "correctAnswer": 0,
          "explanation": "Averaging cancels out extreme individual values, so the sample mean varies less than individual observations, by a factor of 1/√n.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-7",
          "question": "To halve the standard error of a sample mean, you must",
          "options": [
            "quadruple the sample size",
            "double the sample size",
            "halve the sample size",
            "double the population"
          ],
          "correctAnswer": 0,
          "explanation": "Since SE ∝ 1/√n, halving SE requires multiplying n by 4.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-8",
          "question": "For small samples from a non-normal population, inference about the mean should use",
          "options": [
            "a t-distribution and caution about normality",
            "the normal distribution always",
            "no distribution",
            "the population directly"
          ],
          "correctAnswer": 0,
          "explanation": "With small n and unknown σ, the t-distribution is used, but the normality condition matters more since the CLT hasn't fully applied.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-9",
          "question": "The sampling distribution concept is the foundation of inference because it",
          "options": [
            "describes how much a statistic varies, enabling probability statements about estimates",
            "proves causation",
            "removes bias",
            "determines the population"
          ],
          "correctAnswer": 0,
          "explanation": "Knowing how a statistic varies from sample to sample (its sampling distribution) lets us construct confidence intervals and tests—the basis of inference.",
          "difficulty": "hard"
        },
        {
          "id": "q-u5-hard-10",
          "question": "Two independent samples have proportions p̂₁ and p̂₂. The standard error of the difference p̂₁ − p̂₂ is",
          "options": [
            "√(p₁(1−p₁)/n₁ + p₂(1−p₂)/n₂)",
            "p₁ − p₂",
            "√(p₁ − p₂)",
            "p₁(1−p₁) − p₂(1−p₂)"
          ],
          "correctAnswer": 0,
          "explanation": "For independent proportions, the standard error of the difference combines the two variances: √(p₁(1−p₁)/n₁ + p₂(1−p₂)/n₂).",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 6,
      "title": "Inference for Categorical Data: Proportions",
      "questions": [
        {
          "id": "q-u6-easy-1",
          "question": "A confidence interval provides",
          "options": [
            "a range of plausible values for a parameter",
            "a single estimate",
            "a probability",
            "the population"
          ],
          "correctAnswer": 0,
          "explanation": "A confidence interval gives a range of plausible values for an unknown population parameter.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-2",
          "question": "A 95% confidence level means that in repeated sampling, about 95% of such intervals will",
          "options": [
            "contain the true parameter",
            "be identical",
            "be wrong",
            "have the same width"
          ],
          "correctAnswer": 0,
          "explanation": "With 95% confidence, about 95% of constructed intervals capture the true parameter in the long run.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-3",
          "question": "A hypothesis test starts with a null hypothesis, which typically states",
          "options": [
            "no effect or no difference",
            "a strong effect",
            "the alternative",
            "the sample result"
          ],
          "correctAnswer": 0,
          "explanation": "The null hypothesis (H₀) usually posits no effect, no difference, or a specified value.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-4",
          "question": "The alternative hypothesis states",
          "options": [
            "what we are trying to find evidence for",
            "no effect",
            "the null",
            "the sample size"
          ],
          "correctAnswer": 0,
          "explanation": "The alternative hypothesis (Hₐ) is the claim we seek evidence to support.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-5",
          "question": "A p-value is the probability of",
          "options": [
            "obtaining a result as extreme as observed if H₀ is true",
            "H₀ being true",
            "the alternative being true",
            "making no error"
          ],
          "correctAnswer": 0,
          "explanation": "The p-value is the probability of observing data as or more extreme than the sample, assuming H₀ is true.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-6",
          "question": "A small p-value provides evidence",
          "options": [
            "against the null hypothesis",
            "for the null hypothesis",
            "of no effect",
            "of a large sample"
          ],
          "correctAnswer": 0,
          "explanation": "A small p-value suggests the observed data would be unlikely under H₀, providing evidence against it.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-7",
          "question": "The significance level (α) is",
          "options": [
            "the threshold for rejecting H₀ (e.g., 0.05)",
            "the p-value",
            "the confidence level",
            "the sample size"
          ],
          "correctAnswer": 0,
          "explanation": "α is the pre-set threshold; if the p-value is below α, we reject H₀.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-8",
          "question": "The margin of error in a confidence interval",
          "options": [
            "gives the amount added and subtracted from the estimate",
            "is the estimate",
            "is the parameter",
            "is the sample size"
          ],
          "correctAnswer": 0,
          "explanation": "The margin of error is the ± amount defining the interval's width around the point estimate.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-9",
          "question": "For inference on a proportion, the point estimate is",
          "options": [
            "the sample proportion p̂",
            "the population proportion",
            "the mean",
            "the median"
          ],
          "correctAnswer": 0,
          "explanation": "The sample proportion p̂ is the point estimate for the population proportion p.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-easy-10",
          "question": "Increasing the sample size ___ the margin of error.",
          "options": [
            "decreases",
            "increases",
            "doesn't change",
            "doubles"
          ],
          "correctAnswer": 0,
          "explanation": "A larger sample gives a smaller standard error and thus a smaller margin of error.",
          "difficulty": "easy"
        },
        {
          "id": "q-u6-medium-1",
          "question": "A 95% confidence interval for a proportion is p̂ ± margin. Increasing confidence to 99% makes the interval",
          "options": [
            "wider",
            "narrower",
            "the same",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "Higher confidence requires a larger critical value, widening the interval.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-2",
          "question": "If a p-value of 0.03 is compared to α = 0.05, you should",
          "options": [
            "reject the null hypothesis",
            "fail to reject the null",
            "accept the null",
            "do nothing"
          ],
          "correctAnswer": 0,
          "explanation": "Since 0.03 < 0.05, the result is statistically significant, so reject H₀.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-3",
          "question": "A Type I error occurs when you",
          "options": [
            "reject a true null hypothesis",
            "fail to reject a false null",
            "accept the alternative",
            "use a large sample"
          ],
          "correctAnswer": 0,
          "explanation": "A Type I error is rejecting H₀ when it is actually true (a false positive).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-4",
          "question": "A Type II error occurs when you",
          "options": [
            "fail to reject a false null hypothesis",
            "reject a true null",
            "accept the alternative",
            "use a small α"
          ],
          "correctAnswer": 0,
          "explanation": "A Type II error is failing to reject H₀ when it is actually false (a false negative).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-5",
          "question": "The conditions for a one-proportion z-interval include random sampling, the 10% condition, and",
          "options": [
            "the large counts condition (np̂ ≥ 10, n(1−p̂) ≥ 10)",
            "a small sample",
            "p = 0.5",
            "normality of the population"
          ],
          "correctAnswer": 0,
          "explanation": "The large counts condition ensures the sampling distribution of p̂ is approximately normal.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-6",
          "question": "The power of a test is the probability of",
          "options": [
            "correctly rejecting a false null hypothesis",
            "making a Type I error",
            "a false negative",
            "accepting the null"
          ],
          "correctAnswer": 0,
          "explanation": "Power is the probability of correctly rejecting H₀ when the alternative is true (1 − P(Type II error)).",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-7",
          "question": "If a 95% confidence interval for a proportion is (0.40, 0.50), a hypothesized value of 0.45 is",
          "options": [
            "plausible (inside the interval)",
            "rejected",
            "impossible",
            "the margin of error"
          ],
          "correctAnswer": 0,
          "explanation": "Since 0.45 lies within the interval, it is a plausible value for the parameter.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-8",
          "question": "A two-sided alternative hypothesis tests whether the parameter is",
          "options": [
            "different from (not equal to) the null value",
            "greater than only",
            "less than only",
            "equal to the null"
          ],
          "correctAnswer": 0,
          "explanation": "A two-sided test checks for a difference in either direction (≠), not just one.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-9",
          "question": "To reduce both Type I and Type II errors, you can",
          "options": [
            "increase the sample size",
            "decrease the sample size",
            "raise α only",
            "remove the control"
          ],
          "correctAnswer": 0,
          "explanation": "A larger sample size increases power and precision, reducing the chance of both error types.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-medium-10",
          "question": "Increasing α (e.g., from 0.01 to 0.05) increases the probability of a ___ error but decreases a ___ error.",
          "options": [
            "Type I; Type II",
            "Type II; Type I",
            "both; neither",
            "neither; both"
          ],
          "correctAnswer": 0,
          "explanation": "A larger α makes it easier to reject H₀, raising Type I error risk but lowering Type II error risk.",
          "difficulty": "medium"
        },
        {
          "id": "q-u6-hard-1",
          "question": "A 95% confidence interval for a proportion is (0.52, 0.58). Which conclusion about H₀: p = 0.5 is correct?",
          "options": [
            "Reject H₀ at 5% (0.5 is not in the interval)",
            "Fail to reject H₀",
            "Accept H₀",
            "Cannot conclude"
          ],
          "correctAnswer": 0,
          "explanation": "Since 0.5 lies outside the 95% interval, we would reject H₀: p = 0.5 at the 5% level (two-sided).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-2",
          "question": "Why does failing to reject H₀ NOT mean H₀ is true?",
          "options": [
            "Lack of evidence against H₀ is not proof of H₀; a Type II error is possible",
            "H₀ is always false",
            "the test is invalid",
            "p-values prove H₀"
          ],
          "correctAnswer": 0,
          "explanation": "Failing to reject means insufficient evidence against H₀, not that it is true—the test may lack power (Type II error).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-3",
          "question": "To determine the sample size needed for a desired margin of error in a proportion, you solve for n using",
          "options": [
            "the margin of error formula with a chosen critical value and estimated p",
            "the p-value",
            "the mean",
            "the population size only"
          ],
          "correctAnswer": 0,
          "explanation": "Setting the margin of error formula (z*√(p(1−p)/n)) equal to the desired value and solving for n gives the required sample size.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-4",
          "question": "A p-value of 0.20 means that",
          "options": [
            "data this extreme would occur 20% of the time if H₀ were true—weak evidence against H₀",
            "H₀ is 20% likely",
            "the alternative is true",
            "a Type I error occurred"
          ],
          "correctAnswer": 0,
          "explanation": "A p-value of 0.20 indicates the observed result is not unusual under H₀, providing weak evidence against it.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-5",
          "question": "Increasing the sample size increases the power of a test because it",
          "options": [
            "reduces the standard error, making true effects easier to detect",
            "increases α",
            "raises Type II error",
            "changes the null"
          ],
          "correctAnswer": 0,
          "explanation": "A larger sample reduces variability, so a genuine effect is more likely to produce a significant result—higher power.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-6",
          "question": "A confidence interval and a two-sided significance test at the corresponding level will agree in that",
          "options": [
            "if the null value is outside the interval, the test rejects H₀",
            "they always disagree",
            "the interval gives the p-value",
            "they are unrelated"
          ],
          "correctAnswer": 0,
          "explanation": "A value outside a 95% CI corresponds to rejecting that value as the null at the 5% level (two-sided)—the two methods are consistent.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-7",
          "question": "Statistical significance does not necessarily imply practical importance because",
          "options": [
            "a very large sample can make a tiny, unimportant effect statistically significant",
            "significance always means large effects",
            "p-values measure importance",
            "effect size is irrelevant"
          ],
          "correctAnswer": 0,
          "explanation": "With a large sample, even a trivial effect can be statistically significant, so significance must be distinguished from practical importance (effect size).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-8",
          "question": "The consequences of a Type I versus Type II error depend on",
          "options": [
            "the context and relative costs of each error",
            "the sample size only",
            "the p-value only",
            "nothing"
          ],
          "correctAnswer": 0,
          "explanation": "Which error is worse depends on the real-world context (e.g., a false positive vs. false negative in medical testing).",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-9",
          "question": "A 90% confidence interval is ___ than a 99% interval from the same data.",
          "options": [
            "narrower",
            "wider",
            "the same width",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "Lower confidence uses a smaller critical value, producing a narrower interval.",
          "difficulty": "hard"
        },
        {
          "id": "q-u6-hard-10",
          "question": "To decrease the margin of error without lowering the confidence level, you should",
          "options": [
            "increase the sample size",
            "increase the confidence level",
            "decrease the sample size",
            "change the parameter"
          ],
          "correctAnswer": 0,
          "explanation": "A larger sample reduces the standard error and thus the margin of error while keeping the confidence level fixed.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 7,
      "title": "Inference for Quantitative Data: Means",
      "questions": [
        {
          "id": "q-u7-easy-1",
          "question": "Inference about a population mean when σ is unknown uses the",
          "options": [
            "t-distribution",
            "standard normal only",
            "binomial",
            "chi-square"
          ],
          "correctAnswer": 0,
          "explanation": "When the population standard deviation is unknown, inference about the mean uses the t-distribution.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-2",
          "question": "The t-distribution is ___ than the normal distribution.",
          "options": [
            "wider (more spread, heavier tails)",
            "narrower",
            "identical",
            "skewed"
          ],
          "correctAnswer": 0,
          "explanation": "The t-distribution has heavier tails than the normal, accounting for extra uncertainty from estimating σ.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-3",
          "question": "The number of degrees of freedom for a one-sample t-procedure is",
          "options": [
            "n − 1",
            "n",
            "n + 1",
            "2n"
          ],
          "correctAnswer": 0,
          "explanation": "A one-sample t-test uses n − 1 degrees of freedom.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-4",
          "question": "As degrees of freedom increase, the t-distribution approaches the",
          "options": [
            "standard normal distribution",
            "binomial",
            "uniform",
            "chi-square"
          ],
          "correctAnswer": 0,
          "explanation": "With more degrees of freedom (larger samples), the t-distribution converges to the standard normal.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-5",
          "question": "A confidence interval for a mean has the form",
          "options": [
            "x̄ ± t*·(s/√n)",
            "x̄ ± z·σ",
            "p̂ ± margin",
            "μ ± s"
          ],
          "correctAnswer": 0,
          "explanation": "A one-sample t-interval for the mean is x̄ ± t*·(s/√n).",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-6",
          "question": "The point estimate for a population mean is",
          "options": [
            "the sample mean x̄",
            "the median",
            "the sample proportion",
            "the range"
          ],
          "correctAnswer": 0,
          "explanation": "The sample mean x̄ estimates the population mean μ.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-7",
          "question": "A condition for t-inference about a mean is that the data come from a",
          "options": [
            "random sample and roughly normal population (or large n)",
            "biased sample",
            "census",
            "non-random group"
          ],
          "correctAnswer": 0,
          "explanation": "t-procedures require random sampling and approximate normality (or a large enough sample via the CLT).",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-8",
          "question": "A matched-pairs t-test analyzes",
          "options": [
            "the differences within pairs",
            "two independent samples",
            "proportions",
            "categories"
          ],
          "correctAnswer": 0,
          "explanation": "A matched-pairs (paired) t-test examines the mean of the differences within paired observations.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-9",
          "question": "The standard error of the sample mean (with s) is",
          "options": [
            "s/√n",
            "s",
            "s·n",
            "s²"
          ],
          "correctAnswer": 0,
          "explanation": "The estimated standard error of the mean is s/√n.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-easy-10",
          "question": "A two-sample t-test compares",
          "options": [
            "the means of two independent groups",
            "two proportions",
            "a mean to a proportion",
            "categories"
          ],
          "correctAnswer": 0,
          "explanation": "A two-sample t-test compares the means of two independent groups.",
          "difficulty": "easy"
        },
        {
          "id": "q-u7-medium-1",
          "question": "A sample of 25 has mean 50 and standard deviation 10. The standard error of the mean is",
          "options": [
            "2",
            "10",
            "0.4",
            "50"
          ],
          "correctAnswer": 0,
          "explanation": "SE = s/√n = 10/√25 = 10/5 = 2.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-2",
          "question": "Why use a t-distribution instead of z when σ is unknown?",
          "options": [
            "Estimating σ with s adds uncertainty, which the wider t-distribution accounts for",
            "t is always smaller",
            "z requires a proportion",
            "t ignores the sample"
          ],
          "correctAnswer": 0,
          "explanation": "Using the sample standard deviation s introduces extra variability, and the heavier-tailed t-distribution accounts for it.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-3",
          "question": "A paired design is appropriate when data are",
          "options": [
            "collected in natural pairs (e.g., before/after on the same subjects)",
            "two independent groups",
            "categorical",
            "proportions"
          ],
          "correctAnswer": 0,
          "explanation": "Paired procedures fit data that come in matched pairs, such as repeated measures on the same subjects.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-4",
          "question": "A 95% t-confidence interval for a mean does not contain 0. This suggests",
          "options": [
            "the mean is significantly different from 0",
            "the mean equals 0",
            "no conclusion",
            "a Type I error"
          ],
          "correctAnswer": 0,
          "explanation": "If 0 is outside the interval, the mean is significantly different from 0 at the corresponding level.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-5",
          "question": "Increasing the sample size in a t-interval makes the interval",
          "options": [
            "narrower",
            "wider",
            "the same",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "A larger n reduces the standard error and the t-critical value approaches z, narrowing the interval.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-6",
          "question": "The test statistic for a one-sample t-test is",
          "options": [
            "t = (x̄ − μ₀)/(s/√n)",
            "z = (p̂ − p)/SE",
            "χ² = Σ(O−E)²/E",
            "t = x̄ − μ"
          ],
          "correctAnswer": 0,
          "explanation": "The one-sample t-statistic is t = (x̄ − μ₀)/(s/√n).",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-7",
          "question": "For a two-sample t-test, the samples must be",
          "options": [
            "independent of each other",
            "paired",
            "the same",
            "dependent"
          ],
          "correctAnswer": 0,
          "explanation": "A two-sample t-test requires the two groups to be independent.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-8",
          "question": "A skewed population requires a ___ sample for the t-procedure to be valid.",
          "options": [
            "larger",
            "smaller",
            "zero",
            "paired"
          ],
          "correctAnswer": 0,
          "explanation": "With a skewed population, a larger sample is needed for the CLT to make the sampling distribution approximately normal.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-9",
          "question": "When constructing a confidence interval for a mean difference in a paired design, you analyze",
          "options": [
            "the sample of differences as a single sample",
            "two separate samples",
            "proportions",
            "categories"
          ],
          "correctAnswer": 0,
          "explanation": "A paired analysis treats the within-pair differences as one sample and applies one-sample t-procedures.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-medium-10",
          "question": "A larger t-statistic (in absolute value) generally corresponds to a ___ p-value.",
          "options": [
            "smaller",
            "larger",
            "zero",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "A larger absolute t-value lies farther in the tail, giving a smaller p-value.",
          "difficulty": "medium"
        },
        {
          "id": "q-u7-hard-1",
          "question": "A 95% t-interval for a mean is (12.5, 17.5). The point estimate (sample mean) is",
          "options": [
            "15",
            "12.5",
            "17.5",
            "2.5"
          ],
          "correctAnswer": 0,
          "explanation": "The point estimate is the interval's center: (12.5 + 17.5)/2 = 15.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-2",
          "question": "Why is a paired t-test often more powerful than a two-sample t-test for the same data?",
          "options": [
            "Pairing removes variability between subjects, reducing the standard error",
            "it uses more data",
            "it ignores variation",
            "it always has a larger sample"
          ],
          "correctAnswer": 0,
          "explanation": "By comparing within pairs, the paired test controls for subject-to-subject variability, reducing noise and increasing power.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-3",
          "question": "A one-sample t-test gives t = 2.5 with 20 degrees of freedom. This t-value is",
          "options": [
            "fairly large, suggesting evidence against H₀",
            "small",
            "exactly the critical value always",
            "irrelevant"
          ],
          "correctAnswer": 0,
          "explanation": "A t of 2.5 is beyond typical 5% critical values (~2.09 for df = 20), suggesting significant evidence against H₀.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-4",
          "question": "The robustness of t-procedures means they",
          "options": [
            "work reasonably well even when normality is not perfectly met, especially for larger samples",
            "require perfect normality",
            "only work for proportions",
            "are never valid"
          ],
          "correctAnswer": 0,
          "explanation": "t-procedures are robust—they give approximately correct results even with some departure from normality, particularly for larger samples.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-5",
          "question": "When comparing two means, if the confidence interval for the difference contains 0,",
          "options": [
            "there is no significant difference between the means",
            "the means are definitely equal",
            "the means are significantly different",
            "a Type I error occurred"
          ],
          "correctAnswer": 0,
          "explanation": "If 0 is a plausible value for the difference, there is no statistically significant difference between the two means.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-6",
          "question": "A confidence interval for a mean with df = 15 uses a t* that is ___ the z* for the same confidence level.",
          "options": [
            "larger than",
            "smaller than",
            "equal to",
            "unrelated to"
          ],
          "correctAnswer": 0,
          "explanation": "For finite df, the t-critical value is larger than the corresponding z-value, reflecting extra uncertainty.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-7",
          "question": "Which condition is most important to check before using a t-test with a small sample?",
          "options": [
            "that the data are approximately normal with no strong skew/outliers",
            "that n > 100",
            "that σ is known",
            "that the proportion is 0.5"
          ],
          "correctAnswer": 0,
          "explanation": "With small samples, the normality condition matters most since the CLT has not yet made the sampling distribution normal.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-8",
          "question": "The width of a t-confidence interval depends on",
          "options": [
            "the sample size, standard deviation, and confidence level",
            "only the mean",
            "only the sample size",
            "the population size"
          ],
          "correctAnswer": 0,
          "explanation": "Interval width is affected by n, the variability (s), and the chosen confidence level (which sets t*).",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-9",
          "question": "A study compares a treatment and control group's means with a two-sample t-test. A significant result allows a causal conclusion only if",
          "options": [
            "subjects were randomly assigned to groups",
            "the sample was large",
            "the data were normal",
            "the means were far apart"
          ],
          "correctAnswer": 0,
          "explanation": "Causal conclusions require random assignment; statistical significance alone does not establish causation.",
          "difficulty": "hard"
        },
        {
          "id": "q-u7-hard-10",
          "question": "Why does a smaller standard deviation lead to a narrower confidence interval for the mean?",
          "options": [
            "Less variability means a smaller standard error, so the estimate is more precise",
            "it increases the sample size",
            "it changes the mean",
            "it raises the confidence level"
          ],
          "correctAnswer": 0,
          "explanation": "A smaller s reduces the standard error (s/√n), producing a more precise, narrower interval.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 8,
      "title": "Inference for Categorical Data: Chi-Square",
      "questions": [
        {
          "id": "q-u8-easy-1",
          "question": "A chi-square test is used for",
          "options": [
            "categorical data",
            "quantitative means",
            "a single proportion only",
            "correlation"
          ],
          "correctAnswer": 0,
          "explanation": "Chi-square tests analyze counts of categorical data.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-2",
          "question": "The chi-square goodness-of-fit test compares observed counts to",
          "options": [
            "expected counts under a hypothesized distribution",
            "a mean",
            "a proportion",
            "the median"
          ],
          "correctAnswer": 0,
          "explanation": "The goodness-of-fit test checks whether observed category counts match those expected under a claimed distribution.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-3",
          "question": "The chi-square statistic is calculated as",
          "options": [
            "Σ (observed − expected)² / expected",
            "Σ (O − E)",
            "Σ O/E",
            "Σ E − O"
          ],
          "correctAnswer": 0,
          "explanation": "χ² = Σ (O − E)²/E, summed over all categories.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-4",
          "question": "A larger chi-square statistic indicates",
          "options": [
            "greater difference between observed and expected",
            "a perfect fit",
            "no difference",
            "a small sample"
          ],
          "correctAnswer": 0,
          "explanation": "A larger χ² means the observed counts differ more from the expected—stronger evidence against H₀.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-5",
          "question": "The chi-square test of independence examines whether two categorical variables are",
          "options": [
            "associated or independent",
            "equal in mean",
            "normally distributed",
            "proportional"
          ],
          "correctAnswer": 0,
          "explanation": "The test of independence assesses whether two categorical variables are related.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-6",
          "question": "Chi-square values are always",
          "options": [
            "non-negative (≥ 0)",
            "negative",
            "between −1 and 1",
            "greater than 1"
          ],
          "correctAnswer": 0,
          "explanation": "Because it sums squared differences, χ² is always non-negative.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-7",
          "question": "A condition for a chi-square test is that all expected counts are",
          "options": [
            "at least 5 (or another minimum)",
            "less than 5",
            "exactly equal",
            "zero"
          ],
          "correctAnswer": 0,
          "explanation": "A common condition is that all expected cell counts be at least 5 for the chi-square approximation to hold.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-8",
          "question": "The degrees of freedom for a goodness-of-fit test with k categories is",
          "options": [
            "k − 1",
            "k",
            "k + 1",
            "2k"
          ],
          "correctAnswer": 0,
          "explanation": "Goodness-of-fit df = (number of categories) − 1 = k − 1.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-9",
          "question": "A small p-value in a chi-square test indicates",
          "options": [
            "evidence against the null hypothesis",
            "a good fit",
            "no association",
            "a large expected count"
          ],
          "correctAnswer": 0,
          "explanation": "A small p-value provides evidence against H₀ (e.g., against 'good fit' or 'independence').",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-easy-10",
          "question": "The chi-square distribution is",
          "options": [
            "right-skewed (especially for small df)",
            "symmetric",
            "left-skewed",
            "uniform"
          ],
          "correctAnswer": 0,
          "explanation": "The chi-square distribution is right-skewed, becoming more symmetric as degrees of freedom increase.",
          "difficulty": "easy"
        },
        {
          "id": "q-u8-medium-1",
          "question": "In a chi-square test of independence with a table of r rows and c columns, the degrees of freedom is",
          "options": [
            "(r − 1)(c − 1)",
            "rc",
            "r + c",
            "rc − 1"
          ],
          "correctAnswer": 0,
          "explanation": "The df for a test of independence is (r − 1)(c − 1).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-2",
          "question": "The expected count for a cell in a two-way table is",
          "options": [
            "(row total × column total) / grand total",
            "row total × column total",
            "the observed count",
            "the grand total"
          ],
          "correctAnswer": 0,
          "explanation": "Expected count = (row total × column total) / grand total.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-3",
          "question": "A goodness-of-fit test with 4 categories has how many degrees of freedom?",
          "options": [
            "3",
            "4",
            "5",
            "1"
          ],
          "correctAnswer": 0,
          "explanation": "df = k − 1 = 4 − 1 = 3.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-4",
          "question": "If a chi-square test yields a p-value of 0.02 with α = 0.05, you should",
          "options": [
            "reject H₀",
            "fail to reject H₀",
            "accept H₀",
            "increase the sample"
          ],
          "correctAnswer": 0,
          "explanation": "Since 0.02 < 0.05, reject the null hypothesis.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-5",
          "question": "The chi-square test of homogeneity compares",
          "options": [
            "the distribution of a categorical variable across several populations",
            "two means",
            "a mean and a proportion",
            "correlations"
          ],
          "correctAnswer": 0,
          "explanation": "The test of homogeneity checks whether the distribution of a categorical variable is the same across different populations or groups.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-6",
          "question": "If observed and expected counts are identical in every cell, the chi-square statistic is",
          "options": [
            "0",
            "1",
            "large",
            "undefined"
          ],
          "correctAnswer": 0,
          "explanation": "When O = E everywhere, each term (O−E)²/E is 0, so χ² = 0.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-7",
          "question": "A component of the chi-square statistic that is large indicates",
          "options": [
            "a category where observed differs greatly from expected",
            "a good fit in that category",
            "zero contribution",
            "a small sample"
          ],
          "correctAnswer": 0,
          "explanation": "A large individual (O−E)²/E term flags a category contributing most to the difference from expected.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-8",
          "question": "The null hypothesis for a chi-square test of independence states that the two variables are",
          "options": [
            "independent (not associated)",
            "associated",
            "equal",
            "normally distributed"
          ],
          "correctAnswer": 0,
          "explanation": "H₀ for the independence test is that the two categorical variables are independent.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-9",
          "question": "Which type of data is inappropriate for a chi-square test?",
          "options": [
            "quantitative measurements like heights",
            "counts in categories",
            "frequencies",
            "categorical outcomes"
          ],
          "correctAnswer": 0,
          "explanation": "Chi-square tests use categorical counts; quantitative measurements require different methods (like t-tests).",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-medium-10",
          "question": "Increasing the sample size (with the same proportions) generally makes the chi-square statistic",
          "options": [
            "larger",
            "smaller",
            "zero",
            "negative"
          ],
          "correctAnswer": 0,
          "explanation": "With larger counts, the same relative differences produce a larger χ², making it easier to detect associations.",
          "difficulty": "medium"
        },
        {
          "id": "q-u8-hard-1",
          "question": "A 2×3 contingency table has how many degrees of freedom for a chi-square test?",
          "options": [
            "2",
            "6",
            "5",
            "1"
          ],
          "correctAnswer": 0,
          "explanation": "df = (2−1)(3−1) = 1 × 2 = 2.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-2",
          "question": "What distinguishes a chi-square test of homogeneity from a test of independence?",
          "options": [
            "Homogeneity samples separate populations; independence samples one population and classifies by two variables",
            "they are identical",
            "homogeneity uses means",
            "independence uses one variable"
          ],
          "correctAnswer": 0,
          "explanation": "Homogeneity compares one categorical variable's distribution across several independently sampled populations; independence samples one population and cross-classifies by two variables.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-3",
          "question": "An expected count in a cell is (30 × 40)/100. This equals",
          "options": [
            "12",
            "70",
            "1200",
            "10"
          ],
          "correctAnswer": 0,
          "explanation": "Expected = (row × column)/total = (30 × 40)/100 = 1200/100 = 12.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-4",
          "question": "Why must expected counts (not observed) meet the minimum count condition?",
          "options": [
            "The chi-square approximation relies on expected counts being large enough for the distribution to apply",
            "observed counts are irrelevant",
            "only observed counts matter",
            "the condition is arbitrary"
          ],
          "correctAnswer": 0,
          "explanation": "The chi-square distribution approximates the statistic's sampling distribution well only when expected counts are sufficiently large (typically ≥ 5).",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-5",
          "question": "A significant chi-square test of independence tells you the variables are associated but not",
          "options": [
            "the nature or direction of the association",
            "that they are related",
            "the p-value",
            "the degrees of freedom"
          ],
          "correctAnswer": 0,
          "explanation": "A significant result shows an association exists but not its direction or form—examining the data (or components) is needed for that.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-6",
          "question": "If a goodness-of-fit test fails to reject H₀, we conclude",
          "options": [
            "the observed data are consistent with the hypothesized distribution",
            "the distribution is proven correct",
            "the fit is perfect",
            "the variables are independent"
          ],
          "correctAnswer": 0,
          "explanation": "Failing to reject means the data are consistent with (not proof of) the claimed distribution.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-7",
          "question": "Why does a chi-square test not work well with very small expected counts?",
          "options": [
            "The sampling distribution of the statistic is poorly approximated by the chi-square distribution",
            "the statistic becomes negative",
            "the p-value is exact",
            "small counts increase power"
          ],
          "correctAnswer": 0,
          "explanation": "With small expected counts, the chi-square distribution poorly approximates the true sampling distribution, making the test unreliable.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-8",
          "question": "Examining the individual components (O−E)²/E after a significant chi-square test helps identify",
          "options": [
            "which categories contribute most to the association",
            "the mean",
            "the standard deviation",
            "the correlation"
          ],
          "correctAnswer": 0,
          "explanation": "The largest components reveal which cells (categories) deviate most from expectation, driving the significant result.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-9",
          "question": "A chi-square goodness-of-fit test is essentially checking whether",
          "options": [
            "one categorical variable's distribution matches a claimed set of proportions",
            "two means are equal",
            "a correlation is zero",
            "a slope is significant"
          ],
          "correctAnswer": 0,
          "explanation": "Goodness-of-fit tests whether the observed distribution of a single categorical variable fits hypothesized proportions.",
          "difficulty": "hard"
        },
        {
          "id": "q-u8-hard-10",
          "question": "Combining categories with small expected counts before a chi-square test can help by",
          "options": [
            "ensuring the expected-count condition is met",
            "increasing the p-value artificially",
            "biasing the result",
            "removing the null hypothesis"
          ],
          "correctAnswer": 0,
          "explanation": "Merging sparse categories raises their expected counts to meet the minimum condition, making the chi-square approximation valid.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 9,
      "title": "Inference for Quantitative Data: Slopes",
      "questions": [
        {
          "id": "q-u9-easy-1",
          "question": "Inference for the slope of a regression line concerns",
          "options": [
            "whether there is a linear relationship in the population",
            "the mean",
            "a proportion",
            "categorical data"
          ],
          "correctAnswer": 0,
          "explanation": "Inference for slope tests whether a true linear relationship exists between the variables in the population.",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-2",
          "question": "The null hypothesis for a slope test is typically",
          "options": [
            "the slope β = 0 (no linear relationship)",
            "β = 1",
            "the slope is large",
            "the correlation is 1"
          ],
          "correctAnswer": 0,
          "explanation": "H₀: β = 0 means there is no linear relationship between x and y.",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-3",
          "question": "A confidence interval for the slope estimates",
          "options": [
            "the true population slope",
            "the y-intercept",
            "the correlation",
            "the mean of y"
          ],
          "correctAnswer": 0,
          "explanation": "A slope confidence interval gives a plausible range for the true regression slope β.",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-4",
          "question": "The test statistic for a slope is",
          "options": [
            "t = b / SE(b)",
            "z = p̂/SE",
            "χ²",
            "t = x̄ − μ"
          ],
          "correctAnswer": 0,
          "explanation": "The slope t-statistic is t = b/SE(b), where b is the sample slope.",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-5",
          "question": "Inference for regression requires the data to be from a",
          "options": [
            "random sample or randomized experiment",
            "biased sample",
            "census",
            "single point"
          ],
          "correctAnswer": 0,
          "explanation": "Valid regression inference requires random sampling or random assignment.",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-6",
          "question": "If the confidence interval for the slope does not contain 0, there is evidence of",
          "options": [
            "a significant linear relationship",
            "no relationship",
            "a curved relationship only",
            "a Type I error"
          ],
          "correctAnswer": 0,
          "explanation": "A slope interval excluding 0 indicates a statistically significant linear relationship.",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-7",
          "question": "The degrees of freedom for a slope t-test is",
          "options": [
            "n − 2",
            "n − 1",
            "n",
            "2n"
          ],
          "correctAnswer": 0,
          "explanation": "Regression inference for the slope uses n − 2 degrees of freedom.",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-8",
          "question": "A residual plot is used to check",
          "options": [
            "the linearity and equal-variance conditions",
            "the correlation",
            "the mean",
            "the sample size"
          ],
          "correctAnswer": 0,
          "explanation": "Residual plots help verify the conditions (linearity, constant variance) for regression inference.",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-9",
          "question": "The conditions for regression inference are often remembered as",
          "options": [
            "Linear, Independent, Normal, Equal variance, Random (LINER)",
            "only random",
            "only normal",
            "only linear"
          ],
          "correctAnswer": 0,
          "explanation": "The conditions: Linearity, Independence, Normality of residuals, Equal variance, and Random data (LINER).",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-easy-10",
          "question": "A significant slope indicates that x is a useful",
          "options": [
            "predictor of y",
            "cause of y always",
            "the same as y",
            "constant"
          ],
          "correctAnswer": 0,
          "explanation": "A significant slope means x is a useful linear predictor of y (though not necessarily a cause).",
          "difficulty": "easy"
        },
        {
          "id": "q-u9-medium-1",
          "question": "A slope of 2.5 with a standard error of 0.5 gives a t-statistic of",
          "options": [
            "5",
            "2.5",
            "0.2",
            "1.25"
          ],
          "correctAnswer": 0,
          "explanation": "t = b/SE(b) = 2.5/0.5 = 5.",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-2",
          "question": "A 95% confidence interval for a slope is (1.2, 3.8). This suggests the slope is",
          "options": [
            "positive and significantly different from 0",
            "zero",
            "negative",
            "not significant"
          ],
          "correctAnswer": 0,
          "explanation": "Since the interval is entirely above 0, the slope is significantly positive.",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-3",
          "question": "The standard error of the slope decreases when",
          "options": [
            "the sample size increases or data has less scatter",
            "the sample decreases",
            "scatter increases",
            "the slope is zero"
          ],
          "correctAnswer": 0,
          "explanation": "More data and less scatter (smaller residual variability) reduce the standard error of the slope.",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-4",
          "question": "Even with a significant slope, a causal conclusion requires",
          "options": [
            "a randomized experiment",
            "a large sample",
            "a high correlation",
            "a small p-value"
          ],
          "correctAnswer": 0,
          "explanation": "Statistical significance shows association; causation requires random assignment in an experiment.",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-5",
          "question": "A p-value of 0.001 for a slope test provides",
          "options": [
            "strong evidence of a linear relationship",
            "no evidence",
            "weak evidence",
            "evidence of no relationship"
          ],
          "correctAnswer": 0,
          "explanation": "A very small p-value strongly suggests the slope is not zero, indicating a linear relationship.",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-6",
          "question": "The condition of equal variance (homoscedasticity) means the residuals should have",
          "options": [
            "roughly constant spread across all x-values",
            "increasing spread",
            "a curved pattern",
            "zero spread"
          ],
          "correctAnswer": 0,
          "explanation": "Equal variance requires the residuals' spread to be about the same for all values of x.",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-7",
          "question": "If the residual plot shows a fan (increasing spread) shape, the condition violated is",
          "options": [
            "equal variance",
            "linearity",
            "independence",
            "normality"
          ],
          "correctAnswer": 0,
          "explanation": "A fanning pattern indicates non-constant variance, violating the equal-variance condition.",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-8",
          "question": "For inference about the slope, the standard error formula involves",
          "options": [
            "the scatter of points about the line and the spread of x",
            "only the mean of y",
            "the sample proportion",
            "the median"
          ],
          "correctAnswer": 0,
          "explanation": "SE(b) depends on the residual standard deviation and the variability in the x-values.",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-9",
          "question": "A regression output shows slope = 4, SE = 2, and df = 18. Roughly, the slope is significant if t exceeds about 2. Here t =",
          "options": [
            "2 (borderline significant)",
            "4",
            "8",
            "0.5"
          ],
          "correctAnswer": 0,
          "explanation": "t = 4/2 = 2, which is near the critical value—borderline significant at the 5% level.",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-medium-10",
          "question": "Interpreting a slope confidence interval of (0.5, 1.5) means we are confident that",
          "options": [
            "each unit increase in x is associated with a 0.5 to 1.5 increase in y",
            "x causes y",
            "the correlation is between 0.5 and 1.5",
            "the mean is 1"
          ],
          "correctAnswer": 0,
          "explanation": "The interval gives a plausible range for the predicted change in y per unit increase in x.",
          "difficulty": "medium"
        },
        {
          "id": "q-u9-hard-1",
          "question": "A regression slope has t = 3.2 with 20 df. Compared to a critical value of about 2.09 (5%), the result is",
          "options": [
            "significant (reject H₀: β = 0)",
            "not significant",
            "inconclusive",
            "impossible"
          ],
          "correctAnswer": 0,
          "explanation": "Since 3.2 > 2.09, the slope is significantly different from 0 at the 5% level.",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-2",
          "question": "Why must the residuals be approximately normal for slope inference (especially with small samples)?",
          "options": [
            "The t-procedure for the slope assumes normally distributed residuals",
            "residuals are always normal",
            "normality affects the mean only",
            "it is not required"
          ],
          "correctAnswer": 0,
          "explanation": "The t-distribution used for slope inference assumes the residuals (errors) are approximately normal, which matters most for small samples.",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-3",
          "question": "A slope significantly different from 0 combined with observational data allows us to conclude",
          "options": [
            "association, but not causation",
            "causation",
            "no relationship",
            "that x equals y"
          ],
          "correctAnswer": 0,
          "explanation": "With observational data, a significant slope establishes association only; confounding variables prevent a causal claim.",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-4",
          "question": "A curved pattern in the residual plot indicates that",
          "options": [
            "a linear model is not appropriate (linearity violated)",
            "the variance is constant",
            "the data are random",
            "the slope is significant"
          ],
          "correctAnswer": 0,
          "explanation": "A systematic curve in the residuals shows the relationship is nonlinear, violating the linearity condition for regression inference.",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-5",
          "question": "Widening a slope confidence interval (e.g., from 95% to 99%) makes it",
          "options": [
            "more likely to contain the true slope but less precise",
            "narrower",
            "more precise",
            "exclude 0"
          ],
          "correctAnswer": 0,
          "explanation": "Higher confidence gives a wider interval—more likely to capture the true value but less precise.",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-6",
          "question": "A larger sample size in regression inference generally",
          "options": [
            "reduces the standard error of the slope and increases power",
            "increases the standard error",
            "has no effect",
            "reduces power"
          ],
          "correctAnswer": 0,
          "explanation": "More data reduces SE(b), making it easier to detect a nonzero slope (greater power) and giving narrower intervals.",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-7",
          "question": "An influential outlier in a regression can affect slope inference by",
          "options": [
            "distorting the slope estimate and its standard error",
            "having no effect",
            "always increasing significance",
            "removing the relationship"
          ],
          "correctAnswer": 0,
          "explanation": "An influential outlier can substantially change the slope and standard error, distorting the inference.",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-8",
          "question": "The independence condition for regression inference is most likely violated with",
          "options": [
            "time-series data where consecutive observations are related",
            "a random sample",
            "independent measurements",
            "one observation"
          ],
          "correctAnswer": 0,
          "explanation": "Time-series or clustered data often have correlated (non-independent) observations, violating the independence condition.",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-9",
          "question": "The relationship between the slope t-test and the correlation is that they",
          "options": [
            "test the same thing (both assess linear association) and give the same p-value",
            "are unrelated",
            "test different things",
            "always disagree"
          ],
          "correctAnswer": 0,
          "explanation": "Testing whether the slope is zero is equivalent to testing whether the correlation is zero; they yield the same p-value.",
          "difficulty": "hard"
        },
        {
          "id": "q-u9-hard-10",
          "question": "Why is checking the conditions (LINER) essential before trusting regression inference?",
          "options": [
            "Violated conditions can invalidate the standard errors, p-values, and conclusions",
            "conditions never matter",
            "the software checks them",
            "only the slope matters"
          ],
          "correctAnswer": 0,
          "explanation": "If the regression conditions are not met, the calculated standard errors and p-values may be wrong, invalidating the inference.",
          "difficulty": "hard"
        }
      ]
    }
  ]
}
