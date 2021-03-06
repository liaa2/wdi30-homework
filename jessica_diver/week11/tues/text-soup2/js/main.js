$(document).ready(function(){

  // get text from wikipedia


  let timer = null;
  let counter = 0;
  let words;

  const urlParams = new URLSearchParams(window.location.search); // '?page=Alan+Turing'
  // get the value of the 'page' querystring key

  let page = urlParams.get('page');

  // API url example from Stack overflow in read me

  $.getJSON("http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?", {page: 'Alan Turing'}) .done(data => {
    console.log(data);

    let wikiHTML = data.parse.text['*'];
    let text = $('<div>').html(wikiHTML).text();

    words = text.split(/[ ,."';\n\-]+/);

    timer = setInterval(putWord, 100);
  });


  // This object will store all the variables we want the GUI controls to change;
  // we need to use an object structure because that is what the dat.gui library expects
  const controller = {
    fadeInSpeed: 1000, // These number variables will cause a GUI slider element to be shown
    fadeOutSpeed: 2000,
    fontSizeRange: 80,
    timerInterval: 100,
    textColor: '#32df1d',
    // This is a string, so the GUI will show a text field
    addWord: '',
    // a method like this will cause a GUI button to be shown, which calls this function when clicked
    clearWords: function(){
      // Just remove all elements with class="word"
      $('.word').remove();
    }
  }

  // create our GUI object
  const gui = new dat.GUI();

  // Add the various controller elements
  // Note that we pass our controls object as a variable, but the internal properties (variables) as a string.
  // We also need to specify a min and max range for the slider
  gui.add(controller, 'fadeInSpeed', 1, 2000);
  gui.add(controller, 'fadeOutSpeed', 1, 3000);
  gui.add(controller, 'fontSizeRange', 1, 300);

  // In order to use the 'onFinishChange' event handler for a GUI element, we need to
  // keep track of the return value of gui.add, a reference to the element, to attach
  // our event handler to.
  const timerController = gui.add(controller, 'timerInterval', 1, 1000);

  timerController.onFinishChange(function(value){
    // We'd better clear the old timer first, or we'll have multiple setInterval timers running
    clearInterval(timer);
    timer = setInterval(putWord, value);
  })

  gui.addColor(controller, 'textColor');

  gui.add(controller, 'addWord');

  gui.add(controller, 'clearWords');

  // This single line grabs the text contents of our div and returns it as one big string (the .html()
  // jQuery method would grab any child HTML it contained too), then turns it into an array by splitting
  // the string up based on a regular expression which looks for spaces, punctuation and newlines.
  // (That punctuation will not appear in the words that fill our new array.)
  // So, note that .split() will accept a regular expression as well as just a string...
  // const words = $("#words").text().split(/[ ,."';\n\-]+/);

  // store the body in a variable to use later when appending
  const $body = $("body");

  // helper function to return a number between 0 and max
  const random = function(max){
    return Math.floor(Math.random() * max);
  }

  // Our main function to randomly put a word on the page
  const putWord = function(){
    // Get a random word from our array, using our random helper funcion, with the word array length as the maximum value
    const randomIndex = random(words.length);
    // select random word
    // const text = words[randomIndex];
    // console.log(text);

    let text = '';

    if (( controller.addWord.length > 0) && ( counter % 2 === 0 )) {
      text = controller.addWord;
    } else {
      text = words[randomIndex];
    }

    // Insert the random word as the content of a new div
    const $div = $("<div class='word'>").html(text);

    $div.css({
      top: random(window.innerHeight) + "px",
      left: random(window.innerWidth) + "px",
      // fontSize: (40 + random(80)) + "px",
      fontSize: (40 + random(controller.fontSizeRange)) + "px",
      // color: "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")",
      color: controller.textColor,
      transform: `rotate(${random(360)}deg)`
    });

    // apppend the new $div to the body
    $div.appendTo($body);

    // make the text fade in and fade out of the screen
    // $div.fadeIn(1000).fadeOut(2000, function(){
    //   $(this).remove();
    // });
    $div.fadeIn(controller.fadeInSpeed).fadeOut(controller.fadeOutSpeed, function(){
      $(this).remove();
    });

    // Need to increment our counter at the end of every call to putWord()
    counter ++;
  };
  // putWord();

  // We keep track of the ID returned by setInterval when we first run it here,
  // so we can cancel it later in our onFinishChange event handler for the GUI slider

  // We're going to comment out this timer and move it into our code above
  // timer = setInterval(putWord, 100);
});
