class Calculadora {
  constructor() {// Crea un objeto que asocia cada número de operación con una función de operación
    this.operaciones = {
      1: this.suma,
      2: this.resta,
      3: this.multiplicacion,
      4: this.division,
      5: this.potenciar,
      6: this.raizCuadrada,
      7: this.raizCubica
    };
  }
  suma(num1, num2) {
    return  parseInt(num1) + parseInt(num2);
  }
  resta(num1, num2) {
    return  parseInt(num1) - parseInt(num2);
  }
  multiplicacion(num1, num2) {
    return  parseInt(num1) * parseInt(num2);
  }
  division(num1, num2) {
    return  parseInt(num1) / parseInt(num2);
  }
  potenciar(num1, num2) {
    return parseInt(num1) ** parseInt(num2);
  }
  raizCuadrada(num1) {
    num1 = parseInt(num1)
    let result = Math.sqrt(num1);
    return result;
  }
  
  raizCubica(num1) {
    num1 = parseInt(num1)
    let result = Math.cbrt(num1);
    return result;
  }
}
  
let calculadora = new Calculadora();
  
alert("¿Qué operación deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: multiplicación, 4: división, 5: potenciación, 6: raíz cuadrada, 7: raíz cúbica");
  
// Obtén la función de operación correspondiente al número de operación ingresado
let funcionOperacion = calculadora.operaciones[operacion];
  
if (funcionOperacion) {
  let numero1 = prompt("Ingresa el primer valor: ");
  let numero2 = prompt("Ingresa el segundo valor: ");
  let resultado = funcionOperacion(numero1, numero2);
  alert(`Tu resultado es ${resultado}`);
} else {
  alert("No corresponde a ninguna operación");
}
  