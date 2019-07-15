var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var Tel=require('../model/tel');
mongoose.connect('mongodb://127.0.0.1:27017/tel',{useNewUrlParser:true}, function(err){

  if(err){

    console.log('Connection Error:' + err)

  }else{

    console.log('Connection success!') }

})
router.get("/",function (req,res,next) {
  console.log(1)
  Tel.find({},function (err,doc) {
    if(err){
      res.json({
        status:'1',
        msg:err.message
      })
    }else{
      res.json({
        status:'0',
        msg:'',
        result:{
          count:doc.length,
          list:doc

        }
      })
    }
  })
})
module.exports=router;
