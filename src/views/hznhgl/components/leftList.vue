<template>
  <div class="left-list">
    <div class="left-list-title">
      <div class="icon"></div>
      <div class="name">农户列表</div>
      
    </div>
    <div class="left-list-search">
      <div class="icon"></div>
      <input type="text" placeholder="输入农户信息">
      <div class="search-btn">搜索</div>
    </div>
    <div class="left-list-box" v-for="(item,index) in nhList" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nhList:["张三","李四","王五"]
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .left-list{
    width: 230px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 17px 0 0 17px;
    box-sizing: border-box;
    background: #0A1A37;
    border: 1px solid #003665;
    opacity: 0.7;
    &-title{
      display: flex;
      align-items: center;
      overflow: hidden;
      >.icon{
        width: 22px;
        height: 20px;
        background: url("../../../assets/img/hznhgl/nhhs.png") center no-repeat;
        margin-right: 9px;
      }
      >.name{
        font-size: 20px;
        font-weight: 400;
        color: #FFFFFF;
        text-shadow: 1px 2px 8px rgba(13,24,45,0.26);

        background: linear-gradient(0deg, #8BC7FF 0%, #FFFFFF 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    &-search{
      position: relative;
      margin-top: 20px;
      overflow: hidden;
      width: 192px;
      height: 30px;
      background: rgba(0,53,103,0.5);
      border-radius: 15px;
      >input{
        position: absolute;
        left: 30px;
        height: 30px;
        width: 100px;
        background: rgba(0,122,255,0.0);
        outline: none;
        font-size: 12px;
        border:none;
        color: #FFFFFF;
        &::placeholder {
          font-size: 12px;
          font-weight: 400;
          color: #A2D1FF;
        }
      }
      .icon{
        position: absolute;
        left: 12px;
        top: 9px;
        height: 13px;
        width: 13px;
        background: url("../../../assets/img/hznhgl/search.png") center no-repeat;
      }
      .search-btn{
        position: absolute;
        right: 0;
        width: 56px;
        height: 30px;
        background: rgba(21,93,175,0.6);
        border-radius: 15px;
        font-size: 13px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
      }
    }
    &-box{
      width: 189px;
      height: 40px;
      background: #021130;
      border: 1px solid #003665;
      margin-top: 15px;
      overflow: hidden;
      line-height: 40px;
      box-sizing: border-box;
      padding-left:19px;
      font-size: 14px;
      font-family: Source Han Sans SC;
      font-weight: 400;
      color: #FFFFFF;
    }
  }
</style>
