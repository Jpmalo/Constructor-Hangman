
var letter = require('./letter.js');

function Word(wrd) {
    this.word = wrd;
    this.letters = [];
    this.complete = false;

    this.getLetter = function() {
        for (var i = 0; i < this.word.length; i++) {
            this.letters.push(new letter(this.word[i]));
        }
    }
}

module.exports = Word;