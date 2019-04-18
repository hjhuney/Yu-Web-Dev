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

Typically use camelCase for function names. 

```
// creating the function
function getMilk () {
  alert("leaveHouse");
  alert("moveRight");
  alert("openFridge");
  alert("pickUpMilk");
}

// function does not end with a semi-colon

// calling the function

getMilk();
```

## console.log

Similar to print in Python. Different than alert since it does not open pop-up window. It only shows up in the console and is not meant for the user; it's meant for the developer. 

## Parameters and Arguments

```
function getMilk (num_bottles) {
  var cost = num_bottles * 1.5;
  
  alert("leaveHouse");
  alert("moveRight");
  alert("openFridge");
  alert("buy " + num_bottles + " bottles of milk");
  alert("Cost of milk: $ " + cost);
}

getMilk(12);
```

## Outputs and Return Values


Function with return value. 

```
function getMilk (num_bottles) {
  var cost = num_bottles * 1.5;
  
  alert("leaveHouse");
  alert("moveRight");
  alert("openFridge");
  alert("buy " + num_bottles + " bottles of milk");
  
  return "Cost of milk: $ " + cost;
  
}

var costOfMilk = getMilk(12);
alert(costOfMilk)
```

BMI Calculator Challenge: 

```
var yourWeight = prompt("Enter your weight in pounds: ");
var yourHeight = prompt("Enter your height in inches: ");

function bmiCalculator (weight, height) {
    var bmi = (weight / Math.pow(height, 2)) * 703;

    return bmi;

}

var yourBMI = bmiCalculator(yourWeight, yourHeight);
alert("Your BMI is "  + yourBMI);
```

## Math

Math.random() generates a random 16 decimal place number between 0 and 1 (but not including 1). 

Math.floor() rounds down to an integer. 

## If-Else Statements

Syntax:

```
if (track === "clear") {
  goStraight();
} else {
  turnRight();
}
```

More concrete example:

```
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore >= 70) {
    alert("Score of " + loveScore + ". It's a match!");
} else {
    alert("Score of " + loveScore + ". Not a match :(" );
}
```

# Comparators and Equality

* === is equal to
* !== is not equal to
* >= greater than or equal to
* <= lesser or equal

Difference between triple-equals (===) and double-equals (==) is that triple-equals also checks whether data types match. Double-equals does not care about data types. 

## Combining Comparators

* && AND
* || OR
* ! NOT

## Arrays

Similar to lists in Python:

```
var eggs = [1,2,3,4]
```

To find a single value in an array, works similar to Python:

```
eggs[0]
```
You can use .includes() function to search for a particular item in the array. 

```
var guests=["Angela","Burt","Jack","Lara"];
console.log(guests.includes("Lara"))
```

Mini-challenge to create guest list checker:

```
var guests=["Angela","Burt","Jack","Lara"];

var guestName = prompt("What is your name?: ");

if (eggs.includes(guestName)) {
    alert("You are on the guest list!")
} else {
    alert("Sorry, your name is not on the guest list")
}
```

You can add items to an array with .push(). It always pushes item to the end of the array. 

```
var output = [];

output.push(5);
```

You can remove last item from array with .pop(). 

```
var output = [];

output.push(5);
output.push(7);
output.push(9);

alert(output);

// result will be 5,7
```



## Fizzbuzz

If number is divisible by 3, "Fizz". If number is divisible by 5, "Buzz." If divisible by both 3 and 5, "Fizzbuzz." 

My fizzbuzz solution:


```
var output = [];
var count = 1;

function fizzBuzz() {
    while (count < 100) {
      if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzbuzz!");
      } else if (count % 3 === 0) {
        output.push("fizz");
      } else if (count % 5 === 0) {
        output.push("buzz");
      } else {
        output.push(count);
      }
      count++;
    }
    console.log(output);
}

fizzBuzz();
```

## For Loops

Basic syntax: 

```
for (var i=0;, i<2; i++) {
  // do something
}
```

The first value is the "starting point." The second value is the "end point". The third value is the "change in the value". 
