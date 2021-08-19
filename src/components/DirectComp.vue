<template>
    <div>
        <!-- 绑定的focus方法和style作用在了根元素上，所以无法组件里触发input的focus -->
        <input type="text">
        <p>在组件上使用自定义指令</p>
    </div>
</template>


<script>
export default {
}
</script>