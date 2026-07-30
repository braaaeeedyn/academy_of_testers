// Shared AP hub/planner data: subject groupings and exam-week facts.

export interface ApSubjectCategory {
  category: string
  iconPath: string
  subjectNames: string[]
}

// AP exams run the first two full weeks of May. If College Board's published 2027
// dates differ, update these — the countdown and key-date list read from here.
export const AP_EXAM_YEAR = 2027
export const AP_EXAM_START = new Date(2027, 4, 3) // Mon, May 3, 2027 (first full week of May)
export const AP_EXAM_WEEKS: { label: string; range: string }[] = [
  { label: 'Week 1', range: 'May 3 – 7' },
  { label: 'Week 2', range: 'May 10 – 14' },
]

export const AP_SUBJECT_CATEGORIES: ApSubjectCategory[] = [
  {
    category: 'AP Capstone Diploma Program',
    iconPath: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    subjectNames: ['AP Seminar', 'AP Research'],
  },
  {
    category: 'Arts',
    iconPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    subjectNames: ['AP Art History', 'AP Music Theory'],
  },
  {
    category: 'English',
    iconPath: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
    subjectNames: ['AP English Language', 'AP English Literature'],
  },
  {
    category: 'History & Social Sciences',
    iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    subjectNames: [
      'AP African American Studies',
      'AP Comparative Government',
      'AP European History',
      'AP Human Geography',
      'AP Macroeconomics',
      'AP Microeconomics',
      'AP Psychology',
      'AP Government',
      'AP US History',
      'AP World History',
    ],
  },
  {
    category: 'Math',
    iconPath: 'M4 7h3m10 0h3M4 12h16M7 17h3m4 0h3M8 3h8a1 1 0 011 1v16a1 1 0 01-1 1H8a1 1 0 01-1-1V4a1 1 0 011-1z',
    subjectNames: [
      'AP Calculus AB',
      'AP Calculus BC',
      'AP Precalculus',
      'AP Statistics',
    ],
  },
  {
    category: 'Computer Science',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    subjectNames: [
      'AP Computer Science A',
      'AP Computer Science Principles',
    ],
  },
  {
    category: 'Sciences',
    iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    subjectNames: [
      'AP Biology',
      'AP Chemistry',
      'AP Environmental Science',
      'AP Physics 1',
      'AP Physics 2',
      'AP Physics C: E&M',
      'AP Physics C: Mechanics',
    ],
  },
]
