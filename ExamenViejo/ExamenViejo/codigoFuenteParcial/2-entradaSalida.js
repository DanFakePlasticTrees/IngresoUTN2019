//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{ var importe = parseInt ( prompt ("Ingrese un importe: "));
var iva; 

while (importe < 0 || isNaN (importe)){
    importe = parseInt ( prompt ("Ingrese un importe válido : "));}

    iva = 21*importe/100;
document.getElementById('importe').value = importe + iva; 



}

