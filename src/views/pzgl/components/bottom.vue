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
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
export default {
  data() {
    return {};
  },
  components: {
    comTitle,
  },
  methods: {},
};
</script>

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
}
</style>
