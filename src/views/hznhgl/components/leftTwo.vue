<template>
  <div class="container-box">
    <comTitle tabTitle="饲料管理" />
    <div class="content">
      <div class="content-list">
        <div class="content-list-name">XXX饲料</div>
        <div class="content-list-num">21</div>
      </div>
      <div class="content-list">
        <div class="content-list-name">XXX饲料</div>
        <div class="content-list-num">21</div>
      </div>
      <div class="content-list">
        <div class="content-list-name">XXX饲料</div>
        <div class="content-list-num">1</div>
      </div>
      <div class="content-list">
        <div class="content-list-name">XXX饲料</div>
        <div class="content-list-num">21</div>
      </div>
      <div class="content-list">
        <div class="content-list-name">XXX饲料</div>
        <div class="content-list-num">21</div>
      </div>
      <div class="content-list">
        <div class="content-list-name">XXX饲料</div>
        <div class="content-list-num">21</div>
      </div>
    </div>
    <div class="table-box">
      <div class="table-box-title">
        <div class="one">饲料名称</div>
        <div class="two">采购数量吨</div>
        <div class="three">采购日期</div>
        <div class="four">采购人</div>
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
  width: 500px;
  overflow: hidden;
}
.content {
  padding-top: 28px;
  padding-left: 34px;
  overflow: hidden;
  box-sizing: border-box;
  &-list {
    float: left;
    width: 170px;
    height: 67px;
    background: url("../../../assets/img/tsxx_bg.png") center no-repeat;
    display: flex;
    align-items: center;
    margin-right: 5px;
    margin-bottom: 3px;
    overflow: hidden;
    > div {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #aec9ff;
    }
    &-name {
      width: 82px;
      margin-left: 31px;
    }
    &-num {
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
.table-box {
    margin-top: 20px;
    margin-left: 34px;
    overflow: hidden;
    box-sizing: border-box;
    width: 464px;
    height: 266px;
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
</style>
