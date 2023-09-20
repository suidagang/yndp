<template>
  <div class="container">
    <comTitle  :tabList='tabList' tabTitle="合作养殖汇总简报" :tabspacing="26" @changeTab = "changeTab" />
    <div class="content">
      <div class="content-list">
        <div class="img img-cl"></div>
        <div class="content-list-right">
          <div class="name">存栏总数/个</div>
          <div class="number">1000</div>
        </div>
      </div>
      <div class="content-list">
        <div class="img img-cmn"></div>
        <div class="content-list-right">
          <div class="name">能繁母牛数/头</div>
          <div class="number">1000</div>
        </div>
      </div>
      <div class="content-list">
        <div class="img img-llzl"></div>
        <div class="content-list-right">
          <div class="name">存栏总重量/吨</div>
          <div class="number">1000</div>
        </div>
      </div>
      <div class="content-list">
        <div class="img img-slsc"></div>
        <div class="content-list-right">
          <div class="name">饲料剩余重量/吨</div>
          <div class="number">1000</div>
        </div>
      </div>
      <div class="content-list">
        <div class="img img-nd"></div>
        <div class="content-list-right">
          <div class="name">牛犊数/头</div>
          <div class="number">1000</div>
        </div>
      </div>
      <div class="content-list">
        <div class="img img-ycn"></div>
        <div class="content-list-right">
          <div class="name">青牛数/头</div>
          <div class="number">1000</div>
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
      tabList: [
        { name: "A合作社", active: true },
        { name: "B合作社", active: false }
      ],
    }
  },
  components: {
    comTitle
  },
  methods:{
    changeTab(num){
      console.log(num,'---num')
    }
  }
}
</script>

<style scoped lang="less">
  .container{
    width: 465px;
    overflow: hidden;
  }
  .content{
    width: 100%;
    overflow: hidden;
    overflow: hidden;
    padding-top: 25px;
    padding-left: 8px;
    &-list{
      width: 50%;
      float: left;
      overflow: hidden;
      display: flex;
      align-items: center;
      >.img{
        width: 98px;
        height: 98px;
      }
      >.img-cl{
        background: url("../../../assets/img/yncjcxxjb/cl.png") center no-repeat;
      }
      >.img-cmn{
        background: url("../../../assets/img/yncjcxxjb/cmn.png") center no-repeat;
      }
      >.img-llzl{
        background: url("../../../assets/img/yncjcxxjb/llzl.png") center no-repeat;
      }
      >.img-slsc{
        background: url("../../../assets/img/yncjcxxjb/slsc.png") center no-repeat;
      }
      >.img-nd{
        background: url("../../../assets/img/yncjcxxjb/nd.png") center no-repeat;
      }
      >.img-ycn{
        background: url("../../../assets/img/yncjcxxjb/ycn.png") center no-repeat;
      }
      &-right{
        margin-top: -7px;
        overflow: hidden;
        >.name{
          font-size: 14px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #A2D1FF;
          margin-bottom: 7px;
        }
        >.number{
          font-size: 26px;
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
</style>
