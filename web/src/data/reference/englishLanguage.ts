import type { SubjectReference } from './types'

export const AP_ENGLISH_LANGUAGE_REFERENCE: SubjectReference = {
  subjectName: 'AP English Language',
  note: 'Rhetorical vocabulary and exam structure for AP English Language & Composition.',
  glossary: [
    { term: 'Ethos', definition: 'An appeal to credibility or character — establishing the speaker as trustworthy or authoritative.' },
    { term: 'Pathos', definition: 'An appeal to the audience’s emotions to make an argument more persuasive.' },
    { term: 'Logos', definition: 'An appeal to logic and reason — evidence, data, and structured argument.' },
    { term: 'Rhetorical situation', definition: 'The context of a text: speaker, audience, purpose, exigence, and message (often remembered as SOAPS).' },
    { term: 'Exigence', definition: 'The issue, event, or problem that prompts the writer to speak or write.' },
    { term: 'Diction', definition: 'A writer’s specific word choice, which shapes tone and meaning.' },
    { term: 'Syntax', definition: 'The arrangement of words and sentence structure to create effect (e.g. short sentences for urgency).' },
    { term: 'Tone', definition: 'The writer’s attitude toward the subject or audience, conveyed through diction and detail.' },
    { term: 'Anaphora', definition: 'Repetition of a word or phrase at the beginning of successive clauses for emphasis.' },
    { term: 'Juxtaposition', definition: 'Placing two ideas, people, or images side by side to highlight contrast.' },
    { term: 'Concession & rebuttal', definition: 'Acknowledging an opposing view (concession) then answering it (rebuttal) to strengthen an argument.' },
    { term: 'Qualify', definition: 'To argue a position while accepting limits or conditions — neither fully agreeing nor disagreeing.' },
  ],
  frequentlyTested: [
    { topic: 'Reading (MCQ)', weight: '~45% of MCQ', note: 'Analyzing a writer’s rhetorical choices, purpose, and argument in nonfiction passages.' },
    { topic: 'Writing (MCQ)', weight: '~55% of MCQ', note: 'Revising a draft: evidence use, transitions, sentence-level clarity, and rhetorical effectiveness.' },
    { topic: 'Synthesis essay (FRQ 1)', weight: '1 of 3 essays', note: 'Build an argument using at least three provided sources; cite them accurately.' },
    { topic: 'Rhetorical analysis (FRQ 2)', weight: '1 of 3 essays', note: 'Analyze how a writer’s choices build their argument — analyze, don’t summarize.' },
    { topic: 'Argument essay (FRQ 3)', weight: '1 of 3 essays', note: 'Take and defend a position with your own evidence and a clear line of reasoning.' },
  ],
}
