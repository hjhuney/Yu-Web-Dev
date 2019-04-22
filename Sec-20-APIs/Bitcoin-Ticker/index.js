const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {

    // get values selected by user
    var crypto = req.body.crypto;
    var fiat = req.body.fiat;
    var amount = req.body.amount;

    // concatenante user selected values
    var baseURL = "https://apiv2.bitcoinaverage.com/convert/global"

    //
    var options = {
        url: baseURL, 
        method: "GET", 
        qs: {
            from: crypto, 
            to: fiat, 
            amount: amount
        }
    };

    request(options, function(error, response, body) {
        
        var data = JSON.parse(body);
        var price = data.price;

        console.log(price);

        // get current date
        var currentDate = data.time;

        // res.send("<h1>The average price for " + crypto + " this week was " + price + " " + fiat + "</h1>");
        res.write("<p>The current date is " + currentDate +"</p>");
        res.write("<h1>" + amount + " " + crypto + " is currently worth " + price + " in " + fiat + "</h1>");

        res.send();
    });
})


app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})