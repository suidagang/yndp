<template>
  <div class="container">
    <comTitle  tabTitle="财务汇总简报" @changeTab = "changeTab" />
    <div class="content">
      <div class="content-list">
        <div class="img"></div>
        <div class="right-text">
          <div>收入统计</div>
          <div class="number-text">9600<span class="unit-text">元</span></div>
        </div>
      </div>
      <div class="content-list">
        <div class="img zc-img"></div>
        <div class="right-text">
          <div>支出统计</div>
          <div  class="number-text">9600<span class="unit-text">元</span></div>
        </div>
      </div>
      <div class="content-list">
        <div class="img cl-img"></div>
        <div class="right-text">
          <div>存栏统计</div>
          <div class="number-text">9600<span class="unit-text">个</span></div>
        </div>
      </div>
      <div class="content-list">
        <div class="img sl-img"></div>
        <div class="right-text">
          <div>饲料库存统计</div>
          <div class="number-text">9600<span class="unit-text">吨</span></div>
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
  .content{
    width: 100%;
    padding-left: 39px;
    padding-top: 43px;
    box-sizing: border-box;
    overflow: hidden;
    &-list{
      float: left;
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      width: 37%;
      >.img{
        width: 58px;
        height: 60px;
        background: url("../../../assets/img/srtj.png") center no-repeat;
        margin-right: 19px;
      }
      >.zc-img{
        background: url("../../../assets/img/zclx.png") center no-repeat;
      }
      >.zc-img{
        background: url("../../../assets/img/zclx.png") center no-repeat;
      }
      >.sl-img{
        background: url("../../../assets/img/slcl.png") center no-repeat;
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
    color: #FFFFFF;
    line-height: 28px;
    text-shadow: 0px 3px 24px rgba(0,30,45,0.53);
    -webkit-text-stroke: 1px #FFFFFF;

    background: linear-gradient(0deg, rgba(62,242,255,0.36) 0%, rgba(222,222,222,0.36) 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .unit-text{
    font-size: 14px;
  }
</style>
