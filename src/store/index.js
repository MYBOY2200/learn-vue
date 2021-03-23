import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//在开发模式强制启用开发工具
// then had to add in ./store.js as well.
Vue.config.devtools = process.env.NODE_ENV === 'development'

// 在main.js引入了此js文件会执行这些代码，但定义的变量在main.js是取不到的必须要export出去
// const a = 'thereisnospoon' 
// console.log(a)

export default new Vuex.Store({
  state: {
    test: 'aaa',
    test2: 'whos',
    test3: 'your',
    test4: 'daddy'
  },
  //mutations需遵守 Vue 的响应规则,当state中的对象需要新增属性时，用Vue.set(obj,'newProp',123)(推荐)
  // 或者以新对象替换老对象。例如，利用对象展开运算符 (opens new window)我们可以这样写：state.obj = { ...state.obj, newProp: 123 }
  mutations: {
    //改变test
    changeTest(state,newTest) {
      state.test = newTest
    },
    changeTest2(state,newTest) {
      state.test2 = newTest
    },
    changeTest3(state,newTest) {
      state.test3 = newTest
    },
    changeTest4(state,newTest) {
      state.test4 = newTest
    },
  },
  actions: {
    //触发多个mutation改变多个state (newTest为对象解构赋值)
    mulTest({commit,state,getters,dispatch},{newTest}){
      commit('changeTest2',newTest)
      commit('changeTest3',newTest)
      commit('changeTest4',newTest)
    }
  },
  modules: {
  },
  getters: { //getters相当于store中的计算属性，可计算state和其他getters
    //获取test
    getTest(state) {
      return state.test
    },
    //getters第二个参数可以这样使用：getters.getTest.length
    //注意，getter 在通过属性访问时(this.$store.getters.getTests2)是作为 Vue 的响应式系统的一部分缓存其中的。
    // 注意，getter 在通过方法访问时(getter返回一个方法)，每次都会去进行调用，而不会缓存结果。如this.$store.getters.getTodoById(2)
    getTest2(state,getters) { 
      return state.test2
    },
    getTest3(state) {
      return state.test3
    },
    getTest4(state) {
      return state.test4
    },
  }
})
