$(document).ready(function() {
  $('#contact-success-message').hide();
})

$('#contact-us-form').submit(function(e) {
  e.preventDefault();
  $('#contact-success-message').show();
})