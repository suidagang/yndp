<template>
  <div class="com-pie-echarts">
    <comEcharts class="echarts" :options="options" />
  </div>
</template>

<script>
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
          text: "",
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
            // formatter: function (params) {
            //   for (var i = 0; i < data.length; i++) {
            //     if (params === data[i].name) {
            //       const value = data[i].value;
            //       return "{name|" + params + "}{value|" + value + "}";
            //     }
            //   }
            // },
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
            data: [],
          },
        ],
      },
    };
  },
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  components: {
    comEcharts,
  },
  methods: {
    dealData() {
      //处理title
      let labelText = this.item.label;
      if (labelText.length <= 2) {
        this.options.title.text = labelText;
      } else {
        const resultText =
          labelText.substring(0, 3) + "\n" + labelText.substring(3);
        this.options.title.text = resultText;
      }
      //处理data
      let data = [
        { value: this.item.value, name: "现有存栏量/个" },
        { value: this.item.useNum, name: "已消耗存栏/个" },
      ];
      this.options.series[0].data = data;
      this.options.legend[0].formatter = (params) => {
        for (var i = 0; i < data.length; i++) {
          if (params === data[i].name) {
            const value = data[i].value;
            return "{name|" + params + "}{value|" + value + "}";
          }
        }
      };
    },
  },
  watch: {
    item: {
      handler(val) {
        this.dealData();
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style scoped lang="less">
.com-pie-echarts {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .echarts {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
