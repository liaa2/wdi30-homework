// Write a function called squareNumber that will take one argument (a number), square that number,
// and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(number) {
    let square = number * number;
    return `The result of squaring the number ${number} is ${square}.`
}

console.log(squareNumber(2));
console.log(squareNumber(6));
console.log(squareNumber(9));
