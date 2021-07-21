<template>
    <div>
        <div>父组件:</div>
        <div>{{message}}</div>
        <Child msg="父组件传值" @gdTest="test"></Child>
    </div>
</template>

<script>
import Child from './Child'
export default {
    data() {
        return {
            message: ''
        }
    },
    components: {
        Child
    },
    methods: {
        test(data) {
            alert(data)
            this.message = data;
        }
    }
}
</script>