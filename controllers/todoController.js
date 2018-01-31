var bodyParser= require('body-parser');
var mongoose = require('mongoose');
var Todo = require('./models/todo')
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

//Conexion a la base de datos
mongoose.connect(process.env.mo || 'mongodb://localhost:27017/todo');





//de la base de datos a la vista
  app.get('/todo', function(req, res){

    Todo.find({},function(err, data){
      if(err) throw err;
      res.render('todo',{todos:data});
    });

  });

//de la vista a la base de datos
  app.post('/todo',urlencodedParser, function(req, res){
    var newTodo = Todo(req.body).save(function(err, data){
      if(err) throw err;
      res.json(data);
    })

  });

//Borrar de la base de datos
  app.delete('/todo/:item', function(req, res){
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
      if(err) throw err;
      res.json(data);
    });

  });
  
};
