<template>
  <div class="container">
    <comTitle  :tabList='tabList' tabTitle="自营牛场简报" :tabspacing="20" @changeTab = "changeTab" />
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

</style>
