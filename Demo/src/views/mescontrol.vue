<template>
    <div>
   <h1>新闻后台页面</h1>
      <div>
        <p>标题：</p><el-input  type="text" id="tittle" v-model="textarea1" autosize  placeholder="请输入标题" style="width: 20%" maxlength="20"></el-input>
        <p>内容：</p><el-input type="textarea" name="" id="con"  :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea2" style="width: 20%"></el-input>
        <p>时间：</p><el-input type="text" id="time1" v-model="textarea3"   style="width: 20%"></el-input>
        <el-button id="add" @click="add()" type="primary">添加</el-button>
      </div>
      <div>
        <p>标题：</p><el-input type="text" id="sel" v-model="textarea4" style="width: 20%"></el-input><el-button @click="sel()" type="primary">查找</el-button>
        <p>内容：</p><el-input type="textarea" name="" id="con1"  :autosize="{ minRows: 2, maxRows: 4}"cd  v-model="select1" style="width: 20%"></el-input>
        <p>时间：</p><el-input type="text" v-model="tim" id="tim1" style="width: 20%"></el-input>
        <p></p>
        <div>
        <el-button id="update" class="left" @click="update()" type="primary">修改</el-button>
        <el-button id="del" class="left" @click="del()" type="primary">删除</el-button>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import $ from  'jquery'
    export default {
       data(){
         return  {
          select1:"",
           tim:null,
           id:'',
           textarea1:'',
           textarea2:'',
           textarea3:'',
           textarea4:''
         }
       },
      mounted(){

      },
      methods:{
         add(){
           var tittl=$("#tittle").val();
           var content=$("#con").val();
           var time1=$("#time1").val();
           axios.post('/message/add',{tittle1:tittl,con:content,time1:time1}).then((response)=>{
             var res=response.data;
             if(res.status=='1'){
               alert(res.data.message)
             }else {
               alert(res.data.message)
             }
           })
         },
        sel(){
           var seltittle=$("#sel").val();
           var param={
             seltittle:seltittle
           };
           axios.get('/message/sel',{params:param}).then((response)=>{
             var res=response.data;
             if(res.status=='1'){
               alert(res.data.message)
             }else {
              console.log(res.result.list);
              this.select1=res.result.list[0].content;
               this.tim=res.result.list[0].time;
               this.id=res.result.list[0]._id;
             }
           })
        },
        update(){
          var id=this.id;
           console.log(id);
          var tittl=$("#sel").val();
          var content=$("#con1").val();
          var time1=$("#tim1").val();

          axios.post('/message/update',{id:id,tittle:tittl,content:content,time:time1}).then((response)=>{
            var res=response.data;
            if(res.status=='1'){
              alert('修改成功')
            }else {
              alert('修改失败')
            }
          })
        },
        del(){
          var id=this.id;
          console.log(id);
          var tittl=$("#sel").val();
          var content=$("#con1").val();
          var time1=$("#tim1").val();

          axios.post('/message/del',{id:id}).then((response)=>{
            var res=response.data;
            if(res.status=='1'){
              alert('删除成功')
            }else {
             alert(res.data.message)
            }
          })
        }

      }
    }
</script>

<style scoped>
  #add{
    display: block;
  }
  #update{
    display: block;
    margin-right: 50px;
  }
</style>
