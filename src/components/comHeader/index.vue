<template>
  <div class="comheader">
    <div class="comheader-title">智慧养牛数字供应链平台</div>
    <div class="comheader-tab">
      <div>
        <div class="text">养牛场基础信息简报</div>
        <div class="active"></div>
>      </div>
      <div>自营牛场管理</div>
      <div>合作农户管理</div>
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
      position: absolute;
      left: 0;
      top: 14px;
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
      padding-left: 35px;
      box-sizing: border-box;
      cursor: pointer;
    }
    &-tab{
      display: flex;
      justify-content: center;
      width: 483px;
      position: absolute;
      left: 635px;
      top: 30px;
      color: #ffffff;
      cursor: pointer;
      >div{
        flex: 1;
        text-align: center;
        .text{
          font-size: 16px;
          color: #FFFFFF;
          text-shadow: 0px 7px 3px #02274C;
          background: linear-gradient(0deg, rgba(0,169,255,0.83) 0%, rgba(232,254,255,0.83) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .active{
        width: 161px;
        height: 29px;
        background: url("../../assets/img/tab_active.png") center no-repeat;
      }
    } 
  }
</style>
