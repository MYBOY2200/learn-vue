<template>
    <div>
        {{show}}
        {{faker}}
        {{xiaohu}}
        <button @click="aaa">改变</button>
    </div>
</template>

<script>
import {test} from '@/assets/js/share.js'
let test1 = 'faker'
let test2 = {name:'xiaohu'}
    export default {
        data() {
            return {
                show: test,
                faker: test1,
                xiaohu: test2
            }
        },
        methods:{
            aaa() {
                // test = 'showmaker' //不能这样 test是只读的值不能修改
                console.log(test)

                test1 = 'showmaker' //data中的数据赋值的时候,改变数据源不会影响data(一般用computed)
                console.log(this.faker)

                test2.name = 'bin' //data中的数据赋址的时候,改变数据源会影响data
                console.log(this.xiaohu)

            }
        }
    }
</script>