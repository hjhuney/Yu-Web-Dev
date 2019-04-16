# Sec 6: Bootstrap 4

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
