function squareNumber(num){
  let result = Math.pow(num, 2);
  return `the result of squaring the number ${num} is ${result}`;
}
console.log(squareNumber(3));

function halfNumber(num){
  let result = num/2;
  return `The result of halving ${num} is ${result}`;
}

console.log(halfNumber(5));

function percentOf(num1, num2){
  let percent = (num1/num2) * 100;
  return `${num1} is ${percent}% of ${num2}`;
}

console.log(percentOf(9, 10));

function areaOfCircle(r){
  let A = (Math.PI * Math.pow(r,2)).toFixed(2);
  return `The area for a circle with radius ${r} is ${A}`;
}

console.log(areaOfCircle(2));

     
/*

Part 2

Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

    Take half of the number and store the result.
    Square the result of #1 and store that result.
    Calculate the area of a circle with the result of #2 as the radius.
    Calculate what percentage that area is of the squared result (#3).

*/

function bohemianRhapsody(x){
  let half = x / 2;
  let squared = Math.pow(half, 2);
  let areaOfCircle = (Math.PI * Math.pow(squared,2)).toFixed(2);
  let percentage = ((areaOfCircle/squared) * 100).toFixed(2);
  
  return `${areaOfCircle} is ${percentage}% of ${squared}`;
}

console.log(bohemianRhapsody(10));

