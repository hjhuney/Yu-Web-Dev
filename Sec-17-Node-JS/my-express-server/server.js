const express = require('express');
const app = express();
const port = 3000;

// setting up a route
app.get("/", function(request, response) {
    response.send("<h1>Helloooooo</h1>");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: merfinmelvin@yopmail.com");
});

// bio on about page
app.get("/about", function(req, res) {
    res.send("My name is Merfin Melvin and I sell mulch!");
})

app.listen(port, function() {
    console.log("Server started on port 3000");
});

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))