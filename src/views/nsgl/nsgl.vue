<template>
  <div class="container">
    <comList />
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
    color: #fff;
  }
</style>
