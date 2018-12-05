// Write a function called percentOf that will take two numbers, figure out what percent
// the first number represents of the second number, and return the result.
// It should also log a string like "2 is 50% of 4."

function percentOf(number1, number2) {
    let getPercent = (number1 / number2) * 100;
    return `${number1} is ${getPercent.toFixed(2)}% of ${number2.toFixed(2)}.`;
}

console.log(percentOf(5, 125));
console.log(percentOf(45, 356));
console.log(percentOf(12, 84));
