const letra = document.getElementById('letra');

document.addEventListener('keydown', (event) => {
    const mayuscula = event.key.toUpperCase();
    if (mayuscula.length === 1 && (mayuscula >= 'A' && mayuscula <= 'Z') || mayuscula === 'Ñ') {
        letra.textContent = mayuscula;
    }
});

document.addEventListener('keyup', () => {
    letra.textContent = '';
});