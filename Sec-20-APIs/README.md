# Sec 20: APIs

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
