<template>
  <div>
    <ul>
      <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
    </ul>
    <button @click="move">移动数组元素的位置</button>

    <!-- v-for和v-if同时用的情况,v-for优先于v-if,但不建议写一起 -->
    <ul>
      <li v-for="(item,index) in bothArr" :key="index" v-if="item.type==='A'">
        {{item.content+":A"}} 
      </li>
      <li v-else-if="item.type==='B'">
        {{item.content+":B"}} 
      </li>
      <li v-else-if="item.type==='C'">
        {{item.content+":C"}} 
      </li>
      <li v-else>
        {{item.content+":D"}} 
      </li>
    </ul>

    <!-- 两层循环 -->
    <ul>
      <li v-for="(item,index) in twoArr" :key="index">
        {{item.b}}
        <div v-for="(item2,index) in item.a" :key="index">{{item2}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [3, 2, 1],
      // v-for和v-if同时用的情况,v-for优先于v-if,但不建议写一起
      bothArr: [
        {
          content: "a",
          type: "A",
        },
        {
          content: "b",
          type: "B",
        },
        {
          content: "c",
          type: "C",
        },
        {
          content: "d",
          type: "D",
        },
      ],
      //两层循环
      twoArr: [
        {a:[1,2,3],b:"test"},{a:[4,5,6],b:"test"},{a:[7,8,9],b:"test"}
      ]
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