//function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
//}

module.exports = esVerdadero;
function esVerdadero(valor) {
  if (valor === true) {
    console.log("soy verdadero");
    return ("soy verdadero");
  } else if (valor === false) {
    console.log("soy falso");
    return ("soy falso");
  }
}

esVerdadero(true);
esVerdadero(false);
esVerdadero(1);
esVerdadero(0);

