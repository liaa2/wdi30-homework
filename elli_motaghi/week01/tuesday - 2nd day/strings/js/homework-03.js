// Create a function called fixStart. It should take a single argument, a string, and return
// a version where all occurences of its first character have been replaced with '*',
// except for the first character itself. You can assume that the string is at least one character long.


function fixStart(name) {
    const firstCharacter = name.slice(0, 1); 
    return firstCharacter + name.slice(1).replace(new RegExp(firstCharacter, 'g'), '*');
}
// Note: Regular Expression: for finding matches in different patterns!
// g >> global means: for all matches to the end of string.

console.log(fixStart('elheeeemeuheebftee'));
console.log(fixStart('bohadbbbinbst'));
console.log(fixStart('toolsittat'));
