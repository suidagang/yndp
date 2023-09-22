<template>
  <el-table
    :data="tableData"
    :header-cell-style="headerStyle"
    :cell-style="cellStyle"
    :row-style="{ height: '34px' }"
    style="width: 100%; height: 100%"
  >
    <slot></slot>
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
};
</script>
<style>
.el-table {
  background: linear-gradient(
    90deg,
    rgba(2, 54, 111, 0.1) 1%,
    rgba(0, 114, 255, 0.2) 54%,
    rgba(2, 54, 111, 0.1) 99%
  );
}
/* body居表头距离 */
.el-table .el-table__body-wrapper {
  margin-top: 8px;
}
/* 设置表头的高度 */

.el-table__header td,
.el-table__header th {
  padding: 6px 0px;
}
/* 设置表主体的高度 */

.el-table__body td,
.el-table__body th {
  padding: 1px;
}

.el-table .el-table__header-wrapper {
  background: linear-gradient(
    90deg,
    rgba(2, 54, 111, 0.1) 1%,
    rgba(0, 114, 255, 0.2) 54%,
    rgba(2, 54, 111, 0.1) 99%
  );
}
/*最外层透明*/
.el-table,
.el-table__expanded-cell {
  background-color: transparent !important;
}
/* 表格内背景颜色 */
.el-table th,
.el-table tr,
.el-table td {
  background-color: transparent;
}
/* 去除边框 */
.el-table__row > td {
  border: none;
}
.el-table::before {
  height: 0px;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: none;
}

/* 修改hover样式 */
.el-table__body tr:hover > td {
  background-color: inherit !important;
}
</style>
