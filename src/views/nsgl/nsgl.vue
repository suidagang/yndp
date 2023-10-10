<template>
  <div class="container">
    <comList class="top-one" :propData="propData.nfns" />
    <comList class="top-two" :propData="propData.ndns" />
    <comList class="bottom-one" :propData="propData.qnns" />
    <comList class="bottom-two" :propData="propData.cnns" />
  </div>
</template>

<script>
import comList from "./components/comList.vue";
import config from "@/http/config";
export default {
  data() {
    return {
      propData: {
        nfns: {
          title: "能繁牛舍",
          zlList: [],
          ztList: [],
        },
        ndns: {
          title: "牛犊牛舍",
          zlList: [],
          ztList: [],
        },
        qnns: {
          title: "青年牛舍",
          zlList: [],
          ztList: [],
        },
        cnns: {
          title: "成年牛舍",
          zlList: [],
          ztList: [],
        },
      },
    };
  },
  components: {
    comList,
  },
  created() {
    this.getAjax(1);
    this.getAjax(2);
    this.getAjax(4);
    this.getAjax(5);
  },
  methods: {
    // cattleType=1能繁2牛犊3育成4青年5成年
    getAjax(type) {
      const params = {
        cattleType: type,
      };
      //种类
      this.$get(config.selfSta, params).then((res) => {
        if (type === 1) {
          this.propData.nfns.zlList = res.data;
        } else if (type === 2) {
          this.propData.ndns.zlList = res.data;
        } else if (type === 4) {
          this.propData.qnns.zlList = res.data;
        } else if (type === 5) {
          this.propData.cnns.zlList = res.data;
        }
        // console.log(res, "自营牛场牛种类统计");
        // this.tableData = res.rows;
      });
      //状态
      this.$get(config.selfCattleSta, params).then((res) => {
        // console.log(res, "自营牛场牛zhuantai统计");
        if (type === 1) {
          this.propData.nfns.ztList = res.data;
        } else if (type === 2) {
          this.propData.ndns.ztList = res.data;
        } else if (type === 4) {
          this.propData.qnns.ztList = res.data;
        } else if (type === 5) {
          this.propData.cnns.ztList = res.data;
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
}
.top-one {
  position: absolute;
  left: 80px;
  top: 58px;
}
.top-two {
  position: absolute;
  left: 795px;
  top: 58px;
}
.bottom-one {
  position: absolute;
  left: 80px;
  top: 483px;
}
.bottom-two {
  position: absolute;
  left: 795px;
  top: 483px;
}
</style>
