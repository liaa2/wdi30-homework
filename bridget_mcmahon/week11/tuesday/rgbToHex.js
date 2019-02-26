////////// CONVERT A DECIMAL RGB VALUE TO HEX /////////////

// -------------- Version 1 --------------

// const decimalToHex = (rgbColor) => {
//   let hex = Number(rgbColor).toString(16);
//   if (hex.length < 2) {
//     hex = "0" + hex;
//   }
//
//   return hex;
// };
//
// const rgbToHex = (color) => {
//   const pattern = /rgb\(([0-9]{1,3}),\s?([0-9]{1,3}),\s?([0-9]{1,3})\)/
//   const hexSplit = color.split(pattern).filter(n => n);
//
//   const r = colorToHex(hexSplit[0]);
//   const g = colorToHex(hexSplit[1]);
//   const b = colorToHex(hexSplit[2]);
//
//   return `#${r}${g}${b}`;
// };

// -------------- Version 2 --------------

// const decimalToHex = function(num) {
//   let remainders = [];
//   let result = num;
//   let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//
//   while (result >= 16) {
//     remainders.push(result % 16);
//     result = Math.floor(result / 16);
//   };
//
//   remainders.unshift(result);
//
//   for (let i = 0; i < remainders.length; i++) {
//     if (remainders[i] > 9) {
//       remainders[i] = values[remainders[i]];
//     } else {
//       remainders[i] = remainders[i];
//     }
//   }
//   return remainders.join('');
// };
//
// const rgbToHex = function(r, g, b) {
//   return `#${decimalToHex(r)}${decimalToHex(g)}${decimalToHex(b)}`
// };

// console.log(rgbToHex(250, 17, 168));


// -------------- Version 3 --------------

const decimalToHex = function(num) {
  let remainders = [];
  let result = num;
  let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  // won't work for decimal numbers above 255 (passed in as num)
  remainders.push(num % 16);
  remainders.unshift(Math.floor(num / 16));

  for (let i = 0; i < remainders.length; i++) {
    if (remainders[i] > 9) {
      remainders[i] = values[remainders[i]].toString();
    } else {
      remainders[i] = remainders[i].toString();
    }
  }
  return remainders.join('');
};

const rgbToHex = function(colour) {
  const pattern = /rgb\(([0-9]{1,3}),\s?([0-9]{1,3}),\s?([0-9]{1,3})\)/
  const hexSplit = colour.split(pattern).filter(n => n);

  const r = decimalToHex(hexSplit[0]);
  const g = decimalToHex(hexSplit[1]);
  const b = decimalToHex(hexSplit[2]);

  return `#${r}${g}${b}`;
};

console.log(rgbToHex('rgb(250, 17, 168)'));
