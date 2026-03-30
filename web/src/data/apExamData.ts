export interface ExamSection {
  title: string
  questionCount: string
  time?: string
  scoreWeight: string
  details: string[]
}

export interface APExamInfo {
  label: string
  slug: string
  sourceUrl: string
  sections: ExamSection[]
}

export const AP_EXAM_DATA: APExamInfo[] = [
  {
    label: 'AP African American Studies',
    slug: 'ap-african-american-studies',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-african-american-studies/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '60 questions',
        time: '1hr 15mins',
        scoreWeight: '50%',
        details: [
          'Questions based on stimulus materials including texts, images, and data',
          'Analyze sources and historical developments in African American studies',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '3 questions',
        time: '1hr 45mins',
        scoreWeight: '50%',
        details: [
          'Source-based argument essay',
          'Questions assess ability to analyze primary and secondary sources',
          'Develop and support arguments with evidence',
        ],
      },
    ],
  },
  {
    label: 'AP Art History',
    slug: 'ap-art-history',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-art-history/assessment',
    sections: [
      {
        title: 'Section 1: Multiple Choice',
        questionCount: '80 questions',
        scoreWeight: '50%',
        details: [
          'Sets of 2–3 questions based on color images of works of art',
          'Individual questions, some based on color images',
          'Analyze visual and contextual elements and link them to artistic traditions',
          'Compare 2 or more works',
          'Attribute works of art beyond the image set',
          'Analyze art historical interpretations',
        ],
      },
      {
        title: 'Section 2: Free Response',
        questionCount: '6 questions',
        scoreWeight: '50%',
        details: [
          'Q1: Long Essay—Comparison of a required work and one of your choosing',
          'Q2: Long Essay—Visual/Contextual Analysis of a selected work',
          'Q3: Short Essay—Visual Analysis of a work beyond the image set',
          'Q4: Short Essay—Contextual Analysis of a work in the image set',
          'Q5: Short Essay—Attribution of a work beyond the image set',
          'Q6: Short Essay—Continuity and Change analysis',
        ],
      },
    ],
  },
  {
    label: 'AP Biology',
    slug: 'ap-biology',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-biology/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '60 questions',
        time: '1hr 30mins',
        scoreWeight: '50%',
        details: [
          'Discrete questions and sets referring to the same diagram or data',
          'Explain biological concepts, processes, and models',
          'Analyze diagrams, flow charts, and visual representations',
          'Use the scientific method',
          'Perform mathematical calculations to analyze data',
          'Support scientific claims with evidence',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '6 questions',
        time: '1hr 30mins',
        scoreWeight: '50%',
        details: [
          '2 long questions and 4 short questions',
          'Interpret and evaluate results from experiments',
          'Graph and analyze data',
          'Understand principles and procedures of lab investigations',
          'Predict causes or effects of changes in biological systems',
          'Analyze visual representations of biological phenomena',
        ],
      },
    ],
  },
  {
    label: 'AP Calculus AB',
    slug: 'ap-calculus-ab',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-calculus-ab/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '45 questions',
        time: '1hr 45mins',
        scoreWeight: '50%',
        details: [
          'Part A: Graphing calculator not permitted (33.3% of score)',
          'Part B: Graphing calculator required for some questions (16.7% of score)',
          'Questions include algebraic, exponential, logarithmic, trigonometric, and general types of functions',
          'Questions include analytical, graphical, tabular, and verbal representations',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '6 questions',
        time: '1hr 30mins',
        scoreWeight: '50%',
        details: [
          'Part A: 2 problems — Graphing calculator required (16.7% of score)',
          'Part B: 4 problems — Graphing calculator not permitted (33.3% of score)',
          'Mix of procedural and conceptual tasks',
          'At least 2 questions incorporate a real-world context or scenario',
        ],
      },
    ],
  },
  {
    label: 'AP Calculus BC',
    slug: 'ap-calculus-bc',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-calculus-bc/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '45 questions',
        time: '1hr 45mins',
        scoreWeight: '50%',
        details: [
          'Part A: Graphing calculator not permitted (33.3% of score)',
          'Part B: Graphing calculator required for some questions (16.7% of score)',
          'Questions include algebraic, exponential, logarithmic, trigonometric, and general types of functions',
          'Questions include analytical, graphical, tabular, and verbal representations',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '6 questions',
        time: '1hr 30mins',
        scoreWeight: '50%',
        details: [
          'Part A: 2 problems — Graphing calculator required (16.7% of score)',
          'Part B: 4 problems — Graphing calculator not permitted (33.3% of score)',
          'Mix of procedural and conceptual tasks',
          'At least 2 questions incorporate a real-world context or scenario',
        ],
      },
    ],
  },
  {
    label: 'AP Chemistry',
    slug: 'ap-chemistry',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-chemistry/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '60 questions',
        time: '1hr 30mins',
        scoreWeight: '50%',
        details: [
          'Individual questions and sets referring to the same diagram or data',
          'Explain, analyze, and interpret models of chemical properties or phenomena',
          'Design experiments and procedures to test a prediction or theory',
          'Solve problems using mathematical relationships',
          'Make or justify a scientific claim with evidence and/or reasoning',
          'Scientific or graphing calculator recommended',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '7 questions',
        time: '1hr 45mins',
        scoreWeight: '50%',
        details: [
          '3 long multipart questions (10 points each)',
          '4 short-answer multipart questions (4 points each)',
          'Represent data and chemical phenomena with graphs and diagrams',
          'Design experiments and procedures to test predictions',
          'Scientific or graphing calculator recommended',
        ],
      },
    ],
  },
  {
    label: 'AP Comparative Government and Politics',
    slug: 'ap-comparative-government-and-politics',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-comparative-government-and-politics/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '55 questions',
        time: '1hr',
        scoreWeight: '50%',
        details: [
          'Individual questions and question sets',
          'Analyze political concepts, processes, and policies',
          'Interpret data, charts, and political maps',
          'Compare political systems across countries',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '4 questions',
        time: '1hr 40mins',
        scoreWeight: '50%',
        details: [
          'Conceptual analysis question',
          'Quantitative analysis question',
          'Comparative analysis question',
          'Argument essay',
        ],
      },
    ],
  },
  {
    label: 'AP Computer Science A',
    slug: 'ap-computer-science-a',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-computer-science-a/assessment',
    sections: [
      {
        title: 'Section 1: Multiple Choice',
        questionCount: '42 questions',
        scoreWeight: '55%',
        details: [
          'Individual questions and occasional sets of 2 questions',
          'Determine required code segments to produce a given output',
          'Identify the output, value, or result of given program code',
          'Analyze program code for correctness, equivalence, and errors',
          'Describe behavior and conditions that lead to results in a program',
        ],
      },
      {
        title: 'Section 2: Free Response',
        questionCount: '4 questions',
        scoreWeight: '45%',
        details: [
          'Q1: Methods and Control Structures — create objects, call methods, use expressions and statements',
          'Q2: Class Design — define a new type by creating a class',
          'Q3: Data Analysis with ArrayList — create, traverse, and manipulate ArrayList elements',
          'Q4: 2D Array — create, traverse, and manipulate 2D array objects',
        ],
      },
    ],
  },
  {
    label: 'AP Computer Science Principles',
    slug: 'ap-computer-science-principles',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-computer-science-principles/assessment',
    sections: [
      {
        title: 'Create Performance Task',
        questionCount: '1 task',
        scoreWeight: '30%',
        details: [
          'Completed during the course (minimum 12 hours of class time)',
          'Develop a program that demonstrates computing innovations',
          'Submit your program code, a video of your program running, and written responses',
        ],
      },
      {
        title: 'End-of-Course Exam',
        questionCount: '70 questions',
        time: '2hrs',
        scoreWeight: '70%',
        details: [
          'Single-select multiple-choice questions',
          'Multi-select multiple-choice questions',
          'Questions cover computational thinking practices',
          'Topics include creative development, data, algorithms, programming, computing systems, and the internet',
        ],
      },
    ],
  },
  {
    label: 'AP English Language and Composition',
    slug: 'ap-english-language-and-composition',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-english-language-and-composition/assessment',
    sections: [
      {
        title: 'Section 1: Multiple Choice',
        questionCount: '45 questions',
        scoreWeight: '45%',
        details: [
          'Excerpts from nonfiction texts with several multiple-choice questions',
          '23–25 Reading questions: read and analyze nonfiction texts',
          '20–22 Writing questions: read like a writer and consider revisions',
        ],
      },
      {
        title: 'Section 2: Free Response',
        questionCount: '3 questions',
        time: '2hrs 15mins',
        scoreWeight: '55%',
        details: [
          'Includes a 15-minute reading period',
          'Synthesis: Read 6 texts and compose an argument citing at least 3 sources',
          'Rhetorical Analysis: Analyze how a writer\'s language choices contribute to meaning and purpose',
          'Argument: Create an evidence-based argument responding to a given topic',
        ],
      },
    ],
  },
  {
    label: 'AP English Literature and Composition',
    slug: 'ap-english-literature-and-composition',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-english-literature-and-composition/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '55 questions',
        time: '1hr',
        scoreWeight: '45%',
        details: [
          'Passages of fiction, poetry, and drama with multiple-choice questions',
          'Analyze literary elements, techniques, and structure',
          'Interpret meaning and tone',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '3 questions',
        time: '2hrs',
        scoreWeight: '55%',
        details: [
          'Poetry Analysis: Analyze a poem\'s literary elements and techniques',
          'Prose Fiction Analysis: Analyze a passage from a work of fiction',
          'Literary Argument: Develop an argument about a work of literature you choose',
        ],
      },
    ],
  },
  {
    label: 'AP Environmental Science',
    slug: 'ap-environmental-science',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-environmental-science/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '80 questions',
        time: '1hr 30mins',
        scoreWeight: '60%',
        details: [
          'Individual questions and sets based on the same stimulus',
          'Analyze environmental concepts, processes, and models',
          'Interpret data and visual representations',
          'Identify environmental problems and propose solutions',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '3 questions',
        time: '1hr 10mins',
        scoreWeight: '40%',
        details: [
          'Design an Investigation: Describe or design an experiment or field study',
          'Analyze an Environmental Problem: Analyze an environmental issue and propose a solution',
          'Analyze an Environmental Problem with a Calculation: Includes mathematical analysis',
        ],
      },
    ],
  },
  {
    label: 'AP European History',
    slug: 'ap-european-history',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-european-history/assessment',
    sections: [
      {
        title: 'Section 1A: Multiple Choice',
        questionCount: '55 questions',
        scoreWeight: '40%',
        details: [
          'Sets of 3–4 questions based on the same stimulus',
          'Sources include primary/secondary texts, images, charts, and maps',
          'Analyze provided sources and historical developments',
        ],
      },
      {
        title: 'Section 1B: Short Answer',
        questionCount: '3 questions',
        scoreWeight: '20%',
        details: [
          'Q1: Required — 1–2 secondary sources, focus on 1600–2001',
          'Q2: Required — 1 primary source, focus on 1600–2001',
          'Q3 or Q4: Choose one — Q3 covers 1450–1815, Q4 covers 1815–present',
          'Analyze sources, put developments in context, make connections',
        ],
      },
      {
        title: 'Section 2: Free Response',
        questionCount: '2 questions',
        scoreWeight: '40%',
        details: [
          'Document-Based Question (DBQ): 60 mins (includes 15-min reading period), 25% of score — 7 documents, develop and support an argument (1600–2001)',
          'Long Essay: 40 mins, 15% of score — choose 1 of 3 questions covering different time periods (1450–1700, 1648–1914, or 1815–2001)',
        ],
      },
    ],
  },
  {
    label: 'AP Human Geography',
    slug: 'ap-human-geography',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-human-geography/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '60 questions',
        time: '1hr',
        scoreWeight: '50%',
        details: [
          'Individual questions and sets based on the same stimulus',
          'Stimulus material includes maps, tables, charts, graphs, images, and landscapes',
          'Analyze geographic concepts, processes, and models',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '3 questions',
        time: '1hr 15mins',
        scoreWeight: '50%',
        details: [
          'Each question has multiple parts',
          'Questions may use stimulus material like maps, tables, or images',
          'Describe, explain, and apply geographic concepts and processes',
          'Analyze geographic patterns and relationships',
        ],
      },
    ],
  },
  {
    label: 'AP Macroeconomics',
    slug: 'ap-macroeconomics',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-macroeconomics/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '60 questions',
        time: '1hr 10mins',
        scoreWeight: '66%',
        details: [
          'Individual questions and sets based on the same stimulus',
          'Analyze economic concepts, principles, and models',
          'Interpret graphs, charts, and data',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '3 questions',
        time: '1hr',
        scoreWeight: '34%',
        details: [
          '1 long free-response question',
          '2 short free-response questions',
          'Analyze economic situations using graphs and models',
          'Apply macroeconomic principles to real-world scenarios',
        ],
      },
    ],
  },
  {
    label: 'AP Microeconomics',
    slug: 'ap-microeconomics',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-microeconomics/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '60 questions',
        time: '1hr 10mins',
        scoreWeight: '66%',
        details: [
          'Individual questions and sets based on the same stimulus',
          'Analyze economic concepts, principles, and models',
          'Interpret graphs, charts, and data',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '3 questions',
        time: '1hr',
        scoreWeight: '34%',
        details: [
          '1 long free-response question',
          '2 short free-response questions',
          'Analyze economic situations using graphs and models',
          'Apply microeconomic principles to real-world scenarios',
        ],
      },
    ],
  },
  {
    label: 'AP Music Theory',
    slug: 'ap-music-theory',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-music-theory/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '75 questions',
        time: '1hr 20mins',
        scoreWeight: '45%',
        details: [
          'Part A: Questions without aural stimulus',
          'Part B: Questions with aural stimulus (listening examples)',
          'Analyze musical scores, notation, and theory concepts',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '7 questions',
        time: '1hr 20mins',
        scoreWeight: '55%',
        details: [
          'Part A: Melodic and harmonic dictation, voice leading',
          'Part B: Sight-singing (2 melodies performed individually)',
          'Compose and analyze musical passages',
        ],
      },
    ],
  },
  {
    label: 'AP Physics 1: Algebra-Based',
    slug: 'ap-physics-1',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-physics-1/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '40 questions',
        time: '1hr 20mins',
        scoreWeight: '50%',
        details: [
          'Discrete questions or question sets with a stimulus or data',
          'Analyze physical scenarios and apply physics principles',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '4 questions',
        time: '1hr 40mins',
        scoreWeight: '50%',
        details: [
          'Mathematical routines',
          'Translation between representations',
          'Experimental design and analysis',
          'Qualitative/quantitative translation',
        ],
      },
    ],
  },
  {
    label: 'AP Physics 2: Algebra-Based',
    slug: 'ap-physics-2',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-physics-2/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '40 questions',
        time: '1hr 20mins',
        scoreWeight: '50%',
        details: [
          'Discrete questions or question sets with a stimulus or data',
          'Topics include thermodynamics, fluids, optics, electricity, magnetism, and modern physics',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '4 questions',
        time: '1hr 40mins',
        scoreWeight: '50%',
        details: [
          'Mathematical routines',
          'Translation between representations',
          'Experimental design and analysis',
          'Qualitative/quantitative translation',
        ],
      },
    ],
  },
  {
    label: 'AP Physics C: Electricity and Magnetism',
    slug: 'ap-physics-c-electricity-and-magnetism',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '35 questions',
        time: '45mins',
        scoreWeight: '50%',
        details: [
          'Calculus-based questions on electricity and magnetism',
          'Topics include electrostatics, conductors, capacitors, dielectrics, electric circuits, magnetic fields, and electromagnetism',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '3 questions',
        time: '45mins',
        scoreWeight: '50%',
        details: [
          'Calculus-based problems requiring detailed solutions',
          'Apply concepts of electricity and magnetism to solve problems',
          'Design and analyze experiments',
        ],
      },
    ],
  },
  {
    label: 'AP Physics C: Mechanics',
    slug: 'ap-physics-c-mechanics',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-physics-c-mechanics/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '35 questions',
        time: '45mins',
        scoreWeight: '50%',
        details: [
          'Calculus-based questions on mechanics',
          'Topics include kinematics, Newton\'s laws, work/energy/power, systems of particles, rotation, and oscillations',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '3 questions',
        time: '45mins',
        scoreWeight: '50%',
        details: [
          'Calculus-based problems requiring detailed solutions',
          'Apply concepts of mechanics to solve problems',
          'Design and analyze experiments',
        ],
      },
    ],
  },
  {
    label: 'AP Precalculus',
    slug: 'ap-precalculus',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-precalculus/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '40 questions',
        time: '2hrs',
        scoreWeight: '62.5%',
        details: [
          'Part A: Graphing calculator not permitted',
          'Part B: Graphing calculator required',
          'Questions on polynomial, rational, exponential, logarithmic, and trigonometric functions',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '4 questions',
        time: '1hr',
        scoreWeight: '37.5%',
        details: [
          'Part A: Graphing calculator required',
          'Part B: Graphing calculator not permitted',
          'Modeling and application problems',
          'Analyze functions using multiple representations',
        ],
      },
    ],
  },
  {
    label: 'AP Psychology',
    slug: 'ap-psychology',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-psychology/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '75 questions',
        time: '1hr 30mins',
        scoreWeight: '67%',
        details: [
          'Apply psychological perspectives, theories, concepts, and research findings',
          'Evaluate qualitative and quantitative research methods and study designs',
          'Evaluate representations of psychological concepts in tables, graphs, charts, and diagrams',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '2 questions',
        time: '1hr 10mins',
        scoreWeight: '33%',
        details: [
          'Article Analysis Question (AAQ)',
          'Evidence-Based Question (EBQ)',
          'Apply psychological perspectives, theories, and research findings',
          'Develop and justify psychological arguments using evidence',
        ],
      },
    ],
  },
  {
    label: 'AP Seminar',
    slug: 'ap-seminar',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-seminar/assessment',
    sections: [
      {
        title: 'Through-Course Performance Tasks',
        questionCount: '2 tasks',
        scoreWeight: '70%',
        details: [
          'Team Project and Presentation (completed during the year)',
          'Individual Research-Based Essay and Presentation',
          'Develop arguments using evidence from multiple sources',
          'Collaborate with peers on research projects',
        ],
      },
      {
        title: 'End-of-Course Exam',
        questionCount: '3 short-answer questions + 1 essay',
        time: '2hrs',
        scoreWeight: '30%',
        details: [
          'Analyze an argument in a single source',
          'Analyze and compare arguments from two sources',
          'Develop a logically organized and well-reasoned argument',
        ],
      },
    ],
  },
  {
    label: 'AP Research',
    slug: 'ap-research',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-research/assessment',
    sections: [
      {
        title: 'Academic Paper',
        questionCount: '4,000–5,000 words',
        scoreWeight: '75%',
        details: [
          'Year-long independent research on a topic of your choosing',
          'Problem-based inquiry with method appropriate to the discipline',
          'Sustained argument supported by evidence and documented sources',
        ],
      },
      {
        title: 'Presentation and Oral Defense',
        questionCount: 'Presentation + defense',
        scoreWeight: '25%',
        details: [
          'Communicate research process and findings to an audience',
          'Respond to questions about the inquiry, methods, and conclusions',
          'There is no end-of-course exam; the course is assessed entirely through these tasks',
        ],
      },
    ],
  },
  {
    label: 'AP Statistics',
    slug: 'ap-statistics',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-statistics/assessment',
    sections: [
      {
        title: 'Section 1: Multiple Choice',
        questionCount: '40 questions',
        time: '1hr 30mins',
        scoreWeight: '50%',
        details: [
          'Content from all 9 units of study',
          'All 4 course skills assessed',
          'Individual questions or sets based on a shared prompt',
        ],
      },
      {
        title: 'Section 2: Free Response',
        questionCount: '6 questions',
        time: '1hr 30mins',
        scoreWeight: '50%',
        details: [
          'Part A: 5 questions covering collecting data, exploring data, probability, sampling distributions, and inference',
          'Part B: 1 investigative task assessing multiple skill categories in nonroutine ways',
          'Communicate explanations or justifications using evidence from data',
        ],
      },
    ],
  },
  {
    label: 'AP United States Government and Politics',
    slug: 'ap-united-states-government-and-politics',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-united-states-government-and-politics/assessment',
    sections: [
      {
        title: 'Section I: Multiple Choice',
        questionCount: '55 questions',
        time: '1hr 20mins',
        scoreWeight: '50%',
        details: [
          'Individual questions and sets based on stimulus material',
          'Stimulus includes texts, quantitative data, maps, images, and infographics',
          'Analyze political concepts, institutions, and processes',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '4 questions',
        time: '1hr 40mins',
        scoreWeight: '50%',
        details: [
          'Concept Application: Apply political concepts to a scenario',
          'Quantitative Analysis: Analyze quantitative data and explain a trend',
          'SCOTUS Comparison: Compare a non-required Supreme Court case with a required one',
          'Argument Essay: Develop an argument using evidence from founding documents',
        ],
      },
    ],
  },
  {
    label: 'AP United States History',
    slug: 'ap-united-states-history',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-united-states-history/assessment',
    sections: [
      {
        title: 'Section IA: Multiple Choice',
        questionCount: '55 questions',
        time: '55mins',
        scoreWeight: '40%',
        details: [
          'Sets of 3–4 questions based on the same stimulus',
          'Sources include primary/secondary texts, images, charts, and maps',
          'Analyze provided sources and historical developments',
        ],
      },
      {
        title: 'Section IB: Short Answer',
        questionCount: '3 questions',
        time: '40mins',
        scoreWeight: '20%',
        details: [
          'Q1: Required — 1–2 secondary sources, focus on 1754–1980',
          'Q2: Required — 1 primary source, focus on 1754–1980',
          'Q3 or Q4: Choose one — Q3 covers 1491–1877, Q4 covers 1865–2001',
          'Analyze sources, put developments in context, make connections',
        ],
      },
      {
        title: 'Section II: Free Response',
        questionCount: '2 questions',
        time: '1hr 40mins',
        scoreWeight: '40%',
        details: [
          'Document-Based Question (DBQ): 60 mins (includes 15-min reading period), 25% of score — 7 documents, develop and support an argument (1754–1980)',
          'Long Essay: 40 mins, 15% of score — choose 1 of 3 questions covering different time periods (1491–1800, 1800–1898, or 1890–2001)',
        ],
      },
    ],
  },
  {
    label: 'AP World History: Modern',
    slug: 'ap-world-history-modern',
    sourceUrl: 'https://apstudents.collegeboard.org/courses/ap-world-history-modern/assessment',
    sections: [
      {
        title: 'Section 1A: Multiple Choice',
        questionCount: '55 questions',
        time: '55mins',
        scoreWeight: '40%',
        details: [
          'Sets of 3–4 questions based on the same stimulus',
          'Sources include primary/secondary texts, images, charts, and maps',
          'Analyze provided sources and historical developments',
        ],
      },
      {
        title: 'Section 1B: Short Answer',
        questionCount: '3 questions',
        time: '40mins',
        scoreWeight: '20%',
        details: [
          'Q1: Required — 1–2 secondary sources, focus on 1200–2001',
          'Q2: Required — 1 primary source, focus on 1200–2001',
          'Q3 or Q4: Choose one — Q3 covers 1200–1750, Q4 covers 1750–2001',
          'Analyze sources, put developments in context, make connections',
        ],
      },
      {
        title: 'Section 2: Free Response',
        questionCount: '2 questions',
        time: '1hr 40mins',
        scoreWeight: '40%',
        details: [
          'Document-Based Question (DBQ): 60 mins (includes 15-min reading period), 25% of score — 7 documents, develop and support an argument (1200–2001)',
          'Long Essay: 40 mins, 15% of score — choose 1 of 3 questions covering different time periods',
        ],
      },
    ],
  },
]
