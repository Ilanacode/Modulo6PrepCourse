//function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
//}



//module.exports = productoEntreNúmeros;
function productoEntreNumeros(a, b) {
  let producto = 1;
  
  for (let i = a; i <= b; i++) {
      producto *= i;
  }
  
  return producto;
}

// Ejemplo de uso:
console.log(productoEntreNumeros(1, 4)); // Salida: 24 (1 * 2 * 3 * 4)
console.log(productoEntreNumeros(3, 5)); // Salida: 60 (3 * 4 * 5)