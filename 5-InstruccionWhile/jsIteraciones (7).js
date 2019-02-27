function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
var promedio;
do { 
numero = parseInt(prompt ("Ingrese un número" ));
acumulador += numero;
contador ++;
while (isNaN(numero)){
numero = parseInt(prompt("Eso no es un número, ingrese un número"));
}


respuesta = prompt("Desea ingresar más números?").toLowerCase();

} while (respuesta == 'si');

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN