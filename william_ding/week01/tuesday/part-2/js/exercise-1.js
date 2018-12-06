/*
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).

*/

const squareNumber = function (num) {
  return num * num;
}

const halfNumber = function (num) {
  return num / 2;
}

const percentOf = function (num1, num2) {
  return num1 / num2 * 100;
}

const areaOfCircle = function (radius) {
  return Math.PI * radius * radius;//area is pi * r^2
}

const aNumber = 100;
const theResult = percentOf(areaOfCircle(squareNumber(halfNumber(aNumber))),squareNumber(halfNumber(aNumber)));

console.log(`${ theResult.toFixed(4) }%`);
