<template>
    <div class="music">
      <nav-header></nav-header>

      <nav-bread></nav-bread>
      <a href="http://localhost:63342/bishe1/%E8%AF%AD%E9%9F%B3%E5%BD%95%E5%88%B6/index.html?_ijt=sqqns1a2kf7pc9e3i9qabnagdd" target="_blank">语音录制</a>
      <p>用户可以通过录音下载录音来制作自己的个性铃声</p>
      <nav-footer></nav-footer>
    </div>
</template>

<script>
  import NavHeader from '@/components/header.vue'
  import NavFooter from '@/components/footer.vue'
  import NavBread from '@/components/bread.vue'
export  default {
  data(){
    return {

    }
  },
  mounted(){
  },
  components:{
    NavHeader,
    NavFooter,
    NavBread
  }
}
</script>

<style scoped>
.music a{
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 600px;
}
  .music p{
    margin-left: 500px;
  }
</style>
