"use strict";
var login = document.getElementById('login');

login.addEventListener('click', function () {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    var flag = 0;
    for (var i = 0; i < userdata.length; i++) {
        console.log(userdata[i]);
        if (username == userdata[i].username && password == userdata[i].password) {
            flag = 1;
            sessionStorage.setItem("name", username);
            if(userdata[i].role=="user"){
            window.location.href = "user_home1.html";
            }else if(userdata[i].role=="admin"){
                window.location.href = "admin_home.html"
            }
        }
    }
    if (flag == 0) {
        alert('Incorrect Login details')
    }
});



