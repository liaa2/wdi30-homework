/*
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
*/


const percentOf = function (num1, num2) {
  return num1 / num2 * 100;
}

const firstNumber = 4;
const secondNumber = 7;
const percentage = percentOf(firstNumber, secondNumber);
console.log(`${ firstNumber } is ${ percentage.toFixed(2) }% of ${ secondNumber }.`);
