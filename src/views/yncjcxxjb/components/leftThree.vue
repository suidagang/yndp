<template>
  <div class="container">
    <comTitle
      :tabList="tabList"
      :tabsvalue="tabsvalue"
      tabTitle="合作养殖汇总简报"
      @changeTab="changeTab"
    />
    <div class="content">
      <div class="content-list">
        <div class="img img-cl"></div>
        <div class="content-list-right">
          <div class="name">存栏总数/个</div>
          <div class="number">{{ clnum }}</div>
        </div>
      </div>
      <div class="content-list">
        <div class="img img-cmn"></div>
        <div class="content-list-right">
          <div class="name">能繁母牛数/头</div>
          <div class="number">{{ nfmnnum }}</div>
        </div>
      </div>
      <div class="content-list">
        <div class="img img-llzl"></div>
        <div class="content-list-right">
          <div class="name">存栏总重量/吨</div>
          <div class="number">{{ clzzl }}</div>
        </div>
      </div>
      <div class="content-list">
        <div class="img img-slsc"></div>
        <div class="content-list-right">
          <div class="name">饲料剩余重量/吨</div>
          <div class="number">{{ slsyzl }}</div>
        </div>
      </div>
      <div class="content-list">
        <div class="img img-nd"></div>
        <div class="content-list-right">
          <div class="name">牛犊数/头</div>
          <div class="number">{{ ndnum }}</div>
        </div>
      </div>
      <div class="content-list">
        <div class="img img-ycn"></div>
        <div class="content-list-right">
          <div class="name">青牛数/头</div>
          <div class="number">{{ qnnum }}</div>
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
      tabList: [],
      clnum: 0, //存栏
      clzzl: 0, //存栏总重量
      ndnum: 0, // 牛犊数
      nfmnnum: 0, //能繁母牛
      qnnum: 0, //青牛数
      slsyzl: 0, // 饲料剩余重量
      tabsvalue: "", //tab默认选中状态
    };
  },
  components: {
    comTitle,
  },
  created() {
    this.getCattleMillList();
  },
  methods: {
    getCattleMillList() {
      this.$get(config.cattleMillList).then((res) => {
        let dataList = res.data;
        dataList.map((item, index) => {
          if (index === 0) {
            item.active = true;
          } else {
            item.active = false;
          }
          item.name = item.millName;
          item.id = item.id+"";
        });
        this.getCooperateBriefing(dataList[0].id);
        this.tabList = dataList;
        this.tabsvalue = dataList[0].id;
      });
    },
    getCooperateBriefing(id) {
      const params = {
        cooperateId: id,
      };
      this.$get(config.cooperateBriefing, params).then((res) => {
        this.clnum = res.data.clnum || 0;
        this.clzzl = res.data.clzzl || 0;
        this.ndnum = res.data.ndnum || 0;
        this.nfmnnum = res.data.nfmnnum || 0;
        this.qnnum = res.data.qnnum || 0;
        this.slsyzl = res.data.slsyzl || 0;
      });
    },
    changeTab(item) {
      this.getCooperateBriefing(item.id);
    },
  },
};
</script>

<style scoped lang="less">
.container {
  width: 465px;
  overflow: hidden;
}
.content {
  width: 100%;
  overflow: hidden;
  overflow: hidden;
  padding-top: 25px;
  padding-left: 8px;
  &-list {
    width: 50%;
    float: left;
    overflow: hidden;
    display: flex;
    align-items: center;
    > .img {
      width: 98px;
      height: 98px;
    }
    > .img-cl {
      background: url("../../../assets/img/yncjcxxjb/cl.png") center no-repeat;
    }
    > .img-cmn {
      background: url("../../../assets/img/yncjcxxjb/cmn.png") center no-repeat;
    }
    > .img-llzl {
      background: url("../../../assets/img/yncjcxxjb/llzl.png") center no-repeat;
    }
    > .img-slsc {
      background: url("../../../assets/img/yncjcxxjb/slsc.png") center no-repeat;
    }
    > .img-nd {
      background: url("../../../assets/img/yncjcxxjb/nd.png") center no-repeat;
    }
    > .img-ycn {
      background: url("../../../assets/img/yncjcxxjb/ycn.png") center no-repeat;
    }
    &-right {
      margin-top: -7px;
      overflow: hidden;
      > .name {
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #a2d1ff;
        margin-bottom: 7px;
      }
      > .number {
        font-size: 26px;
        font-family: PangMenZhengDao;
        font-weight: 400;
        color: #00ffe4;

        background: linear-gradient(0deg, #45cdff 0%, #e5f9ff 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>
