import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//自定义指令
import './assets/js/directive.js'
//过滤器
import './assets/js/filter.js'
//全局组件
import './assets/js/component.js'

Vue.config.productionTip = false

// 在开发模式强制启用开发工具 // Before you create app
Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//开发工具设置
// After you create app
window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app.constructor