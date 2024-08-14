//function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
//}

module.exports = esParYDivisiblePorTres;
function esParYDivisiblePorTres(a) {
  if (a % 2 === 0 && a % 3 === 0) {
    console.log(true);
    return (true);
  } else {
    console.log (false);
    return (false);
  }
}

esParYDivisiblePorTres(6);
esParYDivisiblePorTres(8);
esParYDivisiblePorTres(12);
esParYDivisiblePorTres(3);