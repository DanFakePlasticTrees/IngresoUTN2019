function Mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numero;
	
	// declarar variables
	
	var respuesta='si';

do { numero = parseInt(prompt("Ingrese un número: "));
while (isNaN (numero)) {
	numero = parseInt(prompt("Esto no es un número. Ingrese un número: "));
	}
maximo == numero;
minimo == numero;
respuesta = prompt ("Desea ingresar otro número?").toLowerCase();
while ( numero >= maximo) {
	numero == maximo; 
}
while (numero <= minimo) {
numero == minimo;

}
} while (respuesta== 'si');


document.getElementById ("maximo").value= maximo;
document.getElementById ("minimo").vaue= minimo;


}//FIN DE LA FUNCIÓN