<template>
    <div>
        <p a="abc" data-foo="rip" class='test' ref="test">123</p>
        <p ref="test1"></p>
    </div>
</template>

<script>
export default {
    mounted(){
        //原生写法:不是标准的属性需要通过attributes对象或getAttribute方法获取，标准的直接element.id就能取到
        //更好的解决方法是，使用标准提供的data-*属性。*中不能使用A到Z的大写字母
        console.log(this.$refs.test.attributes.a.name) //a
        console.log(this.$refs.test.attributes.a.value) //abc
        console.log(this.$refs.test.getAttribute('a')) //abc
        console.log(this.$refs.test.dataset.foo) //rip
        console.log(this.$el.querySelector('.test'))
        console.log(this.$refs.test1.dataset) //一个对象
    }
}
</script>