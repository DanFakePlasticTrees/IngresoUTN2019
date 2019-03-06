//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var base = parseInt ( document.getElementById ("lado").value);
    var perimetro = base*3;

    
    if (isNaN(base) || base < 0) {   alert ("Ingrese un número válido")}
else    
   { alert( "El perímetro es: " + perimetro);}







}

