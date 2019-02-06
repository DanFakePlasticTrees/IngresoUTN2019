/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostrar()
{
	var dato= prompt("Ingrese dato");
	document.getElementById("elNombre").value = dato;
}

