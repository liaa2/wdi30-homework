//Part 1

// square number
const squareNumber = function(number) {
  const result = number * number;
  return result;
}
console.log(`The result of squaring ${ number } is ${ result }.`)

// squareNumber(12);

// half number
const halfNumber = function(number) {
  const result = number / 2;
  return result;
//  console.log(`Half of ${ number } is ${ result }.`);
}

// halfNumber(100);

// percentage of a number
const percentOf = function(numOne, numTwo) {
  const result = (numOne / numTwo) * 100;
  return result;
//  console.log(`${ numOne } is ${ result }% of ${ numTwo }.`)
}

// percentOf(5, 17);

// area of circle
const areaOfCircle = function(radius) {
  const result = 2 * radius * radius;
  return result;
//  console.log(`The area for a circle with a radius of ${ radius } is ${ result.toFixed(2) }`)
}

// areaOfCircle(24);

// part 2
const calculator = function(number) {
  //take half of the number and store the result
  const halfNumberResult = halfNumber(number);
  //square the result of #1 and store that result
  const squaredResult = squareNumber(halfNumberResult);
  //calculate the area of a circle with the result of #2 as the radius
  const areaResult = areaOfCircle(squaredResult);
  //calculate what percentage that area is of the squared result;
  const percentResult = percentOf(areaResult, squaredResult);
  return percentResult;
}

const answer = calculator(2);
console.log(answer);
