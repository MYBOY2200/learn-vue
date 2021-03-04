import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 'aaa',
    test2: 'whos',
    test3: 'your',
    test4: 'daddy'
  },
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
    mulTest({commit,state},{newTest}){
      commit('changeTest2',newTest)
      commit('changeTest3',newTest)
      commit('changeTest4',newTest)
    }
  },
  modules: {
  },
  getters: {
    //获取test
    getTest(state) {
      return state.test
    },
    getTest2(state) {
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
