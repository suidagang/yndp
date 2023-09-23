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
        backgroundColor: "#03213D",
        title: [
          {
            text: "PM2.5",
            textStyle: {
              //支持rich需要更多效果自定义
              color: "#fff",
              fontSize: 18,
            },
            subtext: "5台",
            subtextStyle: {
              color: "yellow",
              fontSize: 28,
            },
            left: "20%",
            top: "5%",
          },
          {
            text: "PM10",
            textStyle: {
              color: "#fff",
              fontSize: 18,
            },
            subtext: "5台",
            subtextStyle: {
              color: "yellow",
              fontSize: 28,
            },
            left: "center",
            top: "5%",
          },
          {
            text: "TSP",
            textStyle: {
              color: "#fff",
              fontSize: 18,
            },
            subtext: "5台",
            subtextStyle: {
              color: "yellow",
              fontSize: 28,
            },
            right: "20%",
            top: "5%",
          },
        ],
        backgroundColor: "#03213D",
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(0,0,0,.6)",
          borderColor: "rgba(147, 235, 248, 0)",
          textStyle: {
            color: "#FFF",
          },
          // axisPointer: {
          // 	type: "shadow",
          // 	label: {
          // 		show: true,
          // 	},
          // },
        },
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
              color: "#163a5f",
              width: 2,
            },
          },
          axisTick: {
            show: false, //隐藏X轴刻度
            alignWithLabel: true,
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#BDD8FB", //X轴文字颜色
              fontSize: 12,
            },
            interval: 0,
            formatter: function (value) {
              var ret = ""; //拼接加\n返回的类目项
              var maxLength = 4; //每项显示文字个数
              var valLength = value.length; //X轴类目项的文字个数
              var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
              if (rowN > 1) {
                //如果类目项的文字大于5,
                for (var i = 0; i < rowN; i++) {
                  var temp = ""; //每次截取的字符串
                  var start = i * maxLength; //开始截取的位置
                  var end = start + maxLength; //结束截取的位置
                  //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                  temp = value.substring(start, end) + "\n";
                  ret += temp; //凭借最终的字符串
                }
                return ret;
              } else {
                return value;
              }
            },
          },
        },
        yAxis: [
          {
            type: "value",
            name: "权 重",
            nameTextStyle: {
              color: "#fff",
              fontSize: 16,
            },
            nameGap: 30, // 将标题和轴线之间的距离设置为 30 像素
            // nameLocation: 'middle', // 将标题位置设置为中间
            // 其他配置选项...

            splitLine: {
              show: false,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.15)",
                // type: 'dashed', // dotted 虚线
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
                color: "#BDD8FB",
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
            name: "权重",
            type: "bar",
            barWidth: 30,
            itemStyle: {
              // color: new graphic.LinearGradient(0, 0, 0, 1, [
              //    {
              //       offset: 0,
              //       color: "#00A2FF",
              //    },
              //    {
              //       offset: 1,
              //       color: "#00CCD2",
              //    },
              // ]),
              color: {
                type: "linear",
                x: 0, //右
                y: 0, //下
                x2: 0, //左
                y2: 1, //上
                colorStops: [
                  {
                    offset: 0.1,
                    color: "#13D5FC", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#2059B8", // 100% 处的颜色
                  },
                ],
              },
              barBorderRadius: [20, 20, 20, 20],
            },
            label: {
              show: false,
              position: "top",
              distance: 0,
              color: "#1ACDDC",
              formatter: "{c}" + "次",
            },
            data: [
              0.0143230513342864, 0.00712355721281654, 0.00640036249364493,
              0.00630499703049568, 0.00609293037165079, 0.00526289934453259,
              0.00511598466738863, 0.00495456943702402, 0.00474703072844757,
              0.00459026733191873, 0.0043661709889541,
            ],
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
  .echarts {
    width: 750px;
    height: 380px;
  }
}
</style>
