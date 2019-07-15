var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var productSchema=new Schema({
  "tittle":String,
  "content":String,
  "time":String
});
module.exports=mongoose.model('Message',productSchema,'message');
