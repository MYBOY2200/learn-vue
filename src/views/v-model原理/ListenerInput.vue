<template>
  <label>
    <span>{{ label }}</span>
    <!-- $attrs是一个对象如：{ placeholder: 'Enter your username',required: true, } -->
    <!-- v-bind="$attrs"相当于 -->
    <!-- :placeholder="$attrs.placeholder" -->
    <!-- :required="$attrs.required" -->
    <!-- v-on="$listeners"会捕获父组件的事件，相当于在子组件@focus="$emit('focus')"，由于父组件用了v-model,默认会有个@input事件-->
    <!-- 所以子组件的$listeners对象里会有多一个默认的input方法，相当于@input="$emit('input')",但是要重写一下$listeners对象的input方法 -->
    <input type="text" v-bind="$attrs" :value="value" v-on="inputListeners" />
  </label>
</template>

<script>
export default {
  //父组件传子组件没定义的组件会到$attrs而不是根元素
  // 注意 inheritAttrs: false 选项不会影响 style 和 class 的绑定，依旧是可以绑定在根元素中。
  inheritAttrs: false,
  props: ["label", "value"],
  computed: {
    inputListeners: function () {
      var vm = this;
      console.log(this.$listeners)
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        //这里是覆写，因为父组件用了v-model,默认会有个@input事件，子组件的$listeners也就多了个默认的input方法
        {
          // 这里确保组件配合 `v-model` 的工作
          input: function (event) {
            vm.$emit("input", event.target.value);
          },
        }
      );
    },
  },
};
</script>
