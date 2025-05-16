/*Hecho por Alejandro Santos*/
document.getElementById('padre').addEventListener('click', function () {
    console.log('Clic en Padre');
    document.getElementById('resultado').innerText = 'Clic en Padre';
});

document.getElementById('hijo1').addEventListener('click', function (e) {
    e.stopPropagation();
    console.log('Clic en Hijo 1 (con stopPropagation)');
    document.getElementById('resultado').innerText = 'Clic en Hijo 1 (con stopPropagation) --> Clic en Padre';
});

document.getElementById('hijo2').addEventListener('click', function () {
    console.log('Clic en Hijo 2 (sin stopPropagation)');
    document.getElementById('resultado').innerText = 'Clic en Hijo 2 (sin stopPropagation)';
});

let enlaceActivo = true;

document.getElementById('toggleEnlace').addEventListener('click', function () {
    enlaceActivo = !enlaceActivo;
    document.getElementById('toggleEnlace').innerText = enlaceActivo ? 'Desactivar Enlace' : 'Activar Enlace';
});

document.getElementById('enlace').addEventListener('click', function (e) {
    if (!enlaceActivo) {
        e.preventDefault();
        console.log('Enlace DESACTIVADO');
    } else {
        console.log('Enlace ACTIVADO');
    }
});
