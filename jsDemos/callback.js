const botonElement = document.getElementById("boton");
const mensajeElement = document.getElementById("mensaje");

botonElement.addEventListener("click",hola);

function hola(){
    mensajeElement.innerHTML = "Hola";
    setTimeout(adios, 1000);
}

function adios(){
    mensajeElement.innerHTML = "¡Adiós!";
    setTimeout(borrar, 1000);
}

function borrar(){
    mensajeElement.innerHTML = "";
}
