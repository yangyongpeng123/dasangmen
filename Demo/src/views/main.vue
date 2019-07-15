<template>
  <div>
    <nav-header></nav-header>
    <nav-bread></nav-bread>
    <swiper :options="swiperOption" ref="mySwiper" @mouseenter.native="aa" @mouseleave.native="bb">
      <!-- slides -->
      <swiper-slide v-for="itm in urll" :key="itm.value"><img :src="itm.url" alt=""></swiper-slide>


      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-black" slot="button-prev" v-show="bol"  ></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next" v-show="bol" ></div>
    </swiper>

    <div class="liang">
      <ul >
        <li v-for="( itm,index) in telList" :key="itm.value" @mouseenter="checkIndex=index"  ><h3><div class="hot">热</div> <span>{{itm.telnumber}}</span></h3>
        <div id="sj" :class="{'xiahua':checkIndex==index,'xiahub':checkIndex!=index}" @mouseout="checkIndex!=index"><router-link :to="{path:'regis'}" class="lianjie">快速获取</router-link></div>
        </li>
      </ul>
    </div>
    <div class="zhuce">

      <div class="left">
        <img src="../../static/bishetupian/18day.png" alt="">
      </div>
      <div class="mid">
        <p>快速获取靓号，选得到赚得到</p>
        <table border="1" cellspacing="0">
          <tr>
            <td @click="chuxian"> <p>400-***-118</p></td>
            <td> <p @click="chuxian">400-***-218</p></td>
          </tr>
          <tr>
            <td> <p @click="chuxian">400-***-318</p></td>
            <td> <p @click="chuxian" >获取更多</p></td>
          </tr>
        </table>
      </div>
      <div class="rightl">
        <p>快速注册</p>
        <div class="left" >用户名：<input type="text" placeholder="6~16位字母，数字" maxlength="16"  id="user" @blur="reg"></div>
        <div class="left">电&nbsp;&nbsp;&nbsp;话：<input type="text" placeholder="数字" maxlength="8"  id="tel" @blur="reg"></div>
        <div class="left" >铃&nbsp;&nbsp;&nbsp;声：<input type="file" placeholder="铃声（可以不要）" id="ring" @blur="reg"></div>
        <router-link  :to="{path:'regis',query:{use:usei,tel:teli,ring:ringi} }">立即注册</router-link>
      </div>

    </div>
    <div>
      <ul>
        <li v-for="item in seltelList" :key="item.value">
      <div class="dl">
        <div class="tin">
          <img src="../../static/bishetupian/dijia.png" alt="">
        </div>
        <dd><div class="tine">
          <strong>{{item.telnumber}}</strong>
          <span style="display: block;text-align: center">咨询客服</span>
        </div><div class="tine1"><span >靓号推荐  </span><span>免费办理 </span></div><a class="tibotton" @click="fnDialogOK();">立即抢占</a></dd>
      </div>
        </li>
      </ul>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import NavHeader from '@/components/header.vue'
  import NavFooter from '@/components/footer.vue'
  import NavBread from '@/components/bread.vue'
  import  '../../node_modules/swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import axios from 'axios'
  import $ from  'jquery'

  export default {
    data () {
      return {
        timer:'',
        itm:'',
        checkIndex:null,
        isa:false,
        isb:true,
        teli:null,
        usei:null,
        ringi:null,
        urll:[
          {url:'../../static/bishetupian/banner3.jpg'},
          {url:'../../static/bishetupian/banner1.png'},
          {url:'../../static/bishetupian/banner2.png'},
          {url:'../../static/bishetupian/banner4.png'},
          {url:'../../static/bishetupian/banner5.jpg'}
        ],

        bol:false,
        swiperOption: {
          loop:true,
          autoplay:3000,
          //滑动速度
          speed:800,
          //滑动方向
          direction : 'horizontal',
          //小手掌抓取滑动
          // grabCursor : true,
          //滑动之后回调函数

          //左右点击
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          //分页器设置
          pagination: {
            el: '.swiper-pagination',
            clickable :true
          }
        },
        //swiperSlides: [1, 2, 3, 4]
        telList:[],
        seltelList:[],
      }
    },

      mounted(){
        axios.get("/tels").then((response)=>{
          let res=response.data;
          if(res.status=="0"){
            this.telList=res.result.list
          }else {
            this.telList=[];
          }
        });
        axios.get("/tell").then((response)=>{
          let res=response.data;
          if(res.status=="0"){
            this.seltelList=res.result.list
          }else {
            this.seltelList=[];
          }
        });

       // this.time();

      },
      computed:{
        swiper(){
          return this.$refs.mySwiper.swiper;
        },


      },
    methods:{

      aa(){
        this.bol=true;

      },
      bb(){
        this.bol=false
      },

      dispear(){
        console.log(1)
          this.isa=true,
          this.isb=false
      },
      displa(){
          this.isa=false,
          this.isb=true
      },
      time(){
        setInterval(function () {
          var date=new Date();
          var y=date.getFullYear()
          var m=date.getMonth()+1;
          var d=date.getDate();
          var h=date.getHours();
          var u=date.getMinutes();
          var s=date.getSeconds();
          var w=date.getDay();
          var arr=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
          var i=arr[w];
          if(s<10){
            s="0"+s
          }
          var htmll="<span>当前时间是："+y+"年</span><span>"+m+"月</span><span>"+d+"日</span><span>"+h+"时</span><span>"+u+"分</span><span>"+s+"秒</span><span>"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+i+"</span>";
          $(".con").html(htmll);
        },1000)

      },

      chuxian(){
        this.$router.push({path:'/regis',query:{userid:1,tel:2}});

      },
      fnDialogOK(){
        this.$router.push({path:'/regis'});
      },
      reg(){
        // console.log($("#tel").val())
       this.usei=$("#user").val();
       this.teli=$("#tel").val();
       this.ringi=$("#ring").val();
      }

    },
      components:{
          NavHeader,
          NavFooter,
          swiper,
          swiperSlide,
          NavBread
      },

    }
</script>

<style scoped>
  .swiper-slide img {
    max-width: 100%;
    height: 400px;
  }

  .liang ul{
    overflow: hidden;
    text-align: center;
    line-height: 30px;


  }

  .liang ul li{
    border: 1px solid darkorange;
    height: 100px;
    width: 238px;
    float: left;
    text-align:  center;
    cursor: pointer;
    margin-left: 20px;
  }
  .zhuce{
    overflow: hidden;
    text-align: center;
    padding: 10px 110px;
    position: relative;
  }
  .zhuce p{
    font-size: 20px;
  }
  .rightl {
    float: right;
    overflow: hidden;
    width: 300px;
    margin-top: 32px;
  }
  .rightl input{
    width: 220px;
    height: 46px;
    line-height: 46px;
    margin-bottom: 15px;
    padding-left: 12px;
    background: #e4e4e4;
    border: 0;
  }
  .rightl a{
    display: block;
    float: left;
    width: 232px;
    height: 44px;
    background: #fd962a;
    border-radius: 22px;
    text-align: center;
    line-height: 44px;
    cursor: pointer;
    color: #fff;
    border: none;
    margin-left: 65px;
  }
  .rightl input::placeholder{
    color: black;
  }
  table {
    width: 466px;
    height: 230px;
    cursor: pointer;
  }
  table tr td:hover{
    background: #f56a4b;
  }
  .mid{
    float: left;
    margin: 13px;
  }
.zhezhao{
  width: 232px;
  height: 114px;
  background: #fd962a;
  text-align: center;
  line-height: 114px;
  color: white;


}
  .zhezhao p{
    font-size: 30px;
  }
  .zhezhao p:hover{
    background: #fb6048;
  }
  .hot{
    width: 30px;
    height: 30px;
    background: red;
    color: white
  }
  .xiahua{
    width: 100%;
    height: 43px;
    background: #f26735;


  }

  .xiahub{
    display: none;
  }
  .lianjie{
    width: 100%;
    height: 100%;
    color: white;
  }


  .dl{
    width: 226px;
    height: 148px;
    float: left;
    border: 1px solid #dedede;
    margin-right: 40px;
    margin-bottom: 40px;
    position: relative;
  }
  .tin{
    position: absolute;
    right: -15px;
    top: -15px
  }
  .tibotton{
    width: 226px;
    height: 32px;
    background: #dedede;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    font-weight: bold;
    display: block;
  }
  .tibotton:hover{
    color: #fff;
    background-color: #ff6600;
  }
  .tine1{
    width: 226px;
    height: 48px;
    overflow: hidden
  }
  .tine{
    width: 226px;
    height: 67px;
    border-bottom: 1px dashed #dedede;
  }
  strong{
    display: block;
    text-align: center;
    height: 40px;
    line-height: 45px;
    font-size: 20px;
    color: #ff6600;
  }
  .tine1 span{
 display: block;
    float: left;
    margin: 13px 0 0 30px;
  }
</style>
