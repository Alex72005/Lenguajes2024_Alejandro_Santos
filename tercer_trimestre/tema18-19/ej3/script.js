let resultado = document.getElementById("resultado");

function agregarNumero(num) {
  resultado.value += num;
}

function limpiar() {
  resultado.value = "";
}

function borrar() {
  resultado.value = resultado.value.slice(0, -1);
}

function operar(op) {
  switch (op) {
    case "raiz":
      try {
        resultado.value = Math.sqrt(eval(resultado.value));
      } catch (error) {
        resultado.value = "Error";
      }
      break;

    case "1/x":
      try {
        resultado.value = 1 / eval(resultado.value);
      } catch (error) {
        resultado.value = "Error";
      }
      break;

    case "^2":
      try {
        const val = eval(resultado.value);
        resultado.value = val * val;
      } catch (error) {
        resultado.value = "Error";
      }
      break;

    case "bin":
      try {
        resultado.value = eval(resultado.value).toString(2);
      } catch (error) {
        resultado.value = "Error";
      }
      break;

    case "hex":
      try {
        resultado.value = Number(eval(resultado.value)).toString(16).toUpperCase();
      } catch {
        resultado.value = "Error";
      }
      break;
    default:
      resultado.value += op;
      break;
  }
}

function calcular() {
  try {
    resultado.value = eval(resultado.value);
  } catch (error) {
    resultado.value = "Error";
  }
}
