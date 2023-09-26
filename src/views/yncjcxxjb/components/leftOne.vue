<template>
  <div class="container">
    <comTitle tabTitle="财务汇总简报" />
    <div class="content">
      <div class="content-list">
        <div class="img"></div>
        <div class="right-text">
          <div>收入统计</div>
          <div class="number-text">
            {{ income }}<span class="unit-text">元</span>
          </div>
        </div>
      </div>
      <div class="content-list">
        <div class="img zc-img"></div>
        <div class="right-text">
          <div>支出统计</div>
          <div class="number-text">
            {{ cost }}<span class="unit-text">元</span>
          </div>
        </div>
      </div>
      <div class="content-list">
        <div class="img cl-img"></div>
        <div class="right-text">
          <div>存栏统计</div>
          <div class="number-text">
            {{ onHand }}<span class="unit-text">个</span>
          </div>
        </div>
      </div>
      <div class="content-list">
        <div class="img sl-img"></div>
        <div class="right-text">
          <div>饲料库存统计</div>
          <div class="number-text">
            {{ feed }}<span class="unit-text">吨</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import config from "@/http/config";
export default {
  data() {
    return {
      income: 0,
      cost: 0,
      onHand: 0,
      feed: 0,
    };
  },
  components: {
    comTitle,
  },
  created() {
    this.getAjax();
  },
  methods: {
    getAjax() {
      this.$get(config.yncjcxxjbCwhztj).then((res) => {
        console.log(res, "--res");
        this.income = res.data.income;
        this.feed = res.data.feed;
        this.onHand = res.data.onHand;
        this.cost = res.data.cost;
      });
    },
  },
};
</script>

<style scoped lang="less">
.content {
  width: 100%;
  padding-left: 39px;
  padding-top: 43px;
  box-sizing: border-box;
  overflow: hidden;
  &-list {
    float: left;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    width: 37%;
    > .img {
      width: 58px;
      height: 60px;
      background: url("../../../assets/img/srtj.png") center no-repeat;
      margin-right: 19px;
    }
    > .zc-img {
      background: url("../../../assets/img/zclx.png") center no-repeat;
    }
    > .zc-img {
      background: url("../../../assets/img/zclx.png") center no-repeat;
    }
    > .sl-img {
      background: url("../../../assets/img/slcl.png") center no-repeat;
    }
    > .right-text {
      font-size: 14px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #a2d1ff;
    }
  }
}
.number-text {
  margin-top: 14px;
  font-size: 26px;
  font-family: PangMenZhengDao;
  font-weight: 400;
  color: #00ffe4;
  background: linear-gradient(0deg, #45cdff 0%, #e5f9ff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.unit-text {
  font-size: 14px;
}
</style>
