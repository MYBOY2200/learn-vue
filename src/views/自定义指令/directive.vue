<template>
    <div>
        <!-- 自定义指令：自动获取焦点 -->
        <!-- 1+1位置value可以为任意表达式(包括boolean、number、string、对象、数组、变量等) -->
        <input type="text" v-focus:foo.bar.aaa="1+1">

        <!-- 在组件中使用自定义指令时，el参数是此组件的根dom节点加上子节点，在el绑定style或者class会绑定到根节点上 -->
        <direct-comp v-focus></direct-comp>

        <!-- 不会触发自定义指令中的update钩子 -->
        <button @click="test">改变</button>
    </div>
</template>

<script>
import DirectComp from '@/components/DirectComp.vue'
export default {
    //局部自定义指令
    // directives: {
    //     focus: {
    //         inserted(el) {
    //             el.focus()
    //         }
    //     }
    // }
    components: {
        DirectComp
    },
    methods: {
        test() {
            this.$el.querySelector('input').style.height = '50px'
        }
    }
}
</script>