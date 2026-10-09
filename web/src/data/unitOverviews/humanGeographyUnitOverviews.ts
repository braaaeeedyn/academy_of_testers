import type { SubjectUnitOverview } from './types'
import { parseRawOverview } from './parseRawOverview'

const RAW_HUMAN_GEOGRAPHY = `AP Human Geography

Unit 1 – Thinking Geographically

1.1 Introduction to Maps and Types of Maps

Maps are geography's basic tools. They show spatial information, meaning information about where things are, so we can study patterns, relationships, and processes on Earth's surface. Every map involves trade-offs, because it shows a three-dimensional sphere on a flat, two-dimensional surface. That conversion is called a projection, and each projection distorts something. The Mercator projection keeps shape and direction accurate, which makes it useful for navigation, but it stretches the size of landmasses near the poles. On a Mercator map, Greenland looks as large as Africa. The Robinson projection compromises between size and shape, while the Peters projection keeps area accurate but distorts shape.

Reference maps show where places and geographic features are: political boundaries, cities, rivers, roads, and topography (the shape of the land). Thematic maps show how one particular thing is spread out, such as population density, climate zones, languages, religions, economic activity, or disease prevalence. There are several kinds of thematic maps to know. Choropleth maps use shading or colors to show data values within set areas, like states or countries. Dot density maps place dots to show where something occurs and how concentrated it is. Proportional symbol maps use symbols of different sizes to show quantities. Isoline maps connect points of equal value, like the contour lines on a topographic map. Cartograms distort the size of areas so that size reflects a variable like population or GDP.

Geographic Information Systems (GIS) are computer-based systems that capture, store, analyze, and display data tied to locations. With GIS, users can layer several datasets on one map, run spatial analysis, and spot patterns that no single dataset would show alone. GIS is used in urban planning, environmental management, public health, disaster response, and countless other fields.

  Key ideas: Every map projection trades off accuracy in shape, size, distance, and direction. Reference maps show locations, and thematic maps show how something is distributed. The main thematic map types are choropleth, dot density, proportional symbol, isoline, and cartograms. GIS lets users layer and analyze several spatial datasets at once.

1.2 Geographic Data and Its Power

Geographic data is information tied to a location on Earth's surface. It can be qualitative, meaning descriptive (such as the dominant religion in a region), or quantitative, meaning numerical (such as population density or rainfall). Sources of geographic data include censuses, surveys, satellite imagery, aerial photography, GPS (Global Positioning System), remote sensing, and crowdsourced platforms like OpenStreetMap.

Geospatial technologies have changed how we collect and analyze geographic data. GPS uses a network of satellites to pin down precise locations on Earth's surface, which makes navigation, mapping, and tracking movement possible. Remote sensing means collecting information about Earth's surface from a distance. Satellite imagery, for example, can monitor deforestation, urban growth, sea-level rise, and agricultural productivity. It can even record nighttime light patterns, which act as a rough measure of economic development.

Geographic data is powerful because it reveals spatial patterns and relationships. Mapping disease outbreaks can identify clusters and possible sources of contagion. Mapping income levels next to access to healthcare, education, or clean water can expose spatial inequalities, gaps between places. John Snow's famous 1854 map of cholera deaths in London is an early example of spatial analysis used to solve a real-world problem: it identified a contaminated water pump as the source of an outbreak.

However, geographic data also raises ethical questions. Surveillance, privacy, data ownership, and misuse are serious concerns. Governments can use location data to track dissidents, and corporations can use it for targeted advertising. Maps can also be tools of power, since what a map includes, leaves out, or plays up reflects the mapmaker's choices and biases.

  Key ideas: Geographic data ties information to specific locations and can be qualitative or quantitative. GPS, remote sensing, and GIS have changed how data is collected and analyzed. Spatial analysis reveals patterns that drive real-world decisions, as John Snow's cholera map did. Geographic data raises ethical concerns about surveillance, privacy, and who controls how places are shown.

1.3 Spatial Concepts

Geographers rely on a set of core spatial concepts to study how things are spread across Earth's surface and why that matters. Location can be absolute or relative. Absolute location is a fixed point identified by latitude and longitude coordinates. Relative location describes a place in relation to other places: "near the coast" or "north of the capital." Place means the unique physical and human characteristics that set one location apart from another, including its physical landscape, climate, culture, history, and meaning to the people who live there.

Space and spatial interaction are about how distance, connectivity, and movement shape human activity. The friction of distance is the idea that interaction between places decreases as the distance between them increases. Modern transportation and communication have reduced that friction through time-space compression. Because the time needed to travel or communicate between places has shrunk sharply, distant places now feel closer.

Diffusion is how ideas, innovations, diseases, and cultural practices spread across space. The two main types are expansion diffusion and relocation diffusion. In expansion diffusion, something spreads outward from a source while staying strong where it started. In relocation diffusion, it spreads because people physically move and carry it with them. Expansion diffusion has three subtypes. Hierarchical diffusion spreads from large or important places to smaller ones. Contagious diffusion spreads to nearby places through proximity. In stimulus diffusion, the underlying idea spreads even if the specific trait does not.

Pattern and distribution describe how things are arranged in space. A distribution can be clustered (concentrated in one area), dispersed (spread out evenly), or linear (arranged along a line). Geographers describe any spatial distribution with three properties: density, concentration, and pattern.

  Key ideas: Location is absolute (coordinates) or relative (in relation to other places). Place refers to the unique physical and human characteristics of a location. Time-space compression has reduced the friction of distance. The diffusion types to know are hierarchical, contagious, stimulus, and relocation.

1.4 Human-Environment Interaction

The relationship between humans and their physical environment is a central theme in geography, and it runs both ways. Humans change the environment to meet their needs by building cities, clearing forests, damming rivers, and irrigating deserts. The environment in turn shapes human activity: climate influences agriculture, topography affects where people settle, and natural disasters disrupt societies.

Environmental determinism is the idea that the physical environment causes or determines human behavior, culture, and development. It was a dominant view in early twentieth-century geography. People used it to argue that tropical climates produced "inferior" civilizations, an idea deeply tied to racist and imperialist ideologies. Geographers have largely rejected it as oversimplified and ethically troubling.

Possibilism is the alternative. It holds that the environment offers a range of possibilities and limits, but human cultures and technologies decide how those possibilities are used. So the same environment can support very different societies, depending on the technology, knowledge, and choices available. For example, the Middle East's arid environment supported both nomadic pastoralism (herding animals while moving from place to place) and the irrigation-based civilizations of Mesopotamia.

Sustainability means meeting present needs without compromising the ability of future generations to meet theirs, and it has become a central concern. Deforestation, fossil fuel combustion, industrial agriculture, and urbanization are changing Earth's environment in ways that threaten its long-term habitability. Geography offers tools for analyzing these problems spatially and for developing solutions that fit specific places.

  Key ideas: Humans modify the environment, and the environment shapes human activity. Environmental determinism, now rejected, claimed the environment determines human development. Possibilism holds that the environment offers possibilities, but human choices determine outcomes. Sustainability is the ability to meet present needs without compromising future generations.

1.5 Scales of Analysis

Scale of analysis is the level at which you examine something: global, regional, national, or local. The scale you choose affects which patterns you see and what conclusions you draw. A global-scale look at poverty might find broad patterns between wealthy and poor nations. A local-scale look at the same issue might reveal stark differences between neighborhoods within a single city.

Scale matters because patterns and explanations change from one level to another. Take fertility rates. At the global scale, they are highest in sub-Saharan Africa and lowest in Europe and East Asia. At the national scale, fertility varies between urban and rural areas and with education levels and access to healthcare. At the local scale, it may vary by neighborhood, ethnicity, or religious affiliation. No single scale tells the complete story, so geographers must move between scales to get a full picture.

Scale also affects political and policy decisions. Global issues like climate change require international cooperation, yet their effects are felt locally, as when sea-level rise hits specific coastal cities or drought hits specific farming regions. "Glocalization" is the interaction between global processes and local conditions: the way global trends are adapted, resisted, or changed at the local level.

The AP Human Geography exam often asks you to analyze how a pattern or process differs across scales of analysis. A core geographic skill is learning to "scale up" and "scale down." That means seeing how global forces affect local places, and how local conditions shape the way people experience global processes.

  Key ideas: Scale of analysis ranges from global to local and affects which patterns are visible. Different scales reveal different patterns and explanations for the same phenomenon. Glocalization describes how global processes are adapted or transformed at the local level. Moving between scales is a core skill in geographic analysis.

1.6 Regional Analysis

Regions are areas of Earth's surface defined by one or more shared characteristics, which can be physical, cultural, economic, or political. Geographers use regions as tools to organize the world and make its complexity easier to study. There are three main types of regions.

Formal regions (also called uniform regions) are defined by one or more characteristics shared across the whole area. Examples include countries (defined by political boundaries), climate zones (defined by weather patterns), the Corn Belt (defined by its main crops), and language regions (defined by the dominant language spoken). The defining characteristic is present throughout the region, though it may be stronger in some parts than others.

Functional regions (also called nodal regions) are organized around a central point, or node, and defined by the activity that flows to and from that node. A city's commuting shed, the area from which people travel to work in that city, is a functional region. A newspaper's distribution area, a television station's broadcast range, and a pizza delivery zone are others. Functional regions are defined by connections and movement rather than by uniform characteristics.

Perceptual regions (also called vernacular regions) are defined by people's shared sense of identity or mental image of an area, even if the boundaries are vague. "The South," "the Middle East," "Silicon Valley," and "Appalachia" are perceptual regions. People generally know what these names refer to but cannot agree on exact boundaries. Perceptual regions are culturally constructed and may vary depending on who is defining them.

Regionalization, the process of dividing the world into regions, is always a simplification. Real places are complex and may belong to several overlapping regions. Geographers treat regions as heuristic tools (rough aids to thinking) rather than as rigid categories, and they recognize that regional boundaries are often contested and politically charged.

  Key ideas: Formal regions are defined by uniform shared characteristics (e.g., language, climate). Functional regions are organized around a node and defined by flows of activity (e.g., commuting sheds). Perceptual regions are defined by cultural identity and mental maps (e.g., "the South"). Regionalization simplifies complexity and involves contested, overlapping boundaries.

1.7 Geographic Models and Theories

Geographic models are simplified versions of complex spatial processes that help geographers explain and predict patterns. Models are not perfect descriptions of reality. They simplify on purpose to bring out the main processes and relationships, and their value comes from the testable hypotheses and frameworks for analysis they provide.

Several models come up again and again in the AP Human Geography course. The demographic transition model (DTM) describes how countries move through stages of population change as they develop economically. The gravity model predicts that interaction between two places rises with their populations and falls with the distance between them, so larger, closer places interact more. The Von Thünen model explains agricultural land-use patterns around a central market. The urban models (concentric zone, sector, multiple nuclei, galactic city) describe the internal structure of cities.

Models have limitations. They often rest on assumptions, like flat terrain, a single market center, or people making rational economic choices, that do not hold in the real world. Many models were built from European or North American cases and may not fit other regions as well. The cultural, political, and historical factors that a model leaves out can matter a great deal in specific cases.

Even so, models are standard tools for geographic thinking. They give a starting point for analysis, point out cases that break the pattern and need explaining, and allow comparison across cases. On the AP exam, knowing the models isn't enough. You are expected to apply them to specific situations, judge how useful they are, and identify their limitations.

  Key ideas: Geographic models simplify reality to bring out the main spatial processes. The models to know include the DTM, gravity model, Von Thünen model, and urban structure models. Models have limitations, since they assume ideal conditions and may not fit every context. Students must apply, evaluate, and critique models; memorizing them isn't enough.

1.8 Geographic Perspectives on Contemporary Issues

Geography gives a distinct view of today's global challenges because it asks "where?" and "why there?" about everything. Globalization, climate change, urbanization, migration, inequality, food security, and conflict all have geographic dimensions that can't be understood without spatial analysis.

Globalization is the growing interconnectedness of the world through trade, communication, cultural exchange, and the movement of people. It is perhaps the defining process of our time. Geography shows that globalization is uneven. Some places are deeply tied into global networks, such as major cities, trade corridors, and technology hubs. Others are left on the margins, such as remote rural areas, conflict zones, and landlocked developing countries. The "core-periphery" model describes this unevenness. Wealthy "core" regions dominate economic and political systems, while "peripheral" regions provide raw materials and cheap labor.

Climate change has strongly geographic consequences. Sea-level rise threatens low-lying coastal areas, shifting precipitation patterns affect agriculture, and extreme weather events hit specific regions. Vulnerability is uneven too: the poorest countries, which have contributed least to greenhouse gas emissions, often face the greatest risks.

Migration, food production, urbanization, and political conflict all have spatial patterns that geography is well equipped to analyze. Its focus on place, space, scale, and human-environment interaction helps explain what is happening in the world, where it is happening, and why those spatial patterns matter.

  Key ideas: Geography asks "where?" and "why there?" about every phenomenon. Globalization is geographically uneven, as the core-periphery model describes. Climate change has place-specific consequences that hit vulnerable regions hardest. Today's challenges can't be understood without geographic analysis of place, space, scale, and human-environment interaction.

1.9 Fieldwork and the Geographer's Toolkit

Geography is done both at a desk and in the field. Geographers gather data through fieldwork, which means direct observation, interviews, surveys, and measurements in the places they study. Fieldwork keeps geographic analysis grounded in real-world observation, so it doesn't drift into the abstraction that can come from working only with maps, models, and statistics.

Geographers use several qualitative methods. Participant observation means spending time in a community to understand how it works. Interviews gather personal perspectives and local knowledge. Landscape analysis means reading the physical and cultural landscape for clues about economic activity, social organization, and environmental change. Archival research means studying historical documents, photographs, and maps.

Quantitative methods include spatial statistics (analyzing numerical data about how something is distributed across space), census analysis, survey data collection, and geospatial technologies (GIS, GPS, remote sensing). Combining qualitative and quantitative approaches is called mixed methods. It is increasingly common and is considered best practice for building a detailed understanding of geographic patterns.

Mental maps are the pictures of space that people carry in their heads, and they are an important concept in human geography. Everyone's mental maps reflect their personal experience, knowledge, and biases. These maps influence behavior, such as where people choose to live, work, shop, and travel. They shape perceptions of place, such as which areas feel safe or dangerous, attractive or unappealing. They also affect political attitudes about regions, nations, and borders. Mental maps are subjective and vary from person to person, but studying them across groups can reveal shared patterns.

  Key ideas: Fieldwork grounds geographic analysis in real-world observation. Qualitative methods include observation, interviews, and landscape analysis. Quantitative methods include spatial statistics, census analysis, and geospatial technologies. Mental maps are subjective internal pictures of space that influence behavior and perceptions.

Unit 2 – Population and Migration

2.1 Population Distribution and Density

People are spread very unevenly across Earth's surface. Roughly 90 percent of people live in the Northern Hemisphere, and most are packed into a few major clusters: East Asia (China, Japan, Korea), South Asia (India, Pakistan, Bangladesh), Southeast Asia (Indonesia, Philippines, Vietnam), and Europe. Large areas of the planet have very few people, including deserts, polar regions, high mountains, and dense tropical forests.

Geographers measure population density in three ways, and each tells you something different. Arithmetic density is total population divided by total land area. It gives a simple average but can mislead. Egypt has a modest arithmetic density, yet almost its entire population lives along the narrow Nile River corridor. Physiological density is total population divided by arable land, the land that can be farmed. It shows the pressure a population puts on food production, which is why Egypt's physiological density is extremely high: its arable land is limited. Agricultural density is the number of farmers divided by arable land. It measures how intensively land is farmed and tracks the level of farm technology, so countries with mechanized agriculture have low agricultural densities.

Where people live reflects both physical factors (climate, water availability, soil fertility, topography) and human factors (economic opportunities, political stability, historical settlement patterns, infrastructure, and transportation networks). People tend to cluster where resources can support dense settlement, such as fertile river valleys, coastal areas with access to trade, and temperate climate zones.

Population distribution matters for everything from resource allocation and urban planning to political representation and environmental impact. The AP exam often asks you to explain why a population is distributed the way it is and what follows from that pattern.

  Key ideas: World population is concentrated in East Asia, South Asia, Southeast Asia, and Europe. Arithmetic, physiological, and agricultural density each show a different side of population pressure. Physical factors (climate, water, soil) and human factors (economy, history, infrastructure) shape where people live. Studying population distribution supports resource planning and helps explain spatial inequality.

2.2 Population Composition

Population composition is the makeup of a population by age, sex, and other demographic characteristics. The most important tool for studying it is the population pyramid, also called an age-sex structure diagram. It shows the percentage of the population in each age and sex group (cohort) as horizontal bars, stacked from youngest at the bottom to oldest at the top.

A pyramid's shape tells you about a society's past, present, and future. A broad-based pyramid, wide at the bottom and narrowing sharply toward the top, means a young, rapidly growing population with high birth rates and fairly low life expectancy. Many sub-Saharan African countries look like this. A more columnar shape means a stable or slowly growing population with low birth and death rates, typical of developed countries like the United States, France, or Japan. An inverted, top-heavy pyramid means an aging population where deaths outnumber births, and Japan and several European countries are approaching this pattern.

The dependency ratio compares the people of non-working age (under 15 and over 64) with the working-age population (15–64). A high dependency ratio means fewer workers must support more dependents, which strains economic resources. Youth dependency, a high share of people under 15, is common in developing countries and creates demand for schools, childcare, and eventually jobs. Elderly dependency, a high share over 64, is common in developed countries and creates demand for healthcare, pensions, and eldercare.

The sex ratio is the number of males per 100 females. It varies by country and can reflect cultural practices, such as son preference leading to sex-selective abortion in China and India. It can also reflect war, which kills a disproportionate number of young men, or migration patterns, since labor migration is often mostly male.

  Key ideas: Population pyramids show age-sex structure and reveal growth trends. Broad-based pyramids mean rapid growth, columnar shapes mean stability, and top-heavy shapes mean aging. The dependency ratio measures how much the non-working-age population depends on workers. Sex ratios reflect cultural practices, conflict, and migration patterns.

2.3 The Demographic Transition Model

The Demographic Transition Model (DTM) is one of the most important models in AP Human Geography. It describes how a country's population changes as the country goes through economic development and industrialization. The model has four main stages, and some versions add a fifth.

Stage 1 (Pre-Industrial): Birth rates and death rates are both high and roughly equal, so the population grows slowly or not at all. Death rates are high because of disease, famine, and lack of medical care. Birth rates are high because children are economic assets who provide labor, and because high infant mortality encourages large families. Very few countries remain in Stage 1 today.

Stage 2 (Early Industrial/Urbanizing): Death rates fall quickly thanks to better sanitation, nutrition, and medicine, while birth rates stay high. The gap between births and deaths widens sharply, and the population explodes. Many sub-Saharan African countries are in Stage 2 or moving between Stages 2 and 3.

Stage 3 (Late Industrial): Birth rates begin to fall. Urbanization, education (especially for women), access to contraception, and changing economic incentives reduce the desire for large families. Population growth slows but is still positive. Many countries in Latin America and Asia are in Stage 3.

Stage 4 (Post-Industrial): Birth rates and death rates are both low, which means slow growth, zero growth, or even population decline. Countries like the UK, Japan, Germany, and Italy are in Stage 4. Some scholars propose a Stage 5 in which birth rates fall below death rates, so the population keeps shrinking. Japan and several Eastern European countries show this pattern.

  Key ideas: The DTM describes the shift from high birth and death rates to low ones as countries develop. Stage 2 produces rapid population growth, while Stage 4 produces stability or decline. Movement through the model goes along with economic development, urbanization, and women's education. One limitation is the assumption that all countries will follow the same path.

2.4 Malthusian Theory and Population Policies

Thomas Malthus, an English clergyman and economist, published An Essay on the Principle of Population in 1798. He argued that population growth would inevitably outrun food production. In his view, population grows geometrically (exponentially, by multiplying) while food production grows only arithmetically (linearly, by adding). The result would be famine, disease, and war, which he called "positive checks" because they reduce population to sustainable levels. He also identified "preventive checks," like delayed marriage and celibacy, that could lower birth rates voluntarily.

Malthus's theory has been both influential and controversial. In the twentieth century, Neo-Malthusians warned that overpopulation would cause environmental catastrophe. They included Paul Ehrlich (The Population Bomb, 1968) and the Club of Rome (The Limits to Growth, 1972). Their predictions of imminent famine proved largely wrong because of the Green Revolution and other advances in agricultural technology, which Malthus did not anticipate.

Anti-Malthusian critics argue that human ingenuity, technology, and markets can overcome resource limits. Ester Boserup argued that population growth actually pushes farmers to innovate: "necessity is the mother of invention." Karl Marx argued that poverty came from the unequal distribution of resources under capitalism, not from overpopulation.

Governments use two kinds of population policy. Pro-natalist policies encourage higher birth rates through incentives like tax breaks, parental leave, and child subsidies; France, Sweden, and Japan use them to address aging populations. Anti-natalist policies discourage births through family planning programs, education, and, in extreme cases, coercion. China's One-Child Policy (1979–2015) is the most notable example. It prevented millions of births, but it also led to human rights abuses and a gender imbalance driven by son preference.

  Key ideas: Malthus argued that population growth would outrun food production and cause a crisis. Neo-Malthusians warn of environmental limits, while anti-Malthusians point to technology and human ingenuity. Boserup argued that population growth drives agricultural innovation. Population policies range from pro-natalist (encouraging births) to anti-natalist (discouraging births, e.g., China's One-Child Policy).

2.5 Women, Demographic Change, and Aging Populations

Women's status and empowerment are among the strongest predictors of demographic change. Research consistently shows that fertility rates fall when women have access to education, economic opportunities, and reproductive healthcare, including contraception. This holds across cultures, religions, and regions. The reason is straightforward: educated women tend to marry later, join the workforce, have more control over reproductive decisions, and choose smaller families.

This creates a virtuous cycle, a chain of good effects that feed each other. Lower fertility leads to better maternal and child health, more resources per child (including education), and stronger economic growth, which further empowers women. Societies where women have little education or economic independence, on the other hand, tend to stay stuck with high fertility and poverty.

Population aging is a growing demographic challenge for developed countries. As fertility rates fall and life expectancy rises, the elderly make up a larger share of the population. Japan is the most extreme case, with over 28 percent of its population over 65. Aging populations strain pension systems, healthcare systems, and labor markets. With fewer workers supporting more retirees, dependency ratios rise and economic growth slows.

Countries respond to aging in different ways. Germany and Canada encourage immigration to refill the working-age population. France and Sweden adopt pro-natalist policies. Japan invests in automation and technology so fewer workers can produce more. Some countries, like China, face the prospect of "growing old before growing rich." Their populations are aging before the country reaches high-income status, which makes paying for elder care even harder.

  Key ideas: Women's education and empowerment are the strongest predictors of falling fertility. Lower fertility creates a virtuous cycle of better health, more investment per child, and economic growth. Population aging strains pensions, healthcare, and labor markets in developed countries. Countries respond to aging with immigration, pro-natalist policies, and automation.

2.6 Push and Pull Factors in Migration

Migration is the permanent or semi-permanent move of people from one place to another. Push factors are conditions that drive people to leave their origin, and pull factors are conditions that draw them to a destination. Ernst Ravenstein's "Laws of Migration" (1885) made several generalizations that still hold. Most migration is short-distance, and longer-distance migrants tend to move to major cities. Each migration stream produces a counter-stream flowing the other way. Rural residents migrate more than urban residents, and economic factors are the main driver.

Push factors include poverty, unemployment, political persecution, war and conflict, environmental damage, natural disasters, and famine. Pull factors include economic opportunities (jobs, higher wages), political freedom, family reunification, better education and healthcare, and a more favorable environment.

Intervening obstacles are barriers that make migration harder: distance, cost, immigration laws, physical barriers like mountains and oceans, cultural and language differences, and lack of information about the destination. Intervening opportunities are good conditions a migrant finds along the way that may lead them to settle before reaching their planned destination.

Lee's model of migration (1966) pulled these ideas together. It explains migration through four sets of factors: those at the origin, those at the destination, intervening obstacles, and personal factors like age, education, family situation, and willingness to take risks. The decision to migrate is always made by individuals, but conditions at both the origin and the destination shape it.

  Key ideas: Push factors drive people to leave (poverty, war, persecution), and pull factors attract them to a destination (jobs, freedom). Ravenstein's laws make generalizations about migration patterns. Intervening obstacles (cost, laws, distance) and intervening opportunities affect migration decisions. Lee's model explains migration through origin factors, destination factors, obstacles, and personal factors.

2.7 Forced vs. Voluntary Migration

Migration is broadly either voluntary, chosen by the person for personal or economic reasons, or forced, driven by circumstances outside the person's control. In practice the line is often blurry. Someone who migrates to escape extreme poverty may technically be making a "choice" but has few real alternatives.

Forced migrants include refugees, internally displaced persons, and victims of human trafficking. Refugees are people who flee their country because of a well-founded fear of persecution, as defined by the 1951 UN Refugee Convention. Internally displaced persons (IDPs) are forced from their homes but stay within their own country's borders. Over 100 million people are forcibly displaced today, the highest number on record. Major refugee-producing crises include the wars in Syria, Afghanistan, Ukraine, South Sudan, and Myanmar.

Voluntary migration is driven mainly by economic opportunity. Labor migration, the movement of workers to places where jobs are available, is the most common form. Within countries, rural-to-urban migration is the dominant pattern in developing countries. Internationally, workers migrate for jobs, as when Mexican and Central American workers go to the United States or South Asian workers go to the Persian Gulf states. "Brain drain" is the emigration of highly educated professionals from developing to developed countries.

History offers major examples of forced migration. The Atlantic slave trade forcibly transported 12.5 million Africans to the Americas. The Trail of Tears was the forced relocation of Native Americans. The partition of India in 1947 displaced approximately 15 million people, and the Palestinian displacement of 1948 is known as the Nakba. These events still shape the culture and politics of the affected regions.

  Key ideas: Voluntary migration is driven by personal choice, mainly economic opportunity. Forced migration is driven by persecution, conflict, or disaster. Over 100 million people are currently forcibly displaced worldwide. Historical forced migrations (slave trade, Trail of Tears, Partition of India) continue to shape present-day geographies.

2.8 Effects of Migration

Migration affects the origin (sending) region, the destination (receiving) region, and the migrants themselves. The effects can be economic, social, cultural, political, and environmental, and they can be positive, negative, or both.

For the origin country, emigration can ease population pressure and unemployment. Remittances, the money migrants send back to their families, are a major economic lifeline for many developing countries. Globally, remittances exceed $600 billion a year. For many countries they are the largest source of foreign income, bigger than foreign aid. But emigration can also cause "brain drain," the loss of the most educated and skilled workers, which shrinks the origin country's human capital (its people's skills and knowledge) and economic potential.

For the destination country, immigration provides labor, often for jobs that native-born workers are unwilling to do. It also brings cultural diversity, adds to innovation and entrepreneurship, and can help offset aging populations and shrinking workforces. Immigration can also create social tensions, though: competition for jobs and housing, cultural misunderstandings, anti-immigrant sentiment, and debates about national identity.

For migrants themselves, moving can bring economic improvement, more freedom, and better opportunities for their children. It can also mean exploitation, family separation, loss of cultural identity, discrimination, and legal vulnerability, especially for undocumented migrants. Chain migration happens when migrants from one community follow earlier migrants to a specific destination. It creates ethnic enclaves that provide social support but can also become places of economic marginalization.

  Key ideas: Migration affects both origin and destination regions in economic, social, and cultural ways. Remittances are an economic lifeline for developing countries. Brain drain depletes human capital in origin countries. Immigration provides labor and diversity but can create social tensions, and migrants face both opportunities and vulnerabilities.

2.9 Consequences of Population Distribution and Migration Patterns

Over time, where people live and how they move add up to consequences that shape the built landscape, economies, cultures, and politics. Urbanization, the growing concentration of population in cities, is one of the biggest. For the first time in history, more than half of the world's population lives in urban areas. That share keeps growing, especially in developing countries where rural-to-urban migration is rapid.

Uneven population distribution creates geographic inequality. Megacities, cities with populations over 10 million, concentrate economic activity, political power, and cultural influence. They also face congestion, pollution, inadequate housing (particularly in informal settlements or "slums"), and overstretched infrastructure. Meanwhile, rural areas in many countries are losing population as young people leave for urban opportunities, which leaves behind aging populations, labor shortages, and declining services.

Migration patterns produce distinctive cultural landscapes. Ethnic neighborhoods in receiving cities, such as Chinatowns, Little Italys, and Korean neighborhoods, grow out of chain migration and community building. They preserve cultural practices, languages, and cuisines, and they also act as economic incubators and support networks for new arrivals. Over time, assimilation and gentrification can transform these neighborhoods.

At the national and international level, migration patterns shape politics. Immigration policy is one of the most contentious issues in many countries, with debates over border control, refugee admission, citizenship, and national identity. Where immigrant populations are concentrated in specific cities and regions, they influence elections, public services, and cultural production.

  Key ideas: Urbanization is a major consequence of population distribution and migration. Megacities concentrate opportunity but also face congestion, pollution, and housing problems. Rural depopulation leaves aging populations and declining services. Migration creates distinctive cultural landscapes and shapes political debates about identity and belonging.

Unit 3 – Cultural Geography

3.1 Introduction to Culture

In geography, culture means the shared practices, beliefs, values, traditions, and material objects that make up a group's way of life. Geographers care about culture because it shows up in space: in the cultural landscapes people create, the places they give meaning to, and the ways cultural practices differ from one area to another.

The split between folk culture and popular culture is a foundational idea. Folk culture is the practices of small, homogeneous (alike), usually rural groups. These practices are handed down through tradition and closely tied to specific places, as with traditional farming techniques, local dialects, folk music, and handcrafted goods. Popular culture is the practices of large, heterogeneous (mixed) groups, often spread through mass media and business. Global fast food chains, pop music, fashion trends, and social media are examples.

Folk cultures tend to stay tied to one place and change slowly. Their distribution is often clustered in the particular regions where a specific ethnic or language group lives. Popular culture tends to be placeless: you can find it everywhere, and it changes quickly. Globalization, mass media, and consumer capitalism spread it. The line between the two is not absolute, though. Folk traditions can become popular (country music grew out of Appalachian folk traditions), and popular culture often gets adapted to local settings.

A cultural trait is a single element of a culture, such as a specific food, a greeting custom, or a religious practice. A cultural complex is a group of related traits. Irrigated rice farming, for example, is a trait that belongs to a larger complex including specific land-use patterns, eating habits, and settlement forms. A cultural region is an area unified by one or more cultural traits or complexes.

  Key ideas: Culture is expressed in space through cultural landscapes, places, and practices. Folk culture is traditional, tied to one place, and slow to change, while popular culture is global, commercial, and fast-changing. Cultural traits combine into complexes and define cultural regions. The folk/popular distinction is foundational but not absolute.

3.2 Cultural Landscapes

The cultural landscape is the visible mark that human activity leaves on the natural landscape. Geographer Carl Sauer introduced the concept in 1925. It includes everything people have built, changed, or arranged in the physical environment: buildings, roads, fields, fences, monuments, religious structures, signs, gardens, and street layouts. Sauer put it this way: culture is the agent, the natural area is the medium, and the cultural landscape is the result.

Reading a cultural landscape gives clues about the values, history, economy, and social organization of the people who made it. Large-lot suburban homes with lawns reflect American values of private property and consumption. Terraced rice paddies show intensive farming adapted to mountainous terrain. Minarets and mosques reflect Islamic cultural influence, and abandoned factories reflect deindustrialization and economic change.

Cultural landscapes can also show layers of history. Many places carry the marks of several cultures over time, such as Roman ruins beneath medieval churches beneath modern commercial buildings. Sequent occupance is the term for this: successive groups leave their marks on the same place, each one changing what came before.

Placelessness is the loss of a place's distinctive local character as globalization spreads the same standardized commercial development, with the same chain restaurants, shopping malls, and gas stations, across very different places. Geographers and preservationists often argue for keeping distinctive cultural landscapes that reflect local identity and heritage. UNESCO World Heritage Sites are one effort to protect places of outstanding cultural or natural value.

  Key ideas: The cultural landscape is the visible imprint of human activity on the natural environment (Sauer). Landscapes give clues about values, history, economy, and social organization. Sequent occupance describes how successive cultures layer their marks on a place. Placelessness results from the global spread of standardized commercial development.

3.3 Cultural Diffusion: Types and Processes

Cultural diffusion is the spread of cultural traits, ideas, innovations, and practices from one place to another. It is one of the most important processes in human geography, because it explains how cultures change, interact, and influence each other over space and time.

Relocation diffusion happens when people physically move and carry their cultural practices with them. Immigration is the main way this happens: immigrants who settle in a new country bring their language, religion, food, music, and customs. Chain migration, where migrants from one community follow earlier migrants to a specific destination, creates ethnic enclaves that preserve cultural practices.

Expansion diffusion happens when a cultural trait spreads outward from its origin while staying strong at the source. It takes three main forms. Hierarchical diffusion spreads from larger, more important places (or more prominent people) to smaller, less important ones. Fashion trends often spread this way, from major cities to smaller towns. Contagious diffusion spreads through direct contact, like a disease, so a catchy song or viral video moves from person to person regardless of social status. Stimulus diffusion happens when the underlying idea of a trait spreads but its specific form changes. Fast food is an example: the idea spread around the world, with local versions like McDonald's serving rice dishes in Asia.

Barriers to diffusion can be physical (oceans, mountains, deserts), cultural (language, religion, tradition), economic (cost, poverty), or political (borders, censorship, trade restrictions). Absorbing barriers stop diffusion completely, while permeable barriers slow it down or change it.

  Key ideas: Cultural diffusion is the spread of traits from one place to another. Relocation diffusion happens through migration, while expansion diffusion spreads outward from the source. Expansion diffusion includes hierarchical (place-based), contagious (proximity-based), and stimulus (concept-based) subtypes. Physical, cultural, economic, and political barriers can slow or stop diffusion.

3.4 Diffusion of Religion and Language

Religion and language are among the most important cultural traits geographers study, because they shape cultural landscapes, identities, political boundaries, and daily life. Both spread through diffusion, but in quite different patterns.

The world's major religions fall into two groups. Universalizing religions actively seek converts; Christianity, Islam, and Buddhism are examples. Ethnic religions are tied to a particular ethnic group or place, like Judaism, Hinduism, and Shintoism. Universalizing religions spread through relocation diffusion, carried by missionaries, conquerors, and migrants. They also spread through expansion diffusion: hierarchical when rulers adopted a faith, and contagious through person-to-person conversion. Christianity spread through Roman imperial adoption and later through European colonialism. Islam spread through trade, conquest, and missionary activity across the Middle East, North Africa, Central Asia, South Asia, and Southeast Asia. Buddhism spread from India with monks and missionaries along trade routes to East and Southeast Asia.

A language family is a group of languages that share a common ancestor. The Indo-European family, which includes English, Spanish, Hindi, Russian, and many others, is the largest, spoken by nearly half the world's population. Languages spread through migration, conquest, trade, and colonialism. English became a global lingua franca, a common language between speakers of different languages, through British imperialism and American economic and cultural dominance. Colonial languages (English, French, Spanish, Portuguese) are still official languages in many former colonies.

Language can also be a source of cultural conflict. Multilingual states handle their linguistic diversity in different ways: official bilingualism (Canada), linguistic federalism (India, Switzerland), or promoting one national language. Language death, when a language goes extinct because its last speakers die, is speeding up with globalization. By one estimate, a language disappears every two weeks.

  Key ideas: Universalizing religions spread actively (Christianity, Islam, Buddhism), while ethnic religions are tied to specific groups (Hinduism, Judaism). Religions spread through relocation, hierarchical, and contagious diffusion. The Indo-European language family is the world's largest. Globalization speeds up language death as dominant languages push out smaller ones.

3.5 Effects of Cultural Diffusion

Cultural diffusion can lead to enrichment and innovation, or to conflict and cultural loss. The outcome depends on the power balance between the cultures in contact, how much choice is involved, and which traits are spreading.

Acculturation happens when a less powerful culture adopts traits from a dominant culture while keeping some of its own traditions. Many immigrant communities go through acculturation: they adopt the language and customs of their new country but keep their cuisine, religion, and family structures. Assimilation goes further. The less powerful culture is fully absorbed into the dominant one and loses most or all of its distinctive traits. Forced assimilation is a form of cultural violence, as when colonial powers banned indigenous languages or forced indigenous children into boarding schools.

Syncretism happens when different cultural traditions blend into something new. Religious syncretism is common where several traditions exist side by side. Santería, for example, blends West African Yoruba religion with Catholicism in the Caribbean. In Latin America, indigenous sacred sites have been folded into Catholic pilgrimage practices.

Cultural imperialism is the dominance of one culture's values, products, and practices over others, often through economic and media power. Critics argue that the global spread of American popular culture (Hollywood, fast food, social media) is a form of cultural imperialism that threatens local traditions and identities. Defenders argue that globalization allows cultural exchange and that local cultures are more resilient than critics suggest. In their view, people adapt global products to local contexts (glocalization) instead of passively accepting them.

The changing cultural landscape is one of the most visible effects of diffusion. As new cultural traits spread, new religious buildings appear, signs switch languages, farming practices shift, and commercial strips look more and more alike.

  Key ideas: Acculturation means adopting dominant cultural traits while keeping some original ones, and assimilation is more complete. Syncretism blends cultural traditions to create something new (e.g., Santería). Cultural imperialism is the dominance of one culture's values through economic and media power. Glocalization describes how global products are adapted to local contexts.

3.6 Cultural Patterns: Ethnicity, Gender, and Sexuality

No society has just one uniform culture. Ethnicity, gender, class, religion, and other identities cut across every society and create different cultural patterns within and across regions.

Ethnicity is a cultural identity based on shared ancestry, language, religion, or customs. Ethnic identities are socially constructed. They are not fixed biological categories; they change over time through interaction, conflict, and the drawing of group boundaries. When ethnic groups concentrate in specific areas, they create distinctive neighborhoods, regions, or territories with their own languages, foods, architectural styles, and social institutions.

Gender roles are the expectations a culture sets for the behavior, responsibilities, and opportunities of men and women. They vary across cultures and have clear spatial patterns. In many traditional societies, women's mobility is restricted, their access to education and jobs is limited, and their roles center on household responsibilities. Development organizations have found that improving women's status is one of the most effective ways to reduce poverty, improve health, and promote economic growth.

The geography of gender and sexuality overlaps with other cultural patterns. LGBTQ+ rights vary enormously around the world. Same-sex marriage is legal in many Western countries, while homosexuality is criminalized in much of Africa, the Middle East, and parts of Asia. These spatial patterns reflect differences in religious traditions, legal systems left over from colonial rule, and cultural values about gender and family.

A cultural taboo is a practice that a culture forbids or strongly discourages. Cultural norms are unwritten rules about acceptable behavior. Taboos and norms both regulate social life in ways that vary widely across space. Something polite, appropriate, or moral in one culture may be offensive or illegal in another.

  Key ideas: Ethnicity, gender, class, and other identities cut across every culture. Ethnic identities are socially constructed and produce distinctive cultural landscapes. Gender roles vary across cultures and are linked to development outcomes. LGBTQ+ rights and cultural norms about gender and sexuality vary enormously across space.

3.7 Contemporary Causes of Cultural Diffusion

Today, cultural diffusion is driven mainly by globalization, mass media, the internet, international migration, tourism, and transnational corporations. These forces have made cultural exchange faster and wider-reaching than ever before.

The internet and social media are perhaps the most powerful drivers of cultural diffusion today. They allow instant communication across vast distances, expose users to content from many cultures, and let individuals and communities take part in making global culture. Viral content (memes, songs, dances, political movements) can spread around the world in hours or days through social media platforms. This is mostly contagious diffusion, since content passes from user to user through networks of connections.

Transnational corporations (TNCs), companies that operate in many countries, spread popular culture through their products and marketing. Companies like McDonald's, Coca-Cola, Apple, and Netflix operate in dozens of countries and shape what people buy, eat, and watch worldwide. TNCs often spread hierarchically. They enter the largest, wealthiest markets first and then expand to smaller ones.

International migration is still a main driver of relocation diffusion. Migrants carry their languages, religions, cuisines, and customs to new countries, which makes receiving societies more culturally diverse. Diaspora communities, groups living away from their homeland, stay connected to it through communication technology, travel, and remittances, building cultural networks that span several countries.

Tourism exposes travelers and host communities to each other's cultures, though the exchange is often unequal. Cultural commodification means packaging cultural practices for tourists to consume. It can keep traditions alive economically, but it can also distort and trivialize them.

  Key ideas: Globalization, the internet, migration, TNCs, and tourism are the main drivers of cultural diffusion today. Social media allows near-instant contagious diffusion worldwide. TNCs spread popular culture hierarchically from major markets outward. Diaspora communities create transnational cultural networks. Tourism can both preserve and commodify cultural practices.

3.8 Cultural Conflict and the Tension Between Global and Local

As cultural diffusion speeds up, the tension grows between global homogenization (cultures becoming more alike) and the effort to preserve local cultures. Popular culture, often from the United States and other Western countries, spreads globally through media, business, and technology. Many communities feel that their traditional cultures, languages, and identities are under threat.

These tensions show up in several ways. Linguistic preservation movements try to revive endangered languages through education, media, and official recognition; examples include Welsh in the United Kingdom, Māori in New Zealand, and Hawaiian in the United States. Religious resistance to secular cultural trends can grow stronger, and fundamentalist movements in various religions are partly a reaction against what they see as cultural dilution by globalization. Political movements may try to protect cultural heritage through policy. France's regulation of English loanwords and quotas for domestic content in media broadcasting are examples.

Cultural relativism is the idea that each culture should be understood and judged on its own terms, not by the standards of another culture. The idea is important but also contested. Critics argue it can be used to justify practices that violate human rights, such as forced marriage, honor violence, or female genital cutting. That leaves hard philosophical and policy choices where cultural respect and universal rights collide.

Globalization does not produce one uniform world culture. It creates complex patterns of cultural convergence (cultures growing more similar) and divergence (cultures growing more different as local communities reassert their identities against global forces). The result is a complex mosaic of global and local cultural elements, which some scholars call a "global cultural landscape" of hybrid, layered, and contested identities.

  Key ideas: Globalization creates tension between cultural homogenization and local preservation. Linguistic preservation, religious fundamentalism, and cultural protectionism are responses to globalization. Cultural relativism is important but contested when practices violate human rights. Globalization produces complex patterns of both convergence and divergence instead of simple homogeneity.

Unit 4 – Political Geography

4.1 Introduction to Political Geography

Political geography studies how political power and structures are spread across space and how geography shapes politics. The basic unit of political organization today is the state. A state is a politically organized territory with a permanent population, a defined boundary, and a government with sovereignty, meaning supreme authority within its borders, that other states recognize. A nation-state is a state whose territory matches the homeland of a single nation (a group sharing a cultural identity). It is an ideal that few countries fully reach.

The modern state system began in Europe with the Peace of Westphalia (1648), which set the principle that each state has exclusive sovereignty within its borders. Colonialism and then decolonization spread this system around the world. Its assumptions of fixed borders, territorial sovereignty, and a uniform nation are now increasingly challenged by globalization, transnational organizations, migration, and stateless nations.

Four terms are worth keeping straight. Territory is the space over which a state exercises sovereignty. Sovereignty is the right to govern without outside interference. A nation is a cultural group sharing identity, language, and history, while a state is a political unit with recognized borders and a government. Nations and states do not always line up. A nation can be divided across several states, like the Kurds across Turkey, Iraq, Iran, and Syria. A state can also contain several nations: the United Kingdom includes English, Scottish, Welsh, and Northern Irish identities.

  Key ideas: Political geography studies how political power is organized in space. The state is the basic unit, defined by territory, sovereignty, population, and a recognized government. The modern state system grew out of the Peace of Westphalia (1648). Nations and states do not always line up, so nations may be stateless and states may be multinational.

4.2 Political Boundaries: Types and Functions

Political boundaries are the lines that mark the limits of a state's territorial sovereignty. People create them, and they may or may not follow physical features, cultural divisions, or historical patterns. How boundaries are drawn, maintained, and disputed is central to political geography.

One way to classify boundaries is by when they were drawn relative to settlement. Antecedent boundaries were drawn before many people settled the area, like the U.S.-Canada border along the 49th parallel. Subsequent boundaries were drawn after settlement, often along cultural or ethnic divisions, like the boundary between India and Pakistan. Superimposed boundaries were forced on an area by outside powers with no regard for existing cultural patterns, like many colonial boundaries in Africa. Relic boundaries no longer have an official political function but still influence the cultural landscape, like the boundary between North and South Vietnam.

Boundaries can also be classified by their physical form. Geometric boundaries follow straight lines (like much of the U.S.-Canada border), while physical boundaries follow natural features like rivers, mountains, or lakes. Neither type is automatically better, since rivers can shift course and straight lines can split communities.

Boundary disputes come in four types. Definitional disputes are disagreements over the legal wording that describes the boundary. Locational disputes are about where the boundary should sit on the ground. Operational disputes are about how the boundary should be run, such as border crossing procedures and resource rights. Allocational disputes are about sharing resources that cross borders, like water, oil, and fishing rights.

  Key ideas: Political boundaries define state sovereignty and can be antecedent, subsequent, superimposed, or relic. Boundaries can follow geometric lines or physical features like rivers and mountains. Boundary disputes include definitional, locational, operational, and allocational types. Many colonial boundaries were superimposed without regard to existing cultural divisions.

4.3 Forms of Governance and Devolution

States divide power between central and regional authorities in different ways. Unitary states concentrate power at the national level. Their subnational units, such as provinces or departments, have only the powers the central government hands down to them. France is a classic unitary state: the national government in Paris controls education, law enforcement, and most other functions in the same way across the whole country. Federal states use a constitution to divide power between a central government and regional units (states, provinces, cantons), each with its own areas of authority. The United States, Germany, Brazil, and Nigeria are federal states. Federal systems often appear in large countries or in countries with a lot of ethnic, linguistic, or religious diversity.

Devolution is the transfer of power from a central government to regional or local governments. It can happen in both unitary and federal states, often in response to ethnic, linguistic, or regional groups demanding more autonomy (self-rule). Examples include the powers handed to Scotland, Wales, and Northern Ireland in the United Kingdom, and Spain's creation of autonomous communities, including Catalonia and the Basque Country.

Several factors drive devolution. Ethnonationalist movements, in which an ethnic group seeks its own self-government, are one (Catalonia, Scotland, Quebec). Others are economic gaps between regions (northern Italy vs. southern Italy), geographic remoteness (outlying regions far from the capital), and historical grievances. Devolution can hold a state together by giving minority groups a stake in governing. It can also be a step toward outright secession, as the 2017 Catalan independence referendum showed.

  Key ideas: Unitary states concentrate power centrally, while federal states divide it through a constitution. Devolution transfers power from central to regional governments. Ethnonationalism, economic disparities, geographic remoteness, and historical grievances drive devolution. Devolution can strengthen a state's unity or become a step toward secession.

4.4 Centripetal and Centrifugal Forces

Centripetal forces are factors that unify and strengthen a state, and centrifugal forces are factors that divide and weaken it. The balance between the two determines how stable and unified a state is.

Centripetal forces include a shared national identity, a common language, an effective and fair government, and economic prosperity and opportunity. National symbols and rituals (flags, anthems, holidays), a unifying ideology or religion, and outside threats that bring people together also count. States work to build centripetal forces through education (national curricula, language policies), media, public holidays, military service, and infrastructure such as transportation networks that connect regions.

Centrifugal forces include ethnic and linguistic diversity, economic inequality between regions, political corruption and incompetence, religious divisions, geographic obstacles that isolate regions, and historical grievances between groups. At their extreme, any of these can threaten a state's survival, leading to ethnic conflict, secessionist movements, civil war, or state failure.

Most states feel both forces at once. The United States has strong centripetal forces, including national identity, English as a common language, and constitutional ideals. It also faces centrifugal forces such as racial inequality, political polarization, and regional cultural differences. Belgium is split between French-speaking Wallonia and Dutch-speaking Flanders, and the division threatens the state's unity. Nigeria faces centrifugal pressures from ethnic and religious diversity, economic inequality, and the Boko Haram insurgency.

  Key ideas: Centripetal forces unify states (shared identity, language, prosperity, outside threats). Centrifugal forces divide states (ethnic diversity, inequality, corruption, secessionism). States build centripetal forces through education, symbols, and infrastructure. The balance between centripetal and centrifugal forces determines how stable a state is.

4.5 Challenges to Sovereignty and Supranational Organizations

State sovereignty, the principle that each state has supreme authority within its borders, faces growing challenges today. Supranational organizations, international law, globalization, and non-state actors all limit or complicate how states use their power.

A supranational organization is a group of member states that voluntarily give up some sovereignty to reach shared goals. The European Union is the most advanced example. EU members accept common trade policies and regulations, a shared currency (in the eurozone), free movement of people (Schengen), and the authority of the European Court of Justice. Other examples include the United Nations, the African Union, NATO, ASEAN, and the World Trade Organization.

Globalization challenges sovereignty by making economies depend on each other, which limits what any one state can do. International financial markets, multinational corporations, and global supply chains all restrict governments' economic choices. Climate change, pandemics, migration, and terrorism are transnational problems that no state can solve alone. Solving them takes international cooperation, and that cooperation limits each state's independence.

Non-state actors are groups that hold power without being governments. They include multinational corporations, NGOs, terrorist organizations, and criminal networks, and their power crosses and sometimes undermines state borders. Stateless nations, like the Kurds or Palestinians, challenge the assumption that nations and states match up. Failed states, where the government cannot effectively control its own territory, are the extreme breakdown of sovereignty; Somalia in the 1990s is an example.

  Key ideas: Supranational organizations, globalization, and non-state actors all challenge state sovereignty. The EU is the most advanced supranational organization, and its members give up a large share of their sovereignty. Globalization creates interdependencies that limit state autonomy. Failed states and stateless nations challenge the assumptions of the modern state system.

Unit 5 – Agriculture and Rural Land-Use

5.1 Origins and Diffusion of Agriculture

Agriculture is the deliberate growing of plants and raising of domesticated animals for human use, and it changed human life more than any other development in history. Before agriculture, all humans were hunter-gatherers who lived in small, mobile bands and depended on wild food. The shift to agriculture is called the Neolithic Revolution, and it began roughly 10,000–12,000 years ago. It made possible permanent settlements, population growth, social stratification (division into higher and lower classes), and complex civilizations.

Agriculture was invented independently in several hearths, or regions of origin. The Fertile Crescent (modern-day Iraq, Syria, and Turkey) was one of the earliest, producing wheat, barley, lentils, sheep, goats, and cattle. Other independent hearths include the Yangtze and Yellow River valleys in China (rice and millet), Mesoamerica (maize, beans, squash), the Andes (potatoes, llamas), West Africa (sorghum, yams), and Southeast Asia (taro, bananas). From these hearths, agriculture spread in two ways. Migrants carried crops and techniques with them (relocation diffusion), and neighboring peoples adopted farming practices (expansion diffusion).

The First Agricultural Revolution, another name for the Neolithic Revolution, allowed sedentary life, meaning people stayed in one place, and led to villages, towns, and eventually cities. Because farms produced surplus food, some people no longer had to farm and could specialize in crafts, trade, government, and religion. Agriculture also brought new problems. People who relied on a few staple crops suffered nutritional deficiencies. Living close to animals and in dense settlements spread disease. Deforestation and soil depletion damaged the environment, and social inequality grew as some people gathered more land and resources than others.

  Key ideas: Agriculture began independently in several hearths roughly 10,000–12,000 years ago. The Fertile Crescent, East Asia, Mesoamerica, and other regions each developed crop growing and animal domestication on their own. Agriculture allowed permanent settlement, population growth, and complex civilizations. It also brought new problems, including disease, environmental damage, and social inequality.

5.2 Agricultural Revolutions and the Von Thünen Model

The Second Agricultural Revolution (roughly 1700–1900) went hand in hand with the Industrial Revolution and helped make it possible. Crop rotation, selective breeding, mechanization (the seed drill, the mechanical reaper), and the enclosure of common lands greatly increased food production, so fewer farmers could feed growing city populations. Enclosure, the fencing off of shared land for private use, pushed rural laborers off the land, and they became the workforce for industrialization. The Second Agricultural Revolution was mainly a European and North American event.

The Third Agricultural Revolution, also called the Green Revolution, came in the mid-twentieth century. It brought high-yield crop varieties, chemical fertilizers, pesticides, and irrigation techniques to developing countries, and food production rose sharply in Asia and Latin America. Norman Borlaug, the "father of the Green Revolution," developed disease-resistant wheat varieties that helped prevent famine in India and Pakistan. The Green Revolution saved millions from starvation. But it also made farmers depend on expensive inputs like fertilizer, reduced crop diversity, and damaged the environment through soil degradation, water pollution, and pesticide resistance. It often helped large landowners more than small farmers.

The Von Thünen model (1826) explains how farming is arranged around a central market. Von Thünen argued that the kind of farming done at any location depends on its distance from the market, because transportation costs differ by product. Goods that spoil quickly or cost a lot to ship per unit, like dairy and market gardening (growing vegetables and fruit for sale), are produced closest to the city. Grain farming and livestock ranching are less perishable and cheaper to transport per unit, so they take the more distant zones. The model assumes a flat, featureless plain with a single market, which rarely exists in reality. Still, its main insight about how transportation costs shape agricultural land use holds up.

  Key ideas: The Second Agricultural Revolution mechanized farming and made industrialization possible. The Green Revolution greatly increased yields in developing countries but caused environmental and social problems. The Von Thünen model explains farming patterns by distance from market and transportation costs. Each agricultural revolution increased production but also created new problems.

5.3 Agricultural Practices, Sustainability, and Women in Agriculture

Farming today ranges from subsistence farming, which grows food mainly for the farmer's own family, to commercial agriculture, which grows food for sale in markets. Subsistence agriculture includes shifting cultivation (slash-and-burn), pastoral nomadism (herding livestock across grazing lands), and intensive subsistence farming, such as wet rice cultivation in South and Southeast Asia. Commercial agriculture includes mixed crop and livestock farming, dairy farming, grain farming, livestock ranching, Mediterranean agriculture, and plantation agriculture.

Agribusiness increasingly dominates the global food system. The term means large-scale, capital-intensive, high-tech farming tied together with processing, distribution, and retail corporations. Agribusiness has greatly increased food production and lowered prices in developed countries. It has also added to environmental problems (deforestation, biodiversity loss, greenhouse gas emissions, water pollution) and health concerns (overuse of antibiotics, pesticide residues), and it has pushed out small farmers.

Sustainability has become a critical concern in agriculture. Sustainable agriculture tries to meet today's food needs without harming future production or the environment. Its practices include organic farming, integrated pest management, conservation tillage, crop diversification, agroforestry (growing trees alongside crops or livestock), and local food systems. Food security means that all people have reliable access to enough safe, nutritious food. It remains a major global challenge, with roughly 800 million people still facing chronic hunger.

Women do much of the world's farming, producing an estimated 60–80 percent of food in developing countries. Yet they often have limited access to land ownership, credit, technology, education, and extension services, the programs that teach farmers new methods. Improving women's access to agricultural resources is one of the most effective ways to increase food production and reduce poverty.

  Key ideas: Agriculture ranges from subsistence to commercial, and agribusiness dominates the global food system. Sustainable agriculture tries to balance production with environmental health and long-term viability. Food security is still a global challenge, with hundreds of millions facing chronic hunger. Women produce most food in developing countries but face barriers to land ownership and resources.

Unit 6 – Cities and Urban Land-Use

6.1 Urbanization: Origins, Patterns, and Globalization

Urbanization, the growing concentration of population in cities, is one of the defining trends of human history. The first cities appeared roughly 5,000–6,000 years ago in Mesopotamia, the Nile Valley, the Indus Valley, and China. Agricultural surpluses made them possible, because extra food could support people who did not farm. Even so, most humans stayed rural until the Industrial Revolution. Then mechanized production and the demand for factory workers drove massive rural-to-urban migration.

Today, more than 55 percent of the world's population lives in urban areas, and that share is projected to reach 68 percent by 2050. Urbanization looks different in developed and developing countries. In developed countries, it happened gradually over 200 years and has mostly leveled off, with most of them 75–90 percent urbanized. In developing countries, urbanization is happening much faster, driven by rural-to-urban migration and natural population increase (more births than deaths). It often outruns cities' ability to provide housing, infrastructure, and services.

Megacities, with populations over 10 million, are a development of the late twentieth and twenty-first centuries. Most of the world's megacities are now in developing countries; they include Tokyo, Delhi, Shanghai, São Paulo, Mumbai, and Lagos. World cities (or global cities) like New York, London, and Tokyo act as command centers of the global economy. They concentrate financial services, corporate headquarters, media, and cultural production.

Suburbanization is the growth of residential areas on the edges of cities. It has been a dominant trend in developed countries, especially the United States, driven by car ownership, highway construction, and a preference for lower-density living. Counterurbanization, people moving from cities to rural areas or small towns, has also happened in some developed countries, made possible by telecommunications and quality-of-life preferences.

  Key ideas: Urbanization is the concentration of population in cities, and it has sped up since the Industrial Revolution. Over 55 percent of the world's population now lives in urban areas. Most megacities are in developing countries, while world cities act as command centers of the global economy. Suburbanization and counterurbanization are trends in developed countries.

6.2 Urban Structure Models

Geographers have built several models of the internal structure of cities, meaning how land uses such as residential, commercial, and industrial are arranged within an urban area. The models simplify complex realities, but they help identify patterns and generate hypotheses.

The concentric zone model (Ernest Burgess, 1925) pictures a city as rings spreading out from a central business district (CBD). The CBD has the highest land values and the most intense commercial activity. Around it come a zone of transition (mixed use, often run-down), then working-class housing, middle-class housing, and commuter suburbs. Burgess based the model on Chicago in the 1920s, and it assumes the city grows outward from the center.

The sector model (Homer Hoyt, 1939) changes the concentric zone model. It argues that similar land uses stretch outward from the CBD in wedge-shaped sectors along transportation routes. High-income housing might follow a major boulevard or rail line, while industry stretches along a river or railroad. The main point is that transportation corridors shape urban structure.

The multiple nuclei model (Harris and Ullman, 1945) argues that cities grow around several centers of activity instead of a single CBD. Different activities cluster around different nodes, such as a university, an airport, a shopping mall, or an industrial park. Each node attracts land uses that fit with it and pushes away ones that don't.

The galactic city model (or edge city model) describes urban areas built around the car, where economic activity is spread across suburban nodes connected by highways rather than concentrated in a traditional downtown. Edge cities like Tysons Corner, Virginia, have large amounts of commercial and office space but lack the density and walkability of traditional downtowns. Latin American, African, and Southeast Asian city models adjust these frameworks to fit different historical and cultural contexts.

  Key ideas: The concentric zone model describes cities as rings expanding from a central business district. In the sector model, transportation corridors shape wedge-shaped land-use patterns. The multiple nuclei model describes cities with several centers of activity. The galactic city model describes car-dependent urban areas with scattered suburban nodes.

6.3 Urban Challenges and Sustainability

Cities face connected challenges in housing, transportation, infrastructure, environmental quality, social equity, and governance. In developing countries, rapid urbanization often outruns governments' ability to provide enough housing, water, sanitation, electricity, and transportation. The result is the growth of informal settlements (slums, favelas, shantytowns), where residents lack legal tenure (the legal right to their land or home), basic services, and protection from hazards. An estimated one billion people worldwide live in informal settlements.

Cities in developed countries face different but related problems. Sprawl is the outward spread of low-density suburban development. It eats up farmland, increases car dependence, adds to air pollution, and separates land uses from each other. Gentrification happens when wealthier residents move into run-down urban neighborhoods and renovate them. It can improve housing quality and raise tax revenue, but it also displaces long-time, lower-income residents and breaks up community networks.

Environmental challenges include air and water pollution, waste management, and vulnerability to climate change (sea-level rise, flooding, heat waves). There is also the urban heat island effect: cities are warmer than the areas around them because of concrete, asphalt, and waste heat. Transportation is a critical issue as well. Car-dependent cities face congestion and pollution, while cities with effective public transit can reduce both.

Urban sustainability aims for cities that are environmentally responsible, socially fair, and economically viable. Strategies include smart growth (compact, mixed-use development built around transit), green building, urban agriculture, renewable energy, waste reduction, and participatory governance that brings marginalized communities into planning decisions. The UN Sustainable Development Goal 11 calls for making cities "inclusive, safe, resilient, and sustainable."

  Key ideas: Rapid urbanization in developing countries creates informal settlements that lack basic services. Sprawl and gentrification are major challenges in developed-country cities. Environmental challenges include pollution, heat islands, and climate vulnerability. Urban sustainability requires compact development, public transit, green infrastructure, and inclusive governance.

Unit 7 – Industrial and Economic Development

7.1 The Industrial Revolution and Economic Sectors

Industrialization changed economic activity by shifting production from farming and handicrafts to machine-based manufacturing. Geographers sort economic activity into sectors. Primary sector activities take raw materials from the earth: agriculture, mining, fishing, forestry. Secondary sector activities turn raw materials into finished products, as in manufacturing and construction. Tertiary sector activities provide services such as retail, education, healthcare, and transportation. Quaternary sector activities are knowledge-based work like research, information technology, and consulting. Quinary sector activities involve the highest levels of decision-making: government leadership, scientific research, top-level management.

As countries develop, their economies shift away from the primary sector toward the secondary sector and eventually the tertiary and quaternary sectors. Developing countries usually have large primary sectors, with many people working in agriculture, while developed countries are dominated by tertiary and quaternary sectors. The percentage of workers in each sector is an important indicator of a country's level of development.

Industrialization spread unevenly across the world. Europe and North America industrialized first, followed by Japan, then the "Asian Tigers" (South Korea, Taiwan, Singapore, Hong Kong), and more recently China, India, and other emerging economies. Many countries in sub-Saharan Africa and parts of South and Southeast Asia are still mainly agricultural. Growing service sectors, especially through mobile technology and outsourcing, are changing this pattern.

  Key ideas: Economic activity is sorted into primary (extraction), secondary (manufacturing), tertiary (services), and quaternary (knowledge) sectors. Development goes along with a shift from primary to tertiary and quaternary sectors. Industrialization spread unevenly: Europe and North America led, and many developing regions still depend on primary sectors. The mix of sectors is an important indicator of economic development.

7.2 Measures of Development and Development Theories

Development has many dimensions, so geographers measure it with many indicators. Gross Domestic Product (GDP) per capita, the value of goods and services produced per person, is the most common economic measure. It misses inequality, quality of life, and environmental sustainability, though. The United Nations created the Human Development Index (HDI) to combine three things into one score: life expectancy, education (mean and expected years of schooling), and income (Gross National Income per capita). Other measures add more dimensions, including the Gender Inequality Index (GII), the Gini coefficient (a measure of income inequality), literacy rates, infant mortality rates, and access to clean water and sanitation.

Several theories try to explain why some countries are developed and others are not. Modernization theory comes from Walt Rostow's Stages of Economic Growth (1960). It argues that all countries move through predictable stages, from traditional society to mass consumption, driven by investment, technology transfer, and cultural change. Critics say the theory assumes there is only one path to development and ignores the effects of colonialism and global power structures.

Dependency theory was developed by Latin American scholars like Raúl Prebisch and Andre Gunder Frank. It argues that underdevelopment is not a natural stage. Instead, it is a condition created by the exploitative relationship between wealthy "core" countries and poor "peripheral" countries. Colonial and neocolonial relationships pull wealth out of the periphery for the benefit of the core, which keeps inequality in place.

World systems theory (Immanuel Wallerstein) expands dependency theory into a three-tier model. Core countries are wealthy, industrialized, and dominant. Periphery countries are poor, dependent, and exploited. Semi-periphery countries fall in between and have features of both. The semi-periphery includes countries like Brazil, Mexico, and China that are industrializing but still depend on core economies.

  Key ideas: Development is measured by GDP per capita, HDI, GII, and other indicators. Rostow's modernization theory proposes universal stages of growth but is criticized for ignoring colonialism. Dependency theory argues that exploitative core-periphery relationships cause underdevelopment. World systems theory adds a semi-periphery category to the core-periphery model.

7.3 Trade, Sustainable Development, and Women in Development

International trade is one of the main ways countries interact economically. Neoliberal economic policies, pushed by institutions like the World Bank, IMF, and WTO, favor free trade, open markets, privatization (selling state-owned businesses to private owners), and less government involvement as paths to development. Structural adjustment programs (SAPs) have required developing countries to adopt these policies as a condition for receiving loans or aid.

The effects of neoliberal policies are debated. Supporters argue that open trade, market competition, and foreign investment drive economic growth and lift people out of poverty. Critics argue that free trade helps wealthy countries and corporations far more than others. They say it exposes developing countries to unstable global markets, undercuts local industries that cannot compete with cheap imports, and forces cuts to social programs that protect the most vulnerable.

Fair trade is a movement to improve conditions for producers in developing countries. It guarantees minimum prices, ensures fair labor conditions, and supports community development projects. Fair trade products like coffee, chocolate, and bananas are labeled and marketed as ethically produced, though the movement's overall impact on global poverty is still modest.

Sustainable development means meeting present needs without compromising the ability of future generations to meet theirs. It has become the dominant framework for international development policy. The UN Sustainable Development Goals (SDGs), adopted in 2015, set targets to be reached by 2030: ending poverty, achieving gender equality, ensuring clean water and sanitation, promoting decent work, and taking climate action. Women's empowerment is widely seen as central to development, because investing in women's education, health, and economic participation pays off across all development indicators.

  Key ideas: Neoliberal policies promote free trade and open markets, but their effects on inequality are debated. Fair trade tries to improve conditions for producers in developing countries. Sustainable development balances economic growth with environmental and social goals. Development outcomes depend on women's empowerment.

`


export const HUMAN_GEOGRAPHY_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Human Geography',
  units: parseRawOverview(RAW_HUMAN_GEOGRAPHY),
  features: { latex: false, codeExamples: false },
}

