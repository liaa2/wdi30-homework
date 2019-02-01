var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// Exercises
//
// Iterate through numbers and log each number to the console
const numberList = _.each(numbers, function(num) {
  console.log(num);
});

// Iterate through numbers and multiply each one of them by 5
const numbersFive = _.map(numbers, function(num) {
  return num * 5;
});

console.log(numbersFive);

// Iterate through numbers and reduce it by adding them together
const reduceNumbers = _.reduce(numbers, function(memo, num) {
  return memo + num;
}, 0);

console.log(reduceNumbers);

// Get an array of all of the people in people that have the username "E"
const username = _.pluck(_.where(people, {username : "E"}), 'id');

console.log(username);

// Find the first object in people that has the id of 3
const id3 = _.findWhere(people, {id : 3});

console.log(id3);
// Find the first person who has an age of less than 50
const age = _.findWhere(people, {"age" :50});

console.log(age);

// Get an array of all of the people with an age of over 60
_.map()

// Remove all of the people with an age less than 40
_.filter()
