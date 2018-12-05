console.log('Alright, alright, alright!');

/*
   _
  /_\  _ __ _ __ __ _ _   _ ___
 //_\\| '__| '__/ _` | | | / __|
/  _  \ |  | | | (_| | |_| \__ \
\_/ \_/_|  |_|  \__,_|\__, |___/
                   |___/

                   Array and Functions Bonus Material

                   Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

                   Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

                   Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

                   Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

const maxOfTwoNumbers = function(a,b){
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

const maxOfThree = function(a,b,c) {
  if (a > b && a > c){
    return a;
  } else if (b > c){
    return b;
  } else {
    return c;
  }
};

const isVowel = function(char) {
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    return true;
  } else {
    return false;
  }
};

const sumArray = function(array1){
  let sumTotal = 0;
  for (var i = 0; i < array1.length; i++) {
    sumTotal += array1[i];
    console.log(sumTotal);
  }
};

const productArray = function(array1){
  let productTotal = 1;
  for (var i = 0; i < array1.length; i++) {
    productTotal = productTotal * array1[i];
    console.log(productTotal);
  }
};
