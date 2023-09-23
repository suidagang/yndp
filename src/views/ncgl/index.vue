<template>
  <div class="ncgl-box">
    <ncgl v-show="!showDetailPage" @goncglDeatil = "goncglDeatil" />
    <ncglDetail v-show="showDetailPage" />
  </div>
</template>

<script>
import ncgl from './ncgl.vue';
import ncglDetail from './ncglDetail.vue'
export default {
  data() {
    return {
      showDetailPage:false,//是否显示牛场管理详情页面
    }
  },
  components: {
    ncgl,
    ncglDetail
  },
  methods:{
    goncglDeatil(row){
      this.showDetailPage = true;
    }
  }
  
}
</script>

<style scoped lang="less">
  .ncgl-box{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
</style>
