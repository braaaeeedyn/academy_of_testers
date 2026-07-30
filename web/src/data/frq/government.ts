import type { SubjectFrqSet } from './types'
import { govArgument, pointBased } from './rubrics'

export const AP_US_GOVERNMENT_FRQ: SubjectFrqSet = {
  subjectName: 'AP Government',
  note: 'Scored on the official AP U.S. Government argument-essay (6) and concept-application (3) rubrics.',
  prompts: [
    {
      id: 'gov-argument-federalism',
      essayType: 'Argument Essay',
      title: 'Federal vs. state power',
      year: 'Sample prompt',
      suggestedMinutes: 40,
      directions:
        'Develop an argument about whether the federal government or the states should have primary'
        + ' authority over a major policy area of your choice. Use at least ONE piece of evidence from'
        + ' a required foundational document (e.g. the Constitution, Federalist No. 10, or Federalist'
        + ' No. 51), explain your reasoning, and respond to an opposing perspective.',
      rubric: govArgument(),
    },
    {
      id: 'gov-concept-application',
      essayType: 'Concept Application',
      title: 'Scenario: a contested regulation',
      year: 'Sample prompt',
      suggestedMinutes: 20,
      directions:
        'Scenario: A federal agency issues a new environmental regulation. A state government sues,'
        + ' arguing the rule exceeds federal authority; the case reaches the Supreme Court. Respond to'
        + ' parts A, B, and C.',
      rubric: pointBased([
        { name: 'Part A', maxPoints: 1, criteria: 'Describes a relevant constitutional or political principle raised by the scenario (e.g. federalism, the commerce clause).' },
        { name: 'Part B', maxPoints: 1, criteria: 'Explains how the principle in A applies to the scenario’s outcome.' },
        { name: 'Part C', maxPoints: 1, criteria: 'Explains how an institution, actor, or check could respond to or influence the outcome.' },
      ]),
    },
  ],
}

export const AP_COMPARATIVE_GOVERNMENT_FRQ: SubjectFrqSet = {
  subjectName: 'AP Comparative Government',
  note: 'Scored on the official AP Comparative Government argument-essay (5) and conceptual-analysis (3) rubrics, applied to the six course countries.',
  prompts: [
    {
      id: 'compgov-argument-legitimacy',
      essayType: 'Argument Essay',
      title: 'Sources of regime legitimacy',
      year: 'Sample prompt',
      suggestedMinutes: 30,
      directions:
        'Develop an argument about the most important source of political legitimacy for a regime.'
        + ' Reference at least two of the AP Comparative course countries (China, Iran, Mexico,'
        + ' Nigeria, Russia, the United Kingdom), explain your reasoning, and respond to an opposing'
        + ' perspective.',
      rubric: govArgument(),
    },
    {
      id: 'compgov-conceptual',
      essayType: 'Conceptual Analysis',
      title: 'Authoritarian vs. democratic institutions',
      year: 'Sample prompt',
      suggestedMinutes: 20,
      directions: 'Respond to parts A, B, and C about political institutions across regime types.',
      rubric: pointBased([
        { name: 'Part A', maxPoints: 1, criteria: 'Defines a relevant course concept (e.g. rule of law, federalism, single-member district).' },
        { name: 'Part B', maxPoints: 1, criteria: 'Describes how the concept operates in one specific course country.' },
        { name: 'Part C', maxPoints: 1, criteria: 'Explains a similarity or difference in how the concept functions in a second country.' },
      ]),
    },
  ],
}
