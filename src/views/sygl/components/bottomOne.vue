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
import config from "@/http/config";
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
          data: [],
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
            name: "111",
            type: "bar",
            barWidth: 17,
            itemStyle: {
              color: {
                type: "linear",
                x: 0, //右
                y: 0, //下
                x2: 0, //左
                y2: 1, //上
                colorStops: [
                  {
                    offset: 0.1,
                    color: "#00B7FF", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#2244AC", // 100% 处的颜色
                  },
                ],
              },
            },
            data: [],
          },
        ],
      },
    };
  },
  components: {
    comTitle,
    comEcharts,
  },
  created() {
    this.getAjax();
  },
  methods: {
    getAjax() {
      this.$get(config.feedTypeCount).then((res) => {
        let resList = res.data;
        let xAxisData = [];
        let seriesData = [];
        resList.forEach((item)=>{
          xAxisData.push(item.label);
          seriesData.push(item.dueUse)
        })
        this.options.xAxis.data = xAxisData;
        this.options.series[0].data = seriesData;

      });
    },
  },
};
</script>

<style scoped lang="less">
.content {
  width: 700px;
  height: 380px;
  overflow: hidden;
  padding-left: 10px;
  box-sizing: border-box;
  .echarts {
    width: 630px;
    height: 380px;
  }
}
</style>
