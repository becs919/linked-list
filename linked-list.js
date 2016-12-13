$('.enter-button').on('click', function() {
  var $websiteTitle = $('.website-title-input').val();
  var $websiteUrl = $('.website-url-input').val();
  // $('#bookmarked-website').text($websiteTitle);
  // $('#bookmarked-url').text($websiteUrl);
  $( ".right-side").append(`<section id="bookmark">
    <p id="bookmarked-website">${$websiteTitle}</p>
    <div></div>
    <p id="bookmarked-url">${$websiteUrl}</p>
    <div></div>
    <button id="bookmark-buttons" class="read-button">Read</button>
    <button id="bookmark-buttons" form=""class="delete-button">Delete</button>
  </section>`);
});
