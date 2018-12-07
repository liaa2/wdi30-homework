/*
Create a program that models a simple subway system.

The program takes the line and stop that a user is getting
on at and the line and stop that user is getting off at and
prints the journey and the total number of stops for the trip
in the console.

There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

All 3 subway lines intersect at Union Square, but there are no other
intersection points. (For example, this means the 28th stop on the N line
is different than the 28th street stop on the 6 line, so you'll have to
differentiate this when you name your stops in the arrays.)

Tell the user the number of stops AND the stops IN ORDER that they
will pass through or change at.

*/

const subwaySystem = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"] ,
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
};

const planTrip = function(startLine, startStation, endLine, endStation) {
  // arrays for lines travelled
  let lineOneStops = [];
  let lineTwoStops = [];
  // variables for positions on lines travelled
  let startPosition = subwaySystem[startLine].indexOf(startStation);
  let endPosition = subwaySystem[endLine].indexOf(endStation);
  let lineOneEnd = subwaySystem[startLine].indexOf("Union Square");
  let lineTwoStart = subwaySystem[endLine].indexOf("Union Square");

  // if travelling on the same line ----------------------------------
  if ( startLine === endLine ) {
    if (startPosition < endPosition) {
      for (let i = startPosition + 1; i <= endPosition; i++) {
        lineOneStops.push(subwaySystem[startLine][i]);
      }
    }

    if (endPosition < startPosition) {
      for (let i = startPosition - 1; i >= endPosition; i--) {
        lineOneStops.push(subwaySystem[startLine][i]);
      }
    }

    // list stops on first line
    let lineOneStopsStr = lineOneStops.join(', ');
    console.log(`You must travel through the following stops on the ${ startLine } line: ${ lineOneStopsStr }`);

  // if you need to change stations -----------------------------------
  } else {
    if (startPosition < lineOneEnd) {
      for (let i = startPosition + 1; i <= lineOneEnd; i++) {
        lineOneStops.push(subwaySystem[startLine][i]);
      }
    }

    if (startPosition > lineOneEnd) {
      for (let i = startPosition - 1; i >= lineOneEnd; i--) {
        lineOneStops.push(subwaySystem[startLine][i]);
      }
    }

    lineOneStopsStr = lineOneStops.join(', ');
    console.log(`You must travel through the following stops on the ${ startLine } line: ${ lineOneStopsStr }`);
    console.log(`Change stations at Union Square and get on line ${ endLine }`);

    // continue journey on new line
    if (lineTwoStart < endPosition) {
      for (let i = lineTwoStart + 1; i <= endPosition; i++) {
        lineTwoStops.push(subwaySystem[endLine][i]);
      }
    }

    if (lineTwoStart > endPosition) {
      for (let i = lineTwoStart - 1; i >= endPosition; i--) {
        lineTwoStops.push(subwaySystem[endLine][i]);
      }
    }

    lineTwoStopsStr = lineTwoStops.join(', ');
    console.log(`Your journey continues through the following stops: ${ lineTwoStopsStr }`);
  };

  let totalStops = lineOneStops.length + lineTwoStops.length;
  console.log(`${ totalStops } stops in total.`)

  // log number of stops in total

};

// next challenge: generate return messages if the stops are the same or
// if you enter a stop/line that isn't valid
