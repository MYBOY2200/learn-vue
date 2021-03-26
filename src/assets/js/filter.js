import Vue from 'vue'

//字符串首字母大写过滤
Vue.filter('capitalize',function(value,a1,a2){
    if(!value) return ''
    value = value.toString()
    console.log(a1) //传进来的参数1
    console.log(a2) //传进来的参数2
    return value.charAt(0).toUpperCase()+value.slice(1)
})