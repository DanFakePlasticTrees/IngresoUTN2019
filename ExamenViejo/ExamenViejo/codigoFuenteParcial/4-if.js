//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	 var numeroUno = parseInt(prompt("ingrese el 1º número: "));
var numeroDos = parseInt (prompt("ingrese el segundo número"));


while (isNaN(numeroUno)) {
numeroUno = parseInt(prompt("Error. ingrese el 1º número: "));

}

while (isNaN(numeroUno)) {
numeroUno = parseInt(prompt("Error. ingrese el 1º número: "));

}
if (numeroUno == numeroDos) {
document.write(numeroUno*numeroDos);

} else if (numeroUno>numeroDos) {

    document.write(numeroUno-numeroDos);
} else {

    document.write(numeroUno+numeroDos);
}

}

