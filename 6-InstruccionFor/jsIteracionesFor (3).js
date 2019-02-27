function Mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));

while (isNaN(repeticiones)) {
repeticiones = parseInt(prompt("eso no e sun número. ingrese el número de repeticiones"));

}

for (var i = 0; i < repeticiones; i ++){
    console.log("Hola UTN FRA");
}


}//FIN DE LA FUNCIÓN