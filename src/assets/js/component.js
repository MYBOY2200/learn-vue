import Vue from 'vue'

import HelloWorld from '@/components/HelloWorld'
// console.log(HelloWorld) //一个对象，跟框架的组件有区别，框架的有install方法(插件)，需要Vue.use()

Vue.component('MyComponent',HelloWorld)

//注意脚手架3.0不能这样写，会报错
// Vue.component('button-counter', {
//     data: function () {
//       return {
//         count: 0
//       }
//     },
//     template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
// })