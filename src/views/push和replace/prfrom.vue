<template>
    <div>
        <button @click="push">push</button>
        <button @click="replace">replace</button>
    </div>
</template>

<script>
export default {
    methods: {
        //这个方法会向 history 栈添加一个新的记录，当用户点击浏览器后退按钮时，则回到之前的 URL。
        push() {
            this.$router.push('/push')
        },
        //这个方法会替换掉当前的 history 记录，当用户点击浏览器后退按钮时，则回到之前再之前的 URL。
        replace() {
            this.$router.replace("/replace")
        }
    }
}
</script>