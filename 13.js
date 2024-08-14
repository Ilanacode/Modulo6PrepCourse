//function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
//}
//yo le pregunte a chatgpt.com

module.exports = esEntero;
function esEntero(num) {
  if (Number.isInteger(num) === true) {
    console.log(true);
    return(true);
  } else {
    console.log(false);
    return(false);
  }
}
esEntero(0.7);
esEntero(5);