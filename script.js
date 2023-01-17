var back1=document.querySelector(".backs");
var form=document.getElementById("form1");
var messages=document.querySelector(".message")
var headera=document.getElementById("heas");
function remove(){
   back1.style.display="none";
    form.style.display="none";
}

function add(){
    back1.style.display="block";
    form.style.display="flex";
}

function message(){
    messages.style.display="flex";
}

function menu(){
    headera.style.left="0";
}
function menuback(){
    headera.style.left="-50%";
}