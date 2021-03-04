<template>
    <div>
        <!-- v-bind变量的方式需要用require语法，得到的是字符串 -->
        <img :src="icon.img1" alt="">
        <!-- 直接赋值src可以用绝对路径或者相对路径 -->
        <img src="./qq.png" alt="">
        <img src="@/views/本地图片/qq.png" alt="">
        <!-- 最终显示出来的src是一样的 -->
    </div>
</template>
<script>
export default {
    created() {
        console.log(this.icon.img1) // /img/qq.b67f9418.png
    },
    data() {
        return {
            icon: {
                img1: require('@/views/本地图片/qq.png')
            }
        }
    }
}
</script>