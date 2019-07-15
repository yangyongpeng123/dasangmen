var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var Mang=require('../model/mang');
mongoose.connect('mongodb://127.0.0.1:27017/tel',{useNewUrlParser:true}, function(err){

  if(err){

    console.log('Connection Error:' + err)

  }else{

    console.log('Connection success!') }

})
console.log(1)
// router.get('/',function (req,res,next) {
//   const usename=req.body.username;
//   const pws=req.body.password;
//   Mang.find({use:usename,pwd:pws},function (err,docs) {
//     if(docs.length>0){
//       const data={isSuccess: false, message: '登陆成功'};
//       res.json({
//         status: '1',
//         data:data
//       })
//     }
//   })
// })
router.post('/', function(req, res, next) {
  const usename=req.body.username;
  const pws=req.body.password;
  Mang.find({use:usename,pwd:pws},function (err,docs) {
    if(docs.length>0){
      console.log(docs)
      const data={isSuccess: false, message: '登陆成功'};
      res.cookie("userid",docs[0].use,{
        path:'/',
        maxAge:1000*60*60
      });
      //req.session.user=docs;
      res.json({
        status: '1',
        data:data
      })
    }else {
      const  data={message:'账号或密码错误'}
      res.json({
       status: '0',
        data:data
      })
    }
  })
});
router.post("/logout",function (req,res,next) {
  res.cookie("userid","",{
    path:'/',
    maxAge:-1
  })
  res.json({
    status:'0',
    mag:'',
    result:''
  })
});
router.get("/checklogin",function (req,res,next) {
 var co= req.cookies.userid;
 if(co) {
   res.json({
     status: '0',
     data: co,
   })
 }else {
   res.json({
     status: '1',
     data: "请登录",
   })
 }
})
router.post("/update",function (req,res,next) {
  var username=req.body.user;
  var rpassword=req.body.rpwd;
  var password=req.body.pwd;
  Mang.find({use:username},function (err,doc) {
    if(doc.length>0){
       Mang.find({use:username,pwd:rpassword},function (err,doc) {
          if(doc.length>0){
            Mang.updateOne({use:username},{$set:{use:username,pwd:password}},{new:true},function (err,doc) {
              if(err){
                res.json({
                  status:'3'
                })
              }else {
                res.json({
                  status:'0'
                })
              }
            })
          }else{
            res.json({
              status:'2'
            })
          }
       })
    }else {
      res.json({
        status:'1',
      })
    }
  })
})
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports=router;
