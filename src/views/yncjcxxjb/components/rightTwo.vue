<template>
  <div class="container">
    <comTitle  tabTitle="环境检查" />
    <div class="content">
      <div class="content-list" :class="{warn:eyhtWarn}">
        <div class="top-text">二氧化碳/ppm</div>
        <div  class="bottom-text">1000</div>
      </div>
      <div class="content-list">
        <div class="top-text">二氧化碳/ppm</div>
        <div  class="bottom-text">1000</div>
      </div>
      <div class="content-list">
        <div class="top-text">二氧化碳/ppm</div>
        <div  class="bottom-text">1000</div>
      </div>
      <div class="content-list">
        <div class="top-text">二氧化碳/ppm</div>
        <div  class="bottom-text">1000</div>
      </div>
      <div class="content-list">
        <div class="top-text">二氧化碳/ppm</div>
        <div  class="bottom-text">1000</div>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from '@/components/comBoxHead/index.vue';
import config from "@/http/config";
export default {
  data() {
    return {
      eyhtWarn:true
    }
  },
  components: {
    comTitle
  },
  created() {
    // this.getAjax();
  },
  methods:{
    getAjax() {
      this.$get(config.environmenMonitoring).then((res) => {
        console.log(res,'===---dd');
      });
    },
  }
}
</script>

<style scoped lang="less">
  .container{
    width: 465px;
    overflow: hidden;
  }
  .content{
    overflow: hidden;
    width: 100%;
    padding-left: 30px;
    padding-top: 34px;
    box-sizing: border-box;
    &-list{
      float: left;
      height: 72px;
      width: 158px;
      background: url("../../../assets/img/hjjc.png") center no-repeat;
      margin-bottom: 14px;
      margin-right: 22px;
      font-size: 14px;
      font-family: Source Han Sans SC;
      font-weight: bold;
      color: #A2D1FF;
      text-align: center;
      padding-top: 9px;
      &.warn{
        background: url("../../../assets/img/hjjc_active.png") center no-repeat;
        color: #FFC7A2;
        .bottom-text{
          background: linear-gradient(0deg, #FF9445 0%, #FFF1E5 100%);
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .top-text{
        margin-bottom: 12px;
      }
      .bottom-text{
        font-size: 24px;
        font-family: PangMenZhengDao;
        font-weight: 400;
        color: #00FFE4;
        background: linear-gradient(0deg, #45CDFF 0%, #E5F9FF 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
</style>
