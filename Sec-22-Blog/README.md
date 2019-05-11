# Creating a Blog

## Installing Dependencies

We use the package.json file. This includes all of our dependencies. We then run:

```
npm install
```

This will search for the package.json file and automatically install the dependencies. 


## Rendering the Home Page

Our home page is saved inside the views folder and named "home.ejs". In the app.js, we would enter:

```
app.get("/", function(req, res) {
  res.render("home");
})
```

This will render the home page. 

## Rendering Content

Our about page is saved as "about.ejs." Our header is "partials/header.ejs". 

```
```





## For Each 

Alternative to for loop in JS. 

[MDN: For Each](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

## Express Route Parameters

Can use Express to get route dynamically. 

[Express Routing](https://expressjs.com/en/guide/routing.html)

For instance, we have a lot of pages with different topic names:

```
const express = require("express");

const app = express();

// use :topic so that we can dynamically get the routes
app.get("/news/:topic", function(req, res) {
  console.log(req.params.topic);
});

app.listen("3000", function() {
  console.log("Server is running on port 3000");
})
```

## Getting Blog Posts in Kabob Case

Kabob case is word-hyphen-word format. 

We can use [Lodash](https://lodash.com/) with Node.js to help with this. 




