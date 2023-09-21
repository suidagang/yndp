<template>
  <div class="container-box">
    <top class="top" />
    <bottom class="bottom" />
  </div>
</template>

<script>
import top from './components/top.vue'
import bottom from './components/bottom.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    top,
    bottom
  }
}
</script>

<style scoped lang="less">
  .container-box{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .top{
      position: absolute;
      left: 137px;
      top: 58px;
    }
    .bottom{
      position: absolute;
      left: 137px;
      top: 438px;
    }
  }
</style>
