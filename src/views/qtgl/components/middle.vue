<template>
  <div class="container-box">
    <comTitle tabTitle="人员管理" />
    <div class="content">
      <div class="content-list">
        <div class="title">兽医/人</div>
        <div class="num">1000</div>
      </div>
      <div class="content-list">
        <div class="title">兽医/人</div>
        <div class="num">1000</div>
      </div>
      <div class="content-list">
        <div class="title">兽医/人</div>
        <div class="num">1000</div>
      </div>
      <div class="content-list">
        <div class="title">兽医/人</div>
        <div class="num">1000</div>
      </div>
      <div class="content-list">
        <div class="title">兽医/人</div>
        <div class="num">1000</div>
      </div>
      <div class="content-list">
        <div class="title">兽医/人</div>
        <div class="num">1000</div>
      </div>
      <div class="content-list">
        <div class="title">兽医/人</div>
        <div class="num">1000</div>
      </div>
      <div class="content-list">
        <div class="title">兽医/人</div>
        <div class="num">1000</div>
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
  padding-left: 49px;
  padding-top: 33px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  &-list {
    width: 158px;
    height: 72px;
    border: 2px solid;
    border-image: linear-gradient(180deg, #134397, #000000) 10 10;
    background: linear-gradient(180deg, #0b3070 0%, rgba(18, 43, 87, 0) 100%);
    margin-right: 22px;
    text-align: center;
    font-size: 14px;
    font-family: Source Han Sans SC;
    font-weight: bold;
    color: #A2D1FF;
    padding-top: 9px;
    box-sizing: border-box;
    overflow: hidden;
    .title{
      margin-bottom: 5px;
      overflow: hidden;
    }
    .num{
      font-size: 24px;
      font-family: PangMenZhengDao;
      font-weight: 400;
      color: #00FFE4;

      background: linear-gradient(0deg, #45CDFF 0%, #E5F9FF 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
