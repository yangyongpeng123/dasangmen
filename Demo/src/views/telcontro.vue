<template>
  <div>
  <h1>界面电话号码后台页面</h1>
    <p>电话号码：</p><el-input id="con" style="width: 20%" v-model="input1" maxlength="9"></el-input>
    <el-button  @click="add()" type="primary">添加</el-button>
  </div>
</template>

<script>
  import axios from 'axios'
  import $ from  'jquery'
    export default {
       data(){
         return {
           input1:'',
         }
       },
       methods:{
         add(){
           var tel=$("#con").val();
           axios.post("/tell/add",{telnumber:tel}).then((response)=>{
             let res=response.data;
             if(res.status=='1'){
               alert("电话号码已存在")
             }else  if(res.status=='2'){
               alert("该电话号码已被使用")
             }else  if(res.status=='0'){
               alert(res.data.message)
             }
           })
         }
       },
      mounted(){

      }
    }
</script>

<style scoped>

</style>
