<template>
  <div class="com-table">
    <el-table
      :data="tableData"
      :header-cell-style="headerStyle"
      :cell-style="cellStyle"
      :row-style="{ height: '34px' }"
      @row-click="clickRow"
      style="width: 100%; height: 100%"
    >
      <slot></slot>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cellStyle: {
        fontSize: "14px",
        fontFamily: "Source Han Sans SC",
        fontWeight: 400,
        color: "#86B2D7",
        textAlign: "left",
        backgroundColor: "rgba(0,0,0,0)",
      },
      headerStyle: {
        fontSize: "14px",
        fontFamily: "Source Han Sans SC",
        fontWeight: "bold",
        color: "#B7C9E5",
        height: "40px",
      },
    };
  },
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    clickRow(row, column, event) {
      this.$emit("clickRow", row, column, event);
    },
  },
};
</script>

<style scoped lang="less">
.com-table {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/deep/ .el-button--primary {
  background-color: red !important;
  color: #000;
}
/deep/ .el-table .cell,
.el-table th div,
.el-table--border td:first-child .cell,
.el-table--border th:first-child .cell {
  padding-left: 0 !important;
}
/deep/ .el-table .cell,
.el-table th div {
  padding-right: 0 !important;
}
/deep/ .el-table {
  background: linear-gradient(
    90deg,
    rgba(2, 54, 111, 0.1) 1%,
    rgba(0, 114, 255, 0.2) 54%,
    rgba(2, 54, 111, 0.1) 99%
  ) !important;
}
/* body居表头距离 */
/deep/ .el-table .el-table__body-wrapper {
  margin-top: 8px !important;
}
/* 设置表头的高度 */

/deep/ .el-table .el-table__header th,
.el-table__header th {
  padding: 6px 0px !important;
}
/* 设置表主体的高度 */

/deep/ .el-table__body td,
.el-table__body th {
  padding: 1px !important;
}

/deep/ .el-table .el-table__header-wrapper {
  background: linear-gradient(
    90deg,
    rgba(2, 54, 111, 0.1) 1%,
    rgba(0, 114, 255, 0.2) 54%,
    rgba(2, 54, 111, 0.1) 99%
  ) !important;
}
/*最外层透明*/
/deep/ .el-table,
.el-table__expanded-cell {
  background-color: rgba(0, 0, 0, 0) !important;
}
/deep/ .el-table .el-table__header-wrapper tr,
.el-table .el-table__header-wrapper tr th {
  background: rgba(0, 0, 0, 0) !important;
}

/deep/ .el-table th,
.el-table tr {
  background: rgba(0, 0, 0, 0) !important;
}
/* 去除边框 */
/deep/ .el-table__row > td {
  border: none !important;
}
/deep/ .el-table::before {
  height: 0px !important;
}
/deep/ .el-table th.is-leaf {
  border-bottom: none !important;
}
/deep/ .el-table td,
.el-table th.is-leaf {
  // border-bottom: 2px solid #161b33 !important;
  border-bottom: none !important;
}

/* 修改hover样式 */
/deep/ .el-table__body tr:hover > td {
  background-color: inherit !important;
}
/deep/ .el-table .el-table__row {
  background: rgba(0, 0, 0, 0);
}
.com-table /deep/ .el-table .el-table__body tr td:nth-of-type(1) {
  padding-left: 18px !important;
}
.com-table /deep/ .el-table .el-table__header tr th:nth-of-type(1) {
  padding-left: 18px !important;
}
</style>
