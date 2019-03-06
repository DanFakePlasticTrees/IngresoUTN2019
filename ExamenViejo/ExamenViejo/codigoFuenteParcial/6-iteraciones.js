//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ventas; 
    var maximo;
    var minimo;
    var diaMaximo;
    var diaMinimo;
    var flag = 0;

for ( var i = 0; i < 7; i ++)
{ ventas = parseInt (prompt (" Ingrese las ventas del día: "));

while (isNaN (ventas) || ventas < 0) 
{ ventas = parseInt (prompt (" Error. Ingrese las ventas del día: "))
}

if (ventas > maximo || flag == 0) {
maximo = ventas;
diaMaximo = i;
}
if ( ventas < minimo || flag == 0) {
minimo = ventas;
diaMinimo = i;
flag = 1;

}

}

document.write ("El día de mayor venta fue "+ diaMaximo + ", y las ventas fueron de $" + maximo+ "<br/>"
+ "El día de menor ventas fue " + diaMinimo + ", y las ventas fueron de $" + minimo)


	
}

