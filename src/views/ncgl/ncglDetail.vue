<template>
  <div class="ncgl-detail">
    <div class="ncgl-detail-l">
      <comTitle tabTitle="牛只详细信息" />
      <div class="circle-box">
        <div class="circle-box-niu"></div>
        <div class="list-title">
          <div class="list-title-circle"></div>
          <div></div>
          云岭肉牛
          </div>
      </div>
    </div>
    <div class="ncgl-detail-r"></div>
    
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
export default {
  data() {
    return {

    }
  },
  components: {
    comTitle
  }
}
</script>

<style scoped lang="less">
  .ncgl-detail{
    width: 100%;
    height: 100%;
    padding-top: 58px;
    padding-left: 30px;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    &-l{
      height: 100%;
      width: 1200px;
      overflow: hidden;
      .circle-box{
        position: relative;
        width: 698px;
        height: 697px;
        background: url("../../assets/img/ncgl/ty_44.png") center no-repeat;
        margin-top: 50px;
        margin-left: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        &-niu{
          width: 436px;
          height: 311px;
          background: url("../../assets/img/ncgl/niu.png") center no-repeat;
        }
        .list-title{
          position: absolute;
          left: 571px;
          top: 70px;
          font-size: 22px;
          font-family: YouSheBiaoTiHei;
          font-weight: 400;
          color: #202639;
          text-shadow: 1px 2px 8px rgba(13,24,45,0.26);

          background: linear-gradient(0deg, #8BC7FF 0%, #FFFFFF 100%);
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: flex;
          align-items: center;
          &-circle{
            width: 10px;
            height: 10px;
            background: #006FFF;
            border-radius: 50%;
            margin-right: 18px;
          }
        }
      }
    }
  }
</style>
