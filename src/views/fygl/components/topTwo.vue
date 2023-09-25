<template>
  <div class="container-box">
    <comTitle tabTitle="防疫记录" />
    <div class="content">
      <!-- 第一个 -->
      <div class="content-list content-list-first">
        <div class="top-box">
          <div class="line"></div>
          <div>免疫程序记录</div>
          <div class="text">
            <div class="uu"></div>
          </div>
        </div>
        <div class="content-list-body">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :timestamp="activity.timestamp"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
      <!-- 第二个 -->
      <div class="content-list">
        <div class="top-box">
          <div class="line"></div>
          <div>消杀毒记录</div>
        </div>
        <div class="content-list-body">
          <comTable :tableData="tableData">
            <el-table-column prop="date" label="时间"> </el-table-column>
            <el-table-column prop="date" label="事件描述"> </el-table-column>
          </comTable>
        </div>
      </div>
      <!-- 第三个 -->
      <div class="content-list">
        <div class="top-box">
          <div class="line"></div>
          <div>无害化处理记录</div>
        </div>
        <div class="content-list-body">
          <comTableOne :tableData="tableData">
            <el-table-column prop="date" label="编号"> </el-table-column>
            <el-table-column prop="date" label="处理方式"> </el-table-column>
            <el-table-column prop="date" label="处理时间"> </el-table-column>
            <el-table-column prop="date" label="死亡原因"> </el-table-column>
          </comTableOne>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import comTable from "@/components/comTable/index.vue";
import comTableOne from "@/components/comTable/indexOne.vue";
export default {
  data() {
    return {
      activities: [
        {
          timestamp: "支持使用图标",
          content: "2018-04-12 20:46",
          size: "large",
          color: "#009CFF",
        },
        {
          timestamp: "支持使用图标",
          content: "2018-04-12 20:46",
          size: "large",
          color: "#009CFF",
        },
        {
          timestamp: "支持使用图标",
          content: "2018-04-12 20:46",
          size: "large",
          color: "#009CFF",
        },
        {
          timestamp: "支持使用图标",
          content: "2018-04-12 20:46",
          size: "large",
          color: "#009CFF",
        },
      ],
      tableData: [
        {
          date: "2016",
          name: "王小虎",
          address: "普陀",
          b: "xxxx",
        },
        {
          date: "205",
          name: "王小虎",
          address: "沙江路",
          b: "xxxx",
        },
        {
          date: "01",
          name: "王小虎",
          address: "市普陀区",
          b: "xxxx",
        },
        {
          date: "201",
          name: "王小虎",
          address: "市区金",
          b: "xxxx",
        },
      ],
    };
  },
  components: {
    comTitle,
    comTable,
    comTableOne,
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
  padding-left: 39px;
  padding-top: 43px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  &-list {
    height: 380px;
    width: 320px;
    margin-right: 30px;
    overflow: hidden;
    box-sizing: border-box;
    &.content-list-first {
      width: 200px;
      padding-left: 5px;
      /deep/ .el-timeline-item__content{
        font-size: 16px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #FFFFFF;
      }
      /deep/ .el-timeline-item__timestamp{
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #86B2D7;
      }
      // 竖线
      /deep/ .el-timeline-item__tail {
        border-left: solid 3px #283368;
      }
      // 圆点样式
      // /deep/ .el-timeline-item__node--large {
      //   width: 18px;
      //   height: 18px;
      //   background: linear-gradient(90deg, #009CFF 46%, #00C6FF 100%);
      //   border-radius: 50%;
      // }
    }
    > .top-box {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-family: Source Han Sans SC;
      font-weight: bold;
      color: #2ccbf8;
      overflow: hidden;
      .line {
        width: 4px;
        height: 20px;
        background: #2ccbf8;
        border-radius: 2px;
        margin-right: 12px;
      }
    }
    &-body {
      margin-top: 30px;
      width: 326px;
      height: 322px;
    }
  }
}
</style>
