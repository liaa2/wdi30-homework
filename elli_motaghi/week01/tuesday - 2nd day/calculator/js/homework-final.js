/* Write a function that will take one argument (a number) and perform the following operations,
 using the functions you wrote earlier1:
 Take half of the number and store the result.
 Square the result of #1 and store that result.
 Calculate the area of a circle with the result of #2 as the radius.
 Calculate what percentage that area is of the squared result (#3). */


 function halfNumber(number) {
    let halfNum = number / 2;
    return halfNum;
}

function squareNumber(number) {
    let square = number * number;
    return square;
}

function percentOf(number1, number2) {
    let getPercent = (number1 / number2) * 100;
    return getPercent.toFixed(2);
}

function areaOfCircle(radius) {
    let area = radius * radius * Math.PI;
    return area.toFixed(2);
}

function final(number) {
    const half = halfNumber(number);
    const squared = squareNumber(half);
    const area = areaOfCircle(squared);
    const percent = percentOf(squared, area);
    return {number, half, squared, area, percent};
}

console.log(final (5));
console.log(final (8));
console.log(final (12));

