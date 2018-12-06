console.log('       Welcome to hangman.')
console.log('      Play at your own risk.')
console.log('    *******INSTRUCTIONS*******')
console.log("type guessLetter('YOUR-LETTER-HERE')")
console.log('            !GOODLUCK!')

console.log(`        ---------`)
console.log(`        |       |`)
console.log(`        |       |`)
console.log(`        |      ( )`)
console.log(`        |      /|\\`)
console.log(`        |      / \\`)
console.log(`        |`)
console.log(`        |   |-------|`)
console.log(`        -----------------`)

// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

const lettersOfWord = ['F', 'O', 'G']
const currentLetters = []
let remaining;
let hangman = 7
const testArray = ['_', '_', '_']

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
const guessLetter = function(letter) {
  // Iterate through the word letters and see if the guessed letter is in there.
  letter = letter.toUpperCase()
  for (var i = 0; i < lettersOfWord.length && !currentLetters.includes(letter); i++) {
    // If the guessed letter matches a word letter, changed the guessed letters array to reflect that.

    if (lettersOfWord.includes(letter))
      for (var i = 0; i < lettersOfWord.length; i++) {

        // If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
        if (letter === lettersOfWord[i] && hangman > 0) {
          currentLetters.push(letter)
          // finds the index of the letter within the lettersOfWord array;
          const index = lettersOfWord.findIndex(find => find === letter);
          // replaces the current letter found with the corresponding spot on test array
          testArray.splice(index, 1, letter);
          console.log(`__________________________`)
          console.log(` `)
          console.log(` `)
          console.log(`You found a match! "${letter}". You have ${remaining} letters left`)
          console.log(` `)
          remaining = lettersOfWord.length - currentLetters.length
          // When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
          console.log(`Letters remaining: ${testArray}`)
          console.log(` `)
          console.log(` `)
          console.log(`__________________________`)

          // If the remaining hits 0 the player win the game.
          if (remaining === 0) {

            console.log('──────────────────────▒████▒────────────')
            console.log('───────────────────░█████▓███░──────────')
            console.log('─────────────────░███▒░░░░░░██──────────')
            console.log('────────────────▒██▒░░░▒▓▓▓▒░██─────────')
            console.log('───────────────▓██░░░▒▓█▒▒▒▓▒▓█─────────')
            console.log('──────────────▓█▓─░▒▒▓█─────▓▓█░────────')
            console.log('─────────────▓█▒░▒▒▒▒█──▓▓▒▒─▓█▒────────')
            console.log('────────────▒█▒░▒▒▒▒▓▒─▒▓▒▓▓─▒█░────────')
            console.log('────────────█▓░▒▒▒▒▒▓░─▓▒──░░▒█░────────')
            console.log('───────────██░▒▒▒▒▒▒█──▓──░▓████████────')
            console.log('──────────░█▒▒▒▒▒▒▒▒▓░─█▓███▓▓▓▓██─█▓───')
            console.log('────────▒▓█▓▒▒▒▒▒▒▒▒▓███▓▓████▓▓██──█───')
            console.log('──────░███▓▒▒▒▒▓▒▒▒████▒▒░░──████░──██░─')
            console.log('──────██▒▒▒▒▒▒▒▒▒▓██▒────────▒██▓────▓█─')
            console.log('─────▓█▒▒▒▒▒▒▒▒▓█▓─────▓───▒░░▓──▓────▓█')
            console.log('─────██▒▓▒▒▒▒▒█▓──────▒█▓──▓█░▒──▒░────█')
            console.log('─────██▒▒▓▓▓▒█▓▓───░──▓██──▓█▓▓▓█▓─────█')
            console.log('─────▓█▒██▓▓█▒▒▓█─────░█▓──▒░───░█▓────█')
            console.log('─────░██▓───▓▓▒▒▓▓─────░─────────▒▒─░─░█')
            console.log('──────▓█──▒░─█▒▓█▓──▒───────░─░───█▒──█▒')
            console.log('───────█──░█░░█▓▒──▓██▒░─░─░─░─░░░█▒███─')
            console.log('───────█▒──▒▒──────▓██████▓─░░░░─▒██▓░──')
            console.log('───────▓█──────────░██▓▓▓██▒─░──░█▒─────')
            console.log('────────██▒─────░───░██▓▓▓██▓▒▒▓█▒──────')
            console.log('─────────░████▒──░───▒█▓▓▓▓▓████▓───────')
            console.log('────────▒▓██▓██▒──░───▓█████▓███────────')
            console.log('──────▒██▓░░░░▓█▓░────░█▒█▒─▒▓█▓────────')
            console.log('─────▓█▒░░▒▒▒▒▒▓███▓░──▓█▒─▒▓▓█─────────')
            console.log('────░█▒░▒████▓██▓▓▓██▒───░▓█▓█░─────────')
            console.log('────▓█▒▒█░─▒───▓█▓▓▓▓▓▓▒▒▓█▓█▓──────────')
            console.log('────▓█▒█░───────██▓▓▓▓▓█▓▓█▓██──────────')
            console.log('────▒█▓▓────────░██▓██▓▓▓▓▓▓▓▓█─────────')
            console.log('─────██░────▓▓────█░─█▓▓▓▓▓▓▓─▒█████────')
            console.log('─────██░───░──────▓░─▓▓▓▓▓▓▓█─▒█▒░▒██───')
            console.log('────▓█░▓░──▓▓────▒█░─█▓▓▓▓▓▓▓█▒─░░░▒██──')
            console.log('────█─▒██─░──────████▓▓▓▓▓▓▓█▓─░▒▒█▓▓█░─')
            console.log('───▓█─▓▒▓▒░░────▓█▓▓▓▓▓▓▓▓▓▓█░░▒▓█░──▒█─')
            console.log('───▒█░█▒▒█▒───░▓█▓▓▓▓▓▓▓▓▓▓█▓░▒▓▓──▓█▓█─')
            console.log('───█▓▒▓▒▒▓██████▓▓▓▓▓▓▓▓▓▓▓█▒▒▓▓─░█▓▒▒█░')
            console.log('───█░▓▓▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▒▓─▒█▒▒▒▒█─')
            console.log('──▒█─█▒▒▒▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▒▓─▒█▒▒▒▒██─')
            console.log('──▓█─█▒▒▒▒█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▒▓▒░█▒▒▒░▓█──')
            console.log('──▓█─█▒▓▒▒▓█▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▒▓░▓░░░░▒█░──')
            console.log('──▒█─▓▓▓▓▒▓█▓▓▓▓▓▓▓▓█████▓▓▓▓▒▓░░─▒█▒───')
            console.log('───█▒▓▓▓▓▓▒▓██████████░░██▓█─▒█▓▒▓█░────')
            console.log('───▓█▒█▓▓▓▓▒▓██░─░▒░─────██▒░▓▓▓▒██─────')
            console.log('────████▓▓▓██░───────────▓█░▓▒░░▓█░─────')
            console.log('──────░█████░─────────────██▓─▒██░──────')

            console.log('       !!! CONGRATULATIONS !!!')
            console.log('       !!! YOU WON THE GAME !!!')
            console.log(`      !!! THE WORD WAS ${lettersOfWord} !!!`)
            console.log(`      __________________________`)
            break;
          }
        }
        //if hangman > 0 the game continues but you lose one life
      } else {
        hangman--
        if (hangman > 0) {
          console.log('__________________________`')
          console.log('')
          console.log('')
          console.log(`Wrong.. you have ${hangman} more tries before you drop.`)
          console.log('')
          console.log('')
          console.log('__________________________`')
          break;
          //if hangman <= 0 the game is over and you lose.
        } else {
          console.log('')
          console.log('')
          console.log('**Lights out**')
          console.log('  GAME OVER')
          console.log('')
          console.log('     ______')
          console.log('  .-"      "-.')
          console.log(' /            \\')
          console.log('|              |')
          console.log('|,  .-.  .-.  ,|')
          console.log('| )(__/  \__)(  |')
          console.log('|/     /\\     \\|')
          console.log('(_     ^^     _)')
          console.log(' \\__|IIIIII|__/')
          console.log('  | \IIIIII/  |')
          console.log('  \\          /')
          console.log('   `--------`')
          console.log('')
        }
        break;
      }
  }
}

//function for creating arrays because I am lazy.
const arrayOfArrays = [];
const createArray = function(word) {

  for (let i = 0; i < word.length; i++)
    arrayOfArrays.push(`${word[i]}`)
}
// currentLetter has been played;
// for (var i = 0; i < lettersOfWord.length; i++) {
//   if (currentLetters === letter)
//   console.log('You have already guessed this letter')
//   break;
//   }

// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
