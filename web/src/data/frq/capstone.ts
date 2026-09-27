import type { SubjectFrqSet } from './types'
import { pointBased } from './rubrics'

// AP Seminar and Research are performance-task courses rather than traditional timed-FRQ exams.
// Seminar has an end-of-course written argument; these practices model that analysis/argument work.

export const AP_SEMINAR_FRQ: SubjectFrqSet = {
  subjectName: 'AP Seminar',
  note: 'Modeled on the AP Seminar end-of-course written tasks (analyzing and building an argument). Scored on the general argument-quality rubric below.',
  prompts: [
    {
      id: 'seminar-analyze-argument',
      essayType: 'Analyze an Argument',
      title: 'Analyze an author’s argument',
      year: 'Sample prompt',
      suggestedMinutes: 30,
      directions:
        'Read the source below. Then, in a well-written response, identify the author’s argument and'
        + ' analyze how the author uses reasoning and evidence to support it. Evaluate how convincing'
        + ' the argument is.',
      sourceText:
        'Source (columnist): “Cities should make public transit free. Fare collection costs money to'
        + ' administer, slows boarding, and deters exactly the low-income riders who most need'
        + ' transit. Cities that dropped fares saw ridership jump and traffic fall. The lost fare'
        + ' revenue is small next to the economic and environmental gains of getting people out of'
        + ' cars.”',
      rubric: pointBased([
        { name: 'Identifies argument', maxPoints: 1, criteria: 'Accurately states the author’s central claim (cities should make transit free).' },
        { name: 'Analyzes reasoning', maxPoints: 2, criteria: '1 point for identifying specific lines of reasoning/evidence the author uses; 1 point for explaining how they function to support the claim.' },
        { name: 'Evaluates', maxPoints: 2, criteria: '1 point for a reasoned evaluation of the argument’s strength; 1 point for identifying a limitation, assumption, or missing counter-evidence.' },
        { name: 'Communication', maxPoints: 1, criteria: 'Organized, clear response that stays grounded in the source.' },
      ]),
    },
  ],
}

export const AP_RESEARCH_FRQ: SubjectFrqSet = {
  subjectName: 'AP Research',
  note: 'AP Research is assessed by an academic paper (scored holistically 1–5) and a presentation, not a timed exam. Paste your finished paper for a rubric-grounded score, or use the design-justification drill to practice the reasoning the paper requires.',
  prompts: [
    {
      id: 'research-academic-paper',
      essayType: 'Academic Paper',
      title: 'Grade my academic paper',
      year: 'Holistic 1–5',
      suggestedMinutes: 0,
      longForm: true,
      directions:
        'Paste your completed AP Research academic paper below. It will be scored holistically on the'
        + ' AP Research Academic Paper rubric (a single 1–5 score), grounded in the official scoring'
        + ' levels and released sample papers. For the most accurate read, include your full paper —'
        + ' introduction and literature review, method, results/analysis, and conclusion.',
      rubric: pointBased([
        {
          name: 'Academic Paper (holistic 1–5)',
          maxPoints: 5,
          criteria:
            'Score the whole paper by best fit on the AP Research Academic Paper scale. '
            + '1 = Report on Existing Knowledge (overly broad topic; reports information, no method or new understanding). '
            + '2 = Report with Simplistic Use of a Method (narrowing scope not carried through; a method is named but used simplistically). '
            + '3 = Ineffectual Argument for a New Understanding (focused inquiry and method, but the new-understanding argument is unclear or unsupported). '
            + '4 = Well-Supported, Articulate Argument Conveying a New Understanding (focused inquiry, appropriate method, well-supported new understanding; conclusions may be narrow or limitations under-examined). '
            + '5 = Rich Analysis Addressing a Gap in the Research Base (focused gap-addressing inquiry, well-aligned method, rich analysis, compelling new understanding with attention to implications and limitations).',
        },
      ]),
    },
    {
      id: 'research-method-argument',
      essayType: 'Method & Argument',
      title: 'Justify a research design',
      year: 'Sample prompt',
      suggestedMinutes: 30,
      directions:
        'Propose a research question you could investigate, then justify a method for answering it and'
        + ' explain how you would build an evidence-based argument from your results. Respond to all parts.',
      rubric: pointBased([
        { name: 'Research question', maxPoints: 1, criteria: 'States a focused, researchable question with a clear scope.' },
        { name: 'Method', maxPoints: 2, criteria: '1 point for choosing a method appropriate to the question; 1 point for justifying why it fits and noting one limitation.' },
        { name: 'Argument', maxPoints: 2, criteria: '1 point for explaining how results would support a claim; 1 point for addressing how you would handle alternative explanations or bias.' },
        { name: 'Ethics/rigor', maxPoints: 1, criteria: 'Identifies one relevant ethical or validity consideration for the study.' },
      ]),
    },
  ],
}
