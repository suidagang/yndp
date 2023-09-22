<template>
  <div class="container-box">
    <comTitle tabTitle="牛来源管理" />
    <div class="content">
      <comTable :tableData="tableData">
        <el-table-column prop="date" label=""> </el-table-column>
        <el-table-column prop="name" label="西门塔尔"> </el-table-column>
        <el-table-column prop="address" label="鲁西黄牛"> </el-table-column>
        <el-table-column prop="d" label="云岭肉牛"> </el-table-column>
        <el-table-column prop="b" label="褐牛"> </el-table-column>
        <el-table-column prop="c" label="XXXXX"> </el-table-column>
        <el-table-column prop="name" label="西门塔尔"> </el-table-column>
        <el-table-column prop="name" label="西门塔尔"> </el-table-column>
        <el-table-column prop="name" label="西门塔尔"> </el-table-column>
        <el-table-column prop="name" label="西门塔尔"> </el-table-column>
        <el-table-column prop="name" label="西门塔尔"> </el-table-column>
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
          name: "王虎",
          address: "xxx",
          b:"xxxx",
          c:"是",
          d:'ddd'
        },
        {
          date: "2",
          name: "王小",
          address: "xxx",
          b:"xxxx",
          c:"是",
          d:'ddd'
        },
        {
          date: "3",
          name: "小虎",
          address: "xxx",
          b:"xxxx",
          c:"是",
          d:'ddd'
        },
        {
          date: "4",
          name: "王虎",
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
  width: 1536px;
  overflow: hidden;
}
.content {
  width: 1536px;
  padding-top: 33px;
  box-sizing: border-box;
  overflow: hidden;
  height: 156px;
}
</style>
