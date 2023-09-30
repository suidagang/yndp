<template>
  <div class="center-box">
    <div class="site-layout">
      <div class="niu-text four-niu">4#牛舍</div>
      <div class="niu-monitor four-monitor"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped lang="less">
.center-box {
  position: relative;
  background: url("../../../assets/img/yncjcxxjc_circle.png") center no-repeat;
  overflow: hidden;
  .site-layout {
    position: relative;
    width: 797px;
    height: 349px;
    margin-top: 300px;
    margin-left: 40px;
    background: url("../../../assets/img/changdi.png") center no-repeat;
    .four-niu {
      position: absolute;
      left: 70px;
      bottom: 70px;
      transform: rotate(114deg);
      transform-origin: center center;
    }
    .four-monitor {
      position: absolute;
      left: 105px;
      bottom: 110px;
    }
  }
}
.niu-text {
  font-size: 18px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffffff;
}
.niu-monitor {
  width: 40px;
  height: 40px;
  background: url("../../../assets/img/yncjcxxjb/sxt.png") center no-repeat;
}
</style>
