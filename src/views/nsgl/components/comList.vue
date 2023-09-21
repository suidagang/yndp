<template>
  <div class="com-list">
    <comTitle  tabTitle="能繁牛舍">
      <template slot="titleIcon">
        <div class="title-icon" ></div>
      </template>
    </comTitle>
    <div class="com-list-content">
      <div class="com-list-content-top">
        <div class="com-list-content-top-list">
          <div class="icon"></div>
          <div class="right-text">
            <div  class="right-text-title">云岭肉牛/西门塔尔</div>
            <div>433/90</div>
          </div>
        </div>
        <div class="com-list-content-top-list">
          <div class="icon"></div>
          <div class="right-text">
            <div  class="right-text-title">销售数/头</div>
            <div>433</div>
          </div>
        </div>
        <div class="com-list-content-top-list">
          <div class="icon"></div>
          <div class="right-text">
            <div  class="right-text-title">死亡数/头</div>
            <div>433</div>
          </div>
        </div>
        <div class="com-list-content-top-list">
          <div class="icon"></div>
          <div class="right-text">
            <div  class="right-text-title">淘汰数/头</div>
            <div>433</div>
          </div>
        </div>
        <div class="com-list-content-top-list">
          <div class="icon"></div>
          <div class="right-text">
            <div  class="right-text-title">采购数/头</div>
            <div>433</div>
          </div>
        </div>
      </div>
      <div class="com-list-content-bottom">
        <div class="com-list-content-bottom-title">
          <div class="left">上海市</div>
          <div>分看电视剧弗兰克</div>
        </div>
        <div class="com-list-content-bottom-content">
          <div  class="left">上海市</div>
          <div>分看电视剧弗兰克</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from '@/components/comBoxHead/index.vue'
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
  .com-list{
    width: 630px;
    overflow: hidden;
    &-content{
      padding-left: 30px;
      padding-top: 40px;
      box-sizing: border-box;
      overflow: hidden;
      &-top{
        display: flex;
        overflow: hidden;
        &-list{
          display: flex;
          margin-left: 10px;
          .icon{
            width: 24px;
            height: 24px;
            margin-right: 8px;
            background: url("../../../assets/img/zyncgl/points_icon.png") center no-repeat;
          }
          .right-text{
            font-size: 24px;
            font-weight: 400;
            color: #00B9FD;
            &-title{
              font-size: 14px;
              font-weight: 400;
              color: #C1D8FF;
            }
          }
        }
      }
      &-bottom{
        width: 597px;
        height: 191px;
        margin-top: 30px;
        overflow: hidden;
        background: linear-gradient(90deg, rgba(2,54,111,0.1) 1%, rgba(0,114,255,0.2) 54%, rgba(2,54,111,0.1) 99%);
        &-title{
          width: 597px;
          height: 40px;
          background: linear-gradient(90deg, rgba(2,54,111,0.1) 1%, rgba(0,114,255,0.2) 54%, rgba(2,54,111,0.1) 99%);
          display: flex;
          .left{
            width: 300px;
          }
        }
      }
    }
  }
  .title-icon{
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url("../../../assets/img/zyncgl/ndn.png") center no-repeat;
  }
</style>
