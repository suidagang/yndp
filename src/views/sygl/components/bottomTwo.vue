<template>
  <div class="container">
    <comTitle tabTitle="预计使用周期" />
    <div class="content">
      <comEcharts class="echarts" ref="chart" :options="options" />
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import comEcharts from "@/components/ComEcharts/index.vue";
export default {
  data() {
    return {
      options: {
        grid: {
          left: "10%",
          top: "30%",
          right: "5%",
          bottom: "10%",
        },
        xAxis: {
          data: ["祝贺", "中国航天", "中国", "太空", "祝福"],
          axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
              color: "#2D3C5C",
              width: 1,
            },
          },
          axisTick: {
            show: false, //隐藏X轴刻度
            alignWithLabel: true,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#86B2D7", //X轴文字颜色
              fontSize: 14,
            },
            interval: 0,
          },
        },
        yAxis: [
          {
            type: "value",
            nameGap: 30, // 将标题和轴线之间的距离设置为 30 像素
            // nameLocation: 'middle', // 将标题位置设置为中间
            // 其他配置选项...

            splitLine: {
              show: true,
              lineStyle: {
                color: "#2D3C5C",
                width: 1,
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: true, //隐藏X轴轴线
              lineStyle: {
                color: "#163a5f",
                width: 1,
              },
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#86B2D7",
                fontSize: 12,
              },
            },
          },
          {
            type: "value",
            name: "",
            nameTextStyle: {
              color: "#BDD8FB",
              fontSize: 12,
            },
            splitLine: {
              show: false,
              lineStyle: {
                width: 1,
                color: "#CED2DB",
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false, //隐藏X轴轴线
              lineStyle: {
                color: "#163a5f",
                width: 2,
              },
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: "#797A7F",
                fontSize: 12,
              },
            },
          },
        ],
        series: [
          {
            name: "XX饲料1",
            type: "line",
            smooth: true,
            symbol: "none", // 不显示连接点
            tooltip: {
              trigger: "axis",
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "line", // 默认为直线，可选为：'line' | 'shadow'
              },
            },
            lineStyle: {
              width: 3,
              shadowColor: "#1890FF",
              shadowBlur: 20,
            },
            data: [10,50,90,40,30],
          },
          {
            name: "XX饲料2",
            type: "line",
            smooth: true,
            symbol: "none", // 不显示连接点
            tooltip: {
              trigger: "axis",
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "line", // 默认为直线，可选为：'line' | 'shadow'
              },
            },
            lineStyle: {
              width: 3,
              shadowColor: "#19E079",
              shadowBlur: 20,
            },
            data: [30,70,20,10,60],
          },
          {
            name: "XX饲料3",
            type: "line",
            smooth: true,
            symbol: "none", // 不显示连接点
            tooltip: {
              trigger: "axis",
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "line", // 默认为直线，可选为：'line' | 'shadow'
              },
            },
            lineStyle: {
              width: 3,
              shadowColor: "#FFC748",
              shadowBlur: 20,
            },
            data: [90,20,80,40,30],
          },
        ],
      },
    };
  },
  components: {
    comTitle,
    comEcharts,
  },
  methods: {},
};
</script>

<style scoped lang="less">
.content {
  width: 750px;
  height: 380px;
  overflow: hidden;
  padding-left: 10px;
  box-sizing: border-box;
  .echarts {
    width: 740px;
    height: 380px;
  }
}
</style>
