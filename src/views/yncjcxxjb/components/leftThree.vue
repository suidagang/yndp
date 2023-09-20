<template>
  <div class="container">
    <comTitle  :tabList='tabList' tabTitle="合作养殖汇总简报" :tabspacing="26" @changeTab = "changeTab" />
    <div class="content">
      <div class="content-list"></div>
    </div>
  </div>
</template>

<script>
import comTitle from '@/components/comBoxHead/index.vue'
export default {
  data() {
    return {
      tabList: [
        { name: "A合作社", active: true },
        { name: "B合作社", active: false }
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
    width: 100%;
    overflow: hidden;
    &-list{
      width: 50%;
      float: left;
      background: url("../../../assets/img/niudu.png") no-repeat;
    }
  }
</style>
