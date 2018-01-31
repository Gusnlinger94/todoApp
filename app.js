var express = require('express');
var todoController= require('./controllers/todoController');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});

//configurara template engine
app.set('view engine', 'ejs');

//Configuracion de archivos estaticos
app.use(express.static(__dirname + '/public'));

//Dispara controlador
todoController(app);

//Escuchar en un puerto
app.listen(4001);
console.log('Estas escuchando en el puerto 4001');
