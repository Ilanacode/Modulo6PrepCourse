//function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
//}

module.exports = esPositivoOInferiorA10;
function esPositivoOInferiorA10 (a) {
   if (a > 0 || a < 10){
      console.log(true);
      return (true);
   } else {
      console.log(false);
      return(false);
   }
}

esPositivoOInferiorA10(1);
esPositivoOInferiorA10(11);
