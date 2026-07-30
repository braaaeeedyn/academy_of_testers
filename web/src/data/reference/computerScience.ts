import type { SubjectReference } from './types'

export const AP_CS_A_REFERENCE: SubjectReference = {
  subjectName: 'AP Computer Science A',
  note: 'Key Java concepts and exam breakdown for AP Computer Science A. A Java Quick Reference is provided on the exam.',
  glossary: [
    { term: 'Object', definition: 'An instance of a class bundling state (fields) and behavior (methods).' },
    { term: 'Inheritance', definition: 'A subclass acquiring the fields and methods of a superclass (extends).' },
    { term: 'Polymorphism', definition: 'Calling an overridden method resolves to the object’s actual type at run time.' },
    { term: 'ArrayList', definition: 'A resizable list class; use add, get, set, remove, and size.' },
    { term: 'Traversal', definition: 'Visiting each element of an array or list, often with a for or for-each loop.' },
    { term: 'Encapsulation', definition: 'Hiding internal state behind private fields and public methods.' },
  ],
  frequentlyTested: [
    { topic: 'Using objects & classes', weight: '~25%', note: 'Writing classes, constructors, methods, and using objects.' },
    { topic: 'Boolean logic & control', weight: '~20%', note: 'if/else, while/for loops, and boolean expressions.' },
    { topic: 'Arrays & ArrayList', weight: '~20%', note: 'Traversals, searching, and manipulation.' },
    { topic: '2D arrays & recursion', weight: '~15%', note: 'Nested traversals and recursive methods.' },
  ],
}

export const AP_CS_PRINCIPLES_REFERENCE: SubjectReference = {
  subjectName: 'AP Computer Science Principles',
  note: 'Key concepts and big-idea weighting for AP Computer Science Principles.',
  glossary: [
    { term: 'Abstraction', definition: 'Managing complexity by hiding detail behind a simpler interface.' },
    { term: 'Algorithm', definition: 'A finite sequence of steps (sequencing, selection, iteration) that solves a problem.' },
    { term: 'Procedure / abstraction', definition: 'A named, reusable block of code, often with parameters.' },
    { term: 'Iteration', definition: 'Repeating steps with a loop until a condition is met.' },
    { term: 'Data compression', definition: 'Reducing data size — lossless preserves all data; lossy discards some.' },
    { term: 'Fault tolerance', definition: 'A system’s ability to keep working when part of it fails (e.g. redundant routing).' },
  ],
  frequentlyTested: [
    { topic: 'Algorithms & programming', weight: '~30%', note: 'The largest exam band — variables, control, procedures, lists.' },
    { topic: 'Data', weight: '~18%', note: 'Binary, compression, and extracting information.' },
    { topic: 'Computing systems & networks', weight: '~13%', note: 'The Internet, protocols, and fault tolerance.' },
    { topic: 'Impact of computing', weight: '~23%', note: 'Benefits, harms, bias, and digital divide.' },
  ],
}
