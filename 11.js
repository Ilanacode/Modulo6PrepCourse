//function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
//}

module.exports = estaEnRango;
function estaEnRango(num) {
  if (num < 50 && num > 20){
    console.log (true);
    return(true);
  } else {
    console.log(false);
    return(false);
  }
}

estaEnRango(19);
estaEnRango(51);
estaEnRango(21);
estaEnRango(49);
