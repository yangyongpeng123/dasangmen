<template>
    <div>

        <h1>用户后台页面</h1>
        <div>
          <p>用户名：</p><el-input type="text" id="tittle" style="width: 20%" v-model="input"></el-input>
          <p>电话：</p><el-input id="con" style="width: 20%" v-model="input1" maxlength="9"></el-input>
          <p>电话铃声：</p><input type="file" id="time1" @change="uploadAvatarl">

          <el-button type="primary" id="add" @click="add()">添加</el-button>
        </div>
        <div>
          <p>用户名：</p><el-input type="text" id="sel" style="width: 20%" v-model="input2"></el-input>
          <el-button @click="sel()" type="primary">查找</el-button>
          <el-button id="update"  @click="updatename()" type="primary">修改</el-button>
          <p>电话：</p><el-input name="" id="con1" cols="30" rows="10" v-model="select1" style="width: 20%" maxlength="9" ></el-input>
          <el-button id="updatetel"  @click="updatetel()" type="primary">修改</el-button>
          <p>电话铃声：</p><el-input type="text" v-model="tim" id="tim1" style="width: 20%" disabled="disabled"></el-input>
          <input type="file" @change="uploadAvatar" accept=".mp3" style="width: 20%">
          <p></p>
          <div>
            <el-button  class="left" @click="update()" type="primary">修改</el-button>
            <el-button id="del" class="left" @click="del()" type="primary">删除</el-button>
          </div>
        </div>
      <div class="kh">
        <h2>有{{userLength}}用户使用电话</h2>
        <table border="1" cellspacing="0.5" cellpadding="1px" width="800px"   >
          <tr>
            <td>用户名</td>
            <td>电 话</td>
            <td>铃 声</td>
          </tr>
          <tr v-for="(item) in userList" :key="item.value">
            <td>{{item.username}}</td>
            <td>{{item.telnumber}}</td>
            <td>
              {{item.ring}}
              <audio :src="'../../static/'+item.ring" controls></audio></td>
          </tr>
        </table>
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
        userList:[],
        userLength:'',
        input:'',
        input1:'',
        input2:'',
        ring:'',
      }
    },

    mounted(){
 axios.get('/use/user').then((response)=>{
   let res=response.data;
   if(res.status=='0'){
     this.userList=res.result.list;
     this.userLength=res.result.count
   }
 })
    },
    methods:{
      add(){
        var tittl=$("#tittle").val();
        var content=$("#con").val();
        var time1=this.ring;
        axios.post('/use',{username:tittl,password:content,ring:time1}).then((response)=>{
          var res=response.data;
          if(res.status=='0'){
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
        axios.get('/use/sel',{params:param}).then((response)=>{
          var res=response.data;
          if(res.status=='1'){
            alert(res.data.message)
          }else {
            console.log(res.result.list);
            this.select1=res.result.list[0].telnumber;
            this.tim=res.result.list[0].ring;
            this.id=res.result.list[0]._id;
          }
        })
      },
      updatename(){
        var id=this.id;
        console.log(id);
        var tittl=$("#sel").val();
        var content=$("#con1").val();
        var time1=$("#tim1").val();

        axios.post('/use/updatename',{id:id,tittle:tittl,content:content,time:time1}).then((response)=>{
          var res=response.data;
          console.log(res)
          if(res.status=='1'){
            alert('修改成功')
          }else if (res.status=='2') {
           alert(res.data.message)
          }
        })
      },
      updatetel(){
        var id=this.id;
        console.log(id);
        var tittl=$("#sel").val();
        var content=$("#con1").val();
        var time1=$("#tim1").val();

        axios.post('/use/updatetel',{id:id,tittle:tittl,content:content,time:time1}).then((response)=>{
          var res=response.data;
          console.log(res)
          if(res.status=='1'){
            alert('修改成功')
          }else if (res.status=='2') {
            alert(res.data.message)
          }
        })
      },
      update(){
        var id=this.id;
        console.log(id);
        var tittl=$("#sel").val();
        var content=$("#con1").val();
        var time1=$("#tim1").val();

        axios.post('/use/update',{id:id,tittle:tittl,content:content,time:time1}).then((response)=>{
          var res=response.data;
          console.log(res)
          if(res.status=='1'){
            alert('修改成功')
          }else if (res.status=='2') {
            alert(res.data.message)
          }
        })
      },
      del(){
        var id=this.id;
        console.log(id);
        var tittl=$("#sel").val();
        var content=$("#con1").val();
        var time1=$("#tim1").val();

        axios.post('/use/del',{id:id}).then((response)=>{
          var res=response.data;
          if(res.status=='1'){
            alert('删除成功')
          }else {
            alert(res.data.message)
          }
        })
      },
      uploadAvatar(avatar){
        console.log(avatar.target.files[0]);
        let file = avatar.target.files[0]
        let data = new FormData();
        data.append("file", file, file.name);//很重要 data.append("file", file);不成功
        console.log(data.get('file'))
        return axios.post("use/file", data, {
          headers: { "content-type": "multipart/form-data" }
        }).then((response)=>{
          let res=response.data;
          this.tim=res.data
        });
      },
      uploadAvatarl(avatar){
        console.log(avatar.target.files[0]);
        let file = avatar.target.files[0]
        let data = new FormData();
        data.append("file", file, file.name);//很重要 data.append("file", file);不成功
        console.log(data.get('file'))
        return axios.post("use/file", data, {
          headers: { "content-type": "multipart/form-data" }
        }).then((response)=>{
          let res=response.data;
          this.ring=res.data
        });
      }

    }
  }
</script>

<style scoped>
 input{
   background-color: #FFF;
   background-image: none;
   border-radius: 4px;
   border: 1px solid #DCDFE6;
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
   color: #606266;
   display: inline-block;
   font-size: inherit;
   height: 40px;
   line-height: 40px;
   outline: 0;
   padding: 0 15px;
   -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
   transition: border-color .2s cubic-bezier(.645,.045,.355,1);
   width: 20%;

 }
  #add{
    display: block;
  }

  .kh{
    margin-top: 60px;
  }
  tr{
     width: 180px;
    height: 85px;
    text-align: center;
  }
  audio{
    height: 54px;
    width: 300px;
  }

</style>
