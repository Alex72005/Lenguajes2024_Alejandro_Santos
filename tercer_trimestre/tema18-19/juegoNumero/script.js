let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentosRestantes = 10;

const numero = document.getElementById("numero");
const verificar = document.getElementById("verificar");
const restaurar = document.getElementById("restaurar");
const mensaje = document.getElementById("mensaje");
const intentos = document.getElementById("intentos");

verificar.addEventListener("click", function () {
    const num = Number(numero.value);

    if (num < 1 || num > 100) {
        mensaje.textContent = "Por favor, introduce un número entre 1 y 100.";
        numero.value = "";
        numero.focus(); //para poner el cursor en el input
        return;
    }

    intentos.textContent = 'Intentos restantes: ' + intentosRestantes;
    intentosRestantes--;

    if (num === numeroSecreto) {
        mensaje.textContent = "¡Correcto! ¡Has adivinado el número!";
        verificar.disabled = true;
        restaurar.style.display = "inline-block";
    } else if (intentosRestantes === 0) {
        mensaje.textContent = '¡Te has quedado sin intentos! El número era ' + numeroSecreto;
        verificar.disabled = true;
        restaurar.style.display = "inline-block";
    } else if (num < numeroSecreto) {
        mensaje.textContent = "Número muy bajo. ¡Prueba un número más alto!";
    } else {
        mensaje.textContent = "Número muy alto. ¡Prueba un número más bajo!";
    }

    numero.value = ""; 
    numero.focus(); //para poner el cursor en el input
});

restaurar.addEventListener("click", function () {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentosRestantes = 10;
    intentos.textContent = "Intentos restantes: 10";
    mensaje.textContent = "";
    numero.value = "";
    numero.focus(); //para poner el cursor en el input.
    verificar.disabled = false; //habilito el boton probar.
    restaurar.style.display = "none";  //oculto el boton probar otra vez. 
});