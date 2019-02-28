//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe = parseInt(prompt("ingrese el importe"));
    var iva = (importe*21)/100;

document.getElementById("importe").value = importe + iva;
}

