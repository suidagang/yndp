<template>
  <div class="box">
    <div class="table-box">
      <comTableOne :tableData="tableData">
        <el-table-column prop="date" label="编号"> </el-table-column>
        <el-table-column prop="name" label="访客类型"> </el-table-column>
        <el-table-column prop="address" label="时间"> </el-table-column>
        <el-table-column prop="d" label="是否授权"> </el-table-column>
      </comTableOne>
    </div>
    <div class="text">111111111</div>
    <comTable :tableData="tableData">
       <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </comTable>
  </div>
</template>

<script>
import comTable from "@/components/comTable/index.vue";
import comTableOne from "@/components/comTable/indexOne.vue";
export default {
  components:{
    comTableOne,
    comTable
  },
  data() {
    return {
      cellStyle: {
        fontSize: "14px",
        fontFamily: "Source Han Sans SC",
        fontWeight: 400,
        color: "#86B2D7",
        textAlign: "left",
        paddingLeft: "18px",
      },
      headerStyle: {
        fontSize: "14px",
        fontFamily: "Source Han Sans SC",
        fontWeight: "bold",
        color: "#B7C9E5",
        height: "40px",
        paddingLeft: "18px",
        backgroundColor:"rgba(0,0,0,0)"
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "市普陀区",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区",
        },
      ],
    };
  },
  mounted(){
    console.log(process.env.NODE_ENV,'--process.env.NODE_ENV')
    console.log(this.$router.currentRoute.fullPath,'--currentRoute.fullPath')
     this.$message({
        showClose: true,
        message: "网络请求不存在",
        type: "error",
      });
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      return "background: white;";
    },
  },
};
</script>

<style lang='less' scoped>
.box {
  width: 100%;
  height: 100%;
  background: url("../assets/img/com_bg.png") center no-repeat;
  overflow: hidden;
}
.table-box {
  margin: 50px auto;
  width: 500px;
  height: 500px;
}
.text {
  width: 334px;
  height: 30px;
  background: linear-gradient(90deg, #0b3070 0%, rgba(18, 43, 87, 0) 100%);
}
</style>
