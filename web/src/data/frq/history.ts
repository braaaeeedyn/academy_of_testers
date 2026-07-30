import type { SubjectFrqSet } from './types'
import { leqRubric, dbqRubric, saqRubric } from './rubrics'

// AP World, European, and African American Studies free responses use the standard history rubrics:
// LEQ (6 pts) and SAQ (3 pts). World History adds a DBQ (7 pts) with a compact practice document set.

export const AP_WORLD_HISTORY_FRQ: SubjectFrqSet = {
  subjectName: 'AP World History',
  note: 'Scored on the official AP World History LEQ (6), DBQ (7), and SAQ (3) rubrics. DBQ documents here are compact practice summaries; paste a released document set to practice the real thing.',
  prompts: [
    {
      id: 'whap-leq-trade',
      essayType: 'Long Essay (LEQ)',
      title: 'Trade networks, 1200–1450',
      year: 'Sample prompt',
      suggestedMinutes: 40,
      directions:
        'Evaluate the extent to which trade networks (such as the Silk Roads, Indian Ocean, or'
        + ' trans-Saharan routes) transformed societies in the period from 1200 to 1450. Support your'
        + ' argument with specific evidence and a historical reasoning skill.',
      rubric: leqRubric(),
    },
    {
      id: 'whap-dbq-industrial',
      essayType: 'Document-Based (DBQ)',
      title: 'Responses to industrialization',
      year: 'Sample prompt (practice documents)',
      suggestedMinutes: 60,
      directions:
        'Using the documents and your own knowledge, evaluate the extent to which industrialization'
        + ' changed the lives of workers in the nineteenth century. Use at least three documents to'
        + ' support an argument, cite them, and bring in evidence beyond the documents.',
      sourceText:
        'Doc 1 (factory owner, 1835): Mechanized looms let us produce cloth faster and cheaper than any hand-weaver could.\n\n'
        + 'Doc 2 (factory inspector’s report, 1842): Children of nine work twelve-hour shifts amid dangerous machinery; accidents are common.\n\n'
        + 'Doc 3 (worker’s petition, 1848): We ask only for shorter hours and wages that keep pace with the price of bread.\n\n'
        + 'Doc 4 (economist, 1850): The factory system has raised total output and, over time, the general standard of living.\n\n'
        + 'Doc 5 (reformer, 1844): Crowded industrial cities breed disease; sanitation has not kept pace with the factories.',
      rubric: dbqRubric(),
    },
    {
      id: 'whap-saq-empires',
      essayType: 'Short Answer (SAQ)',
      title: 'Land-based empires, 1450–1750',
      year: 'Sample prompt',
      suggestedMinutes: 12,
      directions: 'Answer parts A, B, and C about the expansion of land-based empires from 1450 to 1750.',
      rubric: saqRubric(
        'Identify ONE method a land-based empire used to consolidate or legitimize its power.',
        'Explain how ONE such method helped an empire expand or maintain control.',
        'Explain ONE similarity OR difference between how two land-based empires governed diverse populations.'
      ),
    },
  ],
}

export const AP_EUROPEAN_HISTORY_FRQ: SubjectFrqSet = {
  subjectName: 'AP European History',
  note: 'Scored on the official AP European History LEQ (6) and SAQ (3) rubrics. Paste a released DBQ to practice document analysis.',
  prompts: [
    {
      id: 'euro-leq-reformation',
      essayType: 'Long Essay (LEQ)',
      title: 'Effects of the Protestant Reformation',
      year: 'Sample prompt',
      suggestedMinutes: 40,
      directions:
        'Evaluate the extent to which the Protestant Reformation changed European society in the'
        + ' sixteenth century. Support your argument with specific evidence and a reasoning skill.',
      rubric: leqRubric(),
    },
    {
      id: 'euro-saq-enlightenment',
      essayType: 'Short Answer (SAQ)',
      title: 'The Enlightenment',
      year: 'Sample prompt',
      suggestedMinutes: 12,
      directions: 'Answer parts A, B, and C about the Enlightenment and its impact.',
      rubric: saqRubric(
        'Identify ONE major idea associated with Enlightenment thinkers.',
        'Explain how ONE Enlightenment idea challenged existing political or religious authority.',
        'Explain ONE way Enlightenment ideas influenced a later political revolution.'
      ),
    },
  ],
}

export const AP_AFRICAN_AMERICAN_STUDIES_FRQ: SubjectFrqSet = {
  subjectName: 'AP African American Studies',
  note: 'Modeled on the AP African American Studies free-response and short-answer formats. This is a newer course — rubrics here follow the general document-analysis and short-answer structures.',
  prompts: [
    {
      id: 'afam-saq-migration',
      essayType: 'Short Answer (SAQ)',
      title: 'The Great Migration',
      year: 'Sample prompt',
      suggestedMinutes: 12,
      directions: 'Answer parts A, B, and C about the Great Migration of the early twentieth century.',
      rubric: saqRubric(
        'Identify ONE cause of the Great Migration.',
        'Describe ONE way the Great Migration reshaped African American communities in the North.',
        'Explain ONE cultural or political effect of the Great Migration.'
      ),
    },
    {
      id: 'afam-leq-resistance',
      essayType: 'Long Essay',
      title: 'Strategies of resistance',
      year: 'Sample prompt',
      suggestedMinutes: 40,
      directions:
        'Evaluate the extent to which strategies of resistance to oppression changed for African'
        + ' Americans across the nineteenth and twentieth centuries. Support your argument with'
        + ' specific evidence and a clear line of reasoning.',
      rubric: leqRubric(),
    },
  ],
}
