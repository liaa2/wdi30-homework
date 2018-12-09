/*
Part 1
Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.

*/
//displayMessage
//Common function to Display the Message on console for All Calling Functions
const displayMessage = function(msg){
  console.log(msg);
};

//squareNumber
//Accepts one parameter. Calculates and returns the square value of that number
const squareNumber = function(number){
  const squareofnumber = number * number;
  return squareofnumber;
};

//halfNumber
//Accepts one parameter. Calculates and returns half value of the number
const halfNumber = function(number){
  const halfvalueofnumber = number / 2;
  return halfvalueofnumber;//`Half of ${number} is ${(halfvalueofnumber).toFixed(2)}.`;
};

//perCentof
//Accepts two parameter. Calculates what percent is number1 of number2 and returns the same
const perCentof = function(number1, number2){
  const perCent = (number1 / number2) * 100;
  return perCent; //`${number1} is ${perCent}% of ${number2}.`;
};

//areaOfCircle
//Accepts one parameter. Calculates and returns value for area of the circle
const areaOfCircle = function(radius){
  const pi = Math.PI;
  const area = pi * radius * radius;
  return area;//`The area for a circle with radius ${radius} is ${(area).toFixed(2)}.`;
};

//All Calling Function Begins
//Used for calling squareNumber and capture the return value to generate the custom Message to be passed in displayMessage function
const callsquareNumber = function(num,precision = 2){
  const result = squareNumber(num);
  displayMessage(`The result of squaring the number ${(num).toFixed(precision)} is ${(result).toFixed(precision)}.`);
};


//Used for calling halfNumber and capture the return value to generate the custom Message to be passed in displayMessage function
const callhalfNumber = function(num, precision = 2){
  const result = halfNumber(num);
  displayMessage(`Half of ${(num).toFixed(precision)} is ${(result).toFixed(precision)}.`);
};

//Used for calling perCentof and capture the return value to generate the custom Message to be passed in displayMessage function
const callperCentof = function(num1, num2,precision = 2){
  const result = perCentof(num1, num2);
  displayMessage(`${(num1).toFixed(precision)} is ${(result).toFixed(precision)}% of ${(num2).toFixed(precision)}`);
};

//Used for calling areaOfCircle and capture the return value to generate the custom Message to be passed in displayMessage function
const callareaOfCircle = function(num, precision = 2){
  const result = areaOfCircle(num);
  displayMessage(`The area for a circle with radius ${(num).toFixed(precision)} is ${(result).toFixed(precision)}.`);
};


const callFunctions = function(){
  //Part1
  callsquareNumber(20);
  callhalfNumber(50);
  callperCentof(10,20);
  callareaOfCircle(5);
};

callFunctions();
