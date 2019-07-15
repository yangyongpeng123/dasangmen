import Vue from 'vue'
import Router from 'vue-router'

import mainl from '@/views/main.vue'
import aboutus from '@/views/aboutus.vue'
import  intro from  '@/views/400introduce.vue'
import  regis from  '@/views/register.vue'
import mes from  '@/views/meassage.vue'
import log from  '@/views/log.vue'
import bgmain from '@/views/bgmain.vue'
import usecontro from '@/views/usecontro.vue'
import mescontrol from '@/views/mescontrol.vue'
import  yuyinluzhi from  '@/views/yuyinluzhi.vue'
import  updatepwd from  '@/views/updatepwd.vue'
import  telcontro from  '@/views/telcontro.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainl',
      component: mainl
    },
    {
      path:'/aboutus',
      name:'abouts',
      component: aboutus
    },
    {
      path:'/intro',
      name:'intro',
      component: intro
    },
    {
      path:'/regis',
      name:'regis',
      component:regis
    },
    {
      path:'/mes',
      name:'mes',
      component:mes
    },
    {
      path:'/log',
      name:'log',
      component:log
    },
    {
      path:'/bgmain',
      name:'bgmain',
      component:bgmain,
      children:[
        {
          path:'usecontro',
          name:'usecontro',
          component:usecontro
        },
        {
          path:'mescontrol',
          name:'mescontrol',
          component:mescontrol
        },
        {
          path:'telcontro',
          name:'telcontro',
          component:telcontro
        }
      ]
    },
    {
      path:'/yuyinluzhi',
      name:'yuyinluzhi',
      component:yuyinluzhi
    },
    {
      path: '/updatepwd',
      name: 'updatepwd',
      component: updatepwd
    },
  ]
})
