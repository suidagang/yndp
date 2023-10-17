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
              color="#009CFF"
              size="large"
              :timestamp="activity.drugName"
            >
              {{ activity.createTime }}
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
          <comTable :tableData="disinfectList">
            <el-table-column prop="createTime" label="时间"> </el-table-column>
            <el-table-column prop="drugName" label="事件描述"> </el-table-column>
          </comTable>
        </div>
      </div>
      <!-- 第三个 -->
      <div class="content-list">
        <div class="top-box">
          <div class="line"></div>
          <div>死亡记录</div>
        </div>
        <div class="content-list-body">
          <comTableOne :tableData="deadlist">
            <el-table-column prop="cattleCode" label="编号"> </el-table-column>
            <el-table-column prop="dealType" label="处理方式"> </el-table-column>
            <el-table-column prop="deadDate" label="死亡时间"> </el-table-column>
            <el-table-column prop="deadReason" label="死亡原因"> </el-table-column>
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
import config from "@/http/config";
export default {
  data() {
    return {
      activities: [],
      disinfectList:[],
      deadlist:[],
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
  created() {
    this.getAjax();
  },
  methods: {
    getAjax() {
      const params = {
        pageNum: 1,
        pageSize: 99999,
      };
      this.$get(config.immunelist, params).then((res) => {
        // res.rows = [...res.rows,...res.rows]//多条样式测试
        this.activities = res.rows;
      });
      this.$get(config.disinfectlist,params).then((res)=>{
         this.disinfectList = res.rows;
      });
      this.$get(config.deadlist,params).then((res)=>{
         console.log("死亡记录",res);
         this.deadlist = res.rows;
      })
    },
  },
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
      /deep/ .el-timeline-item__content {
        font-size: 16px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #ffffff;
      }
      /deep/ .el-timeline-item__timestamp {
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #86b2d7;
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
