import type { SubjectUnitOverview } from './types'
import { parseRawOverview } from './parseRawOverview'

// NOTE: This is source-preserving content. Do not edit wording/length unless the source changes.
const RAW_PSYCHOLOGY = `AP Psychology

Unit 1 – Biological Bases of Behavior

1.1 Interaction of Heredity and Environment

The nature-versus-nurture debate is one of psychology's oldest and most fundamental questions: to what extent are human traits and behaviors determined by genetic inheritance (nature) versus environmental experiences (nurture)? Modern psychology has largely moved beyond this dichotomy, recognizing that virtually all human characteristics result from the interaction of both genetic and environmental factors.

Behavioral genetics studies the relative contributions of heredity and environment to individual differences. Twin studies are a primary research method: identical (monozygotic) twins share 100 percent of their DNA, while fraternal (dizygotic) twins share about 50 percent. If identical twins are more similar on a trait than fraternal twins, the difference is attributed to genetic influence. Adoption studies compare adopted children to their biological parents (to assess genetic influence) and their adoptive parents (to assess environmental influence). Heritability is a statistical estimate of the proportion of variation in a trait within a population attributable to genetic differences. Intelligence, for example, has a heritability of roughly 0.50-0.80. Crucially, heritability applies to populations, not individuals.

Epigenetics has revolutionized the understanding of gene-environment interaction by showing that environmental factors (stress, nutrition, toxins, parenting behavior) can modify gene expression without altering the DNA sequence itself. Chemical tags can switch genes on or off, and some of these modifications can be passed to offspring. Gene-environment interaction means that the effect of a gene depends on the environment, and vice versa. Gene-environment correlation describes how genetic traits influence the environments people experience.

Key ideas: Nature and nurture interact to produce all human traits. Twin and adoption studies estimate heritability, which applies to populations not individuals. Epigenetics shows environmental factors modify gene expression without changing DNA. Gene-environment interactions mean genes and environments are dynamically intertwined.

1.2 Overview of the Nervous System

The nervous system is the body's electrochemical communication network. The central nervous system (CNS) consists of the brain and spinal cord. The spinal cord carries messages between the brain and the body and coordinates simple reflexes without involving the brain.

The peripheral nervous system (PNS) connects the CNS to the rest of the body. The somatic nervous system controls voluntary movements. The autonomic nervous system controls involuntary functions and is divided into the sympathetic nervous system (activating the fight-or-flight response) and the parasympathetic nervous system (promoting rest-and-digest functions). These two systems work in opposition to maintain homeostasis.

The endocrine system uses hormones secreted by glands into the bloodstream to regulate slower, longer-lasting processes. Key glands include the pituitary (the "master gland"), adrenal glands (releasing cortisol and adrenaline during stress), thyroid (regulating metabolism), and hypothalamus (linking the nervous and endocrine systems).

Key ideas: The CNS (brain and spinal cord) is the central processing hub; the PNS connects it to the body. The sympathetic system activates fight-or-flight; the parasympathetic promotes rest-and-digest. The endocrine system uses hormones for slower, longer-lasting regulation alongside the faster nervous system.

1.3 The Neuron and Neural Firing

The neuron is the fundamental cell of the nervous system. Sensory neurons carry information from sense organs to the CNS, motor neurons carry commands to muscles and glands, and interneurons process information within the CNS. A neuron's structure includes the cell body (soma), dendrites (receiving signals), and the axon (transmitting signals). The myelin sheath speeds signal transmission through saltatory conduction.

Neural firing operates on an all-or-nothing principle. At rest, neurons maintain a resting potential of approximately -70 millivolts. When stimulated to reach the threshold (about -55 mV), an action potential travels down the axon. Stimulus intensity is coded by firing frequency, not by the strength of individual action potentials.

At the synapse, neurotransmitters are released into the synaptic cleft and bind to receptor sites, either exciting or inhibiting the receiving neuron. Key neurotransmitters include acetylcholine (muscle movement, memory), dopamine (reward, motivation, movement), serotonin (mood, sleep, appetite), norepinephrine (alertness), GABA (the main inhibitory neurotransmitter), glutamate (the main excitatory neurotransmitter), and endorphins (natural painkillers).

Key ideas: Neurons transmit electrochemical signals via dendrites, cell body, and axon. Neural firing follows the all-or-nothing principle; stimulus intensity is coded by firing frequency. Neurotransmitters cross the synapse to excite or inhibit the receiving neuron. Key neurotransmitters include dopamine, serotonin, GABA, acetylcholine, and endorphins.

1.4 The Brain

The brainstem controls basic life-sustaining functions: the medulla regulates breathing and heart rate, the pons coordinates movement and sleep, and the reticular formation regulates arousal. The cerebellum coordinates voluntary movement and balance.

The limbic system handles emotion, memory, and motivation. The amygdala processes fear and emotional reactions. The hippocampus is critical for forming new explicit memories. The hypothalamus regulates hunger, thirst, body temperature, and the endocrine system. The thalamus relays sensory information (except smell) to the cortex.

The cerebral cortex has four lobes per hemisphere. Frontal lobes handle executive functions, planning, personality, and voluntary movement (motor cortex) and speech production (Broca's area). Parietal lobes process touch and somatosensory information. Temporal lobes process auditory information and language comprehension (Wernicke's area). Occipital lobes process visual information.

The hemispheres are connected by the corpus callosum. Split-brain research revealed lateralization: the left hemisphere dominates language and logic; the right handles spatial processing and facial recognition. Brain plasticity allows reorganization throughout life, with greatest plasticity in childhood.

Key ideas: The brainstem controls basic life functions; the cerebellum coordinates movement. The limbic system handles emotion, memory, and motivation (amygdala, hippocampus, hypothalamus, thalamus). The cerebral cortex has four lobes with specialized functions. The hemispheres are lateralized but collaborate; brain plasticity allows reorganization.

1.5 Sleep

Sleep follows a roughly 24-hour circadian rhythm regulated by the suprachiasmatic nucleus and melatonin. Sleep cycles through NREM stages (N1 light sleep, N2 sleep spindles, N3 deep slow-wave sleep with delta waves) and REM sleep (vivid dreaming, rapid eye movements, muscle paralysis) in approximately 90-minute cycles.

Sleep serves critical functions: memory consolidation, physical restoration (growth hormone released during deep NREM), emotional regulation (supported by REM sleep), and immune maintenance. Sleep deprivation impairs mood, judgment, cognitive function, and health.

Sleep disorders include insomnia, narcolepsy (sudden uncontrollable sleep episodes), sleep apnea (breathing interruptions), and parasomnias like sleepwalking and night terrors (occurring during NREM deep sleep).

Key ideas: The circadian rhythm is regulated by the SCN and melatonin. Sleep cycles through NREM stages and REM in roughly 90-minute cycles. Sleep supports memory consolidation, restoration, emotional regulation, and immune function. Sleep disorders include insomnia, narcolepsy, sleep apnea, and parasomnias.

1.6 Sensation

Sensation is the detection of physical stimuli and their transduction into neural signals. Vision uses rods (dim light, peripheral vision) and cones (color, fine detail) in the retina. Color vision is explained by trichromatic theory (three cone types at the retinal level) and opponent-process theory (opposing color pairs at higher processing levels).

Hearing uses hair cells in the cochlea. Pitch perception is explained by place theory (different frequencies activate different basilar membrane locations, best for high pitches) and frequency theory (firing rate matches sound frequency, best for low pitches).

Other senses include touch (mechanoreceptors detecting pressure, temperature, pain), taste (sweet, salty, sour, bitter, umami), smell (the only sense bypassing the thalamus, connecting directly to the olfactory cortex and limbic system), and proprioception (sense of body position).

Key ideas: Sensation detects stimuli and transduces them into neural signals. Vision uses rods and cones; color explained by trichromatic and opponent-process theories. Hearing uses cochlear hair cells; pitch explained by place and frequency theories. Smell bypasses the thalamus, linking strongly to emotion and memory.

Unit 2 – Cognition

2.1 Perception

Perception organizes and interprets sensory information. Top-down processing uses existing knowledge and expectations; bottom-up processing builds from raw sensory data. Gestalt principles describe visual organization: figure-ground, proximity, similarity, closure, and continuity.

Depth perception uses binocular cues (retinal disparity, convergence) and monocular cues (relative size, interposition, linear perspective, texture gradient). Perceptual constancies (size, shape, color) maintain stable perception despite changing sensory input.

Key ideas: Perception is active and constructive, using both top-down and bottom-up processing. Gestalt principles organize visual information. Depth perception uses binocular and monocular cues. Perceptual constancies maintain stable perception despite changing input.

2.2 Thinking, Problem-Solving, Judgments, and Decision-Making

Thinking involves manipulating mental representations: concepts, prototypes, and schemas. Problem-solving uses algorithms (guaranteed but slow) and heuristics (fast but fallible). Barriers include mental set and functional fixedness.

Judgment biases identified by Kahneman and Tversky include the representativeness heuristic (judging likelihood by resemblance to a prototype), the availability heuristic (judging frequency by ease of recall), confirmation bias (seeking information that confirms existing beliefs), overconfidence, and framing effects (presentation influences decisions).

Key ideas: Thinking uses concepts, prototypes, and schemas. Problem-solving uses algorithms and heuristics; mental set and functional fixedness are barriers. Judgment biases include representativeness, availability, confirmation bias, overconfidence, and framing effects.

2.3 Introduction to Memory

Memory involves encoding, storage, and retrieval. The Atkinson-Shiffrin model proposes sensory memory (brief), short-term/working memory (7 plus or minus 2 items for 20-30 seconds), and long-term memory (unlimited capacity and duration).

Long-term memory divides into explicit (declarative) memory, which is conscious and includes episodic (personal events) and semantic (general knowledge), and implicit (nondeclarative) memory, which is unconscious and includes procedural memory (skills), conditioning, and priming.

Key ideas: Memory involves encoding, storage, and retrieval. The three-stage model: sensory, short-term/working, and long-term memory. Explicit memory (episodic, semantic) is conscious; implicit memory (procedural, conditioning, priming) is unconscious.

2.4 Encoding Memories

Levels of processing theory: deep semantic processing produces stronger memories than shallow processing. Elaborative rehearsal (connecting to existing knowledge) outperforms maintenance rehearsal (simple repetition). Self-referencing, chunking, context-dependent memory, and state-dependent memory enhance encoding.

The spacing effect (distributed practice beats cramming) and the testing effect (active retrieval strengthens memory more than passive review) are powerful learning strategies.

Key ideas: Deeper semantic processing produces stronger memories. Elaborative rehearsal, self-referencing, and chunking enhance encoding. The spacing effect and testing effect are powerful strategies for durable learning.

2.5 Storing Memories

The hippocampus consolidates new explicit memories. The cerebellum stores procedural memories. The amygdala stores emotional memories. Long-term potentiation (LTP) strengthens synaptic connections through repeated stimulation: neurons that fire together wire together.

Memory consolidation is enhanced by sleep, during which the brain replays and reorganizes newly encoded information.

Key ideas: Different brain structures store different memory types (hippocampus, cerebellum, amygdala). LTP strengthens synaptic connections. Memory consolidation is enhanced by sleep.

2.6 Retrieving Memories

Retrieval depends on effective cues (encoding specificity principle). Recall requires generating information; recognition requires identifying it; relearning measures retained traces. The serial position effect shows primacy (LTM) and recency (STM) advantages.

Elizabeth Loftus's research on the misinformation effect shows memories can be distorted by post-event information, undermining eyewitness testimony reliability. Source monitoring errors involve misattributing memory origins.

Key ideas: Retrieval depends on cues matching encoding conditions. The serial position effect reflects primacy and recency advantages. The misinformation effect distorts memories through post-event suggestion. Eyewitness testimony is less reliable than commonly assumed.

2.7 Forgetting and Other Memory Challenges

Forgetting results from encoding failure, storage decay (Ebbinghaus's forgetting curve shows rapid initial forgetting), and interference. Proactive interference: old information blocks new. Retroactive interference: new information blocks old.

The recovered memory debate concerns whether repressed memories can be reliably recovered or whether therapy creates false memories. Retrograde amnesia loses old memories; anterograde amnesia prevents forming new ones.

Key ideas: Forgetting results from encoding failure, decay, and interference (proactive and retroactive). The forgetting curve shows rapid initial forgetting. The recovered memory debate concerns reliability of therapeutically recovered memories. Retrograde amnesia loses old memories; anterograde prevents new ones.

2.8 Intelligence and Achievement

Spearman proposed general intelligence (g). Gardner proposed multiple intelligences (linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, naturalistic). Sternberg proposed analytical, creative, and practical intelligence. Goleman popularized emotional intelligence.

IQ tests (Stanford-Binet, WAIS, WISC) must be valid (measuring what they claim) and reliable (consistent). The Flynn effect documents rising IQ scores over time due to environmental improvements. Group differences in IQ reflect environmental factors including poverty, education quality, stereotype threat, and cultural bias.

Key ideas: Multiple theories of intelligence exist (Spearman's g, Gardner's multiple, Sternberg's triarchic). IQ tests must be valid and reliable. The Flynn effect shows rising scores due to environmental improvements. Group differences reflect environmental factors, not innate differences.

Unit 3 – Development and Learning

3.1 Themes and Methods in Developmental Psychology

Developmental psychology studies change across the lifespan, organized by nature/nurture, continuity/discontinuity, and stability/change themes. Research methods include cross-sectional (different ages at one time), longitudinal (same group over time), and cross-sequential designs.

Prenatal development progresses through germinal (weeks 1-2), embryonic (weeks 3-8, greatest vulnerability to teratogens), and fetal (week 9 to birth) periods. Teratogens include alcohol, drugs, infections, and certain medications.

Key ideas: Developmental psychology studies lifespan change. Cross-sectional, longitudinal, and cross-sequential designs have different strengths. Prenatal development has three stages; the embryonic period is most vulnerable to teratogens.

3.2 Physical and Cognitive Development Across the Lifespan

Motor development follows cephalocaudal and proximodistal patterns. Brain development includes synaptic pruning based on experience. Piaget's four stages: sensorimotor (object permanence), preoperational (egocentrism, conservation failures), concrete operational (logical thinking about concrete events), and formal operational (abstract reasoning).

Vygotsky emphasized social context, the zone of proximal development (gap between independent and guided ability), and scaffolding (temporary support gradually withdrawn).

Key ideas: Piaget proposed four stages of cognitive development. Key concepts include object permanence, egocentrism, conservation, and abstract reasoning. Vygotsky emphasized social learning, the ZPD, and scaffolding.

3.3 Social-Emotional Development Across the Lifespan

Erikson's eight psychosocial stages each center on a crisis: trust vs. mistrust, autonomy vs. shame, initiative vs. guilt, industry vs. inferiority, identity vs. role confusion, intimacy vs. isolation, generativity vs. stagnation, and integrity vs. despair.

Ainsworth identified attachment styles through the Strange Situation: secure, insecure-avoidant, insecure-anxious, and disorganized. Baumrind identified parenting styles: authoritative (best outcomes), authoritarian, permissive, and uninvolved. Kohlberg proposed three levels of moral development: preconventional, conventional, and postconventional. Gilligan critiqued Kohlberg's male-centered justice orientation, proposing an ethic of care.

Key ideas: Erikson's eight stages each have a central psychosocial crisis. Ainsworth identified four attachment styles. Authoritative parenting produces the best outcomes. Kohlberg proposed three levels of moral reasoning; Gilligan emphasized an ethic of care.

3.4 Communication and Language Development

Language develops in a universal sequence: cooing, babbling, first words (around 12 months), vocabulary explosion (18-24 months), telegraphic speech (around 2 years), then increasingly complex grammar. Chomsky proposed an innate language acquisition device and a critical period for language learning. The linguistic relativity hypothesis suggests language influences (but does not determine) thought. Skinner's operant conditioning account explains some learning but cannot account for language's creativity and rule-governed nature.

Key ideas: Language development follows a universal sequence. Chomsky proposed innate language capacity and a critical period. The linguistic relativity hypothesis: language influences thought. Environmental input is necessary but insufficient to explain language acquisition.

3.5 Classical Conditioning

Classical conditioning (Pavlov) pairs a neutral stimulus with an unconditioned stimulus until the neutral stimulus (now conditioned stimulus) produces a conditioned response. Key processes: acquisition, extinction, spontaneous recovery, generalization, and discrimination.

Watson's Little Albert demonstrated fear conditioning in humans. Applications include systematic desensitization for phobias and taste aversion learning (Garcia effect), which demonstrates biological preparedness for certain associations.

Key ideas: Classical conditioning pairs stimuli to produce learned responses. Key processes include acquisition, extinction, generalization, and discrimination. Watson's Little Albert demonstrated conditioned fear. Taste aversion shows biological preparedness for certain associations.

3.6 Operant Conditioning

Operant conditioning (Skinner) shapes voluntary behavior through consequences. Positive reinforcement adds a desirable stimulus; negative reinforcement removes an aversive one. Both increase behavior. Positive punishment adds an aversive stimulus; negative punishment removes a desirable one. Both decrease behavior.

Schedules of reinforcement: continuous (rapid learning, rapid extinction), fixed-ratio, variable-ratio (highest, most consistent responding), fixed-interval, and variable-interval. Shaping reinforces successive approximations of a desired behavior.

Key ideas: Reinforcement increases behavior; punishment decreases it. Variable-ratio schedules produce the most consistent, extinction-resistant behavior. Punishment is less effective than reinforcement and has unwanted side effects. Shaping teaches complex behaviors through successive approximations.

3.7 Social, Cognitive, and Neurological Factors in Learning

Bandura's social learning theory: people learn through observation and modeling (Bobo doll experiment). Reciprocal determinism proposes continuous interaction among behavior, personal factors, and environment. Self-efficacy is belief in one's ability to succeed.

Tolman's latent learning occurs without reinforcement and is demonstrated when motivation appears. Kohler's insight learning involves sudden problem comprehension. Biological constraints (preparedness, instinctive drift) show that not all associations are learned equally easily.

Key ideas: Bandura showed learning through observation (Bobo doll experiment). Reciprocal determinism: behavior, personal factors, and environment interact. Latent learning occurs without reinforcement; insight involves sudden comprehension. Biological preparedness constrains what associations are easily learned.

Unit 4 – Social Psychology and Personality

4.1 Attribution Theory and Person Perception

Attribution theory examines how people explain behavior. Internal (dispositional) attributions explain behavior through character; external (situational) attributions through circumstances. The fundamental attribution error overestimates dispositional causes of others' behavior. The self-serving bias attributes success to oneself and failure to external factors. Person perception is shaped by schemas, primacy effects, the halo effect, and stereotypes.

Key ideas: The fundamental attribution error overestimates dispositional causes of others' behavior. The self-serving bias takes credit for success and blames failure on external factors. First impressions are shaped by schemas, primacy effects, and the halo effect.

4.2 Attitude Formation and Attitude Change

Attitudes have cognitive, affective, and behavioral components. Cognitive dissonance (Festinger) occurs when behavior contradicts attitudes; people change attitudes to reduce discomfort. The elaboration likelihood model describes central (thoughtful, lasting) and peripheral (superficial, temporary) routes to persuasion.

Key ideas: Cognitive dissonance occurs when behavior contradicts attitudes. The elaboration likelihood model: central route produces lasting change, peripheral route produces temporary change.

4.3 Psychology of Social Situations

Asch's conformity experiments showed people conform to obviously wrong group answers. Milgram's obedience experiments showed 65 percent of participants delivered maximum shocks when instructed by authority. The bystander effect (Darley and Latane) shows reduced helping when others are present due to diffusion of responsibility.

Group dynamics include social facilitation, social loafing, groupthink (suppressing dissent for unanimity), and deindividuation (loss of self-awareness in groups).

Key ideas: Asch demonstrated conformity to group pressure. Milgram showed obedience to authority even when causing harm. The bystander effect reduces helping through diffusion of responsibility. Group dynamics include social facilitation, social loafing, groupthink, and deindividuation.

4.4 Psychodynamic and Humanistic Theories of Personality

Freud proposed the id (pleasure principle), ego (reality principle), and superego (moral standards). Defense mechanisms include repression, projection, displacement, rationalization, and sublimation. Freud's theories are influential but criticized for being unfalsifiable and lacking empirical support.

Humanistic psychologists Maslow (hierarchy of needs, self-actualization) and Rogers (unconditional positive regard, self-concept, congruence) emphasized human potential and growth.

Key ideas: Freud proposed id, ego, superego and defense mechanisms. Humanistic psychology (Maslow, Rogers) emphasizes growth, self-actualization, and unconditional positive regard.

4.5 Social-Cognitive and Trait Theories of Personality

Bandura's social-cognitive theory emphasizes reciprocal determinism and self-efficacy. Rotter's locus of control (internal vs. external) affects motivation and coping. The Big Five traits (OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) are the most empirically supported personality framework.

Personality assessment includes self-report inventories (MMPI-2, better reliability/validity) and projective tests (Rorschach, TAT, lower reliability/validity).

Key ideas: The Big Five (OCEAN) is the most empirically supported personality framework. Self-efficacy and locus of control influence motivation and achievement. Self-report inventories have better psychometric properties than projective tests.

4.6 Motivation

Drive-reduction theory explains behavior as restoring homeostasis. Arousal theory proposes optimal stimulation levels. The Yerkes-Dodson law: moderate arousal produces peak performance, with optimal level varying by task complexity. Maslow's hierarchy organizes needs from physiological to self-actualization.

Hunger is regulated by the hypothalamus, hormones (ghrelin stimulates hunger, leptin suppresses it), and psychological/cultural factors. Eating disorders involve biological, psychological, and cultural components.

Key ideas: The Yerkes-Dodson law links arousal to performance. Maslow's hierarchy organizes needs from survival to self-actualization. Hunger is regulated by the hypothalamus, hormones, and psychological factors.

4.7 Emotion

James-Lange theory: emotion follows physiological response. Cannon-Bard: arousal and emotion occur simultaneously. Schachter-Singer two-factor: emotion requires arousal plus cognitive labeling. Lazarus: cognitive appraisal determines emotional response.

Ekman identified universally recognized basic emotions in facial expressions. The facial feedback hypothesis proposes that expressions influence emotional experience. The amygdala processes fear through fast (automatic) and slow (conscious) pathways.

Key ideas: Major emotion theories differ on the sequence of arousal, cognition, and feeling. Ekman identified universal facial expressions of basic emotions. The amygdala processes fear through fast and slow pathways.

Unit 5 – Mental and Physical Health

5.1 Introduction to Health Psychology

The biopsychosocial model integrates biological, psychological, and social factors in health. Selye's General Adaptation Syndrome describes alarm, resistance, and exhaustion stages of stress. Chronic stress suppresses immune function, raises cortisol, and promotes unhealthy behavior.

Coping strategies include problem-focused (addressing the stressor) and emotion-focused (managing emotional distress). Social support is one of the strongest predictors of health and resilience.

Key ideas: The biopsychosocial model integrates biological, psychological, and social factors. Chronic stress damages health through immune suppression and behavioral pathways. Problem-focused and emotion-focused coping address different aspects of stress. Social support strongly predicts health outcomes.

5.2 Positive Psychology

Positive psychology (Seligman) studies human flourishing. Happiness correlates strongly with relationships, meaningful work, and engagement, not primarily with wealth. Seligman's PERMA model: Positive emotion, Engagement, Relationships, Meaning, and Accomplishment.

Resilience is supported by social connections, optimistic explanatory style, sense of purpose, and effective coping. Growth mindset (Dweck) promotes resilience and achievement compared to fixed mindset.

Key ideas: Positive psychology studies flourishing and well-being, not just pathology. PERMA: Positive emotion, Engagement, Relationships, Meaning, Accomplishment. Resilience is supported by optimism, social connections, and growth mindset.

5.3 Explaining and Classifying Psychological Disorders

Psychological disorders involve distressing, dysfunctional, deviant, and potentially dangerous patterns. The DSM-5-TR classifies disorders by symptom patterns. The biopsychosocial model explains causes; the diathesis-stress model proposes that disorders develop when predisposition meets environmental stress.

Labeling can guide treatment but also create stigma and self-fulfilling prophecies, as Rosenhan's "On Being Sane in Insane Places" demonstrated.

Key ideas: Disorders involve distress, dysfunction, deviance, and danger. The DSM-5-TR classifies; the biopsychosocial model explains causes. The diathesis-stress model: predisposition plus environmental stress triggers disorders. Labels can help or harm.

5.4 Selection of Categories of Psychological Disorders

Anxiety disorders include generalized anxiety disorder, specific phobias, social anxiety, panic disorder, and agoraphobia. OCD involves intrusive obsessions and compulsive rituals. PTSD follows trauma with re-experiencing, avoidance, and hyperarousal.

Depressive disorders involve persistent sadness and functional impairment. Bipolar disorders alternate depression with manic episodes. Schizophrenia features positive symptoms (hallucinations, delusions, disorganized speech) and negative symptoms (flat affect, withdrawal). Personality disorders include antisocial and borderline types.

Key ideas: Anxiety disorders involve excessive fear and worry. OCD features obsessions and compulsions; PTSD follows trauma. Depression and bipolar disorder are mood disorders. Schizophrenia involves hallucinations, delusions, and negative symptoms.

5.5 Treatment of Psychological Disorders

Psychodynamic therapy explores unconscious conflicts. Humanistic therapy (Rogers) provides unconditional positive regard for growth. Cognitive-behavioral therapy (CBT) is the most researched and effective approach, combining cognitive restructuring (challenging distorted thoughts) with behavioral techniques (exposure therapy, behavioral activation).

Biomedical treatments include antidepressants (SSRIs increase serotonin), antianxiety drugs (benzodiazepines), antipsychotics (blocking dopamine for schizophrenia), mood stabilizers (lithium for bipolar), ECT for treatment-resistant depression, and TMS. The therapeutic alliance is one of the strongest predictors of treatment success across all therapy types.

Key ideas: CBT is the most empirically supported psychotherapy. Medications target specific neurotransmitter systems for different disorders. The therapeutic alliance predicts treatment success across therapy types. Combined psychotherapy and medication is often most effective.
`


export const PSYCHOLOGY_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Psychology',
  units: parseRawOverview(RAW_PSYCHOLOGY),
  features: { latex: false, codeExamples: false },
}
