<template>
    <div>
        <!-- 直接获取state里的数据若修改不能在dom实时刷新 -->
        <div>{{demo}}</div>
        <!-- getters获取state里的数据若修改能在dom实时刷新 -->
        <div>{{getTest}}</div>
        <!-- 直接修改state的值 -->
        <button @click="change">修改state的值</button>
        <!-- 通过mutation修改state的值 -->
        <button @click="muChange">mutation修改</button>
        <!-- 通过actions修改多个state的值,或者异步 -->
        <button @click="mulChange">actions修改</button>
    </div>
</template>

<script>
import store from "@/store/index.js"
import {mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        created() {
            console.log(store) //一个对象 
        },
        data() {
            return {
                demo: store.state.test,
            }
        },
        computed: {
            ...mapGetters(['getTest','getTest2','getTest3','getTest4'])
        },
        methods: {
            change() {
                // 直接修改state的值
                // 这样子赋值在data页面不是实时刷新,因为数据地址不一样
                store.state.test = "bbb"
                console.log(store.state.test) //bbb
                //通过getters获取的能在dom实时刷新
                console.log(this.getTest) //bbb
            },
            muChange() {
                // 通过mutation修改state的值
                this.muCC('ccc')
                console.log(store.state.test) //ccc
                console.log(this.getTest) //ccc
            },
            mulChange(){
                //通过actions修改多个state的值,或者异步
                this.mulTest({newTest:'greedisgood'}) //对象解构赋值
                console.log(store.state.test2,store.state.test3,store.state.test4) //greedisgood greedisgood greedisgood
                console.log(this.getTest2,this.getTest3,this.getTest4) //greedisgood greedisgood greedisgood
            },
            ...mapMutations({
                muCC: 'changeTest'
            }),
            ...mapActions([
                'mulTest'
            ])
        }
    }
</script>