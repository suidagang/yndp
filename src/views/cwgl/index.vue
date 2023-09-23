<template>
  <div class="container-box">
    <topOne class="top-one" />
    <bottomOne class="bottom-one" />
    <bottomTwo class="bottom-one" />
  </div>
</template>

<script>
import topOne from './components/topOne.vue'
import bottomOne from './components/bottomOne.vue'
import bottomTwo from './components/bottomTwo.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    topOne,
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
      left: 110px;
      top: 26px;
    }
    .bottom-one{
      position: absolute;
      left: 110px;
      top: 778px;
    }
    .bottom-two{
      position: absolute;
      left: 1000px;
      top: 778px;
    }
  }
</style>
