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

>>> We've already seen one example of a common syntax in JavaScript that is commonly used for printing outputs or values to our terminal -> `console.log()`. We'll come to understand more about this example later, but for now, it's good to know that this simple line is one of the most powerful tools at your disposal in JavaScript when it comes to debugging code; whatever you place within the circular parenthesis, will then be outputted to the console for you to see.

#### 2.1.1 Variable Declarations

The very first syntax in JavaScript that we'll be learning is *variable declaration*. Essentially, a variable is a *name* that is associated with a value. For example, in mathematics could say `x = 5`. The name of the variable is `x` and it is associated with the value `5`. If I asked what the value of `x` was, you would say `5`.

In JavaScript we use variables all the time, but it's not quite as simple as the `x = 5` that we have in mathematics. To use variable, the first thing we **must** do is *initialize* the variable. Initializing the variable is a way of telling the computer that we want to create a variable, that we will then continue to use throughout our program. 

* To initialize a variable, we can use one of the following 3 keywords: `const` | `let` | `var`.
    - So the mathematics example above would become `const x = 5` if written in JavaScript.
* **`const`** is used to initialize a variable when we can guarantee that the value of the variable will **NEVER** change anywhere in the code.
* **`let`** is used to initialize a variable when the value is likely to change, or if we are uncertain as to how permanent it's value is (this is the most common initialization).
    - We would use `let` if we expected the value of `x` to change, for example:
```
let x = 5
x = 7
```
* **`var`** is a syntax of the past and we will not be using it.

> We only need to initialize a variable **once** within a particular JS script. We cannot refer to a variable in our code prior to where it is initialized, but we can use it without initialization anywhere after the line where we initialize the variable.





## Chapter 3 - Develop Intermediate Programming Skills with JavaScript

## Chapter 4 - Understand DOM Manipulation and Event Handling in JavaScript
## Chapter 5 - Gain Competency with Asynchronous Programming in JavaScript
## Chapter 6 - Learn the Modern ES6+ JavaScript Syntax
