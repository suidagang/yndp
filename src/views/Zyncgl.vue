<template>
	<div id="container">
		<div class="left-change-box">
			<div class="left-change-box-list" v-for="(item,index) in listData" :class="`num${index}`" :key="index" @click="changeItem(item,index)">{{item.name}}</div>
		</div>
		<div class="zyncgl-content">
			<router-view />
		</div>
	</div>
</template>

<script>
export default {
	name: "zyncgl",
	components:{
	},
	data(){
		return{
			listData:[{
				name:'牛舍管理',
				path:'/layout/zyncgl/nsgl'
			},{
				name:'防疫管理',
				active:false
			},{
				name:'牛场监控',
				path:'/layout/zyncgl/ncgl'
			},{
				name:'饲养管理',
				path:'/layout/zyncgl/sygl'
			},{
				name:'配种管理',
				active:false
			},{
				name:'粪污管理',
				active:false
			},{
				name:'人员管理',
				active:false
			},{
				name:"其他管理",
				active:false
			}]
		}
	},
	mounted() {},
	methods: {
		changeItem(item,index){
			this.listData.splice(index,1);
			this.listData.splice(3, 0, item);
			this.$router.push(item.path);
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
}
.left-change-box{
	position: absolute;
	left: 0;
	top: 122px;
	width: 349px;
	height: 851px;
	background: url("../assets/img/zyncgl/com_left_bg.png") center no-repeat;
	padding-top: 69px;
	box-sizing: border-box;
	overflow: hidden;
	>div{
		background: url("../assets/img/zyncgl/com_left_list_bg.png") right  no-repeat;
		font-family: Source Han Sans CN;
		text-align: right;
		padding-right: 23px;
		box-sizing: border-box;
		margin-bottom: 40px;
		cursor: pointer;
	}
	&-list{
		height: 64px;
		font-size: 16px;
		font-weight: 500;
		color: #AEC9FF;
		line-height: 64px;
		&.num0{
			width: 166px;
		}
		&.num1{
			width: 204px;
		}
		&.num2{
			width: 226px;
		}
		&.num3{
			width: 250px;
			height: 80px;
			line-height: 80px;
			text-align: right;
			padding-right: 23px;
			box-sizing: border-box;
			margin-bottom: 40px;
			cursor: pointer;
			background: url("../assets/img/zyncgl/com_left_list_active.png") right no-repeat;
			>span{
				font-size: 18px;
				font-family: Source Han Sans CN;
				font-weight: bold;
				color: #FFFFFF;
				background: linear-gradient(0deg, #FD9F53 0%, #FFFFFF 100%);
				background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}
		&.num4{
			width: 226px;
		}
		&.num5{
			width: 204px;
		}
		&.num6{
			width: 166px;
		}
		&.num7{
			width: 166px;
		}
	}
}
.zyncgl-content{
	width: 100%;
	height: 100%;
	margin-left: 350px;
	overflow: hidden;
}
</style>
