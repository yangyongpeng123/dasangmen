<template>
    <div class="he">
      <div class="left font">
        <p>大嗓门400电话网站后台管理系统</p>
      </div>
      <div class="right con2">
        <p class="left" style="margin-right: 10px">你好!{{use}}</p>

        <button @click="logout()">安全退出</button>
        <button @click="updatapwd()">修改密码</button>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
        data(){
          return {
            use:null
          }
        },
      mounted(){
           //this.use=this.$route.query.userid;
           axios.get('admin/checklogin').then((response)=>{
             let res=response.data;
             if(res.status=="0"){
               this.use=res.data;
             }else {
               this.$router.push({path:'/log'})
             }
           })
      },
      methods:{
        logout(){
          axios.post('admin/logout').then((response)=>{
           let res=response.data;
           if(res.status=="0"){
             this.use=null;
             this.$router.push({path:'/log'})

           }

          })
        },
        updatapwd(){
          axios.post('admin/logout').then((response)=>{
            let res=response.data;
            if(res.status=="0"){
              this.use=null;
              this.$router.push({path:'/updatepwd'})

            }

          })

        }
      }
    }
</script>

<style scoped>
.he{
  padding: 2px 125px;
background: #007aff;
  height: 50px;
  line-height: 3;
  color: white;
}
  .font{
    font-size: 21px;
    line-height: 2.5;
  }
  .con2 a:hover{
    color: white;
  }
  button{
    outline: none;
    background: none;
    border: none;
    font-size: 18px;
    color: lightgray;
  }
  button:hover{
    color: white;
    cursor: pointer;
  }
</style>
