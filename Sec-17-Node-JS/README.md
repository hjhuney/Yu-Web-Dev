# Sec 17 + 18: Node.js and Express.js

Node is very commonly used for back-end development. It's used by Netflix, Uber, Twitter, and Wikipedia. Node allows us to interact directly with the hardware of a computer.  

## Node REPL

Read Evaluation Print Loop. A REPL allows you to execute code in bit-sized chunks. By installing Node, we also installed the Node REPL

```
$ node
> console.log("Hey, mang!");
```

To exit the Node REPL, you can use:

```
.exit
```

or "Ctrl" + "C" twice. 

To clear console, enter:

```
clear
```


## Constants

A "const" (constant) cannot be changed in the same way that a "var" (variable) can. 


## Native Node Modules

We can use Node.js to directly interact with the computer (e.g. local files of computer). 

[Node.js v11 Documentation](https://nodejs.org/dist/latest-v11.x/docs/api/)

File system docs to help interact with file system using Node:

[File System: FS Module](https://nodejs.org/dist/latest-v11.x/docs/api/fs.html)

In order to use the 'fs' module, we first have to require it. 

```
const fs = require('fs');
```

We can now write a simple program to copy a file:

```
fs.copyFileSync('file1.txt', 'file2.txt');
```

And run it in GitBash. 

```
node index.js
```

## Initializing NPM

"npm" stands for Node Package Manager. To create a package:

```
npm init
```

This process will create a package.json. 

## External Node Modules

We can search external Node packages at:

[npmjs.com](https://www.npmjs.com/)

Installing the superheroes module:

```
npm install superheroes
```

## Express.js

Express adds extra features to Node and helps organize your code. It also allows you to write more efficient / less repetitive code. 


## Building a Server with Express

[Installing Express](http://expressjs.com/en/starter/installing.html)

```
npm install express
```

We technically don't need to add " --save"; it is done by default. 

To run server with our server setup via server.js:

```
node server.js
```

In order to exit, hit "CTRL" + "C". 

We can use a callback function to see when our server is running:

```
app.listen(port, function() {
    console.log("Server started on port 3000");
});
```
The root of our website

```
localhost:3000
```

In order to get from our homepage, we could do this:

```
app.get("/", function(request, response) {
    response.send("<h1>Helloooooo</h1>");
})
```

The "/" is just the root. 

nodemon will monitor for changes in your source and automatically restart your server. Install with:

```
npm install -g nodemon
```

To run our program:

```
nodemon server.js
```

## Responding to Requests with HTML Files

After creating our HTML file, we would need to use res.sendFile(), but we should no longer use a relative path. Instead, we'd do this:

```
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})
```

## Processing Post Requests with Body Parser

Need to use .post()

```
app.post("/", function(req, res) {
    res.send("Thanks for posting that!");
})
```

But we also need to be able to get the data. We need to use body-parser. 

```
npm install body-parser
```

Require body-parser

```
const bodyParser = require("body-parser");
```

When ever using data from HTML form, we use .urlencoded. 











