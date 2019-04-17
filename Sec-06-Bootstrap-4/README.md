# Sec 6 + 7: Bootstrap 4

Bootstrap is a front-end library that is open-source and was originally developed at Twitter. 

Can use [codeply](https://www.codeply.com/) to experiment with Bootstrap. 

## Installing Bootstrap

Go to getbootstrap.com and copy the [CSS code](https://getbootstrap.com/docs/4.3/getting-started/introduction/) in the head. CDN stands for "Content Delivery Network". Bootstrap hosts their files on Max CDN in many locations throughout the world, so the browser will look for the shortest route to download. Also most of your users will probably have Bootstrap file saved in their cookies since it's very common. 

You can also use Boostrap by coding their "[Starter Template](https://getbootstrap.com/docs/4.3/getting-started/introduction/#starter-template)" code. You can also download Bootstrap source code. 

## Wireframing

Design the website before doing the tech; normally with pencil and paper. The opposite of wireframing is a "mock-up", which is a high-fidelity representation of website design. The good thing with mock-ups shows exactly how it wants to look. The problem with mock-ups is that they can bog you down with details. 

Some resources:

* [Awwwards](https://awwwards.com)
* [UI Patterns](https://ui-patterns.com)
* [Dribble](https://dribble.com)

Can also use [sneakpeekit](sneakpeekit.com) for templates to wireframe. 

Industry standard tool for wireframming is [Balsamiq](https://balsamiq.cloud). You can share designs with others on Balsamiq. 

## The Bootstrap Navigation Bar

The < nav > tag is similar to < div >. It's generally used to indicate the navigation bar. 

## The Bootstrap Grid System

The [Airbnb](https://www.airbnb.com/) website is a good example of the grid system where in a full screen window, it shows 4 listings per row, but can shrink down to 3 or 2 based on the size of the window. 

The grid system has 12 units. If you specify something like column-3 "col-3", it will take up 3 units. "col-6" takes up 6 units (half the screen). 

We can use responsive columns for different size viewports. We can use "col-md-6" to use a 6 unit size column on any viewport that is medium-sized (tablet-sized) or larger. Anything smaller (mobile), it will take up the full width. 

## CSS Style Order of Hierarchy

If you have multiple stylesheets (and CSS and Bootstrap create this scenario), then the stylesheet listed last in the head is the one applied. So if Bootstrap is listed first and CSS "styles.css" 2nd, then the "styles.css" overrides the Bootstrap attributes. Since you'll generally be using the CSS stylesheet to customize things, it should be listed last. This is because in HTML, order of code matters for execution (it does not in CSS and JS). 

## Containers

Containers are automatically responsive. Fluid-containers are automatically the width of the viewport. 

## Font Awesome

Website with over 900 icon for free commercial use / open-source. 

[Font Awesome](https://fontawesome.com/)

Font Awesome uses the i tag (italics) < i >, just because it's the shortest and doesn't impact anything, but you can use a span if you want to be more syntactically correct. 

## Carousel

In Bootstrap, a carousel is a slideshow. 

You can pause slides by using:

```
data-pause: "hover"
```

Which will pause if you hover over the slide. "data-ride" can be used to change auto-play. 

"aria-hidden" is so that visually impaired people who have screen readers do not have to hear all the buttons. 

## Examples

On top of Bootstrap examples, there is also Bootsnipp. 

[Bootsnipp](https://bootsnipp.com)

## The CSS Z-Index and Stacking Order

To change stacking order in CSS, have to change the Z-index. The default z-index is 0. 

```
z-index: 1;
```
Changing the z-index to 1 for one element would put it on top. If we set an element to -1, it would be in the back. When you have an element that is static (not relative or absolute), the z-index does not apply, but if we give it a position, then the z-index matters.

[Stacking Order Flowchart (PDF)](https://drive.google.com/uc?export=download&id=13Z1_Fgbh3QESIIoFpXUgo1F4sVjB9di2)


## Responsive Breakpoints / CSS Media Queries

Example of media query:

```
@media print {

h1 {
  color: red;
  }

}
```
Media query is checking to see if something is true or false. 

```
@media screen (min-width: 900px){
//change something
}
```

Checking to see if viewport width is at least 900px. This could be used to change CSS with a different viewport (desktop vs mobile). This is a media query breakpoint. 

Viewport is size of screen your website is being displayed upon. 


## Refactoring

1.) Readibility. <br>
2.) Modularity. How easy is it to re-use parts of your code? <br>
3.) Efficiency. How fast does your code run? <br>
4.) Length. 

# Change Class Attributes for a Particular ID

Like this:

```
#title .container-fluid {
  attribute: blah blah blah;
}
```

## Combining Selectors

Can do multiple selectors like this:

```
h1, h2, h3, h4 {
  Attribute: blah blah blah;
}
```

Combining two class selectors. 
 
```
.selector1 .selector2 {
  attribute: blah blah blah;
}
```
  
Selector1 is the parent, selector 2 is the child within selector1. 

## Selector Priority

* 1.) in-line styling in html (style=)
* 2.) id
* 3.) class
* 4.) tag / global

Angela recomends using id's sparingly; she tends to use them for sections. 

You typically want to avoid in-line styling. 
