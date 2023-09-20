<template>
  <div class="container">
    <comTitle  tabTitle="环境监测" @changeTab = "changeTab" />
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

</style>
