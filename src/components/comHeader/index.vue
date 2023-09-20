<template>
  <div class="comheader">
    <div class="comheader-title">智慧养牛数字供应链平台</div>
    <div class="comheader-tab">
      <div class="comheader-tab-one" :class="{'tab-active':chioceTab===1}" @click="changeTab(1)">
        <div class="text">养牛场基础信息简报</div>
        <div class="active"></div>
      </div>
      <div class="comheader-tab-two" :class="{'tab-active':chioceTab===2}" @click="changeTab(2)">
        <div class="text">自营牛场管理</div>
        <div class="active"></div>
      </div>
      <div class="comheader-tab-three" :class="{'tab-active':chioceTab===3}" @click="changeTab(3)">
        <div class="text">合作农户管理</div>
        <div class="active"></div>
      </div>
      
    </div>
    <div class="date-box">
      <div class="weather">
        <div>雷阵雨</div>
        <div>2020.10.24</div>
      </div>
      <div class="line"></div>
      <div class="date">14:34</div>
    </div>
    <div class="sys-setting">
      <div class="icon"></div>
      <div class="text">系统设置</div>
    </div>
    <div @click="goout" class="logout-box">
      <div class="icon"></div>
      <div class="text">退出登录</div>
    </div>
    <div class="bottom-line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chioceTab:1
    }
  },
  components: {

  },
  methods:{
    goout(){
      this.$router.push("/")
    },
    changeTab(num){
      this.chioceTab = num;
      let url = '';
      if(num === 1){
        url="/yncjcxxjb"
      }else if(num === 2){
        url="/zyncgl"
      }else{
        url="/zyncgl"
      }
      this.$router.push(url)
    }
  }
}
</script>

<style scoped lang="less">
  .comheader{
    position: relative;
    height: 80px;
    height:100%;
    overflow: hidden;
    background: url("../../assets/img/com_bg.png") center no-repeat;
    .bottom-line{
      position: absolute;
      height: 9px;
      width: 100%;
      background: url("../../assets/img/com_head_line.png") center no-repeat;
      top: 60px;
    }
    &-title{
      position: absolute;
      left: 0;
      top: 14px;
      width: 507px;
      height: 40px;
      line-height: 40px;
      font-size: 28px;
      font-weight: 400;
      color: #C3E3FE;
      background: url("../../assets/img/com_head_title.png") center no-repeat;
      font-size: 20px;
      font-family: YouSheBiaoTiHei;
      font-weight: 400;
      color: #C3E3FE;
      padding-left: 35px;
      box-sizing: border-box;
      cursor: pointer;
    }
    &-tab{
      justify-content: center;
      width: 490px;
      position: absolute;
      left: 635px;
      top: 30px;
      color: #ffffff;
      cursor: pointer;
      overflow: hidden;
      >div{
        float: left;
        text-align: center;
        width: 161px;
        &.tab-active{
          >.text{font-size: 16px;
            color: #FFFFFF;
            text-shadow: 0px 7px 3px #02274C;
            background: linear-gradient(0deg, rgba(0,169,255,0.83) 0%, rgba(232,254,255,0.83) 100%);
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          >.active{
            width: 161px;
            height: 29px;
            background: url("../../assets/img/tab_active.png") center no-repeat;
          } 
        }
        .text{
          font-size: 16px;
          font-weight: 400;
          color: #86B2D7;
        }
      }
    } 
  }
  button{
    position: absolute;
    right: 0;
    top: 10px;
  }
  .logout-box{
    position: absolute;
    right: 0;
    top: 13px;
    width: 150px;
    height: 38px;
    display: flex;
    align-items: center;
    background: url("../../assets/img/logout_bg.png") center no-repeat;
    >.icon{
      height: 16px;
      width: 16px;
      background: url("../../assets/img/logout-icon.png") center no-repeat;
      margin-left: 25px;
    }
    >.text{
      font-size: 15px;
      font-weight: 400;
      color: #99CEFB;
      margin-left: 7px;
    }
  }
  .sys-setting{
    position: absolute;
    right: 161px;
    top: 13px;
    width: 150px;
    height: 38px;
    display: flex;
    align-items: center;
    background: url("../../assets/img/setting.png") center no-repeat;
    >.icon{
      height: 16px;
      width: 16px;
      background: url("../../assets/img/logout-icon.png") center no-repeat;
      margin-left: 25px;
    }
    >.text{
      font-size: 15px;
      font-weight: 400;
      color: #99CEFB;
      margin-left: 12px;
    }
  }
  .date-box{
    height: 30px;
    position: absolute;
    right: 340px;
    top: 19px;
    display: flex;
    align-items: center;
    >.line{
      width: 2px;
      height: 20px;
      background: #EAC140;
      margin: 0 14px;
    }
    >.weather{
      font-size: 14px;
      font-weight: 400;
      color: #98BDFD;
      text-align: right;
    }
    >.date{
      font-size: 22px;
      font-weight: 400;
      color: #FFFFFF;
    }
  }
</style>
