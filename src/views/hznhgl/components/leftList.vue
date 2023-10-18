<template>
  <div class="left-list">
    <div class="left-list-title">
      <div class="icon"></div>
      <div class="name">农户列表</div>
    </div>
    <div class="left-list-search">
      <div class="icon"></div>
      <input type="text" placeholder="输入农户信息" />
      <div class="search-btn">搜索</div>
    </div>
    <div
      class="left-list-box"
      v-for="(item, index) in nhList"
      :key="index"
      @click="choiceItem(item)"
      :class="{ active: item.active }"
    >
      {{ item.millName }}
    </div>
  </div>
</template>

<script>
import config from "@/http/config";
import { hznhglStore } from "@/store/hznhgl";
export default {
  data() {
    return {
      nhList: [],
    };
  },
  created() {},
  mounted() {
    const { id ,nhList} = hznhglStore();
    if (id) {
      this.nhList = nhList;
    } else {
      this.getAjax();
    }
  },
  methods: {
    getAjax() {
      this.$get(config.hznhcattleMillList).then((res) => {
        res.rows.map((item) => {
          item.active = false;
        });
        this.nhList = res.rows;
        const hznhgl = hznhglStore();
        hznhgl.setNhList(this.nhList);
      });
    },
    async choiceItem(item) {
      const hznhgl = hznhglStore();

      this.nhList.map((ele) => {
        ele.active = false;
      });
      item.active = true;
      await hznhgl.setId(item.id);
    },
  },
};
</script>

<style scoped lang="less">
.left-list {
  width: 230px;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 17px 0 0 17px;
  box-sizing: border-box;
  background: #0a1a37;
  border: 1px solid #003665;
  opacity: 0.7;
  &-title {
    display: flex;
    align-items: center;
    overflow: hidden;
    > .icon {
      width: 22px;
      height: 20px;
      background: url("../../../assets/img/hznhgl/nhhs.png") center no-repeat;
      margin-right: 9px;
    }
    > .name {
      font-size: 20px;
      font-weight: 400;
      color: #ffffff;
      text-shadow: 1px 2px 8px rgba(13, 24, 45, 0.26);

      background: linear-gradient(0deg, #8bc7ff 0%, #ffffff 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &-search {
    position: relative;
    margin-top: 20px;
    overflow: hidden;
    width: 192px;
    height: 30px;
    background: rgba(0, 53, 103, 0.5);
    border-radius: 15px;
    > input {
      position: absolute;
      left: 30px;
      height: 30px;
      width: 100px;
      background: rgba(0, 122, 255, 0);
      outline: none;
      font-size: 12px;
      border: none;
      color: #ffffff;
      &::placeholder {
        font-size: 12px;
        font-weight: 400;
        color: #a2d1ff;
      }
    }
    .icon {
      position: absolute;
      left: 12px;
      top: 9px;
      height: 13px;
      width: 13px;
      background: url("../../../assets/img/hznhgl/search.png") center no-repeat;
    }
    .search-btn {
      position: absolute;
      right: 0;
      width: 56px;
      height: 30px;
      background: rgba(21, 93, 175, 0.6);
      border-radius: 15px;
      font-size: 13px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      line-height: 30px;
      text-align: center;
      cursor: pointer;
    }
  }
  &-box {
    width: 189px;
    height: 40px;
    background: #021130;
    border: 1px solid #003665;
    margin-top: 15px;
    overflow: hidden;
    line-height: 40px;
    box-sizing: border-box;
    padding-left: 19px;
    font-size: 14px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #ffffff;
  }
}
.active {
  border: 1px solid #d07933;
  background: linear-gradient(
    -90deg,
    rgba(255, 114, 0, 0.2) 0%,
    rgba(255, 114, 0, 0.2) 100%
  );
}
</style>
