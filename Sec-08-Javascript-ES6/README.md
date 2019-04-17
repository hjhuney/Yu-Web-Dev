# Sec 8 + 9: Javascript ES6

Javascript is an interpreted language, similar to Python and Ruby. Compiled languages include Java, C++, and Swift. JavaScript was traditionally a front-end language (e.g. add animations), but its usage has expanded significantly. JavaScript is the only language supported by all of the major browers (Chrome / Firefox / IE / Safari / Opera). 

## Google Chrome Snippets

Go to "Developer Tools" > "Sources" > ">>" > Snippets > "+New snippet". Allows you to write and test out a script. 

[MDN: JavaScript Resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Notes on Syntax

Double-quotes and single-quotes both work, but double is normally preferred. 

[Idiotmatic JavaScript](https://github.com/rwaldron/idiomatic.js/)

## JS Basics

To find out data type in JS:

```
typeof()
```

You can do user input with prompt:

```
prompt("What is your name?")
```

## Variables

Creating a variable in JS:

```
var myName = "Walrus"
```

In JS, a variable is mutable (can be changed). 

## String Length

To find length of string, use .length:

```
var name = "Dracula";

name.length;
```
Challenge to create a tweet and find number of characters left:

```
var maxLength = 280;
var tweet = prompt("Enter your tweet: ");
var tweetLength = tweet.length;

alert("You have written " + tweetLength + " characters. You have " + (maxLength - tweetLength) + " left.");
```

## Slicing and Extracting Parts of a String

You can slice in JS with .slice(start_index, end_index):

```
var name = "Aardvark Sam";
name.slice(0,8);
```
This will return the first 8 characters in the variable "name". 

## Change Case of Strings

You can change all characters in string to upper case with .toUpperCase(). For lower case, it's .toLowerCase(). 

```
var name = "aardvark";
var nameUpper = name.toUpperCase();
```

Challenge to convert (single-word) name to title case:

```
var name = prompt("What is your name?: " );
name = name.toLowerCase();

var titleCaseName = name.slice(0,1).toUpperCase() + name.slice(1,);
alert(titleCaseName);
```

## Basic Arithmetic 

Division /
Multiply * 
Modulo %

## Increment / Decrement

In JS, you can use ++ to increment or -- decrement. If you want to increment by another value, you can use +=, for instance:

```
var x = 5;
x += 2;

// x is equal to 7
```

## Functions


