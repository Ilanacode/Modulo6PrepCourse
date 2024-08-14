function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
}

module.exports = fizzBuzz;
function fizzBuzz(num) {
  if (num % 3 === 0) {
    console.log("fizz");
    return ("fizz");
  } else if (num % 5 === 0) {
    console.log("buzz");
    return (buzz);
  } else if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizzbuzz");
    return("fizzbuzz");
  } else {
    console.log(false);
    return(false);
  }
}