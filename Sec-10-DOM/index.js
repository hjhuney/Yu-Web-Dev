function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) +1;
  }

var randomNumber1 = getRandomInt(6);
var randomNumber2 = getRandomInt(6);

var diceName1 = "images/dice" + randomNumber1 + ".png";
var diceName2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", diceName1);
document.querySelectorAll("img")[1].setAttribute("src", diceName2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "It'a Tie.";
}

