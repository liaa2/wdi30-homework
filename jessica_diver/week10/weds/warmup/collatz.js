let cycles = 1;
let collection = [];

const collatz = function(n) {
  if ( n <= 1) {
    return `You have conjected. It took ${cycles} cycles`
  } else {
    if (n % 2 === 1){  // base plate
      let num = (n * 3) + 1
      console.log(`num = ${num}`);
      collection.push(num)
      cycles ++
      collatz(num)
    } else {
      let number = n / 2 // moving towards base plate
      console.log(`number = ${number}`);
      collection.push(number)
      cycles ++
      collatz(number);
    } // end if
  }
  return `You have conjected. It took ${cycles} cycles`
} // end funct

console.log(collatz(27));

//
//
//
// const collatz = (num) => {
//   let collection = [num];
//
//   const makeCollection = () => {
//
//     while(collection[collection.length - 1] > 1) {
//       const currentNum = collection[collection.length - 1];
//
//       const nextNum = currentNum % 2 === 0 ? (currentNum / 2) : (currentNum * 3 + 1);
//
//       collection.push(nextNum)
//       console.log(collection);
//     }
//   } // make makeCollection
//
//   const answer = () => {
//     console.log(`The function ran ${collection.length - 1} times.`);
//     console.log(`The process was: ${collection.join(", ")}`);
//   }
//   makeCollection();
//   answer();
//
//   return {
//     start: num,
//     collection,
//     steps: collection.length - 1
//   }
// }
//
// collatz(12);
