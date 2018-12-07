// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel,
// false otherwise.

function vowelTest(c) {
    const vowel = ['a', 'e', 'i', 'o', 'u', 'y'];
    let output = false;
    for (i = 0; i < vowel.length; i++) {
        if (vowel[i] === c) {
            output = true;
        }
    }
    return output;

};

console.log(vowelTest('e'));
console.log(vowelTest('t'));
console.log(vowelTest('6'));