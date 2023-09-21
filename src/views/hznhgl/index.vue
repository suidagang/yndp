<template>
  <div class="container">
    <leftList />
    <div class="right-content"></div>
  </div>
</template>

<script>
import leftList from './components/leftList.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    leftList
  }
}
</script>

<style scoped lang="less">
  .container{
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    .right-content{
      height: 100%;
      flex: 1;
    }
  }
</style>
