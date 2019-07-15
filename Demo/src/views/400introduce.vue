<template>
    <div>
      <nav-header></nav-header>
      <nav-bread></nav-bread>
      <div class="minhead">
        <img src="../../static/bishetupian/zbjpg.jpg" alt="">
        <img src="../../static/bishetupian/tushu.jpg" alt="">
        <img src="../../static/bishetupian/tielu.jpg" alt="">
        <div id="container"></div>
      </div>
  <div id="map">
    <baidu-map class="baidumap" :center="{lng:112.455494,lat:38.019346}"
    :zoom="15" :scroll-wheel-zoom="true" >
      <bm-control :offset="{width: '10px', height: '10px'}">
        <bm-auto-complete v-model="keyword" :sugStyle="{zIndex: 999999}">
          <input type="text" placeholder="请输入搜索关键字" class="serachinput">
        </bm-auto-complete>
      </bm-control>
    </baidu-map>
  </div>
      <nav-footer></nav-footer>
    </div>
</template>
<!--<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=YG29w1XQGSuHyVGSKuerwSbkgiGpHdG1"></script>-->

<script>
  import NavHeader from '@/components/header.vue'
  import NavFooter from '@/components/footer.vue'
  import NavBread from '@/components/bread.vue'

export  default {
    data (){
      return{
        keyword:'',
        }
    },
  components:{
    NavHeader,
    NavFooter,
    NavBread
  },
  methods:{
    mapReady(e){
      console.log("map ready")
    },
    mapLoad(e){
      console.log("map load")
    }
  },

}
</script>

<style scoped>
  .baidumap{
    position: relative;
    height: 600px;
    width: 80%;
    left: 126px;
  }
  .minhead{
    margin-left: 80px;
  }
  .minhead img{
  width: 400px;
  height: 300px;
    float: left;
}
</style>
