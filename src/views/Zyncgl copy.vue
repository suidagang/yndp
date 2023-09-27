<template>
  <div id="container">
    <div class="left-change-box" ref="leftBox">
      <!-- <transition-group name="flip-list" tag="div"> -->
        <div
          class="left-change-box-list"
          v-for="(item, index) in listData"
          :class="`num${index}`"
          :key="index"
          @click="changeItem(item)"
        >
          {{ item.name }}
        </div>
      <!-- </transition-group> -->
    </div>
    <div class="zyncgl-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "zyncgl",
  components: {},
  data() {
    return {
      listOldData: [
        {
          name: "牛舍管理",
          path: "/layout/zyncgl/nsgl",
        },
        {
          name: "防疫管理",
          path: "/layout/zyncgl/fygl",
        },
        {
          name: "牛场监控",
          path: "/layout/zyncgl/ncjk",
        },
        {
          name: "饲养管理",
          path: "/layout/zyncgl/sygl",
        },
        {
          name: "配种管理",
          path: "/layout/zyncgl/pzgl",
        },
        {
          name: "牛场管理",
          path: "/layout/zyncgl/ncgl",
        },
        {
          name: "财务管理",
          path: "/layout/zyncgl/cwgl",
        },
        {
          name: "其他管理",
          path: "/layout/zyncgl/qtgl",
        },
      ],
      listData: [
        {
          name: "牛舍管理",
          path: "/layout/zyncgl/nsgl",
        },
        {
          name: "防疫管理",
          path: "/layout/zyncgl/fygl",
        },
        {
          name: "牛场监控",
          path: "/layout/zyncgl/ncjk",
        },
        {
          name: "饲养管理",
          path: "/layout/zyncgl/sygl",
        },
        {
          name: "配种管理",
          path: "/layout/zyncgl/pzgl",
        },
        {
          name: "牛场管理",
          path: "/layout/zyncgl/ncgl",
        },
        {
          name: "财务管理",
          path: "/layout/zyncgl/cwgl",
        },
        {
          name: "其他管理",
          path: "/layout/zyncgl/qtgl",
        },
      ],
    };
  },
  mounted() {
    this.dealActive();
  },
  methods: {
    dealActive() {
      const urlPath = this.$route.path;
      let currentItem = null;
      this.listData.forEach((item, index) => {
        if (item.path === urlPath) {
          currentItem = item;
        }
      });
      this.changeItem(currentItem, true);
    },
    getIndex(path) {
      let resultIndex = 0;
      this.listOldData.forEach((ele, index) => {
        if (ele.path === path) {
          resultIndex = index;
        }
      });
      return resultIndex;
    },
    changeItem(item, flag) {
      let currentIndex = this.getIndex(item.path);
      const listData = JSON.parse(JSON.stringify(this.listOldData));
      listData.splice(currentIndex, 1);
      listData.splice(3, 0, item);
      this.listData = listData;
      this.$refs.leftBox.scrollTop = 0;
      if (!flag) {
        this.$router.push(item.path);
      }
    },
  },
};
</script>
<style lang="less" scoped>
#container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.left-change-box {
  position: absolute;
  left: 0;
  top: 122px;
  width: 349px;
  height: 800px;
  background: url("../assets/img/zyncgl/com_left_bg.png") center no-repeat;
  padding-top: 69px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
  &-list {
    height: 64px;
    font-size: 16px;
    font-weight: 500;
    color: #aec9ff;
    line-height: 64px;
    background: url("../assets/img/zyncgl/com_left_list_bg.png") right no-repeat;
    font-family: Source Han Sans CN;
    text-align: right;
    padding-right: 23px;
    box-sizing: border-box;
    margin-bottom: 40px;
    cursor: pointer;
    &.num0 {
      width: 166px;
    }
    &.num1 {
      width: 204px;
    }
    &.num2 {
      width: 226px;
    }
    &.num3 {
      width: 250px;
      height: 80px;
      line-height: 80px;
      text-align: right;
      padding-right: 23px;
      box-sizing: border-box;
      margin-bottom: 40px;
      cursor: pointer;
      background: url("../assets/img/zyncgl/com_left_list_active.png") right
        no-repeat;
      > span {
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #ffffff;
        background: linear-gradient(0deg, #fd9f53 0%, #ffffff 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    &.num4 {
      width: 226px;
    }
    &.num5 {
      width: 204px;
    }
    &.num6 {
      width: 166px;
    }
    &.num7 {
      width: 139px;
    }
  }
}
.zyncgl-content {
  width: 100%;
  height: 100%;
  margin-left: 350px;
  overflow: hidden;
}
.flip-list-move {
  transition: transform 1s;
}
</style>
