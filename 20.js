//function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
//}

module.exports = sumarHastaNConBreak;
function sumarHastaNConBreak(n){

let suma = 0;

for (let i = 1;  i<=n ; i++){
   suma += 1;
   if (suma > 100){
      break;
   }
}
return suma;
}

console.log(sumarHastaNConBreak(101));
console.log(sumarHastaNConBreak(100));
console.log(sumarHastaNConBreak(1));
