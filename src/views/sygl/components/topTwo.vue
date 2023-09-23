<template>
  <div class="container">
    <comTitle tabTitle="牛舍存栏量" />
    <div class="content">
      <comEcharts class="echarts" ref="chart" :options="options" />
      <comEcharts class="echarts" ref="chart" :options="options" />
      <comEcharts class="echarts" ref="chart" :options="options" />
      <comEcharts class="echarts" ref="chart" :options="options" />
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import comEcharts from "@/components/ComEcharts/index.vue";
export default {
  data() {
    let data = [
      { value: 500, name: "现有存栏量/个" },
      { value: 500, name: "已消耗存栏/个" },
    ];
    return {
      options: {
        title: {
          text: "牛犊\n牛舍",
          top: "25%",
          textAlign: "center",
          left: "17%",
          textStyle: {
            color: " #B7C9E5",
            fontSize: 22,
            fontWeight: "600",
            lineHeight: 26,
            fontFamily: "Source Han Sans SC",
          },
        },
        legend: [
          {
            orient: "vertical",
            left: "40%",
            top: "15%",
            icon: "circle", // 图例样式为圆形
            itemGap: 30,
            textStyle: {
              color: "#B7C9E5",
              fontSize: 14,
            },
            formatter: function (params) {
              console.log(params);
              for (var i = 0; i < data.length; i++) {
                if (params === data[i].name) {
                  const value = data[i].value;
                  return "{name|" + params + "}{value|" + value + "}";
                }
              }
            },
            textStyle: {
              rich: {
                name: {
                  fontSize: 16,
                  fontWeight: 400,
                  width: 50,
                  padding: [0, 20, 0, 4],
                  color: "#FFFFFF",
                  fontFamily: "Source Han Sans CN",
                },
                value: {
                  fontSize: 24,
                  fontWeight: 400,
                  width: 50,
                  align: "right",
                  color: "#fefefe",
                  padding: [0, 20, 0, 40],
                },
              },
            },
          },
        ],
        series: [
          {
            name: "Access From",
            type: "pie",
            center: ["18%", "50%"],
            radius: ["60%", "90%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
              },
            },
            labelLine: {
              show: false,
            },
            data: data,
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
  overflow: hidden;
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  .echarts {
    width: 360px;
    height: 120px;
    overflow: hidden;
    margin-bottom: 30px;
  }
}
</style>
