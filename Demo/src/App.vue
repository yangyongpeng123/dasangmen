<template>
  <div id="app">
    <router-view/>
    <div class="kf" >
      <img src="../static/bishetupian/kefu.png" alt="" class="k" @click="dd()">
      <p @click="hide()" >收起</p>
      <div @click="shouye" class="sm" v-if="hid">首页</div>
      <div @click="abouts" class="sm" v-if="hid">400介绍</div>
      <div  class="sm" @click="mes" v-if="hid">新闻中心</div>
      <div  class="sm" @click="reg" v-if="hid">快速免费注册</div>

      <div @click="intro"  class="sm" v-if="hid">关于我们</div>
      <div @click="log"  class="sm" v-if="hid">我是管理员</div>
      <div  class="sm" @click="yuyin()" v-if="hid">语音录制</div>
      <div class="back" ><img src="../static/bishetupian/dingbu.jpg" alt=""></div>
    </div>
    <div class="dw" v-show=tan>
      <div class="close" @click="close()">-</div>
      <img src="../static/bishetupian/X.png" alt="" @click="cc">
      <div class="com">
        <div class="con"></div>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;恭喜您中奖了现在在本网站注册400电话可享受一折优惠，并且免费送您一年话费还等什么赶快申请把</p>
        <button @click="shouye">首页</button>
        <button @click="abouts">400介绍</button>
        <button  @click="mes">新闻中心</button>
        <button @click="reg">快速免费注册</button>
        <button @click="intro">关于我们</button>
        <button  @click="log" >我是管理员</button>
      </div>

    </div>
  </div>
</template>

<script>
  import  $ from 'jquery'
  require('../static/recorder.js')
export default {
  data(){
    return{
      tan:false,
      timer:'',
      hid:true
    }
  },
  mounted(){
    this.cx();
   // this.cxi();
  },
methods:{

  cc(){
    this.tan=false;
    this.cxi()
  },
  dd(){
    this.tan=true;
    this.cxi()
  },
  abouts(){
    this.$router.push({path:'/aboutus'});

  },
  shouye(){
    this.$router.push({path:'/'})

  },
  intro(){
    this.$router.push({path:'/intro'})


  },
  reg(){
    this.$router.push({path:'/regis'})
  },
  mes(){
    this.$router.push({path:'/mes'})
  },
  log(){
    this.$router.push({path:'/log'})
  },
  yuyin(){
    this.$router.push({path:'/yuyinluzhi'})
  },
  cxi(){
    this.timer=setTimeout(()=>{this.tan=true},30000);
  },
  hide(){
    this.hid=!this.hid

  },
  cx(){
    window.onload=function () {
      var timer=null;
      var isTop=true;
      var clientHeight=document.documentElement.clientHeight;
      window.onscroll=function () {
        var osTop=document.documentElement.scrollTop|| document.body.scrollTop;
        if(osTop>=clientHeight){
          $(".back").css("display","block");
        }else {
          $(".back").css("display","none");
        }
        if(!isTop){
          clearInterval(timer);
        }
          isTop=false
      }
      $(".back").click(function () {
        timer=setInterval(function () {
          var osTop = document.documentElement.scrollTop || document.body.scrollTop;
          var ispeed = Math.floor(-osTop / 7);
          console.log('ispeed '+ispeed);
          document.documentElement.scrollTop = document.body.scrollTop = osTop+ispeed;
          //到达顶部，清除定时器
          if (osTop == 0) {
            clearInterval(timer);
          };
          isTop = true;
        },30)
      })

    }
  },
  close(){
    clearInterval(this.timer);
    this.tan=false;
  }
}
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
    color: #666;
    cursor: pointer;
  }
  a:hover{
    color: #2285cc;
  }
  li{
    list-style-type: none;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  .kf{
    position: fixed;
    top: 15%;
    right:50px;
    z-index: 1;
    cursor: pointer;
    text-align: center;
  }
  .kf .k:hover{
    transform: rotate(360deg) scale(1.5);
    transform-origin: center center;
    transition: ease-in 1s;
  }
  .kf p{
    margin-top: 20px;
    border: 1px solid darkorange ;
    font-size:16px;
    background: darkorange;
    color:white;
    border-radius:15px;
    height: 40px;
    line-height: 40px;
    width: 123px;
  }

  .dw{
    position: fixed;
    z-index: 1;
    top: 150px;
    left: 500px;

  }
  .dw img{
    position: relative;
    top: 32px;
    right: 450px;
    width: 25px;
    height: 25px;
    left: 442px;
    cursor: pointer;
  }
  .com{
    border: 1px solid #14a5dc;
    border-top-width: 30px;
    width: 500px;
    height: 300px;
    border-radius: 4%;
    background: linear-gradient(to bottom,#8fd8e7,#d9d1c0);
  }
  .com button{
    height: 50px;
    width: 118px;
    background: #ff3b61;
    border: 1px solid #afd5d6;
    color: white;
    border-radius:15px ;
    cursor: pointer;
    margin-left: 3px;
    outline: none;
  }
  .back{
    display: none;
  }
  .back img{
    width: 60px;
    height: 55px;
  }
  .sm{
    height: 50px;
    width: 118px;
    background: #ff3b61;
    border: 1px solid #afd5d6;
    color: white;
    border-radius:15px ;
    cursor: pointer;
    margin-left: 3px;
    margin-top: 3px;
    line-height: 50px;

  }
  .close{
    position: relative;
    top: 85px;
    left: 397px;
    cursor: pointer;
    font-size: 73px;
    color: white;
  }

</style>
