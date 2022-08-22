<template>
<div>
    <!-- 总结：如果想监控对象或数组的每一项都能触发watch,使用deep -->
    <div>{{test}}</div>
    <div>{{testArr}}</div>
    <!-- 对象需要改动地址才会触发watch -->
    <div><button @click="test.a='3'">不更新地址</button></div>
    <div><button @click="test=Object.assign({},test,{a:'3'})">更新地址</button></div>
    <!-- 当数组值改动,要使用this.$set才能监听到,如果没使用,dom不会响应式更新,watch也不会触发 -->
    <div><button @click="changeArr">更新数组项</button></div>
    <!-- 父data传子prop的初始值不会触发watch -->
</div>
</template>

<script>
export default {
    data() {
        return {
            test: {a:'1',b:'2'},
            testArr: [1,2,{c:3}]
        }
    },
    methods:{
        changeArr(){
            // this.testArr[0]=4 //dom不响应式更新,watch也不触发
            // this.$set(this.testArr,0,'abc') //dom响应式更新,watch触发
            //更新第二层
            this.testArr[2].c=4 //dom响应式更新,watch不触发
        }
    },
    watch: {
        test(val) {
            alert('更新了:'+val)
        },
        // test:{
        //     handler(val){
        //         alert(val)
        //     },
        //     deep: true
        // },
        testArr(val) {
            alert('更新了:'+val)
        },
        // testArr:{
        //     handler(val){
        //         alert(val)
        //     },
        //     deep: true
        // },
    }
}
</script>
