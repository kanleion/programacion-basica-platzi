//prueba de algo
var teclas = {
    //Las constantes se colocan en mayusculas, este pedazo es una nueva línea de codigo
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

//existe keydown (tecla presionada) y keyup (tecla cuando se levanta)
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLinea(color, xincial, yinicial, xfinal, yfinal, lienzo) {
    //arrancamos a dibujar un camino
    lienzo.beginPath();
    lienzo.strokeStyle = color; //decidimos que la linea seria roja
    lienzo.lineWidth = 3;
    lienzo.moveTo(xincial, yinicial); //Iniciamos en el punto 100,100
    lienzo.lineTo(xfinal, yfinal); //Teminamos de dibujar en el punto 200,200
    lienzo.stroke(); //cerramos la linea
    lienzo.closePath(); //dejamos de dibujar

}

function dibujarTeclado(evento) {
    var colorcito = "green";
    var movimiento = 1;
    switch (evento.keyCode) {

        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            break;

        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;

        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            break;

        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        default:
            console.log("otra tecla");
            break;
    }
}