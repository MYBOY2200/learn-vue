<template>
  <div>
    <!-- filter在双花括号中(跟computed作用有点类似,不过这个可以在多个地方复用) -->
    {{ message | capitalize }}
    <!-- filter在双花括号中;过滤器是 JavaScript 函数，因此可以接收参数 -->
    <div :id="message | capitalize(1, 2)"></div>
    <button @click="test">改变</button>
    <div>{{ddd}}</div>
  </div>
</template>
<script>
export default {
  created() {
    this.message = this.a;
  },
  data() {
    return {
      a: "rip",
      //当property需要另外一个property处理过的数据时，要在data里定义初始值(方便在dom响应式刷新),然后在钩子函数定义覆盖，不能直接使用message: this.a
      // message: vm.a //当data为箭头函数时也不能这样使用,官网的说法不对
      message: '',
      d: 3
    };
  },
  methods: {
      test(){
          this.message= 'rrr'
          console.log(this.message)
      }
  },
  computed: {
    //使用了箭头函数，函数里的this不再指向组件实例，变成undefined,可以定义一个参数代表组件实例
    ddd: (vm)=>{
      return vm.d*2
    }
  }
};
</script>