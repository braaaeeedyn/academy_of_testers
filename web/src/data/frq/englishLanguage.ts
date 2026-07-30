import type { SubjectFrqSet, FrqRubricRow } from './types'

// AP English Language & Composition scores all three free responses on the same 6-point rubric:
// Row A Thesis (1) · Row B Evidence & Commentary (0–4) · Row C Sophistication (1).
// Wording below models the published scoring guidelines.

const THESIS_RHETORICAL: FrqRubricRow = {
  name: 'Row A — Thesis',
  maxPoints: 1,
  criteria:
    'Responds to the prompt with a defensible thesis that analyzes the writer’s rhetorical choices.'
    + ' A mere restatement of the prompt, a summary of the passage, or a thesis that only describes'
    + ' rhetorical elements without a defensible claim earns 0.',
}

const EVIDENCE_RHETORICAL: FrqRubricRow = {
  name: 'Row B — Evidence & Commentary',
  maxPoints: 4,
  criteria:
    'Award on a 0–4 band. 4 = provides specific evidence to support ALL claims in a line of'
    + ' reasoning AND consistently explains how the writer’s rhetorical choices contribute to the'
    + ' purpose, meaning, or effect. 3 = evidence supports the line of reasoning but commentary'
    + ' explains the choices unevenly. 2 = mostly summarizes rather than analyzes choices. 1 ='
    + ' minimal/irrelevant evidence. 0 = no defensible evidence. Be strict: repeated summary caps'
    + ' this at 2.',
}

const THESIS_ARGUMENT: FrqRubricRow = {
  name: 'Row A — Thesis',
  maxPoints: 1,
  criteria:
    'Responds to the prompt with a defensible thesis that presents the writer’s own position/'
    + 'argument. A thesis that only restates the prompt or lists topics without a position earns 0.',
}

const EVIDENCE_ARGUMENT: FrqRubricRow = {
  name: 'Row B — Evidence & Commentary',
  maxPoints: 4,
  criteria:
    'Award on a 0–4 band. 4 = specific, relevant evidence supports all claims AND commentary'
    + ' consistently explains how the evidence supports the argument’s line of reasoning. Lower the'
    + ' score for general/hypothetical-only evidence, gaps in reasoning, or commentary that merely'
    + ' repeats the claim. Be strict: evidence without explanatory commentary caps this at 2.',
}

const THESIS_SYNTHESIS: FrqRubricRow = {
  name: 'Row A — Thesis',
  maxPoints: 1,
  criteria:
    'Responds to the prompt with a defensible thesis that presents a position on the issue. A thesis'
    + ' that only restates the prompt or summarizes the sources earns 0.',
}

const EVIDENCE_SYNTHESIS: FrqRubricRow = {
  name: 'Row B — Evidence & Commentary',
  maxPoints: 4,
  criteria:
    'Award on a 0–4 band. To earn above 2 the response MUST cite at least three of the provided'
    + ' sources (by letter or author) as evidence AND explain how each supports the argument. 4 ='
    + ' uses 3+ sources with consistent commentary developing a line of reasoning. Drop the score'
    + ' for citing fewer than three sources, dropped quotes without commentary, or source misuse.',
}

const SOPHISTICATION: FrqRubricRow = {
  name: 'Row C — Sophistication',
  maxPoints: 1,
  criteria:
    'Award 1 only for a response that demonstrates sophistication of thought and/or a complex'
    + ' understanding — e.g. situating the argument in a broader context, addressing tensions or'
    + ' implications, or a consistently vivid/persuasive style. Do NOT award for a phrase or a'
    + ' single moment of insight; the complexity must run throughout. This point is rare — withhold'
    + ' it unless clearly earned.',
}

export const AP_ENGLISH_LANGUAGE_FRQ: SubjectFrqSet = {
  subjectName: 'AP English Language',
  note:
    'Scored on the official AP English Language 6-point rubric. Passages here are public-domain or'
    + ' original; paste any released College Board prompt into the essay box to practice it with the'
    + ' same rubric.',
  prompts: [
    {
      id: 'englang-rhetorical-douglass',
      essayType: 'Rhetorical Analysis',
      title: 'Douglass, “What to the Slave Is the Fourth of July?”',
      year: 'Public-domain passage',
      suggestedMinutes: 40,
      directions:
        'The passage below is an excerpt from a speech Frederick Douglass delivered on July 5, 1852.'
        + ' Read the passage carefully. Then, in a well-written essay, analyze the rhetorical choices'
        + ' Douglass makes to convey his message about American liberty to his audience.',
      sourceText:
        '“Fellow-citizens, pardon me, allow me to ask, why am I called upon to speak here to-day?'
        + ' What have I, or those I represent, to do with your national independence? … I am not'
        + ' included within the pale of this glorious anniversary! Your high independence only'
        + ' reveals the immeasurable distance between us. The blessings in which you, this day,'
        + ' rejoice, are not enjoyed in common. … This Fourth of July is yours, not mine. You may'
        + ' rejoice, I must mourn. To drag a man in fetters into the grand illuminated temple of'
        + ' liberty, and call upon him to join you in joyous anthems, were inhuman mockery and'
        + ' sacrilegious irony. Do you mean, citizens, to mock me, by asking me to speak to-day?”',
      rubric: [THESIS_RHETORICAL, EVIDENCE_RHETORICAL, SOPHISTICATION],
    },
    {
      id: 'englang-argument-emerson',
      essayType: 'Argument',
      title: 'Emerson on nonconformity',
      year: 'Sample prompt',
      suggestedMinutes: 40,
      directions:
        'In “Self-Reliance” (1841), Ralph Waldo Emerson wrote, “Whoso would be a man must be a'
        + ' nonconformist.” Write an essay that argues your position on the value, or the limits, of'
        + ' nonconformity in a person’s life. Use appropriate, specific evidence from your reading,'
        + ' observation, or experience to develop your argument.',
      rubric: [THESIS_ARGUMENT, EVIDENCE_ARGUMENT, SOPHISTICATION],
    },
    {
      id: 'englang-synthesis-testing',
      essayType: 'Synthesis',
      title: 'Standardized testing in college admissions',
      year: 'Sample prompt (original sources)',
      suggestedMinutes: 40,
      directions:
        'Carefully read the following four sources, including any introductory information. Then'
        + ' write an essay that synthesizes material from at least three of the sources and develops'
        + ' your position on the extent to which standardized test scores should factor into college'
        + ' admissions. Cite the sources as Source A, B, C, or D, or by the descriptions in'
        + ' parentheses.',
      sourceText:
        'Source A (Chen, education researcher): A 2023 review of admissions data found that, when'
        + ' combined with high-school GPA, standardized test scores modestly improved predictions of'
        + ' first-year college performance — but that GPA alone predicted graduation nearly as well.\n\n'
        + 'Source B (student op-ed): “I spent two summers and $1,200 on test prep my family could'
        + ' barely afford. A single Saturday morning shouldn’t outweigh four years of my work.”\n\n'
        + 'Source C (university admissions dean): “Test-optional policies widened our applicant pool'
        + ' and diversified our class, but they also made it harder to compare students from very'
        + ' different high schools. Scores are one imperfect common yardstick.”\n\n'
        + 'Source D (survey data, described): In a national survey, 61% of students from high-income'
        + ' households reported using paid test preparation, compared with 19% from low-income'
        + ' households — a gap critics say the tests then reward.',
      rubric: [THESIS_SYNTHESIS, EVIDENCE_SYNTHESIS, SOPHISTICATION],
    },
  ],
}
