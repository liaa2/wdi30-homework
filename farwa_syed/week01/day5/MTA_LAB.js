let LineN = [ "Times_Square", "34th", "28N", "23rdN", "Union_Square", "8N"];
let LineL = ["8L", "6th", "Union_Square", "3rd", "1st"];
let Line6 = ["Grand Central", "33rd", "28th6", "23rd6", "Union_Square", "Astor Place"];


const centralStation = "Union_Square";
//let departureStation = deptst;
const mta = function (line, destst, deptst) {
  if (deptst === LineN){
    //console.log(`test ${deptst}`);
      for(let i=0; i<LineN.length; i++)
        if (deptst === LineN[i]){
            let numOfStations = LineN.indexOf(centralStation) - LineN.indexOf(deptst);
            if (numOfStations > 0){
              } else if (numOfStations < 0) {
                numOfStations = Math.abs(numOfStations);
                console.log(`Your destination station is ${numOfStations} stations going forward from Union Square on line N.`);
              }
              console.log( `Number of stations to travel ${numOfStations}` );
            }

          }
        }
        console.log(`lineL`);
mta("LineN", "Union_Square", "Times_Square");
mta("LineL", "Union_Square", "28N");
mta("N", "Union_Square", "8N");
