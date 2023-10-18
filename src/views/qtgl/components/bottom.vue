<template>
  <div class="container-box">
    <comTitle tabTitle="设备管理" />
    <div class="content">
      <div class="content-list" v-for="(item,index) in dataList" :key="index">
        <div class="img"></div>
        <div class="right-text">
          <div>{{item.typeName}}</div>
          <div class="number-text">{{item.num}}<span class="unit-text">个</span></div>
        </div>
      </div>
      <!-- <div class="content-list">
        <div class="img img-sl"></div>
        <div class="right-text">
          <div>饲料拌料机</div>
          <div class="number-text">60<span class="unit-text">个</span></div>
        </div>
      </div>
      <div class="content-list">
        <div class="img img-xd"></div>
        <div class="right-text">
          <div>消毒设施</div>
          <div class="number-text">60<span class="unit-text">个</span></div>
        </div>
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
      dataList:[]
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
      this.$get(config.deviceSta).then((res) => {
        console.log(res, "设备管理");
        // this.tableData = res.rows;
        // const listData = [{
        //   name:res.data[0].typeName,
        //   value:res.data[0].num,
        // },{
        //   name:res.data[1].typeName,
        //   value:res.data[1].num,
        // },{
        //   name:res.data[2].typeName,
        //   value:res.data[2].num,
        // }];
        this.dataList = res.data;
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
  &-list {
    float: left;
    display: flex;
    align-items: center;
    margin-right: 20px;
    > .img {
      width: 124px;
      height: 124px;
      background: url("../../../assets/img/qtgl/cl.png") center no-repeat;
      margin-right: 19px;
    }
    > .img-sl {
      background: url("../../../assets/img/qtgl/jb.png") center no-repeat;
    }
    > .img-xd {
      background: url("../../../assets/img/qtgl/xd.png") center no-repeat;
    }
    > .right-text {
      font-size: 14px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #a2d1ff;
      margin-left: -40px;
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
  }
}
</style>
