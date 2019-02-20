const $searchInput = $('#book_title');

$('form').on('submit', function (event) {
  event.preventDefault();
  const title = $searchInput.val();
  $searchInput.val('').focus();

  $.ajax('https://www.googleapis.com/books/v1/volumes?q=').done(function (data) {
      $('body').append('<p>' + data.text + '<p>');
  })
})
