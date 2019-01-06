$(document).ready(function () {

  const randomPosition = function (div) {
    $(div).css({position: "absolute", top: Math.random() * $(window).height(), left: Math.random() * $(window).width()})
  }

  let Word = function () {
    this.fadeInTime = 1000;
    this.fadeOutTime = 2000;
    this.fontSize = 12;
  }

  let word = new Word();
  const gui = new dat.GUI();
  gui.add(word, "fadeInTime", 1, 5000);
  gui.add(word, "fadeOutTime", 1, 5000);
  gui.add(word, "fontSize", 1, 40);

  const randomWord = function () {
    const random = $("#text-container").text().split(/[ ,.:""\n\-]+/)[Math.floor(Math.random() * $("#text-container").text().split(/[ ,.:""\n\-]+/).length)];
    const $div = $("<div class='word'></div>").html(random);
    $div.css("font-size", word.fontSize);
    $("body").append($div);
    randomPosition($div);
    $div.fadeIn(word.fadeInTime).fadeOut(word.fadeOutTime);
  }

  setInterval(randomWord, 100);
})
