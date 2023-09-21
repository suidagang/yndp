<template>
  <div class="container">
    <comList class="top-one" />
    <comList class="top-two" />
    <comList class="bottom-one" />
    <comList class="bottom-two" />
  </div>
</template>

<script>
import comList from './components/comList.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    comList
  }
}
</script>

<style scoped lang="less">
  .container{
    width: 100%;
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  .top-one{
    position: absolute;
    left: 80px;
    top:58px;
  }
  .top-two{
    position: absolute;
    left: 795px;
    top:58px;
  }
  .bottom-one{
    position: absolute;
    left: 80px;
    top:483px;
  }
  .bottom-two{
    position: absolute;
    left: 795px;
    top:483px;
  }
</style>
