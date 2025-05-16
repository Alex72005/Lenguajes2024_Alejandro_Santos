/*hecho por alejandro santos*/
const card = document.getElementById('card');

function cambiarTamanio(clase) {
    card.classList.remove('grande', 'chico');
    card.classList.add(clase);
}