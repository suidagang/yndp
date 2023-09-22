<template>
  <div class="container-box">
    <topOne class="top-one" />
    <topTwo class="top-two" />
    <middle class="middle" />
    <bottom class="bottom" />
  </div>
</template>

<script>
import topOne from './components/topOne.vue'
import topTwo from './components/topTwo.vue'
import middle from './components/middle.vue'
import bottom from './components/bottom.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    topOne,
    topTwo,
    middle,
    bottom
  }
}
</script>

<style scoped lang="less">
  .container-box{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .top-one{
      position: absolute;
      left:0px;
      top: 58px;
    }
    .top-two{
      position: absolute;
      left: 1132px;
      top: 58px;
    }
    .middle{
      position: absolute;
      left: 0px;
      top: 508px;
    }
    .bottom{
      position: absolute;
      left: 0px;
      top: 691px;
    }
  }
</style>
