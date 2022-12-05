// A) entras a una tienda que vende celulares, de todos los modelos tres le llamaron la atencion especificamente, el problema
// es que los vendedores no saben nada al respecto asique no pueden recomendarles cual comprar. Claro que quieres ver todas
// las caracteristicas antes de comprar.
//     crear solucion:
//     -crear un sistema para mostrar las particularidades de los celulares
//     -cada celular debe tener color, peso, resolucion de pantall, resolucion de camara  y memoria ram
//     -cada celular debe poder prender reiniciar, apagar, tomar fotos y grabar
//     -los celulares de alta gama tendran, una camara exta, filmar en camara super lenta y reconocimiento facial

class Celular{
    constructor(marca, color,peso,resPantalla, resCamara, memoriaRam){
        this.color = color;
        this.peso = peso;
        this.pantalla = resPantalla;
        this.camara = resCamara;
        this.memoria = memoriaRam;
        this.marca = marca;
        this.iniciar = false;
        this.info = `Celular:<b> ${this.marca}:</b><br>
        Es de color:<b> ${this.color}</b><br>
        pesa: <b>${this.peso} g</b><br>
        la resolucion de pantalla es de:<b> ${this.pantalla} pixeles</b><br>
        Contiene una memoria ram de:<b>${this.memoria}gb</b><br>
        la resolucion de camara es de:<b> ${this.camara}mgpx</b>`;
    }
    verInfo(){
        document.write(this.info + "<br><br>");
    }
    reiniciar(){
        if (this.iniciar == true){
            alert (`${this.marca} Se esta reiniciando`);
        }
        else{
            alert (`${this.marca} esta apagado`);
        }
    }
    tomarFotos(){
        document.write(`El celular ${this.marca}, esta tomando una foto<br>`);
    }
    prender(){
        if (this.iniciar == false){
            alert (`El celular ${this.marca} se esta prendiendo`);
            this.iniciar = true;
        }
        else {
            alert (`El celular ${this.marca} se esta apagando`);
            this.iniciar = false;
        }
    }
    grabar(){
        document.write(`El celular ${this.marca}, esta grabando<br>`);
    }

}

class celularAltaGAma extends Celular{
    constructor(marca, color,peso,resPantalla, resCamara, memoriaRam,reconFacial,){
        super(marca, color,peso,resPantalla, resCamara, memoriaRam);
        this.reconFacial = reconFacial;
        
    }
    infor(){
        return this.verInfo() + document.write( `cuenta con sistema de:<b> ${this.reconFacial}</b><br>
        segunda camara de una rasolucon de:<b> 20mgpx </b><br><br>`);
    }
    grabarLento(){
        document.write(`El celular ${this.marca}, esta grabando en camra sper lenta<br>`);
    }

}

const celular1 = new Celular("motorola ", "rojo", 400, 1800, 18, 6);
const celular2 = new Celular("Nokia ", "marron", 500, 1600, 16, 4);
const celular3 = new Celular("Samsung", "azul", 700, 1900, 20, 8);
const celular4 = new celularAltaGAma("Motorola g70","golden", 600, 2800, 30, 12, "Reconocimiento facial ");
const celular5 = new celularAltaGAma("Samsung a75","platinum", 700, 2600, 32, 10, "Reconocimiento facial ");

celular1.verInfo();
celular1.prender();
celular2.prender();
celular1.reiniciar();
// celular2.verInfo();
// celular3.prender();
// celular3.tomarFotos();

// celular4.infor();
// celular4.grabarLento();
celular5.prender();
// celular5.infor();