<template>
  <div class="container-box">
    <comTitle tabTitle="防疫管理" />
    <div class="content">
      <div class="table-box">
        <div class="table-box-title">
          <div class="one">牛编号</div>
          <div class="two">防疫时间</div>
          <div class="three">是否已用药</div>
          <div class="four">药品类型</div>
        </div>
        <div class="table-box-body">
          <div v-for="(item, index) in listData" :key="index">
            <div class="one">{{ item.id }}</div>
            <div class="two">{{ item.wysj }}</div>
            <div class="three">{{ item.wysl }}</div>
            <div class="four">{{ item.fkwt }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
export default {
  data() {
    return {
      listData: [
        {
          id: "1",
          wysj: "2023.07.18 14:26",
          wysl: "5kg",
          fkwt: "xxxxxxxxxxxx",
        },
        {
          id: "2",
          wysj: "2023.07.18 14:26",
          wysl: "5kg",
          fkwt: "xxxxxxxxxxxx",
        },
        {
          id: "3",
          wysj: "2023.07.18 14:26",
          wysl: "5kg",
          fkwt: "xxxxxxxxxxxx",
        },
        {
          id: "4",
          wysj: "2023.07.18 14:26",
          wysl: "5kg",
          fkwt: "xxxxxxxxxxxx",
        },
        {
          id: "5",
          wysj: "2023.07.18 14:26",
          wysl: "5kg",
          fkwt: "xxxxxxxxxxxx",
        },
        {
          id: "6",
          wysj: "2023.07.18 14:26",
          wysl: "5kg",
          fkwt: "xxxxxxxxxxxx",
        },
      ],
    };
  },
  components: {
    comTitle,
  },
  methods: {},
};
</script>

<style scoped lang="less">
.container-box {
  width: 1027px;
  overflow: hidden;
}
.content {
  width: 100%;
  padding-left: 49px;
  padding-top: 39px;
  box-sizing: border-box;
  overflow: hidden;
  .table-box {
    width: 540px;
    height: 264px;
    box-sizing: border-box;
    overflow: hidden;
    background: linear-gradient(
      90deg,
      rgba(2, 54, 111, 0.1) 1%,
      rgba(0, 114, 255, 0.2) 54%,
      rgba(2, 54, 111, 0.1) 99%
    );
    &-title {
      padding-left: 28px;
      box-sizing: border-box;
      width: 540px;
      height: 40px;
      background: linear-gradient(
        90deg,
        rgba(2, 54, 111, 0.1) 1%,
        rgba(0, 114, 255, 0.2) 54%,
        rgba(2, 54, 111, 0.1) 99%
      );
      display: flex;
      align-items: center;
      font-size: 14px;
      font-family: Source Han Sans SC;
      font-weight: bold;
      color: #b7c9e5;
      .one {
        width: 110px;
      }
      .two {
        width: 165px;
      }
      .three {
        width: 100px;
      }
    }
    &-body {
      overflow: hidden;
      padding-left: 28px;
      box-sizing: border-box;
      padding-top: 8px;
      >div {
        height: 34px;
        line-height: 34px;
        width: 977px;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #86B2D7;
        .one {
          width: 110px;
        }
        .two {
          width: 165px;
        }
        .three {
          width: 100px;
        }
      }
    }
  }
}
</style>
