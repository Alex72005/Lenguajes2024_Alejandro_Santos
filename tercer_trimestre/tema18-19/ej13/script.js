function analizarCadena() {
    const texto = document.getElementById("entrada").value;
    const resultado = document.getElementById("resultado");
    const palabras = texto.trim().split(/\s+/); //divide la cadena por palabras y lo guarda en un array
    const capitalizado = texto
        .toLowerCase()
        .split(" ")
        .map(p => p.charAt(0).toUpperCase() + p.slice(1)) // coge la primera letra y la pone en mayuscula y le concatena el resto de la cadena 
        .join(" ");

    let salida = "";
    salida += "<p><span class='titulo'>Texto original:</span> " + texto + "</p>";
    salida += "<p><span class='titulo'>Longitud:</span> " + texto.length + "</p>";
    salida += "<p><span class='titulo'>Número de palabras:</span> " + palabras.length + "</p>";
    salida += "<p><span class='titulo'>Mayúsculas:</span> " + texto.toUpperCase() + "</p>";
    salida += "<p><span class='titulo'>Minúsculas:</span> " + texto.toLowerCase() + "</p>";
    salida += "<p><span class='titulo'>Capitalizado:</span> " + capitalizado + "</p>";
    salida += "<p><span class='titulo'>Primer carácter:</span> " + texto.charAt(0) + "</p>";
    salida += "<p><span class='titulo'>Último carácter:</span> " + texto.charAt(texto.length - 1) + "</p>";
    salida += "<p><span class='titulo'>Concatenado con \"JS\":</span> " + texto + " JS</p>";
    salida += "<p><span class='titulo'>Contiene \"a\":</span> " + (texto.includes("a") ? "Sí" : "No") + "</p>";
    salida += "<p><span class='titulo'>Reemplazar \"a\" por \"@\":</span> " + texto.replaceAll("a", "@") + "</p>";
    salida += "<p><span class='titulo'>Subcadena (0-5):</span> " + texto.substring(0, 5) + "</p>";

    resultado.innerHTML = salida;
}