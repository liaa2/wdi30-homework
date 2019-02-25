const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 20, 25, 30, 31, 46, 47];

const bubbleSort = (arr) => {
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr[j], arr[j + 1] = arr[j + 1], arr[j]

        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(a));
