<template>
  <div class="container-box">
    <comTitle tabTitle="牛场基础信息" />
    <div class="content">
      <comTable :tableData="tableData" height="514">
        <el-table-column prop="farmCode" label="编号"> </el-table-column>
        <el-table-column prop="farmName" label="名称"> </el-table-column>
        <el-table-column prop="headName" label="负责人"> </el-table-column>
        <el-table-column prop="phone" label="联系电话"> </el-table-column>
        <el-table-column prop="addr" label="地址"> </el-table-column>
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
  created() {
    this.getAjax();
  },
  methods: {
    getAjax() {
      const params = {
        pageNum: 1,
        pageSize: 99999,
      };
      this.$get(config.cattlefarmlist,params).then((res) => {
        console.log(res, "牛场基础信息");
        this.tableData = res.rows;
      });
    },
  },
};
</script>

<style scoped lang="less">
.container-box {
  width: 873px;
  overflow: hidden;
}
.content {
  width: 873px;
  padding-left: 49px;
  padding-top: 33px;
  box-sizing: border-box;
  overflow: hidden;
  // width: 823px;
    height: 514px;
}
</style>
