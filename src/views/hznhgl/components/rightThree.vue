<template>
  <div class="container-box">
    <comTitle  tabTitle="防疫管理" @changeTab = "changeTab" />
    <div class="content">
      <div class="content-list">
        <div class="img"></div>
        <div class="right-text">
          <div>待售牛数量/头</div>
          <div class="number-text">60</div>
        </div>
      </div>
      <div class="content-list">
        <div class="img zc-img"></div>
        <div class="right-text">
          <div>保险标记统计/头</div>
          <div  class="number-text">60</div>
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
  },
  methods:{
    changeTab(num){
      console.log(num,'---num')
    }
  }
}
</script>

<style scoped lang="less">
  .container-box{
    width: 600px;
    overflow: hidden;
  }
  .content{
    width: 100%;
    padding-left: 39px;
    padding-top: 8px;
    box-sizing: border-box;
    overflow: hidden;
    &-list{
      float: left;
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      width: 50%;
      >.img{
        width: 115px;
        height: 115px;
        background: url("../../../assets/img/hznhgl/sm.png") center no-repeat;
      }
      >.zc-img{
        background: url("../../../assets/img/hznhgl/bxxs.png") center no-repeat;
      }
      >.right-text{
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #A2D1FF;
      }
    }
  }
  .number-text{
    margin-top: 14px;
    font-size: 26px;
    font-family: PangMenZhengDao;
    font-weight: 400;
    color: #00FFE4;
    background: linear-gradient(0deg, #45CDFF 0%, #E5F9FF 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
