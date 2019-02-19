const happyNumber = function(num){
  let cycle = {};
  let squareSum = num;
  let count = 0;
  while(true){
    squareSum = sumOfDigitsSquared(squareSum);

    if(squareSum === 1){
      return true;
    }
    if(cycle[squareSum] === true){
      return false;
    }

    cycle[squareSum] = true;
    count ++;
    console.log("cycle ", cycle);
  }
};

const sumOfDigitsSquared = (num) => {
  let sum = 0;
  let numStr = num.toString();
  for(var i = 0; i < numStr.length; i++){
    sum += numStr[i] * numStr[i];
  }

  // while(num > 0){
  //   digit = num % 10;
  //   sum += digit * digit;
  //   num = (num - digit) / 10;
  // }
  return sum;
}

const generateHappyNumbers = (count) => {
  let found = 0;

  for(let i = 0; found < count; i++){
    found++;
    console.log("found happy number" ,found, i);
  }
}
console.log(generateHappyNumbers(10));
