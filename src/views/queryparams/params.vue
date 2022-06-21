<template>
    <div>params</div>
</template>
<script>
export default {
    mounted() {
        //这里刷新会报错，可能是项目问题，正常是不会报错的
        console.log(this.$route.params)
    }
}
</script>