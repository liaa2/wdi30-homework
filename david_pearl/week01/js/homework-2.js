/*

Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).

*/

const squareNumber = function (number1) {
  const sqNumber= number1 * number1;
  //console.log(`The result of squaring the number ${number1} is ${sqNumber}.`);
  return sqNumber;
};

const halfNumber = function (number2) {
  const halfNum = number2 / 2;
  //console.log(`Half of ${number2} is ${halfNum}`);
  return halfNum;
};

const percentOf = function (number3, number4) {
  const percent_of = (number3 / number4) * 100; // Percent = First number divided by the second number * 100
  //console.log(`${number3} is ${percent_of}% of ${number4}`);
  return percent_of;
};

const areaOfCircle = function (radius) {
  const circleArea = Math.PI * radius * radius;
  //console.log(`The area for a circle with radius ${radius} is approximately ${circleArea.toFixed(2)}`);
  return circleArea;
};

const superCalc = function (oneNumber) {
  const half = halfNumber(oneNumber); // half your chosen number
  console.log(`Half your chosen number is ${half}.`);

  const halfSquared = half * half; // (half your chosen number) squared
  console.log(`Half your chosen number squared is ${halfSquared}.`);

  const halfOneNumberCircle = areaOfCircle(halfSquared); // Area of a circle with a radius of (half your chosen number) squared
  console.log(`The area of a circle with a radius of half your chosen number squared is approximately ${halfOneNumberCircle.toFixed(2)}.`);

  const percentageAreaOfSquaredResult = percentOf(halfOneNumberCircle, halfSquared);
  console.log(`The percentage area of the circle to the square is ${percentageAreaOfSquaredResult}`);
};
