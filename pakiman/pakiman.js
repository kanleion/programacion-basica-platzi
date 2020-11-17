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
        document.body.appendChild(this.image);
        //agregar un hijo al DOM
        document.write("<br /><strong>" + this.nombre + "</strong><br>");
        document.write("Vida " + this.vida + "<br />");
        document.write("Ataque " + this.ataque + "<hr />");
    }
}