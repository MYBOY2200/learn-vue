<template>
    <div>
        <emit-child @getTest="myTest($event,b)" @mulTest="mulTest(arguments,b)"></emit-child>
    </div>
</template>
<script>
import EmitChild from './EmitChild.vue'
export default {
    data() {
        return {
            b: 10
        }
    },
    components: {
        EmitChild
    },
    methods: {
        // $event是派发参数为一个时默认传的实参
        myTest(x,y) {
            console.log(x); //1
            console.log(y); //10
        },
        //arguments对象是派发参数为多个时默认传的实参
        mulTest(x,y) {
            //用Arrary.from(x)方法(只需length属性就行,不需要iterator接口);
            // 或者用扩展运算符把arguments对象(有iterator接口)转换成真实的数组;
            // 或者用Array.prototype.slice.call(arguments)
            console.log(Array.from(x)) //[1,2,3]
            // console.log([...x])
            // console.log(Array.prototype.slice.call(x))
            console.log(y) //10
        }
    }
}
</script>