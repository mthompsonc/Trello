document.getElementById('form').style.display = 'none';
// Escondiendo form

var section = document.getElementById('cards'); // agregando en una variable el elemento con id cards (es la sección donde irán las tarjetas de trello)

var btn1 = document.getElementById('anadir'); // agregando en una variable el elemento con id anadir que es el primer boton para añadir una tarjeta

btn1.addEventListener('click', function() {
  var container = document.getElementById('card');
  btn1.style.display = 'none';
  document.getElementById('form').style.display = 'inline-block';
}); // en esta función se le da actividad al boton para añadir una tarjeta y para que aparezca nuestra form que da la opción de añadir un título.

var btn2 = document.getElementById('saveButton');
btn2.addEventListener('click', function() {
  document.getElementById('form').style.display = 'none';
  var container = document.getElementById('contenedor');
  document.getElementById('card').style.float = 'left';
  document.getElementById('contenedor').style.float = 'left';

  var ingreso = document.getElementById('primerInput').value;
  if (ingreso === null || ingreso === '') {
    return alert('Debes ingresar un dato');
  } else {
    var tText = document.createTextNode(ingreso);
    var titulo = document.createElement('h4');
    var divTask = document.createElement('div');

    divTask.style.float = 'left';
    ingreso.value = '';
    divTask.classList.add('tTarjeta');
    titulo.appendChild(tText);
    divTask.appendChild(titulo);
    container.appendChild(divTask);

    section.insertBefore(contenedor, card);
  // Función de click a partir del botón que está bajo del input para el título de la tarjeta. Se agrega el título en un nuevo div que irán dentro del div Contenedor.
  }

  document.getElementById('form').style.display = 'inline-block';

  //
  var divbtn3 = document.createElement('div');
  var abtn3 = document.createElement('button');
  var tbtn3 = document.createTextNode('Añadir Tarea');

  abtn3.classList.add('btn3');

  abtn3.appendChild(tbtn3);
  divbtn3.appendChild(abtn3);
  divTask.appendChild(divbtn3);

  abtn3.addEventListener('click', function() {
    divbtn3.style.display = 'none';
    var divtextarea1 = document.createElement('div');
    var textarea1 = document.createElement('textarea');
    var btn4 = document.createElement('button');
    var tbtn4 = document.createTextNode('Añadir una tarea');


    textarea1.classList.add('tarea1');
    btn4.classList.add('btn4');
    btn4.appendChild(tbtn4);
    divtextarea1.appendChild(textarea1);
    divtextarea1.appendChild(btn4);
    divTask.appendChild(divtextarea1);


    btn4.addEventListener('click', function() {
      var tareatextarea = textarea1.value;
      textarea1.value = '';
      var tareatext = document.createTextNode(tareatextarea);
      var ptarea = document.createElement('p');
      var lapiz = document.createElement('i');
      lapiz.classList.add('fa', 'fa-pencil');
      var divtarea = document.createElement('div');
      divtarea.classList.add('divtarea');
      ptarea.appendChild(tareatext);
      divtarea.appendChild(ptarea);
      divtarea.appendChild(lapiz);
      divTask.insertBefore(divtarea, divtextarea1);
      ptarea.style.display = 'inline-block';
      lapiz.style.display = 'inline-block';
    });
  });
});
