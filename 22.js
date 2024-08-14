//function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
//}

//module.exports = doWhile;
//function doWhile(num){

  //let num = 1;
  //let i = 0;
  //do {
    //i = i +5;
    //num = num + 1;
  //} while (num < 8);

  //return num;
//}
function doWhile(num) {
  let counter = 0;
  do {
    num += 5;
    counter++;
  } while (counter < 8);
  return num;
}

console.log(doWhile(3));
console.log(doWhile(5));
console.log(doWhile(8));

