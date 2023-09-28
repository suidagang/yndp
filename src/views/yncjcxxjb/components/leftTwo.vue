<template>
  <div class="container">
    <comTitle
      :tabList="tabList"
      tabTitle="自营牛场简报"
      :tabsvalue = "tabsvalue"
      :tabspacing="20"
      @changeTab="changeTab"
    />
    <div class="content">
      <div class="content-list">
        <div>[</div>
        <div class="content-list-name">能繁母牛</div>
        <div class="content-list-number">{{ nfmnnum }}</div>
        <div>]</div>
      </div>
      <div class="content-list">
        <div>[</div>
        <div class="content-list-name">牛犊统计</div>
        <div class="content-list-number">{{ ndnum }}</div>
        <div>]</div>
      </div>
      <div class="content-list">
        <div>[</div>
        <div class="content-list-name">青牛统计</div>
        <div class="content-list-number">{{ qnnum }}</div>
        <div>]</div>
      </div>
      <div class="content-list">
        <div>[</div>
        <div class="content-list-name">成牛统计</div>
        <div class="content-list-number">{{ cnnum }}</div>
        <div>]</div>
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
      ndnum: 0, //牛犊数
      qnnum: 0, //青年数
      cnnum: 0, //成牛数
      nfmnnum: 0, //能繁母牛数
      tabsvalue:'',//tab默认选中状态
    };
  },
  components: {
    comTitle,
  },
  created() {
    this.getFarmList();
  },
  methods: {
    getFarmList() {
      this.$get(config.farmList).then((res) => {
        let dataList = res.data;
        dataList.map((item, index) => {
          if (index === 0) {
            item.active = true;
          } else {
            item.active = false;
          }
          item.name = item.farmName;
          item.id = item.id+"";
        });
        this.getFarmSelfBriefing(dataList[0].id);
        this.tabList = dataList;
        this.tabsvalue = dataList[0].id;
      });
    },
    getFarmSelfBriefing(id) {
      const params = {
        farmId: id,
      };
      this.$get(config.farmSelfBriefing, params).then((res) => {
        this.ndnum = res.data.ndnum || 0;
        this.qnnum = res.data.qnnum || 0;
        this.cnnum = res.data.cnnum || 0;
        this.nfmnnum = res.data.nfmnnum || 0;
      });
    },
    changeTab(item) {
      this.getFarmSelfBriefing(item.id);
    },
  },
};
</script>

<style scoped lang="less">
.content {
  overflow: hidden;
  padding-top: 39px;
  padding-left: 44px;
  &-list {
    display: flex;
    align-items: center;
    width: 291px;
    height: 16px;
    color: #56abb7;
    font-size: 13px;
    margin-bottom: 32px;
    &-name {
      width: 191px;
      height: 16px;
      font-size: 16px;
      font-family: YouSheBiaoTiHei;
      font-weight: 400;
      color: #a2d1ff;
      margin-left: 10px;
      background: linear-gradient(
        90deg,
        rgba(13, 101, 147, 0.3) 0%,
        rgba(13, 101, 147, 0) 100%
      );
    }
    &-number {
      font-size: 26px;
      font-family: YouSheBiaoTiHei;
      font-weight: 400;
      color: #3699ff;
      margin-right: 12px;
    }
  }
}
</style>
