
var Letter = function(let) {
    this.character = let;
    this.active = false;
}

Letter.prototype.show = function() {
    return (this.active) ? this.character : " _ ";
}

module.exports = Letter;