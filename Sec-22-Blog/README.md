# Creating a Blog

## Installing Dependencies

We use the package.json file. This includes all of our dependencies. We then run:

```
npm install
```

This will search for the package.json file and automatically install the dependencies. 


## Rendering the Home Page

Our home page is saved inside the views folder and named "home.ejs". In the app.js, we would enter:

```
app.get("/", function(req, res) {
  res.render("home");
})
```

This will render the home page. 
