<template>
  <div class="container-box">
    <comTitle tabTitle="成本统计" />
    <div class="content">
      <div class="content-list">
        <div class="content-list-img">
          <div class="img"></div>
          <div class="right-text">
            <div>饲料成本/万元</div>
            <div class="number-text">7895</div>
          </div>
        </div>
        <div class="content-list-table">
          <comTable :tableData="tableData">
            <el-table-column prop="a" label="青贮饲料"> </el-table-column>
            <el-table-column prop="b" label="蛋白饲料"> </el-table-column>
            <el-table-column prop="c" label="微量元素"> </el-table-column>
            <el-table-column prop="d" label="维生素添加"> </el-table-column>
            <el-table-column prop="e" label="青贮饲料"> </el-table-column>
            <el-table-column prop="f" label="蛋白饲料"> </el-table-column>
            <el-table-column prop="h" label="微量元素"> </el-table-column>
            <el-table-column prop="i" label="维生素添加"> </el-table-column>
          </comTable>
        </div>
      </div>
      <div class="content-list">
        <div class="content-list-img">
          <div class="img rycb-img"></div>
          <div class="right-text">
            <div>人员成本/万元</div>
            <div class="number-text">455</div>
          </div>
        </div>
        <div class="content-list-table">
          <comTable :tableData="tableData">
            <el-table-column prop="a" label="青贮饲料"> </el-table-column>
            <el-table-column prop="b" label="蛋白饲料"> </el-table-column>
            <el-table-column prop="c" label="微量元素"> </el-table-column>
            <el-table-column prop="d" label="维生素添加"> </el-table-column>
            <el-table-column prop="e" label="青贮饲料"> </el-table-column>
            <el-table-column prop="f" label="蛋白饲料"> </el-table-column>
            <el-table-column prop="h" label="微量元素"> </el-table-column>
            <el-table-column prop="i" label="维生素添加"> </el-table-column>
          </comTable>
        </div>
      </div>
      <div class="content-list">
        <div class="content-list-img">
          <div class="img gncb-img"></div>
          <div class="right-text">
            <div>购牛成本/万元</div>
            <div class="number-text">455</div>
          </div>
        </div>
        <div class="content-list-table">
          <comTable :tableData="tableData">
            <el-table-column prop="a" label="青贮饲料"> </el-table-column>
            <el-table-column prop="b" label="蛋白饲料"> </el-table-column>
            <el-table-column prop="c" label="微量元素"> </el-table-column>
            <el-table-column prop="d" label="维生素添加"> </el-table-column>
            <el-table-column prop="e" label="青贮饲料"> </el-table-column>
            <el-table-column prop="f" label="蛋白饲料"> </el-table-column>
            <el-table-column prop="h" label="微量元素"> </el-table-column>
            <el-table-column prop="i" label="维生素添加"> </el-table-column>
          </comTable>
        </div>
      </div>
      <div class="content-list">
        <div class="content-list-img">
          <div class="img gdzc-img"></div>
          <div class="right-text">
            <div>固定资产/万元</div>
            <div class="number-text">455</div>
          </div>
        </div>
        <div class="content-list-table">
          <comTable :tableData="tableData">
            <el-table-column prop="a" label="青贮饲料"> </el-table-column>
            <el-table-column prop="b" label="蛋白饲料"> </el-table-column>
            <el-table-column prop="c" label="微量元素"> </el-table-column>
            <el-table-column prop="d" label="维生素添加"> </el-table-column>
            <el-table-column prop="e" label="青贮饲料"> </el-table-column>
            <el-table-column prop="f" label="蛋白饲料"> </el-table-column>
            <el-table-column prop="h" label="微量元素"> </el-table-column>
            <el-table-column prop="i" label="维生素添加"> </el-table-column>
          </comTable>
        </div>
      </div>
      <div class="content-list">
        <div class="content-list-img">
          <div class="img bxcb-img"></div>
          <div class="right-text">
            <div>保险成本/万元</div>
            <div class="number-text">455</div>
          </div>
        </div>
        <div class="content-list-table">
          <comTable :tableData="tableData">
            <el-table-column prop="a" label="青贮饲料"> </el-table-column>
            <el-table-column prop="b" label="蛋白饲料"> </el-table-column>
            <el-table-column prop="c" label="微量元素"> </el-table-column>
            <el-table-column prop="d" label="维生素添加"> </el-table-column>
            <el-table-column prop="e" label="青贮饲料"> </el-table-column>
            <el-table-column prop="f" label="蛋白饲料"> </el-table-column>
            <el-table-column prop="h" label="微量元素"> </el-table-column>
            <el-table-column prop="i" label="维生素添加"> </el-table-column>
          </comTable>
        </div>
      </div>
      <div class="content-list">
        <div class="content-list-img">
          <div class="img yxcb-img"></div>
          <div class="right-text">
            <div>营销成本/万元</div>
            <div class="number-text">455</div>
          </div>
        </div>
        <div class="content-list-table">
          <comTable :tableData="tableData">
            <el-table-column prop="a" label="青贮饲料"> </el-table-column>
            <el-table-column prop="b" label="蛋白饲料"> </el-table-column>
            <el-table-column prop="c" label="微量元素"> </el-table-column>
            <el-table-column prop="d" label="维生素添加"> </el-table-column>
            <el-table-column prop="e" label="青贮饲料"> </el-table-column>
            <el-table-column prop="f" label="蛋白饲料"> </el-table-column>
            <el-table-column prop="h" label="微量元素"> </el-table-column>
            <el-table-column prop="i" label="维生素添加"> </el-table-column>
          </comTable>
        </div>
      </div>
      <div class="content-list">
        <div class="content-list-img">
          <div class="img qtfy-img"></div>
          <div class="right-text">
            <div>其他费用/万元</div>
            <div class="number-text">455</div>
          </div>
        </div>
        <div class="content-list-table">
          <comTable :tableData="tableData">
            <el-table-column prop="a" label="青贮饲料"> </el-table-column>
            <el-table-column prop="b" label="蛋白饲料"> </el-table-column>
            <el-table-column prop="c" label="微量元素"> </el-table-column>
            <el-table-column prop="d" label="维生素添加"> </el-table-column>
            <el-table-column prop="e" label="青贮饲料"> </el-table-column>
            <el-table-column prop="f" label="蛋白饲料"> </el-table-column>
            <el-table-column prop="h" label="微量元素"> </el-table-column>
            <el-table-column prop="i" label="维生素添加"> </el-table-column>
          </comTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import comTable from "@/components/comTable/index.vue";
import config from "@/http/config";
import { getCurrentMonth } from "@/utils/utils";
export default {
  data() {
    return {
      tableData: [
        {
          a: "2016-05-02",
          b: "王小虎",
          c: "上海市普陀",
          d: "xxxx",
          e: "xxxx",
          f: "xxxx",
          g: "xxxx",
          h: "xxxx",
          i: "xxxx",
          j: "xxxx",
          k: "xxxx",
          l: "xxxx",
        },
      ],
    };
  },
  components: {
    comTitle,
    comTable,
  },
  created() {
    this.getAjax();
  },
  methods: {
    getAjax() {
      const params = {
         month: getCurrentMonth(),
      };
      this.$get(config.costCount, params).then((res) => {
        console.log(res, "成本统计");
      });
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
  padding-left: 30px;
  padding-top: 23px;
  box-sizing: border-box;
  overflow: hidden;
  &-list {
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-bottom: 14px;
    &-img {
      display: flex;
      align-items: center;
      width: 220px;
      > .img {
        width: 64px;
        height: 69px;
        background: url("../../../assets/img/cwgl/slsc.png") center no-repeat;
        margin-right: 11px;
      }
      > .rycb-img {
        background: url("../../../assets/img/cwgl/ry.png") center no-repeat;
      }
      > .gncb-img {
        background: url("../../../assets/img/cwgl/niu.png") center no-repeat;
      }
      > .gdzc-img {
        background: url("../../../assets/img/cwgl/cl.png") center no-repeat;
      }
      > .bxcb-img {
        background: url("../../../assets/img/cwgl/bxpt.png") center no-repeat;
      }
      > .yxcb-img {
        background: url("../../../assets/img/cwgl/yx.png") center no-repeat;
      }
      > .qtfy-img {
        background: url("../../../assets/img/cwgl/qtfyzf.png") center no-repeat;
      }
      > .right-text {
        font-size: 16px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #86b2d7;
      }
    }
    &-table {
      width: 1184px;
      height: 80px;
    }
  }
}
.number-text {
  margin-top: 10px;
  font-size: 26px;
  font-family: PangMenZhengDao;
  font-weight: 400;
  color: #2acff1;
}
</style>
