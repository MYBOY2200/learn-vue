<template>
    <div>
        <div @click="test">孙子组件：</div>
        <div>{{msg}}</div>
    </div>
</template>

<script>
export default {
    props: {
        msg: {
            type: String,
            default: '111'
        }
    },
    methods: {
        test() {
            this.$emit('gdTest','孙子组件派发')
        }
    }
}
</script>