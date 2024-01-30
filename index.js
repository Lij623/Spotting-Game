//word difference spotting game

const word = document.getElementById('word');
const changedWord = document.getElementById('changedWord');
const result = document.getElementById('result');

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
chosen = [];

let preChange; //variable for the word before the change
let char; 
let chgdWord;

create();
change(chosen);


function create(){

        for(let i = 0; i < 10; i++) {
            let index = Math.floor(Math.random() * letters.length); //floor to round down number so it can actually be used to search indexes in array
            char = letters[index]
            chosen.push(char); //pushes character into the chosen characters/word array
        }
        preChange = chosen.join(""); //joins the array together without quotations
        word.textContent = preChange; 
 
 }

function change(array){
    let shflChosen = [];// used to shuffle the array and search to see if characters are already in our array or not
    let usedIndexes = [];

    
    let i = 0;
    while (i < array.length){
        let randomIndex = Math.floor(Math.random() * array.length);

        if (!usedIndexes.includes(randomIndex)){ //checks if its false that used index includes the random index
            shflChosen.push(array[randomIndex]);//this gets pushed into the new array
            usedIndexes.push(randomIndex);// adds this to used Indexes so that it can't be searched twice (or more)
            i++;//adds to stop the loop
        }
    }
    chgdWord = (shflChosen.join("")).slice(0, 9);
    changedWord.textContent = chgdWord;
    
}

function convert(){
    var usrGuess = document.getElementById('usrGuess').value;//grabs the users guess

    let sorted = preChange.split("").sort().join(""); //splits the word letter by letter sorts and rejoins the word
    let guess = chgdWord + usrGuess; //adds the guess to the changed word
    guess = guess.split("").sort().join("");

    if(sorted === guess){ //checks to see if words are the same 
        result.textContent = 'Congratulations! That is the right answer!';
    }
    else{
        result.textContent = 'Oops that is the wrong  answer! Please try again.';

    }

}