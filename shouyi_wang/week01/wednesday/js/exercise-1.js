/*
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
*/

const maxOfTwoNumbers = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else {
    return num2;
  }
}

/*
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/

const maxOfThree = function (num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  }
  if (num2 >= num1 && num2 >= num3) {
    return num2;
  }
  if (num3 >= num1 && num3 >= num2) {
    return num3;
  }
}

console.log(maxOfThree(4, 9, 3.7))


/*
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/

const isVowel = function (char) {
  if( char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  }
  else {
    return false;
  }
}

console.log(isVowel('f'));

/*
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

const sumArray = function (numArray) {
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += Number(numArray[i]);
  }
  return sum;
}

const multiplyArray = function (numArray) {
  let multiply = 1;
  for (let i = 0; i < numArray.length; i++) {
    multiply *= Number(numArray[i]);
  }
  return multiply;
}

console.log(sumArray([3, 4, 7, 9]));
console.log(multiplyArray([3, 4, 7, 9]));

/*
Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

const reverseString = function (str) {
  let strArray = str.split("");
  let reverseArray = strArray.reverse();
  let newStr = reverseArray.join("");
  return newStr;
}

console.log(reverseString("Hello, world!"));

/*
Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/

const findLongestWord = function (wordArray) {
  let longest = 0;
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > longest) {
      longest = wordArray[i].length;
    }
  }

  return longest;
}

/*
Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
*/

const filterLongWords = function (wordArray, num) {
  let newArray = [];
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > num) {
      newArray.push(wordArray[i]);
    }
  }

  return newArray;
}

console.log(findLongestWord(["Tom", "Isabella", "Larry", "Smiths"]));
console.log(filterLongWords(["Tom", "Isabella", "Larry", "Smiths"], 4));
