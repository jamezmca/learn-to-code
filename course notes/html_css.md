# HTML & CSS · Course Notes

#### The ultimate guide to *HTML & CSS* 🔥

HTML & CSS are the backbone of the internet, and almost every website out there can be boiled down into some unique mutation of the two. While relatively simple to learn, together they can really pack a powerful punch.

They're also the perfect entry point for any new or beginner developer to start learning and get their hands dirty. Master these, and you'll have the ultimate foundation for your programming journey.

-- *Note - The goal is to become familiar with the material and understand it, not to memorize it. All great developers have reference material they regularly refer to and this resource will always be here should you need it :)*

## Resources

Here are some links you might find helpful!

* The Internet Is Hard -> https://internetingishard.netlify.app/
* Learn HTML & CSS -> https://youtu.be/70T2GMDKl6M
* Discord -> https://discord.gg/BYr6gujs4k

## Chapter 1 - Introduction to HTML

HTML stands for Hyper Text Markup Language, and it's technically not a programming language, but instead, a markup language. For now, we'll think of it as a glorified word document. In a word document, you can create text headers, add links, display images and well, HTML isn't that different.

### 1.1 Creating an HTML Document

To get started coding in HTML, we first need to create an HTML document. We can do that by initializing a new file, just as if we we're create a standard word document, can giving it any name followed by the ```.html``` suffix. For example -> 

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

Now that we have our project created our document, we can go ahead and open it up. HTML documents always start off with a little bit of boilerplate code that looks as follows:

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        visible content goes here . . .
    </body>
</html>
```

-- *If you're using VSCode as your editor, we can quickly generate this boilerplate code using the intellisense. If you type the ```!``` key, it will prompt you to create the code.*

#### 1.2.1 Local Development

To get your code live in a local development environment & to see how it looks, simply drag and drop any html file (typically the *index.html*) onto your browser. Page refresh after saving changes to your HTML document to see the updated changes.

### 1.3 HTML Tags

If we take a look at the code displayed above, there's a few key observations worth taking note of.

1. HTML is created using **tags**. Tags (sometimes referred to as elements) are the keywords surrounded by the greater-than and lesser-than brackets, or the < & > keys.
    - Most tags have an opening and paired closing tag. Any contents contained within the associated opening and closing tags is known as the *children contents*. The opening tag always appears first, and the closing tag can be discerned from the opening tag via the use of the forwards slash ```/```.
        - For example -> <div> child contents </div>
        - The left hand tag is the opening tag, and the right most tag is the closing tag as we see it has the forwards slash.
    - Some tags are self closing. This means that the opening tag has a forwards slash at the end of the tag as opposed to at the start of the closing tag.
        - <input />
2. HTML tags are either **semantic** or **non-semantic**. Semantic tags imply more meaning about the subcontents that non-semantic tags. Some examples of semantic tags are as follows:
    - **Single use** ```<head> · <body> · <header> · <nav> · <footer> · <main>```
    - **Multi use** ```<section> · <details> · <summary> · <aside> · <time>```
3. Tag pairs contained within other tag pairs are known as *Nested tags*

### 1.4 HTML Tag Functionalities

HTML tags in general typically serve 1 of 3 general purposes -> *container, typography, or miscellaneous*.

**-> Container Tags** deal with the containerization or grouping of contents. This could be by arranging associated contents in a row, in a column, or even in a grid. We can think of it as if we we're organizing clothing within a set of drawers. We might have a drawer for all things lower body, and within the draw we might have individual subcontainers for shorts, socks and undergarmets, and perhaps socks are further segregated into grouping of long socks and short socks.

Typically the containerization of contents is determined by the relatability of the content. If some information pertains to some other, we'll likely contain them together. Equally the relation might be determined by styling requirements; i.e. this element is spaced or styled depending on another. The primary container tags are as follows:

* Semantic Container Tags
    * ```<head></head>``` 
        * contains meta information about the HTML web page; *single-use*
    * ```<body>all visable page contents</body>``` 
        * contains all the visable page contents; *single-use*
    * ```<header></header``` 
        * contains contents that creates the page header (logo, navigation links etc...); *single-use*
    * ```<nav></nav>``` 
        * contains all the page navigation links; *single-use*
    * ```<main></main>``` 
        * contains the main page content (everything not in header or footer); *single-use*
    * ```<footer></footer>``` 
        * contains the footer info (contact details, privacy policy, terms of use etc...); *single-use*
    * ```<aside>highlighted text</aside>``` 
        * contains information for side navigation bar
    * ```<form><input/></form>``` 
        * contains form information/inputs/textareas for user interaction
    * ```<section>highlighted text</section>``` 
        * contains large generally-related sections of contents
    * ```<ul><li>list item within an unordered list</li></ul>``` 
        * unordered list (ul) contains 1 or more list items
* Non-semantic Container Tags
    * ```<div></div>```
        *  the most commonly used container tag
    * ```<span>Click me</span>``` 
        * used for special inline styling of certain contents

**-> Typography Tags** are for all things text related. Most of us are familiar with the typography options in a word document and HTML isn't so different. We have 6 tiers of heading typography tags - 

```
<h1>Heading 1 - the biggest font & size (only for titles and main headings)</h1> 
<h2>Heading 2 - 2nd biggest</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6 - the smallest heading</h6>
<p>Paragraph - for any generic text (non-heading text)</p>
```

**-> Miscellaneous Tags** concern themselves with the workings of all other HTML tag functionalities. There's loads of them but only 20% of them do 80% of the work. You can read more about them [here](https://www.w3schools.com/tags/) but the main ones are as follows:

* ```<input/>``` 
    * for user inputs such as text, dates, files and so on (self-closing)
* ```<textarea>default text...</textarea>``` 
    * for larger text inputs
* ```<img/>``` 
    * for img displays
* ```<mark>highlighted text</mark>``` 
    * for text highlights/emphasis
* ```<details></details>```
    *  for text open/close models
* ```<button>Click me</button>``` 
    * you can probably guess this one :P
* ```<a>link text</a>``` 
    * anchor tags are for links to internal or external web pages

### 1.5 Code Commenting in HTML

We can create invisible notes in our HTML code that only developers in the code base can see. These will not appear on the web page. 

-- *Note - code comments cannot be nested (one contained within another).*

To create a code comment, simple wrap your desired note or comment within the following syntax:

```<!-- COMMENT GOES IN HERE & YOU CAN SAY WHATEVER YOU LIKE! EVEN ADD EMOJIS 🔥 -->```

### 1.6 HTML Tag Attributes

Attributes allow us to add some magic to our HTML tags. As you might have guess, they're used to further describe the meaning or functionality of a tag, in a similar way that a person might have blue eyes as an attribute. Attributes can be added to any opening tag and are added to the opening tag as follows:

```<div INSERT_ATTRIBUTE(S)_HERE > . . . </div>```

One common example is the **title** attribute, which has the effect of displaying some on-hover text when a user hovers over the element/tag with the title.

```
<div title="about me">
    <p>I am james</p>
</div>
```

When a user hovers their mouse over this division, which in the webpage just looks like some text, a little popup will display with the text 'about me', until the user moves their mouse away.

#### 1.6.1 Preset vs Custom Attributes

Some tags have attributes that are necessary for them to function. For example, the ```<a href="https://new-link.com">Anchor tag/link to somewhere else</a>``` has the *href* attribute and assigns it equal to a new when upon clicking the user would be redirected.

Just as equally, you can define random attributes to your pleasure so long as the name of the attribute isn't one of the reserved keywords for the preset attributes. 

Here are some of the most common examples where the value assigned to the attribute is placed within the quotation marks.

1. Preset attributes (for specific tags)
    - ```<img src="link_to_img" alt="description_of_img"/>```
    - ```<a href="new_link" > Link Text </a>```
    - ```<button onClick="function_to_execute" > Click me </button>```
    - ```<input value="current_value" onChange="function_to_store_new_value" placeholder="default_value"/>```
2. Preset attributes (generic)
    - **id=""** assigns a *unique* id to an element
    - **class=""** assigns a class to an element (used for styling in CSS)
    - **style=""** directly assigns a style such as ```color:green;```
    - **title=""** as described above
3. Custom attribute example
    - **notifications=""** could be set ="4" if a user had 4 notifications

### 1.7 A Basic Singlepage Website

So now we've learned everything we need to know to craft our first webpage. Here's a demonstration of what a simple webpage might look like!

```
<!DOCTYPE html>
<html>
    <head>
        <title>My Interactive Page</title>
    </head>
    <body>
        <h1 style="color:green;">Welcome to My Interactive Page!</h1>
        <form id="myForm" class="sectionForm section">
            <h2>Let's Connect</h2>
            <p>Tell me a little about yourself!</p>
            <div>
                <label for="name">Name:</label>
                <input type="text" id="name" placeholder="Your Name">
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="Your Email">
            </div>
            <button onClick="submitFunction()" class="button">Send Message</button>
        </form>
        <section class="section">
            <h2>Explore My Interests</h2>
            <ul>
                <li>Photography</li>
                <li>Coding</li>
                <li>Traveling</li>
            </ul>
        </section>
    </body>
</html>
```

-- *Note the space separated classes on the form element - that allows us to assign more than one class to a particular tag. If you wish to have a class that is multiple words, then we use ~camelCase~. Words are conjoined but we capitalize the start of every new word with exclusion to the very first word.*

### 1.8 Building Multipage Applications

Should you decide to have subpage routes for your numerous different services, such as a product page, or an about page, then we can do this easily in HTML too.

As mentioned in [this section](#11-creating-an-html-document), we can initialize numerous HTML files for each sub page. To navigate between them live in our website, we simply use the humble ```<a href="/about.html">About Me</a>``` anchor tag to link between them. Clicking the anchor link will route the user to the new subpage. The forward slash ```/``` shows that both HTML pages can be found in the same root folder directory.

And just like that, you're now an HTML pro. Time to move on to CSS 🎉

🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

## Chapter 2 - Introduction to CSS

CSS, or Cascading Style Sheets, is the styling language of the internet. Born out of the necessity to cascade styles across similar elements, so to avoid the plague know as inline-styling (where you style elements 1-by-1 using the style attribute).

### 2.1 Creating an CSS File

CSS files are created by giving a document the ```.css``` suffix. These files can have any name but are most commonly either the plain old **styles.css**, or have a filename that associates them with a particular HTML file or component.

A fairly typical folder directory for a simple vanilla web development project might look as follows:

```
project_directory
|- index.html
|- styles.css
```

### 2.2 Importing our CSS File

Technically speaking, we can write CSS directly inside of an HTML document whilst still refraining from using inline-styling. We can do this by opening up a set of ```<style> ... CSS_STYLES_GO_HERE ... </style>``` within the ```<head></head>``` tags of our HTML document.

However this quickly becomes cumbersome as our document continuous to grow and our mouse wheels exhausted. Instead, we can *import* our CSS file by placing the following line of code inside the ```<head></head>``` tags of our HTML document, in place of the style tags -> 

```<link rel="stylesheet" href="styles.css"/>```

We basically tell the page to create a link to the styles.css file, and we also add the *rel* attribute to tell the HTML document that the file is of stylesheet relation.

### 2.3 Styling our HTML Document

Within our CSS stylesheet, we can style our HTML document using what's known as **selectors**. Selectors come in numerous forms, and essentially allow us to *select* one or more tags by some property of said tag.

**The most common forms of selection are by the tag itself, the class attributes assigned to a tag, or the ID attribute assigned to a tag (keeping in mind that an ID will always be unique - on one tag alone).**

To select and consequently *style a set of tags by their tag alone*, we do the following:

```
h1 {
    color: green;
    font-size: 2em;
}
```

This code will select every single h1 tag in our entire document, and cascade the color and font-size styles across the lot of them. 

-- *Note the semicolon at the end of every individual style.*

Sometimes, we need to be slightly more specific with our styles, and so we instead **select by class**. Styles via class selection always take precedence over styles by tag selection. The class must first be assigned to an HTML tag, afterwhich, we can select is as follows:

```
.sectionContainer {
    background: purple;
    padding: 4px 8px;
}
```

-- *The period informs the CSS sheet that we intend to select the class that proceeds the period.*

And on the occasion where you need to be extremely specific with your styles, to the point where you wish to isolate one specific tag, we'll this is when we use the ID selector. 

For the **ID selection**, the ```#``` key always preceeds the tags ID. An example is as follows:

```
#userInput {
    border: 1px solid lightblue;
    text-align: center;
}
```

Styles via ID selection always take precedence over styles by both tag & class selection.


### 2.3.1 Muliple Selections


### 2.3.1 Code Commenting in CSS


```
--------+-------+-------+-------+
|       |       |       |       |
--------+-------+-------+-------+
|       |       |       |       |
--------+-------+-------+-------+
|       |       |       |       |
--------+-------+-------+-------+
```