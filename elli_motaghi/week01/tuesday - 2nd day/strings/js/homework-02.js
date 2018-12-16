// Create a function called mixUp. It should take in two strings, and return the concatenation of
// the two strings (separated by a space) slicing out and swapping the first 2 characters of each.
// You can assume that the strings are at least 2 characters long.


function mixUp(name1, name2) {
    const newString = `${name1.slice(0, 2)}${name2.slice(2)} ${name2.slice(0, 2)}${name1.slice(2)}`;
    return newString;
}

console.log(mixUp('Jessica', 'Tara'));
console.log(mixUp('Sarah', 'Leyla'));
console.log(mixUp('Meryam', 'Denise'));