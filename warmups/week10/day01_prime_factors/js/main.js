// // version 1
//
// const primeNumbers = (num) => {
//   let primeFactors = [];
//
//   for (let i = 2; i <= num; i++) {
//     console.log("i= ", i);
//
//     while (num % i === 0) {
//
//       primeFactors.push(i)
//
//       console.log("found factor", i, "prime numbers array", primeFactors);
//
//       num = num / i
//
//       console.log("out of while loop, now test i <= num", i, num);
//     }
//   }
//   return primeFactors;
// }
//
// console.log(primeNumbers(60));


// Version 2

const prime = {

  // all the numbers within the range of 1 - 60
  ranges: [],

  // all the numbers within the range
  primeRange: [],

  // the prime numbers that are also factors of the input
  primeFactorRange: [],

  getRange(num) {
    this.range = [];

    // start at 2, get all numbers between 2 and the given number
    for (let i = 2; i <= num; i++) {
      this.range.push(i);
    };

    // console.log("getRange(this.range): ", this.range);
    // [2..60]

    return this.range
  }, //getRange

  getPrimeRange(arr) {
    this.primeRange = [];

    for (var i = 0; i < arr.length; i++) {
      // flag to identify if num is a prime number
      let isPrime = true;

      // each number iterated over in the array
      let potentialPrime = arr[i];

      // test potentialPrime to see if it is divisible by any number other than 1 and itself
      for (let j = 2; j < potentialPrime; j++) {
        if (potentialPrime % j === 0) {
          isPrime = false
        } //if
      } //for

      if (isPrime === true) {
        this.primeRange.push(potentialPrime);
      } //if
    }

    console.log("primeRange: ", this.primeRange);
    return this.primeRange
  },

  getPrimeFactors(num) {
    this.primeFactorRange = [];

    let numPrimes = this.getPrimeRange(this.getRange(num));
    console.log("numPrimes: ", numPrimes);

    for (let i = 0; i < numPrimes.length; i++) {

      while (num % numPrimes[i] === 0) {
        this.primeFactorRange.push(numPrimes[i]);

        num/= numPrimes[i]
      } //while
    } //for

    console.log("getPrimeFactors(this.primeFactorRange): ", this.primeFactorRange);

    return this.primeFactorRange
  } //getPrimeFactors
} //prime obj


console.log(prime.getPrimeFactors(60));
