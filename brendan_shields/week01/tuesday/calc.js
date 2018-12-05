//square
// Write a function called squareNumber that will take one argument (a number),
//square that number, and return the result. It should also log a string like
//"The result of squaring the number 3 is 9."

const squareNumber = function(number) {
  const result = number * number;
  return result;
};
console.log(`Input squared is ${squareNumber(4)}`);

//half
// Write a function called halfNumber that will take one argument (a number),
// divide it by 2, and return the result. It should also log a string like
// "Half of 5 is 2.5.".
const halfNumber = function(number) {
  const result = number / 2;
  return result;
}
console.log(`Half of input is ${halfNumber(5)}`);

//percent
// Write a function called percentOf that will take two numbers,
//figure out what percent the first number represents of the second number,
//and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function(num1, num2) {
  const result = (num1 / num2 * 100);
  return result;
}
console.log(percentOf(3, 4))

//area
// Write a function called areaOfCircle that will take one argument (the radius), calculate
//the area based on that, and return the result. It should also log a string like "The area for
// a circle with radius 2 is 12.566370614359172."
const areaOfCircle = function(radius) {
  const result = Math.PI * radius ** 2;
  return result;
}
console.log(Math.round(areaOfCircle(5) * 100) / 100)


//bonus
// Bonus: Round the result so there are only two digits after the decimal.

const inception = function(input) {
  const half = halfNumber(input);
  const square = squareNumber(half);
  const area = areaOfCircle(square);
  const percentage = percentOf(area, square);
  return percentage;
}

console.log(inception(25))
