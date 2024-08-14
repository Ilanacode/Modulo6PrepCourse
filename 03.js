//function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
//}

module.exports = obtenerMayor;
function obtenerMayor(x , y){
  if (x > y) {
    console.log(x);
    return (x);
  } else if (y > x) {
    console.log (y);
    return (y);
  }
}

obtenerMayor(9, 1);
obtenerMayor(1, 9);


