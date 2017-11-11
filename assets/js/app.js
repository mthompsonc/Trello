document.getElementById('form').style.display='none';

var btn1 = document.getElementById('anadir');

console.log("holi1");

btn1.addEventListener("click", function(){
var container = document.getElementById('card');
btn1.style.display = "none";

document.getElementById('form').style.display='inline-block';
});
