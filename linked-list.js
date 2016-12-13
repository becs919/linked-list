$('.enter-button').on('click', function() {
  $('#bookmarked-website').text($('.website-title-input').val());
  $('#bookmarked-url').text($('.website-url-input').val());
  $( "#bookmark").clone().appendTo( ".right-side" );
});
