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
import store from "@/store/index.js" //当不用...mapMutaion这种语法糖的时候需要手动引入export出来的store(若已经在main.js全局注册，可以使用this.$store.state)
import {mapMutations,mapGetters,mapActions} from 'vuex' //使用语法糖则不需要手动引入export出来的store
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
                // 这样子赋值在data页面不是实时刷新,因为数据地址不一样(需要在computed中返回)
                // store.state.test = "bbb" //最好不要这样赋值 vue工具捕获不到变更记录
                // store.commit('changeTest','bbb') //应用这种commit的方式(调用mutation)
                this.$store.commit('changeTest','bbb') //在main.js全局注册了store可以这么使用
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
            //同名用[]，不同名用{}
            //mutation都是同步事务，若是异步就追踪不到状态什么时候改变了
            ...mapMutations({
                muCC: 'changeTest'
            }),
            //Action 类似于 mutation,Action 提交的是 mutation，而不是直接变更状态。
            //Action 可以包含任意异步操作。
            ...mapActions([
                'mulTest'
            ])
        }
    }
</script>