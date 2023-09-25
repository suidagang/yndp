<template>
  <div class="container-box1">
    <comTitle tabTitle="牛场访客管理" />
    <div class="content">
      <comTableOne :tableData="tableData">
        <el-table-column prop="date" label="编号"> </el-table-column>
        <el-table-column prop="name" label="访客类型"> </el-table-column>
        <el-table-column prop="address" label="时间"> </el-table-column>
        <el-table-column prop="d" label="是否授权"> </el-table-column>
      </comTableOne>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import comTableOne from "@/components/comTable/indexOne.vue";
export default {
  data() {
    return {
      tableData: [
        {
          date: "1",
          name: "王小虎",
          address: "上陀",
          b:"xxxx",
          c:"是",
          d:'187554789'
        },
        {
          date: "2",
          name: "王小虎",
          address: "沙江路",
          b:"xxxx",
          c:"是",
          d:'18754254789'
        },
        {
          date: "3",
          name: "王小虎",
          address: "市普区",
          b:"xxxx",
          c:"是",
          d:'187544789'
        },
        {
          date: "4",
          name: "王小虎",
          address: "普陀区",
          b:"xxxx",
          c:"是",
          d:'187545789'
        },
      ],
    };
  },
  components: {
    comTitle,
    comTableOne
  },
  methods: {},
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
