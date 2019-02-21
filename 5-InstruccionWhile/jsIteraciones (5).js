function Mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase;
while (!(sexo=="m"|| sexo=="f")){
sexo = prompt("Inválido. Ingrese f o m: ").toLowerCase;

}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN