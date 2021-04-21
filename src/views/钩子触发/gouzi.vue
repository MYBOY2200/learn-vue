<template>
  <!-- 生命周期测试 -->
  <div class="about">
    <h1>{{ message }}</h1>
    <h2>{{ test }}</h2>
    <h3>{{ a }}</h3>
    <button @click="newMessage">new message</button><br />
    <button @click="testNew">test new</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "about page",
      test: "old",
      test1: "old test",
    };
  },
  beforeCreate() {
    // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
    //里面没data,即this.a取不到,为undefined,但是可以赋值给实例，在模板中显示(没有getter和setter的数据)
    this.a = "beforeCreate";
  },
  created() {
    //此时vue实例已经生成，data和prop也有，但dom还没挂载，$el还没有
    // console.log(this.$el.querySelector('h1').innerText)
    //这样能取到，但最好不要这样写
    // this.$nextTick(function(){
    //     console.log(this.$el.querySelector('h1').innerText)
    // })
  },
  mounted() {
    // 如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。
    // 注意 mounted 不会保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 mounted 内部使用 vm.$nextTick
    // 该钩子在服务器端渲染期间(SSR)不被调用。(vue框架是客户端渲染(CSR))
    console.log(this.$el.querySelector("h1").innerText);
    // this.$nextTick(function () {
    //   // Code that will run only after the
    //   // entire view has been rendered
    // });
  },
  updated() {
    // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子
    // 注意 updated 不会保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 updated 里使用 vm.$nextTick
    console.log(this.$el.querySelector("h1").innerText + "update");
    console.log(this.test);
  },
  methods: {
    newMessage() {
      this.message = "new message"; //会触发updated钩子
      //这样不行，需要this.$nextTick()才能马上从dom取到更新的值
      // console.log(this.$el.querySelector('h1').innerText)
      this.$nextTick(function () {
        console.log(this.$el.querySelector("h1").innerText);
      });
    },
    testNew() {
      this.test = "new"; //会触发updated钩子（更改了绑定到dom上的data数据updated钩子才会触发，单单是改data数据或者是修改dom都不会触发）
      this.test1 = "new test"; //不会触发updated钩子
      this.$el.querySelector("h2").style.marginLeft = "100px"; //不会触发updated钩子
      this.$el.querySelector("h2").innerText = "bingo"; //不会触发updated钩子
    },
  },
};
</script>