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
  const lineOneStops = [];
  const lineTwoStops = [];
  // variables for positions on lines travelled
  const startPosition = subwaySystem[startLine].indexOf(startStation);
  const endPosition = subwaySystem[endLine].indexOf(endStation);
  const lineOneEnd = subwaySystem[startLine].indexOf("Union Square");
  const lineTwoStart = subwaySystem[endLine].indexOf("Union Square");

  const addStops = function (start, end) {
    if (start < end) {
      for (let i = start + 1; i <= end; i++) {
        lineOneStops.push(subwaySystem[startLine][i]);
      }
    }
    if (end < start) {
      for (let i = start - 1; i >= end; i--) {
        lineOneStops.push(subwaySystem[startLine][i]);
      }
    }
  };

  // if not travelling on different lines -----------------------------
  if ( startLine === endLine ) {
    addStops(startPosition, endPosition);

    // list stops on first line
    let lineOneStopsStr = lineOneStops.join(', ');
    console.log(`You must travel through the following stops on the ${ startLine } line: ${ lineOneStopsStr }`);

  // if you need to change stations -----------------------------------
  } else {
    addStops(startPosition, lineOneEnd);

    lineOneStopsStr = lineOneStops.join(', ');
    console.log(`You must travel through the following stops on the ${ startLine } line: ${ lineOneStopsStr }`);
    console.log(`Change stations at Union Square and get on line ${ endLine }`);

    // continue journey on new line
    addStops(lineTwoStart, endPosition);

    lineTwoStopsStr = lineTwoStops.join(', ');
    console.log(`Your journey continues through the following stops: ${ lineTwoStopsStr }`);
  };

  let totalStops = lineOneStops.length + lineTwoStops.length;
  console.log(`${ totalStops } stops in total.`)
};

// next challenge: generate return messages if the stops are the same or
// if you enter a stop/line that isn't valid, return error message
