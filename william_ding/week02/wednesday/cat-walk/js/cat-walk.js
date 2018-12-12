/* -------------------------SET CAT VALUE--------------------------- */
const theCat = document.getElementById("cat");
theCat.style.left = 0;
let counter = 0;

/* ------------------------CHANGE CAT FUNCTION---------------------------- */
const changeCat = function () {
  if ( theCat.src === "http://www.anniemation.com/clip_art/images/cat-walk.gif") {
    theCat.src = "https://media.giphy.com/media/5gXYzsVBmjIsw/giphy.gif";
    console.log(1);
    return;
  }
  if ( theCat.src === "https://media.giphy.com/media/5gXYzsVBmjIsw/giphy.gif") {
    theCat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
    console.log(2);
    return;
  }
}

/* -----------------------PAUSE FUNCTIONS----------------------------- */
const pause = function () {
  counter++;
  if (counter > 2) {
    window.clearInterval(timer);
    changeCat();
    timer = window.setInterval(leftToRight2, 5);
  }
}

const pause2 = function () {
  counter++;
  if (counter > 2) {
    window.clearInterval(timer);
    changeCat();
    timer = window.setInterval(rightToLeft2, 5);
  }
}

/* ----------------------LEFT TO MIDDLE------------------------------ */
const leftToRight = function () {
    theCat.style.left = parseInt(theCat.style.left) + 1 + "px";
    if ( parseInt(theCat.style.left) === window.innerWidth / 2 - 125) {
      window.clearInterval(timer);
      changeCat();
      counter = 0;
      timer = window.setInterval(pause, 1000);
    }
}

/* ----------------------CONTINUE AFTER PAUSE------------------------------ */
const leftToRight2 = function () {
    theCat.style.left = parseInt(theCat.style.left) + 1 + "px";
    if ( parseInt(theCat.style.left) >= window.innerWidth - 250 ) {
      window.clearInterval(timer);
      timer = window.setInterval(rightToLeft, 5);
    }
}

/* -----------------------RIGHT TO MIDDLE----------------------------- */
const rightToLeft = function () {
    theCat.style.transform = "scaleX(-1)";
    theCat.style.left = parseInt(theCat.style.left) - 1 + "px";
    if ( parseInt(theCat.style.left) === window.innerWidth / 2 -125 ) {
      window.clearInterval(timer);
      changeCat();
      counter = 0;
      timer = window.setInterval(pause2, 1000);
    }
  }

  /* -------------------------CONTINUE AFTER PAUSE--------------------------- */
const rightToLeft2 = function () {
    theCat.style.left = parseInt(theCat.style.left) - 1 + "px";
    if ( parseInt(theCat.style.left) <= 0 ) {
      theCat.style.transform = "scaleX(1)";
      window.clearInterval(timer);
      timer = window.setInterval(leftToRight, 5);
    }
  }

  /* ------------------------START TIMER---------------------------- */
   let timer = window.setInterval(leftToRight, 5);
