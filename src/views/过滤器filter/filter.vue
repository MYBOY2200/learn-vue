<template>
    <div>
        <!-- filter在双花括号中(跟computed作用有点类似,不过这个可以在多个地方复用) -->
        {{message | capitalize}}
        <!-- filter在双花括号中;过滤器是 JavaScript 函数，因此可以接收参数 -->
        <div :id="message | capitalize(1,2)"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: 'rip'
        }
    }
}
</script>