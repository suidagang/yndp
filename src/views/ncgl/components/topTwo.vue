<template>
  <div class="container-box">
    <comTitle tabTitle="牛基础信息列表" />
    <div class="content">
      <comTable :tableData="tableData" @clickRow = "clickRow" height="512">
        <el-table-column prop="id" label="编号"> </el-table-column>
        <el-table-column prop="name" label="编码"> </el-table-column>
        <el-table-column prop="cattleStage" label="种类"> </el-table-column>
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
import config from "@/http/config";
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
   created() {
    this.getAjax();
  },
  methods: {
    getAjax() {
      const params = {
        pageNum: 1,
        pageSize: 99999,
      };
      this.$get(config.cattlelist,params).then((res) => {
        console.log(res, "牛基础信息列表");
        this.tableData = res.rows;
      });
    },
    clickRow(row){
      this.$emit("goDetail",row)
    }
  },
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
