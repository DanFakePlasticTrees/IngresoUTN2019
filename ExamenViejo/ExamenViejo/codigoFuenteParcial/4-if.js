//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{ var numeroUno = parseInt (prompt ("Ingrese el primer número: "));

while (isNaN (numeroUno)) {
    numeroUno = parseInt (prompt ("Error. Ingrese el primer número: "));
}


var numeroDos = parseInt (prompt ("Ingrese el segundo número: "));

while (isNaN(numeroDos)) {
    numeroDos = parseInt (prompt ("Error.Ingrese el segundo número: "));

}
     
var multiplicacion =numeroUno*numeroDos;
var suma = numeroUno+numeroDos
var resta = numeroUno - numeroDos;

if (numeroUno == numeroDos) { 
    document.write  ("El producto de " + numeroUno + " y "+ numeroDos+ " es " +multiplicacion)} 
else if (numeroUno>numeroDos) 
{document.write ("La resta de " + numeroUno + " y " + numeroDos + " es " + resta)} else {
 document.write ("La suma de " + numeroUno + " y " + numeroDos + " es " + suma );   
}


}

