$('#form').on('submit',
function(e) {
  var email = $('#email').val();
  var valid = /.+@.+\..+/g;
  var validemail = valid.test(email);
 e.preventDefault();
 if(!validemail){
   console.log('Invalid email');
   $('body').replaceWith('<h1 id="error">The email you entered was invalid</h1>');
   return false;
 } else {
   console.log('Valid email');
   $('body').replaceWith('<h1 id="submission">Thank you! your form has been submitted<h1>');
 }
});
