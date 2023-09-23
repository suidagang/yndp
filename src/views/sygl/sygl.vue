<template>
  <div class="container">
    <topOne class="top-one" />
    <topTwo class="top-two" />
    <bottomOne class="bottom-one" />
    <bottomTwo class="bottom-two" />
  </div>
</template>

<script>
import topOne from "./components/topOne.vue";
import topTwo from "./components/topTwo.vue";
import bottomOne from "./components/bottomOne.vue";
import bottomTwo from "./components/bottomTwo.vue";
export default {
  data() {
    return {};
  },
  components: {
    topOne,
    topTwo,
    bottomOne,
    bottomTwo,
  },
};
</script>

<style scoped lang="less">
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .top-one {
    position: absolute;
    top: 58px;
    left: 70px;
  }
  .top-two {
    position: absolute;
    top: 58px;
    left: 752px;
  }
  .bottom-one {
    position: absolute;
    top: 509px;
    left: 70px;
  }
  .bottom-two {
    position: absolute;
    top: 509px;
    left: 752px;
  }
}
</style>
