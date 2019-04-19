# Sec 12: Advanced JS and DOM Manipulation

## Adding Event Listeners to a Button

DOM events are sent to notify code of interesting things that have taken place. Event listeners generally have 2 parameters. The first is the type (type of event), the second is a listener which is a JS function. 

[MDN: addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

[MDN: Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

```
document.querySelector("button").addEventListener("click", handleClick);
```

In this instance, we do not use the parentheses to call this function. 

## Anonymous Function

An anonymous function looks the same as a normal function, but it's anonymous. Example below:

```
// Anonymous Function
document.querySelector("button").addEventListener("click", function() {alert("I got clicked!")});
```

## Higher Order Functions

Higher order functions can take other functions as inputs. 

```
function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

console.log(calculator(4,5, multiply));
```

## Playing Sounds on a Website


```
// simple code
var audio = new Audio('sounds/tom-1.mp3');
audio.play();

// adding audio to every element with the class "drum"
var audio = new Audio('sounds/tom-1.mp3');

for (var i=0; i < numDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        audio.play();
    })
}
```

## Javascript Objects

Similar to dictionary in Python. 

```
var bellboy1 =  {
  name: "Timmy", 
  age: 19, 
  hasWorkPermit: true, 
  languages: ["French", "English"]
}
```

If we wanted to get the name of our bellboy from the object above, we'd do this:

```
console.log(bellboy1.name);
```

To create several objects for different bellboys, we'd create a function like this.

```
function BellBoy (name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
}
```

This is a constructor function. Constructor functions have capitalized names. To initailize object:

```
var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "Aramaic"]);
```

When creating a variable, we use the keyword "new". 

## Switch Statements in JS

Example of switch statements:

```
var audio = new Audio('sounds/tom-1.mp3');

for (var i=0; i < numDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

            switch(buttonInnerHTML) {
                case "w": 
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;

                case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;

                case "s": 
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;

                case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;

                case "j": 
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;

                case "k":
                    var crash= new Audio("sounds/crash.mp3");
                    crash.play();
                    break;

                case "l": 
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;

                default: console.log(buttonInnerHTML);
            }
     })
}
```

## Objects, Methods, and Their Dot Notation

```
function Housekeeper (name, yearsExperience, cleaningRepertoire) {
    this.name = name;
    this.yearsExperience = yearsExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress ...");
    }
}

var housekeeper1 = new Housekeeper("Tom", 9, ["lobby", "bedroom"]);
var housekeeper2 = new Housekeeper("Marie", 12, ["bathroom", "hallways"]);

housekeeper1.clean();
```


## Keyboard Event Lisenters to Check for Key Downs (Key Press)

```
var numDrumButtons = document.querySelectorAll(".drum").length;

var audio = new Audio('sounds/tom-1.mp3');

// Detecting button press

for (var i=0; i < numDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

     });
}

// detecting keyboard press

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
});

function makeSound(key) {

    switch(key) {
        case "w": 
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s": 
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j": 
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l": 
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}
```

## Callback Function

Higher order functions can take functions as inputs. A function that gets passed in as an input is a "Callback Function". 

```
document.addEventListener("keypress", respondToKey(event));

function respondToKey(event) {
  console.log("key pressed.");
}
```

## Timeout Function

[W3: Timeout Method](https://www.w3schools.com/jsref/met_win_settimeout.asp)

For timeout, 2nd parameter is the number of milliseconds before timeout. 










