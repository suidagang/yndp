<template>
  <div class="container">
    <comTitle  :tabList='tabList' tabTitle="合作养殖汇总简报" :tabspacing="26" @changeTab = "changeTab" />
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

</style>
