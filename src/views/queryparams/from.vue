<template>
    <div>
        <div @click="goQuery">query传对象</div>
        <div  @click="goParams">params传对象</div>
    </div>
    
</template>

<script>
export default {
    methods: {
        goQuery() {
            this.$router.push({
                path: '/query',
                query: {
                    // 建议转成json字符串，不然刷新会有问题，参数变成[object Object]
                    test: {a:2,b:3}
                }
            })
        },
        goParams() {
            this.$router.push({
                name: 'params',
                params: {
                    test: '001'
                }
            })
        }
    }
}
</script>