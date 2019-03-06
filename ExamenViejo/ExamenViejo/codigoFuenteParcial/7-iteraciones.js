//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
var nota;
var sexo;
var acumulador=0;
var promedio;
var notaBaja;
var sexoNotaBaja;
var varonesMayoraSeis=0;
flag = 0;

for ( i = 0; i< 7; i++) {
 nota = parseInt ( prompt ( "Ingrese nota: "));

 while (isNaN (nota) || nota < 0 || nota > 10) {
    nota = parseInt ( prompt ( "Error. Ingrese nota: "));}


    sexo = prompt("Indique sexo del alumno: ").toLowerCase();
    while (sexo != "m" && sexo != "f") {
     sexo = prompt("Error. Indique sexo del alumno: ").toLowerCase();}


acumulador = acumulador + nota;

if ( nota < notaBaja || flag == 0){
notaBaja = nota;
sexoNotaBaja = sexo;
flag =1;

}

if ( nota >= 6 && sexo == "m"){
varonesMayoraSeis++;

}
}
promedio= acumulador/i;

alert( "El promedio es " + promedio.toFixed(2)+ ". La nota más baja es de: "+ notaBaja+
". El sexo del alumno con nota más baja es " + sexoNotaBaja + 
". La cantidad de varones aprobados es " + varonesMayoraSeis)



}