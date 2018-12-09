// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

function sumArray(array) {
    for (i = 0; i < array.length; i++) {
        const output = array.reduce((a, b) => a + b, 0); // reduce method
        return output;
    }
};

// console.log(sumArray([1, 2, 3, 4]));
// console.log(sumArray([5, 6, 7, 8]));


function multiplyArray(arr) {
    for (i = 0; i < arr.length; i++) {
        const output = arr.reduce((a, b) => a * b, 1); // reduce method
        return output;
    }
};

// console.log(multiplyArray([1, 2, 3, 4]));
// console.log(multiplyArray([5, 6, 7, 8]));
