// Write a function called halfNumber that will take one argument (a number),
// divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(number) {
    let halfNum = number / 2;
    return `Half of ${number} is ${halfNum}.`;
}

console.log(halfNumber (20));
console.log(halfNumber (4));
console.log(halfNumber (648));

