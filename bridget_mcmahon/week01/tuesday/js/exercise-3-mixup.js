/*
Create a function called mixUp.

It should take in two strings, and return the concatenation
of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each.

You can assume that the strings are at least 2 characters long.
*/

const mixUp = function(stringOne, stringTwo) {
  wordOne = stringTwo.slice(0,2) + stringOne.slice(2);
  wordTwo = stringOne.slice(0,2) + stringTwo.slice(2);
  return `${ wordOne }, ${ wordTwo }`;
}

const answer = mixUp("dog", "dinner");
console.log(answer);
