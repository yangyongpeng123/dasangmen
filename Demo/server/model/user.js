var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var productSchema=new Schema({
  "username":String,
  "telnumber":String,
  "ring":String
});
module.exports=mongoose.model('User',productSchema,'user');
