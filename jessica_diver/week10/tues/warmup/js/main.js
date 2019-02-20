// Happy Numbers
//
// A happy number is defined by the following process:
//
// Starting with any positive integer,
// replace the number by the sum of the squares of its digits, and
// repeat the process until
// the number equals 1 (where it will stay),
// or it loops endlessly in a repeating cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy numbers, while those for which this process do not end in 1 are unhappy numbers.
//
// Task
//
// Your task is to write a program in Javascript which prints the first 10 happy numbers, starting from 1.
//
// Here are the first 10 happy numbers, for you to compare your output against:
//
// 1
// 7
// 10
// 13
// 19
// 23
// 28
// 31
// 32
// 44

// const happyNumbers = {
//   isHappy(num) => {
//     if ( num % 2 === 0){
//
//     } else {
//       return false;
//     }
//   }
//
//   happyNumbers(num) => {
//     happyNums = [];
//     for (let i = 0; i <= num; i++ ) {
//       if (isHappy(i)){
//         happyNums.push(i)
//       } else {
//         return false;
//       } // end if
//     } // end for
//     return happyNums;
//   } // end happyNumbers
// } // end obj
//
// // Prints happy numbers up up to the number entered
// console.log(happyNumbers.happyNumbers(10));



const isHappy = (num) => {
  let cycle = {};
  let squareSum = num;
  let count = 0;

  while(true) {
    squareSum = sumOfDigitsSquared(squareSum)
    console.log(`=======================`);

    console.log(`squareSum: ${squareSum}`);
    if(squareSum === 1){
      return true;
    }

    console.log(`cycle[squareSum]: ${cycle[squareSum]}`);
    if (cycle[squareSum] === true){
      return false;
    }

    cycle[squareSum] = true;
    count ++
    console.log(`Cycle: ${cycle}`);
  }
}; //is happyNums
const sumOfDigitsSquared = num => {
  let sum = 0;
  let numStr = num.toString();

  for (var i = 0; i < numStr.length; i++) {
    sum += +numStr[i] * numStr[i];
  }

  // while (num < 0){
  //   digit = num % 10;
  //   sum += digit * digit;
  //   num = (num - digit) /10;
  // }

  return sum

}

const generateHappyNumbers = (count) => {
  let found = 0;

  for (var i = 0; found < count; i++) {
    if (isHappy(i)) {
      found ++;
    }

    console.log(`Found happy number: ${found}, ${i}`);
    }
}

console.log(isHappy(10));
