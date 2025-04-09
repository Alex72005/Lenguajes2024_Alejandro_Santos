let intervalo;
let tiempo = 0;

function actualizarTiempo() {
  let horas = String(Math.floor(tiempo / 3600)).padStart(2, '0');
  let minutos = String(Math.floor((tiempo % 3600) / 60)).padStart(2, '0');
  let segundos = String(tiempo % 60).padStart(2, '0');
  
  document.getElementById("tiempo").textContent = `${horas}:${minutos}:${segundos}`;
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
