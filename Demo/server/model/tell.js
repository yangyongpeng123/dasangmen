var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var productSchema=new Schema({
  "telnumber":String
});
module.exports=mongoose.model('Tell',productSchema,'tell');
