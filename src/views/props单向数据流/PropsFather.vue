<template>
    <div>
        <!-- 父组件data值改变,子组件中所有的 prop 都将会刷新为最新的值 -->
        <div><button @click="txt = '改变父组件字符串data值'">点击修改父组件字符串data值</button></div>
        <div><button @click="arr = [4,5,6]">点击修改父组件数组data值</button></div>
        <p>父组件字符串data值:{{txt}}</p>
        <p>父组件数组data值:{{arr}}</p>
        <br>
        <br>
        <props-child :test="txt" :arr="arr"></props-child>
    </div>
    
</template>
<script>
import PropsChild from './PropsChild.vue'
export default {
    data(){
        return {
            txt: '测试',
            arr: [1,2,3]
        }
    },
    components: {
        PropsChild
    }
}
</script>