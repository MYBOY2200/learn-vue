<template>
    <div>
        <div>跳转方式为push</div>
        <button @click="back">返回</button>
    </div>
</template>
<script>
export default {
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
</script>