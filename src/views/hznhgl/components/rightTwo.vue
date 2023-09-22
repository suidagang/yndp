<template>
  <div class="container-box">
    <comTitle tabTitle="防疫管理" />
    <div class="content">
      <comTable :tableData="tableData">
        <el-table-column prop="date" label="日期"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </comTable>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import comTable from "../../../components/comTable/index.vue";
export default {
  data() {
    return {
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
    comTable,
  },
  methods: {},
};
</script>
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
}
</style>
