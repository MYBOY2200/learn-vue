<template>
<div>
    <div>{{test}}</div>
    <!-- 引用类型的值需要改动地址才会触发watch -->
    <div><button @click="test.a='3'">不更新地址</button></div>
    <div><button @click="test=Object.assign({},test,{a:'3'})">更新地址</button></div>
    <!-- 父data传子prop的初始值不会触发watch -->
</div>
</template>

<script>
export default {
    data() {
        return {
            test: {a:'1',b:'2'}
        }
    },
    watch: {
        test(val) {
            alert('更新了:'+val)
        }
    }
}
</script>
