//crear sistema para tomar asistencia, presentes (P) ausentes(A), de esta forma registrar los alumnos 
//pasados lo 30 dias mostrar la situacion de todos los alumons (numero de presentes y ausentes)
//se puede tener un maximo de 10% de ausentes por semestre, si tienen mas cambiar condicion a repobrado. 

let diasDeClases = prompt ("cuantos dias de clases este mes: ")
let alumnos = prompt("cuantos alumons son: ");
let cantidad = [];
let xdias= diasDeClases * 6;
let porcentaje = xdias * 0.10;

for (i = 0 ;i < alumnos ; i++){
    cantidad[i]=[prompt("nombre del alumno: " + (i+1)),0];
}

const asistencia = (nombre,p)=>{
    let presentes = prompt(nombre);
    if (presentes == "p" || presentes == "P"){
        cantidad [p][1]++;
    }
}

for (i=0; i<diasDeClases ; i++){
    for(alumno in cantidad){
        asistencia(cantidad[alumno][0],alumno);
    }
}
for (alumno in cantidad){
    let resultado=`${cantidad[alumno][0]}<br>
    __________Presentes: ${cantidad[alumno][1]}<br>
    __________Ausentes:${diasDeClases - cantidad[alumno][1]}
    `;

    if (diasDeClases - cantidad[alumno][1] > porcentaje){
        resultado += "REPROBADO POR INACISTENCIA <br>" 
    }
    else{
        resultado += "<br><br>"
    }
    
    document.write (resultado)
}
