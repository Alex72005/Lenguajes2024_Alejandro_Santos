let intervalo;
let tiempo = 0;

const tiempoElemento = document.getElementById("tiempo");
const botonIniciar = document.getElementById("iniciar");
const botonParar = document.getElementById("parar");
const botonResetear = document.getElementById("resetear");

function actualizarTiempo() {
  let horas = String(Math.floor(tiempo / 3600)).padStart(2, '0');
  let minutos = String(Math.floor((tiempo % 3600) / 60)).padStart(2, '0');
  let segundos = String(tiempo % 60).padStart(2, '0');
  
  tiempoElemento.textContent = horas + ":" + minutos + ":" + segundos;
}

function iniciarCronometro() {
  if (!intervalo) {
    intervalo = setInterval(() => {
      tiempo++;
      actualizarTiempo();
    }, 300);
  }
}

function pararCronometro() {
  clearInterval(intervalo);
  intervalo = null;
}

function resetearCronometro() {
  clearInterval(intervalo);
  intervalo = null;
  tiempo = 0;
  actualizarTiempo();
}

botonIniciar.addEventListener("click",iniciarCronometro);
botonParar.addEventListener("click",pararCronometro);
botonResetear.addEventListener("click",resetearCronometro);

