var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLinea("pink", 10, 300, 220, 10);

function dibujarLinea(color, xincial, yinicial, xfinal, yfinal) {
    //arrancamos a dibujar un camino
    lienzo.beginPath();
    lienzo.strokeStyle = color; //decidimos que la linea seria roja
    lienzo.moveTo(xincial, yinicial); //Iniciamos en el punto 100,100
    lienzo.lineTo(xfinal, yfinal); //Teminamos de dibujar en el punto 200,200
    lienzo.stroke(); //cerramos la linea
    lienzo.closePath(); //dejamos de dibujar

}