var modal = document.getElementById('myModal');
var btn = document.getElementById("change_password");
var logout = document.getElementById("logout");
var logout_modal = document.getElementById('logout_modal');
var span = document.getElementsByClassName("close")[0];
var submit = document.getElementById('email_address');
var resetPasswordEmail = document.getElementById('password_email');
var logout_yes = document.getElementById('logout_yes');
var logout_no = document.getElementById('logout_no');

var emailReg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

 btn.onclick = function() {
   modal.style.display = "block";
 }

logout.onclick = function(){
  logout_modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


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

logout_yes.onclick = function(event){
  window.location.href = 'Login.html';
}

logout_no.onclick = function(event){
  logout_modal.style.display = "none";;
}