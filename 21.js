//function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
//}

module.exports = esPotenciaDeDos;
function esPotenciaDeDos(numero) {
  if (numero < 1) return false;
  while (numero > 1){
    if (numero % 2 !== 0) {
      return false;
  }
  numero = numero / 2;
}

return true;
}
  
console.log(esPotenciaDeDos(9));
console.log(esPotenciaDeDos(16));