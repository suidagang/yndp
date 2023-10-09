<template>
  <div class="container">
    <comTitle tabTitle="饲料管理" />
    <div class="content">
      <div class="content-list" v-for="(item, index) in listData" :key="index">
        <div class="img">
          <div>{{ item.total }}</div>
          <div>{{ item.specs }}</div>
        </div>
        <div class="text">{{ item.label }}</div>
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
      listData: [],
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
      this.$get(config.feedTypeCount).then((res) => {
        this.listData = res.data;
      });
    },
  },
};
</script>

<style scoped lang="less">
.content {
  width: 700px;
  height: 380px;
  overflow: hidden;
  padding-left: 15px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  &-list {
    margin-right: 29px;
    // &:nth-of-type(4n){
    //   margin-right: 0;
    // }
    > .img {
      width: 110px;
      height: 110px;
      overflow: hidden;
      background: url("../../../assets/img/sygl/circle.png") center no-repeat;
      margin-bottom: 13px;
      padding-top: 38px;
      box-sizing: border-box;
      > div:nth-of-type(1) {
        margin-bottom: 5px;
      }
      > div {
        font-size: 16px;
        font-family: PangMenZhengDao;
        font-weight: 400;
        color: #00ffe4;
        text-align: center;
        background: linear-gradient(0deg, #45cdff 0%, #e5f9ff 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        overflow: hidden;
      }
    }
    > .text {
      font-size: 14px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #86b2d7;
      text-align: center;
    }
  }
}
</style>
