/*
Write a function that will take one argument (a number) and perform the following operations,
using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
*/
//Part2
const callFunctionspart2 = function(number){
  const half = halfNumber(number);
  const sqr = squareNumber(half);
  const area = areaOfCircle(sqr);
  const per = callperCentof(area,squareNumber(area));
};

callFunctionspart2(5);
