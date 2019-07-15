<template>
  <div>

    <div class="zc">
      <p>合作公司</p>
      <ul>
        <li v-for=" itm in urlll" :key="itm.value" class="left">
          <img :src="itm.url" alt="">
        </li>
      </ul>
    </div>
   <div class="fo">

     <hr/>
     <ul class="ull">
       <li><a href="http://localhost:8080/#/aboutus">产品介绍</a></li>
       <li><a href="">400功能</a></li>
       <li><a href="">应用价值</a></li>
       <li><a href="">优势特点</a></li>
       <li><a href="">400百科</a></li>
       <li><a href="">开通流程</a></li>
       <li><a href="">全国地区</a></li>
       <li><a href="">成功案例</a></li>
       <li><a href="">使用帮助</a></li>
       <li><a href="">资质证书</a></li>
       <li><a href="">400代理</a></li>
       <li><a href="http://localhost:8080/#/intro">关于我们</a></li>
     </ul>
     <div class="foo">
       <p>Copyright © 2018-2019 www.trust400.com.版权所有 尖草坪区中北大学软件学院</p>
          <p>联系电话：400-1616-16 公司地址：山西省太原市尖草坪区中北大学</p>
              <p>业务范围：国内400电话业务办理、信通400电话办理</p>
                  <p>以上网页内容纯属虚构</p>
       <div class="im">
       <img src="../../static/bishetupian/dog.jpg" alt="">
       <img src="../../static/bishetupian/woc.jpg" alt="">
       </div>
     </div>
   </div>
  </div>
</template>

<script>
    export default {
      data(){
        return{
          urlll:[
            {url:'../../static/bishetupian/dangdangwang.jpg'},
            {url:'../../static/bishetupian/hexun.jpg'},
            {url:'../../static/bishetupian/lianjian.jpg'},
            {url:'../../static/bishetupian/mengniu.jpg'},
            {url:'../../static/bishetupian/qigo.jpg'},
            {url:'../../static/bishetupian/qq.jpg'},
            {url:'../../static/bishetupian/shengda.jpg'},
            {url:'../../static/bishetupian/shihua.jpg'},
            {url:'../../static/bishetupian/souhu.jpg'},
            {url:'../../static/bishetupian/wangyi.jpg'},
            {url:'../../static/bishetupian/dog.jpg'},

          ],
        }
      }
    }
</script>

<style scoped>
  .fo{
    background: #212121;
    color: #666;
    font-size: 12px;
  }
  .ull{
    width: 1000px;
    overflow: hidden;
    padding-left: 200px;
  }
  .ull li{
    float: left;
    padding: 10px 10px;
    font-size: 12px;
  }
  .ul li a{
    color: #d7d8d9;
  }
  .foo{
    text-align: center;
  }
  a:hover{
    color: white;
  }
  .im img{
    width: 130px;
    height: 135.44px;

  }
  .zc{
    text-align: center;
    overflow: hidden;
    margin: 0 200px;
    width: 1000px;
    font: bold 55px/100% "微软雅黑", "Lucida Grande", "Lucida Sans", Helvetica, Arial, Sans;
    color: #ccc;
    text-shadow: -1px -1px 0 #fff,1px 1px 0 #333,1px 1px 0 #444;
  }
  .zc ul li img{
    margin: 20px;
    width: 122px;
    height: 84px;
  }

</style>
