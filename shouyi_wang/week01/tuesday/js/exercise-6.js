/*
Not Bad
Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

const notBad = function (str) {
  var notIndex = str.indexOf('not');
  var badIndex = str.indexOf('bad');
  if (notIndex == -1 || badIndex == -1 || badIndex < notIndex)  {
    return str;
  }
  return str.slice(0, notIndex) + 'good' + str.slice(badIndex + 3);
}
