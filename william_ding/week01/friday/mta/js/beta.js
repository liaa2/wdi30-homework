// array of subway lines.
const subway = {
  "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L": ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

// left to right function
const lToR = function (sub, startStation, finishStation) {
  let line = subway[sub];
  const stops = [];
  for (let i = line.indexOf(startStation) + 1; i < line.indexOf(finishStation) + 1; i++) {
    stops.push(line[i]);
  }
  return stops;
};

// right to left function
const rtoL = function (sub, startStation, finishStation) {
  const line = subway[sub].slice().reverse();
  const stops = [];
  for (let i = line.indexOf(startStation) + 1; i < line.indexOf(finishStation) + 1; i++) {
    stops.push(line[i]);
  }
  return stops;
};

// output single line
const outputSignle = function (startLine, stops) {
  console.log(`You must travel through the following stops on the ${ startLine } line: ${ stops.join(", ") }.`);
  console.log(`${ stops.length } stops in total.`);
}

// output two lines
const outputTwo = function (startLine, finishLine, stops1, stops2) {
  console.log(`You must travel through the following stops on the ${ startLine } line: ${stops1.join(", ")}.`);
  console.log(`Change line at Union Square to line ${ finishLine }.`)
  console.log(`Your journey continues through the following stops: ${ stops2.join(", ") }.`);
  console.log(`${ stops1.length + stops2.length} stops in total.`);
}

//--------------------------START OF MAIN FUNCTION--------------------------
const planTrip = function (startLine, station1, finishLine, station2) {
  // define variables needed
  let line1 = subway[startLine];
  let line2 = subway[finishLine];

//--------------------------ONLY TRAVEL ON SAME LINE--------------------------

  // same line left to right ..........................
  if ( startLine === finishLine && line1.indexOf(station1) < line1.indexOf(station2) ) {
    const stops = lToR(startLine, station1, station2);
    return outputSignle(startLine, stops);
  }
  // same line right to left .............................
  else if ( startLine === finishLine && line1.indexOf(station1) > line1.indexOf(station2) ) {
    const stops = rtoL(startLine, station1, station2);
    return outputSignle(startLine, stops);
  }
  // same line same station............................
  else if ( startLine === finishLine && station1 === station2 || station1 === "Union Square" && station2 === "Union Square" ) {
    console.log("You are already there!");
    return;
  }

  //--------------------------UNION SQUARE AS STARTING STATION--------------------

  // start at Union Square left to right
  else if ( station1 === "Union Square" && line2.indexOf("Union Square") < line2.indexOf(station2) ) {
    const stops = lToR(finishLine, "Union Square", station2);
    return outputSignle(finishLine, stops);
  }
  // start at Union Square right to left
  else if ( station1 === "Union Square" && line2.indexOf("Union Square") > line2.indexOf(station2) ) {
    const stops = rtoL(finishLine, "Union Square", station2);
    return outputSignle(finishLine, stops);
  }

  //----------------LINE ONE LEFT TO RIGHT, LINE TWO VERIES--------------------

  // first line left to right, second line left to right
  else if ( line1.indexOf(station1) < line1.indexOf("Union Square") && line2.indexOf("Union Square") < line2.indexOf(station2) ) {
    const stops1 = lToR(startLine, station1, "Union Square");
    const stops2 = lToR (finishLine, "Union Square", station2);
    return outputTwo(startLine, finishLine, stops1, stops2);
  }
  // first line left to right, second line right to left
  else if ( line1.indexOf(station1) < line1.indexOf("Union Square") && line2.indexOf("Union Square") > line2.indexOf(station2) ) {
    const stops1 = lToR(startLine, station1, "Union Square");
    const stops2 = rtoL (finishLine, "Union Square", station2);
    return outputTwo(startLine, finishLine, stops1, stops2);
  }
  // first line left to right, second line Union Square
  else if ( line1.indexOf(station1) < line1.indexOf("Union Square") && line2.indexOf("Union Square") === line2.indexOf(station2)) {
    const stops1 = lToR(startLine, station1, "Union Square");
    return outputSignle(startLine, stops1);
  }

  //----------------LINE ONE RIGHT TO LEFT, LINE TWO VERIES--------------------

  // first line right to left, second line left to right
  else if ( line1.indexOf(station1) > line1.indexOf("Union Square") && line2.indexOf("Union Square") < line2.indexOf(station2) ) {
    const stops1 = rtoL(startLine, station1, "Union Square");
    const stops2 = lToR (finishLine, "Union Square", station2);
    return outputTwo(startLine, finishLine, stops1, stops2);
  }
  // first line right to left, second line right to left
  else if ( line1.indexOf(station1) > line1.indexOf("Union Square") && line2.indexOf("Union Square") > line2.indexOf(station2) ) {
    const stops1 = rtoL(startLine, station1, "Union Square");
    const stops2 = rtoL (finishLine, "Union Square", station2);
    return outputTwo(startLine, finishLine, stops1, stops2);
  }
  // first line right to left, second line Union Square
  else if ( line1.indexOf(station1) > line1.indexOf("Union Square") && line2.indexOf("Union Square") === line2.indexOf(station2) ) {
    const stops1 = rtoL(startLine, station1, "Union Square");
    return outputSignle(startLine, stops1);
  }
}
