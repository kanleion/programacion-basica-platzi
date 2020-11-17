var imagenes = [];

imagenes["Cauchin"] = "vaca.webp";
imagenes["Pokacho"] = "pollo.webp";
imagenes["Tocinauro"] = "cerdo.webp";

var coleccion = [];

coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 80, 50));

//For especial forin, va operar pro cada variable dentro de colección

for (var p in coleccion[0]) {

    console.log(p);
}

//for of, si colocan of, muestra la instancia en vez del indice
//si quieres el objeto usa of y si quieres el indice in
for (var p of coleccion) {

    console.log(p);
    p.mostrar();
}