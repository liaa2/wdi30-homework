/*
Create a function called DrEvil.

It should take a single argument, an amount,
and return ' dollars', except it will add '(pinky)'
at the end if the amount is 1 million.
*/

const drEvil = function(amount) {
  if (amount === 1000000) {
    return `${ amount } dollars (pinky)`
  } else {
    return `${ amount } dollars`
  }
}

const answer = drEvil(100);
console.log(answer);
