<template>
  <div class="container-box1">
    <comTitle tabTitle="牛场访客管理" />
    <div class="content">
      <comTableOne :tableData="tableData">
        <el-table-column prop="licensePlate" label="编号"> </el-table-column>
        <el-table-column prop="visitor" label="访客名"> </el-table-column>
        <el-table-column prop="visitorTime" label="时间"> </el-table-column>
        <el-table-column prop="reason" label="来访事由"> </el-table-column>
      </comTableOne>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import comTableOne from "@/components/comTable/indexOne.vue";
import config from "@/http/config";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  components: {
    comTitle,
    comTableOne,
  },
  created() {
    this.getAjax();
  },
  methods: {
    getAjax() {
      const params = {
        pageNum: 1,
        pageSize: 99999,
      };
      this.$get(config.visitorlist,params).then((res) => {
        this.tableData = res.rows;
      });
    },
  },
};
</script>

<style scoped lang="less">
.container-box1 {
  width: 385px;
  overflow: hidden;
}
.content {
  width: 100%;
  padding-left: 12px;
  margin-top: 33px;
  box-sizing: border-box;
  overflow: hidden;
  height: 307px;
}
</style>
