// Test-day logistics for AP and SAT. Stable facts only: anything that changes year to year (dates,
// deadlines, fees) points to College Board instead of being hardcoded. Every link is on
// collegeboard.org. No runtime imports, so the acceptance script can load it directly.

export interface LogisticsLink {
  label: string
  url: string
}

export interface LogisticsSection {
  id: string
  title: string
  items: string[]
  links?: LogisticsLink[]
}

export interface ExamLogistics {
  title: string
  intro: string
  officialUrl: string
  sections: LogisticsSection[]
}

export const EXAM_LOGISTICS: Record<'ap' | 'sat', ExamLogistics> = {
  ap: {
    title: 'AP exam logistics',
    intro:
      'What to set up beforehand, what to bring, and what happens after. College Board publishes the official schedule and policies, and they change from year to year, so check the linked pages for this year\'s dates and details.',
    officialUrl: 'https://apstudents.collegeboard.org',
    sections: [
      {
        id: 'bluebook',
        title: 'Bluebook and exam format',
        items: [
          'Most AP exams are taken in Bluebook, College Board\'s testing app. Some are fully digital and others are hybrid: you read questions in Bluebook but write free-response answers in a paper booklet.',
          'Which format your subject uses is listed on its course page on AP Students; check it rather than assuming.',
          'Install Bluebook on the device you will test on and complete exam setup before test day, when your school or College Board asks you to. You cannot test without it.',
          'Try the full-length practice in Bluebook so the tools (highlighter, annotations, timer, and the built-in calculator where allowed) feel familiar.',
        ],
        links: [
          { label: 'Bluebook', url: 'https://bluebook.collegeboard.org' },
          { label: 'AP course pages', url: 'https://apstudents.collegeboard.org/course-index-page' },
        ],
      },
      {
        id: 'what-to-bring',
        title: 'What to bring',
        items: [
          'A fully charged testing device with Bluebook installed and exam setup completed, plus its charger.',
          'Pencils and pens (blue or black ink) for hybrid exams and notes.',
          'A government or school-issued photo ID if you are testing at a school other than your own.',
          'An approved calculator for subjects that allow one; check the calculator policy for your subject.',
          'Scratch paper is provided at the test site; do not bring your own.',
          'Leave phones, smartwatches and other electronics off and stored as instructed.',
        ],
        links: [
          { label: 'What to bring', url: 'https://apstudents.collegeboard.org/exam-day/what-to-bring' },
          { label: 'Calculator policy', url: 'https://apstudents.collegeboard.org/exam-policies-guidelines/calculator-policies' },
        ],
      },
      {
        id: 'test-day',
        title: 'On test day',
        items: [
          'AP exams run over a two-week window each spring, with morning and afternoon sessions. Check College Board for this year\'s date and session for each of your exams.',
          'Arrive when your school\'s AP coordinator tells you to; late arrivals may not be admitted.',
          'Follow the proctor\'s instructions for opening Bluebook and starting the exam; your progress is saved if your device loses connection.',
        ],
        links: [{ label: 'Exam dates', url: 'https://apstudents.collegeboard.org/dates' }],
      },
      {
        id: 'scores',
        title: 'Scores',
        items: [
          'AP exams are scored on a 1 to 5 scale. A 3 is generally considered qualified, and many colleges look for a 3, 4, or 5.',
          'Scores are released in the summer in your College Board account; check College Board for this year\'s release date.',
        ],
        links: [{ label: 'View AP scores', url: 'https://apstudents.collegeboard.org/view-scores' }],
      },
      {
        id: 'college-credit',
        title: 'College credit and placement',
        items: [
          'Credit and placement policies vary by college and even by department: the same score can earn credit at one school and not another.',
          'Use College Board\'s AP credit policy search to look up each college you are considering, then confirm on the college\'s own site.',
        ],
        links: [
          { label: 'AP credit policy search', url: 'https://apstudents.collegeboard.org/getting-credit-placement/search-policies' },
        ],
      },
      {
        id: 'accommodations',
        title: 'Accommodations',
        items: [
          'Testing accommodations (for example extended time or breaks) are approved through College Board\'s Services for Students with Disabilities (SSD).',
          'Requests usually go through your school\'s SSD coordinator and must be made well ahead of the exam, since review takes time. Check College Board for this year\'s request deadline.',
          'Once approved, accommodations generally carry over to other College Board tests, including the SAT.',
        ],
        links: [{ label: 'College Board SSD', url: 'https://accommodations.collegeboard.org' }],
      },
      {
        id: 'sending-scores',
        title: 'Sending scores',
        items: [
          'Each year you can send your scores to one college or scholarship program for free; the deadline for that free send varies, so check College Board for this year\'s date.',
          'After that, additional score reports can be ordered for a fee from your College Board account.',
        ],
        links: [{ label: 'Sending AP scores', url: 'https://apstudents.collegeboard.org/sending-scores' }],
      },
    ],
  },
  sat: {
    title: 'SAT logistics',
    intro:
      'What to set up beforehand, what to bring, and what happens after. The SAT is offered several times a year and registration deadlines change, so check College Board for this year\'s dates.',
    officialUrl: 'https://satsuite.collegeboard.org/sat',
    sections: [
      {
        id: 'bluebook',
        title: 'Bluebook',
        items: [
          'The SAT is fully digital and taken in Bluebook, College Board\'s testing app, on a laptop or tablet.',
          'Install Bluebook and complete exam setup before test day; setup generates the admission ticket you need to get in.',
          'Take a full-length practice test in Bluebook to get used to the timer, the annotation tools, the reference sheet, and the built-in Desmos calculator.',
          'The test is adaptive by module: how you do on the first module of each section sets the difficulty of the second.',
        ],
        links: [
          { label: 'Bluebook', url: 'https://bluebook.collegeboard.org' },
          { label: 'Digital SAT', url: 'https://satsuite.collegeboard.org/digital' },
        ],
      },
      {
        id: 'what-to-bring',
        title: 'What to bring',
        items: [
          'Your fully charged testing device with Bluebook installed and exam setup completed, plus a charger.',
          'Your admission ticket (from Bluebook exam setup).',
          'An acceptable photo ID.',
          'Pencils or pens for scratch work. Scratch paper is provided; do not bring your own.',
          'An approved calculator is optional, since Desmos is built into Bluebook; check the calculator policy if you bring one.',
        ],
        links: [{ label: 'What to bring', url: 'https://satsuite.collegeboard.org/sat/test-day/what-to-bring' }],
      },
      {
        id: 'test-day',
        title: 'On test day',
        items: [
          'Arrive by the check-in time on your admission ticket; late arrivals are not admitted.',
          'The test has two sections, Reading and Writing then Math, each split into two modules, with a short break between sections.',
          'Check College Board for this year\'s test dates and registration deadlines.',
        ],
        links: [{ label: 'Dates and deadlines', url: 'https://satsuite.collegeboard.org/sat/dates-deadlines' }],
      },
      {
        id: 'scores',
        title: 'Scores',
        items: [
          'Each section is scored from 200 to 800, for a total from 400 to 1600.',
          'Scores appear in your College Board account a few weeks after the test; check College Board for the release date for your test.',
        ],
        links: [{ label: 'SAT scores', url: 'https://satsuite.collegeboard.org/sat/scores' }],
      },
      {
        id: 'accommodations',
        title: 'Accommodations',
        items: [
          'Accommodations are approved through College Board\'s Services for Students with Disabilities (SSD), usually requested through your school\'s SSD coordinator.',
          'Request them well ahead of your test date, since review takes time. Check College Board for the request deadline for your test.',
        ],
        links: [{ label: 'College Board SSD', url: 'https://accommodations.collegeboard.org' }],
      },
      {
        id: 'sending-scores',
        title: 'Sending scores',
        items: [
          'Free score sends are included with registration; the window to use them varies, so check College Board for the deadline for your test.',
          'Additional score reports can be ordered for a fee from your College Board account.',
          'Many colleges let you choose which test dates to send; check each college\'s score-use policy.',
        ],
        links: [{ label: 'Sending SAT scores', url: 'https://satsuite.collegeboard.org/sat/scores/sending-scores' }],
      },
    ],
  },
}
