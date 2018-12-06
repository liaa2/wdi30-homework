/*

Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
substring with 'good' and return the result.

If it doesn't find 'not' and 'bad' in the right sequence (or at all),
just return the original sentence.

*/

const notBad = function(string) {
  // find first appearance of the substring 'not' and 'bad'
  let indexOfNot = string.indexOf('not');
  let indexOfBad = string.indexOf('bad');
  // if 'bad' follows 'not'
  if (indexOfNot < indexOfBad) {
    // replace 'not'...'bad' with 'good'

    // return result
    return string;
  } else {
    // else return original string
    return string;
  }
}

const answer = notBad("This dinner is not too bad");
console.log(answer);
