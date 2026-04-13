import type { SubjectUnitOverview } from './types'
import { parseRawOverview } from './parseRawOverview'

// NOTE: Source-preserving content. Paste your AP Music Theory raw unit overview text into RAW_AP_MUSIC_THEORY.
// Expected format (same as other unit-overview files in this folder):
//   Unit N – Title
//   N.N Subunit title
//   ...paragraphs...
//   Key ideas: ...
const RAW_AP_MUSIC_THEORY = `
AP Music Theory
# AP Music Theory – Complete Unit Overviews

---

## Unit 1 – Pitch, Major Scales, Rhythm, and Expressive Elements

### 1.0 Unit Overview: Foundations of Musical Notation

This unit establishes the fundamental building blocks of Western music theory: how pitch and rhythm are notated, how major scales are constructed, and how composers communicate expression through written symbols. These concepts form the vocabulary and grammar that all subsequent units build upon. Mastery here is essential—every harmonic analysis, melodic dictation, and part-writing exercise in the course depends on fluent understanding of these basics.

Music notation is a technology for preserving and transmitting sound across time. The staff, clefs, note values, and expressive markings studied in this unit represent centuries of refinement. Understanding these conventions allows musicians to read works from the Baroque era to the present day, and to communicate their own musical ideas with precision.

The major scale serves as the organizational framework for most Western tonal music. Its pattern of whole and half steps, its seven scale degrees with their distinct tendencies, and its relationship to key signatures provide the foundation for understanding melody, harmony, and musical structure. Rhythm and meter give music its temporal organization, creating patterns of strong and weak beats that listeners feel physically.

**Key ideas:** Pitch notation on the staff and clefs is the foundation of reading music. Rhythmic values organize music in time. The major scale's whole-step/half-step pattern is the basis of tonal organization. Meter creates hierarchical patterns of strong and weak beats. Expressive markings communicate tempo, dynamics, and articulation.

### 1.1 Pitch and Pitch Notation

Pitch refers to the perceived highness or lowness of a musical sound, determined by the frequency of vibration. Western music organizes pitch into a system of named notes (A through G) arranged on a five-line staff. The treble clef (G clef) and bass clef (F clef) indicate which pitches correspond to which lines and spaces. Ledger lines extend the staff for pitches above or below its range.

The grand staff combines treble and bass clefs, connected by middle C, providing the full range needed for piano music and score reading. Octave designations (C4, A3, etc.) specify exact register. Accidentals—sharps, flats, and naturals—modify pitches by half steps and remain in effect for the duration of a measure unless canceled.

**Key ideas:** Pitch is organized into a repeating pattern of seven letter names. Clefs assign specific pitches to staff lines and spaces. Ledger lines extend notation beyond the five-line staff. Accidentals raise or lower pitches by half steps within a measure.

### 1.2 Rhythmic Values and Notation

Rhythm organizes music in time through patterns of duration. Standard note values—whole, half, quarter, eighth, sixteenth—exist in a proportional relationship where each value is half the duration of the next larger. Corresponding rests indicate measured silence. Dots extend a note's value by half; ties connect notes across barlines or within measures to create durations not available through single note values.

Beaming groups smaller note values according to beat units, making rhythmic patterns visually clear. Proper beaming reflects the meter: in 4/4, eighth notes are typically beamed in groups of two or four; in 6/8, groups of three. Understanding these conventions is essential for both reading and notating rhythm accurately.

**Key ideas:** Note values exist in proportional relationships (each half of the previous). Dots add half the original value; ties connect durations across beats or barlines. Rests indicate measured silence. Beaming reflects metric organization and clarifies beat groupings.

### 1.3 Half Steps and Whole Steps

The half step is the smallest interval in standard Western music—the distance between any key and its immediate neighbor on the piano, whether white or black. A whole step equals two half steps. These intervals are the building blocks for scales, melodies, and harmonic motion. On the piano keyboard, half steps occur naturally between E-F and B-C (adjacent white keys with no black key between); all other adjacent white keys are a whole step apart.

Enharmonic equivalents are pitches that sound the same but are spelled differently (F♯ and G♭, for example). While they sound identical on a piano, their spelling matters in tonal contexts because it reflects their function within a scale or key.

**Key ideas:** The half step is the smallest standard interval in Western music. Whole steps equal two half steps. E-F and B-C are natural half steps on the white keys. Enharmonic spellings sound identical but have different theoretical functions.

### 1.4 Major Scales and Scale Degrees

The major scale consists of seven distinct pitches arranged in a specific pattern of whole and half steps: W-W-H-W-W-W-H. This pattern, starting from any pitch, generates all major scales. Each scale degree has a name reflecting its function: tonic (1), supertonic (2), mediant (3), subdominant (4), dominant (5), submediant (6), and leading tone (7). These names describe how each pitch relates to the tonic and behaves within the key.

The leading tone, a half step below the tonic, has a strong pull upward. The dominant, a perfect fifth above the tonic, provides harmonic stability second only to the tonic itself. Understanding these tendencies is essential for melody, harmony, and voice leading.

**Key ideas:** The major scale follows the pattern W-W-H-W-W-W-H. Scale degree names reflect functional relationships to the tonic. The leading tone (7) has a strong tendency to resolve upward to tonic. Dominant (5) and tonic (1) are the most stable scale degrees.

### 1.5 Major Keys and Key Signatures

A key signature is a collection of sharps or flats placed at the beginning of each staff line, indicating which pitches are consistently altered throughout a piece. Key signatures eliminate the need to write accidentals repeatedly and visually identify the key of a composition. Sharps are added in the order F-C-G-D-A-E-B; flats in the reverse order B-E-A-D-G-C-F.

The circle of fifths organizes all major (and minor) keys by their relationships: moving clockwise adds one sharp; moving counterclockwise adds one flat. This diagram is a powerful tool for understanding key relationships, transposition, and harmonic motion between keys.

**Key ideas:** Key signatures indicate which pitches are consistently altered in a key. Sharps and flats follow a specific order of addition. The circle of fifths organizes keys by their fifth relationships. Recognizing key signatures is essential for reading and analysis.

### 1.6 Beat Division and Meter (Simple vs Compound)

Meter organizes beats into recurring patterns of strong and weak pulses. In simple meter, each beat divides naturally into two equal parts. In compound meter, each beat divides into three. This distinction fundamentally affects rhythmic feel: simple meters have a duple subdivision feel; compound meters have a lilting, triple subdivision feel.

Duple, triple, and quadruple refer to how many beats per measure (2, 3, or 4). Combined with simple or compound division, this creates six common meter types: simple duple (2/4), simple triple (3/4), simple quadruple (4/4), compound duple (6/8), compound triple (9/8), and compound quadruple (12/8).

**Key ideas:** Simple meter divides beats into two; compound meter divides beats into three. Duple, triple, and quadruple describe beats per measure. The feel of music depends significantly on its metric organization. Recognizing meter by ear and in notation is a core skill.

### 1.7 Time Signatures and Rhythmic Patterns

Time signatures communicate two pieces of information, but their meaning differs between simple and compound meters. In simple meters, the top number indicates beats per measure and the bottom number indicates the note value receiving one beat. In compound meters, the top number indicates total subdivisions per measure (divide by three for beats), and the bottom number indicates the subdivision value.

Rhythmic patterns combine note values within metric frameworks. Syncopation places accents on normally weak beats or off-beats, creating tension against the established meter. Rhythmic dictation and sight-reading require instant recognition of common patterns within various meters.

**Key ideas:** Time signature interpretation differs between simple and compound meters. Syncopation displaces expected accents. Common rhythmic patterns should be recognized instantly. Accurate rhythmic notation reflects metric organization.

### 1.8 Tempo and Expressive Markings

Tempo indicates the speed of the beat, traditionally communicated through Italian terms ranging from Grave (very slow) through Largo, Adagio, Andante, Moderato, Allegro, Vivace, to Presto (very fast). Metronome markings provide precise beats per minute. Gradual tempo changes include accelerando (speeding up), ritardando and rallentando (slowing down), and a tempo (returning to the original speed).

Expression markings communicate the character and style of performance beyond tempo. Terms like dolce (sweetly), espressivo (expressively), maestoso (majestically), and cantabile (in a singing style) guide interpretation. Understanding these terms connects notation to musical expression.

**Key ideas:** Italian tempo terms indicate relative speed. Metronome markings give precise tempos. Accelerando and ritardando indicate gradual tempo changes. Expression markings guide musical character and interpretation.

### 1.9 Dynamics and Articulation

Dynamics indicate relative loudness, from pianissimo (pp, very soft) through piano, mezzo-piano, mezzo-forte, forte, to fortissimo (ff, very loud). Crescendo indicates growing louder; decrescendo (or diminuendo) indicates growing softer. Sforzando (sfz) and forte-piano (fp) indicate sudden dynamic accents or changes.

Articulation markings specify how individual notes should be attacked and released. Staccato (dot) indicates shortened, detached notes. Legato (slur) indicates smooth connection between notes. Tenuto (line) indicates full value with slight emphasis. Accent marks (>, ^) indicate stressed attacks. These markings profoundly affect musical character.

**Key ideas:** Dynamic markings indicate relative loudness from pp to ff. Crescendo and decrescendo indicate gradual changes. Articulation markings (staccato, legato, tenuto, accent) specify attack and connection. Dynamics and articulation are essential to musical expression.

---

## Unit 2 – Minor Scales, Melody, Timbre, and Texture

### 2.0 Unit Overview: Expanding the Tonal Palette

This unit expands beyond the major scale to explore minor modes, intervals, and the broader sonic landscape of melody, timbre, and texture. While Unit 1 established the major scale as the primary organizing framework, Unit 2 reveals the rich variety of tonal possibilities that give music its emotional depth and color.

Minor scales provide the harmonic and melodic vocabulary for music that sounds darker, more complex, or more emotionally intense than major-key music. The three forms of minor—natural, harmonic, and melodic—each serve different musical purposes and create distinct sounds. Understanding their construction and application is essential for analysis and composition.

Intervals—the distance between two pitches—are the molecules from which scales, melodies, and chords are built. Precise interval identification by ear and on the page is a foundational skill that enables melodic dictation, harmonic analysis, and part-writing. Combined with understanding of melody, timbre, and texture, intervals complete the basic vocabulary needed for deeper study.

**Key ideas:** Minor scales provide alternatives to major for darker or more complex expression. Three forms of minor serve different harmonic and melodic functions. Intervals are the building blocks of melody and harmony. Timbre and texture describe the color and layering of musical sound.

### 2.1 Minor Scales (Natural, Harmonic, Melodic)

The natural minor scale follows the pattern W-H-W-W-H-W-W, creating a sound that lacks the strong leading-tone pull of major. The harmonic minor scale raises the seventh degree, creating a leading tone that provides dominant function, but also produces an augmented second between scale degrees 6 and 7. The melodic minor scale addresses this by raising both the sixth and seventh degrees when ascending, then reverting to natural minor when descending.

Each form serves specific purposes: natural minor for modal color and certain chord constructions; harmonic minor for dominant harmonies; melodic minor for smooth stepwise melodies. Recognizing which form is in use—and why—is essential for analysis.

**Key ideas:** Natural minor has no raised leading tone (whole step between 7 and 1). Harmonic minor raises 7 to create a leading tone and dominant function. Melodic minor raises 6 and 7 ascending, reverts descending. Each form serves distinct harmonic and melodic purposes.

### 2.2 Relative and Parallel Keys

Relative keys share the same key signature but have different tonics. Every major key has a relative minor beginning on its sixth scale degree (C major and A minor share no sharps or flats). Parallel keys share the same tonic but have different key signatures (C major and C minor both center on C but have different accidentals).

Understanding these relationships aids modulation analysis, explains tonal color shifts within pieces, and assists with sight-transposition. The relationship between relative major and minor keys is particularly important for Baroque and Classical form analysis.

**Key ideas:** Relative keys share a key signature but differ in tonic. Parallel keys share a tonic but differ in key signature. Relative minor is built on the sixth degree of major. These relationships are essential for modulation and form analysis.

### 2.3 Other Scales (Chromatic, Whole-Tone, Pentatonic)

Beyond major and minor, other scale types appear frequently in Western music. The chromatic scale includes all twelve pitches, each a half step apart, and serves ornamental and modulatory functions. The whole-tone scale contains only whole steps, creating an ambiguous, floating quality (used prominently by Debussy). The pentatonic scale uses five pitches—often scale degrees 1, 2, 3, 5, 6 of major or 1, 3, 4, 5, 7 of minor—and appears worldwide in folk music and in classical repertoire.

These scales provide alternatives to the strict major/minor system, expanding tonal color and enabling composers to evoke different moods, styles, or cultural associations.

**Key ideas:** The chromatic scale uses all twelve pitches in half steps. The whole-tone scale creates ambiguity through equal interval construction. Pentatonic scales use five notes and appear globally. These scales expand tonal possibilities beyond major and minor.

### 2.4 Intervals: Size and Quality

An interval's size is the distance in letter names (second, third, fourth, etc.). Its quality describes the precise number of half steps: perfect (unison, fourth, fifth, octave), major, minor, augmented, or diminished. Major intervals become minor when reduced by a half step, and augmented when expanded; minor intervals become diminished when reduced, major when expanded. Perfect intervals become augmented when expanded, diminished when reduced.

Interval recognition requires knowing the half-step count for each quality and size. Instant identification—by eye and by ear—is essential for melodic dictation, sight-singing, and harmonic analysis.

**Key ideas:** Size measures letter-name distance; quality measures exact half steps. Perfect, major, and minor are standard qualities. Augmented expands; diminished contracts. Interval identification is foundational for all melodic and harmonic work.

### 2.5 Interval Inversion and Compound Intervals

Inverting an interval means moving the lower note up an octave (or the upper note down). The two intervals always sum to nine (a third inverts to a sixth, a second to a seventh). Quality inverts symmetrically: major becomes minor, augmented becomes diminished, and perfect remains perfect.

Compound intervals span more than an octave. A ninth is an octave plus a second; a tenth is an octave plus a third. While compound intervals have their own numerical names, their quality follows their simple-interval equivalent. Understanding inversion and compound intervals aids harmonic analysis and voice leading.

**Key ideas:** Inverted intervals sum to nine (3rd + 6th = 9, etc.). Quality inverts: major↔minor, augmented↔diminished, perfect↔perfect. Compound intervals exceed an octave. These concepts aid spacing analysis and voice-leading decisions.

### 2.6 Transposing Instruments

Many instruments sound at a pitch different from written. Transposing instruments include B♭ clarinet (sounds a major second lower than written), F horn (sounds a perfect fifth lower), and E♭ alto saxophone (sounds a major sixth lower). Composers and arrangers must write parts that produce the desired sounding pitch.

Understanding transposition is essential for score reading, arranging, and analyzing music for mixed ensembles. It also develops intervallic thinking and key-relationship awareness.

**Key ideas:** Transposing instruments sound different pitches than written. Common transpositions include B♭, F, and E♭ instruments. Score reading requires mental transposition. Transposition develops interval and key-relationship skills.

### 2.7 Melody and Melodic Features

Melody is a succession of pitches perceived as a single coherent line. Melodic analysis considers range (the span from lowest to highest pitch), contour (the shape of melodic motion—ascending, descending, arched, wavelike), conjunct vs. disjunct motion (stepwise vs. leaping), and the relationship between melody and underlying harmony.

Melodies often feature a climax—the highest or most intense point—and a return to rest. Phrasing, the grouping of melodic ideas into breath-length units, shapes musical meaning. Understanding how melodies are constructed aids composition, dictation, and analysis.

**Key ideas:** Melody involves range, contour, and conjunct/disjunct motion. Phrasing groups melodic ideas into coherent units. Climax provides structural emphasis. Melodic analysis connects line to underlying harmony.

### 2.8 Timbre

Timbre (tone color) distinguishes one sound source from another—a violin from a flute playing the same pitch, or different vowel sounds in singing. Timbre results from the unique combination of overtones (harmonics) each instrument or voice produces. Orchestration and arrangement depend on understanding how different timbres blend, contrast, or stand out.

Descriptive vocabulary for timbre includes bright, dark, warm, harsh, nasal, reedy, mellow, and piercing. Aural skills development includes identifying instruments and voices by timbre alone.

**Key ideas:** Timbre is the characteristic color of a sound source. Overtone content determines timbral quality. Timbral vocabulary enables precise description. Identifying timbre is essential for score reading and ear training.

### 2.9 Texture and Rhythmic Devices

Texture describes how musical lines relate to one another. Monophonic texture consists of a single melodic line with no accompaniment. Homophonic texture presents a primary melody with subordinate accompaniment. Polyphonic (or contrapuntal) texture features multiple independent melodic lines of equal importance. Heterophony involves simultaneous variations of the same melody.

Rhythmic devices include hemiola (superimposing a 3-pattern over 2 or vice versa), rhythmic ostinato (repeated rhythmic pattern), and polyrhythm (simultaneous contrasting rhythmic patterns). These devices add complexity and interest to musical texture.

**Key ideas:** Texture types include monophonic, homophonic, polyphonic, and heterophonic. Density and independence of lines define texture. Rhythmic devices like hemiola and ostinato add complexity. Texture analysis is essential for style identification.

---

## Unit 3 – Triads and Seventh Chords

### 3.0 Unit Overview: Building Harmonic Vocabulary

This unit introduces the vertical dimension of music: harmony built from triads and seventh chords. While earlier units focused on pitch organization and melody, Unit 3 examines how pitches combine simultaneously to create chords, and how those chords function within keys. This is the foundation of Western harmonic practice from the Common Practice Period through contemporary popular music.

Triads—three-note chords built in thirds—are the basic harmonic building blocks. Their qualities (major, minor, diminished, augmented) and their positions within a key (identified by Roman numerals) create the harmonic vocabulary that composers use to create tension, resolution, stability, and motion.

Seventh chords add a fourth note, creating richer sonorities with increased harmonic drive. The figured bass system, developed in the Baroque era, provides shorthand notation for chord inversions. Understanding these structures prepares students for voice leading, harmonic progression, and formal analysis.

**Key ideas:** Triads are three-note chords built in thirds (root, third, fifth). Seventh chords add a seventh above the root for richer sonority. Roman numerals identify chords' scale-degree roots within keys. Figured bass notation indicates inversions. These structures are the vocabulary of Western harmony.

### 3.1 Triads and Chord Qualities

A triad consists of three notes: a root, a third above the root, and a fifth above the root. The quality of each interval determines the triad's overall quality. Major triads have a major third and perfect fifth. Minor triads have a minor third and perfect fifth. Diminished triads have a minor third and diminished fifth. Augmented triads have a major third and augmented fifth.

Identifying triad quality by eye (analyzing the intervals) and by ear (recognizing the characteristic sound) is foundational. Each quality has a distinct character: major sounds bright and stable, minor sounds darker, diminished sounds tense and unstable, augmented sounds ambiguous and unresolved.

**Key ideas:** Triads contain root, third, and fifth. Quality depends on the intervals between these notes. Four triad qualities: major, minor, diminished, augmented. Quality recognition by ear and sight is essential.

### 3.2 Diatonic Chords and Roman Numerals

Diatonic chords are built using only the notes of a given key. In major keys, triads built on each scale degree follow a predictable pattern of qualities: I (major), ii (minor), iii (minor), IV (major), V (major), vi (minor), vii° (diminished). In minor keys (using harmonic minor), the pattern is: i (minor), ii° (diminished), III+ (augmented), iv (minor), V (major), VI (major), vii° (diminished).

Roman numerals identify chord roots by scale degree: uppercase for major/augmented, lowercase for minor/diminished. This system is key-independent, allowing harmonic analysis that applies across transpositions.

**Key ideas:** Diatonic chords use only pitches from the key. Roman numerals indicate scale-degree root and chord quality. Major-key diatonic qualities: I, ii, iii, IV, V, vi, vii°. Minor-key qualities differ; harmonic minor creates V major.

### 3.3 Chord Inversions and Figured Bass

A triad's inversion depends on which note is in the bass. Root position has the root in bass (figured bass: 5/3, often abbreviated to no figures). First inversion has the third in bass (6 or 6/3). Second inversion has the fifth in bass (6/4). Inversions affect the chord's stability and voice-leading behavior.

Figured bass, developed for Baroque continuo playing, uses numbers below the bass line to indicate intervals above. Modern analysis combines Roman numerals with figured bass (V6, I6/4) to show both function and inversion. Understanding figured bass is essential for historical repertoire and contemporary analysis.

**Key ideas:** Inversion depends on which chord member is in the bass. Root position: 5/3; first inversion: 6; second inversion: 6/4. Roman numerals combine with figures to show function and inversion. Inversions affect stability and voice leading.

### 3.4 Seventh Chords

Seventh chords add a fourth note, a seventh above the root, creating a more complex sonority with increased harmonic tension. The five common seventh chord qualities are: major-major (MM7 or Maj7), major-minor (Mm7 or dominant 7), minor-minor (mm7 or min7), half-diminished (ø7), and fully diminished (°7). Each has a characteristic sound and typical harmonic function.

The dominant seventh (V7, Mm7) is particularly important—its tritone between the third and seventh creates strong pull toward resolution. The half-diminished viiø7 and fully diminished vii°7 serve similar dominant function.

**Key ideas:** Seventh chords add a seventh above the triad. Five qualities: Maj7, dominant 7, min7, half-diminished, fully diminished. The tritone in dominant seventh chords drives resolution. Seventh chord quality affects function and color.

### 3.5 Seventh Chord Inversions

Seventh chords have four possible positions: root position (7), first inversion (6/5), second inversion (4/3), and third inversion (4/2 or 2). Each inversion places a different chord member in the bass and creates different voice-leading opportunities. Third inversion, with the seventh in bass, typically resolves that bass note down by step.

Figured bass symbols for seventh chords identify each inversion. Combined with Roman numerals (V4/2, ii6/5), this notation completely specifies the chord's function, quality, and bass position.

**Key ideas:** Seventh chords have four inversions: 7, 6/5, 4/3, 4/2. Third inversion places the seventh in bass, requiring downward resolution. Figured bass symbols indicate seventh chord inversions. Complete notation combines Roman numerals with figures.

### 3.6 Harmonic Analysis of Triads and Seventh Chords

Harmonic analysis interprets chords in context, identifying their Roman numeral function, inversion, and relationship to surrounding harmonies. Analysis begins with determining the key (from key signature and cadential patterns), then identifying each chord's root and quality, and finally labeling with appropriate Roman numerals and figures.

Non-chord tones (addressed in Unit 6) must be distinguished from chord tones. Context matters: the same collection of pitches can function differently in different keys. Analysis reveals compositional logic and aids performance interpretation.

**Key ideas:** Analysis determines key, identifies each chord, and assigns Roman numerals. Context determines function—the same pitches can function differently. Non-chord tones must be distinguished from chord members. Analysis reveals compositional structure and logic.

### 3.7 Chord Spacing and Doubling

In four-part writing (SATB), triads require doubling one member since triads have only three notes. Standard practice doubles the root; doubling the fifth is acceptable; doubling the third is generally avoided, especially for leading tones. Spacing between adjacent upper voices (soprano-alto, alto-tenor) should not exceed an octave; tenor and bass may be further apart.

Close position places upper voices within an octave; open position spreads them beyond. Voice overlap (one part crossing above or below an adjacent part) and voice crossing (parts moving past each other) are generally avoided. These conventions create balanced, singable four-part texture.

**Key ideas:** Standard doubling prioritizes root, then fifth; avoid doubling leading tones. Upper voices should not exceed an octave apart. Close and open positions describe voicing density. Avoid voice crossing and overlap.

### 3.8 Introduction to Voice Leading

Voice leading refers to how individual voices move from chord to chord. Smooth voice leading minimizes large leaps and keeps common tones between chords. The strongest voice leading resolves tendency tones: leading tone moves up to tonic, chordal sevenths resolve down by step, and the tritone in a dominant seventh chord resolves inward (in major) or outward (less commonly).

Good voice leading balances independence of lines with harmonic coherence. Each voice should be singable; parallel fifths and octaves (perfect consonances moving in parallel) are avoided because they undermine voice independence.

**Key ideas:** Voice leading connects chords through individual voice motion. Common tones are typically retained; other voices move by step. Tendency tones resolve predictably. Parallel perfect consonances are avoided.

### 3.9 Writing Basic Harmonic Progressions

Writing progressions applies voice-leading principles to create musical phrases. Begin by determining the harmonic rhythm (how often chords change) and selecting a progression appropriate to the style. Then voice each chord following spacing and doubling conventions, ensure smooth voice leading between chords, and check for parallel fifths/octaves.

Basic progressions often follow the phrase model: tonic → pre-dominant → dominant → tonic (I → IV or ii → V → I). Practice with simple progressions develops fluency for more complex writing in later units.

**Key ideas:** Progressions follow conventional harmonic models. The basic phrase model moves through harmonic functions. Voice-leading rules govern chord connections. Practice develops automatic application of conventions.

---

## Unit 4 – Chord Function, Cadence, and Phrase

### 4.0 Unit Overview: Harmony in Motion

This unit examines how chords function within tonal music—not as isolated sonorities but as components of a dynamic system of tension and resolution. The concept of harmonic function explains why certain chords move to certain others, why phrases feel complete or incomplete, and how composers create musical narrative through harmony.

Functional harmony organizes chords into three categories: tonic (stability and resolution), predominant (motion away from tonic, preparation for dominant), and dominant (tension requiring resolution to tonic). This framework explains harmonic behavior across centuries of Western music, from Bach to the Beatles.

Cadences—the punctuation marks of music—articulate phrase structure. The authentic cadence (V–I) confirms the key; the half cadence (ending on V) creates expectation; the deceptive cadence (V–vi) provides surprise. Understanding cadences enables analysis of phrase structure and formal organization.

**Key ideas:** Harmonic function categorizes chords by their role: tonic, predominant, dominant. Function explains chord behavior and progression logic. Cadences punctuate phrases and articulate form. Part-writing applies voice-leading principles to functional progressions.

### 4.1 Harmony and Voice Leading Fundamentals

Harmony involves the simultaneous sounding of pitches and the progression of chords through time. Voice leading governs how individual voices connect between chords. The principles of voice leading—stepwise motion preferred, common tones retained, tendency tones resolved—emerge from the desire for smooth, independent lines within a coherent harmonic framework.

Four-part texture (soprano, alto, tenor, bass) provides enough voices for complete triads and seventh chords while maintaining clarity. Each voice should be singable and maintain its own melodic integrity while participating in harmonic progression.

**Key ideas:** Harmony includes both vertical sonority and horizontal progression. Voice leading connects harmonies through individual lines. Four-part texture balances completeness with clarity. Each voice should maintain melodic integrity.

### 4.2 SATB Voice Leading

SATB (soprano, alto, tenor, bass) writing follows specific conventions that have proven effective over centuries. Soprano typically carries the melody or primary line; bass provides the harmonic foundation; inner voices (alto, tenor) complete harmonies and provide smoothness. Range limitations apply: each voice has a practical range it should not exceed.

Specific rules govern motion: parallel fifths and octaves are forbidden; similar motion to perfect intervals (hidden fifths/octaves) requires stepwise motion in the soprano. Voice overlap and voice crossing disrupt textural clarity. These "rules" are generalizations of practices that produce balanced, effective choral writing.

**Key ideas:** SATB assigns specific roles to each voice (melody, bass foundation, inner voice filling). Voice ranges have practical limits. Parallel and hidden fifths/octaves are avoided. Overlap and crossing disrupt clarity.

### 4.3 Functional Harmony (Tonic, Predominant, Dominant)

Tonic function provides stability and rest; the I chord is the primary tonic. Predominant function (also called subdominant) creates motion away from tonic and prepares dominant; IV and ii are the primary predominants. Dominant function creates tension demanding resolution to tonic; V and vii° serve dominant function. The tritone within dominant-function chords drives this need for resolution.

The typical progression moves tonic → predominant → dominant → tonic, though not every phrase includes all functions. Understanding function allows prediction of harmonic behavior and reveals compositional choices.

**Key ideas:** Tonic = stability (I, sometimes vi). Predominant = preparation (IV, ii). Dominant = tension (V, vii°). Function explains progression logic and harmonic rhythm. The tritone in dominant-function chords drives resolution.

### 4.4 Harmonic Progressions

Certain progressions are standard in tonal music: I–IV–V–I, I–ii–V–I, I–vi–IV–V–I (the "50s progression"), and countless variants. Understanding typical progressions develops expectations—knowing what usually happens helps identify when composers do something unusual or expressive.

Functional analysis reduces complex surfaces to underlying harmonic logic. A long passage might reduce to T–PD–D–T with elaborations. This analytical skill transfers across styles: the same functional logic operates in Bach chorales, Mozart sonatas, and contemporary pop songs.

**Key ideas:** Standard progressions recur across styles and centuries. Typical motions: T→PD, PD→D, D→T. Functional analysis reveals underlying harmonic structure. The same logic operates across historical styles.

### 4.5 Cadences (Authentic, Half, Plagal, Deceptive)

A perfect authentic cadence (PAC) features V–I with both chords in root position and tonic in the soprano; this is the strongest possible conclusion. An imperfect authentic cadence (IAC) weakens one element (inverted chord, non-tonic soprano note). A half cadence ends on V, creating pause without resolution—the "question" to the PAC's "answer."

The plagal cadence (IV–I) often follows an authentic cadence as an "amen" extension. The deceptive cadence (V–vi) substitutes vi where I is expected, prolonging the phrase. Recognizing cadence types is essential for phrase and form analysis.

**Key ideas:** PAC (V–I, root position, soprano on tonic) is the strongest conclusion. IAC weakens one element. Half cadence ends on V, creating expectation. Deceptive cadence (V–vi) surprises; plagal (IV–I) extends.

### 4.6 Phrase Structure

A phrase is a complete musical thought, typically ending with a cadence. Phrases are often four or eight measures long, though lengths vary. Antecedent-consequent structure pairs a phrase ending with a weak cadence (often half) with a parallel phrase ending with a strong cadence (often PAC).

Sentence structure presents a basic idea, repeats or varies it (the "presentation"), then moves toward a cadence (the "continuation"). Period structure links an antecedent phrase with a consequent phrase. Understanding these structures aids analysis and composition.

**Key ideas:** Phrases are complete musical thoughts ending with cadences. Common structures include antecedent-consequent and sentence. Phrase lengths are often regular (4 or 8 measures) but can vary. Cadence type helps define phrase function.

### 4.7 Voice Leading with Seventh Chords

Seventh chords require careful voice leading because they contain a dissonant seventh that must resolve. The chordal seventh typically resolves down by step. In V7–I, the leading tone resolves up to tonic while the seventh resolves down, often requiring an incomplete I chord (tripled root, no fifth) to avoid parallels.

Inner voice resolutions can be more flexible, but outer voices (soprano and bass) are most exposed and must follow conventions strictly. Seventh chord voice leading prepares for richer harmonic writing in later units.

**Key ideas:** The chordal seventh resolves down by step. Leading tones in dominant sevenths resolve up. V7–I often requires incomplete tonic to avoid parallels. Outer voice motion is most critical.

### 4.8 Voice Leading with Inversions

Inversions create smoother bass lines and enable passing motion between root-position chords. First-inversion triads are relatively stable and frequently used. Second-inversion triads are treated more carefully: the cadential 6/4 functions as a dominant prolongation; passing and pedal 6/4s serve specific linear functions.

Inverted seventh chords follow similar principles. Inversions allow bass lines that move stepwise rather than in leaps, creating more melodic bass parts. Understanding inversion usage is essential for stylistic part-writing.

**Key ideas:** First-inversion triads are common and relatively stable. Second-inversion triads have restricted use (cadential, passing, pedal). Inversions enable stepwise bass motion. Seventh chord inversions follow predictable resolution patterns.

### 4.9 Phrase and Cadence Analysis

Analysis applies all concepts from this unit to actual music. The process involves identifying phrases and their boundaries, labeling cadences by type, determining harmonic rhythm, analyzing chord functions, and examining voice leading. Annotated analysis typically appears below the score, with Roman numerals and cadence labels.

Analysis reveals compositional choices: why a composer used a deceptive cadence at a particular point, how phrase structure creates or subverts expectations, and how harmony and melody interact. Developing analytical skill requires practice with diverse repertoire.

**Key ideas:** Analysis integrates phrase, cadence, and harmonic function. Roman numerals and cadence labels document analytical observations. Analysis reveals compositional choices and techniques. Practice with varied repertoire develops analytical fluency.

---

## Unit 5 – Chord Progressions and Predominant Function

### 5.0 Unit Overview: Expanding the Harmonic Palette

This unit deepens understanding of harmonic function by exploring predominant chords in detail and examining the nuanced behaviors of chords within progressions. Building on Unit 4's introduction to tonic, predominant, and dominant function, this unit examines specific chord usages, the treatment of second-inversion chords, and techniques for expanding progressions beyond basic templates.

The predominant category includes more than just IV and ii. The vi chord can serve multiple functions depending on context. Seventh chords on predominant degrees add harmonic richness. Understanding these possibilities expands compositional and analytical vocabulary.

Second-inversion triads—the cadential 6/4, passing 6/4, and pedal 6/4—require special treatment because of their acoustical instability. Mastering their use is essential for stylistic part-writing. The unit concludes with techniques for expanding progressions through prolongation and elaboration.

**Key ideas:** Predominant function is served by multiple chords (IV, ii, vi, and others). Seventh chords on predominant degrees add harmonic color. Second-inversion triads have restricted, specific uses. Progressions can be expanded through prolongation and elaboration.

### 5.1 Predominant Function (IV and ii)

The IV chord (subdominant) and ii chord (supertonic) are the primary predominant harmonies. Both contain scale degree 4, which has a tendency to resolve to 3 or pull toward 5. IV is a major triad in major keys; ii is minor. Their smooth voice-leading connection to V makes them ideal preparation for dominant.

IV typically approaches V through descending-fifth motion; ii approaches V through ascending-fifth motion. The choice between them affects harmonic color and bass line shape. Both are standard in phrase models across styles.

**Key ideas:** IV and ii are primary predominant chords. Both contain scale degree 4 with tendency toward dominant. IV–V features descending-fifth bass motion; ii–V features ascending fifth. Choice affects color and bass line shape.

### 5.2 The vi Chord

The vi chord serves multiple functions depending on context. As the deceptive resolution from V, it extends phrases by substituting for I. As a predominant, it can lead to IV or ii before V. As a tonic substitute, it shares two notes with I and can prolong tonic areas.

In minor, VI (a major chord) is particularly colorful and versatile. The vi/VI chord's chameleon-like behavior requires careful attention to context for accurate functional analysis.

**Key ideas:** vi substitutes for I in deceptive cadences. vi can function as predominant, leading to IV or ii. vi can prolong tonic function through substitution. Context determines vi's function.

### 5.3 Predominant Seventh Chords

Adding sevenths to predominant chords (ii7, IV7) increases harmonic richness and voice-leading intensity. The ii7 chord (or iiø7 in minor) is particularly common—its seventh resolves to the third of V, creating smooth connection. These chords add complexity to predominant areas without changing fundamental function.

Voicing and resolution follow standard seventh chord principles: the seventh resolves down by step, common tones are retained where possible, and smooth voice leading is prioritized.

**Key ideas:** ii7 and IV7 add richness to predominant function. The seventh resolves down, often to the third of V. Predominant sevenths increase voice-leading intensity. Function remains predominant despite added complexity.

### 5.4 The iii Chord

The iii chord is less common than other diatonic harmonies, partly because its function is ambiguous—it shares notes with both I and V but connects awkwardly to primary predominants. When it appears, iii often moves to vi (descending-fifth motion) or serves as a passing harmony between I and IV.

In minor, III (a major chord) is the relative major and serves more prominent roles, particularly in progressions moving toward VI. The iii chord's relative rarity makes its appearance notable.

**Key ideas:** iii has ambiguous function and is relatively rare. Common progressions: iii–vi or iii as passing between I and IV. In minor, III (relative major) is more prominent. Rarity makes iii appearances analytically significant.

### 5.5 Functional Progressions and Cadences

Combining all diatonic chords into progressions requires understanding their functional relationships. Typical motion is T → PD → D → T, but many elaborations exist: T → T6 → PD → D → T, or T → PD → PD7 → D7 → T. The relationship between harmonic rhythm (how often chords change) and phrase rhythm (where cadences fall) shapes musical flow.

Progressions can be analyzed at multiple levels: surface chord-to-chord motion and deeper functional logic. Roman numeral analysis captures both, showing specific chords while implying their functional roles.

**Key ideas:** Progressions elaborate the basic T → PD → D → T framework. Harmonic rhythm interacts with phrase rhythm. Analysis operates at surface and deeper functional levels. Roman numerals show both specific chords and implied function.

### 5.6 Cadential 6/4 Chords

The cadential 6/4 is a second-inversion tonic triad that functions as a dominant embellishment, not a tonic. It appears on a metrically strong beat, with the 6 and 4 resolving down to 5 and 3 of the following V chord. This creates the progression I6/4–V or I6/4–V7, which should be analyzed as V (with decorating tones) rather than as a true I chord.

This analysis reflects the chord's behavior: it doesn't provide tonic stability and resolves to dominant. Some analysts label it V6/4–5/3 or Cad6/4 to clarify its function.

**Key ideas:** The cadential 6/4 functions as dominant embellishment, not tonic. It appears on strong beats before V. The 6 and 4 resolve down to 5 and 3 of V. Analysis reflects dominant function despite tonic-chord spelling.

### 5.7 Passing and Pedal 6/4 Chords

Unlike the cadential 6/4, passing and pedal 6/4 chords serve linear functions. A passing 6/4 connects two chords via stepwise bass motion (I–V6/4–I6 or IV–I6/4–ii6). The bass passes through the 6/4 chord without harmonic emphasis. A pedal 6/4 sustains a bass note while upper voices move (I–IV6/4–I, with bass remaining on scale degree 1).

These 6/4 usages are metrically weak—they occur on weak beats or weak parts of beats. This distinguishes them from the metrically strong cadential 6/4. Recognizing these functions requires attention to metric placement and bass behavior.

**Key ideas:** Passing 6/4 connects chords via stepwise bass motion. Pedal 6/4 sustains bass while upper voices move. Both are metrically weak, unlike cadential 6/4. Linear function distinguishes passing and pedal 6/4 from cadential.

### 5.8 Expanding Harmonic Progressions

Basic progressions can be expanded through several techniques. Prolongation sustains one harmony over multiple chords (I–V4/2–I6 prolongs tonic). Sequence repeats a harmonic pattern at different pitch levels (falling fifths: I–IV–vii°–iii–vi–ii–V–I). Interpolation inserts chords between expected harmonies without changing fundamental function.

These techniques create longer, more complex progressions while maintaining underlying functional logic. Analysis reveals both surface elaboration and deeper structure.

**Key ideas:** Prolongation sustains one function over multiple chords. Sequences repeat patterns at different pitch levels. Interpolation inserts chords without changing function. Expansion techniques add complexity while maintaining logic.

### 5.9 Phrase Writing with Predominant Function

Applying these concepts, students practice writing four-part phrases that demonstrate predominant function. A typical exercise begins with a bass line or soprano melody, adds harmonic analysis, then completes inner voices following voice-leading principles.

Effective phrases establish tonic, move through predominant to dominant, and resolve with an appropriate cadence. The balance between following conventions and making musical choices defines stylistic part-writing.

**Key ideas:** Phrase writing integrates harmony and voice leading. Standard phrases move T → PD → D → T with appropriate cadence. Both following conventions and making musical choices matter. Practice develops automatic application of principles.

---

## Unit 6 – Embellishments, Motives, and Melodic Devices

### 6.0 Unit Overview: Decorating the Framework

This unit examines the elements that add life and interest to the harmonic and melodic framework established in earlier units. Embellishing tones—non-chord tones that decorate structural harmonies—create motion and expression. Motives and their transformations provide melodic coherence. Sequences create extended passages through systematic repetition. These techniques transform basic progressions into living music.

Non-chord tones have been present in all the music studied so far, but this unit treats them systematically. Each type (passing tone, neighbor, suspension, etc.) has characteristic behavior and expressive quality. Distinguishing chord tones from embellishments is essential for accurate harmonic analysis.

Motivic development—the process of varying a basic melodic idea—is a primary compositional technique from Bach through Brahms and beyond. Understanding how composers develop motives reveals compositional logic and aids both analysis and composition.

**Key ideas:** Embellishing tones decorate structural harmonies with motion and expression. Each type of non-chord tone has characteristic behavior. Motives and their transformations create melodic coherence. Sequences extend passages through systematic repetition.

### 6.1 Passing Tones and Neighbor Tones

Passing tones fill the space between two chord tones a third apart, moving stepwise between them. They may be accented (on the beat) or unaccented (off the beat). Passing tones are approached and left by step in the same direction.

Neighbor tones (also called auxiliary tones) decorate a chord tone by stepping away and returning. Upper neighbors step up then down; lower neighbors step down then up. Like passing tones, they may be accented or unaccented. Double neighbors (or changing tones) combine upper and lower neighbor motion.

**Key ideas:** Passing tones fill stepwise between chord tones a third apart. Neighbor tones step away from and return to the same chord tone. Both may be accented or unaccented. Double neighbors combine upper and lower motion.

### 6.2 Anticipations, Escape Tones, and Appoggiaturas

Anticipations arrive early—a tone belonging to the next chord sounds before the chord change. They are approached by step and left by common tone (as the anticipated chord arrives). Anticipations are typically unaccented, occurring on weak beats.

Escape tones (or échappées) are approached by step and left by leap in the opposite direction. Appoggiaturas are the reverse: approached by leap and left by step in the opposite direction. Appoggiaturas are typically accented and create expressive dissonance.

**Key ideas:** Anticipations arrive before their chord, approached by step. Escape tones are approached by step, left by leap (opposite direction). Appoggiaturas are approached by leap, resolved by step (opposite direction). Appoggiaturas are typically accented and expressive.

### 6.3 Suspensions and Retardations

Suspensions create dissonance through rhythmic delay. A consonant tone is held over (suspended) while other voices change, creating a dissonance that resolves downward by step. Suspensions are labeled by intervals above the bass: 4-3 suspension (the fourth above bass resolves to third), 7-6, 9-8, or 2-3 (in bass voice).

Retardations function like suspensions but resolve upward. They are less common because downward resolution is more natural for dissonances. Suspensions and retardations create controlled dissonance and forward momentum.

**Key ideas:** Suspensions sustain a tone, creating dissonance that resolves down by step. Labels indicate intervals: 4-3, 7-6, 9-8, 2-3 (bass voice). Retardations resolve upward (less common). Both create controlled dissonance and forward motion.

### 6.4 Pedal Points and Embellishing Tone Review

A pedal point (or pedal tone) is a sustained or repeated note, usually in the bass, over which harmonies change. Tonic and dominant pedals are most common. The pedal creates harmonic tension when the sustained note is dissonant with passing chords, resolved when consonant harmonies return.

All embellishing tones can be reviewed through a systematic framework: approach (step, leap, or common tone), metric position (accented or unaccented), and departure (step, leap, or common tone). This framework enables identification of any non-chord tone.

**Key ideas:** Pedal points sustain one pitch while harmonies change above. Tonic and dominant pedals are most common. Embellishing tones are identified by approach, metric position, and departure. Systematic framework enables identification of any non-chord tone.

### 6.5 Motive and Motivic Transformation

A motive is a short, distinctive musical idea that can be recognized when varied or developed. Motives may be characterized by rhythm, contour, intervals, or some combination. They are the building blocks of themes and subjects.

Motivic transformation techniques include transposition (moving to a different pitch level), inversion (flipping the contour), retrograde (reversing the order of notes), augmentation (lengthening durations), diminution (shortening durations), fragmentation (using part of the motive), and sequence (repeating at different pitch levels). These techniques create coherence through varied repetition.

**Key ideas:** Motives are short, distinctive musical ideas. They may be characterized by rhythm, contour, or intervals. Transformation techniques: transposition, inversion, retrograde, augmentation, diminution, fragmentation. Motivic development creates coherence through varied repetition.

### 6.6 Melodic Sequences

A melodic sequence repeats a melodic pattern at successively higher or lower pitch levels. Sequences create momentum and can cover large amounts of musical time efficiently. Diatonic sequences use only the notes of the key, adjusting intervals as necessary; real sequences preserve exact intervals, often introducing accidentals.

Common sequential patterns include falling thirds, falling fifths, and ascending step patterns. Sequences provide predictable motion that listeners can follow, creating both unity and direction.

**Key ideas:** Melodic sequences repeat patterns at different pitch levels. Diatonic sequences stay in key; real sequences preserve exact intervals. Common patterns: falling thirds, falling fifths, ascending steps. Sequences create momentum, unity, and predictability.

### 6.7 Harmonic Sequences

Harmonic sequences repeat a harmonic pattern at different pitch levels, driving progression through extended passages. The descending-fifth sequence (I–IV–vii°–iii–vi–ii–V–I) is particularly common, as it moves consistently through the circle of fifths. Ascending-fifth and descending-third sequences also appear.

Sequences provide a framework for spanning large amounts of musical time while maintaining harmonic logic. They often occur in development sections, transitions, and other passages requiring extension.

**Key ideas:** Harmonic sequences repeat progressions at different pitch levels. The descending-fifth sequence is most common. Sequences span large amounts of musical time efficiently. They appear in developments, transitions, and extensions.

### 6.8 Phrase Expansion Techniques

Phrases can be expanded beyond their normal length through several techniques. Internal expansion adds material within a phrase, delaying the cadence. Cadential extension adds material after the cadence, prolonging closure. Elision overlaps the end of one phrase with the beginning of the next.

Other techniques include deceptive cadence (which extends by forcing continuation), sequential extension, and phrase interpolation. Understanding expansion reveals how composers create phrases of varying length and avoid predictability.

**Key ideas:** Internal expansion delays the cadence. Cadential extension prolongs closure. Elision overlaps phrase endings and beginnings. Expansion techniques create varied phrase lengths and avoid predictability.

### 6.9 Embellishment in Harmonic Writing

Applied to four-part writing, embellishing tones add life to basic progressions. Voice leading becomes more complex when accounting for non-chord tones: suspensions require preparation on a weak beat, passing tones fill in thirds, and neighbors decorate static voices.

Writing with embellishments requires planning: identify the underlying chord progression, write structural voices, then add embellishments that enhance voice leading and melodic interest without creating forbidden parallels or awkward motion.

**Key ideas:** Embellishing tones add life to four-part writing. Voice leading becomes more complex with non-chord tones. Suspensions require preparation; passing tones fill thirds. Plan chord progression before adding embellishments.

---

## Unit 7 – Secondary Function

### 7.0 Unit Overview: Tonicizing Other Keys

This unit introduces secondary function—the technique of temporarily treating a chord other than I as a tonic, creating momentary shifts that add color and intensity without leaving the home key. Secondary dominants and secondary leading-tone chords borrow from other keys, creating chromatic interest within an otherwise diatonic context.

Tonicization is distinct from modulation: in tonicization, the emphasis on a non-tonic chord is brief and the music returns quickly to the home key. Modulation establishes a new key more permanently. Understanding this distinction is essential for accurate analysis.

Secondary function chords are identified with slash notation: V/V means "five of five" or "the dominant of the dominant." This unit teaches how to identify, analyze, write, and hear these chords in context—essential skills for understanding music from the Baroque era through jazz and pop.

**Key ideas:** Secondary function temporarily treats a non-tonic chord as tonic. Tonicization is brief; modulation establishes a new key. Secondary dominants (V/x) and leading-tone chords (vii°/x) create chromatic intensity. Slash notation identifies the target of tonicization.

### 7.1 Tonicization and Secondary Dominants

Tonicization occurs when a chord is preceded by its own dominant, giving it temporary tonic status. V/V is the most common secondary dominant: the dominant of the dominant, spelled with a raised fourth scale degree to create a leading tone to the dominant. Any major or minor triad in the key (except vii° and ii° in minor) can be tonicized.

Secondary dominants are major triads or dominant seventh chords that resolve to diatonic chords by fifth motion. They introduce accidentals foreign to the key, creating chromatic color.

**Key ideas:** Tonicization gives temporary tonic status to a non-tonic chord. V/V (dominant of the dominant) is most common. Secondary dominants resolve by fifth to their target. They introduce accidentals, creating chromatic color.

### 7.2 Secondary Dominant Part Writing

Voice leading with secondary dominants follows regular dominant principles. The temporary leading tone (raised to create the secondary dominant) resolves up by half step to the root of the target chord. If the secondary dominant is a seventh chord, the seventh resolves down by step.

Spelling matters: use the accidental that creates a half step below the target's root. V7/V in C major uses F♯, the leading tone to G. Chromatic voice leading (moving by half step in a single voice) is common.

**Key ideas:** The temporary leading tone resolves up by half step. Seventh chords resolve their sevenths down by step. Spelling creates proper half-step leading-tone relationships. Chromatic voice leading is common.

### 7.3 Secondary Leading Tone Chords

Secondary leading-tone chords (vii°/x and viiø7/x) also tonicize by providing leading-tone function to a non-tonic chord. They contain the same leading tone as the secondary dominant but build a diminished rather than major triad above it.

These chords often appear in first inversion, resolving efficiently to the root-position target. They provide more intensity than secondary dominants because of their fully diminished quality.

**Key ideas:** vii°/x and viiø7/x tonicize with leading-tone function. They share the leading tone of V/x. First inversion is common, resolving to root-position target. Diminished quality creates additional intensity.

### 7.4 Secondary Leading Tone Part Writing

Part writing with secondary leading-tone chords follows diminished chord conventions. The temporary leading tone resolves up; the diminished fifth interval typically resolves inward. In viiø7 chords, the seventh resolves down.

Because these chords are often fully diminished, they may be spelled enharmonically depending on context. The key is to maintain proper spelling relative to the target chord.

**Key ideas:** Temporary leading tone resolves up. Diminished fifth resolves inward. Sevenths resolve down. Spelling follows the target chord's context.

### 7.5 Identifying Tonicization in Music

Aural identification of tonicization requires hearing the momentary pull to a non-tonic chord—the sense that one chord briefly sounds like "home" before the music returns to the actual tonic. Visual identification requires finding accidentals that create leading-tone relationships to diatonic chords.

Signs of tonicization include: chromatic alterations resolving by half step, dominant-to-tonic motion targeting a diatonic chord, and brief emphasis on a chord without establishment of a new key.

**Key ideas:** Aural identification requires hearing temporary tonal emphasis. Visual identification finds leading-tone-creating accidentals. Dominant-to-tonic motion targets a diatonic chord. Brief emphasis without new key establishment indicates tonicization.

### 7.6 Harmonic Analysis with Secondary Function

In Roman numeral analysis, secondary function chords are labeled with slash notation: V/V, viio7/ii, etc. The chord after the slash is the target—the chord being tonicized. Both the secondary chord and its resolution should be included in the analysis.

Analysis should distinguish between tonicization and modulation. Tonicization involves isolated secondary chords; modulation involves multiple chords from a new key and often a cadence confirming the new tonic.

**Key ideas:** Slash notation shows secondary chord and target. Both secondary chord and resolution appear in analysis. Distinguish tonicization (brief) from modulation (established). Multiple secondary chords may appear in a passage.

### 7.7 Writing Progressions with Secondary Function

Adding secondary dominants to progressions creates chromatic interest. The basic technique: identify a diatonic chord to tonicize, add its V or V7 (or vii°) before it, and voice-lead with proper resolution of tendency tones. V/V–V–I is a common pattern; V/ii–ii–V–I adds more chromatic color.

Secondary function chords intensify motion toward their targets. Used strategically, they highlight important structural moments or add color to otherwise predictable progressions.

**Key ideas:** Insert secondary chords before their targets. Voice-lead with proper tendency-tone resolution. Secondary function intensifies motion toward target. Strategic use highlights important moments.

### 7.8 Common Tonicization Patterns

Certain tonicization patterns recur frequently. V/V–V–I appears in nearly all tonal music. V/IV–IV is common in cadential extensions. V/vi–vi provides a chromatic approach to the submediant. Sequential tonicizations (V/vi–vi–V/V–V–V/IV–IV) create chromatic passages.

In minor keys, tonicizations of III (the relative major) and VII are common because these are major chords. V/III–III temporarily suggests the relative major.

**Key ideas:** V/V–V–I is the most common pattern. V/IV–IV often appears in extensions. Sequential tonicizations create chromatic motion. Minor-key tonicizations often target III and VII.

### 7.9 Secondary Function in Musical Context

Understanding secondary function in context requires recognizing how tonicization serves larger musical purposes. Tonicization can intensify motion to a cadence, create chromatic interest during phrase extension, establish momentary contrast before return, or participate in sequential patterns.

Different styles use secondary function differently: Baroque music uses sequences of secondary dominants; Classical music uses them to intensify cadences; Romantic music uses them for chromatic color; jazz uses extended versions (secondary dominants with added tones).

**Key ideas:** Tonicization serves larger musical purposes (cadential intensification, contrast, sequence). Different styles use secondary function differently. Context reveals purpose beyond the chord itself. Analysis connects secondary function to form and expression.

---

## Unit 8 – Modes and Form

### 8.0 Unit Overview: Beyond Major/Minor and Understanding Structure

This unit expands beyond the major/minor system to explore church modes and examines how music is organized in time through form. These topics complete the AP Music Theory curriculum by connecting detailed harmonic and melodic analysis to the larger structures that organize complete compositions.

Church modes predate the major/minor system and continue to appear in folk music, jazz, rock, and contemporary classical music. Each mode has a distinctive character determined by its pattern of whole and half steps and the placement of its half steps relative to the final (tonic).

Musical form describes the organization of phrases into larger structures: periods, binary form, ternary form, and beyond. Understanding form reveals how composers create coherence, contrast, and drama across entire movements. Form analysis integrates all skills from the course into comprehensive interpretation.

**Key ideas:** Church modes predate and extend beyond major/minor. Each mode has distinctive character from its interval pattern. Form organizes phrases into larger structures. Form analysis integrates all course skills.

### 8.1 Church Modes

The seven church modes can be understood as scales built on each white key of the piano from that note to its octave: Ionian (C–C), Dorian (D–D), Phrygian (E–E), Lydian (F–F), Mixolydian (G–G), Aeolian (A–A), and Locrian (B–B). Each has a unique pattern of whole and half steps.

Ionian is identical to major; Aeolian is identical to natural minor. The other modes have distinctive characteristics: Dorian's raised sixth, Phrygian's lowered second, Lydian's raised fourth, Mixolydian's lowered seventh, and Locrian's diminished tonic triad.

**Key ideas:** Seven modes: Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian. Each has unique whole/half step pattern. Ionian = major; Aeolian = natural minor. Characteristic tones distinguish each mode.

### 8.2 Modal Scales and Characteristics

Each mode can be transposed to begin on any pitch while maintaining its characteristic interval pattern. Dorian on D sounds different from Dorian on E, but both have the Dorian pattern (W-H-W-W-W-H-W). The characteristic tone—the pitch that most distinguishes the mode from major or minor—is essential for modal identity.

Comparing modes to major or minor clarifies their characteristics: Dorian is minor with raised 6; Mixolydian is major with lowered 7; Lydian is major with raised 4; Phrygian is minor with lowered 2.

**Key ideas:** Modes can be transposed to any starting pitch. Characteristic tones define modal identity. Comparison to major/minor clarifies differences. Modal recognition requires hearing characteristic tones.

### 8.3 Modal Harmony

Modal harmony operates differently from tonal harmony. The absence or weakness of the leading tone in many modes reduces dominant pull, creating a more static, coloristic harmonic language. Progressions often emphasize the characteristic tone through chords built on it.

In Dorian, for example, the iv chord is major (not minor as in Aeolian), emphasizing the raised sixth. In Mixolydian, the VII chord is major and functions prominently. Modal harmony avoids or de-emphasizes the V–I relationship that defines tonal music.

**Key ideas:** Modal harmony emphasizes characteristic tones through chords. Weakened leading tone reduces dominant function. Progressions differ from tonal conventions. Modal harmony is more static and coloristic.

### 8.4 Phrase Relationships

Phrases relate to each other through repetition, variation, and contrast. Identical phrases provide stability; varied phrases create development; contrasting phrases provide relief. Labeling phrase relationships with letters (a, a', b, etc.) shows these connections visually.

Parallel phrases begin the same way but end differently. Sequential phrases repeat melodic material at different pitch levels. Contrasting phrases introduce new material. These relationships create coherence and variety within larger forms.

**Key ideas:** Phrase relationships include repetition, variation, and contrast. Letter labels show phrase relationships (a, a', b). Parallel phrases begin similarly, end differently. Balance of repetition and contrast creates interest.

### 8.5 Periods and Phrase Structures

A period pairs an antecedent phrase (ending with a weak cadence, usually half) with a consequent phrase (ending with a strong cadence, usually PAC). Parallel periods begin both phrases similarly; contrasting periods use different material. Double periods extend this structure to four phrases.

The sentence is an alternative phrase structure: a two-measure basic idea is stated, repeated (or varied), and followed by a four-measure continuation leading to the cadence. Recognizing these structures aids formal analysis.

**Key ideas:** Periods pair antecedent (weak cadence) and consequent (strong cadence). Parallel periods share opening material; contrasting periods don't. Sentence structure: basic idea, repetition, continuation. These structures organize phrases into larger units.

### 8.6 Binary and Ternary Form

Binary form divides a piece into two sections, often labeled A and B. Rounded binary returns to opening material after contrasting material (||: A :||: B A' :||). Simple binary does not return (||: A :||: B :||). Both sections are typically repeated.

Ternary form (ABA) presents opening material, contrasting material, then a return of the opening. Compound ternary nests smaller forms within each section. These forms organize complete movements or pieces, not just phrases.

**Key ideas:** Binary form: two sections, with or without return. Rounded binary: A B A'; simple binary: A B. Ternary form: ABA with contrasting middle section. These forms organize complete pieces or movements.

### 8.7 Common Formal Sections

Specific section types recur across formal designs. The exposition presents primary thematic material, often in the tonic key. Development manipulates material from the exposition through sequence, fragmentation, and modulation. Recapitulation returns to the exposition material, often with modifications.

Introductions precede main material; codas follow final cadences. Transitions connect sections; retransitions prepare returns. Bridge sections provide contrast in popular song forms. Recognizing these functions aids analysis.

**Key ideas:** Exposition presents material; development manipulates it; recapitulation returns. Introduction, coda, transition, and retransition serve formal functions. Bridge provides contrast in song forms. Section types recur across styles and eras.

### 8.8 Form Analysis

Form analysis identifies section boundaries, labels sections and phrases, traces tonal motion, and interprets how structure creates meaning. Analysis begins with cadence identification (which articulates sections), then considers thematic relationships and key areas.

Analytical diagrams show form visually: timelines, letter labels, measure numbers, and key areas. Analysis reveals compositional choices: why a composer extends one section, abbreviates a return, or inserts a surprise.

**Key ideas:** Form analysis identifies sections, phrases, and tonal motion. Cadences articulate structural boundaries. Diagrams show form visually. Analysis reveals compositional choices.

### 8.9 Large-Scale Musical Structure

Large-scale forms include sonata form (exposition–development–recapitulation), rondo (ABACABA and variants), theme and variations, and others. These forms organize complete movements, coordinating tonal motion with thematic development.

Understanding large-scale structure connects all skills from the course: hearing and identifying cadences and keys, recognizing thematic material and its development, understanding harmonic motion and prolongation, and interpreting how structure creates musical meaning. This synthesis represents the culmination of AP Music Theory.

**Key ideas:** Large-scale forms include sonata, rondo, and theme and variations. Forms coordinate tonal motion with thematic development. Analysis integrates all course skills. Large-scale understanding is the culmination of music theory study.
`

const CLEANED_AP_MUSIC_THEORY = RAW_AP_MUSIC_THEORY
  .replace(/^#{1,6}\s+/gm, '')
  .replace(/^\*\*Key ideas:\*\*\s*/gm, 'Key ideas: ')
  .replace(/^---\s*$/gm, '')

export const AP_MUSIC_THEORY_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Music Theory',
  units: parseRawOverview(CLEANED_AP_MUSIC_THEORY),
  features: { latex: false, codeExamples: false },
}

