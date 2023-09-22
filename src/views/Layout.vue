<template>
  <div id="container">
    <div class="sys-head">
      <comHeader />
    </div>

    <div class="sys-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import comHeader from "@/components/comHeader/index.vue";
export default {
  name: "zyncgl",
  components: {
    comHeader,
  },
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
    changeItem(item, index) {
      this.listData.splice(index, 1);
      this.listData.splice(3, 0, item);
    },
  },
};
</script>
<style lang="less" scoped>
#container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: url("../assets/img/com_bg.png") center no-repeat;
  .sys-head {
    height: 80px;
    width: 100%;
  }
  .sys-content {
    flex: 1;
  }
}
</style>
