/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numeroUno = parseInt(document.getElementById("numeroUno").value), numeroDos = parseInt (document.getElementById("numeroDos").value);
	
    var suma = numeroUno + numeroDos;
    alert("La suma es " + suma);
}

function restar()
{ var numeroUno = document.getElementById("numeroUno").value, numeroDos = document.getElementById("numeroDos").value;
	numeroUno = parseInt (numeroUno);
    numeroDos= parseInt(numeroDos);
    var resta = numeroUno - numeroDos;
    alert("La resta es " + resta);
	
}

function multiplicar()
{ var numeroUno = document.getElementById("numeroUno").value, numeroDos = document.getElementById("numeroDos").value;
	numeroUno = parseInt (numeroUno);
    numeroDos= parseInt(numeroDos);
    var multiplicacion = numeroUno * numeroDos;
    alert( "El producto es " + multiplicacion);
	
}

function dividir()
{
	var numeroUno = document.getElementById("numeroUno").value, numeroDos = document.getElementById("numeroDos").value;
	numeroUno = parseInt (numeroUno);
    numeroDos= parseInt(numeroDos);
    var cociente = numeroUno/numeroDos;
    alert("El cociente es " + cociente);
}

