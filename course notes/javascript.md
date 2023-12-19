# JavaScript · Course Notes

#### The ultimate guide to *JavaScript Algorithms & Data Structures* 🔥

JavaScript was the most popular programming language of 2023, and there's good reason why. It can be used for dynamic programming, web development, backend development, ML & AI and the list goes on. It's perhaps not the easiest language, but it's also not the hardest, and with time you can undoubtly become a JavaScript maestro too!

> *The goal is to become familiar with the material and understand it, not to memorize it. All great developers have reference material they regularly refer to and this resource will always be here should you need it :)*

## Resources

Here are some links you might find helpful!

* FreeCodeCamp -> https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/
* Learn JavaScript in 90 minutes -> Coming soon!
* Discord -> https://discord.gg/BYr6gujs4k
* Learn to code roadmap -> https://github.com/jamezmca/learn-to-code

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

#### 2.1.2 Data Types

Once we have our variables initialized, the next thing we normally do is assign some form of value to them. Values in JavaScript can have numerous different types, known as *Data Types*. Data types can be described as either *primitive* or *object* (don't worry about this too much), where the primary key data types are as follows:

* Primitive 
    - **`Number`** represents all numerical values, including integers, decimals, and exponents. (e.g., 10, 3.14, 1e5).
    - **`String`** represents sequences of characters enclosed in quotes. (e.g., "Hello", 'World!', "").
    - **`Boolean`** represents truth values, either true or false. (e.g., true, false).
    - **`Null`** represents the absence of a value. It's different from undefined. (e.g., null).
    - **`Undefined`** represents the absence of a value due to not being assigned yet or a reference pointing to nowhere. (e.g., undefined).
* Object
    - **`Object`** is a complex data type that allows you to store collections of key-value pairs. Example: { name: 'John', age: 30 }.
    - **`Array`** is a special type of object used to store ordered collections of values. Example: [1, 2, 3, 4].
    - **`Function`** is a subtype of object that can be invoked/called. Example: function add(x, y) { return x + y; }.

When assigning values to a variable, it's important to ensure that the value is both a viable data type, and the correct data type. We'll dive deeper into data types and how we can manipulate them in [Chapter 3](#chapter-3---develop-intermediate-programming-skills-with-javascript).

#### 2.1.3 JavaScript Operators

An operator is a character that we typically associate with an operation, or an action. If we think about mathematics and calculators, the operators are the `+ - / *` keys that we are all familar. In JavaScript, it's no different. There are numerous operators available to us, some of which will be used far more frequently than others. The following list labels most of them, but don't stress about memorizing them.

**Arithmetic Operators**

-> Addition (+):
`let sum = 5 + 3; // 8`

-> Subtraction (-):
`let difference = 10 - 4; // 6`

-> Multiplication (*):
`let product = 3 * 7; // 21`

-> Division (/):
`let quotient = 15 / 3; // 5`

-> Modulus (%):
`let remainder = 10 % 3; // 1 (remainder of division)`


**Assignment Operators**

-> Assignment (=):
`let x = 10;`

-> Addition Assignment (+=):
```
let y = 5;
y += 3; // Equivalent to: y = y + 3; (y is now 8)
```
* Comparison Operators:
    - Equal (==):
        - let isEqual = 5 == '5'; // true (loose equality, type coercion)
    - Strict Equal (===):
        - let isStrictEqual = 5 === '5'; // false (strict equality, no type coercion)
    - Not Equal (!=) and Not Strict Not Equal (!==):
        - let notEqual = 10 != '10'; // false
        - let strictNotEqual = 10 !== '10'; // true
* Logical Operators:
    - Logical AND (&&):
        - ```
        if (condition1 && condition2) {
        // code to execute if both conditions are true
        }
        ```
    - Logical OR (||):
if (condition1 || condition2) {
  // code to execute if at least one condition is true
}

Logical NOT (!):
if (!someCondition) {
  // code to execute if the condition is not true
}


* Increment and Decrement Operators:
    - Increment (++):
let count = 5;
count++; // Equivalent to: count = count + 1; (count is now 6)

Decrement (--):
let value = 8;
value--; // Equivalent to: value = value - 1; (value is now 7)


* Ternary (Conditional) Operator:
    - Ternary Operator (?:):let result = (condition) ? trueValue : falseValue;


* Other Operators:
    - typeof Operator:
let type = typeof variable; // Returns the type of the variable
Instanceof Operator:
if (object instanceof Array) {
  // code to execute if the object is an array
}


#### 2.1.3

#### 2.1._ Commenting in JavaScipt


## Chapter 3 - Develop Intermediate Programming Skills with JavaScript

## Chapter 4 - Understand DOM Manipulation and Event Handling in JavaScript
## Chapter 5 - Gain Competency with Asynchronous Programming in JavaScript
## Chapter 6 - Learn the Modern ES6+ JavaScript Syntax
