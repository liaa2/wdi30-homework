//Create a new Javascript file and link to it with a script tag at the bottom.

//Create a variable to store a reference to the img.
const img = document.getElementsByTagName('img')[0];

// Change the style of the img to have a "left" of "0px", so that it starts
//  at the left hand of the screens.
img.style.left = '0px';

// Create a function called catWalk() that moves the cat 10 pixels to the
// right of where it started, by changing the "left" style property.

// Call that function every 50 milliseconds. Your cat should now be moving
// across the screen from left to right. Hurrah!

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at
// the left hand side ("0px"). So they should keep walking from left to right
// across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move
// backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with
// an image of a cat dancing, keep it dancing for 10 seconds, and then replace the
// img with the original image and have it continue the walk.

// Bonus #4: Pretty much go nuts or whatever.

let change = 0 ; //defining variable outside function

const catWalk = function() {
  const oldLeft = parseInt(img.style.left);
  const newLeft = oldLeft + change;
  img.style.left = newLeft + 'px';
  if (newLeft >= window.innerWidth) {
    change -= 1;
  } else if (newLeft === 0) {
    change += 1;
  }
};

setInterval(catWalk, 1);




const img2 = document.getElementsByTagName('div')[0];

img2.style.position = 'absolute';

img2.style.top = '0px';

let change2 = 0;

const watchKittyFall = function() {
  const oldTop = parseInt(img2.style.top);
  const newTop = oldTop + change2;
  img2.style.top = newTop + 'px';
  if (newTop >= window.innerHeight) {
    change2 -= 1;
  } else if (newTop === 0) {
    change2 += 1;
  }
};

setInterval(watchKittyFall, 5);