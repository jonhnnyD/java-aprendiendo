// crear un sistema para descargar las aplicaciones del play store, esto requiere que los juegos sena pupulares, tengan buena puntuacion y 
// que pesen poco, las 7 apps que llaman la atencion son similares, para lo cual se descargaran las dos mejores.
// -sistema que ayude a decicir que apps descargar.
// -la informacionde los instaladores, cantidad de descargas y la puntuacion.
// -las apps se deben poder instalar, abrir, cerrar y desintalar.
class apps {
    constructor(nombre, peso, descargas, puntuacion){
        this.nombre = nombre;
        this.peso = peso;
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.instalada = false;
        this.abrirCerrar = false;
    }
    verinfo (){
        document.write(
        `La aplicacion:<b>:${this.nombre}</b><br>
        tiene un peso de <b>:${this.peso}</b><br>
        la descargaron <b>:${this.descargas}</b> veces<br>
        su puntuacion es de <b>:${this.puntuacion}</b>estrellas<br><br>`
        );
    }
    intalar (){
        if (this.instalada == false){
            alert(`la app ${this.nombre}, se esta isntalando`);
            this.instalada = true;
        }
        else{
            alert ("Ya tenes instalada la app");
        }
    }
    abrir(){
        if (this.instalada == true && this.abrirCerrar == false){
            alert (`la app ${this.nombre}, se esta abriendo`);
            this.abrirCerrar = true;
        }
        else if (this.abrirCerrar == true){
            alert(`la app ${this.nombre}, se esta cerrando`)
            this.abrirCerrar = false
        }
    }
    desisntalar(){
        if(this.instalada == true && this.abrirCerrar == false){
            alert (`Se esta desintalando la app`);
            this.instalada = false;
        }
        else if (this.instalada ==true && this.abrirCerrar== true){
            alert ("Cerrar la app para poder desintalar");
        }
        else {
            alert (`nada que desintalar`);
        }
    }

}

const app1 = new apps("worms", "20mg",300 , 4.5);
const app2 = new apps("new worms", "25mg",350 , 4.7);
const app3 = new apps("aliens", "30mg",290 , 4.3);
const app4 = new apps("drgaons ", "27mg",380 , 5);
const app5 = new apps("dragons 2", "15mg",200 , 3.7);
const app6 = new apps("pesadilla", "40mg",280 , 4.4);
const app7 = new apps("cod", "43mg",399 , 4.9);

app1.verinfo();
app2.verinfo();
app3.verinfo();
app4.verinfo();
app5.verinfo(); 
app6.verinfo(); 
app7.verinfo();
