<template>
  <div class="container">
    <comTitle  :tabList='tabList' tabTitle="自营牛场简报" :tabspacing="20" @changeTab = "changeTab" />
    <div class="content">
      <div class="content-list">
        <div>[</div>
        <div class="content-list-name">能繁母牛</div>
        <div class="content-list-number">9685</div>
        <div>]</div>
      </div>
       <div class="content-list">
        <div>[</div>
        <div class="content-list-name">牛犊统计</div>
        <div class="content-list-number">9685</div>
        <div>]</div>
      </div>
       <div class="content-list">
        <div>[</div>
        <div class="content-list-name">青牛统计</div>
        <div class="content-list-number">9685</div>
        <div>]</div>
      </div>
       <div class="content-list">
        <div>[</div>
        <div class="content-list-name">成牛统计</div>
        <div class="content-list-number">9685</div>
        <div>]</div>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from '@/components/comBoxHead/index.vue'
export default {
  data() {
    return {
      tabList: [
        { name: "牛场A", active: true },
        { name: "牛场B", active: false },
        { name: "牛场C", active: false },
      ],
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
    overflow: hidden;
    padding-top: 39px;
    padding-left: 44px;
  &-list{
    display: flex;
    align-items: center;
    width: 291px;
    height: 16px;
    color: #56ABB7;
    font-size: 13px;
    margin-bottom: 32px;
    &-name{
      width: 191px;
      height: 16px;
      font-size: 16px;
      font-family: YouSheBiaoTiHei;
      font-weight: 400;
      color: #A2D1FF;
      margin-left: 10px;
      background: linear-gradient(90deg, rgba(13,101,147,0.3) 0%, rgba(13,101,147,0) 100%);
    }
    &-number{
      font-size: 26px;
      font-family: YouSheBiaoTiHei;
      font-weight: 400;
      color: #3699FF;
      margin-right: 12px;
    }
  }
}
</style>
