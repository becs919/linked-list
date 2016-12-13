$('.enter-button').on('click', function() {
 var $websiteTitle = $('.website-title-input').val();
 var $websiteUrl = $('.website-url-input').val();
 var $isValid = validateUrl($websiteUrl);
 if(!$isValid) {
   alert("Your URL is not valid. Try something like http://www.exampleurl.com");
   return;
 }

 $( ".right-side").append(`<section id="bookmark">
   <p id="bookmarked-website">${$websiteTitle}</p>
   <div></div>
   <a href="${$websiteUrl}" target="_blank" id='bookmarked-url'>${$websiteUrl}</a>
   <div></div>
   <button id="read-button" class="bookmark-buttons">Read</button>
   <button id="delete-button" class="bookmark-buttons">Delete</button>
 </section>`);


 function validateUrl($websiteUrl) {
 var urlRegex = /^(http|https)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/
 return urlRegex.test($websiteUrl);
}
});

$('.right-side').on('click','#read-button', function () {
$(this).closest('section').toggleClass('read');
console.log('mark as read');
});
