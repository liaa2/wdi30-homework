/*
Create a function called fixStart.

It should take a single argument, a string,
and return a version where all occurences of
its first character have been replaced with '*',
except for the first character itself.

You can assume that the string is at least one character long.
*/

const fixStart = function(string) {
  //get first letter
  const firstLetter = string.substr(0,1);
  //replace all occurences of firstLetter
  const restOfString = string.substr(1);
  const newString = firstLetter + restOfString.replace(firstLetter, "*")

  return string;
}

const answer = fixStart("babble");
console.log(answer);
