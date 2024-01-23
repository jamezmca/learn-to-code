---
title: "React.JS"
status: "in-progress"
order: 7
---

# REACT.JS · Course Notes

#### The ultimate guide to *React.js* 🔥

React.js is a JavaScript web framework that uses JavaScript to aid in the development of websites. Creating dynamic & interactive sites with vanilla web development (HTML CSS & JavaScript) can be an arduous process at best, especially as the complexity of the application scales. This, alongside code reusability, are two of the primary problems that React.js attempts to solve. 

React.js really isn't all that complicated and once you become familiar with the foundational premises of the framework, you'll be developing amazing web applications in no time!

**Prerequisites** for learning React.js include knowing HTML & JavaScript. You can find notes for both [here](/course%20notes).

> *The goal is to become familiar with the material and understand it, not to memorize it. All great developers have reference material they regularly refer to and this resource will always be here should you need it :)*

## Resources

Here are some links you might find helpful!

* **Full Stack Open** -> https://fullstackopen.com/en/part0
* **Learn React.js** -> COMING SOON!
* **Discord Channel** -> https://discord.gg/BYr6gujs4k
* **Learn to code roadmap** -> https://github.com/jamezmca/learn-to-code

## Table of Contents

## Chapter 1 - Introduction to React.js

As mentioned above, React.js is the extension of JavaScript and HTML, created to increase the ease of development of interactive web applications. React.js is a popular open source library for building user interfaces with JavaScript, and to run a web application we use a Node.js service to serve the React.js application that we access in the browser. This allows us to further incorporate additional **npm** (node package manager) packages which deliver even more utility from within our applications.

> Note the term *web application* as opposed to a website. Websites that are highly interactive and dynamic are referred to as web applications (web apps).

The core concepts that you'll find within React.js are components, JSX, props & state. **Components** are a way of compartmentalizing code; each feature of the application gets it's own component where we can consolidate all logic related to that feature. **JSX** is a syntax fairly similar to HTML that allows us to render dynamic JavaScript elements within with ease. **Props** is short for *properties* and is the primary means of communicating information between components; think of props in a similar way to attributes in HTML tags. And finally state, which is like a components personal data storage for ever changing variables and values dependant on user interaction. It's essentially the memory of a component.

### 1.1 Creating a React.js Application

To begin, we first need to initalize our React.js application. This process is ever-so-slightly more complicated that how we would create a simple HTML file for comparison. To create a React.js app, we instead use a build tool. Build tools are at a very high level just development servers for web applications.

The build tool we'll be using for our React.js projects is called **Vite**, and it's wicked fast. It also can be used to initialized other types of projects not limited to Svelte, Qwik, Solid, or even Vanilla web development projects with plain old HTML. You can optionally read more about Vite [here](https://vitejs.dev/guide/).

**To continue developing with React.js, you will need to have [Node.js](/course%20notes/javascript.md) installed (see Chapter 1.1.1). 

Installing Node.js gives us access to `npm` which is a node package manager that we will use to initialize our React.js projects with Vite, from the terminal. You can find installation instructions [here](https://vitejs.dev/guide/), but in short, we type the following line into our terminal:

`npm create vite@latest my-react-project-name`

From there, you simply follow the prompts, ensuring that you select **React.js** as your project template! If you're not familiar with TypeScript, the select JavaScript when prompted.

### 1.2 The React.js Project Directory

Once our project is installed, we can open it inside of our VSCode Editor. 

From within, you will notice a fair few more folders and files than we would normally find within a vanilla web development project. Never fear, a lot of them are super insignifcant and we'll only really be working with a select few of them. It likely resembles the following:

```
vite-app/
|-- node_modules/
|-- public/
|   |-- favicon.ico
|   |-- index.html
|-- src/
|   |-- App.jsx
|   |-- main.jsx
|-- .gitignore
|-- package.json
|-- README.md
|-- vite.config.js
```

### 1.3 Starting Our React.js Application

**index.html**

This file should be located within a folder that is know as your *project directory*. We can have multiple HTML files within the project directory, where each file can be used as a subroute for our HTML webpage. 

The default HTML page will always be the one named *index.html*. An example project directory is as follows:

```
project_directory
|- index.html
|- about.html
|- contact.html
```

### 1.2 Initializing an HTML Document