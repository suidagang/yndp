<template>
  <div class="com-list">
    <comTitle  :tabTitle="propData.title">
      <template slot="titleIcon">
        <div class="title-icon" ></div>
      </template>
    </comTitle>
    <div class="com-list-content">
      <div class="com-list-content-top">
        <div class="com-list-content-top-list" v-for="(item,index) in propData.ztList" :key="index">
          <div class="icon"></div>
          <div class="right-text">
            <div  class="right-text-title">{{item.typeName}}</div>
            <div>{{item.num}}</div>
          </div>
        </div>
      </div>
      <div class="com-list-content-bottom">
        <div class="com-list-content-bottom-title">
          <div class="left">牛舍管理人</div>
          <div></div>
        </div>
        <div class="com-list-content-bottom-content">
          <div  class="left">
            <div v-for="(item,index) in propData.zlList" :key="index">{{item.typeName}}</div>
          </div>
          <div>
            <div v-for="(item,index) in propData.zlList" :key="index">{{item.num}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from '@/components/comBoxHead/index.vue';
export default {
  data() {
    return {

    }
  },
  props:{
    propData:{
      type:Object,
      require:true
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
        padding-left: 40px;
        box-sizing: border-box;
        background: linear-gradient(90deg, rgba(2,54,111,0.1) 1%, rgba(0,114,255,0.2) 54%, rgba(2,54,111,0.1) 99%);
        &-title{
          width: 597px;
          height: 40px;
          background: linear-gradient(90deg, rgba(2,54,111,0.1) 1%, rgba(0,114,255,0.2) 54%, rgba(2,54,111,0.1) 99%);
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: bold;
          color: #B7C9E5;
          .left{
            width: 350px;
          }
        }
        &-content{
           display: flex;
           font-size: 14px;
           font-weight: 400;
           color: #86B2D7;
           line-height: 30px;
           margin-top: 16px;
           .left{
            width: 350px;
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
