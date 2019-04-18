// program to write lyrics of "99 Bottles of Beer on the Wall" to console

var bottles = 99

function bob() {
  while (bottles >=1) {
    console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.");

    // console.log("\n");

    bottles--;

    console.log("Take one down pass it around, " + bottles + " bottles of beer on the wall.");
    console.log("\n");
  }

}
bob();