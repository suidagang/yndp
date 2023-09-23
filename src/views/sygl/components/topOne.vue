<template>
  <div class="container">
    <comTitle tabTitle="预计使用周期" />
    <div class="content">
      <div class="content-list" v-for="(item,index) in listData" :key="index">
        <div class="img">
          <div>457.36</div>
          <div>吨</div>
        </div>
        <div class="text">XXXX饲料</div>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
export default {
  data() {
    return {
      listData:[1,2,3,4,5,6,7,8]
    };
  },
  components: {
    comTitle,
  },
  methods: {},
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
  &-list{
    margin-right: 29px;
    // &:nth-of-type(4n){
    //   margin-right: 0;
    // }
    >.img{
      width: 110px;
      height: 110px;
      overflow: hidden;
      background: url("../../../assets/img/sygl/circle.png") center no-repeat;
      margin-bottom: 13px;
      padding-top: 38px;
      box-sizing: border-box;
      >div:nth-of-type(1){
        margin-bottom: 5px;
      }
      >div{
        font-size: 16px;
        font-family: PangMenZhengDao;
        font-weight: 400;
        color: #00FFE4;
        text-align: center;
        background: linear-gradient(0deg, #45CDFF 0%, #E5F9FF 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        overflow: hidden;
      }
    }
    >.text{
      font-size: 14px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #86B2D7;
      text-align: center;
    }
  }
}
</style>
