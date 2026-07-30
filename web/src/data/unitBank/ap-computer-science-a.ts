import type { SubjectUnitBank } from './types'

export const BANK_AP_COMPUTER_SCIENCE_A: SubjectUnitBank = {
  "label": "AP Computer Science A",
  "slug": "ap-computer-science-a",
  "units": [
    {
      "unitNumber": 1,
      "title": "Using Objects and Methods",
      "questions": [
        {
          "id": "q-u1-easy-1",
          "question": "In Java, which primitive type is used to store a whole number such as 42?",
          "options": [
            "int",
            "double",
            "String",
            "boolean"
          ],
          "correctAnswer": 0,
          "explanation": "The int type stores whole numbers. double stores decimals, String stores text, and boolean stores true/false.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-2",
          "question": "Which Java primitive type stores a value that can only be true or false?",
          "options": [
            "int",
            "char",
            "boolean",
            "double"
          ],
          "correctAnswer": 2,
          "explanation": "The boolean type holds only the values true or false.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-3",
          "question": "What is the result of the integer expression 7 / 2 in Java?",
          "options": [
            "3.5",
            "3",
            "4",
            "2"
          ],
          "correctAnswer": 1,
          "explanation": "Integer division in Java discards the fractional part, so 7 / 2 evaluates to 3.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-4",
          "question": "Which operator returns the remainder of a division in Java?",
          "options": [
            "/",
            "%",
            "*",
            "//"
          ],
          "correctAnswer": 1,
          "explanation": "The modulus operator % returns the remainder. For example, 7 % 2 equals 1.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-5",
          "question": "To create a new object from a class in Java, you use which keyword?",
          "options": [
            "class",
            "new",
            "object",
            "void"
          ],
          "correctAnswer": 1,
          "explanation": "The new keyword instantiates a new object by calling a constructor, e.g., new Scanner(System.in).",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-6",
          "question": "Given String s = \"Hello\";, what does s.length() return?",
          "options": [
            "4",
            "5",
            "6",
            "0"
          ],
          "correctAnswer": 1,
          "explanation": "The length() method returns the number of characters in the string. \"Hello\" has 5 characters.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-7",
          "question": "Which of the following correctly declares and initializes a double variable?",
          "options": [
            "double x = 3.14;",
            "int x = 3.14;",
            "double x = \"3.14\";",
            "x double = 3.14;"
          ],
          "correctAnswer": 0,
          "explanation": "double x = 3.14; correctly declares a double and assigns it a decimal value. Assigning a decimal to an int or a String to a double would cause an error.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-8",
          "question": "A method that returns no value has which return type?",
          "options": [
            "int",
            "void",
            "null",
            "String"
          ],
          "correctAnswer": 1,
          "explanation": "The void return type indicates a method does not return any value.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-9",
          "question": "In Java, the values passed into a method call are called",
          "options": [
            "parameters in the method signature and arguments when passed",
            "classes",
            "objects",
            "keywords"
          ],
          "correctAnswer": 0,
          "explanation": "The variables in the method's definition are parameters; the actual values supplied in a call are arguments.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-easy-10",
          "question": "Which method call converts the String \"25\" into the integer 25?",
          "options": [
            "Integer.parseInt(\"25\")",
            "\"25\".toInt()",
            "int(\"25\")",
            "Integer.value(\"25\")"
          ],
          "correctAnswer": 0,
          "explanation": "Integer.parseInt(String) parses a string into an int. The other options are not valid Java.",
          "difficulty": "easy"
        },
        {
          "id": "q-u1-medium-1",
          "question": "What is the value of the expression 5 + 3 * 2 in Java?",
          "options": [
            "16",
            "11",
            "13",
            "10"
          ],
          "correctAnswer": 1,
          "explanation": "Java follows order of operations: multiplication before addition. 3 * 2 = 6, then 5 + 6 = 11.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-2",
          "question": "Given double result = 5 / 2;, what value is stored in result?",
          "options": [
            "2.5",
            "2.0",
            "3.0",
            "2"
          ],
          "correctAnswer": 1,
          "explanation": "Because 5 and 2 are both int literals, integer division occurs first (5 / 2 = 2), then 2 is converted to the double 2.0 when stored.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-3",
          "question": "What does the String method \"Computer\".substring(0, 3) return?",
          "options": [
            "\"Com\"",
            "\"Comp\"",
            "\"omp\"",
            "\"put\""
          ],
          "correctAnswer": 0,
          "explanation": "substring(0, 3) returns characters from index 0 up to but not including index 3: 'C', 'o', 'm' = \"Com\".",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-4",
          "question": "Objects are said to be 'references' in Java, which means a variable of a class type stores",
          "options": [
            "a copy of the object's data",
            "the memory address of (a reference to) the object",
            "only primitive values",
            "nothing"
          ],
          "correctAnswer": 1,
          "explanation": "Object variables hold references (memory addresses) to objects, not the objects themselves—unlike primitive variables, which hold values directly.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-5",
          "question": "If String a = \"cat\"; and String b = \"cat\"; are compared with a.equals(b), the result is",
          "options": [
            "true, because equals compares the character content",
            "false, because they are different objects",
            "an error",
            "null"
          ],
          "correctAnswer": 0,
          "explanation": "The equals method compares the character content of strings, so a.equals(b) is true. (Using == may compare references instead of content.)",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-6",
          "question": "What is printed by: System.out.println(\"Sum: \" + 3 + 4);",
          "options": [
            "Sum: 7",
            "Sum: 34",
            "7",
            "Sum: 3 4"
          ],
          "correctAnswer": 1,
          "explanation": "Because the left operand is a String, + means concatenation left to right: \"Sum: \" + 3 gives \"Sum: 3\", then + 4 gives \"Sum: 34\".",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-7",
          "question": "A static method is called using",
          "options": [
            "an object reference only",
            "the class name (e.g., Math.sqrt(16))",
            "the new keyword",
            "no name at all"
          ],
          "correctAnswer": 1,
          "explanation": "Static methods belong to the class and are typically called using the class name, such as Math.sqrt(16), without creating an object.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-8",
          "question": "What does Math.pow(2, 3) return?",
          "options": [
            "6.0",
            "8.0",
            "9.0",
            "5.0"
          ],
          "correctAnswer": 1,
          "explanation": "Math.pow(2, 3) computes 2 raised to the power 3 = 8, returned as a double (8.0).",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-9",
          "question": "Given int x = 10; double y = x;, this assignment is allowed because",
          "options": [
            "it causes an error",
            "an int can be automatically widened to a double",
            "y becomes a String",
            "x is deleted"
          ],
          "correctAnswer": 1,
          "explanation": "Java automatically widens an int to a double (implicit conversion), so y stores 10.0 without an error.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-medium-10",
          "question": "What is the value of \"HELLO\".toLowerCase() ?",
          "options": [
            "\"HELLO\"",
            "\"hello\"",
            "\"Hello\"",
            "an error"
          ],
          "correctAnswer": 1,
          "explanation": "toLowerCase() returns a new string with all characters in lowercase: \"hello\". Strings are immutable, so the original is unchanged.",
          "difficulty": "medium"
        },
        {
          "id": "q-u1-hard-1",
          "question": "Consider: int a = 7, b = 2; double r = (double) a / b; What is r?",
          "options": [
            "3.0",
            "3.5",
            "3",
            "4.0"
          ],
          "correctAnswer": 1,
          "explanation": "The cast (double) a converts 7 to 7.0 before division, so 7.0 / 2 performs floating-point division giving 3.5.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-2",
          "question": "What is the result of the expression 17 % 5 + 5 % 17 ?",
          "options": [
            "2",
            "7",
            "5",
            "12"
          ],
          "correctAnswer": 1,
          "explanation": "17 % 5 = 2 (remainder of 17/5). 5 % 17 = 5 (since 5 < 17, the remainder is 5). So 2 + 5 = 7.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-3",
          "question": "Given String s = \"programming\";, what does s.indexOf(\"gr\") return?",
          "options": [
            "0",
            "3",
            "2",
            "-1"
          ],
          "correctAnswer": 1,
          "explanation": "indexOf returns the starting index of the first occurrence of \"gr\". In \"programming\", 'g' is at index 3 and 'r' at 4, so \"gr\" starts at index 3.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-4",
          "question": "Why does comparing two String objects with == sometimes give an unexpected result?",
          "options": [
            "== always works for Strings",
            "== compares references (memory addresses), not the character content, so equal-content strings in different objects may compare as false",
            "== compares length only",
            "Strings cannot be compared"
          ],
          "correctAnswer": 1,
          "explanation": "The == operator tests whether two references point to the same object. Two strings with identical content but different objects can return false, which is why equals() is used for content comparison.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-5",
          "question": "What is printed? double d = 1.0 / 3.0; System.out.println((int)(d * 3));",
          "options": [
            "1",
            "0",
            "3",
            "an error"
          ],
          "correctAnswer": 1,
          "explanation": "1.0/3.0 is approximately 0.333..., and multiplying by 3 gives approximately 0.999... (due to floating-point imprecision). Casting to int truncates toward zero, producing 0.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-6",
          "question": "Given the call obj.doSomething(x), which statement is true about how x is passed for a primitive int x?",
          "options": [
            "The method receives a reference and can change x in the caller",
            "A copy of x's value is passed, so changes inside the method do not affect the caller's x",
            "x becomes null",
            "x is passed by reference"
          ],
          "correctAnswer": 1,
          "explanation": "Java passes primitives by value: the method receives a copy of the value, so reassigning the parameter inside the method does not change the caller's variable.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-7",
          "question": "What does Math.abs(Math.min(-4, 3)) evaluate to?",
          "options": [
            "3",
            "4",
            "-4",
            "1"
          ],
          "correctAnswer": 1,
          "explanation": "Math.min(-4, 3) returns -4 (the smaller value). Math.abs(-4) returns 4.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-8",
          "question": "Consider String s = \"abcdef\"; System.out.println(s.substring(2)); What is printed?",
          "options": [
            "\"ab\"",
            "\"cdef\"",
            "\"abcdef\"",
            "\"cd\""
          ],
          "correctAnswer": 1,
          "explanation": "substring(2) with one argument returns the substring from index 2 to the end: \"cdef\".",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-9",
          "question": "Why are String objects described as immutable in Java?",
          "options": [
            "They can be changed freely",
            "Once created, a String's contents cannot be changed; methods like toUpperCase return new String objects instead",
            "They cannot be created",
            "They store only numbers"
          ],
          "correctAnswer": 1,
          "explanation": "Strings are immutable: their character data cannot be altered after creation. Methods that appear to modify a string actually return a new String object.",
          "difficulty": "hard"
        },
        {
          "id": "q-u1-hard-10",
          "question": "What is the value of the expression (5 + 2) % 4 * 2 ?",
          "options": [
            "6",
            "14",
            "2",
            "4"
          ],
          "correctAnswer": 0,
          "explanation": "Parentheses first: 5 + 2 = 7. Then % and * have equal precedence, left to right: 7 % 4 = 3, then 3 * 2 = 6.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 2,
      "title": "Selection and Iteration",
      "questions": [
        {
          "id": "q-u2-easy-1",
          "question": "Which Java statement is used to execute code only when a condition is true?",
          "options": [
            "for",
            "if",
            "return",
            "class"
          ],
          "correctAnswer": 1,
          "explanation": "The if statement executes its block only when its boolean condition is true.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-2",
          "question": "Which loop is best when you know in advance how many times you want to repeat?",
          "options": [
            "while loop",
            "for loop",
            "if statement",
            "switch"
          ],
          "correctAnswer": 1,
          "explanation": "A for loop is ideal for a known number of iterations, combining initialization, condition, and update in one line.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-3",
          "question": "What is the boolean result of the expression 5 > 3 ?",
          "options": [
            "true",
            "false",
            "5",
            "3"
          ],
          "correctAnswer": 0,
          "explanation": "The relational expression 5 > 3 is true because 5 is greater than 3.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-4",
          "question": "Which operator represents logical AND in Java?",
          "options": [
            "&&",
            "||",
            "!",
            "=="
          ],
          "correctAnswer": 0,
          "explanation": "The && operator is logical AND; it is true only when both operands are true.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-5",
          "question": "Which operator represents logical OR in Java?",
          "options": [
            "&&",
            "||",
            "!",
            "%"
          ],
          "correctAnswer": 1,
          "explanation": "The || operator is logical OR; it is true when at least one operand is true.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-6",
          "question": "How many times does this loop run: for (int i = 0; i < 5; i++) ?",
          "options": [
            "4",
            "5",
            "6",
            "0"
          ],
          "correctAnswer": 1,
          "explanation": "i takes the values 0, 1, 2, 3, 4 (stopping when i reaches 5), so the loop body runs 5 times.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-7",
          "question": "The keyword used to run alternative code when an if condition is false is",
          "options": [
            "elif",
            "else",
            "then",
            "otherwise"
          ],
          "correctAnswer": 1,
          "explanation": "The else clause runs when the if condition is false.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-8",
          "question": "Which operator tests whether two values are equal in Java?",
          "options": [
            "=",
            "==",
            "!=",
            "<="
          ],
          "correctAnswer": 1,
          "explanation": "The == operator tests equality. A single = is the assignment operator.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-9",
          "question": "What does the logical NOT operator (!) do to the value true?",
          "options": [
            "Returns true",
            "Returns false",
            "Causes an error",
            "Returns 1"
          ],
          "correctAnswer": 1,
          "explanation": "The ! operator negates a boolean, so !true is false.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-easy-10",
          "question": "A while loop continues to execute as long as its condition is",
          "options": [
            "false",
            "true",
            "zero",
            "null"
          ],
          "correctAnswer": 1,
          "explanation": "A while loop repeats its body while the boolean condition remains true, stopping once it becomes false.",
          "difficulty": "easy"
        },
        {
          "id": "q-u2-medium-1",
          "question": "What is printed? int x = 4; if (x > 2 && x < 10) System.out.println(\"yes\"); else System.out.println(\"no\");",
          "options": [
            "yes",
            "no",
            "nothing",
            "an error"
          ],
          "correctAnswer": 0,
          "explanation": "x is 4: 4 > 2 is true AND 4 < 10 is true, so the whole condition is true and \"yes\" is printed.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-2",
          "question": "How many times does the body of this loop execute: for (int i = 1; i <= 10; i += 2) ?",
          "options": [
            "10",
            "5",
            "6",
            "4"
          ],
          "correctAnswer": 1,
          "explanation": "i takes 1, 3, 5, 7, 9 (increasing by 2, stopping when i > 10), so the body runs 5 times.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-3",
          "question": "What is the output? int sum = 0; for (int i = 1; i <= 4; i++) sum += i; System.out.println(sum);",
          "options": [
            "4",
            "10",
            "6",
            "24"
          ],
          "correctAnswer": 1,
          "explanation": "The loop adds 1 + 2 + 3 + 4 = 10 to sum.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-4",
          "question": "Under short-circuit evaluation, in the expression (false && expensiveCheck()), the method expensiveCheck()",
          "options": [
            "is always called",
            "is not called, because false && anything is false",
            "causes an error",
            "is called twice"
          ],
          "correctAnswer": 1,
          "explanation": "With short-circuit &&, if the left operand is false the result is already false, so the right operand is not evaluated—expensiveCheck() is skipped.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-5",
          "question": "What does this print? int i = 0; while (i < 3) { System.out.print(i); i++; }",
          "options": [
            "012",
            "123",
            "0123",
            "0"
          ],
          "correctAnswer": 0,
          "explanation": "i prints 0, then 1, then 2 (stopping when i reaches 3), producing 012 with no spaces.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-6",
          "question": "A nested loop with an outer loop running 3 times and an inner loop running 4 times executes the inner body how many times total?",
          "options": [
            "7",
            "12",
            "3",
            "4"
          ],
          "correctAnswer": 1,
          "explanation": "The inner loop runs fully (4 times) for each of the 3 outer iterations: 3 × 4 = 12.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-7",
          "question": "Which condition correctly checks that an int n is even?",
          "options": [
            "n % 2 == 0",
            "n / 2 == 0",
            "n % 2 == 1",
            "n == 2"
          ],
          "correctAnswer": 0,
          "explanation": "An even number has a remainder of 0 when divided by 2, so n % 2 == 0 tests for evenness.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-8",
          "question": "What is the output? for (int i = 3; i > 0; i--) System.out.print(i);",
          "options": [
            "123",
            "321",
            "3210",
            "012"
          ],
          "correctAnswer": 1,
          "explanation": "Starting at 3 and decrementing, i prints 3, 2, 1 (stopping when i reaches 0), giving 321.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-9",
          "question": "In an if-else-if chain, once a condition evaluates to true and its block runs,",
          "options": [
            "all remaining conditions are also checked",
            "the remaining else-if conditions are skipped",
            "the program crashes",
            "the loop restarts"
          ],
          "correctAnswer": 1,
          "explanation": "In an if / else-if chain, control exits the chain after the first true condition's block runs; remaining branches are not evaluated.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-medium-10",
          "question": "What is the value of the expression !(3 > 5) ?",
          "options": [
            "true",
            "false",
            "3",
            "5"
          ],
          "correctAnswer": 0,
          "explanation": "3 > 5 is false, and the ! operator negates it to true.",
          "difficulty": "medium"
        },
        {
          "id": "q-u2-hard-1",
          "question": "What does this code print? int count = 0; for (int i = 1; i <= 20; i++) { if (i % 3 == 0) count++; } System.out.println(count);",
          "options": [
            "6",
            "7",
            "3",
            "20"
          ],
          "correctAnswer": 0,
          "explanation": "Multiples of 3 from 1 to 20 are 3, 6, 9, 12, 15, 18 — that is 6 numbers, so count is 6.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-2",
          "question": "Consider: int i = 1; while (i <= 100) { i *= 2; } System.out.println(i); What is printed?",
          "options": [
            "64",
            "128",
            "100",
            "256"
          ],
          "correctAnswer": 1,
          "explanation": "i doubles: 1,2,4,8,16,32,64,128. The loop continues while i <= 100; at i = 64 it doubles to 128, then 128 > 100 stops the loop, so 128 is printed.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-3",
          "question": "What is the output of the nested loop? for (int i = 1; i <= 3; i++) { for (int j = 1; j <= i; j++) { System.out.print(\"*\"); } System.out.println(); }",
          "options": [
            "A 3x3 block of stars",
            "A right triangle: *, then **, then ***",
            "One line of 6 stars",
            "Nothing"
          ],
          "correctAnswer": 1,
          "explanation": "The inner loop runs i times for each outer i: 1 star, then 2, then 3, each on its own line—forming a growing right triangle.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-4",
          "question": "What does this print? int x = 5; if (x > 0) if (x > 10) System.out.println(\"big\"); else System.out.println(\"small\");",
          "options": [
            "big",
            "small",
            "nothing",
            "an error"
          ],
          "correctAnswer": 1,
          "explanation": "The else binds to the nearest if (x > 10). Since x is 5 (>0 true, >10 false), the inner else runs, printing \"small\".",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-5",
          "question": "How many times does this loop print? int i = 0; while (i < 10) { if (i % 2 == 0) System.out.println(i); i++; }",
          "options": [
            "10 times",
            "5 times",
            "4 times",
            "0 times"
          ],
          "correctAnswer": 1,
          "explanation": "i ranges 0-9; even values 0,2,4,6,8 trigger a print—5 times.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-6",
          "question": "What is the result of this loop's sum? int sum = 0; for (int i = 10; i >= 1; i -= 3) sum += i; System.out.println(sum);",
          "options": [
            "22",
            "19",
            "20",
            "10"
          ],
          "correctAnswer": 0,
          "explanation": "i takes 10, 7, 4, 1 (decreasing by 3, stopping below 1). Sum = 10 + 7 + 4 + 1 = 22.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-7",
          "question": "A loop is intended to run but its body never executes: while (5 < 3) { ... }. Why?",
          "options": [
            "The syntax is invalid",
            "The condition 5 < 3 is false initially, so the body is skipped entirely",
            "The loop runs infinitely",
            "5 is not a number"
          ],
          "correctAnswer": 1,
          "explanation": "A while loop checks its condition before each iteration. Since 5 < 3 is false from the start, the body never runs.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-8",
          "question": "What is printed? boolean b = (4 % 2 == 0) || (10 / 0 == 0); System.out.println(b);",
          "options": [
            "true",
            "false",
            "a runtime error occurs",
            "0"
          ],
          "correctAnswer": 0,
          "explanation": "Short-circuit || evaluates the left side first: 4 % 2 == 0 is true, so the result is true and the right side (which would divide by zero) is never evaluated—no error occurs.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-9",
          "question": "Consider a loop meant to run 5 times but written as for (int i = 0; i <= 5; i++). What is the actual number of iterations?",
          "options": [
            "5",
            "6",
            "4",
            "infinite"
          ],
          "correctAnswer": 1,
          "explanation": "With i <= 5, i takes 0,1,2,3,4,5 — 6 iterations. This off-by-one error runs one extra time compared to the intended 5.",
          "difficulty": "hard"
        },
        {
          "id": "q-u2-hard-10",
          "question": "What does this print? int n = 6; int result = 1; for (int i = 1; i <= n; i++) result *= i; System.out.println(result);",
          "options": [
            "720",
            "36",
            "21",
            "120"
          ],
          "correctAnswer": 0,
          "explanation": "This computes 6 factorial: 1*2*3*4*5*6 = 720.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 3,
      "title": "Class Creation",
      "questions": [
        {
          "id": "q-u3-easy-1",
          "question": "In Java, a class is best described as",
          "options": [
            "a single value",
            "a blueprint or template for creating objects",
            "a loop",
            "a primitive type"
          ],
          "correctAnswer": 1,
          "explanation": "A class defines the attributes (fields) and behaviors (methods) that its objects will have—it is a blueprint for objects.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-2",
          "question": "A special method used to initialize a new object is called a",
          "options": [
            "constructor",
            "accessor",
            "loop",
            "variable"
          ],
          "correctAnswer": 0,
          "explanation": "A constructor initializes an object's state when it is created with new. It has the same name as the class and no return type.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-3",
          "question": "The variables that store an object's data are called",
          "options": [
            "instance variables (fields)",
            "parameters",
            "loops",
            "constructors"
          ],
          "correctAnswer": 0,
          "explanation": "Instance variables (fields) hold the data/state of each object.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-4",
          "question": "Which access modifier keeps a field accessible only within its own class?",
          "options": [
            "public",
            "private",
            "static",
            "void"
          ],
          "correctAnswer": 1,
          "explanation": "The private modifier restricts access to within the same class, supporting encapsulation.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-5",
          "question": "A method that returns the value of a private field is commonly called a(n)",
          "options": [
            "mutator",
            "accessor (getter)",
            "constructor",
            "loop"
          ],
          "correctAnswer": 1,
          "explanation": "An accessor (getter) method returns a field's value, providing controlled read access to private data.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-6",
          "question": "A method that changes the value of a private field is commonly called a(n)",
          "options": [
            "accessor (getter)",
            "mutator (setter)",
            "constructor",
            "printer"
          ],
          "correctAnswer": 1,
          "explanation": "A mutator (setter) method modifies a field's value, providing controlled write access to private data.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-7",
          "question": "The keyword 'this' inside an instance method refers to",
          "options": [
            "the class itself",
            "the current object on which the method was called",
            "a static variable",
            "the parameter list"
          ],
          "correctAnswer": 1,
          "explanation": "The keyword this refers to the current object, often used to distinguish a field from a parameter of the same name.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-8",
          "question": "Encapsulation in object-oriented programming refers to",
          "options": [
            "making all fields public",
            "bundling data and methods together and restricting direct access to the data",
            "avoiding classes",
            "using only loops"
          ],
          "correctAnswer": 1,
          "explanation": "Encapsulation bundles data and behavior within a class and hides internal data (often via private fields), exposing controlled access through methods.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-9",
          "question": "Which keyword indicates that a method belongs to the class rather than to any individual object?",
          "options": [
            "static",
            "private",
            "void",
            "new"
          ],
          "correctAnswer": 0,
          "explanation": "A static method belongs to the class itself and is called on the class, not on a specific object.",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-easy-10",
          "question": "The signature of a method includes its name and its",
          "options": [
            "return value at runtime",
            "parameter list (types and order)",
            "comments",
            "field values"
          ],
          "correctAnswer": 1,
          "explanation": "A method's signature consists of its name and its parameter list (the number, types, and order of parameters).",
          "difficulty": "easy"
        },
        {
          "id": "q-u3-medium-1",
          "question": "Why are fields typically made private and accessed through public methods?",
          "options": [
            "To make code longer",
            "To enforce encapsulation, allowing the class to control and validate how its data is accessed and modified",
            "To slow the program",
            "Because private fields cannot store data"
          ],
          "correctAnswer": 1,
          "explanation": "Private fields with public accessor/mutator methods enforce encapsulation, letting the class control and validate access to its internal state.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-2",
          "question": "In a constructor, the statement this.name = name; is used to",
          "options": [
            "create a new class",
            "assign the parameter 'name' to the instance field 'name', distinguishing them via this",
            "delete the field",
            "call another method"
          ],
          "correctAnswer": 1,
          "explanation": "When a parameter and field share a name, this.name refers to the field and name to the parameter, so this.name = name assigns the parameter's value to the field.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-3",
          "question": "Method overloading occurs when",
          "options": [
            "two classes have the same name",
            "multiple methods in the same class share a name but have different parameter lists",
            "a method calls itself",
            "a field is private"
          ],
          "correctAnswer": 1,
          "explanation": "Overloading provides multiple methods with the same name but distinct parameter lists; the compiler selects the correct one based on the arguments.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-4",
          "question": "If a class defines no constructor, Java provides",
          "options": [
            "no way to create objects",
            "a default no-argument constructor",
            "a static method",
            "an infinite loop"
          ],
          "correctAnswer": 1,
          "explanation": "If no constructor is written, Java supplies a default no-argument constructor that initializes fields to their default values.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-5",
          "question": "A mutator method that validates input before changing a field (e.g., rejecting negative ages) demonstrates the benefit of",
          "options": [
            "making fields public",
            "encapsulation, since the class controls how its data can be changed",
            "avoiding methods",
            "using loops"
          ],
          "correctAnswer": 1,
          "explanation": "By validating input in a setter, the class protects its data integrity—a key advantage of encapsulation over exposing public fields.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-6",
          "question": "The toString method of a class is used to",
          "options": [
            "convert the object to an int",
            "return a String representation of the object",
            "delete the object",
            "create a new object"
          ],
          "correctAnswer": 1,
          "explanation": "Overriding toString provides a readable String representation of an object, which is used automatically when the object is printed.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-7",
          "question": "A static variable in a class is",
          "options": [
            "unique to each object",
            "shared among all instances of the class",
            "never accessible",
            "a local variable"
          ],
          "correctAnswer": 1,
          "explanation": "A static (class) variable is shared by all objects of the class—there is one copy for the whole class, not one per object.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-8",
          "question": "What distinguishes a local variable from an instance variable?",
          "options": [
            "Local variables belong to objects",
            "A local variable is declared inside a method and exists only during that method's execution, while an instance variable belongs to the object",
            "They are identical",
            "Instance variables cannot store data"
          ],
          "correctAnswer": 1,
          "explanation": "Local variables live only within the method (or block) where they are declared; instance variables belong to the object and persist as long as the object exists.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-9",
          "question": "A method declared as public int getScore() must",
          "options": [
            "return no value",
            "return an int value",
            "take an int parameter",
            "be static"
          ],
          "correctAnswer": 1,
          "explanation": "The return type int means the method must return an int value using a return statement.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-medium-10",
          "question": "Two objects of the same class",
          "options": [
            "share all their instance variable values",
            "each have their own copy of the instance variables",
            "cannot exist at once",
            "are always equal"
          ],
          "correctAnswer": 1,
          "explanation": "Each object has its own separate set of instance variables, so their states can differ independently.",
          "difficulty": "medium"
        },
        {
          "id": "q-u3-hard-1",
          "question": "A class has a private field balance and only a getter (no setter). What is the effect on code outside the class?",
          "options": [
            "Outside code can freely change balance",
            "Outside code can read balance via the getter but cannot directly modify it",
            "balance is inaccessible entirely",
            "balance becomes static"
          ],
          "correctAnswer": 1,
          "explanation": "With only a getter, external code can read balance but cannot change it directly—modifications must occur through the class's own methods, protecting the data.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-2",
          "question": "Consider two overloaded methods: void print(int x) and void print(double x). When print(5) is called, which runs?",
          "options": [
            "print(double x), because all numbers are doubles",
            "print(int x), because 5 is an int literal that matches the int parameter exactly",
            "neither, it is ambiguous",
            "both run"
          ],
          "correctAnswer": 1,
          "explanation": "The literal 5 is an int, which matches print(int x) exactly, so that overload is selected over the double version.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-3",
          "question": "Why can a static method NOT directly access an instance (non-static) variable?",
          "options": [
            "Static methods cannot access any variables",
            "A static method belongs to the class and may run without any object, so there is no particular instance's variable to access",
            "instance variables do not exist",
            "it is a syntax preference"
          ],
          "correctAnswer": 1,
          "explanation": "Because a static method is associated with the class and can be called without creating an object, there is no specific instance whose non-static fields it could access.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-4",
          "question": "An object obj1 is assigned to obj2 with Account obj2 = obj1;. What is true?",
          "options": [
            "obj2 is an independent copy of obj1",
            "obj2 and obj1 refer to the same object, so changes through one are visible through the other",
            "obj2 is null",
            "the fields are copied but not the object"
          ],
          "correctAnswer": 1,
          "explanation": "Assigning one reference to another copies the reference, not the object. Both variables point to the same object, so a change made through either is seen by both.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-5",
          "question": "A constructor is written as public Dog(String name) { name = name; } (without 'this'). What is the likely bug?",
          "options": [
            "It works correctly",
            "The parameter is assigned to itself, leaving the instance field unset (still its default value)",
            "It creates two objects",
            "It causes a compile error"
          ],
          "correctAnswer": 1,
          "explanation": "Without this, name = name assigns the parameter to itself; the instance field is never set and remains its default (null). Using this.name = name fixes it.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-6",
          "question": "A class uses a static counter incremented in its constructor. After creating three objects, the counter equals 3 because",
          "options": [
            "each object has its own counter",
            "the static variable is shared across all instances, so every constructor call increments the same variable",
            "the counter resets each time",
            "static variables cannot be incremented"
          ],
          "correctAnswer": 1,
          "explanation": "A static variable is shared by the whole class; each constructor call increments the single shared counter, so it reflects the total number of objects created.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-7",
          "question": "Why is returning a reference to a private mutable object from a getter potentially a problem for encapsulation?",
          "options": [
            "It is never a problem",
            "External code receiving the reference could modify the private object's internal state directly, bypassing the class's control",
            "getters cannot return objects",
            "it makes the field static"
          ],
          "correctAnswer": 1,
          "explanation": "If a getter returns the actual reference to a mutable internal object, callers can modify that object directly, breaking encapsulation. Returning a copy avoids this.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-8",
          "question": "A method public void setAge(int age) { if (age >= 0) this.age = age; } ignores negative input. This design choice reflects",
          "options": [
            "a bug that should be removed",
            "intentional data validation to maintain a valid object state",
            "that fields should be public",
            "that constructors are unnecessary"
          ],
          "correctAnswer": 1,
          "explanation": "Validating input in the mutator preserves the object's invariants (a non-negative age), an intentional encapsulation practice that protects data integrity.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-9",
          "question": "If two different classes both define a method named calculate with different behavior, calling obj.calculate()",
          "options": [
            "always runs the same code",
            "runs the version defined in the class of the object obj refers to",
            "causes a conflict",
            "runs both versions"
          ],
          "correctAnswer": 1,
          "explanation": "The method that runs depends on the actual class of the object; each class's calculate is independent, and the object's type determines which is invoked.",
          "difficulty": "hard"
        },
        {
          "id": "q-u3-hard-10",
          "question": "Encapsulation is said to reduce the impact of internal changes. Why?",
          "options": [
            "It makes all code public",
            "Because external code interacts only through public methods, the class's internal implementation can change without breaking that external code",
            "it prevents any changes",
            "it removes methods"
          ],
          "correctAnswer": 1,
          "explanation": "When callers depend only on a stable public interface, the class can change its private internals freely without affecting external code—a major benefit of encapsulation.",
          "difficulty": "hard"
        }
      ]
    },
    {
      "unitNumber": 4,
      "title": "Data Collections",
      "questions": [
        {
          "id": "q-u4-easy-1",
          "question": "In Java, an array index for the first element is",
          "options": [
            "1",
            "0",
            "-1",
            "the array length"
          ],
          "correctAnswer": 1,
          "explanation": "Array indices start at 0, so the first element is at index 0.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-2",
          "question": "For an array named arr, the number of elements is given by",
          "options": [
            "arr.length()",
            "arr.length",
            "arr.size()",
            "length(arr)"
          ],
          "correctAnswer": 1,
          "explanation": "For arrays, length is a field (no parentheses): arr.length. (Strings use length() and ArrayList uses size().)",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-3",
          "question": "Which class provides a resizable list in Java?",
          "options": [
            "Array",
            "ArrayList",
            "int",
            "String"
          ],
          "correctAnswer": 1,
          "explanation": "ArrayList is a resizable list that can grow and shrink dynamically, unlike a fixed-size array.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-4",
          "question": "To get the number of elements currently in an ArrayList named list, you use",
          "options": [
            "list.length",
            "list.size()",
            "list.count",
            "size(list)"
          ],
          "correctAnswer": 1,
          "explanation": "ArrayList uses the size() method to return its current number of elements.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-5",
          "question": "Given int[] nums = {10, 20, 30};, what is nums[1] ?",
          "options": [
            "10",
            "20",
            "30",
            "1"
          ],
          "correctAnswer": 1,
          "explanation": "Index 1 is the second element, which is 20 (index 0 is 10).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-6",
          "question": "Which loop is specifically designed to iterate over each element of an array or list without an index?",
          "options": [
            "the enhanced for-each loop",
            "the do-while loop",
            "the switch statement",
            "the if statement"
          ],
          "correctAnswer": 0,
          "explanation": "The enhanced for (for-each) loop iterates directly over each element of a collection, e.g., for (int x : nums).",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-7",
          "question": "Which method adds an element to the end of an ArrayList?",
          "options": [
            "add",
            "append",
            "push",
            "insert"
          ],
          "correctAnswer": 0,
          "explanation": "The add(element) method appends an element to the end of an ArrayList.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-8",
          "question": "An ArrayList in Java stores",
          "options": [
            "primitive types only",
            "objects (reference types), such as Integer or String",
            "only int values directly",
            "no elements"
          ],
          "correctAnswer": 1,
          "explanation": "ArrayList stores objects; primitives are stored via wrapper classes (e.g., Integer, Double) through autoboxing.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-9",
          "question": "What is the last valid index of an array with 8 elements?",
          "options": [
            "8",
            "7",
            "0",
            "9"
          ],
          "correctAnswer": 1,
          "explanation": "With 8 elements indexed from 0, the last valid index is 8 - 1 = 7.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-easy-10",
          "question": "To access the element at index i in an ArrayList named list, you use",
          "options": [
            "list[i]",
            "list.get(i)",
            "list.at(i)",
            "list.index(i)"
          ],
          "correctAnswer": 1,
          "explanation": "ArrayList uses the get(i) method to access an element by index; the bracket syntax [] is only for arrays.",
          "difficulty": "easy"
        },
        {
          "id": "q-u4-medium-1",
          "question": "What does this print? int[] a = {2, 4, 6, 8}; int sum = 0; for (int x : a) sum += x; System.out.println(sum);",
          "options": [
            "20",
            "8",
            "4",
            "10"
          ],
          "correctAnswer": 0,
          "explanation": "The for-each loop adds every element: 2 + 4 + 6 + 8 = 20.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-2",
          "question": "Accessing arr[arr.length] in Java results in",
          "options": [
            "the last element",
            "an ArrayIndexOutOfBoundsException",
            "the first element",
            "zero"
          ],
          "correctAnswer": 1,
          "explanation": "Valid indices are 0 to length - 1. Index length is out of bounds and throws an ArrayIndexOutOfBoundsException.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-3",
          "question": "Which loop correctly prints all elements of int[] arr using an index?",
          "options": [
            "for (int i = 0; i <= arr.length; i++)",
            "for (int i = 0; i < arr.length; i++)",
            "for (int i = 1; i < arr.length; i++)",
            "for (int i = 0; i < arr.length - 2; i++)"
          ],
          "correctAnswer": 1,
          "explanation": "for (int i = 0; i < arr.length; i++) visits every index from 0 to length - 1. Using <= would go out of bounds.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-4",
          "question": "After ArrayList<Integer> list = new ArrayList<>(); list.add(5); list.add(10); list.remove(0);, what does list contain?",
          "options": [
            "[5]",
            "[10]",
            "[5, 10]",
            "[]"
          ],
          "correctAnswer": 1,
          "explanation": "remove(0) removes the element at index 0 (the 5), leaving [10].",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-5",
          "question": "What is the purpose of a linear search on an array?",
          "options": [
            "To sort the array",
            "To find a target value by checking each element in sequence",
            "To reverse the array",
            "To count the elements"
          ],
          "correctAnswer": 1,
          "explanation": "A linear search examines elements one by one from start until it finds the target or reaches the end.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-6",
          "question": "What does list.set(1, 99) do to an ArrayList list?",
          "options": [
            "Adds 99 at the end",
            "Replaces the element at index 1 with 99",
            "Removes index 1",
            "Inserts 99 before index 1"
          ],
          "correctAnswer": 1,
          "explanation": "The set(index, element) method replaces the existing element at the given index with the new value.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-7",
          "question": "Why must you be careful when removing elements from an ArrayList while iterating over it by index?",
          "options": [
            "Removal is not allowed",
            "Removing shifts subsequent elements' indices, which can cause elements to be skipped",
            "It always crashes",
            "Indices never change"
          ],
          "correctAnswer": 1,
          "explanation": "When an element is removed, later elements shift down by one index. If the loop index still advances, the shifted element can be skipped.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-8",
          "question": "What does this print? String[] words = {\"a\", \"b\", \"c\"}; System.out.println(words.length);",
          "options": [
            "2",
            "3",
            "4",
            "0"
          ],
          "correctAnswer": 1,
          "explanation": "The array has 3 elements, so words.length is 3.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-9",
          "question": "To traverse a 2D array int[][] grid, you typically use",
          "options": [
            "a single loop",
            "nested loops, one for rows and one for columns",
            "no loops",
            "a switch statement"
          ],
          "correctAnswer": 1,
          "explanation": "A 2D array is traversed with nested loops: the outer loop over rows and the inner loop over the columns within each row.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-medium-10",
          "question": "An algorithm to find the maximum value in an array starts by",
          "options": [
            "assuming the first element is the max, then comparing it with each remaining element",
            "sorting the array first always",
            "checking only the last element",
            "summing all elements"
          ],
          "correctAnswer": 0,
          "explanation": "A common max-finding approach initializes the maximum to the first element, then updates it whenever a larger element is found during traversal.",
          "difficulty": "medium"
        },
        {
          "id": "q-u4-hard-1",
          "question": "What does this print? int[] a = {3, 1, 4, 1, 5}; int c = 0; for (int i = 0; i < a.length; i++) if (a[i] == 1) c++; System.out.println(c);",
          "options": [
            "1",
            "2",
            "3",
            "5"
          ],
          "correctAnswer": 1,
          "explanation": "The loop counts elements equal to 1. The array has 1 at index 1 and index 3, so c = 2.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-2",
          "question": "What is the result? int[] a = {5, 10, 15}; for (int i = 0; i < a.length; i++) a[i] = a[i] * 2; System.out.println(a[2]);",
          "options": [
            "15",
            "30",
            "10",
            "5"
          ],
          "correctAnswer": 1,
          "explanation": "Each element is doubled: {10, 20, 30}. a[2] is 30.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-3",
          "question": "What does this print? int[] a = {4, 2, 7, 1}; int max = a[0]; for (int x : a) if (x > max) max = x; System.out.println(max);",
          "options": [
            "4",
            "7",
            "1",
            "2"
          ],
          "correctAnswer": 1,
          "explanation": "The loop tracks the largest value seen. The maximum in {4, 2, 7, 1} is 7.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-4",
          "question": "Consider a 2D array int[][] m = {{1,2,3},{4,5,6}};. What is m[1][2] ?",
          "options": [
            "3",
            "6",
            "5",
            "2"
          ],
          "correctAnswer": 1,
          "explanation": "m[1] is the second row {4,5,6}; index [2] of that row is 6.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-5",
          "question": "Why might this loop skip elements? ArrayList<Integer> list has [2,2,3]; for (int i = 0; i < list.size(); i++) if (list.get(i)==2) list.remove(i);",
          "options": [
            "It works perfectly",
            "After removing an element, the next element shifts into index i, but i still increments, so that shifted element is skipped",
            "remove is not a method",
            "the list cannot hold 2"
          ],
          "correctAnswer": 1,
          "explanation": "Removing index 0 shifts the second 2 into index 0, but i becomes 1, skipping it. This classic bug leaves a 2 unremoved.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-6",
          "question": "What does this print? int[] a = {1,2,3,4,5}; int sum = 0; for (int i = 0; i < a.length; i += 2) sum += a[i]; System.out.println(sum);",
          "options": [
            "9",
            "15",
            "6",
            "5"
          ],
          "correctAnswer": 0,
          "explanation": "The loop adds elements at indices 0, 2, 4: a[0]=1, a[2]=3, a[4]=5. Sum = 1 + 3 + 5 = 9.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-7",
          "question": "A method receives an int array and doubles every element inside a loop. After the method returns, the caller's array",
          "options": [
            "is unchanged",
            "reflects the doubled values, because arrays are objects passed by reference",
            "becomes null",
            "is a separate copy"
          ],
          "correctAnswer": 1,
          "explanation": "Arrays are objects; the method receives a reference to the same array, so modifications to its elements are visible to the caller after return.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-8",
          "question": "What does this code compute? int[] a = {8, 3, 5, 3, 9}; int idx = 0; for (int i = 1; i < a.length; i++) if (a[i] < a[idx]) idx = i; System.out.println(idx);",
          "options": [
            "0",
            "1",
            "the index of the smallest element (1)",
            "4"
          ],
          "correctAnswer": 2,
          "explanation": "idx tracks the index of the minimum value. The smallest element is 3 at index 1 (the first occurrence), so idx = 1.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-9",
          "question": "To count how many rows in int[][] grid a full traversal visits, and each row has the same number of columns c with r rows, the inner loop body executes how many times total?",
          "options": [
            "r + c",
            "r * c",
            "r",
            "c"
          ],
          "correctAnswer": 1,
          "explanation": "For each of the r rows, the inner loop runs c times, so the inner body executes r * c times total.",
          "difficulty": "hard"
        },
        {
          "id": "q-u4-hard-10",
          "question": "What does this print? ArrayList<Integer> list = new ArrayList<>(); for (int i = 1; i <= 3; i++) list.add(i * i); System.out.println(list);",
          "options": [
            "[1, 2, 3]",
            "[1, 4, 9]",
            "[2, 4, 6]",
            "[1, 8, 27]"
          ],
          "correctAnswer": 1,
          "explanation": "The loop adds i*i for i = 1,2,3: 1, 4, 9. The ArrayList prints as [1, 4, 9].",
          "difficulty": "hard"
        }
      ]
    }
  ]
}
