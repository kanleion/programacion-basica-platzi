var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#FAA";
for (l = 0; l < lineas; l++) {

    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("linea " + l);

}
dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 299, 299, 299);

function dibujarLinea(color, xincial, yinicial, xfinal, yfinal) {
    //arrancamos a dibujar un camino
    lienzo.beginPath();
    lienzo.strokeStyle = color; //decidimos que la linea seria roja
    lienzo.moveTo(xincial, yinicial); //Iniciamos en el punto 100,100
    lienzo.lineTo(xfinal, yfinal); //Teminamos de dibujar en el punto 200,200
    lienzo.stroke(); //cerramos la linea
    lienzo.closePath(); //dejamos de dibujar

}