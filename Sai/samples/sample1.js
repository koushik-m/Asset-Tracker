var a = document.getElementById("submit");
a.addEventListener("click",function(){
"use strict"
var users= {
    username: "",
    password: ""
};
 users.username = document.getElementById('username').value;
 users.password = document.getElementById('password').value;
var obj = [];
obj.push(users);
console.log(obj);
})
