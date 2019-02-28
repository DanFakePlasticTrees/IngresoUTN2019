//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
	var nota;
    var sexo;
    var promedio;
    var notaMasBaja;
var notaMasAlta;


nota = parseInt (prompt("Ingrese nota de alumno"+ i));



sexo = prompt ("Ingrese sexo de alumno " + i).toLowerCase;




for (var i = 1; i <=6; i++){

while (nota < 0 || nota > 10 || isNaN(nota)) {

nota = parseInt (prompt("Error. Ingrese nota de alumno " + i));

}

while (sexo != "f" || sexo != "m") {

 sexo = prompt ("Error. Ingrese sexo de alumno " + i).toLowerCase;
}

if (nota > notaMasAlta || flag ==0) {
    notaMasAlta =nota;
    
}

}
}