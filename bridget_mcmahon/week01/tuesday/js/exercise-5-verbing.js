/*
Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end,
unless it already ends in 'ing', in which case it should add 'ly' instead.

If the string length is less than 3, it should leave it unchanged.
*/

const verbing = function(string) {
  //if string is at least 3 characters long
  if (string.length >= 3) {
    //and if string ends in 'ing'
    if (string.substr(string.length - 3) === "ing"){
      //add 'ly'
      return `${ string }ly`;
    //if string doesn't end in 'ing'
    } else {
      //add 'ing'
      return `${ string }ing`;
    }
  //if string is less than 3 characters long, return string
  } else {
    return string;
  }
}

const answer = verbing("swim");
console.log(answer);
