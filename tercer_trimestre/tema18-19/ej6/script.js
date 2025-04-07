let tiempoInicio;
let tiempoTranscurrido = 0;
let intervalo;
let estaEnMarcha = false;

// Elementos del DOM
const displayTiempo = document.getElementById('displayTiempo');
const botonIniciar = document.getElementById('botonIniciar');
const botonPausar = document.getElementById('botonPausar');
const botonReiniciar = document.getElementById('botonReiniciar');

// Función para formatear el tiempo (hh:mm:ss)
function formatearTiempo(milisegundos) {
    // Calcular horas, minutos, segundos. Math.floor redondea a la baja el numero. 
    let horas = Math.floor(milisegundos / 3600000);  // 3600000ms = 1h
    milisegundos %= 3600000;  //dejo los ms restantes de las horas
    let minutos = Math.floor(milisegundos / 60000);  // 60000ms = 1min
    milisegundos %= 60000; // dejo los ms restantes de los minutos
    let segundos = Math.floor(milisegundos / 1000);  // 1000ms = 1s
    
    // Asegurar dos dígitos con ceros a la izquierda
    horas = horas.toString().padStart(2, '0');
    minutos = minutos.toString().padStart(2, '0');
    segundos = segundos.toString().padStart(2, '0');

    return horas + ":" + minutos + ":" + segundos;
}

// Función para actualizar el display del cronómetro
function actualizarTemporizador() {
    const tiempoActual = Date.now();
    tiempoTranscurrido = tiempoActual - tiempoInicio;
    displayTiempo.textContent = formatearTiempo(tiempoTranscurrido);
}

// Función para iniciar el cronómetro
function iniciarTemporizador() {
    if (!estaEnMarcha) {
        tiempoInicio = Date.now() - tiempoTranscurrido;
        intervalo = setInterval(actualizarTemporizador, 10);
        estaEnMarcha = true;
        
        // Cambiar estado de los botones
        botonIniciar.disabled = true;
        botonPausar.disabled = false;
    }
}

// Función para pausar el cronómetro
function pausarTemporizador() {
    if (estaEnMarcha) {
        clearInterval(intervalo);
        estaEnMarcha = false;
        
        // Cambiar estado de los botones
        botonIniciar.disabled = false;
        botonPausar.disabled = true;
    }
}

// Función para reiniciar el cronómetro
function reiniciarTemporizador() {
    pausarTemporizador();
    tiempoTranscurrido = 0;
    displayTiempo.textContent = '00:00:00';
}

// Event listeners para los botones
botonIniciar.addEventListener('click', iniciarTemporizador);
botonPausar.addEventListener('click', pausarTemporizador);
botonReiniciar.addEventListener('click', reiniciarTemporizador);