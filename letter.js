//function called letter
function Letter(let){
    //property called charac to store arg. let
     this.charac = let;
     //appear set to false
     this.appear = false;
     //function inside letter called letterRender
     this.letterRender = function () {
        if (this.appear === false) {
            return "_";
        } else {
            return this.charac;
        }
     }
}

module.exports = Letter;
//let argument



