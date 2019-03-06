//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
var numero;
var numerosPares=0;
var promedio;
var suma = 0;
var maximo;
var minimo;
var respuesta;
var contador =0;
flag =0;

do { numero = parseInt(prompt("Ingrese un número positivo: "))

while ( isNaN (numero) || numero < 0 ) {  
    numero = parseInt(prompt("Error. Ingrese un número positivo: "))}

if (numero%2==0){
numerosPares++;
}
if ( numero > maximo || flag ==0){
maximo = numero;
}
if (numero < minimo || flag ==0){
minimo =numero;
flag =1;
}
suma += numero;
contador++;

respuesta = prompt ("Desea ingresar más números? s/n:").toLowerCase();
while (respuesta != "s" && respuesta !="n") { 
    respuesta = prompt ("Error. Desea ingresar más números? s/n").toLowerCase();}
}

while ( respuesta == "s")


	promedio =suma/contador;

document.write( "La cantidad de números pares es: " + numerosPares + "<br/>"+ 
"El promedio es:  " + promedio.toFixed(2) + "<br/>" + "La suma es: " + suma + "<br/>" +
    "El máximo es: " + maximo + "<br/>" + "El mínimo es: "+ minimo + "<br/>")

}

