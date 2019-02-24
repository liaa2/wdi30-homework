$(document).ready(function() {

  $('#submit').on('click', function(e) {
    e.preventDefault();
    const $color = $('#color-input').val();

    $('.hex').text($color);

    const rgbColor = hexToRGB($color);
    $('.rgb').text(rgbColor);

    const hslColor = rgbToHSL(rgbColor);
    $('.hsl').text(hslColor);
  });

}); // document ready


const hexToRGB = (color) => {
  let pattern = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/;
  let colorsSplit = color.split(pattern).filter(n => n);

  let r = parseInt(colorsSplit[0], 16);
  let g = parseInt(colorsSplit[1], 16);
  let b = parseInt(colorsSplit[2], 16);

  return `rgb(${r}, ${g}, ${b})`
};

hexToRGB('#ffffff');

const rgbToHSL = (color) => {
  console.log(color);
  // pull out RGB values
  let regex = /rgb\(([0-9]{1,3}), ([0-9]{1,3}), ([0-9]{1,3})\)/
  let [, r, g, b] = color.match(regex);

  // convert RGB values to range 0-1 (divide by 255)
  r = (r / 255).toFixed(2);
  g = (g / 255).toFixed(2);
  b = (b / 255).toFixed(2);

  // find min and max values of rgb
  let min = Math.min(r, g, b);
  let max = Math.max(r, g, b);

  // L: adding max and min then divide by 2
  let l = ((min + max) / 2)

  // S:
  let s;
  if (min === max) {
    s = 0;
  } else if (l < 0.5) {
    s = (max - min) / (max + min);
  } else {
    s = (max - min) / (2 - max - min);
  };
  s = Math.round(s * 100);

  // H: calculate max value
  let h;
  if (max === r) {
    h = (g - b) / (max - min);
  } else if (max === g) {
    h = 2.0 + (b - r) / (max - min);
  } else {
    h = 4.0 + (r - g) / (max - min);
  }

  h = Math.round(h * 60);
  if (h < 0) {
    h += 360;
  }

  l = Math.round(l * 100);

  return `hsl: ${h}, ${s}%, ${l}%`;
};

console.log(rgbToHSL('rgb(24, 98, 118)'));
