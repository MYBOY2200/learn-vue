<template>
    <div>
        <h1>插槽数据流</h1>
        <!-- <slot>默认内容</slot> -->
        <slot name='aaa' :test="childTest"></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            childTest: '子组件数据'
        }
    }
}
</script>