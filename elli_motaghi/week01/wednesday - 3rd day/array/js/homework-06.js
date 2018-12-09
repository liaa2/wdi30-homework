// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord(array) {
    let longest = "";
    for (i = 0; i < array.length; i++) {
        if (longest.length < array[i].length) {
            longest = array[i];
        }
    }

    return longest;
};

console.log(findLongestWord(['sun', 'moon', 'cloud', 'rainbow']));
console.log(findLongestWord(['waterfall', 'sea', 'ocean', 'raining']));