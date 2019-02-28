//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{var mes= prompt ("Ingrese mes del año: ").toLowerCase;
	
	switch(mes){ case "enero":
    case "febrero":
    {alert ("veranitoo!");
    break;}
    
    default:
    alert("Extraño febrero y enero");
    break;  

    }
	
}

