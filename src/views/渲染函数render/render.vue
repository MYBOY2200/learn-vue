<template>
  <!-- render渲染函数返回的是vnode(虚拟节点) -->
  <div>
    <TestRender :level="2"></TestRender>
  </div>
</template>

<script>
import RenderComp from "@/components/RenderComp.vue";

//相当于定义一个组件
const TestRender = {
  //此函数的return值createElement()是vnode(render函数作用相当于模板template)
  //不能用箭头函数不然取不到this(箭头函数的this绑定父作用域的this,会指向父组件的实例，不合适)
  render: function (createElement) {
    return createElement(
      "h1",
      {
        attrs: { a: 1 },
      },
      [
        `我是render生成的组件level:${this.level}`,
        createElement(
          RenderComp,
          {
            //子节点(组件)传prop
            props: {
              child: "儿子prop",
            },
          },
          //子节点slot
          "abc",
        ),
      ]
    );
  },
  //定义一个组件中定义props(要区别上面的数据对象中的props)
  props: {
    level: {
      type: Number,
      require: true,
    },
  },
};
export default {
  components: {
    TestRender,
  },
};
</script>

