const divs = document.querySelectorAll('.zona-divs div');
let conContenido = 0;
let vacios = 0;

divs.forEach(div => {
    if (div.id !== "resultado") {
        if (div.textContent.trim() !== "") {
            conContenido++;
        } else {
            vacios++;
        }
    }
});

const total = conContenido + vacios;

document.getElementById('resultado').innerHTML =
    "Resultado:<br>" +
    "Total: " + total + "<br>" +
    "Con contenido: " + conContenido + "<br>" +
    "Vacíos: " + vacios;
