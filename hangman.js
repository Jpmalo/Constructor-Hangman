
var inquirer = require('inquirer');
var Word = require('./word.js');

var wordOptions = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
var guesses = 10;

function startGame() {
    guesses = 10;

}
var currentWord = wordOptions[  Math.floor(Math.random() * wordOptions.length)) ;

console.log(currentWord);



startGame();


