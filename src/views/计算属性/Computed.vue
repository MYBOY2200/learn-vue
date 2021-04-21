<template>
<!-- 计算属性的结果会被缓存，需要依赖响应式 property 变化才会重新计算。 -->
<!-- 计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。
这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。 -->
<!-- 如果某个依赖 (比如非响应式 property) 在该实例范畴之外，则计算属性是不会被更新的。 -->
    <div>
        {{test1}} | {{test2}}
        <button @click="change">改变</button>
    </div>
</template>

<script>
export default {
    name: "abc", //指定组件的名字便于开发工具调试
    created(){
        this.b = 3
    },
    data() {
        return {
            a:1
        }
    },
    computed: {
        // 响应式property变化会重新计算
        test1() {
            return this.a*2
        },
        //非响应式property变化了不会重新计算
        test2() {
            return this.b*2
        }

    },
    methods: {
        change() {
            this.a=2;   
            this.b=4;
            console.log(this.b) //4
            console.log(this.test2) //6(没改变)
            console.log(this.test1) //4(改变了)
        }
    }
}
</script>