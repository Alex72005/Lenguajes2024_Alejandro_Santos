function calcular() {
    var ancho = parseFloat(document.getElementById("ancho").value);
    var alto = parseFloat(document.getElementById("alto").value);
    var largo = parseFloat(document.getElementById("largo").value);
    var material = document.getElementById("material").value;

    var precioBase = parseFloat(document.getElementById("precioBase").value);
    var incPlastico = parseFloat(document.getElementById("incPlastico").value);
    var incCarton = parseFloat(document.getElementById("incCarton").value);
    var incMadera = parseFloat(document.getElementById("incMadera").value);
    var iva = parseFloat(document.getElementById("iva").value);

    var incremento = 0;
    if (material == "plastico") {
        incremento = incPlastico;
    } else if (material == "carton") {
        incremento = incCarton;
    } else if (material == "madera") {
        incremento = incMadera;
    }

    if (ancho < 5 || ancho > 100 || alto < 5 || alto > 100 || largo < 5 || largo > 100) {
        alert("Cada dimensión debe estar entre 5 y 100 cm.");
        return;
    }

    var mayor = ancho;
    var menor = ancho;

    //Valido que la caja no sea desproporcionada
    if (alto > mayor) mayor = alto;
    if (largo > mayor) mayor = largo;

    if (alto < menor) menor = alto;
    if (largo < menor) menor = largo;

    if (mayor / menor > 5) {
        alert("La proporción entre la más grande y la más pequeña no puede ser mayor a 5.");
        return;
    }

    var volumen = ancho * alto * largo;
    var superficie = 2 * (ancho * alto + alto * largo + ancho * largo);
    var superficieM2 = superficie / 10000;

    var precioSinIVA = superficieM2 * precioBase * (1 + incremento / 100);
    var precioConIVA = precioSinIVA * (1 + iva / 100);

    var resultado = "";
    resultado += "<h3>Sección de Resultados</h3>";
    resultado += "<p><strong>Dimensiones:</strong> " + ancho + " x " + alto + " x " + largo + " cm</p>";
    resultado += "<p><strong>Volumen:</strong> " + volumen.toFixed(2) + " cm³</p>";
    resultado += "<p><strong>Superficie:</strong> " + superficie.toFixed(2) + " cm²</p>";
    resultado += "<p><strong>Material:</strong> " + material + "</p>";
    resultado += "<p><strong>Precio sin IVA:</strong> " + precioSinIVA.toFixed(2) + " €</p>";
    resultado += "<p><strong>Precio con IVA:</strong> " + precioConIVA.toFixed(2) + " €</p>";

    document.getElementById("resultado").innerHTML = resultado;
}