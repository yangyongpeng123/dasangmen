var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var User=require('../model/user');
var Tell=require('../model/tell');
mongoose.connect('mongodb://127.0.0.1:27017/tel',{useNewUrlParser:true}, function(err){

  if(err){

    console.log('Connection Error:' + err)

  }else{

    console.log('Connection success!') }

})
router.post("/",function (req,res,err) {
  const usename=req.body.username;
  const pws=req.body.password;
  const ring=req.body.ring;
  const user=new User({
    username:usename,
    telnumber:pws,
    ring:ring
  })
  Tell.find({telnumber:pws},function (err,doc) {
    if(doc.length>0){
      Tell.deleteOne({telnumber:pws},function (err,doc) {
        if(err){
          console.log(1)
        }else {
          console.log(0)
        }
      })
    }
  })
  User.find({username:usename},function (err,docs) {
    if(docs.length>0) {
      const data = {isSuccess: false, message: '用户名已存在'};
      res.json({
        status: '1',
        data: data
    })
    }  else {
      User.find({telnumber:pws},function (err,docs) {
        if(docs.length>0) {
          const data = {isSuccess: false, message: '电话号码已存在'};
          res.json({
            status: '2',
            data: data
          })
        }  else  {
            user.save(err => {
              const datas =  err ? {isSuccess: false} : {isSuccess: true, message: '恭喜您 400电话注册成功 优惠已经发送'};
              res.json({
                status:'0',
                data:datas
              })
            })
          }

      })
    }
  })
})
router.get('/sel',function (req,res,next) {
  const tittle=req.param("seltittle");
  // console.log(1);
  //console.log(tittle);
  User.find({username:tittle},function (err,doc) {
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
      const datas =  {isSuccess: false, message: '用户名不存在'};
      res.json({
        status:'1',
        data:datas
      })
    }
  })
});
router.post('/updatename',function (req,res,next) {
  var usename=req.body.tittle;
  User.find({username:usename},function (err,docs) {
    if(docs.length>0) {
      const data = {isSuccess: false, message: '用户名已存在'};
      res.json({
        status: '2',
        data: data
      })
    }  else {
          var id=req.body.id;
          const docs={username:req.body.tittle,telnumber:req.body.content,ring:req.body.time};
          User.findByIdAndUpdate({_id:id},{$set:docs},{new:true},function (err,doc) {
            if(err){
              res.json({
                status:'0',
              })
            }else {
              res.json({
                status:'1',
              })
            }

          })
        }

      })
    })
router.post('/updatetel',function (req,res,next) {
  var pws=req.body.content;
  User.find({telnumber:pws},function (err,docs) {
    if(docs.length>0) {
      const data = {isSuccess: false, message: '电话号码已存在'};
      res.json({
        status: '2',
        data: data
      })
    }   else {
      var id=req.body.id;
      const docs={username:req.body.tittle,telnumber:req.body.content,ring:req.body.time};
      User.findByIdAndUpdate({_id:id},{$set:docs},{new:true},function (err,doc) {
        if(err){
          res.json({
            status:'0',
          })
        }else {
          res.json({
            status:'1',
          })
        }

      })
    }

  })
})
router.post('/update',function (req,res,next) {
  var id=req.body.id;
  const docs={username:req.body.tittle,telnumber:req.body.content,ring:req.body.time};
  User.findByIdAndUpdate({_id:id},{$set:docs},{new:true},function (err,doc) {
    if(err){
      res.json({
        status:'0',
      })
    }else {
      res.json({
        status:'1',
      })
    }

  })
})


router.post('/del',function (req,res,next) {
  var id=req.body.id;
  //const docs={tittle:req.body.tittle,content:req.body.content,time:req.body.time};
  User.find({_id:id},function (err,doc) {
    if(doc.length>0){
      User.deleteOne({_id:id},function (doc,err) {
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
      const datas =  {isSuccess: false, message: '用户不存在'};
      res.json({
        data:datas
      })
    }
  })
});



var multer=require('multer');
var path = require("path")
var fs=require('fs');
//multer文件的硬盘存储模式
//创建文件夹
var createFileDirectory = function(path) {
  try {
    //检测文件夹是否存在，不存在创建
    fs.accessSync(path);
  } catch (error) {
    //创建文件夹
    fs.mkdirSync(path);
  }
}
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    //先创建路径在保存
    createFileDirectory('../../static');
    //指定文件保存路径
    cb(null, '../../static/');
  },
  filename: function(req, file, cb) {
    var filename=file.originalname.replace(/\s+/g,"");
    cb(null,filename);
  }
})
var upload = multer({
  storage: storage
});
router.post('/file',upload.single('file'),function(req, res) {
  let avatar = req.file
  console.log(avatar)
  res.json({
    status:'0',
    data:avatar.originalname.replace(/\s+/g,"")
  })

})
router.get('/user',function (req,res,next) {
  User.find({},function (err,doc) {
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
