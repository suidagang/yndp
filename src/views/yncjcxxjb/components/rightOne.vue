<template>
  <div class="container">
    <comTitle tabTitle="今日行情" />
    <div class="content">
      <div class="content-list">
        <div class="content-list-img"></div>
        <div class="content-list-name">成牛</div>
        <div class="content-list-text">100/kg</div>
      </div>
      <div class="content-list">
        <div class="content-list-img"></div>
        <div class="content-list-name">牛犊</div>
        <div class="content-list-text">100/kg</div>
      </div>
      <div class="content-list">
        <div class="content-list-img"></div>
        <div class="content-list-name">成牛</div>
        <div class="content-list-text">100/kg</div>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import config from "@/http/config";
export default {
  data() {
    return {};
  },
  components: {
    comTitle,
  },
  created() {
    this.getAjax();
  },
  methods: {
    getAjax() {
      this.$get(config.todayPrice).then((res) => {
        console.log(res, "===--todayPrice-dd");
      });
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
  display: flex;
  align-items: center;
  &-list {
    width: 110px;
    height: 128px;
    background: rgba(18, 87, 201, 0);
    border: 1px solid blue;
    // box-shadow: 10px 10px 10px 10px red;
    border-radius: 10px;
    position: relative;
    margin-right: 6px;
    &-img {
      width: 102px;
      height: 102px;
      background: url("../../../assets/img/yncjcxxjb/jrhq_n.png") center
        no-repeat;
      overflow: hidden;
      margin-left: 12px;
    }
    &-name {
      position: absolute;
      width: 100%;
      text-align: center;
      bottom: 40px;
      font-size: 14px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #a2d1ff;
    }
    &-text {
      font-size: 18px;
      font-family: PangMenZhengDao;
      font-weight: 400;
      color: #00ffe4;

      background: linear-gradient(0deg, #45cdff 0%, #e5f9ff 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
      margin-top: -15px;
    }
  }
}
</style>
