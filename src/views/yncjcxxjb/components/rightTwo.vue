<template>
  <div class="container">
    <comTitle tabTitle="环境检查" />
    <div class="content">
      <div
        class="content-list"
        v-for="(item, index) in dataList"
        :key="index"
        :class="{ warn: item.active }"
        @click="change(item)"
      >
        <div class="top-text">{{ item.name }}</div>
        <div class="bottom-text">{{ item.value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import config from "@/http/config";
export default {
  data() {
    return {
      dataList: [
        { name: "二氧化碳/ppm", active: true, id: "carbonDioxide", value: "" },
        { name: "氨气/ppm", active: false, id: "ammonia", value: "" },
        { name: "甲烷/mg/m³", active: false, id: "methane", value: "" },
        { name: "PM2.5浓度/ug/m³", active: false, id: "pm", value: "" },
        { name: "空气温度/℃", active: false, id: "temp", value: "" },
        { name: "空气湿度/%", active: false, id: "humidity", value: "" },
        { name: "光照强度/lx", active: false, id: "lightIntensity", value: "" },
        { name: "PM10浓度/ug/m³", active: false, id: "pmTen", value: "" },
      ],
      eyhtWarn: true,
      carbonDioxide: "",
      ammonia: "",
      methane: "",
      pm: "",
      temp: "",
      humidity: "",
      lightIntensity: "",
      pmTen: "",
    };
  },
  components: {
    comTitle,
  },
  created() {
    this.getAjax();
  },
  methods: {
    getAjax() {
      this.$get(config.environmenMonitoring).then((res) => {
        this.dataList.map((item) => {
          item.value = res.data[item.id];
        });
      });
    },
    change(item) {
      this.dataList.map((ele) => {
        ele.active = false;
      });
      item.active = true;
    },
  },
};
</script>

<style scoped lang="less">
.container {
  width: 465px;
  overflow: hidden;
}
.content {
  overflow: hidden;
  width: 100%;
  padding-left: 30px;
  padding-top: 34px;
  box-sizing: border-box;
  &-list {
    float: left;
    height: 72px;
    width: 158px;
    background: url("../../../assets/img/hjjc.png") center no-repeat;
    margin-bottom: 14px;
    margin-right: 22px;
    font-size: 14px;
    font-family: Source Han Sans SC;
    font-weight: bold;
    color: #a2d1ff;
    text-align: center;
    padding-top: 9px;
    cursor: pointer;
    &.warn {
      background: url("../../../assets/img/hjjc_active.png") center no-repeat;
      color: #ffc7a2;
      .bottom-text {
        background: linear-gradient(0deg, #ff9445 0%, #fff1e5 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .top-text {
      margin-bottom: 12px;
    }
    .bottom-text {
      font-size: 24px;
      font-family: PangMenZhengDao;
      font-weight: 400;
      color: #00ffe4;
      background: linear-gradient(0deg, #45cdff 0%, #e5f9ff 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
