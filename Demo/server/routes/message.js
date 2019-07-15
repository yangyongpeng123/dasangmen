var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var Message=require('../model/message');
mongoose.connect('mongodb://127.0.0.1:27017/tel',{useNewUrlParser:true}, function(err){

  if(err){

    console.log('Connection Error:' + err)

  }else{

    console.log('Connection success!') }

});
router.get('/',function (req,res,next) {
  Message.find({},function (err,doc) {
    if(err){
      res.json({
        status:'1',
        msg:err.message
      })
    }else {
      res.json({
        status:'0',
        result:{
          count:doc.length,
          list:doc,
        }
      })
    }
  })
});
router.post('/add',function (req,res,next) {
  const tittle=req.body.tittle1;
  const content=req.body.con;
  const time=req.body.time1;
  var message=new Message({
    tittle:tittle,
    content:content,
    time:time
  })
  Message.find({tittle:tittle},function (err,doc) {
    if(doc.length>0){
      const data={isSuccess: false, message: '新闻标题已经存在'};
      res.json({
        status: '1',
        data:data
      })
    }else {
      message.save(err => {
        const datas =  err ? {isSuccess: false} : {isSuccess: true, message: '新闻添加成功'};
        res.json({
          status:'0',
          data:datas
        })
      })
    }
  })
});
router.get('/sel',function (req,res,next) {
  const tittle=req.param("seltittle");
  // console.log(1);
  //console.log(tittle);
  Message.find({tittle:tittle},function (err,doc) {
    if(doc.length>0){
      res.json({
        status:'0',
        msg:'',
        result:{
          count:doc.length,
          list:doc

        }
      })
    }else {
        const datas =  {isSuccess: false, message: '新闻标题不存在'};
        res.json({
          status:'1',
          data:datas
        })
    }
  })
});
router.post('/update',function (req,res,next) {
  var id=req.body.id;
  const docs={tittle:req.body.tittle,content:req.body.content,time:req.body.time};
  Message.findByIdAndUpdate({_id:id},{$set:docs},{new:true},function (doc,err) {
    if(doc){
      res.json({
        status:'0',
      })
    }else {
      res.json({
        status:'1',
      })
    }
  })
});
router.post('/del',function (req,res,next) {
  var id=req.body.id;
  //const docs={tittle:req.body.tittle,content:req.body.content,time:req.body.time};
  Message.find({_id:id},function (err,doc) {
    if(doc.length>0){
      Message.deleteOne({_id:id},function (doc,err) {
        console.log(err)
        if(doc){
          res.json({
            status:'0',
          })
        }else {
          res.json({
            status:'1',
          })
        }
      })
    }else {
      const datas =  {isSuccess: false, message: '新闻标题不存在'};
      res.json({
        data:datas
      })
    }
  })



});
module.exports=router;
