function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		var numAleatorio = Math.round(Math.random()*10);
	if (numAleatorio<4) {alert ("¡Vamos, la próxima se puede! \nLa nota es: " + numAleatorio );
		}  else { if (numAleatorio >= 4 && numAleatorio <9 ){alert("¡Aprobó! \nLa nota es: " + numAleatorio);} 
	else {alert("¡Excelente! \nLa nota es: " + numAleatorio);}}

}//FIN DE LA FUNCIÓN