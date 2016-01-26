console.log("yes");

var Word = require("./word.js");
var prompt = require("prompt");

prompt.start();

var game = {
    wordBank: ["morris", "essex", "union", "somerset", "hunterdon", "middlesex", "bergen", "ocean", "monmouth"],
    guessesRemaining: 10,
    currentWrd: null,
    startGame: function(wrd){
//var randomNumber
//this.currentWrd.getLets();
this.keepPromptingUser();


    },
    
}
