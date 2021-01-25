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
                    test: {a:2,b:3}
                }
            })
        },
        goParams() {
            this.$router.push({
                name: 'params',
                params: {
                    test: {a:1,b:2}
                }
            })
        }
    }
}
</script>