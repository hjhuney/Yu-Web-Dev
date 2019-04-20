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

## Creating a Node Package

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




