function Mostrar()
{ var numero;
    var numeroPrimo = 0;

numero = parseInt(prompt ("Ingrese número: "));
for (var i = 2 ; i < numero ; i++ ) {
if (numero%i==0 ) {
numeroPrimo++;
}
}

if (numeroPrimo ==0) { document.write(numero + " es un número primo") } else{
    document.write(numero + " no es un número primo")
}


}//FIN DE LA FUNCIÓN