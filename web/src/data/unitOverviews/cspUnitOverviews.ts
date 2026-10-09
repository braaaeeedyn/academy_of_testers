import type { SubjectUnitOverview } from './types'

export const CSP_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Computer Science Principles',
  features: { latex: false, codeExamples: true, defaultExampleLanguage: 'pseudocode' },
  units: [
    {
      unitNumber: 1,
      title: 'Creative Development',
      subunits: [
        {
          id: '1-1',
          title: 'Algorithms and Creativity',
          summary:
            'An algorithm is a step-by-step process used to solve a problem or complete a task. In programming, algorithms tell the computer exactly what to do and in what order.\n\n' +
            'Algorithms show up everywhere: finding the highest test score, sorting names alphabetically, searching for a word in a file, or calculating an average. Even everyday activities follow algorithms (making coffee, tying shoes).\n\n' +
            'Creativity comes in when you choose how to solve a problem. Several algorithms can work for the same task, but they can differ in speed, simplicity, or clarity. A creative programmer tries different approaches, notices patterns, and improves a solution in rounds: make it work, make it cleaner, make it faster.\n\n' +
            'Big idea: the algorithm gives you the structure, and creativity is how you pick the strategy.',
          keyIdeas: [
            'Algorithms are step-by-step processes that can be expressed in many ways.',
            'Multiple algorithms can solve the same problem with different trade-offs.',
            'Iterative development helps refine solutions over time.',
            'Combining patterns (loop + if, loop + counter) unlocks larger solutions.',
          ],
          exampleCode: `// Find the largest number in a list (scan once)
largest <- list[0]
for each value in list:
    if value > largest:
        largest <- value

// Note: Another approach is to sort first, then take the last value.
// Both work, but scanning once is usually faster than sorting.`,
          exampleLanguage: 'pseudocode',
          exampleExplanation:
            'This pseudocode shows a simple, efficient algorithm: scan the list once and keep track of the largest value. It also shows a common CSP theme: different algorithms can solve the same problem, and some are more efficient than others.',
        },
        {
          id: '1-2',
          title: 'Collaborative Development',
          summary:
            'Most real software is built by teams. Projects are often too large for one person, so programmers divide tasks, share code, review each other’s work, and keep each other informed.\n\n' +
            'Good collaboration needs clear roles (UI, data handling, testing, documentation, core logic). It also needs good communication habits: explaining ideas, reading other people’s code, asking questions, and giving constructive feedback.\n\n' +
            'Code is read more often than it is written, so readable names, short focused functions, and clear structure matter. Even without formal tools, teams need a “version control mindset”: don’t overwrite each other’s work, keep track of changes, and merge carefully.\n\n' +
            'Big idea: software is built by people working together, so teamwork counts as much as technical skill.',
          keyIdeas: [
            'Teams divide work into roles and responsibilities.',
            'Communication reduces bugs and confusion.',
            'Readable code helps teammates (and future you).',
            'Tracking and merging changes prevents lost work.',
          ],
          exampleCode: `// Naming matters when collaborating
// Bad:
x <- 0

// Better:
totalScore <- 0`,
          exampleLanguage: 'pseudocode',
          exampleExplanation:
            'When multiple people work on the same codebase, meaningful names reduce misunderstandings and make code reviews faster and more accurate.',
        },
        {
          id: '1-3',
          title: 'Program Design and Documentation',
          summary:
            'Program design is planning before coding. Instead of jumping straight into writing code, you decide what the program should do, what components are needed, how responsibilities are divided, and how data flows.\n\n' +
            'Design usually means understanding the problem, listing requirements, breaking the program into parts, assigning responsibilities, and writing pseudocode or outlines. It takes time up front and saves more of it later.\n\n' +
            'Good design gives you organized components, clear logic, reusable code, and easier debugging. Bad design gives you giant methods, duplicated logic, and bugs that are hard to fix.\n\n' +
            'Documentation explains what your program does and how it works (comments, method headers, class descriptions). Clear design plus good documentation is what lets someone other than the author maintain the code.',
          keyIdeas: [
            'Plan responsibilities before coding to avoid “giant method” spaghetti.',
            'Modularity means each component does one job and is easy to test.',
            'Documentation helps teams maintain software long-term.',
            'Self-documenting code uses clear names so fewer comments are needed.',
          ],
          exampleCode: `// Calculates the average score

/**
 * Returns the average of all values in the list.
 */`,
          exampleLanguage: 'pseudocode',
          exampleExplanation:
            'Documentation tells the reader what the code is meant to do. Even a one-line comment helps a future reader understand a piece of code faster.',
        },
      ],
    },
    {
      unitNumber: 2,
      title: 'Data',
      subunits: [
        {
          id: '2-1',
          title: 'Data Representation',
          summary:
            'Data is information stored by a computer. Everything (text, images, music, videos, numbers) is eventually stored as numbers.\n\n' +
            'Computers only understand binary, 0 and 1, and each binary digit is a bit. Groups of bits form larger units like bytes (8 bits = 1 byte). A file is just many bytes grouped together.\n\n' +
            'Different types of data are represented differently depending on context. Numbers are stored in binary. Text uses encodings like ASCII or Unicode (for example, \'A\' maps to 65). Images are grids of pixels with numeric color values (often red/green/blue). Sound is stored as samples taken many times per second.\n\n' +
            'Big idea: computers don’t store “meaning.” They store numbers, and humans decide what those numbers mean. Every representation is a trade-off between accuracy, file size, speed, and quality.',
          keyIdeas: [
            'Computers store everything as bits (0s and 1s).',
            'Bytes group bits; files group bytes.',
            'Encodings define how bits are interpreted (text, images, audio).',
            'Representations are trade-offs (quality vs size).',
          ],
          exampleCode: `// Decimal to binary example
5 (decimal) = 101 (binary)

// Character encoding example
'A' -> 65`,
          exampleLanguage: 'pseudocode',
          exampleExplanation:
            'In CSP, data has to be encoded before it can be stored or transmitted. Converting between representations is how computers handle text and numbers under the hood.',
        },
        {
          id: '2-2',
          title: 'Big Data and Privacy',
          summary:
            'Big Data means very large collections of information gathered from phones, apps, websites, sensors, social media, and purchases. This data is analyzed to find patterns and make predictions.\n\n' +
            'Big Data can recommend products, predict traffic, detect fraud, improve healthcare, and target advertisements. It works because some patterns only show up when you have enough data.\n\n' +
            'But Big Data also creates privacy risks: tracking without consent, leaks of personal information, and misuse or sale of data. Even “anonymous” data can sometimes be re-identified (traced back to a real person). Location history, health data, and browsing history can reveal very personal details.\n\n' +
            'Using data ethically means asking: Did users consent? Is data stored securely? Who has access? Could this harm someone? Big idea: Big Data brings both opportunity and responsibility.',
          keyIdeas: [
            'Big Data enables powerful prediction and personalization.',
            'Privacy risks include tracking, leaks, misuse, and re-identification.',
            'Ethical use requires consent, security, and harm analysis.',
          ],
        },
        {
          id: '2-3',
          title: 'Data Abstraction and Visualization',
          summary:
            'Data abstraction means hiding unnecessary details and focusing on what matters. With data, that often means summarizing large data sets using statistics like mean, max, and min, or grouping values into categories.\n\n' +
            'Visualization turns data into images (graphs, charts, and maps) so people can see patterns quickly. A good visual shows trends, outliers, and relationships.\n\n' +
            'Design choices matter, because misleading scales, missing labels, or the wrong chart type can give a false impression.\n\n' +
            'Big idea: abstraction simplifies data, and visualization communicates it.',
          keyIdeas: [
            'Abstraction summarizes and simplifies large data sets.',
            'Visualization helps people see patterns quickly.',
            'Bad visualization can mislead; design choices matter.',
          ],
        },
      ],
    },
    {
      unitNumber: 3,
      title: 'Programming Foundations',
      subunits: [
        {
          id: '3-1',
          title: 'Variables, Expressions, and Logic',
          summary:
            'This topic covers how programs store values, compute results, and make decisions. A variable stores information; you can think of it as a labeled box whose contents can change over time.\n\n' +
            'Expressions combine values and operators to produce new values, such as 5 + 3 or score + bonus. Logic uses Boolean values (true and false) and comparisons like <, ==, and != to create conditions.\n\n' +
            'Logical operators such as AND, OR, and NOT let you combine conditions into more complex decisions. Big idea: variables store data, expressions compute values, and logic controls decisions.',
          keyIdeas: [
            'Variables are named storage locations whose values can change.',
            'Expressions use operators to compute new values from existing ones.',
            'Boolean logic (comparisons + AND/OR/NOT) drives decision-making in programs.',
          ],
        },
        {
          id: '3-2',
          title: 'Conditionals and Iteration',
          summary:
            'Conditionals let programs choose between different paths. For example, if score ≥ 60, a program might mark a student as passing; otherwise, it might mark them as failing. Only one path runs.\n\n' +
            'Iteration (loops) repeats code. Use a while loop when you don\'t know ahead of time how many repetitions you need (e.g., while a game is not over). Use a for loop when you do know how many times to repeat (e.g., repeat 10 times).\n\n' +
            'You need loops to process large data sets, repeat calculations, traverse lists, and automate tasks. Big idea: conditionals let programs decide, and loops let programs repeat.',
          keyIdeas: [
            'Conditionals choose one of multiple possible paths based on conditions.',
            'While loops repeat while a condition remains true; for loops repeat a fixed number of times.',
            'Loops enable programs to handle large data sets and repeated tasks efficiently.',
          ],
        },
        {
          id: '3-3',
          title: 'Procedures and Abstraction',
          summary:
            'A procedure (also called a method or function) is a named block of code that performs a task. Instead of rewriting the same logic multiple times, you call the procedure.\n\n' +
            'Procedures reduce repetition, improve readability, make programs modular (built from separate parts), and hide complexity; this is abstraction in action. Parameters allow procedures to receive input, and some procedures return values that can be used elsewhere.\n\n' +
            'You don\'t need to know how a procedure works inside to use it. In the same way, you don\'t need to understand how a car engine works to drive. Big idea: procedures organize logic, and abstraction hides details so programmers can build large systems.',
          keyIdeas: [
            'Procedures encapsulate (wrap up) logic behind a descriptive name.',
            'Parameters and return values allow flexible, reusable code.',
            'Abstraction lets you focus on what a procedure does, not how it does it.',
          ],
        },
      ],
    },
    {
      unitNumber: 4,
      title: 'The Internet, Reliability, and Security',
      subunits: [
        {
          id: '4-1',
          title: 'The Internet and Protocols',
          summary:
            'The Internet is a global network of computers connected so they can share information. Your phone, laptop, and servers around the world communicate by sending data packets (small chunks of data) across this network.\n\n' +
            'No single company owns the Internet; it is made of millions of independent networks working together. When you load a website, your device breaks data into small packets. Each packet travels on its own through routers, and the destination puts them back together. Packets may take different routes and still arrive at the same place, so the Internet keeps working when one route fails.\n\n' +
            'Protocols are the rules computers follow to communicate, a bit like grammar for computers. Common Internet protocols include IP (addresses and routes packets) and TCP (ensures reliable delivery, resending lost packets and reordering them). HTTP/HTTPS carries web traffic, and HTTPS encrypts the data. DNS translates human-readable names to IP addresses. Big idea: shared protocols allow billions of devices to communicate reliably.',
          keyIdeas: [
            'The Internet is a network of networks with redundant paths.',
            'IP, TCP, HTTP/HTTPS, and DNS are key Internet protocols.',
            'Protocols define shared rules so devices can understand each other.',
          ],
        },
        {
          id: '4-2',
          title: 'Reliability and Fault Tolerance',
          summary:
            'Reliability means a system keeps working even when parts fail. Hardware breaks, networks drop, and power goes out, yet many websites and apps remain online.\n\n' +
            'Fault tolerance is designing systems so failures do not cause total collapse. Instead of relying on a single component, systems use redundancy (duplicates), backups, and multiple paths. Data replication stores information in several places so that if one copy is lost, others still exist.\n\n' +
            'Routing around failures lets network traffic find alternate paths when links break. Systems may also degrade gracefully. They slow down or lower quality instead of fully crashing, the way video quality drops when a connection is weak. Big idea: modern systems assume parts will fail, and good design keeps them running when that happens.',
          keyIdeas: [
            'Redundancy and replication keep systems running when parts fail.',
            'Networks reroute packets around broken paths.',
            'Graceful degradation favors reduced performance over total failure.',
          ],
        },
        {
          id: '4-3',
          title: 'Cybersecurity Basics',
          summary:
            'Cybersecurity protects devices, networks, data, and users from attacks or misuse. Technology is only part of it, because people’s behavior matters a great deal.\n\n' +
            'Common threats include malware (viruses, ransomware, spyware) and phishing (fake messages that trick users into revealing information). Others are data breaches (unauthorized access to private data) and denial-of-service attacks, which overwhelm servers so legitimate users can\'t connect.\n\n' +
            'Core security principles are often summarized as the CIA triad. Confidentiality means only authorized people can see data, integrity means data is not altered without permission, and availability means systems stay usable. Basic protections include strong passwords, two-factor authentication (a second check beyond the password), encryption, firewalls, and software updates.\n\n' +
            'Big idea: people’s habits and awareness are part of security too, and many attacks succeed because someone clicks the wrong link.',
          keyIdeas: [
            'Cybersecurity protects devices, networks, data, and users.',
            'The CIA triad: confidentiality, integrity, and availability.',
            'Human behavior is often the weakest link in security.',
          ],
        },
      ],
    },
    {
      unitNumber: 5,
      title: 'Innovation, Ethics, and Global Impact',
      subunits: [
        {
          id: '5-1',
          title: 'Computing Innovations',
          summary:
            'A computing innovation is a new or improved technology that uses computing to solve problems or create new possibilities. Examples include smartphones, artificial intelligence, GPS navigation, streaming platforms, medical imaging, and cloud computing.\n\n' +
            'Innovations often automate tasks, improve efficiency, create new industries, and change how people live and work. Most build on earlier technologies.\n\n' +
            'Benefits include better healthcare, more access to information, global connectivity, and higher productivity. Risks include lost jobs, more surveillance, the spread of misinformation, and deeper inequality.\n\n' +
            'Big idea: technology is not neutral. Its impact depends on how people design and use it.',
          keyIdeas: [
            'Computing innovations can transform daily life and entire industries.',
            'Innovations have both benefits and risks.',
            'Human choices determine how technology is used and who it helps or harms.',
          ],
        },
        {
          id: '5-2',
          title: 'Legal and Ethical Issues',
          summary:
            'Legal issues involve laws around data privacy, copyright, cybercrime, and online harassment. These laws vary by country and set minimum standards for acceptable behavior.\n\n' +
            'Ethics goes beyond the law and asks, “Just because we can do something, should we?” Questions include: Should companies collect user data? Is facial recognition acceptable? Who is responsible for AI decisions? Should algorithms be transparent?\n\n' +
            'Intellectual property means creators own their work (software, music, videos, writing). Piracy violates these rights. Algorithmic bias (a program treating some groups unfairly) can appear when models are trained on biased data. It can affect hiring, lending, policing, and education.\n\n' +
            'Big idea: law sets minimum standards; ethics guides responsible behavior beyond the law. Developers must actively work to reduce unfairness and harm.',
          keyIdeas: [
            'Laws cover privacy, copyright, and cybercrime but vary by region.',
            'Ethical questions often extend beyond what is strictly legal.',
            'Algorithmic bias can reinforce real-world inequalities.',
          ],
        },
        {
          id: '5-3',
          title: 'Global and Economic Impacts',
          summary:
            'Computing connects the world through communication across countries, global markets, remote work, and online education. Geography matters less than ever for many types of work and learning.\n\n' +
            'Economically, computing creates new industries and high-paying tech jobs and enables automation. At the same time, it can displace workers, create skill gaps, and widen unequal access; this is part of the digital divide.\n\n' +
            'The digital divide means some people lack internet access, devices, or technical education, which limits their opportunities. Closing that gap is a major global challenge.\n\n' +
            'Big idea: computing reshapes economies and societies worldwide, and its benefits are large but unevenly distributed.',
          keyIdeas: [
            'Global connectivity enables new forms of collaboration and work.',
            'Automation changes the job market, sometimes displacing workers.',
            'The digital divide limits opportunities for those without access or skills.',
          ],
        },
      ],
    },
  ],
}
