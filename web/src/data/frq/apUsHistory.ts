import type { SubjectFrqSet } from './types'

// AP U.S. History Long Essay Question (LEQ) — the official 6-point rubric:
// Thesis (1) · Contextualization (1) · Evidence (0–2) · Analysis & Reasoning (0–2).

export const AP_US_HISTORY_FRQ: SubjectFrqSet = {
  subjectName: 'AP US History',
  note:
    'Scored on the official APUSH Long Essay (LEQ) 6-point rubric. Paste any released LEQ prompt'
    + ' into the box to practice it with the same rubric.',
  prompts: [
    {
      id: 'apush-leq-industrialization',
      essayType: 'Long Essay (LEQ)',
      title: 'Effects of industrialization, 1865–1900',
      year: 'Sample prompt',
      suggestedMinutes: 40,
      directions:
        'Evaluate the extent to which industrialization changed American society in the period from'
        + ' 1865 to 1900. In your response you should do the following: respond to the prompt with a'
        + ' historically defensible thesis that establishes a line of reasoning; describe a broader'
        + ' historical context; support your argument with specific and relevant evidence; and use a'
        + ' historical reasoning skill (such as causation or continuity/change) to frame or structure'
        + ' the argument.',
      rubric: [
        {
          name: 'Thesis / Claim',
          maxPoints: 1,
          criteria:
            'Responds with a historically defensible thesis that establishes a line of reasoning. A'
            + ' restatement of the prompt or a phrase without a line of reasoning earns 0.',
        },
        {
          name: 'Contextualization',
          maxPoints: 1,
          criteria:
            'Describes a broader historical context relevant to the prompt (events/developments'
            + ' before, during, or after the time frame). A single phrase or passing reference does'
            + ' not earn the point.',
        },
        {
          name: 'Evidence',
          maxPoints: 2,
          criteria:
            '0–2. 1 point for at least two specific, relevant historical examples. 2 points for using'
            + ' that evidence to support an argument in response to the prompt (not merely listing'
            + ' facts). Vague or inaccurate evidence earns 0.',
        },
        {
          name: 'Analysis & Reasoning',
          maxPoints: 2,
          criteria:
            '0–2. 1 point for using a historical reasoning skill (causation, comparison, or'
            + ' continuity and change) to frame or structure the argument. 2 points for demonstrating'
            + ' a complex understanding (e.g. analyzing multiple variables, nuance, corroboration,'
            + ' or change over time) sustained throughout. The 2nd point is rare — withhold unless'
            + ' clearly earned.',
        },
      ],
    },
  ],
}
