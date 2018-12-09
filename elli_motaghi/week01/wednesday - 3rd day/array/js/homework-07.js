// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

function filterLongWords(array, num) {
    let longerWord = "";
    for (i = 0; i < array.length; i++) {
        if (array[i].length > num && longerWord.length < array[i].length) {
            longerWord = array[i];
        }
    }
    return longerWord;
};

console.log(filterLongWords(['tree', 'flowers', 'butterfly', 'air'], 4));