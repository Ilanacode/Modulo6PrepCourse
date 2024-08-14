//function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
//}

module.exports = obtenerDiaSemana;
function obtenerDiaSemana(numero) {
  if (numero < 1 || numero > 7) {
    console.log ("No es un dia de la semana");
    return ("no es un dia de la semana");
  } else if (numero === 1) {
    console.log ("Lunes");
    return ("Lunes");
  } else if (numero === 2) {
    console.log("Martes");
    return ("Martes");
  } else if (numero === 3) {
    console.log("Miercoles");
    return ("Miercoles");
  } else if (numero === 4) {
    console.log("Jueves");
    return ("Jueves");
  } else if (numero === 5) {
    console.log("Viernes");
    return ("Viernes");
  } else if (numero === 6) {
    console.log("Sabado");
    return ("Sabado");
  } else if (numero === 7) {
    console.log("Domingo");
    return ("Domingo");
  }
 }

 obtenerDiaSemana(8);
 obtenerDiaSemana(3);