<template>
  <div class="nzxx-box">
    <comTitle tabTitle="牛种信息" />
    <div class="content">
      <comEcharts class="echarts" ref="chart" :options="options" />
    </div>
  </div>
</template>

<script>

import comTitle from "@/components/comBoxHead/index.vue";
import comEcharts from "@/components/ComEcharts/index.vue";
import config from "@/http/config";
let data = [146, 274, 308, 418, 319];
let data2 = [234, 135, 237, 135, 237];
const colorArr = [
  "rgba(15, 201, 248)",
  "rgba(30, 50, 221)",
  "rgba(61, 101, 249)",
  "rgba(95, 236, 251)",
];
const colorArr2 = [
  "rgba(19, 219, 182)",
  "rgb(17, 197, 210)",
  "rgb(17, 197, 210)",
  "rgb(88, 235, 131)",
];
let color = {
   type: "linear",
   x: 0,
   x2: 0,
   y: 0,
   y2: 1,
   colorStops: [
      {
         offset: 0,
         color: colorArr[0]
      },
      {
         offset: 1,
         color: colorArr[1]
      }
   ]
};
let color2 = {
   type: "linear",
   x: 0,
   x2: 0,
   y: 0,
   y2: 1,
   colorStops: [
      {
         offset: 0,
         color: colorArr2[0]
      },
      {
         offset: 1,
         color: colorArr2[1]
      }
   ]
};
let barWidth = 16;
export default {
  data() {
    return {
      options: {
        // legend: {
        //   data: ['党员数', '网格员数'],
        //   right: 10,
        //   top: 0,
        //   itemWidth: 15,
        //   itemHeight: 10,
        //   itemGap: 15,
        //   borderRadius: 4,
        //   textStyle: {
        //     fontFamily: "Source Han Sans SC",
        //     fontSize: 14,
        //     fontWeight: 400,
        //     color: '#86B2D7'
        //   },
        // },
        grid: {
          left: "5%",
          top: "20%",
          right: "0%",
          bottom: "10%",
        },
        xAxis: {
          data: ["母牛数", "冻精数", "公牛数"],
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
            name:"头",
            nameTextStyle: {
              color: "#86B2D7",
              fontFamily: "Source Han Sans SC",
              fontSize: 12,
              fontWeight: 400,
              padding: [10, 0, 0, -30]
            },
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
            z: 1,
            name: "党员数",
            type: "bar",
            barWidth: barWidth,
            barGap: "0%",
            data: data,
            itemStyle: {
              normal: {
                color: color,
                label: {
                  show: false,
                },
              },
            },
          },
          {
            z: 2,
            name: "党员数",
            type: "pictorialBar",
            data: data.map((item) => item + 10),
            symbolOffset: ["-70%", "50%"],
            symbolSize: [barWidth-1, 10],
            itemStyle: {
              normal: {
                color: colorArr[2],
              },
            },
            tooltip: {
              show: false,
            },
          },
          {
            z: 3,
            name: "党员数",
            type: "pictorialBar",
            symbolPosition: "end",
            data: data,
            symbolOffset: ["-70%", "-60%"],
            symbolSize: [barWidth - 1, (10 * (barWidth - 1)) / barWidth],
            itemStyle: {
              normal: {
                borderWidth: 2,
                color: colorArr[3],
              },
            },
            tooltip: {
              show: false,
            },
          },
          {
            z: 1,
            name: "网格员数",
            type: "bar",
            barWidth: barWidth,
            barGap: "30%",
            data: data2,
            itemStyle: {
              normal: {
                color: color2,
                label: {
                  show: false,
                },
              },
            },
          },
          {
            z: 2,
            name: "网格员数",
            type: "pictorialBar",
            data: data2.map((item) => item + 10),
            symbolOffset: ["70%", "50%"],
            symbolSize: [barWidth-1, 9],
            itemStyle: {
              normal: {
                color: colorArr2[2],
              },
            },
            tooltip: {
              show: false,
            },
          },
          {
            z: 3,
            name: "网格员数",
            type: "pictorialBar",
            symbolPosition: "end",
            data: data2,
            symbolOffset: ["70%", "-50%"],
            symbolSize: [barWidth - 1, (10 * (barWidth - 1)) / barWidth],
            itemStyle: {
              normal: {
                borderWidth: 2,
                color: colorArr2[3],
              },
            },
            tooltip: {
              show: false,
            },
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
      this.$get(config.breedManagecount).then((res) => {
        console.log(res, "牛种信息");
        // semen 冻精数
        // bull 公牛数
        // cow 母牛数
      });
    },
  },
};
</script>

<style scoped lang="less">
.nzxx-box {
  width: 1350px;
  height: 100%;
  overflow: hidden;
}
.content {
  width: 100%;
  height: 380px;
  overflow: hidden;
  padding-left: 10px;
  box-sizing: border-box;
  .echarts {
    width: 100%;
    height: 330px;
  }
}
</style>
