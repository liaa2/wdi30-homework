// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3) {
    let comparedOne;
    let largest;
    if (num1 > num2) {
        comparedOne = num1;
    } else {
        comparedOne = num2;
    }
    if (comparedOne > num3) {
        largest = comparedOne;
    } else {
        largest = num3;
    }

    return largest;
};

console.log(maxOfThree(9, 2, 7));
console.log(maxOfThree(12, 43, 56));
console.log(maxOfThree(18, 72, 25));