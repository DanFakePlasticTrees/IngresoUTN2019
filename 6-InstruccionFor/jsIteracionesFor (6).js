function Mostrar()
{
var numero = parseInt (prompt("Ingrese un número positivo: "));
var contador = 0;
while (numero <= 0 || isNaN(numero)) {
numero = parseInt (prompt("No es un num positivo. Ingrese un número positivo: "));

}


for (var i = 1; i <= numero; i++) {

if ( i % 2 == 0) {
contador ++;
console.log(i);
}

}
console.log ("cantidad de pares: " + contador);
}

//FIN DE LA FUNCIÓN