// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import BaiduMap from 'vue-baidu-map'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(elementui)
Vue.use(BaiduMap,{
  //ak 在百度开发者平台自己申请的密钥
  ak:'YG29w1XQGSuHyVGSKuerwSbkgiGpHdG1'
})
/* eslint-disable no-new */
// const store=new Vuex.Store({
//   state:{
//     count:4
//   },
//   mutations:{
//     add(state){
//       state.count++
//     }
//   },
//   add(){
//     this.$store.commit("dsds")
//   }
// })

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
