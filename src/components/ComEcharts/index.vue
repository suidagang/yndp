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
    //图表上需要加事件 且不想影响图例点击时 需要将这个参数传为true
    extraHandleClick: {
      type: Boolean,
      require: false,
      default: false
    },
    //图表上事件需要传的参数 是一个数组 即使只有一个参数也需要数组包一下
    args: {
      type: Array,
      require: false
    },
    //图表上事件的名称
    fnName: {
      type: String,
      require: false,
      default: ''
    }
  },
  watch: {
    myChart: function (val,old) {
      this.$emit('setChartInstance', this.myChart)
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
        // 绑定图表的点击事件 与图例的事件不冲突
        if (this.extraHandleClick) {
          this.myChart.getZr().on('click', params => {
            let pointInPixel = [params.offsetX, params.offsetY];
            if (this.myChart.containPixel('grid', pointInPixel)) {
              let xIndex = this.myChart.convertFromPixel({ seriesIndex: 0 }, [
                params.offsetX,
                params.offsetY
              ])[0];
              this.$emit(this.fnName, ...this.args);
            }
          });
        }
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
