<template>
  <div>
    <div id="bar"></div>
    <div id="pie"></div>
    <div id="line"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  // 基于准备好的dom，初始化echarts实例
  mounted() {
    this.getZhu();
    this.getPie();
    this.getLine()
  },
  methods: {
    getZhu() {
      var myChart = echarts.init(document.getElementById("bar"));
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
    getPie() {
      var myChart = echarts.init(document.getElementById("pie"));
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        // roseType: 'angle', //南丁格尔图
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "视频广告" },
              { value: 274, name: "联盟广告" },
              { value: 310, name: "邮件营销" },
              { value: 335, name: "直接访问" },
              { value: 400, name: "搜索引擎" },
            ],
            itemStyle: {
              // 阴影的大小
              shadowBlur: 200,
              // 阴影水平方向上的偏移
              shadowOffsetX: 0,
              // 阴影垂直方向上的偏移
              shadowOffsetY: 0,
              // 阴影颜色
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        ],
      });
    },
    getLine() {
      var myChart = echarts.init(document.getElementById("line"));
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
};
</script>

<style lang="less">
#bar {
  height: 300px;
  //   width: 300px;
  margin: 0 auto;
}
#pie {
  height: 400px;
  width: 400px;
  margin: 0 auto;
}
#line {
  height: 300px;
  //   width: 300px;
  margin: 0 auto;
}
</style>