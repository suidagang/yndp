<template>
  <div class="container">
    <comTitle tabTitle="牛舍存栏量" />
    <div class="content">
      <template v-for="(item, index) in listData">
        <pieEcharts class="echarts" :item = "item" :key="index" />
      </template>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import pieEcharts from "./pieEcharts.vue";
import config from "@/http/config";
export default {
  data() {
    
    return {
      listData: [],
      options0: {},
      options1: {},
      options2: {},
      options3: {},
    };
  },
  components: {
    comTitle,
    pieEcharts,
  },
  created() {
    this.getAjax();
  },
  methods: {
    getAjax() {
      this.$get(config.shedCount).then((res) => {
        this.listData = res.data;
      });
    },
  },
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
