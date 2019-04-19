function Housekeeper (name, yearsExperience, cleaningRepertoire) {
    this.name = name;
    this.yearsExperience = yearsExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress ...");
    }
}

var housekeeper1 = new Housekeeper("Tom", 9, ["lobby", "bedroom"]);
var housekeeper2 = new Housekeeper("Marie", 12, ["bathroom", "hallways"]);

housekeeper1.clean();