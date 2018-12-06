/*
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
*/

const areaOfCircle = function (radius) {
  return Math.PI * radius * radius;//area is pi * r^2
}

const radius1 = 13;
const area = areaOfCircle(radius1);
console.log(`The area for a circle with radius ${ radius1 } is ${ area.toFixed(2) }.`)
