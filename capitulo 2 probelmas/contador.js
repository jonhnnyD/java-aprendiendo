let string ="adsjfdsfsfjsdjfhacabcsbajda";
// contador de letras repetidas


separado = string.split("")
let contadorDeLetras = 0;
let letraRepetida = Array.from(new Set (separado));

let letras = letra =>{
  for (let i = 0; i < separado.length; i++){
    if (letra == separado[i]){
      contadorDeLetras ++;
    }   
  }
  document.write(`${letra} : ${contadorDeLetras} <br>`);
  contadorDeLetras = 0;
}

let cantidadTotal =(str)=>{
  str.forEach(element => {
    letras(element);
    
  });
}
cantidadTotal(letraRepetida);
document.write(separado)