<template>
  <div class="container-box">
    <comTitle  tabTitle="肉牛统计" />
    <div class="container-box-content">
      <div class="hint-box">
        <div class="img"></div>
        <div>距离上次称重已有80天，请按时称重..</div>
      </div>
      <div class="rect-box">
        <div class="rect-img"></div>
        <div class="rect-right">
          <div class="rect-right-list">
            <div class="name">总数量/头</div>
            <div class="num">20</div>
          </div>
          <div class="rect-right-list">
            <div class="name">自养/合作代养</div>
            <div class="num">5/15</div>
          </div>
          <div class="rect-right-list">
            <div class="name">种类/种</div>
            <div class="num">20</div>
          </div>
          <div class="rect-right-list">
            <div class="name">总重量/吨</div>
            <div class="num">50</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comTitle from '@/components/comBoxHead/index.vue'
export default {
  data() {
    return {
    
    }
  },
  components: {
    comTitle
  },
  methods:{

  }
}
</script>

<style scoped lang="less">
  .container-box{
    width: 500px;
    overflow: hidden;
    &-content{
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      padding-left: 30px;
      padding-top: 8px;
      .hint-box{
        width: 100%;
        font-size: 14px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #FF7200;
        display: flex;
        align-items: center;
        >.img{
          height: 31px;
          width: 31px;
          margin-right: 7px;
          background: url("../../../assets/img/hznhgl/tx.png") center no-repeat;
        }
      }
      .rect-box{
        width: 464px;
        height: 200px;
        border: 2px solid;
        border-image: linear-gradient(0deg, #134397, #000000) 10 10;
        background: linear-gradient(0deg, #0B3070 0%, rgba(18,43,87,0) 100%);
        display: flex;
        align-items: center;
        .rect-img{
          width: 160px;
          height: 137px;
          background: url("../../../assets/img/hznhgl/niu.png") center no-repeat;
          margin-left: 23px;
        }
        .rect-right{
          width: 226px;
          margin-left: 29px;
          &-list:last-of-type{
            border: 0;
          }
          &-list{
            border-bottom: 1px dashed #A2D1FF;
            font-size: 16px;
            font-family: Source Han Sans SC;
            font-weight: 400;
            color: #A2D1FF;
            display: flex;
            align-items: center;
            height: 45px;
            line-height: 45px;
            .name{
              width: 162px;
            }
            .num{
              font-size: 24px;
              font-family: PangMenZhengDao;
              font-weight: 400;
              color: #00FFE4;
              background: linear-gradient(0deg, #45CDFF 0%, #E5F9FF 100%);
              background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }
    }
  }
  
</style>
