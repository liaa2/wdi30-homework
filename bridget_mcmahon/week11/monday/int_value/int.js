// Find the largest int value in an array

let a = [1, 7, 6, 12, 3, 30, 42, 19, 22, 9];

// Iteration
const findLargestInteger = (arr) => {
  let largest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

const findLargestInteger2 = (arr) => {
  let max = -Infinity;

  arr.forEach((n) => {
    if (n > max) max = n;
  });

  return max;
};


// Reduce
const largest = (arr) => {
  return arr.reduce( (max, n) => n > max ? n : max);
};

// const largest = (arr) => {
//   return arr.reduce( (max, n) => {
//     if (n > max) {
//       return n;
//     } else {
//       return max;
//     }
//   });
// };

console.log(findLargestInteger(a));
console.log(findLargestInteger2(a));
console.log(largest(a));
