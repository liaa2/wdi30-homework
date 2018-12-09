/*
Homework: The Word Guesser
You'll create a simple word guessing game where the user
gets infinite tries to guess the word (like Hangman without
the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word
(e.g. 'F', 'O', 'X'), and one to hold the current guessed letters
(e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

Write a function called guessLetter that will:

Take one argument, the guessed letter.

Iterate through the word letters and see if the guessed letter is in there.

If the guessed letter matches a word letter, changed the guessed
letters array to reflect that.

When it's done iterating, it should log the current guessed
letters ('F__') and congratulate the user if they found a new letter.

It should also figure out if there are any more letters that
need to be guessed, and if not, it should congratulate the user
for winning the game.

Pretend you don't know the word, and call guessLetter multiple
times with various letters to check that your program works.
*/

const wordToGuess = ['m', 'o', 'o'];
const guesser = ['_', '_', '_'];
const userInput = [];
let numOfGuesses = 1;
const totalAllowedGuesses = 6;

const guessLetter = function(letter) {
  // check number of guesses
  if (totalAllowedGuesses === numOfGuesses) {
    console.log("You lose"); // \n0\n/|\\\\n/\\
  } else {
    if (userInput.includes(letter)) {
      console.log("You've guessed that letter already");
    } else {
    let succeeded = false;
      // iterate through the word letters
      for (let i = 0; i < wordToGuess.length; i++) {
        // check if guessed letter is in the word
        if (letter === wordToGuess[i]) {
          // change guessed letters
          guesser[i] = wordToGuess[i];
          console.log("You found a letter");
          succeeded = true;
          // console.log(`You guessed a letter - well done! Now you have ${ guesser }`);
        }
      }
        if (!succeeded) {
          numOfGuesses++;
          console.log("Wrong letter");
          console.log(`Remaining chances: ${ totalAllowedGuesses - numOfGuesses }`);
        }
      }
    userInput.push(letter);
    console.log(`${ guesser }`);
    if (!guesser.includes('_')) {
      console.log("YOU WIN THIS SILLY LITTLE GAME");
    }
  }
};
