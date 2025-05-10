const zona = document.getElementById('zona-interaccion'); // Área donde se puede interactuar
const lista = document.getElementById('lista-eventos'); // Lista donde se muestran los eventos
const boton = document.getElementById('limpiar'); // Botón para limpiar el historial
const circulo = document.getElementById('circulo'); 


let arrastrando = false;

function registrar(mensaje, icono = '🔵') {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString();
    const li = document.createElement('li');
    li.textContent = `[${hora}] ${mensaje}`; // Texto con la hora y mensaje
    li.style.listStyle = 'none';  // Sin viñeta
    li.insertAdjacentText("afterbegin", icono + " "); // Añadir icono antes del texto
    lista.appendChild(li);
    lista.scrollTop = lista.scrollHeight; // Hacer scroll automático al final
}


circulo.addEventListener('mousedown', () => {
    arrastrando = true;
    registrar('El círculo está siendo arrastrado', '🟣');
});

document.addEventListener('mousemove', (e) => {
    if (arrastrando) {
        const contenedor = document.querySelector('.contenedor');
        const contRect = contenedor.getBoundingClientRect(); // Posición y tamaño del contenedor
        const circleSize = circulo.offsetWidth;  // Tamaño del círculo

         // Calcular la nueva posición del círculo centrado respecto al cursor
        let nuevoX = e.clientX - contRect.left - circleSize / 2;
        let nuevoY = e.clientY - contRect.top - circleSize / 2; 

        // Limitar dentro del contenedor
        nuevoX = Math.max(0, Math.min(nuevoX, contRect.width - circleSize));
        nuevoY = Math.max(0, Math.min(nuevoY, contRect.height - circleSize));

        circulo.style.left = nuevoX + 'px';
        circulo.style.top = nuevoY + 'px';
    }
});

document.addEventListener('mouseup', (e) => {
    if (arrastrando) {
        arrastrando = false;
        const dentro = zona.contains(document.elementFromPoint(e.clientX, e.clientY)); // Comprobar si donde se soltó el ratón está dentro del área de interacción
        if (dentro) {
            registrar('El círculo fue soltado dentro del div de interacción', '✅');
        } else {
            registrar('El círculo fue soltado fuera del div de interacción', '❌');
        }
    }
});

zona.addEventListener('mouseenter', () => registrar('El cursor entró en el div', '🟢'));
zona.addEventListener('mouseleave', () => registrar('El cursor salió del div', '🔴'));
zona.addEventListener('mousedown', (e) => {
    const boton = e.button === 2 ? 'derecho' : 'izquierdo'; //button es un metodo en el que te devuelve 2 si es derecho, 0 el izquierdo y 1 la rueda. 
    registrar(`Click ${boton} dentro del div`, '🖱️');
});
zona.addEventListener('contextmenu', e => e.preventDefault()); //Al hcaer click derecho en el cuadro no aparece el menu de navegación 

window.addEventListener('resize', () => registrar('La ventana ha cambiado de tamaño', '🔵'));
window.addEventListener('blur', () => registrar('Se ha abandonado la ventana', '🚪'));
window.addEventListener('focus', () => registrar('Se ha vuelto a la ventana', '🔑'));
window.addEventListener('load', () => registrar('La página se ha recargado', '🔄'));

boton.addEventListener('click', () => {
    lista.innerHTML = '';
});