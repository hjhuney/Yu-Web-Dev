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

## CSS Selector Hierarchy

* (1) Id
* (2) Class
* (3) Tag [global]

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

Display values:

* Block
* Inline
* Inline-block
* None

Common block elements:

* Paragraphs 
* Headers
* Divisions (< div >)
* Lists and list items (< 0l >, < ul >, and < li >
* Forms (< form >)

Span elemnet is an in-line design element. Only useful with CSS styling. Can't change width of in-line elements. 

Common in-line elements:

* Spans ( < span >)
* Images
* Anchors ( < a >)

To display everything in-line:

```
p {
  display: inline;
```

In-line block:

```
p {
  display: inline-block;
```

You can use "display: none;" or "visibility: hidden;" to hide elements. 

## CSS Static and Relative Positioning

For block elements, they take up 100% of width by default, but height is determined by content. 

Positions:

* Static
* Relative
* Absolute
* Fixed

Relative positioning is "relative" to where block would've been normally. 

Coordinates:

* Top 
* Bottom
* Left
* Right

## Absolute Positioning

Absolute positioning is relative to its parent element. 

## Centering Elements in CSS

Two common methods include "text-align" and "margin". If a block element with width set, need "margin". 

## Fonts

Two major font families: Serif and Sans-Serif. Monospace font-family normally used for coding and for projecting code on a website. For most browsers, the default serif is Times font and default sans-serif is Arial. To use specific font from a font-family:

```
font-family: verdana, sans-serif;
```

If user does not have font installed, then the browser will use the default font for the font-family. There are web-safe fonts:

[Web-safe Fonts](https://www.w3schools.com/csSref/css_websafe_fonts.asp)

But no font is 100% web safe. 

[Font Usage Stats](https://www.cssfontstack.com/)

Can paste font from that site. For example:

```
font-family: Baskerville,"Baskerville Old Face","Hoefler Text",Garamond,"Times New Roman",serif
```

In above example, font will be Baskerville if they have it, if not, then the order after that font will be Baskerville Old Face, Hoefler Text, Garamond, Times New Roman, and finally any serif they have installed. 

If we want to make sure people see our font, we can use font embedding. 

[Google Fonts](https://fonts.google.com/)

We can select fonts on Google Fonts (+ sign) and then embed the fonts, add code to index.html.

## Adding Content

[Lorem Ipsum Generator](https://loremipsum.io/)

## Icon Images

[flaticon.com](https://www.flaticon.com/)

For animated gifs

[Giphy](https://giphy.com)

## CSS Sizing

We can set font size with "font-size" but if we want it to be dynamic, we need to use percentage. 100% font size is equivalent 16px. If we want 90px, we need 562%. The other way to specify dyanmic font size is by using a unit called "em". This "em" is completely different from the tag < em > which is used for emphasis. One "em" was originally width of the capital letter "M", but it's now equivalent to 16px. 

```
font-size: 5.62em;
```
Static sized fonts do not change with browser settings; only dynamically sized fonts change. However, all fonts will scale up with the zoom feature. When using "em", however, the font size is inherited, so if I set the body font size to "2em" and the h1 to "5em", then h1 will be "7em" rather than "5em". This is also the same with percentages. 

Inside CSS3, we can get around this issue by using "rem" (root "em") rather than "em". You can use "rem" and "em" not only with fonts, but also with padding, margins, etc, but Angela Yu prefers to use pixels for those types of attributes. 

## Line Height

Prefered way to specify is by using a value without units. 1 is default typically. 2 is double that. 

## Margin Explanation

This:

```
margin: 100px auto
```

100px margin at top, auto margin at right, 100px margin at bottom, auto margin on left

## CSS Float and Clear

Use "float" to set an image to the right or left of text. Use margin-right to then offset the image from the text by a certain amount. For instance. 

```
.left-image {
  float: left;
  margin-right: 30px;
}
```

"clear" will make sure the margin is clear. 


## CSS Button Generator

[CSS Button Generator](https://www.css3buttongenerator.com/)


