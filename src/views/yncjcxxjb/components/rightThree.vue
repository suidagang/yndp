<template>
  <div class="container">
    <comTitle  tabTitle="提示信息汇总"  @changeTab = "changeTab" />
    <div class="content">
      <div class="content-list">
        <div  class="content-list-name">疾病</div>
        <div  class="content-list-num">21</div>
      </div>
      <div class="content-list">
        <div  class="content-list-name">发情</div>
        <div  class="content-list-num">21</div>
      </div>
      <div class="content-list">
        <div  class="content-list-name">死亡</div>
        <div  class="content-list-num">1</div>
      </div>
      <div class="content-list">
        <div  class="content-list-name">配种</div>
        <div  class="content-list-num">21</div>
      </div>
      <div class="content-list">
        <div  class="content-list-name">流产</div>
        <div  class="content-list-num">21</div>
      </div>
      <div class="content-list">
        <div  class="content-list-name">产犊</div>
        <div  class="content-list-num">21</div>
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
    padding-top: 28px;
    padding-left: 34px;
    overflow: hidden;
    &-list{
      float: left;
      width: 170px;
      height: 67px;
      background: url("../../../assets/img/tsxx_bg.png") center no-repeat;
      display: flex;
      align-items: center;
      margin-right: 5px;
      margin-bottom: 3px;
      overflow: hidden;
      >div{
        font-size: 16px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #AEC9FF;
        
      }
      &-name{
        width: 82px;
        margin-left: 31px;
      }
      &-num{
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
