<template>
  <div class="container-box1">
    <comTitle tabTitle="粪污管理" />
    <div class="content">
      <comTable :tableData="tableData" height="307">
        <el-table-column prop="id" label="编号"> </el-table-column>
        <el-table-column prop="remark" label="名称"> </el-table-column>
        <el-table-column prop="dealType" label="负责人"> </el-table-column>
        <el-table-column prop="d" label="联系电话"> </el-table-column>
        <el-table-column prop="site" label="地址"> </el-table-column>
        <el-table-column prop="delFlag" label="是否启用"> </el-table-column>
      </comTable>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import comTable from "@/components/comTable/index.vue";
import config from "@/http/config";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  components: {
    comTitle,
    comTable,
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
      this.$get(config.dunglist,params).then((res) => {
        console.log(res, "粪污管理");
        this.tableData = res.rows;
      });
    },
  },
};
</script>

<style scoped lang="less">
.container-box1 {
  width: 1096px;
  overflow: hidden;
}
.content {
  // width: 1044px;
  width: 100%;
  height: 307px;
  padding-left: 49px;
  margin-top: 33px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
