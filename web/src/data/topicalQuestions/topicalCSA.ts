import type { TopicalExam } from './types'

function q(id: number, question: string, options: string[], correctAnswer: number, explanation: string) {
  return { id, question, options, correctAnswer, explanation }
}

export const TOPICAL_CS_A: TopicalExam = {
  label: 'AP Computer Science A',
  slug: 'ap-computer-science-a',
  units: [
    {
      unitNumber: 1,
      title: 'Using Objects and Methods',
      easy: [
        q(1, 'Which of the following correctly declares and initializes a String variable in Java?', [
          'String s = new char("hello");',
          'String s = "hello";',
          'string s = "hello";',
          'String s = hello;'
        ], 1, 'In Java, String literals are enclosed in double quotes. The String type is capitalized, and the new keyword is not required for string literals.'),
        q(2, 'What is the result of the expression "abc".length()?', [
          '2',
          '3',
          '4',
          'An error occurs'
        ], 1, 'The length() method returns the number of characters in the String. "abc" has 3 characters.'),
        q(3, 'Which of the following is a valid way to create a new Scanner object for reading from the keyboard?', [
          'Scanner sc = Scanner(System.in);',
          'Scanner sc = new Scanner(System.in);',
          'Scanner sc = new Scanner();',
          'Scanner sc = Scanner.create(System.in);'
        ], 1, 'A Scanner object is created using the new keyword and passing System.in to read from standard input.'),
        q(4, 'What does the following code print?\n\n```\nint x = 5;\nSystem.out.println(x);\n```', [
          'x',
          '"5"',
          '5',
          'Nothing; it causes an error'
        ], 2, 'System.out.println prints the value stored in x, which is 5.'),
        q(5, 'Which of the following is true about the Math.random() method?', [
          'It returns a random integer',
          'It returns a double value from 0.0 (inclusive) to 1.0 (exclusive)',
          'It returns a double value from 0.0 to 1.0 (both inclusive)',
          'It requires a parameter specifying the range'
        ], 1, 'Math.random() returns a double greater than or equal to 0.0 and strictly less than 1.0.')
      ],
      medium: [
        q(6, 'What is the output of the following code?\n\n```\nString s = "Computer";\nSystem.out.println(s.substring(3, 6));\n```', [
          'put',
          'mpu',
          'pute',
          'mput'
        ], 0, 'substring(3, 6) returns characters at indices 3, 4, and 5. "Computer" at those indices gives "put".'),
        q(7, 'Consider the following code:\n\n```\nInteger a = new Integer(5);\nInteger b = new Integer(5);\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));\n```\n\nWhat is printed?', [
          'true followed by true',
          'false followed by true',
          'true followed by false',
          'false followed by false'
        ], 1, '== compares references, which are different objects, so false. equals() compares values, which are both 5, so true.'),
        q(8, 'What value is stored in result after the following code executes?\n\nint result = (int)(Math.random() * 6) + 1;', [
          'A random double between 1.0 and 6.0',
          'A random integer between 0 and 5',
          'A random integer between 1 and 6',
          'A random integer between 1 and 7'
        ], 2, 'Math.random() * 6 gives [0.0, 6.0). Casting to int gives 0-5. Adding 1 gives 1-6.'),
        q(9, 'Which of the following correctly compares two String objects s1 and s2 for equality of their content?', [
          's1 == s2',
          's1.compareTo(s2)',
          's1.equals(s2)',
          's1.length() == s2.length()'
        ], 2, 'The equals() method compares the content of two Strings. == compares references, compareTo returns an int, and length comparison does not ensure same content.'),
        q(10, 'What is the output of the following?\n\n```\nString s = "hello world";\nSystem.out.println(s.indexOf("lo"));\n```', [
          '2',
          '3',
          '4',
          '-1'
        ], 1, 'indexOf returns the index of the first occurrence of the substring "lo" in "hello world", which starts at index 3.')
      ],
      hard: [
        q(11, 'Consider the following code segment:\n\n```\nString s1 = "Java";\nString s2 = s1;\ns1 = s1 + " Programming";\nSystem.out.println(s1);\nSystem.out.println(s2);\n```\n\nWhat is printed?', [
          'Java Programming followed by Java Programming',
          'Java Programming followed by Java',
          'Java followed by Java',
          'A compile-time error occurs'
        ], 1, 'Strings are immutable. s1 = s1 + " Programming" creates a new String and assigns it to s1. s2 still references the original "Java".'),
        q(12, 'What is the output of the following code?\n\n```\nString s = "AP Computer Science";\nSystem.out.println(s.substring(0, 2) + s.substring(3, 11).toUpperCase());\n```', [
          'APComputer',
          'APCOMPUTER',
          'AP COMPUTER',
          'AP COMPUTER SCIENCE'
        ], 1, 's.substring(0,2) is "AP". s.substring(3,11) is "Computer". toUpperCase() gives "COMPUTER". Result is "APCOMPUTER".'),
        q(13, 'Consider the following:\n\n```\nInteger x = 127;\nInteger y = 127;\nInteger a = 128;\nInteger b = 128;\n```\n\nWhich of the following is true?', [
          'x == y is true and a == b is true',
          'x == y is false and a == b is false',
          'x == y is true and a == b is false',
          'x == y is false and a == b is true'
        ], 2, 'Java caches Integer objects for values -128 to 127. So x and y reference the same cached object (== is true). For 128, new objects are created so a == b is false.'),
        q(14, 'What is the result of the following expression?\n\n"hello".substring(1).indexOf("l")', [
          '1',
          '2',
          '3',
          '0'
        ], 0, '"hello".substring(1) returns "ello". indexOf("l") in "ello" finds "l" at index 1.'),
        q(15, 'Consider the method call: Math.abs(Integer.MIN_VALUE). What is the result?', [
          '2147483647',
          '2147483648',
          '-2147483648',
          'An ArithmeticException is thrown'
        ], 2, 'Integer.MIN_VALUE is -2147483648. Its absolute value (2147483648) exceeds Integer.MAX_VALUE (2147483647), so integer overflow occurs and the result is -2147483648.')
      ]
    },
    {
      unitNumber: 2,
      title: 'Selection and Iteration',
      easy: [
        q(16, 'What is the output of the following code?\n\n```\nint x = 10;\nif (x > 5) {\n  System.out.println("A");\n} else {\n  System.out.println("B");\n}\n```', [
          'A',
          'B',
          'AB',
          'Nothing is printed'
        ], 0, 'Since x is 10, which is greater than 5, the if block executes and prints "A".'),
        q(17, 'How many times does the following loop execute?\n\n```\nfor (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}\n```', [
          '4',
          '5',
          '6',
          '0'
        ], 1, 'The loop runs for i = 0, 1, 2, 3, 4 — a total of 5 times.'),
        q(18, 'What is the output of the following?\n\n```\nint x = 7;\nif (x % 2 == 0) {\n  System.out.println("even");\n} else {\n  System.out.println("odd");\n}\n```', [
          'even',
          'odd',
          'evenodd',
          'A compile-time error'
        ], 1, '7 % 2 equals 1, which is not 0, so the else block executes and prints "odd".'),
        q(19, 'Which of the following correctly represents a while loop that prints the numbers 1 through 10?', [
          'int i = 1; while (i <= 10) { System.out.println(i); }',
          'int i = 1; while (i <= 10) { System.out.println(i); i++; }',
          'int i = 0; while (i < 10) { System.out.println(i); i++; }',
          'int i = 1; while (i < 10) { System.out.println(i); i++; }'
        ], 1, 'Starting at 1 and looping while i <= 10 with i++ correctly prints 1 through 10. Option A is infinite, C prints 0-9, D prints 1-9.'),
        q(20, 'What does the break statement do inside a loop?', [
          'Skips the current iteration and continues to the next',
          'Terminates the entire program',
          'Immediately exits the loop',
          'Restarts the loop from the beginning'
        ], 2, 'The break statement immediately exits the innermost loop it is contained in.')
      ],
      medium: [
        q(21, 'What is the output of the following code?\n\n```\nint sum = 0;\nfor (int i = 1; i <= 4; i++) {\n  if (i % 2 == 0) {\n    sum += i;\n  }\n}\nSystem.out.println(sum);\n```', [
          '4',
          '6',
          '10',
          '3'
        ], 1, 'Even values of i in the range 1-4 are 2 and 4. sum = 2 + 4 = 6.'),
        q(22, 'Consider the following code:\n\n```\nint x = 15;\nif (x > 10 && x < 20) {\n  System.out.println("A");\n}\nif (x > 12 || x < 5) {\n  System.out.println("B");\n}\n```\n\nWhat is printed?', [
          'A',
          'B',
          'A followed by B',
          'Nothing'
        ], 2, 'x = 15: 15 > 10 && 15 < 20 is true, prints "A". 15 > 12 is true so the OR is true, prints "B".'),
        q(23, 'What is the output?\n\n```\nint count = 0;\nint i = 1;\nwhile (i <= 100) {\n  if (i % 3 == 0 && i % 5 == 0) {\n    count++;\n  }\n  i++;\n}\nSystem.out.println(count);\n```', [
          '5',
          '6',
          '7',
          '33'
        ], 1, 'Numbers from 1 to 100 divisible by both 3 and 5 (i.e., divisible by 15) are: 15, 30, 45, 60, 75, 90. That is 6 numbers.'),
        q(24, 'What is the value of x after the following code executes?\n\n```\nint x = 1;\nfor (int i = 0; i < 4; i++) {\n  x *= 2;\n}\n```', [
          '4',
          '8',
          '16',
          '32'
        ], 2, 'x starts at 1. After 4 iterations of doubling: 2, 4, 8, 16.'),
        q(25, 'What does the following nested loop print?\n\n```\nfor (int i = 1; i <= 3; i++) {\n  for (int j = 1; j <= i; j++) {\n    System.out.print("*");\n  }\n  System.out.println();\n}\n```', [
          '*\\n**\\n***',
          '***\\n**\\n*',
          '***\\n***\\n***',
          '*\\n*\\n*'
        ], 0, 'When i=1, j runs 1 time (1 star). When i=2, j runs 2 times (2 stars). When i=3, j runs 3 times (3 stars). Each row ends with a newline.')
      ],
      hard: [
        q(26, 'What is the output of the following code?\n\n```\nint a = 5, b = 10;\nif (a > 3)\n  if (b < 8)\n    System.out.println("X");\n  else\n    System.out.println("Y");\nelse\n  System.out.println("Z");\n```', [
          'X',
          'Y',
          'Z',
          'Nothing is printed'
        ], 1, 'The else matches the nearest if. a > 3 is true, so we enter the inner if. b < 8 is false, so the inner else executes, printing "Y". This is the classic dangling else problem.'),
        q(27, 'Consider the following:\n\n```\nfor (int i = 0; i < 5; i++) {\n  for (int j = 0; j < 5; j++) {\n    if (i == j) break;\n    System.out.print("*");\n  }\n}\n```\n\nHow many asterisks are printed?', [
          '10',
          '15',
          '20',
          '25'
        ], 0, 'When i=0: j=0, i==j so break (0 stars). i=1: j=0 prints *, j=1 break (1 star). i=2: 2 stars. i=3: 3 stars. i=4: 4 stars. Total: 0+1+2+3+4 = 10.'),
        q(28, 'What is the output?\n\n```\nint n = 1234;\nint rev = 0;\nwhile (n > 0) {\n  rev = rev * 10 + n % 10;\n  n /= 10;\n}\nSystem.out.println(rev);\n```', [
          '1234',
          '4321',
          '1',
          '4'
        ], 1, 'This algorithm reverses the digits. n%10 gets the last digit, rev*10 shifts rev left. Through iterations: rev becomes 4, 43, 432, 4321.'),
        q(29, 'What is the output of the following code?\n\n```\nboolean found = false;\nfor (int i = 2; i <= 20 && !found; i++) {\n  boolean prime = true;\n  for (int j = 2; j < i; j++) {\n    if (i % j == 0) {\n      prime = false;\n    }\n  }\n  if (prime && i > 15) {\n    System.out.println(i);\n    found = true;\n  }\n}\n```', [
          '2',
          '17',
          '19',
          '13'
        ], 1, 'The code finds the first prime number greater than 15 in the range 2-20. 16 is not prime, 17 is prime, so it prints 17.'),
        q(30, 'How many times is the body of the innermost loop executed?\n\n```\nfor (int i = 0; i < 3; i++) {\n  for (int j = i; j < 3; j++) {\n    for (int k = j; k < 3; k++) {\n      // body\n    }\n  }\n}\n```', [
          '10',
          '9',
          '6',
          '27'
        ], 0, 'Counting: i=0: j=0: k=0,1,2(3); j=1: k=1,2(2); j=2: k=2(1). i=1: j=1: k=1,2(2); j=2: k=2(1). i=2: j=2: k=2(1). Total: 3+2+1+2+1+1 = 10.')
      ]
    },
    {
      unitNumber: 3,
      title: 'Class Creation',
      easy: [
        q(31, 'Which keyword is used to define a class in Java?', [
          'define',
          'struct',
          'class',
          'object'
        ], 2, 'The class keyword is used to define a class in Java.'),
        q(32, 'What is a constructor in Java?', [
          'A method that returns the class name',
          'A special method called when an object is created',
          'A method that destroys an object',
          'A static method that initializes class variables'
        ], 1, 'A constructor is a special method that is automatically called when an object is instantiated using the new keyword.'),
        q(33, 'Which access modifier makes an instance variable accessible only within the same class?', [
          'public',
          'protected',
          'private',
          'default'
        ], 2, 'The private access modifier restricts access to the declaring class only.'),
        q(34, 'What is the return type of a constructor?', [
          'void',
          'The class type',
          'int',
          'Constructors do not have a return type'
        ], 3, 'Constructors do not have a return type, not even void. They are special methods that initialize objects.'),
        q(35, 'Which keyword refers to the current object within an instance method?', [
          'self',
          'this',
          'current',
          'me'
        ], 1, 'The this keyword refers to the current object instance in Java.')
      ],
      medium: [
        q(36, 'Consider the class:\n\n```\npublic class Dog {\n  private String name;\n  private int age;\n  public Dog(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n}\n```\n\nWhat happens when you write: Dog d = new Dog("Rex");?', [
          'A Dog object is created with name "Rex" and age 0',
          'A compile-time error occurs',
          'A Dog object is created with name "Rex" and age null',
          'A runtime error occurs'
        ], 1, 'The class only has a two-parameter constructor. Calling it with one argument causes a compile-time error because no matching constructor exists.'),
        q(37, 'What is method overloading?', [
          'Defining a method in a subclass with the same signature as in the superclass',
          'Having multiple methods with the same name but different parameter lists in the same class',
          'Calling a method multiple times in a loop',
          'Defining a method with the static keyword'
        ], 1, 'Method overloading occurs when multiple methods in the same class share the same name but differ in their parameter lists (number, type, or order of parameters).'),
        q(38, 'Consider the following class:\n\n```\npublic class Counter {\n  private int count;\n  public Counter() { count = 0; }\n  public void increment() { count++; }\n  public int getCount() { return count; }\n}\n```\n\nWhat is printed?\n\n```\nCounter c1 = new Counter();\nCounter c2 = c1;\nc1.increment();\nc1.increment();\nc2.increment();\nSystem.out.println(c1.getCount());\n```', [
          '2',
          '3',
          '1',
          '0'
        ], 1, 'c2 = c1 copies the reference, so both c1 and c2 point to the same object. Three increment() calls total, so getCount() returns 3.'),
        q(39, 'What is encapsulation?', [
          'The ability of a class to inherit from another class',
          'Wrapping data and methods into a single unit and restricting direct access to the data',
          'The ability to define multiple constructors',
          'The process of converting an object to a string'
        ], 1, 'Encapsulation is the OOP principle of bundling data (fields) and methods that operate on that data, while restricting direct access using access modifiers like private.'),
        q(40, 'What is the purpose of a toString() method?', [
          'To convert a string to an object',
          'To compare two objects',
          'To return a string representation of an object',
          'To parse a string into an integer'
        ], 2, 'The toString() method returns a String representation of an object and is automatically called when an object is used in string concatenation or printed.')
      ],
      hard: [
        q(41, 'Consider the following class:\n\n```\npublic class Point {\n  private int x, y;\n  public Point(int x, int y) { this.x = x; this.y = y; }\n  public void translate(int dx, int dy) { x += dx; y += dy; }\n  public boolean equals(Object obj) {\n    if (!(obj instanceof Point)) return false;\n    Point other = (Point) obj;\n    return this.x == other.x && this.y == other.y;\n  }\n}\nPoint p = new Point(1, 2);\nPoint q = new Point(1, 2);\np.translate(2, 3);\n```\n\nWhat does p.equals(q) return?', [
          'true',
          'false',
          'A compile-time error',
          'A runtime error'
        ], 1, 'After translate(2,3), p has coordinates (3,5). q has coordinates (1,2). They are not equal, so equals returns false.'),
        q(42, 'A class has the following:\n\n```\npublic class Account {\n  private double balance;\n  public Account(double b) { balance = b; }\n  public void transfer(Account other, double amt) {\n    this.balance -= amt;\n    other.balance += amt;\n  }\n}\n```\n\nWhy can the transfer method access other.balance directly even though balance is private?', [
          'Because other is passed as a parameter',
          'Because private means accessible within the same class, not just the same object',
          'Because the transfer method is public',
          'This code would not compile'
        ], 1, 'Private access in Java is class-level, not object-level. Any method in a class can access private fields of any instance of that same class.'),
        q(43, 'Consider:\n\n```\npublic class Fraction {\n  private int num, den;\n  public Fraction(int n, int d) { num = n; den = d; }\n  public Fraction multiply(Fraction other) {\n    return new Fraction(this.num * other.num, this.den * other.den);\n  }\n  public String toString() { return num + "/" + den; }\n}\nFraction a = new Fraction(2, 3);\nFraction b = new Fraction(3, 4);\nSystem.out.println(a.multiply(b));\n```', [
          '6/12',
          '2/3',
          '5/7',
          '6/7'
        ], 0, 'multiply returns new Fraction(2*3, 3*4) = new Fraction(6, 12). toString() gives "6/12".'),
        q(44, 'What is the output?\n\n```\npublic class Mystery {\n  private int x;\n  public Mystery(int x) { this.x = x; }\n  public Mystery doSomething(Mystery other) {\n    Mystery result = new Mystery(this.x + other.x);\n    this.x = 0;\n    return result;\n  }\n  public int getX() { return x; }\n}\nMystery a = new Mystery(5);\nMystery b = new Mystery(3);\nMystery c = a.doSomething(b);\nSystem.out.println(a.getX() + " " + b.getX() + " " + c.getX());\n```', [
          '5 3 8',
          '0 3 8',
          '8 3 0',
          '0 0 8'
        ], 1, 'doSomething creates a new Mystery with x=5+3=8. Then sets this.x (a.x) to 0. b is unchanged. So: a=0, b=3, c=8.'),
        q(45, 'A class has a static variable count that tracks the number of objects created. Which implementation is correct?', [
          'public class Obj { int count = 0; public Obj() { count++; } }',
          'public class Obj { static int count = 0; public Obj() { count++; } }',
          'public class Obj { static int count = 0; public static Obj() { count++; } }',
          'public class Obj { final int count = 0; public Obj() { count++; } }'
        ], 1, 'A static variable is shared among all instances. Incrementing it in the constructor correctly counts objects. Option C has an invalid static constructor. Option D uses final which prevents modification.')
      ]
    },
    {
      unitNumber: 4,
      title: 'Data Collections',
      easy: [
        q(46, 'Which of the following correctly creates an ArrayList of Strings?', [
          'ArrayList<String> list = new ArrayList<String>();',
          'ArrayList list = new ArrayList<String>();',
          'ArrayList<string> list = new ArrayList<>();',
          'List<String> list = ArrayList<String>();'
        ], 0, 'The correct syntax uses generics with the class type on both sides (or diamond operator on the right). String must be capitalized.'),
        q(47, 'What does list.size() return for an empty ArrayList?', [
          '-1',
          '0',
          '1',
          'null'
        ], 1, 'The size() method returns the number of elements in the list. An empty list has 0 elements.'),
        q(48, 'Which of the following correctly declares a one-dimensional array of 5 integers?', [
          'int[] arr = new int(5);',
          'int arr = new int[5];',
          'int[] arr = new int[5];',
          'int[5] arr = new int[];'
        ], 2, 'The correct syntax is int[] arr = new int[5]; which creates an array of 5 integers initialized to 0.'),
        q(49, 'What is the index of the last element in an array of length n?', [
          'n',
          'n - 1',
          'n + 1',
          '1'
        ], 1, 'Arrays are 0-indexed in Java. An array of length n has valid indices from 0 to n-1.'),
        q(50, 'What method is used to add an element to the end of an ArrayList?', [
          'insert()',
          'append()',
          'add()',
          'push()'
        ], 2, 'The add() method appends an element to the end of an ArrayList.')
      ],
      medium: [
        q(51, 'What is the output of the following code?\n\n```\nArrayList<Integer> list = new ArrayList<>();\nlist.add(1);\nlist.add(2);\nlist.add(3);\nlist.remove(1);\nSystem.out.println(list);\n```', [
          '[1, 3]',
          '[2, 3]',
          '[1, 2]',
          '[1, 2, 3]'
        ], 0, 'list.remove(1) removes the element at index 1 (which is 2). The remaining list is [1, 3].'),
        q(52, 'What is printed by the following code?\n\n```\nint[] arr = {3, 7, 2, 9, 4};\nint max = arr[0];\nfor (int val : arr) {\n  if (val > max) max = val;\n}\nSystem.out.println(max);\n```', [
          '3',
          '7',
          '9',
          '4'
        ], 2, 'The enhanced for loop iterates through all elements, updating max whenever a larger value is found. The maximum value is 9.'),
        q(53, 'Consider the following:\n\n```\nint[][] grid = {{1,2,3},{4,5,6},{7,8,9}};\nSystem.out.println(grid[2][0]);\n```', [
          '3',
          '4',
          '7',
          '1'
        ], 2, 'grid[2] accesses the third row {7,8,9}. grid[2][0] accesses the first element of that row, which is 7.'),
        q(54, 'What happens when you try to access arr[5] on an array of length 5?', [
          'It returns 0',
          'It returns null',
          'An ArrayIndexOutOfBoundsException is thrown',
          'A compile-time error occurs'
        ], 2, 'Valid indices are 0-4 for an array of length 5. Accessing index 5 throws an ArrayIndexOutOfBoundsException at runtime.'),
        q(55, 'What is the output?\n\n```\nArrayList<String> names = new ArrayList<>();\nnames.add("Alice");\nnames.add("Bob");\nnames.add("Charlie");\nnames.set(1, "Dave");\nSystem.out.println(names.get(1));\n```', [
          'Alice',
          'Bob',
          'Dave',
          'Charlie'
        ], 2, 'set(1, "Dave") replaces the element at index 1 (previously "Bob") with "Dave". get(1) then returns "Dave".')
      ],
      hard: [
        q(56, 'What is the output of the following?\n\n```\nArrayList<Integer> list = new ArrayList<>();\nfor (int i = 0; i < 5; i++) list.add(i * 2);\nfor (int i = list.size() - 1; i >= 0; i--) {\n  if (list.get(i) % 4 == 0) list.remove(i);\n}\nSystem.out.println(list);\n```', [
          '[2, 6]',
          '[0, 2, 4, 6, 8]',
          '[2, 6]',
          '[0, 4, 8]'
        ], 0, 'List starts as [0,2,4,6,8]. Iterating backwards: i=4(8%4==0, remove), i=3(6%4!=0), i=2(4%4==0, remove), i=1(2%4!=0), i=0(0%4==0, remove). Result: [2, 6].'),
        q(57, 'Consider the following code:\n\n```\nint[][] mat = new int[3][3];\nfor (int i = 0; i < 3; i++)\n  for (int j = 0; j < 3; j++)\n    mat[i][j] = i * 3 + j + 1;\nint sum = 0;\nfor (int i = 0; i < 3; i++)\n  sum += mat[i][i];\nSystem.out.println(sum);\n```', [
          '9',
          '15',
          '12',
          '6'
        ], 1, 'Matrix: {{1,2,3},{4,5,6},{7,8,9}}. Diagonal elements: mat[0][0]=1, mat[1][1]=5, mat[2][2]=9. Sum = 15.'),
        q(58, 'What is the output?\n\n```\nint[] arr = {5, 3, 8, 1, 4};\nfor (int i = 0; i < arr.length - 1; i++) {\n  for (int j = 0; j < arr.length - 1 - i; j++) {\n    if (arr[j] > arr[j + 1]) {\n      int temp = arr[j];\n      arr[j] = arr[j + 1];\n      arr[j + 1] = temp;\n    }\n  }\n}\nSystem.out.println(arr[2]);\n```', [
          '3',
          '4',
          '5',
          '8'
        ], 1, 'This is bubble sort ascending. After sorting: {1, 3, 4, 5, 8}. arr[2] = 4.'),
        q(59, 'Consider the following method:\n\n```\npublic static ArrayList<Integer> mystery(ArrayList<Integer> list) {\n  ArrayList<Integer> result = new ArrayList<>();\n  for (int i = list.size() - 1; i >= 0; i--) {\n    if (!result.contains(list.get(i))) {\n      result.add(0, list.get(i));\n    }\n  }\n  return result;\n}\n```\n\nWhat does mystery return when called with [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]?', [
          '[3, 1, 4, 5, 9, 2, 6]',
          '[1, 4, 5, 9, 2, 6, 3]',
          '[3, 1, 4, 1, 5, 9, 2, 6, 5, 3]',
          '[6, 2, 9, 5, 4, 1, 3]'
        ], 0, 'Iterating from end to start, inserting at position 0 if not already in result. This removes duplicates while preserving the first occurrence order: [3, 1, 4, 5, 9, 2, 6].'),
        q(60, 'What is the time complexity of searching for an element in an unsorted ArrayList of n elements?', [
          'O(1)',
          'O(log n)',
          'O(n)',
          'O(n²)'
        ], 2, 'In an unsorted list, you must potentially check every element to find the target or confirm it is absent, which is O(n) linear time.')
      ]
    }
  ]
}
