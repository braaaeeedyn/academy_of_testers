import type { SubjectFrqSet } from './types'
import { pointBased } from './rubrics'

// AP Research is a performance-task course rather than a timed FRQ exam (AP Seminar's end-of-course
// exam is covered by the released 2025 questions in ./released).

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
