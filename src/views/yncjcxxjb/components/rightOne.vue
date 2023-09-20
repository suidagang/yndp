<template>
  <div class="container">
    <comTitle  tabTitle="今日行情" @changeTab = "changeTab" />
    <div class="content">
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
      <div class="content-list">
        <div class="top-text">二氧化碳/ppm</div>
        <div  class="bottom-text">1000</div>
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
    }
  }
</style>
