<template>
  <el-table
    :data="tableData"
    class="com-table-one"
    :header-cell-style="headerStyle"
    :cell-style="cellStyle"
    :row-style="{ height: '34px' }"
    @row-click="clickRow"
    style="width: 100%; height: 100%"
  >

    <slot></slot>
     <!-- <el-button type="primary">主要按钮</el-button> -->
  </el-table>
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
        paddingLeft: "18px",
        backgroundColor: "rgba(0,0,0,0)",
      },
      headerStyle: {
        fontSize: "14px",
        fontFamily: "Source Han Sans SC",
        fontWeight: "bold",
        color: "#B7C9E5",
        height: "40px",
        paddingLeft: "18px",
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
<style >
.el-table .cell,
.el-table th div,
.el-table--border td:first-child .cell,
.el-table--border th:first-child .cell {
  padding-left: 0 !important;
}
.el-table .cell,
 .el-table th div {
  padding-right: 0 !important;
}
 .el-table {
  background: rgba(0, 0, 0, 0);
}
/* body居表头距离 */
.el-table .el-table__body-wrapper {
  margin-top: 8px !important;
}
/* 设置表头的高度 */

 .el-table .el-table__header th,
.el-table__header th {
  padding: 6px 0px !important;
}
/* 设置表主体的高度 */

.el-table__body td,
.el-table__body th {
  padding: 1px !important;
}

 .el-table .el-table__header-wrapper {
  background: rgba(0, 0, 0, 0);
}
/*最外层透明*/
 .el-table,
.el-table__expanded-cell {
  background-color: rgba(0, 0, 0, 0) !important;
}
 .el-table .el-table__body-wrapper tr {
  background: linear-gradient(
    90deg,
    #0b3070 0%,
    rgba(18, 43, 87, 0) 100%
  ) !important;
}
.el-table .el-table__header-wrapper tr,.el-table .el-table__header-wrapper tr th{
  background: rgba(0, 0, 0, 0)!important;
}

/* 去除边框 */
.el-table__row > td {
  border: none !important;
}
.el-table::before {
  height: 0px !important;
}
 .el-table th.is-leaf {
  border-bottom: none !important;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 2px solid #161b33 !important;
}

/* 修改hover样式 */
.el-table__body tr:hover > td {
  background-color: inherit !important;
}
</style>
