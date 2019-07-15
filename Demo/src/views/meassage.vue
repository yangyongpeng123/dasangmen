<template>
    <div>
      <nav-header></nav-header>

      <nav-bread></nav-bread>
      <div style="overflow: hidden">
      <ul class="left">
        <h2 style="color: #5184eb">新闻中心</h2>
        <li v-for="(item,index) in messageList" :key="item.value">
          <i class="dot"></i>
            <h3 @click="checkIndex=index;ss()">{{item.tittle}}</h3>
            <div class="time">{{item.time}}</div>
            <div :class="{'dis':checkIndex!=index}" class="con2" v-if="bol">{{item.content}}
              <div class="idot"></div>
            </div>
        </li>
      </ul>
      <div class="left cj">
        <img src="../../static/bishetupian/message1.jpg" alt="">
      </div>
      </div>
      <nav-footer></nav-footer>
    </div>
</template>

<script>
  import axios from 'axios'
  import $ from  'jquery'
  import NavHeader from '@/components/header.vue'
  import NavFooter from '@/components/footer.vue'
  import NavBread from '@/components/bread.vue'
    export default {
        data(){
          return {
            messageList:[],
            checkIndex:null,
            bol:false
          }
        },
      methods:{
          ss(){
           this.bol=!this.bol;
          }
      },
      mounted(){
          axios('/message').then((response)=>{
            let res=response.data;
            // console.log(res);
            if(res.status="0"){
              this.messageList=res.result.list.reverse();
            }else {
              this.messageList=[];
            }
          })
      },
      components:{
        NavHeader,
        NavFooter,
        NavBread
      }
    }
</script>

<style scoped>
  ul{
    margin: 74px;
  }
  li{
    position: relative;
    padding-left: 10px;
    width: 600px;
    margin-bottom: 0;
    height: auto;
    line-height: 37px;
  }
  li:hover{
    cursor: pointer;
  }
    .dot{
      position: absolute;
      top: 12px;
      left: 0;
      display: block;
      width: 5px;
      height: 5px;
      background: #da4453
      }
    .idot{
      position: absolute;
      top: 35px;
      left: 0;
      display: block;
      width: 5px;
      height: 5px;
      background: #7195b7
    }
  .time{
    position: absolute;
    top: 0;
    right: 0;
  }
  .con2{
    padding-left: 10px;
    text-indent:2em;
  }
  .dis{
    display: none;
  }
  .cj img{
    width: 400px;
    height: 400px;
  }
</style>
