<template>
  <div class="container-box">
    <comTitle tabTitle="饲料管理" />
    <div class="content">
      <div class="content-list">
        <div class="content-list-name">XXX饲料</div>
        <div class="content-list-num">21</div>
      </div>
      <div class="content-list">
        <div class="content-list-name">XXX饲料</div>
        <div class="content-list-num">21</div>
      </div>
      <div class="content-list">
        <div class="content-list-name">XXX饲料</div>
        <div class="content-list-num">1</div>
      </div>
      <div class="content-list">
        <div class="content-list-name">XXX饲料</div>
        <div class="content-list-num">21</div>
      </div>
      <div class="content-list">
        <div class="content-list-name">XXX饲料</div>
        <div class="content-list-num">21</div>
      </div>
      <div class="content-list">
        <div class="content-list-name">XXX饲料</div>
        <div class="content-list-num">21</div>
      </div>
    </div>
    <div class="table-box">
      <comTable :tableData="tableData">
        <el-table-column prop="date" label="饲料名称"> </el-table-column>
        <el-table-column prop="name" label="采购数量吨"> </el-table-column>
        <el-table-column prop="address" label="采购日期"> </el-table-column>
        <el-table-column prop="b" label="采购人"> </el-table-column>
      </comTable>
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
          date: "2016-05",
          name: "王小虎1",
          address: "普陀",
          b:"xxxx"
        },
        {
          date: "2016-04",
          name: "王小虎",
          address: "沙江路",
          b:"xxxx"
        },
        {
          date: "2016-01",
          name: "王小虎",
          address: "市区",
          b:"xxxx"
        },
        {
          date: "2016-03",
          name: "王小虎",
          address: "上海",
          b:"xxxx"
        },
      ]
    };
  },
  components: {
    comTitle,
    comTable
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
  padding-top: 28px;
  padding-left: 34px;
  overflow: hidden;
  box-sizing: border-box;
  &-list {
    float: left;
    width: 170px;
    height: 67px;
    background: url("../../../assets/img/tsxx_bg.png") center no-repeat;
    display: flex;
    align-items: center;
    margin-right: 5px;
    margin-bottom: 3px;
    overflow: hidden;
    > div {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #aec9ff;
    }
    &-name {
      width: 82px;
      margin-left: 31px;
    }
    &-num {
      font-size: 24px;
      font-family: PangMenZhengDao;
      font-weight: 400;
      color: #00ffe4;

      background: linear-gradient(0deg, #45cdff 0%, #e5f9ff 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
.table-box {
    margin-top: 20px;
    margin-left: 34px;
    overflow: hidden;
    box-sizing: border-box;
    width: 464px;
    height: 266px;
  }
</style>
