// Create a function called verbing. It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
// in which case it should add 'ly' instead. If the string length is less than 3,
// it should leave it unchanged.


function verbing(word) {
    if (word.length >= 3 && !word.endsWith('ing')) {
        return word + 'ing';
    } else if (word.length < 3){
        return word;
    } else {
return word + 'ly';
    }
}

console.log(verbing('run'));
console.log(verbing('checking'));
console.log(verbing('do'));