console.log("hello");

/*
The Calculator
Part 1
Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.
*/

const squareNumber = function (number1) {
  const sqNumber= number1 * number1;
  console.log(`The result of squaring the number ${number1} is ${sqNumber}.`);
  return sqNumber;
};

const squareOfSeven = squareNumber(7);

const halfNumber = function (number2) {
  const halfNum = number2 / 2;
  console.log(`Half of ${number2} is ${halfNum}`);
  return halfNum;
};

const percentOf = function (number3, number4) {
  const percent_of = (number3 / number4) * 100; // Percent = First number divided by the second number * 100
  console.log(`${number3} is ${percent_of}% of ${number4}`);
  return percent_of;
};

const areaOfCircle = function (radius) {
  const circleArea = Math.PI * radius * radius;
  console.log(`The area for a circle with radius ${radius} is approximately ${circleArea.toFixed(2)}`);
  return circleArea;
};

const areaOfCircleFour = areaOfCircle(4);
