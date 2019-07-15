var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var productSchema=new Schema({
  "productId":String
});
module.exports=mongoose.model('Tel',productSchema,'tel');
