<template>
<div class="box">
<div class="table-box">
    <el-table
      :data="tableData"
      :header-cell-style="styleObj"
      :cell-style = "cellStyle"
      style="width: 100%"
    >
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      cellStyle:{
        fontSize: '14px',
        fontFamily: 'Source Han Sans SC',
        fontWeight: 400,
        color: '#86B2D7'
      },
      styleObj:{
        fontSize: '14px',
        fontFamily: 'Source Han Sans SC',
        fontWeight: 'bold',
        color: '#B7C9E5',
        background:'linear-gradient(90deg,rgba(2, 54, 111, 0.1) 1%,rgba(0, 114, 255, 0.2) 54%,rgba(2, 54, 111, 0.1) 99%)'
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
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods:{
    tableRowClassName({row, rowIndex}) {
      return 'background: white;';
    }
  }
};
</script>
<style>
  /*最外层透明*/
  .el-table, .el-table__expanded-cell{
    background-color: transparent!important;
  }
  /* 表格内背景颜色 */
  .el-table th,
  .el-table tr,
  .el-table td {
    background-color: transparent;
  }
  /* 去除边框 */
  .el-table__row>td{ border: none; }
  .el-table::before { height: 0px; }
  .el-table td, .el-table th.is-leaf{
  border-bottom:none ;
  }

  /* 修改hover样式 */
  .el-table__body tr:hover > td {
    background-color: inherit !important;;
  } 
</style>
<style scoped>
  .box{
    width: 100%;
    height: 100%;
    background: url("../assets/img/com_bg.png") center no-repeat;
    overflow: hidden;
  }
.table-box {
  margin: 50px auto;
  width: 500px;
  height: 500px;
  background: linear-gradient(
    90deg,
    rgba(2, 54, 111, 0.1) 1%,
    rgba(0, 114, 255, 0.2) 54%,
    rgba(2, 54, 111, 0.1) 99%
  );
}
</style>
