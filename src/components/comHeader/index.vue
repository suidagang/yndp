<template>
  <div class="comheader">
    <div class="comheader-title">智慧养牛数字供应链平台</div>
    <div class="comheader-tab">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="bottom-line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .comheader{
    position: relative;
    height: 80px;
    border-bottom: 1px solid red;
    height:100%;
    overflow: hidden;
    background: url("../../assets/img/com_bg.png") center no-repeat;
    .bottom-line{
      position: absolute;
      height: 9px;
      width: 100%;
      background: url("../../assets/img/com_head_line.png") center no-repeat;
      top: 60px;
    }
    &-title{
      width: 507px;
      height: 40px;
      line-height: 40px;
      font-size: 28px;
      font-weight: 400;
      color: #C3E3FE;
      background: url("../../assets/img/com_head_title.png") center no-repeat;
      font-size: 20px;
      font-family: YouSheBiaoTiHei;
      font-weight: 400;
      color: #C3E3FE;
      margin-top: 14px;
      padding-left: 35px;
      box-sizing: border-box;
    }
  }
</style>
