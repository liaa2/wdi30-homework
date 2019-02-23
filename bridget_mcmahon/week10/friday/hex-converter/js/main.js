$(document).ready(function() {

  const $color = $('#color-input');

  $('#submit').on('click', function(e) {
    e.preventDefault();

    $('.hex').text($color.val());

    const rgbColor = hexToRGB($color.val());
    $('.rgb').text(rgbColor);
    console.log($color.val());
  });

}); // document ready


const hexToRGB = (color) => {
  let pattern = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/;
  let colorsSplit = color.split(pattern).filter(n => n);
  console.log(colorsSplit);

  let r = parseInt(colorsSplit[0], 16);
  let g = parseInt(colorsSplit[1], 16);
  let b = parseInt(colorsSplit[2], 16);

  console.log(`rgb(${r}, ${g}, ${b})`);
  return `rgb(${r}, ${g}, ${b})`
};

hexToRGB('#ffffff')
