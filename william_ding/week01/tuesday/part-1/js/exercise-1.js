/*
Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
*/

const squareNumber = function (num) {
  return num * num;
}

const baseNumber = 3;
const squared = squareNumber(baseNumber);
console.log(`The result of squaring the number ${ baseNumber } is ${ squared }.`);
