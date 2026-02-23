import type { TopicalExam } from './types'

function q(id: number, question: string, options: string[], correctAnswer: number, explanation: string) {
  return { id, question, options, correctAnswer, explanation }
}

export const TOPICAL_CSP: TopicalExam = {
  label: 'AP Computer Science Principles',
  slug: 'ap-computer-science-principles',
  units: [
    {
      unitNumber: 1,
      title: 'Creative Development',
      easy: [
        q(1, 'Which of the following best describes the purpose of collaboration in program development?', [
          'It ensures only one person writes the code',
          'It allows individuals with different perspectives and skills to contribute to the project',
          'It eliminates the need for testing',
          'It ensures the program runs faster'
        ], 1, 'Collaboration brings together diverse perspectives, skills, and knowledge, which can improve the quality and creativity of a program.'),
        q(2, 'What is an iterative development process?', [
          'Writing all the code at once and then testing',
          'A process where the program is developed through repeated cycles of designing, implementing, and testing',
          'A process where each developer works independently',
          'Writing documentation before any code is created'
        ], 1, 'Iterative development involves repeated cycles of refining and improving the program based on testing and feedback.'),
        q(3, 'Which of the following is a benefit of using comments in a program?', [
          'Comments make the program run faster',
          'Comments help explain the purpose and functionality of code to other developers',
          'Comments are required for the program to compile',
          'Comments reduce the number of bugs in a program'
        ], 1, 'Comments document code functionality, making it easier for other developers (and yourself) to understand the purpose and logic of the code.'),
        q(4, 'A programmer is developing a new app. Which of the following is the FIRST step in the development process?', [
          'Writing the source code',
          'Investigating and reflecting on the problem to be solved',
          'Testing the finished product',
          'Publishing the app to an app store'
        ], 1, 'Understanding the problem is the first step in program development. This includes identifying user needs and defining the scope of the project.'),
        q(5, 'What is a program specification?', [
          'The compiled version of a program',
          'A description of the behavior and requirements of a program',
          'The programming language used to write the program',
          'The hardware on which the program runs'
        ], 1, 'A program specification defines what the program should do, including its expected behavior, inputs, outputs, and requirements.')
      ],
      medium: [
        q(6, 'A team is developing software using an incremental approach. Which of the following best describes this approach?', [
          'All features are implemented simultaneously before any testing occurs',
          'The software is developed and tested in small functional pieces that build upon each other',
          'Each team member develops independently without communication',
          'The entire program is planned in complete detail before any coding begins'
        ], 1, 'Incremental development involves building software in small, manageable pieces, testing each increment before adding more functionality.'),
        q(7, 'A student is developing a program and discovers a logic error. Which of the following strategies would be MOST effective for identifying the source of the error?', [
          'Rewriting the entire program from scratch',
          'Adding print statements to display variable values at key points in the program',
          'Changing the programming language',
          'Adding more comments to the code'
        ], 1, 'Print statements (or using a debugger) allow the programmer to trace variable values and identify where the logic deviates from expected behavior.'),
        q(8, 'In the context of program development, what does it mean to acknowledge code segments written by others?', [
          'Deleting code written by others and rewriting it',
          'Providing proper credit and documentation when using code from external sources',
          'Only using code that you wrote yourself',
          'Making all code private so others cannot see it'
        ], 1, 'Ethical computing practices require acknowledging the contributions of others, including citing external code libraries, APIs, or algorithms used in your program.'),
        q(9, 'Which of the following is an example of using pair programming effectively?', [
          'Two programmers work on completely separate programs',
          'One programmer writes code while the other reviews it in real time, then they switch roles',
          'Two programmers write the same code independently to see who finishes first',
          'One programmer writes code while the other takes notes unrelated to the project'
        ], 1, 'Pair programming involves two programmers working together at one workstation — one drives (writes code) while the other navigates (reviews), and they switch roles.'),
        q(10, 'Why is it important to test a program with a variety of inputs, including edge cases?', [
          'To make the program run faster',
          'To ensure the program handles all possible scenarios correctly, including unusual or extreme inputs',
          'To reduce the size of the source code',
          'To eliminate the need for comments'
        ], 1, 'Testing with diverse inputs, including boundary and edge cases, helps identify bugs and ensures the program behaves correctly under all conditions.')
      ],
      hard: [
        q(11, 'A development team uses version control for their project. Which of the following describes a primary benefit of version control?', [
          'It automatically fixes bugs in the code',
          'It allows team members to track changes, revert to previous versions, and work on different features simultaneously',
          'It translates the program into machine code',
          'It replaces the need for testing'
        ], 1, 'Version control systems (like Git) track changes to code over time, allow reverting to previous states, and enable parallel development through branching.'),
        q(12, 'A programmer is deciding between using a top-down or bottom-up approach for program design. Which of the following correctly contrasts these approaches?', [
          'Top-down breaks the problem into sub-problems; bottom-up builds small components first and combines them',
          'Top-down focuses on coding first; bottom-up focuses on planning first',
          'Top-down is only for large programs; bottom-up is only for small programs',
          'There is no meaningful difference between the two approaches'
        ], 0, 'Top-down design starts with the overall problem and decomposes it into smaller sub-problems. Bottom-up design builds small, reusable components first and assembles them into the larger system.'),
        q(13, 'A team discovers during testing that their program works correctly for most inputs but fails for very large data sets. Which of the following is the MOST likely issue?', [
          'The program has a syntax error',
          'The program has an efficiency problem that causes it to run out of time or memory for large inputs',
          'The program was written in the wrong programming language',
          'The team did not include enough comments'
        ], 1, 'Programs that work for small inputs but fail for large ones typically have scalability or efficiency issues, such as algorithms with high time or space complexity.'),
        q(14, 'Which of the following best illustrates the concept of abstraction in program development?', [
          'Writing every line of code from scratch without using any libraries',
          'Creating a function that hides implementation details and can be called with simple parameters',
          'Using only global variables so all parts of the program can access data',
          'Avoiding the use of loops to keep the code simple'
        ], 1, 'Abstraction involves hiding complex implementation details behind a simple interface. Functions that encapsulate logic and expose only parameters exemplify this concept.'),
        q(15, 'A developer identifies that a procedure in their program has a parameter that is never used. What is the BEST course of action?', [
          'Leave the parameter because removing it might break other parts of the program',
          'Investigate all calls to the procedure, remove the unused parameter if safe, and update all call sites',
          'Add more parameters to the procedure to make it more flexible',
          'Convert the procedure into two separate procedures'
        ], 1, 'Unused parameters add confusion and potential for errors. The best practice is to investigate dependencies, remove the parameter if safe, and update all calling code accordingly.')
      ]
    },
    {
      unitNumber: 2,
      title: 'Data',
      easy: [
        q(16, 'What is a bit?', [
          'A unit of data that can store a single character',
          'The smallest unit of data in computing, representing a 0 or 1',
          'A unit of data that stores 8 values',
          'A type of programming variable'
        ], 1, 'A bit (binary digit) is the smallest unit of data in computing and can hold one of two values: 0 or 1.'),
        q(17, 'How many different values can be represented with 4 bits?', [
          '4',
          '8',
          '16',
          '32'
        ], 2, 'With n bits, you can represent 2^n different values. 2^4 = 16.'),
        q(18, 'What is metadata?', [
          'The main content of a data file',
          'Data about data, such as the author, date created, or file size',
          'A type of programming error',
          'The binary representation of a number'
        ], 1, 'Metadata is data that describes other data. Examples include file creation date, author name, image resolution, etc.'),
        q(19, 'Which of the following is a lossless data compression technique?', [
          'JPEG compression for images',
          'MP3 compression for audio',
          'ZIP file compression',
          'Streaming video compression'
        ], 2, 'ZIP compression is lossless — the original data can be perfectly reconstructed from the compressed version. JPEG and MP3 are lossy formats.'),
        q(20, 'What is the decimal equivalent of the binary number 1011?', [
          '9',
          '10',
          '11',
          '13'
        ], 2, '1011 in binary = 1×8 + 0×4 + 1×2 + 1×1 = 8 + 0 + 2 + 1 = 11.')
      ],
      medium: [
        q(21, 'A sound file is sampled at 44,100 samples per second with 16 bits per sample in stereo. How many bits are needed to store 3 seconds of audio?', [
          '44,100 × 16 × 3',
          '44,100 × 16 × 2 × 3',
          '44,100 × 8 × 2 × 3',
          '44,100 × 16 × 3 / 2'
        ], 1, 'Stereo means 2 channels. Total bits = sample rate × bits per sample × channels × seconds = 44,100 × 16 × 2 × 3.'),
        q(22, 'Which of the following best describes an overflow error?', [
          'An error caused by dividing by zero',
          'An error that occurs when a value exceeds the maximum number of bits allocated to store it',
          'An error caused by an infinite loop',
          'An error that occurs when a program runs out of memory'
        ], 1, 'An overflow error occurs when a computed value is too large (or too small) to be stored in the allocated number of bits.'),
        q(23, 'A database stores information about students including name, ID, grade level, and GPA. Which of the following questions CANNOT be answered using only this data?', [
          'What is the average GPA of 12th graders?',
          'How many students have a GPA above 3.5?',
          'Which students are taking AP Chemistry?',
          'What is the highest GPA in the database?'
        ], 2, 'The database does not contain course enrollment information, so determining which students take AP Chemistry is not possible with only name, ID, grade, and GPA.'),
        q(24, 'What is the difference between lossy and lossless compression?', [
          'Lossy compression is faster than lossless compression',
          'Lossy compression permanently removes some data to reduce file size; lossless allows perfect reconstruction',
          'Lossless compression always produces smaller files than lossy compression',
          'There is no practical difference between them'
        ], 1, 'Lossy compression achieves smaller file sizes by permanently discarding some data (acceptable for media). Lossless compression preserves all original data.'),
        q(25, 'A researcher collects data from a survey and visualizes it using a bar chart. The chart shows that Group A scored significantly higher than Group B. Which of the following is a valid concern about this visualization?', [
          'Bar charts cannot display numerical data',
          'The y-axis scale might not start at zero, exaggerating the difference',
          'Bar charts are always misleading',
          'The researcher should have used binary data instead'
        ], 1, 'If the y-axis does not start at zero, differences between bars can appear much larger than they actually are, making the visualization misleading.')
      ],
      hard: [
        q(26, 'A color is represented using RGB values where each component (Red, Green, Blue) uses 8 bits. What is the total number of unique colors that can be represented?', [
          '256',
          '65,536',
          '16,777,216',
          '4,294,967,296'
        ], 2, 'Each component has 8 bits (256 values). Total unique colors = 256 × 256 × 256 = 16,777,216 (or 2^24).'),
        q(27, 'A data set contains information about 10,000 customers. A programmer notices that cleaning and filtering the data changed the results of their analysis. Which of the following best explains this?', [
          'Cleaning data always introduces errors',
          'The decisions made during data cleaning (e.g., handling missing values, removing outliers) affect the conclusions drawn from the data',
          'Data should never be cleaned before analysis',
          'The original data set was too large to analyze'
        ], 1, 'Data cleaning involves subjective decisions (how to handle missing values, outliers, duplicates) that can significantly impact analytical results. These choices must be documented and justified.'),
        q(28, 'Which of the following is true about using a hash function to store data?', [
          'A hash function always produces unique outputs for different inputs',
          'A hash function converts data of arbitrary size to a fixed-size value, and collisions are possible',
          'Hash functions can be reversed to recover the original input',
          'Hash functions are only used for numerical data'
        ], 1, 'Hash functions map arbitrary-sized input to fixed-size output. Since the output space is finite, collisions (different inputs producing the same hash) are possible.'),
        q(29, 'A programmer is comparing two large data sets to find common elements. Which of the following approaches is MOST efficient?', [
          'Using nested loops to compare every element in one set with every element in the other',
          'Sorting both sets and using a merge-like comparison',
          'Randomly selecting elements from both sets and comparing them',
          'Converting both sets to strings and comparing the strings'
        ], 1, 'Sorting both sets (O(n log n)) and using a merge-like comparison (O(n)) is much more efficient than nested loops (O(n²)).'),
        q(30, 'An analog audio signal is being digitized. Increasing which of the following will result in a MORE accurate digital representation?\n\nI. Sampling rate\nII. Bit depth\nIII. File compression ratio', [
          'I only',
          'I and II only',
          'II and III only',
          'I, II, and III'
        ], 1, 'Higher sampling rate captures more snapshots per second. Greater bit depth provides more precision per sample. Higher compression ratio (more compression) reduces quality. So only I and II improve accuracy.')
      ]
    },
    {
      unitNumber: 3,
      title: 'Algorithms and Programming',
      easy: [
        q(31, 'What is a variable in programming?', [
          'A fixed value that cannot change',
          'A named storage location that can hold a value',
          'A type of loop',
          'A function that returns a number'
        ], 1, 'A variable is a named storage location in memory that holds a value which can be read and modified during program execution.'),
        q(32, 'Which of the following is an example of sequencing in programming?', [
          'Repeating a block of code multiple times',
          'Making a decision based on a condition',
          'Executing statements one after another in order',
          'Calling a function from another function'
        ], 2, 'Sequencing means executing instructions in the order they appear, one after another. It is the most basic control structure.'),
        q(33, 'What does the MOD operator do?', [
          'Returns the quotient of two numbers',
          'Returns the remainder when one number is divided by another',
          'Returns the product of two numbers',
          'Returns the larger of two numbers'
        ], 1, 'The MOD (modulo) operator returns the remainder after integer division. For example, 7 MOD 3 = 1.'),
        q(34, 'What is a Boolean value?', [
          'A numerical value that can be any integer',
          'A value that can only be true or false',
          'A value that represents a character',
          'A value that stores a list of items'
        ], 1, 'A Boolean value is a data type that has only two possible values: true or false.'),
        q(35, 'What is the purpose of a procedure (function) in programming?', [
          'To make the program run slower',
          'To store data permanently',
          'To organize code into reusable, named blocks that perform specific tasks',
          'To create variables'
        ], 2, 'Procedures (functions) allow programmers to organize code into reusable blocks, improving readability, reducing redundancy, and making programs easier to maintain.')
      ],
      medium: [
        q(36, 'Consider the following pseudocode:\na ← 10\nb ← 20\na ← b\nb ← a\nWhat are the final values of a and b?', [
          'a = 20, b = 10',
          'a = 20, b = 20',
          'a = 10, b = 20',
          'a = 10, b = 10'
        ], 1, 'After a ← b, a becomes 20. Then b ← a assigns 20 to b. Both are 20. To swap correctly, a temporary variable is needed.'),
        q(37, 'A list contains [5, 3, 8, 1, 9, 2]. A binary search is performed to find the value 8. What must happen before the binary search can work correctly?', [
          'The list must be reversed',
          'The list must be sorted',
          'The list must have an even number of elements',
          'The list must contain only positive numbers'
        ], 1, 'Binary search requires the list to be sorted. It works by repeatedly dividing the search interval in half, which only works on sorted data.'),
        q(38, 'What is the output of the following pseudocode?\nresult ← 0\nFOR EACH item IN [1, 2, 3, 4, 5]\n{\n  IF (item MOD 2 = 1)\n  {\n    result ← result + item\n  }\n}\nDISPLAY(result)', [
          '6',
          '9',
          '15',
          '5'
        ], 1, 'The loop adds odd numbers: 1 + 3 + 5 = 9.'),
        q(39, 'A robot is in a grid and can move forward, turn left, and turn right. Which of the following algorithms will make the robot traverse the perimeter of a 4×4 grid?', [
          'Move forward 4 times, turn right, repeat 4 times',
          'Move forward 3 times, turn right, repeat 4 times',
          'Move forward 4 times, turn left, repeat 3 times',
          'Move forward 3 times, turn left, repeat 4 times'
        ], 1, 'For a 4×4 grid, the robot needs to move forward 3 times (covering 4 positions) and turn right, repeated 4 times to complete the perimeter.'),
        q(40, 'Which of the following best describes the difference between a linear search and a binary search?', [
          'Linear search is always faster than binary search',
          'Binary search checks elements one by one; linear search divides the list in half',
          'Linear search checks elements sequentially; binary search repeatedly halves the sorted search space',
          'Both algorithms have the same efficiency'
        ], 2, 'Linear search checks each element one at a time (O(n)). Binary search divides a sorted list in half each step (O(log n)).')
      ],
      hard: [
        q(41, 'A programmer writes a procedure that is intended to return the index of the maximum value in a list. The procedure works correctly for most lists but returns the wrong result when the maximum value appears more than once. Which of the following best explains why?', [
          'The procedure cannot handle lists with duplicate values',
          'The procedure may return the index of the last occurrence instead of the first, or vice versa, depending on the comparison operator used (> vs >=)',
          'Lists with duplicate values cause infinite loops',
          'The procedure cannot compare values of the same type'
        ], 1, 'Using > will return the first occurrence (later equal values won\'t update the max index), while >= will return the last occurrence. The choice of comparison operator determines which index is returned.'),
        q(42, 'Which of the following is NOT a decidable problem?', [
          'Determining whether a number is prime',
          'Sorting a list of numbers in ascending order',
          'Determining whether an arbitrary program will halt on a given input',
          'Finding the shortest path between two nodes in a graph'
        ], 2, 'The halting problem is undecidable — no algorithm can determine for all possible programs and inputs whether the program will eventually halt. This was proven by Alan Turing.'),
        q(43, 'Consider an algorithm that has a runtime proportional to n² where n is the input size. If the algorithm takes 4 seconds for an input of size 100, approximately how long will it take for an input of size 1000?', [
          '40 seconds',
          '400 seconds',
          '4000 seconds',
          '40000 seconds'
        ], 1, 'For n²: time ∝ n². If n increases by factor 10, time increases by factor 100. 4 × 100 = 400 seconds.'),
        q(44, 'A programmer writes a recursive procedure without a proper base case. What will happen when the procedure is called?', [
          'The procedure will return 0',
          'The procedure will call itself indefinitely, eventually causing a stack overflow error',
          'The procedure will skip the recursive call',
          'The procedure will execute once and stop'
        ], 1, 'Without a base case, a recursive procedure has no condition to stop calling itself, leading to infinite recursion and eventually a stack overflow.'),
        q(45, 'Two algorithms solve the same problem. Algorithm A runs in O(n log n) time and Algorithm B runs in O(n²) time. For which input sizes will Algorithm A be meaningfully faster?', [
          'Only for very small inputs (n < 10)',
          'For large inputs, where the difference between n log n and n² becomes significant',
          'They will always perform the same',
          'Algorithm B is always faster'
        ], 1, 'As n grows, n² grows much faster than n log n. For large inputs, the O(n log n) algorithm will be significantly faster. For very small inputs, the difference may be negligible.')
      ]
    },
    {
      unitNumber: 4,
      title: 'Computing Systems and Networks',
      easy: [
        q(46, 'What is the Internet?', [
          'A single large computer that stores all websites',
          'A global network of interconnected computing devices that communicate using shared protocols',
          'A software application for browsing websites',
          'A programming language for creating websites'
        ], 1, 'The Internet is a global system of interconnected computer networks that use standardized communication protocols (TCP/IP) to exchange data.'),
        q(47, 'What does HTTP stand for?', [
          'Hyper Text Transfer Protocol',
          'High Tech Transfer Process',
          'Hyper Text Translation Program',
          'Host Transfer Text Protocol'
        ], 0, 'HTTP stands for Hyper Text Transfer Protocol. It is the protocol used for transferring web pages on the World Wide Web.'),
        q(48, 'What is the purpose of an IP address?', [
          'To encrypt data being sent over the Internet',
          'To uniquely identify a device on a network',
          'To store website content',
          'To increase the speed of data transfer'
        ], 1, 'An IP (Internet Protocol) address is a unique numerical label assigned to each device on a network, used for identification and routing.'),
        q(49, 'Which of the following best describes bandwidth?', [
          'The physical size of a network cable',
          'The maximum amount of data that can be transmitted over a network in a given time period',
          'The number of devices connected to a network',
          'The distance between two networked computers'
        ], 1, 'Bandwidth refers to the maximum rate of data transfer across a network path, typically measured in bits per second (bps).'),
        q(50, 'What is a protocol in computing?', [
          'A type of computer virus',
          'A programming language',
          'An agreed-upon set of rules for communication between devices',
          'A physical network cable'
        ], 2, 'A protocol is a set of rules and standards that define how data is formatted, transmitted, and received between computing devices on a network.')
      ],
      medium: [
        q(51, 'How does packet switching work on the Internet?', [
          'Data is sent as one continuous stream from source to destination',
          'Data is broken into packets that may travel different routes and are reassembled at the destination',
          'Data can only be sent between devices on the same local network',
          'Each packet must wait for the previous one to arrive before being sent'
        ], 1, 'In packet switching, data is divided into packets, each of which may take a different route through the network. They are reassembled in the correct order at the destination.'),
        q(52, 'What is the difference between the Internet and the World Wide Web?', [
          'They are the same thing',
          'The Internet is a physical network of computers; the World Wide Web is a collection of information accessible via the Internet using HTTP',
          'The World Wide Web is a physical network; the Internet is a software application',
          'The Internet only works with wired connections; the World Wide Web works wirelessly'
        ], 1, 'The Internet is the physical network infrastructure. The World Wide Web (WWW) is a system of interlinked documents and resources accessed via HTTP over the Internet.'),
        q(53, 'Which of the following best describes the Domain Name System (DNS)?', [
          'A system that encrypts data sent between websites and users',
          'A system that translates human-readable domain names into IP addresses',
          'A system that physically connects computers to the Internet',
          'A system that compresses web pages for faster loading'
        ], 1, 'DNS translates domain names (like www.example.com) into IP addresses (like 93.184.216.34) so browsers can locate and connect to web servers.'),
        q(54, 'What is the main advantage of a fault-tolerant system?', [
          'It runs faster than other systems',
          'It can continue operating even when some components fail',
          'It uses less energy than other systems',
          'It does not require any maintenance'
        ], 1, 'Fault tolerance means a system can continue functioning (possibly at reduced capacity) even when one or more components fail, ensuring reliability.'),
        q(55, 'Which of the following is true about TCP (Transmission Control Protocol)?', [
          'TCP does not guarantee delivery of packets',
          'TCP guarantees that packets are delivered in the correct order and without errors',
          'TCP is only used for email communication',
          'TCP sends data without breaking it into packets'
        ], 1, 'TCP is a reliable protocol that guarantees ordered, error-checked delivery of data packets between applications.')
      ],
      hard: [
        q(56, 'A network has multiple paths between two devices. If the most direct path fails, the network automatically routes data through an alternate path. Which of the following concepts does this illustrate?', [
          'Encryption',
          'Redundancy',
          'Abstraction',
          'Compression'
        ], 1, 'Redundancy in networks means having multiple paths or components so that if one fails, others can take over. This is a key aspect of the Internet\'s fault-tolerant design.'),
        q(57, 'Which of the following correctly describes the relationship between IPv4 and IPv6?', [
          'IPv6 was created because IPv4 does not support packet switching',
          'IPv6 uses 128-bit addresses to support a vastly larger number of unique devices compared to IPv4\'s 32-bit addresses',
          'IPv4 and IPv6 use the same address format but different protocols',
          'IPv6 is slower than IPv4 but more secure'
        ], 1, 'IPv4 uses 32-bit addresses (~4.3 billion unique addresses). IPv6 uses 128-bit addresses (~3.4 × 10^38) to accommodate the growing number of Internet-connected devices.'),
        q(58, 'A certificate authority issues a digital certificate to a website. What is the primary purpose of this certificate?', [
          'To compress data sent between the user and the website',
          'To verify the identity of the website and enable encrypted communication',
          'To store the website\'s content on the user\'s computer',
          'To increase the website\'s loading speed'
        ], 1, 'Digital certificates verify a website\'s identity and enable HTTPS/TLS encryption, ensuring that users communicate with the legitimate site and data is encrypted in transit.'),
        q(59, 'Which layer of the Internet protocol suite is responsible for routing packets across networks?', [
          'Application layer',
          'Transport layer',
          'Internet (Network) layer',
          'Link (Data Link) layer'
        ], 2, 'The Internet (Network) layer, which uses IP, is responsible for addressing and routing packets across different networks to reach their destination.'),
        q(60, 'A distributed denial-of-service (DDoS) attack overwhelms a web server with traffic from many sources. Which of the following is a reason DDoS attacks are difficult to prevent?', [
          'The traffic comes from a single, identifiable source',
          'The attack traffic comes from many distributed sources, making it hard to distinguish from legitimate traffic',
          'DDoS attacks use encryption that cannot be broken',
          'Web servers are not designed to handle any network traffic'
        ], 1, 'DDoS attacks use many compromised devices (botnets) to generate traffic from diverse sources, making it difficult to block attack traffic without also blocking legitimate users.')
      ]
    },
    {
      unitNumber: 5,
      title: 'Impact of Computing',
      easy: [
        q(61, 'What is the digital divide?', [
          'The gap between different programming languages',
          'The gap between those who have access to modern computing technology and those who do not',
          'The difference between analog and digital signals',
          'The division between hardware and software'
        ], 1, 'The digital divide refers to the gap between demographics and regions that have access to modern information and communications technology and those that don\'t.'),
        q(62, 'Which of the following is an example of a computing innovation that has had a beneficial impact on society?', [
          'Computer viruses',
          'Telemedicine systems that allow remote medical consultations',
          'Phishing emails',
          'Software designed to steal personal information'
        ], 1, 'Telemedicine enables remote medical consultations, improving healthcare access for people in rural or underserved areas.'),
        q(63, 'What is personally identifiable information (PII)?', [
          'Information about a computer\'s hardware specifications',
          'Information that can be used to identify, contact, or locate an individual',
          'Information about a website\'s server location',
          'Information about the programming language used to build a website'
        ], 1, 'PII includes data like name, Social Security number, email address, phone number, or any information that can be used to identify a specific individual.'),
        q(64, 'Which of the following best describes open-source software?', [
          'Software that is always free of charge',
          'Software whose source code is made publicly available and can be modified by anyone',
          'Software that can only be used by its original developer',
          'Software that runs only on open-source operating systems'
        ], 1, 'Open-source software has its source code publicly available, allowing anyone to view, modify, and distribute it, typically under a specific license.'),
        q(65, 'What is phishing?', [
          'A technique for compressing files',
          'An attempt to acquire sensitive information by impersonating a trustworthy entity',
          'A method of encrypting data',
          'A type of computer hardware'
        ], 1, 'Phishing is a cyberattack where attackers impersonate legitimate entities (via email, websites, etc.) to trick individuals into revealing sensitive information like passwords or credit card numbers.')
      ],
      medium: [
        q(66, 'A social media platform uses an algorithm to determine which posts appear in a user\'s feed. Which of the following is a potential negative consequence of this practice?', [
          'Users see more relevant content',
          'The algorithm may create filter bubbles that limit exposure to diverse viewpoints',
          'The platform becomes more secure',
          'Users can share content more easily'
        ], 1, 'Algorithmic content curation can create filter bubbles or echo chambers where users are primarily exposed to content that reinforces their existing beliefs, limiting exposure to diverse perspectives.'),
        q(67, 'A company collects location data from its users\' smartphones. Which of the following is a privacy concern related to this practice?', [
          'Location data can be used to track users\' movements and reveal personal habits without their full awareness',
          'Location data improves the accuracy of maps',
          'Location data makes smartphones faster',
          'Location data is always encrypted and therefore not a concern'
        ], 0, 'Continuous location tracking can reveal sensitive information about a person\'s daily routines, frequented locations, and associations, raising significant privacy concerns.'),
        q(68, 'Which of the following best describes the concept of crowdsourcing?', [
          'Using a single expert to solve a complex problem',
          'Obtaining input, services, or content from a large group of people, typically via the Internet',
          'Storing all data in a single centralized database',
          'Automating tasks using artificial intelligence'
        ], 1, 'Crowdsourcing leverages the collective intelligence, skills, or resources of a large group of people, often via online platforms, to accomplish tasks or gather information.'),
        q(69, 'A self-driving car must decide between two courses of action, both of which may result in harm. This scenario is an example of which type of challenge in computing?', [
          'A bandwidth limitation',
          'An ethical dilemma that requires value judgments beyond what algorithms can objectively determine',
          'A data compression issue',
          'A network security vulnerability'
        ], 1, 'Self-driving car dilemmas illustrate ethical challenges in computing where algorithms must make decisions involving potential harm, requiring value judgments that are inherently human.'),
        q(70, 'What is Creative Commons?', [
          'A programming language for creating digital art',
          'A set of copyright licenses that allow creators to specify how others may use their work',
          'A type of open-source software',
          'A social media platform for artists'
        ], 1, 'Creative Commons provides standardized licenses that creators can use to grant specific permissions for how their work may be shared, modified, and used by others.')
      ],
      hard: [
        q(71, 'A machine learning algorithm used for hiring decisions is found to discriminate against certain demographic groups. Which of the following best explains why this occurred?', [
          'Machine learning algorithms are intentionally programmed to be biased',
          'The training data reflected existing biases in historical hiring practices, which the algorithm learned and perpetuated',
          'Machine learning algorithms cannot process demographic data',
          'The algorithm was not given enough computing power'
        ], 1, 'Machine learning models learn patterns from training data. If the historical data reflects societal biases (e.g., past discriminatory hiring), the model will learn and replicate those biases.'),
        q(72, 'A government passes a law requiring technology companies to provide backdoor access to encrypted communications for law enforcement. Which of the following is a valid argument AGAINST this policy?', [
          'Encryption is not used by criminals',
          'Backdoors create security vulnerabilities that could be exploited by malicious actors, weakening security for all users',
          'Law enforcement does not need access to communications',
          'Encrypted communications do not contain useful information'
        ], 1, 'Encryption backdoors intentionally weaken security. If a backdoor exists, it can potentially be discovered and exploited by hackers, foreign governments, or other malicious actors, compromising everyone\'s security.'),
        q(73, 'Which of the following best describes how computing innovations can have both intended and unintended consequences?', [
          'All consequences of computing innovations are predictable',
          'Social media was intended to connect people but has also been used to spread misinformation and enable cyberbullying',
          'Computing innovations only have positive consequences',
          'Unintended consequences only occur due to programming errors'
        ], 1, 'Computing innovations often have consequences beyond their original purpose. Social media connecting people (intended) but also enabling misinformation spread (unintended) is a prime example.'),
        q(74, 'A company uses data mining techniques to analyze customer purchase patterns. Which of the following raises the MOST significant ethical concern?', [
          'The company uses the data to improve product recommendations',
          'The company sells the analyzed data to third parties without customer consent',
          'The company stores the data on secure servers',
          'The company deletes the data after analysis'
        ], 1, 'Selling customer data to third parties without consent violates privacy expectations and raises significant ethical and often legal concerns regarding data ownership and use.'),
        q(75, 'The "right to be forgotten" is a concept in data privacy law. Which of the following best describes this concept?', [
          'The right to never have personal data collected',
          'The right to request that personal data be deleted from databases and search engines',
          'The right to encrypt all personal data',
          'The right to access any database without restrictions'
        ], 1, 'The "right to be forgotten" (or right to erasure) allows individuals to request that their personal data be deleted from organizations\' records and search engine results under certain conditions.')
      ]
    }
  ]
}
