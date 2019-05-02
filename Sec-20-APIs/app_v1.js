const express = require("express");
const bodyParser = require("body-parser");

const app = express()


// this line of code tells express to use ejs as its view engine
app.set("view engine", "ejs");
app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;  
        default:
            console.log("Error: current day is equal to: " + currentDay);
    }


        res.render("list", {kindOfDay: day} );


});

// app.get("/", function(req, res){
//     var today = new Date();

//     if (today.getDay() === 6 || today.getDay() === 0) {


//         res.send("Yay, it's the weekend");
//     } else {
//         res.sendFile(__dirname +  "/index.html");
//     }
// })

app.listen(3000, function() {
    console.log("Server started on port 3000");
})