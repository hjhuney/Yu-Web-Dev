# Sec 4 +5: CSS

## Style

Inside body tag, insert style. 

```
<body style="background-color: blue">
```

* [MDN: Background color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color). 
* [MDN: Color Values](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
* [Colorhunt.co: Color Palettes](colorhunt.co)
* [MDN: Horizontal Rule Style Elements](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style)

## Internal CSS vs External CSS

We can change CSS for a single webpage or we can use external CSS to change it for entire website. For external CSS stylesheet, we would put a link in the head:

```
<link rel="stylesheet" href="/css/styles.css">
```

## Debug Code

In Google Chrome, go to Developer Tools. Then go to the "Console" tab. 

## CSS Syntax

selector { property: value; }

Best to have properties in alphabetical order so it's easier to debug. 

## CSS Selectors

Can use tag selectors (global), class selectors (local; can be applied multiple times), or id selectors (local; use only once). The difference between class and id is that class can be used multiple places, while id can only be used one place. Ids will override classes and classes will override tag selectors. 

You can use multiple classes on an element, but can't use multiple id selectors. 

Psuedo-classes (e.g. img:hover); seem more similar to tag selectors. Hover is the most commonly used pseudo-class. Pseudo-classes begin with colon. 

## Comments

```
/*
comments
*/
```
## HTML Divs

Divs don't do anything without CSS. 

Browser inserts default CSS style. 

## The Box Model

When using percentages with elements, it is relative to the viewpoint. "100%" is 100% of screen. 

Border width shorthand:

```
{border-width: 0px 10px 20px 30px;}
```

This is equivalent to:

```
{border-top: 0px;}
{border-right: 10px;}
{border-bottom: 20px;}
{border-left: 30px;}
```

Padding is space on all 4 edges of box. 

```
{padding: 20px;}
```

Margin gives space outside border:
```
{margin: 10px;}
```

Use margin, padding, border, the width, and height to impact appearance of HTML boxes. 

## CSS Display Property

Common block elements:

* Paragraphs 
* Headers
* Divisions (< div >)
* Lists and list items (< 0l >, < ul >, and < li >
* Forms (< form >)


