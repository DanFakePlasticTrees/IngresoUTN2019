function Mostrar()
{

	var contador=0;
	var acumulador=0;
var numero = parseInt(prompt("Ingrese número"));

while (contador < 5) {
acumulador += numero;
contador++;
numero = parseInt(prompt("Ingrese otro número"));
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN