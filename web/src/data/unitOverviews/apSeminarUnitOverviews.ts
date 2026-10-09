import type { SubjectUnitOverview } from './types'
import { parseRawOverview } from './parseRawOverview'

// Expected format (same as AP Psychology / AP Research):
//   Unit N – Title
//   N.N Subunit title
//   ...paragraphs...
//   Key ideas: ...
const RAW_AP_SEMINAR = `
Unit 0 – AP Seminar Exam

0.1 Performance Task 1: Team Project and Presentation

In Performance Task 1, your team investigates a complex, open-ended problem. Each member first researches one angle of it and writes an Individual Research Report (IRR). The team then builds a multimedia presentation that argues for a position or solution, and each member answers questions from your teacher in an oral defense. The presentation is a team product, so the goal is one shared argument that pulls every member's research together. It needs a clear thesis, organized evidence from multiple credible sources, and some acknowledgment of counterarguments or other perspectives. In the defense, you need to understand the whole argument, including the parts you didn't research yourself, instead of reciting prepared remarks.

The most common weakness is an argument that splits along the lines of who researched what, so each section feels disconnected from the rest. To avoid it, agree on a central thesis before you divide the research, and leave time to merge your findings into one argument instead of stacking individual sections end to end. During the defense, listen carefully to each question. Your teacher wants to see you think on your feet, handle challenges to your argument, and show the thinking behind the presentation. Useful defense response stems include: "That is an important consideration; our argument accounts for it by..." "The evidence we found suggests that while [objection] is valid in [context], it does not undermine our central claim because..." "This question points to a genuine limitation of our research, which future investigation might address by..."

0.2 Performance Task 2: Individual Research-Based Essay and Presentation

In Performance Task 2, College Board releases a set of source texts on a broad theme. You read them, pick your own research question inspired by them, and research it on your own. You then write an Individual Written Argument (IWA), give an Individual Multimedia Presentation, and answer oral defense questions from your teacher. The IWA is where your own voice shows. It should take a clear position, draw on your own research, and combine multiple sources into one evidence-based argument, including at least one of the provided texts. The presentation and defense check that you can explain and stand behind the argument out loud.

0.3 The End-of-Course Exam

The end-of-course exam gives you a set of sources on an unfamiliar topic and asks you to analyze and argue from them on the spot. It tests the skills AP Seminar teaches, not content knowledge. To prepare, practice reading unfamiliar sources quickly: pick out the claims, judge the reasoning and evidence, notice the different perspectives, and write organized arguments under time pressure. The argument prompt asks you to take and defend a position using the provided sources, so use them as evidence for your argument instead of summarizing them one at a time. Strong exam essays state a clear thesis early, give each body paragraph its own supporting point, and back each point with specific evidence from the sources plus your own commentary.


Unit 1 – Question and Explore

1.1 Identifying Problems and Developing Research Questions

A good AP Seminar research question is specific enough to answer through research and important enough to be worth the effort. It also has to be open. That means reasonable, well-informed people could disagree about the answer, or existing knowledge hasn't settled it. Start with a real-world problem or phenomenon that interests you. Then narrow the broad topic to a focused question by asking what is still uncertain, disputed, or poorly understood about it. "What should be done about climate change?" is too broad to research. Compare it with this question: "To what extent do carbon pricing mechanisms effectively reduce industrial emissions in economies with high manufacturing dependence?" That one is specific and researchable, and evidence could push the answer either way.

Expect your question to change as you read. Early research often shows that your starting question has already been answered, or that a slightly different question is more interesting. That's a normal part of the process. Record how your question develops in your process notes, the running record of your research choices. That record matters because AP Seminar rewards being able to explain how and why your question changed. Useful question-development stems include: "Existing research has addressed [X], but it has not yet sufficiently examined [specific gap]..." "The question I am most interested in is not [broad question] but the more specific question of [focused version]..."

1.2 Finding, Organizing, and Evaluating Information and Perspectives

AP Seminar expects you to use a range of source types: scholarly articles, policy documents, investigative journalism, data sets, and other credible sources. Judge each one for relevance, credibility, and what it adds to your research question. The SIFT method (Stop, Investigate the source, Find better coverage, Trace claims) is a useful way to do this. Before you use a source, stop and assess it, and find out who produced it and why. Then look for other sources that confirm or complicate it, and trace specific claims back to the original evidence. Peer-reviewed academic sources, which other experts checked before publication, carry the most authority. Popular sources can give context and are easier to read, but back them up with more rigorous scholarly evidence.

Organize your sources by idea, not by date or alphabet. Group them by the perspective they represent, the part of your question they address, or the type of evidence they offer. Grouped this way, the sources show you where experts agree, where they disagree, and where evidence is thin or missing. An annotated bibliography is one of the most useful tools here. It is a list of your sources with a short note on each. Writing one makes you summarize each source's argument, judge its credibility and methods, and note how it connects to your question. All of that feeds straight into your literature review (your account of what existing research says) and your argument.


Unit 2 – Understand and Analyze

2.1 Reading Critically and Identifying Arguments

Critical reading means working out both what a text says and how it argues. Find the central claim and the evidence and reasoning behind it. Then look for the assumptions it depends on and the perspectives it includes or leaves out. AP Seminar often asks you to analyze unfamiliar sources quickly and precisely, so build efficient annotation habits. As you read, mark the thesis, note the main evidence, and flag assumptions or logical leaps. Also identify whose perspective the source represents.

Every text is an argument shaped by its author's perspective, purpose, and context. Noticing this doesn't mean throwing out sources that have a perspective, since all sources have one. It means reading with an eye on how those factors shape the source: what it focuses on, what evidence it treats as relevant, and what it concludes. First ask, "What does this source argue?" Then ask, "From what position does it argue, and what does that position make it likely to see and likely to miss?" Try this stem when identifying arguments. "The central claim of this source is [X], supported primarily by [type of evidence], which suggests the author approaches this question from [perspective]..."

2.2 Analyzing Reasoning and Evaluating Evidence

Analyzing reasoning means following the path from a source's evidence to its conclusion and checking whether it holds up. Does the evidence support the claim? Is the inference, the step from evidence to conclusion, valid? Did the author consider other explanations? Common reasoning flaws include hasty generalization (a sweeping conclusion from too little evidence) and post hoc reasoning (assuming causation from correlation or sequence). Two more are false dichotomy (offering only two options when more exist) and unsupported assumption (treating a debatable premise as established fact). Spotting a flaw doesn't automatically discredit a source, but it limits how much weight you can give its conclusions.

To evaluate evidence, ask: Is this the right kind of evidence for this claim? Is there enough of it, and is it good enough? Is the source of the evidence credible and properly cited? In empirical research, which draws on data and observation, do the methods support the conclusions? In argument and opinion pieces, does the reasoning hold up without leaning on assumptions the author never justifies? Calling evidence "strong" or "weak" isn't enough. Explain exactly why, naming the methodological or logical standard it meets or misses. Stems include: "This evidence is [persuasive/limited] because [specific methodological or logical reason]..." "The inference from [evidence] to [conclusion] depends on the assumption that [unstated premise], which [is/is not] adequately supported..."


Unit 3 – Evaluate Multiple Perspectives

3.1 Identifying and Comparing Different Perspectives

Complex issues in AP Seminar always involve several legitimate perspectives. Each is shaped by different values, academic disciplines, cultural contexts, and relationships to the problem. Identifying a perspective means going past "some people think X and others think Y." You have to reach the values, assumptions, or experiences behind it. Ask why someone with this background and these priorities would reasonably hold this position. Once you understand that, you can represent each perspective fairly and analyze it instead of just listing it.

When you compare perspectives, look at what they share as well as what they disagree about. Common ground can be as revealing as conflict. Perspectives that seem to contradict each other are sometimes addressing different parts of the same question. They may be using different definitions of key terms, or ranking values differently when both could be satisfied at once. Good multi-perspective analysis maps these relationships. It shows what each perspective sees and what it misses, where they actually conflict, and where they talk past each other. Stems include: "While [Perspective A] and [Perspective B] appear directly contradictory, the disagreement is actually about [specific point of conflict] rather than the broader question of [shared concern]..." "These perspectives share the assumption that [common ground] but differ in how they prioritize [competing values]..."

3.2 Evaluating Implications, Limitations, and Objections

Every perspective on a complex issue has implications and limitations. Implications are what follows if people accept its claims and act on them. Limitations are situations where its claims apply less well or are harder to defend. To evaluate them, think past the immediate argument to its wider effects. If this perspective shaped policy, what would change? Who would benefit and who might lose out? Which values would be advanced and which might be compromised? These questions are concrete, and they are often the parts of a scholarly debate with the most real-world weight.

Judge objections by their force. A strong objection points to a specific flaw in reasoning or a real case where the perspective fails. Its supporters can't brush it aside without seriously revising their position. A weak objection raises concerns the perspective has already handled or that don't affect its central claims. In your own argument, take on the strongest objections to your position. Acknowledge their force and explain why your position is still more persuasive or more complete. Ignoring them, or answering only weak versions, makes your argument look weaker. Stems include: "The most significant limitation of this perspective is that it [specific limitation], which means it is less persuasive in [specific context]..." "The strongest objection to this view, that [specific objection], cannot be fully resolved by [response], suggesting that [implication for the argument's scope or confidence]..."


Unit 4 – Synthesize Ideas

4.1 Formulating and Supporting Well-Reasoned Arguments

Your AP Seminar argument has to do more than summarize what sources say. That's true whether you're writing the IWA (individual written argument), building the team presentation, or answering the exam. The argument has to make your own evidence-based claim that takes a position on the research question and defends it with reasoning and evidence. The thesis should be specific and debatable, and it should be placed in relation to existing perspectives. Build on what some establish, complicate or challenge what others claim, and offer a conclusion the evidence supports. A thesis that only agrees with the most prominent perspective in the literature adds nothing new. It needs something of its own. That could be a new synthesis (a way of combining sources into an idea none of them states alone), a qualified version, or a more precisely scoped claim.

Support your argument by combining evidence from multiple sources so that it builds toward your conclusion; piling up citations doesn't do that. After each piece of evidence, explain what it shows. Then explain how it advances your thesis in particular, as opposed to the topic in general. Acknowledge the strongest counterarguments and explain why your position is more persuasive or more complete even though they have some validity. Stems for argument construction include: "This evidence supports the claim that [thesis point] by demonstrating..." "While [source/perspective] offers a compelling counterargument in suggesting that [objection], this does not undermine the central claim because..." "The convergence of [source A] and [source B] on this point provides stronger support than either alone, because..."

4.2 Developing Evidence-Based Conclusions and Solutions

In AP Seminar, a conclusion should match what your evidence actually supports. Don't play down real findings, and don't claim more certainty than the evidence allows. A strong conclusion states what your research has established and explains what that means for your question. It also admits the limits on how widely the conclusion applies. If your research has implications for policy, practice, or further scholarship, state them specifically. Avoid a vague line like "this suggests more research is needed." Instead, write something like "this suggests that future research should investigate [specific question] using [specific approach] in order to address [specific gap]."

Your question may ask what should be done as well as what is true. If so, tie your solution directly to the evidence instead of stating a general hope. A solution that follows logically from your evidence is more persuasive than one that only sounds reasonable. Stems for evidence-based conclusions include: "The evidence collectively supports the conclusion that [specific claim], within the constraints of [specific limitations]..." "These findings suggest that [practical implication], particularly in [specific context] where [condition that makes the implication applicable]..." "What this research cannot yet establish, and what future investigation should address, is [specific remaining question]..."


Unit 5 – Team, Transform, and Transmit

5.1 Producing and Presenting Research for an Audience

Presenting research to an audience means turning complicated work into something clear, organized, and persuasive. Your audience doesn't know your sources and arguments as well as you do. For the team presentation, put a clear argument ahead of covering all your research. Your audience needs to understand your thesis, your main supporting points, and why your argument beats the alternatives. They don't need to hear everything your team found. Visual aids should support and clarify your argument, never replace it. Slides packed with text show that the presenter hasn't yet turned research into communication.

For the individual written argument and exam essays, write with the AP Seminar evaluators in mind. They are judging whether you reason clearly, engage with multiple perspectives, use evidence well, and admit limitations honestly. Every structural and stylistic choice should serve that. In an oral defense, where a panel questions your team after the presentation, handling questions takes real flexibility. You need to think in real time, admit what you don't know, and connect unexpected questions to what you do know. These stems help when handling defense questions. "That is a dimension of the issue our research did not fully address; based on what we found, we would expect [reasoned inference]..." "This question points to a genuine limitation of our argument, which we acknowledged by..."

5.2 Reflecting on Research, Writing, and Collaboration Processes

AP Seminar's reflection requirement asks you to think about your own thinking. That covers what you learned about your topic, and also what you learned about research, argument, and collaboration as processes. Good reflection is specific and honest instead of generic and upbeat. "I learned a lot from working with my team" says nothing. A strong reflection names something specific. It might be a moment when collaboration changed your thinking, or a research problem and how you solved it. It might be a way your understanding of the topic, or of research itself, changed over the project.

When you reflect on collaboration, be honest about what worked and what was hard. Say what each teammate's strengths added, where coordination broke down and how you handled it, and what you would do differently next time. The point of reflection is learning, not self-congratulation. You want to understand how you research and think well enough to improve, and to carry those lessons into future work. Stems for productive reflection include: "My initial assumption about [topic/process] was [assumption]; encountering [specific experience] complicated that assumption by revealing..." "The most significant revision in my thinking occurred when [specific moment], which changed my understanding of [specific point] from [earlier view] to [revised understanding]..."
`


export const AP_SEMINAR_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Seminar',
  units: parseRawOverview(RAW_AP_SEMINAR),
  features: { latex: false, codeExamples: false },
}
