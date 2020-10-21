<template>
    <div>
        <p>{{myTest}}</p>
        <p>{{myComputed}}</p>
    </div>
</template>

<script>
import {testMixin} from '../../assets/js/mixins.js'
export default {
    //在组件中另外写的代码会覆盖掉写好的mixins
    mixins: [testMixin],
    computed: {
        myComputed(){
            return '组件computed'
        }
    }
}
</script>