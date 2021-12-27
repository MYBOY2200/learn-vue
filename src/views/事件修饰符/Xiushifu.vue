<template>
    <div>
        <!-- keyup只按下enter键的时候触发事件 -->
        <!-- input事件只在输入框内容变化时才触发，别的无效按键不会触发，所以后面加.enter是无效的 -->
        @keyup:<input type="text" @keyup.enter="test" v-model="a1">
        @input:<input type="text" @input="test1" v-model="a2">
        <div><button @click='change'>改变值</button></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            a1: '',
            a2: ''
        }
    },
    methods: {
        test() {
            console.log(1)
        },
        test1(){
            console.log(2)
        },
        change() {
            this.a1="111",
            this.a2="222"
        }
    }
}
</script>