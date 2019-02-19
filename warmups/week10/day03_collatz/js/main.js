// Class Solution
const collatz = (num) => {
  let collection = [num];

  const makeCollection = () => {

    while(collection[collection.length - 1] > 1) {
      const currentNum = collection[collection.length - 1];

      const nextNum = currentNum % 2 === 0 ? (currentNum / 2) : (currentNum * 3 + 1);

      collection.push(nextNum)
      // console.log(collection);
    }

  } //makeCollection

  const answer = () => {
    console.log(`The function ran ${collection.length - 1} times.`);
    console.log(`The process was: ${collection.join(", ")}`);
  }

  makeCollection();
  answer();

  return {
    start: num,
    collection,
    steps: collection.length - 1
  }
}
console.log(collatz(2030));



// William's solution
const collatz = (n, s = 0) => {
  if (n === 1) {
    s++;
    return console.log(`n is now 1. Complete. It took ${s} steps`);
  } else if (n % 2 === 0) {
    s++;
    console.log(`n is now: ${n}. It took ${s} steps`)
    collatz((n / 2), s)
  } else if (n % 2 !== 0) {
    s++;
    console.log(`n is now: ${n}. It took ${s} steps`)
    collatz( (n * 3 + 1), s )
  }
}
console.log(collatz(12));



// Bridget's Solution
let cycles = 0;
let collection = [];

function findCollatz(num, history='num') {
  if (num === 1) {
    return (`Reached 1! Cycles: ${cycles}, History: ${history}, Numbers: ${collection}`);
  } else {
    console.log('not reached 1 yet');
    if (num % 2 === 0) {
      cycles++;
      collection.push(num)
      console.log(`Cycles: ${cycles}, History: ${history}, Numbers: ${collection}`);
      return findCollatz(num / 2, `(${history} / 2)`);
    } else {
      cycles++;
      collection.push(num)
      console.log(`Cycles: ${cycles}, History: ${history}, Numbers: ${collection}`);
      return findCollatz(num * 3 + 1, `(${history} * 3 + 1)`)
    }
  }
}

console.log(findCollatz(12));




// Nicholas' solution
let cycle = 1;
const collatz = (num) => {

  if (num === 1) return num;

  if (num % 2 === 0) {
    console.log("Cycle: ", cycle, `${ num }/2 ->`, num/2);
  } else {
    console.log("Cycle: ", cycle, `3*${ num }+1 ->`, 3*num+1);
  }
  num = num % 2 === 0 ? num/2 : 3*num+1
  cycle += 1;
  collatz(num);
}
console.log(collatz(12));
