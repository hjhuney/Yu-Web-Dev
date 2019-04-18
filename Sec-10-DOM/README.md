# Sec 10: The Document Object Model (DOM)

## In-line Javascript

Example:

```
<body onload="alert('Hello');">
    <h1>Hello</h1>
</body>
```

Note in the above example, we need to use single-quotes around "Hello"; otherwise the interpreter won't know how to read it since it's already inside quotation marks for the onload. 

Inline Javascript has similar downsides to inline CSS. It's not very modular and it's difficult to debug. 

## Internal Javascript

For internal JS, we use a script tag. 

```
<body>
    <h1>Hello</h1>

    <script type=text/javascript>
        alert("Hello");    
    </script>
</body>
```

## External File for JS

Instead of simple script tag, we can use a script tag that has an external source. 

```
<body>
    <h1>Hello</h1>

    <script src="index.js"></script>
</body>
```

In this instance, we'd create an index.js file and it would have the code for the alert:

```
alert("Hello");
```

## Location of Script Tag

With CSS, you always want to put the tag in the head near the top of the HTML document. With JS, it's the opposite; you want JS tag after an element. 

## Properties vs Methods

Properties

* innerHTML
* style
* firstChild

Methods

* click()
* appendChild()
* setAttribute()

## Get Elements

* document.GetElementsByTagName("li");
* document.GetElementsByClassName("class_name");
* document.GetElementById("title");
* document.querySelector("#title");
* document.querySelectorAll("#list .item");

[HTML Tree Generator: Chrome Extension](https://chrome.google.com/webstore/detail/html-tree-generator/dlbbmhhaadfnbbdnjalilhdakfmiffeg?hl=en-US)

JS methods tend to be camelCase even when they aren't in CSS. 

Example of changing an element with JS:

```
document.querySelector("button").style.backgroundColor = "purple";
```

[W3 Schools: HTML DOM Style Object](https://www.w3schools.com/jsref/dom_obj_style.asp)

## ClassList

add, remove, and toggle:

```
document.querySelector("button").classList.add("invisible");
document.querySelector("button").classList.remove("invisible");
document.querySelector("button").classList.toggle("invisible");
```

## Seperation of Concerns

HTML is for content only. Your CSS is for styling your website. Your JavaScript is there for behavior. 

## HTML Attributes


```
document.querySelector("a").attributes;
```

```
document.querySelector("a").getAttribute("href");
```

If we want to change attribute, we can use setAttribute instead, but it takes 2 parameters (which attribute you want to change, what you want to change it to). 

```
document.querySelector("a").setAttribute("href", "https://www.bing.com");
```
