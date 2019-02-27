function Mostrar()
{


	var positivo=0;
	var negativo=1;
	var contNegativo = 0;
	var respuesta='si';

do {
	numero = parseInt(prompt("ingrese un número: "));
while (isNaN (numero)) {
	numero = parseInt(prompt("Esto no es un número. Ingrese un número: "));
	}
	if (numero >= 0){
positivo +=numero;
}
else {

negativo*=numero;
contNegativo++;
}

	respuesta = prompt("Desea continuar agregando números?").toLowerCase();

} while (respuesta =='si');

if (contNegativo == 0) {negativo = 0};

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN