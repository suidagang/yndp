<template>
  <div class="box">
    <el-popover
      placement="right"
      :append-to-body="true"
      width="160"
      v-model="visible"
      :popper-options="{
        boundariesElement: 'body',
        removeOnDestroy: true,
      }"
    >
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible = false"
          >取消</el-button
        >
        <el-button type="primary" size="mini" @click="visible = false"
          >确定</el-button
        >
      </div>
      <el-button slot="reference">删除</el-button>
    </el-popover>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },
};
</script>

<style scoped>
.box {
  width: 400px;
  margin: 120px auto;
}
.top {
  text-align: center;
}

.left {
  float: left;
  width: 60px;
}

.right {
  float: right;
  width: 60px;
}

.bottom {
  clear: both;
  text-align: center;
}

.item {
  margin: 4px;
}

.left .el-tooltip__popper,
.right .el-tooltip__popper {
  padding: 8px 10px;
}
</style>
