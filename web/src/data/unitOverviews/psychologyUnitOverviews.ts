import type { SubjectUnitOverview } from './types'
import { parseRawOverview } from './parseRawOverview'

const RAW_PSYCHOLOGY = `AP Psychology

Unit 1 – Biological Bases of Behavior

1.1 Interaction of Heredity and Environment

The nature-versus-nurture debate is one of psychology's oldest questions. How much of what people are and do comes from the genes they inherit (nature), and how much comes from what they experience (nurture)? Modern psychology has mostly dropped the either/or framing, because almost every human characteristic comes from genes and environment working together.

Behavioral genetics studies how much heredity and environment each contribute to individual differences, the ways people differ from one another. Twin studies are a primary research method. Identical (monozygotic) twins share 100 percent of their DNA, while fraternal (dizygotic) twins share about 50 percent. So if identical twins are more alike on a trait than fraternal twins are, researchers attribute the difference to genes. Adoption studies compare adopted children with both sets of parents: the biological parents show genetic influence, and the adoptive parents show environmental influence.

Heritability estimates how much of the variation in a trait within a population comes from genetic differences. Intelligence, for example, has a heritability of roughly 0.50-0.80. Heritability describes a group, so it says nothing about how much of one individual's trait comes from genes.

Epigenetics changed how researchers think about gene-environment interaction. It showed that environmental factors such as stress, nutrition, toxins, and parenting behavior can modify gene expression (whether a gene is switched on or off) without altering the DNA sequence itself. Chemical tags do the switching, and some of these changes can be passed to offspring. Gene-environment interaction means that the effect of a gene depends on the environment, and vice versa. Gene-environment correlation describes how genetic traits influence the environments people experience.

Key ideas: Nature and nurture interact to produce all human traits. Twin and adoption studies estimate heritability, which applies to populations, not to individuals. Epigenetics shows that environmental factors can change gene expression without changing the DNA itself. Through gene-environment interaction, each gene's effect depends on the environment and vice versa.

1.2 Overview of the Nervous System

The nervous system is the body's electrochemical communication network, meaning it sends messages with both electrical signals and chemicals. Its command center is the central nervous system (CNS), which consists of the brain and spinal cord. The spinal cord carries messages between the brain and the body, and it also runs simple reflexes on its own without involving the brain.

The peripheral nervous system (PNS) connects the CNS to the rest of the body. Its somatic nervous system controls voluntary movements, and its autonomic nervous system controls involuntary functions that run automatically. The autonomic system has two divisions. The sympathetic nervous system turns on the fight-or-flight response, and the parasympathetic nervous system brings the body back to rest-and-digest mode. Like a gas pedal and a brake, the two work in opposition to maintain homeostasis, the body's steady internal balance.

The endocrine system is a second, slower messenger system. Its glands secrete hormones (chemical messengers) into the bloodstream, where they regulate slower, longer-lasting processes. The main glands to know are the pituitary, called the "master gland," and the adrenal glands, which release cortisol and adrenaline during stress. The thyroid regulates metabolism, and the hypothalamus links the nervous and endocrine systems.

Key ideas: The CNS (brain and spinal cord) is the central processing hub, and the PNS connects it to the body. The sympathetic system turns on fight-or-flight, while the parasympathetic system promotes rest-and-digest. The endocrine system uses hormones for slower, longer-lasting regulation, working alongside the faster nervous system.

1.3 The Neuron and Neural Firing

The neuron, or nerve cell, is the basic cell of the nervous system. Sensory neurons carry information from the sense organs to the CNS, and motor neurons carry commands out to muscles and glands. Interneurons process information within the CNS. Each neuron has a cell body (soma), dendrites that receive signals, and an axon that passes signals on. The myelin sheath is a fatty coating on the axon. It speeds up signals through saltatory conduction, where the signal jumps from gap to gap along the myelin.

Neural firing follows the all-or-nothing principle: a neuron either fires at full strength or doesn't fire at all. At rest, a neuron holds a small electrical charge called its resting potential, approximately -70 millivolts. When stimulation pushes it to the threshold (about -55 mV), an action potential, the neuron's electrical signal, travels down the axon. Because every action potential has the same strength, a stronger stimulus is coded by firing frequency, meaning how often the neuron fires.

Neurons pass messages to each other at the synapse. The sending neuron releases neurotransmitters, its chemical messengers, into the synaptic cleft, the small gap between the two cells. They bind to receptor sites on the receiving neuron and either excite it (make it more likely to fire) or inhibit it (make it less likely to fire). Acetylcholine is involved in muscle movement and memory, and dopamine in reward, motivation, and movement. Serotonin affects mood, sleep, and appetite, while norepinephrine affects alertness. GABA is the main inhibitory neurotransmitter and glutamate the main excitatory one. Endorphins act as natural painkillers.

Key ideas: Neurons send electrochemical signals through the dendrites, cell body, and axon. Neural firing follows the all-or-nothing principle, so stimulus intensity is coded by how often a neuron fires. Neurotransmitters cross the synapse to excite or inhibit the receiving neuron. The neurotransmitters to know are dopamine, serotonin, GABA, acetylcholine, and endorphins.

1.4 The Brain

The brainstem controls the basic functions that keep you alive. Inside it, the medulla regulates breathing and heart rate, the pons coordinates movement and sleep, and the reticular formation regulates arousal, or how alert you are. The cerebellum coordinates voluntary movement and balance.

The limbic system is a group of structures that handles emotion, memory, and motivation. The amygdala processes fear and other emotional reactions. The hippocampus is critical for forming new explicit memories, the kind you can consciously recall. The hypothalamus regulates hunger, thirst, body temperature, and the endocrine system. The thalamus works like a relay station, passing sensory information on to the cortex for every sense except smell.

The cerebral cortex is the brain's outer layer, and each hemisphere (half of the brain) has four lobes. The frontal lobes handle executive functions such as planning, along with personality, voluntary movement (in the motor cortex), and speech production (in Broca's area). The parietal lobes process touch and other body sensations, called somatosensory information. Sound and language comprehension belong to the temporal lobes, with comprehension centered in Wernicke's area. The occipital lobes process visual information.

The corpus callosum connects the two hemispheres. Split-brain research revealed lateralization, the fact that each hemisphere specializes in different jobs: the left hemisphere dominates language and logic, while the right handles spatial processing and facial recognition. Brain plasticity, the brain's ability to reorganize itself, continues throughout life, though it is greatest in childhood.

Key ideas: The brainstem controls basic life functions, and the cerebellum coordinates movement. The limbic system (amygdala, hippocampus, hypothalamus, thalamus) handles emotion, memory, and motivation. The cerebral cortex has four lobes, each with its own specialized functions. The two hemispheres are lateralized but work together, and brain plasticity lets the brain reorganize.

1.5 Sleep

Sleep follows a circadian rhythm, a body clock that runs on a roughly 24-hour cycle. Two things regulate it: the suprachiasmatic nucleus (SCN) and the hormone melatonin.

Through the night, sleep runs in cycles of approximately 90 minutes. Each cycle moves through the NREM (non-REM) stages and REM sleep. N1 is light sleep. N2 brings sleep spindles, which are short bursts of brain activity. N3 is deep slow-wave sleep marked by delta waves. REM sleep, named for its rapid eye movements, is when vivid dreaming happens, while muscle paralysis keeps the body still.

Sleep handles memory consolidation, which makes new memories stable, and physical restoration, since growth hormone is released during deep NREM sleep. It also supports emotional regulation (with help from REM sleep) and immune maintenance. Sleep deprivation, or not getting enough sleep, impairs mood, judgment, cognitive function, and health.

Sleep disorders include insomnia (trouble falling or staying asleep), narcolepsy (sudden uncontrollable sleep episodes), and sleep apnea (breathing interruptions during sleep). Parasomnias are unusual behaviors during sleep, such as sleepwalking and night terrors, and they occur during deep NREM sleep.

Key ideas: The SCN and melatonin regulate the circadian rhythm. Sleep cycles through the NREM stages and REM about every 90 minutes. Sleep supports memory consolidation, physical restoration, emotional regulation, and immune function. Sleep disorders include insomnia, narcolepsy, sleep apnea, and parasomnias.

1.6 Sensation

Sensation is the detection of physical stimuli, such as light and sound waves, and their transduction, or conversion, into neural signals.

Vision depends on two kinds of receptor cells in the retina, the light-sensitive layer at the back of the eye. Rods handle dim light and peripheral vision, and cones handle color and fine detail. Color vision is explained by trichromatic theory, which says the retina has three types of cones, and by opponent-process theory, which says higher processing levels handle colors as opposing pairs.

Hearing depends on hair cells in the cochlea of the inner ear. Two theories explain pitch perception, which is how high or low a sound seems. Place theory says different frequencies activate different spots on the basilar membrane, and it works best for high pitches. Frequency theory says the firing rate of the nerve matches the frequency of the sound, and it works best for low pitches.

Touch relies on mechanoreceptors that detect pressure, temperature, and pain. Taste detects sweet, salty, sour, bitter, and umami. Smell is the only sense that bypasses the thalamus: it connects directly to the olfactory cortex and to the limbic system, the brain's emotion and memory network. Proprioception is your sense of where your body parts are.

Key ideas: Sensation detects stimuli and transduces (converts) them into neural signals. Vision uses rods and cones, and color is explained by trichromatic and opponent-process theories. Hearing uses hair cells in the cochlea, and pitch is explained by place and frequency theories. Smell bypasses the thalamus, so it links strongly to emotion and memory.

Unit 2 – Cognition

2.1 Perception

Perception is how the brain organizes and interprets sensory information. Top-down processing starts from what you already know and expect, while bottom-up processing builds a picture from the raw sensory data. Gestalt principles describe how we group what we see into whole objects: figure-ground, proximity, similarity, closure, and continuity.

Depth perception, judging how far away things are, uses two kinds of cues. Binocular cues need both eyes (retinal disparity, convergence). Monocular cues work with one eye (relative size, interposition, linear perspective, texture gradient). Perceptual constancies for size, shape, and color keep our perception stable even when the sensory input changes.

Key ideas: Perception is active and constructive, using both top-down and bottom-up processing. Gestalt principles organize visual information into whole objects. Depth perception uses binocular cues from both eyes and monocular cues from one. Perceptual constancies keep perception stable despite changing input.

2.2 Thinking, Problem-Solving, Judgments, and Decision-Making

Thinking means working with mental representations: concepts (mental categories), prototypes (the best example of a category), and schemas (frameworks for organizing knowledge). For problem-solving, algorithms are step-by-step procedures that guarantee an answer but can be slow, while heuristics are mental shortcuts that are fast but can fail. Two barriers get in the way. Mental set is sticking with an approach that worked before, and functional fixedness is seeing an object only in terms of its usual use.

Kahneman and Tversky identified several judgment biases. The representativeness heuristic judges how likely something is by how much it resembles a prototype. The availability heuristic judges how often something happens by how easily examples come to mind. Confirmation bias is seeking out information that confirms what you already believe. The list also includes overconfidence and framing effects, where the way a choice is presented influences the decision.

Key ideas: Thinking uses concepts, prototypes, and schemas. Problem-solving uses algorithms and heuristics, and mental set and functional fixedness are barriers. Judgment biases include representativeness, availability, confirmation bias, overconfidence, and framing effects.

2.3 Introduction to Memory

Memory has three steps: encoding (getting information in), storage (keeping it), and retrieval (getting it back out). The Atkinson-Shiffrin model describes three stages. Sensory memory holds information very briefly. Short-term, or working, memory holds 7 plus or minus 2 items for 20-30 seconds. Long-term memory has unlimited capacity and duration.

Long-term memory comes in two types. Explicit (declarative) memory is conscious; it includes episodic memory for personal events and semantic memory for general knowledge. Implicit (nondeclarative) memory is unconscious and includes procedural memory for skills, conditioning, and priming, where earlier exposure shapes a later response without your awareness.

Key ideas: Memory involves encoding, storage, and retrieval. The three-stage model runs from sensory memory to short-term/working memory to long-term memory. Explicit memory (episodic, semantic) is conscious, and implicit memory (procedural, conditioning, priming) is unconscious.

2.4 Encoding Memories

According to levels of processing theory, deep semantic processing (thinking about meaning) produces stronger memories than shallow processing. Elaborative rehearsal, which connects new information to what you already know, works better than maintenance rehearsal, which is simple repetition. Self-referencing (relating information to yourself), chunking (grouping items into larger units), context-dependent memory, and state-dependent memory also improve encoding. The last two mean recall is easier in the same setting or the same mental or physical state you were in while learning.

The spacing effect shows that distributed practice, studying in sessions spread out over time, beats cramming. The testing effect shows that actively retrieving information strengthens memory more than passive review does.

Key ideas: Deeper semantic processing produces stronger memories. Elaborative rehearsal, self-referencing, and chunking strengthen encoding. The spacing effect and the testing effect are powerful strategies for durable learning.

2.5 Storing Memories

Different brain structures store different kinds of memory. The hippocampus consolidates new explicit memories, the cerebellum stores procedural memories, and the amygdala stores emotional memories. At the level of single connections, long-term potentiation (LTP) strengthens synapses through repeated stimulation. The saying to remember is "neurons that fire together wire together."

Sleep helps consolidate memories, because during sleep the brain replays and reorganizes newly encoded information.

Key ideas: Different brain structures store different memory types (hippocampus, cerebellum, amygdala). LTP strengthens synaptic connections through repeated use. Sleep aids memory consolidation.

2.6 Retrieving Memories

Retrieval depends on effective cues. The encoding specificity principle says a cue works best when it matches the conditions present when the memory was formed. Recall requires generating the information yourself, as on a fill-in-the-blank question. Recognition only requires identifying it, as on a multiple-choice question. Relearning measures the memory traces that remain. The serial position effect shows that people remember the first items in a list best (primacy, thanks to long-term memory) and the last items too (recency, thanks to short-term memory).

Elizabeth Loftus's research on the misinformation effect shows that information received after an event can distort the memory of it, which undermines the reliability of eyewitness testimony. Source monitoring errors happen when people misattribute where a memory came from.

Key ideas: Retrieval depends on cues that match the conditions at encoding. The serial position effect reflects primacy and recency advantages. The misinformation effect distorts memories through suggestion after the event. Eyewitness testimony is less reliable than most people assume.

2.7 Forgetting and Other Memory Challenges

Forgetting has three main causes: encoding failure (the information never got in), storage decay, and interference. Ebbinghaus's forgetting curve shows that most forgetting happens quickly, soon after learning. Interference runs both ways. In proactive interference, old information blocks new information. In retroactive interference, new information blocks old information.

The recovered memory debate asks whether repressed memories can be reliably recovered or whether therapy creates false memories. Amnesia also comes in two forms: retrograde amnesia wipes out old memories, while anterograde amnesia prevents forming new ones.

Key ideas: Forgetting results from encoding failure, decay, and interference, which can be proactive or retroactive. The forgetting curve shows rapid forgetting right after learning. The recovered memory debate concerns how reliable memories recovered in therapy are. Retrograde amnesia loses old memories, and anterograde amnesia prevents new ones.

2.8 Intelligence and Achievement

Spearman proposed general intelligence (g), a single ability underlying performance on many tasks. Gardner proposed multiple intelligences: linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic, interpersonal, intrapersonal, and naturalistic. Sternberg proposed three kinds, analytical, creative, and practical intelligence. Goleman popularized emotional intelligence.

IQ tests (Stanford-Binet, WAIS, WISC) must be valid, meaning they measure what they claim to measure, and reliable, meaning they give consistent results. The Flynn effect documents IQ scores rising over time due to environmental improvements. Group differences in IQ reflect environmental factors, including poverty, education quality, stereotype threat, and cultural bias.

Key ideas: Several theories of intelligence exist: Spearman's g, Gardner's multiple intelligences, and Sternberg's triarchic theory. IQ tests must be valid and reliable. The Flynn effect shows scores rising because of environmental improvements. Group differences reflect environmental factors, not innate differences.

Unit 3 – Development and Learning

3.1 Themes and Methods in Developmental Psychology

Developmental psychology studies how people change across the lifespan. Three big questions organize the field: nature/nurture, continuity/discontinuity (does change happen gradually or in distinct stages?), and stability/change (do traits stay the same over time?). Researchers use three designs. A cross-sectional study compares people of different ages at one time, a longitudinal study follows the same group over time, and a cross-sequential design combines the two.

Prenatal development has three periods. The germinal period covers weeks 1-2. The embryonic period covers weeks 3-8, and it is the time of greatest vulnerability to teratogens, which are harmful substances that can damage a developing baby. The fetal period runs from week 9 to birth. Teratogens include alcohol, drugs, infections, and certain medications.

Key ideas: Developmental psychology studies change across the lifespan. Cross-sectional, longitudinal, and cross-sequential designs each have different strengths. Prenatal development has three stages, and the embryonic period is the most vulnerable to teratogens.

3.2 Physical and Cognitive Development Across the Lifespan

Motor development follows two patterns. It is cephalocaudal, moving from head to toe, and proximodistal, moving from the center of the body outward. The brain develops partly through synaptic pruning: connections that experience uses get kept, and unused ones are cut back.

Piaget described four stages of cognitive development. In the sensorimotor stage, infants gain object permanence, the understanding that things still exist when out of sight. The preoperational stage brings egocentrism (trouble seeing another person's point of view) and conservation failures, meaning the child does not yet understand that an amount stays the same when its shape changes. In the concrete operational stage, children think logically about concrete events. The formal operational stage adds abstract reasoning.

Vygotsky focused on social context. His zone of proximal development (ZPD) is the gap between what a child can do alone and what the child can do with guidance. Scaffolding is temporary support that is gradually withdrawn as the child improves.

Key ideas: Piaget proposed four stages of cognitive development. The concepts to know are object permanence, egocentrism, conservation, and abstract reasoning. Vygotsky stressed social learning, the ZPD, and scaffolding.

3.3 Social-Emotional Development Across the Lifespan

Erikson proposed eight psychosocial stages, and each one centers on a crisis the person must resolve. The first four are trust vs. mistrust, autonomy vs. shame, initiative vs. guilt, and industry vs. inferiority. The last four are identity vs. role confusion, intimacy vs. isolation, generativity vs. stagnation, and integrity vs. despair.

Ainsworth used the Strange Situation, an observation of how infants react when their caregiver leaves and returns, to identify attachment styles: secure, insecure-avoidant, insecure-anxious, and disorganized. Baumrind identified four parenting styles. Authoritative parents, who are warm but set clear rules, produce the best outcomes; the other styles are authoritarian, permissive, and uninvolved.

Kohlberg proposed three levels of moral development: preconventional, conventional, and postconventional. Gilligan criticized Kohlberg's male-centered focus on justice and proposed an ethic of care instead.

Key ideas: Each of Erikson's eight stages has a central psychosocial crisis. Ainsworth identified four attachment styles. Authoritative parenting produces the best outcomes. Kohlberg proposed three levels of moral reasoning, and Gilligan argued for an ethic of care.

3.4 Communication and Language Development

Children everywhere learn language in the same order: cooing, babbling, first words (around 12 months), a vocabulary explosion (18-24 months), telegraphic speech (around 2 years), and then more and more complex grammar. Telegraphic speech means short phrases with the small words left out.

Chomsky argued that humans are born with a language acquisition device, an innate capacity for language, and that there is a critical period for learning it. The linguistic relativity hypothesis suggests that the language you speak influences how you think, though it does not determine it. Skinner explained language through operant conditioning, but his account cannot explain how creative and rule-governed language is.

Key ideas: Language development follows the same sequence for all children. Chomsky proposed an innate language capacity and a critical period. The linguistic relativity hypothesis says language influences thought. Environmental input is necessary for learning language but cannot fully explain it.

3.5 Classical Conditioning

Classical conditioning, studied by Pavlov, is learning by association. A neutral stimulus is paired again and again with an unconditioned stimulus, something that triggers a response naturally. Eventually the neutral stimulus alone, now called the conditioned stimulus, produces a conditioned response. Acquisition is that initial learning. Extinction is the fading of the response when the pairing stops, and spontaneous recovery is its sudden return after a pause. Generalization means responding to similar stimuli, while discrimination means telling them apart.

Watson's Little Albert study demonstrated fear conditioning in humans. Applications include systematic desensitization, which treats phobias, and taste aversion learning (the Garcia effect). Taste aversion shows biological preparedness, our built-in readiness to learn certain associations more easily than others.

Key ideas: Classical conditioning pairs stimuli to produce learned responses. The main processes are acquisition, extinction, generalization, and discrimination. Watson's Little Albert study demonstrated conditioned fear. Taste aversion shows biological preparedness for certain associations.

3.6 Operant Conditioning

Operant conditioning, studied by Skinner, shapes voluntary behavior through its consequences. In this vocabulary, "positive" means something is added and "negative" means something is taken away. Positive reinforcement adds a desirable stimulus, and negative reinforcement removes an unpleasant (aversive) one; both increase a behavior. Positive punishment adds an aversive stimulus, and negative punishment removes a desirable one; both decrease a behavior.

Schedules of reinforcement set when rewards come. Continuous reinforcement rewards every response, which gives rapid learning but also rapid extinction. Ratio schedules reward after a number of responses, and interval schedules reward after an amount of time. Each can be fixed or variable, which gives four schedules: fixed-ratio, variable-ratio, fixed-interval, and variable-interval. A variable-ratio schedule produces the highest and most consistent responding. Shaping teaches a behavior by reinforcing successive approximations, small steps that get closer and closer to the goal.

Key ideas: Reinforcement increases behavior, and punishment decreases it. Variable-ratio schedules produce the most consistent behavior and the most resistant to extinction. Punishment is less effective than reinforcement and has unwanted side effects. Shaping teaches complex behaviors through successive approximations.

3.7 Social, Cognitive, and Neurological Factors in Learning

Bandura's social learning theory says people learn by watching and imitating others, which he called observation and modeling; his Bobo doll experiment is the classic example. Reciprocal determinism is the idea that behavior, personal factors, and the environment constantly affect each other. Self-efficacy is a person's belief in their own ability to succeed.

Tolman showed latent learning, learning that happens without reinforcement and only shows up once there is a reason (motivation) to use it. Kohler studied insight learning, a sudden understanding of how to solve a problem. Biological constraints such as preparedness and instinctive drift show that some associations are much easier to learn than others.

Key ideas: Bandura showed learning through observation in the Bobo doll experiment. Reciprocal determinism says behavior, personal factors, and environment interact. Latent learning occurs without reinforcement, while insight involves sudden understanding. Biological preparedness limits which associations are easily learned.

Unit 4 – Social Psychology and Personality

4.1 Attribution Theory and Person Perception

Attribution theory looks at how people explain behavior, their own and other people's. An internal (dispositional) attribution explains behavior by a person's character, while an external (situational) attribution explains it by the circumstances. The fundamental attribution error (FAE) is the tendency to overestimate dispositional causes when judging others' behavior and to underrate the situation. The self-serving bias works the other way for ourselves: people credit their successes to themselves and blame their failures on outside factors. Person perception, how we form impressions of others, is shaped by schemas, primacy effects (first impressions count most), the halo effect, and stereotypes. The halo effect means that one good trait makes us assume a person has other good traits.

Key ideas: The FAE overestimates dispositional causes of other people's behavior. The self-serving bias takes credit for success and blames failure on external factors. Schemas, primacy effects, and the halo effect all shape first impressions.

4.2 Attitude Formation and Attitude Change

Attitudes have three components: cognitive (what you think), affective (what you feel), and behavioral (how you act). Festinger's cognitive dissonance theory says that when behavior contradicts attitudes, people feel uncomfortable, and they often change their attitudes to reduce that discomfort. The elaboration likelihood model describes two routes to persuasion. The central route works through careful thought about the arguments and produces lasting change. The peripheral route works through surface cues and produces only temporary change.

Key ideas: Cognitive dissonance occurs when behavior contradicts attitudes. In the elaboration likelihood model, the central route produces lasting change and the peripheral route produces temporary change.

4.3 Psychology of Social Situations

In Asch's conformity experiments, people went along with group answers that were obviously wrong. Milgram's obedience experiments showed that 65 percent of participants delivered the maximum shock when an authority figure told them to. Darley and Latane described the bystander effect: people are less likely to help when others are present, because of diffusion of responsibility, the sense that someone else will step in.

Social facilitation is performing better on easy or well-practiced tasks when others are watching. Social loafing is putting in less effort when working in a group. Groupthink happens when members suppress disagreement to keep everyone in agreement. Deindividuation is the loss of self-awareness in a group.

Key ideas: Asch demonstrated conformity to group pressure. Milgram showed obedience to authority even when it meant causing harm. The bystander effect reduces helping through diffusion of responsibility. Group dynamics include social facilitation, social loafing, groupthink, and deindividuation.

4.4 Psychodynamic and Humanistic Theories of Personality

Freud split personality into the id, ego, and superego. The id follows the pleasure principle and wants immediate gratification. The ego follows the reality principle and finds realistic ways to meet the id's demands. The superego holds moral standards. Defense mechanisms are unconscious ways the ego protects against anxiety, including repression, projection, displacement, rationalization, and sublimation. Freud's theories have been influential, but critics say they are unfalsifiable (impossible to prove wrong) and lack empirical support.

Humanistic psychologists focused on human potential and growth. Maslow proposed the hierarchy of needs, which tops out in self-actualization, reaching one's full potential. Rogers stressed unconditional positive regard (acceptance without conditions), self-concept, and congruence, a match between how people see themselves and how they actually experience life.

Key ideas: Freud proposed the id, ego, and superego, plus defense mechanisms. Humanistic psychology (Maslow, Rogers) centers on growth, self-actualization, and unconditional positive regard.

4.5 Social-Cognitive and Trait Theories of Personality

Bandura's social-cognitive theory centers on reciprocal determinism and self-efficacy. Rotter's locus of control describes whether people believe their outcomes depend on themselves (internal) or on outside forces (external), and it affects motivation and coping. The Big Five traits (OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) are the personality framework with the most empirical support.

Self-report inventories such as the MMPI-2 ask people to answer questions about themselves and have better reliability and validity. Projective tests such as the Rorschach and TAT ask people to interpret ambiguous images, and their reliability and validity are lower.

Key ideas: The Big Five (OCEAN) is the personality framework with the most empirical support. Self-efficacy and locus of control influence motivation and achievement. Self-report inventories have better psychometric properties, meaning reliability and validity, than projective tests.

4.6 Motivation

Drive-reduction theory says we act to restore homeostasis, the body's balance: hunger pushes us to eat, for example. Arousal theory says we seek an optimal level of stimulation. The Yerkes-Dodson law says moderate arousal produces peak performance, and the best level depends on how complex the task is. Maslow's hierarchy ranks needs from physiological ones at the bottom up to self-actualization at the top.

Hunger is regulated by the hypothalamus, by hormones, and by psychological and cultural factors. Ghrelin is the hormone that stimulates hunger, and leptin suppresses it. Eating disorders have biological, psychological, and cultural components.

Key ideas: The Yerkes-Dodson law links arousal to performance. Maslow's hierarchy organizes needs from survival up to self-actualization. The hypothalamus, hormones, and psychological factors all regulate hunger.

4.7 Emotion

The major emotion theories disagree about what comes first. James-Lange theory says emotion follows the physiological response: your body reacts, and then you feel. Cannon-Bard theory says arousal and emotion happen at the same time. Schachter-Singer's two-factor theory says emotion requires arousal plus a cognitive label for that arousal. Lazarus argued that cognitive appraisal, how you interpret a situation, determines the emotional response.

Ekman identified basic emotions whose facial expressions are recognized across cultures. The facial feedback hypothesis proposes that facial expressions influence emotional experience. The amygdala processes fear along two pathways, a fast automatic one and a slower conscious one.

Key ideas: The major emotion theories differ on the order of arousal, cognition, and feeling. Ekman identified universal facial expressions of basic emotions. The amygdala processes fear through fast and slow pathways.

Unit 5 – Mental and Physical Health

5.1 Introduction to Health Psychology

The biopsychosocial model explains health as the combined result of biological, psychological, and social factors. Selye's General Adaptation Syndrome describes three stages of the stress response: alarm, resistance, and exhaustion. Chronic (long-lasting) stress suppresses immune function, raises cortisol, and promotes unhealthy behavior.

Coping strategies come in two types. Problem-focused coping deals with the stressor itself, while emotion-focused coping manages the emotional distress. Social support is one of the strongest predictors of health and resilience.

Key ideas: The biopsychosocial model combines biological, psychological, and social factors. Chronic stress damages health by suppressing the immune system and by changing behavior. Problem-focused and emotion-focused coping deal with different sides of stress. Social support strongly predicts health outcomes.

5.2 Positive Psychology

Positive psychology (Seligman) studies human flourishing. Happiness tracks relationships, meaningful work, and engagement much more closely than it tracks wealth. Seligman's PERMA model lists five parts of well-being: Positive emotion, Engagement, Relationships, Meaning, and Accomplishment.

Social connections, an optimistic explanatory style, a sense of purpose, and effective coping all support resilience. According to Dweck, a growth mindset, the belief that abilities can improve with effort, promotes resilience and achievement more than a fixed mindset does.

Key ideas: Positive psychology studies flourishing and well-being as well as pathology. PERMA stands for Positive emotion, Engagement, Relationships, Meaning, Accomplishment. Optimism, social connections, and a growth mindset support resilience.

5.3 Explaining and Classifying Psychological Disorders

Psychological disorders involve patterns that are distressing, dysfunctional, deviant, and potentially dangerous. The DSM-5-TR classifies disorders by their symptom patterns. The biopsychosocial model explains causes, and the diathesis-stress model says a disorder develops when a predisposition (diathesis) meets environmental stress.

Labels can guide treatment, but they can also create stigma and self-fulfilling prophecies. Rosenhan's study "On Being Sane in Insane Places" demonstrated this.

Key ideas: Disorders involve distress, dysfunction, deviance, and danger. The DSM-5-TR classifies disorders, and the biopsychosocial model explains their causes. In the diathesis-stress model, a predisposition plus environmental stress triggers a disorder. Labels can help or harm.

5.4 Selection of Categories of Psychological Disorders

Anxiety disorders include generalized anxiety disorder, specific phobias, social anxiety, panic disorder, and agoraphobia. OCD involves intrusive obsessions (unwanted thoughts) and compulsive rituals. PTSD follows trauma, with re-experiencing, avoidance, and hyperarousal.

Depressive disorders involve persistent sadness and trouble functioning. In bipolar disorders, depression alternates with manic episodes. Schizophrenia has positive symptoms, which add something (hallucinations, delusions, disorganized speech), and negative symptoms, which take something away (flat affect, withdrawal). Personality disorders include antisocial and borderline types.

Key ideas: Anxiety disorders involve excessive fear and worry. OCD features obsessions and compulsions, and PTSD follows trauma. Depression and bipolar disorder are mood disorders. Schizophrenia involves hallucinations, delusions, and negative symptoms.

5.5 Treatment of Psychological Disorders

Psychodynamic therapy explores unconscious conflicts. Humanistic therapy, as Rogers practiced it, offers unconditional positive regard so the client can grow. Cognitive-behavioral therapy (CBT) is the most researched and effective approach. It combines cognitive restructuring, which challenges distorted thoughts, with behavioral techniques such as exposure therapy and behavioral activation.

Biomedical treatments use medicine or other physical methods. Antidepressants such as SSRIs increase serotonin, and benzodiazepines are antianxiety drugs. Antipsychotics treat schizophrenia by blocking dopamine, and mood stabilizers such as lithium treat bipolar disorder. ECT is used for treatment-resistant depression, and TMS is another option. Across all therapy types, the therapeutic alliance (the bond between client and therapist) is one of the strongest predictors of success.

Key ideas: CBT is the psychotherapy with the most empirical support. Medications target specific neurotransmitter systems for different disorders. The therapeutic alliance predicts treatment success across therapy types. Combined psychotherapy and medication is often most effective.

`


export const PSYCHOLOGY_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Psychology',
  units: parseRawOverview(RAW_PSYCHOLOGY),
  features: { latex: false, codeExamples: false },
}
