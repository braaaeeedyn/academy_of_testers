import type { SubjectUnitBank } from './types'

export const BANK_AP_MUSIC_THEORY: SubjectUnitBank = {
  "label": "AP Music Theory",
  "slug": "ap-music-theory",
  "units": [
    {
      "unitNumber": 1,
      "title": "Music Fundamentals I: Pitch, Major Scales and Key Signatures, Rhythm, Meter, and Expressive Elements",
      "questions": [
        {
          "id": "q-u1-easy-1",
          "question": "How many beats does a whole note receive in 4/4 time?",
          "options": [
            "1",
            "2",
            "4",
            "8"
          ],
          "correctAnswer": 2,
          "explanation": "In 4/4 time, a whole note lasts for four beats, filling an entire measure.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-2",
          "question": "How many half steps are in one octave?",
          "options": [
            "7",
            "8",
            "12",
            "6"
          ],
          "correctAnswer": 2,
          "explanation": "An octave is divided into 12 equal half steps (semitones) in Western music.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-3",
          "question": "A sharp symbol (#) raises a pitch by",
          "options": [
            "a half step",
            "a whole step",
            "an octave",
            "a fifth"
          ],
          "correctAnswer": 0,
          "explanation": "A sharp raises a note by one half step (semitone); a flat lowers it by a half step.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-4",
          "question": "The pattern of whole and half steps in a major scale is",
          "options": [
            "W W H W W W H",
            "H W H W H W H",
            "W H W H W H W",
            "W W W H W W H"
          ],
          "correctAnswer": 0,
          "explanation": "A major scale follows the pattern: whole, whole, half, whole, whole, whole, half.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-5",
          "question": "In 3/4 time, how many quarter-note beats are in each measure?",
          "options": [
            "2",
            "3",
            "4",
            "6"
          ],
          "correctAnswer": 1,
          "explanation": "The top number of the time signature (3) indicates three beats per measure, and the bottom (4) means the quarter note gets the beat.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-6",
          "question": "The C major scale contains",
          "options": [
            "no sharps or flats",
            "one sharp",
            "two flats",
            "three sharps"
          ],
          "correctAnswer": 0,
          "explanation": "C major is the only major scale with no sharps or flats—it uses all the white keys on a piano.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-7",
          "question": "The Italian term 'forte' (f) means to play",
          "options": [
            "softly",
            "loudly",
            "fast",
            "slowly"
          ],
          "correctAnswer": 1,
          "explanation": "Forte (f) is a dynamic marking meaning loud. Piano (p) means soft.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-8",
          "question": "A quarter note in 4/4 time receives how many beats?",
          "options": [
            "1",
            "2",
            "4",
            "half"
          ],
          "correctAnswer": 0,
          "explanation": "In 4/4 time, the quarter note receives one beat.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-9",
          "question": "Tempo refers to the",
          "options": [
            "loudness of music",
            "speed of the music",
            "pitch of notes",
            "key signature"
          ],
          "correctAnswer": 1,
          "explanation": "Tempo is the speed or pace of a piece, often indicated in beats per minute or with terms like Allegro or Adagio.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-10",
          "question": "A key signature is placed",
          "options": [
            "at the end of a piece",
            "at the beginning of each staff, after the clef",
            "only in the middle",
            "above the notes"
          ],
          "correctAnswer": 1,
          "explanation": "The key signature appears at the start of each staff, just after the clef, indicating which notes are consistently sharp or flat.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-medium-1",
          "question": "How many sharps are in the key of D major?",
          "options": [
            "one",
            "two",
            "three",
            "four"
          ],
          "correctAnswer": 1,
          "explanation": "D major has two sharps: F# and C#.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-2",
          "question": "A dotted half note in 4/4 time receives how many beats?",
          "options": [
            "2",
            "3",
            "4",
            "1.5"
          ],
          "correctAnswer": 1,
          "explanation": "A dot adds half the note's value. A half note is 2 beats, plus half (1 beat) equals 3 beats.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-3",
          "question": "The interval from C up to G is a",
          "options": [
            "perfect fifth",
            "perfect fourth",
            "major third",
            "octave"
          ],
          "correctAnswer": 0,
          "explanation": "From C to G spans five letter names (C-D-E-F-G) and is a perfect fifth (7 half steps).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-4",
          "question": "In 6/8 time, which note typically receives one beat when felt in two?",
          "options": [
            "the eighth note in a fast simple sense",
            "a dotted quarter note (the beat is compound)",
            "the whole note",
            "the sixteenth note"
          ],
          "correctAnswer": 1,
          "explanation": "6/8 is a compound meter usually felt in two beats, each beat being a dotted quarter note (three eighth notes).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-5",
          "question": "The term 'crescendo' indicates that the music should",
          "options": [
            "gradually get louder",
            "gradually get softer",
            "stop suddenly",
            "speed up"
          ],
          "correctAnswer": 0,
          "explanation": "A crescendo directs the performer to gradually increase the volume.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-6",
          "question": "How many half steps are in a major third?",
          "options": [
            "3",
            "4",
            "5",
            "2"
          ],
          "correctAnswer": 1,
          "explanation": "A major third spans four half steps (e.g., C to E).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-7",
          "question": "The order of sharps as they appear in key signatures is",
          "options": [
            "F C G D A E B",
            "B E A D G C F",
            "C D E F G A B",
            "A B C D E F G"
          ],
          "correctAnswer": 0,
          "explanation": "Sharps are added in the order F, C, G, D, A, E, B (each a fifth higher than the last).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-8",
          "question": "A time signature of 2/2 (cut time) means the beat is felt on the",
          "options": [
            "half note, two per measure",
            "quarter note, four per measure",
            "eighth note",
            "whole note"
          ],
          "correctAnswer": 0,
          "explanation": "In 2/2 (cut time), there are two beats per measure and the half note receives the beat.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-9",
          "question": "Which scale degree is called the 'dominant'?",
          "options": [
            "the 5th",
            "the 1st",
            "the 4th",
            "the 7th"
          ],
          "correctAnswer": 0,
          "explanation": "The fifth scale degree is the dominant. The first is the tonic and the fourth is the subdominant.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-10",
          "question": "A syncopated rhythm is one that",
          "options": [
            "emphasizes normally weak beats or off-beats",
            "always uses whole notes",
            "has no rhythm",
            "only uses strong beats"
          ],
          "correctAnswer": 0,
          "explanation": "Syncopation places emphasis on off-beats or normally weak beats, creating rhythmic tension and interest.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-hard-1",
          "question": "Using the circle of fifths, how many sharps does the key of A major have?",
          "options": [
            "two",
            "three",
            "four",
            "one"
          ],
          "correctAnswer": 1,
          "explanation": "A major has three sharps: F#, C#, and G#. Each step clockwise on the circle of fifths adds one sharp (C=0, G=1, D=2, A=3).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-2",
          "question": "A measure in 4/4 contains a half note, a quarter note, and one more note to complete it. That note must be a",
          "options": [
            "quarter note",
            "half note",
            "eighth note",
            "whole note"
          ],
          "correctAnswer": 0,
          "explanation": "A half note (2) + a quarter note (1) = 3 beats. To fill a 4/4 measure (4 beats), one more quarter note (1 beat) is needed.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-3",
          "question": "Enharmonic equivalents are two notes that",
          "options": [
            "sound the same but are spelled differently (e.g., F# and Gb)",
            "have different pitches",
            "are always an octave apart",
            "cannot be played together"
          ],
          "correctAnswer": 0,
          "explanation": "Enharmonic equivalents sound identical in pitch but are written with different note names, such as F# and Gb.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-4",
          "question": "In compound meter such as 9/8, the beat is grouped in sets of",
          "options": [
            "three eighth notes per beat",
            "two eighth notes per beat",
            "four eighth notes per beat",
            "one eighth note per beat"
          ],
          "correctAnswer": 0,
          "explanation": "In compound meters, each beat divides into three; 9/8 has three beats, each a dotted quarter (three eighth notes).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-5",
          "question": "The interval from C to F# is a",
          "options": [
            "augmented fourth (tritone)",
            "perfect fourth",
            "perfect fifth",
            "major third"
          ],
          "correctAnswer": 0,
          "explanation": "C to F is a perfect fourth (5 half steps); raising F to F# makes it an augmented fourth (6 half steps), also called a tritone.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-6",
          "question": "A performer sees the marking 'ritardando.' They should",
          "options": [
            "gradually slow down",
            "gradually speed up",
            "play louder",
            "stop"
          ],
          "correctAnswer": 0,
          "explanation": "Ritardando (rit.) instructs the performer to gradually decrease the tempo (slow down).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-7",
          "question": "If a major scale begins on G, which note is raised to maintain the correct whole/half step pattern?",
          "options": [
            "F is raised to F#",
            "C is raised to C#",
            "B is raised to B#",
            "G is raised to G#"
          ],
          "correctAnswer": 0,
          "explanation": "G major requires F# so that the interval between the 7th (F#) and 8th (G) degrees is a half step, matching the major scale pattern.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-8",
          "question": "A triplet in a quarter-note beat means",
          "options": [
            "three eighth-note triplets are played in the time of two normal eighth notes (one beat)",
            "three notes played very slowly",
            "two notes in the time of three",
            "a rest for three beats"
          ],
          "correctAnswer": 0,
          "explanation": "An eighth-note triplet fits three evenly spaced notes into the span of one quarter-note beat (normally two eighth notes).",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-9",
          "question": "How many total beats are represented by two dotted quarter notes in 4/4 time?",
          "options": [
            "3",
            "2",
            "4",
            "1.5"
          ],
          "correctAnswer": 0,
          "explanation": "A dotted quarter note equals 1.5 beats. Two of them equal 1.5 + 1.5 = 3 beats.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-10",
          "question": "Why does the major scale pattern (W W H W W W H) produce the same quality of scale regardless of starting note?",
          "options": [
            "Because the pattern of intervals, not the specific pitches, defines the scale's sound",
            "Because all notes sound the same",
            "Because only C works",
            "Because sharps are ignored"
          ],
          "correctAnswer": 0,
          "explanation": "A scale's characteristic sound comes from its intervallic pattern. Applying the same whole/half step sequence from any starting pitch yields a major scale, which is why key signatures adjust the notes.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 2,
      "title": "Music Fundamentals II: Minor Scales and Key Signatures, Melody, Timbre, and Texture",
      "questions": [
        {
          "id": "q-u2-easy-1",
          "question": "The natural minor scale is built on which pattern of steps?",
          "options": [
            "W H W W H W W",
            "W W H W W W H",
            "H H W W H W W",
            "W W W H W W H"
          ],
          "correctAnswer": 0,
          "explanation": "The natural minor scale follows: whole, half, whole, whole, half, whole, whole.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-2",
          "question": "The relative minor of C major is",
          "options": [
            "A minor",
            "G minor",
            "E minor",
            "F minor"
          ],
          "correctAnswer": 0,
          "explanation": "A minor is the relative minor of C major; they share the same key signature (no sharps or flats).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-3",
          "question": "A relative major and relative minor share the same",
          "options": [
            "key signature",
            "starting note",
            "tempo",
            "time signature"
          ],
          "correctAnswer": 0,
          "explanation": "Relative keys share the same key signature but have different tonic notes.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-4",
          "question": "Timbre refers to the",
          "options": [
            "tone color or quality that distinguishes different instruments or voices",
            "loudness",
            "speed",
            "pitch"
          ],
          "correctAnswer": 0,
          "explanation": "Timbre (tone color) is the quality that lets us tell, for example, a violin from a trumpet playing the same pitch.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-5",
          "question": "A melody is best described as",
          "options": [
            "a succession of single pitches perceived as a coherent line",
            "several notes played at once",
            "the rhythm alone",
            "the loudness"
          ],
          "correctAnswer": 0,
          "explanation": "A melody is a linear succession of pitches heard as a unified musical line or tune.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-6",
          "question": "Music with a single melodic line and no accompaniment has which texture?",
          "options": [
            "monophonic",
            "homophonic",
            "polyphonic",
            "harmonic"
          ],
          "correctAnswer": 0,
          "explanation": "Monophonic texture consists of a single melodic line with no harmony or accompaniment.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-7",
          "question": "To find the relative minor of a major key, count",
          "options": [
            "down three half steps from the major tonic",
            "up five notes",
            "down an octave",
            "up a half step"
          ],
          "correctAnswer": 0,
          "explanation": "The relative minor tonic is three half steps below the major tonic (e.g., C down to A).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-8",
          "question": "A texture with a main melody accompanied by chords is called",
          "options": [
            "homophonic",
            "monophonic",
            "polyphonic",
            "atonal"
          ],
          "correctAnswer": 0,
          "explanation": "Homophonic texture features one dominant melody supported by harmonic accompaniment (chords).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-9",
          "question": "The harmonic minor scale differs from natural minor by raising which scale degree?",
          "options": [
            "the 7th",
            "the 3rd",
            "the 5th",
            "the 2nd"
          ],
          "correctAnswer": 0,
          "explanation": "The harmonic minor scale raises the 7th scale degree by a half step, creating a leading tone.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-10",
          "question": "Two or more independent melodic lines sounding together create which texture?",
          "options": [
            "polyphonic",
            "monophonic",
            "homophonic",
            "unison"
          ],
          "correctAnswer": 0,
          "explanation": "Polyphonic texture features multiple independent melodic lines occurring simultaneously (as in a fugue).",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-medium-1",
          "question": "The key of E minor has how many sharps, and which one?",
          "options": [
            "one sharp: F#",
            "two sharps",
            "no sharps",
            "one sharp: C#"
          ],
          "correctAnswer": 0,
          "explanation": "E minor is the relative minor of G major, so it shares G major's key signature: one sharp, F#.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-2",
          "question": "The melodic minor scale is unusual because it",
          "options": [
            "raises the 6th and 7th degrees ascending but reverts to natural minor descending",
            "never changes",
            "has no sharps",
            "is the same as major"
          ],
          "correctAnswer": 0,
          "explanation": "Melodic minor raises the 6th and 7th degrees when ascending, then typically lowers them (natural minor) when descending.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-3",
          "question": "Which describes a conjunct melody?",
          "options": [
            "one that moves mostly by step (small intervals)",
            "one that leaps by large intervals",
            "one with no pitches",
            "one that is very loud"
          ],
          "correctAnswer": 0,
          "explanation": "A conjunct melody moves primarily by step (adjacent scale tones), producing smooth motion; a disjunct melody moves by leaps.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-4",
          "question": "The three forms of the minor scale are",
          "options": [
            "natural, harmonic, and melodic",
            "major, minor, and diminished",
            "tonic, dominant, subdominant",
            "whole, half, and quarter"
          ],
          "correctAnswer": 0,
          "explanation": "The minor scale exists in three forms: natural, harmonic (raised 7th), and melodic (raised 6th and 7th ascending).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-5",
          "question": "Why is a leading tone important in the harmonic minor scale?",
          "options": [
            "It creates a strong half-step pull toward the tonic",
            "It makes the scale major",
            "It removes the tonic",
            "It lowers the pitch"
          ],
          "correctAnswer": 0,
          "explanation": "Raising the 7th degree creates a leading tone a half step below the tonic, producing a strong pull toward resolution to the tonic.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-6",
          "question": "A round like 'Row, Row, Row Your Boat,' where voices enter at different times with the same melody, is an example of",
          "options": [
            "polyphonic (imitative) texture",
            "monophonic texture",
            "homophonic texture",
            "silence"
          ],
          "correctAnswer": 0,
          "explanation": "A round is imitative polyphony: multiple voices sing the same melody entering at staggered times, creating independent overlapping lines.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-7",
          "question": "Timbre is affected by which of the following?",
          "options": [
            "the instrument's material, shape, and how it produces sound",
            "only the pitch",
            "only the volume",
            "only the tempo"
          ],
          "correctAnswer": 0,
          "explanation": "Timbre arises from the harmonic content produced by an instrument's construction and sound-production method, giving each its distinct color.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-8",
          "question": "The parallel minor of C major is",
          "options": [
            "C minor",
            "A minor",
            "G minor",
            "E minor"
          ],
          "correctAnswer": 0,
          "explanation": "The parallel minor shares the same tonic note but a different key signature. C major's parallel minor is C minor.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-9",
          "question": "A melody's contour describes",
          "options": [
            "the overall shape of its rise and fall in pitch",
            "its loudness",
            "its tempo",
            "its key signature"
          ],
          "correctAnswer": 0,
          "explanation": "Melodic contour is the general shape traced by a melody's ascending and descending motion over time.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-10",
          "question": "The difference between relative and parallel keys is that relative keys share a ___ while parallel keys share a ___.",
          "options": [
            "key signature; tonic note",
            "tonic note; key signature",
            "tempo; melody",
            "clef; rhythm"
          ],
          "correctAnswer": 0,
          "explanation": "Relative keys share the same key signature (different tonics), while parallel keys share the same tonic note (different key signatures).",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-hard-1",
          "question": "The key of B-flat minor has how many flats?",
          "options": [
            "five",
            "two",
            "three",
            "seven"
          ],
          "correctAnswer": 0,
          "explanation": "B-flat minor is the relative minor of D-flat major, which has five flats (Bb, Eb, Ab, Db, Gb).",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-2",
          "question": "In A harmonic minor, which note is the raised leading tone?",
          "options": [
            "G#",
            "F#",
            "A#",
            "C#"
          ],
          "correctAnswer": 0,
          "explanation": "A natural minor has G natural; raising the 7th degree by a half step gives G#, the leading tone in A harmonic minor.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-3",
          "question": "Why does the melodic minor scale differ ascending versus descending?",
          "options": [
            "The raised 6th and 7th smooth the ascent to the tonic, but are unnecessary descending, so natural minor is used",
            "It is a printing convention only",
            "Descending scales have no pitches",
            "The tonic changes"
          ],
          "correctAnswer": 0,
          "explanation": "Ascending, the raised 6th and 7th create smooth stepwise motion up to the tonic; descending, that pull is not needed, so composers traditionally revert to natural minor.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-4",
          "question": "A texture in which all voices move together in the same rhythm to produce chords is called",
          "options": [
            "homorhythmic (chordal) homophony",
            "imitative polyphony",
            "monophony",
            "heterophony"
          ],
          "correctAnswer": 0,
          "explanation": "Homorhythmic (or chordal) texture is a type of homophony where all parts move in the same rhythm, as in a hymn.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-5",
          "question": "Given a piece in G minor, which key signature would you expect?",
          "options": [
            "two flats (Bb and Eb)",
            "one sharp",
            "no accidentals",
            "three sharps"
          ],
          "correctAnswer": 0,
          "explanation": "G minor is the relative minor of B-flat major, sharing its two flats: Bb and Eb.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-6",
          "question": "A melody that spans a wide range and uses many large leaps would be described as",
          "options": [
            "disjunct with a wide range",
            "conjunct and narrow",
            "monotone",
            "atonal only"
          ],
          "correctAnswer": 0,
          "explanation": "Disjunct motion means the melody moves by leaps; combined with a wide pitch span, it is described as disjunct with a wide range.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-7",
          "question": "How can two instruments playing the identical pitch and dynamic still be distinguished by a listener?",
          "options": [
            "by their different timbres (harmonic content/tone color)",
            "by their tempo",
            "they cannot be distinguished",
            "by their key signature"
          ],
          "correctAnswer": 0,
          "explanation": "Even at the same pitch and volume, instruments differ in the overtone content and envelope of their sound—their timbre—allowing listeners to tell them apart.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-8",
          "question": "A composer wants a passage to sound mysterious and unresolved by avoiding the leading tone. Using natural minor rather than harmonic minor helps because natural minor",
          "options": [
            "has a lowered 7th, lacking the strong pull to the tonic",
            "has a raised 7th",
            "is actually major",
            "cannot be played"
          ],
          "correctAnswer": 0,
          "explanation": "Natural minor's lowered 7th (a subtonic, not a leading tone) is a whole step below the tonic, so it lacks the strong resolution pull, contributing to a more open or modal, unresolved feeling.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-9",
          "question": "Heterophonic texture is best described as",
          "options": [
            "multiple performers simultaneously varying the same basic melody",
            "a single unaccompanied line",
            "chords in the same rhythm",
            "total silence"
          ],
          "correctAnswer": 0,
          "explanation": "In heterophony, performers play variations of the same melody at the same time, producing a subtly layered version of one tune.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-10",
          "question": "Understanding relative and parallel keys is useful to composers because it allows them to",
          "options": [
            "shift between major and minor colors while managing shared pitches or tonics for expressive effect",
            "only write in C major",
            "avoid all key signatures",
            "play louder"
          ],
          "correctAnswer": 0,
          "explanation": "Knowing relative and parallel relationships lets composers move between major and minor for expressive contrast, exploiting shared key signatures (relative) or shared tonics (parallel) in their harmony.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 3,
      "title": "Music Fundamentals III: Triads and Seventh Chords",
      "questions": [
        {
          "id": "q-u3-easy-1",
          "question": "A triad is a chord made of how many notes?",
          "options": [
            "two",
            "three",
            "four",
            "five"
          ],
          "correctAnswer": 1,
          "explanation": "A triad consists of three notes: a root, a third, and a fifth.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-2",
          "question": "A major triad consists of a root, a",
          "options": [
            "major third, and a perfect fifth",
            "minor third, and a perfect fifth",
            "major third, and a diminished fifth",
            "perfect fourth, and an octave"
          ],
          "correctAnswer": 0,
          "explanation": "A major triad is built from a root, a major third above it, and a perfect fifth above the root.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-3",
          "question": "A minor triad consists of a root, a",
          "options": [
            "minor third, and a perfect fifth",
            "major third, and a perfect fifth",
            "major third, and an augmented fifth",
            "minor third, and a diminished fifth"
          ],
          "correctAnswer": 0,
          "explanation": "A minor triad has a root, a minor third, and a perfect fifth.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-4",
          "question": "The lowest note of a triad in root position is the",
          "options": [
            "root",
            "third",
            "fifth",
            "seventh"
          ],
          "correctAnswer": 0,
          "explanation": "In root position, the root is the lowest note, with the third and fifth stacked above it.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-5",
          "question": "A seventh chord is a triad plus a note a ___ above the root.",
          "options": [
            "seventh",
            "fifth",
            "third",
            "octave"
          ],
          "correctAnswer": 0,
          "explanation": "A seventh chord adds a fourth note a seventh above the root to a triad.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-6",
          "question": "The notes of a C major triad are",
          "options": [
            "C, E, G",
            "C, D, E",
            "C, F, A",
            "C, E, G#"
          ],
          "correctAnswer": 0,
          "explanation": "A C major triad is C (root), E (major third), and G (perfect fifth).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-7",
          "question": "A diminished triad consists of a root, a minor third, and a",
          "options": [
            "diminished fifth",
            "perfect fifth",
            "augmented fifth",
            "major third"
          ],
          "correctAnswer": 0,
          "explanation": "A diminished triad has a root, a minor third, and a diminished (lowered) fifth.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-8",
          "question": "When the third of a triad is the lowest sounding note, the chord is in",
          "options": [
            "first inversion",
            "root position",
            "second inversion",
            "open position"
          ],
          "correctAnswer": 0,
          "explanation": "First inversion places the third of the chord in the bass (as the lowest note).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-9",
          "question": "An augmented triad consists of a root, a major third, and an",
          "options": [
            "augmented fifth",
            "perfect fifth",
            "diminished fifth",
            "minor third"
          ],
          "correctAnswer": 0,
          "explanation": "An augmented triad has a root, a major third, and an augmented (raised) fifth.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-10",
          "question": "A dominant seventh chord is built on which scale degree?",
          "options": [
            "the 5th (dominant)",
            "the 1st (tonic)",
            "the 4th (subdominant)",
            "the 2nd"
          ],
          "correctAnswer": 0,
          "explanation": "The dominant seventh chord is built on the fifth scale degree (dominant) and includes a major triad plus a minor seventh.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-medium-1",
          "question": "The quality of the triad built on the tonic (1st degree) of a major scale is",
          "options": [
            "major",
            "minor",
            "diminished",
            "augmented"
          ],
          "correctAnswer": 0,
          "explanation": "In a major key, the tonic triad (I) is major.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-2",
          "question": "In a major key, the triad built on the 7th scale degree (leading tone) is",
          "options": [
            "diminished",
            "major",
            "minor",
            "augmented"
          ],
          "correctAnswer": 0,
          "explanation": "The vii° chord (leading-tone triad) in a major key is diminished (root, minor third, diminished fifth).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-3",
          "question": "A G dominant seventh chord (G7) contains which notes?",
          "options": [
            "G, B, D, F",
            "G, B, D, F#",
            "G, Bb, D, F",
            "G, B, D, E"
          ],
          "correctAnswer": 0,
          "explanation": "G7 is a G major triad (G, B, D) plus a minor seventh above G, which is F. So G, B, D, F.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-4",
          "question": "When the fifth of a triad is in the bass, the chord is in",
          "options": [
            "second inversion",
            "first inversion",
            "root position",
            "open voicing"
          ],
          "correctAnswer": 0,
          "explanation": "Second inversion places the fifth of the chord as the lowest note.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-5",
          "question": "In a major key, which scale degrees produce minor triads?",
          "options": [
            "2, 3, and 6",
            "1, 4, and 5",
            "5 and 7",
            "1 and 4"
          ],
          "correctAnswer": 0,
          "explanation": "In a major key, the ii, iii, and vi chords (2nd, 3rd, and 6th degrees) are minor.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-6",
          "question": "A major seventh chord consists of",
          "options": [
            "a major triad plus a major seventh",
            "a major triad plus a minor seventh",
            "a minor triad plus a major seventh",
            "a diminished triad plus a seventh"
          ],
          "correctAnswer": 0,
          "explanation": "A major seventh chord is a major triad with a major seventh added above the root (e.g., Cmaj7: C, E, G, B).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-7",
          "question": "A minor seventh chord consists of",
          "options": [
            "a minor triad plus a minor seventh",
            "a major triad plus a major seventh",
            "a minor triad plus a major seventh",
            "a diminished triad plus a major seventh"
          ],
          "correctAnswer": 0,
          "explanation": "A minor seventh chord is a minor triad with a minor seventh added (e.g., Am7: A, C, E, G).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-8",
          "question": "Roman numeral analysis uses uppercase numerals for ___ chords and lowercase for ___ chords.",
          "options": [
            "major; minor",
            "minor; major",
            "loud; soft",
            "fast; slow"
          ],
          "correctAnswer": 0,
          "explanation": "By convention, uppercase Roman numerals denote major chords and lowercase denote minor chords (with ° for diminished).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-9",
          "question": "The notes of a D minor triad are",
          "options": [
            "D, F, A",
            "D, F#, A",
            "D, F, A#",
            "D, E, A"
          ],
          "correctAnswer": 0,
          "explanation": "A D minor triad is D (root), F (minor third), and A (perfect fifth).",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-10",
          "question": "Chord inversions are indicated in figured bass by numbers that show",
          "options": [
            "the intervals above the bass note",
            "the tempo",
            "the dynamics",
            "the key signature"
          ],
          "correctAnswer": 0,
          "explanation": "Figured bass numbers indicate the intervals above the bass note, revealing the chord's inversion and voicing.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-hard-1",
          "question": "The triad built on the 2nd scale degree (supertonic) in a natural minor key is",
          "options": [
            "diminished",
            "minor",
            "major",
            "augmented"
          ],
          "correctAnswer": 0,
          "explanation": "In natural minor, the ii° chord (supertonic) is diminished (root, minor third, diminished fifth).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-2",
          "question": "A fully diminished seventh chord is built from",
          "options": [
            "stacked minor thirds (a diminished triad plus a diminished seventh)",
            "stacked major thirds",
            "a major triad plus a minor seventh",
            "a minor triad plus a major seventh"
          ],
          "correctAnswer": 0,
          "explanation": "A fully diminished seventh chord consists of three stacked minor thirds, combining a diminished triad with a diminished seventh above the root.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-3",
          "question": "Why is the dominant seventh chord (V7) so important in establishing a key?",
          "options": [
            "It contains a tritone (between the 3rd and 7th) that strongly resolves to the tonic",
            "It has no tension",
            "It is always the loudest chord",
            "It cannot be inverted"
          ],
          "correctAnswer": 0,
          "explanation": "The V7 chord contains a tritone between its third (the leading tone) and seventh, which creates instability that resolves powerfully to the tonic, strongly defining the key.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-4",
          "question": "A C major triad in first inversion has which note in the bass?",
          "options": [
            "E",
            "C",
            "G",
            "B"
          ],
          "correctAnswer": 0,
          "explanation": "First inversion places the third in the bass. For a C major triad (C, E, G), the third is E, so E is the lowest note.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-5",
          "question": "In a major key, the correct sequence of triad qualities from I to vii° is",
          "options": [
            "major, minor, minor, major, major, minor, diminished",
            "major, major, major, minor, minor, minor, diminished",
            "minor, major, minor, major, minor, major, minor",
            "all major"
          ],
          "correctAnswer": 0,
          "explanation": "The diatonic triad qualities in a major key are: I major, ii minor, iii minor, IV major, V major, vi minor, vii° diminished.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-6",
          "question": "A half-diminished seventh chord differs from a fully diminished seventh chord because it has",
          "options": [
            "a diminished triad plus a minor seventh (rather than a diminished seventh)",
            "a major triad",
            "stacked major thirds",
            "no seventh"
          ],
          "correctAnswer": 0,
          "explanation": "A half-diminished seventh chord is a diminished triad with a minor seventh, whereas the fully diminished has a diminished seventh.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-7",
          "question": "Which seventh chord quality naturally occurs on the tonic of a major key (I7)?",
          "options": [
            "major seventh",
            "dominant seventh",
            "minor seventh",
            "diminished seventh"
          ],
          "correctAnswer": 0,
          "explanation": "Built diatonically on the tonic of a major key, the seventh chord is a major seventh (major triad plus major seventh), e.g., Cmaj7 in C major.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-8",
          "question": "Identifying a chord's root when it is in inversion requires",
          "options": [
            "rearranging the notes into stacked thirds to find the bottom of the stack",
            "looking only at the bass note",
            "counting the beats",
            "reading the tempo"
          ],
          "correctAnswer": 0,
          "explanation": "To find the root of an inverted chord, rearrange the pitches into a stack of thirds; the note at the bottom of that stack is the root, regardless of which note is in the bass.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-9",
          "question": "The chord symbol 'Cm7b5' refers to which chord?",
          "options": [
            "a half-diminished seventh chord (C, Eb, Gb, Bb)",
            "a C major seventh",
            "a C augmented",
            "a dominant seventh"
          ],
          "correctAnswer": 0,
          "explanation": "Cm7b5 (C minor seventh flat five) is a half-diminished seventh chord: a diminished triad (C, Eb, Gb) plus a minor seventh (Bb).",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-10",
          "question": "Why can the same set of pitches represent different chords depending on context?",
          "options": [
            "The functional root and the surrounding harmony determine how the chord is heard and labeled",
            "Pitches never change meaning",
            "Only the loudest note matters",
            "Context is irrelevant to harmony"
          ],
          "correctAnswer": 0,
          "explanation": "A collection of pitches can be interpreted differently based on which note functions as the root and how it relates to surrounding chords—so harmonic context, not just the notes, determines the chord's identity and function.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 4,
      "title": "Harmony and Voice Leading",
      "questions": [
        {
          "id": "q-u4-easy-1",
          "question": "In four-part harmony, the four standard voices from highest to lowest are",
          "options": [
            "soprano, alto, tenor, bass",
            "bass, tenor, alto, soprano",
            "alto, soprano, bass, tenor",
            "treble, middle, low, deep"
          ],
          "correctAnswer": 0,
          "explanation": "The four voices, highest to lowest, are soprano, alto, tenor, and bass (SATB).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-2",
          "question": "A cadence is",
          "options": [
            "a harmonic conclusion or resting point in music",
            "a fast passage",
            "a single note",
            "a loud dynamic"
          ],
          "correctAnswer": 0,
          "explanation": "A cadence is a chord progression that provides a sense of resolution or pause, punctuating musical phrases.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-3",
          "question": "An authentic cadence moves from",
          "options": [
            "V (or V7) to I",
            "IV to I",
            "I to V",
            "ii to iii"
          ],
          "correctAnswer": 0,
          "explanation": "An authentic cadence moves from the dominant (V or V7) to the tonic (I), giving a strong sense of resolution.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-4",
          "question": "Voice leading refers to",
          "options": [
            "how individual voices move from one chord to the next",
            "how loud each voice is",
            "the tempo of a piece",
            "the instrument choice"
          ],
          "correctAnswer": 0,
          "explanation": "Voice leading is the art of moving each melodic line (voice) smoothly and logically from chord to chord.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-5",
          "question": "A plagal cadence moves from",
          "options": [
            "IV to I",
            "V to I",
            "I to IV",
            "ii to V"
          ],
          "correctAnswer": 0,
          "explanation": "A plagal cadence (the 'Amen' cadence) moves from the subdominant (IV) to the tonic (I).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-6",
          "question": "In good voice leading, large leaps in a voice are generally",
          "options": [
            "avoided in favor of stepwise motion when possible",
            "preferred over stepwise motion",
            "required in every measure",
            "only used in the bass"
          ],
          "correctAnswer": 0,
          "explanation": "Smooth voice leading favors stepwise motion and small intervals, minimizing large leaps for a more connected sound.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-7",
          "question": "A half cadence ends on which chord?",
          "options": [
            "V (the dominant)",
            "I (the tonic)",
            "IV",
            "vi"
          ],
          "correctAnswer": 0,
          "explanation": "A half cadence ends on the dominant (V), creating a sense of pause that expects continuation.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-8",
          "question": "Parallel fifths and octaves are traditionally",
          "options": [
            "avoided in common-practice voice leading",
            "required",
            "always used in cadences",
            "the goal of harmony"
          ],
          "correctAnswer": 0,
          "explanation": "In common-practice part writing, parallel perfect fifths and octaves are avoided because they weaken the independence of the voices.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-9",
          "question": "The tonic chord in a progression functions to provide",
          "options": [
            "a sense of rest and resolution",
            "maximum tension",
            "dissonance",
            "a key change"
          ],
          "correctAnswer": 0,
          "explanation": "The tonic (I) is the point of rest and stability, the harmonic 'home' to which other chords tend to resolve.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-10",
          "question": "A deceptive cadence occurs when V resolves to",
          "options": [
            "vi instead of the expected I",
            "I as expected",
            "IV",
            "V7"
          ],
          "correctAnswer": 0,
          "explanation": "A deceptive (interrupted) cadence moves from V to vi rather than the expected I, thwarting the anticipated resolution.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-medium-1",
          "question": "Which harmonic function does the dominant (V) chord serve?",
          "options": [
            "it creates tension that resolves to the tonic",
            "it provides rest",
            "it is always dissonant and unresolvable",
            "it establishes the subdominant"
          ],
          "correctAnswer": 0,
          "explanation": "The dominant chord builds harmonic tension (especially with the leading tone) that seeks resolution to the tonic.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-2",
          "question": "When two voices move in the same direction but by different intervals, the motion is called",
          "options": [
            "similar motion",
            "parallel motion",
            "contrary motion",
            "oblique motion"
          ],
          "correctAnswer": 0,
          "explanation": "Similar motion is when voices move in the same direction but by different intervals; parallel motion keeps the same interval.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-3",
          "question": "Contrary motion between two voices means they",
          "options": [
            "move in opposite directions",
            "move in the same direction",
            "stay on the same notes",
            "move in parallel"
          ],
          "correctAnswer": 0,
          "explanation": "Contrary motion occurs when two voices move in opposite directions, which promotes voice independence.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-4",
          "question": "In an authentic cadence, the leading tone in the V chord typically resolves",
          "options": [
            "up a half step to the tonic",
            "down a fifth",
            "stays the same",
            "up an octave"
          ],
          "correctAnswer": 0,
          "explanation": "The leading tone (7th degree) in the dominant resolves upward by a half step to the tonic, a hallmark of strong voice leading.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-5",
          "question": "Oblique motion between two voices occurs when",
          "options": [
            "one voice stays on the same pitch while the other moves",
            "both voices move in the same direction",
            "both move in opposite directions",
            "both move by the same interval"
          ],
          "correctAnswer": 0,
          "explanation": "In oblique motion, one voice remains stationary while the other moves.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-6",
          "question": "A perfect authentic cadence (PAC) requires that",
          "options": [
            "V-I with both chords in root position and the tonic in the soprano",
            "any V-I motion",
            "IV-I motion",
            "V-vi motion"
          ],
          "correctAnswer": 0,
          "explanation": "A perfect authentic cadence needs V (or V7) to I, both in root position, with the tonic note in the soprano—the strongest form of resolution.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-7",
          "question": "Why is contrary motion often preferred when approaching perfect intervals?",
          "options": [
            "It helps avoid parallel fifths and octaves",
            "It creates parallel octaves",
            "It is louder",
            "It changes the key"
          ],
          "correctAnswer": 0,
          "explanation": "Approaching perfect fifths or octaves in contrary (or oblique) motion helps composers avoid forbidden parallel perfect intervals.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-8",
          "question": "A chord progression's harmonic rhythm refers to",
          "options": [
            "the rate at which chords change",
            "the melody's rhythm only",
            "the tempo marking",
            "the loudness"
          ],
          "correctAnswer": 0,
          "explanation": "Harmonic rhythm is the pace at which the underlying chords change, which affects the music's momentum and structure.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-9",
          "question": "In part writing, the interval between adjacent upper voices (soprano-alto, alto-tenor) should generally not exceed",
          "options": [
            "an octave",
            "a fifth",
            "a third",
            "two octaves"
          ],
          "correctAnswer": 0,
          "explanation": "To maintain balanced spacing, adjacent upper voices (S-A and A-T) are traditionally kept within an octave of each other; the tenor-bass may be wider.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-10",
          "question": "A tonicization occurs when",
          "options": [
            "a chord temporarily acts as a new tonic, often via a secondary dominant",
            "the key signature is removed",
            "the tempo doubles",
            "the piece ends"
          ],
          "correctAnswer": 0,
          "explanation": "Tonicization briefly treats a non-tonic chord as a temporary tonic, frequently approached by its own secondary dominant (e.g., V/V).",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-hard-1",
          "question": "A secondary dominant such as V/V in the key of C major would be which chord?",
          "options": [
            "D major (the dominant of G)",
            "G major",
            "C major",
            "A minor"
          ],
          "correctAnswer": 0,
          "explanation": "V/V is the dominant of the dominant. In C major, the dominant is G, and G's dominant is D major—so V/V is a D major chord.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-2",
          "question": "Why do parallel perfect fifths weaken the independence of voices?",
          "options": [
            "The two voices move in lockstep at the same perfect interval, blending into one and losing their distinct lines",
            "They create dissonance",
            "They are too quiet",
            "They change the tempo"
          ],
          "correctAnswer": 0,
          "explanation": "Parallel perfect fifths make two voices move identically at the same strong interval, causing them to fuse perceptually and undermining the sense of independent melodic lines.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-3",
          "question": "In resolving a V7 chord to I, the seventh of the chord typically resolves",
          "options": [
            "down by step",
            "up by a fifth",
            "stays the same",
            "up an octave"
          ],
          "correctAnswer": 0,
          "explanation": "The chordal seventh of a V7 is a dissonance that conventionally resolves downward by step when moving to the tonic.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-4",
          "question": "A composer writes a deceptive cadence (V-vi) at the end of a phrase. The most likely expressive purpose is to",
          "options": [
            "delay resolution and extend the music, subverting the listener's expectation",
            "end the piece definitively",
            "change the time signature",
            "increase the tempo"
          ],
          "correctAnswer": 0,
          "explanation": "A deceptive cadence frustrates the expected V-I resolution by moving to vi, prolonging the harmonic tension and the music itself for expressive effect.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-5",
          "question": "When voice leading a progression, which motion type best preserves the independence of two melodic lines?",
          "options": [
            "contrary motion",
            "parallel motion",
            "similar motion into perfect intervals",
            "identical rhythm and direction"
          ],
          "correctAnswer": 0,
          "explanation": "Contrary motion, with voices moving in opposite directions, best maintains the independence and clarity of separate melodic lines.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-6",
          "question": "The 'common tone' technique in voice leading involves",
          "options": [
            "keeping a shared pitch in the same voice when moving between chords for smooth connection",
            "changing all voices by leaps",
            "doubling the leading tone",
            "avoiding all shared notes"
          ],
          "correctAnswer": 0,
          "explanation": "Retaining a pitch common to two consecutive chords in the same voice creates smooth, economical voice leading between the chords.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-7",
          "question": "Why is doubling the leading tone generally avoided in four-part writing?",
          "options": [
            "Both leading tones would want to resolve up to the tonic, creating parallel octaves",
            "It sounds too soft",
            "It is impossible to play",
            "It changes the key signature"
          ],
          "correctAnswer": 0,
          "explanation": "Since the leading tone strongly resolves up to the tonic, doubling it would produce two voices resolving the same way, creating forbidden parallel octaves.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-8",
          "question": "A modulation differs from a tonicization in that a modulation",
          "options": [
            "establishes a new key more permanently, while a tonicization is a brief tonic emphasis",
            "is shorter",
            "never uses secondary dominants",
            "only occurs in minor keys"
          ],
          "correctAnswer": 0,
          "explanation": "A tonicization briefly emphasizes a chord as a temporary tonic, whereas a modulation shifts the music into a new key in a more sustained, structural way.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-9",
          "question": "When analyzing a chorale, encountering a chord built as V7/IV (secondary dominant of IV) tells you the composer intends to",
          "options": [
            "temporarily tonicize the IV chord, treating it briefly as a tonic",
            "modulate permanently to a distant key",
            "end the piece",
            "remove the tonic"
          ],
          "correctAnswer": 0,
          "explanation": "A V7/IV is the dominant seventh of the subdominant; it briefly points to and tonicizes the IV chord, giving it momentary tonic emphasis.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-10",
          "question": "The overarching goal of good voice leading and harmony is to",
          "options": [
            "combine independent melodic lines into coherent, pleasing progressions that convey tension and resolution",
            "make every voice as loud as possible",
            "avoid all chords",
            "use only one voice"
          ],
          "correctAnswer": 0,
          "explanation": "Harmony and voice leading aim to weave independent voices into coherent progressions that shape the flow of tension and resolution, the foundation of tonal music.",
          "difficulty": "hard"
        }
      ]
    }
  ]
}
