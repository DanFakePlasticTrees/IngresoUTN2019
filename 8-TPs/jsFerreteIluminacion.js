/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidad = parseInt(document.getElementById ("Cantidad").value);
     var marca = (document.getElementById ("Marca").value);
     var precio = cantidad * 35;
    var cincuentaPorCiento = (precio * 50) / 100;
    var cuarentaPorCiento = (precio * 40) / 100;
    var treintaPorCiento = (precio * 30) / 100;
    var veinticincoPorCiento = (precio * 25) / 100;
    var veintePorCiento = (precio * 20) / 100;
    var quincePorCiento = (precio * 15) / 100;
    var diezPorCiento = (precio * 10) / 100;
    var cincoPorCiento = (precio * 5) / 100;
    var precioFinal;
    precioFinal=parseInt(precioFinal);
    
  /* 
   if (cantidad >= 6) {precioFinal = precio - cincuentaPorCiento; } 
else {if (cantidad == 5) {if (marca =="ArgentinaLuz"){precioFinal = precio - cuarentaPorCiento;}
else {precioFinal = precio - treintaPorCiento;}}
else {if (cantidad ==4){if (marca=="ArgentinaLuz"||marca == "FelipeLamparas"){precioFinal = precio - veintePorCiento;}
else {precioFinal= precio- quincePorCiento;}} else {if (cantidad == 3)
    {if(marca=="ArgentinaLuz"){precioFinal = precio - quincePorCiento; } 
    else {if(marca=="FelipeLamparas") {precioFinal= precio - diezPorCiento;}
else {precioFinal= precio - cincoPorCiento;}}}}}}

document.getElementById("precioDescuento").value= precioFinal;
 var ingresosBrutos = (precioFinal*10)/100;
if (precioFinal >= 120) { document.getElementById("precioDescuento").value= precioFinal + ingresosBrutos;
alert("Usted pagó IBB: " + ingresosBrutos);}
*/
 


switch (cantidad){
case 1:
case 2:
precioFinal = precio;
break;
case 3 : if(marca=="ArgentinaLuz"){precioFinal = precio - quincePorCiento; } 
    else {if(marca=="FelipeLamparas") {precioFinal= precio - diezPorCiento;}
    else {precioFinal= precio - cincoPorCiento;}}
break;
case 4 : {if (marca=="ArgentinaLuz"||marca == "FelipeLamparas"){precioFinal = precio - veintePorCiento;}}
case 5:{
if (marca =="ArgentinaLuz"){precioFinal = precio - cuarentaPorCiento;}
else {precioFinal = precio - treintaPorCiento;}
} break ;
default: {
{precioFinal = precio - cincuentaPorCiento;}
}
}

document.getElementById("precioDescuento").value= precioFinal;
 var ingresosBrutos = (precioFinal*10)/100;
if (precioFinal >= 120) { document.getElementById("precioDescuento").value= precioFinal + ingresosBrutos;
alert("Usted pagó IBB: " + ingresosBrutos);}
}