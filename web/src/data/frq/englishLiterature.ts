import type { SubjectFrqSet } from './types'
import { essay6 } from './rubrics'

// AP English Literature scores all three free responses on the same 6-point rubric as English
// Language: Thesis (1) · Evidence & Commentary (0–4) · Sophistication (1). Poem and prose here are
// public domain.

export const AP_ENGLISH_LITERATURE_FRQ: SubjectFrqSet = {
  subjectName: 'AP English Literature',
  note: 'Scored on the official AP Literature 6-point rubric. Poem and passage are public domain; paste any released prompt to practice it on the same rubric.',
  prompts: [
    {
      id: 'englit-poetry-dickinson',
      essayType: 'Poetry Analysis',
      title: 'Dickinson, “Hope is the thing with feathers”',
      year: 'Public-domain poem',
      suggestedMinutes: 40,
      directions:
        'Read the poem carefully. Then, in a well-written essay, analyze how Dickinson uses literary'
        + ' techniques (such as figurative language, imagery, and form) to develop the speaker’s'
        + ' understanding of hope.',
      sourceText:
        '“Hope” is the thing with feathers -\nThat perches in the soul -\nAnd sings the tune without the words -\nAnd never stops - at all -\n\nAnd sweetest - in the Gale - is heard -\nAnd sore must be the storm -\nThat could abash the little Bird\nThat kept so many warm -\n\nI’ve heard it in the chillest land -\nAnd on the strangest Sea -\nYet - never - in Extremity,\nIt asked a crumb - of me.',
      rubric: essay6(
        'A defensible thesis that analyzes how the poet’s techniques develop the speaker’s understanding of hope. Summary or paraphrase without a claim earns 0.',
        '0–4. 4 = specific textual evidence supports all claims AND commentary consistently explains how the techniques create meaning or effect. Repeated paraphrase caps this at 2.'
      ),
    },
    {
      id: 'englit-prose-austen',
      essayType: 'Prose Fiction Analysis',
      title: 'Austen, opening of “Pride and Prejudice”',
      year: 'Public-domain passage',
      suggestedMinutes: 40,
      directions:
        'Read the passage carefully. Then, in a well-written essay, analyze how Austen uses literary'
        + ' techniques (such as tone, irony, and narrative voice) to characterize the society she'
        + ' depicts.',
      sourceText:
        'It is a truth universally acknowledged, that a single man in possession of a good fortune,'
        + ' must be in want of a wife. However little known the feelings or views of such a man may'
        + ' be on his first entering a neighbourhood, this truth is so well fixed in the minds of the'
        + ' surrounding families, that he is considered the rightful property of some one or other of'
        + ' their daughters. “My dear Mr. Bennet,” said his lady to him one day, “have you heard that'
        + ' Netherfield Park is let at last?”',
      rubric: essay6(
        'A defensible thesis about how Austen’s techniques characterize the society depicted. A summary of the passage earns 0.',
        '0–4. 4 = specific evidence supports all claims AND commentary consistently explains how narrative voice, irony, or tone create meaning. Plot summary caps this at 2.'
      ),
    },
    {
      id: 'englit-argument-open',
      essayType: 'Literary Argument',
      title: 'The role of a moral choice',
      year: 'Sample prompt',
      suggestedMinutes: 40,
      directions:
        'Many works of literature feature a character who must make a difficult moral choice. Choose a'
        + ' novel or play in which a character faces such a decision. Then, in a well-written essay,'
        + ' analyze how that choice and its consequences contribute to an interpretation of the work'
        + ' as a whole. Do not merely summarize the plot.',
      rubric: essay6(
        'A defensible thesis that presents an interpretation of the work connected to the character’s moral choice. Plot summary or a thesis without an interpretive claim earns 0.',
        '0–4. 4 = specific evidence from the chosen work supports all claims AND commentary consistently connects the choice to a coherent interpretation of the whole work. Summary caps this at 2.'
      ),
    },
  ],
}
