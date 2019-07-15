var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var Tell=require('../model/tell');
var User=require('../model/user');
mongoose.connect('mongodb://127.0.0.1:27017/tel',{useNewUrlParser:true}, function(err){

  if(err){

    console.log('Connection Error:' + err)

  }else{

    console.log('Connection success!') }

})
router.get("/",function (req,res,next) {
  console.log(1)
  Tell.find({},function (err,doc) {
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
});
router.post("/add",function (req,res,next) {
  var telnumber=req.body.telnumber;
  const tell=new Tell({
    telnumber:telnumber
  });
  Tell.find({telnumber:telnumber},function (err,doc) {
    if (doc.length > 0) {
      res.json({
        status: '1'
      })
    } else {
      User.find({telnumber: telnumber}, function (err, doc) {
        if (doc.length > 0) {
          res.json({
            status: '2'
          })
        } else {
          tell.save(err => {
            const datas = err ? {isSuccess: false} : {isSuccess: true, message: '添加成功'};
            res.json({
              status: '0',
              data: datas
            })
          })
        }
      })

    }
  })
})
module.exports=router;
