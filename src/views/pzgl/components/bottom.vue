<template>
  <div class="container-box">
    <comTitle tabTitle="繁育管理" />
    <div class="content">
      <div class="content-top">
        <div class="content-top-list">
          <div class="left">
            <div class="green">6</div>
            <div>冻精种类/种</div>
          </div>
          <div class="line"></div>
        </div>
        <div class="content-top-list">
          <div class="left">
            <div class="blue">99</div>
            <div>冻精总数/细管-支</div>
          </div>
          <div class="line"></div>
        </div>
        <div class="content-top-list">
          <div class="left">
            <div class="blue1">47</div>
            <div>云岭肉牛/细管-支</div>
          </div>
          <div class="line"></div>
        </div>
        <div class="content-top-list">
          <div class="left">
            <div class="blue">16</div>
            <div>西门塔尔/细管-支</div>
          </div>
          <div class="line"></div>
        </div>
        <div class="content-top-list">
          <div class="left">
            <div class="green">27</div>
            <div>鲁西黄牛/细管-支</div>
          </div>
        </div>
      </div>
      <div class="content-bottom">
        <div class="content-bottom-l">
          <template v-for="(item, index) in listData">
            <el-popover
              placement="right"
              width="574"
              trigger="manual"
              v-model="item.active"
              :key="index"
            >
              <comTable :tableData="tableData" style="height: 97px">
                <el-table-column prop="a" label="能繁母牛"> </el-table-column>
                <el-table-column prop="b" label="已授精"> </el-table-column>
                <el-table-column prop="c" label="已受孕"> </el-table-column>=
              </comTable>
              <div
                slot="reference"
                class="content-bottom-list"
                :class="{ active: item.active }"
                @click="choiceTab(item)"
              >
                <div>{{ item.name }}</div>
                <div>{{ item.num }}</div>
              </div>
            </el-popover>
          </template>
        </div>
        <div class="content-bottom-r">
          <template v-for="(item, index) in listDatar">
            <el-popover
              placement="left"
              width="574"
              trigger="manual"
              v-model="item.active"
              :key="index"
            >
              <comTable :tableData="tableData" style="height: 97px">
                <el-table-column prop="a" label="能繁母牛"> </el-table-column>
                <el-table-column prop="b" label="已授精"> </el-table-column>
                <el-table-column prop="c" label="已受孕"> </el-table-column>=
              </comTable>
              <div
                slot="reference"
                class="content-bottom-list"
                :class="{ active: item.active }"
                @click="choiceTab(item)"
              >
                <div>{{ item.name }}</div>
                <div>{{ item.num }}</div>
              </div>
            </el-popover>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import comTable from "@/components/comTable/index.vue";
import config from "@/http/config";
export default {
  data() {
    return {
      showTable: false,
      listData: [
        {
          name: "云岭肉牛/头",
          num: "21",
          active: false,
        },
        {
          name: "西门塔尔/头",
          num: "21",
          active: false,
        },
        {
          name: "安格斯/头",
          num: "21",
          active: false,
        },
        {
          name: "鲁西黄牛/头",
          num: "21",
          active: false,
        },
      ],
      listDatar: [
        {
          name: "r云岭肉牛/头",
          num: "21",
          active: false,
        },
        {
          name: "r西门塔尔/头",
          num: "21",
          active: false,
        },
        {
          name: "r安格斯/头",
          num: "21",
          active: false,
        },
        {
          name: "r鲁西黄牛/头",
          num: "21",
          active: false,
        },
      ],
      tableData: [
        {
          a: 500,
          b: 300,
          c: 261,
        },
      ],
    };
  },
  components: {
    comTitle,
    comTable,
  },
  created() {
    // this.getAjax();
  },
  mounted() {
    setTimeout(() => {
      this.listData[0].active = true;
    }, 10);
  },
  methods: {
    getAjax() {
      this.$get(config.breedManagelist).then((res) => {
        console.log(res, "繁育管理");
      });
    },
    choiceTab(item) {
      this.listData.map((ele) => {
        ele.active = false;
      });
      this.listDatar.map((ele) => {
        ele.active = false;
      });
      item.active = true;
    },
  },
};
</script>
<style>
.el-popover {
  background-color: rgba(0, 0, 0, 0) !important;
  color: #fff !important;
  border: none;
  padding: 0;
}
.el-popper[x-placement^="right"] .popper__arrow {
  border-right-color: #02376f59 !important;
}
.el-popper[x-placement^="right"] .popper__arrow::after {
  border-right-color: #02376f59 !important;
}
.el-popper[x-placement^="left"] .popper__arrow {
  border-left-color: #02376f59 !important;
}
.el-popper[x-placement^="left"] .popper__arrow::after {
  border-left-color: #02376f59 !important;
}
</style>
<style scoped lang="less">
.container-box {
  width: 100%;
  overflow: hidden;
}
.content {
  width: 100%;
  padding-left: 39px;
  padding-top: 43px;
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
  &-top {
    height: 55px;
    display: flex;
    align-items: center;
    overflow: hidden;
    &-list {
      display: flex;
      align-items: center;
      overflow: hidden;
      margin-right: 17px;
      > .left {
        margin-bottom: 15px;
        overflow: hidden;
        > div:nth-of-type(1) {
          font-size: 30px;
          font-family: PangMenZhengDao;
          font-weight: 400;

          text-align: center;
        }
        > .green {
          color: #21db93;
        }
        > .blue {
          color: #00bdff;
        }
        .blue1 {
          color: #00f6ff;
        }
        > div:nth-of-type(2) {
          font-size: 14px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #86b2d7;
        }
      }
      > .line {
        width: 2px;
        height: 52px;
        background: url("../../../assets/img/pzgl/line.png") center no-repeat;
        margin-left: 24px;
      }
    }
  }
  .content-bottom {
    width: 100%;
    padding-top: 25px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    height: 100%;
    &-l{
      position: absolute;
      top: 25px;
      left: 0;
      height: 100%;
      width: 280px;
    }
    &-r{
      position: absolute;
      top: 25px;
      left: 900px;
      height: 100%;
      width: 280px;
    }
    .active {
      background: url("../../../assets/img/pzgl/rect-two.png") center no-repeat;
    }
    &-list {
      width: 270px;
      height: 77px;
      padding: 0 20px;
      box-sizing: border-box;
      margin-bottom: 10px;
      background: url("../../../assets/img/pzgl/rect-one.png") center no-repeat;
      overflow: hidden;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #aec9ff;
      justify-content: space-between;
    }
  }
  .table-box {
    position: absolute;
    left: 330px;
    top: 180px;
    width: 574px;
    height: 97px;
  }
}
</style>
