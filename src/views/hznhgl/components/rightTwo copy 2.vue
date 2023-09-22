<template>
  <div class="container-box">
    <comTitle tabTitle="防疫管理" />
    <div class="content">
      <el-table
        :data="tableData"
        :header-cell-style="styleObj"
        :cell-style="cellStyle"
        :row-style="{ height: '34px'}"
        style="width: 100%"
      >
        <el-table-column prop="date"  label="日期"> </el-table-column>
        <el-table-column prop="name"  label="姓名"> </el-table-column>
        <el-table-column prop="address"  label="地址"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
export default {
  data() {
    return {
      cellStyle: {
        fontSize: "14px",
        fontFamily: "Source Han Sans SC",
        fontWeight: 400,
        color: "#86B2D7",
        textAlign: "left",
      },
      styleObj: {
        fontSize: "14px",
        fontFamily: "Source Han Sans SC",
        fontWeight: "bold",
        color: "#B7C9E5",
        height: "40px",
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
      listData: [
        {
          id: "1",
          wysj: "2023.07.18 14:26",
          wysl: "5kg",
          fkwt: "xxxxxxxxxxxx",
        },
        {
          id: "2",
          wysj: "2023.07.18 14:26",
          wysl: "5kg",
          fkwt: "xxxxxxxxxxxx",
        },
        {
          id: "3",
          wysj: "2023.07.18 14:26",
          wysl: "5kg",
          fkwt: "xxxxxxxxxxxx",
        },
        {
          id: "4",
          wysj: "2023.07.18 14:26",
          wysl: "5kg",
          fkwt: "xxxxxxxxxxxx",
        },
        {
          id: "5",
          wysj: "2023.07.18 14:26",
          wysl: "5kg",
          fkwt: "xxxxxxxxxxxx",
        },
        {
          id: "6",
          wysj: "2023.07.18 14:26",
          wysl: "5kg",
          fkwt: "xxxxxxxxxxxx",
        },
      ],
    };
  },
  components: {
    comTitle,
  },
  methods: {},
};
</script>
<style>
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
<style scoped lang="less">
.container-box {
  width: 1027px;
  overflow: hidden;
}
.content {
  width: 100%;
  height: 264px;
  box-sizing: border-box;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    rgba(2, 54, 111, 0.1) 1%,
    rgba(0, 114, 255, 0.2) 54%,
    rgba(2, 54, 111, 0.1) 99%
  );
  .table-box {
    width: 540px;
    height: 264px;
    box-sizing: border-box;
    overflow: hidden;
    background: linear-gradient(
      90deg,
      rgba(2, 54, 111, 0.1) 1%,
      rgba(0, 114, 255, 0.2) 54%,
      rgba(2, 54, 111, 0.1) 99%
    );
    &-title {
      padding-left: 28px;
      box-sizing: border-box;
      width: 540px;
      height: 40px;
      background: linear-gradient(
        90deg,
        rgba(2, 54, 111, 0.1) 1%,
        rgba(0, 114, 255, 0.2) 54%,
        rgba(2, 54, 111, 0.1) 99%
      );
      display: flex;
      align-items: center;
      font-size: 14px;
      font-family: Source Han Sans SC;
      font-weight: bold;
      color: #b7c9e5;
      .one {
        width: 110px;
      }
      .two {
        width: 165px;
      }
      .three {
        width: 100px;
      }
    }
    &-body {
      overflow: hidden;
      padding-left: 28px;
      box-sizing: border-box;
      padding-top: 8px;
      > div {
        height: 34px;
        line-height: 34px;
        width: 977px;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #86b2d7;
        .one {
          width: 110px;
        }
        .two {
          width: 165px;
        }
        .three {
          width: 100px;
        }
      }
    }
  }
}
</style>
