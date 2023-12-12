# HTML & CSS · Course Notes

#### The ultimate guide to *HTML & CSS* 🔥

HTML & CSS are the backbone of the internet, and almost every website out there can be boiled down into some unique mutation of the two. While relatively simple to learn, together they can really pack a powerful punch.

They're also the perfect entry point for any new or beginner developer to start learning and get their hands dirty. Master these, and you'll have the ultimate foundation for your programming journey.

## Resources

Here are some resources you might find helpful!

* The Internet Is Hard -> https://internetingishard.netlify.app/
* Learn HTML & CSS -> https://youtu.be/70T2GMDKl6M
* Discord -> https://discord.gg/BYr6gujs4k

## Chapter 1 - Introduction to HTML

HTML stands for Hyper Text Markup Language, and it's technically not a programming language, but instead, a markup language. For now, we'll think of it as a glorified word document. In a word document, you can create text headers, add links, display images and well, HTML isn't that different.

### Creating an HTML Document

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

### Initializing an HTML Document

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