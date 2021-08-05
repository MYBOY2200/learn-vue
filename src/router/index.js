import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Slot from '../views/slot/Slot.vue'
import Mixins from '../views/mixins/Mixins.vue'
import Scan from '../views/浏览器扫码/scan.vue'
import ScanApp from '../views/App扫码/ScanApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/slot',
    name: 'Slot',
    //用了路由懒加载的方式打包成app会报错
    // component: () => import(/* webpackChunkName: "slot" */'../views/slot/Slot.vue')
    component: Slot
  },
  {
    path: '/props',
    name: 'Props',
    component: () => import('../views/props单向数据流/PropsFather.vue')
  },
  {
    path: '/mixins',
    name: 'Mixins',
    // component: () => import('../views/mixins/Mixins.vue')
    component: Mixins
  },
  {
    path: '/emit',
    name: 'Emit',
    component: () => import('../views/emit传参/EmitFather.vue')
  },
  {
    path: '/vfor',
    name: 'Vfor',
    component: () => import('../views/v-for渲染/Vfor.vue')
  },
  {
    path: '/from',
    component: () => import('../views/query和params传参/from.vue')
  },
  {
    path: '/query',
    component: () => import('../views/query和params传参/query.vue')
  },
  {
    // path: '/:test', //不能这样写，不然后面声明的一级路由会取不到
    path: '/params/:test',
    name: 'params',
    component: () => import('../views/query和params传参/params.vue')
  },
  {
    path: '/gouzi',
    name: 'gouzi',
    component: () => import('../views/钩子触发/gouzi.vue')
  },
  {
    path: '/image',
    component: () => import('../views/本地图片/image.vue')
  },
  {
    path: '/prfrom',
    component: () => import('../views/push和replace/prfrom.vue')
  },
  {
    path: '/push',
    component: () => import('../views/push和replace/push.vue')
  },
  {
    path: '/replace',
    component: () => import('../views/push和replace/replace.vue')
  },
  {
    path: '/x1',
    component: () => import('../views/vuex/x1.vue')
  },
  {
    path: '/x2',
    component: () => import('../views/vuex/x2.vue')
  },
  {
    path: '/directive',
    component: () => import('../views/自定义指令/directive.vue')
  },
  {
    path: '/dataset',
    component: () => import('../views/元素dataset/dataset.vue')
  },
  {
    path: '/render',
    component: () => import('../views/渲染函数render/render.vue')
  },
  {
    path: '/filter',
    component: () => import('../views/过滤器filter/filter.vue')
  },
  {
    path: '/component',
    component: () => import('../views/全局定义组件/VueComponent.vue')
  },
  {
    path: '/computed',
    component: () => import(/* webpackChunkName: "computedd" */ '../views/计算属性/Computed.vue')
  },
  {
    path: '/fuzzysearch',
    component: () => import('../views/模糊搜索/FuzzySearch.vue')
  }
  ,
  {
    path: '/IP',
    component: () => import('../views/客户端IP/IP.vue')
  }
  ,
  {
    path: '/scan',
    // component: () => import(/* webpackChunkName: "scan" */'../views/浏览器扫码/scan.vue')
    component: Scan
  },
  {
    path: '/scanapp',
    component: ScanApp
  },
  {
    path: '/watch',
    component: () => import('../views/watch触发/watch.vue')
  },
  {
    path: '/v-model',
    component: () => import('../views/v-model原理/Vmodel.vue')
  },
  {
    path: '/payload',
    component: () => import('../views/多层组件传值/Father.vue')
  },
  {
    path: '/echarts',
    component: () => import('../views/echarts/echarts.vue')
  }
  

]

const router = new VueRouter({
  mode: 'history',  //打包成app使用hash,路径和图片才能正常
  base: process.env.BASE_URL,
  routes
})

export default router
