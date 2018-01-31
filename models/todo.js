"use strict"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Crear schema
const todoSchema = new Schema({
  item: String
});

const todo = mongoose.model('todo', todoSchema);

module.exports = todo;
