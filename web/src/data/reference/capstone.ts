import type { SubjectReference } from './types'

export const AP_SEMINAR_REFERENCE: SubjectReference = {
  subjectName: 'AP Seminar',
  note: 'Key skills and the QUEST framework for AP Seminar (assessed by performance tasks + an end-of-course exam).',
  glossary: [
    { term: 'Line of reasoning', definition: 'The logical sequence of claims and evidence that supports a thesis.' },
    { term: 'Credibility', definition: 'How trustworthy a source is, judged by authority, accuracy, and purpose.' },
    { term: 'Counterargument', definition: 'An opposing view that a strong argument acknowledges and responds to.' },
    { term: 'Synthesis', definition: 'Combining multiple sources or perspectives into a coherent new argument.' },
    { term: 'Bias', definition: 'A perspective or slant that can affect a source’s reliability.' },
  ],
  frequentlyTested: [
    { topic: 'Analyzing arguments', note: 'Identifying claims, reasoning, and evidence in a source.' },
    { topic: 'Evaluating sources & evidence', note: 'Judging credibility, relevance, and bias.' },
    { topic: 'Synthesizing ideas', note: 'Building an argument across multiple perspectives.' },
    { topic: 'Communicating an argument', note: 'Clear, well-organized written and oral argument.' },
  ],
}

export const AP_RESEARCH_REFERENCE: SubjectReference = {
  subjectName: 'AP Research',
  note: 'Key research concepts for AP Research (assessed by an academic paper and presentation).',
  glossary: [
    { term: 'Gap in the literature', definition: 'An unanswered question the existing research does not address, which your study targets.' },
    { term: 'Methodology', definition: 'The overall approach and specific methods used to gather and analyze data.' },
    { term: 'Validity', definition: 'The extent to which a study actually measures what it intends to.' },
    { term: 'Reliability', definition: 'The consistency of a measure or result across repetitions.' },
    { term: 'Sampling', definition: 'How participants or data points are selected from a population.' },
    { term: 'Peer review', definition: 'Evaluation of research by other experts before it is accepted as credible.' },
  ],
  frequentlyTested: [
    { topic: 'Framing a research question', note: 'Defining a focused, researchable inquiry from a gap.' },
    { topic: 'Method & design', note: 'Choosing and justifying an appropriate methodology.' },
    { topic: 'Analysis & argument', note: 'Turning evidence into a defensible, original conclusion.' },
    { topic: 'Ethics & limitations', note: 'Addressing validity, bias, and ethical considerations.' },
  ],
}
