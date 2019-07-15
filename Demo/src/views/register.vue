<template>
    <div class="bgimg">
      <ul class="registe">
        <li>
          <label>用户名:</label><input id="user" placeholder="6~16位字母，数字，下划线" maxlength="16" v-bind:value="user"/>
          <label>电 话:</label><input id="pwd" type="text" placeholder="6~16数字" maxlength="9" v-bind:value="pwd"/>
          <label>铃 声:</label>
          <input type="file" name="audio" id="ring"  @change="uploadAvatar" accept=".mp3">
        </li>
        <li ><input id="btn" type="button" value="注册" @click="reg"/></li>
      </ul>
    </div>
</template>

<script>
  import axios from 'axios'
  import $ from  'jquery'
  export default {
        data(){
          return{
             user:null,
            pwd:null,
            ring:null,
          }
        },
      mounted(){
        this.anti();
      },
      methods:{
          anti(){
            console.log(this.$route.query);
            this.user=this.$route.query.use;
            this.pwd=this.$route.query.tel;
           // var ring1=this.$route.query.ring;
          // var ring2= ring1.split(/\//g)
           // this.ring=ring2[ring2.length-1];
          },
        reg(){
            console.log(1)
            var users=$("#user").val();
            var tel=$("#pwd").val();
            console.log('users'+users)
          //var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
          var pattern=new RegExp(/\D/,"g");
          var b=pattern.test(tel);
          if(users==''||tel==''||b==true){
            alert("输入信息有误电话号不能有特殊字符字母用户名不能为空")
          }else {
            axios.post("/use",{
              username:users,
              password:tel,
              ring:this.ring
            }).then((response)=>{
              let res=response.data;
              if(res.status=='1'){
                alert(res.data.message)
              } else if(res.status=='2'){
                alert(res.data.message)
              }else if(res.status=='0'){
                alert(res.data.message)
              }
            })}
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
            this.ring=res.data
          });
        }
      }
    }
</script>

<style scoped>
  .bgimg{
    background: url("../../static/bishetupian/112233.jpg")no-repeat ;
    background-size: 100% 100%;
    height: 670px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .registe{
    padding: 30px;
    border: 2px solid white;
    box-shadow: 0 1px 1px white;
    width: 300px;
    height: 360px;

  }
  .registe li{
    margin: 10px;
  }
  .registe label{
    display: block;
    color: blue;
    margin: 5px;
  }
  .registe input {
    border:  3px solid white;
    outline: none;
    width: 240px;
    line-height: 1.5;
    padding: 17px 10px;
    background: transparent;
    color: #000;
  }
  .registe input::placeholder{
    color: black;
  }
  .registe select{
    background: transparent;
    outline: none;
    border:  1px solid white;
    color: #757575;
  }
  #btn{

    margin-top: 30px;
    color: blue;
    cursor: pointer;
    width: 265px;
  }
  #btn:hover{
    background: #e5771e;
  }
</style>
