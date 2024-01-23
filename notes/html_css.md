---
title: "HTML & CSS"
status: "complete"
order: 3
---

# HTML & CSS · Course Notes

#### The ultimate guide to *HTML & CSS* 🔥

HTML & CSS are the backbone of the internet, and almost every website out there can be boiled down into some unique mutation of the two. While relatively simple to learn, together they can really pack a powerful punch.

They're also the perfect entry point for any new or beginner developer to start learning and get their hands dirty. Master these, and you'll have the ultimate foundation for your programming journey.

> *The goal is to become familiar with the material and understand it, not to memorize it. All great developers have reference material they regularly refer to and this resource will always be here should you need it :)*

## Resources

Here are some links you might find helpful!

* [**The Internet Is Hard**](https://internetingishard.netlify.app/)
* [**Learn HTML & CSS**](https://youtu.be/70T2GMDKl6M)
* [**Discord Channel**](https://discord.gg/BYr6gujs4k)
* [**Learn to code roadmap**](https://github.com/jamezmca/learn-to-code)

## Table of Contents

  - [Chapter 1 - Introduction to HTML](#chapter-1---introduction-to-html)
    - [1.1 Creating an HTML Document](#11-creating-an-html-document)
    - [1.2 Initializing an HTML Document](#12-initializing-an-html-document)
    - [1.3 HTML Tags](#13-html-tags)
    - [1.4 HTML Tag Functionalities](#14-html-tag-functionalities)
    - [1.5 Code Commenting in HTML](#15-code-commenting-in-html)
    - [1.6 HTML Tag Attributes](#16-html-tag-attributes)
    - [1.7 A Basic Singlepage Website](#17-a-basic-singlepage-website)
    - [1.8 Building Multipage Applications](#18-building-multipage-applications)
  - [Chapter 2 - Introduction to CSS](#chapter-2---introduction-to-css)
    - [2.1 Creating an CSS File](#21-creating-an-css-file)
    - [2.2 Importing our CSS File](#22-importing-our-css-file)
    - [2.3 Styling our HTML Document](#23-styling-our-html-document)
    - [2.4 CSS Styles](#24-css-styles)
    - [2.5 Advanced CSS Selectors](#25-advanced-css-selectors)
    - [2.6 TailwindCSS](#26-tailwindcss)

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

> *If you're using VSCode as your editor, we can quickly generate this boilerplate code using the intellisense. If you type the ```!``` key, it will prompt you to create the code.*

#### 1.2.1 Local Development

To get your code live in a local development environment & to see how it looks, simply drag and drop any html file (typically the *index.html*) onto your browser. Page refresh after saving changes to your HTML document to see the updated changes.

### 1.3 HTML Tags

If we take a look at the code displayed above, there's a few key observations worth taking note of.

1. HTML is created using **tags**. Tags (sometimes referred to as elements) are the keywords surrounded by the greater-than and lesser-than brackets, or the < & > keys.
    - Most tags have an opening and paired closing tag. Any contents contained within the associated opening and closing tags is known as the *children contents*. The opening tag always appears first, and the closing tag can be discerned from the opening tag via the use of the forwards slash ```/```.
        - For example -> ```<div> child contents </div>```
        - The left hand tag is the opening tag, and the right most tag is the closing tag as we see it has the forwards slash.
    - Some tags are self closing. This means that the opening tag has a forwards slash at the end of the tag as opposed to at the start of the closing tag.
        - ```<input />```
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

> *Code comments cannot be nested (one contained within another).*

To create a code comment, simple wrap your desired note or comment within the following syntax:

```
<!-- COMMENT GOES IN HERE & YOU CAN SAY WHATEVER YOU LIKE! EVEN ADD EMOJIS 🔥 -->
```

### 1.6 HTML Tag Attributes

Attributes allow us to add some magic to our HTML tags. As you might have guess, they're used to further describe the meaning or functionality of a tag, in a similar way that a person might have blue eyes as an attribute. Attributes can be added to any opening tag and are added to the opening tag as follows:

```txt
<div INSERT_ATTRIBUTE(S)_HERE > . . . </div>
```

One common example is the **title** attribute, which has the effect of displaying some on-hover text when a user hovers over the element/tag with the title.

When a user hovers their mouse over this division, which in the webpage just looks like some text, a little popup will display with the text 'about me', until the user moves their mouse away.

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
    - ```
    <img src="link_to_img" alt="description_of_img"/>
    ```
    - ```
    <a href="new_link" > Link Text </a>
    ```
    - ```
    <button onClick="function_to_execute" > Click me </button>
    ```
    - ```
    <input value="current_value" onChange="function_to_store_new_value" placeholder="default_value"/>
    ```
2. Preset attributes (generic)
    - **id=""** assigns a *unique* id to an element
    - **class=""** assigns a class to an element (used for styling in CSS)
    - **style=""** directly assigns a style such as `color:green;`
    - **title=""** as described above
3. Custom attribute example
    - **notifications=""** could be set ="4" if a user had 4 notifications

### 1.7 A Basic Singlepage Website

So now we've learned everything we need to know to craft our first webpage. Here's a demonstration of what a simple webpage might look like!

```txt
<!DOCTYPE html>
<html>
    <head>
        <title>My Interactive Page</title>
    </head>
    <body>
        <header>
            <h1 style="color:green;">Welcome to My Interactive Page!</h1>
        </header>
        <main>
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
        </main>
        <footer></footer>
    </body>
</html>
```

> *Note the space separated classes on the form element - that allows us to assign more than one class to a particular tag. If you wish to have a class that is multiple words, then we use ```camelCase```. Words are conjoined but we capitalize the start of every new word with exclusion to the very first word.*

### 1.8 Building Multipage Applications

Should you decide to have subpage routes for your numerous different services, such as a product page, or an about page, then we can do this easily in HTML too.

As mentioned in [this section](#11-creating-an-html-document), we can initialize numerous HTML files for each sub page. To navigate between them live in our website, we simply use the humble ```<a href="/about.html">About Me</a>``` anchor tag to link between them. Clicking the anchor link will route the user to the new subpage. The forward slash `/` shows that both HTML pages can be found in the same root folder directory.

And just like that, you're now an HTML pro. Time to move on to CSS 🎉

🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

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

To select and consequently **style a set of tags by their tag alone**, we do the following:

```
h1 {
    color: green;
    font-size: 2em;
}
```

This code will select every single h1 tag in our entire document, and cascade the color and font-size styles across the lot of them. 

> *Note the semicolon at the end of every individual style.*

Sometimes, we need to be slightly more specific with our styles, and so we instead **select by class**. Styles via class selection always take precedence over styles by tag selection. The class must first be assigned to an HTML tag, afterwhich, we can select is as follows:

```
.sectionContainer {
    background: purple;
    padding: 4px 8px;
}
```

> *The period informs the CSS sheet that we intend to select the class that proceeds the period.*

And on the occasion where you need to be extremely specific with your styles, to the point where you wish to isolate one specific tag, we'll this is when we use the ID selector. 

For the **ID selection**, the ```#``` key always preceeds the tags ID. An example is as follows:

```
#userInput {
    border: 1px solid lightblue;
    text-align: center;
}
```

Styles via ID selection always take precedence over styles by both tag & class selection.


#### 2.3.1 Muliple Selections

Occassionally, you will find different tags and selections end up having the same repeated set of styles. We can avoid writing our the styling code numerous times by comma separating the selectors. For example:

```
.headerText, h3, #firstInput {
    color: green;
}
```

All three of these selections will have the same color style applied.

#### 2.3.2 Code Commenting in CSS

If needed, we can leave notes in our CSS styling to help other developers, or even ourselves, parse through and understand our styling. To create a comment in CSS, you simply wrap your comment inside of the following syntax:

```
/* INSERT COMMENT IN BETWEEN THESE KEYS */
```


### 2.4 CSS Styles

So now we've learned how to setup our CSS sheets, connect them with our HTML document, and even some of the primary methods of tag selection (more on this later). You can find a comprehensive explanation of every single CSS style [here ->](https://www.w3schools.com/html/html_css.asp)

Now we need to actually take a look at some of the main styles you'll be using to make your document look amazing; much the same as with HTML tags, 20% of styles do 80% of the heavy lifting. We can break down a majority of the styles into 3 categories:

* **dimensional styles** -> referring to the dimensions of a tag
* **design styles** -> referring to the aesthetic of a tag
* **placement styles** -> referring to the placement in the document of a tag

> *For any of the following styles, please check out the above documentation link to see what values are typically set and assumed by a particular style :P*

**Dimensional styles** 

Dimensional styles are those that pertain to the spacial dimensions of an element. As you might expect, we're talking height, width, maximum width and so forth. We can even define the z-axis layering of elements, rotate them, translate them, stretch and scale and so much more.

> *For dimensional styles we can use either relative sizings or fixed value sizings. Typically a relative sizing is going to be more responsive and is the preferred of the two in most cases.*

The most common *dimensional styles* that you'll encounter are:
* width -> sets the width of an element
* height -> sets the height of an element
* max-width -> sets the maximum allowable width of an element
* max-height -> sets the maximum allowable height of an element
* padding -> defines the space between the outer boundaries of an element and the inner contents
* margin -> defines the space between the outer boundaries of an element and the adjacent contents

**Design Styles**

Design styles are all about the aesthetic of an element. This could be font size, text color, background effects, borders, shadows, shapes and the list goes on. There are two main sub categories of design styles, one set for typography and the other for containers.

The most common *design styles* that you'll encounter are:
* Typography styles
    - font-family -> sets the font to be used (e.g. comic sans)
    - font-weight -> sets the weight of the font on a scale from 100 to 900 (bold, light & so forth)
    - font-size -> determines how large the font should appear
    - color -> sets the color of text elements
    - text-align -> aligns text within its element (left, center, right, justify)
* Container styles
    - background -> this could be a color, a linear gradient, an image & more
    - border -> this allows you to set a border, its width and its color
    - border-radius -> this allows you to round the corners of an element
    - box-shadow -> adds depth and dimension to elements
    - opacity -> makes an element partially transparent (on a scale from 0 to 1)
    - transition -> creates smooth animations between different states of an element
    - transform -> rotates, scales, or skews elements

**Placement Styles**

Placement styles define how contents on the page is positioned, displayed, spaced, layered, aligned and oriented. 

The most common *placement styles* that you'll encounter are:
* position -> determines how an element is placed within the flow of the HTML document
    - common values include *relative* which is the default and natural flow option, *fixed* which holds an element at a fixed positioning on the screen, and *absolute* which removes an element from the normal document flow and positions it relative to its nearest positioned ancestor (usually the parent element).
        - absolute and fixed positioned elements require the specification of *top, left and either right/bottom or width/height* to map out the boundaries of the box
* display -> determines how contents within the element is laid out
    - flex -> creates a flexible container layout (think 1d tetris or boxes arrangement) // the most common option
        - can set the flex-direction to column or row, specify alignment and justification within the flex container and also element gap (spacing)
    - grid -> uses a grid layout for highly organized, grid arrangements of content
    - none -> hides the element from view
* z-index -> sets the z-index layering of elements on a numeric scale

There are many more styles, but for the post part these will have you covered in most circumstances.

#### 2.4.2 CSS Dimensional Units

Some style values are numeric, and consequently require units. Units are either relative or absolute, and knowing when to use which is important.

Most hard coded element sizing is done for text elements i.e. setting the font size, and on the container widths and heights. Font sizing is most common set using the **em** unit, which is a relative sizing to the default for a typography tag. 

* 1em suggests a 1:1 scale, where 2em would be a 100% increase in the original size of the text. The em scale also allows for the use of decimal values such as 1.2em.

For widths, heights, margins, paddings, and other dimensional styles, we'll most common be using one of three units; px, % or vh/vw.

* px is an absolute pixel sizing e.g. 340px (common width small widths/heights and most paddings/margins)
* % is a percentage of the parent container e.g. 100% or 60% (common for most widths & heights for responsive web displays)
* vh/vw stands for viewport-height and viewport-width, and is a percentage of the viewports dimesions e.g. 40vh means 40% of the viewport-height (common for the largest of containers or overlaid modals)

There are more units out there, but these are my favorite.


### 2.5 Advanced CSS Selectors

So now your pretty much right as rain to go code your HTML document and beautify it thereon afterwards. But sometimes for the slickest and sneakiest of designs, we need extra specificity in terms of how we select elements, and also some of the other user behaviors we an expect, such as hover or focus events.

First off, it's good to be aware of the fact that we can select elements not only by their tag, class or ID, but also by their positioning within the HTML document itself.

For example, we saw above the comma separating styles allows us to apply the same style to different selectors. But we can have a similar syntax to select elements we know are within other elements, for example:

```
h1 span {
    background: purple;
}
```

This example has space-separated tags, and is interpreted as 'select all spans anywhere *within* an h1 tag'. We can take it a step further and use a relational additive to the selector:

```
h1 > span {
    background: purple;
}
```

Adding the *>* key now makes the selector select only the spans that are direct and immediate descendants within an h1 tag. There are more relative selectors like this but this one is likely the most common. Finally, we can be even more specific with our selectors for example:

```
.headerText h1 > span {
    background: purple;
}
```

This example can be intepreted as -> 'Select any span the is a direct descendant within an h1 tag, that itself is anywhere within an element with the class of *headerText*. This combination selection can be incredible time saving when use appropriately and means we don't have to add classes to absolutely every tag in our HTML document.

#### 2.5.1 Event Selectors

We can also make our styles vary and alter when users hover over or interact with them to make out page feel more alive and intuitive. To do that, we set the base styling of a tag as we have done above, and then we define a secondary state that is to be assumed then the event is triggered, for example, when a button is hovered.

We can do that as follows:

```
button {
    background: green;
    color: white;
    transition-duration: 250ms;
}

button::hover {
    /* NOTE HOW I SELECTED THE HOVER STATE FOR THE BUTTON ELEMENT */
    background: lightgreen;
    opacity: 0.6;
}
```

This has the effect of reducing the background color of the button to a light green when the button is hovered, and it also lowers the opacity. This is but one of many ways that we can add interactivity to our webpage. We could also target the ::focus event which would be useful in the instance where a user focuses an input for example.

#### 2.5.2 Psuedo Effects

Psuedo effects are a super neat way of adding design/UI flare to our elements, without having to actually add any extra HTML code; in short, they're created and designed entirely through CSS. There's two psuedo selectors that we commonly use, one is the ```::before``` selector and the other is the ```::after``` selector; used for appending design elements before and after the selected tag respectively.

The best example to demonstrate the concept would be the notification bell. Imagine we have a div containing the bell icon displaying on the screen, and now we want to overlay a tiny red dot in the upper right hand corner to indicate that there are notifications yet to be read. We can append the red dot as an after psuedo effect to the div containing the icon and absolutely position the red dot psuedo effect in the top and the right hand corner of the div. Here's some code the demonstrates how this would be done:


```
.bellContainer {
    position: relative;
}

.bellContainer i {
    color: #0f172a;
}

.bellContainer::after {
    position: absolute;
    content: '';  /* this sets the content to an empty string */
    top: 0;
    right: 0;
    width: 4px;
    aspect-ratio: 1/1; /* 1:1 ratio of width to height */
    background: red;
    border-radius: 100%; /* makes square go cirle */
}
```

Cool, now we've added the red dot without creating any unnecessary HTML code!


#### 2.5.3 Access Tag Attributes in CSS

But what if we now wanted to ensure our red dot from above actually quantified exactly how many notifcations we had. How do we then communicate this information between the HTML document into the CSS stylesheet, and thereafter set the value within the red dot. 

The answer is **tag attributes**.

If you think back to the HTML attributes section of these notes way way above, you'll see we demonstated how we can set custom attributes in tags, and even the example where we give a tag an attribute ```notications="4"```. We can actually now go an access this value within the CSS sheet using the ```attr()``` function. To then have the value display inside of our psuedo effect, we need to make the following changes to our pseudo after style:

```
.bellContainer::after {
    /* change this line */
    content: attr(notifications);  

    /* add these lines to ensure good text placement */
    display: grid;
    place-items: center;
}
```

And just like that, we've got a red dot that suggests we have 4 unread notifications.


### 2.6 TailwindCSS

And with that all said and done, it's now graduation time!!! 🎉🥳🔥 You're officially an HTML & CSS pro :P

To take the next step to becoming a hyper 10x developer, it's important to put your skills to good use, and I highly recommend doing so with [this video ->](https://youtu.be/70T2GMDKl6M)

Also, there's a way to make coding CSS even faster so that you can design and build webpages at mindboggling speeds. The secret is to use TailwindCSS, which is a very easy adaptation to make once you understand CSS itself. Their documentation is phenomenal and also tells you exactly how you can integrate tailwindCSS into any project you choose to venture forth upon. Link to their documentation is [here ->](https://tailwindcss.com/docs)

## Final Words

I hope that these notes give you the knowledge you need to excel as an HTML & CSS developer! If you've enjoyed the repo, please consider giving it a ***star ⭐️***, and be sure to check out the other guides available so you can become the ultimate developer today :P

Cheers,

James