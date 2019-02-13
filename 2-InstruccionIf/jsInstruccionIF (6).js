function Mostrar()
{
//tomo la edad  
var edad = parseInt (document.getElementById("edad").value);
if (edad >=13 && edad <=17) {
    alert("Es adolescente");
} else {
    if (edad < 13) {alert("Es niño");} else {alert("Es mayor de edad");}
}






}//FIN DE LA FUNCIÓN
