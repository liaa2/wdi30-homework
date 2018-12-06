// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.


//1 function maxOfTwoNumbers
const maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

//2 function maxOfThree
const maxOfThree = function(num1, num2, num3) {
  let maxNum;
  if (num1 > num2) {
    if (num1 > num3) {
      return num1;
    }
    else {
      return num3;
    }
  }
  else {
    if (num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  }
}


//3 function vowelCheck
const vowelCheck = function (i) {
  const vowel = ["a", "e", "i", "o", "u"];
  if ( vowel.indexOf(i) !== -1 ) {
    return true;
  } else {
    return false;
  }
}


//4.1 function sumArray
const sumArray = function (arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


//4.2 function multiplyArray
const multiplyArray = function (arr) {
  let product = 1;
  for (var i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
  return product;
}

//5 function reverseString
const reverseString = function (string) {
  let newString = "";
  for (var i = string.length; i > 0; i--) {
    newString += string.substring(i - 1, 1);
  }
  return newString;
}

//6 function findLongestWord
const findLongestWord = function (arr) {
  let longest = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

//7 function filterLongWords
const filterLongWords = function (arr, num) {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
