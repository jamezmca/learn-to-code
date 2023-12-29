# JavaScript · Course Notes

#### The ultimate guide to *JavaScript Algorithms & Data Structures* 🔥

JavaScript was the most popular programming language of 2023, and there's good reason why. It can be used for dynamic programming, web development, backend development, ML & AI and the list goes on. It's perhaps not the easiest language, but it's also not the hardest, and with time you can undoubtly become a JavaScript maestro too!

> *The goal is to become familiar with the material and understand it, not to memorize it. All great developers have reference material they regularly refer to and this resource will always be here should you need it :)*

## Resources

Here are some links you might find helpful!

* **FreeCodeCamp** -> https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/
* **Learn JavaScript in 90 minutes** -> Coming soon!
* **Discord Channel** -> https://discord.gg/BYr6gujs4k
* **Learn to code roadmap** -> https://github.com/jamezmca/learn-to-code

## Table of Contents

  - [Chapter 1 - Introduction to JavaScript (JS)](#chapter-1---introduction-to-javascript-js)
    - [1.1 Get JavaScript Setup on your Computer](#11-get-javascript-setup-on-your-computer)
    - [1.2 Creating an JavaScript Script](#12-creating-an-javascript-script)
  - [Chapter 2 - Basic JavaScript Syntax and Concepts](#chapter-2---basic-javascript-syntax-and-concepts)
    - [2.1 Basic JavaScript Syntax](#21-basic-javascript-syntax)
    - [2.2 Control Flow with Conditional Statements \& Loops](#22-control-flow-with-conditional-statements--loops)
    - [2.3 Basic Functions in JavaScript](#23-basic-functions-in-javascript)
  - [Chapter 3 - Intermediate Programming Skills with JavaScript](#chapter-3---intermediate-programming-skills-with-javascript)
    - [3.1 Data Manipulation](#31-data-manipulation)
    - [3.2 Scope, closures, and how to write modular and reusable code.](#32-scope-closures-and-how-to-write-modular-and-reusable-code)
  - [Chapter 4 - Understand DOM Manipulation and Event Handling in JavaScript](#chapter-4---understand-dom-manipulation-and-event-handling-in-javascript)
  - [Chapter 5 - Gain Competency with Asynchronous Programming in JavaScript](#chapter-5---gain-competency-with-asynchronous-programming-in-javascript)
    - [5.1 Async Await](#51-async-await)
    - [5.2 Try Catch \& Finally Blocks](#52-try-catch--finally-blocks)
    - [5.3 Promise.all()](#53-promiseall)
  - [Chapter 6 - Learn the Modern ES6+ JavaScript Syntax](#chapter-6---learn-the-modern-es6-javascript-syntax)
    - [6.1 Arrow Functions](#61-arrow-functions)
    - [6.2 Ternary Operator (?)](#62-ternary-operator-)
    - [6.3 Optional Chaining](#63-optional-chaining)
    - [6.4 Object Destructuring](#64-object-destructuring)
    - [6.5 Array Destructuring](#65-array-destructuring)
    - [6.6 Template Literal Strings (\`\`)](#66-template-literal-strings-)
    - [6.7 Short Circuits (\&\& || ??)](#67-short-circuits---)
    - [6.8 Enhanced Object Literals](#68-enhanced-object-literals)
    - [6.9 Spread Operator (...)](#69-spread-operator-)
    - [6.10 Array Methods](#610-array-methods)
  - [Chapter 7 - Going Beyond](#chapter-7---going-beyond)

## Chapter 1 - Introduction to JavaScript (JS)

As mentioned above, JavaScript is a programming language that has a myriad of uses and applications. Before we dive head deep into the programming language itself and write some nifty applications, we first need to understand it's *ecosystem*; i.e. how we run it and how it works.

The best way to think about JavaScript is to imagine that it's an instruction sheet, where the instructions are defined using a *syntax* that is specific to the language, and the script/instruction sheet is executed/run on a machine (could also be a virtual or cloud machine), or in a browser such as Google Chrome or Firefox.

In this guide we'll first cover how to develop and run JavaScript scripts on our local machine (server-side development), and later learn how it can used in the browser and in web development.

### 1.1 Get JavaScript Setup on your Computer

To run a JavaScript file on your device, we're going to need what is known as a ***runtime***. Without diving too deep into what a runtime is, just think of it as a system setup to execute JavaScript files. Running code in a non-browser environment is also known as *server-side development*.

#### 1.1.1 Node.js

The runtime we'll be using is known as **Node.js**. All we need to do to get up and running with Node.js is to:

1. Install Node.js on our computer/device.
    - Link to [install](https://nodejs.org/en/download)
2. Once installed, we can interact with Node.js via the terminal/command line.
    - Type `node -v` in your terminal to ensure that Node.js is installed correctly.
        - If Node is not installed, you will receive and error, and otherwise, it will console (print out) the current version of Node installed.

> *It might serve to know that you can use a [web-based runtime](https://onecompiler.com/javascript) if your just looking to fiddle around with JavaScript.*

### 1.2 Creating an JavaScript Script

Now that we have Node.js installed, we can go ahead and create our first JavaScript file. Using VSCode & inside of a *project directory*, we initialize a new file, just as if we we're create a standard word document, can giving it any name followed by the ```.js``` suffix. For example -> 

**index.js**

> *Standard practice for JavaScript file names is to use `index.js` as your default file, and then any other JS file can have a more specifc name, for example `server.js` or `tests.js`.*

With the `index.js` file created, I now want you to write the following line of code inside of your JS file.

`console.log('Hello World!')`

Now **save** the file, and once again open up your terminal or command line. Ensuring that you are inside of the correct project directory *(the same one as the one that contains your JS file)*, type the following command and hit **Enter**.

`node index.js`

This will execute your JS file using the Node.js runtime and consequently perform the instruction that we gave inside -> to *console.log* (which means print/to log to the console/terminal) `Hello World!`. To run any other JS file, simply replace the `index.js` filename with the appropriate filename.

> *For more information about VSCode & the terminal, check out this **[guide]()**.*

## Chapter 2 - Basic JavaScript Syntax and Concepts

So now we're familiar with the JavaScript ecosystem, how to intialize JavaScript files, and also how to run them on our device. In this chapter we'll learn more about the following topics:

* Fundamental JavaScript syntax, including variables, data types, and operators.
* Control flow through conditional statements and loops.
* Basic functions and their use in structuring code.

### 2.1 Basic JavaScript Syntax

As mentioned above, the art of writing JavaScript is analogous to writing our a set of instructions for a machine to execute, where the instructions are coded using a syntax specific to JavaScript. 

> We've already seen one example of a common syntax in JavaScript that is commonly used for printing outputs or values to our terminal -> `console.log()`. We'll come to understand more about this example later, but for now, it's good to know that this simple line is one of the most powerful tools at your disposal in JavaScript when it comes to debugging code; whatever you place within the circular parenthesis, will then be outputted to the console for you to see.

The last thing to note before we dive deeper into the syntax is that our instructions need to be clearly separated from one another. We can do that by either having each individual instruction on it's own line, or by using the `;` key at the end of each instruction.

#### 2.1.1 Variable & Declarations

The very first syntax in JavaScript that we'll be learning is *variable declaration*. Essentially, a variable is a *name* that is associated with a value. For example, in mathematics could say `x = 5`. The name of the variable is `x` and it is associated with the value `5`. If I asked what the value of `x` was, you would say `5`.

In JavaScript we use variables all the time, but it's not quite as simple as the `x = 5` that we have in mathematics. To use variable, the first thing we **must** do is *initialize* the variable. Initializing the variable is a way of telling the computer that we want to create a variable, that we will then continue to use throughout our program. 

To initialize a variable, we can use one of the following 3 keywords: `const` | `let` | `var`.
    
* **`const`** is used to initialize a variable when we can guarantee that the value of the variable will **NEVER** change anywhere in the code.
    - So the mathematics example above would become `const x = 5` if written in JavaScript.
* **`let`** is used to initialize a variable when the value is likely to change, or if we are uncertain as to how permanent it's value is (this is the most common initialization).
    - We would use `let` if we expected the value of `x` to change, for example:
    - Note in the example below, that when we reassigned a new value to `x`, we did *not* reinitialize the variable.
```
let x = 5
x = 7
```
* **`var`** is a syntax of the past and we will not be using it.

> We only need to initialize a variable **once** within a particular JS script. We cannot refer to a variable in our code prior to where it is initialized, but we can use it without initialization anywhere after the line where we initialize the variable.

As for *variable names*, there are a few rules that we must follow to ensure that we don't break our code.

1. There can be no *spaces* or *dashes* in our code names.
    - Names like `let first name = ...` or `let first-name = ...` are *not* viable.
2. Names must begin with a letter of the alphabet -> `a-z, A-Z`.
    - Best practice in JS is to start your variables with a lowercase letter e.g. `let name = ...` as opposed to `let Name = ...`.
3. For *multi-word* variables, we use either the **camelCase** or **snake_case**.
    - camelCase capitalizes the first letter of each word in a phrase, without using spaces or punctuation (with exception to the first word).
    - snake_case is a way of writing phrases without spaces, where spaces are replaced with underscores `_`, and the words are all lower case.

So the correct way to write the *first name* example above would be:
* `let firstName = "John"` or `let first_name = "John"`.

> It's preferable if you pick a style and stay consistent to that style throughout your code.

#### 2.1.1.1 Assignment By Reference

If I have a function, or a variable, I can further assign it to a new variable, for example:

```
let a = 4
let b = a
console.log(b) // outputs the value of a which is 4
```

> I could do this for a function or any other type of variable too, but it's not hugely common.

#### 2.1.2 Data Types

Once we have our variables initialized, the next thing we normally do is assign some form of value to them. Values in JavaScript can have numerous different types, known as *Data Types*. Data types can be described as either *primitive* or *object* (don't worry about this too much), where the primary key data types are as follows:

* Primitive 
    - **`Number`** represents all numerical values, including integers, decimals, and exponents. (e.g., `10, 3.14, 1e5`).
    - **`String`** represents sequences of characters enclosed in quotes. (e.g., `"Hello", 'World!', ""`).
    - **`Boolean`** represents truth values, either true or false. (e.g., `true, false`).
    - **`Null`** represents the absence of a value. It's different from undefined. (e.g., `null`).
    - **`Undefined`** represents the absence of a value due to not being assigned yet or a reference pointing to nowhere. (e.g., `undefined`).
* Object
    - **`Object`** (or dictionary) is a complex data type that allows you to store collections of *key-value* pairs. Example: `{ name: 'John', age: 30 }`.
    - **`Array`** (or list) is a special type of object used to store ordered collections of values. Example: `[1, 2, 3, 4]`.
    - **`Function`** is a subtype of object that can be invoked/called. Example: `function add(x, y) { return x + y; }`.

When assigning values to a variable, it's important to ensure that the value is both a viable data type, and the correct data type. We'll dive deeper into data types and how we can manipulate them in [Chapter 3](#chapter-3---develop-intermediate-programming-skills-with-javascript).

#### 2.1.3 JavaScript Operators

An operator is a character that we typically associate with an operation, or an action. If we think about mathematics and calculators, the operators are the `+ - / *` keys that we are all familar. In JavaScript, it's no different. There are numerous operators available to us, some of which will be used far more frequently than others. **The following list labels most of them, but don't stress about memorizing them.**

**Arithmetic Operators**

* Addition (+):
`let sum = 5 + 3; // 8`

* Subtraction (-):
`let difference = 10 - 4; // 6`

* Multiplication (*):
`let product = 3 * 7; // 21`

* Division (/):
`let quotient = 15 / 3; // 5`

* Modulus (%):
`let remainder = 10 % 3; // 1 (remainder of division)`


**Assignment Operators**

* Assignment (=):
`let x = 10;`

<!-- -> Addition Assignment (+=):
```
let y = 5;
y += 3; // Equivalent to: y = y + 3; (y is now 8)
``` -->

**Comparison Operators**

* Equal (==):
`let isEqual = 5 == '5'; // true (loose equality, type coercion)`

* Strict Equal (===):
`let isStrictEqual = 5 === '5'; // false (strict equality, no type coercion)`

* Not Equal (!=) and Not Strict Not Equal (!==):
```
let notEqual = 10 != '10'; // false
let strictNotEqual = 10 !== '10'; // true
```

**Logical Operators**

* Logical AND (&&):
```
if (condition1 && condition2) {
// code to execute if both conditions are true
}
```

* Logical OR (||):
```
if (condition1 || condition2) {
  // code to execute if at least one condition is true
}
```

* Logical NOT (!):
```
if (!someCondition) {
  // code to execute if the condition is not true
}
```

<!-- **Increment and Decrement Operators**

-> Increment (++):
```
let count = 5;
count++; // Equivalent to: count = count + 1; (count is now 6)
```

-> Decrement (--):
```
let value = 8;
value--; // Equivalent to: value = value - 1; (value is now 7)
``` -->

<!-- **Ternary (Conditional) Operator**

-> Ternary Operator (?:):
`let result = (condition) ? trueValue : falseValue;` -->

**Other Operators**

* typeof Operator:
`let type = typeof variable; // Returns the type of the variable`

<!-- -> Instanceof Operator:
```
if (object instanceof Array) {
  // code to execute if the object is an array
}
``` -->

> There's a lot of information there, but you don't need to memorize it. Just be familiar with the idea we use different operators to *operate* on one or more values so to construct a new value! We'll cover a few more ES6+ syntax operators a bit later


#### 2.1.4 Commenting in JavaScipt

As you might have noted in a few of the examples above, there are a few sentences or notes that seem to appear at the end of, or below a line of code. These are code comments. To *comment out* a line of code in JavaScript, simple put the `//` characters at the start of the line. If you only want to comment out part of a line, place the `//` characters at the left-hand-side of the code you want to comment. For example:

```
let x = 5 // CODE COMMENT HERE -> SETS VALUE OF X EQUAL TO 5

// THIS ENTIRE LINE IS COMMENTED TOO :P
```

### 2.2 Control Flow with Conditional Statements & Loops

This is where we really start to see the benefit of programming. By simply understanding loops and conditional statements, we can start to write code that has immense functionality and purpose. 

* A **conditional statement** is a statement that wraps a block of code, where the execution of the code inside depends on whether or not the conditonal statement yields a *true* or *false* value (i.e. one of the two boolean values).

* A **loop** is a block of code wrapped within a loop condition; we have *for* loops and *while* loops. A *for* loop is analogous to saying 'for this many times, repeatedly execute this block of code', where a *while* loop is equivalent to saying 'while this condition is true, repeatedly execute this block of code.

#### 2.2.1 The For Loop

Let's begin by looking at the *for* loop. At the ground level, it's actually got some pretty simple syntax:

```
for (DEFINE_FOR_CONDITION) {
    //insert the code to be repeated for x number of times here
}
```

Pretty simple right? The only thing that is ever so slightly complex about the for loop is defining the bounds of the condition, of which there are 3 parts involved.

1. We have to define a variable that tracks the progress of the loop.
    - Typically we use a variable named `i`, and consequently `j` & `k` for any *nested* loops.
        - A nested loop is a loop within another loop.
    - `let i = 0;` would initialize a variable with the starting value of 0.
2. We then define the bounds of the loop.
    - This is normally an upper bounds but it could also be a lower bounds.
        - Be careful when defining the bounds of your loop otherwise you'll end up in an infinite loop which will break your computer :P
    - If we wanted to do a task 20 times, we could set the bounds of `i` to be `i < 20;`. 
3. And finally we define the progression of `i` with each iteration of the loop.
    - Typically set as `i = i + 1;` or in shortand `i++`.
        - This would increment `i` by 1 every interation of the loop until `i` hits 20, at which time our boundary condition is broken and our loop ends. So our loop in this case would execute 20 times.

And now to enter these 3 conditions into our *for* loop, we have to ensure we use the `;` separator between each of them, resulting in the following:

```
for (let i = 0; i < 20; i = i + 1) {
    console.log('The value of i is: ', i)
}
```

> We would expect this loop to print the sentence `the value of i is: _`, where with each iteration the _ is replaced with the current value of i, so 0 -> 19.

#### 2.2.2 The While Loop

While *while* loop on the otherhand is much the same really, if anything it's slightly simpler but is less common in application. At the ground level, it's actually got some pretty simple syntax:

```
while (DEFINE_WHILE_CONDITION) {
    //insert the code to be repeated while the condition remains true
}
```

The while conditon very simply is any condition that evaluates to a boolean *true* or *false* value. We could literally just write the value `true` in the condition spot and we'd have ourselves an infinite loop :P This example demonstrates a simple while condition:

```
while (img_not_found) {
    img_not_found = findImg() //function that returns true or false depending on whether or not the image has been found
}
```

This loop will endlessly execute until the function returns true (we'll talk more about functions later), and the `img_not_found` value is set to false, and the loop is exited.

#### 2.2.3 If Statements

If statements are fairly sacred in JavaScript and come in handy all the time. Let's say that we wanted to only execute a block of code depending on a certain condition; we'll, that's when `if` blocks come in handy. We could also have a block to run in the otherwise, or `else` condition, or even have some extra conditions in between. The syntax for the `if` block is as follows:

```
if (condition) {
    // evaluate this code if the condition is true
}
```

> Most commonly, the condition will evaluate to a boolean true or false, but also non-zero values will also evaluate as true. For example the number `5` or a string like `james`, and conversly the number `0` and an empty string `` evaluate to false.

We can add an `else` block to our condition if we want to execute an alternative block of code in the otherwise condition.

```
let val = 5

if (val > 5) {
    console.log('Value is greater than 5')
} else {
    console.log ('Value is less than or equal to 5)
}
```

And to add some further subconditions in between:

```
let val = 'james'

if (val.includes('j')) {
    console.log('val contains the letter j')
} else if (val.includes('p')) {
    console.log('val contains the letter p')
} else {
    console.log('val did not contain j or p)
}
```

> In JavaScript, you can also get `switch` statements which work just like `if` blocks. I'd just use an `if` block personally :P

### 2.3 Basic Functions in JavaScript

Functions are basically the holy grail of JavaScript. The difference between some well written code and code that causes despair might just be the use of functions. In JavaScript, a function is a reusable block of code that performs a specific task or set of tasks. Functions allow you to organize your code into modular, manageable pieces, making it easier to understand, maintain, and reuse. Functions can take input values, called parameters or arguments, and return a result.

> When we say 'return a result', the returned result is essentially what is left in place of the function call after it has executed. So if we had a function that had `return 2` written at the bottom, we would be left with the value 2 at the end of the function execution.

#### 2.3.1 When to use Functions

Whenever you find yourself rewriting a block of code that you also have somewhere else, it's time to move it into a function. Whenever you find your code to be hard to understand and segment, it's time to move each section into it's own function. Even when you find yourself commenting out large blocks of code for certain versions of the script, it's time to move that code to a function and just comment out the function invocation instead.

#### 2.3.2 The Anatomy of a Function

To use a function, the first thing we have to do actually define the function. The basic structure for defining a function is as follows:

```
function nameOfFunction(optionalArgument, secondOptionalArgument) {
    //reusable code goes in here
}
```

The main key parts of this syntax to take note of are:

1. Similar to how we initialize a variable using one of the *let, const & var* keywords, for functions we literally write `function` to let our program know what we're defining.
2. After the function keyword, we then name our function. Function names should be unique and common practice is to use camelCase for their names.
    - Typically the function name will concisely describe the functionality of the function.
3. The circular parenthesis come after the name, and they contain the arguments/parameters. These are optional, so you can have an empty set of parenthesis if your function does not rely on any arguments. 
    - Multiple arguments should be comma separated.
4. The code space between the curly parenthesis is where we can write our reusable code.

Now we know how to define a function, how do we go about using it?


#### 2.3.3 Invoking a Function

To use a function and execute the body of logic contained within the function, we need to **invoke** the function. We can invoke a singular function as many times as we choose, passing in different arguments every time. And with each invocation, that same body of logic will be executed.

Let's say we define a function as follows:

```
// First we define the function
function printName(name) {
    // this function receives a name input, and then prints the name to the console.
    console.log('The persons name is: ', name)
}

// And then to invoke the function . . . 
printName()
```

We now invoke it by typing it's name with the circular parenthesis at the end. In this particular case our function will actually error. Any idea why? We'll, it's because we didn't pass in a name value as an argument when we invoked the function. Consequently, our function is going to be looking for a name to print, one that doesn't actually exist. The correct syntax would look a bit more like the following:

```
// First we define the function
function printName(name) {
    // this function receives a name input, and then prints the name to the console.
    console.log('The persons name is: ', name)
}

// And then to invoke the function . . . 
let firstName = "james"
printName(firstName)

// The output would be 'The persons name is james'
```

And we could actually make our function ever so slightly more robust by providing a default value to the argument when we define the function:

```
function printName(name = "default name") {
    // this function receives a name input, and then prints the name to the console.
    console.log('The persons name is: ', name)
}
```

This would cause the name parameter to assume the value "default name" in the instance where no name is passed in as an argument when the function is invoked, otherwise it would assume the argument value.

> Note that arguments are positional, meaning it's important you input them in the same order that you define them. Additionally, we should note that whatever value or parameter we pass in as an argument when we invoke the function, will be referenced by the name given to the parameter when we define the argument. So even though I passed in a variable called **firstName** with a value equal to "james", within the function we would refer to the variable as **name**, as that's what we defined it to be in the function definition.

#### 2.3.4 Function Returns

So what if we we're doing some math and we wanted to define a function that added two numbers. We could do that very easily using a function:

```
function addNumbers(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber
}
```

And that might look all well and good, however as it's currently written, this function is of very little use.  We create a variable called sum within the function that assumes the value of the addition of the two numbers, which is great, but as soon as the function finishes executing, that value is lost to the void. If we wanted to keep ahold of the final output from the function, we'd need to do 2 things.

1. `return` the final output of the function
    - As soon as we hit `return` line in our function, the function will cease to execute as of that line.
    - We can just write `return` to exit the function, but any value we append to the return line will then be accessable outside of the function.
2. Assign the returned value to a new variable in the main *scope* of the code.
    - We'll touch more on scope later.

So we could make our code more useful by writing the function as follows:

```
// First we define the function
function addNumbers(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber // calculates the sum of the two argument values

    return sum // returns the value of the sum from the function
}

let sum1 = addNumbers(3, 6)
let sum2 = addNumbers(4, 8)

console.log(sum1, sum2) // outputs "9 12"
```

> This works per the comment made above about how the returned value is what is left behind in place of the function upon the completion of it's execution.

#### 2.3.4 Recursion

Recursion in JavaScript is a programming concept where a function calls itself in order to solve a problem. A recursive function typically breaks down a complex problem into simpler, similar subproblems and solves each subproblem by invoking the same function recursively. Recursion involves two main components: a base case and a recursive case.

1. **Base Case** -> The base case is the simplest scenario where the function does not call itself. It serves as the termination condition to prevent infinite recursion. When the base case is met, the function stops calling itself and returns a result.
2. **Recursive Case** -> The recursive case involves breaking down a larger problem into smaller, more manageable instances of the same problem. The function calls itself with modified arguments, working towards reaching the base case.

Here's a simple example of a recursive function to calculate the factorial of a number:

```
function factorial(n) {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case
    return n * factorial(n - 1);
  }
}

// Example usage
const result = factorial(5); // Computes 5! (5 factorial)
console.log(result); // Output: 120
```

In this example, the base case is when n is 0 or 1, and the function returns 1. For other values of n, the function calls itself with a smaller argument (n - 1) until the base case is reached.

> Recursion can be a powerful and elegant technique in solving certain types of problems, but it should be used judiciously, as improper use may lead to stack overflow errors or inefficient code. Understanding the base case and ensuring progress towards it is crucial for the correct functioning of recursive algorithms.

## Chapter 3 - Intermediate Programming Skills with JavaScript

Cool 🔥 We're making some amazing progress. Thus far we've learned about syntax, variables, functions, operators, data types and even more. Now it's time to take our understanding to the next level by taking a look at the following topics.

* Working with arrays, objects, and manipulating data.
* Scope, closures, and how to write modular and reusable code.
* Error handling techniques and debugging tools for effective troubleshooting.

These chapters will help us to really understand the algorithms and data structures side of JavaScript.

### 3.1 Data Manipulation

Starting off with data manipulation. 

Earlier, we covered the different types of data that we can have. We'll it doesn't end there. Most of the data that we originally assign to a variable upon it's initialization will at a later point be modified and updated, and the means and methods for updating is totally dependant on the type of data that we have.

#### 3.1.1 Modifying Strings

We'll begin with the simplest data type that we can modify and interact with - the string. As we learned above, a string is a sequence of characters contained within either the single or double quotation marks.

The first thing you need to know about a string is that every character has an index. If we have the string `'james'`, then the character indexes are as follows:

```
j 0
a 1
m 2
e 3
s 4
```

> Note that JavaScript uses a zero indexing system, meaning that the first index will always be the 0th index.

Let's say we now wanted to check what character was at the 3rd index. We can use the `[]` square parenthesis to specify and index within the string that we wish to access. For example:

```
let name = 'james'
console.log('The third character is: ', name[2]) // Outputs -> The third character is m
```

> Note how we specified the index of the character we wish to interact with within the square `[]` parenthesis, and also how we made sure to check the 2 index as in a 0th base indexing system, the 2nd index is the 3rd entry.

We also have access to what are known as string **methods**, where a method is basically just a function. There are 4 string methods worth knowing -> 

* **`.indexOf("")`** returns the index of a particular character passed into the parenthesis, and otherwise returns -1.
* **`.split("")`** splits the string at whatever character is passed as an argument to the method (an empty string would split the string into an array of every character).
* **`.includes(value)`** returns true or false depending on whether or not the string includes the *value*.
* **`.replace("", "")`** replaces the first instance of the string passed as the first argument, with the string passed as the second argument. 
* **`.replaceAll("", "")`** replaces every instance of the string passed as the first argument, with the string passed as the second argument. 

We use string methods by appending the method to the end of the string as follows:

```
let name = 'james'
console.log(name.includes('j')) // outputs true as the string does contain the letter j
```


Additionally, we can concatenate one or more strings together simply by using the addition operator `+`. For example:

```
let firstName = 'James'
let secondName = 'McArthur'

let fullName = firstName + ' ' + secondName //concatenates the two strings with a space in the middle
```

##### 3.1.1.1 Regex

Regex is a string matching system that is shorthand for 'Regular Expressions'. It's essentially a way of looking for patterns or string matches within another string. 

* A common example is email and password formatting to ensure they are secure - these systems will employ a regex match to verify the password.

> There are a million and 1 rules to regex, and it's almost impossible to remember it all perfectly, so the best system to use for the modern day is to get a system like **[ChatGPT](https://www.chat.openai.com)** to write the regex for you, and just specify in the prompt what type of matching rules you are looking for.

#### 3.1.2 Modifying Arrays and Lists

As for our arrays, indexing elements and even modifying elements in an array is much the same as with a string. We simply use the square parenthesis once again and inside of the parenthesis we specify the index of the element that we wish to either read or modify (keeping in mind the 0 indexing system).

An example of how we can do exactly that is as follows (ensure that your array actually has a value at that index):

```
let fruits = ['apple', 'orange', 'banana']
console.log(fruits[1]) // Outputs: orange
console.log(fruits[10]) // Outputs: undefined as no entry exists at that index in the array
```

With an array we can go a step further and actually **modify** a pre-existing value. All we do to achieve this is assign a new value to that particular index in the array with the following syntax:

```
let fruits = ['apple', 'orange', 'banana']
fruits[0] = 'peach' //replaces the 'apple' value in the 0th index with 'peach'
```

We also have access to a number of array **methods** (some will be covered here and newer ones will be covered in the #ES6+ section) ->

* **`.push(value)`** *pushes* a new value onto to the end of the array (i.e. **add a new value to the array**).
* **`.pop()`** removes the last value from the array and returns it.
* **`.includes(value)`** returns true or false depending on whether or not the array includes the *value*.
* **`.indexOf(value)`** returns the index of a particular character passed into the parenthesis, and otherwise returns -1.
* **`.sort(compareFunction)`** sorts the elements of an array in place (modifies the original array).
* **`.reverse()`** reverses the order of the elements in the array in place (modifies the original array).
* **`.slice(start, end)`** extracts a section of the array and returns a new array.
* **`.join(separator)`** joins all elements of an array into a string, separated by a specified separator.

To use an array method, we follow this syntax:

```
let fruits = ['apple', 'banana']
fruits.push('peach') // pushes peach to the end of the array
console.log(fruits) // outputs ['apple', 'banana', 'peach']
```

> There are obviously numerous other array methods but these are the ones that are most commonly used.


#### 3.1.3 Modifying Objects / Dictionaries

And finally we have dictionaries (objects - either term is acceptable). The syntax is once again pretty similar to arrays and strings whereby we access a value by checking the object for the associated key. For example:

```
let person = {
    name: 'james',
    age: 27,
    channel: 'https://www.youtube.com/smoljames'
}

let channelUrl = person['channel'] // note how I wrapped the key in quotations so it becomes a string
console.log(channelUrl) // outputs -> https://www.youtube.com/smoljames
```

> Note that the value associated with a key could be a further nested object, an array, a string or any other data type. If the key cannot be found in the dictionary, it will return `undefined`. Also, if we don't wrap the key name in quotations when using the square bracket notation, then it assumes that the key is a variable name and tries to instead use the value associated with said variable. 

And likewise if we wanted to modify a key-value pair:

```
let person = {
    'full name': 'james mcarthur', // note how this key has a space in the middle so I wrap the entire key in quotations so it becomes a string
    age: 27,
    channel: 'https://www.youtube.com/smoljames'
}

person['age'] = 32 // where the key is 'age' and the new value is 32

console.log(person) // outputs {name: 'james', age: 32, channel: 'https://www.youtube.com/smoljames'}
```

And if we wanted to add a new key-value pair to our dictionary, we simple do the example same thing as modifying the value, except we use a new key that does not exist within the dictionary already. If the key does exist, we will simply modify it's pre-existing value.

> There is also a *dot notation* for working with objects, where instead of accessing a value associated with a key by using the `person['age']` syntax, we instead just type `person.age`. Unfortunately dot notation only works for key names that are a single word however.

We also have access to a number of dictionary **operations/syntax** (some will be covered here and newer ones will be covered in the #ES6+ section) ->

* **`delete object['property']`** removes a key value pair from the object (where the key matches the property).
* **`'key_name' in object`** checks to see if the key is already within the object, and returns true if yes, and false if no.
* **`Object.keys(object)`** returns an array of all the keys in the dictionary.

#### 3.1.3.1 JSON 

JSON (JavaScript Object Notation) is almost like an object; more specifically it's an object that has been parsed into a string. The string format has numerous benefits for data sharing and persisting that makes it a preferable alternative to an object. 

* "JSON is a standard text-based format for representing structured data based on JavaScript object syntax".

So consequently we *stringify* our object turning it into a string with a few formatting rules, and then when we wish to utilize the data as an object again, we once again parse it back to an object data type.

Here are the essential rules of JSON to ensure valid and well-formatted data:

1. Data Types
    - JSON supports only four primitive data types:
        - Numbers (e.g., 42, 3.14159)
        - Strings (enclosed in double quotes: "hello", "world")
        - Booleans (true or false)
        - Null (represents no value)
    - It does not support other JavaScript data types like undefined or functions.
2. Structure
    - JSON data is structured as key-value pairs within curly braces {} for objects, and as ordered lists within square brackets [] for arrays.
    - Objects can contain nested objects and arrays, and arrays can contain any valid JSON data types.
3. Commas
    - Commas separate key-value pairs within objects and elements within arrays.
    - It's crucial to use commas correctly, even after the last item in a list or object.
4. Quotes
    - String values must always be enclosed in double quotes ". Single quotes are not allowed.
5. Naming
    - Key names must be strings and must be unique within an object.
    - They cannot start with a number or contain spaces or special characters (except for underscores and hyphens).
6. Comments
    - JSON does not allow comments within its structure. Any text that is not valid JSON syntax will be considered part of the data.
7. Case Sensitivity
    - JSON is case-sensitive. "name" and "Name" are considered different keys.
8. White Space
    - JSON is whitespace-insensitive. Indentation and spacing are used for readability but don't affect the structure.

And here's how we **convert between JSON & Object format**:

```
let data = {
    name: 'james',
    achievements: [0, 1, 4, 6]
}

// Convert to JSON
let jsonString = JSON.stringify(data)

// To convert back to an object
let parsedJSONObject = JSON.parse(jsonString)
```

#### 3.1.4 Chapter Quiz

Here are some questions that are the perfect application of your new knowledge!

1. Write a program that counts from 1 to 100, printing "Fizz" if the number is divisible by 3, "Buzz" if divisible by 5, and "FizzBuzz" if divisible by both.
2. Write a function that takes the array `['a', 'c', 'b', 'c', 'a', 'a']` as input and returns a dictionary of key-value pairs, where the key is a letter in the array and the value is the number of instances of that letter in the array.

### 3.2 Scope, closures, and how to write modular and reusable code.

This section covers some of the nuanced behaviors of JavaScript.

#### 3.2.1 Scope in JavaScript

Starting off with scope, which defines where you can access certain variables in JavaScript. Scope can get pretty complicated, so were just going to start off with the two main types of scope -> **global** scope and **local** scope.

**Global** scope means that variables declared *outside* of any function or block have global scope. They can be accessed from anywhere in the code, including within functions. For example:

```
let globalVariable = "I am global";

function exampleFunction() {
    console.log(globalVariable); // Accessing global variable
}

exampleFunction(); // Output: I am global
```

**Local** scope means that variables declared inside a function or block have local scope. They are only accessible within that specific function or block. For example:

```
function exampleFunction() {
    let localVariable = "I am local";
    console.log(localVariable);
}

exampleFunction(); // Output: I am local

// Trying to access localVariable here would result in an error
```

> Using the *let* & *const* declarations also causes the variables to have block scope, meaning that if they are defined within a code block e.g. an `if` block, they are inaccessible from outside the block.

#### 3.2.2 Closures in JavaScript

Closures are a challenging concepts and I wouldn't burden yourself with the expectation that you'll understand it immediately. A closure is a fundamental concept in JavaScript that arises when a function is defined within another function. A closure allows the inner function to access variables from its outer (enclosing) function, even after the outer function has finished execution. In simpler terms, a closure "closes over" the variables from its outer scope, preserving them.

```
function counter() {
    var count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

var increment = counter();
increment(); // Output: 1
increment(); // Output: 2
```

So basically a closure in JavaScript is formed when a function retains access to variables from its outer scope even after the outer function has finished executing. It allows for data encapsulation, callback functions, and the creation of function factories, contributing to more expressive and modular code.

#### 3.2.3 Modular Code in JavaScript

Modular code in JavaScript refers to the practice of breaking down a program into smaller, independent, and reusable modules or components (often in different files). Each module encapsulates a specific piece of functionality and may have its own private variables and functions. This approach has several benefits:

1. Encapsulation: Modules hide their internal details and expose only what is necessary, reducing the risk of naming conflicts and unintended interactions with other parts of the code.
2. Reusability: Modules can be easily reused across different parts of an application or even in different projects, promoting a more efficient and scalable development process.
3. Maintainability: Breaking down code into modular components makes it easier to understand, update, and maintain. Changes in one module are less likely to affect other modules if their interfaces remain consistent.
4. Collaboration: Modular code facilitates collaboration among developers since different team members can work on separate modules without interfering with each other's code.

Here's a simple example of modular code:

```
// Module 1: mathOperations.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// Module 2: calculator.js
import { add, subtract } from './mathOperations';

function calculate(a, b) {
    console.log('Sum:', add(a, b));
    console.log('Difference:', subtract(a, b));
}

calculate(5, 3);
```

In this example, mathOperations.js is a module that exports functions for addition and subtraction. The calculator.js module imports these functions and uses them to perform calculations. Each module has a specific responsibility, and changes to one module are less likely to impact the other.

## Chapter 4 - Understand DOM Manipulation and Event Handling in JavaScript

Now it's time to get into the good stuff. This chapter covers JavaScripts integration with HTML & CSS to produce amazing dynamic websites and web user experiences. When we say *manipulate the DOM*, we mean manipulate the Document Object Model, which itself is a *model* that represent the *HTML Document* as an *object* that can be interacted with JavaScript. In short, we can select HTML elements or tags in JavaScript and manipulate them.

This allows us to add all types of cool user behavior to our HTML document through click events, content, styling and much much more.

Here are some common tasks involved in DOM manipulation:

1. Selecting Elements
    - JavaScript allows you to select HTML elements using various methods. Common methods include getElementById, querySelector, and querySelectorAll.
```
// Example: selecting an element by ID
let myElement = document.getElementById("myId");
```    

> The query selector methods work by allowing you to select any element using it's CSS selectors; so as you would if you were styling that element in a CSS sheet, and you provide that selector in a string creating the query.

2. Modifying Content
    - You can change the content of HTML elements, such as updating text, modifying attributes, or changing HTML structure.
```
// Example: changing text content
myElement.innerText = "New content";

// Example: modifying attributes
myElement.setAttribute("src", "newimage.jpg");
```

3. Manipulating Styles
    - JavaScript can be used to modify the CSS styles of elements, enabling dynamic changes in appearance.
```
// Example: changing the background color
myElement.style.backgroundColor = "blue";
```

4. Adding and Removing Elements
    - You can dynamically create new HTML elements, append them to the DOM, or remove existing elements.
```
// Example: creating a new paragraph element
let newParagraph = document.createElement("p");
newParagraph.innerText = "This is a new paragraph.";

// Appending the new paragraph to an existing element
document.body.appendChild(newParagraph);

// Example: removing an element
let elementToRemove = document.getElementById("elementToRemove");
elementToRemove.parentNode.removeChild(elementToRemove);
```

5. Event Handling
    - JavaScript allows you to attach event listeners to elements, enabling the execution of specific functions in response to user actions (e.g., clicks, key presses).
```
// Example: adding a click event listener
myElement.addEventListener("click", function() {
    alert("Element clicked!");
});
```

> These are just some common examples, however the sky is the limit with DOM Manipulation. If you think you should be able to make a manipulation, you probably can.

From here, all you need to do is ensure your JavaScript file is imported as a script at the bottom of your HTML document, and it will be executed accordingly. 

```
<script src="./path_to_file.js" defer/>
```

Add this line to the bottom of your HTML document, just above the closing `body` tag and you'll be right as rain.


## Chapter 5 - Gain Competency with Asynchronous Programming in JavaScript

So far in our learning of JavaScript, we've look only as synchronous programming. Synchronous programming can be thought of as a linear set of instructions, where one instruction starts as the previous one ends, until there are no more. And this is all well and good until you run into what is known as **promises**. 

A promise is essentially a placeholder that represents information that is yet to be fulfilled. The most common occurance of this is when you make an API request, requesting information from an API, where the time taken to fulfill that request is unknown and it exists as only a promise of information awaited until it is received. It's normally pretty fast but without asynchronous programming methods, our code will send out the network request as it would any other instruction and then carry on through with the remaining instructions, having not waited for a response. The consequence of this would mean that any sequential lines of code wouldn't have access to the information requested from the API.

There are two ways we can resolve this issue; with the `.then()` chaining syntax or `async/await`. The latter is the more modern syntax and is the one we will discuss in this tutorial.

### 5.1 Async Await

The async await syntax essentially works by declaring a function code block to be asynchronous, allowing us to await asyncrhonous operations within. This means that any asynchronous call made within the `async` block causes our code to stop, and wait for the request to be fulfilled which means that we have the information back, the promise is resolved, and we have the green light to carry on executing the remainder of our code. 

We create an asynchronous block as follows:

```
async function slowRequest() {
    await new Promise(r => setTimeout(r, 2000)); //puts the program to sleep for 2000ms or 2s
    console.log('Finished waiting') // prints after 2s
}

```

> Note the usage of the *async* at the function definiton and then the *await* keyword on the line that has an asynchronous function.

You can have as many awaited lines of code as your please, so long as they are all within an asynchronous function block.

### 5.2 Try Catch & Finally Blocks

When making asynchronous requests, perhaps to an API or backend server per se, things can go wrong. Servers might time out, perhaps the request doesn't find it's destination or maybe even you're forbidden from making the request. In these cases, we need some code to handle the error as opposed to letting our code simply die :0

So, instead we use a `try catch finally` block to attempt the asynchronous code, catch any errors, and finally display the resultant output of the operations. We could consequently construct an asynchronous block of code as follows:

```
async function fetchData() {
    try {
        // attempt our code in here
        const apiUrl = 'https://localhost:8080/api/data'
        const res = await fetch(apiUrl) // sends the asynchronous network request to the apiUrl
        const data = await res.json() // parses the JSON response data
        console.log(data) // outputs the data

    } catch (err) {
        // catch any errors we may have
        console.log(err.message) // consoles the error message should we bug out the above code

    } finally {
        // tidy up 
        console.log('Finished asynchronous function')
    }
}
```

This ensures that even if our response is bugged, our code will continue to run and we will still receive all the error messages.

> Technically, you don't actually need the finally portion of the block, but it's good to know about and comes in handy now and then. It's best practice to use a try catch block at the minimum wherever you are making asynchronous requests or have code liable to bug out.


### 5.3 Promise.all()

Now so far, we've learned how to make network requests and perform asynchronous operations in series (one starts after the prior finishes). If we're making a large number of requests, this can be quite a slow process.

If we think of a wedding, it would be analogous to sending out one invite, waiting for a response, and only then sending out the next. It might take years to get all the invitations sent out and responses recevied. What if instead, we could send out all the letters on the same day, and then wait for all the responses to come in before moving on. We'll, we can do this by running asynchronous requests in parallel useing ```Promise.all()```.

Where before, we would await for the fulfillment of each individual promise, with `Promise.all()` we pass in an array of promises and instead await the fulfillment of all of them, be it successful or unsuccessful. An example is as follows:

```
async function sleepFunction() {
    let startTime = new Date.now()
    let promise1 = new Promise(r => setTimeout(r, 2000)); // simulates a network request that takes 2s to fulfill 
    let promise2 = new Promise(r => setTimeout(r, 4000)); // simulates a network request that takes 4s to fulfill 

    let result = await Promise.all([promise1, promise2])
    let endTime = new Date.now()

    console.log('Time taken: ', startTime - endTime) // outputs a little over 4s as opposed to the 6s it would take to await both promises in series
}
```

> You can use ```Promise.allSettled()``` is an equivalent method that returns an object for each data, containing a status the specifies the outcome of the request, and the fulfilled request information itself.


## Chapter 6 - Learn the Modern ES6+ JavaScript Syntax

And finally, it's time to learn some of the most modern JavaScript syntax that is currently available to make your programming even faster 🔥 

### 6.1 Arrow Functions

First off we have arrow functions, which are a newer, more modern syntax for defining a function. Arrow functions maintain a lot of the key features of our original function syntax, only, they look a bit more like an arrow, for example ```() => {}``` is an anonymous arrow function that does nothing. We can convert an original function to the arrow syntax as follows:

```
// 1.0 define the original syntax
function orginalFunction(argument) {
    // this function expects a string as an input and consoles the string
    console.log('This is the argument: ', argument)
}

// An equivalent arrow function would look as follows:
// (argument) => {console.log('This is the argument: ', argument)}

// we see it has the circular parenthesis for the argument, and the output is still within the curly braces

// 2.0 Assign the arrow function to a variable name, in this case 'newFunction'
let newFunction = (argument) => {console.log('This is the argument: ', argument)}
```

> If our arrow function is one line, we can simplfy the function even further to ```let newFunction = (arg) => console.log('This is the argument: ', argument))```. Note how I dropped the curly braces.

#### 6.1.1 Anonymous Functions

As for anonymous functions, they're a rather infrequency occurance in JavaScript. The most common example is perhaps when we're appending a click event to a button in HTML or React.js perhaps.

We create the function, but we simply do so without assigning it to a variable, for example:

```
function() {} // using the old syntax
() => {} // using the new syntax
```

### 6.2 Ternary Operator (?)

The ternary operator is a shorthand for an `if else` evaluation. A one-liner if you will! The syntax works as follows:

```
let friends = ['Janice', 'Lucy', 'Harry']

// ternary statement -> condition ? truthy evaluation : falsy evaluation
let isJonFriend = friends.includes('Jon') ? true : false // evaluates to false as Jon is not in the friends list
```

> You can chain numerous ternary statements if you're clever, but sometimes it's best to revert to the good old `if else` blocks for code clarity.

### 6.3 Optional Chaining

Occassionally, when working with objects, you might get a few nested objects one within another. In this situation, it's not uncommon to chain your keys to access sub dictionaries - for example:

```
let person = {
    name: 'jon',
    friends: {
        henry: {
            age: 14
        }
    }
}
```

Here we have 2 nested objects, friends, and then henry. Now let's say we wanted to access the age of henry. To do so, we would first have to access the friends nested dictionary, and then the henry dictionary within that, as follows:

`let henryAge = person['friends']['henry']['age']`

We chain the keys within each nested dictionary. We could use the dot notation also like this `person.friends.henry.age`. However, this issue we can have when chaining keys is when we don't know if a nested dictionary contains a key that we're looking for. If `friends` did not exist, and we still tried to access `henry` that should theorectically be within `friends`, our code would error because we're trying to access the key `henry` within `undefined`, which is what we would get when accessing a non-existant `friends` key within the `person` dictionary.

> We could use a try catch block to not completely exit our code but this would be a lot of extra work.

So instead, we use optional chaining, which essentially stops the evaluation if any of the keys is found to not exist within any level of the dictionary or nested dictionary. It's very simple to implement, all we do is add either the `?` between keys in the dot notation, or `?.` between the keys using the bracket notation:

```
let henryAge = person?.['friends']?.['henry']?.['age']

// or

let henryAge = person?.friends?.henry?.age
```

### 6.4 Object Destructuring

Object destructing is amazing! We essentially dismantle the object :0 Let's say we had the following object and we wanted to create variables out of the keys. In the good old days, we used to have to do the following:

```
let person = {
    name: 'james',
    age: 27
}

let age = person.age
let name = person.name
```

Terrible right! We'll with object destructuring we can make it much neater!

```
let person = {
    name: 'james',
    age: 27
}

const {name, age} = person

// and if we wanted to give a key some alias, we could instead write
const {name: personName, age} = person // this would create a variable called personName that assumes the value of the name which is 'james'
```

### 6.5 Array Destructuring

Much the same as object destructuring, yet not quite as common, we can dismantled arrays as follows:

```
let oldArray = [4, 5]
let value1 = oldArray[0]
let value2 = oldArray[1]

// With array destructuring, it becomes ->
let [value1, value2] = oldArray // ensuring to match the variable indexes
```

### 6.6 Template Literal Strings (``)

Template literal strings allows us to write strings that cross over onto multiple lines! To create a template literal string, we simple use the backtick keys (``). But template literal strings allow us to do more than that. We can also use them to insert variable values in the midst of our strings. For example:

```
let name = 'james'

// traditional example
console.log('The boy was called ' + name) // here we concatenate the two strings using the plus (+) operator

// with template literal strings
console.log(`The boy was called ${name}`)
```

> We wrap any javascript variables inside the `${variableName}` dollar sign and curly braces to insert the value associated with the variable into the string.

### 6.7 Short Circuits (&& || ??)

Sometimes when we're defining values and variables, we'll occassionally need to do so conditionally, where the assignment might be dependant on a condition. We could do this use an `if else` block, but we can also do it in one line using the short circuit operators.

#### 6.7.1 AND Short Circuit (&&)

If we wanted to assign a value only if a condition was true, we use the AND `&&` short circuit.

```
let person = {name: 'Jon'}
let name = person.name && 'Jonny'
// in otherwords condition && evaluation
console.log(name) // evaluates to Jonny only if person.name exists, otherwise assumes undefined.
```

#### 6.7.2 OR Short Circuit (||)

If we instead wanted to assign a backup value in the case where the first value does not exist, we instead use the `||` OR short circuit. For example:

```
let person = {name: 'Jon'}

let name = person.name || 'Default Name' 
// will assume the value of Jon unless the name key did not exist, in which case it would assume the OR condition which is 'Default name'
```

#### 6.7.3 Nullish Coalescing (??)

Similar to the OR example, nullish coalescing returns it's right-handside operand when it's left-handside operand is `null` or `undefined`, and otherwise returns it's left-handside operand.

```
const foo = null ?? 'Default String' // assumes the 'Default String' value
const baz = 0 ?? 42 // assumes 0 
```

> Note in the last example with Baz, if we use the || OR short circuit, the 0 would have cause the OR operand to be assumed, hence the difference.

### 6.8 Enhanced Object Literals

Enhanced object literals is a super nifty syntax that makes constructing objects even easier. Let's say we were trying to construct an object to consolidate a number of variables we already have defined. It would probably look a bit as follows:

```
let name = 'james'
let age = 27

let person = {
    name: name,
    age: age
}
```

It seems pretty redundant that we should have to write the key and the value both, considering they're the exact same word. Using object literals, we don't have to. We could shorten the syntax to the following:

```
let name = 'james'
let age = 27

let person = { name, age } 
```

> // initializes the key to match the variable, and the value associated with the variable is now assigned to the key!

### 6.9 Spread Operator (...)

The spread operator allows us to combine objects and arrays, or create duplicates of them with ease! The syntax uses the triple period `...` and works as follows:

```
// with an array
let array = [1, 2, 3]
let newArrayDuplicate = [...array] // spreads all the original values out in the new array as if we had written them again

// with an object
let person = { name: 'james', age: 27 }
let additionalDetails = { youtube: 'smoljames' }

person = { ...person, ...additionalDetails } // combines the two objects in a new object
```

The spread operator can be use in numerous other circumstances and is incredibly helpful!

### 6.10 Array Methods

Array methods are the best thing since sliced bread :P There's quite a few of them and we covered a couple above, such as the `.sort()` function. Here we'll dive into the most common ones!

1. **.forEach()**

The `.forEach(() => {})` syntax is a great alternative to the `for` loop that we covered earlier. One of the most common uses for a `for` loop is to iterate over the values in an array, accessing each index one at a time. We'll the `.forEach()` does exactly this in a much simpler syntax.

We use it as follows:

```
let numbers = [1, 2, 3]
numbers.forEach((element, elementIndex) => {
    console.log(element) // outputs each index one at a time
})
```

2. **.map()**

The `.map(() => {})` syntax will *map* over an array, and for ever element in the array, produce a new modified version depending on the function that you input and consequently the value that is returned from the function.

We use it as follows:

```
let numbers = [1, 2, 3]
numbers = numbers.map((element, elementIndex) => {
    return element * 2
})

console.log(numbers) // outputs [2, 4, 6] as each value is multiplied by 2
```

3. **.filter()**

The `.filter(() => {})` syntax will loop over an array, and will *filter* out any values that do not fulfill the condition returned from the function passed in as an argument.

We use it as follows:

```
let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.filter((element, elementIndex) => {
    return element % 2 == 0 // checks if a number is even and returns true if it is, and false if it isn't
})

console.log(filteredNumbers) // outputs [2, 4] as all the values odd values we're filtered out
```

4. **.reduce()**

The `.reduce(() => {}, defaultValue)` syntax is basically the god tier of all previous methods, as it can technically do all of them. The function takes an accumulator value and the current value, and builds a new anything depending on the starting value that you pass in.

We use it as follows:

```
let numbers = [1, 2, 3, 4]
let numberSum = numbers.reduce((acc, curr, currIndex) => {
    return acc + curr // adds the current value onto the accumulated value
}, 0) // 0 is the default value

console.log(numberSum) // outputs 10 as the sum of all the numbers
```

But we could use it for making arrays, creating strings, modifying objects and the only limit to this array function is your creativity!

## Chapter 7 - Going Beyond

This guide by no means covers everything. It was created to quickly summarize all the primary key works of JavaScript to get you up and running as soon as possible. Consequently, there's plenty more to learn :P The one big topic that is not covered by this guide, that is still recommended to learn is **Classes** in JavaScript. They're not that prominent but that can come in handy from time to time.

Just think it's an object with extra steps.

## Final Words

I hope that these notes give you the knowledge you need to excel as a JavaScript Data Structures & Algorithms maestro! If you've enjoyed the repo, please consider giving it a ***star ⭐️***, and be sure to check out the other guides available so you can become the ultimate developer today :P

Cheers,

James