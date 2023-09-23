<template>
  <div class="container-box1">
    <comTitle tabTitle="粪污管理" />
    <div class="content">
      <comTable :tableData="tableData">
        <el-table-column prop="date" label="编号"> </el-table-column>
        <el-table-column prop="name" label="名称"> </el-table-column>
        <el-table-column prop="address" label="负责人"> </el-table-column>
        <el-table-column prop="d" label="联系电话"> </el-table-column>
        <el-table-column prop="b" label="地址"> </el-table-column>
        <el-table-column prop="c" label="是否启用"> </el-table-column>
      </comTable>
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
          date: "1",
          name: "王小虎",
          address: "上海市普陀",
          b:"xxxx",
          c:"是",
          d:'18754254789'
        },
        {
          date: "2",
          name: "王小虎",
          address: "沙江路 1517 弄",
          b:"xxxx",
          c:"是",
          d:'18754254789'
        },
        {
          date: "3",
          name: "王小虎",
          address: "市普陀区",
          b:"xxxx",
          c:"是",
          d:'18754254789'
        },
        {
          date: "4",
          name: "王小虎",
          address: "上海市普陀区",
          b:"xxxx",
          c:"是",
          d:'18754254789'
        },
      ],
    };
  },
  components: {
    comTitle,
    comTable
  },
  methods: {},
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
