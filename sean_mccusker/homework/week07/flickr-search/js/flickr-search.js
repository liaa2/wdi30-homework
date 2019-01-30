let currentPage = 1;

const showImages = function (results) {
  // Nested AKA helper function returns a thumbnail URL for a given photo object.
  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg' // Change 'q' to something else from the docs for different sizes
    ].join('');
  };

  console.log('Results', results);

  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img />', {src: thumbnailURL}); // equivalent to .attr('src', thumbnailURL)
    $img.appendTo('#images');
  });
};

const searchFlickr = function (term) {
  console.log(`Searching Flickr for ${ term }`);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    // Via Flickr docs:
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: term,
    format: 'json',
    page: currentPage++
  }).done(showImages);

};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault();

    const query = $('#query').val();
    searchFlickr(query);
  });

  // EXTREMELY TWITCHY
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    // You may need to tweak the value below
    if (scrollBottom <= 500) {
      const query = $('#query').val(); // There are better ways to do this.
      searchFlickr(query);
    }
  });
});
