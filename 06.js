//function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
//}

module.exports = tieneTresDigitos;
function tieneTresDigitos(num) {
  if (num.toString().length === 3){
    console.log(true);
    return (true);
  } else {
    console.log(false);
    return (false);
  }
}

tieneTresDigitos (100);
