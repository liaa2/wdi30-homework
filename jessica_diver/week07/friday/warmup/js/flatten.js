// Arrays - Flatten and Reverse
//
// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any libraries to complete this task - write this stuff from scratch using standard JS methods and objects.
//
// Make two functions
// reverse
// flatten
// reverse( [1, 2, 3, 4] );
// // => [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]
// You only need to make flatten work to one level deep! You should be able to flatten this - ["Hello", ["World"]] - but not this - ["Hello", [[["World"]]]]
//
// Hint: You're going to need to be looping through the arrays to get a solution.

const reverse = array => {
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }
  return newArray;
};

//////////////////////////////////
const flatten = array => {
  const newArray = []
  for (var i = 0; i < array.length; i++) {
    let currentElem = array[i];

    if (currentElem instanceof Array) { // or If (currentElem.constructor == Array)
      for (let j = 0; j < currentElem.length; j++) {
        newArray.push(currentElem[j]);
      }
    } else {
      newArray.push(currentElem);
    }

  }
  return newArray;
};

/////////////////////////////////

const flatten2 = array => {
  let items = array.toString().split(',');
  return items;
}


console.log(reverse([1, 2, 3, 4]));
console.log(flatten(["Hello", ["World", 42]]));
console.log(flatten(["Hello", ["World", 42],
  ["World", 42, ["World", 42]]
]));

console.log('///////////////////////');

console.log(flatten2(["Hello", ["World", 42]]));
console.log(flatten2(["Hello", ["World", 42],
  ["World", 42, ["World", 42]]
]));
