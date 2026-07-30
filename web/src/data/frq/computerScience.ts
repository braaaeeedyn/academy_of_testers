import type { SubjectFrqSet } from './types'
import { pointBased } from './rubrics'

export const AP_CS_A_FRQ: SubjectFrqSet = {
  subjectName: 'AP Computer Science A',
  note: 'Scored point-by-point like the official AP CSA free response. Write complete Java in the response box; points reward correct headers, logic, and return values.',
  prompts: [
    {
      id: 'csa-frq-method',
      essayType: 'Methods & Control',
      title: 'Write a method: countVowels',
      year: 'Sample prompt',
      suggestedMinutes: 15,
      directions:
        'Write a Java method countVowels(String s) that returns the number of vowel characters'
        + ' (a, e, i, o, u, case-insensitive) in the string s. Then briefly explain your loop.',
      rubric: pointBased([
        { name: 'Method header', maxPoints: 1, criteria: 'Correct signature: public/int return type, String parameter, e.g. public int countVowels(String s).' },
        { name: 'Traversal', maxPoints: 1, criteria: 'Correctly iterates over every character of the string.' },
        { name: 'Vowel test', maxPoints: 2, criteria: '1 point for a correct case-insensitive vowel check; 1 point for incrementing a counter only on vowels.' },
        { name: 'Return', maxPoints: 1, criteria: 'Returns the correct count, and the explanation matches the code.' },
      ]),
    },
  ],
}

export const AP_CS_PRINCIPLES_FRQ: SubjectFrqSet = {
  subjectName: 'AP Computer Science Principles',
  note: 'Modeled on the AP CSP written responses. Answer in prose about an algorithm or program you describe.',
  prompts: [
    {
      id: 'csp-frq-algorithm',
      essayType: 'Written Response',
      title: 'Describe and evaluate an algorithm',
      year: 'Sample prompt',
      suggestedMinutes: 20,
      directions:
        'Describe a program you could write that helps users solve a real problem. Then respond to'
        + ' the parts below about its algorithm and data.',
      rubric: pointBased([
        { name: 'Purpose', maxPoints: 1, criteria: 'Clearly describes the program’s purpose and the problem it addresses.' },
        { name: 'Algorithm', maxPoints: 2, criteria: '1 point for describing an algorithm that includes sequencing, selection, AND iteration; 1 point for explaining how it produces the intended result.' },
        { name: 'Data / abstraction', maxPoints: 1, criteria: 'Explains how the program uses a list or other data abstraction to manage complexity.' },
        { name: 'Impact', maxPoints: 1, criteria: 'Identifies one beneficial and one potentially harmful effect of the program.' },
      ]),
    },
  ],
}
