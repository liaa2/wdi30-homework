




// Dr Evil! if the number is < 1000000
// return something else return something else

const drEvil = function(number) {
  if (number < 1000000) {
    return `<br> my income of $${number}`;
  } else {
    return `<br> my income of $${number} (pinky)`;
  }
};


//input
const money = drEvil(3000000);

//output to console.
console.log(`DrEvil input is 3000000, output is ${money}`)

















//mixUp removes the value of the first letter of each argument then stores
//them in the letter1 and letter2 variables. Then we return letter 2 concatenated
//string2 after the first letter, and do the same for the subsequent variables.

const mixUp = function(string1, string2) {
  const letter1 = string1[0];
  const letter2 = string2[0];
  return letter2 + string1.substring(1, string1.length) + " " + letter1 + string2.substring(1, string2.length);
}

//input
const name1 = mixUp("Casper", "Hamshield");
//output
console.log(`MixUp input is Casper Hamshield, output is ${name}`)
//Hasper Camshield





















//fixStart

const fixStart = function(string) {
  var output = string[0];
  var newString = string[0];
  for (var i = 1; i < string.length; i++) {
    if (string[i] == output) {
      newString = newString + "*"
    } else {
      newString = newString + string[i]
    }
  }
  return newString
}

//input
const fix = fixStart('babble');
//output
console.log(`FixStart input is babble, output is ${fix}`)




















//verbing if string < 3 return string, if string does not end in ing but
//is longer than 3 add ing, else if the end of the word is ing add ly.

const verbing = function(string) {
  if (string.length < 3) {
    return string;
  } else if (string.substring(string.length - 3, string.length) !== 'ing') {
    return string + 'ing'

  } else if (string.substring(string.length - 3, string.length) == 'ing') {
    return string + 'ly'

  }
};

//input
const verb = verbing('caring');
//output
console.log(`Verbing input is caring, output is ${verb}`)
//caringly
















//notBad sets 2 variables not and bad, searches the string for the two
//variables and sets the

const notBad = function(string) {
  const not = 'not';
  const bad = 'bad';
  const indexOfFirst = string.indexOf(not);
  const indexOfSecond = string.indexOf(bad);
  if (indexOfFirst < indexOfSecond) {
    string = string.replace(bad, 'good');
    string = string.replace(not, '');
    return string;
  } else {
    return string;
  }

}
//input
const badnot = notBad(' is not bad');

console.log(`NotBad input is " is not bad", output is ${badnot}`)







const button = document.querySelector('button');


const buttonClick = function(){
document.getElementById("name").innerHTML=name1 + money + '. My life is ' + badnot
const vis = document.getElementsByClassName('visibility')[0]
vis.style.visibility = 'visible';
const bg = document.querySelector('body');
bg.style.backgroundImage = "url('images/moneywp.png')"
const left = document.getElementsByClassName('left')[0]
left.style.visibility = 'visible';
const right = document.getElementsByClassName('right')[0]
right.style.visibility = 'visible';
}

button.addEventListener("click", buttonClick)
