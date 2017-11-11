document.getElementById('form').style.display='none';

var btn1 = document.getElementById('anadir');

console.log("holi1");

btn1.addEventListener('click', function(){
var container = document.getElementById('card');
btn1.style.display = "none";
document.getElementById('form').style.display='inline-block';
});

var btn2 = document.getElementById('SaveButton');
console.log("holi1");
btn2.addEventListener('click', function(){
  document.getElementById('form').style.display='none';
  var container = document.getElementById('card');
  var ingreso = document.getElementById('primerInput').value;
  var tText = document.createTextNode(ingreso);
  var titulo = document.createElement('p');
  var divTitle = document.createElement('div');
  divTitle.classList.add('tTarjeta');
  titulo.appendChild(tText);
  divTitle.appendChild(titulo);
  container.appendChild(divTitle);

  var divbtn3 = document.createElement('div');
  var abtn3 = document.createElement('button');
  var tbtn3 = document.createTextNode('Añadir Tarea');
  abtn3.appendChild(tbtn3);
  divbtn3.appendChild(abtn3);
  container.appendChild(divbtn3);

}
)
