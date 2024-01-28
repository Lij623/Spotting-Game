//word difference spotting game

const word = document.getElementById('word');
const changedWord = document.getElementById('changedWord');
const usrGuess = document.getElementById('usrGuess');

letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
chosen = [];

let preChange; //variable for the word before the change
let char; 

create();
change(chosen);

function create(){

        for(let i = 0; i < 10; i++) {
            let index = Math.floor(Math.random() * letters.length) //floor to round down number so it can actually be used to search indexes in array
            char = letters[index]
            chosen.push(char); //pushes character into the chosen characters/word array
        }
        preChange = chosen.join(""); //joins the array together without quotations
        word.textContent = preChange; 
 
 }

function change(array){
    let shflChosen = []; //line 28- is used to shuffle the array and search to see if characters are already in our array or not
    let usedIndexes = [];

    let chgdWord;
    let i = 0;
    while (i < array.length){
        let randomIndex = Math.floor(Math.random() * array.length);

        if (!usedIndexes.includes(randomIndex)){ //checks if its false that used index includes the random index
            shflChosen.push(array[randomIndex]); // if its true that its false this gets pushed into the new array
            usedIndexes.push(randomIndex);// adds this to used Indexes so that it can't be searched twice (or more)
            i++;//adds to stop the loop
        }
    }
    chgdWord = (shflChosen.join("")).slice(0, 9);
    changedWord.textContent = chgdWord;
    
}

