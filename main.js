// console.log("yes");

var Word = require("./word.js");
var prompt = require("prompt");

prompt.start();

var game = {
    wordBank: ["morris", "essex", "union", "somerset", "hunterdon", "middlesex", "bergen", "ocean", "monmouth"],
    guessesRemaining: 10,
    currentWrd: null,

//var randomNumber
//this.currentWrd.getLets();
    startGame: function(wrd) {
    var randomNumber = Math.floor(Math.random() * this.wordBank.length);
    this.currentWrd = new Word(this.wordBank[randomNumber]);

    this.currentWrd.getLets();
    this.keepPromptingUser();
  },
    keepPromptingUser: function(){
        var self = this;
        prompt.get(["guessLetter"], function(err, result){
            console.log("The Letter or space you guessed is " + result.guessLetter);
            var  findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);
            if(findHowManyOfUserGuess === 0){
                console.log("You guess Wrong!");
                self.guessesRemaining -= 1;
            } else {
                console.log("You guessed right!");
                if(currentWrd.didWeFindTheWord() ===true ){
                    console.log("You Won!!!")
                    return 1;
                }
            }
            console.log("Guesses remaining " + self.guessesRemaining);
            console.log(self.currentWrd.wordRender());

               
            
            if(self.guessesRemaining > 0 && self.currentWrd.found === false){
                self.keepPromptingUser();
            } else if(guessesRemaining === 0){
                console.log("Game over bro");
                console.log("the word was " + self.currentWrd.word);
            } else{
                console.log(self.currentWrd.wordRender());
            }

});
}
};
game.startGame();
