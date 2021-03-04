<template>
<!-- 生命周期测试 -->
  <div class="about">
      <h1>{{message}}</h1>
      <h2>{{test}}</h2>
      <button @click="newMessage">new message</button><br>
      <button @click="testNew">test new</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'about page',
      test: 'old',
      test1: 'old test'
    }
  },
  beforeCreate(){
    //里面没data,即this.a取不到,为undefined
  },
  created () {
    //此时vue实例已经生成，data和prop也有，但dom还没挂载，$el还没有
    // console.log(this.$el.querySelector('h1').innerText) 
    //这样能取到，但最好不要这样写
    // this.$nextTick(function(){
    //     console.log(this.$el.querySelector('h1').innerText)
    // })
  },
  mounted () {
    console.log(this.$el.querySelector('h1').innerText)
  },
  updated() {
    console.log(this.$el.querySelector('h1').innerText+'update')
    console.log(this.test);
  },
  methods: {
    newMessage() {
      this.message = 'new message'; //会触发updated钩子
      //这样不行，需要this.$nextTick()才能马上从dom取到更新的值
      // console.log(this.$el.querySelector('h1').innerText) 
      this.$nextTick(function(){
        console.log(this.$el.querySelector('h1').innerText)
      })
    },
    testNew() {
      this.test = 'new' //会触发updated钩子（更改了绑定到dom上的data数据updated钩子才会触发，单单是改data数据或者是修改dom都不会触发）
      this.test1 = 'new test' //不会触发updated钩子
      this.$el.querySelector('h2').style.marginLeft = '100px'; //不会触发updated钩子
      this.$el.querySelector('h2').innerText = 'bingo' //不会触发updated钩子
    }
  }

}
</script>