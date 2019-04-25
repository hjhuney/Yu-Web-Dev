# Sec 20 + 21: APIs + EJS Templates

API is short for Application Programming Interface. An API is a set of commands, functions, protocols, and objects that programmers can use to create software or interact with an external system. It provides developers with standard commands for performing common operations so they do not have to write the code from scratch. 

For instance, iOS developers use an API provided by Apple to interact with the operating system. 

APIs are also used to interact with an external system. For instance, people who sign up for Tinder provide their Facebook log-in details. Tinder is able to go to Facebook's servers to see your friends and interact with parts of the Tinder app. 

If we want to make a dating app that matches people based on Facebook likes, we need to sent a GET request to Facebook's server from our server. Facebook's server will send a response back to our server. In order to do this, we have to use the API. 

### Bitcoin Average Website

We go to API documentation. Doc tells us how to interact with the website. For instance, Ticker data, and the GET (HTTP) request. 

cURL is a way of making an HTTP request via the command line. "Client URL Request Library."

To see manual for cURL:

```
man curl
```

# Public APIs

Any API has over 1400 public APIs

[Any API](https://any-api.com/)


## Using the Requests Module to Get Data From API

Project to get Bitcoin data. Create new directory, index.js, index.html. Run:

```
npm init
```

Then install express and body-parser. Can install both at same time. 

```
npm install express body-parser
```

Request module:

[Request - Simplified HTTP Client](https://www.npmjs.com/package/request)

To install:

```
npm install request
```

HTTP Status codes:

[HTTP STatus Codes](https://httpstatuses.com/)


## Working with JSONs

JSON stands for Javascript Object Notation. JSON data formatted in key-value pairs (like JS objects). The other common format aside from JSON is XML (Extensible Markup Language). XML looks similar to HTML. 

Convert JS object into JSON format:

```
JSON.stringify(object1);
```

Convert JSON back to JS object:

```
JSON.parse(json1);
```

If we forget to parse the data, it will come back as 'undefined'. 

```
app.post("/", function(req, res) {

    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error, response, body) {
        
        var data = JSON.parse(body);
        var price = data.averages.week;

        res.send("<h1>The average price for Bitcoin this week was " + price + "</h1>");

    });
})
```

This will return the last Bitcoin price in US Dollars. In order to add functionality to the menu, we need a variable to store the cryptocurrency and the fiat currency:

```
app.post("/", function(req, res) {

    // get values selected by user
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;

    // concatenante user selected values
    var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/"
    var finalURL = baseURL + crypto + fiat;

    request(finalURL, function(error, response, body) {
        
        var data = JSON.parse(body);
        var price = data.averages.week;

        res.send("<h1>The average price for " + crypto + " this week was " + price + " " + fiat + "</h1>");

    });
})
```

Once you use res.send, you can not do others. If you want to send more than 1 thing to the browers, you have to use res.write() and store it instead. 

## Setting Up Sign-Up Page

In order for server to serve up static files such as CSS and images. We need to use a special function of Express called "static"

## Servers

Heroku allows you to rent their servers for free. You can create up to 5 projects for free with them. 


## res.write()

We can use res.send() to send information back to our user, but if we need to send multiples pieces of information / more complex info, we would generally want to use res.write(). 

## Embedded JavaScript (EJS) Templating

[EJS](https://ejs.co/)

To install

```
npm install ejs
```

To use ejs

```
app.set("view engine", "ejs");
```

We need to create a new subfolder called "views" which is where it will look for files. 

Use <%= !> for EJS:

```
It's a <%= kindOfDay %!> day
```

Our file name is list.ejs. We use res.render():

```
res.render('list', {kindOfDay: day});
```

## Date Conversions

Can use [.toLocaleDateString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)

```
    var today = new Date();

    var options = {
        weekday: "long", 
        day: "numeric", 
        month: "long"        
    };

    var day = today.toLocaleDateString("en-US", options);
```
   
## Scope


