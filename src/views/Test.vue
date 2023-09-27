<template>
  <div class="box">
    <!-- <div class="table-box">
      <comTableOne :tableData="tableData">
        <el-table-column prop="date" label="编号"> </el-table-column>
        <el-table-column prop="name" label="访客类型"> </el-table-column>
        <el-table-column prop="address" label="时间"> </el-table-column>
        <el-table-column prop="d" label="是否授权"> </el-table-column>
      </comTableOne>
    </div> -->
    <!-- <div class="text">111111111</div> -->
    <!-- <comTable :tableData="tableData">
       <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </comTable> -->
    <!-- <video width="320" height="240" controls autoplay>
      <source src="/1.mp4" type="video/mp4" />
    </video> -->
    <div id="flip-list-demo" class="demo">
      <button @click="shuffle">Shuffle</button>
      <transition-group name="flip-list" tag="div">
        <li
          v-for="(item, index) in items"
          @click="changeItem(index,item)"
          style="color: #fff; fontsize: 22px; background: pink"
          v-bind:key="item.name"
        >
          {{ item.name }}
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import comTable from "@/components/comTable/index.vue";
import comTableOne from "@/components/comTable/indexOne.vue";
import _ from "lodash";
export default {
  components: {
    comTableOne,
    comTable,
  },
  data() {
    return {
      itemsOld: [
        {
          name: 1,
          path: 1,
        },
        {
          name: 2,
          path: 2,
        },
        {
          name: 3,
          path: 3,
        },
        {
          name: 4,
          path: 4,
        },
        {
          name: 5,
          path: 5,
        },
        {
          name: 6,
          path: 6,
        },
        {
          name: 7,
          path: 7,
        },
      ],
      items: [
        {
          name: 1,
          path: 1,
        },
        {
          name: 2,
          path: 2,
        },
        {
          name: 3,
          path: 3,
        },
        {
          name: 4,
          path: 4,
        },
        {
          name: 5,
          path: 5,
        },
        {
          name: 6,
          path: 6,
        },
        {
          name: 7,
          path: 7,
        },
      ],
      cellStyle: {
        fontSize: "14px",
        fontFamily: "Source Han Sans SC",
        fontWeight: 400,
        color: "#86B2D7",
        textAlign: "left",
        paddingLeft: "18px",
      },
      headerStyle: {
        fontSize: "14px",
        fontFamily: "Source Han Sans SC",
        fontWeight: "bold",
        color: "#B7C9E5",
        height: "40px",
        paddingLeft: "18px",
        backgroundColor: "rgba(0,0,0,0)",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "市普陀区",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区",
        },
      ],
    };
  },
  mounted() {
    // this.getAjax();
    // console.log(process.env.NODE_ENV,'--process.env.NODE_ENV')
    // console.log(this.$router.currentRoute.fullPath,'--currentRoute.fullPath')
    //  this.$message({
    //     showClose: true,
    //     message: "网络请求不存在",
    //     type: "error",
    //   });
  },
  methods: {
    changePos(arr, a, b) {
      console.log('a=',a,";b=",b)
      // console.log(arr,'-----');
       let arr_temp = [].concat(arr);
       arr_temp.splice(b, 0, arr_temp.splice(a, 1)[0]);
       return arr_temp;
    },
    getOldIndex(item){
      let resultIndex = 0;
      this.itemsOld.forEach((ele,index)=>{
        if(item.path === ele.path){
          resultIndex = index;
        }
      })
      return resultIndex;
    },
    changeItem(index,item) {
      const oldIndex = this.getOldIndex(item);
      if (index === 3) {
        return;
      }
      let listData = JSON.parse(JSON.stringify(this.itemsOld));
      this.items = this.changePos(listData, oldIndex, 3);
     
    },
    shuffle: function () {
      this.items = _.shuffle(this.items);
    },
    getAjax() {
      this.$get("/cattle/cattle/selfCattleSta")
        .then((res) => {
          console.log(res, "---res00---");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  background: url("../assets/img/com_bg.png") center no-repeat;
  overflow: hidden;
}
.table-box {
  margin: 50px auto;
  width: 500px;
  height: 500px;
}
.text {
  width: 334px;
  height: 30px;
  background: linear-gradient(90deg, #0b3070 0%, rgba(18, 43, 87, 0) 100%);
}
.demo {
  width: 50%;
  height: 500px;
  overflow: hidden;
  margin: 100px auto;
  li {
    margin-bottom: 10px;
    &:nth-of-type(1) {
      width: 200px;
    }
    &:nth-of-type(2) {
      width: 250px;
    }
    &:nth-of-type(3) {
      width: 300px;
    }
    &:nth-of-type(4) {
      width: 400px;
    }
    &:nth-of-type(5) {
      width: 300px;
    }
    &:nth-of-type(6) {
      width: 250px;
    }
    &:nth-of-type(7) {
      width: 200px;
    }
  }
}
.flip-list-move {
  transition: transform 1s;
}
</style>
