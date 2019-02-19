// $(document).ready(function(){
//   const primeFactor = function(num){
//     let arrPrimeFactor = [];
//     let prime = false;
//     for(let i=2;i<=num; i++)
//     {
//       while(num % i === 0)
//       {
//         arrPrimeFactor.push(i);
//         num = num / i;
//       }
//       // for(let j=2;j<i;j++)
//       // {
//       //
//       //   if(i%j === 0 && i !== j)
//       //   {
//       //
//       //   }
//       //   else{
//       //     arrPrimeFactor.push(i);
//       //   }
//       //   // console.log(`${i}-${j}`);
//       //   console.log(arrPrimeFactor);
//       // }
//     }
//     return arrPrimeFactor;
//   }
//
//   console.log(primeFactor(60));
//
// });
//
//

const prime = {
  ranges:[],
  primeRange: [],
  primeFactorRange: [],
  getRange(num){
    this.range = [];
    for(let i=2;i<=num;i++)
    {
      this.range.push(i);
    };
    // console.log("getRange(this.range):", this.range);
    return this.range;
  },
  getPrimeRange(arr){
    this.primeRange = [];
    for(var i = 0; i < arr.length;i++){
      let isPrime = true;
      let potentialPrime = arr[i];
      for(let j = 2; j < potentialPrime; j++)
      {
        if(potentialPrime % j === 0){
          isPrime = false
        }
      }
      if(isPrime === true){
        this.primeRange.push(potentialPrime);
      }
    }
    console.log("primeRange", this.primeRange);
    return this.primeRange;
  },
  getPrimeFactors(num){
    this.primeFactorRange = [];

    let numPrimes = this.getPrimeRange(this.getRange(num));
    console.log("numPrimes", numPrimes);

    for(let i = 0; i < numPrimes.length;i++){
      while(num % numPrimes[i] === 0){
        this.primeFactorRange.push(numPrimes[i]);
        num/= numPrimes[i];

      }
    }
    console.log("getprimeFactors(this.primeFactorRange):", this.primeFactorRange);
    return this.primeFactorRange;
  }
}

console.log(prime.getPrimeFactors(60));
