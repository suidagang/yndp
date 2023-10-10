<template>
  <div class="ncgl-box">
    <ncgl v-show="!showDetailPage" @goncglDeatil = "goncglDeatil" />
    <ncglDetail ref="ncglDetail" v-show="showDetailPage" />
  </div>
</template>

<script>
import ncgl from './ncgl.vue';
import ncglDetail from './ncglDetail.vue';
import config from "@/http/config";
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
    getAjax(id) {
      this.$get(config.cattleid+id).then((res) => {
        console.log(res, "牛只详细信息");
        this.showDetailPage = true;
        this.$refs.ncglDetail.open(res.data);
        // this.tableData = res.rows;
      });
    },
    goncglDeatil(row){
      this.getAjax(row.id);
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
