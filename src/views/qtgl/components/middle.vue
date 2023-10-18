<template>
  <div class="container-box">
    <comTitle tabTitle="人员管理" />
    <div class="content">
      <div class="content-list" v-for="(item,index) in dataList" :key="index">
        <div class="title">{{item.name}}/人</div>
        <div class="num">{{item.value}}</div>
      </div>
      <!-- <div class="content-list">
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
      </div> -->
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
import config from "@/http/config";
export default {
  data() {
    return {
      dataList:[],
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
      this.$get(config.personalTotal).then((res) => {
        // console.log(res, "人员管理");
        // res.put("vets", 3); //兽医
        //  res.put("guard", 4); //门卫
        //  res.put("admin", 2); //管理人员
        //  res.put("breeder", 4); //饲养员
        //  res.put("cleaner", 2); //饲养员
        const dataList = [
          { name: "兽医", value: res.data.vets },
          { name: "门卫", value: res.data.guard },
          { name: "管理人员", value: res.data.admin },
          { name: "饲养员", value: res.data.breeder },
          { name: "饲养员", value: res.data.cleaner },
        ];
        this.dataList = dataList;
        // this.tableData = res.rows;
      });
    },
  },
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
    color: #a2d1ff;
    padding-top: 9px;
    box-sizing: border-box;
    overflow: hidden;
    .title {
      margin-bottom: 5px;
      overflow: hidden;
    }
    .num {
      font-size: 24px;
      font-family: PangMenZhengDao;
      font-weight: 400;
      color: #00ffe4;

      background: linear-gradient(0deg, #45cdff 0%, #e5f9ff 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
