<template>
  <label>
    <span>{{ label }}</span>
    <!-- $attrs是一个对象如：{ placeholder: 'Enter your username',required: true, } -->
    <!-- v-bind="$attrs"相当于 -->
    <!-- :placeholder="$attrs.placeholder" -->
    <!-- :required="$attrs.required" -->
    <input
      type="text"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  //使用inheritAttrs: false，父组件传子组件没定义的property会到$attrs而不是根元素
  // 注意 inheritAttrs: false 选项不会影响 style 和 class 的绑定，依旧是可以绑定在根元素中。
  inheritAttrs: false,
  props: ["label", "value"],
};
</script>
