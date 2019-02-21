// Write function to print the odd numbers from 1 to 99.

// const odds = (upperBound=99) => {
//   for (let n = 1; n <= upperBound; n++) {
//     if (n % 2 !== 0) {
//       console.log(n);
//     }
//   }
// }

const odds = (upperBound=99) => {
  for (let n = 1; n <= upperBound; n += 2) {
    console.log(n);
  }
};

odds();
