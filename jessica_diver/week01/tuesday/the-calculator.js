//PART 1

// Write a function called squareNumber that will take one argument (a number),
// square that number, and return the result. It should also log a string like
// "The result of squaring the number 3 is 9."

const squareNumber = function (number) {
  const result = number * number;
  console.log(`The result of squaring the number ${number} is ${result}.`);
  return result; //need to add this for part 2 to use the result
};

squareNumber(4);

// Write a function called halfNumber that will take one argument (a number),
// divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function (number){
  const result = number / 2;
  console.log(`Half of ${number} is ${result}`);
  return result; //need to add this for part 2 to use the result
};

halfNumber(10);

// Write a function called percentOf that will take two numbers,
// figure out what percent the first number represents of the second number, and return the result.
//  It should also log a string like "2 is 50% of 4."

const percentOf = function (num1, num2) {
  const result = (num1 / num2) * 100;
  console.log(`${num1} is ${result}% of ${num2}.`)
  return result; //need to add this for part 2 to use the result
};

percentOf(7, 10);

// Write a function called areaOfCircle that will take one argument (the radius),
// calculate the area based on that, and return the result.
// It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

// Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle = function (radius) {
  const result = Math.PI * radius * radius;
  console.log(`The area for a circle with radius ${radius} is ${result.toFixed(2)}`);
  return result;
};

areaOfCircle(5);

//PART 2

const funct1 = function (number) {
  const resultHalf = halfNumber(number);
  const resultSquare = squareNumber(resultHalf);
  const resultAreaCircle = areaOfCircle(resultSquare);
  const resultPercent = percentOf(resultAreaCircle, resultSquare);
};

funct1(5);
