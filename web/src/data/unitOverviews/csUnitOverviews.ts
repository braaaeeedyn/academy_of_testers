import type { SubjectUnitOverview } from './types'

export const CSA_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Computer Science A',
  units: [
    {
      unitNumber: 1,
      title: 'Using Objects and Methods',
      subunits: [
        {
          id: '1-1',
          title: 'Why Programming? Why Java?',
          summary:
            'Programming is how we give precise instructions to computers so they can help us solve problems. We use programs to build apps and websites, analyze data, automate boring tasks, create games, and solve real-world problems.\n\n' +
            'A program is just a clear, ordered set of steps written in a language the computer understands. When you learn to program, you are learning how to design those steps so they are both correct and easy to understand.\n\n' +
            'Java is popular because it runs on almost any device (“write once, run anywhere”), is used widely in industry, and encourages good programming habits. It is strongly typed, which helps catch mistakes early, and object-oriented, which models real-world things well. That makes Java an excellent first language for AP Computer Science A.',
          keyIdeas: [
            'Programming lets us automate repetitive tasks and model complex real-world systems.',
            'Java is object-oriented, strongly typed, and runs on the JVM for platform independence.',
            'The AP Java subset focuses on a safe, limited set of features you must master for the exam.',
          ],
        },
        {
          id: '1-2',
          title: 'Variables and Primitive Data Types',
          summary:
            'Variables store information in your program. You can picture a variable as a labeled box: the type describes what kind of value the box can hold, the name is the label, and the value is what is currently inside.\n\n' +
            'Primitive data types store simple values directly. In AP CSA you mainly work with int for whole numbers, double for decimals, and boolean for true/false conditions, plus char for single characters. Choosing the right type is important because it controls what operations are allowed and how the value behaves in expressions.\n\n' +
            'You will constantly declare variables, assign new values, and use them in expressions and method calls. Being fluent with variables and primitive types lets you focus on problem solving instead of getting stuck on basic syntax.',
          keyIdeas: [
            'Primitive types: int, double, boolean, and others like char (char is not heavily emphasized on the exam).',
            'Variable declarations specify a type and a name; they must be declared before use.',
            'Type compatibility matters: you cannot assign a double to an int without casting.',
            'Meaningful variable names make programs easier to read and debug.',
          ],
          exampleCode: `public class ScoreExample {
    public static void main(String[] args) {
        int quizzes = 3;            // whole-number count
        double average = 92.5;      // decimal average score
        boolean passed = average >= 70;

        System.out.println("Quizzes taken: " + quizzes);
        System.out.println("Average score: " + average);
        System.out.println("Passing? " + passed);
    }
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'This short program declares three variables of different primitive types and then prints them. Notice how the boolean expression average >= 70 is evaluated first, then stored in the passed variable. This pattern—declare, compute, print—is extremely common on the exam.',
        },
        {
          id: '1-3',
          title: 'Expressions and Assignment Statements',
          summary:
            'An expression is any combination of values, variables, and operators that produces a single value. For example, 5 + 3 and x * 2 are expressions that Java can evaluate.\n\n' +
            'Assignment statements follow the pattern variable = value;. Java evaluates the expression on the right-hand side first, then stores that result into the variable on the left. This is how you update variables as your program runs.\n\n' +
            'On the AP exam, you will often trace expressions and assignments like these to predict final variable values. Practicing step-by-step evaluation builds confidence when reading unfamiliar code.',
          keyIdeas: [
            'Operator precedence follows standard math (parentheses, multiplication/division, then addition/subtraction).',
            'Integer division truncates decimals; 7 / 2 evaluates to 3, not 3.5.',
            'Compound expressions are evaluated left to right for operators of equal precedence.',
          ],
          exampleCode: `int result = 10 + 4;    // expression evaluated first, then stored

int total = 20;          // initial assignment
total = total + 5;       // reassignment using an expression`,
          exampleLanguage: 'java',
          exampleExplanation:
            'In the first line, Java evaluates 10 + 4 to get 14, then stores 14 in result. In the second pair of lines, total starts as 20, then total + 5 is evaluated (25) and stored back into total. This pattern—evaluate on the right, assign on the left—is fundamental to reasoning about state changes in a program.',
        },
        {
          id: '1-4',
          title: 'Assignment Statements and Input',
          summary:
            'Variables in Java can be reassigned, which means you can change their stored values over time. For example, if int x = 5; you can later write x = 10; to update x.\n\n' +
            'Programs often need user input. The Scanner class lets you read values typed at the keyboard from System.in. Different Scanner methods read different kinds of data, such as nextInt() for integers, nextDouble() for decimals, and nextLine() for full lines of text.\n\n' +
            'Combining assignment with Scanner input allows your programs to react to user data instead of only using hard-coded values.',
          keyIdeas: [
            'Assignment uses a single equals sign (=) and copies the evaluated value on the right into the variable on the left.',
            'Using Scanner with System.in allows programs to read user input from the keyboard.',
            'Common input pitfalls: mixing nextInt/nextDouble with nextLine, and off-by-one reads.',
          ],
          exampleCode: `int x = 5;          // initial value
x = 10;             // reassigned value

Scanner input = new Scanner(System.in);
System.out.print("Enter name: ");
String name = input.nextLine();   // reads an entire line of text`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The first two lines show that variables are not fixed; x changes from 5 to 10 through reassignment. The Scanner example creates a Scanner tied to System.in and then uses nextLine() to read a full line of text into the name variable. On the exam, you should be comfortable reading and writing simple patterns like this for user input.',
        },
        {
          id: '1-5',
          title: 'Casting and Ranges of Variables',
          summary:
            'Each primitive numeric type has limits on the values it can represent. For example, int can store values roughly from –2 billion to +2 billion. Going outside this range causes overflow, which can lead to surprising results.\n\n' +
            'Casting is the process of converting a value from one type to another. Some conversions, like assigning an int to a double, happen automatically (widening). Others, like converting a double to an int, require an explicit cast and may lose information (narrowing).\n\n' +
            'Understanding ranges and casting is important for writing correct arithmetic code and for interpreting exam questions that involve type conversion or overflow.',
          keyIdeas: [
            'Casting can truncate values (e.g., (int) 3.9 becomes 3).',
            'Widening conversions (int to double) are safe; narrowing conversions (double to int) can lose information.',
            'Integer types have limited range; overflow can cause unexpected wraparound results.',
          ],
          exampleCode: `int big = 2147483647;  // near the maximum int value
big = big + 1;          // overflow: wraps around into the negative range

double x = 5;           // int 5 is widened to double 5.0 automatically
int y = (int) 3.9;      // y becomes 3 (decimal part is truncated)`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The first example shows integer overflow: adding 1 to a very large int does not throw an error, but instead wraps around into the negative range. In the second part, assigning 5 to a double is a widening conversion that keeps the value. Casting 3.9 to int performs a narrowing conversion, dropping the decimal portion and leaving y equal to 3.',
        },
        {
          id: '1-6',
          title: 'Compound Assignment Operators',
          summary:
            'Compound assignment operators like +=, -=, *=, and /= are shortcuts for updating a variable based on its current value. Instead of writing x = x + 5, you can write x += 5 to express the same idea more compactly.\n\n' +
            'These shortcuts are extremely common in loops and counters, where a variable is updated on each iteration. They make code more concise and highlight that the variable is being changed relative to its previous value.\n\n' +
            'However, readability still matters. In simple arithmetic updates, compound assignment is helpful. In very complex expressions, using the long form can make it easier to see exactly what is happening.',
          keyIdeas: [
            'Compound operators such as +=, -=, *=, and /= update a variable using its current value.',
            'x += 5 is equivalent to x = x + 5 but may be slightly more concise.',
            'You should still consider readability; do not overuse shorthand when it hurts clarity.',
          ],
          exampleCode: `int x = 10;
x += 5;   // x = x + 5  -> x becomes 15
x -= 2;   // x = x - 2  -> x becomes 13
x *= 3;   // x = x * 3  -> x becomes 39
x /= 4;   // x = x / 4  -> x becomes 9 (integer division)

int score = 0;
score += 10;  // very common pattern in loops and counters`,
          exampleLanguage: 'java',
          exampleExplanation:
            'Each compound assignment takes the current value of the variable, applies an operation, and stores the result back into the same variable. In loops, you will often see patterns like total += value or count += 1 to accumulate sums and counts. Tracing these updates carefully is important when answering AP exam questions about loop behavior.',
        },
        {
          id: '1-7',
          title: 'Application Program Interface (API) and Libraries',
          summary:
            'The Java API (Application Programming Interface) is a giant collection of prewritten code that comes with the language. It includes classes and methods for tasks like math, user input, Strings, collections, and much more.\n\n' +
            'Instead of reinventing everything yourself, you import and use these libraries. For example, you rely on Math for common math functions, Scanner for reading input, and String methods for working with text.\n\n' +
            'On the AP exam, you are given a Java Quick Reference that summarizes the APIs you are expected to know. Part of doing well is being comfortable looking up methods and understanding their parameters and return types.',
          keyIdeas: [
            'The Java API documentation lists classes, methods, and parameter/return types.',
            'On the exam, you are given a Java Quick Reference for common classes and methods.',
            'Using library methods correctly requires reading their contracts and respecting preconditions.',
          ],
          exampleCode: `import java.util.Scanner;   // import from the java.util package

public class InputExample {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);   // Scanner comes from the API

        System.out.print("Enter an integer: ");
        int value = input.nextInt();

        System.out.println("You typed: " + value);
    }
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'This example imports the Scanner class from the java.util package, creates a Scanner object, and uses a method from the API (nextInt) to read input. Understanding how to import and call library methods lets you focus on solving problems instead of writing low-level code from scratch.',
        },
        {
          id: '1-8',
          title: 'Documentation With Comments',
          summary:
            'Comments are notes you add to your code for people, not for the computer. They explain what the code is doing, why certain choices were made, and how to use classes or methods.\n\n' +
            'Java supports single-line comments with //, multi-line comments with /* ... */, and JavaDoc comments with /** ... */. JavaDoc comments are especially useful for documenting methods and classes in a standardized way.\n\n' +
            'Good comments make your code easier to understand for yourself, your classmates, your teacher, and graders. They should add insight, not repeat what the code already clearly states.',
          keyIdeas: [
            'Line comments (//) and block comments (/* ... */) can clarify complex logic.',
            'Good comments describe why the code exists or tricky edge cases, not obvious steps.',
            'Consistent naming and formatting often reduce the need for excessive comments.',
          ],
          exampleCode: `// This stores the score for a single student
int score = 95;

/*
 * This program calculates grades for a class.
 * It prints each student name and letter grade.
 */

/**
 * Calculates the average of two scores.
 *
 * @param a first score
 * @param b second score
 * @return the arithmetic mean of a and b
 */
public static double average(int a, int b) {
    return (a + b) / 2.0;
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The first two examples show single-line and multi-line comments that describe variables and overall program behavior. The JavaDoc example documents a method’s purpose, parameters, and return value. This style of documentation makes it much easier for others (and your future self) to understand and correctly use your code.',
        },
        {
          id: '1-9',
          title: 'Calling a Void Method With Parameters',
          summary:
            'A method is a reusable block of code that performs a specific action. Void methods perform an action but do not return a value to the caller.\n\n' +
            'When you call a void method with parameters, you pass in arguments that match the method’s parameter types and order. Inside the method, those parameter variables hold the values you passed.\n\n' +
            'Practicing these kinds of calls builds your ability to break problems into smaller pieces and to reuse logic across your program.',
          keyIdeas: [
            'A void method performs an action but does not return a value to the caller.',
            'Arguments in a method call must match the number and types of the formal parameters.',
            'Side effects (like printing to the console) are common in void methods.',
          ],
          exampleCode: `public static void printMessage(String msg) {
    System.out.println(msg);
}

// Somewhere in main or another method:
printMessage("Hello");     // passes "Hello" as the argument`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The printMessage method takes a String parameter called msg and prints it. When you call printMessage("Hello");, the literal "Hello" is passed into the method and bound to msg. Understanding how parameters receive arguments is essential for designing and using your own reusable methods.',
        },
        {
          id: '1-10',
          title: 'Calling a Non-Void Method',
          summary:
            'Non-void methods return a value that your code can use. For example, a method might add two numbers and return the result so you can store it in a variable or use it in another expression.\n\n' +
            'When you call a non-void method, Java evaluates the call and replaces it with the returned value. Because of this, you must either store or use that value; otherwise the work the method did is effectively thrown away.\n\n' +
            'On the AP exam, you will often see patterns like int sum = add(3, 4); and nested method calls. Being able to read and trace these calls is an important skill.',
          keyIdeas: [
            'Non-void methods must be used in an expression or assignment; otherwise, the returned value is ignored.',
            'Method calls can be nested, but readability should be considered when chaining many calls.',
            'Return types determine where a method can be used (e.g., int-returning methods in arithmetic expressions).',
          ],
          exampleCode: `public static int add(int a, int b) {
    return a + b;
}

public static void main(String[] args) {
    int sum = add(3, 4);    // sum receives the returned value 7
    System.out.println(sum);
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The add method takes two int parameters and returns their sum. In main, the call add(3, 4) is evaluated to 7, which is then assigned to sum. If you called add(3, 4); without assigning or printing it, the result would be computed and then lost.',
        },
        {
          id: '1-11',
          title: 'Using the Math Class',
          summary:
            'The Math class provides useful static methods for performing common numeric computations. Because these methods are static, you call them using the class name rather than creating a Math object.\n\n' +
            'Commonly used methods in AP CSA include Math.sqrt for square roots, Math.pow for exponents, Math.abs for absolute value, and Math.random for generating random numbers between 0.0 (inclusive) and 1.0 (exclusive).\n\n' +
            'These methods let you write powerful numeric expressions without implementing the underlying algorithms yourself. Understanding what each method returns and how to combine them in expressions is key for solving exam problems.',
          keyIdeas: [
            'Math methods are static; you call them using the class name, like Math.sqrt(9).',
            'Types matter: some methods return double even if arguments are integers.',
            'Rounding behavior (e.g., casting vs Math.round) is a frequent AP exam topic.',
          ],
          exampleCode: `double root = Math.sqrt(16);      // 4.0
double power = Math.pow(2, 3);     // 8.0
int distance = Math.abs(-5);       // 5
double r = Math.random() * 10;     // random double from 0.0 up to (but not including) 10.0`,
          exampleLanguage: 'java',
          exampleExplanation:
            'Each of these Math methods returns a value that you can store in a variable or use directly. Notice that sqrt and pow return double values, even if you pass in ints. Math.random returns a double in [0.0, 1.0), so multiplying it by 10 scales the range to [0.0, 10.0).',
        },
        {
          id: '1-12',
          title: 'Objects: Instances of Classes',
          summary:
            'A class is a blueprint that defines a new type in Java. It specifies what fields (data) and methods (behavior) objects of that type will have.\n\n' +
            'An object is a real instance created from a class. For example, String is a class provided by Java, and "Alex" is a specific String object.\n\n' +
            'Objects combine data and behavior. Understanding how classes and objects relate is essential for object-oriented programming in AP CSA.',
          keyIdeas: [
            'A class is a blueprint; an object is a constructed instance of that blueprint.',
            'Instance variables store the object’s state; methods implement its behavior.',
            'Reference variables hold the address of an object in memory, not the object itself.',
          ],
          exampleCode: `String name = "Alex";   // String is the class, "Alex" is an object

// name refers to a String object that has data (the characters) and methods
int length = name.length();`,
          exampleLanguage: 'java',
          exampleExplanation:
            'Here String is the class, and the literal "Alex" creates a String object. The variable name holds a reference to that object. You can then call methods like length on the object to access its behavior.',
        },
        {
          id: '1-13',
          title: 'Creating and Storing Objects',
          summary:
            'To create an object in Java, you use the new keyword followed by a constructor call. The constructor initializes the new object’s internal state.\n\n' +
            'You then store the resulting object reference in a variable of the appropriate class type. That variable can be used to call methods and access behavior.\n\n' +
            'In AP CSA, you frequently construct objects like Scanner, ArrayList, and your own custom classes using this pattern.',
          keyIdeas: [
            'The new operator allocates memory and returns a reference to the new object.',
            'Constructor parameters often initialize the object’s state.',
            'Forgetting to construct an object before use can lead to NullPointerException at runtime.',
          ],
          exampleCode: `Scanner input = new Scanner(System.in);   // creates a Scanner object

// General form:
// ClassName variable = new ClassName(parameters);`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The new keyword allocates space for a new object and calls the constructor. The variable input holds a reference to that Scanner object. You always follow the ClassName variable = new ClassName(...) pattern when constructing new objects.',
        },
        {
          id: '1-14',
          title: 'Calling a Void Method',
          summary:
            'Void methods perform actions but do not return a value. You call them either using a class name (for static methods) or an object variable (for instance methods), depending on how they are defined.\n\n' +
            'A simple example is a method that prints a greeting. When you call it, the code inside the method runs and may produce visible output, but there is no value to assign or use in an expression.\n\n' +
            'Designing and calling clear void methods helps you break your program into logical steps that are easy to test and reuse.',
          keyIdeas: [
            'Instance methods are called on an object reference, like student.printReport().',
            'Methods can modify an object’s internal state if they change instance variables.',
            'You should design methods with clear, single responsibilities.',
          ],
          exampleCode: `public static void printHello() {
    System.out.println("Hello!");
}

// Call the method:
printHello();`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The printHello method has no parameters and no return value (void). Calling printHello(); runs the method body, which prints "Hello!" to the console. On the AP exam, you should be comfortable reading and writing simple void methods like this.',
        },
        {
          id: '1-15',
          title: 'String Methods',
          summary:
            'Strings in Java are objects that represent sequences of characters. The String class includes many built-in methods (“powers”) for inspecting and transforming text.\n\n' +
            'Common methods include length() to get the number of characters, toUpperCase() and toLowerCase() to change case, substring(start, end) to extract part of a String, and equals(...) to compare contents.\n\n' +
            'Because Strings are immutable, methods like substring and toUpperCase do not change the original String; they create and return a new one instead. On the AP exam, you will frequently need to trace code that chains several String methods together.',
          keyIdeas: [
            'Important methods: length, substring, indexOf, compareTo, and equals.',
            'Strings are immutable; methods like substring create new String objects.',
            'Off-by-one errors with substring indices are a frequent source of bugs.',
          ],
          exampleCode: `String s = "Hello";

int len = s.length();           // 5
String loud = s.toUpperCase();  // "HELLO"
String firstTwo = s.substring(0, 2);  // "He"

if (s.equals("Hi")) {
    // compare by content, not by memory reference
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'This example shows several core String methods. Notice that equals is used instead of == to compare the contents of Strings. The substring call uses a start index (inclusive) and an end index (exclusive), so substring(0, 2) returns the characters at positions 0 and 1.',
        },
      ],
    },
    {
      unitNumber: 2,
      title: 'Selection and Iteration',
      subunits: [
        {
          id: '2-1',
          title: 'Algorithms with Selection and Repetition',
          summary:
            'An algorithm is a clear, ordered set of steps to solve a problem. In everyday life, making cereal is an algorithm: get a bowl, pour cereal, pour milk, and eat.\n\n' +
            'In programming, algorithms almost always involve selection (making decisions) and repetition (doing something multiple times). Selection chooses between paths based on conditions, and repetition lets you loop through data or repeat work until a goal is reached.\n\n' +
            'Most non-trivial programs are built from these two ideas. Learning to combine selection and repetition effectively is at the heart of algorithmic problem solving.',
          keyIdeas: [
            'Selection chooses between paths based on boolean conditions.',
            'Iteration repeats code while a condition remains true or for a fixed number of times.',
            'Combining selection and iteration allows for complex control flow.',
          ],
          exampleCode: `// Real-life style algorithm to decide about an umbrella:
if (isRaining) {
    bringUmbrella();
}

// Simple repetition:
while (cerealRemaining) {
    eatSpoonful();
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The first snippet shows selection: the bringUmbrella method is only called if isRaining is true. The while loop shows repetition: eatSpoonful is called repeatedly while cerealRemaining is true. Together, these constructs let you express many real-world algorithms in code.',
        },
        {
          id: '2-2',
          title: 'Boolean Expressions',
          summary:
            'A boolean value is either true or false. Boolean expressions are expressions that evaluate to one of these two values and are used to control decisions in your programs.\n\n' +
            'You create boolean expressions by comparing values (using relational operators like <, <=, >, >=, ==, !=) or by combining smaller boolean expressions with logical operators (&&, ||, !).\n\n' +
            'On the AP exam, you will often see boolean expressions inside if statements and loops. Being able to read and evaluate them correctly is essential for predicting control flow.',
          keyIdeas: [
            'Relational operators include <, <=, >, >=, ==, and !=.',
            'Logical operators &&, ||, and ! combine or negate boolean values.',
            'Be careful not to confuse assignment (=) with equality comparison (==).',
          ],
          exampleCode: `int x = 5;

boolean a = x > 3;      // true
boolean b = x == 5;     // true
boolean c = x < 2;      // false`,
          exampleLanguage: 'java',
          exampleExplanation:
            'Each boolean expression compares the value of x to another number. The result is either true or false and can be stored in a boolean variable or used directly in an if statement or loop condition.',
        },
        {
          id: '2-3',
          title: 'If Statements and Control Flow',
          summary:
            'Control flow is the order in which statements in your program run. By default, Java executes statements from top to bottom.\n\n' +
            'If statements let you introduce decisions into that flow. A basic if statement runs its block only when a given condition is true; otherwise, control skips past that block.\n\n' +
            'Understanding how if statements change control flow is critical for reasoning about which parts of your code execute and when.',
          keyIdeas: [
            'Single-selection if statements run a block only when the condition is true.',
            'If-else statements choose exactly one of two mutually exclusive paths.',
            'Indentation and braces improve readability and reduce logic errors.',
          ],
          exampleCode: `if (score >= 60) {
    System.out.println("You passed!");
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'In this example, the message "You passed!" is printed only if score is greater than or equal to 60. If the condition is false, the println is skipped and control continues with the next statement after the if block.',
        },
        {
          id: '2-4',
          title: 'If-Else Statements',
          summary:
            'If-else statements add an explicit alternative path to a basic if. If the condition is true, the first block runs; otherwise, the else block runs instead.\n\n' +
            'Exactly one of the two blocks executes, never both. This is useful for situations like pass/fail decisions or adult/minor classification, where there are only two possible outcomes.\n\n' +
            'You can also extend this idea into else-if chains to handle multiple ranges or categories in a clean, readable way.',
          keyIdeas: [
            'Else-if chains are checked in order; at most one branch executes.',
            'Ordering of conditions matters; more specific conditions typically go first.',
            'Using nested if statements vs. else-if depends on whether multiple branches may execute.',
          ],
          exampleCode: `if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "C";
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'In the first example, the program prints either "Adult" or "Minor" depending on the age. In the second example, the else-if chain assigns a letter grade. The conditions are checked from top to bottom, and the first true condition’s block runs; the rest are skipped.',
        },
        {
          id: '2-5',
          title: 'Compound Boolean Expressions',
          summary:
            'Many real-world conditions depend on more than one piece of information. Compound boolean expressions let you combine multiple simple conditions using logical operators.\n\n' +
            'AND (&&) requires that both conditions be true, OR (||) requires at least one to be true, and NOT (!) flips a boolean value. These tools let you represent rich decision logic in a single if statement.\n\n' +
            'Short-circuit evaluation means that Java may stop evaluating as soon as the overall result is known, which can prevent unnecessary work or even runtime errors when used carefully.',
          keyIdeas: [
            'Short-circuit evaluation can prevent NullPointerException if used carefully.',
            'Parentheses make complex conditions easier to read and reason about.',
            'De Morgan’s Laws help you rewrite logically equivalent conditions.',
          ],
          exampleCode: `if (score >= 60 && attendance >= 80) {   // AND: both conditions must be true
    pass = true;
}

if (isWeekend || isHoliday) {       // OR: either condition can be true
    relax();
}

if (!isRainy) {                    // NOT: flips the value
    goOutside();
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'These examples show how &&, ||, and ! are used to combine and invert conditions. Compound boolean expressions are at the heart of many control-flow decisions, especially in programs that enforce multiple requirements at once.',
        },
        {
          id: '2-6',
          title: 'Equivalent Boolean Expressions',
          summary:
            'Different boolean expressions can represent the same logical condition. Being able to recognize and rewrite equivalent expressions makes your code clearer and can help you debug logic errors.\n\n' +
            'For example, !(x > 5) is logically the same as x <= 5. De Morgan’s Laws are especially important for transforming negated compound expressions into clearer forms.\n\n' +
            'On the AP exam, you may be asked to determine whether two pieces of code behave the same by comparing their boolean logic.',
          keyIdeas: [
            '!(a && b) is equivalent to !a || !b, and !(a || b) is equivalent to !a && !b.',
            'Sometimes simplifying a condition makes patterns in the code clearer.',
            'You can often combine overlapping conditions into a single, cleaner check.',
          ],
          exampleCode: `// These two conditions are equivalent:
!(x > 5)
x <= 5

// De Morgan's Laws:
!(A && B) == (!A || !B)
!(A || B) == (!A && !B)`,
          exampleLanguage: 'java',
          exampleExplanation:
            'Rewriting !(x > 5) as x <= 5 often makes code easier to read. De Morgan’s Laws provide systematic rules for pushing negations inside parentheses, which is especially helpful when simplifying complex conditions or understanding someone else’s code.',
        },
        {
          id: '2-7',
          title: 'While Loops',
          summary:
            'While loops are used when you do not know ahead of time how many repetitions you need. The loop condition is checked before each iteration, so the body may run zero or more times.\n\n' +
            'A typical while loop repeats an action while some condition remains true, such as while there is still data to process or while a game is not over.\n\n' +
            'Because the condition controls when the loop stops, it is critical to update any loop variables correctly. Failing to do so can create infinite loops.',
          keyIdeas: [
            'While loops may run zero or more times depending on the initial condition.',
            'You must update loop control variables inside the loop to avoid infinite loops.',
            'Tracing while loops helps you spot off-by-one and boundary errors.',
          ],
          exampleCode: `int count = 0;

while (count < 5) {
    System.out.println(count);
    count++;
}

// Infinite loop (dangerous):
// while (true) {
// }
`,
          exampleLanguage: 'java',
          exampleExplanation:
            'In the first example, count starts at 0 and increases until it reaches 5, so the loop prints 0 through 4. The commented-out while(true) loop has a condition that is always true and no update to break out, so it would run forever if executed.',
        },
        {
          id: '2-8',
          title: 'For Loops',
          summary:
            'For loops are typically used when you know in advance how many times you want to repeat a block of code. The loop header contains initialization, condition, and update all in one place.\n\n' +
            'This makes for loops especially useful for iterating through arrays or ranges of numbers. The structure closely matches the idea of “start here, run while this is true, and update each time.”\n\n' +
            'Choosing between for and while often depends on clarity: use for when you have a clear count or index, and while when the stopping condition is based on something changing inside the loop.',
          keyIdeas: [
            'For loops consolidate initialization, condition, and update in a single header.',
            'They are a natural fit for traversing arrays from index 0 to length - 1.',
            'You should choose for vs. while based on which best communicates the intent.',
          ],
          exampleCode: `for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
// i starts at 0, prints 0–4`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The example loop starts i at 0, checks i < 5 before each iteration, runs the body, and then increments i. This pattern is extremely common on the AP exam, especially when working with arrays and ArrayLists.',
        },
        {
          id: '2-9',
          title: 'Implementing Selection and Iteration Algorithms',
          summary:
            'Implementing algorithms with selection and iteration means combining if/else statements with loops to solve real problems. This is how you move from isolated concepts to complete program logic.\n\n' +
            'A common pattern is to loop over a range of values and use an if statement inside the loop to decide which values to process, such as printing only even numbers or counting certain items.\n\n' +
            'Most AP CSA loop-and-selection problems reduce to a small set of patterns. Recognizing these patterns will help you write code faster and avoid logical errors.',
          keyIdeas: [
            'Common patterns include counters, accumulators, and linear searches.',
            'Careful initialization and updates are critical to correct results.',
            'You should test algorithms with edge cases like empty ranges or boundary values.',
          ],
          exampleCode: `for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        System.out.println(i);   // prints even numbers
    }
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'This algorithm loops from 0 to 9 and uses an if statement to select only even numbers (those where i % 2 is 0). Combining loops with conditions like this is a core skill for implementing many AP CSA algorithms.',
        },
        {
          id: '2-7',
          title: 'While Loops',
          summary:
            'Covers pre-test loops that continue executing while a condition remains true. Mastering while loops helps you process unknown amounts of data and build robust input-validation logic.',
          keyIdeas: [
            'While loops may run zero or more times depending on the initial condition.',
            'You must update loop control variables inside the loop to avoid infinite loops.',
            'Tracing while loops helps you spot off-by-one and boundary errors.',
          ],
          exampleCode:
            'int count = 0;\\n' +
            'while (count < 3) {\\n' +
            '    System.out.println(\"Hello \" + count);\\n' +
            '    count++;  // update is required or the loop never ends\\n' +
            '}\\n' +
            '// Output:\\n' +
            '// Hello 0\\n' +
            '// Hello 1\\n' +
            '// Hello 2',
          exampleLanguage: 'java',
          exampleExplanation:
            'Here the loop condition is checked before each iteration. Because count starts at 0 and is incremented each time, the body runs three times (for count = 0, 1, 2). On the AP exam, you are frequently asked to trace similar loops and determine final variable values or printed output.',
        },
        {
          id: '2-8',
          title: 'For Loops',
          summary:
            'Introduces counted loops that are ideal for iterating a fixed number of times or over array indices.',
          keyIdeas: [
            'For loops consolidate initialization, condition, and update in a single header.',
            'They are a natural fit for traversing arrays from index 0 to length - 1.',
            'You should choose for vs. while based on which best communicates the intent.',
          ],
        },
        {
          id: '2-9',
          title: 'Implementing Selection and Iteration Algorithms',
          summary:
            'Applies selection and iteration to implement real algorithms such as searching or computing aggregates.',
          keyIdeas: [
            'Common patterns include counters, accumulators, and linear searches.',
            'Careful initialization and updates are critical to correct results.',
            'You should test algorithms with edge cases like empty ranges or boundary values.',
          ],
        },
        {
          id: '2-10',
          title: 'Developing Algorithms Using Strings',
          summary:
            'Shows how to combine String methods with loops and conditionals to solve text-processing problems.',
          keyIdeas: [
            'Substring and indexOf are often used inside loops to examine characters or tokens.',
            'Off-by-one errors are common when looping over string indices.',
            'You should clearly distinguish between character positions and counts.',
          ],
        },
        {
          id: '2-11',
          title: 'Nested Iteration',
          summary:
            'Nested iteration means having one loop inside another loop. For each iteration of the outer loop, the inner loop runs through all of its iterations.\n\n' +
            'This pattern is common when working with grids, tables, or any situation where you need to consider every pair of values (like every row and every column, or every i and j combination).\n\n' +
            'Understanding how many times the inner code runs and how variables change in nested loops is important for both correctness and performance.',
          keyIdeas: [
            'Nested loops often process grids or 2D data, such as seats in a theater.',
            'The total number of iterations is typically the product of the loop counts.',
            'Indentation and clear variable names are vital for readability in nested loops.',
          ],
          exampleCode: `for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 2; j++) {
        System.out.println(i + "," + j);
    }
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'In this example, the outer loop runs 3 times (i = 0, 1, 2), and for each i value, the inner loop runs 2 times (j = 0, 1). That means the println executes 3 × 2 = 6 times total, printing all (i, j) combinations.',
        },
        {
          id: '2-12',
          title: 'Informal Code Analysis',
          summary:
            'Informal code analysis means reading code and reasoning about its behavior without actually running it. You mentally simulate what the program will do.\n\n' +
            'To do this, you track variable values, loop iterations, and branching decisions step by step. This skill is especially important on the AP exam, where you must often predict output or final variable values.\n\n' +
            'Developing comfort with tracing code will help you debug your own programs and understand unfamiliar ones more quickly.',
          keyIdeas: [
            'Tracing by hand is essential for AP MCQs and FRQs.',
            'You should track variable values and loop iterations step by step.',
            'Look for patterns like unchanged variables or unreachable code to spot bugs.',
          ],
          exampleCode: `int x = 0;

for (int i = 0; i < 3; i++) {
    x += i;
}
// Trace:
// i = 0 -> x = 0
// i = 1 -> x = 1
// i = 2 -> x = 3
// Final x = 3`,
          exampleLanguage: 'java',
          exampleExplanation:
            'By simulating each loop iteration, you can see how x changes: it starts at 0, then adds 0, 1, and 2 across the three iterations. Informal code analysis like this is exactly what you need to do on exam questions that ask for final variable values.',
        },
      ],
    },
    {
      unitNumber: 3,
      title: 'Class Creation',
      subunits: [
        {
          id: '3-1',
          title: 'Abstraction and Program Design',
          summary:
            'Abstraction means focusing on what something does, not how it does it. In everyday life, you drive a car without knowing how the engine works; you just rely on the controls.\n\n' +
            'In programming, abstraction appears when you call a method or use a class without needing to know the internal implementation. You care about the inputs, outputs, and behavior, not the low-level details.\n\n' +
            'Good program design uses abstraction to break big problems into smaller pieces. You design classes, methods, and objects where each has a clear job. This makes code easier to understand, reuse, and maintain.',
          keyIdeas: [
            'Abstraction lets you think in terms of what a class does, not how it does it.',
            'Good class design groups related data and behavior together.',
            'Breaking problems into classes and methods improves readability and reuse.',
          ],
          exampleCode: `public class Counter {
    private int value;

    // Constructor sets starting value
    public Counter(int start) {
        value = start;
    }

    // Increases the counter by 1
    public void increment() {
        value++;
    }

    // Returns the current value (accessor)
    public int getValue() {
        return value;
    }
}

public class CounterClient {
    public static void main(String[] args) {
        Counter steps = new Counter(0);
        steps.increment();
        steps.increment();
        System.out.println(steps.getValue());  // prints 2
    }
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The Counter class hides how the value is stored and updated. Code in CounterClient only relies on the public methods increment and getValue. This is the essence of abstraction: other parts of the program do not need to know or care that value is an int or that we use ++ inside increment. On FRQs, you often design or modify classes in exactly this style.',
        },
        {
          id: '3-2',
          title: 'Impact of Program Design',
          summary:
            'The way you design your program has a huge impact on how easy it is to understand, change, and debug. Good design keeps related ideas together and separates unrelated concerns.\n\n' +
            'For example, instead of putting all logic into one giant method or class, you might have separate classes like Student, Course, and GradeCalculator. Each one has a single, clear responsibility.\n\n' +
            'This separation of concerns makes your code more scalable, reduces bugs, and helps teams work together without constantly stepping on each other’s changes.',
          keyIdeas: [
            'Clear, consistent design reduces bugs and makes collaboration easier.',
            'Encapsulation and information hiding limit how changes ripple through code.',
            'Thoughtful design up front often saves significant debugging time later.',
          ],
        },
        {
          id: '3-3',
          title: 'Anatomy of a Class',
          summary:
            'A class is a blueprint for objects. It groups together fields (data), constructors (initialization), and methods (behavior) into a single unit.\n\n' +
            'In AP CSA, you will often define simple classes with private instance variables, a constructor that initializes them, and public methods that operate on that data.\n\n' +
            'Understanding the standard structure of a class makes it much easier to read and write your own classes on exams and in projects.',
          keyIdeas: [
            'Access modifiers (public/private) control visibility of fields and methods.',
            'Instance variables store per-object state; static variables are shared across all instances.',
            'Method headers define return types, names, and parameters that make up a class’s public interface.',
          ],
          exampleCode: `public class Dog {

    // field (instance variable)
    private String name;

    // constructor
    public Dog(String n) {
        name = n;
    }

    // method
    public void bark() {
        System.out.println("Woof");
    }
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'This Dog class shows the three main parts of a simple class: a field to store data, a constructor to initialize that data, and a method to define behavior. You will see and write many classes with this basic shape in AP CSA.',
        },
        {
          id: '3-4',
          title: 'Constructors',
          summary:
            'A constructor is a special method that runs when an object is created. Its job is to initialize the new object so it starts in a valid state.\n\n' +
            'Constructors have the same name as the class, have no return type, and are called with the new keyword. You can define multiple constructors with different parameter lists (overloading) to create objects in different ways.\n\n' +
            'If you do not write any constructors, Java provides a default no-parameter constructor. But once you define at least one constructor, Java stops supplying the default one automatically.',
          keyIdeas: [
            'Constructors have the same name as the class and no return type.',
            'They typically assign parameter values to instance variables.',
            'If you do not write any constructors, Java provides a default no-args constructor.',
          ],
          exampleCode: `public class Dog {
    private String name;

    // Constructor runs when a new Dog is created
    public Dog(String n) {
        name = n;
    }
}

Dog d = new Dog("Buddy");   // calls the constructor`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The Dog constructor takes a String parameter and uses it to initialize the name field. When you write new Dog("Buddy"), Java allocates a new Dog object and immediately runs the constructor to set up its initial state.',
        },
        {
          id: '3-5',
          title: 'Writing Methods',
          summary:
            'Methods define actions that your objects or classes can perform. Each method has a header that specifies its visibility, return type, name, and parameters, followed by a body that contains the code.\n\n' +
            'Void methods perform actions but do not return a value, while non-void methods must return a value of the specified type using a return statement.\n\n' +
            'Good method design focuses on a single responsibility, clear parameter names, and well-defined preconditions and postconditions.',
          keyIdeas: [
            'Method signatures include visibility, return type, name, and parameter list.',
            'Preconditions specify what must be true before a method is called; postconditions specify what the method guarantees.',
            'Well-named methods make code self-documenting.',
          ],
          exampleCode: `public void greet() {            // void method
    System.out.println("Hello");
}

public int add(int a, int b) {   // non-void method
    return a + b;
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The greet method performs an action (printing) and does not return a value. The add method returns an int, so it must have a return statement that provides an int result. On the AP exam, you will write both void and non-void methods in FRQs.',
        },
        {
          id: '3-6',
          title: 'Accessor Methods',
          summary:
            'Accessor methods, also called getters, provide controlled read-only access to private instance variables. Instead of exposing fields directly, you write public methods that return their values.\n\n' +
            'This supports encapsulation: the fields remain private, and you can change how data is stored internally without affecting code that uses your class.\n\n' +
            'Accessors are very common in AP CSA FRQs, where you are often asked to write simple getters for private data.',
          keyIdeas: [
            'Accessors usually have no parameters and return a field’s value.',
            'Keeping fields private and using getters maintains encapsulation.',
            'AP FRQs frequently require simple accessor methods for scoring.',
          ],
          exampleCode: `private int age;

public int getAge() {
    return age;
}

// Usage:
int x = person.getAge();`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The age field is private, so code outside the class cannot access it directly. Instead, other code calls getAge(), which safely returns the value. This pattern protects the internal representation while still allowing read access.',
        },
        {
          id: '3-7',
          title: 'Static Variables and Methods',
          summary:
            'Static variables and methods belong to the class itself rather than to individual objects. All instances of the class share a single static variable.\n\n' +
            'Static methods are called using the class name (ClassName.method()) and typically do not rely on any particular object’s state. They are often used for utility operations or as entry points like main.\n\n' +
            'You should use static only when behavior or data truly belongs to the class as a whole, not to specific instances.',
          keyIdeas: [
            'Static methods are called on the class (ClassName.method()) rather than on an instance.',
            'Static variables are shared across all objects of the class.',
            'You should use static only when shared state or utility behavior is truly needed.',
          ],
          exampleCode: `public class Example {
    static int count = 0;      // shared across all Example objects

    public Example() {
        count++;
    }

    public static void main(String[] args) {  // static method
        System.out.println("Total created: " + count);
    }
}

Math.sqrt(9);   // static method call on Math`,
          exampleLanguage: 'java',
          exampleExplanation:
            'In this Example class, every time you construct a new Example object, the static count is incremented. Because count is static, all objects see the same value. The main method is also static and can be called without creating an Example object.',
        },
        {
          id: '3-8',
          title: 'Scope and Access',
          summary:
            'Scope refers to where a variable exists and can be used in your program. Java has class-level, method-level, and block-level scope.\n\n' +
            'A variable declared inside a block (between { and }) exists only inside that block. After the closing brace, the variable is out of scope and cannot be used.\n\n' +
            'Understanding scope helps you avoid bugs where variables are accidentally reused, shadowed, or referenced outside of where they are defined.',
          keyIdeas: [
            'Local variables exist only within the block where they are declared.',
            'Instance variables are visible to all non-static methods of the class.',
            'Reusing the same variable name in nested scopes can make code harder to follow.',
          ],
          exampleCode: `if (true) {
    int x = 5;
    System.out.println(x);   // OK
}
// x is not visible here; it was local to the if block`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The variable x is declared inside the if block, so it is only valid within that block. Trying to use x after the closing brace would cause a compile-time error. This kind of example appears often in AP questions about scope.',
        },
        {
          id: '3-9',
          title: 'This Keyword',
          summary:
            'The this keyword refers to the current object—the instance on which a method or constructor is running. It is especially useful when parameter names are the same as field names.\n\n' +
            'Inside a constructor or method, writing this.fieldName makes it clear that you are referring to the instance variable, not a local variable or parameter with the same name.\n\n' +
            'On the AP exam, you will often see this used in constructors to assign parameter values to fields.',
          keyIdeas: [
            'this.fieldName explicitly refers to the instance variable of the current object.',
            'Constructors often use this to assign parameter values to fields with the same name.',
            'Understanding this is important for FRQs involving object state updates.',
          ],
          exampleCode: `private int age;

public Person(int age) {
    this.age = age;   // left side is the field, right side is the parameter
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'Without this, the assignment age = age; would assign the parameter to itself, leaving the field unchanged. Using this.age on the left side makes it clear you are assigning to the instance variable.',
        },
      ],
    },
    {
      unitNumber: 4,
      title: 'Data Collections',
      subunits: [
        {
          id: '4-1',
          title: 'Ethical and Social Implications',
          summary:
            'Programming affects real people. Every program that uses data can have consequences for privacy, fairness, security, and accessibility.\n\n' +
            'Recommendation systems can create bias, data leaks can expose sensitive information, algorithms can reinforce stereotypes, and poor design can exclude users with disabilities.\n\n' +
            'As a programmer, you have a responsibility to think beyond whether your code “works” technically and consider who might be harmed, whether data is protected, and whether your algorithm is fair. Code is power—use it responsibly.',
          keyIdeas: [
            'Algorithms can unintentionally encode bias present in training data.',
            'Data privacy and security are critical considerations in software design.',
            'CS decisions can have long-term societal impacts beyond technical correctness.',
          ],
        },
        {
          id: '4-2',
          title: 'Introduction to Using Data Sets',
          summary:
            'A data set is a large collection of related values, such as test scores, names, or measurements. Instead of storing each value in a separate variable, you typically use arrays or ArrayLists to manage them.\n\n' +
            'Once data is in a collection, you can analyze patterns, compute averages, find minimums and maximums, and search for specific values.\n\n' +
            'Working with data sets is a major theme in AP CSA, and it prepares you for real-world tasks like analyzing logs, grades, or sensor readings.',
          keyIdeas: [
            'Large data sets require systematic traversal and searching.',
            'You must be careful with indices when iterating through collections.',
            'Patterns like maximum, minimum, and average come up frequently.',
          ],
          exampleCode: `int[] scores = {90, 85, 72, 100};   // a simple data set

// You can now compute averages, find the highest score, etc.`,
          exampleLanguage: 'java',
          exampleExplanation:
            'Putting multiple scores into an array lets you write loops that process them all with a small amount of code. This is much more scalable than using separate variables for each score.',
        },
        {
          id: '4-3',
          title: 'Array Creation and Access',
          summary:
            'An array stores multiple values of the same type in a fixed-size sequence. You can think of it as a row of numbered boxes, all holding the same kind of data.\n\n' +
            'Arrays can be created with a specified length or initialized with literal values. Once created, the length does not change.\n\n' +
            'Accessing array elements uses zero-based indexing: the first element is at index 0, and the last is at index length - 1. Going outside this range causes a runtime error.',
          keyIdeas: [
            'Arrays have a fixed length available via the length field (no parentheses).',
            'Valid indices run from 0 to length - 1; going out of bounds throws an exception.',
            'Arrays can store primitives or object references.',
          ],
          exampleCode: `int[] nums = new int[5];           // all elements start at 0
int[] nums2 = {1, 2, 3, 4, 5};   // array literal

int first = nums2[0];    // 1
int last = nums2[4];     // 5`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The nums array has space for 5 ints, while nums2 is created with 5 specific values. Using indices, you can read or update individual elements, but you must stay within 0 to length - 1.',
        },
        {
          id: '4-4',
          title: 'Traversing Arrays',
          summary:
            'Traversing an array means visiting each element in turn, usually with a loop. This is how you perform operations like printing all values, computing a sum, or counting matches.\n\n' +
            'Standard for loops give you index access, which is useful when you need the position or want to modify elements. Enhanced for loops (for-each loops) give you direct access to elements and are great for read-only passes.\n\n' +
            'Off-by-one errors are common when traversing arrays, so always double-check your loop bounds.',
          keyIdeas: [
            'Standard for loops provide index access; enhanced-for loops provide element access only.',
            'Use indices when you need to modify elements or use their positions.',
            'Off-by-one errors are common in array traversal; double-check boundaries.',
          ],
          exampleCode: `int[] nums = {1, 2, 3, 4, 5};

// Index-based traversal
for (int i = 0; i < nums.length; i++) {
    System.out.println(nums[i]);
}

// Enhanced for loop (read-only)
for (int n : nums) {
    System.out.println(n);
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'Both loops visit every element in nums. The index-based loop exposes the position i, which is useful when updating elements. The enhanced for loop is cleaner when you only need the values and not their indices.',
        },
        {
          id: '4-5',
          title: 'Developing Algorithms Using Arrays',
          summary:
            'Arrays are powerful because they let you apply a single algorithm to many values using a loop. Common tasks include computing sums and averages, counting how many elements meet a condition, finding maximum and minimum values, and searching for a target.\n\n' +
            'Most array-based algorithms follow a familiar pattern: initialize a variable (such as sum or count), loop over the array, and update that variable based on each element.\n\n' +
            'Once you recognize these patterns, you will see them throughout AP CSA questions and in real-world code.',
          keyIdeas: [
            'Linear search scans element by element until a match is found or the end is reached.',
            'You can build frequency counts or transformations by iterating once through the array.',
            'Well-structured loops and clear invariants simplify reasoning about correctness.',
          ],
          exampleCode: `int sum = 0;

for (int i = 0; i < nums.length; i++) {
    sum += nums[i];
}
// sum now holds the total of all elements in nums`,
          exampleLanguage: 'java',
          exampleExplanation:
            'This example follows the initialize–loop–update pattern: sum starts at 0, the loop visits each element, and sum accumulates the values. Many other algorithms (counts, max/min, search) use a very similar structure.',
        },
        {
          id: '4-6',
          title: 'Using Text Files',
          summary:
            'Programs often need to read data from files rather than from the keyboard. This allows them to work with large data sets stored on disk.\n\n' +
            'You can use Scanner with a File object to read text files line by line or token by token. Inside a loop, you process each line and often store values in arrays or ArrayLists for further analysis.\n\n' +
            'Working with files lets your programs handle far more data than a user could conveniently type during one run.',
          keyIdeas: [
            'Reading files line by line is conceptually similar to reading console input.',
            'You often parse each line into fields before storing them in arrays or objects.',
            'Error handling and file-not-found situations must be considered, even if AP code uses simple patterns.',
          ],
          exampleCode: `Scanner input = new Scanner(new File("data.txt"));

while (input.hasNext()) {
    String line = input.nextLine();
    // process the line here
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'This pattern uses a Scanner to read from a file named data.txt. The hasNext/nextLine loop reads each line until the end of the file, allowing you to process large data sets in a simple, streaming way.',
        },
        {
          id: '4-7',
          title: 'Wrapper Classes: Integer and Double',
          summary:
            'Primitive types like int and double have corresponding wrapper classes Integer and Double. Wrapper objects store numeric values but can be used anywhere an object is required.\n\n' +
            'Collections such as ArrayList can only store objects, not primitives. Wrapper classes bridge this gap so you can still work with numeric collections.\n\n' +
            'Java automatically converts between primitives and their wrappers in many situations (autoboxing and unboxing), but you should still be aware that wrappers can be null and therefore cause NullPointerException if misused.',
          keyIdeas: [
            'ArrayList cannot store primitive types, so you use wrapper types instead.',
            'Autoboxing and unboxing automatically convert between primitives and wrappers.',
            'You should still be mindful of potential null values when using wrapper types.',
          ],
          exampleCode: `ArrayList<Integer> list = new ArrayList<>();

list.add(5);        // autoboxing: int 5 becomes Integer.valueOf(5)
Integer x = 10;
int y = x;          // unboxing: Integer to int`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The wrapper classes let you put numeric values into an ArrayList. Java takes care of creating and extracting Integer objects behind the scenes most of the time, but it is helpful to remember that wrapper objects can be null whereas primitives cannot.',
        },
        {
          id: '4-8',
          title: 'ArrayList Methods',
          summary:
            'An ArrayList is a resizable array-like structure that can grow and shrink as needed. You interact with it using methods rather than direct index assignment.\n\n' +
            'Key methods include add to insert elements, get to access them, set to replace them, remove to delete them, and size to find out how many elements are stored.\n\n' +
            'Because ArrayLists shift elements when you insert or remove items, it is important to think about how indices change during mutations, especially inside loops.',
          keyIdeas: [
            'Key methods include add, get, set, remove, size, and indexOf.',
            'Indices shift when you insert or remove elements; this affects loops.',
            'Enhanced-for loops should not be used when removing elements during traversal.',
          ],
          exampleCode: `ArrayList<Integer> list = new ArrayList<>();

list.add(5);
list.add(7);
int first = list.get(0);      // 5
list.set(0, 10);              // replace 5 with 10
list.remove(1);               // remove the element at index 1
int size = list.size();       // current number of elements`,
          exampleLanguage: 'java',
          exampleExplanation:
            'These examples show the core ArrayList operations you will use on the exam. Notice that after remove, elements shift left to fill the gap, so indices change.',
        },
        {
          id: '4-9',
          title: 'Traversing ArrayLists',
          summary:
            'Traversing an ArrayList means visiting each element, usually with a loop. Index-based loops let you read or modify elements using get and set.\n\n' +
            'Enhanced for loops (for-each) provide a simpler way to read each element when you do not need the index and are not changing the list structure.\n\n' +
            'When removing elements while traversing, you must be careful with indices or traverse from the end to avoid skipping elements.',
          keyIdeas: [
            'Index-based loops allow modification of elements during traversal.',
            'Enhanced-for loops are good for read-only passes through the list.',
            'You should avoid modifying the list structure while using an enhanced-for loop.',
          ],
          exampleCode: `for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i));
}

for (int n : list) {
    System.out.println(n);
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The first loop uses indices to access each element. The second uses an enhanced for loop, which is shorter and clearer when you just need to read the values.',
        },
        {
          id: '4-10',
          title: 'Developing Algorithms Using ArrayLists',
          summary:
            'ArrayLists support many of the same algorithmic patterns as arrays: counting, searching, averaging, and filtering. The main difference is that ArrayLists can grow and shrink as elements are added or removed.\n\n' +
            'When removing elements while traversing, a common pattern is to loop from the end of the list toward the beginning so that index shifts do not cause you to skip items.\n\n' +
            'You can also build new ArrayLists from existing ones when you want to filter or transform data without modifying the original.',
          keyIdeas: [
            'Removing elements while iterating usually requires looping from the end toward the beginning.',
            'You can build new lists from existing ones when you need to preserve the original data.',
            'Clear loop invariants help you reason about partial progress through the list.',
          ],
          exampleCode: `for (int i = 0; i < list.size(); i++) {
    if (list.get(i) < 0) {
        list.remove(i);
        i--;   // adjust index after removal
    }
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'This example removes negative numbers from a list. After a removal, all later elements shift left, so i-- adjusts the index so that the next iteration examines the element that shifted into the current position.',
        },
        {
          id: '4-11',
          title: '2D Arrays',
          summary:
            'A 2D array is an array of arrays, often visualized as a grid with rows and columns. It is useful for representing tables, game boards, images, and other grid-based data.\n\n' +
            'You declare and create a 2D array by specifying both dimensions, such as rows and columns. Accessing an element requires two indices: one for the row and one for the column.\n\n' +
            'Remember that both dimensions are zero-based, and arr[row][col] is not the same as arr[col][row].',
          keyIdeas: [
            '2D arrays are arrays of arrays; dimensions can differ in jagged arrays.',
            'You typically use nested loops to traverse rows and columns.',
            'Index order matters: arr[row][col] is not the same as arr[col][row].',
          ],
          exampleCode: `int[][] grid = new int[3][4];   // 3 rows, 4 columns

grid[0][0] = 1;      // first row, first column
int value = grid[2][3];   // third row, fourth column`,
          exampleLanguage: 'java',
          exampleExplanation:
            'This code creates a 3×4 grid and shows how to access and assign elements. You always specify the row index first, then the column index.',
        },
        {
          id: '4-12',
          title: 'Traversing 2D Arrays',
          summary:
            'Traversing a 2D array usually involves nested loops: the outer loop iterates over rows, and the inner loop iterates over columns within each row.\n\n' +
            'This pattern lets you visit every cell in the grid, which is useful for tasks like printing, counting, or updating values.\n\n' +
            'When arrays are not perfectly rectangular, you should use each row’s length rather than assuming all rows are the same size.',
          keyIdeas: [
            'Outer loop commonly iterates over rows; inner loop iterates over columns in each row.',
            'You can compute aggregates across rows, columns, or the whole grid.',
            'Make sure you use each row’s length when arrays are not perfectly rectangular.',
          ],
          exampleCode: `for (int r = 0; r < grid.length; r++) {
    for (int c = 0; c < grid[0].length; c++) {
        System.out.println(grid[r][c]);
    }
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The outer loop moves across rows, and the inner loop moves across columns within each row. Together they visit every element of the 2D array.',
        },
        {
          id: '4-13',
          title: 'Implementing 2D Array Algorithms',
          summary:
            '2D arrays are used in algorithms for images, game boards, maps, and tables of data. Implementing algorithms with 2D arrays often involves nested loops and careful handling of boundaries.\n\n' +
            'You might count how many cells satisfy a condition, update neighbors based on rules, or compute row and column totals.\n\n' +
            'Breaking complex 2D algorithms into helper methods can make them easier to write, test, and reason about.',
          keyIdeas: [
            'Carefully handle boundaries when examining neighbors (e.g., not going outside the grid).',
            'You may need temporary variables to avoid overwriting data you still need.',
            'Breaking complex 2D logic into helper methods often improves clarity.',
          ],
          exampleCode: `int count = 0;

for (int r = 0; r < grid.length; r++) {
    for (int c = 0; c < grid[0].length; c++) {
        if (grid[r][c] > 0) {
            count++;
        }
    }
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'This algorithm counts how many positive values are in the grid. It uses nested loops to traverse every cell and a simple if statement to decide when to increment count.',
        },
        {
          id: '4-14',
          title: 'Searching',
          summary:
            'Searching means finding whether a target value exists in a collection (and sometimes where it is located). Two important search strategies in AP CSA are linear search and binary search.\n\n' +
            'Linear search checks each element one by one and works on any list, sorted or not. Binary search is much faster on large, sorted lists because it repeatedly cuts the search space in half.\n\n' +
            'Understanding when each approach is appropriate and how they work conceptually is more important than memorizing exact code.',
          keyIdeas: [
            'Linear search works on any list; binary search requires a sorted list.',
            'Binary search repeatedly halves the search space using indices midpoints.',
            'Off-by-one and incorrect mid calculations are common pitfalls.',
          ],
          exampleCode: `// Linear search:
for (int n : nums) {
    if (n == target) {
        return true;
    }
}

// Binary search idea (conceptual):
// 1. Check middle element
// 2. If too small, search right half
// 3. If too large, search left half`,
          exampleLanguage: 'java',
          exampleExplanation:
            'The linear search loop checks each value until it finds the target or reaches the end. Binary search assumes the data is sorted and uses comparisons at the midpoint to eliminate half of the remaining possibilities each step.',
        },
        {
          id: '4-15',
          title: 'Sorting',
          summary:
            'Sorting rearranges the elements of a collection into a particular order, usually ascending or descending. Once data is sorted, searching and analysis often become easier and faster.\n\n' +
            'In AP CSA you should understand the basic ideas behind selection sort and insertion sort, and conceptually what more advanced algorithms like merge sort do.\n\n' +
            'You should also know that Java provides built-in sorting methods, such as Arrays.sort for arrays and Collections.sort for lists.',
          keyIdeas: [
            'Selection sort and insertion sort are classic algorithms covered on the exam.',
            'Sorting may change the meaning of indices, so you must adjust any associated data.',
            'Time complexity and number of comparisons/steps can be reasoned about informally.',
          ],
          exampleCode: `Arrays.sort(arr);          // sorts an array
Collections.sort(list);   // sorts an ArrayList`,
          exampleLanguage: 'java',
          exampleExplanation:
            'Although you should understand how simple sorts work conceptually, you will often rely on these built-in utilities in real programs. Sorting can change the order of elements, so be mindful if indices are tied to other data.',
        },
        {
          id: '4-16',
          title: 'Recursion',
          summary:
            'Recursion is when a method calls itself to solve a problem by breaking it into smaller subproblems of the same form. Each recursive call works on a simpler case until a base case is reached.\n\n' +
            'Every recursive algorithm must have a base case that stops the recursion and a recursive case that makes progress toward that base.\n\n' +
            'Tracing recursion involves following the sequence of calls and returns, often using a mental or drawn call stack.',
          keyIdeas: [
            'Every recursive method needs a base case and a recursive case.',
            'Each recursive call gets its own copy of local variables and parameters.',
            'You should trace recursion using a call stack model to understand control flow.',
          ],
          exampleCode: `public static void countdown(int n) {
    if (n == 0) {
        return;           // base case
    }
    System.out.println(n);
    countdown(n - 1);     // recursive call
}`,
          exampleLanguage: 'java',
          exampleExplanation:
            'In this countdown method, the base case is when n == 0. Each call prints the current n and then calls countdown with n - 1, moving closer to the base case. Without the base case, the recursion would never stop.',
        },
        {
          id: '4-17',
          title: 'Recursive Searching and Sorting',
          summary:
            'Recursion can be used to implement searching and sorting algorithms. Recursive binary search uses recursion to repeatedly narrow down the search interval in a sorted array.\n\n' +
            'Recursive sorting algorithms like merge sort and quick sort break the problem into smaller subarrays, sort those, and then combine the results.\n\n' +
            'For AP CSA, it is more important to understand the high-level recursive structure of these algorithms than to memorize full implementations.',
          keyIdeas: [
            'Recursive binary search divides the search space using recursive calls.',
            'Recursive sorts like merge sort conceptually split, sort, and merge sublists.',
            'Understanding recursion conceptually is more important than memorizing code.',
          ],
          exampleCode: `// Recursive binary search idea (simplified, conceptual):
// 1. Check middle element
// 2. If target is smaller, recurse on left half
// 3. If target is larger, recurse on right half`,
          exampleLanguage: 'java',
          exampleExplanation:
            'Recursive binary search and recursive sorts like merge sort apply the same pattern of divide, conquer, and combine. Each recursive call works on a smaller portion of the data until the problem is simple enough to solve directly.',
        },
      ],
    },
  ],
}

export const CSP_UNIT_OVERVIEWS: SubjectUnitOverview = {
  subjectName: 'AP Computer Science Principles',
  units: [
    {
      unitNumber: 1,
      title: 'Creative Development',
      subunits: [
        {
          id: '1-1',
          title: 'Algorithms and Creativity',
          summary:
            'Explores how algorithms can be used creatively to solve problems, create art, or build interactive experiences.',
          keyIdeas: [
            'Algorithms are step-by-step processes that can be expressed in many ways.',
            'Multiple algorithms can solve the same problem with different trade-offs.',
            'Creativity in computing comes from how we combine tools and ideas, not just from code syntax.',
          ],
        },
        {
          id: '1-2',
          title: 'Collaborative Development',
          summary:
            'Emphasizes teamwork, documentation, and communication when building computing projects.',
          keyIdeas: [
            'Version control, planning, and clear roles help teams avoid conflicts.',
            'Pair programming and code reviews can improve quality and learning.',
            'Ethical collaboration means giving credit and avoiding unauthorized help.',
          ],
        },
        {
          id: '1-3',
          title: 'Program Design and Documentation',
          summary:
            'Covers designing programs with clear purpose, modular structure, and meaningful documentation.',
          keyIdeas: [
            'Good program design starts from a clear problem statement and user needs.',
            'Decomposing problems into functions and procedures improves organization.',
            'Comments and naming conventions make programs understandable to others.',
          ],
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
            'Introduces how data is represented digitally using bits, bytes, and common encodings.',
          keyIdeas: [
            'Binary encodes information using only 0s and 1s.',
            'Different encodings (ASCII, Unicode, image formats) interpret bits differently.',
            'How data is represented affects storage needs and potential errors.',
          ],
        },
        {
          id: '2-2',
          title: 'Big Data and Privacy',
          summary:
            'Discusses large-scale data collection, potential benefits, and ethical concerns about privacy.',
          keyIdeas: [
            'Big data can reveal patterns for science, business, and policy.',
            'Data collection can be invasive or biased if not handled responsibly.',
            'Anonymization and aggregation can reduce privacy risks but are not perfect.',
          ],
        },
        {
          id: '2-3',
          title: 'Data Abstraction and Visualization',
          summary:
            'Explores summarizing and visualizing data to reveal trends and support decisions.',
          keyIdeas: [
            'Abstractions hide low-level details and show only what is relevant.',
            'Charts, graphs, and dashboards communicate patterns quickly.',
            'Visualization choices can mislead if scales or labels are poorly chosen.',
          ],
        },
      ],
    },
    {
      unitNumber: 3,
      title: 'Algorithms and Programming',
      subunits: [
        {
          id: '3-1',
          title: 'Variables, Expressions, and Logic',
          summary:
            'Covers basic programming building blocks: variables, expressions, and logical conditions.',
          keyIdeas: [
            'Variables store information that can change during program execution.',
            'Expressions combine values and operators to compute results.',
            'Boolean logic controls program decisions.',
          ],
        },
        {
          id: '3-2',
          title: 'Conditionals and Iteration',
          summary:
            'Introduces if statements and loops that allow programs to react to data and repeat tasks.',
          keyIdeas: [
            'Conditionals choose between alternative paths.',
            'Loops enable repetition until a goal is met or data is exhausted.',
            'Infinite loops and unreachable code are common beginner pitfalls.',
          ],
        },
        {
          id: '3-3',
          title: 'Procedures and Abstraction',
          summary:
            'Shows how defining reusable procedures supports abstraction and code reuse.',
          keyIdeas: [
            'Procedures encapsulate steps behind a descriptive name.',
            'Parameters allow procedures to work with different inputs.',
            'Abstracting common patterns into procedures simplifies complex programs.',
          ],
        },
      ],
    },
    {
      unitNumber: 4,
      title: 'Computing Systems and Networks',
      subunits: [
        {
          id: '4-1',
          title: 'The Internet and Protocols',
          summary:
            'Explains how the internet moves data using layered protocols like IP, TCP, and HTTP.',
          keyIdeas: [
            'The internet is a network of networks with redundant paths.',
            'IP addresses identify devices; domain names map human-readable names to addresses.',
            'Protocols define agreed-upon rules for how data is formatted and transmitted.',
          ],
        },
        {
          id: '4-2',
          title: 'Reliability and Fault Tolerance',
          summary:
            'Describes how networks and systems are designed to keep working despite failures.',
          keyIdeas: [
            'Redundant paths and hardware reduce the impact of single points of failure.',
            'Packets may arrive out of order or be lost; protocols recover from these issues.',
            'Fault-tolerant designs trade extra cost/complexity for resilience.',
          ],
        },
        {
          id: '4-3',
          title: 'Cybersecurity Basics',
          summary:
            'Introduces common cybersecurity threats and basic defenses.',
          keyIdeas: [
            'Threats include malware, phishing, and denial-of-service attacks.',
            'Defenses include encryption, authentication, and secure protocols like HTTPS.',
            'Human behavior is often the weakest link in security systems.',
          ],
        },
      ],
    },
    {
      unitNumber: 5,
      title: 'Impact of Computing',
      subunits: [
        {
          id: '5-1',
          title: 'Computing Innovations',
          summary:
            'Examines real-world innovations powered by computing and their impacts on society.',
          keyIdeas: [
            'Computing innovations can have both intended and unintended consequences.',
            'Accessibility and inclusivity are important design goals.',
            'Innovation often combines existing technologies in new ways.',
          ],
        },
        {
          id: '5-2',
          title: 'Legal and Ethical Issues',
          summary:
            'Discusses laws, intellectual property, and ethical frameworks relevant to computing.',
          keyIdeas: [
            'Copyright and licensing define how digital content can be used.',
            'Ethical frameworks help evaluate decisions that law does not fully address.',
            'Developers have responsibilities to users, employers, and society.',
          ],
        },
        {
          id: '5-3',
          title: 'Global and Economic Impacts',
          summary:
            'Looks at how computing affects economies, labor markets, and global communication.',
          keyIdeas: [
            'Automation can displace some jobs while creating others.',
            'Global connectivity enables new forms of collaboration and culture-sharing.',
            'Digital divides persist based on access to devices, connectivity, and education.',
          ],
        },
      ],
    },
  ],
}

