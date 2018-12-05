/* Write a function called areaOfCircle that will take one argument (the radius),
 calculate the area based on that, and return the result. It should also log a string like
 "The area for a circle with radius 2 is 12.566370614359172."
 Bonus: Round the result so there are only two digits after the decimal. */

function areaOfCircle(radius) {
    let area = radius * radius * Math.PI;
    return `The area for the circle with ${radius} is ${area.toFixed(2)}.`;
}

console.log(areaOfCircle(2));
console.log(areaOfCircle(6));
console.log(areaOfCircle(4));
