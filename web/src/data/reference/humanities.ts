import type { SubjectReference } from './types'

export const AP_ENGLISH_LITERATURE_REFERENCE: SubjectReference = {
  subjectName: 'AP English Literature',
  note: 'Literary vocabulary and exam structure for AP English Literature & Composition.',
  glossary: [
    { term: 'Diction', definition: 'A writer’s word choice, which shapes tone and meaning.' },
    { term: 'Imagery', definition: 'Descriptive language appealing to the senses to create vivid impressions.' },
    { term: 'Metaphor / simile', definition: 'Figurative comparisons — direct (metaphor) or using like/as (simile).' },
    { term: 'Tone', definition: 'The author’s or speaker’s attitude toward the subject.' },
    { term: 'Irony', definition: 'A contrast between expectation and reality (verbal, situational, dramatic).' },
    { term: 'Symbolism', definition: 'Using an object or image to represent a larger idea.' },
    { term: 'Point of view', definition: 'The perspective from which a story is told (first person, third-limited, omniscient).' },
    { term: 'Motif', definition: 'A recurring element that develops a theme.' },
  ],
  frequentlyTested: [
    { topic: 'Poetry analysis', weight: '~1/3 of FRQ', note: 'Analyzing how poetic techniques create meaning.' },
    { topic: 'Prose fiction analysis', weight: '~1/3 of FRQ', note: 'Characterization, narrative voice, and structure.' },
    { topic: 'Literary argument', weight: '~1/3 of FRQ', note: 'Interpreting a work you choose in response to a prompt.' },
    { topic: 'Reading (MCQ)', note: 'Close reading of poetry and prose passages for meaning and technique.' },
  ],
}

export const AP_ART_HISTORY_REFERENCE: SubjectReference = {
  subjectName: 'AP Art History',
  note: 'Key terms and content areas for AP Art History (250 required works).',
  glossary: [
    { term: 'Iconography', definition: 'The symbolic imagery in a work and the meanings it conveys.' },
    { term: 'Contrapposto', definition: 'A pose with weight on one leg, giving figures a naturalistic asymmetry.' },
    { term: 'Chiaroscuro', definition: 'Strong contrast between light and dark to model form.' },
    { term: 'Patronage', definition: 'The financial support and commissioning of art by individuals or institutions.' },
    { term: 'Picture plane', definition: 'The flat surface of a two-dimensional work on which the image is organized.' },
    { term: 'Provenance', definition: 'The documented history of an artwork’s ownership and origin.' },
  ],
  frequentlyTested: [
    { topic: 'Later Europe & Americas', weight: '~22%', note: '1750–1980 CE — the largest content area.' },
    { topic: 'Ancient Mediterranean', weight: '~15%', note: 'Greek, Roman, and Near Eastern works.' },
    { topic: 'Global contemporary', weight: '~11%', note: '1980 CE to present.' },
    { topic: 'Indigenous Americas / Africa / Asia', note: 'Non-Western traditions across several content areas.' },
  ],
}

export const AP_MUSIC_THEORY_REFERENCE: SubjectReference = {
  subjectName: 'AP Music Theory',
  note: 'Core theory vocabulary for AP Music Theory.',
  glossary: [
    { term: 'Interval', definition: 'The distance in pitch between two notes (e.g. major third, perfect fifth).' },
    { term: 'Triad', definition: 'A three-note chord built in thirds (root, third, fifth).' },
    { term: 'Cadence', definition: 'A harmonic close to a phrase (authentic, plagal, half, deceptive).' },
    { term: 'Roman numeral analysis', definition: 'Labeling chords by scale degree and quality (I, ii, V7, etc.).' },
    { term: 'Non-chord tone', definition: 'A note not part of the current chord (passing tone, suspension, neighbor tone).' },
    { term: 'Modulation', definition: 'A change from one key to another within a piece.' },
  ],
  frequentlyTested: [
    { topic: 'Harmony & voice leading', note: 'Roman numerals, part-writing, and cadences — the core of the exam.' },
    { topic: 'Melody & scales', note: 'Intervals, key signatures, scales, and modes.' },
    { topic: 'Rhythm & meter', note: 'Notation, meter, and rhythmic dictation.' },
    { topic: 'Aural skills', note: 'Listening: identifying intervals, chords, and errors.' },
  ],
}
