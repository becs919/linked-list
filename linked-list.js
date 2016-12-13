$('.enter-button').on('click', function() {
  var $websiteTitle = $('.website-title-input').val();
  var $websiteUrl = $('.website-url-input').val();
  $( ".right-side").append(`<section id="bookmark">
    <p id="bookmarked-website">${$websiteTitle}</p>
    <div></div>
    <a href="${$websiteUrl}" target="_blank" id='bookmarked-url'>${$websiteUrl}</a>
    <div></div>
    <button id="read-button" class="bookmark-buttons">Read</button>
    <button id="delete-button"class="bookmark-buttons">Delete</button>
  </section>`);
});
