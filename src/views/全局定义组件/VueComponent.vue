<template>
    <div>
        <!-- 全局组件 -->
        <my-component></my-component>
        <!-- 组件中使用v-for,必须绑定key-->
        <!-- 任何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要使用 prop,如v-bind:item="item" -->
        <my-component v-for="(item,index) in arr" :key="index"></my-component>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: [1,2,3]
        }
    }
}
</script>