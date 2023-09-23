<template>
  <div class="container-box">
    <comTitle tabTitle="兽医管理" />
    <div class="content">
      <div class="content-top">
        <div class="content-top-img"></div>
        <div class="content-top-right">
          <div class="text">当前兽医总数</div>
          <div class="num">10<span>人</span></div>
        </div>
      </div>
      <div class="content-body">
        <comTable :tableData="tableData">
          <el-table-column prop="date" label="姓名"> </el-table-column>
          <el-table-column prop="name" label="编号"> </el-table-column>
          <el-table-column prop="address" label="联系方式"> </el-table-column>
          <el-table-column prop="b" label="详细地址"> </el-table-column>
        </comTable>
      </div>
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
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀",
          b: "xxxx",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "沙江路",
          b: "xxxx",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "市普陀区",
          b: "xxxx",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "市普陀区金",
          b: "xxxx",
        },
      ],
    };
  },
  components: {
    comTitle,
    comTable,
  },
  methods: {},
};
</script>

<style scoped lang="less">
.container-box {
  width: 500px;
  overflow: hidden;
}
.content {
  width: 100%;
  padding-top: 43px;
  box-sizing: border-box;
  overflow: hidden;
  &-top {
    display: flex;
    &-img {
      width: 98px;
      height: 82px;
      background: url("../../../assets/img/fygl/fygl.png") center no-repeat;
    }
    &-right {
      margin-left: 14px;
      > .text {
        width: 138px;
        height: 23px;
        background: linear-gradient(
          90deg,
          rgba(6, 153, 213, 0.3) 0%,
          rgba(6, 153, 213, 0) 100%
        );
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #86b2d7;
        padding-left: 10px;
        line-height: 23px;
      }
      > .num {
        font-size: 30px;
        font-family: YouSheBiaoTiHei;
        font-weight: 400;
        color: #86b2d7;
      }
    }
  }
  &-body{
    width: 464px;
    height: 279px;
    margin-left: 5px;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>
