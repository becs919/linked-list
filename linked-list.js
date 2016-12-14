

$('.enter-button').on('click', function() {
requireInput();
clearFields();
});

function appendRightSide() {
var $websiteTitle = $('.website-title-input').val();
var $websiteUrl = $('.website-url-input').val();
$( ".right-side").append(`<section class="bookmark">
  <p id="bookmarked-website">${$websiteTitle}</p>
  <div></div>
  <a href="${$websiteUrl}" target="_blank" id='bookmarked-url'>${$websiteUrl}</a>
  <div></div>
  <button id="read-button" class="bookmark-buttons">Read</button>
  <button id="delete-button" class="bookmark-buttons">Delete</button>
  </section>`);
updateSectionCounter();
};




$('.right-side').on('click','#read-button', function () {
  $(this).closest('section').toggleClass('read');
  updateSectionCounter();
});

$('.right-side').on('click', '#delete-button', function (){
  $(this).closest('section').remove();
  updateSectionCounter();
});

$('.clear-button').on('click', function(){
  $('.read').remove();
  updateSectionCounter();
});

$('.website-url-input , .website-title-input').keyup(function(){
  $('.enter-button').prop("disabled", false);
  console.log('heyyy');
});


function updateSectionCounter() {
  var bookmarkNum = $('.bookmark').length;
  var readNum = $('.read').length;
  var unreadBookmarks = bookmarkNum - readNum;
  $('.bookmark-counter').text(bookmarkNum);
  $('.read-counter').text(readNum);
  $('.unread-counter').text(unreadBookmarks);
}


function clearFields() {
  $('.website-title-input').val('');
  $('.website-url-input').val('');
};

function requireInput() {
if($('.website-title-input').val() === ""|| $('.website-url-input').val() === ""){
    alert("ERROR: Both fields are required");
    console.log('HIIIIII');
    return;
} else {
appendRightSide();
}
};


// function validateUrl($websiteUrl) {
// var urlRegex = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/
// return urlRegex.test($websiteUrl);
// }
