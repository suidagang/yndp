<template>
  <div class="container">
    <comList class="top-one" />
    <comList class="top-two" />
    <comList class="bottom-one" />
    <comList class="bottom-two" />
  </div>
</template>

<script>
import comList from './components/comList.vue';
import config from "@/http/config";
export default {
  data() {
    return {

    }
  },
  components: {
    comList
  },
  created() {
    this.getAjax();
    this.getAjax1();
  },
  methods: {
    getAjax() {
      const params = {
        cattleType:3
      };
      this.$get(config.selfSta,params).then((res) => {
        console.log(res, "自营牛场牛种类统计");
        // this.tableData = res.rows;
      });
      
    },
    getAjax1(){
      this.$get(config.selfCattleSta).then((res) => {
        console.log(res, "自营牛场牛状态统计");
        // this.tableData = res.rows;
      });
    }
  },
}
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  .top-one{
    position: absolute;
    left: 80px;
    top:58px;
  }
  .top-two{
    position: absolute;
    left: 795px;
    top:58px;
  }
  .bottom-one{
    position: absolute;
    left: 80px;
    top:483px;
  }
  .bottom-two{
    position: absolute;
    left: 795px;
    top:483px;
  }
</style>
