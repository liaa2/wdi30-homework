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
console.log('/////////////// _.each //////////////////////');
const numberList = _.each(numbers, function(num) {
  console.log(num);
});

// Joel solution //
console.log('/////////// _.each - 2nd solution //////////////////');
_(numbers).each(function (n, index, array) {
  console.log(n);
});

// Iterate through numbers and multiply each one of them by 5
console.log('//////////// _.map /////////////////////');
const numbersFive = _.map(numbers, function(num) {
  return num * 5;
});

console.log(numbersFive);

console.log('///////////// _.map - 2nd solution //////////////////');
const times5 = function(number) {
  return number * 5;
};

const multiplesOf5 = _(numbers).map(times5);
console.log(numbers, multiplesOf5);

// Iterate through numbers and reduce it by adding them together
console.log('/////////// _.reduce ///////////////');

const reduceNumbers = _.reduce(numbers, function(memo, num) {
  console.log('memo', memo, 'num', num);
  return memo + num;
});

console.log(reduceNumbers);

// Get an array of all of the people in people that have the username "E"
console.log('//////////// _.where /////////////////////');
const username = _.where(people, {username : "E"});

console.table(username);

// Find the first object in people that has the id of 3
console.log('//////////// _.findWhere /////////////////////');
const id3 = _(people).findWhere( {id : 3});

console.table(id3);
// Find the first person who has an age of less than 50
console.log('//////////// _.find /////////////////////');
const youngPerson = _(people).find( function(person) {
  return person.age < 50;
});

console.table(youngPerson);

// Get an array of all of the people with an age of over 60
console.log('//////////// _.filter /////////////////////');

const olderPeople = _(people).filter(function (person) {
  return person.age > 60;
});

console.table(olderPeople);

// Remove all of the people with an age less than 40
console.log('//////////// _.reject /////////////////////');

const adults = _(people).reject((person) => person.age < 40);


console.table(adults);
