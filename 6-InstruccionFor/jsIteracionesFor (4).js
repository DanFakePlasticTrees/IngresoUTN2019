function Mostrar()
{ 

var numero;

for (; ; ) {

numero = parseInt (prompt("Ingrese un número: "));
while (isNaN (numero)){
numero = parseInt (prompt("nO ES NUM. Ingrese un número: "));

}

if (numero == 9) {
    break;
}

}


console.log(i); 


}


