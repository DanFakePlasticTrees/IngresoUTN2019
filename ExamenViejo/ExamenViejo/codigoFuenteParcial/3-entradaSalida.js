//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{ var largo;
  var ancho;
  var perimetro;
  var alambre;

largo = parseInt(document.getElementById ("largo").value);
ancho = parseInt(document.getElementById ("ancho").value);

if (isNaN(largo) || isNaN (ancho) || largo <= 0 || ancho <= 0)
{ alert("Error. Ingrese datos válidos");


} else {

perimetro = 2*(largo+ancho);
alambre = 6*perimetro;
alert ("Para un terreno de "+ perimetro +" metros se necesitan "+alambre+" metros de alambre");}


}

