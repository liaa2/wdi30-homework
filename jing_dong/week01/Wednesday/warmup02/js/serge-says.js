console.log("11111111");
/*Warmup - Serge Says
Examples
Serge answers 'Sure.' if you ask him a question.

He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.

Create a function that takes an input and returns Serge's response.*/

// const sergeSays = function ( a ) {
//   //let b = a.length;
//   if (a.length === 0) {
//     return " Fine. Be that way! ";
//
//   } else if ( a === a.toUpperCase()) {
//     return " Woah, chill out! " ;
//
//   } else if  (typeof a === "string") {
//     return " Sure. ";
//
//   } else {
//     return " Whatever. "
//   }
// };



const sergeSays = function (input){
  if (input === "" || input === null || input === undefined){
    return "Fine, Be that way!"
  }
    if (inout.endsWith("?")) {
      return "Sure"
    }
    else if (input === input.toUpperCase()){
      return " Woah, chill out! " ;
    }
    return " Whatever. "
}
