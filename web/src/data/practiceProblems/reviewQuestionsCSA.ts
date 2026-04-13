import type { APPracticeExam } from './apPracticeQuestions'

function q(id: number, question: string, options: string[], correctAnswer: number, explanation: string) {
  return { id, question, options, correctAnswer, explanation }
}

export const AP_CS_A: APPracticeExam = {
  label: 'AP Computer Science A',
  slug: 'ap-computer-science-a',
  units: [
    {
      unitNumber: 1,
      title: 'Using Objects and Methods',
      questions: [
        q(1, 'What is the result of the expression 7 / 2 in Java?', ['3.5', '3', '4', '3.0'], 1, 'Integer division in Java truncates the decimal, so 7 / 2 = 3.'),
        q(2, 'Which of the following is a valid variable declaration in Java?', ['int 2count = 5;', 'double price = 9.99;', 'String = "hello";', 'boolean true = false;'], 1, 'Variable names cannot start with a number, be a keyword, or be missing a name.'),
        q(3, 'What does the "new" keyword do in Java?', ['Declares a variable', 'Creates a new instance of a class', 'Imports a library', 'Defines a method'], 1, 'The "new" keyword is used to create (instantiate) a new object from a class.'),
        q(4, 'Which method is used to find the length of a String in Java?', ['.size()', '.length()', '.count()', '.getLength()'], 1, 'The .length() method returns the number of characters in a String.'),
        q(5, 'What is the output of System.out.println("AP" + "CS" + "A");?', ['AP CS A', 'APCSA', 'AP+CS+A', 'Error'], 1, 'String concatenation with + joins strings without spaces.'),
        q(6, 'Which data type would best store a student\'s GPA of 3.75?', ['int', 'boolean', 'double', 'String'], 2, 'A double stores decimal (floating-point) numbers.'),
        q(7, 'What is the value of (int)(9.7)?', ['10', '9', '9.7', '9.0'], 1, 'Casting a double to int truncates (does not round) the decimal.'),
        q(8, 'Which of the following creates a String object?', ['String s = new String("hi");', 'String s = "hi";', 'Both A and B', 'Neither A nor B'], 2, 'Both are valid ways to create a String in Java.'),
        q(9, 'What does Math.abs(-5) return?', ['-5', '5', '0', '5.0'], 1, 'Math.abs() returns the absolute value of a number.'),
        q(10, 'What is the result of "hello".substring(1, 3)?', ['"hel"', '"el"', '"ell"', '"he"'], 1, 'substring(1, 3) returns characters at index 1 and 2 (exclusive end).'),
        q(11, 'Which of the following is NOT a primitive data type in Java?', ['int', 'double', 'String', 'boolean'], 2, 'String is a reference type (class), not a primitive.'),
        q(12, 'What is the output of System.out.println(5 + 3 + "CS");?', ['"53CS"', '"8CS"', '"5 + 3 + CS"', 'Error'], 1, '5 + 3 is evaluated first as integer addition (8), then concatenated with "CS".'),
        q(13, 'What does the % operator do?', ['Division', 'Returns the remainder', 'Multiplication', 'Exponentiation'], 1, 'The modulo operator % returns the remainder of integer division.'),
        q(14, 'What is the value of 10 % 3?', ['3', '1', '0', '3.33'], 1, '10 divided by 3 is 3 remainder 1.'),
        q(15, 'Which of the following correctly calls a static method?', ['obj.staticMethod()', 'ClassName.staticMethod()', 'new staticMethod()', 'static.method()'], 1, 'Static methods are called using the class name.'),
        q(16, 'What is the default value of an int instance variable?', ['null', '0', '-1', 'undefined'], 1, 'Numeric primitive instance variables default to 0 in Java.'),
        q(17, 'What does Math.pow(2, 3) return?', ['6.0', '8.0', '9.0', '5.0'], 1, 'Math.pow(2, 3) computes 2^3 = 8.0 (returns a double).'),
        q(18, 'Which statement correctly prints to the console?', ['print("Hello");', 'System.out.println("Hello");', 'console.log("Hello");', 'echo "Hello";'], 1, 'System.out.println() is the standard Java print statement.'),
        q(19, 'What is the result of "hello".indexOf("l")?', ['2', '3', '1', '-1'], 0, 'indexOf returns the first occurrence index. "l" first appears at index 2.'),
        q(20, 'What does the equals() method do for Strings?', ['Compares memory addresses', 'Compares string content', 'Assigns a value', 'Concatenates strings'], 1, 'equals() compares the actual content of two String objects.'),
      ],
    },
    {
      unitNumber: 2,
      title: 'Selection and Iteration',
      questions: [
        q(
          1,
          'What is the output of:\n\nif (5 > 3) {\n  System.out.println("Yes");\n}',
          ['"Yes"', '"No"', 'Nothing', 'Error'],
          0,
          '5 > 3 is true, so "Yes" is printed.'
        ),
        q(2, 'Which operator is used for logical AND in Java?', ['&', '&&', 'AND', '||'], 1, '&& is the logical AND operator in Java.'),
        q(3, 'What is the result of: !(true && false)?', ['true', 'false', 'null', 'Error'], 0, 'true && false = false, then !false = true.'),
        q(
          4,
          'How many times does this loop execute?\n\nfor (int i = 0; i < 5; i++) {\n  // body\n}',
          ['4', '5', '6', '0'],
          1,
          'i goes from 0 to 4 (inclusive), so 5 iterations.'
        ),
        q(
          5,
          'What is the output?\n\nint x = 10;\nwhile (x > 0) {\n  x -= 3;\n}\nSystem.out.println(x);',
          ['1', '-2', '0', '10'],
          1,
          'x: 10 -> 7 -> 4 -> 1 -> -2. Loop stops when x becomes -2, so -2 is printed.'
        ),
        q(6, 'Which statement is used to exit a loop early?', ['return', 'break', 'continue', 'exit'], 1, 'break immediately exits the current loop.'),
        q(7, 'What does "continue" do in a loop?', ['Exits the loop', 'Skips to the next iteration', 'Restarts the loop', 'Pauses the loop'], 1, 'continue skips the rest of the current iteration and moves to the next.'),
        q(
          8,
          'What is the value of count after this code runs?\n\nint count = 0;\nfor (int i = 1; i <= 3; i++) {\n  for (int j = 1; j <= 2; j++) {\n    count++;\n  }\n}',
          ['5', '6', '3', '2'],
          1,
          'Outer loop runs 3 times, inner runs 2 times each, so count increments 3×2 = 6 times.'
        ),
        q(9, 'Which of the following is an infinite loop?', ['for(int i=0; i<10; i++)', 'while(true) {}', 'for(int i=10; i>0; i--)', 'while(false) {}'], 1, 'while(true) never has a false condition, so it loops forever.'),
        q(
          10,
          'What is the value of x after this code runs?\n\nint x = 0;\nfor (int i = 0; i < 4; i++) {\n  x += i;\n}',
          ['6', '10', '4', '3'],
          0,
          'The loop adds 0 + 1 + 2 + 3, so x ends as 6.'
        ),
        q(11, 'What does the else-if construct allow?', ['Only one condition check', 'Multiple condition checks in sequence', 'Loop repetition', 'Variable declaration'], 1, 'else-if allows checking multiple conditions sequentially.'),
        q(
          12,
          'What is the output of this statement?\n\nSystem.out.println(10 == 10);',
          ['"10"', 'true', 'false', '1'],
          1,
          '== compares values; 10 equals 10, so true is printed.'
        ),
        q(13, 'Which loop is guaranteed to execute at least once?', ['for loop', 'while loop', 'do-while loop', 'enhanced for loop'], 2, 'A do-while loop checks the condition after executing the body.'),
        q(14, 'What is De Morgan\'s Law for !(A && B)?', ['!A && !B', '!A || !B', 'A || B', 'A && B'], 1, 'De Morgan\'s: !(A && B) = !A || !B.'),
        q(
          15,
          'In a switch statement without break statements, what happens when a case matches?\n\nswitch (value) {\n  case 1:\n    // code\n  case 2:\n    // more code\n}',
          ['Only the matching case executes', 'Fall-through to subsequent cases', 'Compilation error', 'Nothing'],
          1,
          'Without break, control falls through from the matching case to subsequent cases.'
        ),
        q(
          16,
          'What is the result of this expression?\n\n\"abc\".compareTo(\"abd\")',
          ['0', '-1', '1', 'Error'],
          1,
          '"c" comes before "d", so compareTo returns a negative value (such as -1).'
        ),
        q(17, 'How many times does: for(int i=10; i>=1; i-=2) execute?', ['5', '10', '4', '6'], 0, 'i: 10, 8, 6, 4, 2 -> 5 iterations.'),
        q(18, 'What is short-circuit evaluation?', ['Evaluating all conditions', 'Stopping evaluation when result is determined', 'A type of loop', 'A compilation optimization'], 1, 'Short-circuit evaluation stops as soon as the result is known.'),
        q(
          19,
          'What is the output of this code?\n\nint x = 5;\nif (x > 3 && x < 10) {\n  System.out.println(\"Range\");\n}',
          ['"Range"', 'Nothing', 'Error', '"5"'],
          0,
          '5 > 3 is true and 5 < 10 is true, so "Range" prints.'
        ),
        q(
          20,
          'What does the ternary operator ?: do?\n\ncondition ? valueIfTrue : valueIfFalse',
          ['Loops three times', 'Provides a shorthand for if-else', 'Declares three variables', 'Compares three values'],
          1,
          'The ternary operator is a compact form of if-else: it evaluates to one of two expressions based on a boolean condition.'
        ),
      ],
    },
    {
      unitNumber: 3,
      title: 'Class Creation',
      questions: [
        q(1, 'What is a constructor in Java?', ['A method that returns a value', 'A special method called when creating an object', 'A static method', 'A loop structure'], 1, 'A constructor initializes a new object when it is created.'),
        q(2, 'What keyword makes an instance variable accessible only within its class?', ['public', 'private', 'static', 'void'], 1, 'private restricts access to the declaring class only.'),
        q(3, 'What is encapsulation?', ['Hiding implementation details', 'Creating loops', 'Inheriting from a class', 'Throwing exceptions'], 0, 'Encapsulation hides internal data and provides controlled access through methods.'),
        q(4, 'What is the purpose of a getter method?', ['To modify a private variable', 'To return the value of a private variable', 'To create an object', 'To delete a variable'], 1, 'Getter methods provide read access to private instance variables.'),
        q(5, 'What does the "this" keyword refer to?', ['The parent class', 'The current object', 'A static variable', 'The main method'], 1, '"this" refers to the current instance of the class.'),
        q(6, 'What is a void method?', ['A method that returns an integer', 'A method that does not return a value', 'A method with no parameters', 'A private method'], 1, 'void methods perform actions but do not return a value.'),
        q(7, 'What is method overloading?', ['Having methods with the same name but different parameters', 'Overriding a parent method', 'Calling a method multiple times', 'A compilation error'], 0, 'Overloading means multiple methods share a name but differ in parameter lists.'),
        q(8, 'What is the scope of a local variable?', ['The entire class', 'The method or block where it is declared', 'All classes in the project', 'The constructor only'], 1, 'Local variables exist only within the method or block where they are declared.'),
        q(9, 'What happens if no constructor is defined in a class?', ['Compilation error', 'Java provides a default no-argument constructor', 'The class cannot be instantiated', 'All variables are null'], 1, 'Java automatically provides a default constructor if none is explicitly defined.'),
        q(10, 'What is a setter method?', ['Returns a value', 'Modifies a private instance variable', 'Creates a new object', 'Deletes an object'], 1, 'Setter methods provide write access to private instance variables.'),
        q(11, 'What is the difference between static and non-static methods?', ['Static methods belong to the class; non-static belong to instances', 'No difference', 'Static methods are faster', 'Non-static methods cannot access variables'], 0, 'Static methods are called on the class itself, not on instances.'),
        q(12, 'What does "public" access modifier mean?', ['Accessible only within the class', 'Accessible from any class', 'Accessible only in the same package', 'Not accessible'], 1, 'public means the member can be accessed from any other class.'),
        q(13, 'Can a class have multiple constructors?', ['No', 'Yes, through overloading', 'Only if they are static', 'Only two'], 1, 'A class can have multiple constructors with different parameter lists.'),
        q(14, 'What is a parameter in a method?', ['A return value', 'A variable passed into a method', 'A class name', 'A loop counter'], 1, 'Parameters are variables listed in a method declaration that receive values when called.'),
        q(15, 'What is the return type of a constructor?', ['void', 'int', 'The class type', 'Constructors have no return type'], 3, 'Constructors do not have a return type, not even void.'),
        q(16, 'What is a toString() method used for?', ['Converting an int to String', 'Providing a string representation of an object', 'Parsing a string', 'Comparing strings'], 1, 'toString() returns a human-readable string representation of an object.'),
        q(17, 'What happens when you pass a primitive to a method?', ['The original value is modified', 'A copy of the value is passed', 'The method gets a reference', 'An error occurs'], 1, 'Java passes primitives by value — the method gets a copy.'),
        q(18, 'What is an instance variable?', ['A variable declared inside a method', 'A variable declared in a class but outside methods', 'A constant', 'A parameter'], 1, 'Instance variables are declared at the class level and belong to each object.'),
        q(19, 'What does the static keyword mean for a variable?', ['It belongs to each instance', 'It belongs to the class and is shared by all instances', 'It cannot be changed', 'It is private'], 1, 'Static variables are shared across all instances of a class.'),
        q(20, 'What is the purpose of the "final" keyword?', ['Makes a variable constant', 'Makes a method static', 'Creates a constructor', 'Ends a loop'], 0, 'final prevents a variable from being reassigned after initialization.'),
      ],
    },
    {
      unitNumber: 4,
      title: 'Data Collections',
      questions: [
        q(1, 'What is the index of the first element in a Java array?', ['1', '0', '-1', 'It depends'], 1, 'Java arrays are 0-indexed; the first element is at index 0.'),
        q(2, 'How do you declare an array of 5 integers?', ['int[] arr = new int[5];', 'int arr = new int(5);', 'array<int> arr = new array(5);', 'int[5] arr;'], 0, 'int[] arr = new int[5]; creates an array of 5 integers.'),
        q(3, 'What is the length of the array: int[] a = {1, 2, 3, 4};?', ['3', '4', '5', '0'], 1, 'The array has 4 elements, so a.length is 4.'),
        q(4, 'What happens when you access an array index out of bounds?', ['Returns null', 'Returns 0', 'ArrayIndexOutOfBoundsException', 'Compilation error'], 2, 'Accessing an invalid index throws ArrayIndexOutOfBoundsException at runtime.'),
        q(5, 'What is the difference between an array and an ArrayList?', ['Arrays are fixed size; ArrayLists can grow', 'No difference', 'ArrayLists are faster', 'Arrays can hold objects; ArrayLists cannot'], 0, 'Arrays have a fixed size; ArrayLists dynamically resize.'),
        q(6, 'How do you add an element to an ArrayList?', ['.add(element)', '.insert(element)', '.push(element)', '.append(element)'], 0, 'The add() method appends an element to an ArrayList.'),
        q(7, 'What does ArrayList.size() return?', ['The capacity', 'The number of elements', 'The maximum index', 'The memory used'], 1, 'size() returns the current number of elements in the ArrayList.'),
        q(8, 'How do you access element at index 2 in an ArrayList?', ['list[2]', 'list.get(2)', 'list.at(2)', 'list.index(2)'], 1, 'ArrayLists use .get(index) to access elements.'),
        q(9, 'What is a 2D array?', ['An array with two elements', 'An array of arrays', 'A double array', 'An ArrayList'], 1, 'A 2D array is an array where each element is itself an array.'),
        q(10, 'How do you traverse a 2D array?', ['Single for loop', 'Nested for loops', 'While loop only', 'You cannot traverse a 2D array'], 1, 'Nested loops are used: outer for rows, inner for columns.'),
        q(11, 'What does the enhanced for loop do?', ['Iterates through each element without using an index', 'Runs faster than a regular loop', 'Only works with ArrayLists', 'Allows modification of elements'], 0, 'The enhanced for loop (for-each) iterates through elements directly.'),
        q(12, 'What is the time complexity of linear search?', ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'], 1, 'Linear search checks each element one by one: O(n).'),
        q(13, 'What is the time complexity of binary search?', ['O(n)', 'O(log n)', 'O(n^2)', 'O(1)'], 1, 'Binary search halves the search space each step: O(log n).'),
        q(14, 'What is required for binary search to work?', ['The array must be sorted', 'The array must have unique elements', 'The array must be of Strings', 'Nothing special'], 0, 'Binary search requires the array to be sorted.'),
        q(15, 'What does ArrayList.remove(0) do?', ['Removes all elements', 'Removes the first element', 'Removes element with value 0', 'Throws an error'], 1, 'remove(0) removes the element at index 0 (the first element).'),
        q(16, 'What is selection sort?', ['Finds the minimum and swaps it to the front repeatedly', 'Divides the array in half', 'Inserts elements one by one', 'Uses recursion'], 0, 'Selection sort repeatedly finds the minimum unsorted element and places it.'),
        q(17, 'What is insertion sort?', ['Divides the array in half', 'Builds a sorted portion by inserting elements in order', 'Selects the maximum element', 'Uses a stack'], 1, 'Insertion sort builds the sorted array one element at a time.'),
        q(18, 'What is recursion?', ['A loop that runs forever', 'A method that calls itself', 'A type of array', 'An error'], 1, 'Recursion is when a method calls itself to solve smaller subproblems.'),
        q(19, 'What is a base case in recursion?', ['The first call', 'The condition that stops recursion', 'The recursive call', 'An error condition'], 1, 'The base case prevents infinite recursion by providing a stopping condition.'),
        q(20, 'What is merge sort\'s time complexity?', ['O(n)', 'O(n^2)', 'O(n log n)', 'O(log n)'], 2, 'Merge sort divides and merges: O(n log n) in all cases.'),
      ],
    },
  ],
}
