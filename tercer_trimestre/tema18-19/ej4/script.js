function generadorTablas() {
    const contador = parseInt(document.getElementById('contador').value);
    const contenedorTablas = document.getElementById('contenedorTablas');
    
    
    if (isNaN(contador) || contador < 1 || contador > 20) {
        alert('Por favor ingrese un número entre el 1 y el 20');
        return;
    }
    
    
    contenedorTablas.innerHTML = '';
    
    
    for (let i = 1; i <= contador; i++) {
        const divTablas = document.createElement('div');
        divTablas.className = 'tabla';
        
        const titulo = document.createElement('h3');
        titulo.textContent = 'Tabla del ' + i;
        divTablas.appendChild(titulo);
        //Operaciones
        for (let j = 0; j <= 10; j++) {
            const parrafo = document.createElement('p');
            parrafo.textContent = i + " x " + j + " = " + (i * j)
            divTablas.appendChild(parrafo);
        }
        
        contenedorTablas.appendChild(divTablas);
    }
}

// Generar tablas al cargar la página con el valor por defecto
window.onload = generadorTablas;