//function operadoresLogicos(num1, num2, num3) {
  // La función recibe tres números distintos.
  // Si num1 es mayor a num2 y a num3, y además es positivo, retorna ---> "Numero 1 es mayor y positivo".
  // Si alguno de los tres números es negativo, retorna ---> "Hay negativos".
  // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retorna el nuevo valor.
  // Si todos los argumentos son cero, retorna ---> "Error".
  // Si no se cumple ninguna de las condiciones anteriores, retorna false.
  // Tu código:
//}


function operadoresLogicos (num1, num2, num3){
if ((num1 > num2) && (num1 > num3) && (num1 >0)) {
  console.log ("Numero 1 es mayor y positivo");
  return ("Numero 1 es mayor y positivo");
} else if ((num1 < 0) || (num2 < 0) || (num3 < 0)) {
  console.log ("Hay negativos");
  return ("Hay negativos");
} else if ((num3 > num1) && (num3 >  num2)) {
  num3 = num3 +1;
  console.log(num3);
  return (num3);
} else if ((num1 === 0) && (num2 === 0) && (num3 ===0)){
  console.log("error");
  return("error");
} else {
  console.log(false);
  return(false);
}
}
operadoresLogicos(0,0,0);
operadoresLogicos(9, 5, 1);
operadoresLogicos(-2, -3, -4);
operadoresLogicos(-3, 6, 7);






//module.exports = operadoresLogicos;
//function operadoresLogicos(num1, num2, num3) {
  //if (num1 < 0 || num2 < 0 || num3 > 0){
    //console.log ("hay negativos");
    //return("Hay negativos");
  //} else if (num1 === 0 && num2 === 0 && num3 === 0) {
    //console.log("error");
    //return ("error");
  //} else if (num1 > 0 && num1 > num2 && num1 > num3) {
    //console.log ("numero 1 es mayor y positivo"); 
  //} else if { (num3 > num1 && num3 > num2);
  //num3 = num3 + 1;
  //console.log (num3);
  //return(num3);
  //} else if {
    //console.log (false);
    //return (false);
//  }
//}

operadoresLogicos(1, 5, 9);

