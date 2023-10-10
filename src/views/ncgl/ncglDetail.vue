<template>
  <div class="ncgl-detail">
    <div class="ncgl-detail-l">
      <comTitle tabTitle="牛只详细信息" />
      <div class="circle-box">
        <div class="circle-box-niu"></div>
        <div class="list-title">
          <div class="list-title-circle"></div>
          <div>云岭肉牛</div>
        </div>
        <div class="rect-list">
          <div class="left-text">月龄</div>
          <div class="right-text">8月</div>
        </div>
        <div class="rect-list csrq-list">
          <div class="left-text">出生日期</div>
          <div class="right-text">2022.06.25</div>
        </div>
        <div class="rect-list ly-list">
          <div class="left-text">来源</div>
          <div class="right-text">采购</div>
        </div>
        <div class="rect-list zk-list">
          <div class="left-text">状况</div>
          <div class="right-text">健康</div>
        </div>
        <div class="rect-list ebh-list">
          <div class="left-text">耳标号</div>
          <div class="right-text">3254</div>
        </div>
        <div class="rect-list bh-list">
          <div class="left-text">编号</div>
          <div class="right-text">a526776898000</div>
        </div>
        <div class="rect-list xszt-list">
          <div class="left-text">销售状态</div>
          <div class="right-text">待售</div>
          <div class="circle"></div>
        </div>
        <div class="rect-list tbzt-list">
          <div class="left-text">投保状态</div>
          <div class="right-text">未投保</div>
          <div class="circle"></div>
        </div>
        <div class="rect-list dkzt-list">
          <div class="left-text">贷款状态</div>
          <div class="right-text">已抵押</div>
          <div class="circle"></div>
        </div>
      </div>
      <div class="rect-detail-box">
        <div class="rect-detail-box-list">
          <span>年龄：</span>
          <span class="right">8月龄</span>
        </div>
        <div class="rect-detail-box-list">
          <span>体重：</span>
          <span class="right">40kg</span>
        </div>
        <div class="rect-detail-box-list">
          <span>疾病情况：</span>
          <span class="right">无病史</span>
        </div>
        <div class="rect-detail-box-list">
          <span>免疫情况：</span>
          <span class="right">已接种</span>
        </div>
        <div class="rect-detail-box-list">
          <span>养殖溯源记录：</span>
          <span class="right">详情</span>
        </div>
      </div>
    </div>
    <div class="ncgl-detail-r">
      <div class="ncgl-detail-r-list">
        <div class="img"></div>
        <div class="bottom-text">
          <span>右侧图</span>
          <span class="r">拍摄于2023.07.28</span>
        </div>
      </div>
      <div class="ncgl-detail-r-list">
        <div class="img"></div>
        <div class="bottom-text">
          <span>右侧图</span>
          <span class="r">拍摄于2023.07.28</span>
        </div>
      </div>
      <div class="ncgl-detail-r-list">
        <div class="img"></div>
        <div class="bottom-text">
          <span>右侧图</span>
          <span class="r">拍摄于2023.07.28</span>
        </div>
      </div>
      <div class="ncgl-detail-r-list">
        <div class="img"></div>
        <div class="bottom-text">
          <span>右侧图</span>
          <span class="r">拍摄于2023.07.28</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from "@/components/comBoxHead/index.vue";
export default {
  data() {
    return {};
  },
  components: {
    comTitle,
  },
  methods:{
    open(data){
      console.log(data,'------data')
    }
  }
};
</script>

<style scoped lang="less">
.ncgl-detail {
  width: 100%;
  height: 100%;
  padding-top: 58px;
  padding-left: 30px;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  &-l {
    height: 100%;
    width: 1200px;
    overflow: hidden;
    position: relative;
    .rect-detail-box {
      width: 263px;
      height: 221px;
      background: #012977;
      position: absolute;
      left: 950px;
      bottom: 150px;
      padding: 30px 0 0 37px;
      box-sizing: border-box;
      overflow: hidden;
      &-list {
        font-size: 15px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #00f0ff;
        margin-bottom: 15px;
        .right {
          font-size: 15px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #a2d1ff;
        }
      }
    }
    .circle-box {
      position: relative;
      width: 698px;
      height: 697px;
      background: url("../../assets/img/ncgl/ty_44.png") center no-repeat;
      margin-top: 50px;
      margin-left: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      &-niu {
        width: 436px;
        height: 311px;
        background: url("../../assets/img/ncgl/niu.png") center no-repeat;
      }
      .list-title {
        position: absolute;
        left: 571px;
        top: 70px;
        font-size: 22px;
        font-family: YouSheBiaoTiHei;
        font-weight: 400;
        color: #202639;
        text-shadow: 1px 2px 8px rgba(13, 24, 45, 0.26);

        background: linear-gradient(0deg, #8bc7ff 0%, #ffffff 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        display: flex;
        align-items: center;
        &-circle {
          width: 10px;
          height: 10px;
          background: #006fff;
          border-radius: 50%;
          margin-right: 18px;
        }
      }
      .rect-list {
        position: absolute;
        left: 622px;
        top: 110px;
        width: 279px;
        height: 45px;
        background: url("../../assets/img/ncgl/rect_1004.png") center no-repeat;
        padding-left: 35px;
        box-sizing: border-box;
        line-height: 45px;
        display: flex;
        align-items: center;
        &.csrq-list {
          left: 653px;
          top: 165px;
        }
        &.ly-list {
          left: 673px;
          top: 220px;
        }
        &.zk-list {
          left: 687px;
          top: 275px;
        }
        &.ebh-list {
          left: 691px;
          top: 330px;
        }
        &.bh-list {
          left: 687px;
          top: 385px;
        }
        &.xszt-list {
          left: 673px;
          top: 440px;
        }
        &.tbzt-list {
          left: 650px;
          top: 495px;
        }
        &.dkzt-list {
          left: 617px;
          top: 550px;
        }
        .left-text {
          font-size: 15px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #006fff;
          margin-right: 18px;
        }
        .right-text {
          font-size: 18px;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #a2d1ff;
        }
        .circle {
          width: 10px;
          height: 10px;
          background: #ff7723;
          border-radius: 50%;
          margin-left: 18px;
        }
      }
    }
  }
  &-r {
    padding-left: 40px;
    box-sizing: border-box;
    overflow: hidden;
    &-list {
      width: 284px;
      height: 201px;
      background: url("../../assets/img/ncgl/rect_1006.png") center no-repeat;
      overflow: hidden;
      padding: 15px 0 0 16px;
      box-sizing: border-box;
      margin-bottom: 14px;
      .img {
        width: 254px;
        height: 143px;
        background: pink;
      }
      .bottom-text{
        margin-top: 8px;
        overflow: hidden;
        font-size: 14px;
        width: 100%;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #98BDFD;
        display: flex;
        align-items: center;
        justify-content: space-around;
        >.r{
          text-align: right;
        }
      }
    }
  }
}
</style>
