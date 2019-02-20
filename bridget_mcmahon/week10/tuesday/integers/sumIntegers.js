const fs = require('fs'); // File Systems code from Node std library

// const sumIntegers = function (filename) {
//   let sum = 0;
//   const file = fs.readFileSync(filename, 'utf-8');
//   file.split('\n').forEach(function(line) {
//     const n = parseInt(line);
//     sum += n;
//   });
//   return sum;
// };
//
// console.log(sumIntegers('./integers.txt'));

const sumIntegers2 = function(filename) {
  let sum = 0;
  const file = fs.readFileSync(filename, 'utf-8');

  return file.split('\n').reduce(function(acc, n) {
    return Number(acc) + Number(n);
  });
}

console.log(sumIntegers2('./integers.txt'));
