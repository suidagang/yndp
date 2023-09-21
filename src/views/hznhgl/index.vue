<template>
  <div class="container">
    <leftList />
    <div class="right-content">
      <leftOne class="left-one" /> 
      <leftTwo class="left-two" /> 
      <rightOne class="right-one" /> 
      <rightTwo class="right-two" /> 
      <rightThree class="right-three" /> 
    </div>
  </div>
</template>

<script>
import leftList from './components/leftList.vue'
import leftOne from './components/leftOne.vue'
import leftTwo from './components/leftTwo.vue'
import rightOne from './components/rightOne.vue'
import rightTwo from './components/rightTwo.vue'
import rightThree from './components/rightThree.vue'
export default {
  data() {
    return {

    }
  },
  components: {
    leftList,
    leftOne,
    leftTwo,
    rightOne,
    rightTwo,
    rightThree
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
      position: relative;
      height: 100%;
      flex: 1;
      .left-one{
        position: absolute;
        left: 38px;
        top: 30px;
      }
      .left-two{
        position: absolute;
        left: 38px;
        top: 347px;
      }
      .right-one{
        position: absolute;
        left: 611px;
        top: 30px;
      }
      .right-two{
        position: absolute;
        left: 611px;
        top: 437px;
      }
      .right-three{
        position: absolute;
        left: 611px;
        top: 805px;
      }
    }
  }
</style>
