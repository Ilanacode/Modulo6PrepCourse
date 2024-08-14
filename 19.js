//function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
//}

module.exports = sumarHastaN;
function sumarHastaN(n) {
  let suma = 0;

  for (let i = 0; i <=n ; i++){
    suma += i;
  }

  return suma;
}


// Ejemplo de uso:
console.log(sumarHastaN(5)); // Salida: 15 (1 + 2 + 3 + 4 + 5)
console.log(sumarHastaN(10)); // Salida: 55 (1 + 2 + ... + 10)