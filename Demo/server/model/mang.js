var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var productSchema=new Schema({
  "use":String,
  "pwd":String,
});
module.exports=mongoose.model('Admin',productSchema,'admin');
