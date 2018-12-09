/* 

DrEvil

Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)

*/

function drEvil(dollars){
  if(dollars >= 1000000){
    console.log(`${dollars} dollars (pinky)`);
  } else {
    console.log(`${dollars} dollars`)
  };
}

drEvil(10);
drEvil(1000000)


/*

MixUp

Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!

*/

function mixUp(string1, string2){
  let sub1 = string1.substr(0,2) + string2.slice(2);
  let sub2 = string2.substr(0,2) + string1.slice(2);
  
  console.log(`${sub2} ${sub1}`)
}

mixUp('John', 'Doe');

/*

FixStart

Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'

*/

function fixStart(x){
  var firstLetter = x[0];
  
}

fixStart("babble");