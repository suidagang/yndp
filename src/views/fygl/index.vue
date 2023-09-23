<template>
  <div class="container-box">
    <topOne class="top-one" />
    <topTwo class="top-two" />
    <bottomOne class="bottom-one" />
    <bottomTwo class="bottom-two" />
  </div>
</template>

<script>
import topOne from './components/topOne.vue'
import topTwo from './components/topTwo.vue'
import bottomOne from './components/bottomOne.vue'
import bottomTwo from './components/bottomTwo.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    topOne,
    topTwo,
    bottomOne,
    bottomTwo
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
      left:65px;
      top: 58px;
    }
    .top-two{
      position: absolute;
      left: 606px;
      top: 58px;
    }
    .bottom-one{
      position: absolute;
      left:65px;
      top: 551px;
    }
    .bottom-two{
      position: absolute;
      left: 606px;
      top: 551px;
    }
  }
</style>
