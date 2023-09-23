<template>
  <div class="container-box">
    <comTitle tabTitle="普通诊疗记录" />
    <div class="content">
      <div class="content-body">
        <comTable :tableData="tableData">
          <el-table-column prop="date" label="药类型"> </el-table-column>
          <el-table-column prop="name" label="药品名称"> </el-table-column>
          <el-table-column prop="address" label="厂家名称"> </el-table-column>
          <el-table-column prop="b" label="采购日期"> </el-table-column>
          <el-table-column prop="b" label="病例对象"> </el-table-column>
        </comTable>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import comTable from "@/components/comTable/index.vue";
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
  methods: {},
};
</script>

<style scoped lang="less">
.container-box {
  width: 500px;
  overflow: hidden;
}
.content {
  width: 100%;
  padding-top: 43px;
  box-sizing: border-box;
  overflow: hidden;
  &-body{
    width: 464px;
    height: 319px;
    margin-left: 5px;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>
