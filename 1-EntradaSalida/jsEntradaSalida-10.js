/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{ var importe =  parseInt (document.getElementById("importe").value);
var descuento = (importe*25)/100;
importeConDescuento = importe - descuento ;
document.getElementById ("resultado").value = importeConDescuento; 
}
