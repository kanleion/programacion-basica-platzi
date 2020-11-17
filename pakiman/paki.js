var imagenes = [];

imagenes["Cauchin"] = "vaca.webp";
imagenes["Pokacho"] = "pollo.webp";
imagenes["Tocinauro"] = "cerdo.webp";

class Pakiman {
    constructor(n, v, a) {
            this.image = new Image();
            this.nombre = n;
            this.vida = v;
            this.ataque = a;

            this.image.src = imagenes[this.nombre];

        }
        //En una clase no es necesario escribir function
    hablar() {
        alert(this.nombre);
    }

    mostrar() {
        //agregar un hijo al DOM
        document.body.appendChild(this.image);
    }
}

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 80, 50);

pokacho.mostrar();