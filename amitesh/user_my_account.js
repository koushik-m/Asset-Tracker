var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("change_password");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var submit = document.getElementById('email_address');

var resetPasswordEmail = document.getElementById('password_email');

var emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function failure(){
    resetPasswordEmail.defaultValue= "Enter a valid password";
}

submit.addEventListener('click', function() {
    console.log(resetPasswordEmail.value);
    if(emailReg.test(resetPasswordEmail.value)){
        modal.style.display = "none";
    }
    else{
        failure();
    }
  });