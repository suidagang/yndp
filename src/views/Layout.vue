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
import comHeader from '@/components/comHeader/index.vue';
export default {
	name: "zyncgl",
	components:{
		comHeader,
	},
	data(){
		return{
			listData:[{
				name:'牛舍管理',
				active:false
			},{
				name:'防疫管理',
				active:false
			},{
				name:'牛场监控',
				active:false
			},{
				name:'饲养管理',
				active:false
			},{
				name:'配种管理',
				active:false
			},{
				name:'粪污管理',
				active:false
			},{
				name:'人员管理',
				active:false
			}]
		}
	},
	mounted() {},
	methods: {
		changeItem(item,index){
			this.listData.splice(index,1);
			this.listData.splice(3, 0, item);
		}
	},
};
</script>
<style lang ="less" scoped>
#container {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
  display: flex;
  flex-direction: column;
  background: url("../assets/img/com_bg.png") center no-repeat;
  .sys-head{
    height: 80px;
    width: 100%;
  }
  .sys-content{
    flex: 1;
  }
}
</style>
