import type { SubjectUnitOverview } from './types'
import { parseRawOverview } from './parseRawOverview'

// Expected format (same as AP Psychology):
//   Unit N – Title
//   N.N Subunit title
//   ...paragraphs...
//   Key ideas: ...
const RAW_AP_RESEARCH = `
Unit 1 – Question and Explore

1.1 Identifying Problems and Developing Research Questions

Everything in AP Research depends on the research question, from choosing sources to choosing a method to building your argument. The question has to be researchable, scoped correctly, and worth asking. A good question is not too broad (too big to answer in a single study) and not too narrow (answerable from a single source). It also isn't already settled by existing scholarship. Instead, it sits in a real gap in the literature, meaning the body of published research on your topic. That gap might be a place where scholars haven't reached consensus, where current approaches have limits, or where a new angle might reveal something others have missed.

Start with a problem or phenomenon that actually interests you and matters in the real world, since you'll be working on it for months. Then narrow the broad area to a specific, answerable question. Ask yourself: What do we not yet know? What has existing research left unresolved? What assumption in the literature might be worth questioning? A useful research question usually hints at its method. "To what extent does X affect Y in the context of Z?" points toward a comparative or empirical approach. "How do members of [group] understand and navigate [phenomenon]?" points toward a qualitative one, which studies experiences and meanings instead of measuring amounts. Refine the question as you do your early reading, and expect it to change as you learn more about the existing scholarship.

1.2 Finding, Organizing, and Evaluating Sources of Information

Research starts with a broad survey of what scholars have already written on your topic. That survey does two jobs. It tells you what is already known, so you can place your question in relation to it. It also shows you the methods, evidence, and kinds of argument that scholars in your area use. Start with peer-reviewed academic sources (journal articles, academic books, published studies), which other experts checked before publication. Popular sources can help with background, but they don't carry enough authority for scholarly research. Databases like JSTOR, Google Scholar, PubMed, and your library's resources give you access to peer-reviewed work across disciplines.

Judge every source by the same criteria. Authority: is the author qualified and the publication peer-reviewed? Accuracy: are the methods sound and the evidence presented credibly? Currency: is the source recent enough to reflect where the field is now, or is an older source still foundational? Relevance: does it address your research question directly or give important context? Purpose: is it reporting original research, reviewing existing research, or arguing for a position? Keep your sources organized with a reference manager like Zotero (software that stores your sources and formats citations) or a detailed annotated bibliography. Note what each source argues, and also how it relates to your question and to the other sources. Finding the patterns, tensions, and gaps across sources is the work that turns a stack of readings into a literature review, a written account of what the research on your topic says as a whole.

1.3 Analyzing Issues from Multiple Perspectives

Serious research means engaging with the full range of perspectives on your topic. That includes the ones that challenge your starting assumptions or pull your research somewhere you didn't expect. You don't have to treat all views as equally valid, since some positions have more evidence, more rigorous methods, or more scholarly agreement behind them. You do have to take the strongest versions of competing interpretations seriously before you decide which one the evidence supports best.

In practice, read across disciplines when your topic touches more than one field. Consider both quantitative approaches (measuring with numbers) and qualitative approaches (studying experiences and meanings) to your question. And go looking for scholarship that challenges your emerging thesis. A researcher who only reads sources that confirm their first hypothesis is showing confirmation bias, the habit of favoring evidence that fits what you already believe. That is the opposite of scholarship. The perspectives you find should shape the research question itself. They may refine it, complicate it, or sometimes redirect it entirely as you get a clearer sense of what is actually at stake in the literature.


Unit 2 – Understand and Analyze

2.1 Reading Critically for a Purpose

In AP Research, you read with a purpose. For each source, you want to know how it bears on your research question and what methods and evidence it uses. You also want to know what it claims, how confidently it claims it, and how it fits with the other scholarship in your literature review. Annotate as you go. Note the central argument, the method, the main evidence, the limitations the author admits, and the questions left open. These notes become the raw material for your literature review and your analysis of the field.

Critical reading is also skeptical reading. That doesn't mean dismissing sources that complicate your thesis; it means questioning the assumptions, method choices, and standards of evidence in every source you use. Ask: What is this researcher assuming that they have not proven? What limits does this method put on the conclusions? What other explanations for these findings has the author not considered? These questions don't tear down good scholarship. They show you where the existing literature is strong and where it is thin, and that is where an original contribution starts.

2.2 Analyzing Line of Reasoning and Evaluating Evidence

Every scholarly argument has a line of reasoning, a logical path from its starting premises through its evidence to its conclusions. Evaluating that path is one of the main intellectual tasks in AP Research. Find each source's central claim, then follow the steps the author takes from evidence to conclusion. At each step, ask: Does this inference actually follow from the evidence? Is there a gap in the reasoning? Is there enough evidence, and is it good enough, to support the claim? Are there other explanations the author hasn't fully considered?

Evaluating evidence in scholarly sources means paying attention to method. How was the data collected, and could the collection method introduce systematic bias? Systematic bias is an error that pushes results in the same direction every time. In empirical research, how large and representative is the sample? How reliable and valid are the measures? A reliable measure gives consistent results, and a valid one measures what it claims to measure. In qualitative research, how did the researcher acknowledge and manage their own positionality? Positionality is the way a researcher's own background and identity can shape what they see. These questions decide how much you can trust a source's conclusions, and so how you should use it in your own research. When you find a methodological limitation in existing scholarship, you may have found the exact gap your research can fill.

2.3 Assessing Conclusions, Solutions, and Implications of Arguments

Assess a source's conclusions for their wider implications as well as their immediate claims. What do the findings suggest about related questions? What do they mean for practice, policy, or future research? Where does the author claim more than the evidence supports, and where are they properly cautious? A core research skill is telling the difference between what a study actually shows and what its authors (or others) say it shows.

Think about implications at two levels. For your own question, does this source support, challenge, or complicate the direction you're taking? For the field, does it suggest the field needs new methods, new frameworks, or new questions? (A framework is the set of theories and assumptions a researcher uses to explain a topic.) Your answers become the material for the analytical parts of your literature review. There you evaluate what existing scholarship contributes and where it falls short in relation to your research question, instead of only summarizing it.


Unit 3 – Evaluate Multiple Perspectives

3.1 Identifying and Comparing Perspectives on an Issue

When scholars disagree about an issue, the difference often goes deeper than reading the same evidence two ways. They may work from different frameworks, disciplinary assumptions, and methods. Those differences lead them to ask different questions, gather different evidence, and reach different conclusions. Good literature analysis names these deeper differences. Avoid a flat summary like "Researcher A concludes X and Researcher B concludes Y." A stronger version names the frameworks and methods behind each conclusion. "Researcher A approaches this question through a [framework] lens using [method], while Researcher B applies a [different framework] and [different method], which explains why their conclusions differ."

To compare perspectives, map where scholars agree and disagree. Where do scholars with different frameworks reach the same conclusion? That is strong, convergent evidence for it, meaning separate lines of research point to the same answer. Where do scholars using the same framework reach different conclusions? That is a real empirical dispute. Where do scholars talk past each other because they're answering different versions of the question? That is a framing problem the field needs to sort out. These distinctions shape how you position your own research and how you describe the state of the literature.

3.2 Evaluating Objections, Implications, and Limitations

Every scholarly argument is limited by its method and by the boundaries of its sample or context. It is also limited by the assumptions built into its theoretical framework. Pointing out these limits isn't criticism for its own sake. It tells you where existing knowledge is reliable and where it is provisional, disputed, or incomplete. Those limits are often the best places to find an original research question. That's because they show exactly where the field's current tools stop being able to show things reliably.

Judge objections in the literature by their force. A strong objection points to a specific flaw in reasoning or evidence that really does weaken the source's conclusions. A weak objection raises concerns the original research already handled or that don't affect the main findings. Suppose you find a real, unanswered objection to an important claim in the literature. Then you may have found a meaningful contribution your research can make. Write these objections down carefully and check how, or whether, later scholarship has answered them.

3.3 Interpreting How Perspectives Shape Arguments and Conclusions

A researcher's perspective includes their disciplinary training, theoretical framework, preferred methods, and positionality (the way their own background shapes their view). That perspective shapes their conclusions, and it also shapes the questions they ask, the evidence they count as relevant, and how they interpret data. A sociologist and a psychologist studying the same phenomenon will ask different questions and collect different data. They will probably reach conclusions that complement each other without matching. Each discipline has built tools for seeing certain patterns, and those same tools make other patterns harder to see.

Once you see how perspective shapes argument, you can read scholarship more precisely and position your own research more clearly. If your question sits where two disciplines meet, draw on both. Say plainly what each contributes and what each misses. If your method differs from the one most common in the literature, explain what your approach can see that the dominant methods can't. This kind of self-aware positioning marks mature scholarly writing. The introduction and methodology sections of the AP Research academic paper depend on it.


Unit 4 – Synthesize Ideas

4.1 Formulating a Well-Reasoned Argument

Your thesis is the central argument of your AP Research paper. It is the claim you will defend about your research question, based on the evidence you gathered and analyzed. It should be specific enough to guide a focused argument and backed by your evidence. Your thesis should also be clearly placed in relation to existing scholarship. It might build on established findings, address a gap or limitation, or offer a new perspective on a disputed question. A thesis that only confirms what the literature already establishes contributes little. A thesis that goes past what your evidence supports is overclaiming. Aim for a precisely scoped claim that your evidence supports and that adds something to the scholarly conversation.

Building your argument means moving from findings to interpretation. You argue what your results mean instead of just reporting them. This is where your scholarly voice comes through, because you are making an evidence-based argument about what the data shows. Test your argument with three questions. Is this claim specific enough to be falsifiable, meaning evidence could in principle prove it wrong? Does my evidence actually support it, or am I inferring more than the evidence allows? Have I considered the strongest alternative interpretations and explained why mine is more persuasive?

4.2 Using and Linking Evidence from Multiple Sources

A good research argument connects its sources to each other instead of citing each one separately. It shows how they relate, where they agree, where they conflict, and how together they support your claim. Your literature review should work this way too. Rather than going through sources one at a time, organize them by theme or by the questions they address. That way the reader sees what the scholarship as a whole has established, what is disputed, and what is still open.

When you use evidence from several sources, your commentary between them does the arguing. Signal phrases and transitions should describe the relationship between sources accurately. (Signal phrases are the short lead-ins that introduce a source and its claim.) Here are three examples of accurate signal phrases and transitions. "Building on [Source A's] finding that..., [Source B] demonstrates that..." "While [Source A] argues that..., [Source B] reaches the opposing conclusion, suggesting that the discrepancy may be explained by..." "The convergence of [Source A], [Source B], and [Source C] on this point provides strong evidentiary support for the claim that..." That commentary is where your own voice shows most. It is also where readers can judge how well you have synthesized the sources, that is, combined them into one argument.

4.3 Offering Evidence-Based Conclusions and Solutions

Match your conclusions to what your evidence actually supports. Don't undersell real findings, and don't claim more than your method can reliably show. Claiming that a single study has settled a disputed scholarly question is overclaiming. An appropriately scoped contribution looks different. It might identify a meaningful pattern, push the existing literature in a specific direction, or produce evidence that complicates a common assumption.

Strong conclusions also cover implications. What do your findings suggest for future research, practice, or policy? Where did your research open new questions instead of closing old ones? What are the limits of your own method, and how much do they reduce the confidence anyone should place in your conclusions? Admitting limitations is a sign of scholarly maturity, not weakness. It shows you know the difference between what your evidence shows and what would take further research to establish. It also places your work honestly within the ongoing scholarly conversation.


Unit 5 – Team, Transform, and Transmit

5.1 Presenting Arguments for Specific Contexts and Audiences

The AP Research oral defense asks you to present your research out loud to an audience that is evaluating you. That is a very different situation from the written paper. A spoken presentation depends on clarity, tight organization, and handling questions in real time. Readers of a paper can reread hard passages and check citations, but listeners have to understand you the first time. So put your central argument and most important findings ahead of full coverage of your methods and literature. Use visual aids only where they help.

Adapting your research for different audiences (academic evaluators, community stakeholders, policymakers, public forums) means putting your findings into language each audience can follow. You still have to stay accurate and keep the important qualifications. Think of it as translation rather than simplification. The goal is to make clear why the research matters to people who may not know your field's vocabulary or the scholarly conversation. Practice stating your central finding and why it matters in two or three sentences. If you can't, you may not yet understand your own findings clearly enough.

5.2 Reflecting on Writing, Thinking, and Research Processes

The AP Research process ends with a required reflection on your research, writing, and thinking. It should be an honest account of what you learned and how your understanding changed. It should also cover what worked, what you'd do differently, and what the experience taught you about how research works. Treat it as real intellectual work. Being able to think about how you found things, in addition to what you found, is a sign of growth as a researcher.

Good reflection covers several things. Start with how and why your research question changed from your first version. Then describe the methodological problems you ran into and how you dealt with them. Note the moments when your findings surprised you or challenged your assumptions. Finally, explain what you now understand about how a research question, a method, and a conclusion fit together that you didn't understand at the start. The most honest and analytical reflections are the most useful, because they show you absorbed the experience of doing research instead of just finishing it.


Unit 6 – The Academic Paper

6.1 Planning and Revising a Research Paper with Audience and Purpose in Mind

A research paper is written for a specific audience and a specific purpose. The audience is scholars in your field and your AP Research evaluators. The purpose is to make a credible, evidence-based contribution to a scholarly conversation. Every choice about organization and style should serve that audience and purpose. Academic writing has its own conventions, such as formal diction (word choice), citation practices, transparency about methods, and carefully qualified claims. These conventions exist because scholars developed them to communicate research clearly and credibly. Following them shows that you understand how scholarship works and are taking part in it seriously.

Plan the structure before you draft. Ask what the reader needs to understand at each stage of the paper, and in what order. When you revise, step back and ask whether the organization actually serves the argument and whether each section does its job. Also check whether the evidence is sufficient and well integrated, and whether the tone and diction fit a scholarly paper. Revision means rethinking whether the argument's logic, evidence, and structure are as strong as they can be. Proofreading for surface errors comes later.

6.2 Academic Paper Introduction

The introduction to your AP Research academic paper has three linked tasks. It shows why your research question matters, places it within the existing scholarly conversation, and states your argument and methodological approach. The first paragraph should explain why the problem you're investigating matters. Say what is at stake, who is affected, and why it deserves scholarly investigation. Skip the broad opening about how important your general topic area is. Argue instead for why this specific question, studied with this specific approach, is worth sustained attention.

The literature review is the part of your introduction that pulls existing scholarship together. (Some papers put it in a separate literature review section right after the introduction.) It shows what is known, where the field disagrees, and where your research question fits. Write it as an analytical narrative instead of a list of summaries. You are arguing that the existing literature, for all it contributes, has left a specific gap, contradiction, or limitation that your research addresses. End the introduction with a clear statement of your research question, your thesis or central argument, and a short overview of your method. Then the reader knows exactly what follows and why each part of the paper is there.

6.3 Academic Paper Methodology and Literature Review

The methodology section explains how you did your research. It covers what data you collected, from whom or what, through what procedures, and why those choices fit your research question. Aim for transparency and replicability, so that a reader could replicate or evaluate your study from the methodology section alone. Explain why you made each methodological choice as well as what you did. Say how you dealt with possible sources of bias or error, and what the limits of your approach are. Admitting those limits doesn't weaken your methodology. It shows scholarly maturity and an honest look at your study's constraints.

If your paper has a separate literature review section, organize it by idea rather than source by source. Group the existing scholarship by theme, approach, or the questions it addresses. Then use each part to build toward the gap or limitation your research addresses. Include a source only if it helps the reader understand the scholarly context of your research question. Never include one just because it's interesting or because you want to show how widely you read. The literature review makes a three-part argument. Here is what the field knows, and here is where it is uncertain or limited. And here is exactly where my research comes in.

6.4 Academic Paper Discussion and Analysis

The discussion and analysis section is the center of your paper. It presents your findings and, more importantly, argues what they mean. Present the findings clearly and in order before you interpret them. Don't mix raw findings with analytical claims in a way that blurs what you found with what you conclude from it. After the findings, explain why they matter. How do they relate to the literature you reviewed? Do they confirm, challenge, complicate, or extend earlier findings? What do they show about your research question that couldn't be seen before?

Report unexpected, null, or complicating results honestly. A null result is one that shows no effect or difference. Results that don't fit the pattern you expected are analytically important, so discuss them instead of playing them down. They may point to limits in your method, complexity in the thing you studied, or directions for future research. Strong analysis doesn't need clean, confirming results. It needs honest, rigorous interpretation of whatever the evidence shows, ambiguities included.

6.5 Academic Paper Conclusion

The conclusion of your academic paper does three things. It restates your central argument in light of all the evidence you presented. It explains the wider importance and implications of your findings. And it acknowledges your study's limitations and where future research could go. Don't copy your introduction's thesis word for word. Give a refined version that reflects what the full analysis established, so the reader sees how the paper built and supported the argument.

Make the implications specific. For the scholarly conversation in your field, how do your findings change, complicate, or advance what the field currently understands? For practice or policy, if relevant, what do your findings suggest people or institutions should do? For future research, what questions does your study raise that it can't answer itself? State limitations honestly and precisely. A pro forma list of every possible criticism, written only because one is expected, doesn't help. What helps is a real assessment of the constraints your method imposed, and of what they mean for how confidently your conclusions should be held.

6.6 Bibliography and Citation Styles

Your bibliography is a practical necessity and also a statement about your scholarship. It records every source you used and lets readers check and extend your research. It also shows how widely and carefully you engaged with the literature. Every source cited in your paper must appear in your bibliography, and every source in your bibliography must be cited in your paper. Use your field's standard citation format consistently. Most humanities research uses MLA or Chicago, the social sciences usually use APA, and the sciences use discipline-specific formats. Inconsistent or inaccurate citation is more than a style slip. It looks careless and makes your research harder to verify.

Put in-text citations, the short source references inside your sentences, right after the information they document. Keep them accurate and consistently formatted, and don't save them for the end of a paragraph that draws on several sources. Signal phrases should describe each source's contribution accurately. The verbs "argues," "demonstrates," "reports," "observes," "challenges," and "acknowledges" each say something different about what the source is doing. Keep a reference manager from the start of your research instead of rebuilding the bibliography from memory at the end. It saves a lot of time and cuts down on errors. Citation is a basic part of scholarly honesty, not a bureaucratic chore, because it credits the intellectual work your research builds on.

`


export const AP_RESEARCH_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Research',
  units: parseRawOverview(RAW_AP_RESEARCH),
  features: { latex: false, codeExamples: false },
}
