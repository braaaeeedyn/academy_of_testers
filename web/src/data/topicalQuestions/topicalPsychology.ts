import type { TopicalExam } from './types'

function q(id: number, question: string, options: string[], correctAnswer: number, explanation: string) {
  return { id, question, options, correctAnswer, explanation }
}

export const TOPICAL_PSYCHOLOGY: TopicalExam = {
  label: 'AP Psychology',
  slug: 'ap-psychology',
  units: [
    {
      unitNumber: 1,
      title: 'Biological Bases of Behavior',
      easy: [
        q(1, 'Which part of the neuron receives signals from other neurons?', [
          'Axon',
          'Dendrite',
          'Myelin sheath',
          'Terminal button'
        ], 1, 'Dendrites are the branching extensions of a neuron that receive incoming signals from other neurons.'),
        q(2, 'What is the function of the myelin sheath?', [
          'To produce neurotransmitters',
          'To speed up the transmission of neural impulses along the axon',
          'To connect the neuron to muscle fibers',
          'To receive signals from other neurons'
        ], 1, 'The myelin sheath is a fatty layer that insulates the axon, allowing neural impulses to travel faster through saltatory conduction.'),
        q(3, 'Which brain structure is primarily responsible for regulating basic survival functions like breathing and heart rate?', [
          'Cerebral cortex',
          'Hippocampus',
          'Brainstem (medulla oblongata)',
          'Frontal lobe'
        ], 2, 'The medulla oblongata in the brainstem controls vital autonomic functions including breathing, heart rate, and blood pressure.'),
        q(4, 'The "fight-or-flight" response is controlled by which division of the nervous system?', [
          'Parasympathetic nervous system',
          'Somatic nervous system',
          'Sympathetic nervous system',
          'Central nervous system'
        ], 2, 'The sympathetic nervous system activates the fight-or-flight response, preparing the body to respond to perceived threats.'),
        q(5, 'Which neurotransmitter is most closely associated with mood regulation and depression?', [
          'Acetylcholine',
          'Dopamine',
          'Serotonin',
          'GABA'
        ], 2, 'Serotonin plays a key role in regulating mood, appetite, and sleep. Low serotonin levels are associated with depression.')
      ],
      medium: [
        q(6, 'A patient suffers damage to the left hemisphere of the brain, specifically Broca\'s area. Which of the following deficits is MOST likely?', [
          'Inability to understand spoken language',
          'Difficulty producing fluent speech',
          'Loss of visual processing',
          'Impaired long-term memory formation'
        ], 1, 'Broca\'s area (left frontal lobe) controls speech production. Damage leads to Broca\'s aphasia — difficulty producing fluent speech while comprehension remains relatively intact.'),
        q(7, 'Which of the following correctly describes the process of synaptic transmission?', [
          'Electrical impulses jump directly from one neuron to another',
          'Neurotransmitters are released from the presynaptic neuron, cross the synaptic cleft, and bind to receptors on the postsynaptic neuron',
          'Dendrites release neurotransmitters into the bloodstream',
          'The myelin sheath transmits chemical signals between neurons'
        ], 1, 'Synaptic transmission involves neurotransmitter release from the presynaptic terminal, diffusion across the synaptic cleft, and binding to receptors on the postsynaptic neuron.'),
        q(8, 'A split-brain patient has an image of a spoon flashed to their left visual field. Which of the following is true?', [
          'The patient can verbally name the spoon',
          'The patient cannot verbally name the spoon but can pick it up with their left hand',
          'The patient can see the spoon but cannot pick it up',
          'The patient cannot perceive the image at all'
        ], 1, 'The left visual field projects to the right hemisphere. In split-brain patients, the right hemisphere processes the image but cannot communicate it verbally (language is in the left hemisphere). The patient can identify the object by touch with the left hand (controlled by the right hemisphere).'),
        q(9, 'Which of the following brain imaging techniques provides the BEST spatial resolution for viewing brain structure?', [
          'EEG',
          'PET scan',
          'MRI',
          'CT scan'
        ], 2, 'MRI (Magnetic Resonance Imaging) uses magnetic fields to produce detailed images of brain structure with excellent spatial resolution, superior to CT or PET scans.'),
        q(10, 'Damage to the hippocampus would MOST likely result in:', [
          'Inability to form new explicit memories',
          'Loss of motor coordination',
          'Changes in personality and impulse control',
          'Difficulty regulating emotions'
        ], 0, 'The hippocampus is critical for forming new explicit (declarative) memories. Damage, as seen in patient H.M., impairs the ability to form new long-term memories while leaving procedural memory intact.')
      ],
      hard: [
        q(11, 'A researcher discovers that a drug blocks the reuptake of dopamine at the synapse. What effect would this drug MOST likely have?', [
          'Decreased dopamine activity because less dopamine is available',
          'Increased dopamine activity because dopamine remains in the synaptic cleft longer',
          'No effect on dopamine activity',
          'Decreased serotonin activity'
        ], 1, 'Blocking reuptake prevents dopamine from being reabsorbed by the presynaptic neuron, so it remains in the synaptic cleft longer and continues to stimulate postsynaptic receptors, increasing dopamine activity.'),
        q(12, 'Which of the following best demonstrates neural plasticity?', [
          'A newborn\'s reflexive responses to stimuli',
          'The brain reorganizing to compensate for damage by having other areas take over lost functions',
          'The consistent structure of the brainstem across all humans',
          'The genetic determination of brain lateralization'
        ], 1, 'Neural plasticity refers to the brain\'s ability to reorganize itself by forming new neural connections, especially in response to injury, when other brain areas can take over functions of damaged regions.'),
        q(13, 'A patient exhibits impaired decision-making, personality changes, and difficulty controlling impulses after a brain injury. Which area was MOST likely damaged?', [
          'Occipital lobe',
          'Temporal lobe',
          'Prefrontal cortex',
          'Cerebellum'
        ], 2, 'The prefrontal cortex is involved in executive functions including decision-making, personality expression, and impulse control. This is illustrated by the famous case of Phineas Gage.'),
        q(14, 'An agonist drug mimics the effects of a specific neurotransmitter. If a researcher administers a GABA agonist, what behavioral effect would be MOST expected?', [
          'Increased anxiety and agitation',
          'Enhanced alertness and focus',
          'Reduced anxiety and sedation',
          'Heightened pain sensitivity'
        ], 2, 'GABA is the major inhibitory neurotransmitter. A GABA agonist would enhance inhibition in the nervous system, producing calming effects such as reduced anxiety and sedation (similar to benzodiazepines).'),
        q(15, 'Which of the following scenarios best illustrates the concept of lateralization of brain function?', [
          'Both hemispheres equally process all types of information',
          'The left hemisphere is typically dominant for language processing in right-handed individuals, while the right hemisphere is more involved in spatial reasoning',
          'Only the right hemisphere is responsible for all cognitive functions',
          'Brain lateralization is determined entirely by environmental factors'
        ], 1, 'Lateralization refers to the tendency for certain cognitive processes to be more dominant in one hemisphere. Language is typically lateralized to the left hemisphere in right-handed individuals, while spatial processing is more right-hemisphere dominant.')
      ]
    },
    {
      unitNumber: 2,
      title: 'Cognition',
      easy: [
        q(16, 'What is sensory memory?', [
          'The long-term storage of learned skills',
          'A brief, initial recording of sensory information that lasts only a few seconds or less',
          'The conscious processing of information',
          'A permanent record of all experiences'
        ], 1, 'Sensory memory is the initial, brief stage of memory that holds sensory information for a very short time (iconic memory ~0.5s for visual, echoic memory ~3-4s for auditory).'),
        q(17, 'According to the three-stage model of memory, what are the three stages in order?', [
          'Short-term, sensory, long-term',
          'Sensory, short-term (working), long-term',
          'Long-term, short-term, sensory',
          'Working, episodic, procedural'
        ], 1, 'The Atkinson-Shiffrin model proposes three stages: sensory memory → short-term (working) memory → long-term memory.'),
        q(18, 'Which of the following is an example of a heuristic?', [
          'A mathematical formula that guarantees the correct answer',
          'A mental shortcut that allows people to make quick judgments',
          'A step-by-step procedure for solving a problem',
          'A type of intelligence test'
        ], 1, 'A heuristic is a mental shortcut or rule of thumb that allows quick, efficient judgments but may sometimes lead to errors or biases.'),
        q(19, 'What is the capacity of short-term memory according to George Miller\'s research?', [
          '3 ± 1 items',
          '5 ± 2 items',
          '7 ± 2 items',
          '12 ± 3 items'
        ], 2, 'George Miller\'s famous research found that short-term memory can hold approximately 7 ± 2 items (chunks) at a time.'),
        q(20, 'What does the term "encoding" refer to in memory?', [
          'Retrieving stored information',
          'The process of converting information into a form that can be stored in memory',
          'The loss of information over time',
          'Repeating information over and over'
        ], 1, 'Encoding is the first step in memory processing — transforming sensory input into a form that can be stored in the brain.')
      ],
      medium: [
        q(21, 'A student studies for an exam by reading the material and then immediately trying to recall it from memory. This technique is an example of:', [
          'Massed practice',
          'The testing effect (retrieval practice)',
          'Maintenance rehearsal',
          'Proactive interference'
        ], 1, 'The testing effect (retrieval practice) is the finding that actively recalling information strengthens memory more effectively than simply re-reading material.'),
        q(22, 'Which of the following demonstrates the availability heuristic?', [
          'A person judges the probability of plane crashes as high because they easily recall media reports of crashes',
          'A person solves a math problem using a step-by-step algorithm',
          'A person forms a concept by identifying defining features',
          'A person uses working memory to solve a puzzle'
        ], 0, 'The availability heuristic involves judging the likelihood of events based on how easily examples come to mind. Vivid, well-publicized events (like plane crashes) are easily recalled, leading to overestimation of their frequency.'),
        q(23, 'The misinformation effect occurs when:', [
          'A person forgets information that was never encoded',
          'Misleading information presented after an event alters a person\'s memory of the event',
          'Old memories interfere with new learning',
          'A person confuses the source of a memory'
        ], 1, 'The misinformation effect, studied by Elizabeth Loftus, occurs when exposure to incorrect information after an event distorts a person\'s memory of that event.'),
        q(24, 'A chess master can remember the positions of pieces on a board after a brief glance, but a novice cannot. This difference is best explained by:', [
          'The chess master has a larger short-term memory capacity',
          'The chess master uses chunking based on meaningful patterns formed through expertise',
          'The novice has a sensory processing deficit',
          'The chess master has better eyesight'
        ], 1, 'Expert chess players use chunking — organizing individual pieces into meaningful configurations based on their extensive knowledge. This doesn\'t increase memory capacity but allows more information per chunk.'),
        q(25, 'Which type of long-term memory is used when riding a bicycle?', [
          'Episodic memory',
          'Semantic memory',
          'Procedural (implicit) memory',
          'Iconic memory'
        ], 2, 'Procedural memory (a type of implicit/non-declarative memory) stores knowledge of how to perform skills and tasks, such as riding a bicycle, without conscious awareness.')
      ],
      hard: [
        q(26, 'A researcher presents participants with a list of words all related to "sleep" (bed, rest, awake, tired, dream) but does NOT include the word "sleep." Many participants later falsely recall "sleep" as being on the list. This demonstrates:', [
          'Retroactive interference',
          'The DRM (Deese-Roediger-McDermott) paradigm of false memory creation',
          'State-dependent memory',
          'The serial position effect'
        ], 1, 'The DRM paradigm demonstrates false memory formation. Participants falsely remember a "critical lure" word that was semantically related to but not actually on the presented list.'),
        q(27, 'Functional fixedness is a cognitive bias that:', [
          'Causes people to only consider the typical use of an object, preventing creative problem-solving',
          'Makes people fixate on the first solution they find',
          'Prevents people from remembering function definitions',
          'Causes overconfidence in one\'s answers'
        ], 0, 'Functional fixedness is the tendency to perceive an object only in terms of its typical use, which can hinder creative problem-solving by preventing alternative uses from being considered.'),
        q(28, 'According to the dual-process theory of cognition, System 1 thinking is characterized by:', [
          'Slow, deliberate, and analytical processing',
          'Fast, automatic, and intuitive processing',
          'Conscious effort and logical reasoning',
          'Sequential processing of complex information'
        ], 1, 'Dual-process theory (Kahneman) distinguishes System 1 (fast, automatic, intuitive) from System 2 (slow, deliberate, analytical). System 1 operates with little effort but is prone to biases.'),
        q(29, 'A person who learned French as a child finds it difficult to learn Spanish because French vocabulary keeps interfering. This is an example of:', [
          'Retroactive interference',
          'Proactive interference',
          'Encoding failure',
          'Decay theory'
        ], 1, 'Proactive interference occurs when previously learned information interferes with the ability to learn and recall new information. The old French knowledge is disrupting new Spanish learning.'),
        q(30, 'Which of the following findings would MOST strongly support the levels-of-processing framework proposed by Craik and Lockhart?', [
          'Words processed for their meaning (semantic encoding) are remembered better than words processed for their appearance (structural encoding)',
          'Information rehearsed many times is always remembered better',
          'Short-term memory has a limited capacity of 7 items',
          'Emotional events are remembered more vividly than neutral events'
        ], 0, 'Craik and Lockhart\'s levels-of-processing framework proposes that deeper, more meaningful processing (semantic) leads to better memory than shallow processing (structural/phonemic).')
      ]
    },
    {
      unitNumber: 3,
      title: 'Development and Learning',
      easy: [
        q(31, 'In Pavlov\'s classical conditioning experiments, what served as the unconditioned stimulus (UCS)?', [
          'The bell',
          'The food (meat powder)',
          'The salivation to the bell',
          'The salivation to the food'
        ], 1, 'The food (meat powder) was the unconditioned stimulus — it naturally and automatically triggered salivation without any prior learning.'),
        q(32, 'According to Piaget, during which stage of cognitive development do children develop object permanence?', [
          'Preoperational stage',
          'Sensorimotor stage',
          'Concrete operational stage',
          'Formal operational stage'
        ], 1, 'Object permanence — the understanding that objects continue to exist even when not visible — develops during the sensorimotor stage (birth to ~2 years).'),
        q(33, 'What is operant conditioning?', [
          'Learning through association between two stimuli',
          'Learning through consequences — behaviors followed by reinforcement increase, while those followed by punishment decrease',
          'Learning by observing others',
          'Learning that occurs without any reinforcement'
        ], 1, 'Operant conditioning (Skinner) is learning in which behavior is shaped by its consequences — reinforcement strengthens behavior and punishment weakens it.'),
        q(34, 'Which psychologist is known for the "Strange Situation" experiment studying attachment in infants?', [
          'Sigmund Freud',
          'Jean Piaget',
          'Mary Ainsworth',
          'Erik Erikson'
        ], 2, 'Mary Ainsworth developed the Strange Situation procedure to study attachment patterns between infants and caregivers, identifying secure, anxious-avoidant, and anxious-resistant attachment styles.'),
        q(35, 'In operant conditioning, what is negative reinforcement?', [
          'Punishing an unwanted behavior',
          'Removing an unpleasant stimulus to increase a behavior',
          'Adding an unpleasant stimulus to decrease a behavior',
          'Ignoring a behavior until it stops'
        ], 1, 'Negative reinforcement involves removing an aversive stimulus to strengthen a desired behavior. "Negative" refers to removal, and "reinforcement" means the behavior increases.')
      ],
      medium: [
        q(36, 'A child who has learned to fear a white rat also shows fear of a white rabbit and a white fur coat. This is an example of:', [
          'Stimulus discrimination',
          'Stimulus generalization',
          'Extinction',
          'Spontaneous recovery'
        ], 1, 'Stimulus generalization occurs when a conditioned response is triggered by stimuli similar to the original conditioned stimulus. The child generalizes the fear to other white, furry objects.'),
        q(37, 'According to Erikson\'s stages of psychosocial development, the primary conflict during adolescence is:', [
          'Trust vs. Mistrust',
          'Industry vs. Inferiority',
          'Identity vs. Role Confusion',
          'Intimacy vs. Isolation'
        ], 2, 'Erikson proposed that adolescents face the challenge of Identity vs. Role Confusion, where they work to develop a coherent sense of self and personal identity.'),
        q(38, 'Albert Bandura\'s Bobo doll experiment demonstrated that:', [
          'Classical conditioning can explain aggression',
          'Children can learn aggressive behavior through observation without direct reinforcement',
          'Punishment is the most effective way to reduce aggression',
          'Aggression is entirely innate'
        ], 1, 'Bandura\'s experiment showed that children who observed an adult acting aggressively toward a Bobo doll were more likely to imitate that aggression, demonstrating observational (social) learning.'),
        q(39, 'Kohlberg\'s theory of moral development proposes three levels. At the conventional level, moral reasoning is based on:', [
          'Avoiding punishment and seeking rewards',
          'Conforming to social rules and maintaining social order',
          'Abstract principles of justice and individual rights',
          'Personal pleasure and self-interest'
        ], 1, 'The conventional level of moral reasoning focuses on conforming to social norms, following laws, and maintaining social order to gain approval and uphold the system.'),
        q(40, 'A behavior that was previously reinforced is no longer reinforced, and the behavior gradually decreases. This process is called:', [
          'Spontaneous recovery',
          'Extinction',
          'Negative punishment',
          'Habituation'
        ], 1, 'Extinction in operant conditioning occurs when reinforcement is discontinued, leading to a gradual decrease in the frequency of the behavior.')
      ],
      hard: [
        q(41, 'A rat learns to press a lever to avoid an electric shock that occurs every 30 seconds. This is an example of:', [
          'Positive reinforcement on a fixed-interval schedule',
          'Avoidance learning (negative reinforcement)',
          'Punishment',
          'Classical conditioning'
        ], 1, 'This is avoidance learning, a form of negative reinforcement. The rat\'s lever-pressing behavior is reinforced by the removal (avoidance) of the aversive shock.'),
        q(42, 'Harlow\'s research with infant monkeys and surrogate mothers demonstrated that:', [
          'Food is the primary basis for attachment',
          'Contact comfort is more important than feeding in forming attachment',
          'Infant monkeys prefer wire mothers over cloth mothers',
          'Attachment only forms during the first week of life'
        ], 1, 'Harlow found that infant monkeys preferred the soft cloth "mother" over the wire "mother" that provided food, demonstrating that contact comfort is more important than nourishment in attachment formation.'),
        q(43, 'According to Vygotsky\'s sociocultural theory, the zone of proximal development (ZPD) refers to:', [
          'The physical area where learning occurs best',
          'The gap between what a learner can do independently and what they can do with guidance',
          'The earliest age at which a child can learn a skill',
          'The maximum number of skills a child can learn at one time'
        ], 1, 'Vygotsky\'s ZPD is the distance between what a learner can do without help and what they can achieve with guidance from a more knowledgeable other (scaffolding).'),
        q(44, 'A researcher trains a pigeon to peck a key for food on a variable-ratio schedule. When reinforcement is stopped, the pigeon continues pecking for a very long time before the behavior extinguishes. Why?', [
          'The pigeon has been classically conditioned',
          'Variable-ratio schedules produce high, steady response rates and are the most resistant to extinction because reinforcement is unpredictable',
          'The pigeon has developed a taste aversion',
          'Fixed-interval schedules are resistant to extinction'
        ], 1, 'Variable-ratio schedules (like gambling) produce the highest and most steady response rates and are most resistant to extinction because the organism cannot predict when the next reinforcement will come.'),
        q(45, 'Which of the following scenarios best illustrates latent learning?', [
          'A rat reinforced with food learns a maze quickly',
          'A rat that explored a maze without reinforcement later navigates it quickly when food is introduced, showing it had learned the layout all along',
          'A student memorizes facts by repeating them aloud',
          'A child learns to tie shoes by watching a parent'
        ], 1, 'Latent learning (Tolman) occurs when learning takes place without reinforcement and is not demonstrated until there is motivation. The rat formed a cognitive map during unreinforced exploration.')
      ]
    },
    {
      unitNumber: 4,
      title: 'Social Psychology and Personality',
      easy: [
        q(46, 'What is conformity?', [
          'Changing one\'s behavior to match a group\'s standards due to real or imagined group pressure',
          'Obeying a direct order from an authority figure',
          'Performing better on simple tasks in the presence of others',
          'Attributing one\'s own failures to external factors'
        ], 0, 'Conformity is adjusting one\'s behavior or thinking to match a group standard. It occurs in response to perceived social pressure, even without explicit demands.'),
        q(47, 'Which psychologist conducted the famous obedience studies involving electric shocks?', [
          'Solomon Asch',
          'Philip Zimbardo',
          'Stanley Milgram',
          'Kurt Lewin'
        ], 2, 'Stanley Milgram conducted the famous obedience experiments in the 1960s, where participants were instructed to administer increasingly intense electric shocks to a confederate.'),
        q(48, 'According to Freud, which part of the personality operates on the reality principle?', [
          'Id',
          'Ego',
          'Superego',
          'Unconscious'
        ], 1, 'The ego operates on the reality principle, mediating between the id\'s demands for instant gratification and the constraints of reality and the superego\'s moral standards.'),
        q(49, 'What is the fundamental attribution error?', [
          'The tendency to overestimate situational influences on others\' behavior',
          'The tendency to overestimate dispositional (personality) influences and underestimate situational influences when explaining others\' behavior',
          'The tendency to attribute one\'s own success to effort',
          'The tendency to blame oneself for others\' mistakes'
        ], 1, 'The fundamental attribution error is the tendency to attribute others\' behavior to internal dispositions (personality) while underestimating the impact of situational factors.'),
        q(50, 'What is the Big Five model of personality?', [
          'Five stages of personality development',
          'A trait-based model identifying five broad dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism',
          'Five defense mechanisms identified by Freud',
          'Five types of personality disorders'
        ], 1, 'The Big Five (OCEAN) model identifies five broad personality dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.')
      ],
      medium: [
        q(51, 'Asch\'s line experiment demonstrated that:', [
          'People obey authority figures even when asked to harm others',
          'People will conform to an obviously incorrect group judgment, even when the correct answer is clear',
          'People become more aggressive in groups',
          'People perform better when being observed'
        ], 1, 'Asch\'s conformity experiments showed that participants often conformed to the group\'s clearly wrong answer about line lengths, demonstrating the power of social pressure on individual judgment.'),
        q(52, 'The bystander effect suggests that:', [
          'People are more likely to help in emergencies when more bystanders are present',
          'The presence of other bystanders decreases the likelihood that any single individual will help, due to diffusion of responsibility',
          'Bystanders always help in emergencies',
          'People only help strangers when there is a reward'
        ], 1, 'The bystander effect (Darley & Latané) demonstrates that individuals are less likely to help in an emergency when other people are present, because responsibility is diffused among the group.'),
        q(53, 'According to Maslow\'s hierarchy of needs, which needs must be met before a person can achieve self-actualization?', [
          'Only physiological needs',
          'Physiological, safety, belonging/love, and esteem needs',
          'Only esteem needs',
          'Self-actualization is independent of other needs'
        ], 1, 'Maslow\'s hierarchy proposes that lower-level needs (physiological, safety, belonging, esteem) must be satisfied before a person can pursue self-actualization — the realization of one\'s full potential.'),
        q(54, 'Cognitive dissonance theory predicts that when a person\'s behavior conflicts with their attitudes, they will:', [
          'Always change their behavior to match their attitudes',
          'Experience psychological discomfort and be motivated to reduce the inconsistency, often by changing their attitudes',
          'Ignore the inconsistency entirely',
          'Become more confident in their original attitudes'
        ], 1, 'Festinger\'s cognitive dissonance theory states that inconsistency between attitudes and behavior creates psychological tension, motivating the individual to reduce the dissonance, often by changing attitudes to align with behavior.'),
        q(55, 'Which defense mechanism involves redirecting emotions from a threatening target to a safer one?', [
          'Projection',
          'Displacement',
          'Rationalization',
          'Sublimation'
        ], 1, 'Displacement involves transferring unacceptable feelings or impulses from the original target to a substitute that is less threatening (e.g., kicking the dog after a bad day at work).')
      ],
      hard: [
        q(56, 'Zimbardo\'s Stanford Prison Experiment primarily demonstrated:', [
          'That personality traits are the strongest predictors of behavior',
          'The powerful influence of situational roles and institutional authority on behavior, as normal individuals adopted abusive roles',
          'That only aggressive people become prison guards',
          'That prisoners always resist authority'
        ], 1, 'Zimbardo\'s experiment showed that ordinary college students adopted the behaviors expected of their randomly assigned roles (guard or prisoner), demonstrating the powerful influence of situational factors over individual dispositions.'),
        q(57, 'A person who scores high in internal locus of control would MOST likely say:', [
          '"My success depends entirely on luck and fate"',
          '"I have control over the outcomes in my life through my own efforts and decisions"',
          '"Other people determine what happens to me"',
          '"I have no influence over my circumstances"'
        ], 1, 'Internal locus of control (Rotter) is the belief that one\'s own actions and decisions influence outcomes. People with high internal locus of control feel they have agency over their lives.'),
        q(58, 'According to the elaboration likelihood model of persuasion, under what conditions would a person be MOST likely to use the central route to persuasion?', [
          'When they are distracted and not paying attention to the message',
          'When they are highly motivated and able to carefully evaluate the message arguments',
          'When they are influenced primarily by the attractiveness of the speaker',
          'When they rely on emotional appeals rather than logical arguments'
        ], 1, 'The central route of persuasion (Petty & Cacioppo) is used when individuals are motivated and able to carefully process the message content. Peripheral route processing relies on superficial cues.'),
        q(59, 'The just-world hypothesis suggests that:', [
          'People believe that the world is fundamentally random and chaotic',
          'People tend to believe that individuals get what they deserve, which can lead to victim-blaming',
          'Justice systems always produce fair outcomes',
          'People are naturally altruistic'
        ], 1, 'The just-world hypothesis (Lerner) is the cognitive bias that people get what they deserve. This can lead to blaming victims for their misfortune, as it preserves the belief in a fair and orderly world.'),
        q(60, 'Self-serving bias refers to:', [
          'The tendency to help others before helping oneself',
          'The tendency to attribute one\'s successes to internal factors and failures to external factors',
          'The tendency to evaluate oneself more critically than others',
          'The tendency to conform to group expectations'
        ], 1, 'Self-serving bias is the tendency to take credit for successes (attributing them to ability/effort) while blaming failures on external factors (bad luck, unfair conditions), protecting self-esteem.')
      ]
    },
    {
      unitNumber: 5,
      title: 'Mental and Physical Health',
      easy: [
        q(61, 'Which of the following is a symptom of major depressive disorder?', [
          'Persistent elevated mood for more than two weeks',
          'Persistent feelings of sadness, hopelessness, and loss of interest in activities for at least two weeks',
          'Hearing voices that are not there',
          'Excessive energy and decreased need for sleep'
        ], 1, 'Major depressive disorder is characterized by persistent depressed mood, loss of interest or pleasure, and other symptoms lasting at least two weeks.'),
        q(62, 'What is the Diagnostic and Statistical Manual of Mental Disorders (DSM)?', [
          'A textbook for psychology students',
          'A classification system used by mental health professionals to diagnose psychological disorders',
          'A list of medications for mental health conditions',
          'A personality assessment tool'
        ], 1, 'The DSM is the standard classification system published by the American Psychiatric Association, used to diagnose and classify mental disorders.'),
        q(63, 'Generalized anxiety disorder is characterized by:', [
          'Sudden, intense episodes of fear',
          'Persistent, excessive worry about a variety of topics that is difficult to control',
          'Fear of a specific object or situation',
          'Repetitive unwanted thoughts and behaviors'
        ], 1, 'Generalized anxiety disorder (GAD) involves chronic, excessive worry about multiple aspects of life (health, finances, work) that is difficult to control and persists for at least six months.'),
        q(64, 'What type of therapy involves a therapist helping a client change negative thought patterns?', [
          'Psychoanalysis',
          'Cognitive-behavioral therapy (CBT)',
          'Humanistic therapy',
          'Biomedical therapy'
        ], 1, 'Cognitive-behavioral therapy (CBT) focuses on identifying and changing maladaptive thought patterns and behaviors that contribute to psychological distress.'),
        q(65, 'Which of the following neurotransmitters is associated with schizophrenia according to the dopamine hypothesis?', [
          'Serotonin',
          'GABA',
          'Dopamine',
          'Acetylcholine'
        ], 2, 'The dopamine hypothesis proposes that schizophrenia symptoms are associated with excess dopamine activity in certain brain pathways. Antipsychotic drugs that block dopamine receptors often reduce symptoms.')
      ],
      medium: [
        q(66, 'A person repeatedly checks that the door is locked, even though they just checked moments ago. They experience significant distress when they try to resist this behavior. This is MOST consistent with:', [
          'Generalized anxiety disorder',
          'Obsessive-compulsive disorder (OCD)',
          'Post-traumatic stress disorder',
          'Social anxiety disorder'
        ], 1, 'OCD involves unwanted, intrusive thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) performed to reduce anxiety. Repeated checking despite knowing the door is locked is a classic compulsion.'),
        q(67, 'The diathesis-stress model proposes that psychological disorders result from:', [
          'Genetic factors alone',
          'Environmental stressors alone',
          'An interaction between a biological predisposition (diathesis) and environmental stressors',
          'Unconscious conflicts from childhood'
        ], 2, 'The diathesis-stress model explains that disorders develop when individuals with a biological vulnerability (diathesis) encounter sufficient environmental stress to trigger the disorder.'),
        q(68, 'Which of the following is a key difference between bipolar I disorder and bipolar II disorder?', [
          'Bipolar I involves only depressive episodes while bipolar II involves manic episodes',
          'Bipolar I involves full manic episodes while bipolar II involves hypomanic episodes (less severe) along with depressive episodes',
          'Bipolar II is more severe than bipolar I',
          'There is no meaningful difference between them'
        ], 1, 'Bipolar I requires at least one full manic episode. Bipolar II involves hypomanic episodes (less severe than full mania) and major depressive episodes. Both are serious conditions.'),
        q(69, 'In systematic desensitization, a therapist helps a client overcome a phobia by:', [
          'Exposing the client to the most feared stimulus immediately',
          'Gradually exposing the client to increasingly anxiety-provoking stimuli while the client practices relaxation techniques',
          'Interpreting the client\'s dreams to find the root cause',
          'Prescribing anti-anxiety medication'
        ], 1, 'Systematic desensitization (Wolpe) pairs progressive muscle relaxation with a hierarchy of anxiety-provoking stimuli, gradually moving from least to most feared, counterconditioning the fear response.'),
        q(70, 'Which of the following is an example of a negative symptom of schizophrenia?', [
          'Hallucinations',
          'Delusions of grandeur',
          'Flat affect and social withdrawal',
          'Disorganized speech'
        ], 2, 'Negative symptoms of schizophrenia involve deficits or reductions in normal functioning, such as flat affect (diminished emotional expression), social withdrawal, and avolition. Hallucinations and delusions are positive symptoms.')
      ],
      hard: [
        q(71, 'A therapist uses unconditional positive regard, empathy, and genuineness in their sessions. This approach is MOST consistent with which therapeutic orientation?', [
          'Psychoanalytic therapy',
          'Person-centered (Rogerian) therapy',
          'Cognitive-behavioral therapy',
          'Behavioral therapy'
        ], 1, 'Carl Rogers\' person-centered therapy emphasizes three core conditions: unconditional positive regard, empathic understanding, and congruence (genuineness) to create a supportive therapeutic environment.'),
        q(72, 'A patient with dissociative identity disorder (DID) is MOST likely to also have a history of:', [
          'Substance abuse in adolescence',
          'Severe childhood trauma or abuse',
          'High academic achievement',
          'Neurological damage from a head injury'
        ], 1, 'Dissociative identity disorder is strongly associated with severe, repeated childhood trauma (often physical or sexual abuse). The dissociation is theorized as a coping mechanism for overwhelming trauma.'),
        q(73, 'Selective serotonin reuptake inhibitors (SSRIs) work by:', [
          'Increasing the production of serotonin in the brain',
          'Blocking the reabsorption of serotonin in the presynaptic neuron, making more serotonin available in the synaptic cleft',
          'Converting serotonin into dopamine',
          'Directly stimulating serotonin receptors on the postsynaptic neuron'
        ], 1, 'SSRIs block the reuptake (reabsorption) of serotonin by the presynaptic neuron, increasing the amount of serotonin available in the synaptic cleft to bind to postsynaptic receptors.'),
        q(74, 'According to the learned helplessness model proposed by Martin Seligman, depression can result from:', [
          'Excessive dopamine activity',
          'A genetic predisposition to neuroticism',
          'Repeated exposure to uncontrollable negative events, leading to the belief that one has no control over outcomes',
          'Reinforcement of depressive behaviors by family members'
        ], 2, 'Seligman\'s learned helplessness theory proposes that depression can develop when individuals experience repeated uncontrollable negative events, leading them to believe they are helpless to change their situation.'),
        q(75, 'A meta-analysis of psychotherapy effectiveness finds that the therapeutic alliance (the relationship between therapist and client) is one of the strongest predictors of positive outcomes across all therapy types. This finding supports:', [
          'The superiority of cognitive-behavioral therapy over other approaches',
          'The common factors model, which argues that shared elements across therapies (like alliance) are more important than specific techniques',
          'The medical model of mental illness',
          'The view that therapy is ineffective'
        ], 1, 'The common factors model (Rosenzweig\'s "Dodo bird verdict") argues that factors common to all effective therapies — therapeutic alliance, empathy, client expectations — account for most therapeutic change, rather than specific techniques unique to each approach.')
      ]
    }
  ]
}
