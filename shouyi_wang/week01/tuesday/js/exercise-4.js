/*
FixStart
Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'
*/


const fixStart = function(str) {
  let firstChar = str.charAt(0);
  return firstChar + str.slice(1).replace(new RegExp(firstChar, 'g'), '*');
}


console.log(fixStart("eneral Assembly"));
