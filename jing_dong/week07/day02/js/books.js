console.log("11111");

const fetchFact = function (name) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q='+ name); // Configure the browser

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4 ) {
      return; // Request is still in progress so don't do anything yet.
    }

    const data = JSON.parse(xhr.responseText).items[0]; // Translate the string reposne into a real JS object

    $("#title").text(data.volumeInfo.title);
    $("#author").text(data.volumeInfo.authors);
    $("#thumbnail").attr('src', data.volumeInfo.imageLinks.thumbnail);

  }

  xhr.send();// press enter: strat the ASYCHRONOUS request

};

$("#search-form").on('submit', function (e) {
  e.preventDefault();
  if ($('#bookname').val() !== "")
  fetchFact ($('#bookname').val());
});

$('#search').on('click', function() {
  if ($('#bookname').val() !== "")
  fetchFact ($('#bookname').val());
});
