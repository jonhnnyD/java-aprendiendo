const ObtenerInformacion=(materia)=>{
  let materias = {
    fisica:["martinez","perez","gonzalez"],
    matematica:["martinez","perez","gonzalez"]
  }
  if (materias[materia]){
    return materias[materia];
  }
}

let info = ObtenerInformacion(matematica);
document.write(info)