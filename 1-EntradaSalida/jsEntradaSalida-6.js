/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var numeroUno = document.getElementById("numeroUno").value, numeroDos =document.getElementById("numeroDos").value;
numeroUno= parseInt(numeroUno);
numeroDos = parseInt (numeroDos);
var suma = numeroUno + numeroDos;
alert(suma);
}

