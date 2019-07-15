<template>
  <div class="bgimg">
    <ul class="registe">
      <li>
        <label>用户名:</label><input id="user" placeholder="6~16位字母，数字，下划线" maxlength="16" />
        <label>密 码:</label><input id="pwd" type="password" placeholder="6~16数字" maxlength="8" />
      </li>
      <li ><input id="btn" type="button" value="登陆" @click="log"/></li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import $ from  'jquery'
  export default {
        data(){
          return {

          }
        },
      mounted(){
      },
      methods:{
        log(){
          var users=$("#user").val();
          var pwd=$("#pwd").val();

          axios.post("/admin",{
            username:users,
            password:pwd
          }).then((response)=>{
            var res = response.data;
              if(res.status=='0') {
                alert(res.data.message);
              }
              if(res.status=="1"){
               this.$router.push({path:'/bgmain/telcontro'})
            }

          });


        }

      },
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
    height: 300px;

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
