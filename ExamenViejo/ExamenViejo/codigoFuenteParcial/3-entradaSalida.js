//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{ var ancho= document.getElementById("ancho").value;
var largo = document.getElementById("largo").value;
	var perimetro = 2*ancho+2*largo;
    var alambre = perimetro*6;
    alert("Se necesitan " + alambre + " metro de alambre");
	
}

