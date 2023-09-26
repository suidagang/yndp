<template>
  <div class="container">
    <div class="video-list">
      <div class="video-box">
        
        <div class="video-box-title">监控位置名称</div>
        <video width="476" height="269" controls autoplay>
          <source src="/1.mp4" type="video/mp4">
        </video>
      </div>
      <div class="video-box">
        <div class="video-box-title">监控位置名称</div>
      </div>
      <div class="video-box">
        <div class="video-box-title">监控位置名称</div>
      </div>
      <div class="video-box">
        <div class="video-box-title">监控位置名称</div>
      </div>
      <div class="video-box">
        <div class="video-box-title">监控位置名称</div>
      </div>
      <div class="video-box">
        <div class="video-box-title">监控位置名称</div>
      </div>
      <div class="video-box">
        <div class="video-box-title">监控位置名称</div>
      </div>
      <div class="video-box">
        <div class="video-box-title">监控位置名称</div>
      </div>
      <div class="video-box">
        <div class="video-box-title">监控位置名称</div>
      </div>
    </div>
    <div class="video-setting">
      <div class="img"></div>
      <div class="text">视频设置</div>
    </div>
    <div class="jietu">
      <div class="img"></div>
      <div class="text">截图</div>
    </div>
    <div class="jiankong">
      <div class="img"></div>
      <div class="text">监控报警</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .container{
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .video-list{
    margin-top: 20px;
    width: 1475px;
    height: 942px;
    overflow: hidden;
    background: url("../../assets/img/ncjk/rect.png") center no-repeat;
    display: flex;
    flex-wrap: wrap;
    padding: 22px 0 0 21px;
    box-sizing: border-box;
    .video-box{
      width: 476px;
      height: 297px;
      background: linear-gradient(0deg, #000000 0%, #333333 100%);
      overflow: hidden;
      &-title{
        width: 476px;
        height: 28px;
        background: #0E3369;
        text-align: center;
        line-height: 28px;
        font-size: 20px;
        font-family: YouSheBiaoTiHei;
        font-weight: 400;
        color: #86B2D7;
      }
    }
  }
  .video-setting{
    position: absolute;
    top: 27px;
    left: 1491px;
    font-size: 12px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #86B2D7;
    cursor: pointer;
    >.img{
      width: 50px;
      height: 51px;
      background: url("../../assets/img/ncjk/spsz.png") center no-repeat;
      margin-bottom: 8px;
    }
    >.text{
      text-align: center;
    }
  }
  .jietu{
    position: absolute;
    top: 121px;
    left: 1491px;
    font-size: 12px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #86B2D7;
    cursor: pointer;
    >.img{
      width: 50px;
      height: 51px;
      background: url("../../assets/img/ncjk/jt.png") center no-repeat;
      margin-bottom: 8px;
    }
    >.text{
      text-align: center;
    }
  }
  .jiankong{
    position: absolute;
    top: 215px;
    left: 1491px;
    font-size: 12px;
    font-family: Source Han Sans SC;
    font-weight: 400;
    color: #86B2D7;
    text-align: center;
    cursor: pointer;
    >.img{
      width: 50px;
      height: 51px;
      background: url("../../assets/img/ncjk/jkbj.png") center no-repeat;
      margin-bottom: 8px;
    }
    >.text{
      text-align: center;
    }
  }
</style>
