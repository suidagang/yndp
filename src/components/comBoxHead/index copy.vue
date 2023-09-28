<template>
  <div class="com-box-head">
    <div class="title-text">
      <slot name="titleIcon"></slot>

      <span>{{ tabTitle }}</span>
    </div>
    <div class="tab">
      <div
        v-for="(item, index) in tabList"
        :style="{ 'margin-right': `${tabspacing}px` }"
        :class="{ active: item.active }"
        :key="index"
        @click="changeTab(item, index)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
    changeTab(item, index) {
      this.tabList.map((ele) => {
        ele.active = false;
      });
      item.active = true;
      this.$emit("changeTab", index,item);
    },
  },
};
</script>

<style scoped lang="less">
.com-box-head {
  width: 456px;
  height: 34px;
  overflow: hidden;
  background: url("../../assets/img/com_title.png") center no-repeat;
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
    float: right;
    overflow: hidden;
    display: flex;
    font-size: 20px;
    font-family: YouSheBiaoTiHei;
    font-weight: 400;
    color: #6888ad;
    > div {
      cursor: pointer;
    }
    > div.active {
      color: #367ccc;
    }
  }
}
</style>
