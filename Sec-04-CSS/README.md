# CSS

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

## Comments

```
/*
comments
*/
```



