//function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
//}

module.exports = saludo;
function saludo(idioma) {
  if (idioma === "aleman"){
    console.log("guten tag!");
    return ("guten tag!");
  } else if (idioma === "mandarin") {
    console.log ("Ni Hao!");
    return ("Ni hao!");
  } else if (idioma === "ingles"){
    console.log("Hello!");
    return("Hello!");
  } else {
    console.log("Hola!");
    return ("Hola!");
  }
}

saludo("espanol");
