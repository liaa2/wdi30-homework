// Markov Text Generator
//
// A Markov Chain is a mathematical structure that shows you how to transition from one state of a system to another in a probabalistic way. Don't panic! For our purposes this just means something like a lookup table that contains each state in a system, and for each state it lists the other states which that state can move to, with a probability for each of them; the probability tells you how likely each of the next states are to be the next state that the system moves to.
//
// So for example, if I am in the state of "Watching TV", I might transition to another state called "Falling Asleep" with a 20% probability, "Change the Channel" with a 30% probability, "Go to Fridge" with a 10% probability, and "Continue Staring Glassy-Eyed at the Screen Without Really Seeing Anything" with a 40% probability. Each of these states would have their own list of other states to transition to; so the aforementioned "Go to Fridge" state might transition to "Get Beer" with a 35% probability, and "Get Snacks" with a 65% probability.
//
// In this way we can specify the likely behaviour of a system, and then simulate e.g. a night of TV viewing by starting at one of the states and generating a random number to decide which state to move to next, and so on.
//
// One interesting use of Markov chains is to analyse a large sample of text and then generate new pieces of text which are magically in the "style" of the analysed text. In this case our states are the individual words of the text, and the next state for each word is the list of words that tend to immediately follow that word, with a probability for each word which tells us how often the following word appears after the current word.
//
// Still with me? YOUR TASK is to create a page in HTML and Javascript which loads a local text file using AJAX (it should be a book or at least something coherent, 250Kb to 1Mb; Project Gutenberg is your friend), then from the words of the text builds a Markov table: i.e., an object whose keys are each word in the text, and for each key its value is an array which lists all the words that follow that word. Don't worry about storing numbers which represent the probabilities of each following word! Just adding the following words to an array, allowing duplicates, will do what we want.
//
// Having completed the analysis, the next step is generation! For a random starting word, generate a new text of 60-100 words by starting the process with a random word and then choosing a next word in the sequence from your Markov table.
//
// Voilà! Instant fresh content in the style of any of the great masters!
//
// STOP CRYING, THIS IS NOT AS HARD AS IT SOUNDS YOU BIG BABIES
//
// Possible steps to a solution:
//
// Have your page load the contents of a text file into a single variable using AJAX (you will need to run a local server so you can open the file as a URL). This is a quick google search away! hint use a search term involving 'simple http server'
// Separate all the text in the loaded file into an array of words.
// Iterate over the array and add a key to your lookup table for each word, and an empty array as the key's value (if it's not already set as a key); get the word that follows this word and push it onto the array of words for this key (i.e. and words in this array are words which have been found to follow this word in your original text). Repeat.
// Pick a random starting word, and get the next word by randomly picking one of the words in its array of following words (if we've allowed duplicates in this array, words that were found to follow more often will have a higher probability of being picked). Repeat!


let markov = {};
let beginnings = [];

const bookFileName = '../markov.txt';

// build markov chain by iterating over the given Text

const makeMarkov = function(text) {
  // split HUGE string into an array of individual words
  const words = text.split(/[ ;\-\n]+/);
  for (var i = 0; i < words.length; i++) {
    let word = words[i];

    if (!markov[word]) {
      markov[word] = [];
    } // if

    let nexWord = words[ i + 1 ];
    markov[word].push(nextWord);

    if (word.match(/^[A-Z][a-z]/)) {
      beginnings.push(word);
    } // if
  } // for
};

// Helper function to return a random number between 0 and max.

const randy = function(max) {
  return Math.floor(Math.random() * max);
}

// Helper to return a random element form array
const choose = function(arr) {
  return arr[randy(arr.length)];
}

// generate a new string from our markov chain od the speciffied length.
// we can keep using the dame markoc chain lookup we created to generate as much new text as we want and it will all have the same statistcial relation to the original text.

const generate = function (length) {
  let next  = choose(beginnings);
  let output = next;

  for (var i = 0; i < length; i++) {
    let word = choose(markov[next]);
    output += " " + word;
    next = word
  }; // for
  return output;
}

$(document).ready(function(){
  // load our text file over AJAX
  //NOTE: for this you will have to run a server on your laptop.
  //i.e nu typing the commane 'python -m SimpleHTTPServer' in this folder

  $.ajax(bookFileName)
  .done(function(response) {
    console.log(response);
    // when ytex is loaded, pass it t o our Marko-henerating dunction
    makeMarkov(response);

    // having constructed out markov chain lookup table, use it to generate some new text;

    let nextText = generate(60);
    let $el = $('<p>').text(nextText);
    $('#output').append($el)
  })
  .fail(function(err) {
    console.log('Error:', err);
  })

  // listen for keypresses ,and generate new text when enter is pressed

  $(document).keypress(function(e){
    if(e.keycode === 13) {
      let nextText = generate(60);
      let $el = $('<p>').text(nextText);
      $('#output').append($el)
    } // if
  }) // keypress
});
