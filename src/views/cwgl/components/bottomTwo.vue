<template>
  <div class="container">
    <comTitle tabTitle="毛利统计" />
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
        title: {
          text: "收入/万元",
          top: "30%",
          textAlign: "center",
          left: "18%",
          textStyle: {
            color: " #86B2D7",
            fontSize: 14,
            fontWeight: "400",
            lineHeight: 26,
          },
          subtext: "455",
          subtextStyle: {
            color: "#2ACFF1",
            fontSize: 22,
            fontWeight: "400",
            fontFamily: "PangMenZhengDao",
          },
        },
        legend: [
          {
            orient: "vertical",
            left: "40%",
            top: "17%",
            icon: 'circle', // 图例样式为圆形
            itemGap: 30,
            textStyle: {
              color: "#B7C9E5",
              fontSize: 14,
            },
            data: ["XXXX收入1", "XXXX收入2",'XXXX收入3'],
          },
          {
            orient: "vertical",
            left: "60%",
            icon: 'circle', // 图例样式为圆形
            top: "17%",
            itemGap: 30,
            textStyle: {
              color: "#B7C9E5",
              fontSize: 14,
            },
            data: ["XXXX收入4", "XXXX收入5"],
          },
        ],
        series: [
          {
            name: "Access From",
            type: "pie",
            center: ['18%', '50%'],
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
            data: [
              { value: 1048, name: "XXXX收入1" },
              { value: 735, name: "XXXX收入2" },
              { value: 580, name: "XXXX收入3" },
              { value: 484, name: "XXXX收入4" },
              { value: 300, name: "XXXX收入5" },
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
  width: 680px;
  overflow: hidden;
  padding-top: 10px;
  .echarts {
    width: 680px;
    height: 170px;
  }
}
</style>
