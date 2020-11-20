var cafecito = require('express');
var applicacion = cafecito();

applicacion.get("/", inicio);
applicacion.get("/cursos", cursos);

function inicio(peticion, resultado) {
    resultado.send("este es el home genial");
}


function cursos(peticion, resultado) {
    resultado.send("este son los cursos");
}

applicacion.listen(8989);

/*
app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(3000)*/