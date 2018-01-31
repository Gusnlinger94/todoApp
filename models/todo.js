"use strict"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Crear schema
var todoSchema = new mongoose.Schema({
  item: String
});

module.exports = mongoose.model('todo', todoSchema)
