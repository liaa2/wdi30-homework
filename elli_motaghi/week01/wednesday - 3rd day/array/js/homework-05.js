// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(string) {
    return string.split("").reverse().join(""); // first split it to letters and then reversing and then join them together.
}

console.log(reverseString('elham'));
console.log(reverseString('rainbow'));