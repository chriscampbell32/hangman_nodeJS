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

    this.checkIfLetterFound = function(guessLetter){
    var whatToReturn = 0;
    for(var i = 0; i < this.lets.length; i++){
      if(this.lets[i].charac === guessLetter){
        this.lets[i].appear = true;
        whatToReturn += 1;
      }
    } 
    return whatToReturn;
  }
  this.didWeFindTheWord = function(){
    if (this.lets.every(curLet) === true){
      return this.found;
    } 
  } 
  this.wordRender = function(){
    var str = "";
    for (var i = 0; i < this.lets.length; i++){
        str += this.lets[i].letterRender();
    }
    return str;
  };

}
module.exports = Word;







