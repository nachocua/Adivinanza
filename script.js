var adivinar = "Tortugas Ninja";
var intentos = 0;
var restantes;
function Guardar()
{
    event.preventDefault();
    var adivinanza = document.getElementById('txtJuego').value;

    if (adivinanza == '')
    {
        alert('No puede estar vacio');
        return;
    }
    else
    {
        if (intentos<4)
        {
            if(adivinanza==adivinar)
            {
                alert('Felicidades has acertado');
            }
            else
            {
                restantes = 3 - intentos;
                switch(intentos)
                {
                    case 0:
                        alert('Intentos restantes:'+restantes.toString());
                    break;
                    case 1:
                        alert('Intentos restantes:'+restantes.toString()+"\n"+'Se pueden manejar varios personajes');
                    break;
                    case 2:
                        alert('Intentos restantes:'+restantes.toString()+"\n"+"Nos gusta la pizza PIZZA TIME");
                    break;
                }
                intentos++;
            }
        }
        else
        {
            alert('Perdiste. Recarga la página o apreta en volver a jugar')
        }
    }
}

function Reiniciar()
{
    event.preventDefault();
    intentos = 0;
}