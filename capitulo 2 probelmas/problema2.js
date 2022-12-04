//maquina para dejar pasar soloa los mayores de edad (+18)
//la primer persona despues de las 2am no paga 
let free = false;
const validarEdad = (hora)=>{
    let edad= prompt ("cuantos años tenes: ");
    if (edad >= 18){
        if(hora <= 2 && free == false){
            alert (`Podes pasar gratis porque son las 2am`);
        }
        else{
            alert(`podes pasar pero tenes que pagar son las ${hora}`);
        }
    }
    else{
        alert("no podes pasar sos menor de edad");
    }
}

validarEdad (12);
validarEdad (2);
validarEdad (3);
validarEdad (6);