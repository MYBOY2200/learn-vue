<template>
  <div>
    <slot-component>
      <template v-slot:aaa="slotProps">
        <div>
          <p>我是父组件的值:{{ test }}</p>
          <p>我是子组件的值:{{ slotProps.test }}</p>
        </div>
      </template>
    </slot-component>
  </div>
</template>

<script>
import SlotComponent from "./SlotComponent.vue";
export default {
  data() {
    return {
      test: "父组件data值",
    };
  },
  components: {
    SlotComponent,
  },
};
</script>