// Create a program that models a simple >> subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and >> prints the journey and the >> total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."



// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.

// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.

// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())

// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


const subwaySystem = [

    { line: 'N', stops: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'] },
    { line: 'L', stops: ['8th', '6th', 'Union Square', '3rd', '1st'] },
    { line: '6', stops: ['Grand Central', '33rd', '28th', '23rd', "Union Square", 'Astor Place'] }

];



function playTrip(startLine, startStop, endLine, endStop) {

    let firstLineStops = [];
    let lastLineStops = [];
    let message;

    for (i = 0; i < subwaySystem.length; i++) {

        if (subwaySystem[i].line === startLine && subwaySystem[i].stops.indexOf(startStop) >= 0) {  // without '>=' it doesn't work for index 0!

            for (j = subwaySystem[i].stops.indexOf(startStop) + 1; j < subwaySystem[i].stops.length; j++) {
                firstLineStops.push(subwaySystem[i].stops[j]);

                if (subwaySystem[i].stops[j] === 'Union Square' && startLine !== endLine) {
                    break;
                }
            }
        }

        if (firstLineStops.indexOf('Union Square') >= 0 && startLine !== endLine) {
            if (subwaySystem[i].line === endLine) {
                if (subwaySystem[i].stops.indexOf(endStop)) {

                    if (subwaySystem[i].stops.indexOf(endStop) < subwaySystem[i].stops.indexOf('Union Square')) {

                        for (k = subwaySystem[i].stops.indexOf('Union Square') - 1; k >= subwaySystem[i].stops.indexOf(endStop); k--) {
                            lastLineStops.push(subwaySystem[i].stops[k]);
                        }

                    } else {

                        for (k = subwaySystem[i].stops.indexOf('Union Square') + 1; k <= subwaySystem[i].stops.indexOf(endStop); k++) {
                            lastLineStops.push(subwaySystem[i].stops[k]);
                        }
                    }

                }
            }


            message = `. Change at Union Square. Your journey continues through the following stops: ${lastLineStops.join(', ')}. `;

        } else {

            message = '. ';

        }
    }

    let totalStops = firstLineStops.length + lastLineStops.length;

    return `You must travel through the following stops on the ${startLine} line: ${firstLineStops.join(', ')}${message}${totalStops} stops in total.`;
}




// ???? console.log(playTrip('L', '8th', 'N', 'Times Square'));
//console.log(playTrip('6', '33rd', 'L', '6th'));

//console.log(playTrip('N', '34th', '6', 'Astor Place'));
//console.log(playTrip('N', 'Times Square', '6', '33rd'));
//console.log(playTrip('L', '6th', 'L', '1st'));
//console.log(playTrip('N', 'Times Square', 'N', '8th'));
//console.log(playTrip('L', 'Union Square', 'L', '1rd'));
//console.log(playTrip('6', '33rd', '6', 'Astor Place'));
//console.log(playTrip('L', '8th', '6', 'Astor Place'));




// for (m = subwaySystem.length; m > 0; m--) {
//     if (subwaySystem[m].line === b) {

//         if (subwaySystem[m].stops.indexOf(d) < subwaySystem[m].stops.indexOf('Union Square')) {

//             for (n = subwaySystem[m].stops.indexOf('Union Square') - 1; n >= subwaySystem[m].stops.indexOf(d); n--) {
//                 lastLineStops.push(subwaySystem[m].stops[n]);
//             }

//         } else {

//             for (n = subwaySystem[m].stops.indexOf('Union Square') + 1; n <= subwaySystem[m].stops.indexOf(d); n++) {
//                 lastLineStops.push(subwaySystem[m].stops[n]);
//             }