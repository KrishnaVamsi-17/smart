const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const dataSchema = Schema({
  title:{
    type:String,
    required:true
  },
  type:{
    type:String,
     //required:true
  },
  avatar:{
    type:String,
    required:true
  },
  text:{
    type:String,
    required:true
  },

},{timestamps :true})

module.exports = mongoose.model('dataModel',dataSchema);