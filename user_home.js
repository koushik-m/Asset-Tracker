var logout = document.getElementById("logout");
var logout_modal = document.getElementById('logout_modal');
var logout_yes = document.getElementById('logout_yes');
var logout_no = document.getElementById('logout_no');
logout.onclick = function(){
  logout_modal.style.display = "block";
}
logout_yes.onclick = function(event){
  window.location.href = 'Login.html';
}

logout_no.onclick = function(event){
  logout_modal.style.display = "none";;
}