<template>
  <div>
    <div id="bar"></div>
    <div id="pie"></div>
    <div id="line"></div>
    <div id="mix"></div>
    <div id="morey"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  // 基于准备好的dom，初始化echarts实例
  mounted() {
    this.getZhu();
    this.getPie();
    this.getLine();
    this.getMix();
    this.getMorey();
  },
  methods: {
    // 柱状图
    getZhu() {
      var myChart = echarts.init(document.getElementById("bar"));
      myChart.setOption({
        //标题
        title: {
          text: "ECharts 入门示例",
        },
        //提示框，鼠标悬浮交互时的信息提示
        tooltip: {},
        //横轴数组
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        //纵轴数组
        yAxis: {},
        //驱动图表生成的数据内容数组
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
    // 饼状图
    getPie() {
      var myChart = echarts.init(document.getElementById("pie"));
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {
          //格式化鼠标hover的显示内容abcd分别代表,系列的name,系列的data项名字name，data项对应的value，data项对应的百分比
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        //图例，每个图表最多仅有一个图例
        legend: {
          // orient: "vertical",
          x: "right",
          data: ["视频广告", "联盟广告", "邮件营销", "直接访问", "搜索引擎"],
        },
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
    // 折线图
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
    //范围图
    getMix() {
      var myChart = echarts.init(document.getElementById("mix"));
      myChart.setOption({
        title: {
          text: "销售数据",
          subtext: "纯属虚构",
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            return (
              params[0].name +   //X轴的名字
              " : " +
              (params[0].value - params[1].value > 0 ? "+" : "-") + //正负
              params[3].value + //变化值
              "<br/>" +
              params[0].seriesName + //系列的名字
              " : " +
              params[0].value + //系列的值
              "<br/>" +
              params[1].seriesName +
              " : " +
              params[1].value +
              "<br/>"
            );
          },
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["本周", "上周"],
          selectedMode: false,
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
        ],
        yAxis: [
          {
            type: "value",
            min: 200,
            max: 450,
          },
        ],
        series: [
          {
            name: "本周",
            type: "line",
            data: [400, 374, 251, 300, 420, 400, 440],
          },
          {
            name: "上周",
            type: "line",
            symbol: "none",
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 1,
                  type: "dashed",
                },
              },
            },
            data: [320, 332, 301, 334, 360, 330, 350],
          },
          {
            name: "上周2",
            type: "bar",
            stack: "1", //跟这个stack一样的系列，会在此系列的基础上增加(在上面叠罗汉)
            barWidth: 6,
            itemStyle: {
              //常态颜色
              normal: {
                color: "rgba(0,0,0,0)",
              },
              //鼠标放上去的颜色(可以不设)
              emphasis: {
                color: "rgba(0,0,0,0)",
              },
            },
            data: [320, 332, 251, 300, 360, 330, 350],
          },
          {
            name: "变化",
            type: "bar",
            stack: "1",
            itemStyle: {
              normal: {
                color: "green"
              }
            },
            data: [
              80,
              42,
              { value: 50, itemStyle: { normal: { color: "red" } } },
              { value: 34, itemStyle: { normal: { color: "red" } } },
              60,
              70,
              90,
            ],
          },
        ],
      });
    },
    //多轴图
    getMorey() {
      var myChart = echarts.init(document.getElementById("morey"));
      const colors = ['#5470C6', '#91CC75', '#EE6666'];
      myChart.setOption({
        color: colors,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        grid: {
          right: "20%",
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["Evaporation", "Precipitation", "Temperature"],
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true,
            },
            // prettier-ignore
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "Evaporation",
            min: 0,
            max: 250,
            position: "right",
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0],
              },
            },
            axisLabel: {
              formatter: "{value} ml",
            },
          },
          {
            type: "value",
            name: "Precipitation",
            min: 0,
            max: 250,
            position: "right",
            offset: 80,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1],
              },
            },
            axisLabel: {
              formatter: "{value} ml",
            },
          },
          {
            type: "value",
            name: "温度",
            min: 0,
            max: 25,
            position: "left",
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[2],
              },
            },
            axisLabel: {
              formatter: "{value} °C",
            },
          },
        ],
        series: [
          {
            name: "Evaporation",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3,
            ],
          },
          {
            name: "Precipitation",
            type: "bar",
            yAxisIndex: 1,
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3,
            ],
          },
          {
            name: "Temperature",
            type: "line",
            yAxisIndex: 2,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2,
            ],
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
  height: 600px;
  width: 600px;
  margin: 0 auto;
}
#line {
  height: 300px;
  //   width: 300px;
  margin: 0 auto;
}
#mix {
  height: 600px;
  width: 600px;
  margin: 0 auto;
}
#morey {
  height: 600px;
  width: 600px;
  margin: 0 auto;
}
</style>