/*
Array and Functions Bonus Material

Define a function maxOfTwoNumbers that takes two numbers
as arguments and returns the largest of them. Use the if-then-else
construct available in Javascript. You'll have to remember your
pre-work, or do some googling to figure this out.
*/

const maxOfTwoNumbers = function(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

/*
Define a function maxOfThree that takes three numbers as arguments
and returns the largest of them.
*/

const maxOfThree = function(a, b, c) {
  if (a > b && a > c) {
    return a
  } else if (b > a && b > c) {
    return b
  }
  return c;
}

// could use the maxOfTwoNumbers function twice (recursive) to achieve the same result

/*
Write a function that takes a character (i.e. a string of length 1)
and returns true if it is a vowel, false otherwise.
*/

const isVowel = function(character) {
  if (character === "a" || character === "e" || character === "i" ||
  character === "o" || character === "u") {
    return true;
  } else {
    return false;
  }
}

/*
Define a function sumArray and a function multiplyArray that
sums and multiplies (respectively) all the numbers in an array of numbers.
For example, sumArray([1,2,3,4]) should return 10,
and multiplyArray([1,2,3,4]) should return 24.
*/

const sumArray = function(array) {
  let add = 0;
  for (let i = 0; i < array.length; i++) {
    add = add + array[i];
  }
  return add;
}

const multiplyArray = function(array) {
  let multiply = array[0];
  for (let i = 1; i < array.length; i++) {
    multiply = multiply * array[i];
  }
  return multiply;
}

/*
Bonus
Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset gaj".
*/

const reverseString = function(string) {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse = reverse + string[i];
  }
  return reverse;
};


/*
Write a function findLongestWord that takes an array of words and returns
the length of the longest one.
*/

const findLongestWord = function(arrayOfWords) {
  let longestWord = arrayOfWords[0];
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > longestWord.length) {
      longestWord = arrayOfWords[i];
    }
  }
  return longestWord;
};

/*
Write a function filterLongWords that takes an array of words and
an number i and returns the array of words that are longer than i.
*/

const filterLongWords = function(arrayOfWords, number) {
  let newArray = [];
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > number) {
      newArray[i] = arrayOfWords[i]
    }
  }
  return newArray;
};
