import Vue from 'vue'
 
//全局自定义指令，在main.js里引入
Vue.directive('focus',{
    //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    bind(el,binding,vnode,oldVnode){
        console.log(el) //dom对象
        console.log(binding) //一个对象
        console.log(vnode) //vnode对象
        console.log(oldVnode) //vnode对象

        el.style.backgroundColor = 'green' //生效
        // el.focus() //不生效
    },
    //被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    inserted(el) {
        console.log(el)
        // 根元素本身不是input标签，querySelector能取到值
        console.log(el.querySelector('input'))
        if(el.querySelector('input')) {
            el.querySelector('input').focus()
        }else { //跟元素本身就是input标签
            el.focus()
        }
    },
    //所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
    //但是你可以通过比较更新前后的值来忽略不必要的模板更新
    update() {
        console.log(1)
    },
    //指令所在组件的 VNode 及其子 VNode 全部更新后调用。
    componentUpdated() {
        console.log(2)
    },
    //只调用一次，指令与元素解绑时调用。
    unbind() {
        console.log(3)
    }

})

// console.log(Vue.directive('focus'))  //返回已注册的指令(一个对象)