<template>
    <div>
        我是render里的子组件:{{child}}
        slot:<slot></slot>
    </div>
</template>
<script>
import Slot from '../views/slot/Slot.vue'
export default {
    props: {
    
        child: {
            type: String,
            require: true
        }
    }
}
</script>