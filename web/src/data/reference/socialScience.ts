import type { SubjectReference } from './types'

export const AP_US_GOVERNMENT_REFERENCE: SubjectReference = {
  subjectName: 'AP Government',
  note: 'Key terms, required documents, and exam breakdown for AP U.S. Government & Politics.',
  glossary: [
    { term: 'Federalism', definition: 'Division of power between national and state governments.' },
    { term: 'Judicial review', definition: 'Courts’ power to strike down laws that conflict with the Constitution (Marbury v. Madison).' },
    { term: 'Checks and balances', definition: 'Each branch’s ability to limit the powers of the others.' },
    { term: 'Pluralism', definition: 'Theory that policy results from competition among many interest groups.' },
    { term: 'Selective incorporation', definition: 'Applying Bill of Rights protections to the states via the 14th Amendment.' },
    { term: 'Linkage institutions', definition: 'Channels (elections, parties, media, interest groups) connecting people to government.' },
  ],
  frequentlyTested: [
    { topic: 'Foundations of democracy', weight: '15–22%', note: 'Founding documents, federalism, and Constitutional principles.' },
    { topic: 'Interactions among branches', weight: '25–36%', note: 'Congress, presidency, courts, and bureaucracy — the largest band.' },
    { topic: 'Civil liberties & rights', weight: '13–18%', note: 'Landmark cases and the Bill of Rights.' },
    { topic: 'Political participation', weight: '20–27%', note: 'Elections, parties, media, and interest groups.' },
  ],
}

export const AP_COMPARATIVE_GOVERNMENT_REFERENCE: SubjectReference = {
  subjectName: 'AP Comparative Government',
  note: 'Key concepts and the six course countries for AP Comparative Government & Politics.',
  glossary: [
    { term: 'Regime', definition: 'The fundamental rules and institutions that structure political power in a state.' },
    { term: 'Legitimacy', definition: 'The perceived right of a government to rule (traditional, charismatic, or rational-legal).' },
    { term: 'Devolution', definition: 'Transfer of power from central government to regional/local authorities.' },
    { term: 'Single-member district', definition: 'An electoral district that sends one representative, favoring larger parties.' },
    { term: 'Civil society', definition: 'Voluntary groups outside the state that shape political life.' },
  ],
  frequentlyTested: [
    { topic: 'The six countries', note: 'China, Iran, Mexico, Nigeria, Russia, and the United Kingdom anchor every unit.' },
    { topic: 'Political institutions', weight: '~19%', note: 'Regimes, legislatures, executives, and courts.' },
    { topic: 'Political participation', weight: '~16%', note: 'Elections, parties, and civil society.' },
    { topic: 'Political & economic change', weight: '~16%', note: 'Development, globalization, and reform.' },
  ],
}

export const AP_HUMAN_GEOGRAPHY_REFERENCE: SubjectReference = {
  subjectName: 'AP Human Geography',
  note: 'Key terms and unit weighting for AP Human Geography.',
  glossary: [
    { term: 'Diffusion', definition: 'The spread of an idea, innovation, or trait across space (relocation or expansion).' },
    { term: 'Demographic transition', definition: 'The shift from high to low birth and death rates as a society develops.' },
    { term: 'Distance decay', definition: 'The weakening of a phenomenon’s effect as distance from its origin increases.' },
    { term: 'Central place theory', definition: 'A model explaining the size and spacing of settlements by the services they provide.' },
    { term: 'Von Thünen model', definition: 'A model of agricultural land use based on distance to market.' },
  ],
  frequentlyTested: [
    { topic: 'Population & migration', weight: '13–17%', note: 'Distribution, demographic transition, and migration.' },
    { topic: 'Political geography', weight: '11–15%', note: 'States, boundaries, and devolution.' },
    { topic: 'Agriculture & rural land use', weight: '12–17%', note: 'Land-use models and the agricultural revolutions.' },
    { topic: 'Cities & urban land use', weight: '12–17%', note: 'Urban models, hierarchy, and challenges.' },
  ],
}

export const AP_PSYCHOLOGY_REFERENCE: SubjectReference = {
  subjectName: 'AP Psychology',
  note: 'Key terms and unit weighting for AP Psychology.',
  glossary: [
    { term: 'Operant conditioning', definition: 'Learning in which behavior is shaped by reinforcement and punishment.' },
    { term: 'Cognitive dissonance', definition: 'Discomfort from holding conflicting attitudes, motivating attitude change.' },
    { term: 'Neurotransmitter', definition: 'A chemical messenger that carries signals across a synapse.' },
    { term: 'Confirmation bias', definition: 'The tendency to seek and favor information that confirms one’s beliefs.' },
    { term: 'Fundamental attribution error', definition: 'Overestimating personality and underestimating situation when explaining others’ behavior.' },
    { term: 'Reliability vs. validity', definition: 'Reliability = consistent results; validity = measures what it claims to measure.' },
  ],
  frequentlyTested: [
    { topic: 'Biological bases of behavior', weight: '15–25%', note: 'Neurons, the brain, and sensation.' },
    { topic: 'Cognition', weight: '15–25%', note: 'Memory, thinking, and problem-solving.' },
    { topic: 'Development & learning', weight: '15–25%', note: 'Classical/operant conditioning and lifespan development.' },
    { topic: 'Social psychology & personality', weight: '15–25%', note: 'Attribution, conformity, and theories of personality.' },
  ],
}
