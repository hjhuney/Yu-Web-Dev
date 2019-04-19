# Sec 13 + 14: jQuery

jQuery is one of the most popular JS libraries. jQuery is an open-source library that makes writing JS code simpler and easier to read. 

Traditional JS:

```
document.querySelector("h1")
```

jQuery:

```
jQuery("h1")

// alternatively

$("h1")
```

# How to Use jQuery in Websites

You can download jQuery or use a CDN. Most popular option is to use Google's CDN:

[Google jQuery CDN](https://developers.google.com/speed/libraries/#jquery)

The position where you place your jQuery script tag is very important. It needs to be above the JavaScript script tag. We also don't want to put it in the head, so generally put it directly before JS script tag. 

Example:

```
<body>
    <h1>Hello</h1>
    <button>Click Me</button>
    <button>Click Me</button>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="index.js"></script>
</body>
```

## Minified Code

The jQuery and Bootstrap CDNs both are instances of minified code. You can minify your JS code at the link below:

[Minify JS / CSS](https://www.minifier.org/)

The benefit is that the minified script takes less memory and thus might run faster. 


## Change CSS with jQuery

If you have a single value in the properties, you are getting the value, and if you have two values, you are setting the value. 

```
$("h1").css("color", "red");
```

Example of modifying CSS and JS:

```
// CSS
.big-title {
    font-size: 10rem;
    color: yellow;
    font-family: cursive;
}

.margin-50 {
    margin: 50;
}

// JS

// adding and remove a class via jquery
$("h1").addClass("big-title");
$("h1").removeClass("big-title");

// adding multiple classes
$("h1)").addClass("big-title margin-50");
```

We can query to see if our element has a class

```
$("h1").hasClass("margin-50");

// will return a true or false value
```

## Manipulating Text and Attributes with jQuery

```
// text
$("button").text("Dont click me");

// text with HTML tags
$("button").html("<em>Hey</em>");
```


Attributes.

```
$("a").attr("href", "https://www.yahoo.com");
```

Once again, using 1 parameter tells you the value, while using 2 parameters, the 2nd one will change the attribute. 


## Adding Event Listeners with jQuery

```
$("h1").click(function() {
    $("h1").css("color", "purple");
});
```

Change change color of all the buttons in our example without a for loop using jQuery:

```
$("button").click(function() {
    $("h1").css("color", "purple");
});
```
Keypress example:

```
$(document).keypress(function(event) {
    $("h1").text(event.key);
});
```

Mouseover example:

```
$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});
```








