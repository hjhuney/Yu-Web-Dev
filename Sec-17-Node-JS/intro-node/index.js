// comment below tells the editor I'm using ES6
//jshint esversion:6

const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperHeroName = superheroes.random();
var mySuperVillainName = supervillains.random();

console.log(mySuperHeroName + " Johnson");
console.log(mySuperVillainName + " McGillicuddy");