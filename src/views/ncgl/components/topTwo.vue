<template>
  <div class="container-box">
    <comTitle tabTitle="牛基础信息列表" />
    <div class="content">
      <comTable :tableData="tableData">
        <el-table-column prop="date" label="编号"> </el-table-column>
        <el-table-column prop="name" label="编码"> </el-table-column>
        <el-table-column prop="address" label="种类"> </el-table-column>
        <el-table-column prop="d" label="父亲编号"> </el-table-column>
        <el-table-column prop="b" label="母亲编号"> </el-table-column>
        <el-table-column prop="c" label="登记日期"> </el-table-column>
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
          address: "xxx",
          b:"xxxx",
          c:"是",
          d:'ddd'
        },
        {
          date: "2",
          name: "王小虎",
          address: "xxx",
          b:"xxxx",
          c:"是",
          d:'ddd'
        },
        {
          date: "3",
          name: "王小虎",
          address: "xxx",
          b:"xxxx",
          c:"是",
          d:'ddd'
        },
        {
          date: "4",
          name: "王小虎",
          address: "xxx",
          b:"xxxx",
          c:"是",
          d:'ddd'
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
.container-box {
  width: 619px;
  overflow: hidden;
}
.content {
  width: 619px;
  padding-top: 33px;
  box-sizing: border-box;
  overflow: hidden;
  height: 512px;
}
</style>
