/*
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
*/


const halfNumber = function (num) {
  return num / 2;
}

const wholeNumber = 10;
const halfed = halfNumber(wholeNumber);
console.log(`Half of ${ wholeNumber } is ${ halfed }.`);
