<template>
    <div>
        <button @click="test">派发事件给父组件</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            a: 1,
            b: 2,
            c: 3
        }
    },
    methods: {
        test() {
            //只派发一个参数，这个参数为父组件中的方法默认传的实参$event
            this.$emit('getTest',this.a)
            //arguments对象是派发参数为多个时默认传的实参
            this.$emit('mulTest',this.a,this.b,this.c)
        }
    }
}
</script>