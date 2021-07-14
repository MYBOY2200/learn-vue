<template>
    <div>
        {{title}}
        <!-- 通过emit传值给父组件改变prop的传值更新子组件prop -->
        <button @click="update">更新prop</button>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    },
    methods: {
        update() {
            this.$emit('update:title', '新prop')
        }
    }
}
</script>