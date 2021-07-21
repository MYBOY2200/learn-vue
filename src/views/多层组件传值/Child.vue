<template>
    <div>
        <div>子组件:</div>
        <!-- 利用v-bind="$attrs" v-on="$listeners"可以省去中间的组件定义props和methods,在多层嵌套组件中很方便 -->
        <grand-child v-bind="$attrs" v-on="$listeners"></grand-child>
    </div>
</template>

<script>
import GrandChild from './GrandChild'
export default {
    created(){
        console.log(this.$attrs)
        // {msg: "父组件传值"}
        console.log(this.$listeners)
    },
    components: {
        GrandChild
    }
}
</script>