//Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
//al principio de la palabra.
//Ejemplo: soyHENRY -> HENRYsoy
//Escribe tu código aquí
// "DESArrollaDOr

let s = "soyHENRY";

let letras = s.split("");
let mayusculas = [];
let minusculas = [];

console.log(letras)//toUpperCase
function letraMayusculas(str) {
  mayusculas = str.match(/[A-Z]/g);
  minusculas = str.match(/[a-z]/g)
  let string = mayusculas.concat(minusculas).join('')
  return string
}

console.log(letraMayusculas(s)); // ["H", "W"]

console.log (mayusculas)
console.log (minusculas)