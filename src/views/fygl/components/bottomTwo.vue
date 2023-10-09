<template>
  <div class="container-box">
    <comTitle tabTitle="检疫记录" />
    <div class="content">
      <div class="table-one">
        <comTable :tableData="tableData">
          <el-table-column prop="date" label="事件"> </el-table-column>
          <el-table-column prop="name" label="健康状态"> </el-table-column>
          <el-table-column prop="address" label="已打疫苗"> </el-table-column>
          <el-table-column prop="b" label="报告"> </el-table-column>
        </comTable>
      </div>
      <div class="table-two">
        <comTable :tableData="tableData">
          <el-table-column prop="date" label="受检对象"> </el-table-column>
          <el-table-column prop="name" label="检疫部门"> </el-table-column>
          <el-table-column prop="address" label="检疫时间"> </el-table-column>
          <el-table-column prop="b" label="检疫人员"> </el-table-column>
          <el-table-column prop="b" label="病毒类型"> </el-table-column>
        </comTable>
      </div>
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
      tableData: [
        {
          date: "2016",
          name: "王小虎",
          address: "普陀",
          b: "xxxx",
        },
        {
          date: "205",
          name: "王小虎",
          address: "沙江路",
          b: "xxxx",
        },
        {
          date: "01",
          name: "王小虎",
          address: "市普陀区",
          b: "xxxx",
        },
        {
          date: "201",
          name: "王小虎",
          address: "市区金",
          b: "xxxx",
        },
      ],
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
        // this.tableData = res.rows;
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
    width: 413px;
    height: 319px;
    margin-right: 20px;
  }
  > .table-two {
    width: 500px;
    height: 319px;
  }
}
</style>
