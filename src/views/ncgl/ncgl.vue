<template>
  <div class="container-box">
    <topOne class="top-one" />
    <topTwo class="top-two" />
    <bottomOne class="bottom-one" />
  </div>
</template>

<script>
import topOne from './components/topOne.vue'
import topTwo from './components/topTwo.vue'
import bottomOne from './components/bottomOne.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    topOne,
    topTwo,
    bottomOne
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
      left: 70px;
      top: 58px;
    }
    .top-two{
      position: absolute;
      left: 987px;
      top: 58px;
    }
    .bottom-one{
      position: absolute;
      left: 70px;
      top: 683px;
    }
  }
</style>
