// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

//Welcome info.
console.log("Word Guess Game \n\n Rules: \n Play by calling guessLetter() function \n It takes any single letter as argument \n You get reward when guessed a corrert letter \n You lose reward when guessed a wrong letter \n\n The Game will end: \n When you got the correct word \n When your hangman can't take it anymore \n\n Refresh the page the restart the game\n GOOD LUCK");
// Declare global variables.
const word = ["S","Y","D","N","E","Y"];
const answer = word.join("");
let reward = 0;
let usedGuess = [];
let hangmanNumber = 0;

const guessLetter = function (j) {
  j = j.toUpperCase();
// Check conditions to decide whether the user has lost or won.
  if (hangmanNumber >= 6) {
    console.log("You have lost, refresh the page to restart the game.");
    return;
  }
  if (word.length === 0) {
    console.log("Congrats, you have won the game! Refresh the page to restart the game.");
    return;
  }
// Check if the guess has already been used, and add it to usedGuess array if it has not been used.
  if (usedGuess.indexOf(j) !== -1) {
    console.log(`You have guessed ${ j } already! Try use a different letter.`)
    return;
  }
  usedGuess.push(j);
// Set a counter to count matches, and generate a random reward amount.
  let matchCounter = 0;
  const rewardAmount = Math.ceil(Math.random() * 9) + 1;
// Loop through the word array to find matches.
  for (var i = 0; i < word.length; i++) {
    if (j === word[i]) {
      word.splice(i, 1);
      matchCounter ++;
      }
    }
// Setup outputs for a wrong guess.
    if (matchCounter === 0) {
      console.log("Wrong guess, try again!");
      reward -= rewardAmount;
      hangmanNumber += 1;
      //Setup logic to avoid negative reward.
      if (reward < 0) {
        reward = 0;
        console.log(`Wrong guess! Subtract $${ rewardAmount } from your reward money. You now have $${ reward }.`)
      } else {
        console.log(`Wrong guess! Subtract $${ rewardAmount } from your reward money. You now have $${ reward }.`)
      }
// Setup outputs for one correct guess.
    } else if (matchCounter === 1){
      console.log("Congrats, you have found a new letter!");
      reward += rewardAmount;
      console.log(`Good try! Add $${ rewardAmount } to your reward money. You now have $${ reward }.`)
      hangmanNumber -= 1;
      if (hangmanNumber < 0) {
        hangmanNumber = 0;
      }
// Setup outputs for multiple correct guesses.
    } else {
      console.log(`Congrats, you have found ${ matchCounter } new letters!`);
      reward += rewardAmount * matchCounter;
      console.log(`Good try! Add ${ matchCounter } times of $${ rewardAmount } to your reward money. You now have $${ reward }.`)
      hangmanNumber -= 1;
      if (hangmanNumber < 0) {
        hangmanNumber = 0;
      }
    }
// Info user the game has been won.
    if (word.length === 0) {
      console.log(`Congrats, you have won the game! The answer is ${ answer }. Your final reward is $${ reward }.`);
    }
// Hangman number
    console.log(hangmanNumber);
    if (hangmanNumber >= 6) {
      console.log("You have lost, refresh the page to restart the game.");
    }
}
