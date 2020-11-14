var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.webp";

var vaca = {
    url: "vaca.webp",
    cargaOk: false
};

var fondo = {
    url: "tile.webp",
    cargaOk: false
};

var cantidad = aleatorio(5, 25);

//crear objeto, cuando ustedes tienen la definición de un objeto, se les llaman clases y 
//cada una de estas cosas es un objeto o una instancia de un objeto y el nombre se le coloca mayúsculas
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
/*
var cerdo = new Image();
cerdo.src = "cerdo.webp";
vaca.addEventListener("load", cargarCerdos);

var pollo = new Image();
pollo.src = "pollo.webp";
vaca.addEventListener("load", cargarPollos);
*/
//Dibujar imagenes en canvas

function cargarFondo() {
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas() {
    vaca.cargaOk = true;
    dibujar();
}

function dibujar() {

    if (fondo.cargaOk) {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOk) {


        console.log(cantidad);
        for (var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);

        }
    }

}
/*
function dibujarVacas() {
    papel.drawImage(vaca, 10, 10);
}

function dibujarCerdos() {
    papel.drawImage(cerdo, 10, 300);
}

function dibujarPollos() {
    papel.drawImage(pollo, 300, 150);
}
*/
function aleatorio(min, maxi) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}