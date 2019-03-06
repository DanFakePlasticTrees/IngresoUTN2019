function Mostrar()
{ var numero;
var divisores;
var cantidadDiv = 0;

numero = parseInt(prompt ("Ingrese un número: "))
while (isNaN(numero) || numero < 0 ){
    numero = parseInt(prompt ("Error. Ingrese un número: "))
}
for (var i = 0; i <= numero; i++) {

if (numero%i == 0) {
divisores = i;
document.write(divisores + " es un divisor <br/>" )
cantidadDiv++;

}


}

document.write("La cantidad de divisores es: " + cantidadDiv)





}//FIN DE LA FUNCIÓN