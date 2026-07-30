import type { SubjectReference } from './types'

export const AP_US_HISTORY_REFERENCE: SubjectReference = {
  subjectName: 'AP US History',
  note: 'Key concepts and period weighting for AP U.S. History.',
  glossary: [
    { term: 'Manifest Destiny', definition: 'The 19th-century belief that the U.S. was destined to expand across North America.' },
    { term: 'Reconstruction', definition: 'The 1865–1877 effort to rebuild the South and integrate freed people after the Civil War.' },
    { term: 'Progressivism', definition: 'Early-1900s reform movement targeting corruption, monopolies, and social conditions.' },
    { term: 'Containment', definition: 'Cold War policy of preventing the spread of communism.' },
    { term: 'Federalism', definition: 'The division of power between national and state governments.' },
    { term: 'Popular sovereignty', definition: 'The principle that residents of a territory decide an issue (e.g. slavery) by vote.' },
  ],
  frequentlyTested: [
    { topic: 'Period 3 (1754–1800)', weight: '10–17%', note: 'Revolution, founding, and the Constitution.' },
    { topic: 'Period 4 (1800–1848)', weight: '10–17%', note: 'Expansion, reform, and sectional tension.' },
    { topic: 'Period 5 (1844–1877)', weight: '10–17%', note: 'Civil War and Reconstruction.' },
    { topic: 'Period 6 (1865–1898)', weight: '10–17%', note: 'Industrialization and the Gilded Age.' },
    { topic: 'Period 7 (1890–1945)', weight: '10–17%', note: 'Progressivism, world wars, and the Depression.' },
  ],
}

export const AP_WORLD_HISTORY_REFERENCE: SubjectReference = {
  subjectName: 'AP World History',
  note: 'Key concepts and unit weighting for AP World History: Modern (1200–present).',
  glossary: [
    { term: 'Diaspora', definition: 'The dispersal of a people from their homeland, spreading culture and trade.' },
    { term: 'Mercantilism', definition: 'Economic policy maximizing exports and state wealth through controlled trade.' },
    { term: 'Imperialism', definition: 'Extending a nation’s power through colonization or economic domination.' },
    { term: 'Nationalism', definition: 'Identification with and devotion to a nation, often driving unification or independence.' },
    { term: 'Columbian Exchange', definition: 'The transfer of crops, animals, people, and disease between hemispheres after 1492.' },
  ],
  frequentlyTested: [
    { topic: 'Unit 1–2 (1200–1450)', weight: '~20%', note: 'Global tapestry and networks of exchange.' },
    { topic: 'Unit 3–4 (1450–1750)', weight: '~25%', note: 'Land empires and transoceanic connections.' },
    { topic: 'Unit 5–6 (1750–1900)', weight: '~25%', note: 'Revolutions and consequences of industrialization.' },
    { topic: 'Unit 7–9 (1900–present)', weight: '~30%', note: 'Global conflict, decolonization, and globalization.' },
  ],
}

export const AP_EUROPEAN_HISTORY_REFERENCE: SubjectReference = {
  subjectName: 'AP European History',
  note: 'Key concepts and period weighting for AP European History (1450–present).',
  glossary: [
    { term: 'Humanism', definition: 'Renaissance intellectual movement emphasizing classical learning and human potential.' },
    { term: 'Absolutism', definition: 'A form of monarchy in which the ruler holds total, centralized power.' },
    { term: 'Enlightenment', definition: '18th-century movement applying reason to society, government, and science.' },
    { term: 'Balance of power', definition: 'Diplomatic principle of preventing any one state from dominating Europe.' },
    { term: 'Nationalism', definition: 'Loyalty to a nation that drove 19th-century unification and conflict.' },
  ],
  frequentlyTested: [
    { topic: '1450–1648', weight: '~25%', note: 'Renaissance, Reformation, and religious wars.' },
    { topic: '1648–1815', weight: '~35%', note: 'Absolutism, Enlightenment, and the French Revolution.' },
    { topic: '1815–1914', weight: '~25%', note: 'Industrialization, isms, and nationalism.' },
    { topic: '1914–present', weight: '~15%', note: 'World wars, Cold War, and integration.' },
  ],
}

export const AP_AFRICAN_AMERICAN_STUDIES_REFERENCE: SubjectReference = {
  subjectName: 'AP African American Studies',
  note: 'Key concepts and unit themes for AP African American Studies (a newer interdisciplinary course).',
  glossary: [
    { term: 'Diaspora', definition: 'The global dispersal of people of African descent and their shared cultural connections.' },
    { term: 'Great Migration', definition: 'The early-1900s movement of African Americans from the rural South to Northern cities.' },
    { term: 'Double consciousness', definition: 'W.E.B. Du Bois’s idea of experiencing one’s identity through the eyes of a society that devalues it.' },
    { term: 'Reconstruction', definition: 'The post–Civil War era of expanding, then curtailing, Black civil and political rights.' },
    { term: 'Pan-Africanism', definition: 'A movement promoting solidarity among people of African descent worldwide.' },
  ],
  frequentlyTested: [
    { topic: 'Origins of the African diaspora', note: 'Early African societies and the transatlantic slave trade.' },
    { topic: 'Freedom, enslavement, and resistance', note: 'Systems of slavery and the many forms of resistance to them.' },
    { topic: 'The practice of freedom', note: 'Reconstruction, migration, and building institutions.' },
    { topic: 'Movements and debates', note: '20th- and 21st-century activism, culture, and ongoing debates.' },
  ],
}
