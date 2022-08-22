<template>
  <div>
    <slot-component>
      <!-- aaa和slotProps名字都随意取 -->
      <template v-slot:aaa="slotProps">
        <div>
          <p>我是父组件的值:{{ test }}</p>
          <p>我是子组件的值:{{ slotProps.test }}</p>
        </div>
      </template>
      <!-- 旧语法 -->
      <!-- <template slot="aaa" slot-scope="slotProps">
        {{ slotProps.test }}
      </template> -->
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