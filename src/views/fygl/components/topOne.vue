<template>
  <div class="container-box">
    <comTitle  tabTitle="兽医管理" />
    <div class="content">
      
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

  }
}
</script>

<style scoped lang="less">
  .container-box{
    width: 500px;
    overflow: hidden;
  }
  .content{
    width: 100%;
    padding-left: 39px;
    padding-top: 43px;
    box-sizing: border-box;
    overflow: hidden;
   
  }
</style>
