document.getElementById('form').style.display='none'; //escondiendo form

var btn1 = document.getElementById('anadir'); //

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
  divbtn3.classList.add('btn3');
  abtn3.appendChild(tbtn3);
  divbtn3.appendChild(abtn3);
  container.appendChild(divbtn3);


  abtn3.addEventListener('click', function(){
    divbtn3.style.display='none';
    var divtextarea1= document.createElement('div');
    var textarea1 = document.createElement('textarea');
    var btn4 = document.createElement('button');
    var tbtn4= document.createTextNode('Añadir una tarea')
    textarea1.classList.add('tarea1');
    btn4.classList.add('btn4');
    btn4.appendChild(tbtn4);
    divtextarea1.appendChild(textarea1);
    divtextarea1.appendChild(btn4);
    container.appendChild(divtextarea1);
 })
}
)
