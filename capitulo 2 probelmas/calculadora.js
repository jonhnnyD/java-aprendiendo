const suma = (num1, num2)=>{
    return  parseInt(num1) + parseInt(num2);
}
const resta = (num1, num2)=>{
    return  parseInt(num1) - parseInt(num2);
}
const multiplicacion = (num1, num2)=>{
    return  parseInt(num1) * parseInt(num2);
}
const division = (num1, num2)=>{
    return  parseInt(num1) / parseInt(num2);
}

alert("que operacion desea realizar?");
let operacion = prompt ("1:suma, 2:resta, 3:multiplicacion, 4:division ");
if (operacion == 1){
    let numero1 = prompt ("ingrese primer valor: ");
    let numero2 = prompt ("ingrese segundo valor: ");
    resultado = suma (numero1,numero2);
    alert (`tu resultado es ${resultado}`);
}
else if (operacion == 2){
    let numero1 = prompt ("ingrese primer valor: ");
    let numero2 = prompt ("ingrese segundo valor: ");
    resultado = resta (numero1,numero2);
    alert (`tu resultado es ${resultado}`);
}
else if (operacion == 3){
    let numero1 = prompt ("ingrese primer valor: ");
    let numero2 = prompt ("ingrese segundo valor: ");
    resultado = multiplicacion (numero1,numero2);
    alert (`tu resultado es ${resultado}`);
}
else if (operacion == 4){
    let numero1 = prompt ("ingrese primer valor: ");
    let numero2 = prompt ("ingrese segundo valor: ");
    resultado = division (numero1,numero2);
    alert (`tu resultado es ${resultado}`);
}