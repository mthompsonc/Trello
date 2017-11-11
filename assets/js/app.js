document.getElementById('form').style.display='none';
var section =document.getElementById('cards'); //escondiendo form

var btn1 = document.getElementById('anadir'); //

console.log("holi1");

btn1.addEventListener('click', function(){
var container = document.getElementById('card');
btn1.style.display = "none";
document.getElementById('form').style.display='inline-block';
});

var btn2 = document.getElementById('SaveButton');
console.log("holi2");
btn2.addEventListener('click', function(){
  document.getElementById('form').style.display='none';
  var container = document.getElementById('contenedor');
  document.getElementById('card').style.float='left';
  document.getElementById('contenedor').style.float='left';

  var ingreso = document.getElementById('primerInput').value;
  var tText = document.createTextNode(ingreso);
  var titulo = document.createElement('p');
  var divTask = document.createElement('div');

  divTask.style.float='left';

console.log("holi3");
  divTask.classList.add('tTarjeta');
  titulo.appendChild(tText);
  divTask.appendChild(titulo);
  container.appendChild(divTask);

  section.insertBefore(contenedor, card);
  document.getElementById('form').style.display='inline-block';
console.log("holi4");
  var divbtn3 = document.createElement('div');
  var abtn3 = document.createElement('button');
  var tbtn3 = document.createTextNode('Añadir Tarea');
  divbtn3.classList.add('btn3');
  abtn3.appendChild(tbtn3);
  divbtn3.appendChild(abtn3);
  divTask.appendChild(divbtn3);



  abtn3.addEventListener('click', function(){
    divbtn3.style.display='none';
    var divtextarea1 = document.createElement('div');
    var textarea1 = document.createElement('textarea');
    var btn4 = document.createElement('button');
    var tbtn4= document.createTextNode('Añadir una tarea')

    textarea1.classList.add('tarea1');
    btn4.classList.add('btn4');
    btn4.appendChild(tbtn4);
    divtextarea1.appendChild(textarea1);
    divtextarea1.appendChild(btn4);
    divTask.appendChild(divtextarea1);

    btn4.addEventListener('click', function(){
      var tareatextarea = textarea1.value;
      textarea1.value= '';
      var tareatext = document.createTextNode(tareatextarea);
      var ptarea = document.createElement('p');
      var lapiz = document.createElement('i');
      lapiz.classList.add('fa', 'fa-pencil');
      var divtarea = document.createElement('div');
      ptarea.appendChild(tareatext);
      divtarea.appendChild(ptarea);
      divtarea.appendChild(lapiz);
      divTask.insertBefore(divtarea, divtextarea1);
      ptarea.style.display='inline-block';
      lapiz.style.display='inline-block';
      ptarea.remove.style;
      lapiz.remove.style;
    })
 })
}
)
