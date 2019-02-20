// Print out the grade-school multiplication table up to 12x12

// const multiply = (a, b) => {
//   return a * b;
// }
//
// const multiplicationTable = (num) => {
//   for (let i = 0; i <= 12; i++) {
//     for (let j = 1; j <= num; j++) {
//       console.log(`${i} x ${j} = ${multiply(i, j)}`);
//     }
//   }
// }
//
// multiplicationTable(12);

// Joel's solution

const twelveTimesTable = function() {
  for (let i = 0; i <= 12; i++) {
    if (i < 10) {
      let string = `${ i } x 12 = ${ i * 12 }`;
      console.log(string);
      console.log(string.padStart(2, '0'));
    } else {
      console.log(`${ i } x 12 = ${ i * 12 }`);
    }
  }
}

twelveTimesTable();
