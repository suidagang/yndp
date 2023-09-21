<template>
  <div ref="echarts"></div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'com-echarts',
  data() {
    return {
      myChart: null
    };
  },
  props: {
    options: {
      type: Object,
      require: true
    },
  },
  mounted() {
    addEventListener('resize', this.throttle);
    this.$once('hook:beforeDestroy', function () {
      removeEventListener('resize', this.throttle);
    });
  },
  methods: {
    throttle: _.throttle(function () {
      this.initEcharts();
    }, 100),
    initEcharts() {
      this.$nextTick(() => {
        if (
          this.myChart != null &&
          this.myChart != '' &&
          this.myChart != undefined
        ) {
          this.myChart.dispose(); //销毁
        }
        let myChartDom = this.$refs.echarts;
        this.myChart = this.$echarts.init(myChartDom);
        this.myChart.setOption(this.options);
      });
    }
  },
  watch: {
    options: {
      handler() {
        this.initEcharts();
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style lang="less" scoped></style>
