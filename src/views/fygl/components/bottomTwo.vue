<template>
  <div class="container-box">
    <comTitle tabTitle="检疫记录" />
    <div class="content">
      <div class="table-one">
        <comTable :tableData="tableData">
          <el-table-column prop="dates" label="免疫日期"> </el-table-column>
          <el-table-column prop="drugId" label="药品id"> </el-table-column>
          <el-table-column prop="dose" label="剂量"> </el-table-column>
          <el-table-column prop="immuneMode" label="免疫方式"> </el-table-column>
          <el-table-column prop="heads" label="免疫头数"> </el-table-column>
          <el-table-column prop="opUser" label="操作人"> </el-table-column>
          <el-table-column prop="drugName" label="检疫药品名称"> </el-table-column>
        </comTable>
      </div>
      <!-- <div class="table-two">
        <comTable :tableData="tableData">
          <el-table-column prop="date" label="受检对象"> </el-table-column>
          <el-table-column prop="name" label="检疫部门"> </el-table-column>
          <el-table-column prop="address" label="检疫时间"> </el-table-column>
          <el-table-column prop="b" label="检疫人员"> </el-table-column>
          <el-table-column prop="b" label="病毒类型"> </el-table-column>
        </comTable>
      </div> -->
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
      this.$get(config.immunelist, params).then((res) => {
        console.log(res, "检疫记录");
        this.tableData = res.rows;
      });
    },
  },
};
</script>

<style scoped lang="less">
.container-box {
  width: 980px;
  overflow: hidden;
}
.content {
  width: 100%;
  padding-top: 43px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  > .table-one {
    width: 930px;
    height: 319px;
    // margin-right: 20px;
  }
  // > .table-two {
  //   width: 500px;
  //   height: 319px;
  // }
}
</style>
