// import letter.js
var Letter = require(".letter.js");


//contructr fumction Called Word
function Word(wrd){
    this.word = wrd; //arg wrd
    this.lets = []; //property called lets = [];
    this.found = false; //property called found = false
    //function inside called getlets run loop over each letter in word property
    this.getlets = function() {
        for (var i = 0; i < this.word.length; i++){
            this.lets.push(new Letter(this.word[i]));
        }
    }; 
}







