<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
    <button @click="move">移动数组元素的位置</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [3,2,1],
    };
  },
  methods: {
    move() {
      //数字由小到大排序(官网说的是v-for不加key，Dom元素不会随着数据顺序改变而改变，加了key才能跟踪;实测加不加key都会改变Dom元素的位置，所以还是所有都加上key)
      let a = this.arr.sort(function (m, n) {
        if (m < n) return -1;
        else if (m > n) return 1;
        else return 0;
      });
    },
  },
};
</script>