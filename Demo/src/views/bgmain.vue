<template>
    <div class="wh" >
      <bg-header></bg-header>
      <div style="overflow: hidden;width: 100%">
      <div class="operation left">
        <button @click="telcon">界面电话管理</button>
        <button @click="usecontr">用户管理</button>
        <button @click="meassagecon">新闻管理</button>
      </div>
      <router-view class="left child"></router-view>
      </div>
    </div>
</template>

<script>
  import BgHeader from '@/components/bghead.vue'
    export default {
        data(){
          return {

          }
        },
      mounted(){},
      methods:{
        usecontr(){
          this.$router.push({path:'/bgmain/usecontro'})
        },
        meassagecon(){
          this.$router.push({path:'/bgmain/mescontrol'})
        },
        telcon(){
          this.$router.push({path:'/bgmain/telcontro'})
        }
      },
      components:{
        BgHeader,
      }
    }
</script>

<style scoped>

  .operation{
    width: 15%;
    background: #00B7FF;
    height: 2000px;
    overflow: hidden;
  }
  .operation button{
    background-color: #00B7FF;
    color: white;
    outline: none;
    font-size: 20px;
    box-shadow: none;
    height: 50px;
    width: 118px;
    border: 1px solid wheat;
    margin: 10px 25px;
    cursor: pointer;
  }
  .operation button:hover{
    background: #007aff;
  }
  .child{
    width: 85%;
    min-height: 700px
  }
</style>
