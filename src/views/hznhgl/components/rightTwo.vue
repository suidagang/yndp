<template>
  <div class="container-box">
    <comTitle tabTitle="防疫管理" />
    <div class="content">
      <comTable :tableData="tableData">
        <el-table-column prop="date" label="牛编号"> </el-table-column>
        <el-table-column prop="name" label="防疫时间"> </el-table-column>
        <el-table-column prop="address" label="是否已用药"> </el-table-column>
        <el-table-column prop="b" label="药品类型"> </el-table-column>
      </comTable>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import comTable from "../../../components/comTable/index.vue";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀",
          b:"xxxx"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "沙江路 1517 弄",
          b:"xxxx"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "市普陀区",
          b:"xxxx"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          b:"xxxx"
        },
      ]
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
  width: 1027px;
  overflow: hidden;
}
.content {
  width: 100%;
  height: 264px;
  box-sizing: border-box;
  overflow: hidden;
  padding-left: 49px;
  padding-top: 39px;
}
</style>
