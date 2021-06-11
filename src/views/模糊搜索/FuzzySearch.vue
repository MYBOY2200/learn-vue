<template>
  <div>
    <input
      type="text"
      v-model="searchResult"
      @focus="showTemplate = true"
      @blur="hide"
      @keyup="fuzzySearch"
    />
    <!-- <van-cell-group>
      <van-field
        v-model="searchResult"
        center
        clearable
        placeholder="请选择"
        clickable
        @blur="hide"
        @focus="showTemplate = true"
        @input="fuzzySearch"
      >
      </van-field>
    </van-cell-group> -->
    <div v-show="showTemplate">
      <p
        v-for="(item, index) in fuzzyDictionary"
        :key="index"
        @click="selectItem(item)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 原字典
      dictionary: ["a", "ab", "abc"],
      // 模糊搜索字典
      fuzzyDictionary: ["a", "ab", "abc"],
      showTemplate: false, //是否显示模板
      searchResult: "", //输入框的值
    };
  },
  props: {},
  methods: {
    //keyup事件触发模糊搜索
    fuzzySearch() {
      this.fuzzyDictionary = [];
      let reg = RegExp(this.searchResult);
      for (let i = 0; i < this.dictionary.length; i++) {
        if (reg.test(this.dictionary[i])) {
          this.fuzzyDictionary.push(this.dictionary[i]);
        }
      }
    },
    //选择列表中某一项
    selectItem(item) {
      console.log(1);
      this.searchResult = item;
      this.fuzzySearch();
      this.showTemplate = false;
    },
    //隐藏搜索列表,失去焦点会先触发blur再触发列表的点击事件,当输入框为空时会选不中列表，需要写个定时器（100ms可以网页端，移动端0ms都行）
    hide() {
      console.log(this.searchResult);
      setTimeout(() => {
        if (!this.searchResult) {
          this.showTemplate = false;
        }
      },100);
    },
  },
};
</script>

<style lang="less" scoped>
</style>