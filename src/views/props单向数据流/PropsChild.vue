<template>
    <div>
        <!-- 在子组件手动改props的简单类型数据vue会发出警告,只能改变子组件的值,父组件的值不受影响 -->
        <div><button @click="test = '子组件字符串props改动'">点击修改子组件字符串props</button></div>

        <!-- 会报错，但此props跟父组件的data已经不是同一个地址,父组件data值不会跟着改变 -->
        <div><button @click="arr = [7,8,9]">点击修改子组件数组props(更换地址)</button></div>
        <!-- 不会报错，传值是同一个地址的原因，父组件也会跟着改变，所以不推荐直接修改props，想修改可以在子组件另起一个data并用slice，或者computed不修改 -->
        <div><button @click="$set(arr,'0',10)">点击修改子组件数组props(不更换地址)</button></div>

        <!-- 同上传址的原因,不能直接修改引用类型数据本身(若用了slice就可以) -->
        <div><button @click="$set(correct,'0',11)">正确修改props(用了slice就可以)</button></div>

        <!-- 更改了引用之后可以随意修改，即赋值一个原本数组的复制品或另一个数组 -->
        <div><button @click="correct = []">正确修改props</button></div>

        <p>test:{{test}}</p>
        <p>arr:{{arr}}</p>
        <p>correct:{{correct}}</p>
        <p>res:{{res}}</p>
    </div>
</template>

<script>
export default {
    props: {
        test: {
            type: String,
            default: ''
        },
        arr: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            //用了slice后，地址就不是同一个，可以放心修改也不会影响父组件
            correct: this.arr.slice()
        }
    },
    computed: {
        res() {
            return this.arr.slice().reverse()   
        }
    }
}
</script>