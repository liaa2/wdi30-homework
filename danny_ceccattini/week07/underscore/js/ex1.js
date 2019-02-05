// Log out the answers to all of the following questions!
//
// Here is some data that you can work with.
//
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
//
var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Exercises

// Iterate through numbers and log each number to the console

const iterate = _(numbers).each(function (n) {
  console.log(n);
});

//OR

_(numbers).each(function (n, index, array) {
  console.log(n);
});


// Iterate through numbers and multiply each one of them by 5

const timesFive = _(numbers).map(function (n) {
  console.log(n * 5);
});

// OR

const times5 = function (number) {
  return number * 5;
};
const multiply5 = _(numbers).map(times5);
console.log(numbers, multiply5);

// Iterate through numbers and reduce it by adding them together
const total = _(numbers).reduce( function (initialTotal, n) {
  return initialTotal + n;
});

console.log(total);

// Get an array of all of the people in people that have the username "E"
const eUsername = _(people).where( {"username": "E" } );

// console.log(eUsername);

// Find the first object in people that has the id of 3

const findId = _(people).find( {"id": 3 } );
// console.log(findId);

// Or you can use the _.findWhere() method.

// Find the first person who has an age of less than 50

const findAge = _.find(people, function(person) {
  return person.age < 50;
});

// console.log(findAge);

// Get an array of all of the people with an age of over 60

const findAges = _.filter(people, function(people) {
  return people.age > 60;
});

// console.log(findAges);
console.table(findAges);

// Remove all of the people with an age less than 40

const removeForty = _.reject(people, function(person) {
  return person.age < 40;
});

console.log(removeForty);
