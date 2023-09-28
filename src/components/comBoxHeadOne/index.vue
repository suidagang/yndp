<template>
  <div class="com-box-head">
    <div class="title-text">
      <slot name="titleIcon"></slot>

      <span>{{ tabTitle }}</span>
    </div>
    <div class="tab">
      <el-tabs v-model="editableTabsValue" @tab-click="tabClick">
        <el-tab-pane
          :key="item.name"
          v-for="item in tabList"
          :label="item.name"
          :name="item.name"
        >
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editableTabsValue: "测试一",
    };
  },
  props: {
    tabList: {
      type: Array,
      default() {
        return [];
      },
    },
    tabspacing: {
      type: [Number, String],
      default: 0,
    },
    tabTitle: {
      type: String,
      require: true,
    },
  },
  mounted() {},
  methods: {
    tabClick(tab) {
      const result = this.tabList.filter((item)=>{
        return item.name === tab.name;
      });
      this.$emit("changeTab", result[0]);
    },
  },
};
</script>

<style scoped lang="less">
/deep/ .el-tabs__nav-wrap::after {
  height: 0 !important;
}
/deep/ .el-tabs__active-bar {
  background: transparent !important;
}
/deep/ .el-tabs__item {
  font-size: 20px;
  font-family: YouSheBiaoTiHei;
  font-weight: 400;
  color: #6888ad;
  height: 34px;
  line-height: 34px;
}
/deep/ .el-tabs__item.is-active {
  font-size: 20px;
  font-family: YouSheBiaoTiHei;
  font-weight: 400;
  color: #367ccc;
}
/deep/ .el-tabs__nav-next,
/deep/ .el-tabs__nav-prev {
  font-size: 20px;
  line-height: 34px;
}
/deep/ .el-tabs__header{
  margin:0;
}
.com-box-head {
  width: 100%;
  height: 34px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: url("../../assets/img/com_title.png") left no-repeat;
  .title-text {
    vertical-align: middle;
    float: left;
    font-size: 22px;
    font-family: YouSheBiaoTiHei;
    font-weight: 400;
    color: #202639;
    text-shadow: 1px 2px 8px rgba(13, 24, 45, 0.26);

    background: linear-gradient(0deg, #8bc7ff 0%, #ffffff 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 49px;
    > span {
      vertical-align: top;
    }
  }
  > .tab {
    flex: 1;
    overflow: hidden;

    margin-left: 40px;
    > div {
      cursor: pointer;
    }
    > div.active {
      color: #367ccc;
    }
  }
}
</style>
