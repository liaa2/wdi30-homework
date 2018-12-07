// // Array and Functions Bonus Material
// //
// // Define a function maxOfTwoNumbers that takes two numbers as arguments
// // and returns the largest of them. Use the if-then-else construct available in Javascript.
// // You'll have to remember your pre-work, or do some googling to figure this out.
//
const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2){
    return num1;
  } else {
    return num2;
  }
};

console.log(maxOfTwoNumbers(5, 7));
console.log(maxOfTwoNumbers(12, 16));
console.log(maxOfTwoNumbers(35, 10));
//
// // Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
//
const maxOfThree = function (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};

console.log(maxOfThree(3, 6, 1));
console.log(maxOfThree(17, 60, 12));
console.log(maxOfThree(25, 7, 10));
//
//
// // Write a function that takes a character (i.e. a string of length 1) and
// // returns true if it is a vowel, false otherwise.
//
const character = function (string) {
  if (string[0] === 'a' | string[0] === 'e' | string[0] === 'i' | string[0] === 'o' | string[0] === 'u') {
    return true;
  } else {
    return false;
  }
};

console.log(character('p'));
console.log(character('i'));
console.log(character('k'));
console.log(character('u'));

//
//
// // Define a function sumArray and a function multiplyArray that sums and multiplies
// // (respectively) all the numbers in an array of numbers.
// // For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
//
const sumArray = function (numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(sumArray([1, 2, 3, 4]));

const multiplyArray = function (numbers) {
 var total = 1; //must start at one to avoid multiple of 0
 for (var i = 0; i < numbers.length; i ++){
  total = (total * numbers[i]);
  }
  return total;
}

console.log(multiplyArray([1, 2, 3, 4]));
//
//
// // Define a function reverseString that computes the reversal of a string.
// // For example, reverseString("jag testar") should return the string "ratset gaj".
//
const reverseString = function (string) {
  var text = "";
  for (var i = string.length - 1; i >= 0 ; i--) {
    text += string[i];
  }
  return text.toLowerCase();
}

console.log(reverseString('Anthony'));

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

const findLongestWord = function (string) {
  const stringArray = string.split(" ");
  const orderedArray = stringArray.sort((a, b) => {
    return a.length < b.length;
  });

  return longestWord[0].length;

console.log(findLongestWord(apples, bananas, pineapples, strawberries));
}


// Write a function filterLongWords that takes an array of words and an
// number i and returns the array of words that are longer than i.

const longWords = ['hello', 'supercalafragalisticexpialadotious', 'hgfjhfjfdgjfdjgfdhgf'];

const filterLongWords = function (array, number) {
let longest = 0;
let word = "";
let newArray = [];

for (let i = 0; i < array.length; i ++) {
  if (number < array[i].length) {
    // longest = longWords[i].length;
    word = longWords[i];
    console.log(array);
  }
}
return word;

}
